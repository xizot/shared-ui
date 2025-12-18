import { jsx as a, jsxs as l, Fragment as Se } from "react/jsx-runtime";
import * as u from "react";
import { useMemo as Ie } from "react";
import * as O from "@radix-ui/react-accordion";
import { ChevronDownIcon as V, ChevronRight as Te, MoreHorizontal as Me, ChevronLeftIcon as ue, ChevronRightIcon as $, ArrowLeft as Pe, ArrowRight as De, CheckIcon as H, XIcon as me, SearchIcon as Re, CircleIcon as U, MinusIcon as Ae, MoreHorizontalIcon as je, GripVerticalIcon as Ee, ChevronUpIcon as Ge, PanelLeftIcon as Le, Loader2Icon as fe, OctagonXIcon as Fe, TriangleAlertIcon as Oe, InfoIcon as Be, CircleCheckIcon as Ve } from "lucide-react";
import { clsx as $e } from "clsx";
import { twMerge as He } from "tailwind-merge";
import { cva as k } from "class-variance-authority";
import * as P from "@radix-ui/react-alert-dialog";
import { Slot as T } from "@radix-ui/react-slot";
import * as Ke from "@radix-ui/react-aspect-ratio";
import * as re from "@radix-ui/react-avatar";
import * as qe from "@radix-ui/react-separator";
import { getDefaultClassNames as pe, DayPicker as We } from "react-day-picker";
import Ue from "embla-carousel-react";
import * as ne from "recharts";
import * as se from "@radix-ui/react-checkbox";
import * as oe from "@radix-ui/react-collapsible";
import { Command as j } from "cmdk";
import * as v from "@radix-ui/react-dialog";
import * as Xe from "@radix-ui/react-label";
import * as x from "@radix-ui/react-context-menu";
import { Drawer as D } from "vaul";
import * as h from "@radix-ui/react-dropdown-menu";
import { FormProvider as Ye, useFormContext as Je, useFormState as Qe, Controller as Ze } from "react-hook-form";
import * as W from "@radix-ui/react-hover-card";
import { OTPInput as et, OTPInputContext as tt } from "input-otp";
import * as w from "@radix-ui/react-menubar";
import * as R from "@radix-ui/react-navigation-menu";
import * as B from "@radix-ui/react-popover";
import * as de from "@radix-ui/react-progress";
import * as te from "@radix-ui/react-radio-group";
import { Group as at, Panel as rt, Separator as nt } from "react-resizable-panels";
import * as F from "@radix-ui/react-scroll-area";
import * as y from "@radix-ui/react-select";
import * as E from "@radix-ui/react-tooltip";
import * as q from "@radix-ui/react-slider";
import { useTheme as ot } from "next-themes";
import { Toaster as it, toast as M } from "sonner";
import * as le from "@radix-ui/react-switch";
import * as X from "@radix-ui/react-tabs";
import * as st from "@radix-ui/react-toggle";
import * as ge from "@radix-ui/react-toggle-group";
function r(...e) {
  return He($e(e));
}
function ya({
  ...e
}) {
  return /* @__PURE__ */ a(O.Root, { "data-slot": "accordion", ...e });
}
function ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Item,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", e),
      ...t
    }
  );
}
function za({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(O.Header, { className: "flex", children: /* @__PURE__ */ l(
    O.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ a(V, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ca({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    O.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ a("div", { className: r("pt-0 pb-4", e), children: t })
    }
  );
}
const dt = k(
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
), lt = u.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ a(
  "div",
  {
    ref: o,
    role: "alert",
    className: r(dt({ variant: t }), e),
    ...n
  }
));
lt.displayName = "Alert";
const ct = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "h5",
  {
    ref: n,
    className: r("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
ct.displayName = "AlertTitle";
const ut = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: r("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
ut.displayName = "AlertDescription";
const G = k(
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
function K({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? T : "button",
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: r(G({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
function _a({
  ...e
}) {
  return /* @__PURE__ */ a(P.Root, { "data-slot": "alert-dialog", ...e });
}
function Sa({
  ...e
}) {
  return /* @__PURE__ */ a(P.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function mt({
  ...e
}) {
  return /* @__PURE__ */ a(P.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function ft({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ia({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(mt, { children: [
    /* @__PURE__ */ a(ft, {}),
    /* @__PURE__ */ a(
      P.Content,
      {
        "data-slot": "alert-dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function Ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function Pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Title,
    {
      "data-slot": "alert-dialog-title",
      className: r("text-lg font-semibold", e),
      ...t
    }
  );
}
function Da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Description,
    {
      "data-slot": "alert-dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Action,
    {
      className: r(G(), e),
      ...t
    }
  );
}
function Aa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    P.Cancel,
    {
      className: r(G({ variant: "outline" }), e),
      ...t
    }
  );
}
function ja({
  ...e
}) {
  return /* @__PURE__ */ a(Ke.Root, { "data-slot": "aspect-ratio", ...e });
}
function Ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    re.Root,
    {
      "data-slot": "avatar",
      className: r(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function Ga({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    re.Image,
    {
      "data-slot": "avatar-image",
      className: r("aspect-square size-full", e),
      ...t
    }
  );
}
function La({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    re.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: r(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const pt = k(
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
function Fa({
  className: e,
  variant: t,
  asChild: n = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    n ? T : "span",
    {
      "data-slot": "badge",
      className: r(pt({ variant: t }), e),
      ...o
    }
  );
}
function Oa({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Ba({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: r(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function Va({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: r("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function $a({
  asChild: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    e ? T : "a",
    {
      "data-slot": "breadcrumb-link",
      className: r("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function Ha({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: r("text-foreground font-normal", e),
      ...t
    }
  );
}
function Ka({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: r("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ a(Te, {})
    }
  );
}
function qa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Me, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Y({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...o
}) {
  return /* @__PURE__ */ a(
    qe.Root,
    {
      "data-slot": "separator",
      decorative: n,
      orientation: t,
      className: r(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...o
    }
  );
}
const gt = k(
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
function Wa({
  className: e,
  orientation: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "button-group",
      "data-orientation": t,
      className: r(gt({ orientation: t }), e),
      ...n
    }
  );
}
function Ua({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? T : "div",
    {
      className: r(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Xa({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    Y,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: r(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...n
    }
  );
}
function Ya({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: o = "label",
  buttonVariant: i = "ghost",
  formatters: d,
  components: c,
  ...m
}) {
  const s = pe();
  return /* @__PURE__ */ a(
    We,
    {
      showOutsideDays: n,
      className: r(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: o,
      formatters: {
        formatMonthDropdown: (f) => f.toLocaleString("default", { month: "short" }),
        ...d
      },
      classNames: {
        root: r("w-fit", s.root),
        months: r(
          "flex gap-4 flex-col md:flex-row relative",
          s.months
        ),
        month: r("flex flex-col w-full gap-4", s.month),
        nav: r(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          s.nav
        ),
        button_previous: r(
          G({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_previous
        ),
        button_next: r(
          G({ variant: i }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          s.button_next
        ),
        month_caption: r(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          s.month_caption
        ),
        dropdowns: r(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          s.dropdowns
        ),
        dropdown_root: r(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          s.dropdown_root
        ),
        dropdown: r(
          "absolute bg-popover inset-0 opacity-0",
          s.dropdown
        ),
        caption_label: r(
          "select-none font-medium",
          o === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          s.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: r("flex", s.weekdays),
        weekday: r(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          s.weekday
        ),
        week: r("flex w-full mt-2", s.week),
        week_number_header: r(
          "select-none w-(--cell-size)",
          s.week_number_header
        ),
        week_number: r(
          "text-[0.8rem] select-none text-muted-foreground",
          s.week_number
        ),
        day: r(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          m.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          s.day
        ),
        range_start: r(
          "rounded-l-md bg-accent",
          s.range_start
        ),
        range_middle: r("rounded-none", s.range_middle),
        range_end: r("rounded-r-md bg-accent", s.range_end),
        today: r(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          s.today
        ),
        outside: r(
          "text-muted-foreground aria-selected:text-muted-foreground",
          s.outside
        ),
        disabled: r(
          "text-muted-foreground opacity-50",
          s.disabled
        ),
        hidden: r("invisible", s.hidden),
        ...t
      },
      components: {
        Root: ({ className: f, rootRef: b, ...C }) => /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "calendar",
            ref: b,
            className: r(f),
            ...C
          }
        ),
        Chevron: ({ className: f, orientation: b, ...C }) => b === "left" ? /* @__PURE__ */ a(ue, { className: r("size-4", f), ...C }) : b === "right" ? /* @__PURE__ */ a(
          $,
          {
            className: r("size-4", f),
            ...C
          }
        ) : /* @__PURE__ */ a(V, { className: r("size-4", f), ...C }),
        DayButton: bt,
        WeekNumber: ({ children: f, ...b }) => /* @__PURE__ */ a("td", { ...b, children: /* @__PURE__ */ a("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: f }) }),
        ...c
      },
      ...m
    }
  );
}
function bt({
  className: e,
  day: t,
  modifiers: n,
  ...o
}) {
  const i = pe(), d = u.useRef(null);
  return u.useEffect(() => {
    n.focused && d.current?.focus();
  }, [n.focused]), /* @__PURE__ */ a(
    K,
    {
      ref: d,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: r(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        i.day,
        e
      ),
      ...o
    }
  );
}
function Ja({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: r(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Qa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: r(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function Za({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: r("leading-none font-semibold", e),
      ...t
    }
  );
}
function er({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function tr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: r(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        e
      ),
      ...t
    }
  );
}
function ar({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-content",
      className: r("px-6", e),
      ...t
    }
  );
}
function rr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: r("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const be = u.createContext(null);
function J() {
  const e = u.useContext(be);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function nr({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: o,
  className: i,
  children: d,
  ...c
}) {
  const [m, s] = Ue(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [f, b] = u.useState(!1), [C, _] = u.useState(!1), N = u.useCallback((g) => {
    g && (b(g.canScrollPrev()), _(g.canScrollNext()));
  }, []), S = u.useCallback(() => {
    s?.scrollPrev();
  }, [s]), I = u.useCallback(() => {
    s?.scrollNext();
  }, [s]), p = u.useCallback(
    (g) => {
      g.key === "ArrowLeft" ? (g.preventDefault(), S()) : g.key === "ArrowRight" && (g.preventDefault(), I());
    },
    [S, I]
  );
  return u.useEffect(() => {
    !s || !n || n(s);
  }, [s, n]), u.useEffect(() => {
    if (s)
      return N(s), s.on("reInit", N), s.on("select", N), () => {
        s?.off("select", N);
      };
  }, [s, N]), /* @__PURE__ */ a(
    be.Provider,
    {
      value: {
        carouselRef: m,
        api: s,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: S,
        scrollNext: I,
        canScrollPrev: f,
        canScrollNext: C
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: p,
          className: r("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...c,
          children: d
        }
      )
    }
  );
}
function or({ className: e, ...t }) {
  const { carouselRef: n, orientation: o } = J();
  return /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ a(
        "div",
        {
          className: r(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function ir({ className: e, ...t }) {
  const { orientation: n } = J();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: r(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function sr({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollPrev: d, canScrollPrev: c } = J();
  return /* @__PURE__ */ l(
    K,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a(Pe, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function dr({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollNext: d, canScrollNext: c } = J();
  return /* @__PURE__ */ l(
    K,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !c,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a(De, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const vt = { light: "", dark: ".dark" }, ve = u.createContext(null);
function xe() {
  const e = u.useContext(ve);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function lr({
  id: e,
  className: t,
  children: n,
  config: o,
  ...i
}) {
  const d = u.useId(), c = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(ve.Provider, { value: { config: o }, children: /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "chart",
      "data-chart": c,
      className: r(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(xt, { id: c, config: o }),
        /* @__PURE__ */ a(ne.ResponsiveContainer, { children: n })
      ]
    }
  ) });
}
const xt = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(vt).map(
          ([o, i]) => `
${i} [data-chart=${e}] {
${n.map(([d, c]) => {
            const m = c.theme?.[o] || c.color;
            return m ? `  --color-${d}: ${m};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, cr = ne.Tooltip;
function ur({
  active: e,
  payload: t,
  className: n,
  indicator: o = "dot",
  hideLabel: i = !1,
  hideIndicator: d = !1,
  label: c,
  labelFormatter: m,
  labelClassName: s,
  formatter: f,
  color: b,
  nameKey: C,
  labelKey: _
}) {
  const { config: N } = xe(), S = u.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [p] = t, g = `${_ || p?.dataKey || p?.name || "value"}`, z = ae(N, p, g), A = !_ && typeof c == "string" ? N[c]?.label || c : z?.label;
    return m ? /* @__PURE__ */ a("div", { className: r("font-medium", s), children: m(A, t) }) : A ? /* @__PURE__ */ a("div", { className: r("font-medium", s), children: A }) : null;
  }, [
    c,
    m,
    t,
    i,
    s,
    N,
    _
  ]);
  if (!e || !t?.length)
    return null;
  const I = t.length === 1 && o !== "dot";
  return /* @__PURE__ */ l(
    "div",
    {
      className: r(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        I ? null : S,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((p) => p.type !== "none").map((p, g) => {
          const z = `${C || p.name || p.dataKey || "value"}`, A = ae(N, p, z), ie = b || p.payload.fill || p.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: f && p?.value !== void 0 && p.name ? f(p.value, p.name, p, g, p.payload) : /* @__PURE__ */ l(Se, { children: [
                A?.icon ? /* @__PURE__ */ a(A.icon, {}) : !d && /* @__PURE__ */ a(
                  "div",
                  {
                    className: r(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": I && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": ie,
                      "--color-border": ie
                    }
                  }
                ),
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: r(
                      "flex flex-1 justify-between leading-none",
                      I ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ l("div", { className: "grid gap-1.5", children: [
                        I ? S : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: A?.label || p.name })
                      ] }),
                      p.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: p.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            p.dataKey
          );
        }) })
      ]
    }
  );
}
const mr = ne.Legend;
function fr({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: o = "bottom",
  nameKey: i
}) {
  const { config: d } = xe();
  return n?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.filter((c) => c.type !== "none").map((c) => {
        const m = `${i || c.dataKey || "value"}`, s = ae(d, c, m);
        return /* @__PURE__ */ l(
          "div",
          {
            className: r(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              s?.icon && !t ? /* @__PURE__ */ a(s.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: c.color
                  }
                }
              ),
              s?.label
            ]
          },
          c.value
        );
      })
    }
  ) : null;
}
function ae(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = n;
  return n in t && typeof t[n] == "string" ? i = t[n] : o && n in o && typeof o[n] == "string" && (i = o[n]), i in e ? e[i] : e[n];
}
function pr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    se.Root,
    {
      "data-slot": "checkbox",
      className: r(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        se.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ a(H, { className: "size-3.5" })
        }
      )
    }
  );
}
function gr({
  ...e
}) {
  return /* @__PURE__ */ a(oe.Root, { "data-slot": "collapsible", ...e });
}
function br({
  ...e
}) {
  return /* @__PURE__ */ a(
    oe.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...e
    }
  );
}
function vr({
  ...e
}) {
  return /* @__PURE__ */ a(
    oe.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...e
    }
  );
}
function ht({
  ...e
}) {
  return /* @__PURE__ */ a(v.Root, { "data-slot": "dialog", ...e });
}
function xr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function wt({
  ...e
}) {
  return /* @__PURE__ */ a(v.Portal, { "data-slot": "dialog-portal", ...e });
}
function hr({
  ...e
}) {
  return /* @__PURE__ */ a(v.Close, { "data-slot": "dialog-close", ...e });
}
function Nt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function yt({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...o
}) {
  return /* @__PURE__ */ l(wt, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(Nt, {}),
    /* @__PURE__ */ l(
      v.Content,
      {
        "data-slot": "dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...o,
        children: [
          t,
          n && /* @__PURE__ */ l(
            v.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(me, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function kt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function wr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: r(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function zt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Ct({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function L({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Xe.Root,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
function _t({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j,
    {
      "data-slot": "command",
      className: r(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function Nr({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: o,
  showCloseButton: i = !0,
  ...d
}) {
  return /* @__PURE__ */ l(ht, { ...d, children: [
    /* @__PURE__ */ l(kt, { className: "sr-only", children: [
      /* @__PURE__ */ a(zt, { children: e }),
      /* @__PURE__ */ a(Ct, { children: t })
    ] }),
    /* @__PURE__ */ a(
      yt,
      {
        className: r("overflow-hidden p-0", o),
        showCloseButton: i,
        children: /* @__PURE__ */ a(_t, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] });
}
function yr({
  className: e,
  label: t,
  error: n,
  required: o,
  id: i,
  ...d
}) {
  const c = i || u.useId(), m = t || n, s = /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: r(
        "flex h-9 items-center gap-2 border-b px-3",
        n && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ a(Re, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a(
          j.Input,
          {
            id: c,
            "data-slot": "command-input",
            "aria-invalid": !!n,
            className: r(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              n && "focus-visible:ring-destructive",
              e
            ),
            ...d
          }
        )
      ]
    }
  );
  return m ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ l(L, { htmlFor: c, children: [
      t,
      o && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    s,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : s;
}
function kr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.List,
    {
      "data-slot": "command-list",
      className: r(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function zr({
  ...e
}) {
  return /* @__PURE__ */ a(
    j.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function Cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Group,
    {
      "data-slot": "command-group",
      className: r(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function _r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Separator,
    {
      "data-slot": "command-separator",
      className: r("bg-border -mx-1 h-px", e),
      ...t
    }
  );
}
function Sr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Item,
    {
      "data-slot": "command-item",
      className: r(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Ir({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "command-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Tr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Root, { "data-slot": "context-menu", ...e });
}
function Mr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Pr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Group, { "data-slot": "context-menu-group", ...e });
}
function Dr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Rr({
  ...e
}) {
  return /* @__PURE__ */ a(x.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Ar({
  ...e
}) {
  return /* @__PURE__ */ a(
    x.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...e
    }
  );
}
function jr({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    x.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a($, { className: "ml-auto" })
      ]
    }
  );
}
function Er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Gr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(x.Portal, { children: /* @__PURE__ */ a(
    x.Content,
    {
      "data-slot": "context-menu-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function Lr({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    x.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Fr({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    x.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(H, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Or({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    x.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(x.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Br({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    x.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: r(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function Vr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    x.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function $r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Hr({
  ...e
}) {
  return /* @__PURE__ */ a(D.Root, { "data-slot": "drawer", ...e });
}
function Kr({
  ...e
}) {
  return /* @__PURE__ */ a(D.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function St({
  ...e
}) {
  return /* @__PURE__ */ a(D.Portal, { "data-slot": "drawer-portal", ...e });
}
function qr({
  ...e
}) {
  return /* @__PURE__ */ a(D.Close, { "data-slot": "drawer-close", ...e });
}
function It({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Wr({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(St, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(It, {}),
    /* @__PURE__ */ l(
      D.Content,
      {
        "data-slot": "drawer-content",
        className: r(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ a("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function Ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: r(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function Xr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Title,
    {
      "data-slot": "drawer-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Jr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Description,
    {
      "data-slot": "drawer-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Qr({
  ...e
}) {
  return /* @__PURE__ */ a(h.Root, { "data-slot": "dropdown-menu", ...e });
}
function Zr({
  ...e
}) {
  return /* @__PURE__ */ a(h.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function en({
  ...e
}) {
  return /* @__PURE__ */ a(
    h.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function tn({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ a(h.Portal, { children: /* @__PURE__ */ a(
    h.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function an({
  ...e
}) {
  return /* @__PURE__ */ a(h.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function rn({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    h.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function nn({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    h.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(H, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function on({
  ...e
}) {
  return /* @__PURE__ */ a(
    h.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function sn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    h.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(h.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function dn({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    h.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function ln({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function un({
  ...e
}) {
  return /* @__PURE__ */ a(h.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function mn({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    h.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a($, { className: "ml-auto size-4" })
      ]
    }
  );
}
function fn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    h.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function pn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: r(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: r(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        e
      ),
      ...t
    }
  );
}
const Tt = k(
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
function bn({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: r(Tt({ variant: t, className: e })),
      ...n
    }
  );
}
function vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: r("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function xn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: r(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function hn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: r(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function wn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: r(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function Nn({
  className: e,
  variant: t = "legend",
  ...n
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: r(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...n
    }
  );
}
function yn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: r(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const Mt = k(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
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
  }
);
function kn({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": t,
      className: r(Mt({ orientation: t }), e),
      ...n
    }
  );
}
function zn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: r(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      ...t
    }
  );
}
function Cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "field-label",
      className: r(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function Sn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: r(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function In({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: r(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...n,
      children: [
        /* @__PURE__ */ a(Y, { className: "absolute inset-0 top-1/2" }),
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
function Tn({
  className: e,
  children: t,
  errors: n,
  ...o
}) {
  const i = Ie(() => {
    if (t)
      return t;
    if (!n?.length)
      return null;
    const d = [
      ...new Map(n.map((c) => [c?.message, c])).values()
    ];
    return d?.length == 1 ? d[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: d.map(
      (c, m) => c?.message && /* @__PURE__ */ a("li", { children: c.message }, m)
    ) });
  }, [t, n]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: r("text-destructive text-sm font-normal", e),
      ...o,
      children: i
    }
  ) : null;
}
const Mn = Ye, he = u.createContext(
  {}
), Pn = ({
  ...e
}) => /* @__PURE__ */ a(he.Provider, { value: { name: e.name }, children: /* @__PURE__ */ a(Ze, { ...e }) }), Q = () => {
  const e = u.useContext(he), t = u.useContext(we), { getFieldState: n } = Je(), o = Qe({ name: e.name }), i = n(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: d } = t;
  return {
    id: d,
    name: e.name,
    formItemId: `${d}-form-item`,
    formDescriptionId: `${d}-form-item-description`,
    formMessageId: `${d}-form-item-message`,
    ...i
  };
}, we = u.createContext(
  {}
);
function Dn({ className: e, ...t }) {
  const n = u.useId();
  return /* @__PURE__ */ a(we.Provider, { value: { id: n }, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "form-item",
      className: r("grid gap-2", e),
      ...t
    }
  ) });
}
function Rn({
  className: e,
  ...t
}) {
  const { error: n, formItemId: o } = Q();
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "form-label",
      "data-error": !!n,
      className: r("data-[error=true]:text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
}
function An({ ...e }) {
  const { error: t, formItemId: n, formDescriptionId: o, formMessageId: i } = Q();
  return /* @__PURE__ */ a(
    T,
    {
      "data-slot": "form-control",
      id: n,
      "aria-describedby": t ? `${o} ${i}` : `${o}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function jn({ className: e, ...t }) {
  const { formDescriptionId: n } = Q();
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-description",
      id: n,
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function En({ className: e, ...t }) {
  const { error: n, formMessageId: o } = Q(), i = n ? String(n?.message ?? "") : t.children;
  return i ? /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "form-message",
      id: o,
      className: r("text-destructive text-sm", e),
      ...t,
      children: i
    }
  ) : null;
}
function Gn({
  ...e
}) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "hover-card", ...e });
}
function Ln({
  ...e
}) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Fn({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ a(W.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function Ne({
  className: e,
  type: t,
  label: n,
  error: o,
  required: i,
  id: d,
  ...c
}) {
  const m = d || u.useId(), s = n || o, f = /* @__PURE__ */ a(
    "input",
    {
      type: t,
      id: m,
      "data-slot": "input",
      "aria-invalid": !!o,
      className: r(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        o ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...c
    }
  );
  return s ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    n && /* @__PURE__ */ l(L, { htmlFor: m, children: [
      n,
      i && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    f,
    o && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: o })
  ] }) : f;
}
function Pt({
  className: e,
  label: t,
  error: n,
  required: o,
  id: i,
  ...d
}) {
  const c = i || u.useId(), m = t || n, s = /* @__PURE__ */ a(
    "textarea",
    {
      id: c,
      "data-slot": "textarea",
      "aria-invalid": !!n,
      className: r(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...d
    }
  );
  return m ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ l(L, { htmlFor: c, children: [
      t,
      o && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    s,
    n && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : s;
}
function On({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: r(
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
const Dt = k(
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
function Bn({
  className: e,
  align: t = "inline-start",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t,
      className: r(Dt({ align: t }), e),
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...n
    }
  );
}
const Rt = k(
  "text-sm shadow-none flex gap-2 items-center",
  {
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
  }
);
function Vn({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: o = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    K,
    {
      type: t,
      "data-size": o,
      variant: n,
      className: r(Rt({ size: o }), e),
      ...i
    }
  );
}
function $n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: r(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ne,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function Kn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Pt,
    {
      "data-slot": "input-group-control",
      className: r(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function qn({
  className: e,
  containerClassName: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    et,
    {
      "data-slot": "input-otp",
      containerClassName: r(
        "flex items-center gap-2 has-disabled:opacity-50",
        t
      ),
      className: r("disabled:cursor-not-allowed", e),
      ...n
    }
  );
}
function Wn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-otp-group",
      className: r("flex items-center", e),
      ...t
    }
  );
}
function Un({
  index: e,
  className: t,
  ...n
}) {
  const o = u.useContext(tt), { char: i, hasFakeCaret: d, isActive: c } = o?.slots[e] ?? {};
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": c,
      className: r(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...n,
      children: [
        i,
        d && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function Xn({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(Ae, {}) });
}
function Yn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: r("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function Jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: r("my-0", e),
      ...t
    }
  );
}
const At = k(
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
function Qn({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? T : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": n,
      className: r(At({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
const jt = k(
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
function Zn({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: r(jt({ variant: t, className: e })),
      ...n
    }
  );
}
function eo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: r(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      ...t
    }
  );
}
function to({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: r(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      ...t
    }
  );
}
function ao({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: r(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function ro({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-actions",
      className: r("flex items-center gap-2", e),
      ...t
    }
  );
}
function no({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function oo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: r(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      ...t
    }
  );
}
function io({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: r(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function so({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: r("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function lo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.Root,
    {
      "data-slot": "menubar",
      className: r(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function co({
  ...e
}) {
  return /* @__PURE__ */ a(w.Menu, { "data-slot": "menubar-menu", ...e });
}
function uo({
  ...e
}) {
  return /* @__PURE__ */ a(w.Group, { "data-slot": "menubar-group", ...e });
}
function Et({
  ...e
}) {
  return /* @__PURE__ */ a(w.Portal, { "data-slot": "menubar-portal", ...e });
}
function mo({
  ...e
}) {
  return /* @__PURE__ */ a(w.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function fo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function po({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: o = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Et, { children: /* @__PURE__ */ a(
    w.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function go({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    w.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function bo({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    w.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(w.ItemIndicator, { children: /* @__PURE__ */ a(H, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function vo({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    w.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(w.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function xo({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    w.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.Separator,
    {
      "data-slot": "menubar-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function wo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function No({
  ...e
}) {
  return /* @__PURE__ */ a(w.Sub, { "data-slot": "menubar-sub", ...e });
}
function yo({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ l(
    w.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a($, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    w.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function zo({
  className: e,
  children: t,
  viewport: n = !0,
  ...o
}) {
  return /* @__PURE__ */ l(
    R.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: r(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(Lt, {})
      ]
    }
  );
}
function Co({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.List,
    {
      "data-slot": "navigation-menu-list",
      className: r(
        "group flex flex-1 list-none items-center justify-center gap-1",
        e
      ),
      ...t
    }
  );
}
function _o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Item,
    {
      "data-slot": "navigation-menu-item",
      className: r("relative", e),
      ...t
    }
  );
}
const Gt = k(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function So({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    R.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: r(Gt(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          V,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Io({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Content,
    {
      "data-slot": "navigation-menu-content",
      className: r(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function Lt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ a(
        R.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: r(
            "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
            e
          ),
          ...t
        }
      )
    }
  );
}
function To({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Link,
    {
      "data-slot": "navigation-menu-link",
      className: r(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Mo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: r(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: r("mx-auto flex w-full justify-center", e),
      ...t
    }
  );
}
function Do({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: r("flex flex-row items-center gap-1", e),
      ...t
    }
  );
}
function Ro({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function ye({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: r(
        G({
          variant: t ? "outline" : "ghost",
          size: n
        }),
        e
      ),
      ...o
    }
  );
}
function Ao({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    ye,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ue, {}),
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function jo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    ye,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: r("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: [
        /* @__PURE__ */ a("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ a($, {})
      ]
    }
  );
}
function Eo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: r("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(je, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function Go({
  ...e
}) {
  return /* @__PURE__ */ a(B.Root, { "data-slot": "popover", ...e });
}
function Lo({
  ...e
}) {
  return /* @__PURE__ */ a(B.Trigger, { "data-slot": "popover-trigger", ...e });
}
function Fo({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...o
}) {
  return /* @__PURE__ */ a(B.Portal, { children: /* @__PURE__ */ a(
    B.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function Oo({
  ...e
}) {
  return /* @__PURE__ */ a(B.Anchor, { "data-slot": "popover-anchor", ...e });
}
function Bo({
  className: e,
  value: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    de.Root,
    {
      "data-slot": "progress",
      className: r(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(
        de.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function Vo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Root,
    {
      "data-slot": "radio-group",
      className: r("grid gap-3", e),
      ...t
    }
  );
}
function $o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Item,
    {
      "data-slot": "radio-group-item",
      className: r(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        te.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ a(U, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function Ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    at,
    {
      "data-slot": "resizable-panel-group",
      className: r(
        "flex h-full w-full data-[orientation=vertical]:flex-col",
        e
      ),
      ...t
    }
  );
}
function Ko({
  ...e
}) {
  return /* @__PURE__ */ a(rt, { "data-slot": "resizable-panel", ...e });
}
function qo({
  withHandle: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    nt,
    {
      "data-slot": "resizable-handle",
      className: r(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...n,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(Ee, { className: "size-2.5" }) })
    }
  );
}
function Wo({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    F.Root,
    {
      "data-slot": "scroll-area",
      className: r("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ a(
          F.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ a(Ft, {}),
        /* @__PURE__ */ a(F.Corner, {})
      ]
    }
  );
}
function Ft({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ a(
    F.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: r(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(
        F.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Uo({
  ...e
}) {
  return /* @__PURE__ */ a(y.Root, { "data-slot": "select", ...e });
}
function Xo({
  ...e
}) {
  return /* @__PURE__ */ a(y.Group, { "data-slot": "select-group", ...e });
}
function Yo({
  ...e
}) {
  return /* @__PURE__ */ a(y.Value, { "data-slot": "select-value", ...e });
}
function Jo({
  className: e,
  size: t = "default",
  children: n,
  label: o,
  error: i,
  required: d,
  id: c,
  ...m
}) {
  const s = c || u.useId(), f = o || i, b = /* @__PURE__ */ l(
    y.Trigger,
    {
      id: s,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!i,
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...m,
      children: [
        n,
        /* @__PURE__ */ a(y.Icon, { asChild: !0, children: /* @__PURE__ */ a(V, { className: "size-4 opacity-50" }) })
      ]
    }
  );
  return f ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ l(L, { htmlFor: s, children: [
      o,
      d && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    b,
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: i })
  ] }) : b;
}
function Qo({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: o = "center",
  ...i
}) {
  return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ l(
    y.Content,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: o,
      ...i,
      children: [
        /* @__PURE__ */ a(Ot, {}),
        /* @__PURE__ */ a(
          y.Viewport,
          {
            className: r(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(Bt, {})
      ]
    }
  ) });
}
function Zo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Label,
    {
      "data-slot": "select-label",
      className: r("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...t
    }
  );
}
function ei({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    y.Item,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(y.ItemIndicator, { children: /* @__PURE__ */ a(H, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(y.ItemText, { children: t })
      ]
    }
  );
}
function ti({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.Separator,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(Ge, { className: "size-4" })
    }
  );
}
function Bt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    y.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(V, { className: "size-4" })
    }
  );
}
function Vt({ ...e }) {
  return /* @__PURE__ */ a(v.Root, { "data-slot": "sheet", ...e });
}
function ai({
  ...e
}) {
  return /* @__PURE__ */ a(v.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function ri({
  ...e
}) {
  return /* @__PURE__ */ a(v.Close, { "data-slot": "sheet-close", ...e });
}
function $t({
  ...e
}) {
  return /* @__PURE__ */ a(v.Portal, { "data-slot": "sheet-portal", ...e });
}
function Ht({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: r(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Kt({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ l($t, { children: [
    /* @__PURE__ */ a(Ht, {}),
    /* @__PURE__ */ l(
      v.Content,
      {
        "data-slot": "sheet-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          n === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          n === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          n === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...o,
        children: [
          t,
          /* @__PURE__ */ l(v.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(me, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function qt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: r("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Title,
    {
      "data-slot": "sheet-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ut({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    v.Description,
    {
      "data-slot": "sheet-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ee = 768;
function Xt() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${ee - 1}px)`), o = () => {
      t(window.innerWidth < ee);
    };
    return n.addEventListener("change", o), t(window.innerWidth < ee), () => n.removeEventListener("change", o);
  }, []), !!e;
}
function ce({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: r("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function ke({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    E.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Yt({
  ...e
}) {
  return /* @__PURE__ */ a(ke, { children: /* @__PURE__ */ a(E.Root, { "data-slot": "tooltip", ...e }) });
}
function Jt({
  ...e
}) {
  return /* @__PURE__ */ a(E.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Qt({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ a(E.Portal, { children: /* @__PURE__ */ l(
    E.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: r(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        n,
        /* @__PURE__ */ a(E.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Zt = "sidebar_state", ea = 3600 * 24 * 7, ta = "16rem", aa = "18rem", ra = "3rem", na = "b", ze = u.createContext(null);
function Z() {
  const e = u.useContext(ze);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function oi({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: d,
  ...c
}) {
  const m = Xt(), [s, f] = u.useState(!1), [b, C] = u.useState(e), _ = t ?? b, N = u.useCallback(
    (g) => {
      const z = typeof g == "function" ? g(_) : g;
      n ? n(z) : C(z), document.cookie = `${Zt}=${z}; path=/; max-age=${ea}`;
    },
    [n, _]
  ), S = u.useCallback(() => m ? f((g) => !g) : N((g) => !g), [m, N, f]);
  u.useEffect(() => {
    const g = (z) => {
      z.key === na && (z.metaKey || z.ctrlKey) && (z.preventDefault(), S());
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [S]);
  const I = _ ? "expanded" : "collapsed", p = u.useMemo(
    () => ({
      state: I,
      open: _,
      setOpen: N,
      isMobile: m,
      openMobile: s,
      setOpenMobile: f,
      toggleSidebar: S
    }),
    [I, _, N, m, s, f, S]
  );
  return /* @__PURE__ */ a(ze.Provider, { value: p, children: /* @__PURE__ */ a(ke, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": ta,
        "--sidebar-width-icon": ra,
        ...i
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...c,
      children: d
    }
  ) }) });
}
function ii({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...d
}) {
  const { isMobile: c, state: m, openMobile: s, setOpenMobile: f } = Z();
  return n === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...d,
      children: i
    }
  ) : c ? /* @__PURE__ */ a(Vt, { open: s, onOpenChange: f, ...d, children: /* @__PURE__ */ l(
    Kt,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": aa
      },
      side: e,
      children: [
        /* @__PURE__ */ l(qt, { className: "sr-only", children: [
          /* @__PURE__ */ a(Wt, { children: "Sidebar" }),
          /* @__PURE__ */ a(Ut, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ l(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": m,
      "data-collapsible": m === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: r(
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
            className: r(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              o
            ),
            ...d,
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
function si({
  className: e,
  onClick: t,
  ...n
}) {
  const { toggleSidebar: o } = Z();
  return /* @__PURE__ */ l(
    K,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("size-7", e),
      onClick: (i) => {
        t?.(i), o();
      },
      ...n,
      children: [
        /* @__PURE__ */ a(Le, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function di({ className: e, ...t }) {
  const { toggleSidebar: n } = Z();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: n,
      title: "Toggle Sidebar",
      className: r(
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
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Ne,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ui({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Y,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function bi({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? T : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...n
    }
  );
}
function vi({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? T : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...n
    }
  );
}
function xi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", e),
      ...t
    }
  );
}
function hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", e),
      ...t
    }
  );
}
const oa = k(
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
function Ni({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: d,
  ...c
}) {
  const m = e ? T : "button", { isMobile: s, state: f } = Z(), b = /* @__PURE__ */ a(
    m,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: r(oa({ variant: n, size: o }), d),
      ...c
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ l(Yt, { children: [
    /* @__PURE__ */ a(Jt, { asChild: !0, children: b }),
    /* @__PURE__ */ a(
      Qt,
      {
        side: "right",
        align: "center",
        hidden: f !== "collapsed" || s,
        ...i
      }
    )
  ] })) : b;
}
function yi({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? T : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        e
      ),
      ...o
    }
  );
}
function ki({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: r(
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
function zi({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const o = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ a(
          ce,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ a(
          ce,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
}
function Ci({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function _i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function Si({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? T : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        o
      ),
      ...i
    }
  );
}
function Ii({
  className: e,
  defaultValue: t,
  value: n,
  min: o = 0,
  max: i = 100,
  ...d
}) {
  const c = u.useMemo(
    () => Array.isArray(n) ? n : Array.isArray(t) ? t : [o, i],
    [n, t, o, i]
  );
  return /* @__PURE__ */ l(
    q.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: n,
      min: o,
      max: i,
      className: r(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ a(
          q.Track,
          {
            "data-slot": "slider-track",
            className: r(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              q.Range,
              {
                "data-slot": "slider-range",
                className: r(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: c.length }, (m, s) => /* @__PURE__ */ a(
          q.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          s
        ))
      ]
    }
  );
}
const Ti = ({ ...e }) => {
  const { theme: t = "system" } = ot();
  return /* @__PURE__ */ a(
    it,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(Ve, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(Be, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(Oe, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(Fe, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(fe, { className: "size-5 animate-spin text-foreground" })
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
function Mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    fe,
    {
      role: "status",
      "aria-label": "Loading",
      className: r("size-4 animate-spin", e),
      ...t
    }
  );
}
function Pi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    le.Root,
    {
      "data-slot": "switch",
      className: r(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        le.Thumb,
        {
          "data-slot": "switch-thumb",
          className: r(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ a(
        "table",
        {
          "data-slot": "table",
          className: r("w-full caption-bottom text-sm", e),
          ...t
        }
      )
    }
  );
}
function Ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "table-header",
      className: r("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Ai({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: r("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function ji({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: r(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        e
      ),
      ...t
    }
  );
}
function Ei({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: r(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function Gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: r(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: r(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Fi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: r("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Oi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Root,
    {
      "data-slot": "tabs",
      className: r("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Bi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.List,
    {
      "data-slot": "tabs-list",
      className: r(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Vi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function $i({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    X.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
const Ce = k(
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
function Hi({
  className: e,
  variant: t,
  size: n,
  ...o
}) {
  return /* @__PURE__ */ a(
    st.Root,
    {
      "data-slot": "toggle",
      className: r(Ce({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
const _e = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Ki({
  className: e,
  variant: t,
  size: n,
  spacing: o = 0,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ a(
    ge.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": n,
      "data-spacing": o,
      style: { "--gap": o },
      className: r(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...d,
      children: /* @__PURE__ */ a(_e.Provider, { value: { variant: t, size: n, spacing: o }, children: i })
    }
  );
}
function qi({
  className: e,
  children: t,
  variant: n,
  size: o,
  ...i
}) {
  const d = u.useContext(_e);
  return /* @__PURE__ */ a(
    ge.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || n,
      "data-size": d.size || o,
      "data-spacing": d.spacing,
      className: r(
        Ce({
          variant: d.variant || n,
          size: d.size || o
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
const Wi = {
  /**
   * Show a success toast
   */
  success: (e, t) => M.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => M.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => M.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => M.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => M(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => M.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, n) => M.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: n?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    M.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    M.dismiss();
  }
};
export {
  ya as Accordion,
  Ca as AccordionContent,
  ka as AccordionItem,
  za as AccordionTrigger,
  lt as Alert,
  ut as AlertDescription,
  _a as AlertDialog,
  Ra as AlertDialogAction,
  Aa as AlertDialogCancel,
  Ia as AlertDialogContent,
  Da as AlertDialogDescription,
  Ma as AlertDialogFooter,
  Ta as AlertDialogHeader,
  ft as AlertDialogOverlay,
  mt as AlertDialogPortal,
  Pa as AlertDialogTitle,
  Sa as AlertDialogTrigger,
  ct as AlertTitle,
  ja as AspectRatio,
  Ea as Avatar,
  La as AvatarFallback,
  Ga as AvatarImage,
  Fa as Badge,
  Oa as Breadcrumb,
  qa as BreadcrumbEllipsis,
  Va as BreadcrumbItem,
  $a as BreadcrumbLink,
  Ba as BreadcrumbList,
  Ha as BreadcrumbPage,
  Ka as BreadcrumbSeparator,
  K as Button,
  Wa as ButtonGroup,
  Xa as ButtonGroupSeparator,
  Ua as ButtonGroupText,
  Ya as Calendar,
  bt as CalendarDayButton,
  Ja as Card,
  tr as CardAction,
  ar as CardContent,
  er as CardDescription,
  rr as CardFooter,
  Qa as CardHeader,
  Za as CardTitle,
  nr as Carousel,
  or as CarouselContent,
  ir as CarouselItem,
  dr as CarouselNext,
  sr as CarouselPrevious,
  lr as ChartContainer,
  mr as ChartLegend,
  fr as ChartLegendContent,
  xt as ChartStyle,
  cr as ChartTooltip,
  ur as ChartTooltipContent,
  pr as Checkbox,
  gr as Collapsible,
  vr as CollapsibleContent,
  br as CollapsibleTrigger,
  _t as Command,
  Nr as CommandDialog,
  zr as CommandEmpty,
  Cr as CommandGroup,
  yr as CommandInput,
  Sr as CommandItem,
  kr as CommandList,
  _r as CommandSeparator,
  Ir as CommandShortcut,
  Tr as ContextMenu,
  Fr as ContextMenuCheckboxItem,
  Gr as ContextMenuContent,
  Pr as ContextMenuGroup,
  Lr as ContextMenuItem,
  Br as ContextMenuLabel,
  Dr as ContextMenuPortal,
  Ar as ContextMenuRadioGroup,
  Or as ContextMenuRadioItem,
  Vr as ContextMenuSeparator,
  $r as ContextMenuShortcut,
  Rr as ContextMenuSub,
  Er as ContextMenuSubContent,
  jr as ContextMenuSubTrigger,
  Mr as ContextMenuTrigger,
  ht as Dialog,
  hr as DialogClose,
  yt as DialogContent,
  Ct as DialogDescription,
  wr as DialogFooter,
  kt as DialogHeader,
  Nt as DialogOverlay,
  wt as DialogPortal,
  zt as DialogTitle,
  xr as DialogTrigger,
  Hr as Drawer,
  qr as DrawerClose,
  Wr as DrawerContent,
  Jr as DrawerDescription,
  Xr as DrawerFooter,
  Ur as DrawerHeader,
  It as DrawerOverlay,
  St as DrawerPortal,
  Yr as DrawerTitle,
  Kr as DrawerTrigger,
  Qr as DropdownMenu,
  nn as DropdownMenuCheckboxItem,
  tn as DropdownMenuContent,
  an as DropdownMenuGroup,
  rn as DropdownMenuItem,
  dn as DropdownMenuLabel,
  Zr as DropdownMenuPortal,
  on as DropdownMenuRadioGroup,
  sn as DropdownMenuRadioItem,
  ln as DropdownMenuSeparator,
  cn as DropdownMenuShortcut,
  un as DropdownMenuSub,
  fn as DropdownMenuSubContent,
  mn as DropdownMenuSubTrigger,
  en as DropdownMenuTrigger,
  pn as Empty,
  hn as EmptyContent,
  xn as EmptyDescription,
  gn as EmptyHeader,
  bn as EmptyMedia,
  vn as EmptyTitle,
  kn as Field,
  zn as FieldContent,
  Sn as FieldDescription,
  Tn as FieldError,
  yn as FieldGroup,
  Cn as FieldLabel,
  Nn as FieldLegend,
  In as FieldSeparator,
  wn as FieldSet,
  _n as FieldTitle,
  Mn as Form,
  An as FormControl,
  jn as FormDescription,
  Pn as FormField,
  Dn as FormItem,
  Rn as FormLabel,
  En as FormMessage,
  Gn as HoverCard,
  Fn as HoverCardContent,
  Ln as HoverCardTrigger,
  Ne as Input,
  On as InputGroup,
  Bn as InputGroupAddon,
  Vn as InputGroupButton,
  Hn as InputGroupInput,
  $n as InputGroupText,
  Kn as InputGroupTextarea,
  qn as InputOTP,
  Wn as InputOTPGroup,
  Xn as InputOTPSeparator,
  Un as InputOTPSlot,
  Qn as Item,
  ro as ItemActions,
  eo as ItemContent,
  ao as ItemDescription,
  oo as ItemFooter,
  Yn as ItemGroup,
  no as ItemHeader,
  Zn as ItemMedia,
  Jn as ItemSeparator,
  to as ItemTitle,
  io as Kbd,
  so as KbdGroup,
  L as Label,
  lo as Menubar,
  bo as MenubarCheckboxItem,
  po as MenubarContent,
  uo as MenubarGroup,
  go as MenubarItem,
  xo as MenubarLabel,
  co as MenubarMenu,
  Et as MenubarPortal,
  mo as MenubarRadioGroup,
  vo as MenubarRadioItem,
  ho as MenubarSeparator,
  wo as MenubarShortcut,
  No as MenubarSub,
  ko as MenubarSubContent,
  yo as MenubarSubTrigger,
  fo as MenubarTrigger,
  zo as NavigationMenu,
  Io as NavigationMenuContent,
  Mo as NavigationMenuIndicator,
  _o as NavigationMenuItem,
  To as NavigationMenuLink,
  Co as NavigationMenuList,
  So as NavigationMenuTrigger,
  Lt as NavigationMenuViewport,
  Po as Pagination,
  Do as PaginationContent,
  Eo as PaginationEllipsis,
  Ro as PaginationItem,
  ye as PaginationLink,
  jo as PaginationNext,
  Ao as PaginationPrevious,
  Go as Popover,
  Oo as PopoverAnchor,
  Fo as PopoverContent,
  Lo as PopoverTrigger,
  Bo as Progress,
  Vo as RadioGroup,
  $o as RadioGroupItem,
  qo as ResizableHandle,
  Ko as ResizablePanel,
  Ho as ResizablePanelGroup,
  Wo as ScrollArea,
  Ft as ScrollBar,
  Uo as Select,
  Qo as SelectContent,
  Xo as SelectGroup,
  ei as SelectItem,
  Zo as SelectLabel,
  Bt as SelectScrollDownButton,
  Ot as SelectScrollUpButton,
  ti as SelectSeparator,
  Jo as SelectTrigger,
  Yo as SelectValue,
  Y as Separator,
  Vt as Sheet,
  ri as SheetClose,
  Kt as SheetContent,
  Ut as SheetDescription,
  ni as SheetFooter,
  qt as SheetHeader,
  Wt as SheetTitle,
  ai as SheetTrigger,
  ii as Sidebar,
  pi as SidebarContent,
  mi as SidebarFooter,
  gi as SidebarGroup,
  vi as SidebarGroupAction,
  xi as SidebarGroupContent,
  bi as SidebarGroupLabel,
  ui as SidebarHeader,
  ci as SidebarInput,
  li as SidebarInset,
  hi as SidebarMenu,
  yi as SidebarMenuAction,
  ki as SidebarMenuBadge,
  Ni as SidebarMenuButton,
  wi as SidebarMenuItem,
  zi as SidebarMenuSkeleton,
  Ci as SidebarMenuSub,
  Si as SidebarMenuSubButton,
  _i as SidebarMenuSubItem,
  oi as SidebarProvider,
  di as SidebarRail,
  fi as SidebarSeparator,
  si as SidebarTrigger,
  ce as Skeleton,
  Ii as Slider,
  Mi as Spinner,
  Pi as Switch,
  Di as Table,
  Ai as TableBody,
  Fi as TableCaption,
  Li as TableCell,
  ji as TableFooter,
  Gi as TableHead,
  Ri as TableHeader,
  Ei as TableRow,
  Oi as Tabs,
  $i as TabsContent,
  Bi as TabsList,
  Vi as TabsTrigger,
  Pt as Textarea,
  Ti as Toaster,
  Hi as Toggle,
  Ki as ToggleGroup,
  qi as ToggleGroupItem,
  Yt as Tooltip,
  Qt as TooltipContent,
  ke as TooltipProvider,
  Jt as TooltipTrigger,
  pt as badgeVariants,
  gt as buttonGroupVariants,
  G as buttonVariants,
  r as cn,
  Gt as navigationMenuTriggerStyle,
  Wi as toast,
  Ce as toggleVariants,
  Q as useFormField,
  Xt as useIsMobile,
  Z as useSidebar
};
//# sourceMappingURL=index.mjs.map
