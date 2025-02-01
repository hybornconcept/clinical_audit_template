import { f as fail } from "../../chunks/index2.js";
import { n as parseRequest, o as mergeDefaults, m as mapErrors, r as replaceInvalidDefaults, z as zod, l as personalInfoSchema } from "../../chunks/schemas.js";
import "ts-deepmerge";
import "memoize-weak";
import PocketBase from "pocketbase";
async function superValidate(data, adapter, options) {
  if (data && "superFormValidationLibrary" in data) {
    options = adapter;
    adapter = data;
    data = void 0;
  }
  const validator = adapter;
  const defaults = options?.defaults ?? validator.defaults;
  const jsonSchema = validator.jsonSchema;
  const parsed = await parseRequest(data, jsonSchema, options);
  const addErrors = options?.errors ?? (options?.strict ? true : !!parsed.data);
  const parsedData = options?.strict ? parsed.data ?? {} : mergeDefaults(parsed.data, defaults);
  let status;
  if (!!parsed.data || addErrors) {
    status = await /* @__PURE__ */ validator.validate(parsedData);
  } else {
    status = { success: false, issues: [] };
  }
  const valid = status.success;
  const errors = valid || !addErrors ? {} : mapErrors(status.issues, validator.shape);
  const dataWithDefaults = valid ? status.data : replaceInvalidDefaults(options?.strict ? mergeDefaults(parsedData, defaults) : parsedData, defaults, jsonSchema, status.issues, options?.preprocessed);
  let outputData;
  if (jsonSchema.additionalProperties === false) {
    outputData = {};
    for (const key of Object.keys(jsonSchema.properties ?? {})) {
      if (key in dataWithDefaults)
        outputData[key] = dataWithDefaults[key];
    }
  } else {
    outputData = dataWithDefaults;
  }
  const output = {
    id: parsed.id ?? options?.id ?? validator.id,
    valid,
    posted: parsed.posted,
    errors,
    data: outputData
  };
  if (!parsed.posted) {
    output.constraints = validator.constraints;
    if (Object.keys(validator.shape).length) {
      output.shape = validator.shape;
    }
  }
  return output;
}
function message(form, message2, options) {
  if (options?.status && options.status >= 400) {
    form.valid = false;
  }
  form.message = message2;
  const remove = options?.removeFiles !== false;
  const output = remove ? withFiles({ form }) : { form };
  return form.valid ? output : fail(options?.status ?? 400, output);
}
function withFiles(obj) {
  if (typeof obj !== "object")
    return obj;
  for (const key in obj) {
    const value = obj[key];
    if (value instanceof File)
      delete obj[key];
    else if (value && typeof value === "object")
      withFiles(value);
  }
  return obj;
}
const pb = new PocketBase("https://clinical-audit.pockethost.io");
async function validateAuditData(data) {
  try {
    return true;
  } catch (error) {
    console.error("Validation error:", error);
    return false;
  }
}
const load = async () => {
  const form = await superValidate(zod(personalInfoSchema));
  return { form };
};
const actions = {
  create: async ({ request }) => {
    const form = await superValidate(request, zod(personalInfoSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      const isValid = await validateAuditData(form.data);
      if (!isValid) {
        return message(form, "Invalid audit data. Please check your entries.", { status: 400 });
      }
      const formData = Object.entries(form.data).reduce((acc, [key, value]) => {
        if (!acc[key]) acc[key] = value;
        return acc;
      }, {});
      await pb.collection("template").create({
        ...formData,
        dateOfReview: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
      });
      return message(form, "Clinical audit submitted successfully!");
    } catch (error) {
      const { status } = error;
      console.error("Failed to save audit:", status);
      return message(form, "Failed to save audit data. Please try again.", { status: 500 });
    }
  }
};
export {
  actions,
  load
};
