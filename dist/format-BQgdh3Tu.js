import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as u from "react";
import { Slot as Te } from "@radix-ui/react-slot";
import { cva as Re } from "class-variance-authority";
import { c as n, b as me, B as j, F as K, L as G, S as Me, f as Ie } from "./input-Bdy9V1ho.js";
import * as fe from "@radix-ui/react-checkbox";
import { ChevronLeftIcon as He, ChevronRightIcon as Pe, ChevronDownIcon as ie, CheckIcon as de, XIcon as Ee, SearchIcon as $e, XCircle as je, ChevronDown as ge, CalendarIcon as Ce, CircleIcon as Oe, ChevronUpIcon as Ae } from "lucide-react";
import { Command as Y } from "cmdk";
import * as O from "@radix-ui/react-dialog";
import { startOfMonth as L, format as $, setSeconds as pe, setMinutes as he, setHours as xe, endOfDay as Be, startOfDay as Fe, endOfWeek as Le, startOfWeek as Ye, endOfMonth as be, subWeeks as ve, subMonths as te } from "date-fns";
import * as U from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as De, DayPicker as Ve } from "react-day-picker";
import * as X from "@radix-ui/react-popover";
import * as we from "@radix-ui/react-progress";
import * as se from "@radix-ui/react-radio-group";
import * as k from "@radix-ui/react-select";
import * as ye from "@radix-ui/react-switch";
const qe = Re(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function bt({
  className: e,
  variant: r,
  asChild: a = !1,
  ...s
}) {
  return /* @__PURE__ */ t(a ? Te : "span", { "data-slot": "badge", className: n(qe({ variant: r }), e), ...s });
}
function _e({
  className: e,
  classNames: r,
  showOutsideDays: a = !0,
  captionLayout: s = "label",
  buttonVariant: c = "ghost",
  formatters: l,
  components: f,
  ...g
}) {
  const d = De();
  return /* @__PURE__ */ t(
    Ve,
    {
      showOutsideDays: a,
      weekStartsOn: 1,
      className: n(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: s,
      formatters: {
        formatMonthDropdown: (p) => {
          const h = g.locale ? typeof g.locale == "string" ? g.locale : g.locale.code || "default" : "default";
          return p.toLocaleString(h, { month: "short" });
        },
        ...l
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
          me({ variant: c }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: n(
          me({ variant: c }),
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
          s === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
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
          g.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
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
        CaptionLabel: ({ className: p, ...h }) => /* @__PURE__ */ t("div", { className: n(p), ...h }),
        Root: ({ className: p, rootRef: h, ...y }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: h, className: n(p), ...y }),
        Chevron: ({ className: p, orientation: h, ...y }) => h === "left" ? /* @__PURE__ */ t(He, { className: n("size-4", p), ...y }) : h === "right" ? /* @__PURE__ */ t(Pe, { className: n("size-4", p), ...y }) : /* @__PURE__ */ t(ie, { className: n("size-4", p), ...y }),
        DayButton: Ge,
        WeekNumber: ({ children: p, ...h }) => /* @__PURE__ */ t("td", { ...h, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) })
      },
      ...g
    }
  );
}
function Ge({
  className: e,
  day: r,
  modifiers: a,
  ...s
}) {
  const c = De(), l = u.useRef(null);
  u.useEffect(() => {
    a.focused && l.current?.focus();
  }, [a.focused]);
  const f = a.today, g = a.selected && !a.range_start && !a.range_end && !a.range_middle, d = a.range_start, p = a.range_end, h = a.range_middle;
  return /* @__PURE__ */ m(
    j,
    {
      ref: l,
      variant: "ghost",
      size: "icon",
      "data-day": r.date.toLocaleDateString(),
      "data-selected-single": g,
      "data-range-start": d,
      "data-range-end": p,
      "data-range-middle": h,
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
      ...s,
      children: [
        /* @__PURE__ */ t("span", { children: s.children }),
        f && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function vt({
  className: e,
  size: r = "md",
  ...a
}) {
  const s = K[r ?? "md"];
  return /* @__PURE__ */ t(
    fe.Root,
    {
      "data-slot": "checkbox",
      "data-size": r,
      className: n(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.icon,
        e
      ),
      ...a,
      children: /* @__PURE__ */ t(
        fe.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(de, { className: s.icon })
        }
      )
    }
  );
}
function We({ ...e }) {
  return /* @__PURE__ */ t(O.Root, { "data-slot": "dialog", ...e });
}
function wt({ ...e }) {
  return /* @__PURE__ */ t(O.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Ue({ ...e }) {
  return /* @__PURE__ */ t(O.Portal, { "data-slot": "dialog-portal", ...e });
}
function yt({ ...e }) {
  return /* @__PURE__ */ t(O.Close, { "data-slot": "dialog-close", ...e });
}
function Je({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    O.Overlay,
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
function Xe({
  className: e,
  children: r,
  showCloseButton: a = !0,
  ...s
}) {
  return /* @__PURE__ */ m(Ue, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ t(Je, {}),
    /* @__PURE__ */ m(
      O.Content,
      {
        "data-slot": "dialog-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...s,
        children: [
          r,
          a && /* @__PURE__ */ m(
            O.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ t(Ee, {}),
                /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Ke({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-header",
      className: n("flex flex-col gap-2 text-center sm:text-left", e),
      ...r
    }
  );
}
function St({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-footer",
      className: n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r
    }
  );
}
function Ze({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    O.Title,
    {
      "data-slot": "dialog-title",
      className: n("text-lg leading-none font-semibold", e),
      ...r
    }
  );
}
function Qe({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    O.Description,
    {
      "data-slot": "dialog-description",
      className: n("text-muted-foreground text-sm", e),
      ...r
    }
  );
}
function ze({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y,
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
function Nt({
  title: e = "Command Palette",
  description: r = "Search for a command to run...",
  children: a,
  className: s,
  showCloseButton: c = !0,
  ...l
}) {
  return /* @__PURE__ */ m(We, { ...l, children: [
    /* @__PURE__ */ m(Ke, { className: "sr-only", children: [
      /* @__PURE__ */ t(Ze, { children: e }),
      /* @__PURE__ */ t(Qe, { children: r })
    ] }),
    /* @__PURE__ */ t(
      Xe,
      {
        className: n("overflow-hidden p-0", s),
        showCloseButton: c,
        children: /* @__PURE__ */ t(ze, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: a })
      }
    )
  ] });
}
function et({
  className: e,
  label: r,
  error: a,
  required: s,
  id: c,
  ...l
}) {
  const f = r || a, g = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: n(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        a && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t($e, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          Y.Input,
          {
            id: c,
            "data-slot": "command-input",
            "aria-invalid": !!a,
            className: n(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              a && "focus-visible:ring-destructive",
              e
            ),
            ...l
          }
        )
      ]
    }
  ) });
  return f ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(G, { htmlFor: c, children: [
      r,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    a && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: a })
  ] }) : g;
}
function tt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y.List,
    {
      "data-slot": "command-list",
      className: n("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...r
    }
  );
}
function rt({ ...e }) {
  return /* @__PURE__ */ t(
    Y.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function nt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Y.Group,
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
function kt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Y.Separator,
    {
      "data-slot": "command-separator",
      className: n("bg-border -mx-1 h-px", e),
      ...r
    }
  );
}
function at({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y.Item,
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
function ce({ ...e }) {
  return /* @__PURE__ */ t(X.Root, { "data-slot": "popover", ...e });
}
function le({ ...e }) {
  return /* @__PURE__ */ t(X.Trigger, { "data-slot": "popover-trigger", ...e });
}
function ue({
  className: e,
  align: r = "center",
  sideOffset: a = 4,
  ...s
}) {
  return /* @__PURE__ */ t(X.Portal, { children: /* @__PURE__ */ t(
    X.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: a,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...s
    }
  ) });
}
function Ct({ ...e }) {
  return /* @__PURE__ */ t(X.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Dt({
  options: e,
  value: r,
  onChange: a,
  label: s,
  error: c,
  required: l,
  placeholder: f = "Select option...",
  searchPlaceholder: g = "Search...",
  emptyMessage: d = "No results found.",
  disabled: p = !1,
  readonly: h = !1,
  size: y = "md",
  showClearIcon: C = !0,
  showArrowIcon: D = !0,
  suffix: M,
  className: T,
  triggerClassName: P,
  popoverClassName: o
}) {
  const [i, b] = u.useState(!1), v = u.useMemo(
    () => e.find((x) => x.id === r),
    [e, r]
  ), H = !p && !h && !!r, A = (x) => {
    a?.(x.id, x), b(!1);
  }, _ = (x) => {
    x.preventDefault(), x.stopPropagation(), H && a?.("", void 0);
  }, z = /* @__PURE__ */ m(ce, { open: i, onOpenChange: b, children: [
    /* @__PURE__ */ t(le, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": i,
        disabled: p,
        size: y,
        className: n(
          "w-full justify-between group/combobox",
          !r && "text-muted-foreground",
          c && "border-destructive",
          P
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: v ? v.name : f }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            r && H ? /* @__PURE__ */ m(
              "span",
              {
                onMouseDown: (x) => {
                  x.preventDefault(), x.stopPropagation();
                },
                onClick: _,
                className: "cursor-pointer",
                children: [
                  C && /* @__PURE__ */ t(je, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  D && /* @__PURE__ */ t(ge, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : D && /* @__PURE__ */ t(ge, { className: "text-muted-foreground h-4 w-4" }),
            M
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ue,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", o),
        align: "start",
        children: /* @__PURE__ */ m(ze, { children: [
          /* @__PURE__ */ t(et, { placeholder: g }),
          /* @__PURE__ */ m(tt, { children: [
            /* @__PURE__ */ t(rt, { children: d }),
            /* @__PURE__ */ t(nt, { children: e.map((x) => /* @__PURE__ */ m(
              at,
              {
                value: x.name,
                disabled: x.disabled,
                onSelect: () => A(x),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: x.name }),
                  /* @__PURE__ */ t(
                    de,
                    {
                      className: n(
                        "h-4 w-4 shrink-0 text-primary",
                        r === x.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              x.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !s && !c ? /* @__PURE__ */ t("div", { className: n("w-full", T), children: z }) : /* @__PURE__ */ m("div", { className: n("w-full", T), children: [
    s && /* @__PURE__ */ m(G, { className: "text-foreground leading-5 block", children: [
      s,
      l && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: s ? "mt-1" : "", children: z }),
    c && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] });
}
function J({
  className: e,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ m(
    U.Root,
    {
      "data-slot": "scroll-area",
      className: n("relative", e),
      ...a,
      children: [
        /* @__PURE__ */ t(
          U.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ t(ot, {}),
        /* @__PURE__ */ t(U.Corner, {})
      ]
    }
  );
}
function ot({
  className: e,
  orientation: r = "vertical",
  ...a
}) {
  return /* @__PURE__ */ t(
    U.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: n(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...a,
      children: /* @__PURE__ */ t(
        U.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function st({
  value: e,
  onChange: r,
  locale: a,
  monthNames: s,
  disabled: c,
  className: l
}) {
  const [f, g] = u.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [d, p] = u.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), h = u.useRef(null), y = u.useRef(null);
  u.useEffect(() => {
    if (e) {
      const o = e.getFullYear(), i = e.getMonth();
      (f !== o || d !== i) && (g(o), p(i));
    } else {
      const o = /* @__PURE__ */ new Date(), i = o.getFullYear(), b = o.getMonth();
      (f !== i || d !== b) && (g(i), p(b));
    }
  }, [e]), u.useEffect(() => {
    if (!h.current) return;
    const o = setTimeout(() => {
      const i = h.current?.querySelector(
        `[data-month="${d}"]`
      );
      if (i && h.current) {
        const b = h.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (b) {
          const v = i.offsetTop;
          b.scrollTo({ top: v, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(o);
  }, [d]), u.useEffect(() => {
    if (!y.current) return;
    const o = setTimeout(() => {
      const i = y.current?.querySelector(
        `[data-year="${f}"]`
      );
      if (i && y.current) {
        const b = y.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (b) {
          const v = i.offsetTop;
          b.scrollTo({ top: v, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(o);
  }, [f]);
  const C = u.useCallback(
    (o) => {
      p(o);
      const i = new Date(f, o, 1);
      r(L(i));
    },
    [f, r]
  ), D = u.useCallback(
    (o) => {
      g(o);
      const i = new Date(o, d, 1);
      r(L(i));
    },
    [d, r]
  ), M = u.useMemo(() => {
    if (s && s.length === 12)
      return s;
    const o = typeof a == "string" ? a : a?.code || "en-US", i = new Intl.DateTimeFormat(o, { month: "long" });
    return Array.from({ length: 12 }, (b, v) => {
      const H = new Date(2024, v, 1);
      return i.format(H);
    });
  }, [a, s]), T = u.useMemo(
    () => Array.from({ length: 100 }, (o, i) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + i),
    []
  ), P = u.useMemo(() => e ? `${M[d]} ${f}` : `${M[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, M, d, f]);
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full", l), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: P }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(J, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: h, className: "px-2", children: M.map((o, i) => {
        const b = d === i, v = c ? c(new Date(f, i, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": i,
            onClick: () => !v && C(i),
            className: n(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              b ? "bg-secondary" : "hover:bg-accent",
              v && "opacity-50 cursor-not-allowed"
            ),
            children: o
          },
          i
        );
      }) }) }),
      /* @__PURE__ */ t(J, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: y, className: "px-2", children: T.map((o) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": o,
          onClick: () => D(o),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            f === o ? "bg-secondary" : "hover:bg-accent"
          ),
          children: o
        },
        o
      )) }) })
    ] })
  ] });
}
function Se({ value: e, onChange: r, showSeconds: a = !0, className: s }) {
  const c = u.useRef(null), l = u.useRef(null), f = u.useRef(null), g = parseInt(e.hour, 10) || 0, d = parseInt(e.minute, 10) || 0, p = parseInt(e.second, 10) || 0, h = Array.from({ length: 24 }, (o, i) => i), y = Array.from({ length: 60 }, (o, i) => i), C = Array.from({ length: 60 }, (o, i) => i);
  u.useEffect(() => {
    const o = setTimeout(() => {
      if (c.current) {
        const i = c.current.querySelector(
          `[data-hour="${g}"]`
        );
        if (i) {
          const b = c.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const v = i.offsetTop;
            b.scrollTo({ top: v, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(o);
  }, [g]), u.useEffect(() => {
    const o = setTimeout(() => {
      if (l.current) {
        const i = l.current.querySelector(
          `[data-minute="${d}"]`
        );
        if (i) {
          const b = l.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const v = i.offsetTop;
            b.scrollTo({ top: v, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(o);
  }, [d]), u.useEffect(() => {
    if (!a) return;
    const o = setTimeout(() => {
      if (f.current) {
        const i = f.current.querySelector(
          `[data-second="${p}"]`
        );
        if (i) {
          const b = f.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (b) {
            const v = i.offsetTop;
            b.scrollTo({ top: v, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(o);
  }, [p, a]);
  const D = (o) => {
    r({
      ...e,
      hour: o.toString().padStart(2, "0")
    });
  }, M = (o) => {
    r({
      ...e,
      minute: o.toString().padStart(2, "0")
    });
  }, T = (o) => {
    r({
      ...e,
      second: o.toString().padStart(2, "0")
    });
  }, P = `${e.hour}:${e.minute}${a ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ m("div", { className: n("flex flex-col h-full border-l", s), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: P }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(J, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: c, className: "px-2", children: h.map((o) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": o,
          onClick: () => D(o),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            g === o ? "bg-secondary" : "hover:bg-accent"
          ),
          children: o.toString().padStart(2, "0")
        },
        o
      )) }) }),
      /* @__PURE__ */ t(J, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: l, className: "px-2", children: y.map((o) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": o,
          onClick: () => M(o),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            d === o ? "bg-secondary" : "hover:bg-accent"
          ),
          children: o.toString().padStart(2, "0")
        },
        o
      )) }) }),
      a && /* @__PURE__ */ t(J, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: f, className: "px-2", children: C.map((o) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": o,
          onClick: () => T(o),
          className: n(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            p === o ? "bg-secondary" : "hover:bg-accent"
          ),
          children: o.toString().padStart(2, "0")
        },
        o
      )) }) })
    ] })
  ] });
}
function _t({
  value: e,
  onChange: r,
  placeholder: a = "Pick a date",
  dateFormat: s = "dd/MM/yyyy",
  showTime: c = !1,
  timeOnly: l = !1,
  mode: f = "single",
  label: g,
  error: d,
  required: p,
  disabled: h = !1,
  disabledPast: y = !1,
  disabledFuture: C = !1,
  onDisabled: D,
  size: M = "md",
  className: T,
  triggerClassName: P,
  popoverClassName: o,
  locale: i,
  cancelText: b,
  applyText: v,
  monthNames: H,
  ...A
}) {
  const [_, z] = u.useState(!1), [x, S] = u.useState(e), [V, B] = u.useState(() => e || /* @__PURE__ */ new Date()), [R, I] = u.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), W = u.useRef(e), Z = u.useRef(e || /* @__PURE__ */ new Date()), re = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, Q = u.useRef(re());
  u.useEffect(() => {
    _ && (W.current = e, Z.current = e || /* @__PURE__ */ new Date(), Q.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, l ? I(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : f === "month" ? S(e ? L(e) : L(/* @__PURE__ */ new Date())) : (S(e), e ? (B(e), c && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (B(/* @__PURE__ */ new Date()), c && I({ hour: "00", minute: "00", second: "00" }))));
  }, [_, e, c, l, f]), u.useEffect(() => {
    !_ && !l ? (S(e), e && (B(e), c && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !_ && l && e && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, c, l, _]);
  const ne = () => {
    if (l) {
      const E = pe(
        he(xe(e || /* @__PURE__ */ new Date(), parseInt(R.hour, 10)), parseInt(R.minute, 10)),
        parseInt(R.second, 10)
      );
      r?.(E);
    } else if (f === "month")
      r?.(x ? L(x) : void 0);
    else if (x) {
      let w = x;
      c && (w = xe(w, parseInt(R.hour, 10)), w = he(w, parseInt(R.minute, 10)), w = pe(w, parseInt(R.second, 10))), r?.(w);
    } else
      r?.(void 0);
    z(!1);
  }, ae = () => {
    S(W.current), B(Z.current), c && I(Q.current), z(!1);
  }, oe = u.useMemo(() => {
    if (!e) return a;
    const w = i && typeof i != "string" ? { locale: i } : void 0;
    if (l)
      return /[Hhms]/.test(s) ? $(e, s, w) : $(e, "HH:mm:ss", w);
    if (f === "month") {
      if (i) {
        const E = typeof i == "string" ? i : i?.code || "en-US";
        return new Intl.DateTimeFormat(E, { month: "2-digit", year: "numeric" }).format(e);
      }
      return $(e, "MM/yyyy", w);
    }
    return c ? /[Hhms]/.test(s) ? $(e, s, w) : $(e, `${s} HH:mm:ss`, w) : $(e, s, w);
  }, [e, s, c, l, f, a, i]), q = u.useCallback(
    (w) => {
      if (h) return !0;
      const E = /* @__PURE__ */ new Date();
      E.setHours(0, 0, 0, 0);
      const ee = new Date(w);
      return ee.setHours(0, 0, 0, 0), y && ee < E || C && ee > E ? !0 : D ? D(w) : !1;
    },
    [h, y, C, D]
  ), N = u.useMemo(
    () => ({
      ...A,
      mode: "single",
      selected: x,
      onSelect: S,
      defaultMonth: V,
      month: V,
      onMonthChange: B,
      captionLayout: "dropdown",
      disabled: q,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: i
    }),
    [A, x, V, q, i]
  ), F = /* @__PURE__ */ m(ce, { open: _, onOpenChange: z, children: [
    /* @__PURE__ */ t(le, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        size: M,
        disabled: h,
        className: n(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          d && "border-destructive",
          P
        ),
        children: [
          /* @__PURE__ */ t("span", { children: oe }),
          /* @__PURE__ */ t(Ce, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ue,
      {
        className: n("flex w-auto flex-col gap-2 p-0", o),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          l ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            Se,
            {
              value: R,
              onChange: I,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : f === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            st,
            {
              value: x,
              onChange: S,
              locale: i,
              monthNames: H,
              disabled: q,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ m("div", { className: n("flex h-[350px]", c && "overflow-hidden"), children: [
            /* @__PURE__ */ t(_e, { initialFocus: !0, ...N }),
            c && /* @__PURE__ */ t(
              Se,
              {
                value: R,
                onChange: I,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(Me, { className: "shrink-0" }),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(j, { variant: "secondary", size: "sm", onClick: ae, children: b || "Cancel" }),
            /* @__PURE__ */ t(j, { size: "sm", onClick: ne, children: v || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return g || d ? /* @__PURE__ */ m("div", { className: n("w-full", T), children: [
    g && /* @__PURE__ */ m(G, { className: "text-foreground leading-5 block", children: [
      g,
      p && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: g ? "mt-1" : "", children: F }),
    d && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: d })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", T), children: F });
}
const it = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Fe(e),
        to: Be(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Ye(ve(e, 1), { weekStartsOn: 1 }),
        to: Le(ve(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: L(te(e, 1)),
        to: be(te(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: L(te(e, 3)),
        to: be(te(e, 3))
      }
    }
  ];
};
function zt({
  value: e,
  onChange: r,
  placeholder: a = { from: "From date", to: "To date" },
  dateFormat: s = "dd/MM/yyyy",
  presets: c,
  showPresets: l,
  label: f,
  error: g,
  required: d,
  disabled: p = !1,
  disabledPast: h = !1,
  disabledFuture: y = !1,
  onDisabled: C,
  size: D = "md",
  className: M,
  triggerClassName: T,
  popoverClassName: P,
  locale: o,
  cancelText: i,
  applyText: b,
  ...v
}) {
  const [H, A] = u.useState(!1), [_, z] = u.useState(e), [x, S] = u.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), V = u.useRef(e), B = u.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  u.useEffect(() => {
    H && (V.current = e, B.current = e?.to || e?.from || /* @__PURE__ */ new Date(), z(e), e?.to ? S(e.to) : e?.from ? S(e.from) : S(/* @__PURE__ */ new Date()));
  }, [H, e]), u.useEffect(() => {
    z(e), e?.to ? S(e.to) : e?.from && S(e.from);
  }, [e]);
  const R = u.useCallback(
    (N) => {
      if (p) return !0;
      const F = /* @__PURE__ */ new Date();
      F.setHours(0, 0, 0, 0);
      const w = new Date(N);
      return w.setHours(0, 0, 0, 0), h && w < F || y && w > F ? !0 : C ? C(N) : !1;
    },
    [p, h, y, C]
  ), I = u.useMemo(() => it(), []), W = c ?? I, Z = l !== void 0 ? l : W.length > 0, re = () => {
    r?.(_), A(!1);
  }, Q = () => {
    z(V.current), S(B.current), A(!1);
  }, ne = (N) => {
    z(N.range), N.range.to ? S(N.range.to) : N.range.from && S(N.range.from);
  }, ae = u.useMemo(() => {
    if (!e?.from) return a.from || "Pick a date";
    const N = o && typeof o != "string" ? { locale: o } : void 0;
    return e.from && e.to ? `${$(e.from, s, N)} - ${$(e.to, s, N)}` : $(e.from, s, N);
  }, [e, s, a, o]), oe = u.useMemo(
    () => ({
      ...v,
      mode: "range",
      selected: _,
      onSelect: z,
      defaultMonth: x,
      month: x,
      onMonthChange: S,
      disabled: R,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: o
    }),
    [v, _, x, R, o]
  ), q = /* @__PURE__ */ m(ce, { open: H, onOpenChange: A, children: [
    /* @__PURE__ */ t(le, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        size: D,
        disabled: p,
        className: n(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          g && "border-destructive",
          T
        ),
        children: [
          /* @__PURE__ */ t("span", { children: ae }),
          /* @__PURE__ */ t(Ce, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      ue,
      {
        className: n("flex w-auto flex-col gap-2 p-0 pb-2", P),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ m("div", { className: "flex", children: [
            Z && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: W.map((N, F) => /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => ne(N),
                children: N.label
              },
              F
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t(_e, { initialFocus: !0, ...oe }) })
          ] }),
          /* @__PURE__ */ t(Me, {}),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(j, { variant: "secondary", onClick: Q, children: i || "Cancel" }),
            /* @__PURE__ */ t(j, { onClick: re, children: b || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return f || g ? /* @__PURE__ */ m("div", { className: n("w-full", M), children: [
    f && /* @__PURE__ */ m(G, { className: "text-foreground leading-5 block", children: [
      f,
      d && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: f ? "mt-1" : "", children: q }),
    g && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: g })
  ] }) : /* @__PURE__ */ t("div", { className: n("w-full", M), children: q });
}
function Tt({ className: e, label: r, error: a, required: s, id: c, size: l = "md", ...f }) {
  const g = r || a, d = /* @__PURE__ */ t(
    "textarea",
    {
      id: c,
      "data-slot": "textarea",
      "data-size": l,
      "aria-invalid": !!a,
      className: n(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        Ie({ size: l }),
        l && K[l]?.padding,
        l === "xxs" && "min-h-16",
        l === "xs" && "min-h-20",
        l === "sm" && "min-h-24",
        l === "md" && "min-h-28",
        l === "lg" && "min-h-32",
        l === "xl" && "min-h-36",
        l === "xxl" && "min-h-40",
        a ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...f
    }
  );
  return g ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(G, { htmlFor: c, children: [
      r,
      s && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    d,
    a && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: a })
  ] }) : d;
}
function Rt({
  className: e,
  value: r,
  ...a
}) {
  return /* @__PURE__ */ t(
    we.Root,
    {
      "data-slot": "progress",
      className: n("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...a,
      children: /* @__PURE__ */ t(
        we.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (r || 0)}%)` }
        }
      )
    }
  );
}
function It({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    se.Root,
    {
      "data-slot": "radio-group",
      className: n("grid gap-3", e),
      ...r
    }
  );
}
function Ht({
  className: e,
  size: r = "md",
  ...a
}) {
  const s = K[r ?? "md"], c = {
    xxs: "size-1",
    xs: "size-1.5",
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-2.5",
    xxl: "size-3"
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    se.Item,
    {
      "data-slot": "radio-group-item",
      "data-size": r,
      className: n(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.icon,
        e
      ),
      ...a,
      children: /* @__PURE__ */ t(
        se.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ t(
            Oe,
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
function Pt({ ...e }) {
  return /* @__PURE__ */ t(k.Root, { "data-slot": "select", ...e });
}
function Et({ ...e }) {
  return /* @__PURE__ */ t(k.Group, { "data-slot": "select-group", ...e });
}
function $t({ ...e }) {
  return /* @__PURE__ */ t(k.Value, { "data-slot": "select-value", ...e });
}
function jt({
  className: e,
  size: r = "md",
  children: a,
  label: s,
  error: c,
  required: l,
  id: f,
  ...g
}) {
  const d = s || c, p = K[r ?? "md"], h = /* @__PURE__ */ m(
    k.Trigger,
    {
      id: f,
      "data-slot": "select-trigger",
      "data-size": r,
      "aria-invalid": !!c,
      className: n(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        p.height,
        p.text,
        p.padding,
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
      ...g,
      children: [
        a,
        /* @__PURE__ */ t(k.Icon, { asChild: !0, children: /* @__PURE__ */ t(ie, { className: n("opacity-50", p.icon) }) })
      ]
    }
  );
  return d ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    s && /* @__PURE__ */ m(G, { htmlFor: f, children: [
      s,
      l && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    h,
    c && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: c })
  ] }) : h;
}
function Ot({
  className: e,
  children: r,
  position: a = "item-aligned",
  align: s = "center",
  ...c
}) {
  return /* @__PURE__ */ t(k.Portal, { children: /* @__PURE__ */ m(
    k.Content,
    {
      "data-slot": "select-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: a,
      align: s,
      ...c,
      children: [
        /* @__PURE__ */ t(dt, {}),
        /* @__PURE__ */ t(
          k.Viewport,
          {
            className: n(
              "p-1",
              a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(ct, {})
      ]
    }
  ) });
}
function At({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    k.Label,
    {
      "data-slot": "select-label",
      className: n("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...r
    }
  );
}
function Bt({
  className: e,
  children: r,
  ...a
}) {
  return /* @__PURE__ */ m(
    k.Item,
    {
      "data-slot": "select-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(k.ItemIndicator, { children: /* @__PURE__ */ t(de, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(k.ItemText, { children: r })
      ]
    }
  );
}
function Ft({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    k.Separator,
    {
      "data-slot": "select-separator",
      className: n("-mx-1 my-1 h-px pointer-events-none bg-border", e),
      ...r
    }
  );
}
function dt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    k.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(Ae, { className: "size-4" })
    }
  );
}
function ct({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    k.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: n("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(ie, { className: "size-4" })
    }
  );
}
function Lt({
  className: e,
  size: r = "md",
  ...a
}) {
  const s = K[r ?? "md"], c = {
    xxs: { height: "h-3.5", width: "w-6", thumb: s.icon },
    xs: { height: "h-4", width: "w-7", thumb: s.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: s.icon },
    md: { height: "h-5", width: "w-9", thumb: s.icon },
    lg: { height: "h-6", width: "w-11", thumb: s.icon },
    xl: { height: "h-6", width: "w-12", thumb: s.icon },
    xxl: { height: "h-7", width: "w-14", thumb: s.icon }
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    ye.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: n(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        c.height,
        c.width,
        e
      ),
      ...a,
      children: /* @__PURE__ */ t(
        ye.Thumb,
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
const Ne = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function Yt(e, r = "en-US", a = "USD") {
  return new Intl.NumberFormat(r, {
    style: "currency",
    currency: a
  }).format(e);
}
function Vt(e, r = "short") {
  const a = typeof e == "string" || typeof e == "number" ? new Date(e) : e;
  if (isNaN(a.getTime()))
    return "";
  if (r in Ne) {
    const s = Ne[r];
    return ke(a, s);
  }
  return ke(a, r);
}
function ke(e, r) {
  const a = e.getDate().toString().padStart(2, "0"), s = (e.getMonth() + 1).toString().padStart(2, "0"), c = e.getFullYear(), l = e.getHours().toString().padStart(2, "0"), f = e.getMinutes().toString().padStart(2, "0"), g = e.getSeconds().toString().padStart(2, "0"), d = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return r.replace(/dd/g, a).replace(/MM/g, s).replace(/yyyy/g, c.toString()).replace(/MMMM/g, d[e.getMonth()]).replace(/MMM/g, d[e.getMonth()].substring(0, 3)).replace(/HH/g, l).replace(/mm/g, f).replace(/ss/g, g);
}
function qt(e) {
  const r = e.replace(/\D/g, "");
  return r.length === 10 ? `${r.slice(0, 4)} ${r.slice(4, 7)} ${r.slice(7)}` : r.length === 11 ? `${r.slice(0, 4)} ${r.slice(4, 7)} ${r.slice(7)}` : e;
}
function Gt(e) {
  if (e === 0) return "0 Bytes";
  const r = 1024, a = ["Bytes", "KB", "MB", "GB", "TB", "PB"], s = Math.floor(Math.log(e) / Math.log(r));
  return Math.round(e / Math.pow(r, s) * 100) / 100 + " " + a[s];
}
function Wt(e, r, a = "...") {
  return e.length <= r ? e : e.slice(0, r) + a;
}
export {
  Wt as $,
  yt as A,
  bt as B,
  ze as C,
  We as D,
  Je as E,
  Ue as F,
  wt as G,
  Ct as H,
  Rt as I,
  Ht as J,
  J as K,
  ot as L,
  Et as M,
  At as N,
  ct as O,
  ce as P,
  dt as Q,
  It as R,
  Pt as S,
  Tt as T,
  Ft as U,
  Lt as V,
  Se as W,
  Yt as X,
  Vt as Y,
  qt as Z,
  Gt as _,
  le as a,
  Ne as a0,
  ue as b,
  et as c,
  tt as d,
  rt as e,
  nt as f,
  at as g,
  vt as h,
  Xe as i,
  Ke as j,
  Ze as k,
  Qe as l,
  St as m,
  jt as n,
  $t as o,
  Ot as p,
  Bt as q,
  qe as r,
  _e as s,
  Ge as t,
  Dt as u,
  Nt as v,
  kt as w,
  Mt as x,
  _t as y,
  zt as z
};
//# sourceMappingURL=format-BQgdh3Tu.js.map
