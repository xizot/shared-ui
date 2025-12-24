import { jsx as a, jsxs as g, Fragment as H } from "react/jsx-runtime";
import V from "embla-carousel-react";
import { ArrowRight as W, ArrowLeft as q, XIcon as X, PanelLeftIcon as F } from "lucide-react";
import * as c from "react";
import { c as n, B as T, I as U, S as Y } from "./input-D0NE8tsx.js";
import * as P from "recharts";
import { Slot as _ } from "@radix-ui/react-slot";
import { cva as O } from "class-variance-authority";
import * as N from "@radix-ui/react-dialog";
import { S as R } from "./skeleton-D0UiYAUF.js";
import * as y from "@radix-ui/react-tooltip";
import * as L from "@radix-ui/react-toggle-group";
import "@radix-ui/react-toggle";
const A = c.createContext(null);
function z() {
  const t = c.useContext(A);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
function _e({
  orientation: t = "horizontal",
  opts: e,
  setApi: r,
  plugins: o,
  className: i,
  children: s,
  ...d
}) {
  const [b, l] = V(
    {
      ...e,
      axis: t === "horizontal" ? "x" : "y"
    },
    o
  ), [m, C] = c.useState(!1), [k, v] = c.useState(!1), p = c.useCallback((f) => {
    f && (C(f.canScrollPrev()), v(f.canScrollNext()));
  }, []), x = c.useCallback(() => {
    l?.scrollPrev();
  }, [l]), w = c.useCallback(() => {
    l?.scrollNext();
  }, [l]), u = c.useCallback(
    (f) => {
      f.key === "ArrowLeft" ? (f.preventDefault(), x()) : f.key === "ArrowRight" && (f.preventDefault(), w());
    },
    [x, w]
  );
  return c.useEffect(() => {
    !l || !r || r(l);
  }, [l, r]), c.useEffect(() => {
    if (l)
      return p(l), l.on("reInit", p), l.on("select", p), () => {
        l?.off("select", p);
      };
  }, [l, p]), /* @__PURE__ */ a(
    A.Provider,
    {
      value: {
        carouselRef: b,
        api: l,
        opts: e,
        orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: x,
        scrollNext: w,
        canScrollPrev: m,
        canScrollNext: k
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: u,
          className: n("relative", i),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: s
        }
      )
    }
  );
}
function ze({ className: t, ...e }) {
  const { carouselRef: r, orientation: o } = z();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: n("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
      ...e
    }
  ) });
}
function Ie({ className: t, ...e }) {
  const { orientation: r } = z();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: n(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
}
function Me({
  className: t,
  variant: e = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: i, scrollPrev: s, canScrollPrev: d } = z();
  return /* @__PURE__ */ g(
    T,
    {
      "data-slot": "carousel-previous",
      variant: e,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !d,
      onClick: s,
      ...o,
      children: [
        /* @__PURE__ */ a(q, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Ee({
  className: t,
  variant: e = "outline",
  size: r = "icon",
  ...o
}) {
  const { orientation: i, scrollNext: s, canScrollNext: d } = z();
  return /* @__PURE__ */ g(
    T,
    {
      "data-slot": "carousel-next",
      variant: e,
      size: r,
      className: n(
        "absolute size-8 rounded-full",
        i === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !d,
      onClick: s,
      ...o,
      children: [
        /* @__PURE__ */ a(W, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const J = { light: "", dark: ".dark" }, B = c.createContext(null);
function j() {
  const t = c.useContext(B);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
function Te({
  id: t,
  className: e,
  children: r,
  config: o,
  ...i
}) {
  const s = c.useId(), d = `chart-${t || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(B.Provider, { value: { config: o }, children: /* @__PURE__ */ g(
    "div",
    {
      "data-slot": "chart",
      "data-chart": d,
      className: n(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ a(Q, { id: d, config: o }),
        /* @__PURE__ */ a(P.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const Q = ({ id: t, config: e }) => {
  const r = Object.entries(e).filter(([, o]) => o.theme || o.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(J).map(
          ([o, i]) => `
${i} [data-chart=${t}] {
${r.map(([s, d]) => {
            const b = d.theme?.[o] || d.color;
            return b ? `  --color-${s}: ${b};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, Pe = P.Tooltip;
function De({
  active: t,
  payload: e,
  className: r,
  indicator: o = "dot",
  hideLabel: i = !1,
  hideIndicator: s = !1,
  label: d,
  labelFormatter: b,
  labelClassName: l,
  formatter: m,
  color: C,
  nameKey: k,
  labelKey: v
}) {
  const { config: p } = j(), x = c.useMemo(() => {
    if (i || !e?.length)
      return null;
    const [u] = e, f = `${v || u?.dataKey || u?.name || "value"}`, h = E(p, u, f), S = !v && typeof d == "string" ? p[d]?.label || d : h?.label;
    return b ? /* @__PURE__ */ a("div", { className: n("font-medium", l), children: b(S, e) }) : S ? /* @__PURE__ */ a("div", { className: n("font-medium", l), children: S }) : null;
  }, [d, b, e, i, l, p, v]);
  if (!t || !e?.length)
    return null;
  const w = e.length === 1 && o !== "dot";
  return /* @__PURE__ */ g(
    "div",
    {
      className: n(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        w ? null : x,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: e.filter((u) => u.type !== "none").map((u, f) => {
          const h = `${k || u.name || u.dataKey || "value"}`, S = E(p, u, h), D = C || u.payload.fill || u.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: n(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                o === "dot" && "items-center"
              ),
              children: m && u?.value !== void 0 && u.name ? m(u.value, u.name, u, f, u.payload) : /* @__PURE__ */ g(H, { children: [
                S?.icon ? /* @__PURE__ */ a(S.icon, {}) : !s && /* @__PURE__ */ a(
                  "div",
                  {
                    className: n(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": o === "dot",
                        "w-1": o === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": o === "dashed",
                        "my-0.5": w && o === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": D,
                      "--color-border": D
                    }
                  }
                ),
                /* @__PURE__ */ g(
                  "div",
                  {
                    className: n(
                      "flex flex-1 justify-between leading-none",
                      w ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ g("div", { className: "grid gap-1.5", children: [
                        w ? x : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: S?.label || u.name })
                      ] }),
                      u.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: u.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            u.dataKey
          );
        }) })
      ]
    }
  );
}
const Re = P.Legend;
function Oe({
  className: t,
  hideIcon: e = !1,
  payload: r,
  verticalAlign: o = "bottom",
  nameKey: i
}) {
  const { config: s } = j();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: n(
        "flex items-center justify-center gap-4",
        o === "top" ? "pb-3" : "pt-3",
        t
      ),
      children: r.filter((d) => d.type !== "none").map((d) => {
        const b = `${i || d.dataKey || "value"}`, l = E(s, d, b);
        return /* @__PURE__ */ g(
          "div",
          {
            className: n(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              l?.icon && !e ? /* @__PURE__ */ a(l.icon, {}) : /* @__PURE__ */ a(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: d.color
                  }
                }
              ),
              l?.label
            ]
          },
          d.value
        );
      })
    }
  ) : null;
}
function E(t, e, r) {
  if (typeof e != "object" || e === null)
    return;
  const o = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let i = r;
  return r in e && typeof e[r] == "string" ? i = e[r] : o && r in o && typeof o[r] == "string" && (i = o[r]), i in t ? t[i] : t[r];
}
const M = 768;
function Z() {
  const [t, e] = c.useState(void 0);
  return c.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${M - 1}px)`), o = () => {
      e(window.innerWidth < M);
    };
    return r.addEventListener("change", o), e(window.innerWidth < M), () => r.removeEventListener("change", o);
  }, []), !!t;
}
function ee({ ...t }) {
  return /* @__PURE__ */ a(N.Root, { "data-slot": "sheet", ...t });
}
function te({ ...t }) {
  return /* @__PURE__ */ a(N.Portal, { "data-slot": "sheet-portal", ...t });
}
function ae({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    N.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: n(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function re({
  className: t,
  children: e,
  side: r = "right",
  ...o
}) {
  return /* @__PURE__ */ g(te, { children: [
    /* @__PURE__ */ a(ae, {}),
    /* @__PURE__ */ g(
      N.Content,
      {
        "data-slot": "sheet-content",
        className: n(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          t
        ),
        ...o,
        children: [
          e,
          /* @__PURE__ */ g(N.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ a(X, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function oe({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sheet-header",
      className: n("flex flex-col gap-1.5 p-4", t),
      ...e
    }
  );
}
function ne({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    N.Title,
    {
      "data-slot": "sheet-title",
      className: n("text-foreground font-semibold", t),
      ...e
    }
  );
}
function ie({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    N.Description,
    {
      "data-slot": "sheet-description",
      className: n("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function $({
  delayDuration: t = 0,
  ...e
}) {
  return /* @__PURE__ */ a(
    y.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...e
    }
  );
}
function se({ ...t }) {
  return /* @__PURE__ */ a($, { children: /* @__PURE__ */ a(y.Root, { "data-slot": "tooltip", ...t }) });
}
function de({ ...t }) {
  return /* @__PURE__ */ a(y.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function le({
  className: t,
  sideOffset: e = 0,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ a(y.Portal, { children: /* @__PURE__ */ g(
    y.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: e,
      className: n(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        t
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(y.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const ce = "sidebar_state", ue = 3600 * 24 * 7, fe = "16rem", be = "18rem", ge = "3rem", pe = "b", K = c.createContext(null);
function I() {
  const t = c.useContext(K);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function Le({
  defaultOpen: t = !0,
  open: e,
  onOpenChange: r,
  className: o,
  style: i,
  children: s,
  ...d
}) {
  const b = Z(), [l, m] = c.useState(!1), [C, k] = c.useState(t), v = e ?? C, p = c.useCallback(
    (f) => {
      const h = typeof f == "function" ? f(v) : f;
      r ? r(h) : k(h), document.cookie = `${ce}=${h}; path=/; max-age=${ue}`;
    },
    [r, v]
  ), x = c.useCallback(() => b ? m((f) => !f) : p((f) => !f), [b, p, m]);
  c.useEffect(() => {
    const f = (h) => {
      h.key === pe && (h.metaKey || h.ctrlKey) && (h.preventDefault(), x());
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [x]);
  const w = v ? "expanded" : "collapsed", u = c.useMemo(
    () => ({
      state: w,
      open: v,
      setOpen: p,
      isMobile: b,
      openMobile: l,
      setOpenMobile: m,
      toggleSidebar: x
    }),
    [w, v, p, b, l, m, x]
  );
  return /* @__PURE__ */ a(K.Provider, { value: u, children: /* @__PURE__ */ a($, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": fe,
        "--sidebar-width-icon": ge,
        ...i
      },
      className: n(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        o
      ),
      ...d,
      children: s
    }
  ) }) });
}
function Ae({
  side: t = "left",
  variant: e = "sidebar",
  collapsible: r = "offcanvas",
  className: o,
  children: i,
  ...s
}) {
  const { isMobile: d, state: b, openMobile: l, setOpenMobile: m } = I();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: n(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        o
      ),
      ...s,
      children: i
    }
  ) : d ? /* @__PURE__ */ a(ee, { open: l, onOpenChange: m, ...s, children: /* @__PURE__ */ g(
    re,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": be
      },
      side: t,
      children: [
        /* @__PURE__ */ g(oe, { className: "sr-only", children: [
          /* @__PURE__ */ a(ne, { children: "Sidebar" }),
          /* @__PURE__ */ a(ie, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: i })
      ]
    }
  ) }) : /* @__PURE__ */ g(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": b,
      "data-collapsible": b === "collapsed" ? r : "",
      "data-variant": e,
      "data-side": t,
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
              e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: n(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              o
            ),
            ...s,
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
function Be({ className: t, onClick: e, ...r }) {
  const { toggleSidebar: o } = I();
  return /* @__PURE__ */ g(
    T,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: n("size-7", t),
      onClick: (i) => {
        e?.(i), o();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(F, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function je({ className: t, ...e }) {
  const { toggleSidebar: r } = I();
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
        t
      ),
      ...e
    }
  );
}
function $e({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: n(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        t
      ),
      ...e
    }
  );
}
function Ke({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    U,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: n("bg-background h-8 w-full shadow-none", t),
      ...e
    }
  );
}
function Ge({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: n("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function He({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: n("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function Ve({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    Y,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: n("bg-sidebar-border mx-2 w-auto", t),
      ...e
    }
  );
}
function We({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: n(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        t
      ),
      ...e
    }
  );
}
function qe({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: n("relative flex w-full min-w-0 flex-col p-2", t),
      ...e
    }
  );
}
function Xe({
  className: t,
  asChild: e = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? _ : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: n(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...r
    }
  );
}
function Fe({
  className: t,
  asChild: e = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? _ : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: n(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...r
    }
  );
}
function Ue({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: n("w-full text-sm", t),
      ...e
    }
  );
}
function Ye({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: n("flex w-full min-w-0 flex-col gap-1", t),
      ...e
    }
  );
}
function Je({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: n("group/menu-item relative", t),
      ...e
    }
  );
}
const me = O(
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
function Qe({
  asChild: t = !1,
  isActive: e = !1,
  variant: r = "default",
  size: o = "default",
  tooltip: i,
  className: s,
  ...d
}) {
  const b = t ? _ : "button", { isMobile: l, state: m } = I(), C = /* @__PURE__ */ a(
    b,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": o,
      "data-active": e,
      className: n(me({ variant: r, size: o }), s),
      ...d
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ g(se, { children: [
    /* @__PURE__ */ a(de, { asChild: !0, children: C }),
    /* @__PURE__ */ a(
      le,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || l,
        ...i
      }
    )
  ] })) : C;
}
function Ze({
  className: t,
  asChild: e = !1,
  showOnHover: r = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    e ? _ : "button",
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
        t
      ),
      ...o
    }
  );
}
function et({ className: t, ...e }) {
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
        t
      ),
      ...e
    }
  );
}
function tt({
  className: t,
  showIcon: e = !1,
  ...r
}) {
  const [o] = c.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ g(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: n("flex h-8 items-center gap-2 rounded-md px-2", t),
      ...r,
      children: [
        e && /* @__PURE__ */ a(R, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          R,
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
function at({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: n(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  );
}
function rt({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: n("group/menu-sub-item relative", t),
      ...e
    }
  );
}
function ot({
  asChild: t = !1,
  size: e = "md",
  isActive: r = !1,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    t ? _ : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": r,
      className: n(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        o
      ),
      ...i
    }
  );
}
const he = O(
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
), G = c.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function nt({
  className: t,
  variant: e,
  size: r,
  spacing: o = 0,
  children: i,
  ...s
}) {
  return /* @__PURE__ */ a(
    L.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": e,
      "data-size": r,
      "data-spacing": o,
      style: { "--gap": o },
      className: n(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        t
      ),
      ...s,
      children: /* @__PURE__ */ a(G.Provider, { value: { variant: e, size: r, spacing: o }, children: i })
    }
  );
}
function it({
  className: t,
  children: e,
  variant: r,
  size: o,
  ...i
}) {
  const s = c.useContext(G);
  return /* @__PURE__ */ a(
    L.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": s.variant || r,
      "data-size": s.size || o,
      "data-spacing": s.spacing,
      className: n(
        he({
          variant: s.variant || r,
          size: s.size || o
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        t
      ),
      ...i,
      children: e
    }
  );
}
export {
  _e as Carousel,
  ze as CarouselContent,
  Ie as CarouselItem,
  Ee as CarouselNext,
  Me as CarouselPrevious,
  Te as ChartContainer,
  Re as ChartLegend,
  Oe as ChartLegendContent,
  Q as ChartStyle,
  Pe as ChartTooltip,
  De as ChartTooltipContent,
  Ae as Sidebar,
  We as SidebarContent,
  He as SidebarFooter,
  qe as SidebarGroup,
  Fe as SidebarGroupAction,
  Ue as SidebarGroupContent,
  Xe as SidebarGroupLabel,
  Ge as SidebarHeader,
  Ke as SidebarInput,
  $e as SidebarInset,
  Ye as SidebarMenu,
  Ze as SidebarMenuAction,
  et as SidebarMenuBadge,
  Qe as SidebarMenuButton,
  Je as SidebarMenuItem,
  tt as SidebarMenuSkeleton,
  at as SidebarMenuSub,
  ot as SidebarMenuSubButton,
  rt as SidebarMenuSubItem,
  Le as SidebarProvider,
  je as SidebarRail,
  Ve as SidebarSeparator,
  Be as SidebarTrigger,
  nt as ToggleGroup,
  it as ToggleGroupItem,
  I as useSidebar
};
//# sourceMappingURL=index-client.mjs.map
