import { A as K, l as L, k as M, E as O, j as q, i as U, f as X, g as Z, h as J, m as Q, S as Y, T as W, d as tt, o as at, e as rt, n as et, c as lt, a as dt, b as st } from "./skeleton-CNbSXVZ4.js";
import { jsx as l, jsxs as f } from "react/jsx-runtime";
import "react";
import * as c from "@radix-ui/react-avatar";
import { c as d, S as i } from "./textarea-ByQixttw.js";
import { B as nt, a as it, D as ct, F as mt, I as ut, L as ft, T as gt, d as xt, b as bt, k as wt, e as pt, i as ht, f as Nt, j as Tt, g as kt, h as yt, t as At } from "./textarea-ByQixttw.js";
import { toast as o } from "sonner";
function p({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    c.Root,
    {
      "data-slot": "avatar",
      className: d("relative flex size-8 shrink-0 overflow-hidden rounded-full", a),
      ...t
    }
  );
}
function h({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    c.Image,
    {
      "data-slot": "avatar-image",
      className: d("aspect-square size-full", a),
      ...t
    }
  );
}
function N({
  className: a,
  ...t
}) {
  return /* @__PURE__ */ l(
    c.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: d("bg-muted flex size-full items-center justify-center rounded-full", a),
      ...t
    }
  );
}
function T({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card",
      className: d(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        a
      ),
      ...t
    }
  );
}
function k({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-header",
      className: d(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        a
      ),
      ...t
    }
  );
}
function y({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-title",
      className: d("leading-none font-semibold", a),
      ...t
    }
  );
}
function A({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-description",
      className: d("text-muted-foreground text-sm", a),
      ...t
    }
  );
}
function C({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-action",
      className: d("col-start-2 row-span-2 row-start-1 self-start justify-self-end", a),
      ...t
    }
  );
}
function z({ className: a, ...t }) {
  return /* @__PURE__ */ l("div", { "data-slot": "card-content", className: d("px-6", a), ...t });
}
function E({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "div",
    {
      "data-slot": "card-footer",
      className: d("flex items-center px-6 [.border-t]:pt-6", a),
      ...t
    }
  );
}
function S({ className: a, maxWidth: t = "xl", ...e }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": t === "sm",
          "max-w-screen-md": t === "md",
          "max-w-screen-lg": t === "lg",
          "max-w-screen-xl": t === "xl",
          "max-w-screen-2xl": t === "2xl",
          "max-w-full": t === "full"
        },
        a
      ),
      ...e
    }
  );
}
function F({
  className: a,
  label: t,
  labelPosition: e = "center",
  orientation: r = "horizontal",
  ...s
}) {
  return t ? /* @__PURE__ */ f(
    "div",
    {
      className: d(
        "flex items-center",
        r === "horizontal" ? "w-full" : "h-full flex-col",
        a
      ),
      ...s,
      children: [
        e !== "left" && /* @__PURE__ */ l(
          i,
          {
            orientation: r,
            className: d(r === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ l(
          "div",
          {
            className: d(
              "px-3 text-sm text-muted-foreground",
              r === "vertical" && "py-3 px-0"
            ),
            children: t
          }
        ),
        e !== "right" && /* @__PURE__ */ l(
          i,
          {
            orientation: r,
            className: d(r === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ l(i, { orientation: r, className: a, ...s });
}
function j({ className: a, cols: t = 1, gap: e = 4, responsive: r, ...s }) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
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
        r?.sm && {
          "sm:grid-cols-1": r.sm === 1,
          "sm:grid-cols-2": r.sm === 2,
          "sm:grid-cols-3": r.sm === 3,
          "sm:grid-cols-4": r.sm === 4,
          "sm:grid-cols-5": r.sm === 5,
          "sm:grid-cols-6": r.sm === 6,
          "sm:grid-cols-12": r.sm === 12
        },
        r?.md && {
          "md:grid-cols-1": r.md === 1,
          "md:grid-cols-2": r.md === 2,
          "md:grid-cols-3": r.md === 3,
          "md:grid-cols-4": r.md === 4,
          "md:grid-cols-5": r.md === 5,
          "md:grid-cols-6": r.md === 6,
          "md:grid-cols-12": r.md === 12
        },
        r?.lg && {
          "lg:grid-cols-1": r.lg === 1,
          "lg:grid-cols-2": r.lg === 2,
          "lg:grid-cols-3": r.lg === 3,
          "lg:grid-cols-4": r.lg === 4,
          "lg:grid-cols-5": r.lg === 5,
          "lg:grid-cols-6": r.lg === 6,
          "lg:grid-cols-12": r.lg === 12
        },
        r?.xl && {
          "xl:grid-cols-1": r.xl === 1,
          "xl:grid-cols-2": r.xl === 2,
          "xl:grid-cols-3": r.xl === 3,
          "xl:grid-cols-4": r.xl === 4,
          "xl:grid-cols-5": r.xl === 5,
          "xl:grid-cols-6": r.xl === 6,
          "xl:grid-cols-12": r.xl === 12
        },
        {
          "gap-0": e === 0,
          "gap-1": e === 1,
          "gap-2": e === 2,
          "gap-3": e === 3,
          "gap-4": e === 4,
          "gap-5": e === 5,
          "gap-6": e === 6,
          "gap-8": e === 8,
          "gap-10": e === 10,
          "gap-12": e === 12
        },
        a
      ),
      ...s
    }
  );
}
function _({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "kbd",
    {
      "data-slot": "kbd",
      className: d(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        a
      ),
      ...t
    }
  );
}
function D({ className: a, ...t }) {
  return /* @__PURE__ */ l(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: d("inline-flex items-center gap-1", a),
      ...t
    }
  );
}
function R({
  className: a,
  direction: t = "column",
  spacing: e = 2,
  align: r,
  justify: s,
  wrap: m = !1,
  ...u
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: d(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        m && "flex-wrap",
        {
          "gap-0": e === 0,
          "gap-1": e === 1,
          "gap-2": e === 2,
          "gap-3": e === 3,
          "gap-4": e === 4,
          "gap-5": e === 5,
          "gap-6": e === 6,
          "gap-8": e === 8,
          "gap-10": e === 10,
          "gap-12": e === 12
        },
        {
          "items-start": r === "start",
          "items-center": r === "center",
          "items-end": r === "end",
          "items-stretch": r === "stretch"
        },
        {
          "justify-start": s === "start",
          "justify-center": s === "center",
          "justify-end": s === "end",
          "justify-between": s === "between",
          "justify-around": s === "around",
          "justify-evenly": s === "evenly"
        },
        a
      ),
      ...u
    }
  );
}
const $ = {
  /**
   * Show a success toast
   */
  success: (a, t) => o.success(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (a, t) => o.error(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (a, t) => o.warning(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (a, t) => o.info(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (a, t) => o(a, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (a, t) => o.loading(a, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (a, t, e) => o.promise(a, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: e?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (a) => {
    o.dismiss(a);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    o.dismiss();
  }
}, n = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function I(a) {
  return n.email.test(a);
}
function P(a) {
  return n.phone.test(a);
}
function B(a) {
  return n.vietnamesePhone.test(a);
}
function V(a) {
  return n.url.test(a);
}
const H = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
export {
  K as Alert,
  L as AlertDescription,
  M as AlertTitle,
  p as Avatar,
  N as AvatarFallback,
  h as AvatarImage,
  H as BREAKPOINTS,
  nt as Badge,
  it as Button,
  T as Card,
  C as CardAction,
  z as CardContent,
  A as CardDescription,
  E as CardFooter,
  k as CardHeader,
  y as CardTitle,
  S as Container,
  ct as DATE_FORMATS,
  F as Divider,
  O as Empty,
  q as EmptyContent,
  U as EmptyDescription,
  X as EmptyHeader,
  Z as EmptyMedia,
  J as EmptyTitle,
  mt as FORM_SIZES,
  j as Grid,
  ut as Input,
  _ as Kbd,
  D as KbdGroup,
  ft as Label,
  n as REGEX,
  i as Separator,
  Q as Skeleton,
  Y as Spinner,
  R as Stack,
  W as Table,
  tt as TableBody,
  at as TableCaption,
  rt as TableCell,
  et as TableFooter,
  lt as TableHead,
  dt as TableHeader,
  st as TableRow,
  gt as Textarea,
  xt as badgeVariants,
  bt as buttonVariants,
  d as cn,
  wt as formSizeVariants,
  pt as formatCurrency,
  ht as formatDate,
  Nt as formatFileSize,
  Tt as formatPhoneNumber,
  kt as get,
  yt as hasValue,
  $ as toast,
  At as truncate,
  I as validateEmail,
  P as validatePhone,
  V as validateURL,
  B as validateVietnamesePhone
};
//# sourceMappingURL=index-core.mjs.map
