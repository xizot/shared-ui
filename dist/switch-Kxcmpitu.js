import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as fe from "@radix-ui/react-checkbox";
import { CheckIcon as le, XIcon as Re, SearchIcon as Me, XCircle as qe, ChevronDown as pe, Plus as Te, ChevronLeftIcon as Ie, ChevronRightIcon as Ee, ChevronDownIcon as ce, CalendarIcon as Se, Upload as Pe, CheckCircle2 as Fe, AlertCircle as je, X as Le, Image as $e, File as Oe, ChevronUpIcon as He, CircleIcon as Ue } from "lucide-react";
import * as u from "react";
import { F as oe, c as n, L as J, a as W, b as ge, S as _e, f as se } from "./textarea-ByQixttw.js";
import { Command as Q } from "cmdk";
import * as B from "@radix-ui/react-dialog";
import { startOfMonth as K, format as Y, setSeconds as he, setMinutes as xe, setHours as be, endOfDay as Ae, startOfDay as We, endOfWeek as Ve, startOfWeek as Ye, endOfMonth as ve, subWeeks as we, subMonths as ae } from "date-fns";
import * as ee from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as Ce, DayPicker as Be } from "react-day-picker";
import * as re from "@radix-ui/react-popover";
import Ge from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import * as ye from "@radix-ui/react-progress";
import * as L from "@radix-ui/react-select";
import * as ie from "@radix-ui/react-radio-group";
import * as Ne from "@radix-ui/react-switch";
function St({
  className: e,
  size: r = "md",
  ...o
}) {
  const i = oe[r ?? "md"];
  return /* @__PURE__ */ t(
    fe.Root,
    {
      "data-slot": "checkbox",
      "data-size": r,
      className: n(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i.icon,
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        fe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(le, { className: i.icon })
        }
      )
    }
  );
}
function Xe({ ...e }) {
  return /* @__PURE__ */ t(B.Root, { "data-slot": "dialog", ...e });
}
function _t({ ...e }) {
  return /* @__PURE__ */ t(B.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Ke({ ...e }) {
  return /* @__PURE__ */ t(B.Portal, { "data-slot": "dialog-portal", ...e });
}
function Ct({ ...e }) {
  return /* @__PURE__ */ t(B.Close, { "data-slot": "dialog-close", ...e });
}
function Qe({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    B.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...r
    }
  );
}
function Je({
  className: e,
  children: r,
  showCloseButton: o = !0,
  ...i
}) {
  return /* @__PURE__ */ m(Ke, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ t(Qe, {}),
    /* @__PURE__ */ m(
      B.Content,
      {
        "data-slot": "dialog-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...i,
        children: [
          r,
          o && /* @__PURE__ */ m(
            B.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ t(Re, {}),
                /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Ze({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-header",
      className: n("flex flex-col gap-2 text-center sm:text-left", e),
      ...r
    }
  );
}
function Dt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-footer",
      className: n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r
    }
  );
}
function et({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    B.Title,
    {
      "data-slot": "dialog-title",
      className: n("text-lg leading-none font-semibold", e),
      ...r
    }
  );
}
function tt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    B.Description,
    {
      "data-slot": "dialog-description",
      className: n("text-muted-foreground text-sm", e),
      ...r
    }
  );
}
function De({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Q,
    {
      "data-slot": "command",
      className: n(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...r
    }
  );
}
function zt({
  title: e = "Command Palette",
  description: r = "Search for a command to run...",
  children: o,
  className: i,
  showCloseButton: c = !0,
  ...x
}) {
  return /* @__PURE__ */ m(Xe, { ...x, children: [
    /* @__PURE__ */ m(Ze, { className: "sr-only", children: [
      /* @__PURE__ */ t(et, { children: e }),
      /* @__PURE__ */ t(tt, { children: r })
    ] }),
    /* @__PURE__ */ t(
      Je,
      {
        className: n("overflow-hidden p-0", i),
        showCloseButton: c,
        children: /* @__PURE__ */ t(De, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: o })
      }
    )
  ] });
}
function rt({
  className: e,
  label: r,
  error: o,
  required: i,
  id: c,
  ...x
}) {
  const f = r || o, b = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: n(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        o && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t(Me, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          Q.Input,
          {
            id: c,
            "data-slot": "command-input",
            "aria-invalid": !!o,
            className: n(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              o && "focus-visible:ring-destructive",
              e
            ),
            ...x
          }
        )
      ]
    }
  ) });
  return f ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(J, { htmlFor: c, children: [
      r,
      i && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    b,
    o && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: o })
  ] }) : b;
}
function nt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Q.List,
    {
      "data-slot": "command-list",
      className: n("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...r
    }
  );
}
function at({ ...e }) {
  return /* @__PURE__ */ t(
    Q.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function ot({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Q.Group,
    {
      "data-slot": "command-group",
      className: n(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...r
    }
  );
}
function Rt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Q.Separator,
    {
      "data-slot": "command-separator",
      className: n("bg-border -mx-1 h-px", e),
      ...r
    }
  );
}
function st({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Q.Item,
    {
      "data-slot": "command-item",
      className: n(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Mt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "command-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...r
    }
  );
}
function de({ ...e }) {
  return /* @__PURE__ */ t(re.Root, { "data-slot": "popover", ...e });
}
function ue({ ...e }) {
  return /* @__PURE__ */ t(re.Trigger, { "data-slot": "popover-trigger", ...e });
}
function me({
  className: e,
  align: r = "center",
  sideOffset: o = 4,
  ...i
}) {
  return /* @__PURE__ */ t(re.Portal, { children: /* @__PURE__ */ t(
    re.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: o,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...i
    }
  ) });
}
function qt({ ...e }) {
  return /* @__PURE__ */ t(re.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Tt({
  options: e,
  value: r,
  onChange: o,
  label: i,
  error: c,
  required: x,
  placeholder: f = "Select option...",
  searchPlaceholder: b = "Search...",
  emptyMessage: d = "No results found.",
  disabled: h = !1,
  readonly: v = !1,
  size: N = "md",
  showClearIcon: T = !0,
  showArrowIcon: I = !0,
  showSearch: D = !0,
  showCreate: E = !1,
  onCreate: F,
  createLabel: a,
  suffix: s,
  className: w,
  triggerClassName: y,
  popoverClassName: H
}) {
  const [$, P] = u.useState(!1), [z, R] = u.useState("");
  u.useEffect(() => {
    $ || R("");
  }, [$]);
  const _ = u.useMemo(
    () => e.find((p) => p.id === r),
    [e, r]
  ), U = !h && !v && !!r, O = (p) => {
    o?.(p.id, p), P(!1);
  }, j = (p) => {
    p.preventDefault(), p.stopPropagation(), U && o?.("", void 0);
  }, l = /* @__PURE__ */ m(de, { open: $, onOpenChange: P, children: [
    /* @__PURE__ */ t(ue, { asChild: !0, children: /* @__PURE__ */ m(
      W,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": $,
        disabled: h,
        size: N,
        className: n(
          "w-full justify-between group/combobox",
          !r && "text-muted-foreground",
          c && "border-destructive",
          y
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: _ ? _.name : f }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            r && U ? /* @__PURE__ */ m(
              "span",
              {
                onMouseDown: (p) => {
                  p.preventDefault(), p.stopPropagation();
                },
                onClick: j,
                className: "cursor-pointer",
                children: [
                  T && /* @__PURE__ */ t(qe, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  I && /* @__PURE__ */ t(pe, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : I && /* @__PURE__ */ t(pe, { className: "text-muted-foreground h-4 w-4" }),
            s
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      me,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", H),
        align: "start",
        children: /* @__PURE__ */ m(De, { children: [
          D && /* @__PURE__ */ t(
            rt,
            {
              placeholder: b,
              value: z,
              onValueChange: R
            }
          ),
          /* @__PURE__ */ m(nt, { children: [
            /* @__PURE__ */ t(at, { children: /* @__PURE__ */ m("div", { className: "flex flex-col items-center justify-center gap-2 py-4", children: [
              /* @__PURE__ */ t("span", { className: "text-sm text-muted-foreground", children: d }),
              E && z.trim() && F && /* @__PURE__ */ m(
                W,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    F(z.trim()), R(""), P(!1);
                  },
                  className: "mt-2",
                  children: [
                    /* @__PURE__ */ t(Te, { className: "h-4 w-4 mr-2" }),
                    typeof a == "function" ? a(z.trim()) : a || `Create "${z.trim()}"`
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ t(ot, { children: e.map((p) => /* @__PURE__ */ m(
              st,
              {
                value: p.name,
                disabled: p.disabled,
                onSelect: () => O(p),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: p.name }),
                  /* @__PURE__ */ t(
                    le,
                    {
                      className: n(
                        "h-4 w-4 shrink-0 text-primary",
                        r === p.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              p.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !i && !c ? /* @__PURE__ */ t("div", { className: n("w-full", w), children: l }) : /* @__PURE__ */ m("div", { className: n("w-full", w), children: [
    i && /* @__PURE__ */ m(J, { className: "text-foreground leading-5 block", children: [
      i,
      x && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: i ? "mt-1" : "", children: l }),
    c && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] });
}
function ze({
  className: e,
  classNames: r,
  showOutsideDays: o = !0,
  captionLayout: i = "label",
  buttonVariant: c = "ghost",
  formatters: x,
  components: f,
  ...b
}) {
  const d = Ce();
  return /* @__PURE__ */ t(
    Be,
    {
      showOutsideDays: o,
      weekStartsOn: 1,
      className: n(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: i,
      formatters: {
        formatMonthDropdown: (h) => {
          const v = b.locale ? typeof b.locale == "string" ? b.locale : b.locale.code || "default" : "default";
          return h.toLocaleString(v, { month: "short" });
        },
        ...x
      },
      classNames: {
        root: n("w-fit", d.root),
        months: n("flex gap-4 flex-col md:flex-row relative", d.months),
        month: n("flex flex-col w-full gap-4", d.month),
        nav: n(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          d.nav
        ),
        button_previous: n(
          ge({ variant: c }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: n(
          ge({ variant: c }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_next
        ),
        month_caption: n(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: n(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          d.dropdowns
        ),
        dropdown_root: n(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          d.dropdown_root
        ),
        dropdown: n("absolute bg-popover inset-0 opacity-0", d.dropdown),
        caption_label: n(
          "select-none font-medium",
          i === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          d.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: n("flex", d.weekdays),
        weekday: n(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          d.weekday
        ),
        week: n("flex w-full mt-1", d.week),
        week_number_header: n("select-none w-(--cell-size)", d.week_number_header),
        week_number: n(
          "text-[0.8rem] select-none text-muted-foreground",
          d.week_number
        ),
        day: n(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          b.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          d.day
        ),
        range_start: n("rounded-l-md bg-accent", d.range_start),
        range_middle: n("rounded-none", d.range_middle),
        range_end: n("rounded-r-md bg-accent", d.range_end),
        today: n("bg-accent text-accent-foreground !rounded-full", d.today),
        outside: n(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: n("text-muted-foreground opacity-50", d.disabled),
        hidden: n("invisible", d.hidden),
        ...r
      },
      components: {
        ...f,
        CaptionLabel: ({ className: h, ...v }) => /* @__PURE__ */ t("div", { className: n(h), ...v }),
        Root: ({ className: h, rootRef: v, ...N }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: v, className: n(h), ...N }),
        Chevron: ({ className: h, orientation: v, ...N }) => v === "left" ? /* @__PURE__ */ t(Ie, { className: n("size-4", h), ...N }) : v === "right" ? /* @__PURE__ */ t(Ee, { className: n("size-4", h), ...N }) : /* @__PURE__ */ t(ce, { className: n("size-4", h), ...N }),
        DayButton: it,
        WeekNumber: ({ children: h, ...v }) => /* @__PURE__ */ t("td", { ...v, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) })
      },
      ...b
    }
  );
}
function it({
  className: e,
  day: r,
  modifiers: o,
  ...i
}) {
  const c = Ce(), x = u.useRef(null);
  u.useEffect(() => {
    o.focused && x.current?.focus();
  }, [o.focused]);
  const f = o.today, b = o.selected && !o.range_start && !o.range_end && !o.range_middle, d = o.range_start, h = o.range_end, v = o.range_middle;
  return /* @__PURE__ */ m(
    W,
    {
      ref: x,
      variant: "ghost",
      size: "icon",
      "data-day": r.date.toLocaleDateString(),
      "data-selected-single": b,
      "data-range-start": d,
      "data-range-end": h,
      "data-range-middle": v,
      className: n(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        c.day,
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ t("span", { children: i.children }),
        f && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function te({
  className: e,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ m(
    ee.Root,
    {
      "data-slot": "scroll-area",
      className: n("relative", e),
      ...o,
      children: [
        /* @__PURE__ */ t(
          ee.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ t(lt, {}),
        /* @__PURE__ */ t(ee.Corner, {})
      ]
    }
  );
}
function lt({
  className: e,
  orientation: r = "vertical",
  ...o
}) {
  return /* @__PURE__ */ t(
    ee.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: n(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        ee.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function ct({
  value: e,
  onChange: r,
  locale: o,
  monthNames: i,
  disabled: c,
  className: x
}) {
  const [f, b] = u.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [d, h] = u.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), v = u.useRef(null), N = u.useRef(null);
  u.useEffect(() => {
    if (e) {
      const a = e.getFullYear(), s = e.getMonth();
      (f !== a || d !== s) && (b(a), h(s));
    } else {
      const a = /* @__PURE__ */ new Date(), s = a.getFullYear(), w = a.getMonth();
      (f !== s || d !== w) && (b(s), h(w));
    }
  }, [e]), u.useEffect(() => {
    if (!v.current) return;
    const a = setTimeout(() => {
      const s = v.current?.querySelector(
        `[data-month="${d}"]`
      );
      if (s && v.current) {
        const w = v.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (w) {
          const y = s.offsetTop;
          w.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [d]), u.useEffect(() => {
    if (!N.current) return;
    const a = setTimeout(() => {
      const s = N.current?.querySelector(
        `[data-year="${f}"]`
      );
      if (s && N.current) {
        const w = N.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (w) {
          const y = s.offsetTop;
          w.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [f]);
  const T = u.useCallback(
    (a) => {
      h(a);
      const s = new Date(f, a, 1);
      r(K(s));
    },
    [f, r]
  ), I = u.useCallback(
    (a) => {
      b(a);
      const s = new Date(a, d, 1);
      r(K(s));
    },
    [d, r]
  ), D = u.useMemo(() => {
    if (i && i.length === 12)
      return i;
    const a = typeof o == "string" ? o : o?.code || "en-US", s = new Intl.DateTimeFormat(a, { month: "long" });
    return Array.from({ length: 12 }, (w, y) => {
      const H = new Date(2024, y, 1);
      return s.format(H);
    });
  }, [o, i]), E = u.useMemo(
    () => Array.from({ length: 100 }, (a, s) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + s),
    []
  ), F = u.useMemo(() => e ? `${D[d]} ${f}` : `${D[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, D, d, f]);
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full", x), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: F }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(te, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: v, className: "px-2", children: D.map((a, s) => {
        const w = d === s, y = c ? c(new Date(f, s, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": s,
            onClick: () => !y && T(s),
            className: n(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              w ? "bg-secondary" : "hover:bg-accent",
              y && "opacity-50 cursor-not-allowed"
            ),
            children: a
          },
          s
        );
      }) }) }),
      /* @__PURE__ */ t(te, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: N, className: "px-2", children: E.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": a,
          onClick: () => I(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            f === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a
        },
        a
      )) }) })
    ] })
  ] });
}
function ke({ value: e, onChange: r, showSeconds: o = !0, className: i }) {
  const c = u.useRef(null), x = u.useRef(null), f = u.useRef(null), b = parseInt(e.hour, 10) || 0, d = parseInt(e.minute, 10) || 0, h = parseInt(e.second, 10) || 0, v = Array.from({ length: 24 }, (a, s) => s), N = Array.from({ length: 60 }, (a, s) => s), T = Array.from({ length: 60 }, (a, s) => s);
  u.useEffect(() => {
    const a = setTimeout(() => {
      if (c.current) {
        const s = c.current.querySelector(
          `[data-hour="${b}"]`
        );
        if (s) {
          const w = c.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (w) {
            const y = s.offsetTop;
            w.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [b]), u.useEffect(() => {
    const a = setTimeout(() => {
      if (x.current) {
        const s = x.current.querySelector(
          `[data-minute="${d}"]`
        );
        if (s) {
          const w = x.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (w) {
            const y = s.offsetTop;
            w.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [d]), u.useEffect(() => {
    if (!o) return;
    const a = setTimeout(() => {
      if (f.current) {
        const s = f.current.querySelector(
          `[data-second="${h}"]`
        );
        if (s) {
          const w = f.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (w) {
            const y = s.offsetTop;
            w.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(a);
  }, [h, o]);
  const I = (a) => {
    r({
      ...e,
      hour: a.toString().padStart(2, "0")
    });
  }, D = (a) => {
    r({
      ...e,
      minute: a.toString().padStart(2, "0")
    });
  }, E = (a) => {
    r({
      ...e,
      second: a.toString().padStart(2, "0")
    });
  }, F = `${e.hour}:${e.minute}${o ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full border-l", i), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: F }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(te, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: c, className: "px-2", children: v.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": a,
          onClick: () => I(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            b === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) }),
      /* @__PURE__ */ t(te, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: x, className: "px-2", children: N.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": a,
          onClick: () => D(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            d === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) }),
      o && /* @__PURE__ */ t(te, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: f, className: "px-2", children: T.map((a) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": a,
          onClick: () => E(a),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            h === a ? "bg-secondary" : "hover:bg-accent"
          ),
          children: a.toString().padStart(2, "0")
        },
        a
      )) }) })
    ] })
  ] });
}
function It({
  value: e,
  onChange: r,
  placeholder: o = "Pick a date",
  dateFormat: i = "dd/MM/yyyy",
  showTime: c = !1,
  timeOnly: x = !1,
  mode: f = "single",
  label: b,
  error: d,
  required: h,
  disabled: v = !1,
  disabledPast: N = !1,
  disabledFuture: T = !1,
  onDisabled: I,
  size: D = "md",
  className: E,
  triggerClassName: F,
  popoverClassName: a,
  locale: s,
  cancelText: w,
  applyText: y,
  monthNames: H,
  ...$
}) {
  const [P, z] = u.useState(!1), [R, _] = u.useState(e), [U, O] = u.useState(() => e || /* @__PURE__ */ new Date()), [j, l] = u.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), p = u.useRef(e), k = u.useRef(e || /* @__PURE__ */ new Date()), M = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, S = u.useRef(M());
  u.useEffect(() => {
    P && (p.current = e, k.current = e || /* @__PURE__ */ new Date(), S.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, x ? l(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : f === "month" ? _(e ? K(e) : K(/* @__PURE__ */ new Date())) : (_(e), e ? (O(e), c && l({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (O(/* @__PURE__ */ new Date()), c && l({ hour: "00", minute: "00", second: "00" }))));
  }, [P, e, c, x, f]), u.useEffect(() => {
    !P && !x ? (_(e), e && (O(e), c && l({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !P && x && e && l({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, c, x, P]);
  const g = () => {
    if (x) {
      const V = he(
        xe(be(e || /* @__PURE__ */ new Date(), parseInt(j.hour, 10)), parseInt(j.minute, 10)),
        parseInt(j.second, 10)
      );
      r?.(V);
    } else if (f === "month")
      r?.(R ? K(R) : void 0);
    else if (R) {
      let C = R;
      c && (C = be(C, parseInt(j.hour, 10)), C = xe(C, parseInt(j.minute, 10)), C = he(C, parseInt(j.second, 10))), r?.(C);
    } else
      r?.(void 0);
    z(!1);
  }, A = () => {
    _(p.current), O(k.current), c && l(S.current), z(!1);
  }, Z = u.useMemo(() => {
    if (!e) return o;
    const C = s && typeof s != "string" ? { locale: s } : void 0;
    if (x)
      return /[Hhms]/.test(i) ? Y(e, i, C) : Y(e, "HH:mm:ss", C);
    if (f === "month") {
      if (s) {
        const V = typeof s == "string" ? s : s?.code || "en-US";
        return new Intl.DateTimeFormat(V, { month: "2-digit", year: "numeric" }).format(e);
      }
      return Y(e, "MM/yyyy", C);
    }
    return c ? /[Hhms]/.test(i) ? Y(e, i, C) : Y(e, `${i} HH:mm:ss`, C) : Y(e, i, C);
  }, [e, i, c, x, f, o, s]), G = u.useCallback(
    (C) => {
      if (v) return !0;
      const V = /* @__PURE__ */ new Date();
      V.setHours(0, 0, 0, 0);
      const ne = new Date(C);
      return ne.setHours(0, 0, 0, 0), N && ne < V || T && ne > V ? !0 : I ? I(C) : !1;
    },
    [v, N, T, I]
  ), q = u.useMemo(
    () => ({
      ...$,
      mode: "single",
      selected: R,
      onSelect: _,
      defaultMonth: U,
      month: U,
      onMonthChange: O,
      captionLayout: "dropdown",
      disabled: G,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: s
    }),
    [$, R, U, G, s]
  ), X = /* @__PURE__ */ m(de, { open: P, onOpenChange: z, children: [
    /* @__PURE__ */ t(ue, { asChild: !0, children: /* @__PURE__ */ m(
      W,
      {
        variant: "outline",
        size: D,
        disabled: v,
        className: n(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          d && "border-destructive",
          F
        ),
        children: [
          /* @__PURE__ */ t("span", { children: Z }),
          /* @__PURE__ */ t(Se, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      me,
      {
        className: n("flex w-auto flex-col gap-2 p-0", a),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          x ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            ke,
            {
              value: j,
              onChange: l,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : f === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            ct,
            {
              value: R,
              onChange: _,
              locale: s,
              monthNames: H,
              disabled: G,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ m("div", { className: n("flex h-[350px]", c && "overflow-hidden"), children: [
            /* @__PURE__ */ t(ze, { initialFocus: !0, ...q }),
            c && /* @__PURE__ */ t(
              ke,
              {
                value: j,
                onChange: l,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(_e, { className: "shrink-0" }),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(W, { variant: "secondary", size: "sm", onClick: A, children: w || "Cancel" }),
            /* @__PURE__ */ t(W, { size: "sm", onClick: g, children: y || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return b || d ? /* @__PURE__ */ m("div", { className: n("w-full", E), children: [
    b && /* @__PURE__ */ m(J, { className: "text-foreground leading-5 block", children: [
      b,
      h && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: b ? "mt-1" : "", children: X }),
    d && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: d })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", E), children: X });
}
const dt = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: We(e),
        to: Ae(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Ye(we(e, 1), { weekStartsOn: 1 }),
        to: Ve(we(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: K(ae(e, 1)),
        to: ve(ae(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: K(ae(e, 3)),
        to: ve(ae(e, 3))
      }
    }
  ];
};
function Et({
  value: e,
  onChange: r,
  placeholder: o = { from: "From date", to: "To date" },
  dateFormat: i = "dd/MM/yyyy",
  presets: c,
  showPresets: x,
  label: f,
  error: b,
  required: d,
  disabled: h = !1,
  disabledPast: v = !1,
  disabledFuture: N = !1,
  onDisabled: T,
  size: I = "md",
  className: D,
  triggerClassName: E,
  popoverClassName: F,
  locale: a,
  cancelText: s,
  applyText: w,
  ...y
}) {
  const [H, $] = u.useState(!1), [P, z] = u.useState(e), [R, _] = u.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), U = u.useRef(e), O = u.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  u.useEffect(() => {
    H && (U.current = e, O.current = e?.to || e?.from || /* @__PURE__ */ new Date(), z(e), e?.to ? _(e.to) : e?.from ? _(e.from) : _(/* @__PURE__ */ new Date()));
  }, [H, e]), u.useEffect(() => {
    z(e), e?.to ? _(e.to) : e?.from && _(e.from);
  }, [e]);
  const j = u.useCallback(
    (q) => {
      if (h) return !0;
      const X = /* @__PURE__ */ new Date();
      X.setHours(0, 0, 0, 0);
      const C = new Date(q);
      return C.setHours(0, 0, 0, 0), v && C < X || N && C > X ? !0 : T ? T(q) : !1;
    },
    [h, v, N, T]
  ), l = u.useMemo(() => dt(), []), p = c ?? l, k = x !== void 0 ? x : p.length > 0, M = () => {
    r?.(P), $(!1);
  }, S = () => {
    z(U.current), _(O.current), $(!1);
  }, g = (q) => {
    z(q.range), q.range.to ? _(q.range.to) : q.range.from && _(q.range.from);
  }, A = u.useMemo(() => {
    if (!e?.from) return o.from || "Pick a date";
    const q = a && typeof a != "string" ? { locale: a } : void 0;
    return e.from && e.to ? `${Y(e.from, i, q)} - ${Y(e.to, i, q)}` : Y(e.from, i, q);
  }, [e, i, o, a]), Z = u.useMemo(
    () => ({
      ...y,
      mode: "range",
      selected: P,
      onSelect: z,
      defaultMonth: R,
      month: R,
      onMonthChange: _,
      disabled: j,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: a
    }),
    [y, P, R, j, a]
  ), G = /* @__PURE__ */ m(de, { open: H, onOpenChange: $, children: [
    /* @__PURE__ */ t(ue, { asChild: !0, children: /* @__PURE__ */ m(
      W,
      {
        variant: "outline",
        size: I,
        disabled: h,
        className: n(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          b && "border-destructive",
          E
        ),
        children: [
          /* @__PURE__ */ t("span", { children: A }),
          /* @__PURE__ */ t(Se, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      me,
      {
        className: n("flex w-auto flex-col gap-2 p-0 pb-2", F),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ m("div", { className: "flex", children: [
            k && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: p.map((q, X) => /* @__PURE__ */ t(
              W,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => g(q),
                children: q.label
              },
              X
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(ze, { initialFocus: !0, ...Z }) })
          ] }),
          /* @__PURE__ */ t(_e, {}),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(W, { variant: "secondary", onClick: S, children: s || "Cancel" }),
            /* @__PURE__ */ t(W, { onClick: M, children: w || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return f || b ? /* @__PURE__ */ m("div", { className: n("w-full", D), children: [
    f && /* @__PURE__ */ m(J, { className: "text-foreground leading-5 block", children: [
      f,
      d && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: f ? "mt-1" : "", children: G }),
    b && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: b })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", D), children: G });
}
const ut = {
  toolbar: [
    [{ header: [1, 2, 3, !1] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "code-block"],
    ["blockquote"],
    [{ script: "sub" }, { script: "super" }],
    ["clean"]
  ],
  clipboard: {
    matchVisual: !1
  },
  history: {
    delay: 1e3,
    maxStack: 50,
    userOnly: !0
  }
}, mt = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "color",
  "background",
  "link",
  "image",
  "code-block",
  "blockquote",
  "script"
];
function Pt({
  className: e,
  label: r,
  error: o,
  required: i,
  id: c,
  size: x = "md",
  modules: f,
  formats: b,
  placeholder: d,
  value: h,
  onChange: v,
  readOnly: N,
  ...T
}) {
  const I = u.useId(), D = c || I, E = r || o, s = /* @__PURE__ */ t("div", { className: "relative w-full", children: /* @__PURE__ */ t(
    Ge,
    {
      id: D,
      "data-slot": "editor",
      "data-size": x,
      "aria-invalid": !!o,
      theme: "snow",
      modules: f || ut,
      formats: b || mt,
      placeholder: d,
      value: h,
      onChange: v,
      readOnly: N,
      className: n(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        o && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !o && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        N && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        e
      ),
      ...T
    }
  ) });
  return E ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(J, { htmlFor: D, children: [
      r,
      i && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    s,
    o && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: o })
  ] }) : s;
}
function ft({
  className: e,
  value: r,
  ...o
}) {
  return /* @__PURE__ */ t(
    ye.Root,
    {
      "data-slot": "progress",
      className: n("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...o,
      children: /* @__PURE__ */ t(
        ye.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (r || 0)}%)` }
        }
      )
    }
  );
}
function Ft({
  value: e = [],
  onChange: r,
  accept: o,
  multiple: i = !1,
  maxSize: c,
  maxFiles: x,
  disabled: f = !1,
  onError: b,
  showPreview: d = !0,
  showProgress: h = !1,
  className: v,
  dropzoneClassName: N,
  placeholder: T,
  uploadText: I
}) {
  const [D, E] = u.useState(!1), F = (l) => l && typeof l == "object" && "name" in l && "size" in l && "type" in l && "lastModified" in l && !("file" in l), [a, s] = u.useState(() => !e || e.length === 0 ? [] : e.map((l) => F(l) ? {
    file: l,
    preview: l.type.startsWith("image/") ? URL.createObjectURL(l) : void 0,
    status: "success"
  } : l)), w = u.useRef(null), y = u.useRef(a);
  u.useEffect(() => {
    y.current = a;
  }, [a]), u.useEffect(() => () => {
    y.current.forEach((l) => {
      l.preview && URL.revokeObjectURL(l.preview);
    });
  }, []), u.useEffect(() => {
    if (!e || e.length === 0) {
      y.current.forEach((A) => {
        A.preview && URL.revokeObjectURL(A.preview);
      }), y.current.length > 0 && s([]);
      return;
    }
    const l = e.map((g) => F(g) ? g : g.file), p = y.current.map((g) => g.file), k = l.map((g) => `${g.name}-${g.size}`).join(","), M = p.map((g) => `${g.name}-${g.size}`).join(",");
    if (k === M && l.length === p.length)
      return;
    y.current.forEach((g) => {
      g.preview && URL.revokeObjectURL(g.preview);
    });
    const S = e.map((g) => F(g) ? {
      file: g,
      preview: g.type.startsWith("image/") ? URL.createObjectURL(g) : void 0,
      status: "success"
    } : g);
    s(S);
  }, [e]);
  const H = (l) => {
    if (c && l.size > c)
      return `File size exceeds ${se(c)}`;
    if (o) {
      const p = o.split(",").map((g) => g.trim()), k = l.type, M = l.name.toLowerCase();
      if (!(p.some((g) => g.startsWith(".") ? M.endsWith(g.toLowerCase()) : g.endsWith("/*") ? k.startsWith(g.slice(0, -1)) : k === g || k.match(g.replace("*", ".*"))) || p.some((g) => M.endsWith(g.toLowerCase()))))
        return `File type not allowed. Accepted types: ${o}`;
    }
    return null;
  }, $ = (l) => {
    const p = [], k = [];
    if (x && a.length + l.length > x) {
      const S = `Maximum ${x} file(s) allowed`;
      p.push(S), b?.(S);
      return;
    }
    if (l.forEach((S) => {
      const g = H(S);
      if (g)
        p.push(`${S.name}: ${g}`), b?.(g);
      else {
        const A = {
          file: S,
          preview: S.type.startsWith("image/") ? URL.createObjectURL(S) : void 0,
          status: "success"
        };
        k.push(A);
      }
    }), p.length > 0 && k.length === 0)
      return;
    const M = i ? [...a, ...k] : k;
    s(M), r?.(M.map((S) => S.file));
  }, P = (l) => {
    if (l.preventDefault(), l.stopPropagation(), E(!1), f) return;
    const p = Array.from(l.dataTransfer.files);
    p.length > 0 && $(p);
  }, z = (l) => {
    l.preventDefault(), l.stopPropagation(), f || E(!0);
  }, R = (l) => {
    l.preventDefault(), l.stopPropagation(), E(!1);
  }, _ = (l) => {
    const p = Array.from(l.target.files || []);
    p.length > 0 && $(p), w.current && (w.current.value = "");
  }, U = (l) => {
    const p = a[l];
    p.preview && URL.revokeObjectURL(p.preview);
    const k = a.filter((M, S) => S !== l);
    s(k), r?.(k.map((M) => M.file));
  }, O = () => {
    !f && w.current && w.current.click();
  }, j = (l) => l.type.startsWith("image/") ? /* @__PURE__ */ t($e, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ t(Oe, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ m("div", { className: n("w-full space-y-4", v), "data-slot": "file-upload", children: [
    /* @__PURE__ */ m(
      "div",
      {
        onClick: O,
        onDrop: P,
        onDragOver: z,
        onDragLeave: R,
        className: n(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          D && !f && "border-primary bg-primary/5",
          !D && !f && "border-input hover:border-primary/50 hover:bg-accent/50",
          f && "cursor-not-allowed opacity-50",
          N
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: w,
              type: "file",
              accept: o,
              multiple: i,
              disabled: f,
              onChange: _,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ m("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ t(Pe, { className: n("h-8 w-8 mb-2", f ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ m("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ t("span", { className: "font-semibold", children: I || "Click to upload" }),
              !f && " or drag and drop"
            ] }),
            /* @__PURE__ */ m("p", { className: "text-xs text-muted-foreground", children: [
              T || o || "Any file",
              i && " (multiple files allowed)",
              c && ` (max ${se(c)})`
            ] })
          ] })
        ]
      }
    ),
    d && a.length > 0 && /* @__PURE__ */ t("div", { className: "space-y-2", "data-slot": "file-upload-list", children: a.map((l, p) => {
      const { file: k, preview: M, progress: S, status: g, error: A } = l, Z = k.type.startsWith("image/");
      return /* @__PURE__ */ m(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ t("div", { className: "flex-shrink-0", children: Z && M ? /* @__PURE__ */ t(
              "img",
              {
                src: M,
                alt: k.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ t("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: j(k) }) }),
            /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ t("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: k.name }),
                g === "success" && /* @__PURE__ */ t(Fe, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                g === "error" && /* @__PURE__ */ t(je, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: se(k.size) }),
              A && /* @__PURE__ */ t("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: A }),
              h && S !== void 0 && /* @__PURE__ */ t("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ t(ft, { value: S, className: "h-1" }) })
            ] }),
            !f && /* @__PURE__ */ m(
              W,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (G) => {
                  G.stopPropagation(), U(p);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ t(Le, { className: "h-4 w-4" }),
                  /* @__PURE__ */ t("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${k.name}-${p}`
      );
    }) })
  ] });
}
function jt({ ...e }) {
  return /* @__PURE__ */ t(L.Root, { "data-slot": "select", ...e });
}
function Lt({ ...e }) {
  return /* @__PURE__ */ t(L.Group, { "data-slot": "select-group", ...e });
}
function $t({ ...e }) {
  return /* @__PURE__ */ t(L.Value, { "data-slot": "select-value", ...e });
}
function Ot({
  className: e,
  size: r = "md",
  children: o,
  label: i,
  error: c,
  required: x,
  id: f,
  ...b
}) {
  const d = i || c, h = oe[r ?? "md"], v = /* @__PURE__ */ m(
    L.Trigger,
    {
      id: f,
      "data-slot": "select-trigger",
      "data-size": r,
      "aria-invalid": !!c,
      className: n(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        h.height,
        h.text,
        h.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": r === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": r === "xs",
          "[&_svg:not([class*='size-'])]:size-4": r === "sm" || r === "md",
          "[&_svg:not([class*='size-'])]:size-5": r === "lg" || r === "xl",
          "[&_svg:not([class*='size-'])]:size-6": r === "xxl"
        },
        c ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...b,
      children: [
        o,
        /* @__PURE__ */ t(L.Icon, { asChild: !0, children: /* @__PURE__ */ t(ce, { className: n("opacity-50", h.icon) }) })
      ]
    }
  );
  return d ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    i && /* @__PURE__ */ m(J, { htmlFor: f, children: [
      i,
      x && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    v,
    c && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: c })
  ] }) : v;
}
function Ht({
  className: e,
  children: r,
  position: o = "item-aligned",
  align: i = "center",
  ...c
}) {
  return /* @__PURE__ */ t(L.Portal, { children: /* @__PURE__ */ m(
    L.Content,
    {
      "data-slot": "select-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: o,
      align: i,
      ...c,
      children: [
        /* @__PURE__ */ t(pt, {}),
        /* @__PURE__ */ t(
          L.Viewport,
          {
            className: n(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(gt, {})
      ]
    }
  ) });
}
function Ut({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    L.Label,
    {
      "data-slot": "select-label",
      className: n("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...r
    }
  );
}
function At({
  className: e,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ m(
    L.Item,
    {
      "data-slot": "select-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(L.ItemIndicator, { children: /* @__PURE__ */ t(le, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(L.ItemText, { children: r })
      ]
    }
  );
}
function Wt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    L.Separator,
    {
      "data-slot": "select-separator",
      className: n("-mx-1 my-1 h-px pointer-events-none bg-border", e),
      ...r
    }
  );
}
function pt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    L.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(He, { className: "size-4" })
    }
  );
}
function gt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    L.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(ce, { className: "size-4" })
    }
  );
}
function Vt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    ie.Root,
    {
      "data-slot": "radio-group",
      className: n("grid gap-3", e),
      ...r
    }
  );
}
function Yt({
  className: e,
  size: r = "md",
  ...o
}) {
  const i = oe[r ?? "md"], c = {
    xxs: "size-1",
    xs: "size-1.5",
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-2.5",
    xxl: "size-3"
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    ie.Item,
    {
      "data-slot": "radio-group-item",
      "data-size": r,
      className: n(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i.icon,
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        ie.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ t(
            Ue,
            {
              className: n(
                "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                c
              )
            }
          )
        }
      )
    }
  );
}
function Bt({
  className: e,
  size: r = "md",
  ...o
}) {
  const i = oe[r ?? "md"], c = {
    xxs: { height: "h-3.5", width: "w-6", thumb: i.icon },
    xs: { height: "h-4", width: "w-7", thumb: i.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: i.icon },
    md: { height: "h-5", width: "w-9", thumb: i.icon },
    lg: { height: "h-6", width: "w-11", thumb: i.icon },
    xl: { height: "h-6", width: "w-12", thumb: i.icon },
    xxl: { height: "h-7", width: "w-14", thumb: i.icon }
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    Ne.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: n(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        c.height,
        c.width,
        e
      ),
      ...o,
      children: /* @__PURE__ */ t(
        Ne.Thumb,
        {
          "data-slot": "switch-thumb",
          className: n(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            c.thumb
          )
        }
      )
    }
  );
}
export {
  Ct as A,
  Qe as B,
  St as C,
  It as D,
  Pt as E,
  Ft as F,
  Ke as G,
  _t as H,
  qt as I,
  ft as J,
  Yt as K,
  te as L,
  ct as M,
  lt as N,
  Lt as O,
  de as P,
  Ut as Q,
  Vt as R,
  jt as S,
  gt as T,
  pt as U,
  Wt as V,
  ke as W,
  Tt as a,
  Et as b,
  Ot as c,
  $t as d,
  Ht as e,
  At as f,
  Bt as g,
  Xe as h,
  Je as i,
  Ze as j,
  et as k,
  tt as l,
  Dt as m,
  ue as n,
  me as o,
  De as p,
  rt as q,
  nt as r,
  at as s,
  ot as t,
  st as u,
  ze as v,
  it as w,
  zt as x,
  Rt as y,
  Mt as z
};
//# sourceMappingURL=switch-Kxcmpitu.js.map
