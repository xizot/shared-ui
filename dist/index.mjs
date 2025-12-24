import { c as o, b as ce, S as H, B as M, L as ye, I as ue, T as Be, P as $e, a as Fe, d as de, e as Ve, C as He, f as Ke, g as Ue, h as Xe, i as qe, j as We, k as Je, D as Qe, l as Ze, m as Ye, n as et, o as tt, p as at, q as rt, r as nt, s as ot, t as it, u as st } from "./format-tKo8BO4W.js";
import { y as gs, z as ps, A as bs, E as hs, F as vs, G as xs, a8 as ws, H as Ns, J as ys, K as Cs, M as ks, N as Ss, O as zs, aa as Is, Q as Ts, R as Ds, U as Ms, V as _s, W as Es, X as Ps, Y as As, Z as Rs, _ as Ls, $ as js, a0 as Gs, a1 as Os, a2 as Bs, x as $s, a9 as Fs, a3 as Vs, a4 as Hs, a6 as Ks, a5 as Us, v as Xs, w as qs, a7 as Ws } from "./format-tKo8BO4W.js";
import { jsx as a, jsxs as c, Fragment as Ce } from "react/jsx-runtime";
import * as l from "react";
import { useMemo as dt, useRef as lt, useCallback as ct } from "react";
import * as W from "@radix-ui/react-accordion";
import { ChevronDownIcon as ke, ChevronRight as ut, MoreHorizontal as me, ArrowLeft as mt, ArrowRight as ft, CheckIcon as Y, CircleIcon as fe, ChevronRightIcon as ee, MinusIcon as gt, X as pt, XCircle as bt, ChevronDown as xe, MoreHorizontalIcon as ht, ChevronLeftIcon as vt, ChevronsLeft as xt, ChevronsRight as wt, GripVerticalIcon as Nt, XIcon as yt, PanelLeftIcon as Ct, Loader2Icon as Se, OctagonXIcon as kt, TriangleAlertIcon as St, InfoIcon as zt, CircleCheckIcon as It, ArrowUp as Tt, ArrowDown as Dt, ArrowUpDown as Mt, AlertCircle as _t } from "lucide-react";
import { cva as _ } from "class-variance-authority";
import * as j from "@radix-ui/react-alert-dialog";
import * as Et from "@radix-ui/react-aspect-ratio";
import * as ge from "@radix-ui/react-avatar";
import { Slot as G } from "@radix-ui/react-slot";
import Pt from "embla-carousel-react";
import * as pe from "recharts";
import * as be from "@radix-ui/react-collapsible";
import * as C from "@radix-ui/react-context-menu";
import { Drawer as O } from "vaul";
import * as k from "@radix-ui/react-dropdown-menu";
import * as Z from "@radix-ui/react-hover-card";
import { OTPInput as At, OTPInputContext as Rt } from "input-otp";
import * as S from "@radix-ui/react-menubar";
import * as B from "@radix-ui/react-navigation-menu";
import { Group as Lt, Panel as jt, Separator as Gt } from "react-resizable-panels";
import * as L from "@radix-ui/react-dialog";
import * as U from "@radix-ui/react-tooltip";
import * as Q from "@radix-ui/react-slider";
import { useTheme as Ot } from "next-themes";
import { Toaster as Bt, toast as R } from "sonner";
import * as te from "@radix-ui/react-tabs";
import * as $t from "@radix-ui/react-toggle";
import * as ze from "@radix-ui/react-toggle-group";
import { SelectGroup as Ft } from "@radix-ui/react-select";
import { useReactTable as Vt, getCoreRowModel as Ht, flexRender as we } from "@tanstack/react-table";
function cr({ ...e }) {
  return /* @__PURE__ */ a(W.Root, { "data-slot": "accordion", ...e });
}
function ur({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Item,
    {
      "data-slot": "accordion-item",
      className: o("border-b last:border-b-0", e),
      ...t
    }
  );
}
function mr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(W.Header, { className: "flex", children: /* @__PURE__ */ c(
    W.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: o(
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
function fr({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...r,
      children: /* @__PURE__ */ a("div", { className: o("pt-0 pb-4", e), children: t })
    }
  );
}
const Kt = _(
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
), Ie = l.forwardRef(({ className: e, variant: t, ...r }, n) => /* @__PURE__ */ a("div", { ref: n, role: "alert", className: o(Kt({ variant: t }), e), ...r }));
Ie.displayName = "Alert";
const Te = l.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: o("mb-1 font-medium leading-none tracking-tight", e),
      ...t
    }
  )
);
Te.displayName = "AlertTitle";
const De = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: o("text-sm [&_p]:leading-relaxed", e), ...t }));
De.displayName = "AlertDescription";
function gr({ ...e }) {
  return /* @__PURE__ */ a(j.Root, { "data-slot": "alert-dialog", ...e });
}
function pr({
  ...e
}) {
  return /* @__PURE__ */ a(j.Trigger, { "data-slot": "alert-dialog-trigger", ...e });
}
function Ut({ ...e }) {
  return /* @__PURE__ */ a(j.Portal, { "data-slot": "alert-dialog-portal", ...e });
}
function Xt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c(Ut, { children: [
    /* @__PURE__ */ a(Xt, {}),
    /* @__PURE__ */ a(
      j.Content,
      {
        "data-slot": "alert-dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function hr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
      ...t
    }
  );
}
function xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Title,
    {
      "data-slot": "alert-dialog-title",
      className: o("text-lg font-semibold", e),
      ...t
    }
  );
}
function wr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Description,
    {
      "data-slot": "alert-dialog-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Nr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(j.Action, { className: o(ce(), e), ...t });
}
function yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    j.Cancel,
    {
      className: o(ce({ variant: "outline" }), e),
      ...t
    }
  );
}
function Cr({ ...e }) {
  return /* @__PURE__ */ a(Et.Root, { "data-slot": "aspect-ratio", ...e });
}
function kr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ge.Root,
    {
      "data-slot": "avatar",
      className: o("relative flex size-8 shrink-0 overflow-hidden rounded-full", e),
      ...t
    }
  );
}
function Sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ge.Image,
    {
      "data-slot": "avatar-image",
      className: o("aspect-square size-full", e),
      ...t
    }
  );
}
function zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ge.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: o("bg-muted flex size-full items-center justify-center rounded-full", e),
      ...t
    }
  );
}
function Ir({ ...e }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Tr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: o(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function Dr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: o("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Mr({
  asChild: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? G : "a",
    {
      "data-slot": "breadcrumb-link",
      className: o("hover:text-foreground transition-colors", t),
      ...r
    }
  );
}
function _r({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: o("text-foreground font-normal", e),
      ...t
    }
  );
}
function Er({ children: e, className: t, ...r }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: o("[&>svg]:size-3.5", t),
      ...r,
      children: e ?? /* @__PURE__ */ a(ut, {})
    }
  );
}
function Pr({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: o("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ a(me, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const qt = _(
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
function Ar({
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
      className: o(qt({ orientation: t }), e),
      ...r
    }
  );
}
function Rr({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? G : "div",
    {
      className: o(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Lr({
  className: e,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ a(
    H,
    {
      "data-slot": "button-group-separator",
      orientation: t,
      className: o(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        e
      ),
      ...r
    }
  );
}
function jr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Gr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-header",
      className: o(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        e
      ),
      ...t
    }
  );
}
function Or({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-title",
      className: o("leading-none font-semibold", e),
      ...t
    }
  );
}
function Br({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function $r({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-action",
      className: o("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
      ...t
    }
  );
}
function Fr({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "card-content", className: o("px-6", e), ...t });
}
function Vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: o("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
const Me = l.createContext(null);
function ae() {
  const e = l.useContext(Me);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Hr({
  orientation: e = "horizontal",
  opts: t,
  setApi: r,
  plugins: n,
  className: i,
  children: d,
  ...s
}) {
  const [u, m] = Pt(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    n
  ), [f, N] = l.useState(!1), [E, w] = l.useState(!1), x = l.useCallback((h) => {
    h && (N(h.canScrollPrev()), w(h.canScrollNext()));
  }, []), z = l.useCallback(() => {
    m?.scrollPrev();
  }, [m]), I = l.useCallback(() => {
    m?.scrollNext();
  }, [m]), p = l.useCallback(
    (h) => {
      h.key === "ArrowLeft" ? (h.preventDefault(), z()) : h.key === "ArrowRight" && (h.preventDefault(), I());
    },
    [z, I]
  );
  return l.useEffect(() => {
    !m || !r || r(m);
  }, [m, r]), l.useEffect(() => {
    if (m)
      return x(m), m.on("reInit", x), m.on("select", x), () => {
        m?.off("select", x);
      };
  }, [m, x]), /* @__PURE__ */ a(
    Me.Provider,
    {
      value: {
        carouselRef: u,
        api: m,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: z,
        scrollNext: I,
        canScrollPrev: f,
        canScrollNext: E
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: p,
          className: o("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...s,
          children: d
        }
      )
    }
  );
}
function Kr({ className: e, ...t }) {
  const { carouselRef: r, orientation: n } = ae();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: o("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    }
  ) });
}
function Ur({ className: e, ...t }) {
  const { orientation: r } = ae();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: o(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function Xr({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollPrev: d, canScrollPrev: s } = ae();
  return /* @__PURE__ */ c(
    M,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: d,
      ...n,
      children: [
        /* @__PURE__ */ a(mt, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function qr({
  className: e,
  variant: t = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: i, scrollNext: d, canScrollNext: s } = ae();
  return /* @__PURE__ */ c(
    M,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: d,
      ...n,
      children: [
        /* @__PURE__ */ a(ft, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const Wt = { light: "", dark: ".dark" }, _e = l.createContext(null);
function Ee() {
  const e = l.useContext(_e);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
function Wr({
  id: e,
  className: t,
  children: r,
  config: n,
  ...i
}) {
  const d = l.useId(), s = `chart-${e || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(_e.Provider, { value: { config: n }, children: /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "chart",
      "data-chart": s,
      className: o(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        t
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(Jt, { id: s, config: n }),
        /* @__PURE__ */ a(pe.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const Jt = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([, n]) => n.theme || n.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Wt).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([d, s]) => {
            const u = s.theme?.[n] || s.color;
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
}, Jr = pe.Tooltip;
function Qr({
  active: e,
  payload: t,
  className: r,
  indicator: n = "dot",
  hideLabel: i = !1,
  hideIndicator: d = !1,
  label: s,
  labelFormatter: u,
  labelClassName: m,
  formatter: f,
  color: N,
  nameKey: E,
  labelKey: w
}) {
  const { config: x } = Ee(), z = l.useMemo(() => {
    if (i || !t?.length)
      return null;
    const [p] = t, h = `${w || p?.dataKey || p?.name || "value"}`, y = le(x, p, h), v = !w && typeof s == "string" ? x[s]?.label || s : y?.label;
    return u ? /* @__PURE__ */ a("div", { className: o("font-medium", m), children: u(v, t) }) : v ? /* @__PURE__ */ a("div", { className: o("font-medium", m), children: v }) : null;
  }, [s, u, t, i, m, x, w]);
  if (!e || !t?.length)
    return null;
  const I = t.length === 1 && n !== "dot";
  return /* @__PURE__ */ c(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        I ? null : z,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: t.filter((p) => p.type !== "none").map((p, h) => {
          const y = `${E || p.name || p.dataKey || "value"}`, v = le(x, p, y), b = N || p.payload.fill || p.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: f && p?.value !== void 0 && p.name ? f(p.value, p.name, p, h, p.payload) : /* @__PURE__ */ c(Ce, { children: [
                v?.icon ? /* @__PURE__ */ a(v.icon, {}) : !d && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": I && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": b,
                      "--color-border": b
                    }
                  }
                ),
                /* @__PURE__ */ c(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      I ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ c("div", { className: "grid gap-1.5", children: [
                        I ? z : null,
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
const Zr = pe.Legend;
function Yr({
  className: e,
  hideIcon: t = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: i
}) {
  const { config: d } = Ee();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        e
      ),
      children: r.filter((s) => s.type !== "none").map((s) => {
        const u = `${i || s.dataKey || "value"}`, m = le(d, s, u);
        return /* @__PURE__ */ c(
          "div",
          {
            className: o(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              m?.icon && !t ? /* @__PURE__ */ a(m.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: s.color
                  }
                }
              ),
              m?.label
            ]
          },
          s.value
        );
      })
    }
  ) : null;
}
function le(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
function en({ ...e }) {
  return /* @__PURE__ */ a(be.Root, { "data-slot": "collapsible", ...e });
}
function tn({
  ...e
}) {
  return /* @__PURE__ */ a(be.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...e });
}
function an({
  ...e
}) {
  return /* @__PURE__ */ a(be.CollapsibleContent, { "data-slot": "collapsible-content", ...e });
}
function rn({ ...e }) {
  return /* @__PURE__ */ a(C.Root, { "data-slot": "context-menu", ...e });
}
function nn({
  ...e
}) {
  return /* @__PURE__ */ a(C.Trigger, { "data-slot": "context-menu-trigger", ...e });
}
function on({ ...e }) {
  return /* @__PURE__ */ a(C.Group, { "data-slot": "context-menu-group", ...e });
}
function sn({ ...e }) {
  return /* @__PURE__ */ a(C.Portal, { "data-slot": "context-menu-portal", ...e });
}
function dn({ ...e }) {
  return /* @__PURE__ */ a(C.Sub, { "data-slot": "context-menu-sub", ...e });
}
function ln({
  ...e
}) {
  return /* @__PURE__ */ a(C.RadioGroup, { "data-slot": "context-menu-radio-group", ...e });
}
function cn({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    C.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ee, { className: "ml-auto" })
      ]
    }
  );
}
function un({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function mn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(C.Portal, { children: /* @__PURE__ */ a(
    C.Content,
    {
      "data-slot": "context-menu-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...t
    }
  ) });
}
function fn({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    C.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function gn({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    C.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(C.ItemIndicator, { children: /* @__PURE__ */ a(Y, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function pn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c(
    C.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(C.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function bn({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    C.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": t,
      className: o("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    C.Separator,
    {
      "data-slot": "context-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function vn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function xn({ ...e }) {
  return /* @__PURE__ */ a(O.Root, { "data-slot": "drawer", ...e });
}
function wn({ ...e }) {
  return /* @__PURE__ */ a(O.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function Qt({ ...e }) {
  return /* @__PURE__ */ a(O.Portal, { "data-slot": "drawer-portal", ...e });
}
function Nn({ ...e }) {
  return /* @__PURE__ */ a(O.Close, { "data-slot": "drawer-close", ...e });
}
function Zt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function yn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c(Qt, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ a(Zt, {}),
    /* @__PURE__ */ c(
      O.Content,
      {
        "data-slot": "drawer-content",
        className: o(
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
function Cn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-header",
      className: o(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function kn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "drawer-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Sn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    O.Title,
    {
      "data-slot": "drawer-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function zn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Description,
    {
      "data-slot": "drawer-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function In({ ...e }) {
  return /* @__PURE__ */ a(k.Root, { "data-slot": "dropdown-menu", ...e });
}
function Tn({
  ...e
}) {
  return /* @__PURE__ */ a(k.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function Dn({
  ...e
}) {
  return /* @__PURE__ */ a(k.Trigger, { "data-slot": "dropdown-menu-trigger", ...e });
}
function Mn({
  className: e,
  sideOffset: t = 4,
  ...r
}) {
  return /* @__PURE__ */ a(k.Portal, { children: /* @__PURE__ */ a(
    k.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...r
    }
  ) });
}
function _n({ ...e }) {
  return /* @__PURE__ */ a(k.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function En({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    k.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function Pn({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    k.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(k.ItemIndicator, { children: /* @__PURE__ */ a(Y, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function An({
  ...e
}) {
  return /* @__PURE__ */ a(k.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function Rn({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c(
    k.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(k.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Ln({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    k.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function jn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Gn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function On({ ...e }) {
  return /* @__PURE__ */ a(k.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function Bn({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    k.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ee, { className: "ml-auto size-4" })
      ]
    }
  );
}
function $n({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    k.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Yt({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty",
      className: o(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        e
      ),
      ...t
    }
  );
}
function ea({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-header",
      className: o("flex max-w-sm flex-col items-center gap-2 text-center", e),
      ...t
    }
  );
}
const ta = _(
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
function aa({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": t,
      className: o(ta({ variant: t, className: e })),
      ...r
    }
  );
}
function ra({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-title",
      className: o("text-lg font-medium tracking-tight", e),
      ...t
    }
  );
}
function na({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-description",
      className: o(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function oa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "empty-content",
      className: o(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        e
      ),
      ...t
    }
  );
}
function Fn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      "data-slot": "field-set",
      className: o(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      ...t
    }
  );
}
function Vn({
  className: e,
  variant: t = "legend",
  ...r
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": t,
      className: o(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      ...r
    }
  );
}
function Hn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-group",
      className: o(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      ...t
    }
  );
}
const ia = _("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
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
function Kn({
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
      className: o(ia({ orientation: t }), e),
      ...r
    }
  );
}
function Un({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-content",
      className: o("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", e),
      ...t
    }
  );
}
function Xn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ye,
    {
      "data-slot": "field-label",
      className: o(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      ...t
    }
  );
}
function qn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "field-label",
      className: o(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      ...t
    }
  );
}
function Wn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "field-description",
      className: o(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function Jn({
  children: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!e,
      className: o(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      ...r,
      children: [
        /* @__PURE__ */ a(H, { className: "absolute inset-0 top-1/2" }),
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
function Qn({
  className: e,
  children: t,
  errors: r,
  ...n
}) {
  const i = dt(() => {
    if (t)
      return t;
    if (!r?.length)
      return null;
    const d = [...new Map(r.map((s) => [s?.message, s])).values()];
    return d?.length == 1 ? d[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: d.map((s, u) => s?.message && /* @__PURE__ */ a("li", { children: s.message }, u)) });
  }, [t, r]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: o("text-destructive text-sm font-normal", e),
      ...n,
      children: i
    }
  ) : null;
}
function Zn({ ...e }) {
  return /* @__PURE__ */ a(Z.Root, { "data-slot": "hover-card", ...e });
}
function Yn({ ...e }) {
  return /* @__PURE__ */ a(Z.Trigger, { "data-slot": "hover-card-trigger", ...e });
}
function eo({
  className: e,
  align: t = "center",
  sideOffset: r = 4,
  ...n
}) {
  return /* @__PURE__ */ a(Z.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ a(
    Z.Content,
    {
      "data-slot": "hover-card-content",
      align: t,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...n
    }
  ) });
}
function to({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: o(
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
const sa = _(
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
function ao({
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
      className: o(sa({ align: t }), e),
      onClick: (n) => {
        n.target.closest("button") || n.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...r
    }
  );
}
const da = _("text-sm shadow-none flex gap-2 items-center", {
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
function ro({
  className: e,
  type: t = "button",
  variant: r = "ghost",
  size: n = "xs",
  ...i
}) {
  return /* @__PURE__ */ a(
    M,
    {
      type: t,
      "data-size": n,
      variant: r,
      className: o(da({ size: n }), e),
      ...i
    }
  );
}
function no({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: o(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function oo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ue,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function io({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Be,
    {
      "data-slot": "input-group-control",
      className: o(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        e
      ),
      ...t
    }
  );
}
function so({
  className: e,
  containerClassName: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    At,
    {
      "data-slot": "input-otp",
      containerClassName: o("flex items-center gap-2 has-disabled:opacity-50", t),
      className: o("disabled:cursor-not-allowed", e),
      ...r
    }
  );
}
function lo({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-group", className: o("flex items-center", e), ...t });
}
function co({
  index: e,
  className: t,
  ...r
}) {
  const n = l.useContext(Rt), { char: i, hasFakeCaret: d, isActive: s } = n?.slots[e] ?? {};
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": s,
      className: o(
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
function uo({ ...e }) {
  return /* @__PURE__ */ a("div", { "data-slot": "input-otp-separator", role: "separator", ...e, children: /* @__PURE__ */ a(gt, {}) });
}
function mo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      role: "list",
      "data-slot": "item-group",
      className: o("group/item-group flex flex-col", e),
      ...t
    }
  );
}
function fo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    H,
    {
      "data-slot": "item-separator",
      orientation: "horizontal",
      className: o("my-0", e),
      ...t
    }
  );
}
const la = _(
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
function go({
  className: e,
  variant: t = "default",
  size: r = "default",
  asChild: n = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    n ? G : "div",
    {
      "data-slot": "item",
      "data-variant": t,
      "data-size": r,
      className: o(la({ variant: t, size: r, className: e })),
      ...i
    }
  );
}
const ca = _(
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
function po({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-media",
      "data-variant": t,
      className: o(ca({ variant: t, className: e })),
      ...r
    }
  );
}
function bo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-content",
      className: o("flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none", e),
      ...t
    }
  );
}
function ho({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-title",
      className: o("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
      ...t
    }
  );
}
function vo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "item-description",
      className: o(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      ...t
    }
  );
}
function xo({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "item-actions", className: o("flex items-center gap-2", e), ...t });
}
function wo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-header",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function No({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "item-footer",
      className: o("flex basis-full items-center justify-between gap-2", e),
      ...t
    }
  );
}
function yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd",
      className: o(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        e
      ),
      ...t
    }
  );
}
function Co({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "kbd",
    {
      "data-slot": "kbd-group",
      className: o("inline-flex items-center gap-1", e),
      ...t
    }
  );
}
function ko({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    S.Root,
    {
      "data-slot": "menubar",
      className: o(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function So({ ...e }) {
  return /* @__PURE__ */ a(S.Menu, { "data-slot": "menubar-menu", ...e });
}
function zo({ ...e }) {
  return /* @__PURE__ */ a(S.Group, { "data-slot": "menubar-group", ...e });
}
function ua({ ...e }) {
  return /* @__PURE__ */ a(S.Portal, { "data-slot": "menubar-portal", ...e });
}
function Io({ ...e }) {
  return /* @__PURE__ */ a(S.RadioGroup, { "data-slot": "menubar-radio-group", ...e });
}
function To({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function Do({
  className: e,
  align: t = "start",
  alignOffset: r = -4,
  sideOffset: n = 8,
  ...i
}) {
  return /* @__PURE__ */ a(ua, { children: /* @__PURE__ */ a(
    S.Content,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: r,
      sideOffset: n,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function Mo({
  className: e,
  inset: t,
  variant: r = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    S.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": r,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n
    }
  );
}
function _o({
  className: e,
  children: t,
  checked: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    S.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: r,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(Y, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function Eo({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c(
    S.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(S.ItemIndicator, { children: /* @__PURE__ */ a(fe, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Po({
  className: e,
  inset: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    S.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...r
    }
  );
}
function Ao({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Ro({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Lo({ ...e }) {
  return /* @__PURE__ */ a(S.Sub, { "data-slot": "menubar-sub", ...e });
}
function jo({
  className: e,
  inset: t,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ c(
    S.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(ee, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function Go({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
function Oo({
  options: e,
  value: t = [],
  onChange: r,
  autoResize: n = !1,
  limitTags: i,
  showCode: d = !1,
  label: s,
  error: u,
  required: m,
  placeholder: f = "Select options...",
  searchPlaceholder: N = "Search...",
  emptyMessage: E = "No results found.",
  disabled: w = !1,
  readonly: x = !1,
  size: z = "md",
  className: I,
  triggerClassName: p,
  popoverClassName: h
}) {
  const [y, v] = l.useState(!1), b = l.useMemo(() => t || [], [t]), P = l.useMemo(
    () => e.filter((g) => b.includes(g.id)),
    [e, b]
  ), $ = (g) => {
    if (w || x) return;
    const A = b.includes(g) ? b.filter((F) => F !== g) : [...b, g], X = e.filter((F) => A.includes(F.id));
    r?.(A, X.length > 0 ? X : void 0);
  }, oe = (g, D) => {
    if (D.preventDefault(), D.stopPropagation(), w || x) return;
    const A = b.filter((F) => F !== g), X = e.filter((F) => A.includes(F.id));
    r?.(A, X.length > 0 ? X : void 0);
  }, je = (g) => {
    g.preventDefault(), g.stopPropagation(), !(w || x) && r?.([], void 0);
  }, Ge = (g) => d && g.code !== void 0 ? `${g.code} - ${g.name}` : g.name, Oe = i ? P.slice(0, i) : P, he = i ? Math.max(0, P.length - i) : 0, ve = /* @__PURE__ */ c($e, { open: y, onOpenChange: v, children: [
    /* @__PURE__ */ a(Fe, { asChild: !0, children: /* @__PURE__ */ c(
      M,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": y,
        disabled: w,
        size: z,
        className: o(
          "w-full justify-between group/combobox",
          !b.length && "text-muted-foreground",
          u && "border-destructive",
          n && "h-auto min-h-0",
          p
        ),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "flex-1 flex items-center gap-1.5 min-w-0",
                n ? "flex-wrap" : "overflow-hidden"
              ),
              children: b.length === 0 ? /* @__PURE__ */ a("span", { className: "text-left truncate", children: f }) : /* @__PURE__ */ c(Ce, { children: [
                Oe.map((g) => /* @__PURE__ */ c(
                  de,
                  {
                    variant: "secondary",
                    className: o(
                      "gap-1 shrink-0",
                      !n && "truncate max-w-[120px]",
                      (w || x) && "pr-2"
                    ),
                    children: [
                      /* @__PURE__ */ a("span", { className: "truncate", children: Ge(g) }),
                      !w && !x && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          onMouseDown: (D) => {
                            D.preventDefault(), D.stopPropagation();
                          },
                          onClick: (D) => oe(g.id, D),
                          className: "ml-0.5 hover:bg-destructive/20 rounded-full p-0.5 -mr-1 shrink-0",
                          children: /* @__PURE__ */ a(pt, { className: "h-2.5 w-2.5" })
                        }
                      )
                    ]
                  },
                  g.id
                )),
                he > 0 && /* @__PURE__ */ c(de, { variant: "secondary", className: "shrink-0", children: [
                  "+",
                  he
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: b.length > 0 && !w && !x ? /* @__PURE__ */ c(
            "span",
            {
              onMouseDown: (g) => {
                g.preventDefault(), g.stopPropagation();
              },
              onClick: je,
              className: "cursor-pointer",
              children: [
                /* @__PURE__ */ a(bt, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                /* @__PURE__ */ a(xe, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ a(xe, { className: "text-muted-foreground h-4 w-4" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ a(
      Ve,
      {
        className: o("w-(--radix-popover-trigger-width) p-0", h),
        align: "start",
        children: /* @__PURE__ */ c(He, { children: [
          /* @__PURE__ */ a(Ke, { placeholder: N }),
          /* @__PURE__ */ c(Ue, { children: [
            /* @__PURE__ */ a(Xe, { children: E }),
            /* @__PURE__ */ a(qe, { children: e.map((g) => {
              const D = b.includes(g.id);
              return /* @__PURE__ */ c(
                We,
                {
                  value: g.name,
                  disabled: g.disabled,
                  onSelect: () => {
                    $(g.id);
                  },
                  className: "flex items-center gap-2 cursor-pointer",
                  children: [
                    /* @__PURE__ */ a(
                      "div",
                      {
                        onMouseDown: (A) => A.preventDefault(),
                        onClick: (A) => {
                          A.preventDefault(), A.stopPropagation(), $(g.id);
                        },
                        className: "shrink-0",
                        children: /* @__PURE__ */ a(
                          Je,
                          {
                            checked: D,
                            disabled: g.disabled || w || x,
                            size: z
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ c("div", { className: "flex-1 flex items-center gap-2 min-w-0", children: [
                      d && g.code !== void 0 && /* @__PURE__ */ a("span", { className: "text-muted-foreground shrink-0", children: g.code }),
                      /* @__PURE__ */ a("span", { className: "flex-1 truncate", children: g.name })
                    ] }),
                    /* @__PURE__ */ a(
                      Y,
                      {
                        className: o(
                          "h-4 w-4 shrink-0 text-primary",
                          D ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                g.id
              );
            }) })
          ] })
        ] })
      }
    )
  ] });
  return !s && !u ? /* @__PURE__ */ a("div", { className: o("w-full", I), children: ve }) : /* @__PURE__ */ c("div", { className: o("w-full", I), children: [
    s && /* @__PURE__ */ c(ye, { className: "text-foreground leading-5 block", children: [
      s,
      m && /* @__PURE__ */ a("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: s ? "mt-1" : "", children: ve }),
    u && /* @__PURE__ */ a("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: u })
  ] });
}
function Bo({
  className: e,
  children: t,
  viewport: r = !0,
  ...n
}) {
  return /* @__PURE__ */ c(
    B.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": r,
      className: o(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        e
      ),
      ...n,
      children: [
        t,
        r && /* @__PURE__ */ a(fa, {})
      ]
    }
  );
}
function $o({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.List,
    {
      "data-slot": "navigation-menu-list",
      className: o("group flex flex-1 list-none items-center justify-center gap-1", e),
      ...t
    }
  );
}
function Fo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Item,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", e),
      ...t
    }
  );
}
const ma = _(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function Vo({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ c(
    B.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(ma(), "group", e),
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
function Ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Content,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        e
      ),
      ...t
    }
  );
}
function fa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: o("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ a(
    B.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: o(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        e
      ),
      ...t
    }
  ) });
}
function Ko({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Link,
    {
      "data-slot": "navigation-menu-link",
      className: o(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Uo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    B.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: o(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
function ga({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: o("flex justify-center mx-auto w-full", e),
      ...t
    }
  );
}
function pa({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "pagination-content",
      className: o("flex flex-row gap-1 items-center", e),
      ...t
    }
  );
}
function q({ ...e }) {
  return /* @__PURE__ */ a("li", { "data-slot": "pagination-item", ...e });
}
function J({
  className: e,
  isActive: t,
  disabled: r,
  size: n = "icon-sm",
  ...i
}) {
  return /* @__PURE__ */ a(
    "a",
    {
      "aria-current": t ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": t,
      className: o(
        ce({
          variant: t ? "outline" : "ghost",
          size: n,
          className: o(
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
function ba({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    J,
    {
      "aria-label": "Go to previous page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pl-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(vt, {})
    }
  );
}
function ha({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    J,
    {
      "aria-label": "Go to next page",
      size: "md",
      className: o("gap-1 px-2.5 sm:pr-2.5", e),
      ...t,
      children: /* @__PURE__ */ a(ee, {})
    }
  );
}
function Xo({ className: e, ...t }) {
  return /* @__PURE__ */ c(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: o("flex justify-center items-center size-9", e),
      ...t,
      children: [
        /* @__PURE__ */ a(ht, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
const va = (e, t, r = 1) => {
  const i = t, d = Math.max(e - r, 1), s = Math.min(e + r, i), u = d > 2, m = s < i - 1, f = [];
  f.push(1), u ? f.push("left-ellipsis") : 2 < d && f.push(2);
  for (let N = d; N <= s; N++)
    N !== 1 && N !== i && f.push(N);
  return m ? f.push("right-ellipsis") : s < i - 1 && f.push(i - 1), i !== 1 && f.push(i), f;
}, xa = ({ className: e, ...t }) => /* @__PURE__ */ c(
  J,
  {
    className: o(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(me, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(xt, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100" })
    ]
  }
), wa = ({ className: e, ...t }) => /* @__PURE__ */ c(
  J,
  {
    className: o(
      "relative cursor-pointer group border-secondary-hover text-secondary-foreground hover:text-secondary-foreground-hover",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ a(me, { className: "opacity-100 transition-opacity group-hover:opacity-0" }),
      /* @__PURE__ */ a(wt, { className: "absolute opacity-0 transition-opacity text-brand-500 group-hover:opacity-100 text-primary" })
    ]
  }
), Na = ({
  currentPage: e,
  totalPages: t,
  pageSize: r,
  siblingCount: n = 1,
  onPageChange: i
}) => {
  const d = l.useMemo(
    () => va(e, t, n),
    [e, t, n]
  );
  return /* @__PURE__ */ c("div", { className: "flex gap-2 items-center", children: [
    /* @__PURE__ */ a(
      ba,
      {
        onClick: () => e > 1 && i(e - 1, r),
        disabled: e === 1,
        "aria-disabled": e === 1,
        className: "cursor-pointer"
      }
    ),
    d.map((s, u) => s === "left-ellipsis" ? /* @__PURE__ */ a(q, { children: /* @__PURE__ */ a(xa, { onClick: () => i(e - n, r) }) }, `ellipsis-${u}`) : s === "right-ellipsis" ? /* @__PURE__ */ a(q, { children: /* @__PURE__ */ a(wa, { onClick: () => i(e + n, r) }) }, `ellipsis-${u}`) : /* @__PURE__ */ a(q, { children: /* @__PURE__ */ a(
      J,
      {
        isActive: e === s,
        onClick: () => s !== e && i(s, r),
        className: "cursor-pointer",
        children: s
      }
    ) }, s)),
    /* @__PURE__ */ a(
      ha,
      {
        onClick: () => e < t && i(e + 1, r),
        disabled: e === t,
        "aria-disabled": e === t,
        className: "cursor-pointer"
      }
    )
  ] });
};
function qo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Lt,
    {
      "data-slot": "resizable-panel-group",
      className: o("flex h-full w-full data-[orientation=vertical]:flex-col", e),
      ...t
    }
  );
}
function Wo({ ...e }) {
  return /* @__PURE__ */ a(jt, { "data-slot": "resizable-panel", ...e });
}
function Jo({
  withHandle: e,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    Gt,
    {
      "data-slot": "resizable-handle",
      className: o(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        t
      ),
      ...r,
      children: e && /* @__PURE__ */ a("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ a(Nt, { className: "size-2.5" }) })
    }
  );
}
function ya({ ...e }) {
  return /* @__PURE__ */ a(L.Root, { "data-slot": "sheet", ...e });
}
function Qo({ ...e }) {
  return /* @__PURE__ */ a(L.Trigger, { "data-slot": "sheet-trigger", ...e });
}
function Zo({ ...e }) {
  return /* @__PURE__ */ a(L.Close, { "data-slot": "sheet-close", ...e });
}
function Ca({ ...e }) {
  return /* @__PURE__ */ a(L.Portal, { "data-slot": "sheet-portal", ...e });
}
function ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Sa({
  className: e,
  children: t,
  side: r = "right",
  ...n
}) {
  return /* @__PURE__ */ c(Ca, { children: [
    /* @__PURE__ */ a(ka, {}),
    /* @__PURE__ */ c(
      L.Content,
      {
        "data-slot": "sheet-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ c(L.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(yt, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function za({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: o("flex flex-col gap-1.5 p-4", e),
      ...t
    }
  );
}
function Yo({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-footer",
      className: o("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Ia({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    L.Title,
    {
      "data-slot": "sheet-title",
      className: o("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Ta({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Description,
    {
      "data-slot": "sheet-description",
      className: o("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const ie = 768;
function Da() {
  const [e, t] = l.useState(void 0);
  return l.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${ie - 1}px)`), n = () => {
      t(window.innerWidth < ie);
    };
    return r.addEventListener("change", n), t(window.innerWidth < ie), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function T({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "skeleton",
      className: o("bg-accent animate-pulse rounded-md", e),
      ...t
    }
  );
}
function Pe({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ a(
    U.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Ma({ ...e }) {
  return /* @__PURE__ */ a(Pe, { children: /* @__PURE__ */ a(U.Root, { "data-slot": "tooltip", ...e }) });
}
function _a({ ...e }) {
  return /* @__PURE__ */ a(U.Trigger, { "data-slot": "tooltip-trigger", ...e });
}
function Ea({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ a(U.Portal, { children: /* @__PURE__ */ c(
    U.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: o(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ a(U.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const Pa = "sidebar_state", Aa = 3600 * 24 * 7, Ra = "16rem", La = "18rem", ja = "3rem", Ga = "b", Ae = l.createContext(null);
function re() {
  const e = l.useContext(Ae);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function ei({
  defaultOpen: e = !0,
  open: t,
  onOpenChange: r,
  className: n,
  style: i,
  children: d,
  ...s
}) {
  const u = Da(), [m, f] = l.useState(!1), [N, E] = l.useState(e), w = t ?? N, x = l.useCallback(
    (h) => {
      const y = typeof h == "function" ? h(w) : h;
      r ? r(y) : E(y), document.cookie = `${Pa}=${y}; path=/; max-age=${Aa}`;
    },
    [r, w]
  ), z = l.useCallback(() => u ? f((h) => !h) : x((h) => !h), [u, x, f]);
  l.useEffect(() => {
    const h = (y) => {
      y.key === Ga && (y.metaKey || y.ctrlKey) && (y.preventDefault(), z());
    };
    return window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h);
  }, [z]);
  const I = w ? "expanded" : "collapsed", p = l.useMemo(
    () => ({
      state: I,
      open: w,
      setOpen: x,
      isMobile: u,
      openMobile: m,
      setOpenMobile: f,
      toggleSidebar: z
    }),
    [I, w, x, u, m, f, z]
  );
  return /* @__PURE__ */ a(Ae.Provider, { value: p, children: /* @__PURE__ */ a(Pe, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": Ra,
        "--sidebar-width-icon": ja,
        ...i
      },
      className: o(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...s,
      children: d
    }
  ) }) });
}
function ti({
  side: e = "left",
  variant: t = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: i,
  ...d
}) {
  const { isMobile: s, state: u, openMobile: m, setOpenMobile: f } = re();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...d,
      children: i
    }
  ) : s ? /* @__PURE__ */ a(ya, { open: m, onOpenChange: f, ...d, children: /* @__PURE__ */ c(
    Sa,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": La
      },
      side: e,
      children: [
        /* @__PURE__ */ c(za, { className: "sr-only", children: [
          /* @__PURE__ */ a(Ia, { children: "Sidebar" }),
          /* @__PURE__ */ a(Ta, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ c(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": u,
      "data-collapsible": u === "collapsed" ? r : "",
      "data-variant": t,
      "data-side": e,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: o(
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
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
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
function ai({ className: e, onClick: t, ...r }) {
  const { toggleSidebar: n } = re();
  return /* @__PURE__ */ c(
    M,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7", e),
      onClick: (i) => {
        t?.(i), n();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(Ct, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function ri({ className: e, ...t }) {
  const { toggleSidebar: r } = re();
  return /* @__PURE__ */ a(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: r,
      title: "Toggle Sidebar",
      className: o(
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
function ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      ...t
    }
  );
}
function oi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    ue,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("bg-background h-8 w-full shadow-none", e),
      ...t
    }
  );
}
function ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", e),
      ...t
    }
  );
}
function di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    H,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", e),
      ...t
    }
  );
}
function li({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: o(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      ...t
    }
  );
}
function ci({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: o("relative flex w-full min-w-0 flex-col p-2", e),
      ...t
    }
  );
}
function ui({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? G : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: o(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        e
      ),
      ...r
    }
  );
}
function mi({
  className: e,
  asChild: t = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    t ? G : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: o(
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
function fi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: o("w-full text-sm", e),
      ...t
    }
  );
}
function gi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: o("flex w-full min-w-0 flex-col gap-1", e),
      ...t
    }
  );
}
function pi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: o("group/menu-item relative", e),
      ...t
    }
  );
}
const Oa = _(
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
function bi({
  asChild: e = !1,
  isActive: t = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: i,
  className: d,
  ...s
}) {
  const u = e ? G : "button", { isMobile: m, state: f } = re(), N = /* @__PURE__ */ a(
    u,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": t,
      className: o(Oa({ variant: r, size: n }), d),
      ...s
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ c(Ma, { children: [
    /* @__PURE__ */ a(_a, { asChild: !0, children: N }),
    /* @__PURE__ */ a(
      Ea,
      {
        side: "right",
        align: "center",
        hidden: f !== "collapsed" || m,
        ...i
      }
    )
  ] })) : N;
}
function hi({
  className: e,
  asChild: t = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    t ? G : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: o(
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
      ...n
    }
  );
}
function vi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: o(
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
function xi({
  className: e,
  showIcon: t = !1,
  ...r
}) {
  const [n] = l.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ c(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...r,
      children: [
        t && /* @__PURE__ */ a(T, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          T,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": n
            }
          }
        )
      ]
    }
  );
}
function wi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: o(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  );
}
function Ni({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: o("group/menu-sub-item relative", e),
      ...t
    }
  );
}
function yi({
  asChild: e = !1,
  size: t = "md",
  isActive: r = !1,
  className: n,
  ...i
}) {
  return /* @__PURE__ */ a(
    e ? G : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": r,
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...i
    }
  );
}
function Ci({
  className: e,
  defaultValue: t,
  value: r,
  min: n = 0,
  max: i = 100,
  ...d
}) {
  const s = l.useMemo(
    () => Array.isArray(r) ? r : Array.isArray(t) ? t : [n, i],
    [r, t, n, i]
  );
  return /* @__PURE__ */ c(
    Q.Root,
    {
      "data-slot": "slider",
      defaultValue: t,
      value: r,
      min: n,
      max: i,
      className: o(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        e
      ),
      ...d,
      children: [
        /* @__PURE__ */ a(
          Q.Track,
          {
            "data-slot": "slider-track",
            className: o(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ a(
              Q.Range,
              {
                "data-slot": "slider-range",
                className: o(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: s.length }, (u, m) => /* @__PURE__ */ a(
          Q.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          m
        ))
      ]
    }
  );
}
const ki = ({ ...e }) => {
  const { theme: t = "system" } = Ot();
  return /* @__PURE__ */ a(
    Bt,
    {
      theme: t,
      position: "top-right",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ a(It, { className: "size-5 text-green-700 dark:text-green-400" }),
        info: /* @__PURE__ */ a(zt, { className: "size-5 text-blue-700 dark:text-blue-400" }),
        warning: /* @__PURE__ */ a(St, { className: "size-5 text-amber-700 dark:text-amber-400" }),
        error: /* @__PURE__ */ a(kt, { className: "size-5 text-red-700 dark:text-red-400" }),
        loading: /* @__PURE__ */ a(Se, { className: "size-5 animate-spin text-foreground" })
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
function Ba({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    Se,
    {
      role: "status",
      "aria-label": "Loading",
      className: o("size-4 animate-spin", e),
      ...t
    }
  );
}
function $a({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "table-container", className: "relative w-full overflow-x-auto", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "table",
      className: o("w-full caption-bottom text-sm", e),
      ...t
    }
  ) });
}
function Fa({ className: e, ...t }) {
  return /* @__PURE__ */ a("thead", { "data-slot": "table-header", className: o("[&_tr]:border-b", e), ...t });
}
function Va({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "table-body",
      className: o("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Si({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: o("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", e),
      ...t
    }
  );
}
function se({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "table-row",
      className: o(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        e
      ),
      ...t
    }
  );
}
function Ha({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "table-head",
      className: o(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function Ne({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "table-cell",
      className: o(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        e
      ),
      ...t
    }
  );
}
function zi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "caption",
    {
      "data-slot": "table-caption",
      className: o("text-muted-foreground mt-4 text-sm", e),
      ...t
    }
  );
}
function Ii({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te.Root,
    {
      "data-slot": "tabs",
      className: o("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Ti({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te.List,
    {
      "data-slot": "tabs-list",
      className: o(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Di({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: o(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Mi({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    te.Content,
    {
      "data-slot": "tabs-content",
      className: o("flex-1 outline-none", e),
      ...t
    }
  );
}
const Re = _(
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
function _i({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ a(
    $t.Root,
    {
      "data-slot": "toggle",
      className: o(Re({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
const Le = l.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Ei({
  className: e,
  variant: t,
  size: r,
  spacing: n = 0,
  children: i,
  ...d
}) {
  return /* @__PURE__ */ a(
    ze.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": t,
      "data-size": r,
      "data-spacing": n,
      style: { "--gap": n },
      className: o(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        e
      ),
      ...d,
      children: /* @__PURE__ */ a(Le.Provider, { value: { variant: t, size: r, spacing: n }, children: i })
    }
  );
}
function Pi({
  className: e,
  children: t,
  variant: r,
  size: n,
  ...i
}) {
  const d = l.useContext(Le);
  return /* @__PURE__ */ a(
    ze.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": d.variant || r,
      "data-size": d.size || n,
      "data-spacing": d.spacing,
      className: o(
        Re({
          variant: d.variant || r,
          size: d.size || n
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
const Ai = {
  /**
   * Show a success toast
   */
  success: (e, t) => R.success(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an error toast
   */
  error: (e, t) => R.error(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a warning toast
   */
  warning: (e, t) => R.warning(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show an info toast
   */
  info: (e, t) => R.info(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a default toast
   */
  default: (e, t) => R(e, {
    description: t?.description,
    duration: t?.duration,
    action: t?.action
  }),
  /**
   * Show a loading toast
   */
  loading: (e, t) => R.loading(e, {
    description: t?.description,
    duration: t?.duration
  }),
  /**
   * Show a promise toast (loading -> success/error)
   */
  promise: (e, t, r) => R.promise(e, {
    loading: t.loading,
    success: t.success,
    error: t.error,
    duration: r?.duration
  }),
  /**
   * Dismiss a toast by ID
   */
  dismiss: (e) => {
    R.dismiss(e);
  },
  /**
   * Dismiss all toasts
   */
  dismissAll: () => {
    R.dismiss();
  }
}, ne = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{10,11}$/,
  vietnamesePhone: /^(0|\+84)[1-9][0-9]{8,9}$/,
  url: /^https?:\/\/.+/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  hexColor: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
};
function Ri(e) {
  return ne.email.test(e);
}
function Li(e) {
  return ne.phone.test(e);
}
function ji(e) {
  return ne.vietnamesePhone.test(e);
}
function Gi(e) {
  return ne.url.test(e);
}
function K(e) {
  const [t, r] = l.useState(() => typeof window > "u" ? !1 : window.matchMedia(e).matches);
  return l.useEffect(() => {
    if (typeof window > "u") return;
    const n = window.matchMedia(e), i = (d) => {
      r(d.matches);
    };
    return n.addEventListener ? (n.addEventListener("change", i), () => n.removeEventListener("change", i)) : (n.addListener(i), () => n.removeListener(i));
  }, [e]), t;
}
const V = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function Oi() {
  const e = K(`(min-width: ${V["2xl"]}px)`), t = K(`(min-width: ${V.xl}px)`), r = K(`(min-width: ${V.lg}px)`), n = K(`(min-width: ${V.md}px)`), i = K(`(min-width: ${V.sm}px)`);
  return e ? "2xl" : t ? "xl" : r ? "lg" : n ? "md" : i ? "sm" : null;
}
function Bi() {
  const [e, t] = l.useState(() => typeof window > "u" ? { width: 0, height: 0 } : {
    width: window.innerWidth,
    height: window.innerHeight
  });
  return l.useEffect(() => {
    if (typeof window > "u") return;
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
function $i() {
  return K(`(min-width: ${V.md}px) and (max-width: ${V.lg - 1}px)`);
}
function Fi(e, t) {
  const [r, n] = l.useState(e);
  return l.useEffect(() => {
    const i = setTimeout(() => {
      n(e);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [e, t]), r;
}
function Vi(e, t) {
  const r = lt(void 0), n = ct(
    (...i) => {
      r.current && clearTimeout(r.current), r.current = setTimeout(() => {
        e(...i);
      }, t);
    },
    [e, t]
  );
  return l.useEffect(() => () => {
    r.current && clearTimeout(r.current);
  }, []), n;
}
function Hi(e, t) {
  const [r, n] = l.useState(e), i = l.useRef(void 0);
  return l.useEffect(() => {
    i.current === void 0 && (i.current = Date.now());
  }, []), l.useEffect(() => {
    if (i.current === void 0)
      return;
    const d = setTimeout(
      () => {
        const s = Date.now();
        i.current !== void 0 && s - i.current >= t && (n(e), i.current = s);
      },
      i.current !== void 0 ? t - (Date.now() - i.current) : t
    );
    return () => {
      clearTimeout(d);
    };
  }, [e, t]), r;
}
function Ki(e, t) {
  l.useEffect(() => {
    const r = (n) => {
      const i = e?.current;
      !i || i.contains(n.target) || t(n);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, t]);
}
function Ui(e, t) {
  const [r, n] = l.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const s = window.localStorage.getItem(e);
      return s ? JSON.parse(s) : t;
    } catch (s) {
      return console.error(`Error reading localStorage key "${e}":`, s), t;
    }
  }), i = l.useCallback(
    (s) => {
      try {
        const u = s instanceof Function ? s(r) : s;
        n(u), typeof window < "u" && window.localStorage.setItem(e, JSON.stringify(u));
      } catch (u) {
        console.error(`Error setting localStorage key "${e}":`, u);
      }
    },
    [e, r]
  ), d = l.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.localStorage.removeItem(e);
    } catch (s) {
      console.error(`Error removing localStorage key "${e}":`, s);
    }
  }, [e, t]);
  return [r, i, d];
}
function Xi(e, t) {
  const [r, n] = l.useState(() => {
    if (typeof window > "u")
      return t;
    try {
      const s = window.sessionStorage.getItem(e);
      return s ? JSON.parse(s) : t;
    } catch (s) {
      return console.error(`Error reading sessionStorage key "${e}":`, s), t;
    }
  }), i = l.useCallback(
    (s) => {
      try {
        const u = s instanceof Function ? s(r) : s;
        n(u), typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(u));
      } catch (u) {
        console.error(`Error setting sessionStorage key "${e}":`, u);
      }
    },
    [e, r]
  ), d = l.useCallback(() => {
    try {
      n(t), typeof window < "u" && window.sessionStorage.removeItem(e);
    } catch (s) {
      console.error(`Error removing sessionStorage key "${e}":`, s);
    }
  }, [e, t]);
  return [r, i, d];
}
function qi() {
  const [e, t] = l.useState(!1), [r, n] = l.useState(null);
  return { copy: l.useCallback(async (d) => {
    if (!navigator?.clipboard)
      return n(new Error("Clipboard API not available")), !1;
    try {
      return await navigator.clipboard.writeText(d), t(!0), n(null), setTimeout(() => {
        t(!1);
      }, 2e3), !0;
    } catch (s) {
      return n(s instanceof Error ? s : new Error("Failed to copy")), t(!1), !1;
    }
  }, []), copied: e, error: r };
}
function Wi(e = !1) {
  const [t, r] = l.useState(e), n = l.useCallback(() => {
    r((i) => !i);
  }, []);
  return [t, n, r];
}
function Ji(e) {
  const [t, r] = l.useState(void 0), n = l.useRef(e);
  return l.useEffect(() => {
    n.current !== e && (r(n.current), n.current = e);
  }, [e]), t;
}
function Qi(e, t) {
  return l.useCallback(e, t);
}
function Zi(e, t = !0) {
  l.useEffect(() => {
    if (!t || !e.current) return;
    const r = e.current, n = r.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), i = n[0], d = n[n.length - 1], s = (u) => {
      u.key === "Tab" && (u.shiftKey ? document.activeElement === i && (u.preventDefault(), d?.focus()) : document.activeElement === d && (u.preventDefault(), i?.focus()));
    };
    return r.addEventListener("keydown", s), i?.focus(), () => {
      r.removeEventListener("keydown", s);
    };
  }, [t, e]);
}
function Yi(e, t = {}) {
  const { direction: r = "both", loop: n = !1, onNavigate: i } = t, [d, s] = l.useState(0), u = l.useCallback(
    (m) => {
      let f = d;
      (r === "horizontal" || r === "both") && (m.key === "ArrowLeft" ? (m.preventDefault(), f = d > 0 ? d - 1 : n ? e - 1 : d) : m.key === "ArrowRight" && (m.preventDefault(), f = d < e - 1 ? d + 1 : n ? 0 : d)), (r === "vertical" || r === "both") && (m.key === "ArrowUp" ? (m.preventDefault(), f = d > 0 ? d - 1 : n ? e - 1 : d) : m.key === "ArrowDown" && (m.preventDefault(), f = d < e - 1 ? d + 1 : n ? 0 : d)), f !== d && (s(f), i?.(f));
    },
    [d, e, r, n, i]
  );
  return { currentIndex: d, setCurrentIndex: s, handleKeyDown: u };
}
function es(e = {}) {
  const { label: t, labelledBy: r, describedBy: n } = e;
  return l.useMemo(
    () => ({
      "aria-label": t,
      "aria-labelledby": r,
      "aria-describedby": n
    }),
    [t, r, n]
  );
}
function Ka({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  confirmText: i = "Confirm",
  cancelText: d = "Cancel",
  onConfirm: s,
  variant: u = "default",
  loading: m = !1
}) {
  const [f, N] = l.useState(!1);
  return /* @__PURE__ */ a(Qe, { open: e, onOpenChange: t, children: /* @__PURE__ */ c(Ze, { children: [
    /* @__PURE__ */ c(Ye, { children: [
      /* @__PURE__ */ a(et, { children: r }),
      n && /* @__PURE__ */ a(tt, { children: n })
    ] }),
    /* @__PURE__ */ c(at, { children: [
      /* @__PURE__ */ a(
        M,
        {
          variant: "outline",
          onClick: () => t(!1),
          disabled: f || m,
          children: d
        }
      ),
      /* @__PURE__ */ a(M, { variant: u, onClick: async () => {
        N(!0);
        try {
          await s(), t(!1);
        } finally {
          N(!1);
        }
      }, disabled: f || m, children: f || m ? "Loading..." : i })
    ] })
  ] }) });
}
function ts({ className: e, maxWidth: t = "xl", ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
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
      ...r
    }
  );
}
const Ua = [
  { id: 10, name: "10/trang" },
  { id: 20, name: "20/trang" },
  { id: 50, name: "50/trang" },
  { id: 100, name: "100/trang" }
];
function as({
  data: e,
  paginationOptions: t,
  columns: r,
  totalPages: n = 0,
  searchable: i = !1,
  searchPlaceholder: d,
  searchKey: s,
  emptyMessage: u,
  className: m,
  enableGlobalFilter: f = !0,
  globalFilterFn: N,
  pagination: E,
  onRowClick: w,
  rowClassName: x
}) {
  const [z, I] = l.useState([]), [p, h] = l.useState(""), y = Vt({
    data: e,
    columns: r,
    getRowId: (v, b) => "id" in v && v.id != null ? String(v.id) : String(b),
    getCoreRowModel: Ht(),
    onSortingChange: I,
    manualFiltering: !0,
    manualSorting: !0,
    manualPagination: !0,
    globalFilterFn: N || ((v, b, P) => {
      if (!s)
        return Object.values(v.original).some(
          (oe) => String(oe).toLowerCase().includes(String(P).toLowerCase())
        );
      const $ = v.original[s];
      return String($).toLowerCase().includes(String(P).toLowerCase());
    }),
    enableGlobalFilter: i && f,
    state: {
      sorting: z,
      pagination: E,
      columnPinning: {
        right: ["actions"]
      }
    },
    ...t
  });
  return /* @__PURE__ */ c("div", { className: o("space-y-4", m), children: [
    i && /* @__PURE__ */ a(
      ue,
      {
        placeholder: d || "Search...",
        value: p ?? "",
        onChange: (v) => h(v.target.value),
        className: "max-w-sm"
      }
    ),
    /* @__PURE__ */ a("div", { className: "rounded-md border", children: /* @__PURE__ */ c($a, { children: [
      /* @__PURE__ */ a(Fa, { children: y.getHeaderGroups().map((v) => /* @__PURE__ */ a(se, { children: v.headers.map((b) => {
        const P = b.column.getCanSort(), $ = b.column.getIsSorted();
        return /* @__PURE__ */ a(Ha, { children: b.isPlaceholder ? null : /* @__PURE__ */ c("div", { className: "flex gap-2 items-center", children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: o(
                P && "cursor-pointer select-none hover:text-foreground"
              ),
              onClick: P ? b.column.getToggleSortingHandler() : void 0,
              children: we(b.column.columnDef.header, b.getContext())
            }
          ),
          P && /* @__PURE__ */ a(
            M,
            {
              variant: "ghost",
              size: "icon",
              className: "w-4 h-4",
              onClick: b.column.getToggleSortingHandler(),
              children: $ === "asc" ? /* @__PURE__ */ a(Tt, { className: "size-3.5 text-primary" }) : $ === "desc" ? /* @__PURE__ */ a(Dt, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ a(Mt, { className: "size-3.5" })
            }
          )
        ] }) }, b.id);
      }) }, v.id)) }),
      /* @__PURE__ */ a(Va, { children: y.getRowModel().rows?.length ? y.getRowModel().rows.map((v) => /* @__PURE__ */ a(
        se,
        {
          "data-state": v.getIsSelected() && "selected",
          className: o(
            w && "cursor-pointer",
            x && x(v.original)
          ),
          onClick: () => w?.(v.original),
          children: v.getVisibleCells().map((b) => /* @__PURE__ */ a(Ne, { children: we(b.column.columnDef.cell, b.getContext()) }, b.id))
        },
        v.id
      )) : /* @__PURE__ */ a(se, { children: /* @__PURE__ */ a(Ne, { colSpan: y.getAllColumns().length, className: "py-8 text-center", children: u || "No data available" }) }) })
    ] }) }),
    typeof n == "number" && n > 1 && /* @__PURE__ */ a(Xa, { table: y, totalPages: n })
  ] });
}
function Xa({ table: e, totalPages: t }) {
  return /* @__PURE__ */ a(ga, { children: /* @__PURE__ */ c(pa, { className: "flex-1 gap-4 justify-end", children: [
    /* @__PURE__ */ a(q, { children: /* @__PURE__ */ a(
      Na,
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
    /* @__PURE__ */ a(q, { children: /* @__PURE__ */ c(
      rt,
      {
        onValueChange: (r) => {
          e.setPageSize(Number(r));
        },
        value: e.getState().pagination.pageSize.toString(),
        children: [
          /* @__PURE__ */ a(nt, { className: "w-[130px]", size: "sm", children: /* @__PURE__ */ a(ot, { placeholder: "Chọn" }) }),
          /* @__PURE__ */ a(it, { children: /* @__PURE__ */ a(Ft, { children: Ua.map((r) => /* @__PURE__ */ a(st, { value: r.id.toString(), children: r.name }, r.id)) }) })
        ]
      }
    ) })
  ] }) });
}
function rs({
  open: e,
  onOpenChange: t,
  title: r,
  description: n,
  itemName: i,
  onConfirm: d,
  loading: s = !1
}) {
  return /* @__PURE__ */ a(
    Ka,
    {
      open: e,
      onOpenChange: t,
      title: r || "Delete Confirmation",
      description: n || (i ? `Are you sure you want to delete "${i}"? This action cannot be undone.` : "Are you sure you want to delete this item? This action cannot be undone."),
      confirmText: "Delete",
      cancelText: "Cancel",
      onConfirm: d,
      variant: "destructive",
      loading: s
    }
  );
}
function ns({
  className: e,
  label: t,
  labelPosition: r = "center",
  orientation: n = "horizontal",
  ...i
}) {
  return t ? /* @__PURE__ */ c(
    "div",
    {
      className: o(
        "flex items-center",
        n === "horizontal" ? "w-full" : "h-full flex-col",
        e
      ),
      ...i,
      children: [
        r !== "left" && /* @__PURE__ */ a(
          H,
          {
            orientation: n,
            className: o(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: o(
              "px-3 text-sm text-muted-foreground",
              n === "vertical" && "py-3 px-0"
            ),
            children: t
          }
        ),
        r !== "right" && /* @__PURE__ */ a(
          H,
          {
            orientation: n,
            className: o(n === "horizontal" ? "flex-1" : "flex-1 w-px")
          }
        )
      ]
    }
  ) : /* @__PURE__ */ a(H, { orientation: n, className: e, ...i });
}
function os({
  className: e,
  icon: t,
  title: r = "No data",
  description: n,
  action: i,
  children: d,
  ...s
}) {
  return /* @__PURE__ */ c(Yt, { className: o(e), ...s, children: [
    /* @__PURE__ */ c(ea, { children: [
      t && /* @__PURE__ */ a(aa, { variant: "icon", children: t }),
      /* @__PURE__ */ a(ra, { children: r }),
      n && /* @__PURE__ */ a(na, { children: n })
    ] }),
    d && /* @__PURE__ */ a(oa, { children: d }),
    i && /* @__PURE__ */ a(M, { onClick: i.onClick, variant: "outline", children: i.label })
  ] });
}
class is extends l.Component {
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
        qa,
        {
          error: this.state.error,
          resetError: () => this.setState({ hasError: !1, error: null })
        }
      );
    }
    return this.props.children;
  }
}
function qa({ error: e, resetError: t }) {
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-center min-h-[200px] p-4", children: /* @__PURE__ */ c(Ie, { variant: "destructive", className: "max-w-md", children: [
    /* @__PURE__ */ a(_t, { className: "h-4 w-4" }),
    /* @__PURE__ */ a(Te, { children: "Something went wrong" }),
    /* @__PURE__ */ a(De, { children: e?.message || "An unexpected error occurred" }),
    /* @__PURE__ */ a(M, { variant: "outline", size: "sm", onClick: t, className: "mt-4", children: "Try again" })
  ] }) });
}
function ss({ className: e, cols: t = 1, gap: r = 4, responsive: n, ...i }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
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
        n?.sm && {
          "sm:grid-cols-1": n.sm === 1,
          "sm:grid-cols-2": n.sm === 2,
          "sm:grid-cols-3": n.sm === 3,
          "sm:grid-cols-4": n.sm === 4,
          "sm:grid-cols-5": n.sm === 5,
          "sm:grid-cols-6": n.sm === 6,
          "sm:grid-cols-12": n.sm === 12
        },
        n?.md && {
          "md:grid-cols-1": n.md === 1,
          "md:grid-cols-2": n.md === 2,
          "md:grid-cols-3": n.md === 3,
          "md:grid-cols-4": n.md === 4,
          "md:grid-cols-5": n.md === 5,
          "md:grid-cols-6": n.md === 6,
          "md:grid-cols-12": n.md === 12
        },
        n?.lg && {
          "lg:grid-cols-1": n.lg === 1,
          "lg:grid-cols-2": n.lg === 2,
          "lg:grid-cols-3": n.lg === 3,
          "lg:grid-cols-4": n.lg === 4,
          "lg:grid-cols-5": n.lg === 5,
          "lg:grid-cols-6": n.lg === 6,
          "lg:grid-cols-12": n.lg === 12
        },
        n?.xl && {
          "xl:grid-cols-1": n.xl === 1,
          "xl:grid-cols-2": n.xl === 2,
          "xl:grid-cols-3": n.xl === 3,
          "xl:grid-cols-4": n.xl === 4,
          "xl:grid-cols-5": n.xl === 5,
          "xl:grid-cols-6": n.xl === 6,
          "xl:grid-cols-12": n.xl === 12
        },
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        e
      ),
      ...i
    }
  );
}
function ds({
  className: e,
  loading: t = !1,
  loadingText: r,
  children: n,
  disabled: i,
  ...d
}) {
  return /* @__PURE__ */ c(M, { className: o(e), disabled: i || t, ...d, children: [
    t && /* @__PURE__ */ a(Ba, { className: "mr-2 h-4 w-4" }),
    t && r || n
  ] });
}
function ls({ className: e, count: t = 3, variant: r = "default", ...n }) {
  return r === "card" ? /* @__PURE__ */ a("div", { className: o("space-y-4", e), ...n, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ c("div", { className: "space-y-2 p-4 border rounded-lg", children: [
    /* @__PURE__ */ a(T, { className: "h-4 w-3/4" }),
    /* @__PURE__ */ a(T, { className: "h-4 w-1/2" }),
    /* @__PURE__ */ a(T, { className: "h-4 w-2/3" })
  ] }, d)) }) : r === "list" ? /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(T, { className: "h-12 w-full" }, d)) }) : r === "table" ? /* @__PURE__ */ c("div", { className: o("space-y-2", e), ...n, children: [
    /* @__PURE__ */ c("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(T, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(T, { className: "h-10 flex-1" }),
      /* @__PURE__ */ a(T, { className: "h-10 flex-1" })
    ] }),
    Array.from({ length: t }).map((i, d) => /* @__PURE__ */ c("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ a(T, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(T, { className: "h-12 flex-1" }),
      /* @__PURE__ */ a(T, { className: "h-12 flex-1" })
    ] }, d))
  ] }) : /* @__PURE__ */ a("div", { className: o("space-y-2", e), ...n, children: Array.from({ length: t }).map((i, d) => /* @__PURE__ */ a(T, { className: "h-4 w-full" }, d)) });
}
function cs({
  className: e,
  direction: t = "column",
  spacing: r = 2,
  align: n,
  justify: i,
  wrap: d = !1,
  ...s
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex",
        t === "row" ? "flex-row" : "flex-col",
        d && "flex-wrap",
        {
          "gap-0": r === 0,
          "gap-1": r === 1,
          "gap-2": r === 2,
          "gap-3": r === 3,
          "gap-4": r === 4,
          "gap-5": r === 5,
          "gap-6": r === 6,
          "gap-8": r === 8,
          "gap-10": r === 10,
          "gap-12": r === 12
        },
        {
          "items-start": n === "start",
          "items-center": n === "center",
          "items-end": n === "end",
          "items-stretch": n === "stretch"
        },
        {
          "justify-start": i === "start",
          "justify-center": i === "center",
          "justify-end": i === "end",
          "justify-between": i === "between",
          "justify-around": i === "around",
          "justify-evenly": i === "evenly"
        },
        e
      ),
      ...s
    }
  );
}
const Wa = {
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
function us({ className: e, status: t, label: r, ...n }) {
  const i = Wa[t];
  return /* @__PURE__ */ a(de, { variant: "outline", className: o(i.className, e), ...n, children: r || i.label });
}
export {
  cr as Accordion,
  fr as AccordionContent,
  ur as AccordionItem,
  mr as AccordionTrigger,
  Ie as Alert,
  De as AlertDescription,
  gr as AlertDialog,
  Nr as AlertDialogAction,
  yr as AlertDialogCancel,
  br as AlertDialogContent,
  wr as AlertDialogDescription,
  vr as AlertDialogFooter,
  hr as AlertDialogHeader,
  Xt as AlertDialogOverlay,
  Ut as AlertDialogPortal,
  xr as AlertDialogTitle,
  pr as AlertDialogTrigger,
  Te as AlertTitle,
  Cr as AspectRatio,
  kr as Avatar,
  zr as AvatarFallback,
  Sr as AvatarImage,
  V as BREAKPOINTS,
  de as Badge,
  Ir as Breadcrumb,
  Pr as BreadcrumbEllipsis,
  Dr as BreadcrumbItem,
  Mr as BreadcrumbLink,
  Tr as BreadcrumbList,
  _r as BreadcrumbPage,
  Er as BreadcrumbSeparator,
  M as Button,
  Ar as ButtonGroup,
  Lr as ButtonGroupSeparator,
  Rr as ButtonGroupText,
  gs as Calendar,
  ps as CalendarDayButton,
  jr as Card,
  $r as CardAction,
  Fr as CardContent,
  Br as CardDescription,
  Vr as CardFooter,
  Gr as CardHeader,
  Or as CardTitle,
  Hr as Carousel,
  Kr as CarouselContent,
  Ur as CarouselItem,
  qr as CarouselNext,
  Xr as CarouselPrevious,
  Wr as ChartContainer,
  Zr as ChartLegend,
  Yr as ChartLegendContent,
  Jt as ChartStyle,
  Jr as ChartTooltip,
  Qr as ChartTooltipContent,
  Je as Checkbox,
  en as Collapsible,
  an as CollapsibleContent,
  tn as CollapsibleTrigger,
  bs as Combobox,
  He as Command,
  hs as CommandDialog,
  Xe as CommandEmpty,
  qe as CommandGroup,
  Ke as CommandInput,
  We as CommandItem,
  Ue as CommandList,
  vs as CommandSeparator,
  xs as CommandShortcut,
  Ka as ConfirmDialog,
  ts as Container,
  rn as ContextMenu,
  gn as ContextMenuCheckboxItem,
  mn as ContextMenuContent,
  on as ContextMenuGroup,
  fn as ContextMenuItem,
  bn as ContextMenuLabel,
  sn as ContextMenuPortal,
  ln as ContextMenuRadioGroup,
  pn as ContextMenuRadioItem,
  hn as ContextMenuSeparator,
  vn as ContextMenuShortcut,
  dn as ContextMenuSub,
  un as ContextMenuSubContent,
  cn as ContextMenuSubTrigger,
  nn as ContextMenuTrigger,
  ws as DATE_FORMATS,
  as as DataTable,
  Ns as DatePicker,
  ys as DateRangePicker,
  rs as DeleteConfirmDialog,
  Qe as Dialog,
  Cs as DialogClose,
  Ze as DialogContent,
  tt as DialogDescription,
  at as DialogFooter,
  Ye as DialogHeader,
  ks as DialogOverlay,
  Ss as DialogPortal,
  et as DialogTitle,
  zs as DialogTrigger,
  ns as Divider,
  xn as Drawer,
  Nn as DrawerClose,
  yn as DrawerContent,
  zn as DrawerDescription,
  kn as DrawerFooter,
  Cn as DrawerHeader,
  Zt as DrawerOverlay,
  Qt as DrawerPortal,
  Sn as DrawerTitle,
  wn as DrawerTrigger,
  In as DropdownMenu,
  Pn as DropdownMenuCheckboxItem,
  Mn as DropdownMenuContent,
  _n as DropdownMenuGroup,
  En as DropdownMenuItem,
  Ln as DropdownMenuLabel,
  Tn as DropdownMenuPortal,
  An as DropdownMenuRadioGroup,
  Rn as DropdownMenuRadioItem,
  jn as DropdownMenuSeparator,
  Gn as DropdownMenuShortcut,
  On as DropdownMenuSub,
  $n as DropdownMenuSubContent,
  Bn as DropdownMenuSubTrigger,
  Dn as DropdownMenuTrigger,
  Yt as Empty,
  oa as EmptyContent,
  na as EmptyDescription,
  ea as EmptyHeader,
  aa as EmptyMedia,
  os as EmptyState,
  ra as EmptyTitle,
  is as ErrorBoundary,
  Is as FORM_SIZES,
  Kn as Field,
  Un as FieldContent,
  Wn as FieldDescription,
  Qn as FieldError,
  Hn as FieldGroup,
  Xn as FieldLabel,
  Vn as FieldLegend,
  Jn as FieldSeparator,
  Fn as FieldSet,
  qn as FieldTitle,
  ss as Grid,
  Zn as HoverCard,
  eo as HoverCardContent,
  Yn as HoverCardTrigger,
  ue as Input,
  to as InputGroup,
  ao as InputGroupAddon,
  ro as InputGroupButton,
  oo as InputGroupInput,
  no as InputGroupText,
  io as InputGroupTextarea,
  so as InputOTP,
  lo as InputOTPGroup,
  uo as InputOTPSeparator,
  co as InputOTPSlot,
  go as Item,
  xo as ItemActions,
  bo as ItemContent,
  vo as ItemDescription,
  No as ItemFooter,
  mo as ItemGroup,
  wo as ItemHeader,
  po as ItemMedia,
  fo as ItemSeparator,
  ho as ItemTitle,
  yo as Kbd,
  Co as KbdGroup,
  ye as Label,
  ds as LoadingButton,
  ls as LoadingState,
  ko as Menubar,
  _o as MenubarCheckboxItem,
  Do as MenubarContent,
  zo as MenubarGroup,
  Mo as MenubarItem,
  Po as MenubarLabel,
  So as MenubarMenu,
  ua as MenubarPortal,
  Io as MenubarRadioGroup,
  Eo as MenubarRadioItem,
  Ao as MenubarSeparator,
  Ro as MenubarShortcut,
  Lo as MenubarSub,
  Go as MenubarSubContent,
  jo as MenubarSubTrigger,
  To as MenubarTrigger,
  Oo as MultipleCombobox,
  Bo as NavigationMenu,
  Ho as NavigationMenuContent,
  Uo as NavigationMenuIndicator,
  Fo as NavigationMenuItem,
  Ko as NavigationMenuLink,
  $o as NavigationMenuList,
  Vo as NavigationMenuTrigger,
  fa as NavigationMenuViewport,
  ga as Pagination,
  pa as PaginationContent,
  Xo as PaginationEllipsis,
  q as PaginationItem,
  J as PaginationLink,
  ha as PaginationNext,
  ba as PaginationPrevious,
  Na as PaginationRange,
  $e as Popover,
  Ts as PopoverAnchor,
  Ve as PopoverContent,
  Fe as PopoverTrigger,
  Ds as Progress,
  ne as REGEX,
  Ms as RadioGroup,
  _s as RadioGroupItem,
  Jo as ResizableHandle,
  Wo as ResizablePanel,
  qo as ResizablePanelGroup,
  Es as ScrollArea,
  Ps as ScrollBar,
  rt as Select,
  it as SelectContent,
  As as SelectGroup,
  st as SelectItem,
  Rs as SelectLabel,
  Ls as SelectScrollDownButton,
  js as SelectScrollUpButton,
  Gs as SelectSeparator,
  nt as SelectTrigger,
  ot as SelectValue,
  H as Separator,
  ya as Sheet,
  Zo as SheetClose,
  Sa as SheetContent,
  Ta as SheetDescription,
  Yo as SheetFooter,
  za as SheetHeader,
  Ia as SheetTitle,
  Qo as SheetTrigger,
  ti as Sidebar,
  li as SidebarContent,
  si as SidebarFooter,
  ci as SidebarGroup,
  mi as SidebarGroupAction,
  fi as SidebarGroupContent,
  ui as SidebarGroupLabel,
  ii as SidebarHeader,
  oi as SidebarInput,
  ni as SidebarInset,
  gi as SidebarMenu,
  hi as SidebarMenuAction,
  vi as SidebarMenuBadge,
  bi as SidebarMenuButton,
  pi as SidebarMenuItem,
  xi as SidebarMenuSkeleton,
  wi as SidebarMenuSub,
  yi as SidebarMenuSubButton,
  Ni as SidebarMenuSubItem,
  ei as SidebarProvider,
  ri as SidebarRail,
  di as SidebarSeparator,
  ai as SidebarTrigger,
  T as Skeleton,
  Ci as Slider,
  Ba as Spinner,
  cs as Stack,
  us as StatusBadge,
  Os as Switch,
  $a as Table,
  Va as TableBody,
  zi as TableCaption,
  Ne as TableCell,
  Si as TableFooter,
  Ha as TableHead,
  Fa as TableHeader,
  se as TableRow,
  Ii as Tabs,
  Mi as TabsContent,
  Ti as TabsList,
  Di as TabsTrigger,
  Be as Textarea,
  Bs as TimePicker,
  ki as Toaster,
  _i as Toggle,
  Ei as ToggleGroup,
  Pi as ToggleGroupItem,
  Ma as Tooltip,
  Ea as TooltipContent,
  Pe as TooltipProvider,
  _a as TooltipTrigger,
  $s as badgeVariants,
  qt as buttonGroupVariants,
  ce as buttonVariants,
  o as cn,
  Fs as formSizeVariants,
  Vs as formatCurrency,
  Hs as formatDate,
  Ks as formatFileSize,
  Us as formatPhoneNumber,
  Xs as get,
  qs as hasValue,
  ma as navigationMenuTriggerStyle,
  Ai as toast,
  Re as toggleVariants,
  Ws as truncate,
  es as useAriaLabel,
  Oi as useBreakpoint,
  Ki as useClickOutside,
  qi as useCopyToClipboard,
  Fi as useDebounce,
  Vi as useDebouncedCallback,
  Zi as useFocusTrap,
  Da as useIsMobile,
  $i as useIsTablet,
  Yi as useKeyboardNavigation,
  Ui as useLocalStorage,
  K as useMediaQuery,
  Qi as useMemoizedCallback,
  Ji as usePrevious,
  Xi as useSessionStorage,
  re as useSidebar,
  Hi as useThrottle,
  Wi as useToggle,
  Bi as useWindowSize,
  Ri as validateEmail,
  Li as validatePhone,
  Gi as validateURL,
  ji as validateVietnamesePhone
};
//# sourceMappingURL=index.mjs.map
