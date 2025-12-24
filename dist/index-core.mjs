import { jsx as r, jsxs as x } from "react/jsx-runtime";
import * as c from "react";
import { cva as u } from "class-variance-authority";
import { c as l, S as i } from "./input-D0NE8tsx.js";
import { B as ut, F as ft, I as gt, L as xt, b as bt, f as pt, g as ht, h as wt } from "./input-D0NE8tsx.js";
import * as m from "@radix-ui/react-avatar";
import { B as vt, D as yt, T as kt, b as zt, a as At, c as Tt, f as Ct, d as _t, t as Et } from "./textarea-BPwkqiSr.js";
import { S as Rt } from "./skeleton-D0UiYAUF.js";
import { Loader2Icon as b } from "lucide-react";
import { toast as n } from "sonner";
const p = u(
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
), h = c.forwardRef(({ className: e, variant: t, ...d }, a) => /* @__PURE__ */ r("div", { ref: a, role: "alert", className: l(p({ variant: t }), e), ...d }));
h.displayName = "Alert";
const w = c.forwardRef(
  ({ className: e, ...t }, d) => /* @__PURE__ */ r(
    "h5",
    {
      ref: d,
      className: l("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }
  )
);
w.displayName = "AlertTitle";
const N = c.forwardRef(({ className: e, ...t }, d) => /* @__PURE__ */ r("div", { ref: d, className: l("text-sm [&_p]:leading-relaxed", e), ...t }));
N.displayName = "AlertDescription";
function C({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    m.Root,
    {
      "data-slot": "avatar",
      className: l("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function _({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    m.Image,
    {
      "data-slot": "avatar-image",
      className: l("aspect-square size-full", e),
      ...t
    }
  );
}
function E({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    m.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: l("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
function S({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card",
      className: l(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function R({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-header",
      className: l(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function F({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-title",
      className: l("leading-none font-semibold", e),
      ...t
    }
  );
}
function j({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-description",
      className: l("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function V({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-action",
      className: l("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function D({ className: e, ...t }) {
  return /* @__PURE__ */ r("div", { "data-slot": "card-content", className: l("px-6", e), ...t });
}
function I({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-footer",
      className: l("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function $({ className: e, maxWidth: t = "xl", ...d }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: l(
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
      ...d
    }
  );
}
function B({
  className: e,
  label: t,
  labelPosition: d = "center",
  orientation: a = "horizontal",
  ...o
}) {
  return t ? /* @__PURE__ */ x(
    "div",
    {
      className: l(
        "flex items-center",
        a === "horizontal" ? "w-full" : "h-full flex-col",
        e
      ),
      ...o,
      children: [
        d !== "left" && /* @__PURE__ */ r(
          i,
          {
            orientation: a,
            className: l(a === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            className: l(
              "px-3 text-sm text-muted-foreground",
              a === "vertical" && "py-3 px-0"
            ),
            children: t
          }
        ),
        d !== "right" && /* @__PURE__ */ r(
          i,
          {
            orientation: a,
            className: l(a === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ r(i, { orientation: a, className: e, ...o });
}
function P({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty",
      className: l(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function L({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty-header",
      className: l("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const v = u(
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
function H({
  className: e,
  variant: t = "default",
  ...d
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: l(v({ variant: t, className: e })),
      ...d
    }
  );
}
function M({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty-title",
      className: l("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function G({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty-description",
      className: l(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function K({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "empty-content",
      className: l(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function O({ className: e, cols: t = 1, gap: d = 4, responsive: a, ...o }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: l(
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
        a?.sm && {
          "sm:grid-cols-1": a.sm === 1,
          "sm:grid-cols-2": a.sm === 2,
          "sm:grid-cols-3": a.sm === 3,
          "sm:grid-cols-4": a.sm === 4,
          "sm:grid-cols-5": a.sm === 5,
          "sm:grid-cols-6": a.sm === 6,
          "sm:grid-cols-12": a.sm === 12
        },
        a?.md && {
          "md:grid-cols-1": a.md === 1,
          "md:grid-cols-2": a.md === 2,
          "md:grid-cols-3": a.md === 3,
          "md:grid-cols-4": a.md === 4,
          "md:grid-cols-5": a.md === 5,
          "md:grid-cols-6": a.md === 6,
          "md:grid-cols-12": a.md === 12
        },
        a?.lg && {
          "lg:grid-cols-1": a.lg === 1,
          "lg:grid-cols-2": a.lg === 2,
          "lg:grid-cols-3": a.lg === 3,
          "lg:grid-cols-4": a.lg === 4,
          "lg:grid-cols-5": a.lg === 5,
          "lg:grid-cols-6": a.lg === 6,
          "lg:grid-cols-12": a.lg === 12
        },
        a?.xl && {
          "xl:grid-cols-1": a.xl === 1,
          "xl:grid-cols-2": a.xl === 2,
          "xl:grid-cols-3": a.xl === 3,
          "xl:grid-cols-4": a.xl === 4,
          "xl:grid-cols-5": a.xl === 5,
          "xl:grid-cols-6": a.xl === 6,
          "xl:grid-cols-12": a.xl === 12
        },
        {
          "gap-0": d === 0,
          "gap-1": d === 1,
          "gap-2": d === 2,
          "gap-3": d === 3,
          "gap-4": d === 4,
          "gap-5": d === 5,
          "gap-6": d === 6,
          "gap-8": d === 8,
          "gap-10": d === 10,
          "gap-12": d === 12
        },
        e
      ),
      ...o
    }
  );
}
function q({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "kbd",
    {
      "data-slot": "kbd",
      className: l(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function U({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: l("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function X({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    b,
    {
      role: "status",
      "aria-label": "Loading",
      className: l("size-4 animate-spin", e),
      ...t
    }
  );
}
function Z({
  className: e,
  direction: t = "column",
  spacing: d = 2,
  align: a,
  justify: o,
  wrap: f = !1,
  ...g
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: l(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        f && "flex-wrap",
        {
          "gap-0": d === 0,
          "gap-1": d === 1,
          "gap-2": d === 2,
          "gap-3": d === 3,
          "gap-4": d === 4,
          "gap-5": d === 5,
          "gap-6": d === 6,
          "gap-8": d === 8,
          "gap-10": d === 10,
          "gap-12": d === 12
        },
        {
          "items-start": a === "start",
          "items-center": a === "center",
          "items-end": a === "end",
          "items-stretch": a === "stretch"
        },
        {
          "justify-start": o === "start",
          "justify-center": o === "center",
          "justify-end": o === "end",
          "justify-between": o === "between",
          "justify-around": o === "around",
          "justify-evenly": o === "evenly"
        },
        e
      ),
      ...g
    }
  );
}
function J({ className: e, ...t }) {
  return /* @__PURE__ */ r("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ r(
    "table",
    {
      "data-slot": "table",
      className: l("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function Q({ className: e, ...t }) {
  return /* @__PURE__ */ r("thead", { "data-slot": "table-header", className: l("[&_tr]:border-b", e), ...t });
}
function Y({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "tbody",
    {
      "data-slot": "table-body",
      className: l("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function W({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: l("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function tt({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "tr",
    {
      "data-slot": "table-row",
      className: l(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function et({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "th",
    {
      "data-slot": "table-head",
      className: l(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function at({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "td",
    {
      "data-slot": "table-cell",
      className: l(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function rt({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "caption",
    {
      "data-slot": "table-caption",
      className: l("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
const lt = {
  /**
   * Show a success toast
   */
  success: (e, t) => n.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => n.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => n.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => n.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => n(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => n.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, d) => n.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: d?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    n.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    n.dismiss();
  }
}, s = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function dt(e) {
  return s.email.test(e);
}
function ot(e) {
  return s.phone.test(e);
}
function nt(e) {
  return s.vietnamesePhone.test(e);
}
function st(e) {
  return s.url.test(e);
}
const it = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
export {
  h as Alert,
  N as AlertDescription,
  w as AlertTitle,
  C as Avatar,
  E as AvatarFallback,
  _ as AvatarImage,
  it as BREAKPOINTS,
  vt as Badge,
  ut as Button,
  S as Card,
  V as CardAction,
  D as CardContent,
  j as CardDescription,
  I as CardFooter,
  R as CardHeader,
  F as CardTitle,
  $ as Container,
  yt as DATE_FORMATS,
  B as Divider,
  P as Empty,
  K as EmptyContent,
  G as EmptyDescription,
  L as EmptyHeader,
  H as EmptyMedia,
  M as EmptyTitle,
  ft as FORM_SIZES,
  O as Grid,
  gt as Input,
  q as Kbd,
  U as KbdGroup,
  xt as Label,
  s as REGEX,
  i as Separator,
  Rt as Skeleton,
  X as Spinner,
  Z as Stack,
  J as Table,
  Y as TableBody,
  rt as TableCaption,
  at as TableCell,
  W as TableFooter,
  et as TableHead,
  Q as TableHeader,
  tt as TableRow,
  kt as Textarea,
  zt as badgeVariants,
  bt as buttonVariants,
  l as cn,
  pt as formSizeVariants,
  At as formatCurrency,
  Tt as formatDate,
  Ct as formatFileSize,
  _t as formatPhoneNumber,
  ht as get,
  wt as hasValue,
  lt as toast,
  Et as truncate,
  dt as validateEmail,
  ot as validatePhone,
  st as validateURL,
  nt as validateVietnamesePhone
};
//# sourceMappingURL=index-core.mjs.map
