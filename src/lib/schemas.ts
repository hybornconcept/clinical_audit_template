import { z } from 'zod';
import { facilityValuesTuple } from "$lib";
// Step 1: Patient Information
export const step1Schema = z.object({
  uniquePatientId: z.string().min(1, "Unique Patient ID is required"),
  sex: z.enum(["Male", "Female"]).nullable(),
  hIVRelatedDeath: z.enum(["Yes", "No"]).nullable(),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  facility: z.enum(facilityValuesTuple).describe("Please select a valid facility"),
  artStartDate: z.string().min(1, "ART start date is required"),
  lastPickupDate: z.string().min(1, "Last pickup date is required"),
  dateOfDeath: z.string().min(1, "Date of death is required"),
  dateOfDeathConfirmed: z.string().min(1, "Death confirmation is required"),
  deathInfoProvider: z.string().min(1, "Provider information is required"),
  deathInfoValidator: z.string().min(1, "Validator information is required"),
  causeOfDeath: z.string().min(1, "Cause of death is required")
});

// Step 2: Medical History
export const step2Schema = step1Schema.extend({
  comorbidConditions: z.string().min(1, "Comorbid conditions are required"),
  medicationsAndTreatments: z.string().min(1, "Medications and treatments are required"),
  primaryDiagnosis: z.string().min(1, "Primary diagnosis is required"),
  secondaryDiagnosis: z.string().min(1, "Secondary diagnosis is required")
});

// Step 3: Clinical Information
export const step3Schema = step2Schema.extend({
  symptomsPriorToDeath: z.string().min(1, "Symptoms prior to death are required"),
  symptomsDurationMonths: z.string().min(1, "Duration of symptoms is required"),
  diagnosticTestsAndResults: z.string().min(1, "Diagnostic tests and results are required"),
  treatmentPriorToDeath: z.string().min(1, "Treatment prior to death is required"),
  treatmentLocations: z.string().min(1, "Treatment locations are required"),
  treatmentResponse: z.string().min(1, "Treatment response is required"),
  locationOfDeath: z.string().min(1, "Location of death is required")
});

// Step 4: Social and Environmental
export const step4Schema = step3Schema.extend({
  supportSystem: z.string().min(1, "Support system is required"),
  socioeconomicStatus: z.enum(["low", "medium", "high"]),
  livingConditions: z.string().min(1, "Living conditions are required")
});

// Final Step: Reviewer Information
export const personalInfoSchema = step4Schema.extend({
  reviewerName: z.string().min(1, "Reviewer name is required"),
  confirmReview: z.boolean(),

});

export type PersonalInfoSchema = typeof personalInfoSchema;



