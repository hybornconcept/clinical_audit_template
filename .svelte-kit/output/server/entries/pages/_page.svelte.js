import { D as DEV, Q as spread_props, S as slot, T as sanitize_props, V as once, N as push, X as spread_attributes, P as pop, W as bind_props, Y as copy_payload, Z as assign_payload, a0 as ensure_array_like, $ as escape_html, a1 as attr, _ as getContext, a2 as store_get, a3 as unsubscribe_stores, a4 as store_mutate } from "../../chunks/index.js";
import "clsx";
import { b as boxAutoReset, g as getNextMatch, u as useDOMTypeahead, n as next, p as prev, f as forward, a as backward, P as Popper_layer_force_mount, c as Popper_layer, M as Mounted, F as Floating_layer, d as Floating_layer_anchor, C as Chevron_down, e as Card, h as Card_header, i as Card_title, j as Card_description, k as Card_content, I as Input } from "../../chunks/input.js";
import { I as Icon, u as useRefById, E as ENTER, S as SPACE, i as getAriaChecked, j as getAriaRequired, k as getDataDisabled, s as styleToString, l as srOnlyStyles, C as Context, m as mergeProps, b as useId, c as box, A as ARROW_UP, o as ARROW_DOWN, p as afterTick, q as TAB, r as PAGE_DOWN, t as PAGE_UP, H as HOME, v as END, g as getDataOpenClosed, w as getDisabled, x as getRequired, n as noop, y as getAriaHidden, f as cn, h as Portal, B as Button, z as onDestroy, G as tick } from "../../chunks/scroll-lock.js";
import "style-to-object";
import "ts-deepmerge";
import "memoize-weak";
import { t as traversePath, s as splitPath, S as SuperFormError, a as shapeFromObject, c as clone$1, u as updateErrors, b as comparePaths, d as setPaths, p as pathExists, m as mapErrors, e as traversePaths, f as mergePath, g as flattenErrors, z as zod, h as step1Schema, i as step2Schema, j as step3Schema, k as step4Schema, l as personalInfoSchema } from "../../chunks/schemas.js";
import { a as app, i as invalidateAll, b as applyAction } from "../../chunks/client.js";
import { k as derived, l as get, w as writable, o as readonly } from "../../chunks/exports.js";
import * as devalue from "devalue";
import { stringify } from "devalue";
import "../../chunks/index2.js";
import { s as sexOptions, a as socioeconomicOptions, f as facilityOptions } from "../../chunks/index3.js";
const browser = DEV;
function Calendar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 2v4" }],
    ["path", { "d": "M16 2v4" }],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    ["path", { "d": "M3 10h18" }]
  ];
  Icon($$payload, spread_props([
    { name: "calendar" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$payload, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Chevron_up($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m18 15-6-6-6 6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-up" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Minus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$payload, spread_props([
    { name: "minus" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {});
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
}
class Previous {
  #previous = void 0;
  #curr;
  constructor(getter) {
  }
  get current() {
    return this.#previous;
  }
}
const CHECKBOX_ROOT_ATTR = "data-checkbox-root";
class CheckboxRootState {
  #id;
  #ref;
  #type;
  checked;
  #disabled;
  #required;
  #name;
  value;
  indeterminate;
  group = null;
  #trueName = once(() => {
    if (this.group && this.group.name.current) {
      return this.group.name.current;
    } else {
      return this.#name.current;
    }
  });
  get trueName() {
    return this.#trueName();
  }
  #trueRequired = once(() => {
    if (this.group && this.group.required.current) {
      return true;
    }
    return this.#required.current;
  });
  get trueRequired() {
    return this.#trueRequired();
  }
  #trueDisabled = once(() => {
    if (this.group && this.group.disabled.current) {
      return true;
    }
    return this.#disabled.current;
  });
  get trueDisabled() {
    return this.#trueDisabled();
  }
  constructor(props, group = null) {
    this.checked = props.checked;
    this.#disabled = props.disabled;
    this.#required = props.required;
    this.#name = props.name;
    this.value = props.value;
    this.#ref = props.ref;
    this.#id = props.id;
    this.indeterminate = props.indeterminate;
    this.#type = props.type;
    this.group = group;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    useRefById({ id: this.#id, ref: this.#ref });
  }
  onkeydown(e) {
    if (this.#disabled.current) return;
    if (e.key === ENTER) e.preventDefault();
    if (e.key === SPACE) {
      e.preventDefault();
      this.#toggle();
    }
  }
  #toggle() {
    if (this.indeterminate.current) {
      this.indeterminate.current = false;
      this.checked.current = true;
    } else {
      this.checked.current = !this.checked.current;
    }
  }
  onclick(_) {
    if (this.#disabled.current) return;
    this.#toggle();
  }
  #snippetProps = once(() => ({
    checked: this.checked.current,
    indeterminate: this.indeterminate.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "checkbox",
    type: this.#type.current,
    disabled: this.trueDisabled,
    "aria-checked": getAriaChecked(this.checked.current, this.indeterminate.current),
    "aria-required": getAriaRequired(this.trueRequired),
    "data-disabled": getDataDisabled(this.trueDisabled),
    "data-state": getCheckboxDataState(this.checked.current, this.indeterminate.current),
    [CHECKBOX_ROOT_ATTR]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
class CheckboxInputState {
  root;
  #trueChecked = once(() => {
    if (this.root.group) {
      if (this.root.value.current !== void 0 && this.root.group.value.current.includes(this.root.value.current)) {
        return true;
      }
      return false;
    }
    return this.root.checked.current;
  });
  get trueChecked() {
    return this.#trueChecked();
  }
  #shouldRender = once(() => Boolean(this.root.trueName));
  get shouldRender() {
    return this.#shouldRender();
  }
  constructor(root) {
    this.root = root;
  }
  #props = once(() => ({
    type: "checkbox",
    checked: this.root.checked.current === true,
    disabled: this.root.trueDisabled,
    required: this.root.trueRequired,
    name: this.root.trueName,
    value: this.root.value.current,
    "aria-hidden": "true",
    style: styleToString(srOnlyStyles)
  }));
  get props() {
    return this.#props();
  }
}
function getCheckboxDataState(checked, indeterminate) {
  if (indeterminate) return "indeterminate";
  return checked ? "checked" : "unchecked";
}
const CheckboxGroupContext = new Context("Checkbox.Group");
const CheckboxRootContext = new Context("Checkbox.Root");
function useCheckboxRoot(props) {
  return CheckboxRootContext.set(new CheckboxRootState(props, CheckboxGroupContext.getOr(null)));
}
function useCheckboxInput() {
  return new CheckboxInputState(CheckboxRootContext.get());
}
function Visually_hidden($$payload, $$props) {
  push();
  let {
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const style = {
    position: "absolute",
    border: 0,
    width: "1px",
    display: "inline-block",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  };
  const mergedProps = mergeProps(restProps, { style });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></span>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Checkbox_input($$payload, $$props) {
  push();
  const inputState = useCheckboxInput();
  if (inputState.shouldRender) {
    $$payload.out += "<!--[-->";
    Visually_hidden($$payload, {
      "aria-hidden": "true",
      children: ($$payload2) => {
        $$payload2.out += `<input${spread_attributes({
          ...inputState.props,
          type: "checkbox",
          style: "display: none !important;"
        })}>`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Checkbox$1($$payload, $$props) {
  push();
  let {
    checked = false,
    ref = null,
    onCheckedChange,
    children,
    disabled = false,
    required = false,
    name = void 0,
    value = "on",
    id = useId(),
    indeterminate = false,
    onIndeterminateChange,
    child,
    type = "button",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = useCheckboxRoot({
    checked: box.with(() => checked, (v) => {
      checked = v;
      onCheckedChange?.(v);
    }),
    disabled: box.with(() => disabled ?? false),
    required: box.with(() => required),
    name: box.with(() => name),
    value: box.with(() => value),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    indeterminate: box.with(() => indeterminate, (v) => {
      indeterminate = v;
      onIndeterminateChange?.(v);
    }),
    type: box.with(() => type)
  });
  const mergedProps = mergeProps({ ...restProps }, rootState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps, ...rootState.snippetProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload, rootState.snippetProps);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]--> `;
  Checkbox_input($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { checked, ref, indeterminate });
  pop();
}
function useDataTypeahead(opts) {
  const search = boxAutoReset("", 1e3);
  function handleTypeaheadSearch(key, candidateValues) {
    if (!opts.enabled) return;
    if (!candidateValues.length) return;
    search.current = search.current + key;
    const currentItem = opts.getCurrentItem();
    const currentMatch = candidateValues.find((item) => item === currentItem) ?? "";
    const values = candidateValues.map((item) => item ?? "");
    const nextMatch = getNextMatch(values, search.current, currentMatch);
    const newItem = candidateValues.find((item) => item === nextMatch);
    if (newItem) {
      opts.onMatch(newItem);
    }
    return newItem;
  }
  function resetTypeahead() {
    search.current = "";
  }
  return {
    search,
    handleTypeaheadSearch,
    resetTypeahead
  };
}
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
class SelectBaseRootState {
  disabled;
  required;
  name;
  loop;
  open;
  scrollAlignment;
  items;
  allowDeselect;
  touchedInput = false;
  inputValue = "";
  inputNode = null;
  contentNode = null;
  triggerNode = null;
  valueId = "";
  highlightedNode = null;
  #highlightedValue = once(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-value");
  });
  get highlightedValue() {
    return this.#highlightedValue();
  }
  #highlightedId = once(() => {
    if (!this.highlightedNode) return void 0;
    return this.highlightedNode.id;
  });
  get highlightedId() {
    return this.#highlightedId();
  }
  #highlightedLabel = once(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-label");
  });
  get highlightedLabel() {
    return this.#highlightedLabel();
  }
  isUsingKeyboard = false;
  isCombobox = false;
  bitsAttrs;
  triggerPointerDownPos = { x: 0, y: 0 };
  constructor(props) {
    this.disabled = props.disabled;
    this.required = props.required;
    this.name = props.name;
    this.loop = props.loop;
    this.open = props.open;
    this.scrollAlignment = props.scrollAlignment;
    this.isCombobox = props.isCombobox;
    this.items = props.items;
    this.allowDeselect = props.allowDeselect;
    this.bitsAttrs = getSelectBitsAttrs(this);
  }
  setHighlightedNode(node) {
    this.highlightedNode = node;
    if (node) {
      if (this.isUsingKeyboard) {
        node.scrollIntoView({ block: "nearest" });
      }
    }
  }
  getCandidateNodes() {
    const node = this.contentNode;
    if (!node) return [];
    const nodes = Array.from(node.querySelectorAll(`[${this.bitsAttrs.item}]:not([data-disabled])`));
    return nodes;
  }
  setHighlightedToFirstCandidate() {
    this.setHighlightedNode(null);
    const candidateNodes = this.getCandidateNodes();
    if (!candidateNodes.length) return;
    this.setHighlightedNode(candidateNodes[0]);
  }
  getNodeByValue(value) {
    const candidateNodes = this.getCandidateNodes();
    return candidateNodes.find((node) => node.dataset.value === value) ?? null;
  }
  setOpen(open) {
    this.open.current = open;
  }
  toggleOpen() {
    this.open.current = !this.open.current;
  }
  handleOpen() {
    this.setOpen(true);
  }
  handleClose() {
    this.setHighlightedNode(null);
    this.setOpen(false);
  }
  toggleMenu() {
    this.toggleOpen();
  }
}
class SelectSingleRootState extends SelectBaseRootState {
  value;
  isMulti = false;
  #hasValue = once(() => this.value.current !== "");
  get hasValue() {
    return this.#hasValue();
  }
  #currentLabel = once(() => {
    if (!this.items.current.length) return "";
    const match = this.items.current.find((item) => item.value === this.value.current)?.label;
    return match ?? "";
  });
  get currentLabel() {
    return this.#currentLabel();
  }
  #candidateLabels = once(() => {
    if (!this.items.current.length) return [];
    const filteredItems = this.items.current.filter((item) => !item.disabled);
    return filteredItems.map((item) => item.label);
  });
  get candidateLabels() {
    return this.#candidateLabels();
  }
  #dataTypeaheadEnabled = once(() => {
    if (this.isMulti) return false;
    if (this.items.current.length === 0) return false;
    return true;
  });
  get dataTypeaheadEnabled() {
    return this.#dataTypeaheadEnabled();
  }
  constructor(props) {
    super(props);
    this.value = props.value;
  }
  includesItem(itemValue) {
    return this.value.current === itemValue;
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    this.value.current = this.includesItem(itemValue) ? "" : itemValue;
    this.inputValue = itemLabel;
  }
  setInitialHighlightedNode() {
    if (this.highlightedNode && document.contains(this.highlightedNode)) return;
    if (this.value.current !== "") {
      const node = this.getNodeByValue(this.value.current);
      if (node) {
        this.setHighlightedNode(node);
        return;
      }
    }
    const firstCandidate = this.getCandidateNodes()[0];
    if (!firstCandidate) return;
    this.setHighlightedNode(firstCandidate);
  }
}
class SelectMultipleRootState extends SelectBaseRootState {
  value;
  isMulti = true;
  #hasValue = once(() => this.value.current.length > 0);
  get hasValue() {
    return this.#hasValue();
  }
  constructor(props) {
    super(props);
    this.value = props.value;
  }
  includesItem(itemValue) {
    return this.value.current.includes(itemValue);
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    if (this.includesItem(itemValue)) {
      this.value.current = this.value.current.filter((v) => v !== itemValue);
    } else {
      this.value.current = [...this.value.current, itemValue];
    }
    this.inputValue = itemLabel;
  }
  setInitialHighlightedNode() {
    if (this.highlightedNode) return;
    if (this.value.current.length && this.value.current[0] !== "") {
      const node = this.getNodeByValue(this.value.current[0]);
      if (node) {
        this.setHighlightedNode(node);
        return;
      }
    }
    const firstCandidate = this.getCandidateNodes()[0];
    if (!firstCandidate) return;
    this.setHighlightedNode(firstCandidate);
  }
}
class SelectTriggerState {
  #id;
  #ref;
  root;
  #domTypeahead;
  #dataTypeahead;
  constructor(props, root) {
    this.root = root;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (node) => {
        this.root.triggerNode = node;
      }
    });
    this.#domTypeahead = useDOMTypeahead({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (node) => {
        this.root.setHighlightedNode(node);
      }
    });
    this.#dataTypeahead = useDataTypeahead({
      getCurrentItem: () => {
        if (this.root.isMulti) return "";
        return this.root.currentLabel;
      },
      onMatch: (label) => {
        if (this.root.isMulti) return;
        if (!this.root.items.current) return;
        const matchedItem = this.root.items.current.find((item) => item.label === label);
        if (!matchedItem) return;
        this.root.value.current = matchedItem.value;
      },
      enabled: !this.root.isMulti && this.root.dataTypeaheadEnabled
    });
    this.onkeydown = this.onkeydown.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  #handleOpen() {
    this.root.open.current = true;
    this.#dataTypeahead.resetTypeahead();
    this.#domTypeahead.resetTypeahead();
  }
  #handlePointerOpen(e) {
    this.#handleOpen();
    this.root.triggerPointerDownPos = {
      x: Math.round(e.pageX),
      y: Math.round(e.pageY)
    };
  }
  onkeydown(e) {
    this.root.isUsingKeyboard = true;
    if (e.key === ARROW_UP || e.key === ARROW_DOWN) e.preventDefault();
    if (!this.root.open.current) {
      if (e.key === ENTER || e.key === SPACE || e.key === ARROW_DOWN || e.key === ARROW_UP) {
        e.preventDefault();
        this.root.handleOpen();
      } else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#dataTypeahead.handleTypeaheadSearch(e.key, this.root.candidateLabels);
        return;
      }
      afterTick(() => {
        if (this.root.hasValue) return;
        const candidateNodes2 = this.root.getCandidateNodes();
        if (!candidateNodes2.length) return;
        if (e.key === ARROW_DOWN) {
          const firstCandidate = candidateNodes2[0];
          this.root.setHighlightedNode(firstCandidate);
        } else if (e.key === ARROW_UP) {
          const lastCandidate = candidateNodes2[candidateNodes2.length - 1];
          this.root.setHighlightedNode(lastCandidate);
        }
      });
      return;
    }
    if (e.key === TAB) {
      this.root.handleClose();
      return;
    }
    if ((e.key === ENTER || e.key === SPACE) && !e.isComposing) {
      e.preventDefault();
      const highlightedValue = this.root.highlightedValue;
      const isCurrentSelectedValue = highlightedValue === this.root.value.current;
      if (!this.root.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
        this.root.handleClose();
        return;
      }
      if (highlightedValue !== null) {
        this.root.toggleItem(highlightedValue, this.root.highlightedLabel ?? void 0);
      }
      if (!this.root.isMulti && !isCurrentSelectedValue) {
        this.root.handleClose();
      }
    }
    if (e.key === ARROW_UP && e.altKey) {
      this.root.handleClose();
    }
    if (FIRST_LAST_KEYS.includes(e.key)) {
      e.preventDefault();
      const candidateNodes2 = this.root.getCandidateNodes();
      const currHighlightedNode = this.root.highlightedNode;
      const currIndex = currHighlightedNode ? candidateNodes2.indexOf(currHighlightedNode) : -1;
      const loop = this.root.loop.current;
      let nextItem;
      if (e.key === ARROW_DOWN) {
        nextItem = next(candidateNodes2, currIndex, loop);
      } else if (e.key === ARROW_UP) {
        nextItem = prev(candidateNodes2, currIndex, loop);
      } else if (e.key === PAGE_DOWN) {
        nextItem = forward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === PAGE_UP) {
        nextItem = backward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === HOME) {
        nextItem = candidateNodes2[0];
      } else if (e.key === END) {
        nextItem = candidateNodes2[candidateNodes2.length - 1];
      }
      if (!nextItem) return;
      this.root.setHighlightedNode(nextItem);
      return;
    }
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    if (e.code === "Space") return;
    const candidateNodes = this.root.getCandidateNodes();
    if (e.key === TAB) return;
    if (!isModifierKey && isCharacterKey) {
      this.#domTypeahead.handleTypeaheadSearch(e.key, candidateNodes);
      return;
    }
    if (!this.root.highlightedNode) {
      this.root.setHighlightedToFirstCandidate();
    }
  }
  onclick(e) {
    const currTarget = e.currentTarget;
    currTarget.focus();
  }
  /**
   * `pointerdown` fires before the `focus` event, so we can prevent the default
   * behavior of focusing the button and keep focus on the input.
   */
  onpointerdown = (e) => {
    if (this.root.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    const target = e.target;
    if (target?.hasPointerCapture(e.pointerId)) {
      target?.releasePointerCapture(e.pointerId);
    }
    if (e.button === 0 && e.ctrlKey === false) {
      if (this.root.open.current === false) {
        this.#handlePointerOpen(e);
        e.preventDefault();
      } else {
        this.root.handleClose();
      }
    }
  };
  onpointerup = (e) => {
    e.preventDefault();
    if (e.pointerType === "touch") {
      this.#handlePointerOpen(e);
    }
  };
  #props = once(() => ({
    id: this.#id.current,
    disabled: this.root.disabled.current ? true : void 0,
    "aria-haspopup": "listbox",
    "data-state": getDataOpenClosed(this.root.open.current),
    "data-disabled": getDataDisabled(this.root.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.bitsAttrs.trigger]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup
  }));
  get props() {
    return this.#props();
  }
}
class SelectContentState {
  id;
  ref;
  viewportNode = null;
  root;
  isPositioned = false;
  constructor(props, root) {
    this.root = root;
    this.id = props.id;
    this.ref = props.ref;
    useRefById({
      id: this.id,
      ref: this.ref,
      onRefChange: (node) => {
        this.root.contentNode = node;
      },
      deps: () => this.root.open.current
    });
    this.onpointermove = this.onpointermove.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
  }
  onpointermove(_) {
    this.root.isUsingKeyboard = false;
  }
  #styles = once(() => {
    if (this.root.isCombobox) {
      return {
        "--bits-combobox-content-transform-origin": "var(--bits-floating-transform-origin)",
        "--bits-combobox-content-available-width": "var(--bits-floating-available-width)",
        "--bits-combobox-content-available-height": "var(--bits-floating-available-height)",
        "--bits-combobox-anchor-width": "var(--bits-floating-anchor-width)",
        "--bits-combobox-anchor-height": "var(--bits-floating-anchor-height)"
      };
    } else {
      return {
        "--bits-select-content-transform-origin": "var(--bits-floating-transform-origin)",
        "--bits-select-content-available-width": "var(--bits-floating-available-width)",
        "--bits-select-content-available-height": "var(--bits-floating-available-height)",
        "--bits-select-anchor-width": "var(--bits-floating-anchor-width)",
        "--bits-select-anchor-height": "var(--bits-floating-anchor-height)"
      };
    }
  });
  handleInteractOutside(e) {
    if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
      e.preventDefault();
    }
  }
  #snippetProps = once(() => ({ open: this.root.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.id.current,
    role: "listbox",
    "data-state": getDataOpenClosed(this.root.open.current),
    [this.root.bitsAttrs.content]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...this.#styles()
    },
    onpointermove: this.onpointermove
  }));
  get props() {
    return this.#props();
  }
}
class SelectItemState {
  #id;
  #ref;
  root;
  value;
  label;
  onHighlight;
  onUnhighlight;
  disabled;
  #isSelected = once(() => this.root.includesItem(this.value.current));
  get isSelected() {
    return this.#isSelected();
  }
  #isHighlighted = once(() => this.root.highlightedValue === this.value.current);
  get isHighlighted() {
    return this.#isHighlighted();
  }
  prevHighlighted = new Previous(() => this.isHighlighted);
  textId = "";
  mounted = false;
  constructor(props, root) {
    this.root = root;
    this.value = props.value;
    this.disabled = props.disabled;
    this.label = props.label;
    this.onHighlight = props.onHighlight;
    this.onUnhighlight = props.onUnhighlight;
    this.#id = props.id;
    this.#ref = props.ref;
    useRefById({ id: this.#id, ref: this.#ref });
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
  }
  #snippetProps = once(() => ({
    selected: this.isSelected,
    highlighted: this.isHighlighted
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  onpointerdown(e) {
    e.preventDefault();
  }
  /**
   * Using `pointerup` instead of `click` allows power users to pointerdown
   * the trigger, then release pointerup on an item to select it vs having to do
   * multiple clicks.
   */
  onpointerup(e) {
    if (e.defaultPrevented) return;
    e.preventDefault();
    if (this.disabled.current) return;
    const isCurrentSelectedValue = this.value.current === this.root.value.current;
    if (!this.root.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
      this.root.handleClose();
      return;
    }
    this.root.toggleItem(this.value.current, this.label.current);
    if (!this.root.isMulti && !isCurrentSelectedValue) {
      this.root.handleClose();
    }
  }
  onpointermove(_) {
    if (this.root.highlightedNode !== this.#ref.current) {
      this.root.setHighlightedNode(this.#ref.current);
    }
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.value.current) ? "true" : void 0,
    "data-value": this.value.current,
    "data-disabled": getDataDisabled(this.disabled.current),
    "data-highlighted": this.root.highlightedValue === this.value.current ? "" : void 0,
    "data-selected": this.root.includesItem(this.value.current) ? "" : void 0,
    "data-label": this.label.current,
    [this.root.bitsAttrs.item]: "",
    onpointermove: this.onpointermove,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup
  }));
  get props() {
    return this.#props();
  }
}
class SelectHiddenInputState {
  #value;
  root;
  #shouldRender = once(() => this.root.name.current !== "");
  get shouldRender() {
    return this.#shouldRender();
  }
  constructor(props, root) {
    this.root = root;
    this.#value = props.value;
    this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault();
    if (!this.root.isCombobox) {
      this.root.triggerNode?.focus();
    } else {
      this.root.inputNode?.focus();
    }
  }
  #props = once(() => ({
    disabled: getDisabled(this.root.disabled.current),
    required: getRequired(this.root.required.current),
    name: this.root.name.current,
    value: this.#value.current,
    style: styleToString(srOnlyStyles),
    tabindex: -1,
    onfocus: this.onfocus
  }));
  get props() {
    return this.#props();
  }
}
class SelectViewportState {
  #id;
  #ref;
  root;
  content;
  prevScrollTop = 0;
  constructor(props, content) {
    this.#id = props.id;
    this.#ref = props.ref;
    this.content = content;
    this.root = content.root;
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (node) => {
        this.content.viewportNode = node;
      },
      deps: () => this.root.open.current
    });
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "presentation",
    [this.root.bitsAttrs.viewport]: "",
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto"
    }
  }));
  get props() {
    return this.#props();
  }
}
class SelectScrollButtonImplState {
  id;
  ref;
  content;
  root;
  autoScrollTimer = null;
  onAutoScroll = noop;
  mounted;
  constructor(props, content) {
    this.ref = props.ref;
    this.id = props.id;
    this.mounted = props.mounted;
    this.content = content;
    this.root = content.root;
    useRefById({
      id: this.id,
      ref: this.ref,
      deps: () => this.mounted.current
    });
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
  }
  clearAutoScrollTimer() {
    if (this.autoScrollTimer === null) return;
    window.clearInterval(this.autoScrollTimer);
    this.autoScrollTimer = null;
  }
  onpointerdown(_) {
    if (this.autoScrollTimer !== null) return;
    this.autoScrollTimer = window.setInterval(
      () => {
        this.onAutoScroll();
      },
      50
    );
  }
  onpointermove(_) {
    if (this.autoScrollTimer !== null) return;
    this.autoScrollTimer = window.setInterval(
      () => {
        this.onAutoScroll();
      },
      50
    );
  }
  onpointerleave(_) {
    this.clearAutoScrollTimer();
  }
  #props = once(() => ({
    id: this.id.current,
    "aria-hidden": getAriaHidden(true),
    style: { flexShrink: 0 },
    onpointerdown: this.onpointerdown,
    onpointermove: this.onpointermove,
    onpointerleave: this.onpointerleave
  }));
  get props() {
    return this.#props();
  }
}
class SelectScrollDownButtonState {
  state;
  content;
  root;
  canScrollDown = false;
  constructor(state) {
    this.state = state;
    this.content = state.content;
    this.root = state.root;
    this.state.onAutoScroll = this.handleAutoScroll;
  }
  handleAutoScroll = () => {
    afterTick(() => {
      const viewport = this.content.viewportNode;
      const selectedItem = this.root.highlightedNode;
      if (!viewport || !selectedItem) return;
      viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
    });
  };
  #props = once(() => ({
    ...this.state.props,
    [this.root.bitsAttrs["scroll-down-button"]]: ""
  }));
  get props() {
    return this.#props();
  }
}
class SelectScrollUpButtonState {
  state;
  content;
  root;
  canScrollUp = false;
  constructor(state) {
    this.state = state;
    this.content = state.content;
    this.root = state.root;
    this.state.onAutoScroll = this.handleAutoScroll;
  }
  handleAutoScroll = () => {
    afterTick(() => {
      const viewport = this.content.viewportNode;
      const selectedItem = this.root.highlightedNode;
      if (!viewport || !selectedItem) return;
      viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
    });
  };
  #props = once(() => ({
    ...this.state.props,
    [this.root.bitsAttrs["scroll-up-button"]]: ""
  }));
  get props() {
    return this.#props();
  }
}
const SelectRootContext = new Context("Select.Root | Combobox.Root");
const SelectContentContext = new Context("Select.Content | Combobox.Content");
function useSelectRoot(props) {
  const { type, ...rest } = props;
  const rootState = type === "single" ? new SelectSingleRootState(rest) : new SelectMultipleRootState(rest);
  return SelectRootContext.set(rootState);
}
function useSelectContent(props) {
  return SelectContentContext.set(new SelectContentState(props, SelectRootContext.get()));
}
function useSelectTrigger(props) {
  return new SelectTriggerState(props, SelectRootContext.get());
}
function useSelectItem(props) {
  return new SelectItemState(props, SelectRootContext.get());
}
function useSelectViewport(props) {
  return new SelectViewportState(props, SelectContentContext.get());
}
function useSelectScrollUpButton(props) {
  return new SelectScrollUpButtonState(new SelectScrollButtonImplState(props, SelectContentContext.get()));
}
function useSelectScrollDownButton(props) {
  return new SelectScrollDownButtonState(new SelectScrollButtonImplState(props, SelectContentContext.get()));
}
function useSelectHiddenInput(props) {
  return new SelectHiddenInputState(props, SelectRootContext.get());
}
const selectParts = [
  "trigger",
  "content",
  "item",
  "viewport",
  "scroll-up-button",
  "scroll-down-button",
  "group",
  "group-label",
  "separator",
  "arrow",
  "input",
  "content-wrapper",
  "item-text",
  "value"
];
function getSelectBitsAttrs(root) {
  const isCombobox = root.isCombobox;
  const attrObj = {};
  for (const part of selectParts) {
    attrObj[part] = isCombobox ? `data-combobox-${part}` : `data-select-${part}`;
  }
  return attrObj;
}
function Select_hidden_input($$payload, $$props) {
  push();
  let { value = "" } = $$props;
  const hiddenInputState = useSelectHiddenInput({ value: box.with(() => value) });
  Visually_hidden($$payload, {
    children: ($$payload2) => {
      if (hiddenInputState.shouldRender) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<input${spread_attributes({ ...hiddenInputState.props, value })}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { value });
  pop();
}
function Select_content$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    forceMount = false,
    side = "bottom",
    onInteractOutside = noop,
    onEscapeKeydown = noop,
    children,
    child,
    preventScroll = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const contentState = useSelectContent({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside(e);
    if (e.defaultPrevented) return;
    contentState.root.handleClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown(e);
    if (e.defaultPrevented) return;
    contentState.root.handleClose();
  }
  if (forceMount) {
    $$payload.out += "<!--[-->";
    {
      let popper = function($$payload2, { props, wrapperProps }) {
        const finalProps = mergeProps(props, { style: contentState.props.style });
        if (child) {
          $$payload2.out += "<!--[-->";
          child($$payload2, {
            props: finalProps,
            wrapperProps,
            ...contentState.snippetProps
          });
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
          children?.($$payload2);
          $$payload2.out += `<!----></div></div>`;
        }
        $$payload2.out += `<!--]-->`;
      };
      Popper_layer_force_mount($$payload, spread_props([
        mergedProps,
        {
          side,
          enabled: contentState.root.open.current,
          id,
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          onOpenAutoFocus: (e) => e.preventDefault(),
          onCloseAutoFocus: (e) => e.preventDefault(),
          trapFocus: false,
          loop: false,
          preventScroll,
          onPlaced: () => contentState.isPositioned = true,
          forceMount: true,
          popper,
          $$slots: { popper: true }
        }
      ]));
    }
  } else {
    $$payload.out += "<!--[!-->";
    if (!forceMount) {
      $$payload.out += "<!--[-->";
      {
        let popper = function($$payload2, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: contentState.props.style });
          if (child) {
            $$payload2.out += "<!--[-->";
            child($$payload2, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload2.out += `<!---->`;
          } else {
            $$payload2.out += "<!--[!-->";
            $$payload2.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
            children?.($$payload2);
            $$payload2.out += `<!----></div></div>`;
          }
          $$payload2.out += `<!--]-->`;
        };
        Popper_layer($$payload, spread_props([
          mergedProps,
          {
            side,
            present: contentState.root.open.current,
            id,
            onInteractOutside: handleInteractOutside,
            onEscapeKeydown: handleEscapeKeydown,
            onOpenAutoFocus: (e) => e.preventDefault(),
            onCloseAutoFocus: (e) => e.preventDefault(),
            trapFocus: false,
            loop: false,
            preventScroll,
            onPlaced: () => contentState.isPositioned = true,
            forceMount: false,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Select_item$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    value,
    label = value,
    disabled = false,
    children,
    child,
    onHighlight = noop,
    onUnhighlight = noop,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = useSelectItem({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    value: box.with(() => value),
    disabled: box.with(() => disabled),
    label: box.with(() => label),
    onHighlight: box.with(() => onHighlight),
    onUnhighlight: box.with(() => onUnhighlight)
  });
  const mergedProps = mergeProps(restProps, itemState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps, ...itemState.snippetProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload, itemState.snippetProps);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--> `;
  Mounted($$payload, {
    onMountedChange: (m) => {
      itemState.mounted = m;
    }
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { ref });
  pop();
}
function Select_viewport($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    children,
    child,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const viewportState = useSelectViewport({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, viewportState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps }, { "svelte-uf90i5": true })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Select_scroll_down_button$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let mounted = false;
  const scrollDownButtonState = useSelectScrollDownButton({
    id: box.with(() => id),
    mounted: box.with(() => mounted),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, scrollDownButtonState.props);
  if (scrollDownButtonState.canScrollDown) {
    $$payload.out += "<!--[-->";
    Mounted($$payload, { onMountedChange: (m) => mounted = m });
    $$payload.out += `<!----> `;
    if (child) {
      $$payload.out += "<!--[-->";
      child($$payload, { props: restProps });
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
      children?.($$payload);
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Select_scroll_up_button$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let mounted = false;
  const scrollDownButtonState = useSelectScrollUpButton({
    id: box.with(() => id),
    mounted: box.with(() => mounted),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, scrollDownButtonState.props);
  if (scrollDownButtonState.canScrollUp) {
    $$payload.out += "<!--[-->";
    Mounted($$payload, { onMountedChange: (m) => mounted = m });
    $$payload.out += `<!----> `;
    if (child) {
      $$payload.out += "<!--[-->";
      child($$payload, { props: restProps });
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
      children?.($$payload);
      $$payload.out += `<!----></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
const ROOT_ATTR = "data-label-root";
class LabelRootState {
  #id;
  #ref;
  constructor(props) {
    this.#id = props.id;
    this.#ref = props.ref;
    this.onmousedown = this.onmousedown.bind(this);
    useRefById({ id: this.#id, ref: this.#ref });
  }
  onmousedown(e) {
    if (e.detail > 1) e.preventDefault();
  }
  #props = once(() => ({
    [ROOT_ATTR]: "",
    onmousedown: this.onmousedown
  }));
  get props() {
    return this.#props();
  }
}
function setLabelRootState(props) {
  return new LabelRootState(props);
}
function Label$1($$payload, $$props) {
  push();
  let {
    children,
    child,
    id = useId(),
    ref = null,
    for: forProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = setLabelRootState({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props, { for: forProp });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...mergedProps, for: forProp })}>`;
    children?.($$payload);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Select($$payload, $$props) {
  push();
  let {
    value = void 0,
    onValueChange = noop,
    name = "",
    disabled = false,
    type,
    open = false,
    onOpenChange = noop,
    loop = false,
    scrollAlignment = "nearest",
    required = false,
    items = [],
    allowDeselect = false,
    children
  } = $$props;
  if (value === void 0) {
    const defaultValue = type === "single" ? "" : [];
    value = defaultValue;
  }
  const rootState = useSelectRoot({
    type,
    value: box.with(() => value, (v) => {
      value = v;
      onValueChange(v);
    }),
    disabled: box.with(() => disabled),
    required: box.with(() => required),
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    }),
    loop: box.with(() => loop),
    scrollAlignment: box.with(() => scrollAlignment),
    name: box.with(() => name),
    isCombobox: false,
    items: box.with(() => items),
    allowDeselect: box.with(() => allowDeselect)
  });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Floating_layer($$payload2, {
      children: ($$payload3) => {
        children?.($$payload3);
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    if (Array.isArray(rootState.value.current)) {
      $$payload2.out += "<!--[-->";
      if (rootState.value.current.length) {
        $$payload2.out += "<!--[-->";
        const each_array = ensure_array_like(rootState.value.current);
        $$payload2.out += `<!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          Select_hidden_input($$payload2, { value: item });
        }
        $$payload2.out += `<!--]-->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
      Select_hidden_input($$payload2, {
        get value() {
          return rootState.value.current;
        },
        set value($$value) {
          rootState.value.current = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { value, open });
  pop();
}
function Select_trigger$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    child,
    children,
    type = "button",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = useSelectTrigger({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
  $$payload.out += `<!---->`;
  Floating_layer_anchor($$payload, {
    id,
    children: ($$payload2) => {
      if (child) {
        $$payload2.out += "<!--[-->";
        child($$payload2, { props: mergedProps });
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `<button${spread_attributes({ ...mergedProps })}>`;
        children?.($$payload2);
        $$payload2.out += `<!----></button>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  bind_props($$props, { ref });
  pop();
}
function Select_item($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    value,
    label,
    children: childrenProp,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    {
      let children = function($$payload3, { selected, highlighted }) {
        $$payload3.out += `<span class="absolute left-2 flex size-3.5 items-center justify-center">`;
        if (selected) {
          $$payload3.out += "<!--[-->";
          Check($$payload3, { class: "size-4" });
        } else {
          $$payload3.out += "<!--[!-->";
        }
        $$payload3.out += `<!--]--></span> `;
        if (childrenProp) {
          $$payload3.out += "<!--[-->";
          childrenProp($$payload3, { selected, highlighted });
          $$payload3.out += `<!---->`;
        } else {
          $$payload3.out += "<!--[!-->";
          $$payload3.out += `${escape_html(label || value)}`;
        }
        $$payload3.out += `<!--]-->`;
      };
      Select_item$1($$payload2, spread_props([
        {
          value,
          class: cn("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children,
          $$slots: { default: true }
        }
      ]));
    }
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Select_scroll_up_button($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Select_scroll_up_button$1($$payload2, spread_props([
      {
        class: cn("flex cursor-default items-center justify-center py-1", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          Chevron_up($$payload3, { class: "size-4" });
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Select_scroll_down_button($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Select_scroll_down_button$1($$payload2, spread_props([
      {
        class: cn("flex cursor-default items-center justify-center py-1", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          Chevron_down($$payload3, { class: "size-4" });
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Select_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    sideOffset = 4,
    portalProps,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Portal($$payload2, spread_props([
      portalProps,
      {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Select_content$1($$payload3, spread_props([
            {
              sideOffset,
              class: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className)
            },
            restProps,
            {
              get ref() {
                return ref;
              },
              set ref($$value) {
                ref = $$value;
                $$settled = false;
              },
              children: ($$payload4) => {
                Select_scroll_up_button($$payload4, {});
                $$payload4.out += `<!----> <!---->`;
                Select_viewport($$payload4, {
                  class: cn("h-[var(--bits-select-anchor-height)] w-full min-w-[var(--bits-select-anchor-width)] p-1"),
                  children: ($$payload5) => {
                    children?.($$payload5);
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Select_scroll_down_button($$payload4, {});
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            }
          ]));
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Select_trigger($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Select_trigger$1($$payload2, spread_props([
      {
        class: cn("border-input bg-background ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          children?.($$payload3);
          $$payload3.out += `<!----> `;
          Chevron_down($$payload3, { class: "size-4 opacity-50" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
const Root = Select;
function Final_page($$payload) {
  const each_array = ensure_array_like(Array(5));
  $$payload.out += `<div class="fixed inset-0 flex items-center justify-center bg-background"><div class="w-full max-w-md p-6 text-center space-y-6"><div class="flex justify-between mb-8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="flex items-center"><div${attr("class", `rounded-full w-8 h-8 flex items-center justify-center
            ${i < 5 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`)}>${escape_html(i + 1)}</div> `;
    if (i < 4) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="h-[2px] w-12 bg-primary"></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="space-y-4"><h1 class="text-3xl font-semibold tracking-tight">Submission was Successful</h1> <p class="text-muted-foreground">Your response has been recorded. Feel free to close this window or register a new response by clicking the button below.</p></div> <div class="mx-auto rounded-full bg-primary/10 p-6 text-primary w-fit">`;
  Check($$payload, { class: "h-16 w-16" });
  $$payload.out += `<!----></div> `;
  Button($$payload, {
    class: "w-full mt-8",
    size: "lg",
    onclick: () => window.location.reload(),
    children: ($$payload2) => {
      $$payload2.out += `<!---->Submit Another Response`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function Checkbox($$payload, $$props) {
  push();
  let {
    ref = null,
    checked = false,
    indeterminate = false,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    {
      let children = function($$payload3, { checked: checked2, indeterminate: indeterminate2 }) {
        $$payload3.out += `<div class="flex size-4 items-center justify-center text-current">`;
        if (indeterminate2) {
          $$payload3.out += "<!--[-->";
          Minus($$payload3, { class: "size-3.5" });
        } else {
          $$payload3.out += "<!--[!-->";
          Check($$payload3, {
            class: cn("size-3.5", !checked2 && "text-transparent")
          });
        }
        $$payload3.out += `<!--]--></div>`;
      };
      Checkbox$1($$payload2, spread_props([
        {
          class: cn("border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content size-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get checked() {
            return checked;
          },
          set checked($$value) {
            checked = $$value;
            $$settled = false;
          },
          get indeterminate() {
            return indeterminate;
          },
          set indeterminate($$value) {
            indeterminate = $$value;
            $$settled = false;
          },
          children,
          $$slots: { default: true }
        }
      ]));
    }
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref, checked, indeterminate });
  pop();
}
function Label($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Label$1($$payload2, spread_props([
      {
        class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const navigating = {
  subscribe(fn) {
    const store = getStores().navigating;
    return store.subscribe(fn);
  }
};
function cancelFlash(options) {
  if (!options.flashMessage || true)
    return;
}
function shouldSyncFlash(options) {
  if (!options.flashMessage || true)
    return false;
}
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = devalue.parse(parsed.data, app.decoders);
  }
  return parsed;
}
function clone(element) {
  return (
    /** @type {T} */
    HTMLElement.prototype.cloneNode.call(element)
  );
}
function enhance(form_element, submit = () => {
}) {
  const fallback_callback = async ({
    action,
    result,
    reset = true,
    invalidateAll: shouldInvalidateAll = true
  }) => {
    if (result.type === "success") {
      if (reset) {
        HTMLFormElement.prototype.reset.call(form_element);
      }
      if (shouldInvalidateAll) {
        await invalidateAll();
      }
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction();
    }
  };
  async function handle_submit(event) {
    const method = event.submitter?.hasAttribute("formmethod") ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formMethod
    ) : clone(form_element).method;
    if (method !== "post") return;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      event.submitter?.hasAttribute("formaction") ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : clone(form_element).action
    );
    const enctype = event.submitter?.hasAttribute("formenctype") ? (
      /** @type {HTMLButtonElement | HTMLInputElement} */
      event.submitter.formEnctype
    ) : clone(form_element).enctype;
    const form_data = new FormData(form_element);
    const submitter_name = event.submitter?.getAttribute("name");
    if (submitter_name) {
      form_data.append(submitter_name, event.submitter?.getAttribute("value") ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      formData: form_data,
      formElement: form_element,
      submitter: event.submitter
    }) ?? fallback_callback;
    if (cancelled) return;
    let result;
    try {
      const headers = new Headers({
        accept: "application/json",
        "x-sveltekit-action": "true"
      });
      if (enctype !== "multipart/form-data") {
        headers.set(
          "Content-Type",
          /^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(enctype) ? enctype : "application/x-www-form-urlencoded"
        );
      }
      const body = enctype === "multipart/form-data" ? form_data : new URLSearchParams(form_data);
      const response = await fetch(action, {
        method: "POST",
        headers,
        cache: "no-store",
        body,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error") result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        error?.name === "AbortError"
      ) return;
      result = { type: "error", error };
    }
    callback({
      action,
      formData: form_data,
      formElement: form_element,
      update: (opts) => fallback_callback({
        action,
        result,
        reset: opts?.reset,
        invalidateAll: opts?.invalidateAll
      }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form_element, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form_element, "submit", handle_submit);
    }
  };
}
const noCustomValidityDataAttribute = "noCustomValidity";
async function updateCustomValidity(validityEl, errors) {
  if ("setCustomValidity" in validityEl) {
    validityEl.setCustomValidity("");
  }
  if (noCustomValidityDataAttribute in validityEl.dataset)
    return;
  setCustomValidity(validityEl, errors);
}
function setCustomValidityForm(formElement, errors) {
  for (const el of formElement.querySelectorAll("input,select,textarea,button")) {
    if ("dataset" in el && noCustomValidityDataAttribute in el.dataset || !el.name) {
      continue;
    }
    const path = traversePath(errors, splitPath(el.name));
    const error = path && typeof path.value === "object" && "_errors" in path.value ? path.value._errors : path?.value;
    setCustomValidity(el, error);
    if (error)
      return;
  }
}
function setCustomValidity(el, errors) {
  const message = errors && errors.length ? errors.join("\n") : "";
  el.setCustomValidity(message);
  if (message)
    el.reportValidity();
}
const isElementInViewport = (el, topOffset = 0) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= topOffset && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};
const scrollToAndCenter = (el, offset = 1.125, behavior = "smooth") => {
  const elementRect = el.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const top = absoluteElementTop - window.innerHeight / (2 * offset);
  window.scrollTo({ left: 0, top, behavior });
};
const immediateInputTypes = ["checkbox", "radio", "range", "file"];
function inputInfo(el) {
  const immediate = !!el && (el instanceof HTMLSelectElement || el instanceof HTMLInputElement && immediateInputTypes.includes(el.type));
  const multiple = !!el && el instanceof HTMLSelectElement && el.multiple;
  const file = !!el && el instanceof HTMLInputElement && el.type == "file";
  return { immediate, multiple, file };
}
var FetchStatus;
(function(FetchStatus2) {
  FetchStatus2[FetchStatus2["Idle"] = 0] = "Idle";
  FetchStatus2[FetchStatus2["Submitting"] = 1] = "Submitting";
  FetchStatus2[FetchStatus2["Delayed"] = 2] = "Delayed";
  FetchStatus2[FetchStatus2["Timeout"] = 3] = "Timeout";
})(FetchStatus || (FetchStatus = {}));
const activeTimers = /* @__PURE__ */ new Set();
function Form(formElement, timers, options) {
  let state = FetchStatus.Idle;
  let delayedTimeout, timeoutTimeout;
  const Timers = activeTimers;
  function Timers_start() {
    Timers_clear();
    Timers_setState(state != FetchStatus.Delayed ? FetchStatus.Submitting : FetchStatus.Delayed);
    delayedTimeout = window.setTimeout(() => {
      if (delayedTimeout && state == FetchStatus.Submitting)
        Timers_setState(FetchStatus.Delayed);
    }, options.delayMs);
    timeoutTimeout = window.setTimeout(() => {
      if (timeoutTimeout && state == FetchStatus.Delayed)
        Timers_setState(FetchStatus.Timeout);
    }, options.timeoutMs);
    Timers.add(Timers_clear);
  }
  function Timers_clear() {
    clearTimeout(delayedTimeout);
    clearTimeout(timeoutTimeout);
    delayedTimeout = timeoutTimeout = 0;
    Timers.delete(Timers_clear);
    Timers_setState(FetchStatus.Idle);
  }
  function Timers_clearAll() {
    Timers.forEach((t) => t());
    Timers.clear();
  }
  function Timers_setState(s) {
    state = s;
    timers.submitting.set(state >= FetchStatus.Submitting);
    timers.delayed.set(state >= FetchStatus.Delayed);
    timers.timeout.set(state >= FetchStatus.Timeout);
  }
  const ErrorTextEvents = formElement;
  function ErrorTextEvents__selectText(e) {
    const target = e.target;
    if (options.selectErrorText)
      target.select();
  }
  function ErrorTextEvents_addErrorTextListeners() {
    if (!options.selectErrorText)
      return;
    ErrorTextEvents.querySelectorAll("input").forEach((el) => {
      el.addEventListener("invalid", ErrorTextEvents__selectText);
    });
  }
  function ErrorTextEvents_removeErrorTextListeners() {
    if (!options.selectErrorText)
      return;
    ErrorTextEvents.querySelectorAll("input").forEach((el) => el.removeEventListener("invalid", ErrorTextEvents__selectText));
  }
  const Form2 = formElement;
  {
    ErrorTextEvents_addErrorTextListeners();
    const completed = (opts) => {
      if (!opts.clearAll)
        Timers_clear();
      else
        Timers_clearAll();
      if (!opts.cancelled)
        setTimeout(() => scrollToFirstError(Form2, options), 1);
    };
    onDestroy(() => {
      ErrorTextEvents_removeErrorTextListeners();
      completed({ cancelled: true });
    });
    return {
      submitting() {
        Timers_start();
      },
      completed,
      scrollToFirstError() {
        setTimeout(() => scrollToFirstError(Form2, options), 1);
      },
      isSubmitting: () => state === FetchStatus.Submitting || state === FetchStatus.Delayed
    };
  }
}
const scrollToFirstError = async (Form2, options) => {
  if (options.scrollToError == "off")
    return;
  const selector = options.errorSelector;
  if (!selector)
    return;
  await tick();
  let el;
  el = Form2.querySelector(selector);
  if (!el)
    return;
  el = el.querySelector(selector) ?? el;
  const nav = options.stickyNavbar ? document.querySelector(options.stickyNavbar) : null;
  if (typeof options.scrollToError != "string") {
    el.scrollIntoView(options.scrollToError);
  } else if (!isElementInViewport(el, nav?.offsetHeight ?? 0)) {
    scrollToAndCenter(el, void 0, options.scrollToError);
  }
  function Form_shouldAutoFocus(userAgent) {
    if (typeof options.autoFocusOnError === "boolean")
      return options.autoFocusOnError;
    else
      return !/iPhone|iPad|iPod|Android/i.test(userAgent);
  }
  if (!Form_shouldAutoFocus(navigator.userAgent))
    return;
  let focusEl;
  focusEl = el;
  if (!["INPUT", "SELECT", "BUTTON", "TEXTAREA"].includes(focusEl.tagName)) {
    focusEl = focusEl.querySelector('input:not([type="hidden"]):not(.flatpickr-input), select, textarea');
  }
  if (focusEl) {
    try {
      focusEl.focus({ preventScroll: true });
      if (options.selectErrorText && focusEl.tagName == "INPUT") {
        focusEl.select();
      }
    } catch (err) {
    }
  }
};
function updateProxyField(obj, path, updater) {
  const output = traversePath(obj, path, ({ parent, key, value }) => {
    if (value === void 0)
      parent[key] = /\D/.test(key) ? {} : [];
    return parent[key];
  });
  if (output) {
    const newValue = updater(output.value);
    output.parent[output.key] = newValue;
  }
  return obj;
}
function superFieldProxy(superForm2, path, baseOptions) {
  const form = superForm2.form;
  const path2 = splitPath(path);
  const proxy = derived(form, ($form) => {
    const data = traversePath($form, path2);
    return data?.value;
  });
  return {
    subscribe(...params) {
      const unsub = proxy.subscribe(...params);
      return () => unsub();
    },
    update(upd, options) {
      form.update((data) => updateProxyField(data, path2, upd), options ?? baseOptions);
    },
    set(value, options) {
      form.update((data) => updateProxyField(data, path2, () => value), options ?? baseOptions);
    }
  };
}
function isSuperForm(form, options) {
  const isSuperForm2 = "form" in form;
  if (!isSuperForm2 && options?.taint !== void 0) {
    throw new SuperFormError("If options.taint is set, the whole superForm object must be used as a proxy.");
  }
  return isSuperForm2;
}
function fieldProxy(form, path, options) {
  const path2 = splitPath(path);
  if (isSuperForm(form, options)) {
    return superFieldProxy(form, path, options);
  }
  const proxy = derived(form, ($form) => {
    const data = traversePath($form, path2);
    return data?.value;
  });
  return {
    subscribe(...params) {
      const unsub = proxy.subscribe(...params);
      return () => unsub();
    },
    update(upd) {
      form.update((data) => updateProxyField(data, path2, upd));
    },
    set(value) {
      form.update((data) => updateProxyField(data, path2, () => value));
    }
  };
}
const formIds = /* @__PURE__ */ new WeakMap();
const initialForms = /* @__PURE__ */ new WeakMap();
const defaultOnError = (event) => {
  throw event.result.error;
};
const defaultFormOptions = {
  applyAction: true,
  invalidateAll: true,
  resetForm: true,
  autoFocusOnError: "detect",
  scrollToError: "smooth",
  errorSelector: '[aria-invalid="true"],[data-invalid]',
  selectErrorText: false,
  stickyNavbar: void 0,
  taintedMessage: false,
  onSubmit: void 0,
  onResult: void 0,
  onUpdate: void 0,
  onUpdated: void 0,
  onError: defaultOnError,
  dataType: "form",
  validators: void 0,
  customValidity: false,
  clearOnSubmit: "message",
  delayMs: 500,
  timeoutMs: 8e3,
  multipleSubmits: "prevent",
  SPA: void 0,
  validationMethod: "auto"
};
let LEGACY_MODE = false;
try {
  if (SUPERFORMS_LEGACY)
    LEGACY_MODE = true;
} catch {
}
let STORYBOOK_MODE = false;
try {
  if (globalThis.STORIES)
    STORYBOOK_MODE = true;
} catch {
}
function superForm(form, formOptions) {
  let initialForm;
  let options = formOptions;
  let initialValidator = void 0;
  {
    if (options.legacy ?? LEGACY_MODE) {
      if (options.resetForm === void 0)
        options.resetForm = false;
      if (options.taintedMessage === void 0)
        options.taintedMessage = true;
    }
    if (STORYBOOK_MODE) {
      if (options.applyAction === void 0)
        options.applyAction = false;
    }
    if (typeof options.SPA === "string") {
      if (options.invalidateAll === void 0)
        options.invalidateAll = false;
      if (options.applyAction === void 0)
        options.applyAction = false;
    }
    initialValidator = options.validators;
    options = {
      ...defaultFormOptions,
      ...options
    };
    if ((options.SPA === true || typeof options.SPA === "object") && options.validators === void 0) {
      console.warn("No validators set for superForm in SPA mode. Add a validation adapter to the validators option, or set it to false to disable this warning.");
    }
    if (!form) {
      throw new SuperFormError("No form data sent to superForm. Make sure the output from superValidate is used (usually data.form) and that it's not null or undefined. Alternatively, an object with default values for the form can also be used, but then constraints won't be available.");
    }
    if (Context_isValidationObject(form) === false) {
      form = {
        id: options.id ?? Math.random().toString(36).slice(2, 10),
        valid: false,
        posted: false,
        errors: {},
        data: form,
        shape: shapeFromObject(form)
      };
    }
    form = form;
    const _initialFormId = form.id = options.id ?? form.id;
    const _currentPage = get(page) ?? (STORYBOOK_MODE ? {} : void 0);
    if (!initialForms.has(form)) {
      initialForms.set(form, form);
    }
    initialForm = initialForms.get(form);
    if (_currentPage.form && typeof _currentPage.form === "object") {
      const postedData = _currentPage.form;
      for (const postedForm of Context_findValidationForms(postedData).reverse()) {
        if (postedForm.id == _initialFormId && !initialForms.has(postedForm)) {
          initialForms.set(postedData, postedData);
          const pageDataForm = form;
          form = postedForm;
          form.constraints = pageDataForm.constraints;
          form.shape = pageDataForm.shape;
          if (form.valid && options.resetForm && (options.resetForm === true || options.resetForm())) {
            form = clone$1(pageDataForm);
            form.message = clone$1(postedForm.message);
          }
          break;
        }
      }
    } else {
      form = clone$1(initialForm);
    }
    onDestroy(() => {
      Unsubscriptions_unsubscribe();
      NextChange_clear();
      EnhancedForm_destroy();
      for (const events of Object.values(formEvents)) {
        events.length = 0;
      }
      formIds.get(_currentPage)?.delete(_initialFormId);
    });
    if (options.dataType !== "json") {
      const checkForNestedData = (key, value) => {
        if (!value || typeof value !== "object")
          return;
        if (Array.isArray(value)) {
          if (value.length > 0)
            checkForNestedData(key, value[0]);
        } else if (!(value instanceof Date) && !(value instanceof File) && true) {
          throw new SuperFormError(`Object found in form field "${key}". Set the dataType option to "json" and add use:enhance to use nested data structures. More information: https://superforms.rocks/concepts/nested-data`);
        }
      };
      for (const [key, value] of Object.entries(form.data)) {
        checkForNestedData(key, value);
      }
    }
  }
  const __data = {
    formId: form.id,
    form: clone$1(form.data),
    constraints: form.constraints ?? {},
    posted: form.posted,
    errors: clone$1(form.errors),
    message: clone$1(form.message),
    tainted: void 0,
    valid: form.valid,
    submitting: false,
    shape: form.shape
  };
  const Data = __data;
  const FormId = writable(options.id ?? form.id);
  function Context_findValidationForms(data) {
    const forms = Object.values(data).filter((v) => Context_isValidationObject(v) !== false);
    return forms;
  }
  function Context_isValidationObject(object) {
    if (!object || typeof object !== "object")
      return false;
    if (!("valid" in object && "errors" in object && typeof object.valid === "boolean")) {
      return false;
    }
    return "id" in object && typeof object.id === "string" ? object.id : false;
  }
  const _formData = writable(form.data);
  const Form$1 = {
    subscribe: _formData.subscribe,
    set: (value, options2 = {}) => {
      const newData = clone$1(value);
      Tainted_update(newData, options2.taint ?? true);
      return _formData.set(newData);
    },
    update: (updater, options2 = {}) => {
      return _formData.update((value) => {
        const newData = updater(value);
        Tainted_update(newData, options2.taint ?? true);
        return newData;
      });
    }
  };
  function Form_isSPA() {
    return options.SPA === true || typeof options.SPA === "object";
  }
  function Form_resultStatus(defaultStatus) {
    if (defaultStatus > 400)
      return defaultStatus;
    return (typeof options.SPA === "boolean" || typeof options.SPA === "string" ? void 0 : options.SPA?.failStatus) || defaultStatus;
  }
  async function Form_validate(opts = {}) {
    const dataToValidate = opts.formData ?? Data.form;
    let errors = {};
    let status;
    const validator = opts.adapter ?? options.validators;
    if (typeof validator == "object") {
      if (validator != initialValidator && !("jsonSchema" in validator)) {
        throw new SuperFormError('Client validation adapter found in options.validators. A full adapter must be used when changing validators dynamically, for example "zod" instead of "zodClient".');
      }
      status = await /* @__PURE__ */ validator.validate(dataToValidate);
      if (!status.success) {
        errors = mapErrors(status.issues, validator.shape ?? Data.shape ?? {});
      } else if (opts.recheckValidData !== false) {
        return Form_validate({ ...opts, recheckValidData: false });
      }
    } else {
      status = { success: true, data: {} };
    }
    const data = { ...Data.form, ...dataToValidate, ...status.success ? status.data : {} };
    return {
      valid: status.success,
      posted: false,
      errors,
      data,
      constraints: Data.constraints,
      message: void 0,
      id: Data.formId,
      shape: Data.shape
    };
  }
  function Form__changeEvent(event) {
    if (!options.onChange || !event.paths.length || event.type == "blur")
      return;
    let changeEvent;
    const paths = event.paths.map(mergePath);
    if (event.type && event.paths.length == 1 && event.formElement && event.target instanceof Element) {
      changeEvent = {
        path: paths[0],
        paths,
        formElement: event.formElement,
        target: event.target,
        set(path, value, options2) {
          fieldProxy({ form: Form$1 }, path, options2).set(value);
        },
        get(path) {
          return get(fieldProxy(Form$1, path));
        }
      };
    } else {
      changeEvent = {
        paths,
        target: void 0,
        set(path, value, options2) {
          fieldProxy({ form: Form$1 }, path, options2).set(value);
        },
        get(path) {
          return get(fieldProxy(Form$1, path));
        }
      };
    }
    options.onChange(changeEvent);
  }
  async function Form_clientValidation(event, force = false, adapter) {
    if (event) {
      if (options.validators == "clear") {
        Errors.update(($errors) => {
          setPaths($errors, event.paths, void 0);
          return $errors;
        });
      }
      setTimeout(() => Form__changeEvent(event));
    }
    let skipValidation = false;
    if (!force) {
      if (options.validationMethod == "onsubmit" || options.validationMethod == "submit-only") {
        skipValidation = true;
      } else if (options.validationMethod == "onblur" && event?.type == "input")
        skipValidation = true;
      else if (options.validationMethod == "oninput" && event?.type == "blur")
        skipValidation = true;
    }
    if (skipValidation || !event || !options.validators || options.validators == "clear") {
      if (event?.paths) {
        const formElement = event?.formElement ?? EnhancedForm_get();
        if (formElement)
          Form__clearCustomValidity(formElement);
      }
      return;
    }
    const result = await Form_validate({ adapter });
    if (result.valid && (event.immediate || event.type != "input")) {
      Form$1.set(result.data, { taint: "ignore" });
    }
    await tick();
    Form__displayNewErrors(result.errors, event, force);
    return result;
  }
  function Form__clearCustomValidity(formElement) {
    const validity = /* @__PURE__ */ new Map();
    if (options.customValidity && formElement) {
      for (const el of formElement.querySelectorAll(`[name]`)) {
        if (typeof el.name !== "string" || !el.name.length)
          continue;
        const message = "validationMessage" in el ? String(el.validationMessage) : "";
        validity.set(el.name, { el, message });
        updateCustomValidity(el, void 0);
      }
    }
    return validity;
  }
  async function Form__displayNewErrors(errors, event, force) {
    const { type, immediate, multiple, paths } = event;
    const previous = Data.errors;
    const output = {};
    let validity = /* @__PURE__ */ new Map();
    const formElement = event.formElement ?? EnhancedForm_get();
    if (formElement)
      validity = Form__clearCustomValidity(formElement);
    traversePaths(errors, (error) => {
      if (!Array.isArray(error.value))
        return;
      const currentPath = [...error.path];
      if (currentPath[currentPath.length - 1] == "_errors") {
        currentPath.pop();
      }
      const joinedPath = currentPath.join(".");
      function addError() {
        setPaths(output, [error.path], error.value);
        if (options.customValidity && isEventError && validity.has(joinedPath)) {
          const { el, message } = validity.get(joinedPath);
          if (message != error.value) {
            setTimeout(() => updateCustomValidity(el, error.value));
            validity.clear();
          }
        }
      }
      if (force)
        return addError();
      const lastPath = error.path[error.path.length - 1];
      const isObjectError = lastPath == "_errors";
      const isEventError = error.value && paths.some((path) => {
        return isObjectError ? path && currentPath.length > 0 && currentPath[0] == path[0] : joinedPath == path.join(".");
      });
      if (isEventError && options.validationMethod == "oninput")
        return addError();
      if (immediate && !multiple && isEventError)
        return addError();
      if (multiple) {
        const errorPath = pathExists(get(Errors), error.path.slice(0, -1));
        if (errorPath?.value && typeof errorPath?.value == "object") {
          for (const errors2 of Object.values(errorPath.value)) {
            if (Array.isArray(errors2)) {
              return addError();
            }
          }
        }
      }
      const previousError = pathExists(previous, error.path);
      if (previousError && previousError.key in previousError.parent) {
        return addError();
      }
      if (isObjectError) {
        if (options.validationMethod == "oninput" || type == "blur" && Tainted_hasBeenTainted(mergePath(error.path.slice(0, -1)))) {
          return addError();
        }
      } else {
        if (type == "blur" && isEventError) {
          return addError();
        }
      }
    });
    Errors.set(output);
  }
  function Form_set(data, options2 = {}) {
    if (options2.keepFiles) {
      traversePaths(Data.form, (info) => {
        if (info.value instanceof File || browser) {
          const dataPath = pathExists(data, info.path);
          if (!dataPath || !(dataPath.key in dataPath.parent)) {
            setPaths(data, [info.path], info.value);
          }
        }
      });
    }
    return Form$1.set(data, options2);
  }
  function Form_shouldReset(validForm, successActionResult) {
    return validForm && successActionResult && options.resetForm && (options.resetForm === true || options.resetForm());
  }
  function Form_capture(removeFilesfromData = true) {
    let data = Data.form;
    let tainted = Data.tainted;
    if (removeFilesfromData) {
      const removed = removeFiles(Data.form);
      data = removed.data;
      const paths = removed.paths;
      if (paths.length) {
        tainted = clone$1(tainted) ?? {};
        setPaths(tainted, paths, false);
      }
    }
    return {
      valid: Data.valid,
      posted: Data.posted,
      errors: Data.errors,
      data,
      constraints: Data.constraints,
      message: Data.message,
      id: Data.formId,
      tainted,
      shape: Data.shape
    };
  }
  async function Form_updateFromValidation(form2, successResult) {
    if (form2.valid && successResult && Form_shouldReset(form2.valid, successResult)) {
      Form_reset({ message: form2.message, posted: true });
    } else {
      rebind({
        form: form2,
        untaint: successResult,
        keepFiles: true,
        // Check if the form data should be used for updating, or if the invalidateAll load function should be used:
        skipFormData: options.invalidateAll == "force"
      });
    }
    if (formEvents.onUpdated.length) {
      await tick();
    }
    for (const event of formEvents.onUpdated) {
      event({ form: form2 });
    }
  }
  function Form_reset(opts = {}) {
    if (opts.newState)
      initialForm.data = { ...initialForm.data, ...opts.newState };
    const resetData = clone$1(initialForm);
    resetData.data = { ...resetData.data, ...opts.data };
    if (opts.id !== void 0)
      resetData.id = opts.id;
    rebind({
      form: resetData,
      untaint: true,
      message: opts.message,
      keepFiles: false,
      posted: opts.posted,
      resetted: true
    });
  }
  async function Form_updateFromActionResult(result) {
    if (result.type == "error") {
      throw new SuperFormError(`ActionResult of type "${result.type}" cannot be passed to update function.`);
    }
    if (result.type == "redirect") {
      if (Form_shouldReset(true, true))
        Form_reset({ posted: true });
      return;
    }
    if (typeof result.data !== "object") {
      throw new SuperFormError("Non-object validation data returned from ActionResult.");
    }
    const forms = Context_findValidationForms(result.data);
    if (!forms.length) {
      throw new SuperFormError("No form data returned from ActionResult. Make sure you return { form } in the form actions.");
    }
    for (const newForm of forms) {
      if (newForm.id !== Data.formId)
        continue;
      await Form_updateFromValidation(newForm, result.status >= 200 && result.status < 300);
    }
  }
  const Message = writable(__data.message);
  const Constraints = writable(__data.constraints);
  const Posted = writable(__data.posted);
  const Shape = writable(__data.shape);
  const _errors = writable(form.errors);
  const Errors = {
    subscribe: _errors.subscribe,
    set(value, options2) {
      return _errors.set(updateErrors(value, Data.errors, options2?.force));
    },
    update(updater, options2) {
      return _errors.update((value) => {
        return updateErrors(updater(value), Data.errors, options2?.force);
      });
    },
    /**
     * To work with client-side validation, errors cannot be deleted but must
     * be set to undefined, to know where they existed before (tainted+error check in oninput)
     */
    clear: () => Errors.set({})
  };
  let NextChange = null;
  function NextChange_setHtmlEvent(event) {
    if (NextChange && event && Object.keys(event).length == 1 && event.paths?.length && NextChange.target && NextChange.target instanceof HTMLInputElement && NextChange.target.type.toLowerCase() == "file") {
      NextChange.paths = event.paths;
    } else {
      NextChange = event;
    }
    setTimeout(() => {
      Form_clientValidation(NextChange);
    }, 0);
  }
  function NextChange_additionalEventInformation(event, immediate, multiple, formElement, target) {
    if (NextChange === null) {
      NextChange = { paths: [] };
    }
    NextChange.type = event;
    NextChange.immediate = immediate;
    NextChange.multiple = multiple;
    NextChange.formElement = formElement;
    NextChange.target = target;
  }
  function NextChange_paths() {
    return NextChange?.paths ?? [];
  }
  function NextChange_clear() {
    NextChange = null;
  }
  const Tainted = {
    defaultMessage: "Leave page? Changes that you made may not be saved.",
    state: writable(),
    message: options.taintedMessage,
    clean: clone$1(form.data),
    // Important to clone form.data, so it's not comparing the same object,
    forceRedirection: false
  };
  function Tainted_enable() {
    options.taintedMessage = Tainted.message;
  }
  function Tainted_currentState() {
    return Tainted.state;
  }
  function Tainted_hasBeenTainted(path) {
    if (!Data.tainted)
      return false;
    if (!path)
      return !!Data.tainted;
    const field = pathExists(Data.tainted, splitPath(path));
    return !!field && field.key in field.parent;
  }
  function Tainted_isTainted(path) {
    if (!arguments.length)
      return Tainted__isObjectTainted(Data.tainted);
    if (typeof path === "boolean")
      return path;
    if (typeof path === "object")
      return Tainted__isObjectTainted(path);
    if (!Data.tainted || path === void 0)
      return false;
    const field = pathExists(Data.tainted, splitPath(path));
    return Tainted__isObjectTainted(field?.value);
  }
  function Tainted__isObjectTainted(obj) {
    if (!obj)
      return false;
    if (typeof obj === "object") {
      for (const obj2 of Object.values(obj)) {
        if (Tainted__isObjectTainted(obj2))
          return true;
      }
    }
    return obj === true;
  }
  function Tainted_update(newData, taintOptions) {
    if (taintOptions == "ignore")
      return;
    const paths = comparePaths(newData, Data.form);
    const newTainted = comparePaths(newData, Tainted.clean).map((path) => path.join());
    if (paths.length) {
      if (taintOptions == "untaint-all" || taintOptions == "untaint-form") {
        Tainted.state.set(void 0);
      } else {
        Tainted.state.update((currentlyTainted) => {
          if (!currentlyTainted)
            currentlyTainted = {};
          setPaths(currentlyTainted, paths, (path, data) => {
            if (!newTainted.includes(path.join()))
              return void 0;
            const currentValue = traversePath(newData, path);
            const cleanPath = traversePath(Tainted.clean, path);
            return currentValue && cleanPath && currentValue.value === cleanPath.value ? void 0 : taintOptions === true ? true : taintOptions === "untaint" ? void 0 : data.value;
          });
          return currentlyTainted;
        });
      }
      NextChange_setHtmlEvent({ paths });
    }
  }
  function Tainted_set(tainted, newClean) {
    Tainted.state.set(tainted);
    if (newClean)
      Tainted.clean = newClean;
  }
  const Submitting = writable(false);
  const Delayed = writable(false);
  const Timeout = writable(false);
  const Unsubscriptions = [
    // eslint-disable-next-line dci-lint/private-role-access
    Tainted.state.subscribe((tainted) => __data.tainted = clone$1(tainted)),
    // eslint-disable-next-line dci-lint/private-role-access
    Form$1.subscribe((form2) => __data.form = clone$1(form2)),
    // eslint-disable-next-line dci-lint/private-role-access
    Errors.subscribe((errors) => __data.errors = clone$1(errors)),
    FormId.subscribe((id) => __data.formId = id),
    Constraints.subscribe((constraints) => __data.constraints = constraints),
    Posted.subscribe((posted) => __data.posted = posted),
    Message.subscribe((message) => __data.message = message),
    Submitting.subscribe((submitting) => __data.submitting = submitting),
    Shape.subscribe((shape) => __data.shape = shape)
  ];
  function Unsubscriptions_unsubscribe() {
    Unsubscriptions.forEach((unsub) => unsub());
  }
  let EnhancedForm;
  function EnhancedForm_get() {
    return EnhancedForm;
  }
  function EnhancedForm_setAction(action) {
    if (EnhancedForm)
      EnhancedForm.action = action;
  }
  function EnhancedForm_destroy() {
    if (EnhancedForm?.parentElement) {
      EnhancedForm.remove();
    }
    EnhancedForm = void 0;
  }
  const AllErrors = derived(Errors, ($errors) => $errors ? flattenErrors($errors) : []);
  options.taintedMessage = void 0;
  function rebind(opts) {
    const form2 = opts.form;
    const message = opts.message ?? form2.message;
    if (opts.untaint || opts.resetted) {
      Tainted_set(typeof opts.untaint === "boolean" ? void 0 : opts.untaint, form2.data);
    }
    if (opts.skipFormData !== true) {
      Form_set(form2.data, {
        taint: "ignore",
        keepFiles: opts.keepFiles
      });
    }
    Message.set(message);
    if (opts.resetted)
      Errors.update(() => ({}), { force: true });
    else
      Errors.set(form2.errors);
    FormId.set(form2.id);
    Posted.set(opts.posted ?? form2.posted);
    if (form2.constraints)
      Constraints.set(form2.constraints);
    if (form2.shape)
      Shape.set(form2.shape);
    __data.valid = form2.valid;
    if (options.flashMessage && shouldSyncFlash(options)) {
      const flash = options.flashMessage.module.getFlash(page);
      if (message && get(flash) === void 0) {
        flash.set(message);
      }
    }
  }
  const formEvents = {
    onSubmit: options.onSubmit ? [options.onSubmit] : [],
    onResult: options.onResult ? [options.onResult] : [],
    onUpdate: options.onUpdate ? [options.onUpdate] : [],
    onUpdated: options.onUpdated ? [options.onUpdated] : [],
    onError: options.onError ? [options.onError] : []
  };
  function superFormEnhance(FormElement, events) {
    if (options.SPA !== void 0 && FormElement.method == "get")
      FormElement.method = "post";
    if (typeof options.SPA === "string") {
      if (options.SPA.length && FormElement.action == document.location.href) {
        FormElement.action = options.SPA;
      }
    } else {
      EnhancedForm = FormElement;
    }
    if (events) {
      if (events.onError) {
        if (options.onError === "apply") {
          throw new SuperFormError('options.onError is set to "apply", cannot add any onError events.');
        } else if (events.onError === "apply") {
          throw new SuperFormError('Cannot add "apply" as onError event in use:enhance.');
        }
        formEvents.onError.push(events.onError);
      }
      if (events.onResult)
        formEvents.onResult.push(events.onResult);
      if (events.onSubmit)
        formEvents.onSubmit.push(events.onSubmit);
      if (events.onUpdate)
        formEvents.onUpdate.push(events.onUpdate);
      if (events.onUpdated)
        formEvents.onUpdated.push(events.onUpdated);
    }
    Tainted_enable();
    let lastInputChange;
    async function onInput(e) {
      const info = inputInfo(e.target);
      if (info.immediate && !info.file)
        await new Promise((r) => setTimeout(r, 0));
      lastInputChange = NextChange_paths();
      NextChange_additionalEventInformation("input", info.immediate, info.multiple, FormElement, e.target ?? void 0);
    }
    async function onBlur(e) {
      if (Data.submitting)
        return;
      if (!lastInputChange || NextChange_paths() != lastInputChange) {
        return;
      }
      const info = inputInfo(e.target);
      if (info.immediate && !info.file)
        await new Promise((r) => setTimeout(r, 0));
      Form_clientValidation({
        paths: lastInputChange,
        immediate: info.multiple,
        multiple: info.multiple,
        type: "blur",
        formElement: FormElement,
        target: e.target ?? void 0
      });
      lastInputChange = void 0;
    }
    FormElement.addEventListener("focusout", onBlur);
    FormElement.addEventListener("input", onInput);
    onDestroy(() => {
      FormElement.removeEventListener("focusout", onBlur);
      FormElement.removeEventListener("input", onInput);
    });
    const htmlForm = Form(FormElement, { submitting: Submitting, delayed: Delayed, timeout: Timeout }, options);
    let currentRequest;
    let customRequest = void 0;
    const enhanced = enhance(FormElement, async (submitParams) => {
      let jsonData = void 0;
      let validationAdapter = options.validators;
      const submit = {
        ...submitParams,
        jsonData(data) {
          if (options.dataType !== "json") {
            throw new SuperFormError("options.dataType must be set to 'json' to use jsonData.");
          }
          jsonData = data;
        },
        validators(adapter) {
          validationAdapter = adapter;
        },
        customRequest(request) {
          customRequest = request;
        }
      };
      const _submitCancel = submit.cancel;
      let cancelled = false;
      function clientValidationResult(validation) {
        const validationResult = { ...validation, posted: true };
        const status = validationResult.valid ? 200 : Form_resultStatus(400);
        const data = { form: validationResult };
        const result = validationResult.valid ? { type: "success", status, data } : { type: "failure", status, data };
        setTimeout(() => validationResponse({ result }), 0);
      }
      function clearOnSubmit() {
        switch (options.clearOnSubmit) {
          case "errors-and-message":
            Errors.clear();
            Message.set(void 0);
            break;
          case "errors":
            Errors.clear();
            break;
          case "message":
            Message.set(void 0);
            break;
        }
      }
      async function triggerOnError(result, status) {
        result.status = status;
        if (options.onError !== "apply") {
          const event = { result, message: Message, form };
          for (const onErrorEvent of formEvents.onError) {
            if (onErrorEvent !== "apply" && (onErrorEvent != defaultOnError || !options.flashMessage?.onError)) {
              await onErrorEvent(event);
            }
          }
        }
        if (options.flashMessage && options.flashMessage.onError) {
          await options.flashMessage.onError({
            result,
            flashMessage: options.flashMessage.module.getFlash(page)
          });
        }
        if (options.applyAction) {
          if (options.onError == "apply") {
            await applyAction();
          } else {
            await applyAction({
              type: "failure",
              status: Form_resultStatus(result.status),
              data: result
            });
          }
        }
      }
      function cancel(opts = {
        resetTimers: true
      }) {
        cancelled = true;
        if (opts.resetTimers && htmlForm.isSubmitting()) {
          htmlForm.completed({ cancelled });
        }
        return _submitCancel();
      }
      submit.cancel = cancel;
      if (htmlForm.isSubmitting() && options.multipleSubmits == "prevent") {
        cancel({ resetTimers: false });
      } else {
        if (htmlForm.isSubmitting() && options.multipleSubmits == "abort") {
          if (currentRequest)
            currentRequest.abort();
        }
        htmlForm.submitting();
        currentRequest = submit.controller;
        for (const event of formEvents.onSubmit) {
          try {
            await event(submit);
          } catch (error) {
            cancel();
            triggerOnError({ type: "error", error }, 500);
          }
        }
      }
      if (cancelled && options.flashMessage)
        cancelFlash(options);
      if (!cancelled) {
        const noValidate = !Form_isSPA() && (FormElement.noValidate || (submit.submitter instanceof HTMLButtonElement || submit.submitter instanceof HTMLInputElement) && submit.submitter.formNoValidate);
        let validation = void 0;
        const validateForm = async () => {
          return await Form_validate({ adapter: validationAdapter });
        };
        clearOnSubmit();
        if (!noValidate) {
          validation = await validateForm();
          if (!validation.valid) {
            cancel({ resetTimers: false });
            clientValidationResult(validation);
          }
        }
        if (!cancelled) {
          if (options.flashMessage && (options.clearOnSubmit == "errors-and-message" || options.clearOnSubmit == "message") && shouldSyncFlash(options)) {
            options.flashMessage.module.getFlash(page).set(void 0);
          }
          const submitData = "formData" in submit ? submit.formData : submit.data;
          lastInputChange = void 0;
          if (Form_isSPA()) {
            if (!validation)
              validation = await validateForm();
            cancel({ resetTimers: false });
            clientValidationResult(validation);
          } else if (options.dataType === "json") {
            if (!validation)
              validation = await validateForm();
            const postData = clone$1(jsonData ?? validation.data);
            traversePaths(postData, (data) => {
              if (data.value instanceof File) {
                const key = "__superform_file_" + mergePath(data.path);
                submitData.append(key, data.value);
                return data.set(void 0);
              } else if (Array.isArray(data.value) && data.value.length && data.value.every((v) => v instanceof File)) {
                const key = "__superform_files_" + mergePath(data.path);
                for (const file of data.value) {
                  submitData.append(key, file);
                }
                return data.set(void 0);
              }
            });
            Object.keys(postData).forEach((key) => {
              if (typeof submitData.get(key) === "string") {
                submitData.delete(key);
              }
            });
            const transport = options.transport ? Object.fromEntries(Object.entries(options.transport).map(([k, v]) => [k, v.encode])) : void 0;
            const chunks = chunkSubstr(stringify(postData, transport), options.jsonChunkSize ?? 5e5);
            for (const chunk of chunks) {
              submitData.append("__superform_json", chunk);
            }
          }
          if (!submitData.has("__superform_id")) {
            const id = Data.formId;
            if (id !== void 0)
              submitData.set("__superform_id", id);
          }
          if (typeof options.SPA === "string") {
            EnhancedForm_setAction(options.SPA);
          }
        }
      }
      function chunkSubstr(str, size) {
        const numChunks = Math.ceil(str.length / size);
        const chunks = new Array(numChunks);
        for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
          chunks[i] = str.substring(o, o + size);
        }
        return chunks;
      }
      async function validationResponse(event) {
        let cancelled2 = false;
        currentRequest = null;
        let result = "type" in event.result && "status" in event.result ? event.result : {
          type: "error",
          status: Form_resultStatus(parseInt(String(event.result.status)) || 500),
          error: event.result.error instanceof Error ? event.result.error : event.result
        };
        const cancel2 = () => cancelled2 = true;
        const data = {
          result,
          formEl: FormElement,
          formElement: FormElement,
          cancel: cancel2
        };
        const unsubCheckforNav = STORYBOOK_MODE || !Form_isSPA() ? () => {
        } : navigating.subscribe(($nav) => {
          if (!$nav || $nav.from?.route.id === $nav.to?.route.id)
            return;
          cancel2();
        });
        function setErrorResult(error, data2, status) {
          data2.result = {
            type: "error",
            error,
            status: Form_resultStatus(status)
          };
        }
        for (const event2 of formEvents.onResult) {
          try {
            await event2(data);
          } catch (error) {
            setErrorResult(error, data, Math.max(result.status ?? 500, 400));
          }
        }
        result = data.result;
        if (!cancelled2) {
          if ((result.type === "success" || result.type === "failure") && result.data) {
            const forms = Context_findValidationForms(result.data);
            if (!forms.length) {
              throw new SuperFormError("No form data returned from ActionResult. Make sure you return { form } in the form actions.");
            }
            for (const newForm of forms) {
              if (newForm.id !== Data.formId)
                continue;
              const data2 = {
                form: newForm,
                formEl: FormElement,
                formElement: FormElement,
                cancel: () => cancelled2 = true,
                result
              };
              for (const event2 of formEvents.onUpdate) {
                try {
                  await event2(data2);
                } catch (error) {
                  setErrorResult(error, data2, Math.max(result.status ?? 500, 400));
                }
              }
              result = data2.result;
              if (!cancelled2) {
                if (options.customValidity) {
                  setCustomValidityForm(FormElement, data2.form.errors);
                }
                if (Form_shouldReset(data2.form.valid, result.type == "success")) {
                  data2.formElement.querySelectorAll('input[type="file"]').forEach((e) => e.value = "");
                }
              }
            }
          }
          if (!cancelled2) {
            if (result.type !== "error") {
              if (result.type === "success" && options.invalidateAll) {
                await invalidateAll();
              }
              if (options.applyAction) {
                await applyAction();
              } else {
                await Form_updateFromActionResult(result);
              }
            } else {
              await triggerOnError(result, Math.max(result.status ?? 500, 400));
            }
          }
        }
        if (cancelled2 && options.flashMessage) {
          cancelFlash(options);
        }
        if (cancelled2 || result.type != "redirect") {
          htmlForm.completed({ cancelled: cancelled2 });
        } else if (STORYBOOK_MODE) {
          htmlForm.completed({ cancelled: cancelled2, clearAll: true });
        } else {
          const unsub = navigating.subscribe(($nav) => {
            if ($nav)
              return;
            setTimeout(() => {
              try {
                if (unsub)
                  unsub();
              } catch {
              }
            });
            if (htmlForm.isSubmitting()) {
              htmlForm.completed({ cancelled: cancelled2, clearAll: true });
            }
          });
        }
        unsubCheckforNav();
      }
      if (!cancelled && customRequest) {
        _submitCancel();
        const response = await customRequest(submitParams);
        let result;
        if (response instanceof Response) {
          result = deserialize(await response.text());
        } else if (response instanceof XMLHttpRequest) {
          result = deserialize(response.responseText);
        } else {
          result = response;
        }
        if (result.type === "error")
          result.status = response.status;
        validationResponse({ result });
      }
      return validationResponse;
    });
    return {
      destroy: () => {
        for (const [name, events2] of Object.entries(formEvents)) {
          formEvents[name] = events2.filter((e) => e === options[name]);
        }
        enhanced.destroy();
      }
    };
  }
  function removeFiles(formData) {
    const paths = [];
    traversePaths(formData, (data2) => {
      if (data2.value instanceof File) {
        paths.push(data2.path);
        return "skip";
      } else if (Array.isArray(data2.value) && data2.value.length && data2.value.every((d) => d instanceof File)) {
        paths.push(data2.path);
        return "skip";
      }
    });
    if (!paths.length)
      return { data: formData, paths };
    const data = clone$1(formData);
    setPaths(data, paths, (path) => pathExists(initialForm.data, path)?.value);
    return { data, paths };
  }
  return {
    form: Form$1,
    formId: FormId,
    errors: Errors,
    message: Message,
    constraints: Constraints,
    tainted: Tainted_currentState(),
    submitting: readonly(Submitting),
    delayed: readonly(Delayed),
    timeout: readonly(Timeout),
    options,
    capture: Form_capture,
    restore: (snapshot) => {
      rebind({ form: snapshot, untaint: snapshot.tainted ?? true });
    },
    async validate(path, opts = {}) {
      if (!options.validators) {
        throw new SuperFormError("options.validators must be set to use the validate method.");
      }
      if (opts.update === void 0)
        opts.update = true;
      if (opts.taint === void 0)
        opts.taint = false;
      if (typeof opts.errors == "string")
        opts.errors = [opts.errors];
      let data;
      const splittedPath = splitPath(path);
      if ("value" in opts) {
        if (opts.update === true || opts.update === "value") {
          Form$1.update(($form) => {
            setPaths($form, [splittedPath], opts.value);
            return $form;
          }, { taint: opts.taint });
          data = Data.form;
        } else {
          data = clone$1(Data.form);
          setPaths(data, [splittedPath], opts.value);
        }
      } else {
        data = Data.form;
      }
      const result = await Form_validate({ formData: data });
      const error = pathExists(result.errors, splittedPath);
      if (error && error.value && opts.errors) {
        error.value = opts.errors;
      }
      if (opts.update === true || opts.update == "errors") {
        Errors.update(($errors) => {
          setPaths($errors, [splittedPath], error?.value);
          return $errors;
        });
      }
      return error?.value;
    },
    async validateForm(opts = {}) {
      if (!options.validators && !opts.schema) {
        throw new SuperFormError("options.validators or the schema option must be set to use the validateForm method.");
      }
      const result = opts.update ? await Form_clientValidation({ paths: [] }, true, opts.schema) : Form_validate({ adapter: opts.schema });
      const enhancedForm = EnhancedForm_get();
      if (opts.update && enhancedForm) {
        setTimeout(() => {
          if (!enhancedForm)
            return;
          scrollToFirstError(enhancedForm, {
            ...options,
            scrollToError: opts.focusOnError === false ? "off" : options.scrollToError
          });
        }, 1);
      }
      return result || Form_validate({ adapter: opts.schema });
    },
    allErrors: AllErrors,
    posted: Posted,
    reset(options2) {
      return Form_reset({
        message: options2?.keepMessage ? Data.message : void 0,
        data: options2?.data,
        id: options2?.id,
        newState: options2?.newState
      });
    },
    submit(submitter) {
      const form2 = EnhancedForm_get() ? EnhancedForm_get() : submitter && submitter instanceof HTMLElement ? submitter.closest("form") : void 0;
      if (!form2) {
        throw new SuperFormError("use:enhance must be added to the form to use submit, or pass a HTMLElement inside the form (or the form itself) as an argument.");
      }
      if (!form2.requestSubmit) {
        return form2.submit();
      }
      const isSubmitButton = submitter && (submitter instanceof HTMLButtonElement && submitter.type == "submit" || submitter instanceof HTMLInputElement && ["submit", "image"].includes(submitter.type));
      form2.requestSubmit(isSubmitButton ? submitter : void 0);
    },
    isTainted: Tainted_isTainted,
    enhance: superFormEnhance
  };
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  const steps = [
    "Patient Information",
    "Medical History",
    "Clinical Information",
    "Social and Environmental Factors",
    "Reviewer Information"
  ];
  let currentStep = 1;
  const totalSteps = 5;
  let isSubmitted = false;
  let validSteps = [];
  const {
    form,
    errors,
    allErrors,
    constraints,
    enhance: enhance2,
    delayed,
    validateForm,
    options,
    message,
    submitting
  } = superForm(data.form, {
    dataType: "json",
    taintedMessage: "The data you have entered will be lost. Are you sure you want to leave?",
    async onSubmit({ cancel }) {
      options.validators = [
        zod(step1Schema),
        zod(step2Schema),
        zod(step3Schema),
        zod(step4Schema),
        zod(personalInfoSchema)
      ][currentStep - 1];
      const result = await validateForm({ update: true });
      if (!result.valid) {
        cancel();
        return;
      }
      validSteps = [...validSteps, currentStep];
      if (currentStep < steps.length) {
        cancel();
        currentStep = currentStep + 1;
      }
      return;
    },
    async onUpdate({ result }) {
      if (result.type === "success") {
        validSteps = [];
        currentStep = 1;
      }
    },
    async onResult({ result }) {
      if (result.type === "success") {
        isSubmitted = true;
        document.scrollingElement?.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
  async function handleNext() {
    options.validators = [
      zod(step1Schema),
      zod(step2Schema),
      zod(step3Schema),
      zod(step4Schema),
      zod(personalInfoSchema)
    ][currentStep - 1];
    const result = await validateForm({ update: true });
    if (!result.valid) {
      return;
    }
    validSteps = [...validSteps, currentStep];
    currentStep++;
  }
  function handlePrev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }
  const buttonText = store_get($$store_subs ??= {}, "$delayed", delayed) ? "Submitting..." : currentStep === totalSteps ? "Submit" : "Next";
  const sexTriggerContent = store_get($$store_subs ??= {}, "$form", form)?.sex ? sexOptions.find((option) => option.value === store_get($$store_subs ??= {}, "$form", form).sex)?.label : "Select sex";
  const socioeconomicTriggerContent = store_get($$store_subs ??= {}, "$form", form)?.socioeconomicStatus ? socioeconomicOptions.find((option) => option.value === store_get($$store_subs ??= {}, "$form", form).socioeconomicStatus)?.label : "Select Status";
  const facilityTriggerContent = store_get($$store_subs ??= {}, "$form", form)?.facility ? facilityOptions.find((option) => option.value === store_get($$store_subs ??= {}, "$form", form).facility)?.label : "Select the Facility";
  function getCurrentStepFields(step) {
    switch (step) {
      case 1:
        return [
          "uniquePatientId",
          "sex",
          "dateOfBirth",
          "artStartDate",
          "lastPickupDate",
          "dateOfDeath",
          "dateOfDeathConfirmed",
          "deathInfoProvider",
          "deathInfoValidator",
          "causeOfDeath"
        ];
      case 2:
        return [
          "comorbidConditions",
          "medicationsAndTreatments",
          "primaryDiagnosis",
          "secondaryDiagnosis"
        ];
      case 3:
        return [
          "symptomsPriorToDeath",
          "symptomsDurationMonths",
          "diagnosticTestsAndResults",
          "treatmentPriorToDeath",
          "treatmentLocations",
          "treatmentResponse",
          "locationOfDeath"
        ];
      case 4:
        return [
          "supportSystem",
          "socioeconomicStatus",
          "livingConditions"
        ];
      case 5:
        return ["reviewerName", "confirmReview"];
      default:
        return [];
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (isSubmitted) {
      $$payload2.out += "<!--[-->";
      Final_page($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
      const each_array = ensure_array_like([
        "Patient Information",
        "Medical History",
        "Clinical Information",
        "Social and Environmental Factors",
        "Reviewer Information"
      ]);
      $$payload2.out += `<div class="flex min-h-screen w-full flex-col overflow-hidden"><main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10"><div class="mx-auto grid w-full max-w-6xl gap-2"><h1 class="text-4xl font-bold text-center md:text-left mb-4">Clinical Audit Template</h1></div> <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"><div class="hidden md:flex flex-col items-start w-full"><div class="flex flex-col space-y-6 w-full"><!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let step = each_array[i];
        $$payload2.out += `<div class="flex items-center gap-4 w-full"><div${attr("class", `rounded-full w-10 h-10 flex items-center justify-center shrink-0
                  ${currentStep > i ? "bg-primary text-white" : currentStep === i ? "border-2 border-primary text-primary" : "bg-muted text-muted-foreground"}`)}>${escape_html(i + 1)}</div> <span${attr("class", `text-sm font-medium whitespace-normal
                  ${currentStep >= i ? "text-primary" : "text-muted-foreground"}`)}>${escape_html(step)}</span></div> `;
        if (i < 4) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="ml-5 w-0.5 h-6 bg-border"></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]--></div></div> <div class="grid gap-6"><!---->`;
      Card($$payload2, {
        class: "bg-transparent",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_header($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Card_title($$payload4, {
                children: ($$payload5) => {
                  if (currentStep === 1) {
                    $$payload5.out += "<!--[-->";
                    $$payload5.out += `Patient Information`;
                  } else {
                    $$payload5.out += "<!--[!-->";
                    if (currentStep === 2) {
                      $$payload5.out += "<!--[-->";
                      $$payload5.out += `Medical History`;
                    } else {
                      $$payload5.out += "<!--[!-->";
                      if (currentStep === 3) {
                        $$payload5.out += "<!--[-->";
                        $$payload5.out += `Clinical Information`;
                      } else {
                        $$payload5.out += "<!--[!-->";
                        if (currentStep === 4) {
                          $$payload5.out += "<!--[-->";
                          $$payload5.out += `Social and Environmental Factors`;
                        } else {
                          $$payload5.out += "<!--[!-->";
                          $$payload5.out += `Reviewer Information`;
                        }
                        $$payload5.out += `<!--]-->`;
                      }
                      $$payload5.out += `<!--]-->`;
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <!---->`;
              Card_description($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Please fill the form with detailed information.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_content($$payload3, {
            children: ($$payload4) => {
              if (store_get($$store_subs ??= {}, "$allErrors", allErrors).length > 0) {
                $$payload4.out += "<!--[-->";
                const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$allErrors", allErrors).filter((error) => getCurrentStepFields(currentStep).includes(error.path[0])));
                $$payload4.out += `<div class="bg-destructive/15 text-destructive p-4 rounded-md mb-4"><p class="font-medium">Please fix the following errors:</p> <ul class="list-disc pl-4 mt-2"><!--[-->`;
                for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                  let error = each_array_1[$$index_1];
                  $$payload4.out += `<li>${escape_html(error.messages.join(". "))}</li>`;
                }
                $$payload4.out += `<!--]--></ul></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> <form method="POST" class="space-y-6" action="?/create" id="clinical-audit-form">`;
              if (currentStep === 1) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">`;
                Label($$payload4, {
                  for: "uniquePatientId",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Unique Patient ID`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Input($$payload4, {
                  id: "uniquePatientId",
                  name: "uniquePatientId",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).uniquePatientId;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).uniquePatientId = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).uniquePatientId) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).uniquePatientId)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-1">`;
                Label($$payload4, {
                  for: "facility",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Select the facility`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Root($$payload4, {
                  type: "single",
                  name: "facility",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).facility;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).facility = $$value);
                    $$settled = false;
                  },
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Select_trigger($$payload5, {
                      class: "w-full",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->${escape_html(facilityTriggerContent)}`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Select_content($$payload5, {
                      children: ($$payload6) => {
                        const each_array_2 = ensure_array_like(facilityOptions);
                        $$payload6.out += `<!--[-->`;
                        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                          let option = each_array_2[$$index_2];
                          $$payload6.out += `<!---->`;
                          Select_item($$payload6, {
                            value: option.value,
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->${escape_html(option.label)}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        }
                        $$payload6.out += `<!--]-->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).facility) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).facility)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-1">`;
                Label($$payload4, {
                  for: "sex",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Select the Sex`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Root($$payload4, {
                  type: "single",
                  name: "sex",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).sex;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).sex = $$value);
                    $$settled = false;
                  },
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Select_trigger($$payload5, {
                      class: "w-full",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->${escape_html(sexTriggerContent)}`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Select_content($$payload5, {
                      children: ($$payload6) => {
                        const each_array_3 = ensure_array_like(sexOptions);
                        $$payload6.out += `<!--[-->`;
                        for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
                          let option = each_array_3[$$index_3];
                          $$payload6.out += `<!---->`;
                          Select_item($$payload6, {
                            value: option.value,
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->${escape_html(option.label)}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        }
                        $$payload6.out += `<!--]-->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).sex) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).sex)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "dateOfBirth",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Date of Birth`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="relative">`;
                Input($$payload4, {
                  id: "dateOfBirth",
                  name: "dateOfBirth",
                  type: "date",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).dateOfBirth ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).dateOfBirth ? "border-destructive pl-10" : "pl-10",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).dateOfBirth;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).dateOfBirth = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                Calendar($$payload4, {
                  class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                });
                $$payload4.out += `<!----></div> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).dateOfBirth) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).dateOfBirth)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-1">`;
                Label($$payload4, {
                  for: "hIVRelatedDeath",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->HIV related death?`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <!---->`;
                Root($$payload4, {
                  type: "single",
                  name: "hIVRelatedDeath",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).hIVRelatedDeath;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).hIVRelatedDeath = $$value);
                    $$settled = false;
                  },
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->`;
                    Select_trigger($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->${escape_html(store_get($$store_subs ??= {}, "$form", form).hIVRelatedDeath ? store_get($$store_subs ??= {}, "$form", form).hIVRelatedDeath : "Select HIV related death")}`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> <!---->`;
                    Select_content($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->`;
                        Select_item($$payload6, {
                          value: "Yes",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->Yes`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> <!---->`;
                        Select_item($$payload6, {
                          value: "No",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->No`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).hIVRelatedDeath) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).hIVRelatedDeath)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "artStartDate",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->ART Start Date`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="relative">`;
                Input($$payload4, {
                  id: "artStartDate",
                  name: "artStartDate",
                  type: "date",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).artStartDate ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).artStartDate ? "border-destructive pl-10" : "pl-10",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).artStartDate;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).artStartDate = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                Calendar($$payload4, {
                  class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                });
                $$payload4.out += `<!----></div> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).artStartDate) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).artStartDate)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "lastPickupDate",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Last Pickup Date`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="relative">`;
                Input($$payload4, {
                  id: "lastPickupDate",
                  name: "lastPickupDate",
                  type: "date",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).lastPickupDate ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).lastPickupDate ? "border-destructive pl-10" : "pl-10",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).lastPickupDate;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).lastPickupDate = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                Calendar($$payload4, {
                  class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                });
                $$payload4.out += `<!----></div> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).lastPickupDate) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).lastPickupDate)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "dateOfDeath",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Date of Death`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="relative">`;
                Input($$payload4, {
                  id: "dateOfDeath",
                  name: "dateOfDeath",
                  type: "date",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).dateOfDeath ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).dateOfDeath ? "border-destructive pl-10" : "pl-10",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).dateOfDeath;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).dateOfDeath = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                Calendar($$payload4, {
                  class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                });
                $$payload4.out += `<!----></div> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).dateOfDeath) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).dateOfDeath)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "dateOfDeathConfirmed",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Date of Death Was Confirmed`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <div class="relative">`;
                Input($$payload4, {
                  id: "dateOfDeathConfirmed",
                  name: "dateOfDeathConfirmed",
                  type: "date",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).dateOfDeathConfirmed ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).dateOfDeathConfirmed ? "border-destructive pl-10" : "pl-10",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).dateOfDeathConfirmed;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).dateOfDeathConfirmed = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                Calendar($$payload4, {
                  class: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                });
                $$payload4.out += `<!----></div> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).dateOfDeathConfirmed) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).dateOfDeathConfirmed)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                Label($$payload4, {
                  for: "deathInfoProvider",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Death Information Provided By`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Input($$payload4, {
                  id: "deathInfoProvider",
                  name: "deathInfoProvider",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).deathInfoProvider ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).deathInfoProvider ? "border-destructive" : "",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).deathInfoProvider;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).deathInfoProvider = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).deathInfoProvider) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).deathInfoProvider)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-2">`;
                Label($$payload4, {
                  for: "deathInfoValidator",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Death Information Validated By`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                Input($$payload4, {
                  id: "deathInfoValidator",
                  name: "deathInfoValidator",
                  "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).deathInfoValidator ? "true" : void 0,
                  class: store_get($$store_subs ??= {}, "$errors", errors).deathInfoValidator ? "border-destructive" : "",
                  get value() {
                    return store_get($$store_subs ??= {}, "$form", form).deathInfoValidator;
                  },
                  set value($$value) {
                    store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).deathInfoValidator = $$value);
                    $$settled = false;
                  }
                });
                $$payload4.out += `<!----> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).deathInfoValidator) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).deathInfoValidator)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-2">`;
                Label($$payload4, {
                  for: "causeOfDeath",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Cause of Death (be very detailed)`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> <textarea id="causeOfDeath" name="causeOfDeath"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).causeOfDeath ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).causeOfDeath ? "true" : void 0)}>`;
                const $$body = escape_html(store_get($$store_subs ??= {}, "$form", form).causeOfDeath);
                if ($$body) {
                  $$payload4.out += `${$$body}`;
                }
                $$payload4.out += `</textarea> `;
                if (store_get($$store_subs ??= {}, "$errors", errors).causeOfDeath) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).causeOfDeath)}</span>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                }
                $$payload4.out += `<!--]--></div></div>`;
              } else {
                $$payload4.out += "<!--[!-->";
                if (currentStep === 2) {
                  $$payload4.out += "<!--[-->";
                  $$payload4.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">`;
                  Label($$payload4, {
                    for: "comorbidConditions",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->Comorbid Conditions (if any)`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> <textarea id="comorbidConditions" name="comorbidConditions"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).comorbidConditions ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).comorbidConditions ? "true" : void 0)}>`;
                  const $$body_1 = escape_html(store_get($$store_subs ??= {}, "$form", form).comorbidConditions);
                  if ($$body_1) {
                    $$payload4.out += `${$$body_1}`;
                  }
                  $$payload4.out += `</textarea> `;
                  if (store_get($$store_subs ??= {}, "$errors", errors).comorbidConditions) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).comorbidConditions)}</span>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                  Label($$payload4, {
                    for: "medicationsAndTreatments",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->Medications &amp; Previous Treatments`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> <textarea id="medicationsAndTreatments" name="medicationsAndTreatments"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).medicationsAndTreatments ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).medicationsAndTreatments ? "true" : void 0)}>`;
                  const $$body_2 = escape_html(store_get($$store_subs ??= {}, "$form", form).medicationsAndTreatments);
                  if ($$body_2) {
                    $$payload4.out += `${$$body_2}`;
                  }
                  $$payload4.out += `</textarea> `;
                  if (store_get($$store_subs ??= {}, "$errors", errors).medicationsAndTreatments) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).medicationsAndTreatments)}</span>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">`;
                  Label($$payload4, {
                    for: "primaryDiagnosis",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->Primary Diagnosis (if any):`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> <textarea id="primaryDiagnosis" name="primaryDiagnosis"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).primaryDiagnosis ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).primaryDiagnosis ? "true" : void 0)}>`;
                  const $$body_3 = escape_html(store_get($$store_subs ??= {}, "$form", form).primaryDiagnosis);
                  if ($$body_3) {
                    $$payload4.out += `${$$body_3}`;
                  }
                  $$payload4.out += `</textarea> `;
                  if (store_get($$store_subs ??= {}, "$errors", errors).primaryDiagnosis) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).primaryDiagnosis)}</span>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                  Label($$payload4, {
                    for: "secondaryDiagnosis",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->Secondary Diagnosis (if any):`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> <textarea id="secondaryDiagnosis" name="secondaryDiagnosis"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).secondaryDiagnosis ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).secondaryDiagnosis ? "true" : void 0)}>`;
                  const $$body_4 = escape_html(store_get($$store_subs ??= {}, "$form", form).secondaryDiagnosis);
                  if ($$body_4) {
                    $$payload4.out += `${$$body_4}`;
                  }
                  $$payload4.out += `</textarea> `;
                  if (store_get($$store_subs ??= {}, "$errors", errors).secondaryDiagnosis) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).secondaryDiagnosis)}</span>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div></div>`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  if (currentStep === 3) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">`;
                    Label($$payload4, {
                      for: "symptomsPriorToDeath",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Symptoms prior to death`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <textarea id="symptomsPriorToDeath" name="symptomsPriorToDeath"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).symptomsPriorToDeath ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).symptomsPriorToDeath ? "true" : void 0)}>`;
                    const $$body_5 = escape_html(store_get($$store_subs ??= {}, "$form", form).symptomsPriorToDeath);
                    if ($$body_5) {
                      $$payload4.out += `${$$body_5}`;
                    }
                    $$payload4.out += `</textarea> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).symptomsPriorToDeath) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).symptomsPriorToDeath)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                    Label($$payload4, {
                      for: "diagnosticTestsAndResults",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Diagnostic tests and results`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <textarea id="diagnosticTestsAndResults" name="diagnosticTestsAndResults"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).diagnosticTestsAndResults ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).diagnosticTestsAndResults ? "true" : void 0)}>`;
                    const $$body_6 = escape_html(store_get($$store_subs ??= {}, "$form", form).diagnosticTestsAndResults);
                    if ($$body_6) {
                      $$payload4.out += `${$$body_6}`;
                    }
                    $$payload4.out += `</textarea> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).diagnosticTestsAndResults) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).diagnosticTestsAndResults)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                    Label($$payload4, {
                      for: "treatmentPriorToDeath",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Treatment received prior to death`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <textarea id="treatmentPriorToDeath" name="treatmentPriorToDeath"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).treatmentPriorToDeath ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).treatmentPriorToDeath ? "true" : void 0)}>`;
                    const $$body_7 = escape_html(store_get($$store_subs ??= {}, "$form", form).treatmentPriorToDeath);
                    if ($$body_7) {
                      $$payload4.out += `${$$body_7}`;
                    }
                    $$payload4.out += `</textarea> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).treatmentPriorToDeath) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).treatmentPriorToDeath)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                    Label($$payload4, {
                      for: "treatmentResponse",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Response to treatment`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <textarea id="treatmentResponse" name="treatmentResponse"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).treatmentResponse ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).treatmentResponse ? "true" : void 0)}>`;
                    const $$body_8 = escape_html(store_get($$store_subs ??= {}, "$form", form).treatmentResponse);
                    if ($$body_8) {
                      $$payload4.out += `${$$body_8}`;
                    }
                    $$payload4.out += `</textarea> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).treatmentResponse) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).treatmentResponse)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                    Label($$payload4, {
                      for: "symptomsDurationMonths",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Duration of symptoms (months)`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> `;
                    Input($$payload4, {
                      id: "symptomsDurationMonths",
                      name: "symptomsDurationMonths",
                      get value() {
                        return store_get($$store_subs ??= {}, "$form", form).symptomsDurationMonths;
                      },
                      set value($$value) {
                        store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).symptomsDurationMonths = $$value);
                        $$settled = false;
                      }
                    });
                    $$payload4.out += `<!----> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).symptomsDurationMonths) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).symptomsDurationMonths)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                    Label($$payload4, {
                      for: "treatmentLocations",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Location(s) treatment received`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> `;
                    Input($$payload4, {
                      id: "treatmentLocations",
                      name: "treatmentLocations",
                      get value() {
                        return store_get($$store_subs ??= {}, "$form", form).treatmentLocations;
                      },
                      set value($$value) {
                        store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).treatmentLocations = $$value);
                        $$settled = false;
                      }
                    });
                    $$payload4.out += `<!----> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).treatmentLocations) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).treatmentLocations)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-2">`;
                    Label($$payload4, {
                      for: "locationOfDeath",
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->Location of death`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> <textarea id="locationOfDeath" name="locationOfDeath"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).locationOfDeath ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).locationOfDeath ? "true" : void 0)}>`;
                    const $$body_9 = escape_html(store_get($$store_subs ??= {}, "$form", form).locationOfDeath);
                    if ($$body_9) {
                      $$payload4.out += `${$$body_9}`;
                    }
                    $$payload4.out += `</textarea> `;
                    if (store_get($$store_subs ??= {}, "$errors", errors).locationOfDeath) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).locationOfDeath)}</span>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div></div>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                    if (currentStep === 4) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2">`;
                      Label($$payload4, {
                        for: "supportSystem",
                        children: ($$payload5) => {
                          $$payload5.out += `<!---->Support system prior to death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload4.out += `<!----> <textarea id="supportSystem" name="supportSystem"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).supportSystem ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).supportSystem ? "true" : void 0)}>`;
                      const $$body_10 = escape_html(store_get($$store_subs ??= {}, "$form", form).supportSystem);
                      if ($$body_10) {
                        $$payload4.out += `${$$body_10}`;
                      }
                      $$payload4.out += `</textarea> `;
                      if (store_get($$store_subs ??= {}, "$errors", errors).supportSystem) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).supportSystem)}</span>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                      }
                      $$payload4.out += `<!--]--></div> <div class="space-y-2">`;
                      Label($$payload4, {
                        for: "livingConditions",
                        children: ($$payload5) => {
                          $$payload5.out += `<!---->Living conditions prior to death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload4.out += `<!----> <textarea id="livingConditions" name="livingConditions"${attr("class", `w-full min-h-[150px] rounded-md border bg-background px-3 py-2 ${store_get($$store_subs ??= {}, "$errors", errors).livingConditions ? "border-destructive" : "border-input"}`)}${attr("aria-invalid", store_get($$store_subs ??= {}, "$errors", errors).livingConditions ? "true" : void 0)}>`;
                      const $$body_11 = escape_html(store_get($$store_subs ??= {}, "$form", form).livingConditions);
                      if ($$body_11) {
                        $$payload4.out += `${$$body_11}`;
                      }
                      $$payload4.out += `</textarea> `;
                      if (store_get($$store_subs ??= {}, "$errors", errors).livingConditions) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).livingConditions)}</span>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                      }
                      $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-2">`;
                      Label($$payload4, {
                        for: "socioeconomicStatus",
                        children: ($$payload5) => {
                          $$payload5.out += `<!---->Socioeconomic status prior to death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload4.out += `<!----> <!---->`;
                      Root($$payload4, {
                        type: "single",
                        name: "socioeconomicStatus",
                        get value() {
                          return store_get($$store_subs ??= {}, "$form", form).socioeconomicStatus;
                        },
                        set value($$value) {
                          store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).socioeconomicStatus = $$value);
                          $$settled = false;
                        },
                        children: ($$payload5) => {
                          $$payload5.out += `<!---->`;
                          Select_trigger($$payload5, {
                            class: "w-full",
                            children: ($$payload6) => {
                              $$payload6.out += `<!---->${escape_html(socioeconomicTriggerContent)}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload5.out += `<!----> <!---->`;
                          Select_content($$payload5, {
                            children: ($$payload6) => {
                              const each_array_4 = ensure_array_like(socioeconomicOptions);
                              $$payload6.out += `<!--[-->`;
                              for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
                                let option = each_array_4[$$index_4];
                                $$payload6.out += `<!---->`;
                                Select_item($$payload6, {
                                  value: option.value,
                                  children: ($$payload7) => {
                                    $$payload7.out += `<!---->${escape_html(option.label)}`;
                                  },
                                  $$slots: { default: true }
                                });
                                $$payload6.out += `<!---->`;
                              }
                              $$payload6.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload5.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload4.out += `<!----> `;
                      if (store_get($$store_subs ??= {}, "$errors", errors).socioeconomicStatus) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).socioeconomicStatus)}</span>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                      }
                      $$payload4.out += `<!--]--></div></div>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                      if (currentStep === 5) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<div class="grid grid-cols-1 gap-4"><div class="space-y-2">`;
                        Label($$payload4, {
                          for: "reviewerName",
                          children: ($$payload5) => {
                            $$payload5.out += `<!---->Name of reviewer`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload4.out += `<!----> `;
                        Input($$payload4, {
                          id: "reviewerName",
                          name: "reviewerName",
                          get value() {
                            return store_get($$store_subs ??= {}, "$form", form).reviewerName;
                          },
                          set value($$value) {
                            store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).reviewerName = $$value);
                            $$settled = false;
                          }
                        });
                        $$payload4.out += `<!----> `;
                        if (store_get($$store_subs ??= {}, "$errors", errors).reviewerName) {
                          $$payload4.out += "<!--[-->";
                          $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).reviewerName)}</span>`;
                        } else {
                          $$payload4.out += "<!--[!-->";
                        }
                        $$payload4.out += `<!--]--></div> <div class="space-y-2 md:col-span-2"><div class="flex items-center space-x-2">`;
                        Checkbox($$payload4, {
                          id: "confirmReview",
                          "aria-invalid": store_get($$store_subs ??= {}, "$errors", errors).confirmReview ? "true" : void 0,
                          class: store_get($$store_subs ??= {}, "$errors", errors).confirmReview ? "border-destructive" : "",
                          get checked() {
                            return store_get($$store_subs ??= {}, "$form", form).confirmReview;
                          },
                          set checked($$value) {
                            store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).confirmReview = $$value);
                            $$settled = false;
                          }
                        });
                        $$payload4.out += `<!----> `;
                        Label($$payload4, {
                          for: "confirmReview",
                          class: "text-sm flex items-center",
                          children: ($$payload5) => {
                            $$payload5.out += `<!---->I hereby confirm that the information provided in this form is accurate to the best of my knowledge and has been reviewed and validated by me.`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload4.out += `<!----></div> `;
                        if (store_get($$store_subs ??= {}, "$errors", errors).confirmReview) {
                          $$payload4.out += "<!--[-->";
                          $$payload4.out += `<span class="text-destructive text-sm">${escape_html(store_get($$store_subs ??= {}, "$errors", errors).confirmReview)}</span>`;
                        } else {
                          $$payload4.out += "<!--[!-->";
                        }
                        $$payload4.out += `<!--]--></div></div>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                      }
                      $$payload4.out += `<!--]-->`;
                    }
                    $$payload4.out += `<!--]-->`;
                  }
                  $$payload4.out += `<!--]-->`;
                }
                $$payload4.out += `<!--]-->`;
              }
              $$payload4.out += `<!--]--> <div class="flex justify-end gap-4 mt-6">`;
              if (currentStep > 1) {
                $$payload4.out += "<!--[-->";
                Button($$payload4, {
                  variant: "outline",
                  type: "button",
                  onclick: handlePrev,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Previous`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              if (currentStep === totalSteps) {
                $$payload4.out += "<!--[-->";
                Button($$payload4, {
                  type: "submit",
                  disabled: store_get($$store_subs ??= {}, "$delayed", delayed) || !store_get($$store_subs ??= {}, "$form", form).confirmReview,
                  class: !store_get($$store_subs ??= {}, "$form", form).confirmReview ? "opacity-50 cursor-not-allowed" : "",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(buttonText)}`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
                Button($$payload4, {
                  type: "button",
                  onclick: handleNext,
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->Next`;
                  },
                  $$slots: { default: true }
                });
              }
              $$payload4.out += `<!--]--></div></form>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></main></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
