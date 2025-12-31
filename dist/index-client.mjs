import { jsx as a, jsxs as s, Fragment as Ce } from "react/jsx-runtime";
import * as q from "@radix-ui/react-accordion";
import { ChevronDownIcon as ke, MoreHorizontal as me, ChevronRight as Se, ArrowRight as Fe, ArrowLeft as $e, CheckIcon as ae, CircleIcon as fe, ChevronRightIcon as re, MoreHorizontalIcon as He, ChevronLeftIcon as Ve, ChevronsLeft as Ue, ChevronsRight as Ke, ArrowUp as We, ArrowDown as qe, ArrowUpDown as Xe, AlertCircle as Ze, X as ge, ZoomOut as Ye, ZoomIn as Je, ChevronLeft as Qe, Image as et, MinusIcon as tt, XCircle as at, ChevronDown as we, GripVerticalIcon as rt, XIcon as nt, PanelLeftIcon as ot, Loader2Icon as it, OctagonXIcon as st, TriangleAlertIcon as lt, InfoIcon as dt, CircleCheckIcon as ct } from "lucide-react";
import * as u from "react";
import { useMemo as ut } from "react";
import { c as n, b as pe, S as ne, a as I, I as be, L as ze, T as mt, B as ce } from "./textarea-ByQixttw.js";
import * as G from "@radix-ui/react-alert-dialog";
import * as ft from "@radix-ui/react-aspect-ratio";
import { Slot as B } from "@radix-ui/react-slot";
import { cva as O } from "class-variance-authority";
import { h as Ie, i as Me, j as De, k as Te, l as _e, m as gt, S as pt, c as bt, d as ht, e as vt, f as xt, P as wt, n as Nt, o as yt, p as Ct, q as kt, r as St, s as zt, t as It, u as Mt, C as Dt } from "./switch-Kxcmpitu.js";
import { v as _i, w as Pi, a as Ri, x as Ai, y as Li, z as Ei, D as ji, b as Gi, A as Oi, B as Bi, G as Fi, H as $i, E as Hi, F as Vi, M as Ui, I as Ki, J as Wi, R as qi, K as Xi, L as Zi, N as Yi, O as Ji, Q as Qi, T as es, U as ts, V as as, g as rs, W as ns } from "./switch-Kxcmpitu.js";
import Tt from "embla-carousel-react";
import * as he from "recharts";
import * as ve from "@radix-ui/react-collapsible";
import * as M from "@radix-ui/react-context-menu";
import { SelectGroup as _t } from "@radix-ui/react-select";
import { useReactTable as Pt, getCoreRowModel as Rt, flexRender as Ne } from "@tanstack/react-table";
import { T as At, a as Lt, b as le, c as Et, d as jt, e as ye, E as Gt, f as Ot, g as Bt, h as Ft, i as $t, j as Ht, A as Vt, k as Ut, l as Kt, S as Wt, m as L } from "./skeleton-CNbSXVZ4.js";
import { o as is, n as ss } from "./skeleton-CNbSXVZ4.js";
import { Drawer as F } from "vaul";
import * as D from "@radix-ui/react-dropdown-menu";
import * as te from "@radix-ui/react-hover-card";
import { OTPInput as qt, OTPInputContext as Xt } from "input-otp";
import * as T from "@radix-ui/react-menubar";
import * as $ from "@radix-ui/react-navigation-menu";
import { Group as Zt, Panel as Yt, Separator as Jt } from "react-resizable-panels";
import * as j from "@radix-ui/react-dialog";
import * as V from "@radix-ui/react-tooltip";
import * as ee from "@radix-ui/react-slider";
import { useTheme as Qt } from "next-themes";
import { Toaster as ea } from "sonner";
import * as oe from "@radix-ui/react-tabs";
import * as ta from "@radix-ui/react-toggle";
import * as Pe from "@radix-ui/react-toggle-group";
function ur({ ...e }) {
  return /* @__PURE__ */ a(q.Root, { "data-slot": "accordion", ...e });
}
function mr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    q.Item,
    {
      "data-slot": "accordion-item",
      className: n("border-b last:border-b-0", e),
      ...t
    }
  );
}
function fr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(q.Header, { className: "flex", children: /* @__PURE__ */ s(
    q.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: n(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ a(ke, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function gr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    q.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: n("pt-0 pb-4", e), children: t })
    }
  );
}
function pr({ ...e }) {
  return /* @__PURE__ */ a(G.Root, { "data-slot": "alert-dialog", ...e });
}
function br({
  ...e
}) {
  return /* @__PURE__ */ a(G.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function aa({ ...e }) {
  return /* @__PURE__ */ a(G.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function ra({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function hr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ s(aa, { children: [
    /* @__PURE__ */ a(ra, {}),
    /* @__PURE__ */ a(
      G.Content,
      {
        "data-slot": "alert-dialog-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: n("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function xr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: n("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function wr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Title,
    {
      "data-slot": "alert-dialog-title",
      className: n("text-lg font-semibold", e),
      ...t
    }
  );
}
function Nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Description,
    {
      "data-slot": "alert-dialog-description",
      className: n("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(G.Action, { className: n(pe(), e), ...t });
}
function Cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    G.Cancel,
    {
      className: n(pe({ variant: "outline" }), e),
      ...t
    }
  );
}
function na({ ...e }) {
  return /* @__PURE__ */ a(ft.Root, { "data-slot": "aspect-ratio", ...e });
}
function kr({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: n(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function zr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: n("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Ir({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? B : "a",
    {
      "data-slot": "breadcrumb-link",
      className: n("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function Mr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: n("text-foreground font-normal", e),
      ...t
    }
  );
}
function Dr({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: n("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(Se, {})
    }
  );
}
function Tr({ className: e, ...t }) {
  return /* @__PURE__ */ s(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: n("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(me, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const oa = O(
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
function _r({
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
      className: n(oa({ orientation: t }), e),
      ...r
    }
  );
}
function Pr({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? B : "div",
    {
      className: n(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Rr({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    ne,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: n(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...r
    }
  );
}
const Re = u.createContext(null);
function ie() {
  const e = u.useContext(Re);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Ar({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: o,
  className: i,
  children: d,
  ...l
}) {
  const [g, c] = Tt(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [p, w] = u.useState(!1), [z, m] = u.useState(!1), f = u.useCallback((N) => {
    N && (w(N.canScrollPrev()), m(N.canScrollNext()));
  }, []), k = u.useCallback(() => {
    c?.scrollPrev();
  }, [c]), S = u.useCallback(() => {
    c?.scrollNext();
  }, [c]), h = u.useCallback(
    (N) => {
      N.key === "ArrowLeft" ? (N.preventDefault(), k()) : N.key === "ArrowRight" && (N.preventDefault(), S());
    },
    [k, S]
  );
  return u.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), u.useEffect(() => {
    if (c)
      return f(c), c.on("reInit", f), c.on("select", f), () => {
        c?.off("select", f);
      };
  }, [c, f]), /* @__PURE__ */ a(
    Re.Provider,
    {
      value: {
        carouselRef: g,
        api: c,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: k,
        scrollNext: S,
        canScrollPrev: p,
        canScrollNext: z
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: h,
          className: n("relative", i),
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
function Lr({ className: e, ...t }) {
  const { carouselRef: r, orientation: o } = ie();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: n("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function Er({ className: e, ...t }) {
  const { orientation: r } = ie();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: n(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function jr({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: i, scrollPrev: d, canScrollPrev: l } = ie();
  return /* @__PURE__ */ s(
    I,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a($e, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Gr({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: i, scrollNext: d, canScrollNext: l } = ie();
  return /* @__PURE__ */ s(
    I,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: d,
      ...o,
      children: [
        /* @__PURE__ */ a(Fe, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const ia = { light: "", dark: ".dark" }, Ae = u.createContext(null);
function Le() {
  const e = u.useContext(Ae);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Or({
  id: e,
  className: t,
  children: r,
  config: o,
  ...i
}) {
  const d = u.useId(), l = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(Ae.Provider, { value: { config: o }, children: /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "chart",
      "data-chart": l,
      className: n(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(sa, { id: l, config: o }),
        /* @__PURE__ */ a(he.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const sa = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([, o]) => o.theme || o.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ia).map(
          ([o, i]) => `
${i} [data-chart=${e}] {
${r.map(([d, l]) => {
            const g = l.theme?.[o] || l.color;
            return g ? `  --color-${d}: ${g};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Br = he.Tooltip;
function Fr({
  active: e,
  payload: t,
  className: r,
  indicator: o = "dot",
  hideLabel: i = !1,
  hideIndicator: d = !1,
  label: l,
  labelFormatter: g,
  labelClassName: c,
  formatter: p,
  color: w,
  nameKey: z,
  labelKey: m
}) {
  const { config: f } = Le(), k = u.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [h] = t, N = `${m || h?.dataKey || h?.name || "value"}`, C = ue(f, h, N), y = !m && typeof l == "string" ? f[l]?.label || l : C?.label;
    return g ? /* @__PURE__ */ a("div", { className: n("font-medium", c), children: g(y, t) }) : y ? /* @__PURE__ */ a("div", { className: n("font-medium", c), children: y }) : null;
  }, [l, g, t, i, c, f, m]);
  if (!e || !t?.length)
    return null;
  const S = t.length === 1 && o !== "dot";
  return /* @__PURE__ */ s(
    "div",
    {
      className: n(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        S ? null : k,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((h) => h.type !== "none").map((h, N) => {
          const C = `${z || h.name || h.dataKey || "value"}`, y = ue(f, h, C), x = w || h.payload.fill || h.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: n(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: p && h?.value !== void 0 && h.name ? p(h.value, h.name, h, N, h.payload) : /* @__PURE__ */ s(Ce, { children: [
                y?.icon ? /* @__PURE__ */ a(y.icon, {}) : !d && /* @__PURE__ */ a(
                  "div",
                  {
                    className: n(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": S && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": x,
                      "--color-border": x
                    }
                  }
                ),
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: n(
                      "flex flex-1 justify-between leading-none",
                      S ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ s("div", { className: "grid gap-1.5", children: [
                        S ? k : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: y?.label || h.name })
                      ] }),
                      h.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: h.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            h.dataKey
          );
        }) })
      ]
    }
  );
}
const $r = he.Legend;
function Hr({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: o = "bottom",
  nameKey: i
}) {
  const { config: d } = Le();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: n(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((l) => l.type !== "none").map((l) => {
        const g = `${i || l.dataKey || "value"}`, c = ue(d, l, g);
        return /* @__PURE__ */ s(
          "div",
          {
            className: n(
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
function ue(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const o = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : o && r in o && typeof o[r] == "string" && (i = o[r]), i in e ? e[i] : e[r];
}
function Vr({ ...e }) {
  return /* @__PURE__ */ a(ve.Root, { "data-slot": "collapsible", ...e });
}
function Ur({
  ...e
}) {
  return /* @__PURE__ */ a(ve.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function Kr({
  ...e
}) {
  return /* @__PURE__ */ a(ve.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
function la({
  open: e,
  onOpenChange: t,
  title: r,
  description: o,
  confirmText: i = "Confirm",
  cancelText: d = "Cancel",
  onConfirm: l,
  variant: g = "default",
  loading: c = !1
}) {
  const [p, w] = u.useState(!1);
  return /* @__PURE__ */ a(Ie, { open: e, onOpenChange: t, children: /* @__PURE__ */ s(Me, { children: [
    /* @__PURE__ */ s(De, { children: [
      /* @__PURE__ */ a(Te, { children: r }),
      o && /* @__PURE__ */ a(_e, { children: o })
    ] }),
    /* @__PURE__ */ s(gt, { children: [
      /* @__PURE__ */ a(
        I,
        {
          variant: "outline",
          onClick: () => t(!1),
          disabled: p || c,
          children: d
        }
      ),
      /* @__PURE__ */ a(I, { variant: g, onClick: async () => {
        w(!0);
        try {
          await l(), t(!1);
        } finally {
          w(!1);
        }
      }, disabled: p || c, children: p || c ? "Loading..." : i })
    ] })
  ] }) });
}
function Wr({ ...e }) {
  return /* @__PURE__ */ a(M.Root, { "data-slot": "context-menu", ...e });
}
function qr({
  ...e
}) {
  return /* @__PURE__ */ a(M.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function Xr({ ...e }) {
  return /* @__PURE__ */ a(M.Group, { "data-slot": "context-menu-group", ...e });
}
function Zr({ ...e }) {
  return /* @__PURE__ */ a(M.Portal, { "data-slot": "context-menu-portal", ...e });
}
function Yr({ ...e }) {
  return /* @__PURE__ */ a(M.Sub, { "data-slot": "context-menu-sub", ...e });
}
function Jr({
  ...e
}) {
  return /* @__PURE__ */ a(M.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function Qr({
  className: e,
  inset: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    M.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(re, { className: "ml-auto" })
      ]
    }
  );
}
function en({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(M.Portal, { children: /* @__PURE__ */ a(
    M.Content,
    {
      "data-slot": "context-menu-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function an({
  className: e,
  inset: t,
  variant: r = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    M.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function rn({
  className: e,
  children: t,
  checked: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    M.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(M.ItemIndicator, { children: /* @__PURE__ */ a(ae, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function nn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ s(
    M.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(M.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function on({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    M.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: n("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    M.Separator,
    {
      "data-slot": "context-menu-separator",
      className: n("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function ln({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
const da = [
  { id: 10, name: "10/trang" },
  { id: 20, name: "20/trang" },
  { id: 50, name: "50/trang" },
  { id: 100, name: "100/trang" }
];
function ca({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: n("flex justify-center mx-auto w-full", e),
      ...t
    }
  );
}
function ua({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: n("flex flex-row gap-1 items-center", e),
      ...t
    }
  );
}
function W({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function X({
  className: e,
  isActive: t,
  disabled: r,
  size: o = "icon-sm",
  ...i
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: n(
        pe({
          variant: t ? "outline" : "ghost",
          size: o,
          className: n(
            "rounded-full",
            t && "!bg-primary/25 text-primary",
            r && "opacity-50 cursor-not-allowed",
            e
          )
        })
      ),
      ...i
    }
  );
}
function ma({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    X,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: n("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(Ve, {})
    }
  );
}
function fa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    X,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: n("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(re, {})
    }
  );
}
function dn({ className: e, ...t }) {
  return /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: n("flex justify-center items-center size-9", e),
      ...t,
      children: [
        /* @__PURE__ */ a(He, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
const ga = (e, t, r = 1) => {
  const i = t, d = Math.max(e - r, 1), l = Math.min(e + r, i), g = d > 2, c = l < i - 1, p = [];
  p.push(1), g ? p.push("left-ellipsis") : 2 < d && p.push(2);
  for (let w = d; w <= l; w++)
    w !== 1 && w !== i && p.push(w);
  return c ? p.push("right-ellipsis") : l < i - 1 && p.push(i - 1), i !== 1 && p.push(i), p;
}, pa = ({ className: e, ...t }) => /* @__PURE__ */ s(
  X,
  {
    className: n(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(me, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(Ue, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100" })
    ]
  }
), ba = ({ className: e, ...t }) => /* @__PURE__ */ s(
  X,
  {
    className: n(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(me, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(Ke, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100 text-primary" })
    ]
  }
), ha = ({
  currentPage: e,
  totalPages: t,
  pageSize: r,
  siblingCount: o = 1,
  onPageChange: i
}) => {
  const d = u.useMemo(
    () => ga(e, t, o),
    [e, t, o]
  );
  return /* @__PURE__ */ s("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ a(
      ma,
      {
        onClick: () => e > 1 && i(e - 1, r),
        disabled: e === 1,
        "aria-disabled": e === 1,
        className: "cursor-pointer"
      }
    ),
    d.map((l, g) => l === "left-ellipsis" ? /* @__PURE__ */ a(W, { children: /* @__PURE__ */ a(pa, { onClick: () => i(e - o, r) }) }, `ellipsis-${g}`) : l === "right-ellipsis" ? /* @__PURE__ */ a(W, { children: /* @__PURE__ */ a(ba, { onClick: () => i(e + o, r) }) }, `ellipsis-${g}`) : /* @__PURE__ */ a(W, { children: /* @__PURE__ */ a(
      X,
      {
        isActive: e === l,
        onClick: () => l !== e && i(l, r),
        className: "cursor-pointer",
        children: l
      }
    ) }, l)),
    /* @__PURE__ */ a(
      fa,
      {
        onClick: () => e < t && i(e + 1, r),
        disabled: e === t,
        "aria-disabled": e === t,
        className: "cursor-pointer"
      }
    )
  ] });
};
function cn({
  data: e,
  paginationOptions: t,
  columns: r,
  totalPages: o = 0,
  searchable: i = !1,
  searchPlaceholder: d,
  searchKey: l,
  emptyMessage: g,
  className: c,
  enableGlobalFilter: p = !0,
  globalFilterFn: w,
  pagination: z,
  onRowClick: m,
  rowClassName: f
}) {
  const [k, S] = u.useState([]), [h, N] = u.useState(""), C = Pt({
    data: e,
    columns: r,
    getRowId: (y, x) => "id" in y && y.id != null ? String(y.id) : String(x),
    getCoreRowModel: Rt(),
    onSortingChange: S,
    manualFiltering: !0,
    manualSorting: !0,
    manualPagination: !0,
    globalFilterFn: w || ((y, x, _) => {
      if (!l)
        return Object.values(y.original).some(
          (U) => String(U).toLowerCase().includes(String(_).toLowerCase())
        );
      const E = y.original[l];
      return String(E).toLowerCase().includes(String(_).toLowerCase());
    }),
    enableGlobalFilter: i && p,
    state: {
      sorting: k,
      pagination: z,
      columnPinning: {
        right: ["actions"]
      }
    },
    ...t
  });
  return /* @__PURE__ */ s("div", { className: n("space-y-4", c), children: [
    i && /* @__PURE__ */ a(
      be,
      {
        placeholder: d || "Search...",
        value: h ?? "",
        onChange: (y) => N(y.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ a("div", { className: "rounded-md border", children: /* @__PURE__ */ s(At, { children: [
      /* @__PURE__ */ a(Lt, { children: C.getHeaderGroups().map((y) => /* @__PURE__ */ a(le, { children: y.headers.map((x) => {
        const _ = x.column.getCanSort(), E = x.column.getIsSorted();
        return /* @__PURE__ */ a(Et, { children: x.isPlaceholder ? null : /* @__PURE__ */ s("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: n(
                _ && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: _ ? x.column.getToggleSortingHandler() : void 0,
              children: Ne(x.column.columnDef.header, x.getContext())
            }
          ),
          _ && /* @__PURE__ */ a(
            I,
            {
              variant: "ghost",
              size: "icon",
              className: "w-4 h-4",
              onClick: x.column.getToggleSortingHandler(),
              children: E === "asc" ? /* @__PURE__ */ a(We, { className: "size-3.5 text-primary" }) : E === "desc" ? /* @__PURE__ */ a(qe, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ a(Xe, { className: "size-3.5" })
            }
          )
        ] }) }, x.id);
      }) }, y.id)) }),
      /* @__PURE__ */ a(jt, { children: C.getRowModel().rows?.length ? C.getRowModel().rows.map((y) => /* @__PURE__ */ a(
        le,
        {
          "data-state": y.getIsSelected() && "selected",
          className: n(
            m && "cursor-pointer",
            f && f(y.original)
          ),
          onClick: () => m?.(y.original),
          children: y.getVisibleCells().map((x) => /* @__PURE__ */ a(ye, { children: Ne(x.column.columnDef.cell, x.getContext()) }, x.id))
        },
        y.id
      )) : /* @__PURE__ */ a(le, { children: /* @__PURE__ */ a(ye, { colSpan: C.getAllColumns().length, className: "py-8 text-center", children: g || "No data available" }) }) })
    ] }) }),
    typeof o == "number" && o > 1 && /* @__PURE__ */ a(va, { table: C, totalPages: o })
  ] });
}
function va({ table: e, totalPages: t }) {
  return /* @__PURE__ */ a(ca, { children: /* @__PURE__ */ s(ua, { className: "flex-1 gap-4 justify-end", children: [
    /* @__PURE__ */ a(W, { children: /* @__PURE__ */ a(
      ha,
      {
        currentPage: e.getState().pagination.pageIndex + 1,
        pageSize: e.getState().pagination.pageSize,
        totalPages: t,
        isGroupButton: !0,
        onPageChange: (r) => {
          e.setPageIndex(r - 1);
        }
      }
    ) }),
    /* @__PURE__ */ a(W, { children: /* @__PURE__ */ s(
      pt,
      {
        onValueChange: (r) => {
          e.setPageSize(Number(r));
        },
        value: e.getState().pagination.pageSize.toString(),
        children: [
          /* @__PURE__ */ a(bt, { className: "w-[130px]", size: "sm", children: /* @__PURE__ */ a(ht, { placeholder: "Chọn" }) }),
          /* @__PURE__ */ a(vt, { children: /* @__PURE__ */ a(_t, { children: da.map((r) => /* @__PURE__ */ a(xt, { value: r.id.toString(), children: r.name }, r.id)) }) })
        ]
      }
    ) })
  ] }) });
}
function un({
  open: e,
  onOpenChange: t,
  title: r,
  description: o,
  itemName: i,
  onConfirm: d,
  loading: l = !1
}) {
  return /* @__PURE__ */ a(
    la,
    {
      open: e,
      onOpenChange: t,
      title: r || "Delete Confirmation",
      description: o || (i ? `Are you sure you want to delete "${i}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: d,
      variant: "destructive",
      loading: l
    }
  );
}
function mn({ ...e }) {
  return /* @__PURE__ */ a(F.Root, { "data-slot": "drawer", ...e });
}
function fn({ ...e }) {
  return /* @__PURE__ */ a(F.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function xa({ ...e }) {
  return /* @__PURE__ */ a(F.Portal, { "data-slot": "drawer-portal", ...e });
}
function gn({ ...e }) {
  return /* @__PURE__ */ a(F.Close, { "data-slot": "drawer-close", ...e });
}
function wa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    F.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function pn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ s(xa, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(wa, {}),
    /* @__PURE__ */ s(
      F.Content,
      {
        "data-slot": "drawer-content",
        className: n(
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
function bn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: n(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
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
      "data-slot": "drawer-footer",
      className: n("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    F.Title,
    {
      "data-slot": "drawer-title",
      className: n("text-foreground font-semibold", e),
      ...t
    }
  );
}
function xn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    F.Description,
    {
      "data-slot": "drawer-description",
      className: n("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function wn({ ...e }) {
  return /* @__PURE__ */ a(D.Root, { "data-slot": "dropdown-menu", ...e });
}
function Nn({
  ...e
}) {
  return /* @__PURE__ */ a(D.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function yn({
  ...e
}) {
  return /* @__PURE__ */ a(D.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Cn({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ a(D.Portal, { children: /* @__PURE__ */ a(
    D.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...r
    }
  ) });
}
function kn({ ...e }) {
  return /* @__PURE__ */ a(D.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function Sn({
  className: e,
  inset: t,
  variant: r = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    D.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function zn({
  className: e,
  children: t,
  checked: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    D.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(D.ItemIndicator, { children: /* @__PURE__ */ a(ae, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function In({
  ...e
}) {
  return /* @__PURE__ */ a(D.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function Mn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ s(
    D.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(D.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Dn({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    D.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: n("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function Tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: n("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function _n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Pn({ ...e }) {
  return /* @__PURE__ */ a(D.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function Rn({
  className: e,
  inset: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    D.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(re, { className: "ml-auto size-4" })
      ]
    }
  );
}
function An({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Ln({
  className: e,
  icon: t,
  title: r = "No data",
  description: o,
  action: i,
  children: d,
  ...l
}) {
  return /* @__PURE__ */ s(Gt, { className: n(e), ...l, children: [
    /* @__PURE__ */ s(Ot, { children: [
      t && /* @__PURE__ */ a(Bt, { variant: "icon", children: t }),
      /* @__PURE__ */ a(Ft, { children: r }),
      o && /* @__PURE__ */ a($t, { children: o })
    ] }),
    d && /* @__PURE__ */ a(Ht, { children: d }),
    i && /* @__PURE__ */ a(I, { onClick: i.onClick, variant: "outline", children: i.label })
  ] });
}
class En extends u.Component {
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
        Na,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function Na({ error: e, resetError: t }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ s(Vt, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ a(Ze, { className: "h-4 w-4" }),
    /* @__PURE__ */ a(Ut, { children: "Something went wrong" }),
    /* @__PURE__ */ a(Kt, { children: e?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ a(I, { variant: "outline", size: "sm", onClick: t, className: "mt-4", children: "Try again" })
  ] }) });
}
function jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: n(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function Gn({
  className: e,
  variant: t = "legend",
  ...r
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: n(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...r
    }
  );
}
function On({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: n(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const ya = O("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
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
function Bn({
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
      className: n(ya({ orientation: t }), e),
      ...r
    }
  );
}
function Fn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: n("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function $n({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ze,
    {
      "data-slot": "field-label",
      className: n(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function Hn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: n(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function Vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: n(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Un({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: n(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(ne, { className: "absolute inset-0 top-1/2" }),
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
function Kn({
  className: e,
  children: t,
  errors: r,
  ...o
}) {
  const i = ut(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const d = [...new Map(r.map((l) => [l?.message, l])).values()];
    return d?.length == 1 ? d[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: d.map((l, g) => l?.message && /* @__PURE__ */ a("li", { children: l.message }, g)) });
  }, [t, r]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: n("text-destructive text-sm font-normal", e),
      ...o,
      children: i
    }
  ) : null;
}
function Wn({ ...e }) {
  return /* @__PURE__ */ a(te.Root, { "data-slot": "hover-card", ...e });
}
function qn({ ...e }) {
  return /* @__PURE__ */ a(te.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function Xn({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...o
}) {
  return /* @__PURE__ */ a(te.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    te.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: r,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...o
    }
  ) });
}
function Zn({
  images: e,
  open: t,
  onOpenChange: r,
  initialIndex: o = 0,
  showNavigation: i = !0,
  showCounter: d = !0,
  showZoom: l = !0,
  className: g
}) {
  const [c, p] = u.useState(o), [w, z] = u.useState(1), [m, f] = u.useState({ x: 0, y: 0 }), [k, S] = u.useState(!1), [h, N] = u.useState({ x: 0, y: 0 }), C = u.useRef(null);
  u.useEffect(() => {
    t && (p(o), z(1), f({ x: 0, y: 0 }));
  }, [t, o]), u.useEffect(() => {
    t && o >= 0 && o < e.length && p(o);
  }, [o, e.length, t]);
  const y = (v) => typeof v == "string" ? v : v instanceof File ? URL.createObjectURL(v) : v.url, x = (v, P) => typeof v == "string" ? `Image ${P + 1}` : v instanceof File ? v.name : v.alt || `Image ${P + 1}`, _ = e[c], E = _ ? y(_) : "", U = _ ? x(_, c) : "", Z = () => {
    c > 0 && (p(c - 1), z(1), f({ x: 0, y: 0 }));
  }, Y = () => {
    c < e.length - 1 && (p(c + 1), z(1), f({ x: 0, y: 0 }));
  }, J = () => {
    z((v) => Math.min(v + 0.25, 3));
  }, K = () => {
    z((v) => {
      const P = Math.max(v - 0.25, 1);
      return P === 1 && f({ x: 0, y: 0 }), P;
    });
  }, Q = () => {
    z(1), f({ x: 0, y: 0 });
  }, b = (v) => {
    w > 1 && (S(!0), N({ x: v.clientX - m.x, y: v.clientY - m.y }));
  }, R = (v) => {
    k && w > 1 && f({
      x: v.clientX - h.x,
      y: v.clientY - h.y
    });
  }, A = () => {
    S(!1);
  }, H = (v) => {
    if (l) {
      v.preventDefault();
      const P = v.deltaY > 0 ? -0.1 : 0.1;
      z((Be) => {
        const xe = Math.max(1, Math.min(3, Be + P));
        return xe === 1 && f({ x: 0, y: 0 }), xe;
      });
    }
  };
  return u.useEffect(() => {
    const v = (P) => {
      if (t)
        switch (P.key) {
          case "ArrowLeft":
            P.preventDefault(), Z();
            break;
          case "ArrowRight":
            P.preventDefault(), Y();
            break;
          case "Escape":
            P.preventDefault(), r(!1);
            break;
          case "+":
          case "=":
            l && (P.preventDefault(), J());
            break;
          case "-":
            l && (P.preventDefault(), K());
            break;
          case "0":
            l && (P.preventDefault(), Q());
            break;
        }
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [t, c, e.length, l]), e.length === 0 ? null : /* @__PURE__ */ a(Ie, { open: t, onOpenChange: r, children: /* @__PURE__ */ s(
    Me,
    {
      className: n("max-w-[95vw] max-h-[95vh] p-0", g),
      showCloseButton: !1,
      "data-slot": "image-lightbox",
      children: [
        /* @__PURE__ */ s(De, { className: "sr-only", children: [
          /* @__PURE__ */ a(Te, { children: "Image Viewer" }),
          /* @__PURE__ */ a(_e, { children: "View full-size image" })
        ] }),
        /* @__PURE__ */ s("div", { className: "relative flex items-center justify-center w-full h-full min-h-[50vh] bg-black/90", children: [
          /* @__PURE__ */ s(
            I,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "absolute top-4 right-4 z-50 text-white hover:bg-white/20",
              onClick: () => r(!1),
              "data-slot": "image-lightbox-close",
              children: [
                /* @__PURE__ */ a(ge, { className: "h-6 w-6" }),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          ),
          l && /* @__PURE__ */ s(
            "div",
            {
              className: "absolute top-4 left-4 z-50 flex gap-2",
              "data-slot": "image-lightbox-zoom",
              children: [
                /* @__PURE__ */ s(
                  I,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "text-white hover:bg-white/20",
                    onClick: K,
                    disabled: w <= 1,
                    children: [
                      /* @__PURE__ */ a(Ye, { className: "h-5 w-5" }),
                      /* @__PURE__ */ a("span", { className: "sr-only", children: "Zoom out" })
                    ]
                  }
                ),
                /* @__PURE__ */ s(
                  I,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "text-white hover:bg-white/20",
                    onClick: J,
                    disabled: w >= 3,
                    children: [
                      /* @__PURE__ */ a(Je, { className: "h-5 w-5" }),
                      /* @__PURE__ */ a("span", { className: "sr-only", children: "Zoom in" })
                    ]
                  }
                )
              ]
            }
          ),
          i && c > 0 && /* @__PURE__ */ s(
            I,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 h-12 w-12",
              onClick: Z,
              "data-slot": "image-lightbox-previous",
              children: [
                /* @__PURE__ */ a(Qe, { className: "h-8 w-8" }),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous image" })
              ]
            }
          ),
          i && c < e.length - 1 && /* @__PURE__ */ s(
            I,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              className: "absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 h-12 w-12",
              onClick: Y,
              "data-slot": "image-lightbox-next",
              children: [
                /* @__PURE__ */ a(Se, { className: "h-8 w-8" }),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Next image" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              className: "flex items-center justify-center w-full h-full overflow-hidden cursor-move",
              onMouseDown: b,
              onMouseMove: R,
              onMouseUp: A,
              onMouseLeave: A,
              onWheel: H,
              "data-slot": "image-lightbox-container",
              children: /* @__PURE__ */ a(
                "img",
                {
                  ref: C,
                  src: E,
                  alt: U,
                  className: "max-w-full max-h-full object-contain select-none",
                  style: {
                    transform: `translate(${m.x}px, ${m.y}px) scale(${w})`,
                    transition: k ? "none" : "transform 0.2s"
                  },
                  "data-slot": "image-lightbox-image"
                }
              )
            }
          ),
          d && e.length > 1 && /* @__PURE__ */ s(
            "div",
            {
              className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-md text-sm",
              "data-slot": "image-lightbox-counter",
              children: [
                c + 1,
                " / ",
                e.length
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
function Yn({
  images: e,
  columns: t = 3,
  onRemove: r,
  onClick: o,
  showRemove: i = !0,
  className: d,
  itemClassName: l,
  emptyMessage: g = "No images",
  loading: c = !1
}) {
  const p = (m) => typeof m == "string" ? m : m instanceof File ? URL.createObjectURL(m) : m.url, w = (m, f) => typeof m == "string" ? `Image ${f + 1}` : m instanceof File ? m.name : m.alt || `Image ${f + 1}`;
  return u.useEffect(() => () => {
    e.forEach((m) => {
      if (m instanceof File) {
        const f = URL.createObjectURL(m);
        URL.revokeObjectURL(f);
      }
    });
  }, []), c ? /* @__PURE__ */ a(
    "div",
    {
      className: n("flex items-center justify-center p-8", d),
      "data-slot": "image-preview-loading",
      children: /* @__PURE__ */ a("div", { className: "text-muted-foreground", children: "Loading images..." })
    }
  ) : e.length === 0 ? /* @__PURE__ */ s(
    "div",
    {
      className: n("flex flex-col items-center justify-center p-8 text-center", d),
      "data-slot": "image-preview-empty",
      children: [
        /* @__PURE__ */ a(et, { className: "h-12 w-12 text-muted-foreground mb-2" }),
        /* @__PURE__ */ a("p", { className: "text-sm text-muted-foreground", children: g })
      ]
    }
  ) : /* @__PURE__ */ a(
    "div",
    {
      className: n("grid gap-4", {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6"
      }[t], d),
      "data-slot": "image-preview",
      children: e.map((m, f) => {
        const k = p(m), S = w(m, f);
        return /* @__PURE__ */ a(
          "div",
          {
            className: n("group relative", l),
            "data-slot": "image-preview-item",
            children: /* @__PURE__ */ s(na, { ratio: 1, className: "overflow-hidden rounded-lg bg-muted", children: [
              /* @__PURE__ */ a(
                "img",
                {
                  src: k,
                  alt: S,
                  className: "h-full w-full object-cover transition-transform group-hover:scale-105 cursor-pointer",
                  onClick: () => o?.(f, m),
                  "data-slot": "image-preview-image"
                }
              ),
              i && r && /* @__PURE__ */ s(
                I,
                {
                  type: "button",
                  variant: "destructive",
                  size: "icon",
                  className: "absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity",
                  onClick: (h) => {
                    h.stopPropagation(), r(f);
                  },
                  "data-slot": "image-preview-remove",
                  children: [
                    /* @__PURE__ */ a(ge, { className: "h-4 w-4" }),
                    /* @__PURE__ */ a("span", { className: "sr-only", children: "Remove image" })
                  ]
                }
              )
            ] })
          },
          f
        );
      })
    }
  );
}
function Jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: n(
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
const Ca = O(
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
function Qn({
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
      className: n(Ca({ align: t }), e),
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const ka = O("text-sm shadow-none flex gap-2 items-center", {
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
function eo({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: o = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    I,
    {
      type: t,
      "data-size": o,
      variant: r,
      className: n(ka({ size: o }), e),
      ...i
    }
  );
}
function to({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: n(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function ao({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    be,
    {
      "data-slot": "input-group-control",
      className: n(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function ro({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    mt,
    {
      "data-slot": "input-group-control",
      className: n(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function no({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    qt,
    {
      "data-slot": "input-otp",
      containerClassName: n("flex items-center gap-2 has-disabled:opacity-50", t),
      className: n("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function oo({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-group", className: n("flex items-center", e), ...t });
}
function io({
  index: e,
  className: t,
  ...r
}) {
  const o = u.useContext(Xt), { char: i, hasFakeCaret: d, isActive: l } = o?.slots[e] ?? {};
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": l,
      className: n(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        t
      ),
      ...r,
      children: [
        i,
        d && /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ a("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function so({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(tt, {}) });
}
function lo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: n("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function co({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ne,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: n("my-0", e),
      ...t
    }
  );
}
const Sa = O(
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
function uo({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: o = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    o ? B : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: n(Sa({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
const za = O(
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
function mo({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: n(za({ variant: t, className: e })),
      ...r
    }
  );
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: n("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function go({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: n("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: n(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function bo({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: n("flex items-center gap-2", e), ...t });
}
function ho({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: n("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function vo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: n("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function xo({
  className: e,
  loading: t = !1,
  loadingText: r,
  children: o,
  disabled: i,
  ...d
}) {
  return /* @__PURE__ */ s(I, { className: n(e), disabled: i || t, ...d, children: [
    t && /* @__PURE__ */ a(Wt, { className: "mr-2 h-4 w-4" }),
    t && r || o
  ] });
}
function wo({ className: e, count: t = 3, variant: r = "default", ...o }) {
  return r === "card" ? /* @__PURE__ */ a("div", { className: n("space-y-4", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ s("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ a(L, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ a(L, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ a(L, { className: "h-4 w-2/3" })
  ] }, d)) }) : r === "list" ? /* @__PURE__ */ a("div", { className: n("space-y-2", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(L, { className: "h-12 w-full" }, d)) }) : r === "table" ? /* @__PURE__ */ s("div", { className: n("space-y-2", e), ...o, children: [
    /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(L, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(L, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(L, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: t }).map((i, d) => /* @__PURE__ */ s("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(L, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(L, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(L, { className: "h-12 flex-1" })
    ] }, d))
  ] }) : /* @__PURE__ */ a("div", { className: n("space-y-2", e), ...o, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(L, { className: "h-4 w-full" }, d)) });
}
function No({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    T.Root,
    {
      "data-slot": "menubar",
      className: n(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function yo({ ...e }) {
  return /* @__PURE__ */ a(T.Menu, { "data-slot": "menubar-menu", ...e });
}
function Co({ ...e }) {
  return /* @__PURE__ */ a(T.Group, { "data-slot": "menubar-group", ...e });
}
function Ia({ ...e }) {
  return /* @__PURE__ */ a(T.Portal, { "data-slot": "menubar-portal", ...e });
}
function ko({ ...e }) {
  return /* @__PURE__ */ a(T.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function So({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function zo({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: o = 8,
  ...i
}) {
  return /* @__PURE__ */ a(Ia, { children: /* @__PURE__ */ a(
    T.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: o,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function Io({
  className: e,
  inset: t,
  variant: r = "default",
  ...o
}) {
  return /* @__PURE__ */ a(
    T.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": r,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o
    }
  );
}
function Mo({
  className: e,
  children: t,
  checked: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    T.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(T.ItemIndicator, { children: /* @__PURE__ */ a(ae, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Do({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ s(
    T.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: n(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(T.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function To({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    T.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: n("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function _o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Separator,
    {
      "data-slot": "menubar-separator",
      className: n("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Po({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: n("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Ro({ ...e }) {
  return /* @__PURE__ */ a(T.Sub, { "data-slot": "menubar-sub", ...e });
}
function Ao({
  className: e,
  inset: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ s(
    T.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: n(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(re, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Lo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Eo({
  options: e,
  value: t = [],
  onChange: r,
  autoResize: o = !1,
  limitTags: i,
  showCode: d = !1,
  label: l,
  error: g,
  required: c,
  placeholder: p = "Select options...",
  searchPlaceholder: w = "Search...",
  emptyMessage: z = "No results found.",
  disabled: m = !1,
  readonly: f = !1,
  size: k = "md",
  className: S,
  triggerClassName: h,
  popoverClassName: N
}) {
  const [C, y] = u.useState(!1), x = u.useMemo(() => t || [], [t]), _ = u.useMemo(
    () => e.filter((b) => x.includes(b.id)),
    [e, x]
  ), E = (b) => {
    if (m || f) return;
    const A = x.includes(b) ? x.filter((v) => v !== b) : [...x, b], H = e.filter((v) => A.includes(v.id));
    r?.(A, H.length > 0 ? H : void 0);
  }, U = (b, R) => {
    if (R.preventDefault(), R.stopPropagation(), m || f) return;
    const A = x.filter((v) => v !== b), H = e.filter((v) => A.includes(v.id));
    r?.(A, H.length > 0 ? H : void 0);
  }, Z = (b) => {
    b.preventDefault(), b.stopPropagation(), !(m || f) && r?.([], void 0);
  }, Y = (b) => d && b.code !== void 0 ? `${b.code} - ${b.name}` : b.name, J = i ? _.slice(0, i) : _, K = i ? Math.max(0, _.length - i) : 0, Q = /* @__PURE__ */ s(wt, { open: C, onOpenChange: y, children: [
    /* @__PURE__ */ a(Nt, { asChild: !0, children: /* @__PURE__ */ s(
      I,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": C,
        disabled: m,
        size: k,
        className: n(
          "w-full justify-between group/combobox",
          !x.length && "text-muted-foreground",
          g && "border-destructive",
          o && "h-auto min-h-0",
          h
        ),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: n(
                "flex-1 flex items-center gap-1.5 min-w-0",
                o ? "flex-wrap" : "overflow-hidden"
              ),
              children: x.length === 0 ? /* @__PURE__ */ a("span", { className: "text-left truncate", children: p }) : /* @__PURE__ */ s(Ce, { children: [
                J.map((b) => /* @__PURE__ */ s(
                  ce,
                  {
                    variant: "secondary",
                    className: n(
                      "gap-1 shrink-0",
                      !o && "truncate max-w-[120px]",
                      (m || f) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ a("span", { className: "truncate", children: Y(b) }),
                      !m && !f && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (R) => {
                            R.preventDefault(), R.stopPropagation();
                          },
                          onClick: (R) => U(b.id, R),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ a(ge, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  b.id
                )),
                K > 0 && /* @__PURE__ */ s(ce, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  K
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: x.length > 0 && !m && !f ? /* @__PURE__ */ s(
            "span",
            {
              onMouseDown: (b) => {
                b.preventDefault(), b.stopPropagation();
              },
              onClick: Z,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ a(at, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ a(we, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ a(we, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      yt,
      {
        className: n("w-(--radix-popover-trigger-width) p-0", N),
        align: "start",
        children: /* @__PURE__ */ s(Ct, { children: [
          /* @__PURE__ */ a(kt, { placeholder: w }),
          /* @__PURE__ */ s(St, { children: [
            /* @__PURE__ */ a(zt, { children: z }),
            /* @__PURE__ */ a(It, { children: e.map((b) => {
              const R = x.includes(b.id);
              return /* @__PURE__ */ s(
                Mt,
                {
                  value: b.name,
                  disabled: b.disabled,
                  onSelect: () => {
                    E(b.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        onMouseDown: (A) => A.preventDefault(),
                        onClick: (A) => {
                          A.preventDefault(), A.stopPropagation(), E(b.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ a(
                          Dt,
                          {
                            checked: R,
                            disabled: b.disabled || m || f,
                            size: k
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ s("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      d && b.code !== void 0 && /* @__PURE__ */ a("span", { className: "text-muted-foreground shrink-0", children: b.code }),
                      /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: b.name })
                    ] }),
                    /* @__PURE__ */ a(
                      ae,
                      {
                        className: n(
                          "h-4 w-4 shrink-0 text-primary",
                          R ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                b.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !l && !g ? /* @__PURE__ */ a("div", { className: n("w-full", S), children: Q }) : /* @__PURE__ */ s("div", { className: n("w-full", S), children: [
    l && /* @__PURE__ */ s(ze, { className: "text-foreground leading-5 block", children: [
      l,
      c && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: l ? "mt-1" : "", children: Q }),
    g && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: g })
  ] });
}
function jo({
  className: e,
  children: t,
  viewport: r = !0,
  ...o
}) {
  return /* @__PURE__ */ s(
    $.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": r,
      className: n(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...o,
      children: [
        t,
        r && /* @__PURE__ */ a(Da, {})
      ]
    }
  );
}
function Go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.List,
    {
      "data-slot": "navigation-menu-list",
      className: n("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function Oo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Item,
    {
      "data-slot": "navigation-menu-item",
      className: n("relative", e),
      ...t
    }
  );
}
const Ma = O(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Bo({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ s(
    $.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: n(Ma(), "group", e),
      ...r,
      children: [
        t,
        " ",
        /* @__PURE__ */ a(
          ke,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function Fo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Content,
    {
      "data-slot": "navigation-menu-content",
      className: n(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function Da({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: n("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ a(
    $.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: n(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function $o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Link,
    {
      "data-slot": "navigation-menu-link",
      className: n(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    $.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: n(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function Vo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Zt,
    {
      "data-slot": "resizable-panel-group",
      className: n("flex h-full w-full data-[orientation=vertical]:flex-col", e),
      ...t
    }
  );
}
function Uo({ ...e }) {
  return /* @__PURE__ */ a(Yt, { "data-slot": "resizable-panel", ...e });
}
function Ko({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Jt,
    {
      "data-slot": "resizable-handle",
      className: n(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(rt, { className: "size-2.5" }) })
    }
  );
}
function Ta({ ...e }) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "sheet", ...e });
}
function Wo({ ...e }) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function qo({ ...e }) {
  return /* @__PURE__ */ a(j.Close, { "data-slot": "sheet-close", ...e });
}
function _a({ ...e }) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "sheet-portal", ...e });
}
function Pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Ra({
  className: e,
  children: t,
  side: r = "right",
  ...o
}) {
  return /* @__PURE__ */ s(_a, { children: [
    /* @__PURE__ */ a(Pa, {}),
    /* @__PURE__ */ s(
      j.Content,
      {
        "data-slot": "sheet-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...o,
        children: [
          t,
          /* @__PURE__ */ s(j.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(nt, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Aa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: n("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Xo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: n("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function La({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    j.Title,
    {
      "data-slot": "sheet-title",
      className: n("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ea({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Description,
    {
      "data-slot": "sheet-description",
      className: n("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const de = 768;
function ja() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${de - 1}px)`), o = () => {
      t(window.innerWidth < de);
    };
    return r.addEventListener("change", o), t(window.innerWidth < de), () => r.removeEventListener("change", o);
  }, []), !!e;
}
function Ee({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    V.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Ga({ ...e }) {
  return /* @__PURE__ */ a(Ee, { children: /* @__PURE__ */ a(V.Root, { "data-slot": "tooltip", ...e }) });
}
function Oa({ ...e }) {
  return /* @__PURE__ */ a(V.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Ba({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ a(V.Portal, { children: /* @__PURE__ */ s(
    V.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: n(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(V.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Fa = "sidebar_state", $a = 3600 * 24 * 7, Ha = "16rem", Va = "18rem", Ua = "3rem", Ka = "b", je = u.createContext(null);
function se() {
  const e = u.useContext(je);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function Zo({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: o,
  style: i,
  children: d,
  ...l
}) {
  const g = ja(), [c, p] = u.useState(!1), [w, z] = u.useState(e), m = t ?? w, f = u.useCallback(
    (N) => {
      const C = typeof N == "function" ? N(m) : N;
      r ? r(C) : z(C), document.cookie = `${Fa}=${C}; path=/; max-age=${$a}`;
    },
    [r, m]
  ), k = u.useCallback(() => g ? p((N) => !N) : f((N) => !N), [g, f, p]);
  u.useEffect(() => {
    const N = (C) => {
      C.key === Ka && (C.metaKey || C.ctrlKey) && (C.preventDefault(), k());
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [k]);
  const S = m ? "expanded" : "collapsed", h = u.useMemo(
    () => ({
      state: S,
      open: m,
      setOpen: f,
      isMobile: g,
      openMobile: c,
      setOpenMobile: p,
      toggleSidebar: k
    }),
    [S, m, f, g, c, p, k]
  );
  return /* @__PURE__ */ a(je.Provider, { value: h, children: /* @__PURE__ */ a(Ee, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Ha,
        "--sidebar-width-icon": Ua,
        ...i
      },
      className: n(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...l,
      children: d
    }
  ) }) });
}
function Yo({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: o,
  children: i,
  ...d
}) {
  const { isMobile: l, state: g, openMobile: c, setOpenMobile: p } = se();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: n(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...d,
      children: i
    }
  ) : l ? /* @__PURE__ */ a(Ta, { open: c, onOpenChange: p, ...d, children: /* @__PURE__ */ s(
    Ra,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": Va
      },
      side: e,
      children: [
        /* @__PURE__ */ s(Aa, { className: "sr-only", children: [
          /* @__PURE__ */ a(La, { children: "Sidebar" }),
          /* @__PURE__ */ a(Ea, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ s(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": g,
      "data-collapsible": g === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: n(
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
            className: n(
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
function Jo({ className: e, onClick: t, ...r }) {
  const { toggleSidebar: o } = se();
  return /* @__PURE__ */ s(
    I,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: n("size-7", e),
      onClick: (i) => {
        t?.(i), o();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(ot, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Qo({ className: e, ...t }) {
  const { toggleSidebar: r } = se();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: n(
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
function ei({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: n(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    be,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: n("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ai({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: n("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function ri({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: n("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ne,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: n("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: n(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: n("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function si({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? B : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: n(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function li({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? B : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: n(
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
function di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: n("w-full text-sm", e),
      ...t
    }
  );
}
function ci({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: n("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function ui({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: n("group/menu-item relative", e),
      ...t
    }
  );
}
const Wa = O(
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
function mi({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: o = "default",
  tooltip: i,
  className: d,
  ...l
}) {
  const g = e ? B : "button", { isMobile: c, state: p } = se(), w = /* @__PURE__ */ a(
    g,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": t,
      className: n(Wa({ variant: r, size: o }), d),
      ...l
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ s(Ga, { children: [
    /* @__PURE__ */ a(Oa, { asChild: !0, children: w }),
    /* @__PURE__ */ a(
      Ba,
      {
        side: "right",
        align: "center",
        hidden: p !== "collapsed" || c,
        ...i
      }
    )
  ] })) : w;
}
function fi({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    t ? B : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: n(
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
      ...o
    }
  );
}
function gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: n(
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
function pi({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const [o] = u.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ s(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: n("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(L, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          L,
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
function bi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: n(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function hi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: n("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function vi({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? B : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: n(
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
function xi({
  className: e,
  defaultValue: t,
  value: r,
  min: o = 0,
  max: i = 100,
  ...d
}) {
  const l = u.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [o, i],
    [r, t, o, i]
  );
  return /* @__PURE__ */ s(
    ee.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: o,
      max: i,
      className: n(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ a(
          ee.Track,
          {
            "data-slot": "slider-track",
            className: n(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              ee.Range,
              {
                "data-slot": "slider-range",
                className: n(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: l.length }, (g, c) => /* @__PURE__ */ a(
          ee.Thumb,
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
const wi = ({ ...e }) => {
  const { theme: t = "system" } = Qt();
  return /* @__PURE__ */ a(
    ea,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(ct, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(dt, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(lt, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(st, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(it, { className: "size-5 animate-spin text-foreground" })
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
}, qa = {
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
function Ni({ className: e, status: t, label: r, ...o }) {
  const i = qa[t];
  return /* @__PURE__ */ a(ce, { variant: "outline", className: n(i.className, e), ...o, children: r || i.label });
}
function yi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    oe.Root,
    {
      "data-slot": "tabs",
      className: n("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Ci({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    oe.List,
    {
      "data-slot": "tabs-list",
      className: n(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function ki({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    oe.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: n(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    oe.Content,
    {
      "data-slot": "tabs-content",
      className: n("flex-1 outline-none", e),
      ...t
    }
  );
}
const Ge = O(
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
function zi({
  className: e,
  variant: t,
  size: r,
  ...o
}) {
  return /* @__PURE__ */ a(
    ta.Root,
    {
      "data-slot": "toggle",
      className: n(Ge({ variant: t, size: r, className: e })),
      ...o
    }
  );
}
const Oe = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Ii({
  className: e,
  variant: t,
  size: r,
  spacing: o = 0,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ a(
    Pe.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      "data-spacing": o,
      style: { "--gap": o },
      className: n(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...d,
      children: /* @__PURE__ */ a(Oe.Provider, { value: { variant: t, size: r, spacing: o }, children: i })
    }
  );
}
function Mi({
  className: e,
  children: t,
  variant: r,
  size: o,
  ...i
}) {
  const d = u.useContext(Oe);
  return /* @__PURE__ */ a(
    Pe.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || r,
      "data-size": d.size || o,
      "data-spacing": d.spacing,
      className: n(
        Ge({
          variant: d.variant || r,
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
  ur as Accordion,
  gr as AccordionContent,
  mr as AccordionItem,
  fr as AccordionTrigger,
  pr as AlertDialog,
  yr as AlertDialogAction,
  Cr as AlertDialogCancel,
  hr as AlertDialogContent,
  Nr as AlertDialogDescription,
  xr as AlertDialogFooter,
  vr as AlertDialogHeader,
  ra as AlertDialogOverlay,
  aa as AlertDialogPortal,
  wr as AlertDialogTitle,
  br as AlertDialogTrigger,
  na as AspectRatio,
  kr as Breadcrumb,
  Tr as BreadcrumbEllipsis,
  zr as BreadcrumbItem,
  Ir as BreadcrumbLink,
  Sr as BreadcrumbList,
  Mr as BreadcrumbPage,
  Dr as BreadcrumbSeparator,
  _r as ButtonGroup,
  Rr as ButtonGroupSeparator,
  Pr as ButtonGroupText,
  _i as Calendar,
  Pi as CalendarDayButton,
  Ar as Carousel,
  Lr as CarouselContent,
  Er as CarouselItem,
  Gr as CarouselNext,
  jr as CarouselPrevious,
  Or as ChartContainer,
  $r as ChartLegend,
  Hr as ChartLegendContent,
  sa as ChartStyle,
  Br as ChartTooltip,
  Fr as ChartTooltipContent,
  Dt as Checkbox,
  Vr as Collapsible,
  Kr as CollapsibleContent,
  Ur as CollapsibleTrigger,
  Ri as Combobox,
  Ct as Command,
  Ai as CommandDialog,
  zt as CommandEmpty,
  It as CommandGroup,
  kt as CommandInput,
  Mt as CommandItem,
  St as CommandList,
  Li as CommandSeparator,
  Ei as CommandShortcut,
  la as ConfirmDialog,
  Wr as ContextMenu,
  rn as ContextMenuCheckboxItem,
  tn as ContextMenuContent,
  Xr as ContextMenuGroup,
  an as ContextMenuItem,
  on as ContextMenuLabel,
  Zr as ContextMenuPortal,
  Jr as ContextMenuRadioGroup,
  nn as ContextMenuRadioItem,
  sn as ContextMenuSeparator,
  ln as ContextMenuShortcut,
  Yr as ContextMenuSub,
  en as ContextMenuSubContent,
  Qr as ContextMenuSubTrigger,
  qr as ContextMenuTrigger,
  cn as DataTable,
  ji as DatePicker,
  Gi as DateRangePicker,
  un as DeleteConfirmDialog,
  Ie as Dialog,
  Oi as DialogClose,
  Me as DialogContent,
  _e as DialogDescription,
  gt as DialogFooter,
  De as DialogHeader,
  Bi as DialogOverlay,
  Fi as DialogPortal,
  Te as DialogTitle,
  $i as DialogTrigger,
  mn as Drawer,
  gn as DrawerClose,
  pn as DrawerContent,
  xn as DrawerDescription,
  hn as DrawerFooter,
  bn as DrawerHeader,
  wa as DrawerOverlay,
  xa as DrawerPortal,
  vn as DrawerTitle,
  fn as DrawerTrigger,
  wn as DropdownMenu,
  zn as DropdownMenuCheckboxItem,
  Cn as DropdownMenuContent,
  kn as DropdownMenuGroup,
  Sn as DropdownMenuItem,
  Dn as DropdownMenuLabel,
  Nn as DropdownMenuPortal,
  In as DropdownMenuRadioGroup,
  Mn as DropdownMenuRadioItem,
  Tn as DropdownMenuSeparator,
  _n as DropdownMenuShortcut,
  Pn as DropdownMenuSub,
  An as DropdownMenuSubContent,
  Rn as DropdownMenuSubTrigger,
  yn as DropdownMenuTrigger,
  Hi as Editor,
  Gt as Empty,
  Ht as EmptyContent,
  $t as EmptyDescription,
  Ot as EmptyHeader,
  Bt as EmptyMedia,
  Ln as EmptyState,
  Ft as EmptyTitle,
  En as ErrorBoundary,
  Bn as Field,
  Fn as FieldContent,
  Vn as FieldDescription,
  Kn as FieldError,
  On as FieldGroup,
  $n as FieldLabel,
  Gn as FieldLegend,
  Un as FieldSeparator,
  jn as FieldSet,
  Hn as FieldTitle,
  Vi as FileUpload,
  Wn as HoverCard,
  Xn as HoverCardContent,
  qn as HoverCardTrigger,
  Zn as ImageLightbox,
  Yn as ImagePreview,
  Jn as InputGroup,
  Qn as InputGroupAddon,
  eo as InputGroupButton,
  ao as InputGroupInput,
  to as InputGroupText,
  ro as InputGroupTextarea,
  no as InputOTP,
  oo as InputOTPGroup,
  so as InputOTPSeparator,
  io as InputOTPSlot,
  uo as Item,
  bo as ItemActions,
  fo as ItemContent,
  po as ItemDescription,
  vo as ItemFooter,
  lo as ItemGroup,
  ho as ItemHeader,
  mo as ItemMedia,
  co as ItemSeparator,
  go as ItemTitle,
  xo as LoadingButton,
  wo as LoadingState,
  No as Menubar,
  Mo as MenubarCheckboxItem,
  zo as MenubarContent,
  Co as MenubarGroup,
  Io as MenubarItem,
  To as MenubarLabel,
  yo as MenubarMenu,
  Ia as MenubarPortal,
  ko as MenubarRadioGroup,
  Do as MenubarRadioItem,
  _o as MenubarSeparator,
  Po as MenubarShortcut,
  Ro as MenubarSub,
  Lo as MenubarSubContent,
  Ao as MenubarSubTrigger,
  So as MenubarTrigger,
  Ui as MonthPicker,
  Eo as MultipleCombobox,
  jo as NavigationMenu,
  Fo as NavigationMenuContent,
  Ho as NavigationMenuIndicator,
  Oo as NavigationMenuItem,
  $o as NavigationMenuLink,
  Go as NavigationMenuList,
  Bo as NavigationMenuTrigger,
  Da as NavigationMenuViewport,
  ca as Pagination,
  ua as PaginationContent,
  dn as PaginationEllipsis,
  W as PaginationItem,
  X as PaginationLink,
  fa as PaginationNext,
  ma as PaginationPrevious,
  ha as PaginationRange,
  wt as Popover,
  Ki as PopoverAnchor,
  yt as PopoverContent,
  Nt as PopoverTrigger,
  Wi as Progress,
  qi as RadioGroup,
  Xi as RadioGroupItem,
  Ko as ResizableHandle,
  Uo as ResizablePanel,
  Vo as ResizablePanelGroup,
  Zi as ScrollArea,
  Yi as ScrollBar,
  pt as Select,
  vt as SelectContent,
  Ji as SelectGroup,
  xt as SelectItem,
  Qi as SelectLabel,
  es as SelectScrollDownButton,
  ts as SelectScrollUpButton,
  as as SelectSeparator,
  bt as SelectTrigger,
  ht as SelectValue,
  Ta as Sheet,
  qo as SheetClose,
  Ra as SheetContent,
  Ea as SheetDescription,
  Xo as SheetFooter,
  Aa as SheetHeader,
  La as SheetTitle,
  Wo as SheetTrigger,
  Yo as Sidebar,
  oi as SidebarContent,
  ri as SidebarFooter,
  ii as SidebarGroup,
  li as SidebarGroupAction,
  di as SidebarGroupContent,
  si as SidebarGroupLabel,
  ai as SidebarHeader,
  ti as SidebarInput,
  ei as SidebarInset,
  ci as SidebarMenu,
  fi as SidebarMenuAction,
  gi as SidebarMenuBadge,
  mi as SidebarMenuButton,
  ui as SidebarMenuItem,
  pi as SidebarMenuSkeleton,
  bi as SidebarMenuSub,
  vi as SidebarMenuSubButton,
  hi as SidebarMenuSubItem,
  Zo as SidebarProvider,
  Qo as SidebarRail,
  ni as SidebarSeparator,
  Jo as SidebarTrigger,
  L as Skeleton,
  xi as Slider,
  Wt as Spinner,
  Ni as StatusBadge,
  rs as Switch,
  At as Table,
  jt as TableBody,
  is as TableCaption,
  ye as TableCell,
  ss as TableFooter,
  Et as TableHead,
  Lt as TableHeader,
  le as TableRow,
  yi as Tabs,
  Si as TabsContent,
  Ci as TabsList,
  ki as TabsTrigger,
  mt as Textarea,
  ns as TimePicker,
  wi as Toaster,
  zi as Toggle,
  Ii as ToggleGroup,
  Mi as ToggleGroupItem,
  Ga as Tooltip,
  Ba as TooltipContent,
  Ee as TooltipProvider,
  Oa as TooltipTrigger,
  oa as buttonGroupVariants,
  Ma as navigationMenuTriggerStyle,
  Ge as toggleVariants,
  se as useSidebar
};
//# sourceMappingURL=index-client.mjs.map
