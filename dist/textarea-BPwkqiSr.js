import { jsx as s, jsxs as l } from "react/jsx-runtime";
import "react";
import { Slot as f } from "@radix-ui/react-slot";
import { cva as v } from "class-variance-authority";
import { c as m, F as p, f as y, L as b } from "./input-D0NE8tsx.js";
const u = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  datetime: "dd/MM/yyyy HH:mm",
  datetimeLong: "dd MMMM yyyy HH:mm",
  time: "HH:mm",
  iso: "yyyy-MM-dd",
  isoDateTime: "yyyy-MM-dd'T'HH:mm:ss"
};
function N(e, t = "en-US", r = "USD") {
  return new Intl.NumberFormat(t, {
    style: "currency",
    currency: r
  }).format(e);
}
function D(e, t = "short") {
  const r = typeof e == "string" || typeof e == "number" ? new Date(e) : e;
  if (isNaN(r.getTime()))
    return "";
  if (t in u) {
    const i = u[t];
    return g(r, i);
  }
  return g(r, t);
}
function g(e, t) {
  const r = e.getDate().toString().padStart(2, "0"), i = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getFullYear(), n = e.getHours().toString().padStart(2, "0"), c = e.getMinutes().toString().padStart(2, "0"), d = e.getSeconds().toString().padStart(2, "0"), o = [
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
  return t.replace(/dd/g, r).replace(/MM/g, i).replace(/yyyy/g, a.toString()).replace(/MMMM/g, o[e.getMonth()]).replace(/MMM/g, o[e.getMonth()].substring(0, 3)).replace(/HH/g, n).replace(/mm/g, c).replace(/ss/g, d);
}
function B(e) {
  const t = e.replace(/\D/g, "");
  return t.length === 10 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : t.length === 11 ? `${t.slice(0, 4)} ${t.slice(4, 7)} ${t.slice(7)}` : e;
}
function F(e) {
  if (e === 0) return "0 Bytes";
  const t = 1024, r = ["Bytes", "KB", "MB", "GB", "TB", "PB"], i = Math.floor(Math.log(e) / Math.log(t));
  return Math.round(e / Math.pow(t, i) * 100) / 100 + " " + r[i];
}
function T(e, t, r = "...") {
  return e.length <= t ? e : e.slice(0, t) + r;
}
const h = v(
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
function k({
  className: e,
  variant: t,
  asChild: r = !1,
  ...i
}) {
  return /* @__PURE__ */ s(r ? f : "span", { "data-slot": "badge", className: m(h({ variant: t }), e), ...i });
}
function $({ className: e, label: t, error: r, required: i, id: a, size: n = "md", ...c }) {
  const d = t || r, o = /* @__PURE__ */ s(
    "textarea",
    {
      id: a,
      "data-slot": "textarea",
      "data-size": n,
      "aria-invalid": !!r,
      className: m(
        "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        y({ size: n }),
        n && p[n]?.padding,
        n === "xxs" && "min-h-16",
        n === "xs" && "min-h-20",
        n === "sm" && "min-h-24",
        n === "md" && "min-h-28",
        n === "lg" && "min-h-32",
        n === "xl" && "min-h-36",
        n === "xxl" && "min-h-40",
        r ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...c
    }
  );
  return d ? /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ l(b, { htmlFor: a, children: [
      t,
      i && /* @__PURE__ */ s("span", { className: "text-destructive", children: "*" })
    ] }),
    o,
    r && /* @__PURE__ */ s("div", { className: "text-destructive text-sm", role: "alert", children: r })
  ] }) : o;
}
export {
  k as B,
  u as D,
  $ as T,
  N as a,
  h as b,
  D as c,
  B as d,
  F as f,
  T as t
};
//# sourceMappingURL=textarea-BPwkqiSr.js.map
