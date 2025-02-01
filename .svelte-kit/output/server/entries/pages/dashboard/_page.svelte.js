import { Q as spread_props, S as slot, T as sanitize_props, V as once, N as push, X as spread_attributes, W as bind_props, P as pop, Y as copy_payload, Z as assign_payload, $ as escape_html, a8 as clsx, a0 as ensure_array_like } from "../../../chunks/index.js";
import { e as exportToCSV } from "../../../chunks/index3.js";
import { I as Icon, J as ActiveElement, K as ARROW_LEFT, L as ARROW_RIGHT, o as ARROW_DOWN, A as ARROW_UP, c as box, H as HOME, v as END, M as isBrowser, E as ENTER, S as SPACE, r as PAGE_DOWN, t as PAGE_UP, C as Context, u as useRefById, N as isHTMLElement, q as TAB, O as focusFirst, Q as isElement, p as afterTick, R as isElementOrSVGElement, U as getAriaOrientation, g as getDataOpenClosed, V as getAriaDisabled, k as getDataDisabled, m as mergeProps, a as getAriaExpanded, b as useId, n as noop, W as getDataOrientation, h as Portal, f as cn, X as buttonVariants, B as Button, Y as MediaQuery } from "../../../chunks/scroll-lock.js";
import "style-to-object";
import "clsx";
import { u as useDOMTypeahead, F as Floating_layer, P as Popper_layer_force_mount, c as Popper_layer, l as getFloatingContentCSSVars, M as Mounted, d as Floating_layer_anchor, I as Input, e as Card, h as Card_header, i as Card_title, k as Card_content, j as Card_description, C as Chevron_down } from "../../../chunks/input.js";
function Ambulance($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 10H6" }],
    [
      "path",
      {
        "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
      }
    ],
    [
      "path",
      {
        "d": "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
      }
    ],
    ["path", { "d": "M8 8v4" }],
    ["path", { "d": "M9 18h6" }],
    [
      "circle",
      { "cx": "17", "cy": "18", "r": "2" }
    ],
    ["circle", { "cx": "7", "cy": "18", "r": "2" }]
  ];
  Icon($$payload, spread_props([
    { name: "ambulance" },
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
function Baby($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M9 12h.01" }],
    ["path", { "d": "M15 12h.01" }],
    [
      "path",
      { "d": "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }
    ],
    [
      "path",
      {
        "d": "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
      }
    ]
  ];
  Icon($$payload, spread_props([
    { name: "baby" },
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
function Chevron_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-left" },
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
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$payload, spread_props([
    { name: "chevron-right" },
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
function Ellipsis($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    [
      "circle",
      { "cx": "19", "cy": "12", "r": "1" }
    ],
    ["circle", { "cx": "5", "cy": "12", "r": "1" }]
  ];
  Icon($$payload, spread_props([
    { name: "ellipsis" },
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
function Library($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m16 6 4 14" }],
    ["path", { "d": "M12 6v14" }],
    ["path", { "d": "M8 8v12" }],
    ["path", { "d": "M4 4v16" }]
  ];
  Icon($$payload, spread_props([
    { name: "library" },
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
function Person_standing($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "5", "r": "1" }],
    ["path", { "d": "m9 20 3-6 3 6" }],
    ["path", { "d": "m6 8 6 2 6-2" }],
    ["path", { "d": "M12 10v4" }]
  ];
  Icon($$payload, spread_props([
    { name: "person-standing" },
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
function isFunction(value) {
  return typeof value === "function";
}
function extract(value, defaultValue) {
  if (isFunction(value)) {
    const getter = value;
    return getter() ?? defaultValue ?? getter();
  }
  return value ?? defaultValue ?? value;
}
class IsFocusWithin {
  #node;
  #activeElement;
  constructor(node, options = {}) {
    this.#node = node;
    this.#activeElement = new ActiveElement(options);
  }
  #current = once(() => {
    const node = extract(this.#node);
    if (node == null) return false;
    return node.contains(this.#activeElement.current);
  });
  get current() {
    return this.#current();
  }
}
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
function useRovingFocus(props) {
  const currentTabStopId = props.currentTabStopId ? props.currentTabStopId : box(null);
  function getCandidateNodes() {
    if (!isBrowser) return [];
    const node = document.getElementById(props.rootNodeId.current);
    if (!node) return [];
    if (props.candidateSelector) {
      const candidates = Array.from(node.querySelectorAll(props.candidateSelector));
      return candidates;
    } else {
      const candidates = Array.from(node.querySelectorAll(`[${props.candidateAttr}]:not([data-disabled])`));
      return candidates;
    }
  }
  function focusFirstCandidate() {
    const items = getCandidateNodes();
    if (!items.length) return;
    items[0]?.focus();
  }
  function handleKeydown(node, e, both = false) {
    const rootNode = document.getElementById(props.rootNodeId.current);
    if (!rootNode || !node) return;
    const items = getCandidateNodes();
    if (!items.length) return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, props.orientation.current);
    const loop = props.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0) return;
    e.preventDefault();
    if (itemIndex < 0 && loop) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus) return;
    itemToFocus.focus();
    currentTabStopId.current = itemToFocus.id;
    props.onCandidateFocus?.(itemToFocus);
    return itemToFocus;
  }
  function getTabIndex(node) {
    const items = getCandidateNodes();
    const anyActive = currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      currentTabStopId.current = node.id;
      return 0;
    } else if (node?.id === currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  return {
    setCurrentTabStopId(id) {
      currentTabStopId.current = id;
    },
    getTabIndex,
    handleKeydown,
    focusFirstCandidate,
    currentTabStopId
  };
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
function isMouseEvent(event) {
  return event.pointerType === "mouse";
}
function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > point.y !== yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(e, area) {
  if (!area)
    return false;
  return pointInPolygon({ x: e.clientX, y: e.clientY }, area);
}
const MenuRootContext = new Context("Menu.Root");
const MenuMenuContext = new Context("Menu.Root | Menu.Sub");
const MenuContentContext = new Context("Menu.Content");
class MenuRootState {
  onClose;
  variant;
  isUsingKeyboard = new IsUsingKeyboard();
  dir;
  constructor(props) {
    this.onClose = props.onClose;
    this.dir = props.dir;
    this.variant = props.variant;
  }
  getAttr(name) {
    return `data-${this.variant.current}-${name}`;
  }
}
class MenuMenuState {
  root;
  open;
  contentId = box.with(() => "");
  contentNode = null;
  triggerNode = null;
  parentMenu;
  constructor(props, root, parentMenu) {
    this.root = root;
    this.open = props.open;
    this.parentMenu = parentMenu;
  }
  toggleOpen() {
    this.open.current = !this.open.current;
  }
  onOpen() {
    this.open.current = true;
  }
  onClose() {
    this.open.current = false;
  }
}
class MenuContentState {
  #id;
  contentRef;
  parentMenu;
  search = "";
  #loop;
  #timer = 0;
  pointerGraceTimer = 0;
  #pointerGraceIntent = null;
  #pointerDir = "right";
  #lastPointerX = 0;
  #handleTypeaheadSearch;
  rovingFocusGroup;
  isMounted;
  isFocusWithin = new IsFocusWithin(() => this.parentMenu.contentNode ?? void 0);
  constructor(props, parentMenu) {
    this.#id = props.id;
    this.#loop = props.loop;
    this.parentMenu = parentMenu;
    this.parentMenu.contentId = props.id;
    this.contentRef = props.ref;
    this.isMounted = props.isMounted;
    this.onkeydown = this.onkeydown.bind(this);
    this.onblur = this.onblur.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
    useRefById({
      id: this.#id,
      ref: this.contentRef,
      deps: () => this.parentMenu.open.current,
      onRefChange: (node) => {
        if (this.parentMenu.contentNode !== node) {
          this.parentMenu.contentNode = node;
        }
      }
    });
    this.#handleTypeaheadSearch = useDOMTypeahead().handleTypeaheadSearch;
    this.rovingFocusGroup = useRovingFocus({
      rootNodeId: this.parentMenu.contentId,
      candidateAttr: this.parentMenu.root.getAttr("item"),
      loop: this.#loop,
      orientation: box.with(() => "vertical")
    });
  }
  #getCandidateNodes() {
    const node = this.parentMenu.contentNode;
    if (!node) return [];
    const candidates = Array.from(node.querySelectorAll(`[${this.parentMenu.root.getAttr("item")}]:not([data-disabled])`));
    return candidates;
  }
  #isPointerMovingToSubmenu(e) {
    const isMovingTowards = this.#pointerDir === this.#pointerGraceIntent?.side;
    return isMovingTowards && isPointerInGraceArea(e, this.#pointerGraceIntent?.area);
  }
  onPointerGraceIntentChange(intent) {
    this.#pointerGraceIntent = intent;
  }
  onkeydown(e) {
    if (e.defaultPrevented) return;
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement(target) || !isHTMLElement(currentTarget)) return;
    const isKeydownInside = target.closest(`[${this.parentMenu.root.getAttr("content")}]`)?.id === this.parentMenu.contentId.current;
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
    if (kbdFocusedEl) return;
    if (e.code === "Space") return;
    const candidateNodes = this.#getCandidateNodes();
    if (isKeydownInside) {
      if (e.key === TAB) e.preventDefault();
      if (!isModifierKey && isCharacterKey) {
        this.#handleTypeaheadSearch(e.key, candidateNodes);
      }
    }
    if (e.target?.id !== this.parentMenu.contentId.current) return;
    if (!FIRST_LAST_KEYS.includes(e.key)) return;
    e.preventDefault();
    if (LAST_KEYS.includes(e.key)) {
      candidateNodes.reverse();
    }
    focusFirst(candidateNodes);
  }
  onblur(e) {
    if (!isElement(e.currentTarget)) return;
    if (!isElement(e.target)) return;
    if (!e.currentTarget.contains?.(e.target)) {
      window.clearTimeout(this.#timer);
      this.search = "";
    }
  }
  onfocus(_) {
    if (!this.parentMenu.root.isUsingKeyboard.current) return;
    afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onpointermove(e) {
    if (!isMouseEvent(e)) return;
    const target = e.target;
    if (!isElement(target)) return;
    const pointerXHasChanged = this.#lastPointerX !== e.clientX;
    const currentTarget = e.currentTarget;
    if (!isElement(currentTarget)) return;
    if (currentTarget.contains(target) && pointerXHasChanged) {
      const newDir = e.clientX > this.#lastPointerX ? "right" : "left";
      this.#pointerDir = newDir;
      this.#lastPointerX = e.clientX;
    }
  }
  onItemEnter(e) {
    if (this.#isPointerMovingToSubmenu(e)) return true;
    return false;
  }
  onItemLeave(e) {
    if (this.#isPointerMovingToSubmenu(e)) return;
    const contentNode = this.parentMenu.contentNode;
    contentNode?.focus();
    this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave(e) {
    if (this.#isPointerMovingToSubmenu(e)) return true;
    return false;
  }
  onOpenAutoFocus = (e) => {
    if (e.defaultPrevented) return;
    e.preventDefault();
    const contentNode = this.parentMenu.contentNode;
    contentNode?.focus();
  };
  handleInteractOutside(e) {
    if (!isElementOrSVGElement(e.target)) return;
    const triggerId = this.parentMenu.triggerNode?.id;
    if (e.target.id === triggerId) {
      e.preventDefault();
      return;
    }
    if (e.target.closest(`#${triggerId}`)) {
      e.preventDefault();
    }
  }
  #snippetProps = once(() => ({ open: this.parentMenu.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.#id.current,
    role: "menu",
    "aria-orientation": getAriaOrientation("vertical"),
    [this.parentMenu.root.getAttr("content")]: "",
    "data-state": getDataOpenClosed(this.parentMenu.open.current),
    onkeydown: this.onkeydown,
    onblur: this.onblur,
    onpointermove: this.onpointermove,
    onfocus: this.onfocus,
    dir: this.parentMenu.root.dir.current,
    style: { pointerEvents: "auto" }
  }));
  get props() {
    return this.#props();
  }
}
class MenuItemSharedState {
  content;
  ref;
  id;
  disabled;
  #isFocused = false;
  constructor(props, content) {
    this.content = content;
    this.id = props.id;
    this.disabled = props.disabled;
    this.ref = props.ref;
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
    useRefById({
      id: this.id,
      ref: this.ref,
      deps: () => this.content.isMounted.current
    });
  }
  onpointermove(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    if (this.disabled.current) {
      this.content.onItemLeave(e);
    } else {
      const defaultPrevented = this.content.onItemEnter(e);
      if (defaultPrevented) return;
      const item = e.currentTarget;
      if (!isHTMLElement(item)) return;
      item.focus();
    }
  }
  onpointerleave(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      if (!isMouseEvent(e)) return;
      this.content.onItemLeave(e);
    });
  }
  onfocus(e) {
    afterTick(() => {
      if (e.defaultPrevented || this.disabled.current) return;
      this.#isFocused = true;
    });
  }
  onblur(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      this.#isFocused = false;
    });
  }
  #props = once(() => ({
    id: this.id.current,
    tabindex: -1,
    role: "menuitem",
    "aria-disabled": getAriaDisabled(this.disabled.current),
    "data-disabled": getDataDisabled(this.disabled.current),
    "data-highlighted": this.#isFocused ? "" : void 0,
    [this.content.parentMenu.root.getAttr("item")]: "",
    //
    onpointermove: this.onpointermove,
    onpointerleave: this.onpointerleave,
    onfocus: this.onfocus,
    onblur: this.onblur
  }));
  get props() {
    return this.#props();
  }
}
class MenuItemState {
  #item;
  #onSelect;
  #closeOnSelect;
  #isPointerDown = false;
  root;
  constructor(props, item) {
    this.#item = item;
    this.root = item.content.parentMenu.root;
    this.#onSelect = props.onSelect;
    this.#closeOnSelect = props.closeOnSelect;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  #handleSelect() {
    if (this.#item.disabled.current) return;
    const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
    this.#onSelect.current(selectEvent);
    afterTick(() => {
      if (selectEvent.defaultPrevented) {
        this.#item.content.parentMenu.root.isUsingKeyboard.current = false;
        return;
      }
      if (this.#closeOnSelect.current) {
        this.#item.content.parentMenu.root.onClose();
      }
    });
  }
  onkeydown(e) {
    const isTypingAhead = this.#item.content.search !== "";
    if (this.#item.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SELECTION_KEYS.includes(e.key)) {
      if (!isHTMLElement(e.currentTarget)) return;
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(_) {
    if (this.#item.disabled.current) return;
    this.#handleSelect();
  }
  onpointerup(e) {
    if (e.defaultPrevented) return;
    if (!this.#isPointerDown) {
      if (!isHTMLElement(e.currentTarget)) return;
      e.currentTarget?.click();
    }
  }
  onpointerdown(_) {
    this.#isPointerDown = true;
  }
  #props = once(() => mergeProps(this.#item.props, {
    onclick: this.onclick,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
class DropdownMenuTriggerState {
  #id;
  #ref;
  #parentMenu;
  #disabled;
  constructor(props, parentMenu) {
    this.#ref = props.ref;
    this.#id = props.id;
    this.#parentMenu = parentMenu;
    this.#disabled = props.disabled;
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    useRefById({
      id: this.#id,
      ref: this.#ref,
      onRefChange: (ref) => {
        this.#parentMenu.triggerNode = ref;
      }
    });
  }
  onpointerdown(e) {
    if (this.#disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    if (e.button === 0 && e.ctrlKey === false) {
      this.#parentMenu.toggleOpen();
      if (!this.#parentMenu.open.current) e.preventDefault();
    }
  }
  onpointerup(e) {
    if (this.#disabled.current) return;
    if (e.pointerType === "touch") {
      e.preventDefault();
      this.#parentMenu.toggleOpen();
    }
  }
  onkeydown(e) {
    if (this.#disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      this.#parentMenu.toggleOpen();
      e.preventDefault();
      return;
    }
    if (e.key === ARROW_DOWN) {
      this.#parentMenu.onOpen();
      e.preventDefault();
    }
  }
  #ariaControls = once(() => {
    if (this.#parentMenu.open.current && this.#parentMenu.contentId.current) return this.#parentMenu.contentId.current;
    return void 0;
  });
  #props = once(() => ({
    id: this.#id.current,
    disabled: this.#disabled.current,
    "aria-haspopup": "menu",
    "aria-expanded": getAriaExpanded(this.#parentMenu.open.current),
    "aria-controls": this.#ariaControls(),
    "data-disabled": getDataDisabled(this.#disabled.current),
    "data-state": getDataOpenClosed(this.#parentMenu.open.current),
    [this.#parentMenu.root.getAttr("trigger")]: "",
    //
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
function useMenuRoot(props) {
  return MenuRootContext.set(new MenuRootState(props));
}
function useMenuMenu(root, props) {
  return MenuMenuContext.set(new MenuMenuState(props, root));
}
function useMenuDropdownTrigger(props) {
  return new DropdownMenuTriggerState(props, MenuMenuContext.get());
}
function useMenuContent(props) {
  return MenuContentContext.set(new MenuContentState(props, MenuMenuContext.get()));
}
function useMenuItem(props) {
  const item = new MenuItemSharedState(props, MenuContentContext.get());
  return new MenuItemState(props, item);
}
function Menu_item($$payload, $$props) {
  push();
  let {
    child,
    children,
    ref = null,
    id = useId(),
    disabled = false,
    onSelect = noop,
    closeOnSelect = true,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const itemState = useMenuItem({
    id: box.with(() => id),
    disabled: box.with(() => disabled),
    onSelect: box.with(() => onSelect),
    ref: box.with(() => ref, (v) => ref = v),
    closeOnSelect: box.with(() => closeOnSelect)
  });
  const mergedProps = mergeProps(restProps, itemState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Menu($$payload, $$props) {
  push();
  let {
    open = false,
    dir = "ltr",
    onOpenChange = noop,
    _internal_variant: variant = "dropdown-menu",
    children
  } = $$props;
  const root = useMenuRoot({
    variant: box.with(() => variant),
    dir: box.with(() => dir),
    onClose: () => {
      open = false;
      onOpenChange(false);
    }
  });
  useMenuMenu(root, {
    open: box.with(() => open, (v) => {
      open = v;
      onOpenChange(v);
    })
  });
  Floating_layer($$payload, {
    children: ($$payload2) => {
      children?.($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { open });
  pop();
}
function Dropdown_menu_content$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    child,
    children,
    ref = null,
    loop = true,
    onInteractOutside = noop,
    onEscapeKeydown = noop,
    forceMount = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let isMounted = false;
  const contentState = useMenuContent({
    id: box.with(() => id),
    loop: box.with(() => loop),
    ref: box.with(() => ref, (v) => ref = v),
    isMounted: box.with(() => isMounted)
  });
  const mergedProps = mergeProps(restProps, contentState.props);
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (forceMount) {
      $$payload2.out += "<!--[-->";
      {
        let popper = function($$payload3, { props, wrapperProps }) {
          const finalProps = mergeProps(props, {
            style: getFloatingContentCSSVars("dropdown-menu")
          });
          if (child) {
            $$payload3.out += "<!--[-->";
            child($$payload3, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$payload3.out += `<!---->`;
          } else {
            $$payload3.out += "<!--[!-->";
            $$payload3.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
            children?.($$payload3);
            $$payload3.out += `<!----></div></div>`;
          }
          $$payload3.out += `<!--]--> `;
          Mounted($$payload3, {
            get isMounted() {
              return isMounted;
            },
            set isMounted($$value) {
              isMounted = $$value;
              $$settled = false;
            }
          });
          $$payload3.out += `<!---->`;
        };
        Popper_layer_force_mount($$payload2, spread_props([
          mergedProps,
          {
            enabled: contentState.parentMenu.open.current,
            onInteractOutside: handleInteractOutside,
            onEscapeKeydown: handleEscapeKeydown,
            trapFocus: true,
            loop,
            forceMount: true,
            id,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$payload2.out += "<!--[!-->";
      if (!forceMount) {
        $$payload2.out += "<!--[-->";
        {
          let popper = function($$payload3, { props, wrapperProps }) {
            const finalProps = mergeProps(props, {
              style: getFloatingContentCSSVars("dropdown-menu")
            });
            if (child) {
              $$payload3.out += "<!--[-->";
              child($$payload3, {
                props: finalProps,
                wrapperProps,
                ...contentState.snippetProps
              });
              $$payload3.out += `<!---->`;
            } else {
              $$payload3.out += "<!--[!-->";
              $$payload3.out += `<div${spread_attributes({ ...wrapperProps })}><div${spread_attributes({ ...finalProps })}>`;
              children?.($$payload3);
              $$payload3.out += `<!----></div></div>`;
            }
            $$payload3.out += `<!--]--> `;
            Mounted($$payload3, {
              get isMounted() {
                return isMounted;
              },
              set isMounted($$value) {
                isMounted = $$value;
                $$settled = false;
              }
            });
            $$payload3.out += `<!---->`;
          };
          Popper_layer($$payload2, spread_props([
            mergedProps,
            {
              present: contentState.parentMenu.open.current,
              onInteractOutside: handleInteractOutside,
              onEscapeKeydown: handleEscapeKeydown,
              trapFocus: true,
              loop,
              forceMount: false,
              id,
              popper,
              $$slots: { popper: true }
            }
          ]));
        }
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]-->`;
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
function Menu_trigger($$payload, $$props) {
  push();
  let {
    id = useId(),
    ref = null,
    child,
    children,
    disabled = false,
    type = "button",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const triggerState = useMenuDropdownTrigger({
    id: box.with(() => id),
    disabled: box.with(() => disabled ?? false),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, triggerState.props, { type });
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
  bind_props($$props, { ref });
  pop();
}
const ROOT_ATTR = "data-pagination-root";
const PAGE_ATTR = "data-pagination-page";
const PREV_ATTR = "data-pagination-prev";
const NEXT_ATTR = "data-pagination-next";
class PaginationRootState {
  id;
  ref;
  orientation;
  count;
  perPage;
  siblingCount;
  page;
  loop;
  #totalPages = once(() => {
    if (this.count.current === 0) return 1;
    return Math.ceil(this.count.current / this.perPage.current);
  });
  get totalPages() {
    return this.#totalPages();
  }
  #range = once(() => {
    const start = (this.page.current - 1) * this.perPage.current;
    const end = Math.min(start + this.perPage.current, this.count.current);
    return { start, end };
  });
  get range() {
    return this.#range();
  }
  #pages = once(() => getPageItems({
    page: this.page.current,
    totalPages: this.totalPages,
    siblingCount: this.siblingCount.current
  }));
  get pages() {
    return this.#pages();
  }
  constructor(props) {
    this.id = props.id;
    this.perPage = props.perPage;
    this.count = props.count;
    this.siblingCount = props.siblingCount;
    this.page = props.page;
    this.orientation = props.orientation;
    this.loop = props.loop;
    this.ref = props.ref;
    useRefById({ id: this.id, ref: this.ref });
  }
  setPage(page) {
    this.page.current = page;
  }
  getPageTriggerNodes() {
    const node = this.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll("[data-pagination-page]"));
  }
  getButtonNode(type) {
    const node = this.ref.current;
    if (!node) return;
    return node.querySelector(`[data-pagination-${type}]`);
  }
  #hasPrevPage = once(() => this.page.current > 1);
  get hasPrevPage() {
    return this.#hasPrevPage();
  }
  #hasNextPage = once(() => this.page.current < this.totalPages);
  get hasNextPage() {
    return this.#hasNextPage();
  }
  prevPage() {
    this.page.current = Math.max(this.page.current - 1, 1);
  }
  nextPage() {
    this.page.current = Math.min(this.page.current + 1, this.totalPages);
  }
  #snippetProps = once(() => ({
    pages: this.pages,
    range: this.range,
    currentPage: this.page.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  #props = once(() => ({
    id: this.id.current,
    "data-orientation": getDataOrientation(this.orientation.current),
    [ROOT_ATTR]: ""
  }));
  get props() {
    return this.#props();
  }
}
class PaginationPageState {
  #id;
  #ref;
  #root;
  #disabled;
  page;
  #isSelected = once(() => this.page.current.value === this.#root.page.current);
  constructor(props, root) {
    this.#root = root;
    this.#id = props.id;
    this.page = props.page;
    this.#ref = props.ref;
    this.#disabled = props.disabled;
    useRefById({ id: this.#id, ref: this.#ref });
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.#disabled.current) return;
    if (e.button !== 0) return;
    this.#root.setPage(this.page.current.value);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#root.setPage(this.page.current.value);
    } else {
      handleTriggerKeydown(e, this.#ref.current, this.#root);
    }
  }
  #props = once(() => ({
    id: this.#id.current,
    "aria-label": `Page ${this.page.current.value}`,
    "data-value": `${this.page.current.value}`,
    "data-selected": this.#isSelected() ? "" : void 0,
    [PAGE_ATTR]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
class PaginationButtonState {
  id;
  #ref;
  #disabled;
  #root;
  type;
  constructor(props, root) {
    this.#root = root;
    this.id = props.id;
    this.type = props.type;
    this.#ref = props.ref;
    this.#disabled = props.disabled;
    useRefById({ id: this.id, ref: this.#ref });
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #action() {
    this.type === "prev" ? this.#root.prevPage() : this.#root.nextPage();
  }
  #isDisabled = once(() => {
    if (this.#disabled.current) return true;
    if (this.type === "prev") return !this.#root.hasPrevPage;
    if (this.type === "next") return !this.#root.hasNextPage;
    return false;
  });
  onclick(e) {
    if (this.#disabled.current) return;
    if (e.button !== 0) return;
    this.#action();
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#action();
    } else {
      handleTriggerKeydown(e, this.#ref.current, this.#root);
    }
  }
  #props = once(() => ({
    id: this.id.current,
    [PREV_ATTR]: this.type === "prev" ? "" : void 0,
    [NEXT_ATTR]: this.type === "next" ? "" : void 0,
    disabled: this.#isDisabled(),
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown
  }));
  get props() {
    return this.#props();
  }
}
function handleTriggerKeydown(e, node, root) {
  if (!node || !root.ref.current) return;
  const items = root.getPageTriggerNodes();
  const nextButton = root.getButtonNode("next");
  const prevButton = root.getButtonNode("prev");
  if (prevButton) {
    items.unshift(prevButton);
  }
  if (nextButton) {
    items.push(nextButton);
  }
  const currentIndex = items.indexOf(node);
  const dir = getElemDirection(root.ref.current);
  const { nextKey, prevKey } = getDirectionalKeys(dir, root.orientation.current);
  const loop = root.loop.current;
  const keyToIndex = {
    [nextKey]: currentIndex + 1,
    [prevKey]: currentIndex - 1,
    [HOME]: 0,
    [END]: items.length - 1
  };
  let itemIndex = keyToIndex[e.key];
  if (itemIndex === void 0) return;
  e.preventDefault();
  if (itemIndex < 0 && loop) {
    itemIndex = items.length - 1;
  } else if (itemIndex === items.length && loop) {
    itemIndex = 0;
  }
  const itemToFocus = items[itemIndex];
  if (!itemToFocus) return;
  itemToFocus.focus();
}
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let i = 2; i <= totalPages - 1; i++) {
      pagesToShow.add(i);
    }
  } else if (page < firstItemWithSiblings) {
    for (let i = 2; i <= Math.min(firstItemWithSiblings, totalPages); i++) {
      pagesToShow.add(i);
    }
  } else if (page > lastItemWithSiblings) {
    for (let i = totalPages - 1; i >= Math.max(lastItemWithSiblings, 2); i--) {
      pagesToShow.add(i);
    }
  } else {
    for (let i = Math.max(page - siblingCount, 2); i <= Math.min(page + siblingCount, totalPages); i++) {
      pagesToShow.add(i);
    }
  }
  function addPage(value) {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  }
  function addEllipsis() {
    const id = useId();
    pageItems.push({ type: "ellipsis", key: `ellipsis-${id}` });
  }
  let lastNumber = 0;
  for (const p of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (p - lastNumber > 1) {
      addEllipsis();
    }
    addPage(p);
    lastNumber = p;
  }
  return pageItems;
}
const PaginationRootContext = new Context("Pagination.Root");
function usePaginationRoot(props) {
  return PaginationRootContext.set(new PaginationRootState(props));
}
function usePaginationPage(props) {
  return new PaginationPageState(props, PaginationRootContext.get());
}
function usePaginationButton(props) {
  return new PaginationButtonState(props, PaginationRootContext.get());
}
function Pagination$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    count,
    perPage = 1,
    page = 1,
    ref = null,
    siblingCount = 1,
    onPageChange = noop,
    loop = false,
    orientation = "horizontal",
    child,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const rootState = usePaginationRoot({
    id: box.with(() => id),
    count: box.with(() => count),
    perPage: box.with(() => perPage),
    page: box.with(() => page, (v) => {
      page = v;
      onPageChange?.(v);
    }),
    loop: box.with(() => loop),
    siblingCount: box.with(() => siblingCount),
    orientation: box.with(() => orientation),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, rootState.props);
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps, ...rootState.snippetProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload, rootState.snippetProps);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { page, ref });
  pop();
}
function Pagination_prev_button$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    child,
    children,
    ref = null,
    type = "button",
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const prevButtonState = usePaginationButton({
    type: "prev",
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, prevButtonState.props, { type });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Pagination_next_button$1($$payload, $$props) {
  push();
  let {
    id = useId(),
    child,
    children,
    ref = null,
    type = "button",
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const nextButtonState = usePaginationButton({
    type: "next",
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, nextButtonState.props, { type });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...mergedProps })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Pagination_page($$payload, $$props) {
  push();
  let {
    id = useId(),
    page,
    child,
    children,
    type = "button",
    ref = null,
    disabled = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const pageState = usePaginationPage({
    id: box.with(() => id),
    page: box.with(() => page),
    ref: box.with(() => ref, (v) => ref = v),
    disabled: box.with(() => Boolean(disabled))
  });
  const mergedProps = mergeProps(restProps, pageState.props, { type });
  if (child) {
    $$payload.out += "<!--[-->";
    child($$payload, { props: mergedProps });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...mergedProps })}>`;
    if (children) {
      $$payload.out += "<!--[-->";
      children?.($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(page.value)}`;
    }
    $$payload.out += `<!--]--></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
let isUsingKeyboard = false;
class IsUsingKeyboard {
  static _refs = 0;
  // Reference counting to avoid multiple listeners.
  static _cleanup;
  constructor() {
  }
  get current() {
    return isUsingKeyboard;
  }
  set current(value) {
    isUsingKeyboard = value;
  }
}
function Dropdown_menu_content($$payload, $$props) {
  push();
  let {
    ref = null,
    sideOffset = 4,
    portalProps,
    class: className,
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
          Dropdown_menu_content$1($$payload3, spread_props([
            {
              sideOffset,
              class: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md outline-none", className)
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
function Dropdown_menu_item($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    inset,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Menu_item($$payload2, spread_props([
      {
        class: cn("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className)
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
const Root = Menu;
const Trigger = Menu_trigger;
function Pagination($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    count = 0,
    perPage = 10,
    page = 1,
    siblingCount = 1,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Pagination$1($$payload2, spread_props([
      {
        class: cn("mx-auto flex w-full flex-col items-center", className),
        count,
        perPage,
        siblingCount
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
        get page() {
          return page;
        },
        set page($$value) {
          page = $$value;
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
  bind_props($$props, { ref, page });
  pop();
}
function Pagination_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<ul${spread_attributes({
    class: clsx(cn("flex flex-row items-center gap-1", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ref });
  pop();
}
function Pagination_item($$payload, $$props) {
  let {
    ref = null,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<li${spread_attributes({ ...restProps })}>`;
  children?.($$payload);
  $$payload.out += `<!----></li>`;
  bind_props($$props, { ref });
}
function Pagination_link($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    size = "icon",
    isActive = false,
    page,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  function Fallback2($$payload2) {
    $$payload2.out += `<!---->${escape_html(page.value)}`;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!---->`;
    Pagination_page($$payload2, spread_props([
      {
        page,
        class: cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className),
        children: children || Fallback2
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
function Fallback$1($$payload) {
  Chevron_left($$payload, { class: "size-4" });
  $$payload.out += `<!----> <span>Previous</span>`;
}
function Pagination_prev_button($$payload, $$props) {
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
    Pagination_prev_button$1($$payload2, spread_props([
      {
        class: cn(buttonVariants({ variant: "ghost", class: "gap-1 pl-2.5" }), className),
        children: children || Fallback$1
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
function Fallback($$payload) {
  $$payload.out += `<span>Next</span> `;
  Chevron_right($$payload, { class: "size-4" });
  $$payload.out += `<!---->`;
}
function Pagination_next_button($$payload, $$props) {
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
    Pagination_next_button$1($$payload2, spread_props([
      {
        class: cn(buttonVariants({ variant: "ghost", class: "gap-1 pr-2.5" }), className),
        children: children || Fallback
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
function Pagination_ellipsis($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<span${spread_attributes({
    "aria-hidden": "true",
    class: clsx(cn("flex size-9 items-center justify-center", className)),
    ...restProps
  })}>`;
  Ellipsis($$payload, { class: "size-4" });
  $$payload.out += `<!----> <span class="sr-only">More pages</span></span>`;
  bind_props($$props, { ref });
  pop();
}
function Table($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div class="relative w-full overflow-auto"><table${spread_attributes({
    class: clsx(cn("w-full caption-bottom text-sm", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></table></div>`;
  bind_props($$props, { ref });
  pop();
}
function Table_body($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<tbody${spread_attributes({
    class: clsx(cn("[&_tr:last-child]:border-0", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></tbody>`;
  bind_props($$props, { ref });
  pop();
}
function Table_cell($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<td${spread_attributes({
    class: clsx(cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></td>`;
  bind_props($$props, { ref });
  pop();
}
function Table_head($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<th${spread_attributes({
    class: clsx(cn("text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></th>`;
  bind_props($$props, { ref });
  pop();
}
function Table_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<thead${spread_attributes({
    class: clsx(cn("[&_tr]:border-b", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></thead>`;
  bind_props($$props, { ref });
  pop();
}
function Table_row($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<tr${spread_attributes({
    class: clsx(cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></tr>`;
  bind_props($$props, { ref });
  pop();
}
function statsCard($$payload, props) {
  $$payload.out += `<!---->`;
  Card($$payload, {
    class: "bg-transparent",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        class: "flex flex-row items-center justify-between space-y-0 pb-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_title($$payload3, {
            class: "text-sm font-medium",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(props.title)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          props.icon($$payload3, { class: "text-muted-foreground h-4 w-4" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="text-2xl font-bold">${escape_html(props.value)}</div> <p class="text-muted-foreground text-xs">${escape_html(props.description)}</p>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let searchQuery = "";
  let selectedStatus = "";
  let selectedFacility = "";
  let currentPage = 1;
  const mediaQuery = new MediaQuery("(min-width: 768px)");
  let isDesktop = mediaQuery.current;
  const perPage = isDesktop ? 10 : 5;
  const siblingCount = isDesktop ? 1 : 0;
  const slicer = (text, maxLength = 15) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const filteredSubmissions = data.recentSubmissions.filter((submission) => {
    const matchesSearch = searchQuery === "" || Object.values(submission).some((value) => value?.toString().toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = selectedStatus === "" || selectedStatus === "All" || submission.sex === selectedStatus;
    const matchesFacility = selectedFacility === "";
    return matchesSearch && matchesStatus && matchesFacility;
  });
  const paginatedSubmissions = filteredSubmissions.slice((currentPage - 1) * perPage, currentPage * perPage);
  Math.ceil(filteredSubmissions.length / perPage);
  function handleExport() {
    if (data.recentSubmissions.length > 0) {
      exportToCSV(data.recentSubmissions, "clinical-audit-records.csv");
    }
  }
  function onPageChange(page) {
    currentPage = page;
  }
  function calculateAge(birthDate, deathDate) {
    const birth = new Date(birthDate);
    const death = new Date(deathDate);
    const ageInMilliseconds = death.getTime() - birth.getTime();
    const ageInYears = ageInMilliseconds / (1e3 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
  const pediatricDeaths = data.recentSubmissions.filter((s) => calculateAge(s.dateOfBirth, s.dateOfDeath) < 15).length;
  const adultDeaths = data.recentSubmissions.filter((s) => calculateAge(s.dateOfBirth, s.dateOfDeath) >= 15).length;
  const statsCards = [
    {
      title: "Total Records",
      value: data.totalRecords,
      description: "Total clinical audit records",
      icon: Library
    },
    {
      title: "No. of Pediatric Death",
      value: pediatricDeaths,
      description: "Deaths under 15 years",
      icon: Baby
    },
    {
      title: "No. of Adult Death",
      value: adultDeaths,
      description: "Deaths 15 years and above",
      icon: Person_standing
    },
    {
      title: "No. of HIV Related death",
      value: data.recentSubmissions.filter((s) => s.hIVRelatedDeath?.toLowerCase().includes("Yes")).length,
      description: "HIV/AIDS related deaths",
      icon: Ambulance
    }
  ];
  const each_array = ensure_array_like(statsCards);
  $$payload.out += `<div class="flex min-h-screen w-full flex-col"><main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8"><div class="mx-auto w-full max-w-7xl"><div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-10"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let card = each_array[$$index];
    statsCard($$payload, card);
  }
  $$payload.out += `<!--]--></div> <div class="w-full"><div class="flex items-center justify-between py-4 border-b"><div class="flex items-center gap-2">`;
  Input($$payload, {
    placeholder: "Search records...",
    value: searchQuery,
    oninput: (e) => searchQuery = e.currentTarget.value,
    class: "w-[400px]"
  });
  $$payload.out += `<!----></div> <div class="flex items-center gap-2"><!---->`;
  Root($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Trigger($$payload2, {
        children: ($$payload3) => {
          Button($$payload3, {
            variant: "outline",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(selectedStatus || "Filter by Sex")} `;
              Chevron_down($$payload4, { class: "ml-2 h-4 w-4" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Dropdown_menu_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Dropdown_menu_item($$payload3, {
            onSelect: () => selectedStatus = "All",
            children: ($$payload4) => {
              $$payload4.out += `<!---->All`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Dropdown_menu_item($$payload3, {
            onSelect: () => selectedStatus = "Male",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Male`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Dropdown_menu_item($$payload3, {
            onSelect: () => selectedStatus = "Female",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Female`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    variant: "outline",
    onclick: handleExport,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Export to CSV`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <!---->`;
  Card($$payload, {
    class: "bg-transparent",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        class: "flex flex-row items-center",
        children: ($$payload3) => {
          $$payload3.out += `<div class="grid gap-2"><!---->`;
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Template Submissions`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!---->`;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->clinical audit records.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_content($$payload2, {
        class: "overflow-x-auto",
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Table($$payload3, {
            class: "w-full",
            children: ($$payload4) => {
              $$payload4.out += `<!---->`;
              Table_header($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->`;
                  Table_row($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Patient ID`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Facility`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Sex`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Age at Death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->ART Start Date`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->HIV Related Death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Cause of Death`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!----> <!---->`;
                      Table_head($$payload6, {
                        class: "font-bold text-white whitespace-nowrap",
                        children: ($$payload7) => {
                          $$payload7.out += `<!---->Reviewer`;
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
              $$payload4.out += `<!----> <!---->`;
              Table_body($$payload4, {
                children: ($$payload5) => {
                  if (!data.success) {
                    $$payload5.out += "<!--[-->";
                    $$payload5.out += `<!---->`;
                    Table_row($$payload5, {
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->`;
                        Table_cell($$payload6, {
                          colspan: 9,
                          class: "text-center text-destructive",
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->Error loading data. Please try again.`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  } else {
                    $$payload5.out += "<!--[!-->";
                    if (paginatedSubmissions.length === 0) {
                      $$payload5.out += "<!--[-->";
                      $$payload5.out += `<!---->`;
                      Table_row($$payload5, {
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->`;
                          Table_cell($$payload6, {
                            colspan: 9,
                            class: "text-center",
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->No records found.`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out += `<!---->`;
                    } else {
                      $$payload5.out += "<!--[!-->";
                      const each_array_1 = ensure_array_like(paginatedSubmissions);
                      $$payload5.out += `<!--[-->`;
                      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
                        let submission = each_array_1[$$index_1];
                        $$payload5.out += `<!---->`;
                        Table_row($$payload5, {
                          children: ($$payload6) => {
                            $$payload6.out += `<!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              title: submission.uniquePatientId,
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(slicer(submission.uniquePatientId))}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              title: submission.facility,
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(slicer(submission.facility))}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(submission.sex)}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(calculateAge(submission.dateOfBirth, submission.dateOfDeath))} years`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(submission.artStartDate)}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(submission.hIVRelatedDeath)}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              title: submission.causeOfDeath,
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(slicer(submission.causeOfDeath))}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!----> <!---->`;
                            Table_cell($$payload6, {
                              class: "whitespace-nowrap",
                              title: submission.reviewerName,
                              children: ($$payload7) => {
                                $$payload7.out += `<!---->${escape_html(slicer(submission.reviewerName))}`;
                              },
                              $$slots: { default: true }
                            });
                            $$payload6.out += `<!---->`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload5.out += `<!---->`;
                      }
                      $$payload5.out += `<!--]-->`;
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="mt-4"><!---->`;
          {
            let children = function($$payload4, { pages, currentPage: activePage }) {
              $$payload4.out += `<!---->`;
              Pagination_content($$payload4, {
                children: ($$payload5) => {
                  const each_array_2 = ensure_array_like(pages);
                  $$payload5.out += `<!---->`;
                  Pagination_item($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Pagination_prev_button($$payload6, {});
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> <!--[-->`;
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let page = each_array_2[$$index_2];
                    if (page.type === "ellipsis") {
                      $$payload5.out += "<!--[-->";
                      $$payload5.out += `<!---->`;
                      Pagination_item($$payload5, {
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->`;
                          Pagination_ellipsis($$payload6, {});
                          $$payload6.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out += `<!---->`;
                    } else {
                      $$payload5.out += "<!--[!-->";
                      $$payload5.out += `<!---->`;
                      Pagination_item($$payload5, {
                        children: ($$payload6) => {
                          $$payload6.out += `<!---->`;
                          Pagination_link($$payload6, {
                            page,
                            isActive: activePage === page.value,
                            children: ($$payload7) => {
                              $$payload7.out += `<!---->${escape_html(page.value)}`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!---->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out += `<!---->`;
                    }
                    $$payload5.out += `<!--]-->`;
                  }
                  $$payload5.out += `<!--]--> <!---->`;
                  Pagination_item($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->`;
                      Pagination_next_button($$payload6, {});
                      $$payload6.out += `<!---->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            };
            Pagination($$payload3, {
              count: filteredSubmissions.length,
              perPage,
              siblingCount,
              page: currentPage,
              onPageChange,
              children,
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></main></div>`;
  pop();
}
export {
  _page as default
};
