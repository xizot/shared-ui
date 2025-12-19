import { jsx as a, jsxs as d, Fragment as vt } from "react/jsx-runtime";
import * as u from "react";
import { useMemo as oa, useRef as sa, useCallback as ia } from "react";
import * as Ce from "@radix-ui/react-accordion";
import { ChevronDownIcon as _e, ChevronRight as Ze, MoreHorizontal as la, ChevronLeftIcon as da, ChevronRightIcon as Ae, ArrowLeft as ca, ArrowRight as ua, CheckIcon as xe, XIcon as wt, SearchIcon as ma, XCircle as Nt, ChevronDown as Fe, CircleIcon as Le, CalendarIcon as yt, MinusIcon as fa, X as et, ChevronUpIcon as ga, ChevronsLeft as pa, ChevronLeft as kt, ChevronsRight as ha, GripVerticalIcon as ba, PanelLeftIcon as xa, Loader2Icon as St, OctagonXIcon as va, TriangleAlertIcon as wa, InfoIcon as Na, CircleCheckIcon as ya, Upload as Ct, CheckCircle2 as ka, AlertCircle as zt, Image as Sa, File as Ca, ArrowUp as za, ArrowDown as Ma, ArrowUpDown as Da } from "lucide-react";
import { clsx as _a } from "clsx";
import { twMerge as Ta } from "tailwind-merge";
import { cva as Q } from "class-variance-authority";
import * as ce from "@radix-ui/react-alert-dialog";
import { Slot as ae } from "@radix-ui/react-slot";
import * as Ia from "@radix-ui/react-aspect-ratio";
import * as tt from "@radix-ui/react-avatar";
import * as Ra from "@radix-ui/react-separator";
import { getDefaultClassNames as Mt, DayPicker as Ea } from "react-day-picker";
import Pa from "embla-carousel-react";
import * as at from "recharts";
import * as st from "@radix-ui/react-checkbox";
import * as rt from "@radix-ui/react-collapsible";
import { Command as ve } from "cmdk";
import * as V from "@radix-ui/react-dialog";
import * as Fa from "@radix-ui/react-label";
import * as ze from "@radix-ui/react-popover";
import * as W from "@radix-ui/react-context-menu";
import { startOfMonth as be, format as le, setSeconds as it, setMinutes as lt, setHours as dt, endOfDay as $a, startOfDay as Aa, endOfWeek as La, startOfWeek as ja, endOfMonth as ct, subWeeks as ut, subMonths as Ee } from "date-fns";
import * as ke from "@radix-ui/react-scroll-area";
import { Drawer as ge } from "vaul";
import * as K from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ha, useFormContext as Oa, useFormState as te, Controller as re, useController as Ba } from "react-hook-form";
import * as $e from "@radix-ui/react-hover-card";
import { OTPInput as Ga, OTPInputContext as Va } from "input-otp";
import * as q from "@radix-ui/react-menubar";
import * as pe from "@radix-ui/react-navigation-menu";
import * as X from "@radix-ui/react-select";
import * as mt from "@radix-ui/react-progress";
import * as Xe from "@radix-ui/react-radio-group";
import { Group as Ua, Panel as Wa, Separator as Ka } from "react-resizable-panels";
import * as Ne from "@radix-ui/react-tooltip";
import * as Pe from "@radix-ui/react-slider";
import { useTheme as qa } from "next-themes";
import { Toaster as Ya, toast as ie } from "sonner";
import * as ft from "@radix-ui/react-switch";
import * as je from "@radix-ui/react-tabs";
import * as Ja from "@radix-ui/react-toggle";
import * as Dt from "@radix-ui/react-toggle-group";
import { useReactTable as Xa, getFilteredRowModel as Qa, getSortedRowModel as Za, getPaginationRowModel as er, getCoreRowModel as tr, flexRender as gt } from "@tanstack/react-table";
function o(...e) {
  return Ta(_a(e));
}
function ne(e, t) {
  const r = t.split(".");
  let n = e;
  for (const s of r) {
    if (n == null || typeof n != "object")
      return;
    n = n[s];
  }
  return n;
}
function ar(e) {
  return !(e == null || typeof e == "string" && e.trim() === "");
}
function $n({ ...e }) {
  return /* @__PURE__ */ a(Ce.Root, { "data-slot": "accordion", ...e });
}
function An({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ce.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Ln({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(Ce.Header, { className: "flex", children: /* @__PURE__ */ d(
    Ce.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(_e, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function jn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ce.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const rr = Q(
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
), _t = u.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a("div", { ref: n, role: "alert", className: o(rr({ variant: t }), e), ...r }));
_t.displayName = "Alert";
const Tt = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: o("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }
  )
);
Tt.displayName = "AlertTitle";
const It = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: o("text-sm [&_p]:leading-relaxed", e), ...t }));
It.displayName = "AlertDescription";
const nt = Q("", {
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
}), T = {
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
}, Me = Q(
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
        xxs: `${T.xxs.height} min-w-6 rounded-md gap-1 ${T.xxs.padding} ${T.xxs.text}`,
        xs: `${T.xs.height} min-w-8 rounded-md gap-1 ${T.xs.padding} ${T.xs.text}`,
        sm: `${T.sm.height} min-w-9 rounded-md gap-1.5 ${T.sm.padding}  ${T.sm.text}`,
        md: `${T.md.height} min-w-10 ${T.md.padding} ${T.md.text}`,
        lg: `${T.lg.height} min-w-11 rounded-md ${T.lg.padding} ${T.lg.text}`,
        xl: `${T.xl.height} min-w-12 rounded-md ${T.xl.padding} ${T.xl.text}`,
        xxl: `${T.xxl.height} min-w-14 rounded-md ${T.xxl.padding} ${T.xxl.text}`,
        "2xl": `${T.xxl.height} min-w-14 rounded-md ${T.xxl.padding} ${T.xxl.text}`,
        icon: T.md.iconButton,
        "icon-xxs": T.xxs.iconButton,
        "icon-xs": T.xs.iconButton,
        "icon-sm": T.sm.iconButton,
        "icon-md": T.md.iconButton,
        "icon-lg": T.lg.iconButton,
        "icon-xl": T.xl.iconButton,
        "icon-xxl": T.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function F({
  className: e,
  variant: t = "default",
  size: r = "md",
  asChild: n = !1,
  ...s
}) {
  return /* @__PURE__ */ a(
    n ? ae : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": r,
      className: o(Me({ variant: t, size: r, className: e })),
      ...s
    }
  );
}
function Hn({ ...e }) {
  return /* @__PURE__ */ a(ce.Root, { "data-slot": "alert-dialog", ...e });
}
function On({
  ...e
}) {
  return /* @__PURE__ */ a(ce.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function nr({ ...e }) {
  return /* @__PURE__ */ a(ce.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function or({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Overlay,
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
function Bn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d(nr, { children: [
    /* @__PURE__ */ a(or, {}),
    /* @__PURE__ */ a(
      ce.Content,
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
function Gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function Un({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", e),
      ...t
    }
  );
}
function Wn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Kn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(ce.Action, { className: o(Me(), e), ...t });
}
function qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ce.Cancel,
    {
      className: o(Me({ variant: "outline" }), e),
      ...t
    }
  );
}
function Yn({ ...e }) {
  return /* @__PURE__ */ a(Ia.Root, { "data-slot": "aspect-ratio", ...e });
}
function Jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    tt.Root,
    {
      "data-slot": "avatar",
      className: o("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function Xn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    tt.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function Qn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    tt.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
const sr = Q(
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
function De({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(r ? ae : "span", { "data-slot": "badge", className: o(sr({ variant: t }), e), ...n });
}
function Zn({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function eo({ className: e, ...t }) {
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
function to({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function ao({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? ae : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function ro({ className: e, ...t }) {
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
function no({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: o("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(Ze, {})
    }
  );
}
function oo({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(la, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function de({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a(
    Ra.Root,
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
const ir = Q(
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
function so({
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
      className: o(ir({ orientation: t }), e),
      ...r
    }
  );
}
function io({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? ae : "div",
    {
      className: o(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function lo({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    de,
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
function Rt({
  className: e,
  classNames: t,
  showOutsideDays: r = !0,
  captionLayout: n = "label",
  buttonVariant: s = "ghost",
  formatters: l,
  components: i,
  ...m
}) {
  const c = Mt();
  return /* @__PURE__ */ a(
    Ea,
    {
      showOutsideDays: r,
      weekStartsOn: 1,
      className: o(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: n,
      formatters: {
        formatMonthDropdown: (g) => {
          const p = m.locale ? typeof m.locale == "string" ? m.locale : m.locale.code || "default" : "default";
          return g.toLocaleString(p, { month: "short" });
        },
        ...l
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
          Me({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_previous
        ),
        button_next: o(
          Me({ variant: s }),
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
        week: o("flex w-full mt-1", c.week),
        week_number_header: o("select-none w-(--cell-size)", c.week_number_header),
        week_number: o(
          "text-[0.8rem] select-none text-muted-foreground",
          c.week_number
        ),
        day: o(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          c.day
        ),
        range_start: o("rounded-l-md bg-accent", c.range_start),
        range_middle: o("rounded-none", c.range_middle),
        range_end: o("rounded-r-md bg-accent", c.range_end),
        today: o("bg-accent text-accent-foreground !rounded-full", c.today),
        outside: o(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: o("text-muted-foreground opacity-50", c.disabled),
        hidden: o("invisible", c.hidden),
        ...t
      },
      components: {
        ...i,
        CaptionLabel: ({ className: g, ...p }) => /* @__PURE__ */ a("div", { className: o(g), ...p }),
        Root: ({ className: g, rootRef: p, ...x }) => /* @__PURE__ */ a("div", { "data-slot": "calendar", ref: p, className: o(g), ...x }),
        Chevron: ({ className: g, orientation: p, ...x }) => p === "left" ? /* @__PURE__ */ a(da, { className: o("size-4", g), ...x }) : p === "right" ? /* @__PURE__ */ a(Ae, { className: o("size-4", g), ...x }) : /* @__PURE__ */ a(_e, { className: o("size-4", g), ...x }),
        DayButton: lr,
        WeekNumber: ({ children: g, ...p }) => /* @__PURE__ */ a("td", { ...p, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: g }) })
      },
      ...m
    }
  );
}
function lr({
  className: e,
  day: t,
  modifiers: r,
  ...n
}) {
  const s = Mt(), l = u.useRef(null);
  u.useEffect(() => {
    r.focused && l.current?.focus();
  }, [r.focused]);
  const i = r.today, m = r.selected && !r.range_start && !r.range_end && !r.range_middle, c = r.range_start, g = r.range_end, p = r.range_middle;
  return /* @__PURE__ */ d(
    F,
    {
      ref: l,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": m,
      "data-range-start": c,
      "data-range-end": g,
      "data-range-middle": p,
      className: o(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        s.day,
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { children: n.children }),
        i && /* @__PURE__ */ a("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function co({ className: e, ...t }) {
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
function uo({ className: e, ...t }) {
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
function mo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("leading-none font-semibold", e),
      ...t
    }
  );
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function go({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function po({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "card-content", className: o("px-6", e), ...t });
}
function ho({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Et = u.createContext(null);
function He() {
  const e = u.useContext(Et);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function bo({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: s,
  children: l,
  ...i
}) {
  const [m, c] = Pa(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [g, p] = u.useState(!1), [x, v] = u.useState(!1), N = u.useCallback((f) => {
    f && (p(f.canScrollPrev()), v(f.canScrollNext()));
  }, []), D = u.useCallback(() => {
    c?.scrollPrev();
  }, [c]), _ = u.useCallback(() => {
    c?.scrollNext();
  }, [c]), M = u.useCallback(
    (f) => {
      f.key === "ArrowLeft" ? (f.preventDefault(), D()) : f.key === "ArrowRight" && (f.preventDefault(), _());
    },
    [D, _]
  );
  return u.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), u.useEffect(() => {
    if (c)
      return N(c), c.on("reInit", N), c.on("select", N), () => {
        c?.off("select", N);
      };
  }, [c, N]), /* @__PURE__ */ a(
    Et.Provider,
    {
      value: {
        carouselRef: m,
        api: c,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: D,
        scrollNext: _,
        canScrollPrev: g,
        canScrollNext: x
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: M,
          className: o("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: l
        }
      )
    }
  );
}
function xo({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = He();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: o("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function vo({ className: e, ...t }) {
  const { orientation: r } = He();
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
function wo({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: l, canScrollPrev: i } = He();
  return /* @__PURE__ */ d(
    F,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: l,
      ...n,
      children: [
        /* @__PURE__ */ a(ca, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function No({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: l, canScrollNext: i } = He();
  return /* @__PURE__ */ d(
    F,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: l,
      ...n,
      children: [
        /* @__PURE__ */ a(ua, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const dr = { light: "", dark: ".dark" }, Pt = u.createContext(null);
function Ft() {
  const e = u.useContext(Pt);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function yo({
  id: e,
  className: t,
  children: r,
  config: n,
  ...s
}) {
  const l = u.useId(), i = `chart-${e || l.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Pt.Provider, { value: { config: n }, children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "chart",
      "data-chart": i,
      className: o(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(cr, { id: i, config: n }),
        /* @__PURE__ */ a(at.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const cr = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([, n]) => n.theme || n.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(dr).map(
          ([n, s]) => `
${s} [data-chart=${e}] {
${r.map(([l, i]) => {
            const m = i.theme?.[n] || i.color;
            return m ? `  --color-${l}: ${m};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, ko = at.Tooltip;
function So({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: s = !1,
  hideIndicator: l = !1,
  label: i,
  labelFormatter: m,
  labelClassName: c,
  formatter: g,
  color: p,
  nameKey: x,
  labelKey: v
}) {
  const { config: N } = Ft(), D = u.useMemo(() => {
    if (s || !t?.length)
      return null;
    const [M] = t, f = `${v || M?.dataKey || M?.name || "value"}`, b = Qe(N, M, f), C = !v && typeof i == "string" ? N[i]?.label || i : b?.label;
    return m ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: m(C, t) }) : C ? /* @__PURE__ */ a("div", { className: o("font-medium", c), children: C }) : null;
  }, [i, m, t, s, c, N, v]);
  if (!e || !t?.length)
    return null;
  const _ = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ d(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        _ ? null : D,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((M) => M.type !== "none").map((M, f) => {
          const b = `${x || M.name || M.dataKey || "value"}`, C = Qe(N, M, b), z = p || M.payload.fill || M.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: g && M?.value !== void 0 && M.name ? g(M.value, M.name, M, f, M.payload) : /* @__PURE__ */ d(vt, { children: [
                C?.icon ? /* @__PURE__ */ a(C.icon, {}) : !l && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": _ && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": z,
                      "--color-border": z
                    }
                  }
                ),
                /* @__PURE__ */ d(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      _ ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: [
                        _ ? D : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: C?.label || M.name })
                      ] }),
                      M.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: M.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            M.dataKey
          );
        }) })
      ]
    }
  );
}
const Co = at.Legend;
function zo({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: l } = Ft();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((i) => i.type !== "none").map((i) => {
        const m = `${s || i.dataKey || "value"}`, c = Qe(l, i, m);
        return /* @__PURE__ */ d(
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
                    backgroundColor: i.color
                  }
                }
              ),
              c?.label
            ]
          },
          i.value
        );
      })
    }
  ) : null;
}
function Qe(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let s = r;
  return r in t && typeof t[r] == "string" ? s = t[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in e ? e[s] : e[r];
}
function $t({
  className: e,
  size: t = "md",
  ...r
}) {
  const n = T[t ?? "md"];
  return /* @__PURE__ */ a(
    st.Root,
    {
      "data-slot": "checkbox",
      "data-size": t,
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.icon,
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        st.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(xe, { className: n.icon })
        }
      )
    }
  );
}
function Mo({ ...e }) {
  return /* @__PURE__ */ a(rt.Root, { "data-slot": "collapsible", ...e });
}
function Do({
  ...e
}) {
  return /* @__PURE__ */ a(rt.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function _o({
  ...e
}) {
  return /* @__PURE__ */ a(rt.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
function At({ ...e }) {
  return /* @__PURE__ */ a(V.Root, { "data-slot": "dialog", ...e });
}
function To({ ...e }) {
  return /* @__PURE__ */ a(V.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function ur({ ...e }) {
  return /* @__PURE__ */ a(V.Portal, { "data-slot": "dialog-portal", ...e });
}
function Io({ ...e }) {
  return /* @__PURE__ */ a(V.Close, { "data-slot": "dialog-close", ...e });
}
function mr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    V.Overlay,
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
function Lt({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d(ur, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(mr, {}),
    /* @__PURE__ */ d(
      V.Content,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ d(
            V.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(wt, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function jt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function fr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function Ht({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    V.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    V.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function U({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Fa.Root,
    {
      "data-slot": "label",
      className: o(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function ot({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ve,
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
function Ro({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: s = !0,
  ...l
}) {
  return /* @__PURE__ */ d(At, { ...l, children: [
    /* @__PURE__ */ d(jt, { className: "sr-only", children: [
      /* @__PURE__ */ a(Ht, { children: e }),
      /* @__PURE__ */ a(Ot, { children: t })
    ] }),
    /* @__PURE__ */ a(
      Lt,
      {
        className: o("overflow-hidden p-0", n),
        showCloseButton: s,
        children: /* @__PURE__ */ a(ot, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] });
}
function Bt({
  className: e,
  label: t,
  error: r,
  required: n,
  id: s,
  ...l
}) {
  const i = t || r, m = /* @__PURE__ */ a("div", { className: "px-1 pt-1", children: /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: o(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        r && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ a(ma, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          ve.Input,
          {
            id: s,
            "data-slot": "command-input",
            "aria-invalid": !!r,
            className: o(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              r && "focus-visible:ring-destructive",
              e
            ),
            ...l
          }
        )
      ]
    }
  ) });
  return i ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ d(U, { htmlFor: s, children: [
      t,
      n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    m,
    r && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : m;
}
function Gt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ve.List,
    {
      "data-slot": "command-list",
      className: o("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
      ...t
    }
  );
}
function Vt({ ...e }) {
  return /* @__PURE__ */ a(
    ve.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Ut({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Group,
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
function Eo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ve.Separator,
    {
      "data-slot": "command-separator",
      className: o("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function Wt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ve.Item,
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
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "command-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Oe({ ...e }) {
  return /* @__PURE__ */ a(ze.Root, { "data-slot": "popover", ...e });
}
function Be({ ...e }) {
  return /* @__PURE__ */ a(ze.Trigger, { "data-slot": "popover-trigger", ...e });
}
function Ge({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(ze.Portal, { children: /* @__PURE__ */ a(
    ze.Content,
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
function Fo({ ...e }) {
  return /* @__PURE__ */ a(ze.Anchor, { "data-slot": "popover-anchor", ...e });
}
function gr({
  options: e,
  value: t,
  onChange: r,
  label: n,
  error: s,
  required: l,
  placeholder: i = "Select option...",
  searchPlaceholder: m = "Search...",
  emptyMessage: c = "No results found.",
  disabled: g = !1,
  readonly: p = !1,
  size: x = "md",
  showClearIcon: v = !0,
  showArrowIcon: N = !0,
  suffix: D,
  className: _,
  triggerClassName: M,
  popoverClassName: f
}) {
  const [b, C] = u.useState(!1), z = u.useMemo(
    () => e.find((I) => I.id === t),
    [e, t]
  ), j = !g && !p && !!t, G = (I) => {
    r?.(I.id, I), C(!1);
  }, H = (I) => {
    I.preventDefault(), I.stopPropagation(), j && r?.("", void 0);
  }, O = /* @__PURE__ */ d(Oe, { open: b, onOpenChange: C, children: [
    /* @__PURE__ */ a(Be, { asChild: !0, children: /* @__PURE__ */ d(
      F,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": b,
        disabled: g,
        size: x,
        className: o(
          "w-full justify-between group/combobox",
          !t && "text-muted-foreground",
          s && "border-destructive",
          M
        ),
        children: [
          /* @__PURE__ */ a("span", { className: "flex-1 text-left truncate", children: z ? z.name : i }),
          /* @__PURE__ */ d("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            t && j ? /* @__PURE__ */ d(
              "span",
              {
                onMouseDown: (I) => {
                  I.preventDefault(), I.stopPropagation();
                },
                onClick: H,
                className: "cursor-pointer",
                children: [
                  v && /* @__PURE__ */ a(Nt, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  N && /* @__PURE__ */ a(Fe, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : N && /* @__PURE__ */ a(Fe, { className: "text-muted-foreground h-4 w-4" }),
            D
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Ge,
      {
        className: o("w-(--radix-popover-trigger-width) p-0", f),
        align: "start",
        children: /* @__PURE__ */ d(ot, { children: [
          /* @__PURE__ */ a(Bt, { placeholder: m }),
          /* @__PURE__ */ d(Gt, { children: [
            /* @__PURE__ */ a(Vt, { children: c }),
            /* @__PURE__ */ a(Ut, { children: e.map((I) => /* @__PURE__ */ d(
              Wt,
              {
                value: I.name,
                disabled: I.disabled,
                onSelect: () => G(I),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: I.name }),
                  /* @__PURE__ */ a(
                    xe,
                    {
                      className: o(
                        "h-4 w-4 shrink-0 text-primary",
                        t === I.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              I.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !n && !s ? /* @__PURE__ */ a("div", { className: o("w-full", _), children: O }) : /* @__PURE__ */ d("div", { className: o("w-full", _), children: [
    n && /* @__PURE__ */ d(U, { className: "text-foreground leading-5 block", children: [
      n,
      l && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: n ? "mt-1" : "", children: O }),
    s && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: s })
  ] });
}
function $o({ ...e }) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "context-menu", ...e });
}
function Ao({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Lo({ ...e }) {
  return /* @__PURE__ */ a(W.Group, { "data-slot": "context-menu-group", ...e });
}
function jo({ ...e }) {
  return /* @__PURE__ */ a(W.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Ho({ ...e }) {
  return /* @__PURE__ */ a(W.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Oo({
  ...e
}) {
  return /* @__PURE__ */ a(W.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function Bo({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    W.SubTrigger,
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
        /* @__PURE__ */ a(Ae, { className: "ml-auto" })
      ]
    }
  );
}
function Go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.SubContent,
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
function Vo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(
    W.Content,
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
function Uo({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    W.Item,
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
function Wo({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    W.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(W.ItemIndicator, { children: /* @__PURE__ */ a(xe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Ko({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    W.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(W.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function qo({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    W.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: o("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function Yo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Jo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Se({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    ke.Root,
    {
      "data-slot": "scroll-area",
      className: o("relative", e),
      ...r,
      children: [
        /* @__PURE__ */ a(
          ke.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(pr, {}),
        /* @__PURE__ */ a(ke.Corner, {})
      ]
    }
  );
}
function pr({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    ke.ScrollAreaScrollbar,
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
        ke.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function hr({
  value: e,
  onChange: t,
  locale: r,
  monthNames: n,
  disabled: s,
  className: l
}) {
  const [i, m] = u.useState(() => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [c, g] = u.useState(() => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), p = u.useRef(null), x = u.useRef(null);
  u.useEffect(() => {
    if (e) {
      const f = e.getFullYear(), b = e.getMonth();
      (i !== f || c !== b) && (m(f), g(b));
    } else {
      const f = /* @__PURE__ */ new Date(), b = f.getFullYear(), C = f.getMonth();
      (i !== b || c !== C) && (m(b), g(C));
    }
  }, [e]), u.useEffect(() => {
    if (!p.current) return;
    const f = setTimeout(() => {
      const b = p.current?.querySelector(
        `[data-month="${c}"]`
      );
      if (b && p.current) {
        const C = p.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (C) {
          const z = b.offsetTop;
          C.scrollTo({ top: z, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(f);
  }, [c]), u.useEffect(() => {
    if (!x.current) return;
    const f = setTimeout(() => {
      const b = x.current?.querySelector(
        `[data-year="${i}"]`
      );
      if (b && x.current) {
        const C = x.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (C) {
          const z = b.offsetTop;
          C.scrollTo({ top: z, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(f);
  }, [i]);
  const v = u.useCallback(
    (f) => {
      g(f);
      const b = new Date(i, f, 1);
      t(be(b));
    },
    [i, t]
  ), N = u.useCallback(
    (f) => {
      m(f);
      const b = new Date(f, c, 1);
      t(be(b));
    },
    [c, t]
  ), D = u.useMemo(() => {
    if (n && n.length === 12)
      return n;
    const f = typeof r == "string" ? r : r?.code || "en-US", b = new Intl.DateTimeFormat(f, { month: "long" });
    return Array.from({ length: 12 }, (C, z) => {
      const j = new Date(2024, z, 1);
      return b.format(j);
    });
  }, [r, n]), _ = u.useMemo(
    () => Array.from({ length: 100 }, (f, b) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + b),
    []
  ), M = u.useMemo(() => e ? `${D[c]} ${i}` : `${D[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [e, D, c, i]);
  return /* @__PURE__ */ d("div", { className: o("flex flex-col h-full", l), children: [
    /* @__PURE__ */ a("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ a("div", { className: "font-medium text-lg", children: M }) }),
    /* @__PURE__ */ d("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ a(Se, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ a("div", { ref: p, className: "px-2", children: D.map((f, b) => {
        const C = c === b, z = s ? s(new Date(i, b, 1)) : !1;
        return /* @__PURE__ */ a(
          "div",
          {
            "data-month": b,
            onClick: () => !z && v(b),
            className: o(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              C ? "bg-secondary" : "hover:bg-accent",
              z && "opacity-50 cursor-not-allowed"
            ),
            children: f
          },
          b
        );
      }) }) }),
      /* @__PURE__ */ a(Se, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ a("div", { ref: x, className: "px-2", children: _.map((f) => /* @__PURE__ */ a(
        "div",
        {
          "data-year": f,
          onClick: () => N(f),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            i === f ? "bg-secondary" : "hover:bg-accent"
          ),
          children: f
        },
        f
      )) }) })
    ] })
  ] });
}
function pt({ value: e, onChange: t, showSeconds: r = !0, className: n }) {
  const s = u.useRef(null), l = u.useRef(null), i = u.useRef(null), m = parseInt(e.hour, 10) || 0, c = parseInt(e.minute, 10) || 0, g = parseInt(e.second, 10) || 0, p = Array.from({ length: 24 }, (f, b) => b), x = Array.from({ length: 60 }, (f, b) => b), v = Array.from({ length: 60 }, (f, b) => b);
  u.useEffect(() => {
    const f = setTimeout(() => {
      if (s.current) {
        const b = s.current.querySelector(
          `[data-hour="${m}"]`
        );
        if (b) {
          const C = s.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (C) {
            const z = b.offsetTop;
            C.scrollTo({ top: z, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(f);
  }, [m]), u.useEffect(() => {
    const f = setTimeout(() => {
      if (l.current) {
        const b = l.current.querySelector(
          `[data-minute="${c}"]`
        );
        if (b) {
          const C = l.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (C) {
            const z = b.offsetTop;
            C.scrollTo({ top: z, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(f);
  }, [c]), u.useEffect(() => {
    if (!r) return;
    const f = setTimeout(() => {
      if (i.current) {
        const b = i.current.querySelector(
          `[data-second="${g}"]`
        );
        if (b) {
          const C = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (C) {
            const z = b.offsetTop;
            C.scrollTo({ top: z, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(f);
  }, [g, r]);
  const N = (f) => {
    t({
      ...e,
      hour: f.toString().padStart(2, "0")
    });
  }, D = (f) => {
    t({
      ...e,
      minute: f.toString().padStart(2, "0")
    });
  }, _ = (f) => {
    t({
      ...e,
      second: f.toString().padStart(2, "0")
    });
  }, M = `${e.hour}:${e.minute}${r ? `:${e.second}` : ""}`;
  return /* @__PURE__ */ d("div", { className: o("flex flex-col h-full border-l", n), children: [
    /* @__PURE__ */ a("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ a("div", { className: "font-medium text-lg", children: M }) }),
    /* @__PURE__ */ d("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ a(Se, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ a("div", { ref: s, className: "px-2", children: p.map((f) => /* @__PURE__ */ a(
        "div",
        {
          "data-hour": f,
          onClick: () => N(f),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            m === f ? "bg-secondary" : "hover:bg-accent"
          ),
          children: f.toString().padStart(2, "0")
        },
        f
      )) }) }),
      /* @__PURE__ */ a(Se, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ a("div", { ref: l, className: "px-2", children: x.map((f) => /* @__PURE__ */ a(
        "div",
        {
          "data-minute": f,
          onClick: () => D(f),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            c === f ? "bg-secondary" : "hover:bg-accent"
          ),
          children: f.toString().padStart(2, "0")
        },
        f
      )) }) }),
      r && /* @__PURE__ */ a(Se, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ a("div", { ref: i, className: "px-2", children: v.map((f) => /* @__PURE__ */ a(
        "div",
        {
          "data-second": f,
          onClick: () => _(f),
          className: o(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            g === f ? "bg-secondary" : "hover:bg-accent"
          ),
          children: f.toString().padStart(2, "0")
        },
        f
      )) }) })
    ] })
  ] });
}
function br({
  value: e,
  onChange: t,
  placeholder: r = "Pick a date",
  dateFormat: n = "dd/MM/yyyy",
  showTime: s = !1,
  timeOnly: l = !1,
  mode: i = "single",
  label: m,
  error: c,
  required: g,
  disabled: p = !1,
  disabledPast: x = !1,
  disabledFuture: v = !1,
  onDisabled: N,
  size: D = "md",
  className: _,
  triggerClassName: M,
  popoverClassName: f,
  locale: b,
  cancelText: C,
  applyText: z,
  monthNames: j,
  ...G
}) {
  const [H, O] = u.useState(!1), [I, $] = u.useState(e), [Y, E] = u.useState(() => e || /* @__PURE__ */ new Date()), [w, h] = u.useState(() => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), S = u.useRef(e), k = u.useRef(e || /* @__PURE__ */ new Date()), P = () => e ? {
    hour: e.getHours().toString().padStart(2, "0"),
    minute: e.getMinutes().toString().padStart(2, "0"),
    second: e.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, R = u.useRef(P());
  u.useEffect(() => {
    H && (S.current = e, k.current = e || /* @__PURE__ */ new Date(), R.current = e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, l ? h(e ? {
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : i === "month" ? $(e ? be(e) : be(/* @__PURE__ */ new Date())) : ($(e), e ? (E(e), s && h({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    })) : (E(/* @__PURE__ */ new Date()), s && h({ hour: "00", minute: "00", second: "00" }))));
  }, [H, e, s, l, i]), u.useEffect(() => {
    !H && !l ? ($(e), e && (E(e), s && h({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    }))) : !H && l && e && h({
      hour: e.getHours().toString().padStart(2, "0"),
      minute: e.getMinutes().toString().padStart(2, "0"),
      second: e.getSeconds().toString().padStart(2, "0")
    });
  }, [e, s, l, H]);
  const y = () => {
    if (l) {
      const J = it(
        lt(dt(e || /* @__PURE__ */ new Date(), parseInt(w.hour, 10)), parseInt(w.minute, 10)),
        parseInt(w.second, 10)
      );
      t?.(J);
    } else if (i === "month")
      t?.(I ? be(I) : void 0);
    else if (I) {
      let L = I;
      s && (L = dt(L, parseInt(w.hour, 10)), L = lt(L, parseInt(w.minute, 10)), L = it(L, parseInt(w.second, 10))), t?.(L);
    } else
      t?.(void 0);
    O(!1);
  }, Z = () => {
    $(S.current), E(k.current), s && h(R.current), O(!1);
  }, me = u.useMemo(() => {
    if (!e) return r;
    const L = b && typeof b != "string" ? { locale: b } : void 0;
    if (l)
      return /[Hhms]/.test(n) ? le(e, n, L) : le(e, "HH:mm:ss", L);
    if (i === "month") {
      if (b) {
        const J = typeof b == "string" ? b : b?.code || "en-US";
        return new Intl.DateTimeFormat(J, { month: "2-digit", year: "numeric" }).format(e);
      }
      return le(e, "MM/yyyy", L);
    }
    return s ? /[Hhms]/.test(n) ? le(e, n, L) : le(e, `${n} HH:mm:ss`, L) : le(e, n, L);
  }, [e, n, s, l, i, r, b]), se = u.useCallback(
    (L) => {
      if (p) return !0;
      const J = /* @__PURE__ */ new Date();
      J.setHours(0, 0, 0, 0);
      const fe = new Date(L);
      return fe.setHours(0, 0, 0, 0), x && fe < J || v && fe > J ? !0 : N ? N(L) : !1;
    },
    [p, x, v, N]
  ), B = u.useMemo(
    () => ({
      ...G,
      mode: "single",
      selected: I,
      onSelect: $,
      defaultMonth: Y,
      month: Y,
      onMonthChange: E,
      captionLayout: "dropdown",
      disabled: se,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: b
    }),
    [G, I, Y, se, b]
  ), oe = /* @__PURE__ */ d(Oe, { open: H, onOpenChange: O, children: [
    /* @__PURE__ */ a(Be, { asChild: !0, children: /* @__PURE__ */ d(
      F,
      {
        variant: "outline",
        size: D,
        disabled: p,
        className: o(
          "group w-full justify-between",
          !e && "text-muted-foreground",
          c && "border-destructive",
          M
        ),
        children: [
          /* @__PURE__ */ a("span", { children: me }),
          /* @__PURE__ */ a(yt, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Ge,
      {
        className: o("flex w-auto flex-col gap-2 p-0", f),
        align: "start",
        children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-2 pb-2", children: [
          l ? /* @__PURE__ */ a("div", { className: "flex h-[350px]", children: /* @__PURE__ */ a(
            pt,
            {
              value: w,
              onChange: h,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : i === "month" ? /* @__PURE__ */ a("div", { className: "flex h-[350px]", children: /* @__PURE__ */ a(
            hr,
            {
              value: I,
              onChange: $,
              locale: b,
              monthNames: j,
              disabled: se,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ d("div", { className: o("flex h-[350px]", s && "overflow-hidden"), children: [
            /* @__PURE__ */ a(Rt, { initialFocus: !0, ...B }),
            s && /* @__PURE__ */ a(
              pt,
              {
                value: w,
                onChange: h,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ a(de, { className: "shrink-0" }),
          /* @__PURE__ */ d("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ a(F, { variant: "secondary", size: "sm", onClick: Z, children: C || "Cancel" }),
            /* @__PURE__ */ a(F, { size: "sm", onClick: y, children: z || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return m || c ? /* @__PURE__ */ d("div", { className: o("w-full", _), children: [
    m && /* @__PURE__ */ d(U, { className: "text-foreground leading-5 block", children: [
      m,
      g && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: m ? "mt-1" : "", children: oe }),
    c && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] }) : /* @__PURE__ */ a("div", { className: o("w-full", _), children: oe });
}
const xr = () => {
  const e = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: Aa(e),
        to: $a(e)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: ja(ut(e, 1), { weekStartsOn: 1 }),
        to: La(ut(e, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: be(Ee(e, 1)),
        to: ct(Ee(e, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: be(Ee(e, 3)),
        to: ct(Ee(e, 3))
      }
    }
  ];
};
function vr({
  value: e,
  onChange: t,
  placeholder: r = { from: "From date", to: "To date" },
  dateFormat: n = "dd/MM/yyyy",
  presets: s,
  showPresets: l,
  label: i,
  error: m,
  required: c,
  disabled: g = !1,
  disabledPast: p = !1,
  disabledFuture: x = !1,
  onDisabled: v,
  size: N = "md",
  className: D,
  triggerClassName: _,
  popoverClassName: M,
  locale: f,
  cancelText: b,
  applyText: C,
  ...z
}) {
  const [j, G] = u.useState(!1), [H, O] = u.useState(e), [I, $] = u.useState(() => e?.to || e?.from || /* @__PURE__ */ new Date()), Y = u.useRef(e), E = u.useRef(e?.to || e?.from || /* @__PURE__ */ new Date());
  u.useEffect(() => {
    j && (Y.current = e, E.current = e?.to || e?.from || /* @__PURE__ */ new Date(), O(e), e?.to ? $(e.to) : e?.from ? $(e.from) : $(/* @__PURE__ */ new Date()));
  }, [j, e]), u.useEffect(() => {
    O(e), e?.to ? $(e.to) : e?.from && $(e.from);
  }, [e]);
  const w = u.useCallback(
    (B) => {
      if (g) return !0;
      const oe = /* @__PURE__ */ new Date();
      oe.setHours(0, 0, 0, 0);
      const L = new Date(B);
      return L.setHours(0, 0, 0, 0), p && L < oe || x && L > oe ? !0 : v ? v(B) : !1;
    },
    [g, p, x, v]
  ), h = u.useMemo(() => xr(), []), S = s ?? h, k = l !== void 0 ? l : S.length > 0, P = () => {
    t?.(H), G(!1);
  }, R = () => {
    O(Y.current), $(E.current), G(!1);
  }, y = (B) => {
    O(B.range), B.range.to ? $(B.range.to) : B.range.from && $(B.range.from);
  }, Z = u.useMemo(() => {
    if (!e?.from) return r.from || "Pick a date";
    const B = f && typeof f != "string" ? { locale: f } : void 0;
    return e.from && e.to ? `${le(e.from, n, B)} - ${le(e.to, n, B)}` : le(e.from, n, B);
  }, [e, n, r, f]), me = u.useMemo(
    () => ({
      ...z,
      mode: "range",
      selected: H,
      onSelect: O,
      defaultMonth: I,
      month: I,
      onMonthChange: $,
      disabled: w,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: f
    }),
    [z, H, I, w, f]
  ), se = /* @__PURE__ */ d(Oe, { open: j, onOpenChange: G, children: [
    /* @__PURE__ */ a(Be, { asChild: !0, children: /* @__PURE__ */ d(
      F,
      {
        variant: "outline",
        size: N,
        disabled: g,
        className: o(
          "group w-full justify-between",
          !e?.from && "text-muted-foreground",
          m && "border-destructive",
          _
        ),
        children: [
          /* @__PURE__ */ a("span", { children: Z }),
          /* @__PURE__ */ a(yt, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Ge,
      {
        className: o("flex w-auto flex-col gap-2 p-0 pb-2", M),
        align: "start",
        children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ d("div", { className: "flex", children: [
            k && /* @__PURE__ */ a("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ a("div", { className: "space-y-1", children: S.map((B, oe) => /* @__PURE__ */ a(
              F,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => y(B),
                children: B.label
              },
              oe
            )) }) }),
            /* @__PURE__ */ a("div", { className: "flex-1", children: /* @__PURE__ */ a(Rt, { initialFocus: !0, ...me }) })
          ] }),
          /* @__PURE__ */ a(de, {}),
          /* @__PURE__ */ d("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ a(F, { variant: "secondary", onClick: R, children: b || "Cancel" }),
            /* @__PURE__ */ a(F, { onClick: P, children: C || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return i || m ? /* @__PURE__ */ d("div", { className: o("w-full", D), children: [
    i && /* @__PURE__ */ d(U, { className: "text-foreground leading-5 block", children: [
      i,
      c && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: i ? "mt-1" : "", children: se }),
    m && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: m })
  ] }) : /* @__PURE__ */ a("div", { className: o("w-full", D), children: se });
}
function Xo({ ...e }) {
  return /* @__PURE__ */ a(ge.Root, { "data-slot": "drawer", ...e });
}
function Qo({ ...e }) {
  return /* @__PURE__ */ a(ge.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function wr({ ...e }) {
  return /* @__PURE__ */ a(ge.Portal, { "data-slot": "drawer-portal", ...e });
}
function Zo({ ...e }) {
  return /* @__PURE__ */ a(ge.Close, { "data-slot": "drawer-close", ...e });
}
function Nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Overlay,
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
function es({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(wr, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Nr, {}),
    /* @__PURE__ */ d(
      ge.Content,
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
function ts({ className: e, ...t }) {
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
function as({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function rs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ge.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ns({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function os({ ...e }) {
  return /* @__PURE__ */ a(K.Root, { "data-slot": "dropdown-menu", ...e });
}
function ss({
  ...e
}) {
  return /* @__PURE__ */ a(K.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function is({
  ...e
}) {
  return /* @__PURE__ */ a(K.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function ls({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ a(K.Portal, { children: /* @__PURE__ */ a(
    K.Content,
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
function ds({ ...e }) {
  return /* @__PURE__ */ a(K.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function cs({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    K.Item,
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
function us({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    K.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(xe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function ms({
  ...e
}) {
  return /* @__PURE__ */ a(K.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function fs({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    K.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(K.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function gs({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    K.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function ps({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function hs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function bs({ ...e }) {
  return /* @__PURE__ */ a(K.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function xs({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    K.SubTrigger,
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
        /* @__PURE__ */ a(Ae, { className: "ml-auto size-4" })
      ]
    }
  );
}
function vs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.SubContent,
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
function yr({ className: e, ...t }) {
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
function kr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: o("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const Sr = Q(
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
function Cr({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: o(Sr({ variant: t, className: e })),
      ...r
    }
  );
}
function zr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: o("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function Mr({ className: e, ...t }) {
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
function Dr({ className: e, ...t }) {
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
function ws({ className: e, ...t }) {
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
function Ns({
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
function ys({ className: e, ...t }) {
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
const _r = Q("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
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
function ks({
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
      className: o(_r({ orientation: t }), e),
      ...r
    }
  );
}
function Ss({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: o("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function Cs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    U,
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
function zs({ className: e, ...t }) {
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
function Ms({ className: e, ...t }) {
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
function Ds({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ a(de, { className: "absolute inset-0 top-1/2" }),
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
function _s({
  className: e,
  children: t,
  errors: r,
  ...n
}) {
  const s = oa(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const l = [...new Map(r.map((i) => [i?.message, i])).values()];
    return l?.length == 1 ? l[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: l.map((i, m) => i?.message && /* @__PURE__ */ a("li", { children: i.message }, m)) });
  }, [t, r]);
  return s ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: o("text-destructive text-sm font-normal", e),
      ...n,
      children: s
    }
  ) : null;
}
const Ts = Ha, Kt = u.createContext({}), Is = ({
  ...e
}) => /* @__PURE__ */ a(Kt.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(re, { ...e }) }), Ve = () => {
  const e = u.useContext(Kt), t = u.useContext(qt), { getFieldState: r } = Oa(), n = te({ name: e.name }), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: l } = t;
  return {
    id: l,
    name: e.name,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...s
  };
}, qt = u.createContext({});
function Rs({ className: e, ...t }) {
  const r = u.useId();
  return /* @__PURE__ */ a(qt.Provider, { value: { id: r }, children: /* @__PURE__ */ a("div", { "data-slot": "form-item", className: o("grid gap-2", e), ...t }) });
}
function Es({ className: e, ...t }) {
  const { error: r, formItemId: n } = Ve();
  return /* @__PURE__ */ a(
    U,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: o("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Ps({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Ve();
  return /* @__PURE__ */ a(
    ae,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function Fs({ className: e, ...t }) {
  const { formDescriptionId: r } = Ve();
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
function $s({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Ve(), s = r ? String(r?.message ?? "") : t.children;
  return s ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: o("text-destructive text-sm", e),
      ...t,
      children: s
    }
  ) : null;
}
function As({ ...e }) {
  return /* @__PURE__ */ a($e.Root, { "data-slot": "hover-card", ...e });
}
function Ls({ ...e }) {
  return /* @__PURE__ */ a($e.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function js({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a($e.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    $e.Content,
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
function ue({ className: e, type: t, label: r, error: n, required: s, id: l, size: i = "md", ...m }) {
  const c = r || n, g = /* @__PURE__ */ a(
    "input",
    {
      type: t,
      id: l,
      "data-slot": "input",
      "data-size": i,
      "aria-invalid": !!n,
      className: o(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        nt({ size: i }),
        i && T[i]?.padding,
        i === "xxs" && "file:h-5 file:text-xs",
        i === "xs" && "file:h-6 file:text-xs",
        i === "sm" && "file:h-7 file:text-xs",
        i === "md" && "file:h-8 file:text-sm",
        i === "lg" && "file:h-9 file:text-sm",
        i === "xl" && "file:h-10 file:text-sm",
        i === "xxl" && "file:h-11 file:text-base",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...m
    }
  );
  return c ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ d(U, { htmlFor: l, children: [
      r,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    g,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : g;
}
function Yt({ className: e, label: t, error: r, required: n, id: s, size: l = "md", ...i }) {
  const m = t || r, c = /* @__PURE__ */ a(
    "textarea",
    {
      id: s,
      "data-slot": "textarea",
      "data-size": l,
      "aria-invalid": !!r,
      className: o(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        nt({ size: l }),
        l && T[l]?.padding,
        l === "xxs" && "min-h-16",
        l === "xs" && "min-h-20",
        l === "sm" && "min-h-24",
        l === "md" && "min-h-28",
        l === "lg" && "min-h-32",
        l === "xl" && "min-h-36",
        l === "xxl" && "min-h-40",
        r ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...i
    }
  );
  return m ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ d(U, { htmlFor: s, children: [
      t,
      n && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    c,
    r && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : c;
}
function Hs({ className: e, ...t }) {
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
const Tr = Q(
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
function Os({
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
      className: o(Tr({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const Ir = Q("text-sm shadow-none flex gap-2 items-center", {
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
function Bs({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: n = "xs",
  ...s
}) {
  return /* @__PURE__ */ a(
    F,
    {
      type: t,
      "data-size": n,
      variant: r,
      className: o(Ir({ size: n }), e),
      ...s
    }
  );
}
function Gs({ className: e, ...t }) {
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
function Vs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ue,
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
function Us({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Yt,
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
function Ws({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ga,
    {
      "data-slot": "input-otp",
      containerClassName: o("flex items-center gap-2 has-disabled:opacity-50", t),
      className: o("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function Ks({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-group", className: o("flex items-center", e), ...t });
}
function qs({
  index: e,
  className: t,
  ...r
}) {
  const n = u.useContext(Va), { char: s, hasFakeCaret: l, isActive: i } = n?.slots[e] ?? {};
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": i,
      className: o(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...r,
      children: [
        s,
        l && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Ys({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(fa, {}) });
}
function Js({ className: e, ...t }) {
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
function Xs({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    de,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: o("my-0", e),
      ...t
    }
  );
}
const Rr = Q(
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
function Qs({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: n = !1,
  ...s
}) {
  return /* @__PURE__ */ a(
    n ? ae : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(Rr({ variant: t, size: r, className: e })),
      ...s
    }
  );
}
const Er = Q(
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
function Zs({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: o(Er({ variant: t, className: e })),
      ...r
    }
  );
}
function ei({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: o("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: o("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function ai({ className: e, ...t }) {
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
function ri({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: o("flex items-center gap-2", e), ...t });
}
function ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function si({ className: e, ...t }) {
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
function ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    q.Root,
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
function di({ ...e }) {
  return /* @__PURE__ */ a(q.Menu, { "data-slot": "menubar-menu", ...e });
}
function ci({ ...e }) {
  return /* @__PURE__ */ a(q.Group, { "data-slot": "menubar-group", ...e });
}
function Pr({ ...e }) {
  return /* @__PURE__ */ a(q.Portal, { "data-slot": "menubar-portal", ...e });
}
function ui({ ...e }) {
  return /* @__PURE__ */ a(q.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.Trigger,
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
function fi({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  ...s
}) {
  return /* @__PURE__ */ a(Pr, { children: /* @__PURE__ */ a(
    q.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: n,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...s
    }
  ) });
}
function gi({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    q.Item,
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
function pi({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    q.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(q.ItemIndicator, { children: /* @__PURE__ */ a(xe, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function hi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    q.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(q.ItemIndicator, { children: /* @__PURE__ */ a(Le, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function bi({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    q.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function vi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function wi({ ...e }) {
  return /* @__PURE__ */ a(q.Sub, { "data-slot": "menubar-sub", ...e });
}
function Ni({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d(
    q.SubTrigger,
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
        /* @__PURE__ */ a(Ae, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function yi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.SubContent,
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
function ki({
  options: e,
  value: t = [],
  onChange: r,
  autoResize: n = !1,
  limitTags: s,
  showCode: l = !1,
  label: i,
  error: m,
  required: c,
  placeholder: g = "Select options...",
  searchPlaceholder: p = "Search...",
  emptyMessage: x = "No results found.",
  disabled: v = !1,
  readonly: N = !1,
  size: D = "md",
  className: _,
  triggerClassName: M,
  popoverClassName: f
}) {
  const [b, C] = u.useState(!1), z = u.useMemo(() => t || [], [t]), j = u.useMemo(
    () => e.filter((w) => z.includes(w.id)),
    [e, z]
  ), G = (w) => {
    if (v || N) return;
    const S = z.includes(w) ? z.filter((P) => P !== w) : [...z, w], k = e.filter((P) => S.includes(P.id));
    r?.(S, k.length > 0 ? k : void 0);
  }, H = (w, h) => {
    if (h.preventDefault(), h.stopPropagation(), v || N) return;
    const S = z.filter((P) => P !== w), k = e.filter((P) => S.includes(P.id));
    r?.(S, k.length > 0 ? k : void 0);
  }, O = (w) => {
    w.preventDefault(), w.stopPropagation(), !(v || N) && r?.([], void 0);
  }, I = (w) => l && w.code !== void 0 ? `${w.code} - ${w.name}` : w.name, $ = s ? j.slice(0, s) : j, Y = s ? Math.max(0, j.length - s) : 0, E = /* @__PURE__ */ d(Oe, { open: b, onOpenChange: C, children: [
    /* @__PURE__ */ a(Be, { asChild: !0, children: /* @__PURE__ */ d(
      F,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": b,
        disabled: v,
        size: D,
        className: o(
          "w-full justify-between group/combobox",
          !z.length && "text-muted-foreground",
          m && "border-destructive",
          n && "h-auto min-h-0",
          M
        ),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "flex-1 flex items-center gap-1.5 min-w-0",
                n ? "flex-wrap" : "overflow-hidden"
              ),
              children: z.length === 0 ? /* @__PURE__ */ a("span", { className: "text-left truncate", children: g }) : /* @__PURE__ */ d(vt, { children: [
                $.map((w) => /* @__PURE__ */ d(
                  De,
                  {
                    variant: "secondary",
                    className: o(
                      "gap-1 shrink-0",
                      !n && "truncate max-w-[120px]",
                      (v || N) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ a("span", { className: "truncate", children: I(w) }),
                      !v && !N && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (h) => {
                            h.preventDefault(), h.stopPropagation();
                          },
                          onClick: (h) => H(w.id, h),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ a(et, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  w.id
                )),
                Y > 0 && /* @__PURE__ */ d(De, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  Y
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: z.length > 0 && !v && !N ? /* @__PURE__ */ d(
            "span",
            {
              onMouseDown: (w) => {
                w.preventDefault(), w.stopPropagation();
              },
              onClick: O,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ a(Nt, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ a(Fe, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ a(Fe, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Ge,
      {
        className: o("w-(--radix-popover-trigger-width) p-0", f),
        align: "start",
        children: /* @__PURE__ */ d(ot, { children: [
          /* @__PURE__ */ a(Bt, { placeholder: p }),
          /* @__PURE__ */ d(Gt, { children: [
            /* @__PURE__ */ a(Vt, { children: x }),
            /* @__PURE__ */ a(Ut, { children: e.map((w) => {
              const h = z.includes(w.id);
              return /* @__PURE__ */ d(
                Wt,
                {
                  value: w.name,
                  disabled: w.disabled,
                  onSelect: () => {
                    G(w.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        onMouseDown: (S) => S.preventDefault(),
                        onClick: (S) => {
                          S.preventDefault(), S.stopPropagation(), G(w.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ a(
                          $t,
                          {
                            checked: h,
                            disabled: w.disabled || v || N,
                            size: D
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ d("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      l && w.code !== void 0 && /* @__PURE__ */ a("span", { className: "text-muted-foreground shrink-0", children: w.code }),
                      /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: w.name })
                    ] }),
                    /* @__PURE__ */ a(
                      xe,
                      {
                        className: o(
                          "h-4 w-4 shrink-0 text-primary",
                          h ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                w.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !i && !m ? /* @__PURE__ */ a("div", { className: o("w-full", _), children: E }) : /* @__PURE__ */ d("div", { className: o("w-full", _), children: [
    i && /* @__PURE__ */ d(U, { className: "text-foreground leading-5 block", children: [
      i,
      c && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: i ? "mt-1" : "", children: E }),
    m && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: m })
  ] });
}
function Si({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d(
    pe.Root,
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
        r && /* @__PURE__ */ a($r, {})
      ]
    }
  );
}
function Ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.List,
    {
      "data-slot": "navigation-menu-list",
      className: o("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function zi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const Fr = Q(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Mi({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    pe.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(Fr(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          _e,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Di({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Content,
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
function $r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: o("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ a(
    pe.Viewport,
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
function _i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Link,
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
function Ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    pe.Indicator,
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
function Jt({ ...e }) {
  return /* @__PURE__ */ a(X.Root, { "data-slot": "select", ...e });
}
function Ii({ ...e }) {
  return /* @__PURE__ */ a(X.Group, { "data-slot": "select-group", ...e });
}
function Xt({ ...e }) {
  return /* @__PURE__ */ a(X.Value, { "data-slot": "select-value", ...e });
}
function Qt({
  className: e,
  size: t = "md",
  children: r,
  label: n,
  error: s,
  required: l,
  id: i,
  ...m
}) {
  const c = n || s, g = T[t ?? "md"], p = /* @__PURE__ */ d(
    X.Trigger,
    {
      id: i,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!s,
      className: o(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        nt({ size: t }),
        g.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": t === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": t === "xs",
          "[&_svg:not([class*='size-'])]:size-4": t === "sm" || t === "md",
          "[&_svg:not([class*='size-'])]:size-5": t === "lg" || t === "xl",
          "[&_svg:not([class*='size-'])]:size-6": t === "xxl"
        },
        s ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...m,
      children: [
        r,
        /* @__PURE__ */ a(X.Icon, { asChild: !0, children: /* @__PURE__ */ a(_e, { className: o("opacity-50", g.icon) }) })
      ]
    }
  );
  return c ? /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ d(U, { htmlFor: i, children: [
      n,
      l && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    p,
    s && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : p;
}
function Zt({
  className: e,
  children: t,
  position: r = "item-aligned",
  align: n = "center",
  ...s
}) {
  return /* @__PURE__ */ a(X.Portal, { children: /* @__PURE__ */ d(
    X.Content,
    {
      "data-slot": "select-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      align: n,
      ...s,
      children: [
        /* @__PURE__ */ a(Ar, {}),
        /* @__PURE__ */ a(
          X.Viewport,
          {
            className: o(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(Lr, {})
      ]
    }
  ) });
}
function Ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    X.Label,
    {
      "data-slot": "select-label",
      className: o("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function ye({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d(
    X.Item,
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
            children: /* @__PURE__ */ a(X.ItemIndicator, { children: /* @__PURE__ */ a(xe, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(X.ItemText, { children: t })
      ]
    }
  );
}
function Ei({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Separator,
    {
      "data-slot": "select-separator",
      className: o("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ar({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: o("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(ga, { className: "size-4" })
    }
  );
}
function Lr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: o("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(_e, { className: "size-4" })
    }
  );
}
function Pi({
  // Controlled mode
  currentPage: e,
  totalPages: t,
  onPageChange: r,
  // Automatic calculation mode
  pageSize: n = 10,
  totalItems: s = 0,
  onPageSizeChange: l,
  // UI options
  showFirstLast: i = !0,
  showPrevNext: m = !0,
  maxVisiblePages: c = 5,
  showPageSize: g = !1,
  showJumpToPage: p = !1,
  showInfo: x = !0,
  size: v = "md",
  variant: N = "default",
  className: D,
  // Labels
  previousLabel: _ = "Previous",
  nextLabel: M = "Next",
  firstLabel: f = "First",
  lastLabel: b = "Last",
  pageSizeLabel: C = "Items per page",
  jumpToPageLabel: z = "Go to page",
  showingLabel: j = "Showing",
  ofLabel: G = "of",
  resultsLabel: H = "results",
  pageLabel: O = "Page"
}) {
  const [I, $] = u.useState(1), [Y, E] = u.useState(n), [w, h] = u.useState(""), S = e !== void 0, k = S ? e : I, P = l ? n : Y, R = t !== void 0 ? t : s > 0 ? Math.ceil(s / P) : 1, y = (A) => {
    const Te = Math.max(1, Math.min(A, R));
    S ? r?.(Te) : $(Te);
  }, Z = (A) => {
    l ? l(A) : E(A), y(1);
  }, me = () => {
    const A = parseInt(w, 10);
    !isNaN(A) && A >= 1 && A <= R && (y(A), h(""));
  }, B = (() => {
    if (R <= c)
      return Array.from({ length: R }, (Re, na) => na + 1);
    const A = [], Te = Math.floor(c / 2);
    let Ie = Math.max(1, k - Te);
    const Ke = Math.min(R, Ie + c - 1);
    Ke - Ie < c - 1 && (Ie = Math.max(1, Ke - c + 1));
    for (let Re = Ie; Re <= Ke; Re++)
      A.push(Re);
    return A;
  })(), oe = s > 0 ? (k - 1) * P + 1 : 0, L = s > 0 ? Math.min(k * P, s) : 0, J = {
    sm: "icon-sm",
    md: "icon-md",
    lg: "icon-lg"
  }[v], fe = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  }[v];
  return /* @__PURE__ */ d(
    "nav",
    {
      className: o("flex flex-col sm:flex-row items-center justify-between gap-4", D),
      "aria-label": "pagination",
      "data-slot": "pagination",
      children: [
        x && s > 0 && /* @__PURE__ */ d("div", { className: o("text-muted-foreground", fe), "data-slot": "pagination-info", children: [
          j,
          " ",
          oe,
          "-",
          L,
          " ",
          G,
          " ",
          s,
          " ",
          H
        ] }),
        /* @__PURE__ */ d("div", { className: "flex items-center gap-2", "data-slot": "pagination-controls", children: [
          g && /* @__PURE__ */ d("div", { className: "flex items-center gap-2 mr-2", "data-slot": "pagination-page-size", children: [
            /* @__PURE__ */ d("label", { className: o("text-muted-foreground whitespace-nowrap", fe), children: [
              C,
              ":"
            ] }),
            /* @__PURE__ */ d(
              Jt,
              {
                value: P.toString(),
                onValueChange: (A) => Z(parseInt(A, 10)),
                children: [
                  /* @__PURE__ */ a(Qt, { className: "w-20 h-8", children: /* @__PURE__ */ a(Xt, {}) }),
                  /* @__PURE__ */ d(Zt, { children: [
                    /* @__PURE__ */ a(ye, { value: "10", children: "10" }),
                    /* @__PURE__ */ a(ye, { value: "20", children: "20" }),
                    /* @__PURE__ */ a(ye, { value: "50", children: "50" }),
                    /* @__PURE__ */ a(ye, { value: "100", children: "100" })
                  ] })
                ]
              }
            )
          ] }),
          i && /* @__PURE__ */ d(
            F,
            {
              variant: N,
              size: J,
              onClick: () => y(1),
              disabled: k === 1,
              "aria-label": f,
              "data-slot": "pagination-first",
              children: [
                /* @__PURE__ */ a(pa, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { className: "sr-only", children: f })
              ]
            }
          ),
          m && /* @__PURE__ */ d(
            F,
            {
              variant: N,
              size: J,
              onClick: () => y(k - 1),
              disabled: k === 1,
              "aria-label": _,
              "data-slot": "pagination-previous",
              children: [
                /* @__PURE__ */ a(kt, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { className: "sr-only sm:not-sr-only sm:ml-1", children: _ })
              ]
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1", "data-slot": "pagination-pages", children: B.map((A) => /* @__PURE__ */ a(
            F,
            {
              variant: k === A ? "outline" : N,
              size: J,
              onClick: () => y(A),
              "aria-label": `${O} ${A}`,
              "aria-current": k === A ? "page" : void 0,
              "data-slot": "pagination-page",
              "data-active": k === A,
              children: A
            },
            A
          )) }),
          m && /* @__PURE__ */ d(
            F,
            {
              variant: N,
              size: J,
              onClick: () => y(k + 1),
              disabled: k === R,
              "aria-label": M,
              "data-slot": "pagination-next",
              children: [
                /* @__PURE__ */ a("span", { className: "sr-only sm:not-sr-only sm:mr-1", children: M }),
                /* @__PURE__ */ a(Ze, { className: "h-4 w-4" })
              ]
            }
          ),
          i && /* @__PURE__ */ d(
            F,
            {
              variant: N,
              size: J,
              onClick: () => y(R),
              disabled: k === R,
              "aria-label": b,
              "data-slot": "pagination-last",
              children: [
                /* @__PURE__ */ a(ha, { className: "h-4 w-4" }),
                /* @__PURE__ */ a("span", { className: "sr-only", children: b })
              ]
            }
          )
        ] }),
        p && /* @__PURE__ */ d("div", { className: "flex items-center gap-2", "data-slot": "pagination-jump", children: [
          /* @__PURE__ */ d("label", { className: o("text-muted-foreground whitespace-nowrap", fe), children: [
            z,
            ":"
          ] }),
          /* @__PURE__ */ a(
            ue,
            {
              type: "number",
              min: 1,
              max: R,
              value: w,
              onChange: (A) => h(A.target.value),
              onKeyDown: (A) => {
                A.key === "Enter" && me();
              },
              className: "w-20 h-8",
              size: "sm"
            }
          ),
          /* @__PURE__ */ a(
            F,
            {
              variant: "outline",
              size: "sm",
              onClick: me,
              disabled: !w || parseInt(w, 10) < 1 || parseInt(w, 10) > R,
              children: "Go"
            }
          )
        ] })
      ]
    }
  );
}
function jr({
  className: e,
  value: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    mt.Root,
    {
      "data-slot": "progress",
      className: o("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", e),
      ...r,
      children: /* @__PURE__ */ a(
        mt.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Hr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Xe.Root,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", e),
      ...t
    }
  );
}
function Fi({
  className: e,
  size: t = "md",
  ...r
}) {
  const n = T[t ?? "md"], s = {
    xxs: "size-1",
    xs: "size-1.5",
    sm: "size-1.5",
    md: "size-2",
    lg: "size-2.5",
    xl: "size-2.5",
    xxl: "size-3"
  }[t ?? "md"];
  return /* @__PURE__ */ a(
    Xe.Item,
    {
      "data-slot": "radio-group-item",
      "data-size": t,
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.icon,
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        Xe.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(
            Le,
            {
              className: o(
                "fill-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                s
              )
            }
          )
        }
      )
    }
  );
}
function $i({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Ua,
    {
      "data-slot": "resizable-panel-group",
      className: o("flex h-full w-full data-[orientation=vertical]:flex-col", e),
      ...t
    }
  );
}
function Ai({ ...e }) {
  return /* @__PURE__ */ a(Wa, { "data-slot": "resizable-panel", ...e });
}
function Li({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Ka,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(ba, { className: "size-2.5" }) })
    }
  );
}
function Or({ ...e }) {
  return /* @__PURE__ */ a(V.Root, { "data-slot": "sheet", ...e });
}
function ji({ ...e }) {
  return /* @__PURE__ */ a(V.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Hi({ ...e }) {
  return /* @__PURE__ */ a(V.Close, { "data-slot": "sheet-close", ...e });
}
function Br({ ...e }) {
  return /* @__PURE__ */ a(V.Portal, { "data-slot": "sheet-portal", ...e });
}
function Gr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    V.Overlay,
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
function Vr({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ d(Br, { children: [
    /* @__PURE__ */ a(Gr, {}),
    /* @__PURE__ */ d(
      V.Content,
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
          /* @__PURE__ */ d(V.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(wt, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Wr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    V.Title,
    {
      "data-slot": "sheet-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Kr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    V.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const qe = 768;
function qr() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${qe - 1}px)`), n = () => {
      t(window.innerWidth < qe);
    };
    return r.addEventListener("change", n), t(window.innerWidth < qe), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function ee({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function ea({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ne.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Yr({ ...e }) {
  return /* @__PURE__ */ a(ea, { children: /* @__PURE__ */ a(Ne.Root, { "data-slot": "tooltip", ...e }) });
}
function Jr({ ...e }) {
  return /* @__PURE__ */ a(Ne.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Xr({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(Ne.Portal, { children: /* @__PURE__ */ d(
    Ne.Content,
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
        /* @__PURE__ */ a(Ne.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Qr = "sidebar_state", Zr = 3600 * 24 * 7, en = "16rem", tn = "18rem", an = "3rem", rn = "b", ta = u.createContext(null);
function Ue() {
  const e = u.useContext(ta);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Bi({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: s,
  children: l,
  ...i
}) {
  const m = qr(), [c, g] = u.useState(!1), [p, x] = u.useState(e), v = t ?? p, N = u.useCallback(
    (f) => {
      const b = typeof f == "function" ? f(v) : f;
      r ? r(b) : x(b), document.cookie = `${Qr}=${b}; path=/; max-age=${Zr}`;
    },
    [r, v]
  ), D = u.useCallback(() => m ? g((f) => !f) : N((f) => !f), [m, N, g]);
  u.useEffect(() => {
    const f = (b) => {
      b.key === rn && (b.metaKey || b.ctrlKey) && (b.preventDefault(), D());
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [D]);
  const _ = v ? "expanded" : "collapsed", M = u.useMemo(
    () => ({
      state: _,
      open: v,
      setOpen: N,
      isMobile: m,
      openMobile: c,
      setOpenMobile: g,
      toggleSidebar: D
    }),
    [_, v, N, m, c, g, D]
  );
  return /* @__PURE__ */ a(ta.Provider, { value: M, children: /* @__PURE__ */ a(ea, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": en,
        "--sidebar-width-icon": an,
        ...s
      },
      className: o(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...i,
      children: l
    }
  ) }) });
}
function Gi({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: s,
  ...l
}) {
  const { isMobile: i, state: m, openMobile: c, setOpenMobile: g } = Ue();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...l,
      children: s
    }
  ) : i ? /* @__PURE__ */ a(Or, { open: c, onOpenChange: g, ...l, children: /* @__PURE__ */ d(
    Vr,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": tn
      },
      side: e,
      children: [
        /* @__PURE__ */ d(Ur, { className: "sr-only", children: [
          /* @__PURE__ */ a(Wr, { children: "Sidebar" }),
          /* @__PURE__ */ a(Kr, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ d(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": m,
      "data-collapsible": m === "collapsed" ? r : "",
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
            ...l,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
function Vi({ className: e, onClick: t, ...r }) {
  const { toggleSidebar: n } = Ue();
  return /* @__PURE__ */ d(
    F,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7", e),
      onClick: (s) => {
        t?.(s), n();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(xa, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Ui({ className: e, ...t }) {
  const { toggleSidebar: r } = Ue();
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
function Wi({ className: e, ...t }) {
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
function Ki({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ue,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function qi({ className: e, ...t }) {
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
function Yi({ className: e, ...t }) {
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
function Ji({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    de,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function Xi({ className: e, ...t }) {
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
function Qi({ className: e, ...t }) {
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
function Zi({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? ae : "div",
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
function el({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? ae : "button",
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
function tl({ className: e, ...t }) {
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
function al({ className: e, ...t }) {
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
function rl({ className: e, ...t }) {
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
const nn = Q(
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
function nl({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: l,
  ...i
}) {
  const m = e ? ae : "button", { isMobile: c, state: g } = Ue(), p = /* @__PURE__ */ a(
    m,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(nn({ variant: r, size: n }), l),
      ...i
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ d(Yr, { children: [
    /* @__PURE__ */ a(Jr, { asChild: !0, children: p }),
    /* @__PURE__ */ a(
      Xr,
      {
        side: "right",
        align: "center",
        hidden: g !== "collapsed" || c,
        ...s
      }
    )
  ] })) : p;
}
function ol({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? ae : "button",
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
function sl({ className: e, ...t }) {
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
function il({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const [n] = u.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ d(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(ee, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          ee,
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
function ll({ className: e, ...t }) {
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
function dl({ className: e, ...t }) {
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
function cl({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? ae : "a",
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
      ...s
    }
  );
}
function ul({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: s = 100,
  ...l
}) {
  const i = u.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, s],
    [r, t, n, s]
  );
  return /* @__PURE__ */ d(
    Pe.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: n,
      max: s,
      className: o(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...l,
      children: [
        /* @__PURE__ */ a(
          Pe.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              Pe.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: i.length }, (m, c) => /* @__PURE__ */ a(
          Pe.Thumb,
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
const ml = ({ ...e }) => {
  const { theme: t = "system" } = qa();
  return /* @__PURE__ */ a(
    Ya,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(ya, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(Na, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(wa, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(va, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(St, { className: "size-5 animate-spin text-foreground" })
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
function on({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    St,
    {
      role: "status",
      "aria-label": "Loading",
      className: o("size-4 animate-spin", e),
      ...t
    }
  );
}
function sn({
  className: e,
  size: t = "md",
  ...r
}) {
  const n = T[t ?? "md"], s = {
    xxs: { height: "h-3.5", width: "w-6", thumb: n.icon },
    xs: { height: "h-4", width: "w-7", thumb: n.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: n.icon },
    md: { height: "h-5", width: "w-9", thumb: n.icon },
    lg: { height: "h-6", width: "w-11", thumb: n.icon },
    xl: { height: "h-6", width: "w-12", thumb: n.icon },
    xxl: { height: "h-7", width: "w-14", thumb: n.icon }
  }[t ?? "md"];
  return /* @__PURE__ */ a(
    ft.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: o(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.height,
        s.width,
        e
      ),
      ...r,
      children: /* @__PURE__ */ a(
        ft.Thumb,
        {
          "data-slot": "switch-thumb",
          className: o(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            s.thumb
          )
        }
      )
    }
  );
}
function ln({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: o("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function dn({ className: e, ...t }) {
  return /* @__PURE__ */ a("thead", { "data-slot": "table-header", className: o("[&_tr]:border-b", e), ...t });
}
function cn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function fl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: o("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function Ye({ className: e, ...t }) {
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
function un({ className: e, ...t }) {
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
function ht({ className: e, ...t }) {
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
function gl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function pl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    je.Root,
    {
      "data-slot": "tabs",
      className: o("flex flex-col gap-2", e),
      ...t
    }
  );
}
function hl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    je.List,
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
function bl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    je.Trigger,
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
function xl({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    je.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const aa = Q(
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
function vl({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    Ja.Root,
    {
      "data-slot": "toggle",
      className: o(aa({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const ra = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function wl({
  className: e,
  variant: t,
  size: r,
  spacing: n = 0,
  children: s,
  ...l
}) {
  return /* @__PURE__ */ a(
    Dt.Root,
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
      ...l,
      children: /* @__PURE__ */ a(ra.Provider, { value: { variant: t, size: r, spacing: n }, children: s })
    }
  );
}
function Nl({
  className: e,
  children: t,
  variant: r,
  size: n,
  ...s
}) {
  const l = u.useContext(ra);
  return /* @__PURE__ */ a(
    Dt.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": l.variant || r,
      "data-size": l.size || n,
      "data-spacing": l.spacing,
      className: o(
        aa({
          variant: l.variant || r,
          size: l.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        e
      ),
      ...s,
      children: t
    }
  );
}
const bt = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function yl(e, t = "en-US", r = "USD") {
  return new Intl.NumberFormat(t, {
    style: "currency",
    currency: r
  }).format(e);
}
function kl(e, t = "short") {
  const r = typeof e == "string" || typeof e == "number" ? new Date(e) : e;
  if (isNaN(r.getTime()))
    return "";
  if (t in bt) {
    const n = bt[t];
    return xt(r, n);
  }
  return xt(r, t);
}
function xt(e, t) {
  const r = e.getDate().toString().padStart(2, "0"), n = (e.getMonth() + 1).toString().padStart(2, "0"), s = e.getFullYear(), l = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0"), m = e.getSeconds().toString().padStart(2, "0"), c = [
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
  return t.replace(/dd/g, r).replace(/MM/g, n).replace(/yyyy/g, s.toString()).replace(/MMMM/g, c[e.getMonth()]).replace(/MMM/g, c[e.getMonth()].substring(0, 3)).replace(/HH/g, l).replace(/mm/g, i).replace(/ss/g, m);
}
function Sl(e) {
  const t = e.replace(/\D/g, "");
  return t.length === 10 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : t.length === 11 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : e;
}
function Je(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, n) * 100) / 100 + " " + r[n];
}
function Cl(e, t, r = "...") {
  return e.length <= t ? e : e.slice(0, t) + r;
}
const zl = {
  /**
   * Show a success toast
   */
  success: (e, t) => ie.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => ie.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => ie.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => ie.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => ie(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => ie.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, r) => ie.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: r?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    ie.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    ie.dismiss();
  }
}, We = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function Ml(e) {
  return We.email.test(e);
}
function Dl(e) {
  return We.phone.test(e);
}
function _l(e) {
  return We.vietnamesePhone.test(e);
}
function Tl(e) {
  return We.url.test(e);
}
function we(e) {
  const [t, r] = u.useState(() => typeof window > "u" ? !1 : window.matchMedia(e).matches);
  return u.useEffect(() => {
    if (typeof window > "u") return;
    const n = window.matchMedia(e), s = (l) => {
      r(l.matches);
    };
    return n.addEventListener ? (n.addEventListener("change", s), () => n.removeEventListener("change", s)) : (n.addListener(s), () => n.removeListener(s));
  }, [e]), t;
}
const he = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function Il() {
  const e = we(`(min-width: ${he["2xl"]}px)`), t = we(`(min-width: ${he.xl}px)`), r = we(`(min-width: ${he.lg}px)`), n = we(`(min-width: ${he.md}px)`), s = we(`(min-width: ${he.sm}px)`);
  return e ? "2xl" : t ? "xl" : r ? "lg" : n ? "md" : s ? "sm" : null;
}
function Rl() {
  const [e, t] = u.useState(() => typeof window > "u" ? { width: 0, height: 0 } : {
    width: window.innerWidth,
    height: window.innerHeight
  });
  return u.useEffect(() => {
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
function El() {
  return we(`(min-width: ${he.md}px) and (max-width: ${he.lg - 1}px)`);
}
function Pl(e, t) {
  const [r, n] = u.useState(e);
  return u.useEffect(() => {
    const s = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [e, t]), r;
}
function Fl(e, t) {
  const r = sa(void 0), n = ia(
    (...s) => {
      r.current && clearTimeout(r.current), r.current = setTimeout(() => {
        e(...s);
      }, t);
    },
    [e, t]
  );
  return u.useEffect(() => () => {
    r.current && clearTimeout(r.current);
  }, []), n;
}
function $l(e, t) {
  const [r, n] = u.useState(e), s = u.useRef(void 0);
  return u.useEffect(() => {
    s.current === void 0 && (s.current = Date.now());
  }, []), u.useEffect(() => {
    if (s.current === void 0)
      return;
    const l = setTimeout(
      () => {
        const i = Date.now();
        s.current !== void 0 && i - s.current >= t && (n(e), s.current = i);
      },
      s.current !== void 0 ? t - (Date.now() - s.current) : t
    );
    return () => {
      clearTimeout(l);
    };
  }, [e, t]), r;
}
function Al(e, t) {
  u.useEffect(() => {
    const r = (n) => {
      const s = e?.current;
      !s || s.contains(n.target) || t(n);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, t]);
}
function Ll(e, t) {
  const [r, n] = u.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const i = window.localStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.error(`Error reading localStorage key "${e}":`, i), t;
    }
  }), s = u.useCallback(
    (i) => {
      try {
        const m = i instanceof Function ? i(r) : i;
        n(m), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(m));
      } catch (m) {
        console.error(`Error setting localStorage key "${e}":`, m);
      }
    },
    [e, r]
  ), l = u.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.localStorage.removeItem(e);
    } catch (i) {
      console.error(`Error removing localStorage key "${e}":`, i);
    }
  }, [e, t]);
  return [r, s, l];
}
function jl(e, t) {
  const [r, n] = u.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const i = window.sessionStorage.getItem(e);
      return i ? JSON.parse(i) : t;
    } catch (i) {
      return console.error(`Error reading sessionStorage key "${e}":`, i), t;
    }
  }), s = u.useCallback(
    (i) => {
      try {
        const m = i instanceof Function ? i(r) : i;
        n(m), typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(m));
      } catch (m) {
        console.error(`Error setting sessionStorage key "${e}":`, m);
      }
    },
    [e, r]
  ), l = u.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.sessionStorage.removeItem(e);
    } catch (i) {
      console.error(`Error removing sessionStorage key "${e}":`, i);
    }
  }, [e, t]);
  return [r, s, l];
}
function Hl() {
  const [e, t] = u.useState(!1), [r, n] = u.useState(null);
  return { copy: u.useCallback(async (l) => {
    if (!navigator?.clipboard)
      return n(new Error("Clipboard API not available")), !1;
    try {
      return await navigator.clipboard.writeText(l), t(!0), n(null), setTimeout(() => {
        t(!1);
      }, 2e3), !0;
    } catch (i) {
      return n(i instanceof Error ? i : new Error("Failed to copy")), t(!1), !1;
    }
  }, []), copied: e, error: r };
}
function Ol(e = !1) {
  const [t, r] = u.useState(e), n = u.useCallback(() => {
    r((s) => !s);
  }, []);
  return [t, n, r];
}
function Bl(e) {
  const [t, r] = u.useState(void 0), n = u.useRef(e);
  return u.useEffect(() => {
    n.current !== e && (r(n.current), n.current = e);
  }, [e]), t;
}
function Gl(e, t) {
  return u.useCallback(e, t);
}
function Vl(e, t = !0) {
  u.useEffect(() => {
    if (!t || !e.current) return;
    const r = e.current, n = r.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), s = n[0], l = n[n.length - 1], i = (m) => {
      m.key === "Tab" && (m.shiftKey ? document.activeElement === s && (m.preventDefault(), l?.focus()) : document.activeElement === l && (m.preventDefault(), s?.focus()));
    };
    return r.addEventListener("keydown", i), s?.focus(), () => {
      r.removeEventListener("keydown", i);
    };
  }, [t, e]);
}
function Ul(e, t = {}) {
  const { direction: r = "both", loop: n = !1, onNavigate: s } = t, [l, i] = u.useState(0), m = u.useCallback(
    (c) => {
      let g = l;
      (r === "horizontal" || r === "both") && (c.key === "ArrowLeft" ? (c.preventDefault(), g = l > 0 ? l - 1 : n ? e - 1 : l) : c.key === "ArrowRight" && (c.preventDefault(), g = l < e - 1 ? l + 1 : n ? 0 : l)), (r === "vertical" || r === "both") && (c.key === "ArrowUp" ? (c.preventDefault(), g = l > 0 ? l - 1 : n ? e - 1 : l) : c.key === "ArrowDown" && (c.preventDefault(), g = l < e - 1 ? l + 1 : n ? 0 : l)), g !== l && (i(g), s?.(g));
    },
    [l, e, r, n, s]
  );
  return { currentIndex: l, setCurrentIndex: i, handleKeyDown: m };
}
function Wl(e = {}) {
  const { label: t, labelledBy: r, describedBy: n } = e;
  return u.useMemo(
    () => ({
      "aria-label": t,
      "aria-labelledby": r,
      "aria-describedby": n
    }),
    [t, r, n]
  );
}
function Kl({
  control: e,
  name: t,
  label: r,
  required: n,
  callback: s = () => {
  },
  className: l,
  ...i
}) {
  const m = te({ control: e, name: t }), c = ne(m.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: g }) => /* @__PURE__ */ a(
        gr,
        {
          ...i,
          value: g.value,
          onChange: (p, x) => {
            g.onChange(p), s(p, x);
          },
          label: r,
          error: c,
          required: n,
          className: o("w-full", l)
        }
      )
    }
  );
}
function ql({
  control: e,
  name: t,
  label: r,
  required: n,
  error: s,
  className: l,
  callback: i = () => {
  },
  ...m
}) {
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: c, fieldState: { error: g } }) => {
        const p = s || g?.message;
        return /* @__PURE__ */ a(
          br,
          {
            ...m,
            value: c.value,
            onChange: (x) => {
              c.onChange(x), i(x);
            },
            label: r,
            error: p,
            required: n,
            className: o("w-full", l)
          }
        );
      }
    }
  );
}
function Yl({
  control: e,
  name: t,
  label: r,
  required: n,
  error: s,
  className: l,
  callback: i = () => {
  },
  ...m
}) {
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: c, fieldState: { error: g } }) => {
        const p = s || g?.message;
        return /* @__PURE__ */ a(
          vr,
          {
            ...m,
            value: c.value,
            onChange: (x) => {
              c.onChange(x), i(x);
            },
            label: r,
            error: p,
            required: n,
            className: o("w-full", l)
          }
        );
      }
    }
  );
}
const mn = (e, t) => t === "text" || !e ? e : t === "integer" || t === "currency" ? e.replace(/\D/g, "") : t === "decimal" ? e.replace(/[^\d.,]/g, "").replace(/\./g, ",") : e;
function Jl({
  control: e,
  name: t,
  label: r,
  format: n = "text",
  required: s,
  wrapperClassName: l,
  callback: i = () => {
  },
  ...m
}) {
  const c = te({ control: e, name: t }), g = ne(c.errors, `${t}.message`);
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: p }) => /* @__PURE__ */ a("div", { className: o("w-full", l), children: /* @__PURE__ */ a(
        ue,
        {
          ...m,
          ...p,
          type: "text",
          label: r,
          error: g,
          required: s,
          value: p.value || "",
          onChange: (x) => {
            const v = mn(x.target.value, n);
            p.onChange(v), i(v);
          }
        }
      ) })
    }
  );
}
function Xl({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: s,
  className: l,
  wrapperClassName: i,
  required: m = !1,
  ...c
}) {
  const g = te({ control: e, name: r }), p = ne(g.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", i), children: /* @__PURE__ */ a(
    ue,
    {
      ...c,
      ...t(r),
      label: n,
      error: p,
      required: m,
      className: l,
      placeholder: s
    }
  ) });
}
function Ql({
  control: e,
  name: t,
  label: r,
  required: n,
  children: s,
  className: l,
  callback: i = () => {
  },
  onBeforeChange: m,
  ...c
}) {
  const g = (p, x) => {
    const v = () => {
      x.onChange(p), i(p);
    };
    m ? m(p, x.value, v) : v();
  };
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: p, fieldState: { error: x } }) => /* @__PURE__ */ d("div", { className: "space-y-1.5 w-full", children: [
        r && /* @__PURE__ */ d(
          U,
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
          Hr,
          {
            ...c,
            id: c.id || t,
            className: o("flex flex-row gap-4", l),
            onValueChange: (v) => {
              g(v, p);
            },
            value: p.value?.toString(),
            children: s
          }
        ),
        x && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: x.message })
      ] })
    }
  );
}
function Zl({
  control: e,
  name: t,
  label: r,
  required: n,
  callback: s = () => {
  },
  onBeforeChange: l,
  className: i,
  ...m
}) {
  const c = (g, p) => {
    const x = () => {
      p.onChange(g), s(g);
    };
    l ? l(g, p.value, x) : x();
  };
  return /* @__PURE__ */ a(
    re,
    {
      control: e,
      name: t,
      render: ({ field: g, fieldState: { error: p } }) => /* @__PURE__ */ d("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ d("div", { className: o("flex items-center gap-3", i), children: [
          r && /* @__PURE__ */ d(
            U,
            {
              htmlFor: m.id || t,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                r,
                n && /* @__PURE__ */ a("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            sn,
            {
              ...m,
              id: m.id || t,
              checked: !!g.value,
              onCheckedChange: (x) => {
                c(x, g);
              }
            }
          )
        ] }),
        p && /* @__PURE__ */ a("p", { className: "text-xs text-destructive", children: p.message })
      ] })
    }
  );
}
function ed({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: s,
  className: l,
  wrapperClassName: i,
  required: m = !1,
  showMaxLength: c = !0,
  maxLength: g = 512,
  rows: p = 5,
  ...x
}) {
  const v = te({ control: e, name: r }), N = ne(v.errors, `${r}.message`);
  return /* @__PURE__ */ d("div", { className: o("relative w-full", i), children: [
    /* @__PURE__ */ a(
      Yt,
      {
        ...x,
        ...t(r),
        label: n,
        error: N,
        required: m,
        className: l,
        placeholder: s,
        maxLength: g,
        rows: p
      }
    ),
    c && /* @__PURE__ */ a(fn, { control: e, name: r, maxLength: g })
  ] });
}
const fn = ({
  control: e,
  name: t,
  maxLength: r
}) => {
  const { field: n } = Ba({ control: e, name: t });
  return /* @__PURE__ */ d(De, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    n.value?.length || 0,
    "/",
    r
  ] });
}, td = ({
  name: e,
  control: t
}) => {
  const r = te({
    control: t,
    name: e
  }), n = ne(r.errors, `${e}.message`);
  return /* @__PURE__ */ a(
    "p",
    {
      className: o(
        "text-xs text-destructive hidden",
        ar(n) && "input-error block mt-1.5"
      ),
      children: n
    }
  );
};
function ad({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: s,
  className: l,
  wrapperClassName: i,
  required: m = !1,
  min: c,
  max: g,
  step: p,
  ...x
}) {
  const v = te({ control: e, name: r }), N = ne(v.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", i), children: /* @__PURE__ */ a(
    ue,
    {
      ...x,
      ...t(r, { valueAsNumber: !0 }),
      type: "number",
      label: n,
      error: N,
      required: m,
      className: l,
      placeholder: s,
      min: c,
      max: g,
      step: p
    }
  ) });
}
function rd({
  control: e,
  name: t,
  options: r,
  label: n,
  error: s,
  required: l = !1,
  wrapperClassName: i,
  orientation: m = "vertical"
}) {
  const c = te({ control: e, name: t }), g = s || ne(c.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: o("w-full", i), children: [
    n && /* @__PURE__ */ d(U, { htmlFor: t, className: "mb-2 block", children: [
      n,
      l && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      re,
      {
        control: e,
        name: t,
        render: ({ field: p }) => /* @__PURE__ */ a("div", { className: o("flex gap-4", m === "horizontal" ? "flex-row" : "flex-col"), children: r.map((x) => /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a(
            $t,
            {
              id: `${t}-${x.value}`,
              checked: Array.isArray(p.value) && p.value.includes(x.value),
              onCheckedChange: (v) => {
                const N = Array.isArray(p.value) ? p.value : [];
                v ? p.onChange([...N, x.value]) : p.onChange(N.filter((D) => D !== x.value));
              },
              disabled: x.disabled
            }
          ),
          /* @__PURE__ */ a(U, { htmlFor: `${t}-${x.value}`, className: "font-normal cursor-pointer", children: x.label })
        ] }, x.value)) })
      }
    ),
    g && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: g })
  ] });
}
function nd({
  control: e,
  name: t,
  options: r,
  label: n,
  error: s,
  required: l = !1,
  placeholder: i = "Select options...",
  wrapperClassName: m
}) {
  const c = te({ control: e, name: t }), g = s || ne(c.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: o("w-full", m), children: [
    n && /* @__PURE__ */ d(U, { htmlFor: t, className: "mb-2 block", children: [
      n,
      l && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      re,
      {
        control: e,
        name: t,
        render: ({ field: p }) => {
          const x = Array.isArray(p.value) ? p.value : [];
          return /* @__PURE__ */ d("div", { className: "space-y-2", children: [
            /* @__PURE__ */ d(
              Jt,
              {
                value: "",
                onValueChange: (v) => {
                  x.includes(v) || p.onChange([...x, v]);
                },
                children: [
                  /* @__PURE__ */ a(Qt, { className: o(g && "border-destructive"), children: /* @__PURE__ */ a(Xt, { placeholder: i }) }),
                  /* @__PURE__ */ a(Zt, { children: r.map((v) => /* @__PURE__ */ a(
                    ye,
                    {
                      value: v.value,
                      disabled: v.disabled || x.includes(v.value),
                      children: v.label
                    },
                    v.value
                  )) })
                ]
              }
            ),
            x.length > 0 && /* @__PURE__ */ a("div", { className: "flex flex-wrap gap-2", children: x.map((v) => {
              const N = r.find((D) => D.value === v);
              return /* @__PURE__ */ d(De, { variant: "secondary", className: "gap-1", children: [
                N?.label || v,
                /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      p.onChange(x.filter((D) => D !== v));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ a(et, { className: "h-3 w-3" })
                  }
                )
              ] }, v);
            }) })
          ] });
        }
      }
    ),
    g && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: g })
  ] });
}
function od({
  control: e,
  name: t,
  label: r,
  error: n,
  required: s = !1,
  accept: l,
  multiple: i = !1,
  wrapperClassName: m,
  className: c
}) {
  const g = te({ control: e, name: t }), p = n || ne(g.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: o("w-full", m), children: [
    r && /* @__PURE__ */ d(U, { htmlFor: t, className: "mb-2 block", children: [
      r,
      s && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      re,
      {
        control: e,
        name: t,
        render: ({ field: { onChange: x, value: v, ...N } }) => /* @__PURE__ */ d("div", { className: "space-y-2", children: [
          /* @__PURE__ */ d(
            U,
            {
              htmlFor: t,
              className: o(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                p && "border-destructive",
                c
              ),
              children: [
                /* @__PURE__ */ d("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ a(Ct, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ d("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ a("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground", children: [
                    l || "Any file",
                    i && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ a(
                  ue,
                  {
                    ...N,
                    id: t,
                    type: "file",
                    accept: l,
                    multiple: i,
                    className: "hidden",
                    onChange: (D) => {
                      const _ = D.target.files;
                      _ && x(i ? Array.from(_) : _[0]);
                    }
                  }
                )
              ]
            }
          ),
          v && /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: i ? `${Array.isArray(v) ? v.length : 0} file(s) selected` : typeof v == "string" ? v : v?.name || "File selected" })
        ] })
      }
    ),
    p && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", children: p })
  ] });
}
function gn({
  value: e = [],
  onChange: t,
  accept: r,
  multiple: n = !1,
  maxSize: s,
  maxFiles: l,
  disabled: i = !1,
  onError: m,
  showPreview: c = !0,
  showProgress: g = !1,
  className: p,
  dropzoneClassName: x,
  placeholder: v,
  uploadText: N
}) {
  const [D, _] = u.useState(!1), M = (h) => h && typeof h == "object" && "name" in h && "size" in h && "type" in h && "lastModified" in h && !("file" in h), [f, b] = u.useState(() => !e || e.length === 0 ? [] : e.map((h) => M(h) ? {
    file: h,
    preview: h.type.startsWith("image/") ? URL.createObjectURL(h) : void 0,
    status: "success"
  } : h)), C = u.useRef(null), z = u.useRef(f);
  u.useEffect(() => {
    z.current = f;
  }, [f]), u.useEffect(() => () => {
    z.current.forEach((h) => {
      h.preview && URL.revokeObjectURL(h.preview);
    });
  }, []), u.useEffect(() => {
    if (!e || e.length === 0) {
      z.current.forEach((Z) => {
        Z.preview && URL.revokeObjectURL(Z.preview);
      }), z.current.length > 0 && b([]);
      return;
    }
    const h = e.map((y) => M(y) ? y : y.file), S = z.current.map((y) => y.file), k = h.map((y) => `${y.name}-${y.size}`).join(","), P = S.map((y) => `${y.name}-${y.size}`).join(",");
    if (k === P && h.length === S.length)
      return;
    z.current.forEach((y) => {
      y.preview && URL.revokeObjectURL(y.preview);
    });
    const R = e.map((y) => M(y) ? {
      file: y,
      preview: y.type.startsWith("image/") ? URL.createObjectURL(y) : void 0,
      status: "success"
    } : y);
    b(R);
  }, [e]);
  const j = (h) => {
    if (s && h.size > s)
      return `File size exceeds ${Je(s)}`;
    if (r) {
      const S = r.split(",").map((y) => y.trim()), k = h.type, P = h.name.toLowerCase();
      if (!(S.some((y) => y.startsWith(".") ? P.endsWith(y.toLowerCase()) : y.endsWith("/*") ? k.startsWith(y.slice(0, -1)) : k === y || k.match(y.replace("*", ".*"))) || S.some((y) => P.endsWith(y.toLowerCase()))))
        return `File type not allowed. Accepted types: ${r}`;
    }
    return null;
  }, G = (h) => {
    const S = [], k = [];
    if (l && f.length + h.length > l) {
      const R = `Maximum ${l} file(s) allowed`;
      S.push(R), m?.(R);
      return;
    }
    if (h.forEach((R) => {
      const y = j(R);
      if (y)
        S.push(`${R.name}: ${y}`), m?.(y);
      else {
        const Z = {
          file: R,
          preview: R.type.startsWith("image/") ? URL.createObjectURL(R) : void 0,
          status: "success"
        };
        k.push(Z);
      }
    }), S.length > 0 && k.length === 0)
      return;
    const P = n ? [...f, ...k] : k;
    b(P), t?.(P.map((R) => R.file));
  }, H = (h) => {
    if (h.preventDefault(), h.stopPropagation(), _(!1), i) return;
    const S = Array.from(h.dataTransfer.files);
    S.length > 0 && G(S);
  }, O = (h) => {
    h.preventDefault(), h.stopPropagation(), i || _(!0);
  }, I = (h) => {
    h.preventDefault(), h.stopPropagation(), _(!1);
  }, $ = (h) => {
    const S = Array.from(h.target.files || []);
    S.length > 0 && G(S), C.current && (C.current.value = "");
  }, Y = (h) => {
    const S = f[h];
    S.preview && URL.revokeObjectURL(S.preview);
    const k = f.filter((P, R) => R !== h);
    b(k), t?.(k.map((P) => P.file));
  }, E = () => {
    !i && C.current && C.current.click();
  }, w = (h) => h.type.startsWith("image/") ? /* @__PURE__ */ a(Sa, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ a(Ca, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ d("div", { className: o("w-full space-y-4", p), "data-slot": "file-upload", children: [
    /* @__PURE__ */ d(
      "div",
      {
        onClick: E,
        onDrop: H,
        onDragOver: O,
        onDragLeave: I,
        className: o(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          D && !i && "border-primary bg-primary/5",
          !D && !i && "border-input hover:border-primary/50 hover:bg-accent/50",
          i && "cursor-not-allowed opacity-50",
          x
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ a(
            "input",
            {
              ref: C,
              type: "file",
              accept: r,
              multiple: n,
              disabled: i,
              onChange: $,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ d("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ a(Ct, { className: o("h-8 w-8 mb-2", i ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ d("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ a("span", { className: "font-semibold", children: N || "Click to upload" }),
              !i && " or drag and drop"
            ] }),
            /* @__PURE__ */ d("p", { className: "text-xs text-muted-foreground", children: [
              v || r || "Any file",
              n && " (multiple files allowed)",
              s && ` (max ${Je(s)})`
            ] })
          ] })
        ]
      }
    ),
    c && f.length > 0 && /* @__PURE__ */ a("div", { className: "space-y-2", "data-slot": "file-upload-list", children: f.map((h, S) => {
      const { file: k, preview: P, progress: R, status: y, error: Z } = h, me = k.type.startsWith("image/");
      return /* @__PURE__ */ d(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: me && P ? /* @__PURE__ */ a(
              "img",
              {
                src: P,
                alt: k.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ a("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: w(k) }) }),
            /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ a("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: k.name }),
                y === "success" && /* @__PURE__ */ a(ka, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                y === "error" && /* @__PURE__ */ a(zt, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ a("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: Je(k.size) }),
              Z && /* @__PURE__ */ a("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: Z }),
              g && R !== void 0 && /* @__PURE__ */ a("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ a(jr, { value: R, className: "h-1" }) })
            ] }),
            !i && /* @__PURE__ */ d(
              F,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (se) => {
                  se.stopPropagation(), Y(S);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ a(et, { className: "h-4 w-4" }),
                  /* @__PURE__ */ a("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${k.name}-${S}`
      );
    }) })
  ] });
}
function sd({
  control: e,
  name: t,
  label: r,
  error: n,
  required: s = !1,
  wrapperClassName: l,
  ...i
}) {
  const m = te({ control: e, name: t }), c = n || ne(m.errors, `${t}.message`);
  return /* @__PURE__ */ d("div", { className: o("w-full", l), "data-slot": "rhf-file-upload", children: [
    r && /* @__PURE__ */ d(U, { htmlFor: t, className: "mb-2 block", children: [
      r,
      s && /* @__PURE__ */ a("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ a(
      re,
      {
        control: e,
        name: t,
        render: ({ field: { onChange: g, value: p, ...x } }) => {
          const v = p ? (Array.isArray(p) ? p : [p]).filter(Boolean) : [];
          return /* @__PURE__ */ a(
            gn,
            {
              ...i,
              ...x,
              value: v,
              onChange: (N) => {
                i.multiple ? g(N) : g(N.length > 0 ? N[0] : void 0);
              },
              onError: (N) => {
                console.error("File upload error:", N);
              },
              disabled: i.disabled
            }
          );
        }
      }
    ),
    c && /* @__PURE__ */ a("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: c })
  ] });
}
function id({
  control: e,
  register: t,
  name: r,
  label: n,
  placeholder: s = "HH:mm",
  className: l,
  wrapperClassName: i,
  required: m = !1,
  ...c
}) {
  const g = te({ control: e, name: r }), p = ne(g.errors, `${r}.message`);
  return /* @__PURE__ */ a("div", { className: o("w-full", i), children: /* @__PURE__ */ a(
    ue,
    {
      ...c,
      ...t(r),
      type: "time",
      label: n,
      error: p,
      required: m,
      className: l,
      placeholder: s
    }
  ) });
}
function pn({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  confirmText: s = "Confirm",
  cancelText: l = "Cancel",
  onConfirm: i,
  variant: m = "default",
  loading: c = !1
}) {
  const [g, p] = u.useState(!1);
  return /* @__PURE__ */ a(At, { open: e, onOpenChange: t, children: /* @__PURE__ */ d(Lt, { children: [
    /* @__PURE__ */ d(jt, { children: [
      /* @__PURE__ */ a(Ht, { children: r }),
      n && /* @__PURE__ */ a(Ot, { children: n })
    ] }),
    /* @__PURE__ */ d(fr, { children: [
      /* @__PURE__ */ a(
        F,
        {
          variant: "outline",
          onClick: () => t(!1),
          disabled: g || c,
          children: l
        }
      ),
      /* @__PURE__ */ a(F, { variant: m, onClick: async () => {
        p(!0);
        try {
          await i(), t(!1);
        } finally {
          p(!1);
        }
      }, disabled: g || c, children: g || c ? "Loading..." : s })
    ] })
  ] }) });
}
function ld({ className: e, maxWidth: t = "xl", ...r }) {
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
function dd({
  data: e,
  columns: t,
  searchable: r = !1,
  searchPlaceholder: n,
  searchKey: s,
  pagination: l = { pageSize: 10, showPagination: !0 },
  emptyMessage: i,
  className: m,
  enableGlobalFilter: c = !0,
  globalFilterFn: g,
  onRowClick: p,
  rowClassName: x,
  labels: v
}) {
  const {
    previous: N = "Previous",
    next: D = "Next",
    showing: _ = "Showing",
    to: M = "to",
    of: f = "of",
    results: b = "results",
    page: C = "Page"
  } = v || {}, [z, j] = u.useState([]), [G, H] = u.useState([]), [O, I] = u.useState({}), [$, Y] = u.useState(""), E = Xa({
    data: e,
    columns: t,
    getRowId: (w, h) => "id" in w && w.id != null ? String(w.id) : String(h),
    getCoreRowModel: tr(),
    getPaginationRowModel: er(),
    getSortedRowModel: Za(),
    getFilteredRowModel: Qa(),
    onSortingChange: j,
    onColumnFiltersChange: H,
    onColumnVisibilityChange: I,
    onGlobalFilterChange: Y,
    globalFilterFn: g || ((w, h, S) => {
      if (!s)
        return Object.values(w.original).some(
          (P) => String(P).toLowerCase().includes(String(S).toLowerCase())
        );
      const k = w.original[s];
      return String(k).toLowerCase().includes(String(S).toLowerCase());
    }),
    enableGlobalFilter: r && c,
    state: {
      sorting: z,
      columnFilters: G,
      columnVisibility: O,
      globalFilter: r ? $ : void 0
    },
    initialState: {
      pagination: {
        pageSize: l.pageSize || 10
      }
    }
  });
  return /* @__PURE__ */ d("div", { className: o("space-y-4", m), children: [
    r && /* @__PURE__ */ a(
      ue,
      {
        placeholder: n || "Search...",
        value: $ ?? "",
        onChange: (w) => Y(w.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ a("div", { className: "rounded-md border", children: /* @__PURE__ */ d(ln, { children: [
      /* @__PURE__ */ a(dn, { children: E.getHeaderGroups().map((w) => /* @__PURE__ */ a(Ye, { children: w.headers.map((h) => {
        const S = h.column.getCanSort(), k = h.column.getIsSorted();
        return /* @__PURE__ */ a(un, { children: h.isPlaceholder ? null : /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: o(
                S && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: S ? h.column.getToggleSortingHandler() : void 0,
              children: gt(h.column.columnDef.header, h.getContext())
            }
          ),
          S && /* @__PURE__ */ a(
            F,
            {
              variant: "ghost",
              size: "icon",
              className: "h-4 w-4",
              onClick: h.column.getToggleSortingHandler(),
              children: k === "asc" ? /* @__PURE__ */ a(za, { className: "h-3 w-3" }) : k === "desc" ? /* @__PURE__ */ a(Ma, { className: "h-3 w-3" }) : /* @__PURE__ */ a(Da, { className: "h-3 w-3" })
            }
          )
        ] }) }, h.id);
      }) }, w.id)) }),
      /* @__PURE__ */ a(cn, { children: E.getRowModel().rows?.length ? E.getRowModel().rows.map((w) => /* @__PURE__ */ a(
        Ye,
        {
          "data-state": w.getIsSelected() && "selected",
          className: o(
            p && "cursor-pointer",
            x && x(w.original)
          ),
          onClick: () => p?.(w.original),
          children: w.getVisibleCells().map((h) => /* @__PURE__ */ a(ht, { children: gt(h.column.columnDef.cell, h.getContext()) }, h.id))
        },
        w.id
      )) : /* @__PURE__ */ a(Ye, { children: /* @__PURE__ */ a(ht, { colSpan: E.getAllColumns().length, className: "text-center py-8", children: i || "No data available" }) }) })
    ] }) }),
    l.showPagination && E.getPageCount() > 1 && /* @__PURE__ */ d("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ d("div", { className: "text-sm text-muted-foreground", children: [
        _,
        " ",
        E.getState().pagination.pageIndex * E.getState().pagination.pageSize + 1,
        " ",
        M,
        " ",
        Math.min(
          (E.getState().pagination.pageIndex + 1) * E.getState().pagination.pageSize,
          E.getFilteredRowModel().rows.length
        ),
        " ",
        f,
        " ",
        E.getFilteredRowModel().rows.length,
        " ",
        b
      ] }),
      /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ d(
          F,
          {
            variant: "outline",
            size: "sm",
            onClick: () => E.previousPage(),
            disabled: !E.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ a(kt, { className: "h-4 w-4" }),
              N
            ]
          }
        ),
        /* @__PURE__ */ d("div", { className: "text-sm", children: [
          C,
          " ",
          E.getState().pagination.pageIndex + 1,
          " ",
          f,
          " ",
          E.getPageCount()
        ] }),
        /* @__PURE__ */ d(
          F,
          {
            variant: "outline",
            size: "sm",
            onClick: () => E.nextPage(),
            disabled: !E.getCanNextPage(),
            children: [
              D,
              /* @__PURE__ */ a(Ze, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function cd({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  itemName: s,
  onConfirm: l,
  loading: i = !1
}) {
  return /* @__PURE__ */ a(
    pn,
    {
      open: e,
      onOpenChange: t,
      title: r || "Delete Confirmation",
      description: n || (s ? `Are you sure you want to delete "${s}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: l,
      variant: "destructive",
      loading: i
    }
  );
}
function ud({
  className: e,
  label: t,
  labelPosition: r = "center",
  orientation: n = "horizontal",
  ...s
}) {
  return t ? /* @__PURE__ */ d(
    "div",
    {
      className: o(
        "flex items-center",
        n === "horizontal" ? "w-full" : "h-full flex-col",
        e
      ),
      ...s,
      children: [
        r !== "left" && /* @__PURE__ */ a(
          de,
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
          de,
          {
            orientation: n,
            className: o(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ a(de, { orientation: n, className: e, ...s });
}
function md({
  className: e,
  icon: t,
  title: r = "No data",
  description: n,
  action: s,
  children: l,
  ...i
}) {
  return /* @__PURE__ */ d(yr, { className: o(e), ...i, children: [
    /* @__PURE__ */ d(kr, { children: [
      t && /* @__PURE__ */ a(Cr, { variant: "icon", children: t }),
      /* @__PURE__ */ a(zr, { children: r }),
      n && /* @__PURE__ */ a(Mr, { children: n })
    ] }),
    l && /* @__PURE__ */ a(Dr, { children: l }),
    s && /* @__PURE__ */ a(F, { onClick: s.onClick, variant: "outline", children: s.label })
  ] });
}
class fd extends u.Component {
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
        hn,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function hn({ error: e, resetError: t }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ d(_t, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ a(zt, { className: "h-4 w-4" }),
    /* @__PURE__ */ a(Tt, { children: "Something went wrong" }),
    /* @__PURE__ */ a(It, { children: e?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ a(F, { variant: "outline", size: "sm", onClick: t, className: "mt-4", children: "Try again" })
  ] }) });
}
function gd({ className: e, cols: t = 1, gap: r = 4, responsive: n, ...s }) {
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
      ...s
    }
  );
}
function pd({
  className: e,
  loading: t = !1,
  loadingText: r,
  children: n,
  disabled: s,
  ...l
}) {
  return /* @__PURE__ */ d(F, { className: o(e), disabled: s || t, ...l, children: [
    t && /* @__PURE__ */ a(on, { className: "mr-2 h-4 w-4" }),
    t && r || n
  ] });
}
function hd({ className: e, count: t = 3, variant: r = "default", ...n }) {
  return r === "card" ? /* @__PURE__ */ a("div", { className: o("space-y-4", e), ...n, children: Array.from({ length: t }).map((s, l) => /* @__PURE__ */ d("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ a(ee, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ a(ee, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ a(ee, { className: "h-4 w-2/3" })
  ] }, l)) }) : r === "list" ? /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((s, l) => /* @__PURE__ */ a(ee, { className: "h-12 w-full" }, l)) }) : r === "table" ? /* @__PURE__ */ d("div", { className: o("space-y-2", e), ...n, children: [
    /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(ee, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(ee, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(ee, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: t }).map((s, l) => /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(ee, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(ee, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(ee, { className: "h-12 flex-1" })
    ] }, l))
  ] }) : /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((s, l) => /* @__PURE__ */ a(ee, { className: "h-4 w-full" }, l)) });
}
function bd({
  className: e,
  direction: t = "column",
  spacing: r = 2,
  align: n,
  justify: s,
  wrap: l = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        l && "flex-wrap",
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
          "justify-start": s === "start",
          "justify-center": s === "center",
          "justify-end": s === "end",
          "justify-between": s === "between",
          "justify-around": s === "around",
          "justify-evenly": s === "evenly"
        },
        e
      ),
      ...i
    }
  );
}
const bn = {
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
function xd({ className: e, status: t, label: r, ...n }) {
  const s = bn[t];
  return /* @__PURE__ */ a(De, { variant: "outline", className: o(s.className, e), ...n, children: r || s.label });
}
export {
  $n as Accordion,
  jn as AccordionContent,
  An as AccordionItem,
  Ln as AccordionTrigger,
  _t as Alert,
  It as AlertDescription,
  Hn as AlertDialog,
  Kn as AlertDialogAction,
  qn as AlertDialogCancel,
  Bn as AlertDialogContent,
  Wn as AlertDialogDescription,
  Vn as AlertDialogFooter,
  Gn as AlertDialogHeader,
  or as AlertDialogOverlay,
  nr as AlertDialogPortal,
  Un as AlertDialogTitle,
  On as AlertDialogTrigger,
  Tt as AlertTitle,
  Yn as AspectRatio,
  Jn as Avatar,
  Qn as AvatarFallback,
  Xn as AvatarImage,
  he as BREAKPOINTS,
  De as Badge,
  Zn as Breadcrumb,
  oo as BreadcrumbEllipsis,
  to as BreadcrumbItem,
  ao as BreadcrumbLink,
  eo as BreadcrumbList,
  ro as BreadcrumbPage,
  no as BreadcrumbSeparator,
  F as Button,
  so as ButtonGroup,
  lo as ButtonGroupSeparator,
  io as ButtonGroupText,
  Rt as Calendar,
  lr as CalendarDayButton,
  co as Card,
  go as CardAction,
  po as CardContent,
  fo as CardDescription,
  ho as CardFooter,
  uo as CardHeader,
  mo as CardTitle,
  bo as Carousel,
  xo as CarouselContent,
  vo as CarouselItem,
  No as CarouselNext,
  wo as CarouselPrevious,
  yo as ChartContainer,
  Co as ChartLegend,
  zo as ChartLegendContent,
  cr as ChartStyle,
  ko as ChartTooltip,
  So as ChartTooltipContent,
  $t as Checkbox,
  Mo as Collapsible,
  _o as CollapsibleContent,
  Do as CollapsibleTrigger,
  gr as Combobox,
  ot as Command,
  Ro as CommandDialog,
  Vt as CommandEmpty,
  Ut as CommandGroup,
  Bt as CommandInput,
  Wt as CommandItem,
  Gt as CommandList,
  Eo as CommandSeparator,
  Po as CommandShortcut,
  pn as ConfirmDialog,
  ld as Container,
  $o as ContextMenu,
  Wo as ContextMenuCheckboxItem,
  Vo as ContextMenuContent,
  Lo as ContextMenuGroup,
  Uo as ContextMenuItem,
  qo as ContextMenuLabel,
  jo as ContextMenuPortal,
  Oo as ContextMenuRadioGroup,
  Ko as ContextMenuRadioItem,
  Yo as ContextMenuSeparator,
  Jo as ContextMenuShortcut,
  Ho as ContextMenuSub,
  Go as ContextMenuSubContent,
  Bo as ContextMenuSubTrigger,
  Ao as ContextMenuTrigger,
  bt as DATE_FORMATS,
  dd as DataTable,
  br as DatePicker,
  vr as DateRangePicker,
  cd as DeleteConfirmDialog,
  At as Dialog,
  Io as DialogClose,
  Lt as DialogContent,
  Ot as DialogDescription,
  fr as DialogFooter,
  jt as DialogHeader,
  mr as DialogOverlay,
  ur as DialogPortal,
  Ht as DialogTitle,
  To as DialogTrigger,
  ud as Divider,
  Xo as Drawer,
  Zo as DrawerClose,
  es as DrawerContent,
  ns as DrawerDescription,
  as as DrawerFooter,
  ts as DrawerHeader,
  Nr as DrawerOverlay,
  wr as DrawerPortal,
  rs as DrawerTitle,
  Qo as DrawerTrigger,
  os as DropdownMenu,
  us as DropdownMenuCheckboxItem,
  ls as DropdownMenuContent,
  ds as DropdownMenuGroup,
  cs as DropdownMenuItem,
  gs as DropdownMenuLabel,
  ss as DropdownMenuPortal,
  ms as DropdownMenuRadioGroup,
  fs as DropdownMenuRadioItem,
  ps as DropdownMenuSeparator,
  hs as DropdownMenuShortcut,
  bs as DropdownMenuSub,
  vs as DropdownMenuSubContent,
  xs as DropdownMenuSubTrigger,
  is as DropdownMenuTrigger,
  yr as Empty,
  Dr as EmptyContent,
  Mr as EmptyDescription,
  kr as EmptyHeader,
  Cr as EmptyMedia,
  md as EmptyState,
  zr as EmptyTitle,
  fd as ErrorBoundary,
  T as FORM_SIZES,
  ks as Field,
  Ss as FieldContent,
  Ms as FieldDescription,
  _s as FieldError,
  ys as FieldGroup,
  Cs as FieldLabel,
  Ns as FieldLegend,
  Ds as FieldSeparator,
  ws as FieldSet,
  zs as FieldTitle,
  Ts as Form,
  Ps as FormControl,
  Fs as FormDescription,
  Is as FormField,
  Rs as FormItem,
  Es as FormLabel,
  $s as FormMessage,
  gd as Grid,
  As as HoverCard,
  js as HoverCardContent,
  Ls as HoverCardTrigger,
  ue as Input,
  Hs as InputGroup,
  Os as InputGroupAddon,
  Bs as InputGroupButton,
  Vs as InputGroupInput,
  Gs as InputGroupText,
  Us as InputGroupTextarea,
  Ws as InputOTP,
  Ks as InputOTPGroup,
  Ys as InputOTPSeparator,
  qs as InputOTPSlot,
  Qs as Item,
  ri as ItemActions,
  ei as ItemContent,
  ai as ItemDescription,
  oi as ItemFooter,
  Js as ItemGroup,
  ni as ItemHeader,
  Zs as ItemMedia,
  Xs as ItemSeparator,
  ti as ItemTitle,
  si as Kbd,
  ii as KbdGroup,
  U as Label,
  pd as LoadingButton,
  hd as LoadingState,
  li as Menubar,
  pi as MenubarCheckboxItem,
  fi as MenubarContent,
  ci as MenubarGroup,
  gi as MenubarItem,
  bi as MenubarLabel,
  di as MenubarMenu,
  Pr as MenubarPortal,
  ui as MenubarRadioGroup,
  hi as MenubarRadioItem,
  xi as MenubarSeparator,
  vi as MenubarShortcut,
  wi as MenubarSub,
  yi as MenubarSubContent,
  Ni as MenubarSubTrigger,
  mi as MenubarTrigger,
  ki as MultipleCombobox,
  Si as NavigationMenu,
  Di as NavigationMenuContent,
  Ti as NavigationMenuIndicator,
  zi as NavigationMenuItem,
  _i as NavigationMenuLink,
  Ci as NavigationMenuList,
  Mi as NavigationMenuTrigger,
  $r as NavigationMenuViewport,
  Pi as Pagination,
  Oe as Popover,
  Fo as PopoverAnchor,
  Ge as PopoverContent,
  Be as PopoverTrigger,
  jr as Progress,
  We as REGEX,
  rd as RHFCheckboxGroup,
  Kl as RHFCombobox,
  ql as RHFDatePicker,
  Yl as RHFDateRangePicker,
  td as RHFErrorMessage,
  sd as RHFFileUpload,
  Jl as RHFFormattedInput,
  Xl as RHFInput,
  nd as RHFMultiSelect,
  ad as RHFNumberInput,
  Ql as RHFRadioGroup,
  Zl as RHFSwitch,
  ed as RHFTextarea,
  id as RHFTimePicker,
  od as RHFUpload,
  Hr as RadioGroup,
  Fi as RadioGroupItem,
  Li as ResizableHandle,
  Ai as ResizablePanel,
  $i as ResizablePanelGroup,
  Se as ScrollArea,
  pr as ScrollBar,
  Jt as Select,
  Zt as SelectContent,
  Ii as SelectGroup,
  ye as SelectItem,
  Ri as SelectLabel,
  Lr as SelectScrollDownButton,
  Ar as SelectScrollUpButton,
  Ei as SelectSeparator,
  Qt as SelectTrigger,
  Xt as SelectValue,
  de as Separator,
  Or as Sheet,
  Hi as SheetClose,
  Vr as SheetContent,
  Kr as SheetDescription,
  Oi as SheetFooter,
  Ur as SheetHeader,
  Wr as SheetTitle,
  ji as SheetTrigger,
  Gi as Sidebar,
  Xi as SidebarContent,
  Yi as SidebarFooter,
  Qi as SidebarGroup,
  el as SidebarGroupAction,
  tl as SidebarGroupContent,
  Zi as SidebarGroupLabel,
  qi as SidebarHeader,
  Ki as SidebarInput,
  Wi as SidebarInset,
  al as SidebarMenu,
  ol as SidebarMenuAction,
  sl as SidebarMenuBadge,
  nl as SidebarMenuButton,
  rl as SidebarMenuItem,
  il as SidebarMenuSkeleton,
  ll as SidebarMenuSub,
  cl as SidebarMenuSubButton,
  dl as SidebarMenuSubItem,
  Bi as SidebarProvider,
  Ui as SidebarRail,
  Ji as SidebarSeparator,
  Vi as SidebarTrigger,
  ee as Skeleton,
  ul as Slider,
  on as Spinner,
  bd as Stack,
  xd as StatusBadge,
  sn as Switch,
  ln as Table,
  cn as TableBody,
  gl as TableCaption,
  ht as TableCell,
  fl as TableFooter,
  un as TableHead,
  dn as TableHeader,
  Ye as TableRow,
  pl as Tabs,
  xl as TabsContent,
  hl as TabsList,
  bl as TabsTrigger,
  Yt as Textarea,
  pt as TimePicker,
  ml as Toaster,
  vl as Toggle,
  wl as ToggleGroup,
  Nl as ToggleGroupItem,
  Yr as Tooltip,
  Xr as TooltipContent,
  ea as TooltipProvider,
  Jr as TooltipTrigger,
  sr as badgeVariants,
  ir as buttonGroupVariants,
  Me as buttonVariants,
  o as cn,
  nt as formSizeVariants,
  yl as formatCurrency,
  kl as formatDate,
  Je as formatFileSize,
  Sl as formatPhoneNumber,
  ne as get,
  ar as hasValue,
  Fr as navigationMenuTriggerStyle,
  zl as toast,
  aa as toggleVariants,
  Cl as truncate,
  Wl as useAriaLabel,
  Il as useBreakpoint,
  Al as useClickOutside,
  Hl as useCopyToClipboard,
  Pl as useDebounce,
  Fl as useDebouncedCallback,
  Vl as useFocusTrap,
  Ve as useFormField,
  qr as useIsMobile,
  El as useIsTablet,
  Ul as useKeyboardNavigation,
  Ll as useLocalStorage,
  we as useMediaQuery,
  Gl as useMemoizedCallback,
  Bl as usePrevious,
  jl as useSessionStorage,
  Ue as useSidebar,
  $l as useThrottle,
  Ol as useToggle,
  Rl as useWindowSize,
  Ml as validateEmail,
  Dl as validatePhone,
  Tl as validateURL,
  _l as validateVietnamesePhone
};
//# sourceMappingURL=index.mjs.map
