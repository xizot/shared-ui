import { jsx as a, jsxs as c } from "react/jsx-runtime";
import { Slot as m } from "@radix-ui/react-slot";
import { cva as u } from "class-variance-authority";
import "react";
import * as h from "@radix-ui/react-separator";
import * as f from "@radix-ui/react-label";
import { clsx as b } from "clsx";
import { twMerge as v } from "tailwind-merge";
function d(...e) {
  return v(b(e));
}
function j(e, r) {
  const o = r.split(".");
  let i = e;
  for (const s of o) {
    if (i == null || typeof i != "object")
      return;
    i = i[s];
  }
  return i;
}
function L(e) {
  return !(e == null || typeof e == "string" && e.trim() === "");
}
const y = u("", {
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
}), t = {
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
}, $ = u(
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
        xxs: `${t.xxs.height} min-w-6 rounded-md gap-1 ${t.xxs.padding} ${t.xxs.text}`,
        xs: `${t.xs.height} min-w-8 rounded-md gap-1 ${t.xs.padding} ${t.xs.text}`,
        sm: `${t.sm.height} min-w-9 rounded-md gap-1.5 ${t.sm.padding}  ${t.sm.text}`,
        md: `${t.md.height} min-w-10 ${t.md.padding} ${t.md.text}`,
        lg: `${t.lg.height} min-w-11 rounded-md ${t.lg.padding} ${t.lg.text}`,
        xl: `${t.xl.height} min-w-12 rounded-md ${t.xl.padding} ${t.xl.text}`,
        xxl: `${t.xxl.height} min-w-14 rounded-md ${t.xxl.padding} ${t.xxl.text}`,
        "2xl": `${t.xxl.height} min-w-14 rounded-md ${t.xxl.padding} ${t.xxl.text}`,
        icon: t.md.iconButton,
        "icon-xxs": t.xxs.iconButton,
        "icon-xs": t.xs.iconButton,
        "icon-sm": t.sm.iconButton,
        "icon-md": t.md.iconButton,
        "icon-lg": t.lg.iconButton,
        "icon-xl": t.xl.iconButton,
        "icon-xxl": t.xxl.iconButton
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
function _({
  className: e,
  variant: r = "default",
  size: o = "md",
  asChild: i = !1,
  ...s
}) {
  return /* @__PURE__ */ a(
    i ? m : "button",
    {
      "data-slot": "button",
      "data-variant": r,
      "data-size": o,
      className: d($({ variant: r, size: o, className: e })),
      ...s
    }
  );
}
function E({
  className: e,
  orientation: r = "horizontal",
  decorative: o = !0,
  ...i
}) {
  return /* @__PURE__ */ a(
    h.Root,
    {
      "data-slot": "separator",
      decorative: o,
      orientation: r,
      className: d(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...i
    }
  );
}
function w({ className: e, ...r }) {
  return /* @__PURE__ */ a(
    f.Root,
    {
      "data-slot": "label",
      className: d(
        "flex items-center gap-2 leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...r
    }
  );
}
function F({ className: e, type: r, label: o, error: i, required: s, id: l, size: n = "md", ...g }) {
  const p = o || i, x = /* @__PURE__ */ a(
    "input",
    {
      type: r,
      id: l,
      "data-slot": "input",
      "data-size": n,
      "aria-invalid": !!i,
      className: d(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        y({ size: n }),
        n && t[n]?.padding,
        n === "xxs" && "file:h-5 file:text-xs",
        n === "xs" && "file:h-6 file:text-xs",
        n === "sm" && "file:h-7 file:text-xs",
        n === "md" && "file:h-8 file:text-sm",
        n === "lg" && "file:h-9 file:text-sm",
        n === "xl" && "file:h-10 file:text-sm",
        n === "xxl" && "file:h-11 file:text-base",
        i ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...g
    }
  );
  return p ? /* @__PURE__ */ c("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ c(w, { htmlFor: l, children: [
      o,
      s && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    x,
    i && /* @__PURE__ */ a("div", { className: "text-destructive text-sm", role: "alert", children: i })
  ] }) : x;
}
export {
  _ as B,
  t as F,
  F as I,
  w as L,
  E as S,
  $ as b,
  d as c,
  y as f,
  j as g,
  L as h
};
//# sourceMappingURL=input-Bdy9V1ho.js.map
