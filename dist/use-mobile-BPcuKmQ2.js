import { jsx as o, jsxs as d } from "react/jsx-runtime";
import * as c from "react";
import * as n from "@radix-ui/react-dialog";
import { XIcon as u } from "lucide-react";
import { c as i } from "./input-Bdy9V1ho.js";
import * as f from "@radix-ui/react-toggle";
import { cva as m } from "class-variance-authority";
import * as r from "@radix-ui/react-tooltip";
function y({ ...t }) {
  return /* @__PURE__ */ o(n.Root, { "data-slot": "sheet", ...t });
}
function N({ ...t }) {
  return /* @__PURE__ */ o(n.Trigger, { "data-slot": "sheet-trigger", ...t });
}
function S({ ...t }) {
  return /* @__PURE__ */ o(n.Close, { "data-slot": "sheet-close", ...t });
}
function g({ ...t }) {
  return /* @__PURE__ */ o(n.Portal, { "data-slot": "sheet-portal", ...t });
}
function p({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    n.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: i(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function z({
  className: t,
  children: e,
  side: a = "right",
  ...s
}) {
  return /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ o(p, {}),
    /* @__PURE__ */ d(
      n.Content,
      {
        "data-slot": "sheet-content",
        className: i(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          a === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          a === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          a === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          a === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          t
        ),
        ...s,
        children: [
          e,
          /* @__PURE__ */ d(n.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ o(u, { className: "size-4" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function k({ className: t, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sheet-header",
      className: i("flex flex-col gap-1.5 p-4", t),
      ...e
    }
  );
}
function C({ className: t, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "sheet-footer",
      className: i("mt-auto flex flex-col gap-2 p-4", t),
      ...e
    }
  );
}
function P({ className: t, ...e }) {
  return /* @__PURE__ */ o(
    n.Title,
    {
      "data-slot": "sheet-title",
      className: i("text-foreground font-semibold", t),
      ...e
    }
  );
}
function _({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ o(
    n.Description,
    {
      "data-slot": "sheet-description",
      className: i("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function E({ className: t, ...e }) {
  return /* @__PURE__ */ o(
    "div",
    {
      "data-slot": "skeleton",
      className: i("bg-accent animate-pulse rounded-md", t),
      ...e
    }
  );
}
const h = m(
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
function I({
  className: t,
  variant: e,
  size: a,
  ...s
}) {
  return /* @__PURE__ */ o(
    f.Root,
    {
      "data-slot": "toggle",
      className: i(h({ variant: e, size: a, className: t })),
      ...s
    }
  );
}
function b({
  delayDuration: t = 0,
  ...e
}) {
  return /* @__PURE__ */ o(
    r.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...e
    }
  );
}
function M({ ...t }) {
  return /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(r.Root, { "data-slot": "tooltip", ...t }) });
}
function R({ ...t }) {
  return /* @__PURE__ */ o(r.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function j({
  className: t,
  sideOffset: e = 0,
  children: a,
  ...s
}) {
  return /* @__PURE__ */ o(r.Portal, { children: /* @__PURE__ */ d(
    r.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: i(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        t
      ),
      ...s,
      children: [
        a,
        /* @__PURE__ */ o(r.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const l = 768;
function O() {
  const [t, e] = c.useState(void 0);
  return c.useEffect(() => {
    const a = window.matchMedia(`(max-width: ${l - 1}px)`), s = () => {
      e(window.innerWidth < l);
    };
    return a.addEventListener("change", s), e(window.innerWidth < l), () => a.removeEventListener("change", s);
  }, []), !!t;
}
export {
  E as S,
  I as T,
  y as a,
  N as b,
  S as c,
  z as d,
  k as e,
  C as f,
  P as g,
  _ as h,
  M as i,
  R as j,
  j as k,
  b as l,
  h as t,
  O as u
};
//# sourceMappingURL=use-mobile-BPcuKmQ2.js.map
