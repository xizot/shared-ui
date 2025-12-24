import { c as o, B as I, I as L, S as O } from "./input-Bdy9V1ho.js";
import { jsx as a, jsxs as p, Fragment as $ } from "react/jsx-runtime";
import K from "embla-carousel-react";
import { ArrowRight as G, ArrowLeft as H, PanelLeftIcon as V } from "lucide-react";
import * as u from "react";
import * as M from "recharts";
import { Slot as y } from "@radix-ui/react-slot";
import { cva as q } from "class-variance-authority";
import { a as W, d as F, e as U, g as X, h as Y, i as J, j as Q, k as Z, S as E, u as ee, l as te, t as ae } from "./use-mobile-BPcuKmQ2.js";
import * as P from "@radix-ui/react-toggle-group";
const D = u.createContext(null);
function k() {
  const t = u.useContext(D);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
function xe({
  orientation: t = "horizontal",
  opts: e,
  setApi: r,
  plugins: n,
  className: s,
  children: i,
  ...d
}) {
  const [f, l] = K(
    {
      ...e,
      axis: t === "horizontal" ? "x" : "y"
    },
    n
  ), [m, C] = u.useState(!1), [N, v] = u.useState(!1), g = u.useCallback((b) => {
    b && (C(b.canScrollPrev()), v(b.canScrollNext()));
  }, []), x = u.useCallback(() => {
    l?.scrollPrev();
  }, [l]), w = u.useCallback(() => {
    l?.scrollNext();
  }, [l]), c = u.useCallback(
    (b) => {
      b.key === "ArrowLeft" ? (b.preventDefault(), x()) : b.key === "ArrowRight" && (b.preventDefault(), w());
    },
    [x, w]
  );
  return u.useEffect(() => {
    !l || !r || r(l);
  }, [l, r]), u.useEffect(() => {
    if (l)
      return g(l), l.on("reInit", g), l.on("select", g), () => {
        l?.off("select", g);
      };
  }, [l, g]), /* @__PURE__ */ a(
    D.Provider,
    {
      value: {
        carouselRef: f,
        api: l,
        opts: e,
        orientation: t || (e?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: x,
        scrollNext: w,
        canScrollPrev: m,
        canScrollNext: N
      },
      children: /* @__PURE__ */ a(
        "div",
        {
          onKeyDownCapture: c,
          className: o("relative", s),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...d,
          children: i
        }
      )
    }
  );
}
function we({ className: t, ...e }) {
  const { carouselRef: r, orientation: n } = k();
  return /* @__PURE__ */ a("div", { ref: r, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ a(
    "div",
    {
      className: o("flex", n === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
      ...e
    }
  ) });
}
function Ce({ className: t, ...e }) {
  const { orientation: r } = k();
  return /* @__PURE__ */ a(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: o(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        t
      ),
      ...e
    }
  );
}
function Se({
  className: t,
  variant: e = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollPrev: i, canScrollPrev: d } = k();
  return /* @__PURE__ */ p(
    I,
    {
      "data-slot": "carousel-previous",
      variant: e,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !d,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(H, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function Ne({
  className: t,
  variant: e = "outline",
  size: r = "icon",
  ...n
}) {
  const { orientation: s, scrollNext: i, canScrollNext: d } = k();
  return /* @__PURE__ */ p(
    I,
    {
      "data-slot": "carousel-next",
      variant: e,
      size: r,
      className: o(
        "absolute size-8 rounded-full",
        s === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        t
      ),
      disabled: !d,
      onClick: i,
      ...n,
      children: [
        /* @__PURE__ */ a(G, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const re = { light: "", dark: ".dark" }, R = u.createContext(null);
function j() {
  const t = u.useContext(R);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
function ye({
  id: t,
  className: e,
  children: r,
  config: n,
  ...s
}) {
  const i = u.useId(), d = `chart-${t || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ a(R.Provider, { value: { config: n }, children: /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "chart",
      "data-chart": d,
      className: o(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ a(ne, { id: d, config: n }),
        /* @__PURE__ */ a(M.ResponsiveContainer, { children: r })
      ]
    }
  ) });
}
const ne = ({ id: t, config: e }) => {
  const r = Object.entries(e).filter(([, n]) => n.theme || n.color);
  return r.length ? /* @__PURE__ */ a(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(re).map(
          ([n, s]) => `
${s} [data-chart=${t}] {
${r.map(([i, d]) => {
            const f = d.theme?.[n] || d.color;
            return f ? `  --color-${i}: ${f};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, ke = M.Tooltip;
function _e({
  active: t,
  payload: e,
  className: r,
  indicator: n = "dot",
  hideLabel: s = !1,
  hideIndicator: i = !1,
  label: d,
  labelFormatter: f,
  labelClassName: l,
  formatter: m,
  color: C,
  nameKey: N,
  labelKey: v
}) {
  const { config: g } = j(), x = u.useMemo(() => {
    if (s || !e?.length)
      return null;
    const [c] = e, b = `${v || c?.dataKey || c?.name || "value"}`, h = z(g, c, b), S = !v && typeof d == "string" ? g[d]?.label || d : h?.label;
    return f ? /* @__PURE__ */ a("div", { className: o("font-medium", l), children: f(S, e) }) : S ? /* @__PURE__ */ a("div", { className: o("font-medium", l), children: S }) : null;
  }, [d, f, e, s, l, g, v]);
  if (!t || !e?.length)
    return null;
  const w = e.length === 1 && n !== "dot";
  return /* @__PURE__ */ p(
    "div",
    {
      className: o(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        r
      ),
      children: [
        w ? null : x,
        /* @__PURE__ */ a("div", { className: "grid gap-1.5", children: e.filter((c) => c.type !== "none").map((c, b) => {
          const h = `${N || c.name || c.dataKey || "value"}`, S = z(g, c, h), T = C || c.payload.fill || c.color;
          return /* @__PURE__ */ a(
            "div",
            {
              className: o(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                n === "dot" && "items-center"
              ),
              children: m && c?.value !== void 0 && c.name ? m(c.value, c.name, c, b, c.payload) : /* @__PURE__ */ p($, { children: [
                S?.icon ? /* @__PURE__ */ a(S.icon, {}) : !i && /* @__PURE__ */ a(
                  "div",
                  {
                    className: o(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": w && n === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": T,
                      "--color-border": T
                    }
                  }
                ),
                /* @__PURE__ */ p(
                  "div",
                  {
                    className: o(
                      "flex flex-1 justify-between leading-none",
                      w ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ p("div", { className: "grid gap-1.5", children: [
                        w ? x : null,
                        /* @__PURE__ */ a("span", { className: "text-muted-foreground", children: S?.label || c.name })
                      ] }),
                      c.value && /* @__PURE__ */ a("span", { className: "text-foreground font-mono font-medium tabular-nums", children: c.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            c.dataKey
          );
        }) })
      ]
    }
  );
}
const ze = M.Legend;
function Ie({
  className: t,
  hideIcon: e = !1,
  payload: r,
  verticalAlign: n = "bottom",
  nameKey: s
}) {
  const { config: i } = j();
  return r?.length ? /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "flex items-center justify-center gap-4",
        n === "top" ? "pb-3" : "pt-3",
        t
      ),
      children: r.filter((d) => d.type !== "none").map((d) => {
        const f = `${s || d.dataKey || "value"}`, l = z(i, d, f);
        return /* @__PURE__ */ p(
          "div",
          {
            className: o(
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
function z(t, e, r) {
  if (typeof e != "object" || e === null)
    return;
  const n = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let s = r;
  return r in e && typeof e[r] == "string" ? s = e[r] : n && r in n && typeof n[r] == "string" && (s = n[r]), s in t ? t[s] : t[r];
}
const oe = "sidebar_state", se = 3600 * 24 * 7, ie = "16rem", de = "18rem", le = "3rem", ce = "b", A = u.createContext(null);
function _() {
  const t = u.useContext(A);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
function Me({
  defaultOpen: t = !0,
  open: e,
  onOpenChange: r,
  className: n,
  style: s,
  children: i,
  ...d
}) {
  const f = ee(), [l, m] = u.useState(!1), [C, N] = u.useState(t), v = e ?? C, g = u.useCallback(
    (b) => {
      const h = typeof b == "function" ? b(v) : b;
      r ? r(h) : N(h), document.cookie = `${oe}=${h}; path=/; max-age=${se}`;
    },
    [r, v]
  ), x = u.useCallback(() => f ? m((b) => !b) : g((b) => !b), [f, g, m]);
  u.useEffect(() => {
    const b = (h) => {
      h.key === ce && (h.metaKey || h.ctrlKey) && (h.preventDefault(), x());
    };
    return window.addEventListener("keydown", b), () => window.removeEventListener("keydown", b);
  }, [x]);
  const w = v ? "expanded" : "collapsed", c = u.useMemo(
    () => ({
      state: w,
      open: v,
      setOpen: g,
      isMobile: f,
      openMobile: l,
      setOpenMobile: m,
      toggleSidebar: x
    }),
    [w, v, g, f, l, m, x]
  );
  return /* @__PURE__ */ a(A.Provider, { value: c, children: /* @__PURE__ */ a(te, { delayDuration: 0, children: /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": ie,
        "--sidebar-width-icon": le,
        ...s
      },
      className: o(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...d,
      children: i
    }
  ) }) });
}
function Te({
  side: t = "left",
  variant: e = "sidebar",
  collapsible: r = "offcanvas",
  className: n,
  children: s,
  ...i
}) {
  const { isMobile: d, state: f, openMobile: l, setOpenMobile: m } = _();
  return r === "none" ? /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar",
      className: o(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...i,
      children: s
    }
  ) : d ? /* @__PURE__ */ a(W, { open: l, onOpenChange: m, ...i, children: /* @__PURE__ */ p(
    F,
    {
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      "data-mobile": "true",
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      style: {
        "--sidebar-width": de
      },
      side: t,
      children: [
        /* @__PURE__ */ p(U, { className: "sr-only", children: [
          /* @__PURE__ */ a(X, { children: "Sidebar" }),
          /* @__PURE__ */ a(Y, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex h-full w-full flex-col", children: s })
      ]
    }
  ) }) : /* @__PURE__ */ p(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": f,
      "data-collapsible": f === "collapsed" ? r : "",
      "data-variant": e,
      "data-side": t,
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
              e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "data-slot": "sidebar-container",
            className: o(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...i,
            children: /* @__PURE__ */ a(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
function Ee({ className: t, onClick: e, ...r }) {
  const { toggleSidebar: n } = _();
  return /* @__PURE__ */ p(
    I,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: o("size-7", t),
      onClick: (s) => {
        e?.(s), n();
      },
      ...r,
      children: [
        /* @__PURE__ */ a(V, {}),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function Pe({ className: t, ...e }) {
  const { toggleSidebar: r } = _();
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
        t
      ),
      ...e
    }
  );
}
function De({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: o(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        t
      ),
      ...e
    }
  );
}
function Re({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    L,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: o("bg-background h-8 w-full shadow-none", t),
      ...e
    }
  );
}
function je({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: o("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function Ae({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: o("flex flex-col gap-2 p-2", t),
      ...e
    }
  );
}
function Be({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    O,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: o("bg-sidebar-border mx-2 w-auto", t),
      ...e
    }
  );
}
function Le({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: o(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        t
      ),
      ...e
    }
  );
}
function Oe({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: o("relative flex w-full min-w-0 flex-col p-2", t),
      ...e
    }
  );
}
function $e({
  className: t,
  asChild: e = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? y : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: o(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...r
    }
  );
}
function Ke({
  className: t,
  asChild: e = !1,
  ...r
}) {
  return /* @__PURE__ */ a(
    e ? y : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: o(
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
function Ge({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: o("w-full text-sm", t),
      ...e
    }
  );
}
function He({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: o("flex w-full min-w-0 flex-col gap-1", t),
      ...e
    }
  );
}
function Ve({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: o("group/menu-item relative", t),
      ...e
    }
  );
}
const ue = q(
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
function qe({
  asChild: t = !1,
  isActive: e = !1,
  variant: r = "default",
  size: n = "default",
  tooltip: s,
  className: i,
  ...d
}) {
  const f = t ? y : "button", { isMobile: l, state: m } = _(), C = /* @__PURE__ */ a(
    f,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": e,
      className: o(ue({ variant: r, size: n }), i),
      ...d
    }
  );
  return s ? (typeof s == "string" && (s = {
    children: s
  }), /* @__PURE__ */ p(J, { children: [
    /* @__PURE__ */ a(Q, { asChild: !0, children: C }),
    /* @__PURE__ */ a(
      Z,
      {
        side: "right",
        align: "center",
        hidden: m !== "collapsed" || l,
        ...s
      }
    )
  ] })) : C;
}
function We({
  className: t,
  asChild: e = !1,
  showOnHover: r = !1,
  ...n
}) {
  return /* @__PURE__ */ a(
    e ? y : "button",
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
        t
      ),
      ...n
    }
  );
}
function Fe({ className: t, ...e }) {
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
        t
      ),
      ...e
    }
  );
}
function Ue({
  className: t,
  showIcon: e = !1,
  ...r
}) {
  const [n] = u.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
  return /* @__PURE__ */ p(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: o("flex h-8 items-center gap-2 rounded-md px-2", t),
      ...r,
      children: [
        e && /* @__PURE__ */ a(E, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ a(
          E,
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
function Xe({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: o(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  );
}
function Ye({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: o("group/menu-sub-item relative", t),
      ...e
    }
  );
}
function Je({
  asChild: t = !1,
  size: e = "md",
  isActive: r = !1,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ a(
    t ? y : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": r,
      className: o(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...s
    }
  );
}
const B = u.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Qe({
  className: t,
  variant: e,
  size: r,
  spacing: n = 0,
  children: s,
  ...i
}) {
  return /* @__PURE__ */ a(
    P.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": e,
      "data-size": r,
      "data-spacing": n,
      style: { "--gap": n },
      className: o(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        t
      ),
      ...i,
      children: /* @__PURE__ */ a(B.Provider, { value: { variant: e, size: r, spacing: n }, children: s })
    }
  );
}
function Ze({
  className: t,
  children: e,
  variant: r,
  size: n,
  ...s
}) {
  const i = u.useContext(B);
  return /* @__PURE__ */ a(
    P.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": i.variant || r,
      "data-size": i.size || n,
      "data-spacing": i.spacing,
      className: o(
        ae({
          variant: i.variant || r,
          size: i.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        t
      ),
      ...s,
      children: e
    }
  );
}
export {
  xe as Carousel,
  we as CarouselContent,
  Ce as CarouselItem,
  Ne as CarouselNext,
  Se as CarouselPrevious,
  ye as ChartContainer,
  ze as ChartLegend,
  Ie as ChartLegendContent,
  ne as ChartStyle,
  ke as ChartTooltip,
  _e as ChartTooltipContent,
  Te as Sidebar,
  Le as SidebarContent,
  Ae as SidebarFooter,
  Oe as SidebarGroup,
  Ke as SidebarGroupAction,
  Ge as SidebarGroupContent,
  $e as SidebarGroupLabel,
  je as SidebarHeader,
  Re as SidebarInput,
  De as SidebarInset,
  He as SidebarMenu,
  We as SidebarMenuAction,
  Fe as SidebarMenuBadge,
  qe as SidebarMenuButton,
  Ve as SidebarMenuItem,
  Ue as SidebarMenuSkeleton,
  Xe as SidebarMenuSub,
  Je as SidebarMenuSubButton,
  Ye as SidebarMenuSubItem,
  Me as SidebarProvider,
  Pe as SidebarRail,
  Be as SidebarSeparator,
  Ee as SidebarTrigger,
  Qe as ToggleGroup,
  Ze as ToggleGroupItem,
  _ as useSidebar
};
//# sourceMappingURL=index-client.mjs.map
