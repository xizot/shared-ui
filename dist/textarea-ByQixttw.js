import { jsx as d, jsxs as g } from "react/jsx-runtime";
import { Slot as h } from "@radix-ui/react-slot";
import { cva as x } from "class-variance-authority";
import "react";
import * as y from "@radix-ui/react-separator";
import * as M from "@radix-ui/react-label";
import { clsx as w } from "clsx";
import { twMerge as $ } from "tailwind-merge";
const v = x("", {
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
}), i = {
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
};
function c(...t) {
  return $(w(t));
}
function T(t, e) {
  const r = e.split(".");
  let n = t;
  for (const s of r) {
    if (n == null || typeof n != "object")
      return;
    n = n[s];
  }
  return n;
}
function j(t) {
  return !(t == null || typeof t == "string" && t.trim() === "");
}
function b({ className: t, ...e }) {
  return /* @__PURE__ */ d(
    M.Root,
    {
      "data-slot": "label",
      className: c(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t
      ),
      ...e
    }
  );
}
const S = x(
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
        xxs: `${i.xxs.height} min-w-6 rounded-md gap-1 ${i.xxs.padding} ${i.xxs.text}`,
        xs: `${i.xs.height} min-w-8 rounded-md gap-1 ${i.xs.padding} ${i.xs.text}`,
        sm: `${i.sm.height} min-w-9 rounded-md gap-1.5 ${i.sm.padding}  ${i.sm.text}`,
        md: `${i.md.height} min-w-10 ${i.md.padding} ${i.md.text}`,
        lg: `${i.lg.height} min-w-11 rounded-md ${i.lg.padding} ${i.lg.text}`,
        xl: `${i.xl.height} min-w-12 rounded-md ${i.xl.padding} ${i.xl.text}`,
        xxl: `${i.xxl.height} min-w-14 rounded-md ${i.xxl.padding} ${i.xxl.text}`,
        "2xl": `${i.xxl.height} min-w-14 rounded-md ${i.xxl.padding} ${i.xxl.text}`,
        icon: i.md.iconButton,
        "icon-xxs": i.xxs.iconButton,
        "icon-xs": i.xs.iconButton,
        "icon-sm": i.sm.iconButton,
        "icon-md": i.md.iconButton,
        "icon-lg": i.lg.iconButton,
        "icon-xl": i.xl.iconButton,
        "icon-xxl": i.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function V({
  className: t,
  variant: e = "default",
  size: r = "md",
  asChild: n = !1,
  ...s
}) {
  return /* @__PURE__ */ d(
    n ? h : "button",
    {
      "data-slot": "button",
      "data-variant": e,
      "data-size": r,
      className: c(S({ variant: e, size: r, className: t })),
      ...s
    }
  );
}
function E({
  className: t,
  orientation: e = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d(
    y.Root,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: e,
      className: c(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      ...n
    }
  );
}
const f = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function O(t, e = "en-US", r = "USD") {
  return new Intl.NumberFormat(e, {
    style: "currency",
    currency: r
  }).format(t);
}
function C(t, e = "short") {
  const r = typeof t == "string" || typeof t == "number" ? new Date(t) : t;
  if (isNaN(r.getTime()))
    return "";
  if (e in f) {
    const n = f[e];
    return p(r, n);
  }
  return p(r, e);
}
function p(t, e) {
  const r = t.getDate().toString().padStart(2, "0"), n = (t.getMonth() + 1).toString().padStart(2, "0"), s = t.getFullYear(), o = t.getHours().toString().padStart(2, "0"), a = t.getMinutes().toString().padStart(2, "0"), u = t.getSeconds().toString().padStart(2, "0"), l = [
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
  return e.replace(/dd/g, r).replace(/MM/g, n).replace(/yyyy/g, s.toString()).replace(/MMMM/g, l[t.getMonth()]).replace(/MMM/g, l[t.getMonth()].substring(0, 3)).replace(/HH/g, o).replace(/mm/g, a).replace(/ss/g, u);
}
function L(t) {
  const e = t.replace(/\D/g, "");
  return e.length === 10 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : e.length === 11 ? `${e.slice(0, 4)} ${e.slice(4, 7)} ${e.slice(7)}` : t;
}
function _(t) {
  if (t === 0) return "0 Bytes";
  const e = 1024, r = ["Bytes", "KB", "MB", "GB", "TB", "PB"], n = Math.floor(Math.log(t) / Math.log(e));
  return Math.round(t / Math.pow(e, n) * 100) / 100 + " " + r[n];
}
function A(t, e, r = "...") {
  return t.length <= e ? t : t.slice(0, e) + r;
}
function I({ className: t, type: e, label: r, error: n, required: s, id: o, size: a = "md", ...u }) {
  const l = r || n, m = /* @__PURE__ */ d(
    "input",
    {
      type: e,
      id: o,
      "data-slot": "input",
      "data-size": a,
      "aria-invalid": !!n,
      className: c(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        v({ size: a }),
        a && i[a]?.padding,
        a === "xxs" && "file:h-5 file:text-xs",
        a === "xs" && "file:h-6 file:text-xs",
        a === "sm" && "file:h-7 file:text-xs",
        a === "md" && "file:h-8 file:text-sm",
        a === "lg" && "file:h-9 file:text-sm",
        a === "xl" && "file:h-10 file:text-sm",
        a === "xxl" && "file:h-11 file:text-base",
        n ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...u
    }
  );
  return l ? /* @__PURE__ */ g("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ g(b, { htmlFor: o, children: [
      r,
      s && /* @__PURE__ */ d("span", { className: "text-destructive", children: "*" })
    ] }),
    m,
    n && /* @__PURE__ */ d("div", { className: "text-destructive text-sm", role: "alert", children: n })
  ] }) : m;
}
const B = x(
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
function P({
  className: t,
  variant: e,
  asChild: r = !1,
  ...n
}) {
  return /* @__PURE__ */ d(r ? h : "span", { "data-slot": "badge", className: c(B({ variant: e }), t), ...n });
}
function R({ className: t, label: e, error: r, required: n, id: s, size: o = "md", ...a }) {
  const u = e || r, l = /* @__PURE__ */ d(
    "textarea",
    {
      id: s,
      "data-slot": "textarea",
      "data-size": o,
      "aria-invalid": !!r,
      className: c(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        v({ size: o }),
        o && i[o]?.padding,
        o === "xxs" && "min-h-16",
        o === "xs" && "min-h-20",
        o === "sm" && "min-h-24",
        o === "md" && "min-h-28",
        o === "lg" && "min-h-32",
        o === "xl" && "min-h-36",
        o === "xxl" && "min-h-40",
        r ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...a
    }
  );
  return u ? /* @__PURE__ */ g("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ g(b, { htmlFor: s, children: [
      e,
      n && /* @__PURE__ */ d("span", { className: "text-destructive", children: "*" })
    ] }),
    l,
    r && /* @__PURE__ */ d("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : l;
}
export {
  P as B,
  f as D,
  i as F,
  I,
  b as L,
  E as S,
  R as T,
  V as a,
  S as b,
  c,
  B as d,
  O as e,
  _ as f,
  T as g,
  j as h,
  C as i,
  L as j,
  v as k,
  A as t
};
//# sourceMappingURL=textarea-ByQixttw.js.map
