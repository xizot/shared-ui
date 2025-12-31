import { jsx as a } from "react/jsx-runtime";
import * as n from "react";
import { c as r } from "./textarea-ByQixttw.js";
import { cva as l } from "class-variance-authority";
import { Loader2Icon as i } from "lucide-react";
function v({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: r("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function y({ className: e, ...t }) {
  return /* @__PURE__ */ a("thead", { "data-slot": "table-header", className: r("[&_tr]:border-b", e), ...t });
}
function h({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: r("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function N({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: r("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function w({ className: e, ...t }) {
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
function k({ className: e, ...t }) {
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
function T({ className: e, ...t }) {
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
function A({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: r("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function E({ className: e, ...t }) {
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
function _({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: r("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const d = l(
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
function j({
  className: e,
  variant: t = "default",
  ...s
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: r(d({ variant: t, className: e })),
      ...s
    }
  );
}
function R({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: r("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function z({ className: e, ...t }) {
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
function V({ className: e, ...t }) {
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
const c = l(
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
), m = n.forwardRef(({ className: e, variant: t, ...s }, o) => /* @__PURE__ */ a("div", { ref: o, role: "alert", className: r(c({ variant: t }), e), ...s }));
m.displayName = "Alert";
const u = n.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ a(
    "h5",
    {
      ref: s,
      className: r("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }
  )
);
u.displayName = "AlertTitle";
const f = n.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ a("div", { ref: s, className: r("text-sm [&_p]:leading-relaxed", e), ...t }));
f.displayName = "AlertDescription";
function C({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    i,
    {
      role: "status",
      "aria-label": "Loading",
      className: r("size-4 animate-spin", e),
      ...t
    }
  );
}
function D({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: r("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
export {
  m as A,
  E,
  C as S,
  v as T,
  y as a,
  w as b,
  k as c,
  h as d,
  T as e,
  _ as f,
  j as g,
  R as h,
  z as i,
  V as j,
  u as k,
  f as l,
  D as m,
  N as n,
  A as o
};
//# sourceMappingURL=skeleton-CNbSXVZ4.js.map
