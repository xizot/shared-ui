import { jsx as a, jsxs as s, Fragment as ge } from "react/jsx-runtime";
import * as K from "@radix-ui/react-accordion";
import { XIcon as pe, ChevronDownIcon as be, ArrowRight as _e, ArrowLeft as Te, CheckIcon as U, CircleIcon as oe, ChevronRightIcon as X, MoreHorizontalIcon as Pe, ChevronLeftIcon as Ae, MoreHorizontal as he, ChevronsLeft as Ee, ChevronsRight as Re, ArrowUp as Le, ArrowDown as je, ArrowUpDown as Ge, AlertCircle as Be, X as Oe, XCircle as Fe, ChevronDown as ue, PanelLeftIcon as He } from "lucide-react";
import * as m from "react";
import { useMemo as Ve } from "react";
import { c as r, b as ie, S as Y, B as T, I as se, L as ve, T as $e, a as ne } from "./textarea-Bt2ohije.js";
import * as R from "@radix-ui/react-alert-dialog";
import { Slot as F } from "@radix-ui/react-slot";
import { cva as L } from "class-variance-authority";
import { S as Ke, c as qe, d as We, e as Ue, f as Xe, g as Ye, h as Ze, i as Je, j as Qe, k as et, l as tt, m as at, n as nt, o as rt, C as ot } from "./select-Blr3PI5x.js";
import { p as Go, q as Bo, a as Oo, D as Fo, b as Ho, M as Vo, r as $o, P as Ko, s as qo, t as Wo, u as Uo, v as Xo, w as Yo, x as Zo, y as Jo, T as Qo } from "./select-Blr3PI5x.js";
import it from "embla-carousel-react";
import * as de from "recharts";
import * as C from "@radix-ui/react-dialog";
import * as k from "@radix-ui/react-context-menu";
import { SelectGroup as st } from "@radix-ui/react-select";
import { useReactTable as dt, getCoreRowModel as lt, flexRender as me } from "@tanstack/react-table";
import { T as ct, a as ut, b as te, c as mt, d as ft, e as fe, E as gt, f as pt, g as bt, h as ht, i as vt, j as xt, A as wt, k as Nt, l as yt, S as Ct, m as D } from "./skeleton-drAa7p1U.js";
import { o as ti, n as ai } from "./skeleton-drAa7p1U.js";
import { Drawer as j } from "vaul";
import * as S from "@radix-ui/react-dropdown-menu";
import * as W from "@radix-ui/react-hover-card";
import * as z from "@radix-ui/react-menubar";
import * as G from "@radix-ui/react-navigation-menu";
import * as H from "@radix-ui/react-tooltip";
import * as Z from "@radix-ui/react-tabs";
import * as kt from "@radix-ui/react-toggle";
import * as xe from "@radix-ui/react-toggle-group";
function St({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "dialog", ...e });
}
function ja({ ...e }) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function zt({ ...e }) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "dialog-portal", ...e });
}
function Ga({ ...e }) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "dialog-close", ...e });
}
function It({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
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
function Mt({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...o
}) {
  return /* @__PURE__ */ s(zt, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(It, {}),
    /* @__PURE__ */ s(
      C.Content,
      {
        "data-slot": "dialog-content",
        className: r(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          e
        ),
        ...o,
        children: [
          t,
          n && /* @__PURE__ */ s(
            C.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(pe, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Dt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function _t({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: r("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function Tt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function Pt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ba({ ...e }) {
  return /* @__PURE__ */ a(K.Root, { "data-slot": "accordion", ...e });
}
function Oa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    K.Item,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Fa({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(K.Header, { className: "flex", children: /* @__PURE__ */ s(
    K.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ a(be, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ha({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    K.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ a("div", { className: r("pt-0 pb-4", e), children: t })
    }
  );
}
function Va({ ...e }) {
  return /* @__PURE__ */ a(R.Root, { "data-slot": "alert-dialog", ...e });
}
function $a({
  ...e
}) {
  return /* @__PURE__ */ a(R.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function At({ ...e }) {
  return /* @__PURE__ */ a(R.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function Et({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Overlay,
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
function Ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(At, { children: [
    /* @__PURE__ */ a(Et, {}),
    /* @__PURE__ */ a(
      R.Content,
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
function qa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: r("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function Wa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: r("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function Ua({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Title,
    {
      "data-slot": "alert-dialog-title",
      className: r("text-lg font-semibold", e),
      ...t
    }
  );
}
function Xa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Description,
    {
      "data-slot": "alert-dialog-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Ya({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(R.Action, { className: r(ie(), e), ...t });
}
function Za({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    R.Cancel,
    {
      className: r(ie({ variant: "outline" }), e),
      ...t
    }
  );
}
const Rt = L(
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
function Ja({
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
      className: r(Rt({ orientation: t }), e),
      ...n
    }
  );
}
function Qa({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? F : "div",
    {
      className: r(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function en({
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
const we = m.createContext(null);
function J() {
  const e = m.useContext(we);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function tn({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: o,
  className: i,
  children: d,
  ...l
}) {
  const [u, c] = it(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [g, N] = m.useState(!1), [P, w] = m.useState(!1), x = m.useCallback((h) => {
    h && (N(h.canScrollPrev()), w(h.canScrollNext()));
  }, []), I = m.useCallback(() => {
    c?.scrollPrev();
  }, [c]), M = m.useCallback(() => {
    c?.scrollNext();
  }, [c]), p = m.useCallback(
    (h) => {
      h.key === "ArrowLeft" ? (h.preventDefault(), I()) : h.key === "ArrowRight" && (h.preventDefault(), M());
    },
    [I, M]
  );
  return m.useEffect(() => {
    !c || !n || n(c);
  }, [c, n]), m.useEffect(() => {
    if (c)
      return x(c), c.on("reInit", x), c.on("select", x), () => {
        c?.off("select", x);
      };
  }, [c, x]), /* @__PURE__ */ a(
    we.Provider,
    {
      value: {
        carouselRef: u,
        api: c,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: I,
        scrollNext: M,
        canScrollPrev: g,
        canScrollNext: P
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: p,
          className: r("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...l,
          children: d
        }
      )
    }
  );
}
function an({ className: e, ...t }) {
  const { carouselRef: n, orientation: o } = J();
  return /* @__PURE__ */ a("div", { ref: n, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: r("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function nn({ className: e, ...t }) {
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
function rn({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollPrev: d, canScrollPrev: l } = J();
  return /* @__PURE__ */ s(
    T,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a(Te, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function on({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: i, scrollNext: d, canScrollNext: l } = J();
  return /* @__PURE__ */ s(
    T,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: r(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a(_e, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Lt = { light: "", dark: ".dark" }, Ne = m.createContext(null);
function ye() {
  const e = m.useContext(Ne);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function sn({
  id: e,
  className: t,
  children: n,
  config: o,
  ...i
}) {
  const d = m.useId(), l = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Ne.Provider, { value: { config: o }, children: /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "chart",
      "data-chart": l,
      className: r(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(jt, { id: l, config: o }),
        /* @__PURE__ */ a(de.ResponsiveContainer, { children: n })
      ]
    }
  ) });
}
const jt = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([, o]) => o.theme || o.color);
  return n.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Lt).map(
          ([o, i]) => `
${i} [data-chart=${e}] {
${n.map(([d, l]) => {
            const u = l.theme?.[o] || l.color;
            return u ? `  --color-${d}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, dn = de.Tooltip;
function ln({
  active: e,
  payload: t,
  className: n,
  indicator: o = "dot",
  hideLabel: i = !1,
  hideIndicator: d = !1,
  label: l,
  labelFormatter: u,
  labelClassName: c,
  formatter: g,
  color: N,
  nameKey: P,
  labelKey: w
}) {
  const { config: x } = ye(), I = m.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [p] = t, h = `${w || p?.dataKey || p?.name || "value"}`, y = re(x, p, h), v = !w && typeof l == "string" ? x[l]?.label || l : y?.label;
    return u ? /* @__PURE__ */ a("div", { className: r("font-medium", c), children: u(v, t) }) : v ? /* @__PURE__ */ a("div", { className: r("font-medium", c), children: v }) : null;
  }, [l, u, t, i, c, x, w]);
  if (!e || !t?.length)
    return null;
  const M = t.length === 1 && o !== "dot";
  return /* @__PURE__ */ s(
    "div",
    {
      className: r(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        M ? null : I,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((p) => p.type !== "none").map((p, h) => {
          const y = `${P || p.name || p.dataKey || "value"}`, v = re(x, p, y), b = N || p.payload.fill || p.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: g && p?.value !== void 0 && p.name ? g(p.value, p.name, p, h, p.payload) : /* @__PURE__ */ s(ge, { children: [
                v?.icon ? /* @__PURE__ */ a(v.icon, {}) : !d && /* @__PURE__ */ a(
                  "div",
                  {
                    className: r(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": M && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": b,
                      "--color-border": b
                    }
                  }
                ),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: r(
                      "flex flex-1 justify-between leading-none",
                      M ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ s("div", { className: "grid gap-1.5", children: [
                        M ? I : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: v?.label || p.name })
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
const cn = de.Legend;
function un({
  className: e,
  hideIcon: t = !1,
  payload: n,
  verticalAlign: o = "bottom",
  nameKey: i
}) {
  const { config: d } = ye();
  return n?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: r(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: n.filter((l) => l.type !== "none").map((l) => {
        const u = `${i || l.dataKey || "value"}`, c = re(d, l, u);
        return /* @__PURE__ */ s(
          "div",
          {
            className: r(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              c?.icon && !t ? /* @__PURE__ */ a(c.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: l.color
                  }
                }
              ),
              c?.label
            ]
          },
          l.value
        );
      })
    }
  ) : null;
}
function re(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = n;
  return n in t && typeof t[n] == "string" ? i = t[n] : o && n in o && typeof o[n] == "string" && (i = o[n]), i in e ? e[i] : e[n];
}
function Gt({
  open: e,
  onOpenChange: t,
  title: n,
  description: o,
  confirmText: i = "Confirm",
  cancelText: d = "Cancel",
  onConfirm: l,
  variant: u = "default",
  loading: c = !1
}) {
  const [g, N] = m.useState(!1);
  return /* @__PURE__ */ a(St, { open: e, onOpenChange: t, children: /* @__PURE__ */ s(Mt, { children: [
    /* @__PURE__ */ s(Dt, { children: [
      /* @__PURE__ */ a(Tt, { children: n }),
      o && /* @__PURE__ */ a(Pt, { children: o })
    ] }),
    /* @__PURE__ */ s(_t, { children: [
      /* @__PURE__ */ a(
        T,
        {
          variant: "outline",
          onClick: () => t(!1),
          disabled: g || c,
          children: d
        }
      ),
      /* @__PURE__ */ a(T, { variant: u, onClick: async () => {
        N(!0);
        try {
          await l(), t(!1);
        } finally {
          N(!1);
        }
      }, disabled: g || c, children: g || c ? "Loading..." : i })
    ] })
  ] }) });
}
function mn({ ...e }) {
  return /* @__PURE__ */ a(k.Root, { "data-slot": "context-menu", ...e });
}
function fn({
  ...e
}) {
  return /* @__PURE__ */ a(k.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function gn({ ...e }) {
  return /* @__PURE__ */ a(k.Group, { "data-slot": "context-menu-group", ...e });
}
function pn({ ...e }) {
  return /* @__PURE__ */ a(k.Portal, { "data-slot": "context-menu-portal", ...e });
}
function bn({ ...e }) {
  return /* @__PURE__ */ a(k.Sub, { "data-slot": "context-menu-sub", ...e });
}
function hn({
  ...e
}) {
  return /* @__PURE__ */ a(k.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function vn({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    k.SubTrigger,
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
        /* @__PURE__ */ a(X, { className: "ml-auto" })
      ]
    }
  );
}
function xn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.SubContent,
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
function wn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(k.Portal, { children: /* @__PURE__ */ a(
    k.Content,
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
function Nn({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    k.Item,
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
function yn({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    k.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(k.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Cn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    k.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(k.ItemIndicator, { children: /* @__PURE__ */ a(oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function kn({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    k.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: r("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function Sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Separator,
    {
      "data-slot": "context-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function zn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: r("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
const Bt = [
  { id: 10, name: "10/trang" },
  { id: 20, name: "20/trang" },
  { id: 50, name: "50/trang" },
  { id: 100, name: "100/trang" }
];
function Ot({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: r("flex justify-center mx-auto w-full", e),
      ...t
    }
  );
}
function Ft({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: r("flex flex-row gap-1 items-center", e),
      ...t
    }
  );
}
function $({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function q({
  className: e,
  isActive: t,
  disabled: n,
  size: o = "icon-sm",
  ...i
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: r(
        ie({
          variant: t ? "outline" : "ghost",
          size: o,
          className: r(
            "rounded-full",
            t && "!bg-primary/25 text-primary",
            n && "opacity-50 cursor-not-allowed",
            e
          )
        })
      ),
      ...i
    }
  );
}
function Ht({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    q,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: r("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(Ae, {})
    }
  );
}
function Vt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    q,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: r("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(X, {})
    }
  );
}
function In({ className: e, ...t }) {
  return /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: r("flex justify-center items-center size-9", e),
      ...t,
      children: [
        /* @__PURE__ */ a(Pe, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
const $t = (e, t, n = 1) => {
  const i = t, d = Math.max(e - n, 1), l = Math.min(e + n, i), u = d > 2, c = l < i - 1, g = [];
  g.push(1), u ? g.push("left-ellipsis") : 2 < d && g.push(2);
  for (let N = d; N <= l; N++)
    N !== 1 && N !== i && g.push(N);
  return c ? g.push("right-ellipsis") : l < i - 1 && g.push(i - 1), i !== 1 && g.push(i), g;
}, Kt = ({ className: e, ...t }) => /* @__PURE__ */ s(
  q,
  {
    className: r(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(he, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(Ee, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100" })
    ]
  }
), qt = ({ className: e, ...t }) => /* @__PURE__ */ s(
  q,
  {
    className: r(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(he, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(Re, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100 text-primary" })
    ]
  }
), Wt = ({
  currentPage: e,
  totalPages: t,
  pageSize: n,
  siblingCount: o = 1,
  onPageChange: i
}) => {
  const d = m.useMemo(
    () => $t(e, t, o),
    [e, t, o]
  );
  return /* @__PURE__ */ s("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ a(
      Ht,
      {
        onClick: () => e > 1 && i(e - 1, n),
        disabled: e === 1,
        "aria-disabled": e === 1,
        className: "cursor-pointer"
      }
    ),
    d.map((l, u) => l === "left-ellipsis" ? /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(Kt, { onClick: () => i(e - o, n) }) }, `ellipsis-${u}`) : l === "right-ellipsis" ? /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(qt, { onClick: () => i(e + o, n) }) }, `ellipsis-${u}`) : /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(
      q,
      {
        isActive: e === l,
        onClick: () => l !== e && i(l, n),
        className: "cursor-pointer",
        children: l
      }
    ) }, l)),
    /* @__PURE__ */ a(
      Vt,
      {
        onClick: () => e < t && i(e + 1, n),
        disabled: e === t,
        "aria-disabled": e === t,
        className: "cursor-pointer"
      }
    )
  ] });
};
function Mn({
  data: e,
  paginationOptions: t,
  columns: n,
  totalPages: o = 0,
  searchable: i = !1,
  searchPlaceholder: d,
  searchKey: l,
  emptyMessage: u,
  className: c,
  enableGlobalFilter: g = !0,
  globalFilterFn: N,
  pagination: P,
  onRowClick: w,
  rowClassName: x
}) {
  const [I, M] = m.useState([]), [p, h] = m.useState(""), y = dt({
    data: e,
    columns: n,
    getRowId: (v, b) => "id" in v && v.id != null ? String(v.id) : String(b),
    getCoreRowModel: lt(),
    onSortingChange: M,
    manualFiltering: !0,
    manualSorting: !0,
    manualPagination: !0,
    globalFilterFn: N || ((v, b, A) => {
      if (!l)
        return Object.values(v.original).some(
          (ee) => String(ee).toLowerCase().includes(String(A).toLowerCase())
        );
      const B = v.original[l];
      return String(B).toLowerCase().includes(String(A).toLowerCase());
    }),
    enableGlobalFilter: i && g,
    state: {
      sorting: I,
      pagination: P,
      columnPinning: {
        right: ["actions"]
      }
    },
    ...t
  });
  return /* @__PURE__ */ s("div", { className: r("space-y-4", c), children: [
    i && /* @__PURE__ */ a(
      se,
      {
        placeholder: d || "Search...",
        value: p ?? "",
        onChange: (v) => h(v.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ a("div", { className: "rounded-md border", children: /* @__PURE__ */ s(ct, { children: [
      /* @__PURE__ */ a(ut, { children: y.getHeaderGroups().map((v) => /* @__PURE__ */ a(te, { children: v.headers.map((b) => {
        const A = b.column.getCanSort(), B = b.column.getIsSorted();
        return /* @__PURE__ */ a(mt, { children: b.isPlaceholder ? null : /* @__PURE__ */ s("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: r(
                A && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: A ? b.column.getToggleSortingHandler() : void 0,
              children: me(b.column.columnDef.header, b.getContext())
            }
          ),
          A && /* @__PURE__ */ a(
            T,
            {
              variant: "ghost",
              size: "icon",
              className: "w-4 h-4",
              onClick: b.column.getToggleSortingHandler(),
              children: B === "asc" ? /* @__PURE__ */ a(Le, { className: "size-3.5 text-primary" }) : B === "desc" ? /* @__PURE__ */ a(je, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ a(Ge, { className: "size-3.5" })
            }
          )
        ] }) }, b.id);
      }) }, v.id)) }),
      /* @__PURE__ */ a(ft, { children: y.getRowModel().rows?.length ? y.getRowModel().rows.map((v) => /* @__PURE__ */ a(
        te,
        {
          "data-state": v.getIsSelected() && "selected",
          className: r(
            w && "cursor-pointer",
            x && x(v.original)
          ),
          onClick: () => w?.(v.original),
          children: v.getVisibleCells().map((b) => /* @__PURE__ */ a(fe, { children: me(b.column.columnDef.cell, b.getContext()) }, b.id))
        },
        v.id
      )) : /* @__PURE__ */ a(te, { children: /* @__PURE__ */ a(fe, { colSpan: y.getAllColumns().length, className: "py-8 text-center", children: u || "No data available" }) }) })
    ] }) }),
    typeof o == "number" && o > 1 && /* @__PURE__ */ a(Ut, { table: y, totalPages: o })
  ] });
}
function Ut({ table: e, totalPages: t }) {
  return /* @__PURE__ */ a(Ot, { children: /* @__PURE__ */ s(Ft, { className: "flex-1 gap-4 justify-end", children: [
    /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(
      Wt,
      {
        currentPage: e.getState().pagination.pageIndex + 1,
        pageSize: e.getState().pagination.pageSize,
        totalPages: t,
        isGroupButton: !0,
        onPageChange: (n) => {
          e.setPageIndex(n - 1);
        }
      }
    ) }),
    /* @__PURE__ */ a($, { children: /* @__PURE__ */ s(
      Ke,
      {
        onValueChange: (n) => {
          e.setPageSize(Number(n));
        },
        value: e.getState().pagination.pageSize.toString(),
        children: [
          /* @__PURE__ */ a(qe, { className: "w-[130px]", size: "sm", children: /* @__PURE__ */ a(We, { placeholder: "Chọn" }) }),
          /* @__PURE__ */ a(Ue, { children: /* @__PURE__ */ a(st, { children: Bt.map((n) => /* @__PURE__ */ a(Xe, { value: n.id.toString(), children: n.name }, n.id)) }) })
        ]
      }
    ) })
  ] }) });
}
function Dn({
  open: e,
  onOpenChange: t,
  title: n,
  description: o,
  itemName: i,
  onConfirm: d,
  loading: l = !1
}) {
  return /* @__PURE__ */ a(
    Gt,
    {
      open: e,
      onOpenChange: t,
      title: n || "Delete Confirmation",
      description: o || (i ? `Are you sure you want to delete "${i}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: d,
      variant: "destructive",
      loading: l
    }
  );
}
function _n({ ...e }) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "drawer", ...e });
}
function Tn({ ...e }) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Xt({ ...e }) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "drawer-portal", ...e });
}
function Pn({ ...e }) {
  return /* @__PURE__ */ a(j.Close, { "data-slot": "drawer-close", ...e });
}
function Yt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Overlay,
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
function An({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(Xt, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Yt, {}),
    /* @__PURE__ */ s(
      j.Content,
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
function En({ className: e, ...t }) {
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
function Rn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Ln({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    j.Title,
    {
      "data-slot": "drawer-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Description,
    {
      "data-slot": "drawer-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Gn({ ...e }) {
  return /* @__PURE__ */ a(S.Root, { "data-slot": "dropdown-menu", ...e });
}
function Bn({
  ...e
}) {
  return /* @__PURE__ */ a(S.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function On({
  ...e
}) {
  return /* @__PURE__ */ a(S.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Fn({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ a(S.Portal, { children: /* @__PURE__ */ a(
    S.Content,
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
function Hn({ ...e }) {
  return /* @__PURE__ */ a(S.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Vn({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    S.Item,
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
function $n({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    S.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Kn({
  ...e
}) {
  return /* @__PURE__ */ a(S.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function qn({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    S.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Wn({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    S.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: r("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function Un({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Xn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Yn({ ...e }) {
  return /* @__PURE__ */ a(S.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function Zn({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    S.SubTrigger,
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
        /* @__PURE__ */ a(X, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.SubContent,
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
function Qn({
  className: e,
  icon: t,
  title: n = "No data",
  description: o,
  action: i,
  children: d,
  ...l
}) {
  return /* @__PURE__ */ s(gt, { className: r(e), ...l, children: [
    /* @__PURE__ */ s(pt, { children: [
      t && /* @__PURE__ */ a(bt, { variant: "icon", children: t }),
      /* @__PURE__ */ a(ht, { children: n }),
      o && /* @__PURE__ */ a(vt, { children: o })
    ] }),
    d && /* @__PURE__ */ a(xt, { children: d }),
    i && /* @__PURE__ */ a(T, { onClick: i.onClick, variant: "outline", children: i.label })
  ] });
}
class er extends m.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1, error: null };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, n) {
    this.props.onError?.(t, n);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const t = this.props.fallback;
        return /* @__PURE__ */ a(t, { ...this.state });
      }
      return /* @__PURE__ */ a(
        Zt,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function Zt({ error: e, resetError: t }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ s(wt, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ a(Be, { className: "h-4 w-4" }),
    /* @__PURE__ */ a(Nt, { children: "Something went wrong" }),
    /* @__PURE__ */ a(yt, { children: e?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ a(T, { variant: "outline", size: "sm", onClick: t, className: "mt-4", children: "Try again" })
  ] }) });
}
function tr({ className: e, ...t }) {
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
function ar({
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
function nr({ className: e, ...t }) {
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
const Jt = L("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
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
function rr({
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
      className: r(Jt({ orientation: t }), e),
      ...n
    }
  );
}
function or({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: r("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function ir({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ve,
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
function sr({ className: e, ...t }) {
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
function dr({ className: e, ...t }) {
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
function lr({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ s(
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
function cr({
  className: e,
  children: t,
  errors: n,
  ...o
}) {
  const i = Ve(() => {
    if (t)
      return t;
    if (!n?.length)
      return null;
    const d = [...new Map(n.map((l) => [l?.message, l])).values()];
    return d?.length == 1 ? d[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: d.map((l, u) => l?.message && /* @__PURE__ */ a("li", { children: l.message }, u)) });
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
function ur({ ...e }) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "hover-card", ...e });
}
function mr({ ...e }) {
  return /* @__PURE__ */ a(W.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function fr({
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
function gr({ className: e, ...t }) {
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
const Qt = L(
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
function pr({
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
      className: r(Qt({ align: t }), e),
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...n
    }
  );
}
const ea = L("text-sm shadow-none flex gap-2 items-center", {
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
function br({
  className: e,
  type: t = "button",
  variant: n = "ghost",
  size: o = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    T,
    {
      type: t,
      "data-size": o,
      variant: n,
      className: r(ea({ size: o }), e),
      ...i
    }
  );
}
function hr({ className: e, ...t }) {
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
function vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    se,
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
function xr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    $e,
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
function wr({ className: e, ...t }) {
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
function Nr({ className: e, ...t }) {
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
const ta = L(
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
function yr({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? F : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": n,
      className: r(ta({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
const aa = L(
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
function Cr({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: r(aa({ variant: t, className: e })),
      ...n
    }
  );
}
function kr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: r("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function Sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: r("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function zr({ className: e, ...t }) {
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
function Ir({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: r("flex items-center gap-2", e), ...t });
}
function Mr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: r("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function Dr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: r("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function _r({
  className: e,
  loading: t = !1,
  loadingText: n,
  children: o,
  disabled: i,
  ...d
}) {
  return /* @__PURE__ */ s(T, { className: r(e), disabled: i || t, ...d, children: [
    t && /* @__PURE__ */ a(Ct, { className: "mr-2 h-4 w-4" }),
    t && n || o
  ] });
}
function Tr({ className: e, count: t = 3, variant: n = "default", ...o }) {
  return n === "card" ? /* @__PURE__ */ a("div", { className: r("space-y-4", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ s("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ a(D, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ a(D, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ a(D, { className: "h-4 w-2/3" })
  ] }, d)) }) : n === "list" ? /* @__PURE__ */ a("div", { className: r("space-y-2", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(D, { className: "h-12 w-full" }, d)) }) : n === "table" ? /* @__PURE__ */ s("div", { className: r("space-y-2", e), ...o, children: [
    /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(D, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(D, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(D, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: t }).map((i, d) => /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(D, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(D, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(D, { className: "h-12 flex-1" })
    ] }, d))
  ] }) : /* @__PURE__ */ a("div", { className: r("space-y-2", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(D, { className: "h-4 w-full" }, d)) });
}
function Pr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    z.Root,
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
function Ar({ ...e }) {
  return /* @__PURE__ */ a(z.Menu, { "data-slot": "menubar-menu", ...e });
}
function Er({ ...e }) {
  return /* @__PURE__ */ a(z.Group, { "data-slot": "menubar-group", ...e });
}
function na({ ...e }) {
  return /* @__PURE__ */ a(z.Portal, { "data-slot": "menubar-portal", ...e });
}
function Rr({ ...e }) {
  return /* @__PURE__ */ a(z.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function Lr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Trigger,
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
function jr({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: o = 8,
  ...i
}) {
  return /* @__PURE__ */ a(na, { children: /* @__PURE__ */ a(
    z.Content,
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
function Gr({
  className: e,
  inset: t,
  variant: n = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    z.Item,
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
function Br({
  className: e,
  children: t,
  checked: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    z.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(z.ItemIndicator, { children: /* @__PURE__ */ a(U, { className: "size-4" }) }) }),
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
  return /* @__PURE__ */ s(
    z.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(z.ItemIndicator, { children: /* @__PURE__ */ a(oe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Fr({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    z.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: r("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function Hr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Separator,
    {
      "data-slot": "menubar-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: r("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function $r({ ...e }) {
  return /* @__PURE__ */ a(z.Sub, { "data-slot": "menubar-sub", ...e });
}
function Kr({
  className: e,
  inset: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    z.SubTrigger,
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
        /* @__PURE__ */ a(X, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function qr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.SubContent,
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
function Wr({
  options: e,
  value: t = [],
  onChange: n,
  autoResize: o = !1,
  limitTags: i,
  showCode: d = !1,
  label: l,
  error: u,
  required: c,
  placeholder: g = "Select options...",
  searchPlaceholder: N = "Search...",
  emptyMessage: P = "No results found.",
  disabled: w = !1,
  readonly: x = !1,
  size: I = "md",
  className: M,
  triggerClassName: p,
  popoverClassName: h
}) {
  const [y, v] = m.useState(!1), b = m.useMemo(() => t || [], [t]), A = m.useMemo(
    () => e.filter((f) => b.includes(f.id)),
    [e, b]
  ), B = (f) => {
    if (w || x) return;
    const E = b.includes(f) ? b.filter((O) => O !== f) : [...b, f], V = e.filter((O) => E.includes(O.id));
    n?.(E, V.length > 0 ? V : void 0);
  }, ee = (f, _) => {
    if (_.preventDefault(), _.stopPropagation(), w || x) return;
    const E = b.filter((O) => O !== f), V = e.filter((O) => E.includes(O.id));
    n?.(E, V.length > 0 ? V : void 0);
  }, Ie = (f) => {
    f.preventDefault(), f.stopPropagation(), !(w || x) && n?.([], void 0);
  }, Me = (f) => d && f.code !== void 0 ? `${f.code} - ${f.name}` : f.name, De = i ? A.slice(0, i) : A, le = i ? Math.max(0, A.length - i) : 0, ce = /* @__PURE__ */ s(Ye, { open: y, onOpenChange: v, children: [
    /* @__PURE__ */ a(Ze, { asChild: !0, children: /* @__PURE__ */ s(
      T,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": y,
        disabled: w,
        size: I,
        className: r(
          "w-full justify-between group/combobox",
          !b.length && "text-muted-foreground",
          u && "border-destructive",
          o && "h-auto min-h-0",
          p
        ),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: r(
                "flex-1 flex items-center gap-1.5 min-w-0",
                o ? "flex-wrap" : "overflow-hidden"
              ),
              children: b.length === 0 ? /* @__PURE__ */ a("span", { className: "text-left truncate", children: g }) : /* @__PURE__ */ s(ge, { children: [
                De.map((f) => /* @__PURE__ */ s(
                  ne,
                  {
                    variant: "secondary",
                    className: r(
                      "gap-1 shrink-0",
                      !o && "truncate max-w-[120px]",
                      (w || x) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ a("span", { className: "truncate", children: Me(f) }),
                      !w && !x && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (_) => {
                            _.preventDefault(), _.stopPropagation();
                          },
                          onClick: (_) => ee(f.id, _),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ a(Oe, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  f.id
                )),
                le > 0 && /* @__PURE__ */ s(ne, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  le
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: b.length > 0 && !w && !x ? /* @__PURE__ */ s(
            "span",
            {
              onMouseDown: (f) => {
                f.preventDefault(), f.stopPropagation();
              },
              onClick: Ie,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ a(Fe, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ a(ue, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ a(ue, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Je,
      {
        className: r("w-(--radix-popover-trigger-width) p-0", h),
        align: "start",
        children: /* @__PURE__ */ s(Qe, { children: [
          /* @__PURE__ */ a(et, { placeholder: N }),
          /* @__PURE__ */ s(tt, { children: [
            /* @__PURE__ */ a(at, { children: P }),
            /* @__PURE__ */ a(nt, { children: e.map((f) => {
              const _ = b.includes(f.id);
              return /* @__PURE__ */ s(
                rt,
                {
                  value: f.name,
                  disabled: f.disabled,
                  onSelect: () => {
                    B(f.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        onMouseDown: (E) => E.preventDefault(),
                        onClick: (E) => {
                          E.preventDefault(), E.stopPropagation(), B(f.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ a(
                          ot,
                          {
                            checked: _,
                            disabled: f.disabled || w || x,
                            size: I
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ s("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      d && f.code !== void 0 && /* @__PURE__ */ a("span", { className: "text-muted-foreground shrink-0", children: f.code }),
                      /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: f.name })
                    ] }),
                    /* @__PURE__ */ a(
                      U,
                      {
                        className: r(
                          "h-4 w-4 shrink-0 text-primary",
                          _ ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                f.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !l && !u ? /* @__PURE__ */ a("div", { className: r("w-full", M), children: ce }) : /* @__PURE__ */ s("div", { className: r("w-full", M), children: [
    l && /* @__PURE__ */ s(ve, { className: "text-foreground leading-5 block", children: [
      l,
      c && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: l ? "mt-1" : "", children: ce }),
    u && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: u })
  ] });
}
function Ur({
  className: e,
  children: t,
  viewport: n = !0,
  ...o
}) {
  return /* @__PURE__ */ s(
    G.Root,
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
        n && /* @__PURE__ */ a(oa, {})
      ]
    }
  );
}
function Xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.List,
    {
      "data-slot": "navigation-menu-list",
      className: r("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function Yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Item,
    {
      "data-slot": "navigation-menu-item",
      className: r("relative", e),
      ...t
    }
  );
}
const ra = L(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Zr({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    G.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: r(ra(), "group", e),
      ...n,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          be,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Jr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Content,
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
function oa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: r("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ a(
    G.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: r(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function Qr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Link,
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
function eo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Indicator,
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
function ia({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "sheet", ...e });
}
function to({ ...e }) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function ao({ ...e }) {
  return /* @__PURE__ */ a(C.Close, { "data-slot": "sheet-close", ...e });
}
function sa({ ...e }) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "sheet-portal", ...e });
}
function da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Overlay,
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
function la({
  className: e,
  children: t,
  side: n = "right",
  ...o
}) {
  return /* @__PURE__ */ s(sa, { children: [
    /* @__PURE__ */ a(da, {}),
    /* @__PURE__ */ s(
      C.Content,
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
          /* @__PURE__ */ s(C.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(pe, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function ca({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: r("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function no({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: r("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function ua({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    C.Title,
    {
      "data-slot": "sheet-title",
      className: r("text-foreground font-semibold", e),
      ...t
    }
  );
}
function ma({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Description,
    {
      "data-slot": "sheet-description",
      className: r("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ae = 768;
function fa() {
  const [e, t] = m.useState(void 0);
  return m.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${ae - 1}px)`), o = () => {
      t(window.innerWidth < ae);
    };
    return n.addEventListener("change", o), t(window.innerWidth < ae), () => n.removeEventListener("change", o);
  }, []), !!e;
}
function Ce({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    H.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function ga({ ...e }) {
  return /* @__PURE__ */ a(Ce, { children: /* @__PURE__ */ a(H.Root, { "data-slot": "tooltip", ...e }) });
}
function pa({ ...e }) {
  return /* @__PURE__ */ a(H.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function ba({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ a(H.Portal, { children: /* @__PURE__ */ s(
    H.Content,
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
        /* @__PURE__ */ a(H.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const ha = "sidebar_state", va = 3600 * 24 * 7, xa = "16rem", wa = "18rem", Na = "3rem", ya = "b", ke = m.createContext(null);
function Q() {
  const e = m.useContext(ke);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function ro({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: n,
  className: o,
  style: i,
  children: d,
  ...l
}) {
  const u = fa(), [c, g] = m.useState(!1), [N, P] = m.useState(e), w = t ?? N, x = m.useCallback(
    (h) => {
      const y = typeof h == "function" ? h(w) : h;
      n ? n(y) : P(y), document.cookie = `${ha}=${y}; path=/; max-age=${va}`;
    },
    [n, w]
  ), I = m.useCallback(() => u ? g((h) => !h) : x((h) => !h), [u, x, g]);
  m.useEffect(() => {
    const h = (y) => {
      y.key === ya && (y.metaKey || y.ctrlKey) && (y.preventDefault(), I());
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [I]);
  const M = w ? "expanded" : "collapsed", p = m.useMemo(
    () => ({
      state: M,
      open: w,
      setOpen: x,
      isMobile: u,
      openMobile: c,
      setOpenMobile: g,
      toggleSidebar: I
    }),
    [M, w, x, u, c, g, I]
  );
  return /* @__PURE__ */ a(ke.Provider, { value: p, children: /* @__PURE__ */ a(Ce, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": xa,
        "--sidebar-width-icon": Na,
        ...i
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...l,
      children: d
    }
  ) }) });
}
function oo({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: n = "offcanvas",
  className: o,
  children: i,
  ...d
}) {
  const { isMobile: l, state: u, openMobile: c, setOpenMobile: g } = Q();
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
  ) : l ? /* @__PURE__ */ a(ia, { open: c, onOpenChange: g, ...d, children: /* @__PURE__ */ s(
    la,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": wa
      },
      side: e,
      children: [
        /* @__PURE__ */ s(ca, { className: "sr-only", children: [
          /* @__PURE__ */ a(ua, { children: "Sidebar" }),
          /* @__PURE__ */ a(ma, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ s(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? n : "",
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
function io({ className: e, onClick: t, ...n }) {
  const { toggleSidebar: o } = Q();
  return /* @__PURE__ */ s(
    T,
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
        /* @__PURE__ */ a(He, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function so({ className: e, ...t }) {
  const { toggleSidebar: n } = Q();
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
function lo({ className: e, ...t }) {
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
function co({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    se,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function uo({ className: e, ...t }) {
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
function mo({ className: e, ...t }) {
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
function fo({ className: e, ...t }) {
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
function go({ className: e, ...t }) {
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
function po({ className: e, ...t }) {
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
function bo({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? F : "div",
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
function ho({
  className: e,
  asChild: t = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? F : "button",
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
function vo({ className: e, ...t }) {
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
function xo({ className: e, ...t }) {
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
function wo({ className: e, ...t }) {
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
const Ca = L(
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
function No({
  asChild: e = !1,
  isActive: t = !1,
  variant: n = "default",
  size: o = "default",
  tooltip: i,
  className: d,
  ...l
}) {
  const u = e ? F : "button", { isMobile: c, state: g } = Q(), N = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: r(Ca({ variant: n, size: o }), d),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ s(ga, { children: [
    /* @__PURE__ */ a(pa, { asChild: !0, children: N }),
    /* @__PURE__ */ a(
      ba,
      {
        side: "right",
        align: "center",
        hidden: g !== "collapsed" || c,
        ...i
      }
    )
  ] })) : N;
}
function yo({
  className: e,
  asChild: t = !1,
  showOnHover: n = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? F : "button",
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
function Co({ className: e, ...t }) {
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
function ko({
  className: e,
  showIcon: t = !1,
  ...n
}) {
  const [o] = m.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ a(D, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          D,
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
function So({ className: e, ...t }) {
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
function zo({ className: e, ...t }) {
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
function Io({
  asChild: e = !1,
  size: t = "md",
  isActive: n = !1,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? F : "a",
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
const ka = {
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
function Mo({ className: e, status: t, label: n, ...o }) {
  const i = ka[t];
  return /* @__PURE__ */ a(ne, { variant: "outline", className: r(i.className, e), ...o, children: n || i.label });
}
function Do({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Z.Root,
    {
      "data-slot": "tabs",
      className: r("flex flex-col gap-2", e),
      ...t
    }
  );
}
function _o({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Z.List,
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
function To({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Z.Trigger,
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
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Z.Content,
    {
      "data-slot": "tabs-content",
      className: r("flex-1 outline-none", e),
      ...t
    }
  );
}
const Se = L(
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
function Ao({
  className: e,
  variant: t,
  size: n,
  ...o
}) {
  return /* @__PURE__ */ a(
    kt.Root,
    {
      "data-slot": "toggle",
      className: r(Se({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
const ze = m.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Eo({
  className: e,
  variant: t,
  size: n,
  spacing: o = 0,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ a(
    xe.Root,
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
      children: /* @__PURE__ */ a(ze.Provider, { value: { variant: t, size: n, spacing: o }, children: i })
    }
  );
}
function Ro({
  className: e,
  children: t,
  variant: n,
  size: o,
  ...i
}) {
  const d = m.useContext(ze);
  return /* @__PURE__ */ a(
    xe.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || n,
      "data-size": d.size || o,
      "data-spacing": d.spacing,
      className: r(
        Se({
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
export {
  Ba as Accordion,
  Ha as AccordionContent,
  Oa as AccordionItem,
  Fa as AccordionTrigger,
  Va as AlertDialog,
  Ya as AlertDialogAction,
  Za as AlertDialogCancel,
  Ka as AlertDialogContent,
  Xa as AlertDialogDescription,
  Wa as AlertDialogFooter,
  qa as AlertDialogHeader,
  Et as AlertDialogOverlay,
  At as AlertDialogPortal,
  Ua as AlertDialogTitle,
  $a as AlertDialogTrigger,
  Ja as ButtonGroup,
  en as ButtonGroupSeparator,
  Qa as ButtonGroupText,
  Go as Calendar,
  Bo as CalendarDayButton,
  tn as Carousel,
  an as CarouselContent,
  nn as CarouselItem,
  on as CarouselNext,
  rn as CarouselPrevious,
  sn as ChartContainer,
  cn as ChartLegend,
  un as ChartLegendContent,
  jt as ChartStyle,
  dn as ChartTooltip,
  ln as ChartTooltipContent,
  Oo as Combobox,
  Gt as ConfirmDialog,
  mn as ContextMenu,
  yn as ContextMenuCheckboxItem,
  wn as ContextMenuContent,
  gn as ContextMenuGroup,
  Nn as ContextMenuItem,
  kn as ContextMenuLabel,
  pn as ContextMenuPortal,
  hn as ContextMenuRadioGroup,
  Cn as ContextMenuRadioItem,
  Sn as ContextMenuSeparator,
  zn as ContextMenuShortcut,
  bn as ContextMenuSub,
  xn as ContextMenuSubContent,
  vn as ContextMenuSubTrigger,
  fn as ContextMenuTrigger,
  Mn as DataTable,
  Fo as DatePicker,
  Ho as DateRangePicker,
  Dn as DeleteConfirmDialog,
  St as Dialog,
  Ga as DialogClose,
  Mt as DialogContent,
  Pt as DialogDescription,
  _t as DialogFooter,
  Dt as DialogHeader,
  It as DialogOverlay,
  zt as DialogPortal,
  Tt as DialogTitle,
  ja as DialogTrigger,
  _n as Drawer,
  Pn as DrawerClose,
  An as DrawerContent,
  jn as DrawerDescription,
  Rn as DrawerFooter,
  En as DrawerHeader,
  Yt as DrawerOverlay,
  Xt as DrawerPortal,
  Ln as DrawerTitle,
  Tn as DrawerTrigger,
  Gn as DropdownMenu,
  $n as DropdownMenuCheckboxItem,
  Fn as DropdownMenuContent,
  Hn as DropdownMenuGroup,
  Vn as DropdownMenuItem,
  Wn as DropdownMenuLabel,
  Bn as DropdownMenuPortal,
  Kn as DropdownMenuRadioGroup,
  qn as DropdownMenuRadioItem,
  Un as DropdownMenuSeparator,
  Xn as DropdownMenuShortcut,
  Yn as DropdownMenuSub,
  Jn as DropdownMenuSubContent,
  Zn as DropdownMenuSubTrigger,
  On as DropdownMenuTrigger,
  gt as Empty,
  xt as EmptyContent,
  vt as EmptyDescription,
  pt as EmptyHeader,
  bt as EmptyMedia,
  Qn as EmptyState,
  ht as EmptyTitle,
  er as ErrorBoundary,
  rr as Field,
  or as FieldContent,
  dr as FieldDescription,
  cr as FieldError,
  nr as FieldGroup,
  ir as FieldLabel,
  ar as FieldLegend,
  lr as FieldSeparator,
  tr as FieldSet,
  sr as FieldTitle,
  ur as HoverCard,
  fr as HoverCardContent,
  mr as HoverCardTrigger,
  gr as InputGroup,
  pr as InputGroupAddon,
  br as InputGroupButton,
  vr as InputGroupInput,
  hr as InputGroupText,
  xr as InputGroupTextarea,
  yr as Item,
  Ir as ItemActions,
  kr as ItemContent,
  zr as ItemDescription,
  Dr as ItemFooter,
  wr as ItemGroup,
  Mr as ItemHeader,
  Cr as ItemMedia,
  Nr as ItemSeparator,
  Sr as ItemTitle,
  _r as LoadingButton,
  Tr as LoadingState,
  Pr as Menubar,
  Br as MenubarCheckboxItem,
  jr as MenubarContent,
  Er as MenubarGroup,
  Gr as MenubarItem,
  Fr as MenubarLabel,
  Ar as MenubarMenu,
  na as MenubarPortal,
  Rr as MenubarRadioGroup,
  Or as MenubarRadioItem,
  Hr as MenubarSeparator,
  Vr as MenubarShortcut,
  $r as MenubarSub,
  qr as MenubarSubContent,
  Kr as MenubarSubTrigger,
  Lr as MenubarTrigger,
  Vo as MonthPicker,
  Wr as MultipleCombobox,
  Ur as NavigationMenu,
  Jr as NavigationMenuContent,
  eo as NavigationMenuIndicator,
  Yr as NavigationMenuItem,
  Qr as NavigationMenuLink,
  Xr as NavigationMenuList,
  Zr as NavigationMenuTrigger,
  oa as NavigationMenuViewport,
  Ot as Pagination,
  Ft as PaginationContent,
  In as PaginationEllipsis,
  $ as PaginationItem,
  q as PaginationLink,
  Vt as PaginationNext,
  Ht as PaginationPrevious,
  Wt as PaginationRange,
  Ye as Popover,
  $o as PopoverAnchor,
  Je as PopoverContent,
  Ze as PopoverTrigger,
  Ko as Progress,
  qo as ScrollArea,
  Wo as ScrollBar,
  Ke as Select,
  Ue as SelectContent,
  Uo as SelectGroup,
  Xe as SelectItem,
  Xo as SelectLabel,
  Yo as SelectScrollDownButton,
  Zo as SelectScrollUpButton,
  Jo as SelectSeparator,
  qe as SelectTrigger,
  We as SelectValue,
  ia as Sheet,
  ao as SheetClose,
  la as SheetContent,
  ma as SheetDescription,
  no as SheetFooter,
  ca as SheetHeader,
  ua as SheetTitle,
  to as SheetTrigger,
  oo as Sidebar,
  go as SidebarContent,
  mo as SidebarFooter,
  po as SidebarGroup,
  ho as SidebarGroupAction,
  vo as SidebarGroupContent,
  bo as SidebarGroupLabel,
  uo as SidebarHeader,
  co as SidebarInput,
  lo as SidebarInset,
  xo as SidebarMenu,
  yo as SidebarMenuAction,
  Co as SidebarMenuBadge,
  No as SidebarMenuButton,
  wo as SidebarMenuItem,
  ko as SidebarMenuSkeleton,
  So as SidebarMenuSub,
  Io as SidebarMenuSubButton,
  zo as SidebarMenuSubItem,
  ro as SidebarProvider,
  so as SidebarRail,
  fo as SidebarSeparator,
  io as SidebarTrigger,
  D as Skeleton,
  Ct as Spinner,
  Mo as StatusBadge,
  ct as Table,
  ft as TableBody,
  ti as TableCaption,
  fe as TableCell,
  ai as TableFooter,
  mt as TableHead,
  ut as TableHeader,
  te as TableRow,
  Do as Tabs,
  Po as TabsContent,
  _o as TabsList,
  To as TabsTrigger,
  $e as Textarea,
  Qo as TimePicker,
  Ao as Toggle,
  Eo as ToggleGroup,
  Ro as ToggleGroupItem,
  ga as Tooltip,
  ba as TooltipContent,
  Ce as TooltipProvider,
  pa as TooltipTrigger,
  Rt as buttonGroupVariants,
  ra as navigationMenuTriggerStyle,
  Se as toggleVariants,
  Q as useSidebar
};
//# sourceMappingURL=index-client.mjs.map
