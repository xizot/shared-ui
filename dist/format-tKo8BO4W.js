import { jsx as t, jsxs as m } from "react/jsx-runtime";
import * as f from "react";
import { Slot as Ce } from "@radix-ui/react-slot";
import { cva as de } from "class-variance-authority";
import * as ge from "@radix-ui/react-checkbox";
import { ChevronLeftIcon as Ie, ChevronRightIcon as Pe, ChevronDownIcon as le, CheckIcon as ce, XIcon as He, SearchIcon as Be, XCircle as Ee, ChevronDown as pe, CalendarIcon as _e, CircleIcon as je, ChevronUpIcon as Oe } from "lucide-react";
import { Command as Y } from "cmdk";
import * as O from "@radix-ui/react-dialog";
import { startOfMonth as V, format as E, setSeconds as he, setMinutes as xe, setHours as be, endOfDay as Ae, startOfDay as Fe, endOfWeek as Le, startOfWeek as Ve, endOfMonth as ve, subWeeks as we, subMonths as te } from "date-fns";
import * as J from "@radix-ui/react-scroll-area";
import { getDefaultClassNames as De, DayPicker as Ye } from "react-day-picker";
import * as K from "@radix-ui/react-popover";
import * as qe from "@radix-ui/react-separator";
import * as ye from "@radix-ui/react-progress";
import * as se from "@radix-ui/react-radio-group";
import * as M from "@radix-ui/react-select";
import * as Ge from "@radix-ui/react-label";
import * as Se from "@radix-ui/react-switch";
import { clsx as We } from "clsx";
import { twMerge as Ue } from "tailwind-merge";
function a(...e) {
  return Ue(We(e));
}
function Nt(e, r) {
  const n = r.split(".");
  let o = e;
  for (const i of n) {
    if (o == null || typeof o != "object")
      return;
    o = o[i];
  }
  return o;
}
function kt(e) {
  return !(e == null || typeof e == "string" && e.trim() === "");
}
const ze = de("", {
  variants: {
    size: {
      xxs: "h-6 text-xs",
      xs: "h-8 text-xs",
      sm: "h-9 text-sm",
      md: "h-10 text-base",
      lg: "h-11 text-base",
      xl: "h-12 text-base",
      xxl: "h-14 text-lg"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), h = {
  xxs: {
    height: "h-6",
    text: "text-xs",
    padding: "px-2 py-1",
    icon: "size-3.5",
    iconButton: "size-6"
  },
  xs: {
    height: "h-8",
    text: "text-xs",
    padding: "px-2.5 py-1.5",
    icon: "size-4",
    iconButton: "size-8"
  },
  sm: {
    height: "h-9",
    text: "text-sm",
    padding: "px-3 py-2",
    icon: "size-5",
    iconButton: "size-9"
  },
  md: {
    height: "h-10",
    text: "text-base",
    padding: "px-4 py-2",
    icon: "size-5",
    iconButton: "size-10"
  },
  lg: {
    height: "h-11",
    text: "text-base",
    padding: "px-4 py-2.5",
    icon: "size-6",
    iconButton: "size-11"
  },
  xl: {
    height: "h-12",
    text: "text-base",
    padding: "px-5 py-3",
    icon: "size-6",
    iconButton: "size-12"
  },
  xxl: {
    height: "h-14",
    text: "text-lg",
    padding: "px-6 py-3.5",
    icon: "size-7",
    iconButton: "size-14"
  }
}, ie = de(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        xxs: `${h.xxs.height} min-w-6 rounded-md gap-1 ${h.xxs.padding} ${h.xxs.text}`,
        xs: `${h.xs.height} min-w-8 rounded-md gap-1 ${h.xs.padding} ${h.xs.text}`,
        sm: `${h.sm.height} min-w-9 rounded-md gap-1.5 ${h.sm.padding}  ${h.sm.text}`,
        md: `${h.md.height} min-w-10 ${h.md.padding} ${h.md.text}`,
        lg: `${h.lg.height} min-w-11 rounded-md ${h.lg.padding} ${h.lg.text}`,
        xl: `${h.xl.height} min-w-12 rounded-md ${h.xl.padding} ${h.xl.text}`,
        xxl: `${h.xxl.height} min-w-14 rounded-md ${h.xxl.padding} ${h.xxl.text}`,
        "2xl": `${h.xxl.height} min-w-14 rounded-md ${h.xxl.padding} ${h.xxl.text}`,
        icon: h.md.iconButton,
        "icon-xxs": h.xxs.iconButton,
        "icon-xs": h.xs.iconButton,
        "icon-sm": h.sm.iconButton,
        "icon-md": h.md.iconButton,
        "icon-lg": h.lg.iconButton,
        "icon-xl": h.xl.iconButton,
        "icon-xxl": h.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function j({
  className: e,
  variant: r = "default",
  size: n = "md",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ t(
    o ? Ce : "button",
    {
      "data-slot": "button",
      "data-variant": r,
      "data-size": n,
      className: a(ie({ variant: r, size: n, className: e })),
      ...i
    }
  );
}
const Je = de(
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
function Mt({
  className: e,
  variant: r,
  asChild: n = !1,
  ...o
}) {
  return /* @__PURE__ */ t(n ? Ce : "span", { "data-slot": "badge", className: a(Je({ variant: r }), e), ...o });
}
function Te({
  className: e,
  orientation: r = "horizontal",
  decorative: n = !0,
  ...o
}) {
  return /* @__PURE__ */ t(
    qe.Root,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: r,
      className: a(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...o
    }
  );
}
function $e({
  className: e,
  classNames: r,
  showOutsideDays: n = !0,
  captionLayout: o = "label",
  buttonVariant: i = "ghost",
  formatters: u,
  components: c,
  ...g
}) {
  const d = De();
  return /* @__PURE__ */ t(
    Ye,
    {
      showOutsideDays: n,
      weekStartsOn: 1,
      className: a(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      formatters: {
        formatMonthDropdown: (p) => {
          const x = g.locale ? typeof g.locale == "string" ? g.locale : g.locale.code || "default" : "default";
          return p.toLocaleString(x, { month: "short" });
        },
        ...u
      },
      classNames: {
        root: a("w-fit", d.root),
        months: a("flex gap-4 flex-col md:flex-row relative", d.months),
        month: a("flex flex-col w-full gap-4", d.month),
        nav: a(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          d.nav
        ),
        button_previous: a(
          ie({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_previous
        ),
        button_next: a(
          ie({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          d.button_next
        ),
        month_caption: a(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          d.month_caption
        ),
        dropdowns: a(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          d.dropdowns
        ),
        dropdown_root: a(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          d.dropdown_root
        ),
        dropdown: a("absolute bg-popover inset-0 opacity-0", d.dropdown),
        caption_label: a(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          d.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: a("flex", d.weekdays),
        weekday: a(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          d.weekday
        ),
        week: a("flex w-full mt-1", d.week),
        week_number_header: a("select-none w-(--cell-size)", d.week_number_header),
        week_number: a(
          "text-[0.8rem] select-none text-muted-foreground",
          d.week_number
        ),
        day: a(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          g.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          d.day
        ),
        range_start: a("rounded-l-md bg-accent", d.range_start),
        range_middle: a("rounded-none", d.range_middle),
        range_end: a("rounded-r-md bg-accent", d.range_end),
        today: a("bg-accent text-accent-foreground !rounded-full", d.today),
        outside: a(
          "text-muted-foreground aria-selected:text-muted-foreground",
          d.outside
        ),
        disabled: a("text-muted-foreground opacity-50", d.disabled),
        hidden: a("invisible", d.hidden),
        ...r
      },
      components: {
        ...c,
        CaptionLabel: ({ className: p, ...x }) => /* @__PURE__ */ t("div", { className: a(p), ...x }),
        Root: ({ className: p, rootRef: x, ...S }) => /* @__PURE__ */ t("div", { "data-slot": "calendar", ref: x, className: a(p), ...S }),
        Chevron: ({ className: p, orientation: x, ...S }) => x === "left" ? /* @__PURE__ */ t(Ie, { className: a("size-4", p), ...S }) : x === "right" ? /* @__PURE__ */ t(Pe, { className: a("size-4", p), ...S }) : /* @__PURE__ */ t(le, { className: a("size-4", p), ...S }),
        DayButton: Xe,
        WeekNumber: ({ children: p, ...x }) => /* @__PURE__ */ t("td", { ...x, children: /* @__PURE__ */ t("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: p }) })
      },
      ...g
    }
  );
}
function Xe({
  className: e,
  day: r,
  modifiers: n,
  ...o
}) {
  const i = De(), u = f.useRef(null);
  f.useEffect(() => {
    n.focused && u.current?.focus();
  }, [n.focused]);
  const c = n.today, g = n.selected && !n.range_start && !n.range_end && !n.range_middle, d = n.range_start, p = n.range_end, x = n.range_middle;
  return /* @__PURE__ */ m(
    j,
    {
      ref: u,
      variant: "ghost",
      size: "icon",
      "data-day": r.date.toLocaleDateString(),
      "data-selected-single": g,
      "data-range-start": d,
      "data-range-end": p,
      "data-range-middle": x,
      className: a(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        i.day,
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t("span", { children: o.children }),
        c && /* @__PURE__ */ t("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function Ct({
  className: e,
  size: r = "md",
  ...n
}) {
  const o = h[r ?? "md"];
  return /* @__PURE__ */ t(
    ge.Root,
    {
      "data-slot": "checkbox",
      "data-size": r,
      className: a(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        o.icon,
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        ge.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ t(ce, { className: o.icon })
        }
      )
    }
  );
}
function Ke({ ...e }) {
  return /* @__PURE__ */ t(O.Root, { "data-slot": "dialog", ...e });
}
function _t({ ...e }) {
  return /* @__PURE__ */ t(O.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Ze({ ...e }) {
  return /* @__PURE__ */ t(O.Portal, { "data-slot": "dialog-portal", ...e });
}
function Dt({ ...e }) {
  return /* @__PURE__ */ t(O.Close, { "data-slot": "dialog-close", ...e });
}
function Qe({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    O.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: a(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...r
    }
  );
}
function et({
  className: e,
  children: r,
  showCloseButton: n = !0,
  ...o
}) {
  return /* @__PURE__ */ m(Ze, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ t(Qe, {}),
    /* @__PURE__ */ m(
      O.Content,
      {
        "data-slot": "dialog-content",
        className: a(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...o,
        children: [
          r,
          n && /* @__PURE__ */ m(
            O.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ t(He, {}),
                /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function tt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-header",
      className: a("flex flex-col gap-2 text-center sm:text-left", e),
      ...r
    }
  );
}
function zt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "dialog-footer",
      className: a("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...r
    }
  );
}
function rt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    O.Title,
    {
      "data-slot": "dialog-title",
      className: a("text-lg leading-none font-semibold", e),
      ...r
    }
  );
}
function nt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    O.Description,
    {
      "data-slot": "dialog-description",
      className: a("text-muted-foreground text-sm", e),
      ...r
    }
  );
}
function q({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Ge.Root,
    {
      "data-slot": "label",
      className: a(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...r
    }
  );
}
function Re({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y,
    {
      "data-slot": "command",
      className: a(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...r
    }
  );
}
function Tt({
  title: e = "Command Palette",
  description: r = "Search for a command to run...",
  children: n,
  className: o,
  showCloseButton: i = !0,
  ...u
}) {
  return /* @__PURE__ */ m(Ke, { ...u, children: [
    /* @__PURE__ */ m(tt, { className: "sr-only", children: [
      /* @__PURE__ */ t(rt, { children: e }),
      /* @__PURE__ */ t(nt, { children: r })
    ] }),
    /* @__PURE__ */ t(
      et,
      {
        className: a("overflow-hidden p-0", o),
        showCloseButton: i,
        children: /* @__PURE__ */ t(Re, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function at({
  className: e,
  label: r,
  error: n,
  required: o,
  id: i,
  ...u
}) {
  const c = r || n, g = /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: /* @__PURE__ */ m(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: a(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        n && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ t(Be, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ t(
          Y.Input,
          {
            id: i,
            "data-slot": "command-input",
            "aria-invalid": !!n,
            className: a(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              n && "focus-visible:ring-destructive",
              e
            ),
            ...u
          }
        )
      ]
    }
  ) });
  return c ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(q, { htmlFor: i, children: [
      r,
      o && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    n && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : g;
}
function ot({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y.List,
    {
      "data-slot": "command-list",
      className: a("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...r
    }
  );
}
function st({ ...e }) {
  return /* @__PURE__ */ t(
    Y.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function it({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Y.Group,
    {
      "data-slot": "command-group",
      className: a(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...r
    }
  );
}
function $t({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    Y.Separator,
    {
      "data-slot": "command-separator",
      className: a("bg-border -mx-1 h-px", e),
      ...r
    }
  );
}
function dt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    Y.Item,
    {
      "data-slot": "command-item",
      className: a(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Rt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "command-shortcut",
      className: a("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...r
    }
  );
}
function ue({ ...e }) {
  return /* @__PURE__ */ t(K.Root, { "data-slot": "popover", ...e });
}
function me({ ...e }) {
  return /* @__PURE__ */ t(K.Trigger, { "data-slot": "popover-trigger", ...e });
}
function fe({
  className: e,
  align: r = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ t(K.Portal, { children: /* @__PURE__ */ t(
    K.Content,
    {
      "data-slot": "popover-content",
      align: r,
      sideOffset: n,
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function It({ ...e }) {
  return /* @__PURE__ */ t(K.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Pt({
  options: e,
  value: r,
  onChange: n,
  label: o,
  error: i,
  required: u,
  placeholder: c = "Select option...",
  searchPlaceholder: g = "Search...",
  emptyMessage: d = "No results found.",
  disabled: p = !1,
  readonly: x = !1,
  size: S = "md",
  showClearIcon: _ = !0,
  showArrowIcon: D = !0,
  suffix: C,
  className: $,
  triggerClassName: H,
  popoverClassName: s
}) {
  const [l, v] = f.useState(!1), w = f.useMemo(
    () => e.find((b) => b.id === r),
    [e, r]
  ), P = !p && !x && !!r, A = (b) => {
    n?.(b.id, b), v(!1);
  }, z = (b) => {
    b.preventDefault(), b.stopPropagation(), P && n?.("", void 0);
  }, T = /* @__PURE__ */ m(ue, { open: l, onOpenChange: v, children: [
    /* @__PURE__ */ t(me, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": l,
        disabled: p,
        size: S,
        className: a(
          "w-full justify-between group/combobox",
          !r && "text-muted-foreground",
          i && "border-destructive",
          H
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "flex-1 text-left truncate", children: w ? w.name : c }),
          /* @__PURE__ */ m("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            r && P ? /* @__PURE__ */ m(
              "span",
              {
                onMouseDown: (b) => {
                  b.preventDefault(), b.stopPropagation();
                },
                onClick: z,
                className: "cursor-pointer",
                children: [
                  _ && /* @__PURE__ */ t(Ee, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  D && /* @__PURE__ */ t(pe, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : D && /* @__PURE__ */ t(pe, { className: "text-muted-foreground h-4 w-4" }),
            C
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      fe,
      {
        className: a("w-(--radix-popover-trigger-width) p-0", s),
        align: "start",
        children: /* @__PURE__ */ m(Re, { children: [
          /* @__PURE__ */ t(at, { placeholder: g }),
          /* @__PURE__ */ m(ot, { children: [
            /* @__PURE__ */ t(st, { children: d }),
            /* @__PURE__ */ t(it, { children: e.map((b) => /* @__PURE__ */ m(
              dt,
              {
                value: b.name,
                disabled: b.disabled,
                onSelect: () => A(b),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ t("span", { className: "flex-1 truncate", children: b.name }),
                  /* @__PURE__ */ t(
                    ce,
                    {
                      className: a(
                        "h-4 w-4 shrink-0 text-primary",
                        r === b.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              b.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !o && !i ? /* @__PURE__ */ t("div", { className: a("w-full", $), children: T }) : /* @__PURE__ */ m("div", { className: a("w-full", $), children: [
    o && /* @__PURE__ */ m(q, { className: "text-foreground leading-5 block", children: [
      o,
      u && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: o ? "mt-1" : "", children: T }),
    i && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: i })
  ] });
}
function X({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ m(
    J.Root,
    {
      "data-slot": "scroll-area",
      className: a("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ t(
          J.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ t(lt, {}),
        /* @__PURE__ */ t(J.Corner, {})
      ]
    }
  );
}
function lt({
  className: e,
  orientation: r = "vertical",
  ...n
}) {
  return /* @__PURE__ */ t(
    J.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: a(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        J.ScrollAreaThumb,
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
  locale: n,
  monthNames: o,
  disabled: i,
  className: u
}) {
  const [c, g] = f.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [d, p] = f.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), x = f.useRef(null), S = f.useRef(null);
  f.useEffect(() => {
    if (e) {
      const s = e.getFullYear(), l = e.getMonth();
      (c !== s || d !== l) && (g(s), p(l));
    } else {
      const s = /* @__PURE__ */ new Date(), l = s.getFullYear(), v = s.getMonth();
      (c !== l || d !== v) && (g(l), p(v));
    }
  }, [e]), f.useEffect(() => {
    if (!x.current) return;
    const s = setTimeout(() => {
      const l = x.current?.querySelector(
        `[data-month="${d}"]`
      );
      if (l && x.current) {
        const v = x.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (v) {
          const w = l.offsetTop;
          v.scrollTo({ top: w, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(s);
  }, [d]), f.useEffect(() => {
    if (!S.current) return;
    const s = setTimeout(() => {
      const l = S.current?.querySelector(
        `[data-year="${c}"]`
      );
      if (l && S.current) {
        const v = S.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (v) {
          const w = l.offsetTop;
          v.scrollTo({ top: w, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(s);
  }, [c]);
  const _ = f.useCallback(
    (s) => {
      p(s);
      const l = new Date(c, s, 1);
      r(V(l));
    },
    [c, r]
  ), D = f.useCallback(
    (s) => {
      g(s);
      const l = new Date(s, d, 1);
      r(V(l));
    },
    [d, r]
  ), C = f.useMemo(() => {
    if (o && o.length === 12)
      return o;
    const s = typeof n == "string" ? n : n?.code || "en-US", l = new Intl.DateTimeFormat(s, { month: "long" });
    return Array.from({ length: 12 }, (v, w) => {
      const P = new Date(2024, w, 1);
      return l.format(P);
    });
  }, [n, o]), $ = f.useMemo(
    () => Array.from({ length: 100 }, (s, l) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + l),
    []
  ), H = f.useMemo(() => e ? `${C[d]} ${c}` : `${C[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, C, d, c]);
  return /* @__PURE__ */ m("div", { className: a("flex flex-col h-full", u), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: H }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(X, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: x, className: "px-2", children: C.map((s, l) => {
        const v = d === l, w = i ? i(new Date(c, l, 1)) : !1;
        return /* @__PURE__ */ t(
          "div",
          {
            "data-month": l,
            onClick: () => !w && _(l),
            className: a(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              v ? "bg-secondary" : "hover:bg-accent",
              w && "opacity-50 cursor-not-allowed"
            ),
            children: s
          },
          l
        );
      }) }) }),
      /* @__PURE__ */ t(X, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: S, className: "px-2", children: $.map((s) => /* @__PURE__ */ t(
        "div",
        {
          "data-year": s,
          onClick: () => D(s),
          className: a(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            c === s ? "bg-secondary" : "hover:bg-accent"
          ),
          children: s
        },
        s
      )) }) })
    ] })
  ] });
}
function Ne({ value: e, onChange: r, showSeconds: n = !0, className: o }) {
  const i = f.useRef(null), u = f.useRef(null), c = f.useRef(null), g = parseInt(e.hour, 10) || 0, d = parseInt(e.minute, 10) || 0, p = parseInt(e.second, 10) || 0, x = Array.from({ length: 24 }, (s, l) => l), S = Array.from({ length: 60 }, (s, l) => l), _ = Array.from({ length: 60 }, (s, l) => l);
  f.useEffect(() => {
    const s = setTimeout(() => {
      if (i.current) {
        const l = i.current.querySelector(
          `[data-hour="${g}"]`
        );
        if (l) {
          const v = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (v) {
            const w = l.offsetTop;
            v.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(s);
  }, [g]), f.useEffect(() => {
    const s = setTimeout(() => {
      if (u.current) {
        const l = u.current.querySelector(
          `[data-minute="${d}"]`
        );
        if (l) {
          const v = u.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (v) {
            const w = l.offsetTop;
            v.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(s);
  }, [d]), f.useEffect(() => {
    if (!n) return;
    const s = setTimeout(() => {
      if (c.current) {
        const l = c.current.querySelector(
          `[data-second="${p}"]`
        );
        if (l) {
          const v = c.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (v) {
            const w = l.offsetTop;
            v.scrollTo({ top: w, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(s);
  }, [p, n]);
  const D = (s) => {
    r({
      ...e,
      hour: s.toString().padStart(2, "0")
    });
  }, C = (s) => {
    r({
      ...e,
      minute: s.toString().padStart(2, "0")
    });
  }, $ = (s) => {
    r({
      ...e,
      second: s.toString().padStart(2, "0")
    });
  }, H = `${e.hour}:${e.minute}${n ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ m("div", { className: a("flex flex-col h-full border-l", o), children: [
    /* @__PURE__ */ t("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ t("div", { className: "font-medium text-lg", children: H }) }),
    /* @__PURE__ */ m("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ t(X, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: i, className: "px-2", children: x.map((s) => /* @__PURE__ */ t(
        "div",
        {
          "data-hour": s,
          onClick: () => D(s),
          className: a(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            g === s ? "bg-secondary" : "hover:bg-accent"
          ),
          children: s.toString().padStart(2, "0")
        },
        s
      )) }) }),
      /* @__PURE__ */ t(X, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ t("div", { ref: u, className: "px-2", children: S.map((s) => /* @__PURE__ */ t(
        "div",
        {
          "data-minute": s,
          onClick: () => C(s),
          className: a(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            d === s ? "bg-secondary" : "hover:bg-accent"
          ),
          children: s.toString().padStart(2, "0")
        },
        s
      )) }) }),
      n && /* @__PURE__ */ t(X, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ t("div", { ref: c, className: "px-2", children: _.map((s) => /* @__PURE__ */ t(
        "div",
        {
          "data-second": s,
          onClick: () => $(s),
          className: a(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            p === s ? "bg-secondary" : "hover:bg-accent"
          ),
          children: s.toString().padStart(2, "0")
        },
        s
      )) }) })
    ] })
  ] });
}
function Ht({
  value: e,
  onChange: r,
  placeholder: n = "Pick a date",
  dateFormat: o = "dd/MM/yyyy",
  showTime: i = !1,
  timeOnly: u = !1,
  mode: c = "single",
  label: g,
  error: d,
  required: p,
  disabled: x = !1,
  disabledPast: S = !1,
  disabledFuture: _ = !1,
  onDisabled: D,
  size: C = "md",
  className: $,
  triggerClassName: H,
  popoverClassName: s,
  locale: l,
  cancelText: v,
  applyText: w,
  monthNames: P,
  ...A
}) {
  const [z, T] = f.useState(!1), [b, N] = f.useState(e), [G, F] = f.useState(() => e || /* @__PURE__ */ new Date()), [R, I] = f.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), U = f.useRef(e), Z = f.useRef(e || /* @__PURE__ */ new Date()), re = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, Q = f.useRef(re());
  f.useEffect(() => {
    z && (U.current = e, Z.current = e || /* @__PURE__ */ new Date(), Q.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, u ? I(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : c === "month" ? N(e ? V(e) : V(/* @__PURE__ */ new Date())) : (N(e), e ? (F(e), i && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (F(/* @__PURE__ */ new Date()), i && I({ hour: "00", minute: "00", second: "00" }))));
  }, [z, e, i, u, c]), f.useEffect(() => {
    !z && !u ? (N(e), e && (F(e), i && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !z && u && e && I({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, i, u, z]);
  const ne = () => {
    if (u) {
      const B = he(
        xe(be(e || /* @__PURE__ */ new Date(), parseInt(R.hour, 10)), parseInt(R.minute, 10)),
        parseInt(R.second, 10)
      );
      r?.(B);
    } else if (c === "month")
      r?.(b ? V(b) : void 0);
    else if (b) {
      let y = b;
      i && (y = be(y, parseInt(R.hour, 10)), y = xe(y, parseInt(R.minute, 10)), y = he(y, parseInt(R.second, 10))), r?.(y);
    } else
      r?.(void 0);
    T(!1);
  }, ae = () => {
    N(U.current), F(Z.current), i && I(Q.current), T(!1);
  }, oe = f.useMemo(() => {
    if (!e) return n;
    const y = l && typeof l != "string" ? { locale: l } : void 0;
    if (u)
      return /[Hhms]/.test(o) ? E(e, o, y) : E(e, "HH:mm:ss", y);
    if (c === "month") {
      if (l) {
        const B = typeof l == "string" ? l : l?.code || "en-US";
        return new Intl.DateTimeFormat(B, { month: "2-digit", year: "numeric" }).format(e);
      }
      return E(e, "MM/yyyy", y);
    }
    return i ? /[Hhms]/.test(o) ? E(e, o, y) : E(e, `${o} HH:mm:ss`, y) : E(e, o, y);
  }, [e, o, i, u, c, n, l]), W = f.useCallback(
    (y) => {
      if (x) return !0;
      const B = /* @__PURE__ */ new Date();
      B.setHours(0, 0, 0, 0);
      const ee = new Date(y);
      return ee.setHours(0, 0, 0, 0), S && ee < B || _ && ee > B ? !0 : D ? D(y) : !1;
    },
    [x, S, _, D]
  ), k = f.useMemo(
    () => ({
      ...A,
      mode: "single",
      selected: b,
      onSelect: N,
      defaultMonth: G,
      month: G,
      onMonthChange: F,
      captionLayout: "dropdown",
      disabled: W,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: l
    }),
    [A, b, G, W, l]
  ), L = /* @__PURE__ */ m(ue, { open: z, onOpenChange: T, children: [
    /* @__PURE__ */ t(me, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        size: C,
        disabled: x,
        className: a(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          d && "border-destructive",
          H
        ),
        children: [
          /* @__PURE__ */ t("span", { children: oe }),
          /* @__PURE__ */ t(_e, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      fe,
      {
        className: a("flex w-auto flex-col gap-2 p-0", s),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          u ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            Ne,
            {
              value: R,
              onChange: I,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : c === "month" ? /* @__PURE__ */ t("div", { className: "flex h-[350px]", children: /* @__PURE__ */ t(
            ct,
            {
              value: b,
              onChange: N,
              locale: l,
              monthNames: P,
              disabled: W,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ m("div", { className: a("flex h-[350px]", i && "overflow-hidden"), children: [
            /* @__PURE__ */ t($e, { initialFocus: !0, ...k }),
            i && /* @__PURE__ */ t(
              Ne,
              {
                value: R,
                onChange: I,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ t(Te, { className: "shrink-0" }),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ t(j, { variant: "secondary", size: "sm", onClick: ae, children: v || "Cancel" }),
            /* @__PURE__ */ t(j, { size: "sm", onClick: ne, children: w || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return g || d ? /* @__PURE__ */ m("div", { className: a("w-full", $), children: [
    g && /* @__PURE__ */ m(q, { className: "text-foreground leading-5 block", children: [
      g,
      p && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: g ? "mt-1" : "", children: L }),
    d && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: d })
  ] }) : /* @__PURE__ */ t("div", { className: a("w-full", $), children: L });
}
const ut = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Fe(e),
        to: Ae(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Ve(we(e, 1), { weekStartsOn: 1 }),
        to: Le(we(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: V(te(e, 1)),
        to: ve(te(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: V(te(e, 3)),
        to: ve(te(e, 3))
      }
    }
  ];
};
function Bt({
  value: e,
  onChange: r,
  placeholder: n = { from: "From date", to: "To date" },
  dateFormat: o = "dd/MM/yyyy",
  presets: i,
  showPresets: u,
  label: c,
  error: g,
  required: d,
  disabled: p = !1,
  disabledPast: x = !1,
  disabledFuture: S = !1,
  onDisabled: _,
  size: D = "md",
  className: C,
  triggerClassName: $,
  popoverClassName: H,
  locale: s,
  cancelText: l,
  applyText: v,
  ...w
}) {
  const [P, A] = f.useState(!1), [z, T] = f.useState(e), [b, N] = f.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), G = f.useRef(e), F = f.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  f.useEffect(() => {
    P && (G.current = e, F.current = e?.to || e?.from || /* @__PURE__ */ new Date(), T(e), e?.to ? N(e.to) : e?.from ? N(e.from) : N(/* @__PURE__ */ new Date()));
  }, [P, e]), f.useEffect(() => {
    T(e), e?.to ? N(e.to) : e?.from && N(e.from);
  }, [e]);
  const R = f.useCallback(
    (k) => {
      if (p) return !0;
      const L = /* @__PURE__ */ new Date();
      L.setHours(0, 0, 0, 0);
      const y = new Date(k);
      return y.setHours(0, 0, 0, 0), x && y < L || S && y > L ? !0 : _ ? _(k) : !1;
    },
    [p, x, S, _]
  ), I = f.useMemo(() => ut(), []), U = i ?? I, Z = u !== void 0 ? u : U.length > 0, re = () => {
    r?.(z), A(!1);
  }, Q = () => {
    T(G.current), N(F.current), A(!1);
  }, ne = (k) => {
    T(k.range), k.range.to ? N(k.range.to) : k.range.from && N(k.range.from);
  }, ae = f.useMemo(() => {
    if (!e?.from) return n.from || "Pick a date";
    const k = s && typeof s != "string" ? { locale: s } : void 0;
    return e.from && e.to ? `${E(e.from, o, k)} - ${E(e.to, o, k)}` : E(e.from, o, k);
  }, [e, o, n, s]), oe = f.useMemo(
    () => ({
      ...w,
      mode: "range",
      selected: z,
      onSelect: T,
      defaultMonth: b,
      month: b,
      onMonthChange: N,
      disabled: R,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: s
    }),
    [w, z, b, R, s]
  ), W = /* @__PURE__ */ m(ue, { open: P, onOpenChange: A, children: [
    /* @__PURE__ */ t(me, { asChild: !0, children: /* @__PURE__ */ m(
      j,
      {
        variant: "outline",
        size: D,
        disabled: p,
        className: a(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          g && "border-destructive",
          $
        ),
        children: [
          /* @__PURE__ */ t("span", { children: ae }),
          /* @__PURE__ */ t(_e, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t(
      fe,
      {
        className: a("flex w-auto flex-col gap-2 p-0 pb-2", H),
        align: "start",
        children: /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ m("div", { className: "flex", children: [
            Z && /* @__PURE__ */ t("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ t("div", { className: "space-y-1", children: U.map((k, L) => /* @__PURE__ */ t(
              j,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => ne(k),
                children: k.label
              },
              L
            )) }) }),
            /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ t($e, { initialFocus: !0, ...oe }) })
          ] }),
          /* @__PURE__ */ t(Te, {}),
          /* @__PURE__ */ m("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ t(j, { variant: "secondary", onClick: Q, children: l || "Cancel" }),
            /* @__PURE__ */ t(j, { onClick: re, children: v || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return c || g ? /* @__PURE__ */ m("div", { className: a("w-full", C), children: [
    c && /* @__PURE__ */ m(q, { className: "text-foreground leading-5 block", children: [
      c,
      d && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ t("div", { className: c ? "mt-1" : "", children: W }),
    g && /* @__PURE__ */ t("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: g })
  ] }) : /* @__PURE__ */ t("div", { className: a("w-full", C), children: W });
}
function Et({ className: e, type: r, label: n, error: o, required: i, id: u, size: c = "md", ...g }) {
  const d = n || o, p = /* @__PURE__ */ t(
    "input",
    {
      type: r,
      id: u,
      "data-slot": "input",
      "data-size": c,
      "aria-invalid": !!o,
      className: a(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        ze({ size: c }),
        c && h[c]?.padding,
        c === "xxs" && "file:h-5 file:text-xs",
        c === "xs" && "file:h-6 file:text-xs",
        c === "sm" && "file:h-7 file:text-xs",
        c === "md" && "file:h-8 file:text-sm",
        c === "lg" && "file:h-9 file:text-sm",
        c === "xl" && "file:h-10 file:text-sm",
        c === "xxl" && "file:h-11 file:text-base",
        o ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...g
    }
  );
  return d ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ m(q, { htmlFor: u, children: [
      n,
      i && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    p,
    o && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: o })
  ] }) : p;
}
function jt({ className: e, label: r, error: n, required: o, id: i, size: u = "md", ...c }) {
  const g = r || n, d = /* @__PURE__ */ t(
    "textarea",
    {
      id: i,
      "data-slot": "textarea",
      "data-size": u,
      "aria-invalid": !!n,
      className: a(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        ze({ size: u }),
        u && h[u]?.padding,
        u === "xxs" && "min-h-16",
        u === "xs" && "min-h-20",
        u === "sm" && "min-h-24",
        u === "md" && "min-h-28",
        u === "lg" && "min-h-32",
        u === "xl" && "min-h-36",
        u === "xxl" && "min-h-40",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...c
    }
  );
  return g ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ m(q, { htmlFor: i, children: [
      r,
      o && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    d,
    n && /* @__PURE__ */ t("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : d;
}
function Ot({
  className: e,
  value: r,
  ...n
}) {
  return /* @__PURE__ */ t(
    ye.Root,
    {
      "data-slot": "progress",
      className: a("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...n,
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
function At({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    se.Root,
    {
      "data-slot": "radio-group",
      className: a("grid gap-3", e),
      ...r
    }
  );
}
function Ft({
  className: e,
  size: r = "md",
  ...n
}) {
  const o = h[r ?? "md"], i = {
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
      className: a(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        o.icon,
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        se.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ t(
            je,
            {
              className: a(
                "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                i
              )
            }
          )
        }
      )
    }
  );
}
function Lt({ ...e }) {
  return /* @__PURE__ */ t(M.Root, { "data-slot": "select", ...e });
}
function Vt({ ...e }) {
  return /* @__PURE__ */ t(M.Group, { "data-slot": "select-group", ...e });
}
function Yt({ ...e }) {
  return /* @__PURE__ */ t(M.Value, { "data-slot": "select-value", ...e });
}
function qt({
  className: e,
  size: r = "md",
  children: n,
  label: o,
  error: i,
  required: u,
  id: c,
  ...g
}) {
  const d = o || i, p = h[r ?? "md"], x = /* @__PURE__ */ m(
    M.Trigger,
    {
      id: c,
      "data-slot": "select-trigger",
      "data-size": r,
      "aria-invalid": !!i,
      className: a(
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
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...g,
      children: [
        n,
        /* @__PURE__ */ t(M.Icon, { asChild: !0, children: /* @__PURE__ */ t(le, { className: a("opacity-50", p.icon) }) })
      ]
    }
  );
  return d ? /* @__PURE__ */ m("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ m(q, { htmlFor: c, children: [
      o,
      u && /* @__PURE__ */ t("span", { className: "text-destructive", children: "*" })
    ] }),
    x,
    i && /* @__PURE__ */ t("div", { className: "text-sm text-destructive", role: "alert", children: i })
  ] }) : x;
}
function Gt({
  className: e,
  children: r,
  position: n = "item-aligned",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ t(M.Portal, { children: /* @__PURE__ */ m(
    M.Content,
    {
      "data-slot": "select-content",
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ t(mt, {}),
        /* @__PURE__ */ t(
          M.Viewport,
          {
            className: a(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(ft, {})
      ]
    }
  ) });
}
function Wt({ className: e, ...r }) {
  return /* @__PURE__ */ t(
    M.Label,
    {
      "data-slot": "select-label",
      className: a("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...r
    }
  );
}
function Ut({
  className: e,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ m(
    M.Item,
    {
      "data-slot": "select-item",
      className: a(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ t(M.ItemIndicator, { children: /* @__PURE__ */ t(ce, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(M.ItemText, { children: r })
      ]
    }
  );
}
function Jt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.Separator,
    {
      "data-slot": "select-separator",
      className: a("-mx-1 my-1 h-px pointer-events-none bg-border", e),
      ...r
    }
  );
}
function mt({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: a("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(Oe, { className: "size-4" })
    }
  );
}
function ft({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    M.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: a("flex justify-center items-center py-1 cursor-default", e),
      ...r,
      children: /* @__PURE__ */ t(le, { className: "size-4" })
    }
  );
}
function Xt({
  className: e,
  size: r = "md",
  ...n
}) {
  const o = h[r ?? "md"], i = {
    xxs: { height: "h-3.5", width: "w-6", thumb: o.icon },
    xs: { height: "h-4", width: "w-7", thumb: o.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: o.icon },
    md: { height: "h-5", width: "w-9", thumb: o.icon },
    lg: { height: "h-6", width: "w-11", thumb: o.icon },
    xl: { height: "h-6", width: "w-12", thumb: o.icon },
    xxl: { height: "h-7", width: "w-14", thumb: o.icon }
  }[r ?? "md"];
  return /* @__PURE__ */ t(
    Se.Root,
    {
      "data-slot": "switch",
      "data-size": r,
      className: a(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i.height,
        i.width,
        e
      ),
      ...n,
      children: /* @__PURE__ */ t(
        Se.Thumb,
        {
          "data-slot": "switch-thumb",
          className: a(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            i.thumb
          )
        }
      )
    }
  );
}
const ke = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function Kt(e, r = "en-US", n = "USD") {
  return new Intl.NumberFormat(r, {
    style: "currency",
    currency: n
  }).format(e);
}
function Zt(e, r = "short") {
  const n = typeof e == "string" || typeof e == "number" ? new Date(e) : e;
  if (isNaN(n.getTime()))
    return "";
  if (r in ke) {
    const o = ke[r];
    return Me(n, o);
  }
  return Me(n, r);
}
function Me(e, r) {
  const n = e.getDate().toString().padStart(2, "0"), o = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getFullYear(), u = e.getHours().toString().padStart(2, "0"), c = e.getMinutes().toString().padStart(2, "0"), g = e.getSeconds().toString().padStart(2, "0"), d = [
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
  return r.replace(/dd/g, n).replace(/MM/g, o).replace(/yyyy/g, i.toString()).replace(/MMMM/g, d[e.getMonth()]).replace(/MMM/g, d[e.getMonth()].substring(0, 3)).replace(/HH/g, u).replace(/mm/g, c).replace(/ss/g, g);
}
function Qt(e) {
  const r = e.replace(/\D/g, "");
  return r.length === 10 ? `${r.slice(0, 4)} ${r.slice(4, 7)} ${r.slice(7)}` : r.length === 11 ? `${r.slice(0, 4)} ${r.slice(4, 7)} ${r.slice(7)}` : e;
}
function er(e) {
  if (e === 0) return "0 Bytes";
  const r = 1024, n = ["Bytes", "KB", "MB", "GB", "TB", "PB"], o = Math.floor(Math.log(e) / Math.log(r));
  return Math.round(e / Math.pow(r, o) * 100) / 100 + " " + n[o];
}
function tr(e, r, n = "...") {
  return e.length <= r ? e : e.slice(0, r) + n;
}
export {
  mt as $,
  Pt as A,
  j as B,
  Re as C,
  Ke as D,
  Tt as E,
  $t as F,
  Rt as G,
  Ht as H,
  Et as I,
  Bt as J,
  Dt as K,
  q as L,
  Qe as M,
  Ze as N,
  _t as O,
  ue as P,
  It as Q,
  Ot as R,
  Te as S,
  jt as T,
  At as U,
  Ft as V,
  X as W,
  lt as X,
  Vt as Y,
  Wt as Z,
  ft as _,
  me as a,
  Jt as a0,
  Xt as a1,
  Ne as a2,
  Kt as a3,
  Zt as a4,
  Qt as a5,
  er as a6,
  tr as a7,
  ke as a8,
  ze as a9,
  h as aa,
  ie as b,
  a as c,
  Mt as d,
  fe as e,
  at as f,
  ot as g,
  st as h,
  it as i,
  dt as j,
  Ct as k,
  et as l,
  tt as m,
  rt as n,
  nt as o,
  zt as p,
  Lt as q,
  qt as r,
  Yt as s,
  Gt as t,
  Ut as u,
  Nt as v,
  kt as w,
  Je as x,
  $e as y,
  Xe as z
};
//# sourceMappingURL=format-tKo8BO4W.js.map
