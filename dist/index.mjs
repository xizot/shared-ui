import { jsx as a, jsxs as l, Fragment as Ae } from "react/jsx-runtime";
import * as f from "react";
import { useMemo as ht, useRef as vt, useCallback as xt, useState as Fe } from "react";
import * as ae from "@radix-ui/react-accordion";
import { ChevronDownIcon as Z, ChevronRight as Le, MoreHorizontal as wt, ChevronLeftIcon as je, ChevronRightIcon as ne, ArrowLeft as Nt, ArrowRight as yt, CheckIcon as ee, XIcon as $e, SearchIcon as kt, CircleIcon as le, MinusIcon as Ct, MoreHorizontalIcon as St, GripVerticalIcon as zt, ChevronUpIcon as _t, PanelLeftIcon as Mt, Loader2Icon as He, OctagonXIcon as It, TriangleAlertIcon as Tt, InfoIcon as Dt, CircleCheckIcon as Pt, CalendarIcon as Ge, X as Rt, Upload as Et, ArrowUp as At, ArrowDown as Ft, ArrowUpDown as Lt, ChevronLeft as jt, AlertCircle as $t } from "lucide-react";
import { clsx as Ht } from "clsx";
import { twMerge as Gt } from "tailwind-merge";
import { cva as A } from "class-variance-authority";
import * as G from "@radix-ui/react-alert-dialog";
import { Slot as F } from "@radix-ui/react-slot";
import * as Ot from "@radix-ui/react-aspect-ratio";
import * as xe from "@radix-ui/react-avatar";
import * as Bt from "@radix-ui/react-separator";
import { getDefaultClassNames as Oe, DayPicker as Vt } from "react-day-picker";
import Kt from "embla-carousel-react";
import * as we from "recharts";
import * as Me from "@radix-ui/react-checkbox";
import * as Ne from "@radix-ui/react-collapsible";
import { Command as W } from "cmdk";
import * as C from "@radix-ui/react-dialog";
import * as Ut from "@radix-ui/react-label";
import * as re from "@radix-ui/react-popover";
import * as _ from "@radix-ui/react-context-menu";
import { Drawer as O } from "vaul";
import * as M from "@radix-ui/react-dropdown-menu";
import { FormProvider as qt, useFormContext as Wt, useFormState as L, Controller as j, useController as Jt } from "react-hook-form";
import * as de from "@radix-ui/react-hover-card";
import { OTPInput as Xt, OTPInputContext as Qt } from "input-otp";
import * as I from "@radix-ui/react-menubar";
import * as B from "@radix-ui/react-navigation-menu";
import * as Ie from "@radix-ui/react-progress";
import * as he from "@radix-ui/react-radio-group";
import { Group as Yt, Panel as Zt, Separator as ea } from "react-resizable-panels";
import * as te from "@radix-ui/react-scroll-area";
import * as R from "@radix-ui/react-select";
import * as Q from "@radix-ui/react-tooltip";
import * as ie from "@radix-ui/react-slider";
import { useTheme as ta } from "next-themes";
import { Toaster as aa, toast as H } from "sonner";
import * as Te from "@radix-ui/react-switch";
import * as ce from "@radix-ui/react-tabs";
import * as ra from "@radix-ui/react-toggle";
import * as Be from "@radix-ui/react-toggle-group";
import { useReactTable as na, getFilteredRowModel as oa, getSortedRowModel as ia, getPaginationRowModel as sa, getCoreRowModel as da, flexRender as De } from "@tanstack/react-table";
import { format as se } from "date-fns";
function o(...e) {
  return Gt(Ht(e));
}
function $(e, t) {
  const r = t.split(".");
  let n = e;
  for (const i of r) {
    if (n == null || typeof n != "object")
      return;
    n = n[i];
  }
  return n;
}
function la(e) {
  return !(e == null || typeof e == "string" && e.trim() === "");
}
function qr({ ...e }) {
  return /* @__PURE__ */ a(ae.Root, { "data-slot": "accordion", ...e });
}
function Wr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ae.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Jr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(ae.Header, { className: "flex", children: /* @__PURE__ */ l(
    ae.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(Z, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Xr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    ae.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const ca = A(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ve = f.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a("div", { ref: n, role: "alert", className: o(ca({ variant: t }), e), ...r }));
Ve.displayName = "Alert";
const Ke = f.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: o("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }
  )
);
Ke.displayName = "AlertTitle";
const Ue = f.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: o("text-sm [&_p]:leading-relaxed", e), ...t }));
Ue.displayName = "AlertDescription";
const Y = A(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function T({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: n = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    n ? F : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": r,
      className: o(Y({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
function Qr({ ...e }) {
  return /* @__PURE__ */ a(G.Root, { "data-slot": "alert-dialog", ...e });
}
function Yr({
  ...e
}) {
  return /* @__PURE__ */ a(G.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function ua({ ...e }) {
  return /* @__PURE__ */ a(G.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(ua, { children: [
    /* @__PURE__ */ a(ma, {}),
    /* @__PURE__ */ a(
      G.Content,
      {
        "data-slot": "alert-dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function en({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function tn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function an({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", e),
      ...t
    }
  );
}
function rn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function nn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(G.Action, { className: o(Y(), e), ...t });
}
function on({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Cancel,
    {
      className: o(Y({ variant: "outline" }), e),
      ...t
    }
  );
}
function sn({ ...e }) {
  return /* @__PURE__ */ a(Ot.Root, { "data-slot": "aspect-ratio", ...e });
}
function dn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    xe.Root,
    {
      "data-slot": "avatar",
      className: o("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function ln({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    xe.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    xe.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
const fa = A(
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
function ye({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(r ? F : "span", { "data-slot": "badge", className: o(fa({ variant: t }), e), ...n });
}
function un({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function mn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: o(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function fn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function gn({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? F : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function pn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: o("text-foreground font-normal", e),
      ...t
    }
  );
}
function bn({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: o("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(Le, {})
    }
  );
}
function hn({ className: e, ...t }) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(wt, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function q({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Bt.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: t,
      className: o(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const ga = A(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
function vn({
  className: e,
  orientation: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: o(ga({ orientation: t }), e),
      ...r
    }
  );
}
function xn({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? F : "div",
    {
      className: o(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function wn({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    q,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: o(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...r
    }
  );
}
function qe({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: n = "label",
  buttonVariant: i = "ghost",
  formatters: s,
  components: d,
  ...u
}) {
  const c = Oe();
  return /* @__PURE__ */ a(
    Vt,
    {
      showOutsideDays: r,
      className: o(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (m) => m.toLocaleString("default", { month: "short" }),
        ...s
      },
      classNames: {
        root: o("w-fit", c.root),
        months: o("flex gap-4 flex-col md:flex-row relative", c.months),
        month: o("flex flex-col w-full gap-4", c.month),
        nav: o(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          c.nav
        ),
        button_previous: o(
          Y({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_previous
        ),
        button_next: o(
          Y({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_next
        ),
        month_caption: o(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          c.month_caption
        ),
        dropdowns: o(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          c.dropdowns
        ),
        dropdown_root: o(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          c.dropdown_root
        ),
        dropdown: o("absolute bg-popover inset-0 opacity-0", c.dropdown),
        caption_label: o(
          "select-none font-medium",
          n === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: o("flex", c.weekdays),
        weekday: o(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          c.weekday
        ),
        week: o("flex w-full mt-2", c.week),
        week_number_header: o("select-none w-(--cell-size)", c.week_number_header),
        week_number: o(
          "text-[0.8rem] select-none text-muted-foreground",
          c.week_number
        ),
        day: o(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          u.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          c.day
        ),
        range_start: o("rounded-l-md bg-accent", c.range_start),
        range_middle: o("rounded-none", c.range_middle),
        range_end: o("rounded-r-md bg-accent", c.range_end),
        today: o(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          c.today
        ),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: o("text-muted-foreground opacity-50", c.disabled),
        hidden: o("invisible", c.hidden),
        ...t
      },
      components: {
        Root: ({ className: m, rootRef: g, ...p }) => /* @__PURE__ */ a("div", { "data-slot": "calendar", ref: g, className: o(m), ...p }),
        Chevron: ({ className: m, orientation: g, ...p }) => g === "left" ? /* @__PURE__ */ a(je, { className: o("size-4", m), ...p }) : g === "right" ? /* @__PURE__ */ a(ne, { className: o("size-4", m), ...p }) : /* @__PURE__ */ a(Z, { className: o("size-4", m), ...p }),
        DayButton: pa,
        WeekNumber: ({ children: m, ...g }) => /* @__PURE__ */ a("td", { ...g, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: m }) }),
        ...d
      },
      ...u
    }
  );
}
function pa({
  className: e,
  day: t,
  modifiers: r,
  ...n
}) {
  const i = Oe(), s = f.useRef(null);
  return f.useEffect(() => {
    r.focused && s.current?.focus();
  }, [r.focused]), /* @__PURE__ */ a(
    T,
    {
      ref: s,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
      "data-range-start": r.range_start,
      "data-range-end": r.range_end,
      "data-range-middle": r.range_middle,
      className: o(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...n
    }
  );
}
function Nn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function yn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: o(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function kn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("leading-none font-semibold", e),
      ...t
    }
  );
}
function Cn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Sn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function zn({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "card-content", className: o("px-6", e), ...t });
}
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const We = f.createContext(null);
function ue() {
  const e = f.useContext(We);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Mn({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: i,
  children: s,
  ...d
}) {
  const [u, c] = Kt(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [m, g] = f.useState(!1), [p, b] = f.useState(!1), w = f.useCallback((x) => {
    x && (g(x.canScrollPrev()), b(x.canScrollNext()));
  }, []), N = f.useCallback(() => {
    c?.scrollPrev();
  }, [c]), y = f.useCallback(() => {
    c?.scrollNext();
  }, [c]), h = f.useCallback(
    (x) => {
      x.key === "ArrowLeft" ? (x.preventDefault(), N()) : x.key === "ArrowRight" && (x.preventDefault(), y());
    },
    [N, y]
  );
  return f.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), f.useEffect(() => {
    if (c)
      return w(c), c.on("reInit", w), c.on("select", w), () => {
        c?.off("select", w);
      };
  }, [c, w]), /* @__PURE__ */ a(
    We.Provider,
    {
      value: {
        carouselRef: u,
        api: c,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: N,
        scrollNext: y,
        canScrollPrev: m,
        canScrollNext: p
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: h,
          className: o("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: s
        }
      )
    }
  );
}
function In({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = ue();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: o("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function Tn({ className: e, ...t }) {
  const { orientation: r } = ue();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: o(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function Dn({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: d } = ue();
  return /* @__PURE__ */ l(
    T,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(Nt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Pn({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: s, canScrollNext: d } = ue();
  return /* @__PURE__ */ l(
    T,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !d,
      onClick: s,
      ...n,
      children: [
        /* @__PURE__ */ a(yt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const ba = { light: "", dark: ".dark" }, Je = f.createContext(null);
function Xe() {
  const e = f.useContext(Je);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Rn({
  id: e,
  className: t,
  children: r,
  config: n,
  ...i
}) {
  const s = f.useId(), d = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Je.Provider, { value: { config: n }, children: /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "chart",
      "data-chart": d,
      className: o(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(ha, { id: d, config: n }),
        /* @__PURE__ */ a(we.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const ha = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([, n]) => n.theme || n.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ba).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([s, d]) => {
            const u = d.theme?.[n] || d.color;
            return u ? `  --color-${s}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, En = we.Tooltip;
function An({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: s = !1,
  label: d,
  labelFormatter: u,
  labelClassName: c,
  formatter: m,
  color: g,
  nameKey: p,
  labelKey: b
}) {
  const { config: w } = Xe(), N = f.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [h] = t, x = `${b || h?.dataKey || h?.name || "value"}`, v = ve(w, h, x), k = !b && typeof d == "string" ? w[d]?.label || d : v?.label;
    return u ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: u(k, t) }) : k ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: k }) : null;
  }, [d, u, t, i, c, w, b]);
  if (!e || !t?.length)
    return null;
  const y = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ l(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        y ? null : N,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((h) => h.type !== "none").map((h, x) => {
          const v = `${p || h.name || h.dataKey || "value"}`, k = ve(w, h, v), K = g || h.payload.fill || h.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && h?.value !== void 0 && h.name ? m(h.value, h.name, h, x, h.payload) : /* @__PURE__ */ l(Ae, { children: [
                k?.icon ? /* @__PURE__ */ a(k.icon, {}) : !s && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": y && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": K,
                      "--color-border": K
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      y ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: [
                        y ? N : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: k?.label || h.name })
                      ] }),
                      h.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: h.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            h.dataKey
          );
        }) })
      ]
    }
  );
}
const Fn = we.Legend;
function Ln({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: s } = Xe();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((d) => d.type !== "none").map((d) => {
        const u = `${i || d.dataKey || "value"}`, c = ve(s, d, u);
        return /* @__PURE__ */ l(
          "div",
          {
            className: o(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: d.color
                  }
                }
              ),
              c?.label
            ]
          },
          d.value
        );
      })
    }
  ) : null;
}
function ve(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
function va({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Me.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        Me.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(ee, { className: "size-3.5" })
        }
      )
    }
  );
}
function jn({ ...e }) {
  return /* @__PURE__ */ a(Ne.Root, { "data-slot": "collapsible", ...e });
}
function $n({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function Hn({
  ...e
}) {
  return /* @__PURE__ */ a(Ne.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
function Qe({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "dialog", ...e });
}
function Gn({ ...e }) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function xa({ ...e }) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "dialog-portal", ...e });
}
function On({ ...e }) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "dialog-close", ...e });
}
function wa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ye({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ l(xa, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(wa, {}),
    /* @__PURE__ */ l(
      C.Content,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ l(
            C.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a($e, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Ze({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Na({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function et({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function tt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function D({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Ut.Root,
    {
      "data-slot": "label",
      className: o(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function at({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    W,
    {
      "data-slot": "command",
      className: o(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function Bn({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ l(Qe, { ...s, children: [
    /* @__PURE__ */ l(Ze, { className: "sr-only", children: [
      /* @__PURE__ */ a(et, { children: e }),
      /* @__PURE__ */ a(tt, { children: t })
    ] }),
    /* @__PURE__ */ a(
      Ye,
      {
        className: o("overflow-hidden p-0", n),
        showCloseButton: i,
        children: /* @__PURE__ */ a(at, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] });
}
function ya({
  className: e,
  label: t,
  error: r,
  required: n,
  id: i,
  ...s
}) {
  const d = t || r, u = /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: o("flex h-9 items-center gap-2 border-b px-3", r && "border-destructive"),
      children: [
        /* @__PURE__ */ a(kt, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          W.Input,
          {
            id: i,
            "data-slot": "command-input",
            "aria-invalid": !!r,
            className: o(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              r && "focus-visible:ring-destructive",
              e
            ),
            ...s
          }
        )
      ]
    }
  );
  return d ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ l(D, { htmlFor: i, children: [
      t,
      n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    u,
    r && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : u;
}
function ka({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    W.List,
    {
      "data-slot": "command-list",
      className: o("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...t
    }
  );
}
function Ca({ ...e }) {
  return /* @__PURE__ */ a(
    W.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Sa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Group,
    {
      "data-slot": "command-group",
      className: o(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function Vn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Separator,
    {
      "data-slot": "command-separator",
      className: o("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function za({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    W.Item,
    {
      "data-slot": "command-item",
      className: o(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Kn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "command-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function ke({ ...e }) {
  return /* @__PURE__ */ a(re.Root, { "data-slot": "popover", ...e });
}
function Ce({ ...e }) {
  return /* @__PURE__ */ a(re.Trigger, { "data-slot": "popover-trigger", ...e });
}
function Se({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(re.Portal, { children: /* @__PURE__ */ a(
    re.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function Un({ ...e }) {
  return /* @__PURE__ */ a(re.Anchor, { "data-slot": "popover-anchor", ...e });
}
function _a({
  options: e,
  value: t,
  onChange: r,
  label: n,
  error: i,
  required: s,
  placeholder: d = "Select option...",
  searchPlaceholder: u = "Search...",
  emptyMessage: c = "No results found.",
  disabled: m = !1,
  className: g,
  triggerClassName: p,
  popoverClassName: b
}) {
  const [w, N] = f.useState(!1), y = f.useMemo(
    () => e.find((v) => v.id === t),
    [e, t]
  ), h = (v) => {
    r?.(v.id, v), N(!1);
  }, x = /* @__PURE__ */ l(ke, { open: w, onOpenChange: N, children: [
    /* @__PURE__ */ a(Ce, { asChild: !0, children: /* @__PURE__ */ l(
      T,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": w,
        disabled: m,
        className: o(
          "w-full justify-between",
          !t && "text-muted-foreground",
          i && "border-destructive",
          p
        ),
        children: [
          y ? y.name : d,
          /* @__PURE__ */ a(Z, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(Se, { className: o("w-full p-0", b), align: "start", children: /* @__PURE__ */ l(at, { children: [
      /* @__PURE__ */ a(ya, { placeholder: u }),
      /* @__PURE__ */ l(ka, { children: [
        /* @__PURE__ */ a(Ca, { children: c }),
        /* @__PURE__ */ a(Sa, { children: e.map((v) => /* @__PURE__ */ l(
          za,
          {
            value: v.name,
            disabled: v.disabled,
            onSelect: () => h(v),
            children: [
              /* @__PURE__ */ a(
                ee,
                {
                  className: o(
                    "mr-2 h-4 w-4",
                    t === v.id ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              v.name
            ]
          },
          v.id
        )) })
      ] })
    ] }) })
  ] });
  return !n && !i ? /* @__PURE__ */ a("div", { className: o("w-full", g), children: x }) : /* @__PURE__ */ l("div", { className: o("w-full", g), children: [
    n && /* @__PURE__ */ l(D, { className: "text-foreground leading-5 block", children: [
      n,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: n ? "mt-1" : "", children: x }),
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: i })
  ] });
}
function qn({ ...e }) {
  return /* @__PURE__ */ a(_.Root, { "data-slot": "context-menu", ...e });
}
function Wn({
  ...e
}) {
  return /* @__PURE__ */ a(_.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Jn({ ...e }) {
  return /* @__PURE__ */ a(_.Group, { "data-slot": "context-menu-group", ...e });
}
function Xn({ ...e }) {
  return /* @__PURE__ */ a(_.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Qn({ ...e }) {
  return /* @__PURE__ */ a(_.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Yn({
  ...e
}) {
  return /* @__PURE__ */ a(_.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function Zn({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    _.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ne, { className: "ml-auto" })
      ]
    }
  );
}
function eo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function to({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(_.Portal, { children: /* @__PURE__ */ a(
    _.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function ao({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    _.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function ro({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    _.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(ee, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function no({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    _.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(_.ItemIndicator, { children: /* @__PURE__ */ a(le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function oo({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    _.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: o("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    _.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function so({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function lo({ ...e }) {
  return /* @__PURE__ */ a(O.Root, { "data-slot": "drawer", ...e });
}
function co({ ...e }) {
  return /* @__PURE__ */ a(O.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Ma({ ...e }) {
  return /* @__PURE__ */ a(O.Portal, { "data-slot": "drawer-portal", ...e });
}
function uo({ ...e }) {
  return /* @__PURE__ */ a(O.Close, { "data-slot": "drawer-close", ...e });
}
function Ia({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function mo({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(Ma, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Ia, {}),
    /* @__PURE__ */ l(
      O.Content,
      {
        "data-slot": "drawer-content",
        className: o(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...r,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function go({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    O.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function bo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function ho({ ...e }) {
  return /* @__PURE__ */ a(M.Root, { "data-slot": "dropdown-menu", ...e });
}
function vo({
  ...e
}) {
  return /* @__PURE__ */ a(M.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function xo({
  ...e
}) {
  return /* @__PURE__ */ a(M.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function wo({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ a(M.Portal, { children: /* @__PURE__ */ a(
    M.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...r
    }
  ) });
}
function No({ ...e }) {
  return /* @__PURE__ */ a(M.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function yo({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    M.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function ko({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    M.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(M.ItemIndicator, { children: /* @__PURE__ */ a(ee, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Co({
  ...e
}) {
  return /* @__PURE__ */ a(M.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function So({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    M.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(M.ItemIndicator, { children: /* @__PURE__ */ a(le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function zo({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    M.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function _o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Mo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Io({ ...e }) {
  return /* @__PURE__ */ a(M.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function To({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    M.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ne, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Do({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Ta({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: o(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function Da({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: o("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const Pa = A(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Ra({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: o(Pa({ variant: t, className: e })),
      ...r
    }
  );
}
function Ea({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: o("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function Aa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: o(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Fa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: o(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: o(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function Ro({
  className: e,
  variant: t = "legend",
  ...r
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: o(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...r
    }
  );
}
function Eo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: o(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const La = A("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Ao({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: o(La({ orientation: t }), e),
      ...r
    }
  );
}
function Fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: o("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function Lo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    D,
    {
      "data-slot": "field-label",
      className: o(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function jo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: o(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function $o({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: o(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Ho({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: o(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(q, { className: "absolute inset-0 top-1/2" }),
        e && /* @__PURE__ */ a(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children: e
          }
        )
      ]
    }
  );
}
function Go({
  className: e,
  children: t,
  errors: r,
  ...n
}) {
  const i = ht(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const s = [...new Map(r.map((d) => [d?.message, d])).values()];
    return s?.length == 1 ? s[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: s.map((d, u) => d?.message && /* @__PURE__ */ a("li", { children: d.message }, u)) });
  }, [t, r]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: o("text-destructive text-sm font-normal", e),
      ...n,
      children: i
    }
  ) : null;
}
const Oo = qt, rt = f.createContext({}), Bo = ({
  ...e
}) => /* @__PURE__ */ a(rt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(j, { ...e }) }), me = () => {
  const e = f.useContext(rt), t = f.useContext(nt), { getFieldState: r } = Wt(), n = L({ name: e.name }), i = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...i
  };
}, nt = f.createContext({});
function Vo({ className: e, ...t }) {
  const r = f.useId();
  return /* @__PURE__ */ a(nt.Provider, { value: { id: r }, children: /* @__PURE__ */ a("div", { "data-slot": "form-item", className: o("grid gap-2", e), ...t }) });
}
function Ko({ className: e, ...t }) {
  const { error: r, formItemId: n } = me();
  return /* @__PURE__ */ a(
    D,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Uo({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: i } = me();
  return /* @__PURE__ */ a(
    F,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${i}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function qo({ className: e, ...t }) {
  const { formDescriptionId: r } = me();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: r,
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Wo({ className: e, ...t }) {
  const { error: r, formMessageId: n } = me(), i = r ? String(r?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: o("text-destructive text-sm", e),
      ...t,
      children: i
    }
  ) : null;
}
function Jo({ ...e }) {
  return /* @__PURE__ */ a(de.Root, { "data-slot": "hover-card", ...e });
}
function Xo({ ...e }) {
  return /* @__PURE__ */ a(de.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Qo({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(de.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    de.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function V({ className: e, type: t, label: r, error: n, required: i, id: s, ...d }) {
  const u = r || n, c = /* @__PURE__ */ a(
    "input",
    {
      type: t,
      id: s,
      "data-slot": "input",
      "aria-invalid": !!n,
      className: o(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...d
    }
  );
  return u ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ l(D, { htmlFor: s, children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    c,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : c;
}
function ot({ className: e, label: t, error: r, required: n, id: i, ...s }) {
  const d = t || r, u = /* @__PURE__ */ a(
    "textarea",
    {
      id: i,
      "data-slot": "textarea",
      "aria-invalid": !!r,
      className: o(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        r ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...s
    }
  );
  return d ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ l(D, { htmlFor: i, children: [
      t,
      n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    u,
    r && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : u;
}
function Yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: o(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        e
      ),
      ...t
    }
  );
}
const ja = A(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function Zo({
  className: e,
  align: t = "inline-start",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: o(ja({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const $a = A("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function ei({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    T,
    {
      type: t,
      "data-size": n,
      variant: r,
      className: o($a({ size: n }), e),
      ...i
    }
  );
}
function ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: o(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function ai({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    V,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ot,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function ni({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Xt,
    {
      "data-slot": "input-otp",
      containerClassName: o("flex items-center gap-2 has-disabled:opacity-50", t),
      className: o("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function oi({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-group", className: o("flex items-center", e), ...t });
}
function ii({
  index: e,
  className: t,
  ...r
}) {
  const n = f.useContext(Qt), { char: i, hasFakeCaret: s, isActive: d } = n?.slots[e] ?? {};
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": d,
      className: o(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...r,
      children: [
        i,
        s && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function si({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Ct, {}) });
}
function di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: o("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    q,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: o("my-0", e),
      ...t
    }
  );
}
const Ha = A(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50"
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ci({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: n = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    n ? F : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(Ha({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
const Ga = A(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ui({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: o(Ga({ variant: t, className: e })),
      ...r
    }
  );
}
function mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: o("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function fi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: o("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: o(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function pi({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: o("flex items-center gap-2", e), ...t });
}
function bi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function vi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: o(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function xi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    I.Root,
    {
      "data-slot": "menubar",
      className: o(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function Ni({ ...e }) {
  return /* @__PURE__ */ a(I.Menu, { "data-slot": "menubar-menu", ...e });
}
function yi({ ...e }) {
  return /* @__PURE__ */ a(I.Group, { "data-slot": "menubar-group", ...e });
}
function Oa({ ...e }) {
  return /* @__PURE__ */ a(I.Portal, { "data-slot": "menubar-portal", ...e });
}
function ki({ ...e }) {
  return /* @__PURE__ */ a(I.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function Ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function Si({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Oa, { children: /* @__PURE__ */ a(
    I.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: n,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function zi({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    I.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function _i({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    I.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(I.ItemIndicator, { children: /* @__PURE__ */ a(ee, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Mi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    I.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(I.ItemIndicator, { children: /* @__PURE__ */ a(le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ii({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    I.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Pi({ ...e }) {
  return /* @__PURE__ */ a(I.Sub, { "data-slot": "menubar-sub", ...e });
}
function Ri({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ l(
    I.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ne, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Ei({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Ai({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    B.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": r,
      className: o(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        r && /* @__PURE__ */ a(Va, {})
      ]
    }
  );
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.List,
    {
      "data-slot": "navigation-menu-list",
      className: o("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function Li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const Ba = A(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function ji({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    B.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(Ba(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          Z,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function $i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function Va({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: o("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ a(
    B.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: o(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function Hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Link,
    {
      "data-slot": "navigation-menu-link",
      className: o(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Gi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: o(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function Oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: o("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Bi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Vi({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function it({ className: e, isActive: t, size: r = "icon", ...n }) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: o(
        Y({
          variant: t ? "outline" : "ghost",
          size: r
        }),
        e
      ),
      ...n
    }
  );
}
function Ki({ className: e, ...t }) {
  return /* @__PURE__ */ l(
    it,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(je, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function Ui({ className: e, ...t }) {
  return /* @__PURE__ */ l(
    it,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a(ne, {})
      ]
    }
  );
}
function qi({ className: e, ...t }) {
  return /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(St, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Wi({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ie.Root,
    {
      "data-slot": "progress",
      className: o("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...r,
      children: /* @__PURE__ */ a(
        Ie.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    he.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function Ji({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    he.Item,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        he.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(le, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Xi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Yt,
    {
      "data-slot": "resizable-panel-group",
      className: o("flex h-full w-full data-[orientation=vertical]:flex-col", e),
      ...t
    }
  );
}
function Qi({ ...e }) {
  return /* @__PURE__ */ a(Zt, { "data-slot": "resizable-panel", ...e });
}
function Yi({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    ea,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(zt, { className: "size-2.5" }) })
    }
  );
}
function Zi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    te.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...r,
      children: [
        /* @__PURE__ */ a(
          te.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Ua, {}),
        /* @__PURE__ */ a(te.Corner, {})
      ]
    }
  );
}
function Ua({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    te.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: o(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        te.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function qa({ ...e }) {
  return /* @__PURE__ */ a(R.Root, { "data-slot": "select", ...e });
}
function es({ ...e }) {
  return /* @__PURE__ */ a(R.Group, { "data-slot": "select-group", ...e });
}
function Wa({ ...e }) {
  return /* @__PURE__ */ a(R.Value, { "data-slot": "select-value", ...e });
}
function Ja({
  className: e,
  size: t = "default",
  children: r,
  label: n,
  error: i,
  required: s,
  id: d,
  ...u
}) {
  const c = n || i, m = /* @__PURE__ */ l(
    R.Trigger,
    {
      id: d,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!i,
      className: o(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...u,
      children: [
        r,
        /* @__PURE__ */ a(R.Icon, { asChild: !0, children: /* @__PURE__ */ a(Z, { className: "size-4 opacity-50" }) })
      ]
    }
  );
  return c ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ l(D, { htmlFor: d, children: [
      n,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    m,
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: i })
  ] }) : m;
}
function Xa({
  className: e,
  children: t,
  position: r = "item-aligned",
  align: n = "center",
  ...i
}) {
  return /* @__PURE__ */ a(R.Portal, { children: /* @__PURE__ */ l(
    R.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: n,
      ...i,
      children: [
        /* @__PURE__ */ a(Ya, {}),
        /* @__PURE__ */ a(
          R.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(Za, {})
      ]
    }
  ) });
}
function ts({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    R.Label,
    {
      "data-slot": "select-label",
      className: o("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function Qa({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ l(
    R.Item,
    {
      "data-slot": "select-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(R.ItemIndicator, { children: /* @__PURE__ */ a(ee, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(R.ItemText, { children: t })
      ]
    }
  );
}
function as({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Separator,
    {
      "data-slot": "select-separator",
      className: o("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ya({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(_t, { className: "size-4" })
    }
  );
}
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(Z, { className: "size-4" })
    }
  );
}
function er({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "sheet", ...e });
}
function rs({ ...e }) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function ns({ ...e }) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "sheet-close", ...e });
}
function tr({ ...e }) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "sheet-portal", ...e });
}
function ar({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function rr({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ l(tr, { children: [
    /* @__PURE__ */ a(ar, {}),
    /* @__PURE__ */ l(
      C.Content,
      {
        "data-slot": "sheet-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ l(C.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a($e, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function nr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function os({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function or({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "sheet-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ir({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const pe = 768;
function sr() {
  const [e, t] = f.useState(void 0);
  return f.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${pe - 1}px)`), n = () => {
      t(window.innerWidth < pe);
    };
    return r.addEventListener("change", n), t(window.innerWidth < pe), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function E({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function st({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    Q.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function dr({ ...e }) {
  return /* @__PURE__ */ a(st, { children: /* @__PURE__ */ a(Q.Root, { "data-slot": "tooltip", ...e }) });
}
function lr({ ...e }) {
  return /* @__PURE__ */ a(Q.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function cr({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(Q.Portal, { children: /* @__PURE__ */ l(
    Q.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: o(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(Q.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const ur = "sidebar_state", mr = 3600 * 24 * 7, fr = "16rem", gr = "18rem", pr = "3rem", br = "b", dt = f.createContext(null);
function fe() {
  const e = f.useContext(dt);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function is({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: i,
  children: s,
  ...d
}) {
  const u = sr(), [c, m] = f.useState(!1), [g, p] = f.useState(e), b = t ?? g, w = f.useCallback(
    (x) => {
      const v = typeof x == "function" ? x(b) : x;
      r ? r(v) : p(v), document.cookie = `${ur}=${v}; path=/; max-age=${mr}`;
    },
    [r, b]
  ), N = f.useCallback(() => u ? m((x) => !x) : w((x) => !x), [u, w, m]);
  f.useEffect(() => {
    const x = (v) => {
      v.key === br && (v.metaKey || v.ctrlKey) && (v.preventDefault(), N());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [N]);
  const y = b ? "expanded" : "collapsed", h = f.useMemo(
    () => ({
      state: y,
      open: b,
      setOpen: w,
      isMobile: u,
      openMobile: c,
      setOpenMobile: m,
      toggleSidebar: N
    }),
    [y, b, w, u, c, m, N]
  );
  return /* @__PURE__ */ a(dt.Provider, { value: h, children: /* @__PURE__ */ a(st, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": fr,
        "--sidebar-width-icon": pr,
        ...i
      },
      className: o(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...d,
      children: s
    }
  ) }) });
}
function ss({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: i,
  ...s
}) {
  const { isMobile: d, state: u, openMobile: c, setOpenMobile: m } = fe();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...s,
      children: i
    }
  ) : d ? /* @__PURE__ */ a(er, { open: c, onOpenChange: m, ...s, children: /* @__PURE__ */ l(
    rr,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": gr
      },
      side: e,
      children: [
        /* @__PURE__ */ l(nr, { className: "sr-only", children: [
          /* @__PURE__ */ a(or, { children: "Sidebar" }),
          /* @__PURE__ */ a(ir, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ l(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: o(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...s,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: i
              }
            )
          }
        )
      ]
    }
  );
}
function ds({ className: e, onClick: t, ...r }) {
  const { toggleSidebar: n } = fe();
  return /* @__PURE__ */ l(
    T,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7", e),
      onClick: (i) => {
        t?.(i), n();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(Mt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function ls({ className: e, ...t }) {
  const { toggleSidebar: r } = fe();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: o(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      ...t
    }
  );
}
function cs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function us({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    V,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ms({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function gs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    q,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function ps({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: o(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function bs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: o("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function hs({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? F : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: o(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function vs({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? F : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...r
    }
  );
}
function xs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: o("w-full text-sm", e),
      ...t
    }
  );
}
function ws({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: o("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function Ns({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: o("group/menu-item relative", e),
      ...t
    }
  );
}
const hr = A(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ys({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: i,
  className: s,
  ...d
}) {
  const u = e ? F : "button", { isMobile: c, state: m } = fe(), g = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(hr({ variant: r, size: n }), s),
      ...d
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ l(dr, { children: [
    /* @__PURE__ */ a(lr, { asChild: !0, children: g }),
    /* @__PURE__ */ a(
      cr,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || c,
        ...i
      }
    )
  ] })) : g;
}
function ks({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? F : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        r && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...n
    }
  );
}
function Cs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: o(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function Ss({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const [n] = f.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(E, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          E,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
}
function zs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: o(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function _s({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: o("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function Ms({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? F : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...i
    }
  );
}
function Is({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: i = 100,
  ...s
}) {
  const d = f.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, i],
    [r, t, n, i]
  );
  return /* @__PURE__ */ l(
    ie.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: n,
      max: i,
      className: o(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(
          ie.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              ie.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: d.length }, (u, c) => /* @__PURE__ */ a(
          ie.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          c
        ))
      ]
    }
  );
}
const Ts = ({ ...e }) => {
  const { theme: t = "system" } = ta();
  return /* @__PURE__ */ a(
    aa,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(Pt, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(Dt, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(Tt, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(It, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(He, { className: "size-5 animate-spin text-foreground" })
      },
      toastOptions: {
        classNames: {
          toast: "!bg-background !text-foreground !border-border !shadow-lg",
          success: "!bg-green-50 !text-green-950 !border-green-700 !border-2 dark:!bg-green-950 dark:!text-green-50 dark:!border-green-600",
          error: "!bg-red-50 !text-red-950 !border-red-700 !border-2 dark:!bg-red-950 dark:!text-red-50 dark:!border-red-600",
          warning: "!bg-amber-50 !text-amber-950 !border-amber-700 !border-2 dark:!bg-amber-950 dark:!text-amber-50 dark:!border-amber-600",
          info: "!bg-blue-50 !text-blue-950 !border-blue-700 !border-2 dark:!bg-blue-950 dark:!text-blue-50 dark:!border-blue-600",
          description: "!text-inherit !opacity-90"
        }
      },
      ...e
    }
  );
};
function vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    He,
    {
      role: "status",
      "aria-label": "Loading",
      className: o("size-4 animate-spin", e),
      ...t
    }
  );
}
function xr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Te.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        Te.Thumb,
        {
          "data-slot": "switch-thumb",
          className: o(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function wr({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: o("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function Nr({ className: e, ...t }) {
  return /* @__PURE__ */ a("thead", { "data-slot": "table-header", className: o("[&_tr]:border-b", e), ...t });
}
function yr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Ds({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: o("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function be({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: o(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function kr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: o(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Pe({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: o(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Ps({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Rs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ce.Root,
    {
      "data-slot": "tabs",
      className: o("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Es({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ce.List,
    {
      "data-slot": "tabs-list",
      className: o(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function As({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ce.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: o(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Fs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ce.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const lt = A(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ls({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    ra.Root,
    {
      "data-slot": "toggle",
      className: o(lt({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const ct = f.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function js({
  className: e,
  variant: t,
  size: r,
  spacing: n = 0,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ a(
    Be.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      "data-spacing": n,
      style: { "--gap": n },
      className: o(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...s,
      children: /* @__PURE__ */ a(ct.Provider, { value: { variant: t, size: r, spacing: n }, children: i })
    }
  );
}
function $s({
  className: e,
  children: t,
  variant: r,
  size: n,
  ...i
}) {
  const s = f.useContext(ct);
  return /* @__PURE__ */ a(
    Be.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || r,
      "data-size": s.size || n,
      "data-spacing": s.spacing,
      className: o(
        lt({
          variant: s.variant || r,
          size: s.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...i,
      children: t
    }
  );
}
const Re = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function Hs(e, t = "en-US", r = "USD") {
  return new Intl.NumberFormat(t, {
    style: "currency",
    currency: r
  }).format(e);
}
function Gs(e, t = "short") {
  const r = typeof e == "string" || typeof e == "number" ? new Date(e) : e;
  if (isNaN(r.getTime()))
    return "";
  if (t in Re) {
    const n = Re[t];
    return Ee(r, n);
  }
  return Ee(r, t);
}
function Ee(e, t) {
  const r = e.getDate().toString().padStart(2, "0"), n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getFullYear(), s = e.getHours().toString().padStart(2, "0"), d = e.getMinutes().toString().padStart(2, "0"), u = e.getSeconds().toString().padStart(2, "0"), c = [
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
  return t.replace(/dd/g, r).replace(/MM/g, n).replace(/yyyy/g, i.toString()).replace(/MMMM/g, c[e.getMonth()]).replace(/MMM/g, c[e.getMonth()].substring(0, 3)).replace(/HH/g, s).replace(/mm/g, d).replace(/ss/g, u);
}
function Os(e) {
  const t = e.replace(/\D/g, "");
  return t.length === 10 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : t.length === 11 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : e;
}
function Bs(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, n) * 100) / 100 + " " + r[n];
}
function Vs(e, t, r = "...") {
  return e.length <= t ? e : e.slice(0, t) + r;
}
const Ks = {
  /**
   * Show a success toast
   */
  success: (e, t) => H.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => H.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => H.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => H.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => H(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => H.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, r) => H.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: r?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    H.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    H.dismiss();
  }
}, ge = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function Us(e) {
  return ge.email.test(e);
}
function qs(e) {
  return ge.phone.test(e);
}
function Ws(e) {
  return ge.vietnamesePhone.test(e);
}
function Js(e) {
  return ge.url.test(e);
}
function X(e) {
  const [t, r] = f.useState(() => typeof window > "u" ? !1 : window.matchMedia(e).matches);
  return f.useEffect(() => {
    if (typeof window > "u") return;
    const n = window.matchMedia(e), i = (s) => {
      r(s.matches);
    };
    return n.addEventListener ? (n.addEventListener("change", i), () => n.removeEventListener("change", i)) : (n.addListener(i), () => n.removeListener(i));
  }, [e]), t;
}
const U = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function Xs() {
  const e = X(`(min-width: ${U["2xl"]}px)`), t = X(`(min-width: ${U.xl}px)`), r = X(`(min-width: ${U.lg}px)`), n = X(`(min-width: ${U.md}px)`), i = X(`(min-width: ${U.sm}px)`);
  return e ? "2xl" : t ? "xl" : r ? "lg" : n ? "md" : i ? "sm" : null;
}
function Qs() {
  const [e, t] = f.useState(() => typeof window > "u" ? { width: 0, height: 0 } : {
    width: window.innerWidth,
    height: window.innerHeight
  });
  return f.useEffect(() => {
    if (typeof window > "u") return;
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
function Ys() {
  return X(`(min-width: ${U.md}px) and (max-width: ${U.lg - 1}px)`);
}
function Zs(e, t) {
  const [r, n] = f.useState(e);
  return f.useEffect(() => {
    const i = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [e, t]), r;
}
function ed(e, t) {
  const r = vt(void 0), n = xt(
    (...i) => {
      r.current && clearTimeout(r.current), r.current = setTimeout(() => {
        e(...i);
      }, t);
    },
    [e, t]
  );
  return f.useEffect(() => () => {
    r.current && clearTimeout(r.current);
  }, []), n;
}
function td(e, t) {
  const [r, n] = f.useState(e), i = f.useRef(void 0);
  return f.useEffect(() => {
    i.current === void 0 && (i.current = Date.now());
  }, []), f.useEffect(() => {
    if (i.current === void 0)
      return;
    const s = setTimeout(
      () => {
        const d = Date.now();
        i.current !== void 0 && d - i.current >= t && (n(e), i.current = d);
      },
      i.current !== void 0 ? t - (Date.now() - i.current) : t
    );
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}
function ad(e, t) {
  f.useEffect(() => {
    const r = (n) => {
      const i = e?.current;
      !i || i.contains(n.target) || t(n);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, t]);
}
function rd(e, t) {
  const [r, n] = f.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const d = window.localStorage.getItem(e);
      return d ? JSON.parse(d) : t;
    } catch (d) {
      return console.error(`Error reading localStorage key "${e}":`, d), t;
    }
  }), i = f.useCallback(
    (d) => {
      try {
        const u = d instanceof Function ? d(r) : d;
        n(u), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(u));
      } catch (u) {
        console.error(`Error setting localStorage key "${e}":`, u);
      }
    },
    [e, r]
  ), s = f.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.localStorage.removeItem(e);
    } catch (d) {
      console.error(`Error removing localStorage key "${e}":`, d);
    }
  }, [e, t]);
  return [r, i, s];
}
function nd(e, t) {
  const [r, n] = f.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const d = window.sessionStorage.getItem(e);
      return d ? JSON.parse(d) : t;
    } catch (d) {
      return console.error(`Error reading sessionStorage key "${e}":`, d), t;
    }
  }), i = f.useCallback(
    (d) => {
      try {
        const u = d instanceof Function ? d(r) : d;
        n(u), typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(u));
      } catch (u) {
        console.error(`Error setting sessionStorage key "${e}":`, u);
      }
    },
    [e, r]
  ), s = f.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.sessionStorage.removeItem(e);
    } catch (d) {
      console.error(`Error removing sessionStorage key "${e}":`, d);
    }
  }, [e, t]);
  return [r, i, s];
}
function od() {
  const [e, t] = f.useState(!1), [r, n] = f.useState(null);
  return { copy: f.useCallback(async (s) => {
    if (!navigator?.clipboard)
      return n(new Error("Clipboard API not available")), !1;
    try {
      return await navigator.clipboard.writeText(s), t(!0), n(null), setTimeout(() => {
        t(!1);
      }, 2e3), !0;
    } catch (d) {
      return n(d instanceof Error ? d : new Error("Failed to copy")), t(!1), !1;
    }
  }, []), copied: e, error: r };
}
function id(e = !1) {
  const [t, r] = f.useState(e), n = f.useCallback(() => {
    r((i) => !i);
  }, []);
  return [t, n, r];
}
function sd(e) {
  const [t, r] = f.useState(void 0), n = f.useRef(e);
  return f.useEffect(() => {
    n.current !== e && (r(n.current), n.current = e);
  }, [e]), t;
}
function dd(e, t) {
  return f.useCallback(e, t);
}
function ld(e, t = !0) {
  f.useEffect(() => {
    if (!t || !e.current) return;
    const r = e.current, n = r.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), i = n[0], s = n[n.length - 1], d = (u) => {
      u.key === "Tab" && (u.shiftKey ? document.activeElement === i && (u.preventDefault(), s?.focus()) : document.activeElement === s && (u.preventDefault(), i?.focus()));
    };
    return r.addEventListener("keydown", d), i?.focus(), () => {
      r.removeEventListener("keydown", d);
    };
  }, [t, e]);
}
function cd(e, t = {}) {
  const { direction: r = "both", loop: n = !1, onNavigate: i } = t, [s, d] = f.useState(0), u = f.useCallback(
    (c) => {
      let m = s;
      (r === "horizontal" || r === "both") && (c.key === "ArrowLeft" ? (c.preventDefault(), m = s > 0 ? s - 1 : n ? e - 1 : s) : c.key === "ArrowRight" && (c.preventDefault(), m = s < e - 1 ? s + 1 : n ? 0 : s)), (r === "vertical" || r === "both") && (c.key === "ArrowUp" ? (c.preventDefault(), m = s > 0 ? s - 1 : n ? e - 1 : s) : c.key === "ArrowDown" && (c.preventDefault(), m = s < e - 1 ? s + 1 : n ? 0 : s)), m !== s && (d(m), i?.(m));
    },
    [s, e, r, n, i]
  );
  return { currentIndex: s, setCurrentIndex: d, handleKeyDown: u };
}
function ud(e = {}) {
  const { label: t, labelledBy: r, describedBy: n } = e;
  return f.useMemo(
    () => ({
      "aria-label": t,
      "aria-labelledby": r,
      "aria-describedby": n
    }),
    [t, r, n]
  );
}
function md({
  control: e,
  name: t,
  label: r,
  required: n,
  callback: i = () => {
  },
  className: s,
  ...d
}) {
  const u = L({ control: e, name: t }), c = $(u.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: m }) => /* @__PURE__ */ a(
        _a,
        {
          ...d,
          value: m.value,
          onChange: (g, p) => {
            m.onChange(g), i(g, p);
          },
          label: r,
          error: c,
          required: n,
          className: o("w-full", s)
        }
      )
    }
  );
}
function fd({
  control: e,
  name: t,
  label: r,
  placeholder: n = "Pick a date",
  required: i,
  error: s,
  disabled: d,
  disabledPast: u = !1,
  disabledFuture: c = !1,
  onDisabled: m,
  className: g,
  callback: p = () => {
  },
  ...b
}) {
  const [w, N] = Fe(!1), y = (h) => {
    if (d) return !0;
    const x = /* @__PURE__ */ new Date();
    x.setHours(0, 0, 0, 0);
    const v = new Date(h);
    return v.setHours(0, 0, 0, 0), u && v < x || c && v > x ? !0 : m ? m(h) : !1;
  };
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: h, fieldState: { error: x } }) => {
        const v = s || x?.message;
        return /* @__PURE__ */ l("div", { className: o("space-y-1.5 w-full", g), children: [
          r && /* @__PURE__ */ l(D, { className: "text-foreground leading-5 block", children: [
            r,
            " ",
            i && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ l(ke, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ a(Ce, { asChild: !0, children: /* @__PURE__ */ l(
              T,
              {
                variant: "outline",
                disabled: d,
                className: o(
                  "w-full justify-start text-left font-normal",
                  !h.value && "text-muted-foreground",
                  v && "border-destructive"
                ),
                children: [
                  /* @__PURE__ */ a(Ge, { className: "mr-2 h-4 w-4" }),
                  h.value ? se(h.value, "PPP") : /* @__PURE__ */ a("span", { children: n })
                ]
              }
            ) }),
            /* @__PURE__ */ a(Se, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ a(
              qe,
              {
                mode: "single",
                selected: h.value,
                onSelect: (k) => {
                  h.onChange(k), p(k), N(!1);
                },
                disabled: y,
                initialFocus: !0,
                ...b
              }
            ) })
          ] }),
          v && /* @__PURE__ */ a("p", { className: "text-xs text-destructive mt-1.5", children: v })
        ] });
      }
    }
  );
}
function gd({
  control: e,
  name: t,
  label: r,
  placeholder: n = { from: "From date", to: "To date" },
  required: i,
  error: s,
  disabled: d,
  disabledPast: u = !1,
  disabledFuture: c = !1,
  onDisabled: m,
  className: g,
  callback: p = () => {
  },
  ...b
}) {
  const [w, N] = Fe(!1), y = (h) => {
    if (d) return !0;
    const x = /* @__PURE__ */ new Date();
    x.setHours(0, 0, 0, 0);
    const v = new Date(h);
    return v.setHours(0, 0, 0, 0), u && v < x || c && v > x ? !0 : m ? m(h) : !1;
  };
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: h, fieldState: { error: x } }) => {
        const v = s || x?.message, k = h.value;
        return /* @__PURE__ */ l("div", { className: o("space-y-1.5 w-full", g), children: [
          r && /* @__PURE__ */ l(D, { className: "text-foreground leading-5 block", children: [
            r,
            " ",
            i && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive", children: "*" })
          ] }),
          /* @__PURE__ */ l(ke, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ a(Ce, { asChild: !0, children: /* @__PURE__ */ l(
              T,
              {
                variant: "outline",
                disabled: d,
                className: o(
                  "w-full justify-start text-left font-normal",
                  !k?.from && "text-muted-foreground",
                  v && "border-destructive"
                ),
                children: [
                  /* @__PURE__ */ a(Ge, { className: "mr-2 h-4 w-4" }),
                  k?.from ? k.to ? /* @__PURE__ */ l(Ae, { children: [
                    se(k.from, "LLL dd, y"),
                    " - ",
                    se(k.to, "LLL dd, y")
                  ] }) : se(k.from, "LLL dd, y") : /* @__PURE__ */ l("span", { children: [
                    n.from,
                    " - ",
                    n.to
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ a(Se, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ a(
              qe,
              {
                initialFocus: !0,
                mode: "range",
                defaultMonth: k?.from,
                selected: k,
                onSelect: (K) => {
                  h.onChange(K), p(K);
                },
                numberOfMonths: 2,
                disabled: y,
                ...b
              }
            ) })
          ] }),
          v && /* @__PURE__ */ a("p", { className: "text-xs text-destructive mt-1.5", children: v })
        ] });
      }
    }
  );
}
const Cr = (e, t) => t === "text" || !e ? e : t === "integer" || t === "currency" ? e.replace(/\D/g, "") : t === "decimal" ? e.replace(/[^\d.,]/g, "").replace(/\./g, ",") : e;
function pd({
  control: e,
  name: t,
  label: r,
  format: n = "text",
  required: i,
  wrapperClassName: s,
  callback: d = () => {
  },
  ...u
}) {
  const c = L({ control: e, name: t }), m = $(c.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: g }) => /* @__PURE__ */ a("div", { className: o("w-full", s), children: /* @__PURE__ */ a(
        V,
        {
          ...u,
          ...g,
          type: "text",
          label: r,
          error: m,
          required: i,
          value: g.value || "",
          onChange: (p) => {
            const b = Cr(p.target.value, n);
            g.onChange(b), d(b);
          }
        }
      ) })
    }
  );
}
function bd({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: i,
  className: s,
  wrapperClassName: d,
  required: u = !1,
  ...c
}) {
  const m = L({ control: e, name: r }), g = $(m.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", d), children: /* @__PURE__ */ a(
    V,
    {
      ...c,
      ...t(r),
      label: n,
      error: g,
      required: u,
      className: s,
      placeholder: i
    }
  ) });
}
function hd({
  control: e,
  name: t,
  label: r,
  required: n,
  children: i,
  className: s,
  callback: d = () => {
  },
  onBeforeChange: u,
  ...c
}) {
  const m = (g, p) => {
    const b = () => {
      p.onChange(g), d(g);
    };
    u ? u(g, p.value, b) : b();
  };
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: g, fieldState: { error: p } }) => /* @__PURE__ */ l("div", { className: "space-y-1.5 w-full", children: [
        r && /* @__PURE__ */ l(
          D,
          {
            htmlFor: c.id || t,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              r,
              n && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          Ka,
          {
            ...c,
            id: c.id || t,
            className: o("flex flex-row gap-4", s),
            onValueChange: (b) => {
              m(b, g);
            },
            value: g.value?.toString(),
            children: i
          }
        ),
        p && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: p.message })
      ] })
    }
  );
}
function vd({
  control: e,
  name: t,
  label: r,
  required: n,
  callback: i = () => {
  },
  onBeforeChange: s,
  className: d,
  ...u
}) {
  const c = (m, g) => {
    const p = () => {
      g.onChange(m), i(m);
    };
    s ? s(m, g.value, p) : p();
  };
  return /* @__PURE__ */ a(
    j,
    {
      control: e,
      name: t,
      render: ({ field: m, fieldState: { error: g } }) => /* @__PURE__ */ l("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ l("div", { className: o("flex items-center gap-3", d), children: [
          r && /* @__PURE__ */ l(
            D,
            {
              htmlFor: u.id || t,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                r,
                n && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            xr,
            {
              ...u,
              id: u.id || t,
              checked: !!m.value,
              onCheckedChange: (p) => {
                c(p, m);
              }
            }
          )
        ] }),
        g && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: g.message })
      ] })
    }
  );
}
function xd({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: i,
  className: s,
  wrapperClassName: d,
  required: u = !1,
  showMaxLength: c = !0,
  maxLength: m = 512,
  rows: g = 5,
  ...p
}) {
  const b = L({ control: e, name: r }), w = $(b.errors, `${r}.message`);
  return /* @__PURE__ */ l("div", { className: o("relative w-full", d), children: [
    /* @__PURE__ */ a(
      ot,
      {
        ...p,
        ...t(r),
        label: n,
        error: w,
        required: u,
        className: s,
        placeholder: i,
        maxLength: m,
        rows: g
      }
    ),
    c && /* @__PURE__ */ a(Sr, { control: e, name: r, maxLength: m })
  ] });
}
const Sr = ({
  control: e,
  name: t,
  maxLength: r
}) => {
  const { field: n } = Jt({ control: e, name: t });
  return /* @__PURE__ */ l(ye, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    n.value?.length || 0,
    "/",
    r
  ] });
}, wd = ({
  name: e,
  control: t
}) => {
  const r = L({
    control: t,
    name: e
  }), n = $(r.errors, `${e}.message`);
  return /* @__PURE__ */ a(
    "p",
    {
      className: o(
        "text-xs text-destructive hidden",
        la(n) && "input-error block mt-1.5"
      ),
      children: n
    }
  );
};
function Nd({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: i,
  className: s,
  wrapperClassName: d,
  required: u = !1,
  min: c,
  max: m,
  step: g,
  ...p
}) {
  const b = L({ control: e, name: r }), w = $(b.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", d), children: /* @__PURE__ */ a(
    V,
    {
      ...p,
      ...t(r, { valueAsNumber: !0 }),
      type: "number",
      label: n,
      error: w,
      required: u,
      className: s,
      placeholder: i,
      min: c,
      max: m,
      step: g
    }
  ) });
}
function yd({
  control: e,
  name: t,
  options: r,
  label: n,
  error: i,
  required: s = !1,
  wrapperClassName: d,
  orientation: u = "vertical"
}) {
  const c = L({ control: e, name: t }), m = i || $(c.errors, `${t}.message`);
  return /* @__PURE__ */ l("div", { className: o("w-full", d), children: [
    n && /* @__PURE__ */ l(D, { htmlFor: t, className: "mb-2 block", children: [
      n,
      s && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      j,
      {
        control: e,
        name: t,
        render: ({ field: g }) => /* @__PURE__ */ a("div", { className: o("flex gap-4", u === "horizontal" ? "flex-row" : "flex-col"), children: r.map((p) => /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a(
            va,
            {
              id: `${t}-${p.value}`,
              checked: Array.isArray(g.value) && g.value.includes(p.value),
              onCheckedChange: (b) => {
                const w = Array.isArray(g.value) ? g.value : [];
                b ? g.onChange([...w, p.value]) : g.onChange(w.filter((N) => N !== p.value));
              },
              disabled: p.disabled
            }
          ),
          /* @__PURE__ */ a(D, { htmlFor: `${t}-${p.value}`, className: "font-normal cursor-pointer", children: p.label })
        ] }, p.value)) })
      }
    ),
    m && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: m })
  ] });
}
function kd({
  control: e,
  name: t,
  options: r,
  label: n,
  error: i,
  required: s = !1,
  placeholder: d = "Select options...",
  wrapperClassName: u
}) {
  const c = L({ control: e, name: t }), m = i || $(c.errors, `${t}.message`);
  return /* @__PURE__ */ l("div", { className: o("w-full", u), children: [
    n && /* @__PURE__ */ l(D, { htmlFor: t, className: "mb-2 block", children: [
      n,
      s && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      j,
      {
        control: e,
        name: t,
        render: ({ field: g }) => {
          const p = Array.isArray(g.value) ? g.value : [];
          return /* @__PURE__ */ l("div", { className: "space-y-2", children: [
            /* @__PURE__ */ l(
              qa,
              {
                value: "",
                onValueChange: (b) => {
                  p.includes(b) || g.onChange([...p, b]);
                },
                children: [
                  /* @__PURE__ */ a(Ja, { className: o(m && "border-destructive"), children: /* @__PURE__ */ a(Wa, { placeholder: d }) }),
                  /* @__PURE__ */ a(Xa, { children: r.map((b) => /* @__PURE__ */ a(
                    Qa,
                    {
                      value: b.value,
                      disabled: b.disabled || p.includes(b.value),
                      children: b.label
                    },
                    b.value
                  )) })
                ]
              }
            ),
            p.length > 0 && /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-2", children: p.map((b) => {
              const w = r.find((N) => N.value === b);
              return /* @__PURE__ */ l(ye, { variant: "secondary", className: "gap-1", children: [
                w?.label || b,
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      g.onChange(p.filter((N) => N !== b));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ a(Rt, { className: "h-3 w-3" })
                  }
                )
              ] }, b);
            }) })
          ] });
        }
      }
    ),
    m && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: m })
  ] });
}
function Cd({
  control: e,
  name: t,
  label: r,
  error: n,
  required: i = !1,
  accept: s,
  multiple: d = !1,
  wrapperClassName: u,
  className: c
}) {
  const m = L({ control: e, name: t }), g = n || $(m.errors, `${t}.message`);
  return /* @__PURE__ */ l("div", { className: o("w-full", u), children: [
    r && /* @__PURE__ */ l(D, { htmlFor: t, className: "mb-2 block", children: [
      r,
      i && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      j,
      {
        control: e,
        name: t,
        render: ({ field: { onChange: p, value: b, ...w } }) => /* @__PURE__ */ l("div", { className: "space-y-2", children: [
          /* @__PURE__ */ l(
            D,
            {
              htmlFor: t,
              className: o(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                g && "border-destructive",
                c
              ),
              children: [
                /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ a(Et, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ l("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ a("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: [
                    s || "Any file",
                    d && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ a(
                  V,
                  {
                    ...w,
                    id: t,
                    type: "file",
                    accept: s,
                    multiple: d,
                    className: "hidden",
                    onChange: (N) => {
                      const y = N.target.files;
                      y && p(d ? Array.from(y) : y[0]);
                    }
                  }
                )
              ]
            }
          ),
          b && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: d ? `${Array.isArray(b) ? b.length : 0} file(s) selected` : typeof b == "string" ? b : b?.name || "File selected" })
        ] })
      }
    ),
    g && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: g })
  ] });
}
function Sd({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: i = "HH:mm",
  className: s,
  wrapperClassName: d,
  required: u = !1,
  ...c
}) {
  const m = L({ control: e, name: r }), g = $(m.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", d), children: /* @__PURE__ */ a(
    V,
    {
      ...c,
      ...t(r),
      type: "time",
      label: n,
      error: g,
      required: u,
      className: s,
      placeholder: i
    }
  ) });
}
function zr({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  confirmText: i = "Confirm",
  cancelText: s = "Cancel",
  onConfirm: d,
  variant: u = "default",
  loading: c = !1
}) {
  const [m, g] = f.useState(!1);
  return /* @__PURE__ */ a(Qe, { open: e, onOpenChange: t, children: /* @__PURE__ */ l(Ye, { children: [
    /* @__PURE__ */ l(Ze, { children: [
      /* @__PURE__ */ a(et, { children: r }),
      n && /* @__PURE__ */ a(tt, { children: n })
    ] }),
    /* @__PURE__ */ l(Na, { children: [
      /* @__PURE__ */ a(
        T,
        {
          variant: "outline",
          onClick: () => t(!1),
          disabled: m || c,
          children: s
        }
      ),
      /* @__PURE__ */ a(T, { variant: u, onClick: async () => {
        g(!0);
        try {
          await d(), t(!1);
        } finally {
          g(!1);
        }
      }, disabled: m || c, children: m || c ? "Loading..." : i })
    ] })
  ] }) });
}
function zd({ className: e, maxWidth: t = "xl", ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": t === "sm",
          "max-w-screen-md": t === "md",
          "max-w-screen-lg": t === "lg",
          "max-w-screen-xl": t === "xl",
          "max-w-screen-2xl": t === "2xl",
          "max-w-full": t === "full"
        },
        e
      ),
      ...r
    }
  );
}
function _d({
  data: e,
  columns: t,
  searchable: r = !1,
  searchPlaceholder: n,
  searchKey: i,
  pagination: s = { pageSize: 10, showPagination: !0 },
  emptyMessage: d,
  className: u,
  enableGlobalFilter: c = !0,
  globalFilterFn: m,
  onRowClick: g,
  rowClassName: p,
  labels: b
}) {
  const {
    previous: w = "Previous",
    next: N = "Next",
    showing: y = "Showing",
    to: h = "to",
    of: x = "of",
    results: v = "results",
    page: k = "Page"
  } = b || {}, [K, ut] = f.useState([]), [mt, ft] = f.useState([]), [gt, pt] = f.useState({}), [ze, _e] = f.useState(""), S = na({
    data: e,
    columns: t,
    getRowId: (z, P) => "id" in z && z.id != null ? String(z.id) : String(P),
    getCoreRowModel: da(),
    getPaginationRowModel: sa(),
    getSortedRowModel: ia(),
    getFilteredRowModel: oa(),
    onSortingChange: ut,
    onColumnFiltersChange: ft,
    onColumnVisibilityChange: pt,
    onGlobalFilterChange: _e,
    globalFilterFn: m || ((z, P, J) => {
      if (!i)
        return Object.values(z.original).some(
          (bt) => String(bt).toLowerCase().includes(String(J).toLowerCase())
        );
      const oe = z.original[i];
      return String(oe).toLowerCase().includes(String(J).toLowerCase());
    }),
    enableGlobalFilter: r && c,
    state: {
      sorting: K,
      columnFilters: mt,
      columnVisibility: gt,
      globalFilter: r ? ze : void 0
    },
    initialState: {
      pagination: {
        pageSize: s.pageSize || 10
      }
    }
  });
  return /* @__PURE__ */ l("div", { className: o("space-y-4", u), children: [
    r && /* @__PURE__ */ a(
      V,
      {
        placeholder: n || "Search...",
        value: ze ?? "",
        onChange: (z) => _e(z.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ a("div", { className: "rounded-md border", children: /* @__PURE__ */ l(wr, { children: [
      /* @__PURE__ */ a(Nr, { children: S.getHeaderGroups().map((z) => /* @__PURE__ */ a(be, { children: z.headers.map((P) => {
        const J = P.column.getCanSort(), oe = P.column.getIsSorted();
        return /* @__PURE__ */ a(kr, { children: P.isPlaceholder ? null : /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: o(
                J && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: J ? P.column.getToggleSortingHandler() : void 0,
              children: De(P.column.columnDef.header, P.getContext())
            }
          ),
          J && /* @__PURE__ */ a(
            T,
            {
              variant: "ghost",
              size: "icon",
              className: "h-4 w-4",
              onClick: P.column.getToggleSortingHandler(),
              children: oe === "asc" ? /* @__PURE__ */ a(At, { className: "h-3 w-3" }) : oe === "desc" ? /* @__PURE__ */ a(Ft, { className: "h-3 w-3" }) : /* @__PURE__ */ a(Lt, { className: "h-3 w-3" })
            }
          )
        ] }) }, P.id);
      }) }, z.id)) }),
      /* @__PURE__ */ a(yr, { children: S.getRowModel().rows?.length ? S.getRowModel().rows.map((z) => /* @__PURE__ */ a(
        be,
        {
          "data-state": z.getIsSelected() && "selected",
          className: o(
            g && "cursor-pointer",
            p && p(z.original)
          ),
          onClick: () => g?.(z.original),
          children: z.getVisibleCells().map((P) => /* @__PURE__ */ a(Pe, { children: De(P.column.columnDef.cell, P.getContext()) }, P.id))
        },
        z.id
      )) : /* @__PURE__ */ a(be, { children: /* @__PURE__ */ a(Pe, { colSpan: S.getAllColumns().length, className: "text-center py-8", children: d || "No data available" }) }) })
    ] }) }),
    s.showPagination && S.getPageCount() > 1 && /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ l("div", { className: "text-sm text-muted-foreground", children: [
        y,
        " ",
        S.getState().pagination.pageIndex * S.getState().pagination.pageSize + 1,
        " ",
        h,
        " ",
        Math.min(
          (S.getState().pagination.pageIndex + 1) * S.getState().pagination.pageSize,
          S.getFilteredRowModel().rows.length
        ),
        " ",
        x,
        " ",
        S.getFilteredRowModel().rows.length,
        " ",
        v
      ] }),
      /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l(
          T,
          {
            variant: "outline",
            size: "sm",
            onClick: () => S.previousPage(),
            disabled: !S.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ a(jt, { className: "h-4 w-4" }),
              w
            ]
          }
        ),
        /* @__PURE__ */ l("div", { className: "text-sm", children: [
          k,
          " ",
          S.getState().pagination.pageIndex + 1,
          " ",
          x,
          " ",
          S.getPageCount()
        ] }),
        /* @__PURE__ */ l(
          T,
          {
            variant: "outline",
            size: "sm",
            onClick: () => S.nextPage(),
            disabled: !S.getCanNextPage(),
            children: [
              N,
              /* @__PURE__ */ a(Le, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Md({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  itemName: i,
  onConfirm: s,
  loading: d = !1
}) {
  return /* @__PURE__ */ a(
    zr,
    {
      open: e,
      onOpenChange: t,
      title: r || "Delete Confirmation",
      description: n || (i ? `Are you sure you want to delete "${i}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: s,
      variant: "destructive",
      loading: d
    }
  );
}
function Id({
  className: e,
  label: t,
  labelPosition: r = "center",
  orientation: n = "horizontal",
  ...i
}) {
  return t ? /* @__PURE__ */ l(
    "div",
    {
      className: o(
        "flex items-center",
        n === "horizontal" ? "w-full" : "h-full flex-col",
        e
      ),
      ...i,
      children: [
        r !== "left" && /* @__PURE__ */ a(
          q,
          {
            orientation: n,
            className: o(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: o(
              "px-3 text-sm text-muted-foreground",
              n === "vertical" && "py-3 px-0"
            ),
            children: t
          }
        ),
        r !== "right" && /* @__PURE__ */ a(
          q,
          {
            orientation: n,
            className: o(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ a(q, { orientation: n, className: e, ...i });
}
function Td({
  className: e,
  icon: t,
  title: r = "No data",
  description: n,
  action: i,
  children: s,
  ...d
}) {
  return /* @__PURE__ */ l(Ta, { className: o(e), ...d, children: [
    /* @__PURE__ */ l(Da, { children: [
      t && /* @__PURE__ */ a(Ra, { variant: "icon", children: t }),
      /* @__PURE__ */ a(Ea, { children: r }),
      n && /* @__PURE__ */ a(Aa, { children: n })
    ] }),
    s && /* @__PURE__ */ a(Fa, { children: s }),
    i && /* @__PURE__ */ a(T, { onClick: i.onClick, variant: "outline", children: i.label })
  ] });
}
class Dd extends f.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, r) {
    this.props.onError?.(t, r);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const t = this.props.fallback;
        return /* @__PURE__ */ a(t, { ...this.state });
      }
      return /* @__PURE__ */ a(
        _r,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function _r({ error: e, resetError: t }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ l(Ve, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ a($t, { className: "h-4 w-4" }),
    /* @__PURE__ */ a(Ke, { children: "Something went wrong" }),
    /* @__PURE__ */ a(Ue, { children: e?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ a(T, { variant: "outline", size: "sm", onClick: t, className: "mt-4", children: "Try again" })
  ] }) });
}
function Pd({ className: e, cols: t = 1, gap: r = 4, responsive: n, ...i }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "grid",
        {
          "grid-cols-1": t === 1,
          "grid-cols-2": t === 2,
          "grid-cols-3": t === 3,
          "grid-cols-4": t === 4,
          "grid-cols-5": t === 5,
          "grid-cols-6": t === 6,
          "grid-cols-12": t === 12
        },
        n?.sm && {
          "sm:grid-cols-1": n.sm === 1,
          "sm:grid-cols-2": n.sm === 2,
          "sm:grid-cols-3": n.sm === 3,
          "sm:grid-cols-4": n.sm === 4,
          "sm:grid-cols-5": n.sm === 5,
          "sm:grid-cols-6": n.sm === 6,
          "sm:grid-cols-12": n.sm === 12
        },
        n?.md && {
          "md:grid-cols-1": n.md === 1,
          "md:grid-cols-2": n.md === 2,
          "md:grid-cols-3": n.md === 3,
          "md:grid-cols-4": n.md === 4,
          "md:grid-cols-5": n.md === 5,
          "md:grid-cols-6": n.md === 6,
          "md:grid-cols-12": n.md === 12
        },
        n?.lg && {
          "lg:grid-cols-1": n.lg === 1,
          "lg:grid-cols-2": n.lg === 2,
          "lg:grid-cols-3": n.lg === 3,
          "lg:grid-cols-4": n.lg === 4,
          "lg:grid-cols-5": n.lg === 5,
          "lg:grid-cols-6": n.lg === 6,
          "lg:grid-cols-12": n.lg === 12
        },
        n?.xl && {
          "xl:grid-cols-1": n.xl === 1,
          "xl:grid-cols-2": n.xl === 2,
          "xl:grid-cols-3": n.xl === 3,
          "xl:grid-cols-4": n.xl === 4,
          "xl:grid-cols-5": n.xl === 5,
          "xl:grid-cols-6": n.xl === 6,
          "xl:grid-cols-12": n.xl === 12
        },
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        e
      ),
      ...i
    }
  );
}
function Rd({
  className: e,
  loading: t = !1,
  loadingText: r,
  children: n,
  disabled: i,
  ...s
}) {
  return /* @__PURE__ */ l(T, { className: o(e), disabled: i || t, ...s, children: [
    t && /* @__PURE__ */ a(vr, { className: "mr-2 h-4 w-4" }),
    t && r || n
  ] });
}
function Ed({ className: e, count: t = 3, variant: r = "default", ...n }) {
  return r === "card" ? /* @__PURE__ */ a("div", { className: o("space-y-4", e), ...n, children: Array.from({ length: t }).map((i, s) => /* @__PURE__ */ l("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ a(E, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ a(E, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ a(E, { className: "h-4 w-2/3" })
  ] }, s)) }) : r === "list" ? /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((i, s) => /* @__PURE__ */ a(E, { className: "h-12 w-full" }, s)) }) : r === "table" ? /* @__PURE__ */ l("div", { className: o("space-y-2", e), ...n, children: [
    /* @__PURE__ */ l("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(E, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(E, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(E, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: t }).map((i, s) => /* @__PURE__ */ l("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(E, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(E, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(E, { className: "h-12 flex-1" })
    ] }, s))
  ] }) : /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((i, s) => /* @__PURE__ */ a(E, { className: "h-4 w-full" }, s)) });
}
function Ad({
  className: e,
  direction: t = "column",
  spacing: r = 2,
  align: n,
  justify: i,
  wrap: s = !1,
  ...d
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        s && "flex-wrap",
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        {
          "items-start": n === "start",
          "items-center": n === "center",
          "items-end": n === "end",
          "items-stretch": n === "stretch"
        },
        {
          "justify-start": i === "start",
          "justify-center": i === "center",
          "justify-end": i === "end",
          "justify-between": i === "between",
          "justify-around": i === "around",
          "justify-evenly": i === "evenly"
        },
        e
      ),
      ...d
    }
  );
}
const Mr = {
  success: {
    label: "Success",
    className: "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-400 dark:bg-green-500/20"
  },
  error: {
    label: "Error",
    className: "bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400 dark:bg-red-500/20"
  },
  warning: {
    label: "Warning",
    className: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 dark:bg-amber-500/20"
  },
  info: {
    label: "Info",
    className: "bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400 dark:bg-blue-500/20"
  },
  pending: {
    label: "Pending",
    className: "bg-gray-500/10 text-gray-700 border-gray-500/20 dark:text-gray-400 dark:bg-gray-500/20"
  },
  default: {
    label: "Default",
    className: ""
  }
};
function Fd({ className: e, status: t, label: r, ...n }) {
  const i = Mr[t];
  return /* @__PURE__ */ a(ye, { variant: "outline", className: o(i.className, e), ...n, children: r || i.label });
}
export {
  qr as Accordion,
  Xr as AccordionContent,
  Wr as AccordionItem,
  Jr as AccordionTrigger,
  Ve as Alert,
  Ue as AlertDescription,
  Qr as AlertDialog,
  nn as AlertDialogAction,
  on as AlertDialogCancel,
  Zr as AlertDialogContent,
  rn as AlertDialogDescription,
  tn as AlertDialogFooter,
  en as AlertDialogHeader,
  ma as AlertDialogOverlay,
  ua as AlertDialogPortal,
  an as AlertDialogTitle,
  Yr as AlertDialogTrigger,
  Ke as AlertTitle,
  sn as AspectRatio,
  dn as Avatar,
  cn as AvatarFallback,
  ln as AvatarImage,
  U as BREAKPOINTS,
  ye as Badge,
  un as Breadcrumb,
  hn as BreadcrumbEllipsis,
  fn as BreadcrumbItem,
  gn as BreadcrumbLink,
  mn as BreadcrumbList,
  pn as BreadcrumbPage,
  bn as BreadcrumbSeparator,
  T as Button,
  vn as ButtonGroup,
  wn as ButtonGroupSeparator,
  xn as ButtonGroupText,
  qe as Calendar,
  pa as CalendarDayButton,
  Nn as Card,
  Sn as CardAction,
  zn as CardContent,
  Cn as CardDescription,
  _n as CardFooter,
  yn as CardHeader,
  kn as CardTitle,
  Mn as Carousel,
  In as CarouselContent,
  Tn as CarouselItem,
  Pn as CarouselNext,
  Dn as CarouselPrevious,
  Rn as ChartContainer,
  Fn as ChartLegend,
  Ln as ChartLegendContent,
  ha as ChartStyle,
  En as ChartTooltip,
  An as ChartTooltipContent,
  va as Checkbox,
  jn as Collapsible,
  Hn as CollapsibleContent,
  $n as CollapsibleTrigger,
  _a as Combobox,
  at as Command,
  Bn as CommandDialog,
  Ca as CommandEmpty,
  Sa as CommandGroup,
  ya as CommandInput,
  za as CommandItem,
  ka as CommandList,
  Vn as CommandSeparator,
  Kn as CommandShortcut,
  zr as ConfirmDialog,
  zd as Container,
  qn as ContextMenu,
  ro as ContextMenuCheckboxItem,
  to as ContextMenuContent,
  Jn as ContextMenuGroup,
  ao as ContextMenuItem,
  oo as ContextMenuLabel,
  Xn as ContextMenuPortal,
  Yn as ContextMenuRadioGroup,
  no as ContextMenuRadioItem,
  io as ContextMenuSeparator,
  so as ContextMenuShortcut,
  Qn as ContextMenuSub,
  eo as ContextMenuSubContent,
  Zn as ContextMenuSubTrigger,
  Wn as ContextMenuTrigger,
  Re as DATE_FORMATS,
  _d as DataTable,
  Md as DeleteConfirmDialog,
  Qe as Dialog,
  On as DialogClose,
  Ye as DialogContent,
  tt as DialogDescription,
  Na as DialogFooter,
  Ze as DialogHeader,
  wa as DialogOverlay,
  xa as DialogPortal,
  et as DialogTitle,
  Gn as DialogTrigger,
  Id as Divider,
  lo as Drawer,
  uo as DrawerClose,
  mo as DrawerContent,
  bo as DrawerDescription,
  go as DrawerFooter,
  fo as DrawerHeader,
  Ia as DrawerOverlay,
  Ma as DrawerPortal,
  po as DrawerTitle,
  co as DrawerTrigger,
  ho as DropdownMenu,
  ko as DropdownMenuCheckboxItem,
  wo as DropdownMenuContent,
  No as DropdownMenuGroup,
  yo as DropdownMenuItem,
  zo as DropdownMenuLabel,
  vo as DropdownMenuPortal,
  Co as DropdownMenuRadioGroup,
  So as DropdownMenuRadioItem,
  _o as DropdownMenuSeparator,
  Mo as DropdownMenuShortcut,
  Io as DropdownMenuSub,
  Do as DropdownMenuSubContent,
  To as DropdownMenuSubTrigger,
  xo as DropdownMenuTrigger,
  Ta as Empty,
  Fa as EmptyContent,
  Aa as EmptyDescription,
  Da as EmptyHeader,
  Ra as EmptyMedia,
  Td as EmptyState,
  Ea as EmptyTitle,
  Dd as ErrorBoundary,
  Ao as Field,
  Fo as FieldContent,
  $o as FieldDescription,
  Go as FieldError,
  Eo as FieldGroup,
  Lo as FieldLabel,
  Ro as FieldLegend,
  Ho as FieldSeparator,
  Po as FieldSet,
  jo as FieldTitle,
  Oo as Form,
  Uo as FormControl,
  qo as FormDescription,
  Bo as FormField,
  Vo as FormItem,
  Ko as FormLabel,
  Wo as FormMessage,
  Pd as Grid,
  Jo as HoverCard,
  Qo as HoverCardContent,
  Xo as HoverCardTrigger,
  V as Input,
  Yo as InputGroup,
  Zo as InputGroupAddon,
  ei as InputGroupButton,
  ai as InputGroupInput,
  ti as InputGroupText,
  ri as InputGroupTextarea,
  ni as InputOTP,
  oi as InputOTPGroup,
  si as InputOTPSeparator,
  ii as InputOTPSlot,
  ci as Item,
  pi as ItemActions,
  mi as ItemContent,
  gi as ItemDescription,
  hi as ItemFooter,
  di as ItemGroup,
  bi as ItemHeader,
  ui as ItemMedia,
  li as ItemSeparator,
  fi as ItemTitle,
  vi as Kbd,
  xi as KbdGroup,
  D as Label,
  Rd as LoadingButton,
  Ed as LoadingState,
  wi as Menubar,
  _i as MenubarCheckboxItem,
  Si as MenubarContent,
  yi as MenubarGroup,
  zi as MenubarItem,
  Ii as MenubarLabel,
  Ni as MenubarMenu,
  Oa as MenubarPortal,
  ki as MenubarRadioGroup,
  Mi as MenubarRadioItem,
  Ti as MenubarSeparator,
  Di as MenubarShortcut,
  Pi as MenubarSub,
  Ei as MenubarSubContent,
  Ri as MenubarSubTrigger,
  Ci as MenubarTrigger,
  Ai as NavigationMenu,
  $i as NavigationMenuContent,
  Gi as NavigationMenuIndicator,
  Li as NavigationMenuItem,
  Hi as NavigationMenuLink,
  Fi as NavigationMenuList,
  ji as NavigationMenuTrigger,
  Va as NavigationMenuViewport,
  Oi as Pagination,
  Bi as PaginationContent,
  qi as PaginationEllipsis,
  Vi as PaginationItem,
  it as PaginationLink,
  Ui as PaginationNext,
  Ki as PaginationPrevious,
  ke as Popover,
  Un as PopoverAnchor,
  Se as PopoverContent,
  Ce as PopoverTrigger,
  Wi as Progress,
  ge as REGEX,
  yd as RHFCheckboxGroup,
  md as RHFCombobox,
  fd as RHFDatePicker,
  gd as RHFDateRangePicker,
  wd as RHFErrorMessage,
  pd as RHFFormattedInput,
  bd as RHFInput,
  kd as RHFMultiSelect,
  Nd as RHFNumberInput,
  hd as RHFRadioGroup,
  vd as RHFSwitch,
  xd as RHFTextarea,
  Sd as RHFTimePicker,
  Cd as RHFUpload,
  Ka as RadioGroup,
  Ji as RadioGroupItem,
  Yi as ResizableHandle,
  Qi as ResizablePanel,
  Xi as ResizablePanelGroup,
  Zi as ScrollArea,
  Ua as ScrollBar,
  qa as Select,
  Xa as SelectContent,
  es as SelectGroup,
  Qa as SelectItem,
  ts as SelectLabel,
  Za as SelectScrollDownButton,
  Ya as SelectScrollUpButton,
  as as SelectSeparator,
  Ja as SelectTrigger,
  Wa as SelectValue,
  q as Separator,
  er as Sheet,
  ns as SheetClose,
  rr as SheetContent,
  ir as SheetDescription,
  os as SheetFooter,
  nr as SheetHeader,
  or as SheetTitle,
  rs as SheetTrigger,
  ss as Sidebar,
  ps as SidebarContent,
  fs as SidebarFooter,
  bs as SidebarGroup,
  vs as SidebarGroupAction,
  xs as SidebarGroupContent,
  hs as SidebarGroupLabel,
  ms as SidebarHeader,
  us as SidebarInput,
  cs as SidebarInset,
  ws as SidebarMenu,
  ks as SidebarMenuAction,
  Cs as SidebarMenuBadge,
  ys as SidebarMenuButton,
  Ns as SidebarMenuItem,
  Ss as SidebarMenuSkeleton,
  zs as SidebarMenuSub,
  Ms as SidebarMenuSubButton,
  _s as SidebarMenuSubItem,
  is as SidebarProvider,
  ls as SidebarRail,
  gs as SidebarSeparator,
  ds as SidebarTrigger,
  E as Skeleton,
  Is as Slider,
  vr as Spinner,
  Ad as Stack,
  Fd as StatusBadge,
  xr as Switch,
  wr as Table,
  yr as TableBody,
  Ps as TableCaption,
  Pe as TableCell,
  Ds as TableFooter,
  kr as TableHead,
  Nr as TableHeader,
  be as TableRow,
  Rs as Tabs,
  Fs as TabsContent,
  Es as TabsList,
  As as TabsTrigger,
  ot as Textarea,
  Ts as Toaster,
  Ls as Toggle,
  js as ToggleGroup,
  $s as ToggleGroupItem,
  dr as Tooltip,
  cr as TooltipContent,
  st as TooltipProvider,
  lr as TooltipTrigger,
  fa as badgeVariants,
  ga as buttonGroupVariants,
  Y as buttonVariants,
  o as cn,
  Hs as formatCurrency,
  Gs as formatDate,
  Bs as formatFileSize,
  Os as formatPhoneNumber,
  $ as get,
  la as hasValue,
  Ba as navigationMenuTriggerStyle,
  Ks as toast,
  lt as toggleVariants,
  Vs as truncate,
  ud as useAriaLabel,
  Xs as useBreakpoint,
  ad as useClickOutside,
  od as useCopyToClipboard,
  Zs as useDebounce,
  ed as useDebouncedCallback,
  ld as useFocusTrap,
  me as useFormField,
  sr as useIsMobile,
  Ys as useIsTablet,
  cd as useKeyboardNavigation,
  rd as useLocalStorage,
  X as useMediaQuery,
  dd as useMemoizedCallback,
  sd as usePrevious,
  nd as useSessionStorage,
  fe as useSidebar,
  td as useThrottle,
  id as useToggle,
  Qs as useWindowSize,
  Us as validateEmail,
  qs as validatePhone,
  Js as validateURL,
  Ws as validateVietnamesePhone
};
//# sourceMappingURL=index.mjs.map
