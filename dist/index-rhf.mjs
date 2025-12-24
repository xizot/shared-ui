import { jsx as b, jsxs as $ } from "react/jsx-runtime";
import * as z from "react";
import re, { createRef as ji } from "react";
import { Slot as pa } from "@radix-ui/react-slot";
import { useFormState as kt, Controller as Pt, useController as ga, FormProvider as ma, useFormContext as ba } from "react-hook-form";
import { F as fi, c as k, g as Ut, L as Lt, B as ne, b as Pi, S as rl, h as ya, I as Wr } from "./input-D0NE8tsx.js";
import * as Ui from "@radix-ui/react-checkbox";
import { CheckIcon as pi, SearchIcon as va, XCircle as xa, ChevronDown as Fi, ChevronLeftIcon as wa, ChevronRightIcon as Na, ChevronDownIcon as gi, CalendarIcon as nl, Upload as sl, CheckCircle2 as Ea, AlertCircle as Aa, X as il, Image as Ta, File as Sa, ChevronUpIcon as _a } from "lucide-react";
import { Command as pr } from "cmdk";
import "@radix-ui/react-dialog";
import * as kn from "@radix-ui/react-popover";
import { startOfMonth as De, format as fe, setSeconds as Hi, setMinutes as zi, setHours as Ki, endOfDay as Ca, startOfDay as La, endOfWeek as qa, startOfWeek as Oa, endOfMonth as Vi, subWeeks as Gi, subMonths as xn } from "date-fns";
import { getDefaultClassNames as ol, DayPicker as ka } from "react-day-picker";
import * as $r from "@radix-ui/react-scroll-area";
import * as Wi from "@radix-ui/react-progress";
import { f as Ds, B as ll, T as Ia } from "./textarea-BPwkqiSr.js";
import * as jt from "@radix-ui/react-select";
import * as Ra from "@radix-ui/react-radio-group";
import * as Zi from "@radix-ui/react-switch";
function Ma({
  className: n,
  size: t = "md",
  ...e
}) {
  const r = fi[t ?? "md"];
  return /* @__PURE__ */ b(
    Ui.Root,
    {
      "data-slot": "checkbox",
      "data-size": t,
      className: k(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r.icon,
        n
      ),
      ...e,
      children: /* @__PURE__ */ b(
        Ui.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ b(pi, { className: r.icon })
        }
      )
    }
  );
}
function Tm({
  control: n,
  name: t,
  options: e,
  label: r,
  error: s,
  required: i = !1,
  wrapperClassName: o,
  orientation: a = "vertical"
}) {
  const c = kt({ control: n, name: t }), h = s || Ut(c.errors, `${t}.message`);
  return /* @__PURE__ */ $("div", { className: k("w-full", o), children: [
    r && /* @__PURE__ */ $(Lt, { htmlFor: t, className: "mb-2 block", children: [
      r,
      i && /* @__PURE__ */ b("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ b(
      Pt,
      {
        control: n,
        name: t,
        render: ({ field: f }) => /* @__PURE__ */ b("div", { className: k("flex gap-4", a === "horizontal" ? "flex-row" : "flex-col"), children: e.map((g) => /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ b(
            Ma,
            {
              id: `${t}-${g.value}`,
              checked: Array.isArray(f.value) && f.value.includes(g.value),
              onCheckedChange: (d) => {
                const y = Array.isArray(f.value) ? f.value : [];
                d ? f.onChange([...y, g.value]) : f.onChange(y.filter((x) => x !== g.value));
              },
              disabled: g.disabled
            }
          ),
          /* @__PURE__ */ b(Lt, { htmlFor: `${t}-${g.value}`, className: "font-normal cursor-pointer", children: g.label })
        ] }, g.value)) })
      }
    ),
    h && /* @__PURE__ */ b("p", { className: "text-sm text-destructive mt-1", children: h })
  ] });
}
function Da({ className: n, ...t }) {
  return /* @__PURE__ */ b(
    pr,
    {
      "data-slot": "command",
      className: k(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        n
      ),
      ...t
    }
  );
}
function Ba({
  className: n,
  label: t,
  error: e,
  required: r,
  id: s,
  ...i
}) {
  const o = t || e, a = /* @__PURE__ */ b("div", { className: "px-1 pt-1", children: /* @__PURE__ */ $(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: k(
        "flex h-9 items-center gap-2 rounded-md border px-3",
        e && "border-destructive"
      ),
      children: [
        /* @__PURE__ */ b(va, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ b(
          pr.Input,
          {
            id: s,
            "data-slot": "command-input",
            "aria-invalid": !!e,
            className: k(
              "placeholder:text-muted-foreground flex h-10 w-full bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e && "focus-visible:ring-destructive",
              n
            ),
            ...i
          }
        )
      ]
    }
  ) });
  return o ? /* @__PURE__ */ $("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ $(Lt, { htmlFor: s, children: [
      t,
      r && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    a,
    e && /* @__PURE__ */ b("div", { className: "text-destructive text-sm", role: "alert", children: e })
  ] }) : a;
}
function $a({ className: n, ...t }) {
  return /* @__PURE__ */ b(
    pr.List,
    {
      "data-slot": "command-list",
      className: k("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", n),
      ...t
    }
  );
}
function ja({ ...n }) {
  return /* @__PURE__ */ b(
    pr.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...n
    }
  );
}
function Pa({
  className: n,
  ...t
}) {
  return /* @__PURE__ */ b(
    pr.Group,
    {
      "data-slot": "command-group",
      className: k(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        n
      ),
      ...t
    }
  );
}
function Ua({ className: n, ...t }) {
  return /* @__PURE__ */ b(
    pr.Item,
    {
      "data-slot": "command-item",
      className: k(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n
      ),
      ...t
    }
  );
}
function mi({ ...n }) {
  return /* @__PURE__ */ b(kn.Root, { "data-slot": "popover", ...n });
}
function bi({ ...n }) {
  return /* @__PURE__ */ b(kn.Trigger, { "data-slot": "popover-trigger", ...n });
}
function yi({
  className: n,
  align: t = "center",
  sideOffset: e = 4,
  ...r
}) {
  return /* @__PURE__ */ b(kn.Portal, { children: /* @__PURE__ */ b(
    kn.Content,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: e,
      className: k(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        n
      ),
      ...r
    }
  ) });
}
function Fa({
  options: n,
  value: t,
  onChange: e,
  label: r,
  error: s,
  required: i,
  placeholder: o = "Select option...",
  searchPlaceholder: a = "Search...",
  emptyMessage: c = "No results found.",
  disabled: h = !1,
  readonly: f = !1,
  size: g = "md",
  showClearIcon: d = !0,
  showArrowIcon: y = !0,
  suffix: x,
  className: E,
  triggerClassName: _,
  popoverClassName: v
}) {
  const [N, R] = z.useState(!1), j = z.useMemo(
    () => n.find((Y) => Y.id === t),
    [n, t]
  ), U = !h && !f && !!t, J = (Y) => {
    e?.(Y.id, Y), R(!1);
  }, tt = (Y) => {
    Y.preventDefault(), Y.stopPropagation(), U && e?.("", void 0);
  }, st = /* @__PURE__ */ $(mi, { open: N, onOpenChange: R, children: [
    /* @__PURE__ */ b(bi, { asChild: !0, children: /* @__PURE__ */ $(
      ne,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": N,
        disabled: h,
        size: g,
        className: k(
          "w-full justify-between group/combobox",
          !t && "text-muted-foreground",
          s && "border-destructive",
          _
        ),
        children: [
          /* @__PURE__ */ b("span", { className: "flex-1 text-left truncate", children: j ? j.name : o }),
          /* @__PURE__ */ $("div", { className: "flex items-center gap-1 shrink-0 ml-2", children: [
            t && U ? /* @__PURE__ */ $(
              "span",
              {
                onMouseDown: (Y) => {
                  Y.preventDefault(), Y.stopPropagation();
                },
                onClick: tt,
                className: "cursor-pointer",
                children: [
                  d && /* @__PURE__ */ b(xa, { className: "text-muted-foreground hidden group-hover/combobox:block h-4 w-4" }),
                  y && /* @__PURE__ */ b(Fi, { className: "text-muted-foreground block group-hover/combobox:hidden h-4 w-4" })
                ]
              }
            ) : y && /* @__PURE__ */ b(Fi, { className: "text-muted-foreground h-4 w-4" }),
            x
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ b(
      yi,
      {
        className: k("w-(--radix-popover-trigger-width) p-0", v),
        align: "start",
        children: /* @__PURE__ */ $(Da, { children: [
          /* @__PURE__ */ b(Ba, { placeholder: a }),
          /* @__PURE__ */ $($a, { children: [
            /* @__PURE__ */ b(ja, { children: c }),
            /* @__PURE__ */ b(Pa, { children: n.map((Y) => /* @__PURE__ */ $(
              Ua,
              {
                value: Y.name,
                disabled: Y.disabled,
                onSelect: () => J(Y),
                className: "flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ b("span", { className: "flex-1 truncate", children: Y.name }),
                  /* @__PURE__ */ b(
                    pi,
                    {
                      className: k(
                        "h-4 w-4 shrink-0 text-primary",
                        t === Y.id ? "opacity-100" : "opacity-0"
                      )
                    }
                  )
                ]
              },
              Y.id
            )) })
          ] })
        ] })
      }
    )
  ] });
  return !r && !s ? /* @__PURE__ */ b("div", { className: k("w-full", E), children: st }) : /* @__PURE__ */ $("div", { className: k("w-full", E), children: [
    r && /* @__PURE__ */ $(Lt, { className: "text-foreground leading-5 block", children: [
      r,
      i && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ b("div", { className: r ? "mt-1" : "", children: st }),
    s && /* @__PURE__ */ b("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: s })
  ] });
}
function Sm({
  control: n,
  name: t,
  label: e,
  required: r,
  callback: s = () => {
  },
  className: i,
  ...o
}) {
  const a = kt({ control: n, name: t }), c = Ut(a.errors, `${t}.message`);
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: h }) => /* @__PURE__ */ b(
        Fa,
        {
          ...o,
          value: h.value,
          onChange: (f, g) => {
            h.onChange(f), s(f, g);
          },
          label: e,
          error: c,
          required: r,
          className: k("w-full", i)
        }
      )
    }
  );
}
function al({
  className: n,
  classNames: t,
  showOutsideDays: e = !0,
  captionLayout: r = "label",
  buttonVariant: s = "ghost",
  formatters: i,
  components: o,
  ...a
}) {
  const c = ol();
  return /* @__PURE__ */ b(
    ka,
    {
      showOutsideDays: e,
      weekStartsOn: 1,
      className: k(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        n
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (h) => {
          const f = a.locale ? typeof a.locale == "string" ? a.locale : a.locale.code || "default" : "default";
          return h.toLocaleString(f, { month: "short" });
        },
        ...i
      },
      classNames: {
        root: k("w-fit", c.root),
        months: k("flex gap-4 flex-col md:flex-row relative", c.months),
        month: k("flex flex-col w-full gap-4", c.month),
        nav: k(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          c.nav
        ),
        button_previous: k(
          Pi({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_previous
        ),
        button_next: k(
          Pi({ variant: s }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          c.button_next
        ),
        month_caption: k(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          c.month_caption
        ),
        dropdowns: k(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          c.dropdowns
        ),
        dropdown_root: k(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          c.dropdown_root
        ),
        dropdown: k("absolute bg-popover inset-0 opacity-0", c.dropdown),
        caption_label: k(
          "select-none font-medium",
          r === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: k("flex", c.weekdays),
        weekday: k(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          c.weekday
        ),
        week: k("flex w-full mt-1", c.week),
        week_number_header: k("select-none w-(--cell-size)", c.week_number_header),
        week_number: k(
          "text-[0.8rem] select-none text-muted-foreground",
          c.week_number
        ),
        day: k(
          "relative w-full h-full p-0 text-center [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          a.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          c.day
        ),
        range_start: k("rounded-l-md bg-accent", c.range_start),
        range_middle: k("rounded-none", c.range_middle),
        range_end: k("rounded-r-md bg-accent", c.range_end),
        today: k("bg-accent text-accent-foreground !rounded-full", c.today),
        outside: k(
          "text-muted-foreground aria-selected:text-muted-foreground",
          c.outside
        ),
        disabled: k("text-muted-foreground opacity-50", c.disabled),
        hidden: k("invisible", c.hidden),
        ...t
      },
      components: {
        ...o,
        CaptionLabel: ({ className: h, ...f }) => /* @__PURE__ */ b("div", { className: k(h), ...f }),
        Root: ({ className: h, rootRef: f, ...g }) => /* @__PURE__ */ b("div", { "data-slot": "calendar", ref: f, className: k(h), ...g }),
        Chevron: ({ className: h, orientation: f, ...g }) => f === "left" ? /* @__PURE__ */ b(wa, { className: k("size-4", h), ...g }) : f === "right" ? /* @__PURE__ */ b(Na, { className: k("size-4", h), ...g }) : /* @__PURE__ */ b(gi, { className: k("size-4", h), ...g }),
        DayButton: Ha,
        WeekNumber: ({ children: h, ...f }) => /* @__PURE__ */ b("td", { ...f, children: /* @__PURE__ */ b("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children: h }) })
      },
      ...a
    }
  );
}
function Ha({
  className: n,
  day: t,
  modifiers: e,
  ...r
}) {
  const s = ol(), i = z.useRef(null);
  z.useEffect(() => {
    e.focused && i.current?.focus();
  }, [e.focused]);
  const o = e.today, a = e.selected && !e.range_start && !e.range_end && !e.range_middle, c = e.range_start, h = e.range_end, f = e.range_middle;
  return /* @__PURE__ */ $(
    ne,
    {
      ref: i,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": a,
      "data-range-start": c,
      "data-range-end": h,
      "data-range-middle": f,
      className: k(
        "data-[selected-single=true]:!bg-primary data-[selected-single=true]:!text-primary-foreground",
        "data-[range-middle=true]:!bg-accent data-[range-middle=true]:!text-accent-foreground",
        "data-[range-start=true]:!bg-primary data-[range-start=true]:!text-primary-foreground",
        "data-[range-end=true]:!bg-primary data-[range-end=true]:!text-primary-foreground",
        "dark:hover:text-accent-foreground",
        "flex aspect-square h-10 w-10 flex-col gap-0.5 leading-none font-normal text-sm p-1.5 group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 !rounded-full",
        "[&>span]:text-sm [&>span]:font-normal",
        s.day,
        n
      ),
      ...r,
      children: [
        /* @__PURE__ */ b("span", { children: r.children }),
        o && /* @__PURE__ */ b("div", { className: "h-1 w-1 rounded-full bg-current opacity-70" })
      ]
    }
  );
}
function jr({
  className: n,
  children: t,
  ...e
}) {
  return /* @__PURE__ */ $(
    $r.Root,
    {
      "data-slot": "scroll-area",
      className: k("relative", n),
      ...e,
      children: [
        /* @__PURE__ */ b(
          $r.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ b(za, {}),
        /* @__PURE__ */ b($r.Corner, {})
      ]
    }
  );
}
function za({
  className: n,
  orientation: t = "vertical",
  ...e
}) {
  return /* @__PURE__ */ b(
    $r.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: k(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        n
      ),
      ...e,
      children: /* @__PURE__ */ b(
        $r.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function Ka({
  value: n,
  onChange: t,
  locale: e,
  monthNames: r,
  disabled: s,
  className: i
}) {
  const [o, a] = z.useState(() => n ? n.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()), [c, h] = z.useState(() => n ? n.getMonth() : (/* @__PURE__ */ new Date()).getMonth()), f = z.useRef(null), g = z.useRef(null);
  z.useEffect(() => {
    if (n) {
      const v = n.getFullYear(), N = n.getMonth();
      (o !== v || c !== N) && (a(v), h(N));
    } else {
      const v = /* @__PURE__ */ new Date(), N = v.getFullYear(), R = v.getMonth();
      (o !== N || c !== R) && (a(N), h(R));
    }
  }, [n]), z.useEffect(() => {
    if (!f.current) return;
    const v = setTimeout(() => {
      const N = f.current?.querySelector(
        `[data-month="${c}"]`
      );
      if (N && f.current) {
        const R = f.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (R) {
          const j = N.offsetTop;
          R.scrollTo({ top: j, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(v);
  }, [c]), z.useEffect(() => {
    if (!g.current) return;
    const v = setTimeout(() => {
      const N = g.current?.querySelector(
        `[data-year="${o}"]`
      );
      if (N && g.current) {
        const R = g.current.closest(
          '[data-slot="scroll-area-viewport"]'
        );
        if (R) {
          const j = N.offsetTop;
          R.scrollTo({ top: j, behavior: "smooth" });
        }
      }
    }, 100);
    return () => clearTimeout(v);
  }, [o]);
  const d = z.useCallback(
    (v) => {
      h(v);
      const N = new Date(o, v, 1);
      t(De(N));
    },
    [o, t]
  ), y = z.useCallback(
    (v) => {
      a(v);
      const N = new Date(v, c, 1);
      t(De(N));
    },
    [c, t]
  ), x = z.useMemo(() => {
    if (r && r.length === 12)
      return r;
    const v = typeof e == "string" ? e : e?.code || "en-US", N = new Intl.DateTimeFormat(v, { month: "long" });
    return Array.from({ length: 12 }, (R, j) => {
      const U = new Date(2024, j, 1);
      return N.format(U);
    });
  }, [e, r]), E = z.useMemo(
    () => Array.from({ length: 100 }, (v, N) => (/* @__PURE__ */ new Date()).getFullYear() - 50 + N),
    []
  ), _ = z.useMemo(() => n ? `${x[c]} ${o}` : `${x[(/* @__PURE__ */ new Date()).getMonth()]} ${(/* @__PURE__ */ new Date()).getFullYear()}`, [n, x, c, o]);
  return /* @__PURE__ */ $("div", { className: k("flex flex-col h-full", i), children: [
    /* @__PURE__ */ b("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ b("div", { className: "font-medium text-lg", children: _ }) }),
    /* @__PURE__ */ $("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ b(jr, { className: "w-30 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ b("div", { ref: f, className: "px-2", children: x.map((v, N) => {
        const R = c === N, j = s ? s(new Date(o, N, 1)) : !1;
        return /* @__PURE__ */ b(
          "div",
          {
            "data-month": N,
            onClick: () => !j && d(N),
            className: k(
              "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
              R ? "bg-secondary" : "hover:bg-accent",
              j && "opacity-50 cursor-not-allowed"
            ),
            children: v
          },
          N
        );
      }) }) }),
      /* @__PURE__ */ b(jr, { className: "flex-1 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ b("div", { ref: g, className: "px-2", children: E.map((v) => /* @__PURE__ */ b(
        "div",
        {
          "data-year": v,
          onClick: () => y(v),
          className: k(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            o === v ? "bg-secondary" : "hover:bg-accent"
          ),
          children: v
        },
        v
      )) }) })
    ] })
  ] });
}
function Yi({ value: n, onChange: t, showSeconds: e = !0, className: r }) {
  const s = z.useRef(null), i = z.useRef(null), o = z.useRef(null), a = parseInt(n.hour, 10) || 0, c = parseInt(n.minute, 10) || 0, h = parseInt(n.second, 10) || 0, f = Array.from({ length: 24 }, (v, N) => N), g = Array.from({ length: 60 }, (v, N) => N), d = Array.from({ length: 60 }, (v, N) => N);
  z.useEffect(() => {
    const v = setTimeout(() => {
      if (s.current) {
        const N = s.current.querySelector(
          `[data-hour="${a}"]`
        );
        if (N) {
          const R = s.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (R) {
            const j = N.offsetTop;
            R.scrollTo({ top: j, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(v);
  }, [a]), z.useEffect(() => {
    const v = setTimeout(() => {
      if (i.current) {
        const N = i.current.querySelector(
          `[data-minute="${c}"]`
        );
        if (N) {
          const R = i.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (R) {
            const j = N.offsetTop;
            R.scrollTo({ top: j, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(v);
  }, [c]), z.useEffect(() => {
    if (!e) return;
    const v = setTimeout(() => {
      if (o.current) {
        const N = o.current.querySelector(
          `[data-second="${h}"]`
        );
        if (N) {
          const R = o.current.closest(
            '[data-slot="scroll-area-viewport"]'
          );
          if (R) {
            const j = N.offsetTop;
            R.scrollTo({ top: j, behavior: "smooth" });
          }
        }
      }
    }, 100);
    return () => clearTimeout(v);
  }, [h, e]);
  const y = (v) => {
    t({
      ...n,
      hour: v.toString().padStart(2, "0")
    });
  }, x = (v) => {
    t({
      ...n,
      minute: v.toString().padStart(2, "0")
    });
  }, E = (v) => {
    t({
      ...n,
      second: v.toString().padStart(2, "0")
    });
  }, _ = `${n.hour}:${n.minute}${e ? `:${n.second}` : ""}`;
  return /* @__PURE__ */ $("div", { className: k("flex flex-col h-full border-l", r), children: [
    /* @__PURE__ */ b("div", { className: "px-4 py-3 text-center shrink-0", children: /* @__PURE__ */ b("div", { className: "font-medium text-lg", children: _ }) }),
    /* @__PURE__ */ $("div", { className: "flex flex-1 min-h-0 gap-0.5", children: [
      /* @__PURE__ */ b(jr, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-l-md overflow-hidden", children: /* @__PURE__ */ b("div", { ref: s, className: "px-2", children: f.map((v) => /* @__PURE__ */ b(
        "div",
        {
          "data-hour": v,
          onClick: () => y(v),
          className: k(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            a === v ? "bg-secondary" : "hover:bg-accent"
          ),
          children: v.toString().padStart(2, "0")
        },
        v
      )) }) }),
      /* @__PURE__ */ b(jr, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:overflow-hidden", children: /* @__PURE__ */ b("div", { ref: i, className: "px-2", children: g.map((v) => /* @__PURE__ */ b(
        "div",
        {
          "data-minute": v,
          onClick: () => x(v),
          className: k(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            c === v ? "bg-secondary" : "hover:bg-accent"
          ),
          children: v.toString().padStart(2, "0")
        },
        v
      )) }) }),
      e && /* @__PURE__ */ b(jr, { className: "flex-1 w-16 [&>[data-slot=scroll-area-viewport]]:rounded-r-md overflow-hidden", children: /* @__PURE__ */ b("div", { ref: o, className: "px-2", children: d.map((v) => /* @__PURE__ */ b(
        "div",
        {
          "data-second": v,
          onClick: () => E(v),
          className: k(
            "px-2 py-1.5 text-center cursor-pointer text-sm transition-colors rounded-md",
            h === v ? "bg-secondary" : "hover:bg-accent"
          ),
          children: v.toString().padStart(2, "0")
        },
        v
      )) }) })
    ] })
  ] });
}
function Va({
  value: n,
  onChange: t,
  placeholder: e = "Pick a date",
  dateFormat: r = "dd/MM/yyyy",
  showTime: s = !1,
  timeOnly: i = !1,
  mode: o = "single",
  label: a,
  error: c,
  required: h,
  disabled: f = !1,
  disabledPast: g = !1,
  disabledFuture: d = !1,
  onDisabled: y,
  size: x = "md",
  className: E,
  triggerClassName: _,
  popoverClassName: v,
  locale: N,
  cancelText: R,
  applyText: j,
  monthNames: U,
  ...J
}) {
  const [tt, st] = z.useState(!1), [Y, rt] = z.useState(n), [m, q] = z.useState(() => n || /* @__PURE__ */ new Date()), [w, A] = z.useState(() => n ? {
    hour: n.getHours().toString().padStart(2, "0"),
    minute: n.getMinutes().toString().padStart(2, "0"),
    second: n.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }), L = z.useRef(n), T = z.useRef(n || /* @__PURE__ */ new Date()), I = () => n ? {
    hour: n.getHours().toString().padStart(2, "0"),
    minute: n.getMinutes().toString().padStart(2, "0"),
    second: n.getSeconds().toString().padStart(2, "0")
  } : { hour: "00", minute: "00", second: "00" }, M = z.useRef(I());
  z.useEffect(() => {
    tt && (L.current = n, T.current = n || /* @__PURE__ */ new Date(), M.current = n ? {
      hour: n.getHours().toString().padStart(2, "0"),
      minute: n.getMinutes().toString().padStart(2, "0"),
      second: n.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }, i ? A(n ? {
      hour: n.getHours().toString().padStart(2, "0"),
      minute: n.getMinutes().toString().padStart(2, "0"),
      second: n.getSeconds().toString().padStart(2, "0")
    } : { hour: "00", minute: "00", second: "00" }) : o === "month" ? rt(n ? De(n) : De(/* @__PURE__ */ new Date())) : (rt(n), n ? (q(n), s && A({
      hour: n.getHours().toString().padStart(2, "0"),
      minute: n.getMinutes().toString().padStart(2, "0"),
      second: n.getSeconds().toString().padStart(2, "0")
    })) : (q(/* @__PURE__ */ new Date()), s && A({ hour: "00", minute: "00", second: "00" }))));
  }, [tt, n, s, i, o]), z.useEffect(() => {
    !tt && !i ? (rt(n), n && (q(n), s && A({
      hour: n.getHours().toString().padStart(2, "0"),
      minute: n.getMinutes().toString().padStart(2, "0"),
      second: n.getSeconds().toString().padStart(2, "0")
    }))) : !tt && i && n && A({
      hour: n.getHours().toString().padStart(2, "0"),
      minute: n.getMinutes().toString().padStart(2, "0"),
      second: n.getSeconds().toString().padStart(2, "0")
    });
  }, [n, s, i, tt]);
  const O = () => {
    if (i) {
      const et = Hi(
        zi(Ki(n || /* @__PURE__ */ new Date(), parseInt(w.hour, 10)), parseInt(w.minute, 10)),
        parseInt(w.second, 10)
      );
      t?.(et);
    } else if (o === "month")
      t?.(Y ? De(Y) : void 0);
    else if (Y) {
      let B = Y;
      s && (B = Ki(B, parseInt(w.hour, 10)), B = zi(B, parseInt(w.minute, 10)), B = Hi(B, parseInt(w.second, 10))), t?.(B);
    } else
      t?.(void 0);
    st(!1);
  }, D = () => {
    rt(L.current), q(T.current), s && A(M.current), st(!1);
  }, W = z.useMemo(() => {
    if (!n) return e;
    const B = N && typeof N != "string" ? { locale: N } : void 0;
    if (i)
      return /[Hhms]/.test(r) ? fe(n, r, B) : fe(n, "HH:mm:ss", B);
    if (o === "month") {
      if (N) {
        const et = typeof N == "string" ? N : N?.code || "en-US";
        return new Intl.DateTimeFormat(et, { month: "2-digit", year: "numeric" }).format(n);
      }
      return fe(n, "MM/yyyy", B);
    }
    return s ? /[Hhms]/.test(r) ? fe(n, r, B) : fe(n, `${r} HH:mm:ss`, B) : fe(n, r, B);
  }, [n, r, s, i, o, e, N]), G = z.useCallback(
    (B) => {
      if (f) return !0;
      const et = /* @__PURE__ */ new Date();
      et.setHours(0, 0, 0, 0);
      const ut = new Date(B);
      return ut.setHours(0, 0, 0, 0), g && ut < et || d && ut > et ? !0 : y ? y(B) : !1;
    },
    [f, g, d, y]
  ), V = z.useMemo(
    () => ({
      ...J,
      mode: "single",
      selected: Y,
      onSelect: rt,
      defaultMonth: m,
      month: m,
      onMonthChange: q,
      captionLayout: "dropdown",
      disabled: G,
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: N
    }),
    [J, Y, m, G, N]
  ), Z = /* @__PURE__ */ $(mi, { open: tt, onOpenChange: st, children: [
    /* @__PURE__ */ b(bi, { asChild: !0, children: /* @__PURE__ */ $(
      ne,
      {
        variant: "outline",
        size: x,
        disabled: f,
        className: k(
          "group w-full justify-between",
          !n && "text-muted-foreground",
          c && "border-destructive",
          _
        ),
        children: [
          /* @__PURE__ */ b("span", { children: W }),
          /* @__PURE__ */ b(nl, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ b(
      yi,
      {
        className: k("flex w-auto flex-col gap-2 p-0", v),
        align: "start",
        children: /* @__PURE__ */ $("div", { className: "flex flex-col gap-2 pb-2", children: [
          i ? /* @__PURE__ */ b("div", { className: "flex h-[350px]", children: /* @__PURE__ */ b(
            Yi,
            {
              value: w,
              onChange: A,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : o === "month" ? /* @__PURE__ */ b("div", { className: "flex h-[350px]", children: /* @__PURE__ */ b(
            Ka,
            {
              value: Y,
              onChange: rt,
              locale: N,
              monthNames: U,
              disabled: G,
              className: "min-h-0 h-full shrink-0 w-full"
            }
          ) }) : /* @__PURE__ */ $("div", { className: k("flex h-[350px]", s && "overflow-hidden"), children: [
            /* @__PURE__ */ b(al, { initialFocus: !0, ...V }),
            s && /* @__PURE__ */ b(
              Yi,
              {
                value: w,
                onChange: A,
                className: "min-h-0 h-full shrink-0"
              }
            )
          ] }),
          /* @__PURE__ */ b(rl, { className: "shrink-0" }),
          /* @__PURE__ */ $("div", { className: "flex justify-end gap-2 px-2 shrink-0", children: [
            /* @__PURE__ */ b(ne, { variant: "secondary", size: "sm", onClick: D, children: R || "Cancel" }),
            /* @__PURE__ */ b(ne, { size: "sm", onClick: O, children: j || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return a || c ? /* @__PURE__ */ $("div", { className: k("w-full", E), children: [
    a && /* @__PURE__ */ $(Lt, { className: "text-foreground leading-5 block", children: [
      a,
      h && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ b("div", { className: a ? "mt-1" : "", children: Z }),
    c && /* @__PURE__ */ b("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: c })
  ] }) : /* @__PURE__ */ b("div", { className: k("w-full", E), children: Z });
}
function _m({
  control: n,
  name: t,
  label: e,
  required: r,
  error: s,
  className: i,
  callback: o = () => {
  },
  ...a
}) {
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: c, fieldState: { error: h } }) => {
        const f = s || h?.message;
        return /* @__PURE__ */ b(
          Va,
          {
            ...a,
            value: c.value,
            onChange: (g) => {
              c.onChange(g), o(g);
            },
            label: e,
            error: f,
            required: r,
            className: k("w-full", i)
          }
        );
      }
    }
  );
}
const Ga = () => {
  const n = /* @__PURE__ */ new Date();
  return [
    {
      label: "Hôm nay",
      range: {
        from: La(n),
        to: Ca(n)
      }
    },
    {
      label: "Tuần trước",
      range: {
        from: Oa(Gi(n, 1), { weekStartsOn: 1 }),
        to: qa(Gi(n, 1), { weekStartsOn: 1 })
      }
    },
    {
      label: "Tháng trước",
      range: {
        from: De(xn(n, 1)),
        to: Vi(xn(n, 1))
      }
    },
    {
      label: "3 tháng trước",
      range: {
        from: De(xn(n, 3)),
        to: Vi(xn(n, 3))
      }
    }
  ];
};
function Wa({
  value: n,
  onChange: t,
  placeholder: e = { from: "From date", to: "To date" },
  dateFormat: r = "dd/MM/yyyy",
  presets: s,
  showPresets: i,
  label: o,
  error: a,
  required: c,
  disabled: h = !1,
  disabledPast: f = !1,
  disabledFuture: g = !1,
  onDisabled: d,
  size: y = "md",
  className: x,
  triggerClassName: E,
  popoverClassName: _,
  locale: v,
  cancelText: N,
  applyText: R,
  ...j
}) {
  const [U, J] = z.useState(!1), [tt, st] = z.useState(n), [Y, rt] = z.useState(() => n?.to || n?.from || /* @__PURE__ */ new Date()), m = z.useRef(n), q = z.useRef(n?.to || n?.from || /* @__PURE__ */ new Date());
  z.useEffect(() => {
    U && (m.current = n, q.current = n?.to || n?.from || /* @__PURE__ */ new Date(), st(n), n?.to ? rt(n.to) : n?.from ? rt(n.from) : rt(/* @__PURE__ */ new Date()));
  }, [U, n]), z.useEffect(() => {
    st(n), n?.to ? rt(n.to) : n?.from && rt(n.from);
  }, [n]);
  const w = z.useCallback(
    (V) => {
      if (h) return !0;
      const Z = /* @__PURE__ */ new Date();
      Z.setHours(0, 0, 0, 0);
      const B = new Date(V);
      return B.setHours(0, 0, 0, 0), f && B < Z || g && B > Z ? !0 : d ? d(V) : !1;
    },
    [h, f, g, d]
  ), A = z.useMemo(() => Ga(), []), L = s ?? A, T = i !== void 0 ? i : L.length > 0, I = () => {
    t?.(tt), J(!1);
  }, M = () => {
    st(m.current), rt(q.current), J(!1);
  }, O = (V) => {
    st(V.range), V.range.to ? rt(V.range.to) : V.range.from && rt(V.range.from);
  }, D = z.useMemo(() => {
    if (!n?.from) return e.from || "Pick a date";
    const V = v && typeof v != "string" ? { locale: v } : void 0;
    return n.from && n.to ? `${fe(n.from, r, V)} - ${fe(n.to, r, V)}` : fe(n.from, r, V);
  }, [n, r, e, v]), W = z.useMemo(
    () => ({
      ...j,
      mode: "range",
      selected: tt,
      onSelect: st,
      defaultMonth: Y,
      month: Y,
      onMonthChange: rt,
      disabled: w,
      captionLayout: "dropdown",
      startMonth: new Date(1890, 0, 1),
      endMonth: new Date((/* @__PURE__ */ new Date()).getFullYear() + 50, 11, 31),
      locale: v
    }),
    [j, tt, Y, w, v]
  ), G = /* @__PURE__ */ $(mi, { open: U, onOpenChange: J, children: [
    /* @__PURE__ */ b(bi, { asChild: !0, children: /* @__PURE__ */ $(
      ne,
      {
        variant: "outline",
        size: y,
        disabled: h,
        className: k(
          "group w-full justify-between",
          !n?.from && "text-muted-foreground",
          a && "border-destructive",
          E
        ),
        children: [
          /* @__PURE__ */ b("span", { children: D }),
          /* @__PURE__ */ b(nl, { className: "h-4 w-4 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ b(
      yi,
      {
        className: k("flex w-auto flex-col gap-2 p-0 pb-2", _),
        align: "start",
        children: /* @__PURE__ */ $("div", { className: "flex flex-col gap-2 pb-2", children: [
          /* @__PURE__ */ $("div", { className: "flex", children: [
            T && /* @__PURE__ */ b("div", { className: "border-r p-2 w-fit", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: L.map((V, Z) => /* @__PURE__ */ b(
              ne,
              {
                variant: "ghost",
                size: "sm",
                className: "block text-left font-normal",
                onClick: () => O(V),
                children: V.label
              },
              Z
            )) }) }),
            /* @__PURE__ */ b("div", { className: "flex-1", children: /* @__PURE__ */ b(al, { initialFocus: !0, ...W }) })
          ] }),
          /* @__PURE__ */ b(rl, {}),
          /* @__PURE__ */ $("div", { className: "flex justify-end gap-2 px-2", children: [
            /* @__PURE__ */ b(ne, { variant: "secondary", onClick: M, children: N || "Cancel" }),
            /* @__PURE__ */ b(ne, { onClick: I, children: R || "Apply" })
          ] })
        ] })
      }
    )
  ] });
  return o || a ? /* @__PURE__ */ $("div", { className: k("w-full", x), children: [
    o && /* @__PURE__ */ $(Lt, { className: "text-foreground leading-5 block", children: [
      o,
      c && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ b("div", { className: o ? "mt-1" : "", children: G }),
    a && /* @__PURE__ */ b("div", { className: "text-destructive text-sm mt-1.5", role: "alert", children: a })
  ] }) : /* @__PURE__ */ b("div", { className: k("w-full", x), children: G });
}
function Cm({
  control: n,
  name: t,
  label: e,
  required: r,
  error: s,
  className: i,
  callback: o = () => {
  },
  ...a
}) {
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: c, fieldState: { error: h } }) => {
        const f = s || h?.message;
        return /* @__PURE__ */ b(
          Wa,
          {
            ...a,
            value: c.value,
            onChange: (g) => {
              c.onChange(g), o(g);
            },
            label: e,
            error: f,
            required: r,
            className: k("w-full", i)
          }
        );
      }
    }
  );
}
var cl = typeof global == "object" && global && global.Object === Object && global, Za = typeof self == "object" && self && self.Object === Object && self, oe = cl || Za || Function("return this")(), Se = oe.Symbol, ul = Object.prototype, Ya = ul.hasOwnProperty, Xa = ul.toString, Ir = Se ? Se.toStringTag : void 0;
function Qa(n) {
  var t = Ya.call(n, Ir), e = n[Ir];
  try {
    n[Ir] = void 0;
    var r = !0;
  } catch {
  }
  var s = Xa.call(n);
  return r && (t ? n[Ir] = e : delete n[Ir]), s;
}
var Ja = Object.prototype, tc = Ja.toString;
function ec(n) {
  return tc.call(n);
}
var rc = "[object Null]", nc = "[object Undefined]", Xi = Se ? Se.toStringTag : void 0;
function gr(n) {
  return n == null ? n === void 0 ? nc : rc : Xi && Xi in Object(n) ? Qa(n) : ec(n);
}
function pe(n) {
  return n != null && typeof n == "object";
}
var Be = Array.isArray;
function _e(n) {
  var t = typeof n;
  return n != null && (t == "object" || t == "function");
}
function hl(n) {
  return n;
}
var sc = "[object AsyncFunction]", ic = "[object Function]", oc = "[object GeneratorFunction]", lc = "[object Proxy]";
function vi(n) {
  if (!_e(n))
    return !1;
  var t = gr(n);
  return t == ic || t == oc || t == sc || t == lc;
}
var Bs = oe["__core-js_shared__"], Qi = (function() {
  var n = /[^.]+$/.exec(Bs && Bs.keys && Bs.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
})();
function ac(n) {
  return !!Qi && Qi in n;
}
var cc = Function.prototype, uc = cc.toString;
function Ue(n) {
  if (n != null) {
    try {
      return uc.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var hc = /[\\^$.*+?()[\]{}|]/g, dc = /^\[object .+?Constructor\]$/, fc = Function.prototype, pc = Object.prototype, gc = fc.toString, mc = pc.hasOwnProperty, bc = RegExp(
  "^" + gc.call(mc).replace(hc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yc(n) {
  if (!_e(n) || ac(n))
    return !1;
  var t = vi(n) ? bc : dc;
  return t.test(Ue(n));
}
function vc(n, t) {
  return n?.[t];
}
function Fe(n, t) {
  var e = vc(n, t);
  return yc(e) ? e : void 0;
}
var Xs = Fe(oe, "WeakMap"), Ji = Object.create, xc = /* @__PURE__ */ (function() {
  function n() {
  }
  return function(t) {
    if (!_e(t))
      return {};
    if (Ji)
      return Ji(t);
    n.prototype = t;
    var e = new n();
    return n.prototype = void 0, e;
  };
})();
function wc(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function Nc(n, t) {
  var e = -1, r = n.length;
  for (t || (t = Array(r)); ++e < r; )
    t[e] = n[e];
  return t;
}
var Ec = 800, Ac = 16, Tc = Date.now;
function Sc(n) {
  var t = 0, e = 0;
  return function() {
    var r = Tc(), s = Ac - (r - e);
    if (e = r, s > 0) {
      if (++t >= Ec)
        return arguments[0];
    } else
      t = 0;
    return n.apply(void 0, arguments);
  };
}
function _c(n) {
  return function() {
    return n;
  };
}
var In = (function() {
  try {
    var n = Fe(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
})(), Cc = In ? function(n, t) {
  return In(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: _c(t),
    writable: !0
  });
} : hl, Lc = Sc(Cc);
function qc(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1; )
    ;
  return n;
}
var Oc = 9007199254740991, kc = /^(?:0|[1-9]\d*)$/;
function dl(n, t) {
  var e = typeof n;
  return t = t ?? Oc, !!t && (e == "number" || e != "symbol" && kc.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function xi(n, t, e) {
  t == "__proto__" && In ? In(n, t, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[t] = e;
}
function Zr(n, t) {
  return n === t || n !== n && t !== t;
}
var Ic = Object.prototype, Rc = Ic.hasOwnProperty;
function fl(n, t, e) {
  var r = n[t];
  (!(Rc.call(n, t) && Zr(r, e)) || e === void 0 && !(t in n)) && xi(n, t, e);
}
function Mc(n, t, e, r) {
  var s = !e;
  e || (e = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var a = t[i], c = void 0;
    c === void 0 && (c = n[a]), s ? xi(e, a, c) : fl(e, a, c);
  }
  return e;
}
var to = Math.max;
function Dc(n, t, e) {
  return t = to(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = to(r.length - t, 0), o = Array(i); ++s < i; )
      o[s] = r[t + s];
    s = -1;
    for (var a = Array(t + 1); ++s < t; )
      a[s] = r[s];
    return a[t] = e(o), wc(n, this, a);
  };
}
function Bc(n, t) {
  return Lc(Dc(n, t, hl), n + "");
}
var $c = 9007199254740991;
function pl(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= $c;
}
function jn(n) {
  return n != null && pl(n.length) && !vi(n);
}
function jc(n, t, e) {
  if (!_e(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? jn(e) && dl(t, e.length) : r == "string" && t in e) ? Zr(e[t], n) : !1;
}
function Pc(n) {
  return Bc(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, o = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, o && jc(e[0], e[1], o) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var a = e[r];
      a && n(t, a, r, i);
    }
    return t;
  });
}
var Uc = Object.prototype;
function wi(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || Uc;
  return n === e;
}
function Fc(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var Hc = "[object Arguments]";
function eo(n) {
  return pe(n) && gr(n) == Hc;
}
var gl = Object.prototype, zc = gl.hasOwnProperty, Kc = gl.propertyIsEnumerable, Qs = eo(/* @__PURE__ */ (function() {
  return arguments;
})()) ? eo : function(n) {
  return pe(n) && zc.call(n, "callee") && !Kc.call(n, "callee");
};
function Vc() {
  return !1;
}
var ml = typeof exports == "object" && exports && !exports.nodeType && exports, ro = ml && typeof module == "object" && module && !module.nodeType && module, Gc = ro && ro.exports === ml, no = Gc ? oe.Buffer : void 0, Wc = no ? no.isBuffer : void 0, Fr = Wc || Vc, Zc = "[object Arguments]", Yc = "[object Array]", Xc = "[object Boolean]", Qc = "[object Date]", Jc = "[object Error]", tu = "[object Function]", eu = "[object Map]", ru = "[object Number]", nu = "[object Object]", su = "[object RegExp]", iu = "[object Set]", ou = "[object String]", lu = "[object WeakMap]", au = "[object ArrayBuffer]", cu = "[object DataView]", uu = "[object Float32Array]", hu = "[object Float64Array]", du = "[object Int8Array]", fu = "[object Int16Array]", pu = "[object Int32Array]", gu = "[object Uint8Array]", mu = "[object Uint8ClampedArray]", bu = "[object Uint16Array]", yu = "[object Uint32Array]", pt = {};
pt[uu] = pt[hu] = pt[du] = pt[fu] = pt[pu] = pt[gu] = pt[mu] = pt[bu] = pt[yu] = !0;
pt[Zc] = pt[Yc] = pt[au] = pt[Xc] = pt[cu] = pt[Qc] = pt[Jc] = pt[tu] = pt[eu] = pt[ru] = pt[nu] = pt[su] = pt[iu] = pt[ou] = pt[lu] = !1;
function vu(n) {
  return pe(n) && pl(n.length) && !!pt[gr(n)];
}
function Ni(n) {
  return function(t) {
    return n(t);
  };
}
var bl = typeof exports == "object" && exports && !exports.nodeType && exports, Pr = bl && typeof module == "object" && module && !module.nodeType && module, xu = Pr && Pr.exports === bl, $s = xu && cl.process, dr = (function() {
  try {
    var n = Pr && Pr.require && Pr.require("util").types;
    return n || $s && $s.binding && $s.binding("util");
  } catch {
  }
})(), so = dr && dr.isTypedArray, Ei = so ? Ni(so) : vu, wu = Object.prototype, Nu = wu.hasOwnProperty;
function yl(n, t) {
  var e = Be(n), r = !e && Qs(n), s = !e && !r && Fr(n), i = !e && !r && !s && Ei(n), o = e || r || s || i, a = o ? Fc(n.length, String) : [], c = a.length;
  for (var h in n)
    (t || Nu.call(n, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    dl(h, c))) && a.push(h);
  return a;
}
function vl(n, t) {
  return function(e) {
    return n(t(e));
  };
}
var Eu = vl(Object.keys, Object), Au = Object.prototype, Tu = Au.hasOwnProperty;
function Su(n) {
  if (!wi(n))
    return Eu(n);
  var t = [];
  for (var e in Object(n))
    Tu.call(n, e) && e != "constructor" && t.push(e);
  return t;
}
function _u(n) {
  return jn(n) ? yl(n) : Su(n);
}
function Cu(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
var Lu = Object.prototype, qu = Lu.hasOwnProperty;
function Ou(n) {
  if (!_e(n))
    return Cu(n);
  var t = wi(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !qu.call(n, r)) || e.push(r);
  return e;
}
function xl(n) {
  return jn(n) ? yl(n, !0) : Ou(n);
}
var Hr = Fe(Object, "create");
function ku() {
  this.__data__ = Hr ? Hr(null) : {}, this.size = 0;
}
function Iu(n) {
  var t = this.has(n) && delete this.__data__[n];
  return this.size -= t ? 1 : 0, t;
}
var Ru = "__lodash_hash_undefined__", Mu = Object.prototype, Du = Mu.hasOwnProperty;
function Bu(n) {
  var t = this.__data__;
  if (Hr) {
    var e = t[n];
    return e === Ru ? void 0 : e;
  }
  return Du.call(t, n) ? t[n] : void 0;
}
var $u = Object.prototype, ju = $u.hasOwnProperty;
function Pu(n) {
  var t = this.__data__;
  return Hr ? t[n] !== void 0 : ju.call(t, n);
}
var Uu = "__lodash_hash_undefined__";
function Fu(n, t) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = Hr && t === void 0 ? Uu : t, this;
}
function $e(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
$e.prototype.clear = ku;
$e.prototype.delete = Iu;
$e.prototype.get = Bu;
$e.prototype.has = Pu;
$e.prototype.set = Fu;
function Hu() {
  this.__data__ = [], this.size = 0;
}
function Pn(n, t) {
  for (var e = n.length; e--; )
    if (Zr(n[e][0], t))
      return e;
  return -1;
}
var zu = Array.prototype, Ku = zu.splice;
function Vu(n) {
  var t = this.__data__, e = Pn(t, n);
  if (e < 0)
    return !1;
  var r = t.length - 1;
  return e == r ? t.pop() : Ku.call(t, e, 1), --this.size, !0;
}
function Gu(n) {
  var t = this.__data__, e = Pn(t, n);
  return e < 0 ? void 0 : t[e][1];
}
function Wu(n) {
  return Pn(this.__data__, n) > -1;
}
function Zu(n, t) {
  var e = this.__data__, r = Pn(e, n);
  return r < 0 ? (++this.size, e.push([n, t])) : e[r][1] = t, this;
}
function me(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = Hu;
me.prototype.delete = Vu;
me.prototype.get = Gu;
me.prototype.has = Wu;
me.prototype.set = Zu;
var zr = Fe(oe, "Map");
function Yu() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (zr || me)(),
    string: new $e()
  };
}
function Xu(n) {
  var t = typeof n;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n !== "__proto__" : n === null;
}
function Un(n, t) {
  var e = n.__data__;
  return Xu(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
}
function Qu(n) {
  var t = Un(this, n).delete(n);
  return this.size -= t ? 1 : 0, t;
}
function Ju(n) {
  return Un(this, n).get(n);
}
function th(n) {
  return Un(this, n).has(n);
}
function eh(n, t) {
  var e = Un(this, n), r = e.size;
  return e.set(n, t), this.size += e.size == r ? 0 : 1, this;
}
function He(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++t < e; ) {
    var r = n[t];
    this.set(r[0], r[1]);
  }
}
He.prototype.clear = Yu;
He.prototype.delete = Qu;
He.prototype.get = Ju;
He.prototype.has = th;
He.prototype.set = eh;
function rh(n, t) {
  for (var e = -1, r = t.length, s = n.length; ++e < r; )
    n[s + e] = t[e];
  return n;
}
var wl = vl(Object.getPrototypeOf, Object), nh = "[object Object]", sh = Function.prototype, ih = Object.prototype, Nl = sh.toString, oh = ih.hasOwnProperty, lh = Nl.call(Object);
function ah(n) {
  if (!pe(n) || gr(n) != nh)
    return !1;
  var t = wl(n);
  if (t === null)
    return !0;
  var e = oh.call(t, "constructor") && t.constructor;
  return typeof e == "function" && e instanceof e && Nl.call(e) == lh;
}
function ch() {
  this.__data__ = new me(), this.size = 0;
}
function uh(n) {
  var t = this.__data__, e = t.delete(n);
  return this.size = t.size, e;
}
function hh(n) {
  return this.__data__.get(n);
}
function dh(n) {
  return this.__data__.has(n);
}
var fh = 200;
function ph(n, t) {
  var e = this.__data__;
  if (e instanceof me) {
    var r = e.__data__;
    if (!zr || r.length < fh - 1)
      return r.push([n, t]), this.size = ++e.size, this;
    e = this.__data__ = new He(r);
  }
  return e.set(n, t), this.size = e.size, this;
}
function se(n) {
  var t = this.__data__ = new me(n);
  this.size = t.size;
}
se.prototype.clear = ch;
se.prototype.delete = uh;
se.prototype.get = hh;
se.prototype.has = dh;
se.prototype.set = ph;
var El = typeof exports == "object" && exports && !exports.nodeType && exports, io = El && typeof module == "object" && module && !module.nodeType && module, gh = io && io.exports === El, oo = gh ? oe.Buffer : void 0, lo = oo ? oo.allocUnsafe : void 0;
function Al(n, t) {
  if (t)
    return n.slice();
  var e = n.length, r = lo ? lo(e) : new n.constructor(e);
  return n.copy(r), r;
}
function mh(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++e < r; ) {
    var o = n[e];
    t(o, e, n) && (i[s++] = o);
  }
  return i;
}
function bh() {
  return [];
}
var yh = Object.prototype, vh = yh.propertyIsEnumerable, ao = Object.getOwnPropertySymbols, xh = ao ? function(n) {
  return n == null ? [] : (n = Object(n), mh(ao(n), function(t) {
    return vh.call(n, t);
  }));
} : bh;
function wh(n, t, e) {
  var r = t(n);
  return Be(n) ? r : rh(r, e(n));
}
function Js(n) {
  return wh(n, _u, xh);
}
var ti = Fe(oe, "DataView"), ei = Fe(oe, "Promise"), ri = Fe(oe, "Set"), co = "[object Map]", Nh = "[object Object]", uo = "[object Promise]", ho = "[object Set]", fo = "[object WeakMap]", po = "[object DataView]", Eh = Ue(ti), Ah = Ue(zr), Th = Ue(ei), Sh = Ue(ri), _h = Ue(Xs), Kt = gr;
(ti && Kt(new ti(new ArrayBuffer(1))) != po || zr && Kt(new zr()) != co || ei && Kt(ei.resolve()) != uo || ri && Kt(new ri()) != ho || Xs && Kt(new Xs()) != fo) && (Kt = function(n) {
  var t = gr(n), e = t == Nh ? n.constructor : void 0, r = e ? Ue(e) : "";
  if (r)
    switch (r) {
      case Eh:
        return po;
      case Ah:
        return co;
      case Th:
        return uo;
      case Sh:
        return ho;
      case _h:
        return fo;
    }
  return t;
});
var Ch = Object.prototype, Lh = Ch.hasOwnProperty;
function qh(n) {
  var t = n.length, e = new n.constructor(t);
  return t && typeof n[0] == "string" && Lh.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var Rn = oe.Uint8Array;
function Ai(n) {
  var t = new n.constructor(n.byteLength);
  return new Rn(t).set(new Rn(n)), t;
}
function Oh(n, t) {
  var e = Ai(n.buffer);
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var kh = /\w*$/;
function Ih(n) {
  var t = new n.constructor(n.source, kh.exec(n));
  return t.lastIndex = n.lastIndex, t;
}
var go = Se ? Se.prototype : void 0, mo = go ? go.valueOf : void 0;
function Rh(n) {
  return mo ? Object(mo.call(n)) : {};
}
function Tl(n, t) {
  var e = t ? Ai(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var Mh = "[object Boolean]", Dh = "[object Date]", Bh = "[object Map]", $h = "[object Number]", jh = "[object RegExp]", Ph = "[object Set]", Uh = "[object String]", Fh = "[object Symbol]", Hh = "[object ArrayBuffer]", zh = "[object DataView]", Kh = "[object Float32Array]", Vh = "[object Float64Array]", Gh = "[object Int8Array]", Wh = "[object Int16Array]", Zh = "[object Int32Array]", Yh = "[object Uint8Array]", Xh = "[object Uint8ClampedArray]", Qh = "[object Uint16Array]", Jh = "[object Uint32Array]";
function td(n, t, e) {
  var r = n.constructor;
  switch (t) {
    case Hh:
      return Ai(n);
    case Mh:
    case Dh:
      return new r(+n);
    case zh:
      return Oh(n);
    case Kh:
    case Vh:
    case Gh:
    case Wh:
    case Zh:
    case Yh:
    case Xh:
    case Qh:
    case Jh:
      return Tl(n, e);
    case Bh:
      return new r();
    case $h:
    case Uh:
      return new r(n);
    case jh:
      return Ih(n);
    case Ph:
      return new r();
    case Fh:
      return Rh(n);
  }
}
function Sl(n) {
  return typeof n.constructor == "function" && !wi(n) ? xc(wl(n)) : {};
}
var ed = "[object Map]";
function rd(n) {
  return pe(n) && Kt(n) == ed;
}
var bo = dr && dr.isMap, nd = bo ? Ni(bo) : rd, sd = "[object Set]";
function id(n) {
  return pe(n) && Kt(n) == sd;
}
var yo = dr && dr.isSet, od = yo ? Ni(yo) : id, ld = 1, _l = "[object Arguments]", ad = "[object Array]", cd = "[object Boolean]", ud = "[object Date]", hd = "[object Error]", Cl = "[object Function]", dd = "[object GeneratorFunction]", fd = "[object Map]", pd = "[object Number]", Ll = "[object Object]", gd = "[object RegExp]", md = "[object Set]", bd = "[object String]", yd = "[object Symbol]", vd = "[object WeakMap]", xd = "[object ArrayBuffer]", wd = "[object DataView]", Nd = "[object Float32Array]", Ed = "[object Float64Array]", Ad = "[object Int8Array]", Td = "[object Int16Array]", Sd = "[object Int32Array]", _d = "[object Uint8Array]", Cd = "[object Uint8ClampedArray]", Ld = "[object Uint16Array]", qd = "[object Uint32Array]", ft = {};
ft[_l] = ft[ad] = ft[xd] = ft[wd] = ft[cd] = ft[ud] = ft[Nd] = ft[Ed] = ft[Ad] = ft[Td] = ft[Sd] = ft[fd] = ft[pd] = ft[Ll] = ft[gd] = ft[md] = ft[bd] = ft[yd] = ft[_d] = ft[Cd] = ft[Ld] = ft[qd] = !0;
ft[hd] = ft[Cl] = ft[vd] = !1;
function On(n, t, e, r, s, i) {
  var o, a = t & ld;
  if (o !== void 0)
    return o;
  if (!_e(n))
    return n;
  var c = Be(n);
  if (c)
    o = qh(n);
  else {
    var h = Kt(n), f = h == Cl || h == dd;
    if (Fr(n))
      return Al(n, a);
    if (h == Ll || h == _l || f && !s)
      o = f ? {} : Sl(n);
    else {
      if (!ft[h])
        return s ? n : {};
      o = td(n, h, a);
    }
  }
  i || (i = new se());
  var g = i.get(n);
  if (g)
    return g;
  i.set(n, o), od(n) ? n.forEach(function(x) {
    o.add(On(x, t, e, x, n, i));
  }) : nd(n) && n.forEach(function(x, E) {
    o.set(E, On(x, t, e, E, n, i));
  });
  var d = Js, y = c ? void 0 : d(n);
  return qc(y || n, function(x, E) {
    y && (E = x, x = n[E]), fl(o, E, On(x, t, e, E, n, i));
  }), o;
}
var Od = 1, kd = 4;
function cr(n) {
  return On(n, Od | kd);
}
var Id = "__lodash_hash_undefined__";
function Rd(n) {
  return this.__data__.set(n, Id), this;
}
function Md(n) {
  return this.__data__.has(n);
}
function Mn(n) {
  var t = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new He(); ++t < e; )
    this.add(n[t]);
}
Mn.prototype.add = Mn.prototype.push = Rd;
Mn.prototype.has = Md;
function Dd(n, t) {
  for (var e = -1, r = n == null ? 0 : n.length; ++e < r; )
    if (t(n[e], e, n))
      return !0;
  return !1;
}
function Bd(n, t) {
  return n.has(t);
}
var $d = 1, jd = 2;
function ql(n, t, e, r, s, i) {
  var o = e & $d, a = n.length, c = t.length;
  if (a != c && !(o && c > a))
    return !1;
  var h = i.get(n), f = i.get(t);
  if (h && f)
    return h == t && f == n;
  var g = -1, d = !0, y = e & jd ? new Mn() : void 0;
  for (i.set(n, t), i.set(t, n); ++g < a; ) {
    var x = n[g], E = t[g];
    if (r)
      var _ = o ? r(E, x, g, t, n, i) : r(x, E, g, n, t, i);
    if (_ !== void 0) {
      if (_)
        continue;
      d = !1;
      break;
    }
    if (y) {
      if (!Dd(t, function(v, N) {
        if (!Bd(y, N) && (x === v || s(x, v, e, r, i)))
          return y.push(N);
      })) {
        d = !1;
        break;
      }
    } else if (!(x === E || s(x, E, e, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(n), i.delete(t), d;
}
function Pd(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r, s) {
    e[++t] = [s, r];
  }), e;
}
function Ud(n) {
  var t = -1, e = Array(n.size);
  return n.forEach(function(r) {
    e[++t] = r;
  }), e;
}
var Fd = 1, Hd = 2, zd = "[object Boolean]", Kd = "[object Date]", Vd = "[object Error]", Gd = "[object Map]", Wd = "[object Number]", Zd = "[object RegExp]", Yd = "[object Set]", Xd = "[object String]", Qd = "[object Symbol]", Jd = "[object ArrayBuffer]", tf = "[object DataView]", vo = Se ? Se.prototype : void 0, js = vo ? vo.valueOf : void 0;
function ef(n, t, e, r, s, i, o) {
  switch (e) {
    case tf:
      if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset)
        return !1;
      n = n.buffer, t = t.buffer;
    case Jd:
      return !(n.byteLength != t.byteLength || !i(new Rn(n), new Rn(t)));
    case zd:
    case Kd:
    case Wd:
      return Zr(+n, +t);
    case Vd:
      return n.name == t.name && n.message == t.message;
    case Zd:
    case Xd:
      return n == t + "";
    case Gd:
      var a = Pd;
    case Yd:
      var c = r & Fd;
      if (a || (a = Ud), n.size != t.size && !c)
        return !1;
      var h = o.get(n);
      if (h)
        return h == t;
      r |= Hd, o.set(n, t);
      var f = ql(a(n), a(t), r, s, i, o);
      return o.delete(n), f;
    case Qd:
      if (js)
        return js.call(n) == js.call(t);
  }
  return !1;
}
var rf = 1, nf = Object.prototype, sf = nf.hasOwnProperty;
function of(n, t, e, r, s, i) {
  var o = e & rf, a = Js(n), c = a.length, h = Js(t), f = h.length;
  if (c != f && !o)
    return !1;
  for (var g = c; g--; ) {
    var d = a[g];
    if (!(o ? d in t : sf.call(t, d)))
      return !1;
  }
  var y = i.get(n), x = i.get(t);
  if (y && x)
    return y == t && x == n;
  var E = !0;
  i.set(n, t), i.set(t, n);
  for (var _ = o; ++g < c; ) {
    d = a[g];
    var v = n[d], N = t[d];
    if (r)
      var R = o ? r(N, v, d, t, n, i) : r(v, N, d, n, t, i);
    if (!(R === void 0 ? v === N || s(v, N, e, r, i) : R)) {
      E = !1;
      break;
    }
    _ || (_ = d == "constructor");
  }
  if (E && !_) {
    var j = n.constructor, U = t.constructor;
    j != U && "constructor" in n && "constructor" in t && !(typeof j == "function" && j instanceof j && typeof U == "function" && U instanceof U) && (E = !1);
  }
  return i.delete(n), i.delete(t), E;
}
var lf = 1, xo = "[object Arguments]", wo = "[object Array]", wn = "[object Object]", af = Object.prototype, No = af.hasOwnProperty;
function cf(n, t, e, r, s, i) {
  var o = Be(n), a = Be(t), c = o ? wo : Kt(n), h = a ? wo : Kt(t);
  c = c == xo ? wn : c, h = h == xo ? wn : h;
  var f = c == wn, g = h == wn, d = c == h;
  if (d && Fr(n)) {
    if (!Fr(t))
      return !1;
    o = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new se()), o || Ei(n) ? ql(n, t, e, r, s, i) : ef(n, t, c, e, r, s, i);
  if (!(e & lf)) {
    var y = f && No.call(n, "__wrapped__"), x = g && No.call(t, "__wrapped__");
    if (y || x) {
      var E = y ? n.value() : n, _ = x ? t.value() : t;
      return i || (i = new se()), s(E, _, e, r, i);
    }
  }
  return d ? (i || (i = new se()), of(n, t, e, r, s, i)) : !1;
}
function Ol(n, t, e, r, s) {
  return n === t ? !0 : n == null || t == null || !pe(n) && !pe(t) ? n !== n && t !== t : cf(n, t, e, r, Ol, s);
}
function uf(n) {
  return function(t, e, r) {
    for (var s = -1, i = Object(t), o = r(t), a = o.length; a--; ) {
      var c = o[++s];
      if (e(i[c], c, i) === !1)
        break;
    }
    return t;
  };
}
var hf = uf();
function ni(n, t, e) {
  (e !== void 0 && !Zr(n[t], e) || e === void 0 && !(t in n)) && xi(n, t, e);
}
function df(n) {
  return pe(n) && jn(n);
}
function si(n, t) {
  if (!(t === "constructor" && typeof n[t] == "function") && t != "__proto__")
    return n[t];
}
function ff(n) {
  return Mc(n, xl(n));
}
function pf(n, t, e, r, s, i, o) {
  var a = si(n, e), c = si(t, e), h = o.get(c);
  if (h) {
    ni(n, e, h);
    return;
  }
  var f = i ? i(a, c, e + "", n, t, o) : void 0, g = f === void 0;
  if (g) {
    var d = Be(c), y = !d && Fr(c), x = !d && !y && Ei(c);
    f = c, d || y || x ? Be(a) ? f = a : df(a) ? f = Nc(a) : y ? (g = !1, f = Al(c, !0)) : x ? (g = !1, f = Tl(c, !0)) : f = [] : ah(c) || Qs(c) ? (f = a, Qs(a) ? f = ff(a) : (!_e(a) || vi(a)) && (f = Sl(c))) : g = !1;
  }
  g && (o.set(c, f), s(f, c, r, i, o), o.delete(c)), ni(n, e, f);
}
function kl(n, t, e, r, s) {
  n !== t && hf(t, function(i, o) {
    if (s || (s = new se()), _e(i))
      pf(n, t, o, e, kl, r, s);
    else {
      var a = r ? r(si(n, o), i, o + "", n, t, s) : void 0;
      a === void 0 && (a = i), ni(n, o, a);
    }
  }, xl);
}
function we(n, t) {
  return Ol(n, t);
}
var Ae = Pc(function(n, t, e) {
  kl(n, t, e);
}), H = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(H || {});
class ie {
  constructor(t, e, r = {}) {
    this.attrName = t, this.keyName = e;
    const s = H.TYPE & H.ATTRIBUTE;
    this.scope = r.scope != null ? (
      // Ignore type bits, force attribute bit
      r.scope & H.LEVEL | s
    ) : H.ATTRIBUTE, r.whitelist != null && (this.whitelist = r.whitelist);
  }
  static keys(t) {
    return Array.from(t.attributes).map((e) => e.name);
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.setAttribute(this.keyName, e), !0) : !1;
  }
  canAdd(t, e) {
    return this.whitelist == null ? !0 : typeof e == "string" ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1;
  }
  remove(t) {
    t.removeAttribute(this.keyName);
  }
  value(t) {
    const e = t.getAttribute(this.keyName);
    return this.canAdd(t, e) && e ? e : "";
  }
}
class ur extends Error {
  constructor(t) {
    t = "[Parchment] " + t, super(t), this.message = t, this.name = this.constructor.name;
  }
}
const Il = class ii {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(t, e = !1) {
    if (t == null)
      return null;
    if (this.blots.has(t))
      return this.blots.get(t) || null;
    if (e) {
      let r = null;
      try {
        r = t.parentNode;
      } catch {
        return null;
      }
      return this.find(r, e);
    }
    return null;
  }
  create(t, e, r) {
    const s = this.query(e);
    if (s == null)
      throw new ur(`Unable to create ${e} blot`);
    const i = s, o = (
      // @ts-expect-error Fix me later
      e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r)
    ), a = new i(t, o, r);
    return ii.blots.set(a.domNode, a), a;
  }
  find(t, e = !1) {
    return ii.find(t, e);
  }
  query(t, e = H.ANY) {
    let r;
    return typeof t == "string" ? r = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof t == "number" ? t & H.LEVEL & H.BLOCK ? r = this.types.block : t & H.LEVEL & H.INLINE && (r = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[t.tagName]), r == null ? null : "scope" in r && e & H.LEVEL & r.scope && e & H.TYPE & r.scope ? r : null;
  }
  register(...t) {
    return t.map((e) => {
      const r = "blotName" in e, s = "attrName" in e;
      if (!r && !s)
        throw new ur("Invalid definition");
      if (r && e.blotName === "abstract")
        throw new ur("Cannot register abstract class");
      const i = r ? e.blotName : s ? e.attrName : void 0;
      return this.types[i] = e, s ? typeof e.keyName == "string" && (this.attributes[e.keyName] = e) : r && (e.className && (this.classes[e.className] = e), e.tagName && (Array.isArray(e.tagName) ? e.tagName = e.tagName.map((o) => o.toUpperCase()) : e.tagName = e.tagName.toUpperCase(), (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach((o) => {
        (this.tags[o] == null || e.className == null) && (this.tags[o] = e);
      }))), e;
    });
  }
};
Il.blots = /* @__PURE__ */ new WeakMap();
let fr = Il;
function Eo(n, t) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((e) => e.indexOf(`${t}-`) === 0);
}
class gf extends ie {
  static keys(t) {
    return (t.getAttribute("class") || "").split(/\s+/).map((e) => e.split("-").slice(0, -1).join("-"));
  }
  add(t, e) {
    return this.canAdd(t, e) ? (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0) : !1;
  }
  remove(t) {
    Eo(t, this.keyName).forEach((e) => {
      t.classList.remove(e);
    }), t.classList.length === 0 && t.removeAttribute("class");
  }
  value(t) {
    const e = (Eo(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(t, e) ? e : "";
  }
}
const Yt = gf;
function Ps(n) {
  const t = n.split("-"), e = t.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return t[0] + e;
}
class mf extends ie {
  static keys(t) {
    return (t.getAttribute("style") || "").split(";").map((e) => e.split(":")[0].trim());
  }
  add(t, e) {
    return this.canAdd(t, e) ? (t.style[Ps(this.keyName)] = e, !0) : !1;
  }
  remove(t) {
    t.style[Ps(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style");
  }
  value(t) {
    const e = t.style[Ps(this.keyName)];
    return this.canAdd(t, e) ? e : "";
  }
}
const Ce = mf;
class bf {
  constructor(t) {
    this.attributes = {}, this.domNode = t, this.build();
  }
  attribute(t, e) {
    e ? t.add(this.domNode, e) && (t.value(this.domNode) != null ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
  }
  build() {
    this.attributes = {};
    const t = fr.find(this.domNode);
    if (t == null)
      return;
    const e = ie.keys(this.domNode), r = Yt.keys(this.domNode), s = Ce.keys(this.domNode);
    e.concat(r).concat(s).forEach((i) => {
      const o = t.scroll.query(i, H.ATTRIBUTE);
      o instanceof ie && (this.attributes[o.attrName] = o);
    });
  }
  copy(t) {
    Object.keys(this.attributes).forEach((e) => {
      const r = this.attributes[e].value(this.domNode);
      t.format(e, r);
    });
  }
  move(t) {
    this.copy(t), Object.keys(this.attributes).forEach((e) => {
      this.attributes[e].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (t, e) => (t[e] = this.attributes[e].value(this.domNode), t),
      {}
    );
  }
}
const Fn = bf, Rl = class {
  constructor(t, e) {
    this.scroll = t, this.domNode = e, fr.blots.set(e, this), this.prev = null, this.next = null;
  }
  static create(t) {
    if (this.tagName == null)
      throw new ur("Blot definition missing tagName");
    let e, r;
    return Array.isArray(this.tagName) ? (typeof t == "string" ? (r = t.toUpperCase(), parseInt(r, 10).toString() === r && (r = parseInt(r, 10))) : typeof t == "number" && (r = t), typeof r == "number" ? e = document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? e = document.createElement(r) : e = document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const t = this.domNode.cloneNode(!1);
    return this.scroll.create(t);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), fr.blots.delete(this.domNode);
  }
  deleteAt(t, e) {
    this.isolate(t, e).remove();
  }
  formatAt(t, e, r, s) {
    const i = this.isolate(t, e);
    if (this.scroll.query(r, H.BLOT) != null && s)
      i.wrap(r, s);
    else if (this.scroll.query(r, H.ATTRIBUTE) != null) {
      const o = this.scroll.create(this.statics.scope);
      i.wrap(o), o.format(r, s);
    }
  }
  insertAt(t, e, r) {
    const s = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r), i = this.split(t);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(t, e) {
    const r = this.split(t);
    if (r == null)
      throw new Error("Attempt to isolate at end");
    return r.split(e), r;
  }
  length() {
    return 1;
  }
  offset(t = this.parent) {
    return this.parent == null || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
  }
  optimize(t) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return this.parent != null && (this.parent.insertBefore(r, this.next || void 0), this.remove()), r;
  }
  split(t, e) {
    return t === 0 ? this : this.next;
  }
  update(t, e) {
  }
  wrap(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    if (this.parent != null && this.parent.insertBefore(r, this.next || void 0), typeof r.appendChild != "function")
      throw new ur(`Cannot wrap ${t}`);
    return r.appendChild(this), r;
  }
};
Rl.blotName = "abstract";
let Ml = Rl;
const Dl = class extends Ml {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(t) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(t, e) {
    return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(t, e) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return t > 0 && (r += 1), [this.parent.domNode, r];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
Dl.scope = H.INLINE_BLOT;
let yf = Dl;
const Tt = yf;
class vf {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...t) {
    if (this.insertBefore(t[0], null), t.length > 1) {
      const e = t.slice(1);
      this.append(...e);
    }
  }
  at(t) {
    const e = this.iterator();
    let r = e();
    for (; r && t > 0; )
      t -= 1, r = e();
    return r;
  }
  contains(t) {
    const e = this.iterator();
    let r = e();
    for (; r; ) {
      if (r === t)
        return !0;
      r = e();
    }
    return !1;
  }
  indexOf(t) {
    const e = this.iterator();
    let r = e(), s = 0;
    for (; r; ) {
      if (r === t)
        return s;
      s += 1, r = e();
    }
    return -1;
  }
  insertBefore(t, e) {
    t != null && (this.remove(t), t.next = e, e != null ? (t.prev = e.prev, e.prev != null && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : this.tail != null ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1);
  }
  offset(t) {
    let e = 0, r = this.head;
    for (; r != null; ) {
      if (r === t)
        return e;
      e += r.length(), r = r.next;
    }
    return -1;
  }
  remove(t) {
    this.contains(t) && (t.prev != null && (t.prev.next = t.next), t.next != null && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1);
  }
  iterator(t = this.head) {
    return () => {
      const e = t;
      return t != null && (t = t.next), e;
    };
  }
  find(t, e = !1) {
    const r = this.iterator();
    let s = r();
    for (; s; ) {
      const i = s.length();
      if (t < i || e && t === i && (s.next == null || s.next.length() !== 0))
        return [s, t];
      t -= i, s = r();
    }
    return [null, 0];
  }
  forEach(t) {
    const e = this.iterator();
    let r = e();
    for (; r; )
      t(r), r = e();
  }
  forEachAt(t, e, r) {
    if (e <= 0)
      return;
    const [s, i] = this.find(t);
    let o = t - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && o < t + e; ) {
      const h = c.length();
      t > o ? r(
        c,
        t - o,
        Math.min(e, o + h - t)
      ) : r(c, 0, Math.min(h, t + e - o)), o += h, c = a();
    }
  }
  map(t) {
    return this.reduce((e, r) => (e.push(t(r)), e), []);
  }
  reduce(t, e) {
    const r = this.iterator();
    let s = r();
    for (; s; )
      e = t(e, s), s = r();
    return e;
  }
}
function Ao(n, t) {
  const e = t.find(n);
  if (e)
    return e;
  try {
    return t.create(n);
  } catch {
    const r = t.create(H.INLINE);
    return Array.from(n.childNodes).forEach((s) => {
      r.domNode.appendChild(s);
    }), n.parentNode && n.parentNode.replaceChild(r.domNode, n), r.attach(), r;
  }
}
const Bl = class xe extends Ml {
  constructor(t, e) {
    super(t, e), this.uiNode = null, this.build();
  }
  appendChild(t) {
    this.insertBefore(t);
  }
  attach() {
    super.attach(), this.children.forEach((t) => {
      t.attach();
    });
  }
  attachUI(t) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = t, xe.uiClass && this.uiNode.classList.add(xe.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new vf(), Array.from(this.domNode.childNodes).filter((t) => t !== this.uiNode).reverse().forEach((t) => {
      try {
        const e = Ao(t, this.scroll);
        this.insertBefore(e, this.children.head || void 0);
      } catch (e) {
        if (e instanceof ur)
          return;
        throw e;
      }
    });
  }
  deleteAt(t, e) {
    if (t === 0 && e === this.length())
      return this.remove();
    this.children.forEachAt(t, e, (r, s, i) => {
      r.deleteAt(s, i);
    });
  }
  descendant(t, e = 0) {
    const [r, s] = this.children.find(e);
    return t.blotName == null && t(r) || t.blotName != null && r instanceof t ? [r, s] : r instanceof xe ? r.descendant(t, s) : [null, -1];
  }
  descendants(t, e = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      e,
      r,
      (o, a, c) => {
        (t.blotName == null && t(o) || t.blotName != null && o instanceof t) && s.push(o), o instanceof xe && (s = s.concat(
          o.descendants(t, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((t) => {
      t.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let t = !1;
    this.children.forEach((e) => {
      t || this.statics.allowedChildren.some(
        (r) => e instanceof r
      ) || (e.statics.scope === H.BLOCK_BLOT ? (e.next != null && this.splitAfter(e), e.prev != null && this.splitAfter(e.prev), e.parent.unwrap(), t = !0) : e instanceof xe ? e.unwrap() : e.remove());
    });
  }
  formatAt(t, e, r, s) {
    this.children.forEachAt(t, e, (i, o, a) => {
      i.formatAt(o, a, r, s);
    });
  }
  insertAt(t, e, r) {
    const [s, i] = this.children.find(t);
    if (s)
      s.insertAt(i, e, r);
    else {
      const o = r == null ? this.scroll.create("text", e) : this.scroll.create(e, r);
      this.appendChild(o);
    }
  }
  insertBefore(t, e) {
    t.parent != null && t.parent.children.remove(t);
    let r = null;
    this.children.insertBefore(t, e || null), t.parent = this, e != null && (r = e.domNode), (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(t.domNode, r), t.attach();
  }
  length() {
    return this.children.reduce((t, e) => t + e.length(), 0);
  }
  moveChildren(t, e) {
    this.children.forEach((r) => {
      t.insertBefore(r, e);
    });
  }
  optimize(t) {
    if (super.optimize(t), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const e = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(e);
      } else
        this.remove();
  }
  path(t, e = !1) {
    const [r, s] = this.children.find(t, e), i = [[this, t]];
    return r instanceof xe ? i.concat(r.path(s, e)) : (r != null && i.push([r, s]), i);
  }
  removeChild(t) {
    this.children.remove(t);
  }
  replaceWith(t, e) {
    const r = typeof t == "string" ? this.scroll.create(t, e) : t;
    return r instanceof xe && this.moveChildren(r), super.replaceWith(r);
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.clone();
    return this.parent && this.parent.insertBefore(r, this.next || void 0), this.children.forEachAt(t, this.length(), (s, i, o) => {
      const a = s.split(i, e);
      a != null && r.appendChild(a);
    }), r;
  }
  splitAfter(t) {
    const e = this.clone();
    for (; t.next != null; )
      e.appendChild(t.next);
    return this.parent && this.parent.insertBefore(e, this.next || void 0), e;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(t, e) {
    const r = [], s = [];
    t.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (r.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const o = this.scroll.find(i);
      o != null && (o.domNode.parentNode == null || o.domNode.parentNode === this.domNode) && o.detach();
    }), r.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, o) => i === o ? 0 : i.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let o = null;
      i.nextSibling != null && (o = this.scroll.find(i.nextSibling));
      const a = Ao(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Bl.uiClass = "";
let xf = Bl;
const Wt = xf;
function wf(n, t) {
  if (Object.keys(n).length !== Object.keys(t).length)
    return !1;
  for (const e in n)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
const sr = class ir extends Wt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(ir.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Fn(this.domNode);
  }
  format(t, e) {
    if (t === this.statics.blotName && !e)
      this.children.forEach((r) => {
        r instanceof ir || (r = r.wrap(ir.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(t, H.INLINE);
      if (r == null)
        return;
      r instanceof ie ? this.attributes.attribute(r, e) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e);
    }
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.formats()[r] != null || this.scroll.query(r, H.ATTRIBUTE) ? this.isolate(t, e).format(r, s) : super.formatAt(t, e, r, s);
  }
  optimize(t) {
    super.optimize(t);
    const e = this.formats();
    if (Object.keys(e).length === 0)
      return this.unwrap();
    const r = this.next;
    r instanceof ir && r.prev === this && wf(e, r.formats()) && (r.moveChildren(this), r.remove());
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(t, e) {
    const r = super.wrap(t, e);
    return r instanceof ir && this.attributes.move(r), r;
  }
};
sr.allowedChildren = [sr, Tt], sr.blotName = "inline", sr.scope = H.INLINE_BLOT, sr.tagName = "SPAN";
let Nf = sr;
const Ti = Nf, or = class oi extends Wt {
  static create(t) {
    return super.create(t);
  }
  static formats(t, e) {
    const r = e.query(oi.blotName);
    if (!(r != null && t.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return t.tagName.toLowerCase();
    }
  }
  constructor(t, e) {
    super(t, e), this.attributes = new Fn(this.domNode);
  }
  format(t, e) {
    const r = this.scroll.query(t, H.BLOCK);
    r != null && (r instanceof ie ? this.attributes.attribute(r, e) : t === this.statics.blotName && !e ? this.replaceWith(oi.blotName) : e && (t !== this.statics.blotName || this.formats()[t] !== e) && this.replaceWith(t, e));
  }
  formats() {
    const t = this.attributes.values(), e = this.statics.formats(this.domNode, this.scroll);
    return e != null && (t[this.statics.blotName] = e), t;
  }
  formatAt(t, e, r, s) {
    this.scroll.query(r, H.BLOCK) != null ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    if (r == null || this.scroll.query(e, H.INLINE) != null)
      super.insertAt(t, e, r);
    else {
      const s = this.split(t);
      if (s != null) {
        const i = this.scroll.create(e, r);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(t, e) {
    const r = super.replaceWith(t, e);
    return this.attributes.copy(r), r;
  }
  update(t, e) {
    super.update(t, e), t.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
};
or.blotName = "block", or.scope = H.BLOCK_BLOT, or.tagName = "P", or.allowedChildren = [
  Ti,
  or,
  Tt
];
let Ef = or;
const Kr = Ef, li = class extends Wt {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.enforceAllowedChildren();
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.enforceAllowedChildren();
  }
  insertAt(t, e, r) {
    super.insertAt(t, e, r), this.enforceAllowedChildren();
  }
  optimize(t) {
    super.optimize(t), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
li.blotName = "container", li.scope = H.BLOCK_BLOT;
let Af = li;
const Hn = Af;
class Tf extends Tt {
  static formats(t, e) {
  }
  format(t, e) {
    super.formatAt(0, this.length(), t, e);
  }
  formatAt(t, e, r, s) {
    t === 0 && e === this.length() ? this.format(r, s) : super.formatAt(t, e, r, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const It = Tf, Sf = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, _f = 100, lr = class extends Wt {
  constructor(t, e) {
    super(null, e), this.registry = t, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, Sf), this.attach();
  }
  create(t, e) {
    return this.registry.create(this, t, e);
  }
  find(t, e = !1) {
    const r = this.registry.find(t, e);
    return r ? r.scroll === this ? r : e ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(t, e = H.ANY) {
    return this.registry.query(t, e);
  }
  register(...t) {
    return this.registry.register(...t);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(t, e) {
    this.update(), t === 0 && e === this.length() ? this.children.forEach((r) => {
      r.remove();
    }) : super.deleteAt(t, e);
  }
  formatAt(t, e, r, s) {
    this.update(), super.formatAt(t, e, r, s);
  }
  insertAt(t, e, r) {
    this.update(), super.insertAt(t, e, r);
  }
  optimize(t = [], e = {}) {
    super.optimize(e);
    const r = e.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      t.push(s.pop());
    const i = (c, h = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (r.has(c.domNode) || r.set(c.domNode, []), h && i(c.parent));
    }, o = (c) => {
      r.has(c.domNode) && (c instanceof Wt && c.children.forEach(o), r.delete(c.domNode), c.optimize(e));
    };
    let a = t;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= _f)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((h) => {
        const f = this.find(h.target, !0);
        f != null && (f.domNode === h.target && (h.type === "childList" ? (i(this.find(h.previousSibling, !1)), Array.from(h.addedNodes).forEach((g) => {
          const d = this.find(g, !1);
          i(d, !1), d instanceof Wt && d.children.forEach((y) => {
            i(y, !1);
          });
        })) : h.type === "attributes" && i(f.prev)), i(f));
      }), this.children.forEach(o), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        t.push(s.pop());
    }
  }
  update(t, e = {}) {
    t = t || this.observer.takeRecords();
    const r = /* @__PURE__ */ new WeakMap();
    t.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : r.has(i.domNode) ? (r.get(i.domNode).push(s), null) : (r.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && r.has(s.domNode) && s.update(r.get(s.domNode) || [], e);
    }), e.mutationsMap = r, r.has(this.domNode) && super.update(r.get(this.domNode), e), this.optimize(t, e);
  }
};
lr.blotName = "scroll", lr.defaultChild = Kr, lr.allowedChildren = [Kr, Hn], lr.scope = H.BLOCK_BLOT, lr.tagName = "DIV";
let Cf = lr;
const Si = Cf, ai = class $l extends Tt {
  static create(t) {
    return document.createTextNode(t);
  }
  static value(t) {
    return t.data;
  }
  constructor(t, e) {
    super(t, e), this.text = this.statics.value(this.domNode);
  }
  deleteAt(t, e) {
    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
  }
  index(t, e) {
    return this.domNode === t ? e : -1;
  }
  insertAt(t, e, r) {
    r == null ? (this.text = this.text.slice(0, t) + e + this.text.slice(t), this.domNode.data = this.text) : super.insertAt(t, e, r);
  }
  length() {
    return this.text.length;
  }
  optimize(t) {
    super.optimize(t), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof $l && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(t, e = !1) {
    return [this.domNode, t];
  }
  split(t, e = !1) {
    if (!e) {
      if (t === 0)
        return this;
      if (t === this.length())
        return this.next;
    }
    const r = this.scroll.create(this.domNode.splitText(t));
    return this.parent.insertBefore(r, this.next || void 0), this.text = this.statics.value(this.domNode), r;
  }
  update(t, e) {
    t.some((r) => r.type === "characterData" && r.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
ai.blotName = "text", ai.scope = H.INLINE_BLOT;
let Lf = ai;
const Dn = Lf, qf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: ie,
  AttributorStore: Fn,
  BlockBlot: Kr,
  ClassAttributor: Yt,
  ContainerBlot: Hn,
  EmbedBlot: It,
  InlineBlot: Ti,
  LeafBlot: Tt,
  ParentBlot: Wt,
  Registry: fr,
  Scope: H,
  ScrollBlot: Si,
  StyleAttributor: Ce,
  TextBlot: Dn
}, Symbol.toStringTag, { value: "Module" }));
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Nn = { exports: {} }, Us, To;
function Of() {
  if (To) return Us;
  To = 1;
  var n = -1, t = 1, e = 0;
  function r(m, q, w, A, L) {
    if (m === q)
      return m ? [[e, m]] : [];
    if (w != null) {
      var T = Y(m, q, w);
      if (T)
        return T;
    }
    var I = a(m, q), M = m.substring(0, I);
    m = m.substring(I), q = q.substring(I), I = h(m, q);
    var O = m.substring(m.length - I);
    m = m.substring(0, m.length - I), q = q.substring(0, q.length - I);
    var D = s(m, q);
    return M && D.unshift([e, M]), O && D.push([e, O]), N(D, L), A && g(D), D;
  }
  function s(m, q) {
    var w;
    if (!m)
      return [[t, q]];
    if (!q)
      return [[n, m]];
    var A = m.length > q.length ? m : q, L = m.length > q.length ? q : m, T = A.indexOf(L);
    if (T !== -1)
      return w = [
        [t, A.substring(0, T)],
        [e, L],
        [t, A.substring(T + L.length)]
      ], m.length > q.length && (w[0][0] = w[2][0] = n), w;
    if (L.length === 1)
      return [
        [n, m],
        [t, q]
      ];
    var I = f(m, q);
    if (I) {
      var M = I[0], O = I[1], D = I[2], W = I[3], G = I[4], V = r(M, D), Z = r(O, W);
      return V.concat([[e, G]], Z);
    }
    return i(m, q);
  }
  function i(m, q) {
    for (var w = m.length, A = q.length, L = Math.ceil((w + A) / 2), T = L, I = 2 * L, M = new Array(I), O = new Array(I), D = 0; D < I; D++)
      M[D] = -1, O[D] = -1;
    M[T + 1] = 0, O[T + 1] = 0;
    for (var W = w - A, G = W % 2 !== 0, V = 0, Z = 0, B = 0, et = 0, ut = 0; ut < L; ut++) {
      for (var Q = -ut + V; Q <= ut - Z; Q += 2) {
        var lt = T + Q, ot;
        Q === -ut || Q !== ut && M[lt - 1] < M[lt + 1] ? ot = M[lt + 1] : ot = M[lt - 1] + 1;
        for (var at = ot - Q; ot < w && at < A && m.charAt(ot) === q.charAt(at); )
          ot++, at++;
        if (M[lt] = ot, ot > w)
          Z += 2;
        else if (at > A)
          V += 2;
        else if (G) {
          var ht = T + W - Q;
          if (ht >= 0 && ht < I && O[ht] !== -1) {
            var dt = w - O[ht];
            if (ot >= dt)
              return o(m, q, ot, at);
          }
        }
      }
      for (var gt = -ut + B; gt <= ut - et; gt += 2) {
        var ht = T + gt, dt;
        gt === -ut || gt !== ut && O[ht - 1] < O[ht + 1] ? dt = O[ht + 1] : dt = O[ht - 1] + 1;
        for (var wt = dt - gt; dt < w && wt < A && m.charAt(w - dt - 1) === q.charAt(A - wt - 1); )
          dt++, wt++;
        if (O[ht] = dt, dt > w)
          et += 2;
        else if (wt > A)
          B += 2;
        else if (!G) {
          var lt = T + W - gt;
          if (lt >= 0 && lt < I && M[lt] !== -1) {
            var ot = M[lt], at = T + ot - lt;
            if (dt = w - dt, ot >= dt)
              return o(m, q, ot, at);
          }
        }
      }
    }
    return [
      [n, m],
      [t, q]
    ];
  }
  function o(m, q, w, A) {
    var L = m.substring(0, w), T = q.substring(0, A), I = m.substring(w), M = q.substring(A), O = r(L, T), D = r(I, M);
    return O.concat(D);
  }
  function a(m, q) {
    if (!m || !q || m.charAt(0) !== q.charAt(0))
      return 0;
    for (var w = 0, A = Math.min(m.length, q.length), L = A, T = 0; w < L; )
      m.substring(T, L) == q.substring(T, L) ? (w = L, T = w) : A = L, L = Math.floor((A - w) / 2 + w);
    return R(m.charCodeAt(L - 1)) && L--, L;
  }
  function c(m, q) {
    var w = m.length, A = q.length;
    if (w == 0 || A == 0)
      return 0;
    w > A ? m = m.substring(w - A) : w < A && (q = q.substring(0, w));
    var L = Math.min(w, A);
    if (m == q)
      return L;
    for (var T = 0, I = 1; ; ) {
      var M = m.substring(L - I), O = q.indexOf(M);
      if (O == -1)
        return T;
      I += O, (O == 0 || m.substring(L - I) == q.substring(0, I)) && (T = I, I++);
    }
  }
  function h(m, q) {
    if (!m || !q || m.slice(-1) !== q.slice(-1))
      return 0;
    for (var w = 0, A = Math.min(m.length, q.length), L = A, T = 0; w < L; )
      m.substring(m.length - L, m.length - T) == q.substring(q.length - L, q.length - T) ? (w = L, T = w) : A = L, L = Math.floor((A - w) / 2 + w);
    return j(m.charCodeAt(m.length - L)) && L--, L;
  }
  function f(m, q) {
    var w = m.length > q.length ? m : q, A = m.length > q.length ? q : m;
    if (w.length < 4 || A.length * 2 < w.length)
      return null;
    function L(Z, B, et) {
      for (var ut = Z.substring(et, et + Math.floor(Z.length / 4)), Q = -1, lt = "", ot, at, ht, dt; (Q = B.indexOf(ut, Q + 1)) !== -1; ) {
        var gt = a(
          Z.substring(et),
          B.substring(Q)
        ), wt = h(
          Z.substring(0, et),
          B.substring(0, Q)
        );
        lt.length < wt + gt && (lt = B.substring(Q - wt, Q) + B.substring(Q, Q + gt), ot = Z.substring(0, et - wt), at = Z.substring(et + gt), ht = B.substring(0, Q - wt), dt = B.substring(Q + gt));
      }
      return lt.length * 2 >= Z.length ? [
        ot,
        at,
        ht,
        dt,
        lt
      ] : null;
    }
    var T = L(
      w,
      A,
      Math.ceil(w.length / 4)
    ), I = L(
      w,
      A,
      Math.ceil(w.length / 2)
    ), M;
    if (!T && !I)
      return null;
    I ? T ? M = T[4].length > I[4].length ? T : I : M = I : M = T;
    var O, D, W, G;
    m.length > q.length ? (O = M[0], D = M[1], W = M[2], G = M[3]) : (W = M[0], G = M[1], O = M[2], D = M[3]);
    var V = M[4];
    return [O, D, W, G, V];
  }
  function g(m) {
    for (var q = !1, w = [], A = 0, L = null, T = 0, I = 0, M = 0, O = 0, D = 0; T < m.length; )
      m[T][0] == e ? (w[A++] = T, I = O, M = D, O = 0, D = 0, L = m[T][1]) : (m[T][0] == t ? O += m[T][1].length : D += m[T][1].length, L && L.length <= Math.max(I, M) && L.length <= Math.max(O, D) && (m.splice(w[A - 1], 0, [
        n,
        L
      ]), m[w[A - 1] + 1][0] = t, A--, A--, T = A > 0 ? w[A - 1] : -1, I = 0, M = 0, O = 0, D = 0, L = null, q = !0)), T++;
    for (q && N(m), v(m), T = 1; T < m.length; ) {
      if (m[T - 1][0] == n && m[T][0] == t) {
        var W = m[T - 1][1], G = m[T][1], V = c(W, G), Z = c(G, W);
        V >= Z ? (V >= W.length / 2 || V >= G.length / 2) && (m.splice(T, 0, [
          e,
          G.substring(0, V)
        ]), m[T - 1][1] = W.substring(
          0,
          W.length - V
        ), m[T + 1][1] = G.substring(V), T++) : (Z >= W.length / 2 || Z >= G.length / 2) && (m.splice(T, 0, [
          e,
          W.substring(0, Z)
        ]), m[T - 1][0] = t, m[T - 1][1] = G.substring(
          0,
          G.length - Z
        ), m[T + 1][0] = n, m[T + 1][1] = W.substring(Z), T++), T++;
      }
      T++;
    }
  }
  var d = /[^a-zA-Z0-9]/, y = /\s/, x = /[\r\n]/, E = /\n\r?\n$/, _ = /^\r?\n\r?\n/;
  function v(m) {
    function q(Z, B) {
      if (!Z || !B)
        return 6;
      var et = Z.charAt(Z.length - 1), ut = B.charAt(0), Q = et.match(d), lt = ut.match(d), ot = Q && et.match(y), at = lt && ut.match(y), ht = ot && et.match(x), dt = at && ut.match(x), gt = ht && Z.match(E), wt = dt && B.match(_);
      return gt || wt ? 5 : ht || dt ? 4 : Q && !ot && at ? 3 : ot || at ? 2 : Q || lt ? 1 : 0;
    }
    for (var w = 1; w < m.length - 1; ) {
      if (m[w - 1][0] == e && m[w + 1][0] == e) {
        var A = m[w - 1][1], L = m[w][1], T = m[w + 1][1], I = h(A, L);
        if (I) {
          var M = L.substring(L.length - I);
          A = A.substring(0, A.length - I), L = M + L.substring(0, L.length - I), T = M + T;
        }
        for (var O = A, D = L, W = T, G = q(A, L) + q(L, T); L.charAt(0) === T.charAt(0); ) {
          A += L.charAt(0), L = L.substring(1) + T.charAt(0), T = T.substring(1);
          var V = q(A, L) + q(L, T);
          V >= G && (G = V, O = A, D = L, W = T);
        }
        m[w - 1][1] != O && (O ? m[w - 1][1] = O : (m.splice(w - 1, 1), w--), m[w][1] = D, W ? m[w + 1][1] = W : (m.splice(w + 1, 1), w--));
      }
      w++;
    }
  }
  function N(m, q) {
    m.push([e, ""]);
    for (var w = 0, A = 0, L = 0, T = "", I = "", M; w < m.length; ) {
      if (w < m.length - 1 && !m[w][1]) {
        m.splice(w, 1);
        continue;
      }
      switch (m[w][0]) {
        case t:
          L++, I += m[w][1], w++;
          break;
        case n:
          A++, T += m[w][1], w++;
          break;
        case e:
          var O = w - L - A - 1;
          if (q) {
            if (O >= 0 && J(m[O][1])) {
              var D = m[O][1].slice(-1);
              if (m[O][1] = m[O][1].slice(
                0,
                -1
              ), T = D + T, I = D + I, !m[O][1]) {
                m.splice(O, 1), w--;
                var W = O - 1;
                m[W] && m[W][0] === t && (L++, I = m[W][1] + I, W--), m[W] && m[W][0] === n && (A++, T = m[W][1] + T, W--), O = W;
              }
            }
            if (U(m[w][1])) {
              var D = m[w][1].charAt(0);
              m[w][1] = m[w][1].slice(1), T += D, I += D;
            }
          }
          if (w < m.length - 1 && !m[w][1]) {
            m.splice(w, 1);
            break;
          }
          if (T.length > 0 || I.length > 0) {
            T.length > 0 && I.length > 0 && (M = a(I, T), M !== 0 && (O >= 0 ? m[O][1] += I.substring(
              0,
              M
            ) : (m.splice(0, 0, [
              e,
              I.substring(0, M)
            ]), w++), I = I.substring(M), T = T.substring(M)), M = h(I, T), M !== 0 && (m[w][1] = I.substring(I.length - M) + m[w][1], I = I.substring(
              0,
              I.length - M
            ), T = T.substring(
              0,
              T.length - M
            )));
            var G = L + A;
            T.length === 0 && I.length === 0 ? (m.splice(w - G, G), w = w - G) : T.length === 0 ? (m.splice(w - G, G, [t, I]), w = w - G + 1) : I.length === 0 ? (m.splice(w - G, G, [n, T]), w = w - G + 1) : (m.splice(
              w - G,
              G,
              [n, T],
              [t, I]
            ), w = w - G + 2);
          }
          w !== 0 && m[w - 1][0] === e ? (m[w - 1][1] += m[w][1], m.splice(w, 1)) : w++, L = 0, A = 0, T = "", I = "";
          break;
      }
    }
    m[m.length - 1][1] === "" && m.pop();
    var V = !1;
    for (w = 1; w < m.length - 1; )
      m[w - 1][0] === e && m[w + 1][0] === e && (m[w][1].substring(
        m[w][1].length - m[w - 1][1].length
      ) === m[w - 1][1] ? (m[w][1] = m[w - 1][1] + m[w][1].substring(
        0,
        m[w][1].length - m[w - 1][1].length
      ), m[w + 1][1] = m[w - 1][1] + m[w + 1][1], m.splice(w - 1, 1), V = !0) : m[w][1].substring(0, m[w + 1][1].length) == m[w + 1][1] && (m[w - 1][1] += m[w + 1][1], m[w][1] = m[w][1].substring(m[w + 1][1].length) + m[w + 1][1], m.splice(w + 1, 1), V = !0)), w++;
    V && N(m, q);
  }
  function R(m) {
    return m >= 55296 && m <= 56319;
  }
  function j(m) {
    return m >= 56320 && m <= 57343;
  }
  function U(m) {
    return j(m.charCodeAt(0));
  }
  function J(m) {
    return R(m.charCodeAt(m.length - 1));
  }
  function tt(m) {
    for (var q = [], w = 0; w < m.length; w++)
      m[w][1].length > 0 && q.push(m[w]);
    return q;
  }
  function st(m, q, w, A) {
    return J(m) || U(A) ? null : tt([
      [e, m],
      [n, q],
      [t, w],
      [e, A]
    ]);
  }
  function Y(m, q, w) {
    var A = typeof w == "number" ? { index: w, length: 0 } : w.oldRange, L = typeof w == "number" ? null : w.newRange, T = m.length, I = q.length;
    if (A.length === 0 && (L === null || L.length === 0)) {
      var M = A.index, O = m.slice(0, M), D = m.slice(M), W = L ? L.index : null;
      t: {
        var G = M + I - T;
        if (W !== null && W !== G || G < 0 || G > I)
          break t;
        var V = q.slice(0, G), Z = q.slice(G);
        if (Z !== D)
          break t;
        var B = Math.min(M, G), et = O.slice(0, B), ut = V.slice(0, B);
        if (et !== ut)
          break t;
        var Q = O.slice(B), lt = V.slice(B);
        return st(et, Q, lt, D);
      }
      t: {
        if (W !== null && W !== M)
          break t;
        var ot = M, V = q.slice(0, ot), Z = q.slice(ot);
        if (V !== O)
          break t;
        var at = Math.min(T - ot, I - ot), ht = D.slice(D.length - at), dt = Z.slice(Z.length - at);
        if (ht !== dt)
          break t;
        var Q = D.slice(0, D.length - at), lt = Z.slice(0, Z.length - at);
        return st(O, Q, lt, ht);
      }
    }
    if (A.length > 0 && L && L.length === 0)
      t: {
        var et = m.slice(0, A.index), ht = m.slice(A.index + A.length), B = et.length, at = ht.length;
        if (I < B + at)
          break t;
        var ut = q.slice(0, B), dt = q.slice(I - at);
        if (et !== ut || ht !== dt)
          break t;
        var Q = m.slice(B, T - at), lt = q.slice(B, I - at);
        return st(et, Q, lt, ht);
      }
    return null;
  }
  function rt(m, q, w, A) {
    return r(m, q, w, A, !0);
  }
  return rt.INSERT = t, rt.DELETE = n, rt.EQUAL = e, Us = rt, Us;
}
var Mr = { exports: {} };
Mr.exports;
var So;
function Pl() {
  return So || (So = 1, (function(n, t) {
    var e = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", c = "[object Date]", h = "[object Error]", f = "[object Function]", g = "[object GeneratorFunction]", d = "[object Map]", y = "[object Number]", x = "[object Object]", E = "[object Promise]", _ = "[object RegExp]", v = "[object Set]", N = "[object String]", R = "[object Symbol]", j = "[object WeakMap]", U = "[object ArrayBuffer]", J = "[object DataView]", tt = "[object Float32Array]", st = "[object Float64Array]", Y = "[object Int8Array]", rt = "[object Int16Array]", m = "[object Int32Array]", q = "[object Uint8Array]", w = "[object Uint8ClampedArray]", A = "[object Uint16Array]", L = "[object Uint32Array]", T = /[\\^$.*+?()[\]{}|]/g, I = /\w*$/, M = /^\[object .+?Constructor\]$/, O = /^(?:0|[1-9]\d*)$/, D = {};
    D[i] = D[o] = D[U] = D[J] = D[a] = D[c] = D[tt] = D[st] = D[Y] = D[rt] = D[m] = D[d] = D[y] = D[x] = D[_] = D[v] = D[N] = D[R] = D[q] = D[w] = D[A] = D[L] = !0, D[h] = D[f] = D[j] = !1;
    var W = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, G = typeof self == "object" && self && self.Object === Object && self, V = W || G || Function("return this")(), Z = t && !t.nodeType && t, B = Z && !0 && n && !n.nodeType && n, et = B && B.exports === Z;
    function ut(l, u) {
      return l.set(u[0], u[1]), l;
    }
    function Q(l, u) {
      return l.add(u), l;
    }
    function lt(l, u) {
      for (var p = -1, S = l ? l.length : 0; ++p < S && u(l[p], p, l) !== !1; )
        ;
      return l;
    }
    function ot(l, u) {
      for (var p = -1, S = u.length, X = l.length; ++p < S; )
        l[X + p] = u[p];
      return l;
    }
    function at(l, u, p, S) {
      for (var X = -1, K = l ? l.length : 0; ++X < K; )
        p = u(p, l[X], X, l);
      return p;
    }
    function ht(l, u) {
      for (var p = -1, S = Array(l); ++p < l; )
        S[p] = u(p);
      return S;
    }
    function dt(l, u) {
      return l?.[u];
    }
    function gt(l) {
      var u = !1;
      if (l != null && typeof l.toString != "function")
        try {
          u = !!(l + "");
        } catch {
        }
      return u;
    }
    function wt(l) {
      var u = -1, p = Array(l.size);
      return l.forEach(function(S, X) {
        p[++u] = [X, S];
      }), p;
    }
    function br(l, u) {
      return function(p) {
        return l(u(p));
      };
    }
    function tn(l) {
      var u = -1, p = Array(l.size);
      return l.forEach(function(S) {
        p[++u] = S;
      }), p;
    }
    var Zn = Array.prototype, Yn = Function.prototype, Ge = Object.prototype, yr = V["__core-js_shared__"], en = (function() {
      var l = /[^.]+$/.exec(yr && yr.keys && yr.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), rn = Yn.toString, Qt = Ge.hasOwnProperty, We = Ge.toString, Xn = RegExp(
      "^" + rn.call(Qt).replace(T, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), Le = et ? V.Buffer : void 0, Ze = V.Symbol, vr = V.Uint8Array, Rt = br(Object.getPrototypeOf, Object), nn = Object.create, sn = Ge.propertyIsEnumerable, Qn = Zn.splice, xr = Object.getOwnPropertySymbols, Ye = Le ? Le.isBuffer : void 0, on = br(Object.keys, Object), Xe = Ht(V, "DataView"), qe = Ht(V, "Map"), Ft = Ht(V, "Promise"), Qe = Ht(V, "Set"), wr = Ht(V, "WeakMap"), Oe = Ht(Object, "create"), Nr = St(Xe), ke = St(qe), Er = St(Ft), Ar = St(Qe), Tr = St(wr), ye = Ze ? Ze.prototype : void 0, ln = ye ? ye.valueOf : void 0;
    function ae(l) {
      var u = -1, p = l ? l.length : 0;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function Jn() {
      this.__data__ = Oe ? Oe(null) : {};
    }
    function ts(l) {
      return this.has(l) && delete this.__data__[l];
    }
    function es(l) {
      var u = this.__data__;
      if (Oe) {
        var p = u[l];
        return p === r ? void 0 : p;
      }
      return Qt.call(u, l) ? u[l] : void 0;
    }
    function an(l) {
      var u = this.__data__;
      return Oe ? u[l] !== void 0 : Qt.call(u, l);
    }
    function Sr(l, u) {
      var p = this.__data__;
      return p[l] = Oe && u === void 0 ? r : u, this;
    }
    ae.prototype.clear = Jn, ae.prototype.delete = ts, ae.prototype.get = es, ae.prototype.has = an, ae.prototype.set = Sr;
    function yt(l) {
      var u = -1, p = l ? l.length : 0;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function rs() {
      this.__data__ = [];
    }
    function ns(l) {
      var u = this.__data__, p = tr(u, l);
      if (p < 0)
        return !1;
      var S = u.length - 1;
      return p == S ? u.pop() : Qn.call(u, p, 1), !0;
    }
    function ss(l) {
      var u = this.__data__, p = tr(u, l);
      return p < 0 ? void 0 : u[p][1];
    }
    function is(l) {
      return tr(this.__data__, l) > -1;
    }
    function os(l, u) {
      var p = this.__data__, S = tr(p, l);
      return S < 0 ? p.push([l, u]) : p[S][1] = u, this;
    }
    yt.prototype.clear = rs, yt.prototype.delete = ns, yt.prototype.get = ss, yt.prototype.has = is, yt.prototype.set = os;
    function Nt(l) {
      var u = -1, p = l ? l.length : 0;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function ls() {
      this.__data__ = {
        hash: new ae(),
        map: new (qe || yt)(),
        string: new ae()
      };
    }
    function as(l) {
      return Re(this, l).delete(l);
    }
    function cs(l) {
      return Re(this, l).get(l);
    }
    function us(l) {
      return Re(this, l).has(l);
    }
    function hs(l, u) {
      return Re(this, l).set(l, u), this;
    }
    Nt.prototype.clear = ls, Nt.prototype.delete = as, Nt.prototype.get = cs, Nt.prototype.has = us, Nt.prototype.set = hs;
    function qt(l) {
      this.__data__ = new yt(l);
    }
    function ds() {
      this.__data__ = new yt();
    }
    function fs(l) {
      return this.__data__.delete(l);
    }
    function ps(l) {
      return this.__data__.get(l);
    }
    function gs(l) {
      return this.__data__.has(l);
    }
    function ms(l, u) {
      var p = this.__data__;
      if (p instanceof yt) {
        var S = p.__data__;
        if (!qe || S.length < e - 1)
          return S.push([l, u]), this;
        p = this.__data__ = new Nt(S);
      }
      return p.set(l, u), this;
    }
    qt.prototype.clear = ds, qt.prototype.delete = fs, qt.prototype.get = ps, qt.prototype.has = gs, qt.prototype.set = ms;
    function Je(l, u) {
      var p = qr(l) || rr(l) ? ht(l.length, String) : [], S = p.length, X = !!S;
      for (var K in l)
        Qt.call(l, K) && !(X && (K == "length" || qs(K, S))) && p.push(K);
      return p;
    }
    function cn(l, u, p) {
      var S = l[u];
      (!(Qt.call(l, u) && pn(S, p)) || p === void 0 && !(u in l)) && (l[u] = p);
    }
    function tr(l, u) {
      for (var p = l.length; p--; )
        if (pn(l[p][0], u))
          return p;
      return -1;
    }
    function Jt(l, u) {
      return l && Lr(u, kr(u), l);
    }
    function _r(l, u, p, S, X, K, it) {
      var nt;
      if (S && (nt = K ? S(l, X, K, it) : S(l)), nt !== void 0)
        return nt;
      if (!ee(l))
        return l;
      var mt = qr(l);
      if (mt) {
        if (nt = Cs(l), !u)
          return Ts(l, nt);
      } else {
        var ct = ue(l), Et = ct == f || ct == g;
        if (gn(l))
          return er(l, u);
        if (ct == x || ct == i || Et && !K) {
          if (gt(l))
            return K ? l : {};
          if (nt = te(Et ? {} : l), !u)
            return Ss(l, Jt(nt, l));
        } else {
          if (!D[ct])
            return K ? l : {};
          nt = Ls(l, ct, _r, u);
        }
      }
      it || (it = new qt());
      var Ot = it.get(l);
      if (Ot)
        return Ot;
      if (it.set(l, nt), !mt)
        var bt = p ? _s(l) : kr(l);
      return lt(bt || l, function(At, vt) {
        bt && (vt = At, At = l[vt]), cn(nt, vt, _r(At, u, p, S, vt, l, it));
      }), nt;
    }
    function bs(l) {
      return ee(l) ? nn(l) : {};
    }
    function ys(l, u, p) {
      var S = u(l);
      return qr(l) ? S : ot(S, p(l));
    }
    function vs(l) {
      return We.call(l);
    }
    function xs(l) {
      if (!ee(l) || ks(l))
        return !1;
      var u = Or(l) || gt(l) ? Xn : M;
      return u.test(St(l));
    }
    function ws(l) {
      if (!dn(l))
        return on(l);
      var u = [];
      for (var p in Object(l))
        Qt.call(l, p) && p != "constructor" && u.push(p);
      return u;
    }
    function er(l, u) {
      if (u)
        return l.slice();
      var p = new l.constructor(l.length);
      return l.copy(p), p;
    }
    function Cr(l) {
      var u = new l.constructor(l.byteLength);
      return new vr(u).set(new vr(l)), u;
    }
    function Ie(l, u) {
      var p = u ? Cr(l.buffer) : l.buffer;
      return new l.constructor(p, l.byteOffset, l.byteLength);
    }
    function un(l, u, p) {
      var S = u ? p(wt(l), !0) : wt(l);
      return at(S, ut, new l.constructor());
    }
    function hn(l) {
      var u = new l.constructor(l.source, I.exec(l));
      return u.lastIndex = l.lastIndex, u;
    }
    function Ns(l, u, p) {
      var S = u ? p(tn(l), !0) : tn(l);
      return at(S, Q, new l.constructor());
    }
    function Es(l) {
      return ln ? Object(ln.call(l)) : {};
    }
    function As(l, u) {
      var p = u ? Cr(l.buffer) : l.buffer;
      return new l.constructor(p, l.byteOffset, l.length);
    }
    function Ts(l, u) {
      var p = -1, S = l.length;
      for (u || (u = Array(S)); ++p < S; )
        u[p] = l[p];
      return u;
    }
    function Lr(l, u, p, S) {
      p || (p = {});
      for (var X = -1, K = u.length; ++X < K; ) {
        var it = u[X], nt = void 0;
        cn(p, it, nt === void 0 ? l[it] : nt);
      }
      return p;
    }
    function Ss(l, u) {
      return Lr(l, ce(l), u);
    }
    function _s(l) {
      return ys(l, kr, ce);
    }
    function Re(l, u) {
      var p = l.__data__;
      return Os(u) ? p[typeof u == "string" ? "string" : "hash"] : p.map;
    }
    function Ht(l, u) {
      var p = dt(l, u);
      return xs(p) ? p : void 0;
    }
    var ce = xr ? br(xr, Object) : Rs, ue = vs;
    (Xe && ue(new Xe(new ArrayBuffer(1))) != J || qe && ue(new qe()) != d || Ft && ue(Ft.resolve()) != E || Qe && ue(new Qe()) != v || wr && ue(new wr()) != j) && (ue = function(l) {
      var u = We.call(l), p = u == x ? l.constructor : void 0, S = p ? St(p) : void 0;
      if (S)
        switch (S) {
          case Nr:
            return J;
          case ke:
            return d;
          case Er:
            return E;
          case Ar:
            return v;
          case Tr:
            return j;
        }
      return u;
    });
    function Cs(l) {
      var u = l.length, p = l.constructor(u);
      return u && typeof l[0] == "string" && Qt.call(l, "index") && (p.index = l.index, p.input = l.input), p;
    }
    function te(l) {
      return typeof l.constructor == "function" && !dn(l) ? bs(Rt(l)) : {};
    }
    function Ls(l, u, p, S) {
      var X = l.constructor;
      switch (u) {
        case U:
          return Cr(l);
        case a:
        case c:
          return new X(+l);
        case J:
          return Ie(l, S);
        case tt:
        case st:
        case Y:
        case rt:
        case m:
        case q:
        case w:
        case A:
        case L:
          return As(l, S);
        case d:
          return un(l, S, p);
        case y:
        case N:
          return new X(l);
        case _:
          return hn(l);
        case v:
          return Ns(l, S, p);
        case R:
          return Es(l);
      }
    }
    function qs(l, u) {
      return u = u ?? s, !!u && (typeof l == "number" || O.test(l)) && l > -1 && l % 1 == 0 && l < u;
    }
    function Os(l) {
      var u = typeof l;
      return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
    }
    function ks(l) {
      return !!en && en in l;
    }
    function dn(l) {
      var u = l && l.constructor, p = typeof u == "function" && u.prototype || Ge;
      return l === p;
    }
    function St(l) {
      if (l != null) {
        try {
          return rn.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function fn(l) {
      return _r(l, !0, !0);
    }
    function pn(l, u) {
      return l === u || l !== l && u !== u;
    }
    function rr(l) {
      return Is(l) && Qt.call(l, "callee") && (!sn.call(l, "callee") || We.call(l) == i);
    }
    var qr = Array.isArray;
    function nr(l) {
      return l != null && mn(l.length) && !Or(l);
    }
    function Is(l) {
      return bn(l) && nr(l);
    }
    var gn = Ye || Ms;
    function Or(l) {
      var u = ee(l) ? We.call(l) : "";
      return u == f || u == g;
    }
    function mn(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= s;
    }
    function ee(l) {
      var u = typeof l;
      return !!l && (u == "object" || u == "function");
    }
    function bn(l) {
      return !!l && typeof l == "object";
    }
    function kr(l) {
      return nr(l) ? Je(l) : ws(l);
    }
    function Rs() {
      return [];
    }
    function Ms() {
      return !1;
    }
    n.exports = fn;
  })(Mr, Mr.exports)), Mr.exports;
}
var Dr = { exports: {} };
Dr.exports;
var _o;
function Ul() {
  return _o || (_o = 1, (function(n, t) {
    var e = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", g = "[object Date]", d = "[object Error]", y = "[object Function]", x = "[object GeneratorFunction]", E = "[object Map]", _ = "[object Number]", v = "[object Null]", N = "[object Object]", R = "[object Promise]", j = "[object Proxy]", U = "[object RegExp]", J = "[object Set]", tt = "[object String]", st = "[object Symbol]", Y = "[object Undefined]", rt = "[object WeakMap]", m = "[object ArrayBuffer]", q = "[object DataView]", w = "[object Float32Array]", A = "[object Float64Array]", L = "[object Int8Array]", T = "[object Int16Array]", I = "[object Int32Array]", M = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", W = "[object Uint32Array]", G = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, B = {};
    B[w] = B[A] = B[L] = B[T] = B[I] = B[M] = B[O] = B[D] = B[W] = !0, B[a] = B[c] = B[m] = B[f] = B[q] = B[g] = B[d] = B[y] = B[E] = B[_] = B[N] = B[U] = B[J] = B[tt] = B[rt] = !1;
    var et = typeof Ne == "object" && Ne && Ne.Object === Object && Ne, ut = typeof self == "object" && self && self.Object === Object && self, Q = et || ut || Function("return this")(), lt = t && !t.nodeType && t, ot = lt && !0 && n && !n.nodeType && n, at = ot && ot.exports === lt, ht = at && et.process, dt = (function() {
      try {
        return ht && ht.binding && ht.binding("util");
      } catch {
      }
    })(), gt = dt && dt.isTypedArray;
    function wt(l, u) {
      for (var p = -1, S = l == null ? 0 : l.length, X = 0, K = []; ++p < S; ) {
        var it = l[p];
        u(it, p, l) && (K[X++] = it);
      }
      return K;
    }
    function br(l, u) {
      for (var p = -1, S = u.length, X = l.length; ++p < S; )
        l[X + p] = u[p];
      return l;
    }
    function tn(l, u) {
      for (var p = -1, S = l == null ? 0 : l.length; ++p < S; )
        if (u(l[p], p, l))
          return !0;
      return !1;
    }
    function Zn(l, u) {
      for (var p = -1, S = Array(l); ++p < l; )
        S[p] = u(p);
      return S;
    }
    function Yn(l) {
      return function(u) {
        return l(u);
      };
    }
    function Ge(l, u) {
      return l.has(u);
    }
    function yr(l, u) {
      return l?.[u];
    }
    function en(l) {
      var u = -1, p = Array(l.size);
      return l.forEach(function(S, X) {
        p[++u] = [X, S];
      }), p;
    }
    function rn(l, u) {
      return function(p) {
        return l(u(p));
      };
    }
    function Qt(l) {
      var u = -1, p = Array(l.size);
      return l.forEach(function(S) {
        p[++u] = S;
      }), p;
    }
    var We = Array.prototype, Xn = Function.prototype, Le = Object.prototype, Ze = Q["__core-js_shared__"], vr = Xn.toString, Rt = Le.hasOwnProperty, nn = (function() {
      var l = /[^.]+$/.exec(Ze && Ze.keys && Ze.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), sn = Le.toString, Qn = RegExp(
      "^" + vr.call(Rt).replace(G, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), xr = at ? Q.Buffer : void 0, Ye = Q.Symbol, on = Q.Uint8Array, Xe = Le.propertyIsEnumerable, qe = We.splice, Ft = Ye ? Ye.toStringTag : void 0, Qe = Object.getOwnPropertySymbols, wr = xr ? xr.isBuffer : void 0, Oe = rn(Object.keys, Object), Nr = ce(Q, "DataView"), ke = ce(Q, "Map"), Er = ce(Q, "Promise"), Ar = ce(Q, "Set"), Tr = ce(Q, "WeakMap"), ye = ce(Object, "create"), ln = St(Nr), ae = St(ke), Jn = St(Er), ts = St(Ar), es = St(Tr), an = Ye ? Ye.prototype : void 0, Sr = an ? an.valueOf : void 0;
    function yt(l) {
      var u = -1, p = l == null ? 0 : l.length;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function rs() {
      this.__data__ = ye ? ye(null) : {}, this.size = 0;
    }
    function ns(l) {
      var u = this.has(l) && delete this.__data__[l];
      return this.size -= u ? 1 : 0, u;
    }
    function ss(l) {
      var u = this.__data__;
      if (ye) {
        var p = u[l];
        return p === r ? void 0 : p;
      }
      return Rt.call(u, l) ? u[l] : void 0;
    }
    function is(l) {
      var u = this.__data__;
      return ye ? u[l] !== void 0 : Rt.call(u, l);
    }
    function os(l, u) {
      var p = this.__data__;
      return this.size += this.has(l) ? 0 : 1, p[l] = ye && u === void 0 ? r : u, this;
    }
    yt.prototype.clear = rs, yt.prototype.delete = ns, yt.prototype.get = ss, yt.prototype.has = is, yt.prototype.set = os;
    function Nt(l) {
      var u = -1, p = l == null ? 0 : l.length;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function ls() {
      this.__data__ = [], this.size = 0;
    }
    function as(l) {
      var u = this.__data__, p = er(u, l);
      if (p < 0)
        return !1;
      var S = u.length - 1;
      return p == S ? u.pop() : qe.call(u, p, 1), --this.size, !0;
    }
    function cs(l) {
      var u = this.__data__, p = er(u, l);
      return p < 0 ? void 0 : u[p][1];
    }
    function us(l) {
      return er(this.__data__, l) > -1;
    }
    function hs(l, u) {
      var p = this.__data__, S = er(p, l);
      return S < 0 ? (++this.size, p.push([l, u])) : p[S][1] = u, this;
    }
    Nt.prototype.clear = ls, Nt.prototype.delete = as, Nt.prototype.get = cs, Nt.prototype.has = us, Nt.prototype.set = hs;
    function qt(l) {
      var u = -1, p = l == null ? 0 : l.length;
      for (this.clear(); ++u < p; ) {
        var S = l[u];
        this.set(S[0], S[1]);
      }
    }
    function ds() {
      this.size = 0, this.__data__ = {
        hash: new yt(),
        map: new (ke || Nt)(),
        string: new yt()
      };
    }
    function fs(l) {
      var u = Ht(this, l).delete(l);
      return this.size -= u ? 1 : 0, u;
    }
    function ps(l) {
      return Ht(this, l).get(l);
    }
    function gs(l) {
      return Ht(this, l).has(l);
    }
    function ms(l, u) {
      var p = Ht(this, l), S = p.size;
      return p.set(l, u), this.size += p.size == S ? 0 : 1, this;
    }
    qt.prototype.clear = ds, qt.prototype.delete = fs, qt.prototype.get = ps, qt.prototype.has = gs, qt.prototype.set = ms;
    function Je(l) {
      var u = -1, p = l == null ? 0 : l.length;
      for (this.__data__ = new qt(); ++u < p; )
        this.add(l[u]);
    }
    function cn(l) {
      return this.__data__.set(l, r), this;
    }
    function tr(l) {
      return this.__data__.has(l);
    }
    Je.prototype.add = Je.prototype.push = cn, Je.prototype.has = tr;
    function Jt(l) {
      var u = this.__data__ = new Nt(l);
      this.size = u.size;
    }
    function _r() {
      this.__data__ = new Nt(), this.size = 0;
    }
    function bs(l) {
      var u = this.__data__, p = u.delete(l);
      return this.size = u.size, p;
    }
    function ys(l) {
      return this.__data__.get(l);
    }
    function vs(l) {
      return this.__data__.has(l);
    }
    function xs(l, u) {
      var p = this.__data__;
      if (p instanceof Nt) {
        var S = p.__data__;
        if (!ke || S.length < e - 1)
          return S.push([l, u]), this.size = ++p.size, this;
        p = this.__data__ = new qt(S);
      }
      return p.set(l, u), this.size = p.size, this;
    }
    Jt.prototype.clear = _r, Jt.prototype.delete = bs, Jt.prototype.get = ys, Jt.prototype.has = vs, Jt.prototype.set = xs;
    function ws(l, u) {
      var p = rr(l), S = !p && pn(l), X = !p && !S && nr(l), K = !p && !S && !X && bn(l), it = p || S || X || K, nt = it ? Zn(l.length, String) : [], mt = nt.length;
      for (var ct in l)
        Rt.call(l, ct) && !(it && // Safari 9 has enumerable `arguments.length` in strict mode.
        (ct == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        X && (ct == "offset" || ct == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        K && (ct == "buffer" || ct == "byteLength" || ct == "byteOffset") || // Skip index properties.
        Ls(ct, mt))) && nt.push(ct);
      return nt;
    }
    function er(l, u) {
      for (var p = l.length; p--; )
        if (fn(l[p][0], u))
          return p;
      return -1;
    }
    function Cr(l, u, p) {
      var S = u(l);
      return rr(l) ? S : br(S, p(l));
    }
    function Ie(l) {
      return l == null ? l === void 0 ? Y : v : Ft && Ft in Object(l) ? ue(l) : dn(l);
    }
    function un(l) {
      return ee(l) && Ie(l) == a;
    }
    function hn(l, u, p, S, X) {
      return l === u ? !0 : l == null || u == null || !ee(l) && !ee(u) ? l !== l && u !== u : Ns(l, u, p, S, hn, X);
    }
    function Ns(l, u, p, S, X, K) {
      var it = rr(l), nt = rr(u), mt = it ? c : te(l), ct = nt ? c : te(u);
      mt = mt == a ? N : mt, ct = ct == a ? N : ct;
      var Et = mt == N, Ot = ct == N, bt = mt == ct;
      if (bt && nr(l)) {
        if (!nr(u))
          return !1;
        it = !0, Et = !1;
      }
      if (bt && !Et)
        return K || (K = new Jt()), it || bn(l) ? Lr(l, u, p, S, X, K) : Ss(l, u, mt, p, S, X, K);
      if (!(p & s)) {
        var At = Et && Rt.call(l, "__wrapped__"), vt = Ot && Rt.call(u, "__wrapped__");
        if (At || vt) {
          var ve = At ? l.value() : l, he = vt ? u.value() : u;
          return K || (K = new Jt()), X(ve, he, p, S, K);
        }
      }
      return bt ? (K || (K = new Jt()), _s(l, u, p, S, X, K)) : !1;
    }
    function Es(l) {
      if (!mn(l) || Os(l))
        return !1;
      var u = gn(l) ? Qn : V;
      return u.test(St(l));
    }
    function As(l) {
      return ee(l) && Or(l.length) && !!B[Ie(l)];
    }
    function Ts(l) {
      if (!ks(l))
        return Oe(l);
      var u = [];
      for (var p in Object(l))
        Rt.call(l, p) && p != "constructor" && u.push(p);
      return u;
    }
    function Lr(l, u, p, S, X, K) {
      var it = p & s, nt = l.length, mt = u.length;
      if (nt != mt && !(it && mt > nt))
        return !1;
      var ct = K.get(l);
      if (ct && K.get(u))
        return ct == u;
      var Et = -1, Ot = !0, bt = p & i ? new Je() : void 0;
      for (K.set(l, u), K.set(u, l); ++Et < nt; ) {
        var At = l[Et], vt = u[Et];
        if (S)
          var ve = it ? S(vt, At, Et, u, l, K) : S(At, vt, Et, l, u, K);
        if (ve !== void 0) {
          if (ve)
            continue;
          Ot = !1;
          break;
        }
        if (bt) {
          if (!tn(u, function(he, Me) {
            if (!Ge(bt, Me) && (At === he || X(At, he, p, S, K)))
              return bt.push(Me);
          })) {
            Ot = !1;
            break;
          }
        } else if (!(At === vt || X(At, vt, p, S, K))) {
          Ot = !1;
          break;
        }
      }
      return K.delete(l), K.delete(u), Ot;
    }
    function Ss(l, u, p, S, X, K, it) {
      switch (p) {
        case q:
          if (l.byteLength != u.byteLength || l.byteOffset != u.byteOffset)
            return !1;
          l = l.buffer, u = u.buffer;
        case m:
          return !(l.byteLength != u.byteLength || !K(new on(l), new on(u)));
        case f:
        case g:
        case _:
          return fn(+l, +u);
        case d:
          return l.name == u.name && l.message == u.message;
        case U:
        case tt:
          return l == u + "";
        case E:
          var nt = en;
        case J:
          var mt = S & s;
          if (nt || (nt = Qt), l.size != u.size && !mt)
            return !1;
          var ct = it.get(l);
          if (ct)
            return ct == u;
          S |= i, it.set(l, u);
          var Et = Lr(nt(l), nt(u), S, X, K, it);
          return it.delete(l), Et;
        case st:
          if (Sr)
            return Sr.call(l) == Sr.call(u);
      }
      return !1;
    }
    function _s(l, u, p, S, X, K) {
      var it = p & s, nt = Re(l), mt = nt.length, ct = Re(u), Et = ct.length;
      if (mt != Et && !it)
        return !1;
      for (var Ot = mt; Ot--; ) {
        var bt = nt[Ot];
        if (!(it ? bt in u : Rt.call(u, bt)))
          return !1;
      }
      var At = K.get(l);
      if (At && K.get(u))
        return At == u;
      var vt = !0;
      K.set(l, u), K.set(u, l);
      for (var ve = it; ++Ot < mt; ) {
        bt = nt[Ot];
        var he = l[bt], Me = u[bt];
        if (S)
          var $i = it ? S(Me, he, bt, u, l, K) : S(he, Me, bt, l, u, K);
        if (!($i === void 0 ? he === Me || X(he, Me, p, S, K) : $i)) {
          vt = !1;
          break;
        }
        ve || (ve = bt == "constructor");
      }
      if (vt && !ve) {
        var yn = l.constructor, vn = u.constructor;
        yn != vn && "constructor" in l && "constructor" in u && !(typeof yn == "function" && yn instanceof yn && typeof vn == "function" && vn instanceof vn) && (vt = !1);
      }
      return K.delete(l), K.delete(u), vt;
    }
    function Re(l) {
      return Cr(l, kr, Cs);
    }
    function Ht(l, u) {
      var p = l.__data__;
      return qs(u) ? p[typeof u == "string" ? "string" : "hash"] : p.map;
    }
    function ce(l, u) {
      var p = yr(l, u);
      return Es(p) ? p : void 0;
    }
    function ue(l) {
      var u = Rt.call(l, Ft), p = l[Ft];
      try {
        l[Ft] = void 0;
        var S = !0;
      } catch {
      }
      var X = sn.call(l);
      return S && (u ? l[Ft] = p : delete l[Ft]), X;
    }
    var Cs = Qe ? function(l) {
      return l == null ? [] : (l = Object(l), wt(Qe(l), function(u) {
        return Xe.call(l, u);
      }));
    } : Rs, te = Ie;
    (Nr && te(new Nr(new ArrayBuffer(1))) != q || ke && te(new ke()) != E || Er && te(Er.resolve()) != R || Ar && te(new Ar()) != J || Tr && te(new Tr()) != rt) && (te = function(l) {
      var u = Ie(l), p = u == N ? l.constructor : void 0, S = p ? St(p) : "";
      if (S)
        switch (S) {
          case ln:
            return q;
          case ae:
            return E;
          case Jn:
            return R;
          case ts:
            return J;
          case es:
            return rt;
        }
      return u;
    });
    function Ls(l, u) {
      return u = u ?? o, !!u && (typeof l == "number" || Z.test(l)) && l > -1 && l % 1 == 0 && l < u;
    }
    function qs(l) {
      var u = typeof l;
      return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? l !== "__proto__" : l === null;
    }
    function Os(l) {
      return !!nn && nn in l;
    }
    function ks(l) {
      var u = l && l.constructor, p = typeof u == "function" && u.prototype || Le;
      return l === p;
    }
    function dn(l) {
      return sn.call(l);
    }
    function St(l) {
      if (l != null) {
        try {
          return vr.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function fn(l, u) {
      return l === u || l !== l && u !== u;
    }
    var pn = un(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? un : function(l) {
      return ee(l) && Rt.call(l, "callee") && !Xe.call(l, "callee");
    }, rr = Array.isArray;
    function qr(l) {
      return l != null && Or(l.length) && !gn(l);
    }
    var nr = wr || Ms;
    function Is(l, u) {
      return hn(l, u);
    }
    function gn(l) {
      if (!mn(l))
        return !1;
      var u = Ie(l);
      return u == y || u == x || u == h || u == j;
    }
    function Or(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
    }
    function mn(l) {
      var u = typeof l;
      return l != null && (u == "object" || u == "function");
    }
    function ee(l) {
      return l != null && typeof l == "object";
    }
    var bn = gt ? Yn(gt) : As;
    function kr(l) {
      return qr(l) ? ws(l) : Ts(l);
    }
    function Rs() {
      return [];
    }
    function Ms() {
      return !1;
    }
    n.exports = Is;
  })(Dr, Dr.exports)), Dr.exports;
}
var En = {}, Co;
function kf() {
  if (Co) return En;
  Co = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const n = Pl(), t = Ul();
  var e;
  return (function(r) {
    function s(c = {}, h = {}, f = !1) {
      typeof c != "object" && (c = {}), typeof h != "object" && (h = {});
      let g = n(h);
      f || (g = Object.keys(g).reduce((d, y) => (g[y] != null && (d[y] = g[y]), d), {}));
      for (const d in c)
        c[d] !== void 0 && h[d] === void 0 && (g[d] = c[d]);
      return Object.keys(g).length > 0 ? g : void 0;
    }
    r.compose = s;
    function i(c = {}, h = {}) {
      typeof c != "object" && (c = {}), typeof h != "object" && (h = {});
      const f = Object.keys(c).concat(Object.keys(h)).reduce((g, d) => (t(c[d], h[d]) || (g[d] = h[d] === void 0 ? null : h[d]), g), {});
      return Object.keys(f).length > 0 ? f : void 0;
    }
    r.diff = i;
    function o(c = {}, h = {}) {
      c = c || {};
      const f = Object.keys(h).reduce((g, d) => (h[d] !== c[d] && c[d] !== void 0 && (g[d] = h[d]), g), {});
      return Object.keys(c).reduce((g, d) => (c[d] !== h[d] && h[d] === void 0 && (g[d] = null), g), f);
    }
    r.invert = o;
    function a(c, h, f = !1) {
      if (typeof c != "object")
        return h;
      if (typeof h != "object")
        return;
      if (!f)
        return h;
      const g = Object.keys(h).reduce((d, y) => (c[y] === void 0 && (d[y] = h[y]), d), {});
      return Object.keys(g).length > 0 ? g : void 0;
    }
    r.transform = a;
  })(e || (e = {})), En.default = e, En;
}
var An = {}, Lo;
function Fl() {
  if (Lo) return An;
  Lo = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  var n;
  return (function(t) {
    function e(r) {
      return typeof r.delete == "number" ? r.delete : typeof r.retain == "number" ? r.retain : typeof r.retain == "object" && r.retain !== null ? 1 : typeof r.insert == "string" ? r.insert.length : 1;
    }
    t.length = e;
  })(n || (n = {})), An.default = n, An;
}
var Tn = {}, qo;
function If() {
  if (qo) return Tn;
  qo = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const n = Fl();
  class t {
    constructor(r) {
      this.ops = r, this.index = 0, this.offset = 0;
    }
    hasNext() {
      return this.peekLength() < 1 / 0;
    }
    next(r) {
      r || (r = 1 / 0);
      const s = this.ops[this.index];
      if (s) {
        const i = this.offset, o = n.default.length(s);
        if (r >= o - i ? (r = o - i, this.index += 1, this.offset = 0) : this.offset += r, typeof s.delete == "number")
          return { delete: r };
        {
          const a = {};
          return s.attributes && (a.attributes = s.attributes), typeof s.retain == "number" ? a.retain = r : typeof s.retain == "object" && s.retain !== null ? a.retain = s.retain : typeof s.insert == "string" ? a.insert = s.insert.substr(i, r) : a.insert = s.insert, a;
        }
      } else
        return { retain: 1 / 0 };
    }
    peek() {
      return this.ops[this.index];
    }
    peekLength() {
      return this.ops[this.index] ? n.default.length(this.ops[this.index]) - this.offset : 1 / 0;
    }
    peekType() {
      const r = this.ops[this.index];
      return r ? typeof r.delete == "number" ? "delete" : typeof r.retain == "number" || typeof r.retain == "object" && r.retain !== null ? "retain" : "insert" : "retain";
    }
    rest() {
      if (this.hasNext()) {
        if (this.offset === 0)
          return this.ops.slice(this.index);
        {
          const r = this.offset, s = this.index, i = this.next(), o = this.ops.slice(this.index);
          return this.offset = r, this.index = s, [i].concat(o);
        }
      } else return [];
    }
  }
  return Tn.default = t, Tn;
}
var Oo;
function Rf() {
  return Oo || (Oo = 1, (function(n, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.AttributeMap = t.OpIterator = t.Op = void 0;
    const e = Of(), r = Pl(), s = Ul(), i = kf();
    t.AttributeMap = i.default;
    const o = Fl();
    t.Op = o.default;
    const a = If();
    t.OpIterator = a.default;
    const c = "\0", h = (g, d) => {
      if (typeof g != "object" || g === null)
        throw new Error(`cannot retain a ${typeof g}`);
      if (typeof d != "object" || d === null)
        throw new Error(`cannot retain a ${typeof d}`);
      const y = Object.keys(g)[0];
      if (!y || y !== Object.keys(d)[0])
        throw new Error(`embed types not matched: ${y} != ${Object.keys(d)[0]}`);
      return [y, g[y], d[y]];
    };
    class f {
      constructor(d) {
        Array.isArray(d) ? this.ops = d : d != null && Array.isArray(d.ops) ? this.ops = d.ops : this.ops = [];
      }
      static registerEmbed(d, y) {
        this.handlers[d] = y;
      }
      static unregisterEmbed(d) {
        delete this.handlers[d];
      }
      static getHandler(d) {
        const y = this.handlers[d];
        if (!y)
          throw new Error(`no handlers for embed type "${d}"`);
        return y;
      }
      insert(d, y) {
        const x = {};
        return typeof d == "string" && d.length === 0 ? this : (x.insert = d, y != null && typeof y == "object" && Object.keys(y).length > 0 && (x.attributes = y), this.push(x));
      }
      delete(d) {
        return d <= 0 ? this : this.push({ delete: d });
      }
      retain(d, y) {
        if (typeof d == "number" && d <= 0)
          return this;
        const x = { retain: d };
        return y != null && typeof y == "object" && Object.keys(y).length > 0 && (x.attributes = y), this.push(x);
      }
      push(d) {
        let y = this.ops.length, x = this.ops[y - 1];
        if (d = r(d), typeof x == "object") {
          if (typeof d.delete == "number" && typeof x.delete == "number")
            return this.ops[y - 1] = { delete: x.delete + d.delete }, this;
          if (typeof x.delete == "number" && d.insert != null && (y -= 1, x = this.ops[y - 1], typeof x != "object"))
            return this.ops.unshift(d), this;
          if (s(d.attributes, x.attributes)) {
            if (typeof d.insert == "string" && typeof x.insert == "string")
              return this.ops[y - 1] = { insert: x.insert + d.insert }, typeof d.attributes == "object" && (this.ops[y - 1].attributes = d.attributes), this;
            if (typeof d.retain == "number" && typeof x.retain == "number")
              return this.ops[y - 1] = { retain: x.retain + d.retain }, typeof d.attributes == "object" && (this.ops[y - 1].attributes = d.attributes), this;
          }
        }
        return y === this.ops.length ? this.ops.push(d) : this.ops.splice(y, 0, d), this;
      }
      chop() {
        const d = this.ops[this.ops.length - 1];
        return d && typeof d.retain == "number" && !d.attributes && this.ops.pop(), this;
      }
      filter(d) {
        return this.ops.filter(d);
      }
      forEach(d) {
        this.ops.forEach(d);
      }
      map(d) {
        return this.ops.map(d);
      }
      partition(d) {
        const y = [], x = [];
        return this.forEach((E) => {
          (d(E) ? y : x).push(E);
        }), [y, x];
      }
      reduce(d, y) {
        return this.ops.reduce(d, y);
      }
      changeLength() {
        return this.reduce((d, y) => y.insert ? d + o.default.length(y) : y.delete ? d - y.delete : d, 0);
      }
      length() {
        return this.reduce((d, y) => d + o.default.length(y), 0);
      }
      slice(d = 0, y = 1 / 0) {
        const x = [], E = new a.default(this.ops);
        let _ = 0;
        for (; _ < y && E.hasNext(); ) {
          let v;
          _ < d ? v = E.next(d - _) : (v = E.next(y - _), x.push(v)), _ += o.default.length(v);
        }
        return new f(x);
      }
      compose(d) {
        const y = new a.default(this.ops), x = new a.default(d.ops), E = [], _ = x.peek();
        if (_ != null && typeof _.retain == "number" && _.attributes == null) {
          let N = _.retain;
          for (; y.peekType() === "insert" && y.peekLength() <= N; )
            N -= y.peekLength(), E.push(y.next());
          _.retain - N > 0 && x.next(_.retain - N);
        }
        const v = new f(E);
        for (; y.hasNext() || x.hasNext(); )
          if (x.peekType() === "insert")
            v.push(x.next());
          else if (y.peekType() === "delete")
            v.push(y.next());
          else {
            const N = Math.min(y.peekLength(), x.peekLength()), R = y.next(N), j = x.next(N);
            if (j.retain) {
              const U = {};
              if (typeof R.retain == "number")
                U.retain = typeof j.retain == "number" ? N : j.retain;
              else if (typeof j.retain == "number")
                R.retain == null ? U.insert = R.insert : U.retain = R.retain;
              else {
                const tt = R.retain == null ? "insert" : "retain", [st, Y, rt] = h(R[tt], j.retain), m = f.getHandler(st);
                U[tt] = {
                  [st]: m.compose(Y, rt, tt === "retain")
                };
              }
              const J = i.default.compose(R.attributes, j.attributes, typeof R.retain == "number");
              if (J && (U.attributes = J), v.push(U), !x.hasNext() && s(v.ops[v.ops.length - 1], U)) {
                const tt = new f(y.rest());
                return v.concat(tt).chop();
              }
            } else typeof j.delete == "number" && (typeof R.retain == "number" || typeof R.retain == "object" && R.retain !== null) && v.push(j);
          }
        return v.chop();
      }
      concat(d) {
        const y = new f(this.ops.slice());
        return d.ops.length > 0 && (y.push(d.ops[0]), y.ops = y.ops.concat(d.ops.slice(1))), y;
      }
      diff(d, y) {
        if (this.ops === d.ops)
          return new f();
        const x = [this, d].map((R) => R.map((j) => {
          if (j.insert != null)
            return typeof j.insert == "string" ? j.insert : c;
          const U = R === d ? "on" : "with";
          throw new Error("diff() called " + U + " non-document");
        }).join("")), E = new f(), _ = e(x[0], x[1], y, !0), v = new a.default(this.ops), N = new a.default(d.ops);
        return _.forEach((R) => {
          let j = R[1].length;
          for (; j > 0; ) {
            let U = 0;
            switch (R[0]) {
              case e.INSERT:
                U = Math.min(N.peekLength(), j), E.push(N.next(U));
                break;
              case e.DELETE:
                U = Math.min(j, v.peekLength()), v.next(U), E.delete(U);
                break;
              case e.EQUAL:
                U = Math.min(v.peekLength(), N.peekLength(), j);
                const J = v.next(U), tt = N.next(U);
                s(J.insert, tt.insert) ? E.retain(U, i.default.diff(J.attributes, tt.attributes)) : E.push(tt).delete(U);
                break;
            }
            j -= U;
          }
        }), E.chop();
      }
      eachLine(d, y = `
`) {
        const x = new a.default(this.ops);
        let E = new f(), _ = 0;
        for (; x.hasNext(); ) {
          if (x.peekType() !== "insert")
            return;
          const v = x.peek(), N = o.default.length(v) - x.peekLength(), R = typeof v.insert == "string" ? v.insert.indexOf(y, N) - N : -1;
          if (R < 0)
            E.push(x.next());
          else if (R > 0)
            E.push(x.next(R));
          else {
            if (d(E, x.next(1).attributes || {}, _) === !1)
              return;
            _ += 1, E = new f();
          }
        }
        E.length() > 0 && d(E, {}, _);
      }
      invert(d) {
        const y = new f();
        return this.reduce((x, E) => {
          if (E.insert)
            y.delete(o.default.length(E));
          else {
            if (typeof E.retain == "number" && E.attributes == null)
              return y.retain(E.retain), x + E.retain;
            if (E.delete || typeof E.retain == "number") {
              const _ = E.delete || E.retain;
              return d.slice(x, x + _).forEach((N) => {
                E.delete ? y.push(N) : E.retain && E.attributes && y.retain(o.default.length(N), i.default.invert(E.attributes, N.attributes));
              }), x + _;
            } else if (typeof E.retain == "object" && E.retain !== null) {
              const _ = d.slice(x, x + 1), v = new a.default(_.ops).next(), [N, R, j] = h(E.retain, v.insert), U = f.getHandler(N);
              return y.retain({ [N]: U.invert(R, j) }, i.default.invert(E.attributes, v.attributes)), x + 1;
            }
          }
          return x;
        }, 0), y.chop();
      }
      transform(d, y = !1) {
        if (y = !!y, typeof d == "number")
          return this.transformPosition(d, y);
        const x = d, E = new a.default(this.ops), _ = new a.default(x.ops), v = new f();
        for (; E.hasNext() || _.hasNext(); )
          if (E.peekType() === "insert" && (y || _.peekType() !== "insert"))
            v.retain(o.default.length(E.next()));
          else if (_.peekType() === "insert")
            v.push(_.next());
          else {
            const N = Math.min(E.peekLength(), _.peekLength()), R = E.next(N), j = _.next(N);
            if (R.delete)
              continue;
            if (j.delete)
              v.push(j);
            else {
              const U = R.retain, J = j.retain;
              let tt = typeof J == "object" && J !== null ? J : N;
              if (typeof U == "object" && U !== null && typeof J == "object" && J !== null) {
                const st = Object.keys(U)[0];
                if (st === Object.keys(J)[0]) {
                  const Y = f.getHandler(st);
                  Y && (tt = {
                    [st]: Y.transform(U[st], J[st], y)
                  });
                }
              }
              v.retain(tt, i.default.transform(R.attributes, j.attributes, y));
            }
          }
        return v.chop();
      }
      transformPosition(d, y = !1) {
        y = !!y;
        const x = new a.default(this.ops);
        let E = 0;
        for (; x.hasNext() && E <= d; ) {
          const _ = x.peekLength(), v = x.peekType();
          if (x.next(), v === "delete") {
            d -= Math.min(_, d - E);
            continue;
          } else v === "insert" && (E < d || !y) && (d += _);
          E += _;
        }
        return d;
      }
    }
    f.Op = o.default, f.OpIterator = a.default, f.AttributeMap = i.default, f.handlers = {}, t.default = f, n.exports = f, n.exports.default = f;
  })(Nn, Nn.exports)), Nn.exports;
}
var $t = Rf();
const F = /* @__PURE__ */ jl($t);
class Xt extends It {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
Xt.blotName = "break";
Xt.tagName = "BR";
let Zt = class extends Dn {
};
const Mf = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function zn(n) {
  return n.replace(/[&<>"']/g, (t) => Mf[t]);
}
class _t extends Ti {
  static allowedChildren = [_t, Xt, It, Zt];
  // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
  static order = [
    "cursor",
    "inline",
    // Must be lower
    "link",
    // Chrome wants <a> to be lower
    "underline",
    "strike",
    "italic",
    "bold",
    "script",
    "code"
    // Must be higher
  ];
  static compare(t, e) {
    const r = _t.order.indexOf(t), s = _t.order.indexOf(e);
    return r >= 0 || s >= 0 ? r - s : t === e ? 0 : t < e ? -1 : 1;
  }
  formatAt(t, e, r, s) {
    if (_t.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, H.BLOT)) {
      const i = this.isolate(t, e);
      s && i.wrap(r, s);
    } else
      super.formatAt(t, e, r, s);
  }
  optimize(t) {
    if (super.optimize(t), this.parent instanceof _t && _t.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const e = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(e), e.wrap(this);
    }
  }
}
const ko = 1;
class xt extends Kr {
  cache = {};
  delta() {
    return this.cache.delta == null && (this.cache.delta = Hl(this)), this.cache.delta;
  }
  deleteAt(t, e) {
    super.deleteAt(t, e), this.cache = {};
  }
  formatAt(t, e, r, s) {
    e <= 0 || (this.scroll.query(r, H.BLOCK) ? t + e === this.length() && this.format(r, s) : super.formatAt(t, Math.min(e, this.length() - t - 1), r, s), this.cache = {});
  }
  insertAt(t, e, r) {
    if (r != null) {
      super.insertAt(t, e, r), this.cache = {};
      return;
    }
    if (e.length === 0) return;
    const s = e.split(`
`), i = s.shift();
    i.length > 0 && (t < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
    let o = this;
    s.reduce((a, c) => (o = o.split(a, !0), o.insertAt(0, c), c.length), t + i.length);
  }
  insertBefore(t, e) {
    const {
      head: r
    } = this.children;
    super.insertBefore(t, e), r instanceof Xt && r.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + ko), this.cache.length;
  }
  moveChildren(t, e) {
    super.moveChildren(t, e), this.cache = {};
  }
  optimize(t) {
    super.optimize(t), this.cache = {};
  }
  path(t) {
    return super.path(t, !0);
  }
  removeChild(t) {
    super.removeChild(t), this.cache = {};
  }
  split(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (e && (t === 0 || t >= this.length() - ko)) {
      const s = this.clone();
      return t === 0 ? (this.parent.insertBefore(s, this), this) : (this.parent.insertBefore(s, this.next), s);
    }
    const r = super.split(t, e);
    return this.cache = {}, r;
  }
}
xt.blotName = "block";
xt.tagName = "P";
xt.defaultChild = Xt;
xt.allowedChildren = [Xt, _t, It, Zt];
class Bt extends It {
  attach() {
    super.attach(), this.attributes = new Fn(this.domNode);
  }
  delta() {
    return new F().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(t, e) {
    const r = this.scroll.query(t, H.BLOCK_ATTRIBUTE);
    r != null && this.attributes.attribute(r, e);
  }
  formatAt(t, e, r, s) {
    this.format(r, s);
  }
  insertAt(t, e, r) {
    if (r != null) {
      super.insertAt(t, e, r);
      return;
    }
    const s = e.split(`
`), i = s.pop(), o = s.map((c) => {
      const h = this.scroll.create(xt.blotName);
      return h.insertAt(0, c), h;
    }), a = this.split(t);
    o.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
Bt.scope = H.BLOCK_BLOT;
function Hl(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.descendants(Tt).reduce((e, r) => r.length() === 0 ? e : e.insert(r.value(), Mt(r, {}, t)), new F()).insert(`
`, Mt(n));
}
function Mt(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return n == null || ("formats" in n && typeof n.formats == "function" && (t = {
    ...t,
    ...n.formats()
  }, e && delete t["code-token"]), n.parent == null || n.parent.statics.blotName === "scroll" || n.parent.statics.scope !== n.statics.scope) ? t : Mt(n.parent, t, e);
}
class Vt extends It {
  static blotName = "cursor";
  static className = "ql-cursor";
  static tagName = "span";
  static CONTENTS = "\uFEFF";
  // Zero width no break space
  static value() {
  }
  constructor(t, e, r) {
    super(t, e), this.selection = r, this.textNode = document.createTextNode(Vt.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t, e) {
    if (this.savedLength !== 0) {
      super.format(t, e);
      return;
    }
    let r = this, s = 0;
    for (; r != null && r.statics.scope !== H.BLOCK_BLOT; )
      s += r.offset(r.parent), r = r.parent;
    r != null && (this.savedLength = Vt.CONTENTS.length, r.optimize(), r.formatAt(s, Vt.CONTENTS.length, t, e), this.savedLength = 0);
  }
  index(t, e) {
    return t === this.textNode ? 0 : super.index(t, e);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const t = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const e = this.prev instanceof Zt ? this.prev : null, r = e ? e.length() : 0, s = this.next instanceof Zt ? this.next : null, i = s ? s.text : "", {
      textNode: o
    } = this, a = o.data.split(Vt.CONTENTS).join("");
    o.data = Vt.CONTENTS;
    let c;
    if (e)
      c = e, (a || s) && (e.insertAt(e.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const h = document.createTextNode(a);
      c = this.scroll.create(h), this.parent.insertBefore(c, this);
    }
    if (this.remove(), t) {
      const h = (d, y) => e && d === e.domNode ? y : d === o ? r + y - 1 : s && d === s.domNode ? r + a.length + y : null, f = h(t.start.node, t.start.offset), g = h(t.end.node, t.end.offset);
      if (f !== null && g !== null)
        return {
          startNode: c.domNode,
          startOffset: f,
          endNode: c.domNode,
          endOffset: g
        };
    }
    return null;
  }
  update(t, e) {
    if (t.some((r) => r.type === "characterData" && r.target === this.textNode)) {
      const r = this.restore();
      r && (e.range = r);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(t) {
    super.optimize(t);
    let {
      parent: e
    } = this;
    for (; e; ) {
      if (e.domNode.tagName === "A") {
        this.savedLength = Vt.CONTENTS.length, e.isolate(this.offset(e), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      e = e.parent;
    }
  }
  value() {
    return "";
  }
}
var Fs = { exports: {} }, Io;
function Df() {
  return Io || (Io = 1, (function(n) {
    var t = Object.prototype.hasOwnProperty, e = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (e = !1));
    function s(c, h, f) {
      this.fn = c, this.context = h, this.once = f || !1;
    }
    function i(c, h, f, g, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var y = new s(f, g || c, d), x = e ? e + h : h;
      return c._events[x] ? c._events[x].fn ? c._events[x] = [c._events[x], y] : c._events[x].push(y) : (c._events[x] = y, c._eventsCount++), c;
    }
    function o(c, h) {
      --c._eventsCount === 0 ? c._events = new r() : delete c._events[h];
    }
    function a() {
      this._events = new r(), this._eventsCount = 0;
    }
    a.prototype.eventNames = function() {
      var h = [], f, g;
      if (this._eventsCount === 0) return h;
      for (g in f = this._events)
        t.call(f, g) && h.push(e ? g.slice(1) : g);
      return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(f)) : h;
    }, a.prototype.listeners = function(h) {
      var f = e ? e + h : h, g = this._events[f];
      if (!g) return [];
      if (g.fn) return [g.fn];
      for (var d = 0, y = g.length, x = new Array(y); d < y; d++)
        x[d] = g[d].fn;
      return x;
    }, a.prototype.listenerCount = function(h) {
      var f = e ? e + h : h, g = this._events[f];
      return g ? g.fn ? 1 : g.length : 0;
    }, a.prototype.emit = function(h, f, g, d, y, x) {
      var E = e ? e + h : h;
      if (!this._events[E]) return !1;
      var _ = this._events[E], v = arguments.length, N, R;
      if (_.fn) {
        switch (_.once && this.removeListener(h, _.fn, void 0, !0), v) {
          case 1:
            return _.fn.call(_.context), !0;
          case 2:
            return _.fn.call(_.context, f), !0;
          case 3:
            return _.fn.call(_.context, f, g), !0;
          case 4:
            return _.fn.call(_.context, f, g, d), !0;
          case 5:
            return _.fn.call(_.context, f, g, d, y), !0;
          case 6:
            return _.fn.call(_.context, f, g, d, y, x), !0;
        }
        for (R = 1, N = new Array(v - 1); R < v; R++)
          N[R - 1] = arguments[R];
        _.fn.apply(_.context, N);
      } else {
        var j = _.length, U;
        for (R = 0; R < j; R++)
          switch (_[R].once && this.removeListener(h, _[R].fn, void 0, !0), v) {
            case 1:
              _[R].fn.call(_[R].context);
              break;
            case 2:
              _[R].fn.call(_[R].context, f);
              break;
            case 3:
              _[R].fn.call(_[R].context, f, g);
              break;
            case 4:
              _[R].fn.call(_[R].context, f, g, d);
              break;
            default:
              if (!N) for (U = 1, N = new Array(v - 1); U < v; U++)
                N[U - 1] = arguments[U];
              _[R].fn.apply(_[R].context, N);
          }
      }
      return !0;
    }, a.prototype.on = function(h, f, g) {
      return i(this, h, f, g, !1);
    }, a.prototype.once = function(h, f, g) {
      return i(this, h, f, g, !0);
    }, a.prototype.removeListener = function(h, f, g, d) {
      var y = e ? e + h : h;
      if (!this._events[y]) return this;
      if (!f)
        return o(this, y), this;
      var x = this._events[y];
      if (x.fn)
        x.fn === f && (!d || x.once) && (!g || x.context === g) && o(this, y);
      else {
        for (var E = 0, _ = [], v = x.length; E < v; E++)
          (x[E].fn !== f || d && !x[E].once || g && x[E].context !== g) && _.push(x[E]);
        _.length ? this._events[y] = _.length === 1 ? _[0] : _ : o(this, y);
      }
      return this;
    }, a.prototype.removeAllListeners = function(h) {
      var f;
      return h ? (f = e ? e + h : h, this._events[f] && o(this, f)) : (this._events = new r(), this._eventsCount = 0), this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, n.exports = a;
  })(Fs)), Fs.exports;
}
var Bf = Df();
const $f = /* @__PURE__ */ jl(Bf), ci = /* @__PURE__ */ new WeakMap(), ui = ["error", "warn", "log", "info"];
let hi = "warn";
function zl(n) {
  if (hi && ui.indexOf(n) <= ui.indexOf(hi)) {
    for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      e[r - 1] = arguments[r];
    console[n](...e);
  }
}
function be(n) {
  return ui.reduce((t, e) => (t[e] = zl.bind(console, e, n), t), {});
}
be.level = (n) => {
  hi = n;
};
zl.level = be.level;
const Hs = be("quill:events"), jf = ["selectionchange", "mousedown", "mouseup", "click"];
jf.forEach((n) => {
  document.addEventListener(n, function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = ci.get(s);
      i && i.emitter && i.emitter.handleDOM(...e);
    });
  });
});
class P extends $f {
  static events = {
    EDITOR_CHANGE: "editor-change",
    SCROLL_BEFORE_UPDATE: "scroll-before-update",
    SCROLL_BLOT_MOUNT: "scroll-blot-mount",
    SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
    SCROLL_OPTIMIZE: "scroll-optimize",
    SCROLL_UPDATE: "scroll-update",
    SCROLL_EMBED_UPDATE: "scroll-embed-update",
    SELECTION_CHANGE: "selection-change",
    TEXT_CHANGE: "text-change",
    COMPOSITION_BEFORE_START: "composition-before-start",
    COMPOSITION_START: "composition-start",
    COMPOSITION_BEFORE_END: "composition-before-end",
    COMPOSITION_END: "composition-end"
  };
  static sources = {
    API: "api",
    SILENT: "silent",
    USER: "user"
  };
  constructor() {
    super(), this.domListeners = {}, this.on("error", Hs.error);
  }
  emit() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return Hs.log.call(Hs, ...e), super.emit(...e);
  }
  handleDOM(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
      r[s - 1] = arguments[s];
    (this.domListeners[t.type] || []).forEach((i) => {
      let {
        node: o,
        handler: a
      } = i;
      (t.target === o || o.contains(t.target)) && a(t, ...r);
    });
  }
  listenDOM(t, e, r) {
    this.domListeners[t] || (this.domListeners[t] = []), this.domListeners[t].push({
      node: e,
      handler: r
    });
  }
}
const zs = be("quill:selection");
class je {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = t, this.length = e;
  }
}
class Pf {
  constructor(t, e) {
    this.emitter = e, this.scroll = t, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new je(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, P.sources.USER), 1);
    }), this.emitter.on(P.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r = this.getNativeRange();
      r != null && r.start.node !== this.cursor.textNode && this.emitter.once(P.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(r.start.node) && this.root.contains(r.end.node) && this.setNativeRange(r.start.node, r.start.offset, r.end.node, r.end.offset);
          const o = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(o ? P.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(P.events.SCROLL_OPTIMIZE, (r, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: o,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, o, a, c), this.update(P.sources.SILENT);
      }
    }), this.update(P.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(P.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(P.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const t = this.cursor.restore();
        if (!t) return;
        setTimeout(() => {
          this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(P.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(t, e) {
    this.scroll.update();
    const r = this.getNativeRange();
    if (!(r == null || !r.native.collapsed || this.scroll.query(t, H.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(r.start.node, !1);
        if (s == null) return;
        if (s instanceof Tt) {
          const i = s.split(r.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r = this.scroll.length();
    t = Math.min(t, r - 1), e = Math.min(t + e, r - 1) - t;
    let s, [i, o] = this.scroll.leaf(t);
    if (i == null) return null;
    if (e > 0 && o === i.length()) {
      const [f] = this.scroll.leaf(t + 1);
      if (f) {
        const [g] = this.scroll.line(t), [d] = this.scroll.line(t + 1);
        g === d && (i = f, o = 0);
      }
    }
    [s, o] = i.position(o, !0);
    const a = document.createRange();
    if (e > 0)
      return a.setStart(s, o), [i, o] = this.scroll.leaf(t + e), i == null ? null : ([s, o] = i.position(o, !0), a.setEnd(s, o), a.getBoundingClientRect());
    let c = "left", h;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      o < s.data.length ? (a.setStart(s, o), a.setEnd(s, o + 1)) : (a.setStart(s, o - 1), a.setEnd(s, o), c = "right"), h = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element)) return null;
      h = i.domNode.getBoundingClientRect(), o > 0 && (c = "right");
    }
    return {
      bottom: h.top + h.height,
      height: h.height,
      left: h[c],
      right: h[c],
      top: h.top,
      width: 0
    };
  }
  getNativeRange() {
    const t = document.getSelection();
    if (t == null || t.rangeCount <= 0) return null;
    const e = t.getRangeAt(0);
    if (e == null) return null;
    const r = this.normalizeNative(e);
    return zs.info("getNativeRange", r), r;
  }
  getRange() {
    const t = this.scroll.domNode;
    if ("isConnected" in t && !t.isConnected)
      return [null, null];
    const e = this.getNativeRange();
    return e == null ? [null, null] : [this.normalizedToRange(e), e];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && Ks(this.root, document.activeElement);
  }
  normalizedToRange(t) {
    const e = [[t.start.node, t.start.offset]];
    t.native.collapsed || e.push([t.end.node, t.end.offset]);
    const r = e.map((o) => {
      const [a, c] = o, h = this.scroll.find(a, !0), f = h.offset(this.scroll);
      return c === 0 ? f : h instanceof Tt ? f + h.index(a, c) : f + h.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new je(i, s - i);
  }
  normalizeNative(t) {
    if (!Ks(this.root, t.startContainer) || !t.collapsed && !Ks(this.root, t.endContainer))
      return null;
    const e = {
      start: {
        node: t.startContainer,
        offset: t.startOffset
      },
      end: {
        node: t.endContainer,
        offset: t.endOffset
      },
      native: t
    };
    return [e.start, e.end].forEach((r) => {
      let {
        node: s,
        offset: i
      } = r;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      r.node = s, r.offset = i;
    }), e;
  }
  rangeToNative(t) {
    const e = this.scroll.length(), r = (s, i) => {
      s = Math.min(e - 1, s);
      const [o, a] = this.scroll.leaf(s);
      return o ? o.position(a, i) : [null, -1];
    };
    return [...r(t.index, !1), ...r(t.index + t.length, !0)];
  }
  setNativeRange(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (zs.info("setNativeRange", t, e, r, s), t != null && (this.root.parentNode == null || t.parentNode == null || // @ts-expect-error Fix me later
    r.parentNode == null))
      return;
    const o = document.getSelection();
    if (o != null)
      if (t != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || t !== a.startContainer || e !== a.startOffset || r !== a.endContainer || s !== a.endOffset) {
          t instanceof Element && t.tagName === "BR" && (e = Array.from(t.parentNode.childNodes).indexOf(t), t = t.parentNode), r instanceof Element && r.tagName === "BR" && (s = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          const c = document.createRange();
          c.setStart(t, e), c.setEnd(r, s), o.removeAllRanges(), o.addRange(c);
        }
      } else
        o.removeAllRanges(), this.root.blur();
  }
  setRange(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : P.sources.API;
    if (typeof e == "string" && (r = e, e = !1), zs.info("setRange", t), t != null) {
      const s = this.rangeToNative(t);
      this.setNativeRange(...s, e);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.sources.USER;
    const e = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !we(e, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [P.events.SELECTION_CHANGE, cr(this.lastRange), cr(e), t];
      this.emitter.emit(P.events.EDITOR_CHANGE, ...i), t !== P.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function Ks(n, t) {
  try {
    t.parentNode;
  } catch {
    return !1;
  }
  return n.contains(t);
}
const Uf = /^[ -~]*$/;
let Ff = class {
  constructor(t) {
    this.scroll = t, this.delta = this.getDelta();
  }
  applyDelta(t) {
    this.scroll.update();
    let e = this.scroll.length();
    this.scroll.batchStart();
    const r = Ro(t), s = new F();
    return zf(r.ops.slice()).reduce((o, a) => {
      const c = $t.Op.length(a);
      let h = a.attributes || {}, f = !1, g = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const x = a.insert;
          g = !x.endsWith(`
`) && (e <= o || !!this.scroll.descendant(Bt, o)[0]), this.scroll.insertAt(o, x);
          const [E, _] = this.scroll.line(o);
          let v = Ae({}, Mt(E));
          if (E instanceof xt) {
            const [N] = E.descendant(Tt, _);
            N && (v = Ae(v, Mt(N)));
          }
          h = $t.AttributeMap.diff(v, h) || {};
        } else if (typeof a.insert == "object") {
          const x = Object.keys(a.insert)[0];
          if (x == null) return o;
          const E = this.scroll.query(x, H.INLINE) != null;
          if (E)
            (e <= o || this.scroll.descendant(Bt, o)[0]) && (g = !0);
          else if (o > 0) {
            const [_, v] = this.scroll.descendant(Tt, o - 1);
            _ instanceof Zt ? _.value()[v] !== `
` && (f = !0) : _ instanceof It && _.statics.scope === H.INLINE_BLOT && (f = !0);
          }
          if (this.scroll.insertAt(o, x, a.insert[x]), E) {
            const [_] = this.scroll.descendant(Tt, o);
            if (_) {
              const v = Ae({}, Mt(_));
              h = $t.AttributeMap.diff(v, h) || {};
            }
          }
        }
        e += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const x = Object.keys(a.retain)[0];
        if (x == null) return o;
        this.scroll.updateEmbedAt(o, x, a.retain[x]);
      }
      Object.keys(h).forEach((x) => {
        this.scroll.formatAt(o, c, x, h[x]);
      });
      const d = f ? 1 : 0, y = g ? 1 : 0;
      return e += d + y, s.retain(d), s.delete(y), o + c + d + y;
    }, 0), s.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + $t.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r);
  }
  deleteText(t, e) {
    return this.scroll.deleteAt(t, e), this.update(new F().retain(t).delete(e));
  }
  formatLine(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r).forEach((i) => {
      this.scroll.lines(t, Math.max(e, 1)).forEach((o) => {
        o.format(i, r[i]);
      });
    }), this.scroll.optimize();
    const s = new F().retain(t).retain(e, cr(r));
    return this.update(s);
  }
  formatText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(t, e, i, r[i]);
    });
    const s = new F().retain(t).retain(e, cr(r));
    return this.update(s);
  }
  getContents(t, e) {
    return this.delta.slice(t, t + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t, e) => t.concat(e.delta()), new F());
  }
  getFormat(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = [], s = [];
    e === 0 ? this.scroll.path(t).forEach((a) => {
      const [c] = a;
      c instanceof xt ? r.push(c) : c instanceof Tt && s.push(c);
    }) : (r = this.scroll.lines(t, e), s = this.scroll.descendants(Tt, t, e));
    const [i, o] = [r, s].map((a) => {
      const c = a.shift();
      if (c == null) return {};
      let h = Mt(c);
      for (; Object.keys(h).length > 0; ) {
        const f = a.shift();
        if (f == null) return h;
        h = Hf(Mt(f), h);
      }
      return h;
    });
    return {
      ...i,
      ...o
    };
  }
  getHTML(t, e) {
    const [r, s] = this.scroll.line(t);
    if (r) {
      const i = r.length();
      return r.length() >= s + e && !(s === 0 && e === i) ? Vr(r, s, e, !0) : Vr(this.scroll, t, e, !0);
    }
    return "";
  }
  getText(t, e) {
    return this.getContents(t, e).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(t, e) {
    const r = Ro(e), s = new F().retain(t).concat(r);
    return this.scroll.insertContents(t, r), this.update(s);
  }
  insertEmbed(t, e, r) {
    return this.scroll.insertAt(t, e, r), this.update(new F().retain(t).insert({
      [e]: r
    }));
  }
  insertText(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e = e.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(t, e), Object.keys(r).forEach((s) => {
      this.scroll.formatAt(t, e.length, s, r[s]);
    }), this.update(new F().retain(t).insert(e, cr(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const t = this.scroll.children.head;
    if (t?.statics.blotName !== xt.blotName) return !1;
    const e = t;
    return e.children.length > 1 ? !1 : e.children.head instanceof Xt;
  }
  removeFormat(t, e) {
    const r = this.getText(t, e), [s, i] = this.scroll.line(t + e);
    let o = 0, a = new F();
    s != null && (o = s.length() - i, a = s.delta().slice(i, i + o - 1).insert(`
`));
    const h = this.getContents(t, e + o).diff(new F().insert(r).concat(a)), f = new F().retain(t).concat(h);
    return this.applyDelta(f);
  }
  update(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && // @ts-expect-error Fix me later
    e[0].target.data.match(Uf) && this.scroll.find(e[0].target)) {
      const i = this.scroll.find(e[0].target), o = Mt(i), a = i.offset(this.scroll), c = e[0].oldValue.replace(Vt.CONTENTS, ""), h = new F().insert(c), f = new F().insert(i.value()), g = r && {
        oldRange: Mo(r.oldRange, -a),
        newRange: Mo(r.newRange, -a)
      };
      t = new F().retain(a).concat(h.diff(f, g)).reduce((y, x) => x.insert ? y.insert(x.insert, o) : y.push(x), new F()), this.delta = s.compose(t);
    } else
      this.delta = this.getDelta(), (!t || !we(s.compose(t), this.delta)) && (t = s.diff(this.delta, r));
    return t;
  }
};
function ar(n, t, e) {
  if (n.length === 0) {
    const [y] = Vs(e.pop());
    return t <= 0 ? `</li></${y}>` : `</li></${y}>${ar([], t - 1, e)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: o,
    type: a
  }, ...c] = n, [h, f] = Vs(a);
  if (o > t)
    return e.push(a), o === t + 1 ? `<${h}><li${f}>${Vr(r, s, i)}${ar(c, o, e)}` : `<${h}><li>${ar(n, t + 1, e)}`;
  const g = e[e.length - 1];
  if (o === t && a === g)
    return `</li><li${f}>${Vr(r, s, i)}${ar(c, o, e)}`;
  const [d] = Vs(e.pop());
  return `</li></${d}>${ar(n, t - 1, e)}`;
}
function Vr(n, t, e) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(t, e);
  if (n instanceof Zt)
    return zn(n.value().slice(t, t + e)).replaceAll(" ", "&nbsp;");
  if (n instanceof Wt) {
    if (n.statics.blotName === "list-container") {
      const h = [];
      return n.children.forEachAt(t, e, (f, g, d) => {
        const y = "formats" in f && typeof f.formats == "function" ? f.formats() : {};
        h.push({
          child: f,
          offset: g,
          length: d,
          indent: y.indent || 0,
          type: y.list
        });
      }), ar(h, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(t, e, (h, f, g) => {
      s.push(Vr(h, f, g));
    }), r || n.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: o
    } = n.domNode, [a, c] = i.split(`>${o}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return n.domNode instanceof Element ? n.domNode.outerHTML : "";
}
function Hf(n, t) {
  return Object.keys(t).reduce((e, r) => {
    if (n[r] == null) return e;
    const s = t[r];
    return s === n[r] ? e[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? e[r] = s.concat([n[r]]) : e[r] = s : e[r] = [s, n[r]], e;
  }, {});
}
function Vs(n) {
  const t = n === "ordered" ? "ol" : "ul";
  switch (n) {
    case "checked":
      return [t, ' data-list="checked"'];
    case "unchecked":
      return [t, ' data-list="unchecked"'];
    default:
      return [t, ""];
  }
}
function Ro(n) {
  return n.reduce((t, e) => {
    if (typeof e.insert == "string") {
      const r = e.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return t.insert(r, e.attributes);
    }
    return t.push(e);
  }, new F());
}
function Mo(n, t) {
  let {
    index: e,
    length: r
  } = n;
  return new je(e + t, r);
}
function zf(n) {
  const t = [];
  return n.forEach((e) => {
    typeof e.insert == "string" ? e.insert.split(`
`).forEach((s, i) => {
      i && t.push({
        insert: `
`,
        attributes: e.attributes
      }), s && t.push({
        insert: s,
        attributes: e.attributes
      });
    }) : t.push(e);
  }), t;
}
class le {
  static DEFAULTS = {};
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = t, this.options = e;
  }
}
const Sn = "\uFEFF";
class _i extends It {
  constructor(t, e) {
    super(t, e), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(Sn), this.rightGuard = document.createTextNode(Sn), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t, e) {
    return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e);
  }
  restore(t) {
    let e = null, r;
    const s = t.data.split(Sn).join("");
    if (t === this.leftGuard)
      if (this.prev instanceof Zt) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), e = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this), e = {
          startNode: r,
          startOffset: s.length
        };
    else t === this.rightGuard && (this.next instanceof Zt ? (this.next.insertAt(0, s), e = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), e = {
      startNode: r,
      startOffset: s.length
    }));
    return t.data = Sn, e;
  }
  update(t, e) {
    t.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (e.range = s);
      }
    });
  }
}
class Kf {
  isComposing = !1;
  constructor(t, e) {
    this.scroll = t, this.emitter = e, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (t) => {
      this.isComposing || this.handleCompositionStart(t);
    }), this.scroll.domNode.addEventListener("compositionend", (t) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(t);
      });
    });
  }
  handleCompositionStart(t) {
    const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
    e && !(e instanceof _i) && (this.emitter.emit(P.events.COMPOSITION_BEFORE_START, t), this.scroll.batchStart(), this.emitter.emit(P.events.COMPOSITION_START, t), this.isComposing = !0);
  }
  handleCompositionEnd(t) {
    this.emitter.emit(P.events.COMPOSITION_BEFORE_END, t), this.scroll.batchEnd(), this.emitter.emit(P.events.COMPOSITION_END, t), this.isComposing = !1;
  }
}
class mr {
  static DEFAULTS = {
    modules: {}
  };
  static themes = {
    default: mr
  };
  modules = {};
  constructor(t, e) {
    this.quill = t, this.options = e;
  }
  init() {
    Object.keys(this.options.modules).forEach((t) => {
      this.modules[t] == null && this.addModule(t);
    });
  }
  addModule(t) {
    const e = this.quill.constructor.import(`modules/${t}`);
    return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t];
  }
}
const Vf = (n) => n.parentElement || n.getRootNode().host || null, Gf = (n) => {
  const t = n.getBoundingClientRect(), e = "offsetWidth" in n && Math.abs(t.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(t.height) / n.offsetHeight || 1;
  return {
    top: t.top,
    right: t.left + n.clientWidth * e,
    bottom: t.top + n.clientHeight * r,
    left: t.left
  };
}, _n = (n) => {
  const t = parseInt(n, 10);
  return Number.isNaN(t) ? 0 : t;
}, Do = (n, t, e, r, s, i) => n < e && t > r ? 0 : n < e ? -(e - n + s) : t > r ? t - n > r - e ? n + s - e : t - r + i : 0, Wf = (n, t) => {
  const e = n.ownerDocument;
  let r = t, s = n;
  for (; s; ) {
    const i = s === e.body, o = i ? {
      top: 0,
      right: window.visualViewport?.width ?? e.documentElement.clientWidth,
      bottom: window.visualViewport?.height ?? e.documentElement.clientHeight,
      left: 0
    } : Gf(s), a = getComputedStyle(s), c = Do(r.left, r.right, o.left, o.right, _n(a.scrollPaddingLeft), _n(a.scrollPaddingRight)), h = Do(r.top, r.bottom, o.top, o.bottom, _n(a.scrollPaddingTop), _n(a.scrollPaddingBottom));
    if (c || h)
      if (i)
        e.defaultView?.scrollBy(c, h);
      else {
        const {
          scrollLeft: f,
          scrollTop: g
        } = s;
        h && (s.scrollTop += h), c && (s.scrollLeft += c);
        const d = s.scrollLeft - f, y = s.scrollTop - g;
        r = {
          left: r.left - d,
          top: r.top - y,
          right: r.right - d,
          bottom: r.bottom - y
        };
      }
    s = i || a.position === "fixed" ? null : Vf(s);
  }
}, Zf = 100, Yf = ["block", "break", "cursor", "inline", "scroll", "text"], Xf = (n, t, e) => {
  const r = new fr();
  return Yf.forEach((s) => {
    const i = t.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    let i = t.query(s);
    i || e.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let o = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, o += 1, o > Zf) {
        e.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, hr = be("quill"), Cn = new fr();
Wt.uiClass = "ql-ui";
class C {
  static DEFAULTS = {
    bounds: null,
    modules: {
      clipboard: !0,
      keyboard: !0,
      history: !0,
      uploader: !0
    },
    placeholder: "",
    readOnly: !1,
    registry: Cn,
    theme: "default"
  };
  static events = P.events;
  static sources = P.sources;
  static version = "2.0.3";
  static imports = {
    delta: F,
    parchment: qf,
    "core/module": le,
    "core/theme": mr
  };
  static debug(t) {
    t === !0 && (t = "log"), be.level(t);
  }
  static find(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ci.get(t) || Cn.find(t, e);
  }
  static import(t) {
    return this.imports[t] == null && hr.error(`Cannot import ${t}. Are you sure it was registered?`), this.imports[t];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in t ? t.attrName : t.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach((s) => {
        this.register(s, t[s], e);
      });
    } else {
      const t = arguments.length <= 0 ? void 0 : arguments[0], e = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[t] != null && !r && hr.warn(`Overwriting ${t} with`, e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && e && typeof e != "boolean" && e.blotName !== "abstract" && Cn.register(e), typeof e.register == "function" && e.register(Cn);
    }
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Qf(t, e), this.container = this.options.container, this.container == null) {
      hr.error("Invalid Quill container", t);
      return;
    }
    this.options.debug && C.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", ci.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new P();
    const s = Si.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new Ff(this.scroll), this.selection = new Pf(this.scroll, this.emitter), this.composition = new Kf(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(P.events.EDITOR_CHANGE, (o) => {
      o === P.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(P.events.SCROLL_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      zt.call(this, () => this.editor.update(null, a, f), o);
    }), this.emitter.on(P.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [h] = this.selection.getRange(), f = c && h ? {
        oldRange: c,
        newRange: h
      } : void 0;
      zt.call(this, () => {
        const g = new F().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(g, [], f);
      }, C.sources.USER);
    }), r) {
      const o = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: `
`
      });
      this.setContents(o);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof t == "string") {
      const r = t;
      t = document.createElement("div"), t.classList.add(r);
    }
    return this.container.insertBefore(t, e), t;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t, e, r) {
    return [t, e, , r] = de(t, e, r), zt.call(this, () => this.editor.deleteText(t, e), r, t, -1 * e);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(t) {
    this.allowReadOnlyEdits = !0;
    const e = t();
    return this.allowReadOnlyEdits = !1, e;
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
  }
  focus() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), t.preventScroll || this.scrollSelectionIntoView();
  }
  format(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : P.sources.API;
    return zt.call(this, () => {
      const s = this.getSelection(!0);
      let i = new F();
      if (s == null) return i;
      if (this.scroll.query(t, H.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [t]: e
        });
      else {
        if (s.length === 0)
          return this.selection.format(t, e), i;
        i = this.editor.formatText(s.index, s.length, {
          [t]: e
        });
      }
      return this.setSelection(s, P.sources.SILENT), i;
    }, r);
  }
  formatLine(t, e, r, s, i) {
    let o;
    return [t, e, o, i] = de(
      t,
      e,
      // @ts-expect-error
      r,
      s,
      i
    ), zt.call(this, () => this.editor.formatLine(t, e, o), i, t, 0);
  }
  formatText(t, e, r, s, i) {
    let o;
    return [t, e, o, i] = de(
      // @ts-expect-error
      t,
      e,
      r,
      s,
      i
    ), zt.call(this, () => this.editor.formatText(t, e, o), i, t, 0);
  }
  getBounds(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = null;
    if (typeof t == "number" ? r = this.selection.getBounds(t, e) : r = this.selection.getBounds(t.index, t.length), !r) return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - s.top,
      height: r.height,
      left: r.left - s.left,
      right: r.right - s.left,
      top: r.top - s.top,
      width: r.width
    };
  }
  getContents() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - t;
    return [t, e] = de(t, e), this.editor.getContents(t, e);
  }
  getFormat() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof t == "number" ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
  }
  getIndex(t) {
    return t.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t) {
    return this.scroll.leaf(t);
  }
  getLine(t) {
    return this.scroll.line(t);
  }
  getLines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof t != "number" ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
  }
  getModule(t) {
    return this.theme.modules[t];
  }
  getSelection() {
    return arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = de(t, e), this.editor.getHTML(t, e);
  }
  getText() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
    return typeof t == "number" && (e = e ?? this.getLength() - t), [t, e] = de(t, e), this.editor.getText(t, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : C.sources.API;
    return zt.call(this, () => this.editor.insertEmbed(t, e, r), s, t);
  }
  insertText(t, e, r, s, i) {
    let o;
    return [t, , o, i] = de(t, 0, r, s, i), zt.call(this, () => this.editor.insertText(t, e, o), i, t, e.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(t, e, r) {
    return [t, e, , r] = de(t, e, r), zt.call(this, () => this.editor.removeFormat(t, e), r, t);
  }
  scrollRectIntoView(t) {
    Wf(this.root, t);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const t = this.selection.lastRange, e = t && this.selection.getBounds(t.index, t.length);
    e && this.scrollRectIntoView(e);
  }
  setContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.sources.API;
    return zt.call(this, () => {
      t = new F(t);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, t), o = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(o);
    }, e);
  }
  setSelection(t, e, r) {
    t == null ? this.selection.setRange(null, e || C.sources.API) : ([t, e, , r] = de(t, e, r), this.selection.setRange(new je(Math.max(0, t), e), r), r !== P.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.sources.API;
    const r = new F().insert(t);
    return this.setContents(r, e);
  }
  update() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.sources.USER;
    const e = this.scroll.update(t);
    return this.selection.update(t), e;
  }
  updateContents(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P.sources.API;
    return zt.call(this, () => (t = new F(t), this.editor.applyDelta(t)), e, !0);
  }
}
function Bo(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function Gs(n) {
  return Object.entries(n ?? {}).reduce((t, e) => {
    let [r, s] = e;
    return {
      ...t,
      [r]: s === !0 ? {} : s
    };
  }, {});
}
function $o(n) {
  return Object.fromEntries(Object.entries(n).filter((t) => t[1] !== void 0));
}
function Qf(n, t) {
  const e = Bo(n);
  if (!e)
    throw new Error("Invalid Quill container");
  const s = !t.theme || t.theme === C.DEFAULTS.theme ? mr : C.import(`themes/${t.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${t.theme}. Did you register it?`);
  const {
    modules: i,
    ...o
  } = C.DEFAULTS, {
    modules: a,
    ...c
  } = s.DEFAULTS;
  let h = Gs(t.modules);
  h != null && h.toolbar && h.toolbar.constructor !== Object && (h = {
    ...h,
    toolbar: {
      container: h.toolbar
    }
  });
  const f = Ae({}, Gs(i), Gs(a), h), g = {
    ...o,
    ...$o(c),
    ...$o(t)
  };
  let d = t.registry;
  return d ? t.formats && hr.warn('Ignoring "formats" option because "registry" is specified') : d = t.formats ? Xf(t.formats, g.registry, hr) : g.registry, {
    ...g,
    registry: d,
    container: e,
    theme: s,
    modules: Object.entries(f).reduce((y, x) => {
      let [E, _] = x;
      if (!_) return y;
      const v = C.import(`modules/${E}`);
      return v == null ? (hr.error(`Cannot load ${E} module. Are you sure you registered it?`), y) : {
        ...y,
        // @ts-expect-error
        [E]: Ae({}, v.DEFAULTS || {}, _)
      };
    }, {}),
    bounds: Bo(g.bounds)
  };
}
function zt(n, t, e, r) {
  if (!this.isEnabled() && t === P.sources.USER && !this.allowReadOnlyEdits)
    return new F();
  let s = e == null ? null : this.getSelection();
  const i = this.editor.delta, o = n();
  if (s != null && (e === !0 && (e = s.index), r == null ? s = jo(s, o, t) : r !== 0 && (s = jo(s, e, r, t)), this.setSelection(s, P.sources.SILENT)), o.length() > 0) {
    const a = [P.events.TEXT_CHANGE, o, i, t];
    this.emitter.emit(P.events.EDITOR_CHANGE, ...a), t !== P.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function de(n, t, e, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof t != "number" ? (s = r, r = e, e = t, t = n.length, n = n.index) : (t = n.length, n = n.index) : typeof t != "number" && (s = r, r = e, e = t, t = 0), typeof e == "object" ? (i = e, s = r) : typeof e == "string" && (r != null ? i[e] = r : s = e), s = s || P.sources.API, [n, t, i, s];
}
function jo(n, t, e, r) {
  const s = typeof e == "number" ? e : 0;
  if (n == null) return null;
  let i, o;
  return t && typeof t.transformPosition == "function" ? [i, o] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    t.transformPosition(a, r !== P.sources.USER)
  )) : [i, o] = [n.index, n.index + n.length].map((a) => a < t || a === t && r === P.sources.USER ? a : s >= 0 ? a + s : Math.max(t, a + s)), new je(i, o - i);
}
class ze extends Hn {
}
function Po(n) {
  return n instanceof xt || n instanceof Bt;
}
function Uo(n) {
  return typeof n.updateContent == "function";
}
class Jf extends Si {
  static blotName = "scroll";
  static className = "ql-editor";
  static tagName = "DIV";
  static defaultChild = xt;
  static allowedChildren = [xt, Bt, ze];
  constructor(t, e, r) {
    let {
      emitter: s
    } = r;
    super(t, e), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const t = this.batch;
    this.batch = !1, this.update(t);
  }
  emitMount(t) {
    this.emitter.emit(P.events.SCROLL_BLOT_MOUNT, t);
  }
  emitUnmount(t) {
    this.emitter.emit(P.events.SCROLL_BLOT_UNMOUNT, t);
  }
  emitEmbedUpdate(t, e) {
    this.emitter.emit(P.events.SCROLL_EMBED_UPDATE, t, e);
  }
  deleteAt(t, e) {
    const [r, s] = this.line(t), [i] = this.line(t + e);
    if (super.deleteAt(t, e), i != null && r !== i && s > 0) {
      if (r instanceof Bt || i instanceof Bt) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof Xt ? null : i.children.head;
      r.moveChildren(i, o), r.remove();
    }
    this.optimize();
  }
  enable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", t ? "true" : "false");
  }
  formatAt(t, e, r, s) {
    super.formatAt(t, e, r, s), this.optimize();
  }
  insertAt(t, e, r) {
    if (t >= this.length())
      if (r == null || this.scroll.query(e, H.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), r == null && e.endsWith(`
`) ? s.insertAt(0, e.slice(0, -1), r) : s.insertAt(0, e, r);
      } else {
        const s = this.scroll.create(e, r);
        this.appendChild(s);
      }
    else
      super.insertAt(t, e, r);
    this.optimize();
  }
  insertBefore(t, e) {
    if (t.statics.scope === H.INLINE_BLOT) {
      const r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(t), super.insertBefore(r, e);
    } else
      super.insertBefore(t, e);
  }
  insertContents(t, e) {
    const r = this.deltaToRenderBlocks(e.concat(new F().insert(`
`))), s = r.pop();
    if (s == null) return;
    this.batchStart();
    const i = r.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(Bt, t)[0] && t < this.length()), h = i.type === "block" ? i.delta : new F().insert({
        [i.key]: i.value
      });
      Ws(this, t, h);
      const f = i.type === "block" ? 1 : 0, g = t + h.length() + f;
      c && this.insertAt(g - 1, `
`);
      const d = Mt(this.line(t)[0]), y = $t.AttributeMap.diff(d, i.attributes) || {};
      Object.keys(y).forEach((x) => {
        this.formatAt(g - 1, 1, x, y[x]);
      }), t = g;
    }
    let [o, a] = this.children.find(t);
    if (r.length && (o && (o = o.split(a), a = 0), r.forEach((c) => {
      if (c.type === "block") {
        const h = this.createBlock(c.attributes, o || void 0);
        Ws(h, 0, c.delta);
      } else {
        const h = this.create(c.key, c.value);
        this.insertBefore(h, o || void 0), Object.keys(c.attributes).forEach((f) => {
          h.format(f, c.attributes[f]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = o ? o.offset(o.scroll) + a : this.length();
      Ws(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(t) {
    const e = this.path(t).pop();
    if (!e)
      return [null, -1];
    const [r, s] = e;
    return r instanceof Tt ? [r, s] : [null, -1];
  }
  line(t) {
    return t === this.length() ? this.line(t - 1) : this.descendant(Po, t);
  }
  lines() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, o) => {
      let a = [], c = o;
      return s.children.forEachAt(i, o, (h, f, g) => {
        Po(h) ? a.push(h) : h instanceof Hn && (a = a.concat(r(h, f, c))), c -= g;
      }), a;
    };
    return r(this, t, e);
  }
  optimize() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(t, e), t.length > 0 && this.emitter.emit(P.events.SCROLL_OPTIMIZE, t, e));
  }
  path(t) {
    return super.path(t).slice(1);
  }
  remove() {
  }
  update(t) {
    if (this.batch) {
      Array.isArray(t) && (this.batch = this.batch.concat(t));
      return;
    }
    let e = P.sources.USER;
    typeof t == "string" && (e = t), Array.isArray(t) || (t = this.observer.takeRecords()), t = t.filter((r) => {
      let {
        target: s
      } = r;
      const i = this.find(s, !0);
      return i && !Uo(i);
    }), t.length > 0 && this.emitter.emit(P.events.SCROLL_BEFORE_UPDATE, e, t), super.update(t.concat([])), t.length > 0 && this.emitter.emit(P.events.SCROLL_UPDATE, e, t);
  }
  updateEmbedAt(t, e, r) {
    const [s] = this.descendant((i) => i instanceof Bt, t);
    s && s.statics.blotName === e && Uo(s) && s.updateContent(r);
  }
  handleDragStart(t) {
    t.preventDefault();
  }
  deltaToRenderBlocks(t) {
    const e = [];
    let r = new F();
    return t.forEach((s) => {
      const i = s?.insert;
      if (i)
        if (typeof i == "string") {
          const o = i.split(`
`);
          o.slice(0, -1).forEach((c) => {
            r.insert(c, s.attributes), e.push({
              type: "block",
              delta: r,
              attributes: s.attributes ?? {}
            }), r = new F();
          });
          const a = o[o.length - 1];
          a && r.insert(a, s.attributes);
        } else {
          const o = Object.keys(i)[0];
          if (!o) return;
          this.query(o, H.INLINE) ? r.push(s) : (r.length() && e.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new F(), e.push({
            type: "blockEmbed",
            key: o,
            value: i[o],
            attributes: s.attributes ?? {}
          }));
        }
    }), r.length() && e.push({
      type: "block",
      delta: r,
      attributes: {}
    }), e;
  }
  createBlock(t, e) {
    let r;
    const s = {};
    Object.entries(t).forEach((a) => {
      let [c, h] = a;
      this.query(c, H.BLOCK & H.BLOT) != null ? r = c : s[c] = h;
    });
    const i = this.create(r || this.statics.defaultChild.blotName, r ? t[r] : void 0);
    this.insertBefore(i, e || void 0);
    const o = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, h] = a;
      i.formatAt(0, o, c, h);
    }), i;
  }
}
function Ws(n, t, e) {
  e.reduce((r, s) => {
    const i = $t.Op.length(s);
    let o = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        n.insertAt(r, a);
        const [c] = n.descendant(Tt, r), h = Mt(c);
        o = $t.AttributeMap.diff(h, o) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null) return r;
        if (n.insertAt(r, a, s.insert[a]), n.scroll.query(a, H.INLINE) != null) {
          const [h] = n.descendant(Tt, r), f = Mt(h);
          o = $t.AttributeMap.diff(f, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      n.formatAt(r, i, a, o[a]);
    }), r + i;
  }, t);
}
const Ci = {
  scope: H.BLOCK,
  whitelist: ["right", "center", "justify"]
}, tp = new ie("align", "align", Ci), Kl = new Yt("align", "ql-align", Ci), Vl = new Ce("align", "text-align", Ci);
class Gl extends Ce {
  value(t) {
    let e = super.value(t);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : e;
  }
}
const ep = new Yt("color", "ql-color", {
  scope: H.INLINE
}), Li = new Gl("color", "color", {
  scope: H.INLINE
}), rp = new Yt("background", "ql-bg", {
  scope: H.INLINE
}), qi = new Gl("background", "background-color", {
  scope: H.INLINE
});
class Ke extends ze {
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("spellcheck", "false"), e;
  }
  code(t, e) {
    return this.children.map((r) => r.length() <= 1 ? "" : r.domNode.innerText).join(`
`).slice(t, t + e);
  }
  html(t, e) {
    return `<pre>
${zn(this.code(t, e))}
</pre>`;
  }
}
class Ct extends xt {
  static TAB = "  ";
  static register() {
    C.register(Ke);
  }
}
class Oi extends _t {
}
Oi.blotName = "code";
Oi.tagName = "CODE";
Ct.blotName = "code-block";
Ct.className = "ql-code-block";
Ct.tagName = "DIV";
Ke.blotName = "code-block-container";
Ke.className = "ql-code-block-container";
Ke.tagName = "DIV";
Ke.allowedChildren = [Ct];
Ct.allowedChildren = [Zt, Xt, Vt];
Ct.requiredContainer = Ke;
const ki = {
  scope: H.BLOCK,
  whitelist: ["rtl"]
}, Wl = new ie("direction", "dir", ki), Zl = new Yt("direction", "ql-direction", ki), Yl = new Ce("direction", "direction", ki), Xl = {
  scope: H.INLINE,
  whitelist: ["serif", "monospace"]
}, Ql = new Yt("font", "ql-font", Xl);
class np extends Ce {
  value(t) {
    return super.value(t).replace(/["']/g, "");
  }
}
const Jl = new np("font", "font-family", Xl), ta = new Yt("size", "ql-size", {
  scope: H.INLINE,
  whitelist: ["small", "large", "huge"]
}), ea = new Ce("size", "font-size", {
  scope: H.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), sp = be("quill:keyboard"), ip = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class Kn extends le {
  static match(t, e) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r) => !!e[r] !== t[r] && e[r] !== null) ? !1 : e.key === t.key || e.key === t.which;
  }
  constructor(t, e) {
    super(t, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((r) => {
      this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = lp(t);
    if (s == null) {
      sp.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof e == "function" && (e = {
      handler: e
    }), typeof r == "function" && (r = {
      handler: r
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((o) => {
      const a = {
        ...s,
        key: o,
        ...e,
        ...r
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t) => {
      if (t.defaultPrevented || t.isComposing || t.keyCode === 229 && (t.key === "Enter" || t.key === "Backspace")) return;
      const s = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((v) => Kn.match(t, v));
      if (s.length === 0) return;
      const i = C.find(t.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus()) return;
      const [a, c] = this.quill.getLine(o.index), [h, f] = this.quill.getLeaf(o.index), [g, d] = o.length === 0 ? [h, f] : this.quill.getLeaf(o.index + o.length), y = h instanceof Dn ? h.value().slice(0, f) : "", x = g instanceof Dn ? g.value().slice(d) : "", E = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: c,
        prefix: y,
        suffix: x,
        event: t
      };
      s.some((v) => {
        if (v.collapsed != null && v.collapsed !== E.collapsed || v.empty != null && v.empty !== E.empty || v.offset != null && v.offset !== E.offset)
          return !1;
        if (Array.isArray(v.format)) {
          if (v.format.every((N) => E.format[N] == null))
            return !1;
        } else if (typeof v.format == "object" && !Object.keys(v.format).every((N) => v.format[N] === !0 ? E.format[N] != null : v.format[N] === !1 ? E.format[N] == null : we(v.format[N], E.format[N])))
          return !1;
        return v.prefix != null && !v.prefix.test(E.prefix) || v.suffix != null && !v.suffix.test(E.suffix) ? !1 : v.handler.call(this, o, E, v) !== !0;
      }) && t.preventDefault();
    });
  }
  handleBackspace(t, e) {
    const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
    if (t.index === 0 || this.quill.getLength() <= 1) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let o = new F().retain(t.index - r).delete(r);
    if (e.offset === 0) {
      const [a] = this.quill.getLine(t.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const h = i.formats(), f = this.quill.getFormat(t.index - 1, 1);
        if (s = $t.AttributeMap.diff(h, f) || {}, Object.keys(s).length > 0) {
          const g = new F().retain(t.index + i.length() - 2).retain(1, s);
          o = o.compose(g);
        }
      }
    }
    this.quill.updateContents(o, C.sources.USER), this.quill.focus();
  }
  handleDelete(t, e) {
    const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
    if (t.index >= this.quill.getLength() - r) return;
    let s = {};
    const [i] = this.quill.getLine(t.index);
    let o = new F().retain(t.index).delete(r);
    if (e.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(t.index + 1);
      if (a) {
        const c = i.formats(), h = this.quill.getFormat(t.index, 1);
        s = $t.AttributeMap.diff(c, h) || {}, Object.keys(s).length > 0 && (o = o.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(o, C.sources.USER), this.quill.focus();
  }
  handleDeleteRange(t) {
    Ii({
      range: t,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(t, e) {
    const r = Object.keys(e.format).reduce((i, o) => (this.quill.scroll.query(o, H.BLOCK) && !Array.isArray(e.format[o]) && (i[o] = e.format[o]), i), {}), s = new F().retain(t.index).delete(t.length).insert(`
`, r);
    this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(t.index + 1, C.sources.SILENT), this.quill.focus();
  }
}
const op = {
  bindings: {
    bold: Zs("bold"),
    italic: Zs("italic"),
    underline: Zs("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "+1", C.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n, t) {
        return t.collapsed && t.offset !== 0 ? !0 : (this.quill.format("indent", "-1", C.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n, t) {
        t.format.indent != null ? this.quill.format("indent", "-1", C.sources.USER) : t.format.list != null && this.quill.format("list", !1, C.sources.USER);
      }
    },
    "indent code-block": Fo(!0),
    "outdent code-block": Fo(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(n) {
        this.quill.deleteText(n.index - 1, 1, C.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n, t) {
        if (t.format.table) return !0;
        this.quill.history.cutoff();
        const e = new F().retain(n.index).delete(n.length).insert("	");
        return this.quill.updateContents(e, C.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index + 1, C.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, C.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(n, t) {
        const e = {
          list: !1
        };
        t.format.indent && (e.indent = !1), this.quill.formatLine(n.index, n.length, e, C.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(n) {
        const [t, e] = this.quill.getLine(n.index), r = {
          // @ts-expect-error Fix me later
          ...t.formats(),
          list: "checked"
        }, s = new F().retain(n.index).insert(`
`, r).retain(t.length() - e - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(n.index + 1, C.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(n, t) {
        const [e, r] = this.quill.getLine(n.index), s = new F().retain(n.index).insert(`
`, t.format).retain(e.length() - r - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(n.index + 1, C.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n) {
        const t = this.quill.getModule("table");
        if (t) {
          const [e, r, s, i] = t.getTable(n), o = ap(e, r, s, i);
          if (o == null) return;
          let a = e.offset();
          if (o < 0) {
            const c = new F().retain(a).insert(`
`);
            this.quill.updateContents(c, C.sources.USER), this.quill.setSelection(n.index + 1, n.length, C.sources.SILENT);
          } else if (o > 0) {
            a += e.length();
            const c = new F().retain(a).insert(`
`);
            this.quill.updateContents(c, C.sources.USER), this.quill.setSelection(a, C.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n, t) {
        const {
          event: e,
          line: r
        } = t, s = r.offset(this.quill.scroll);
        e.shiftKey ? this.quill.setSelection(s - 1, C.sources.USER) : this.quill.setSelection(s + r.length(), C.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n, t) {
        if (this.quill.scroll.query("list") == null) return !0;
        const {
          length: e
        } = t.prefix, [r, s] = this.quill.getLine(n.index);
        if (s > e) return !0;
        let i;
        switch (t.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(n.index, " ", C.sources.USER), this.quill.history.cutoff();
        const o = new F().retain(n.index - s).delete(e + 1).retain(r.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, C.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index - e, C.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n) {
        const [t, e] = this.quill.getLine(n.index);
        let r = 2, s = t;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, r -= 1, r <= 0) {
            const i = new F().retain(n.index + t.length() - e - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, C.sources.USER), this.quill.setSelection(n.index - 1, C.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": Ln("ArrowLeft", !1),
    "embed left shift": Ln("ArrowLeft", !0),
    "embed right": Ln("ArrowRight", !1),
    "embed right shift": Ln("ArrowRight", !0),
    "table down": Ho(!1),
    "table up": Ho(!0)
  }
};
Kn.DEFAULTS = op;
function Fo(n) {
  return {
    key: "Tab",
    shiftKey: !n,
    format: {
      "code-block": !0
    },
    handler(t, e) {
      let {
        event: r
      } = e;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (t.length === 0 && !r.shiftKey) {
        this.quill.insertText(t.index, i, C.sources.USER), this.quill.setSelection(t.index + i.length, C.sources.SILENT);
        return;
      }
      const o = t.length === 0 ? this.quill.getLines(t.index, 1) : this.quill.getLines(t);
      let {
        index: a,
        length: c
      } = t;
      o.forEach((h, f) => {
        n ? (h.insertAt(0, i), f === 0 ? a += i.length : c += i.length) : h.domNode.textContent.startsWith(i) && (h.deleteAt(0, i.length), f === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(C.sources.USER), this.quill.setSelection(a, c, C.sources.SILENT);
    }
  };
}
function Ln(n, t) {
  return {
    key: n,
    shiftKey: t,
    altKey: null,
    [n === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index: s
      } = r;
      n === "ArrowRight" && (s += r.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof It ? (n === "ArrowLeft" ? t ? this.quill.setSelection(r.index - 1, r.length + 1, C.sources.USER) : this.quill.setSelection(r.index - 1, C.sources.USER) : t ? this.quill.setSelection(r.index, r.length + 1, C.sources.USER) : this.quill.setSelection(r.index + r.length + 1, C.sources.USER), !1) : !0;
    }
  };
}
function Zs(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(t, e) {
      this.quill.format(n, !e.format[n], C.sources.USER);
    }
  };
}
function Ho(n) {
  return {
    key: n ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(t, e) {
      const r = n ? "prev" : "next", s = e.line, i = s.parent[r];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let o = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, o = o.next;
          const c = o.offset(this.quill.scroll) + Math.min(e.offset, o.length() - 1);
          this.quill.setSelection(c, 0, C.sources.USER);
        }
      } else {
        const o = s.table()[r];
        o != null && (n ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, C.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, C.sources.USER));
      }
      return !1;
    }
  };
}
function lp(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = cr(n);
  else
    return null;
  return n.shortKey && (n[ip] = n.shortKey, delete n.shortKey), n;
}
function Ii(n) {
  let {
    quill: t,
    range: e
  } = n;
  const r = t.getLines(e);
  let s = {};
  if (r.length > 1) {
    const i = r[0].formats(), o = r[r.length - 1].formats();
    s = $t.AttributeMap.diff(o, i) || {};
  }
  t.deleteText(e, C.sources.USER), Object.keys(s).length > 0 && t.formatLine(e.index, 1, s, C.sources.USER), t.setSelection(e.index, C.sources.SILENT);
}
function ap(n, t, e, r) {
  return t.prev == null && t.next == null ? e.prev == null && e.next == null ? r === 0 ? -1 : 1 : e.prev == null ? -1 : 1 : t.prev == null ? -1 : t.next == null ? 1 : null;
}
const cp = /font-weight:\s*normal/, up = ["P", "OL", "UL"], zo = (n) => n && up.includes(n.tagName), hp = (n) => {
  Array.from(n.querySelectorAll("br")).filter((t) => zo(t.previousElementSibling) && zo(t.nextElementSibling)).forEach((t) => {
    t.parentNode?.removeChild(t);
  });
}, dp = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((t) => t.getAttribute("style")?.match(cp)).forEach((t) => {
    const e = n.createDocumentFragment();
    e.append(...t.childNodes), t.parentNode?.replaceChild(e, t);
  });
};
function fp(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (dp(n), hp(n));
}
const pp = /\bmso-list:[^;]*ignore/i, gp = /\bmso-list:[^;]*\bl(\d+)/i, mp = /\bmso-list:[^;]*\blevel(\d+)/i, bp = (n, t) => {
  const e = n.getAttribute("style"), r = e?.match(gp);
  if (!r)
    return null;
  const s = Number(r[1]), i = e?.match(mp), o = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = t.match(a), h = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: o,
    type: h,
    element: n
  };
}, yp = (n) => {
  const t = Array.from(n.querySelectorAll("[style*=mso-list]")), e = [], r = [];
  t.forEach((o) => {
    (o.getAttribute("style") || "").match(pp) ? e.push(o) : r.push(o);
  }), e.forEach((o) => o.parentNode?.removeChild(o));
  const s = n.documentElement.innerHTML, i = r.map((o) => bp(o, s)).filter((o) => o);
  for (; i.length; ) {
    const o = [];
    let a = i.shift();
    for (; a; )
      o.push(a), a = i.length && i[0]?.element === a.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === a.id ? i.shift() : null;
    const c = document.createElement("ul");
    o.forEach((g) => {
      const d = document.createElement("li");
      d.setAttribute("data-list", g.type), g.indent > 1 && d.setAttribute("class", `ql-indent-${g.indent - 1}`), d.innerHTML = g.element.innerHTML, c.appendChild(d);
    });
    const h = o[0]?.element, {
      parentNode: f
    } = h ?? {};
    h && f?.replaceChild(c, h), o.slice(1).forEach((g) => {
      let {
        element: d
      } = g;
      f?.removeChild(d);
    });
  }
};
function vp(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && yp(n);
}
const xp = [vp, fp], wp = (n) => {
  n.documentElement && xp.forEach((t) => {
    t(n);
  });
}, Np = be("quill:clipboard"), Ep = [[Node.TEXT_NODE, Dp], [Node.TEXT_NODE, Vo], ["br", Lp], [Node.ELEMENT_NODE, Vo], [Node.ELEMENT_NODE, Cp], [Node.ELEMENT_NODE, _p], [Node.ELEMENT_NODE, Rp], ["li", kp], ["ol, ul", Ip], ["pre", qp], ["tr", Mp], ["b", Ys("bold")], ["i", Ys("italic")], ["strike", Ys("strike")], ["style", Op]], Ap = [tp, Wl].reduce((n, t) => (n[t.keyName] = t, n), {}), Ko = [Vl, qi, Li, Yl, Jl, ea].reduce((n, t) => (n[t.keyName] = t, n), {});
class Tp extends le {
  static DEFAULTS = {
    matchers: []
  };
  constructor(t, e) {
    super(t, e), this.quill.root.addEventListener("copy", (r) => this.onCaptureCopy(r, !1)), this.quill.root.addEventListener("cut", (r) => this.onCaptureCopy(r, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], Ep.concat(this.options.matchers ?? []).forEach((r) => {
      let [s, i] = r;
      this.addMatcher(s, i);
    });
  }
  addMatcher(t, e) {
    this.matchers.push([t, e]);
  }
  convert(t) {
    let {
      html: e,
      text: r
    } = t, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[Ct.blotName])
      return new F().insert(r || "", {
        [Ct.blotName]: s[Ct.blotName]
      });
    if (!e)
      return new F().insert(r || "", s);
    const i = this.convertHTML(e);
    return Yr(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new F().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(t) {
    wp(t);
  }
  convertHTML(t) {
    const e = new DOMParser().parseFromString(t, "text/html");
    this.normalizeHTML(e);
    const r = e.body, s = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(r, s);
    return Ri(this.quill.scroll, r, i, o, s);
  }
  dangerouslyPasteHTML(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : C.sources.API;
    if (typeof t == "string") {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.setContents(s, e), this.quill.setSelection(0, C.sources.SILENT);
    } else {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.updateContents(new F().retain(t).concat(s), r), this.quill.setSelection(t + s.length(), C.sources.SILENT);
    }
  }
  onCaptureCopy(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (t.defaultPrevented) return;
    t.preventDefault();
    const [r] = this.quill.selection.getRange();
    if (r == null) return;
    const {
      html: s,
      text: i
    } = this.onCopy(r, e);
    t.clipboardData?.setData("text/plain", i), t.clipboardData?.setData("text/html", s), e && Ii({
      range: r,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(t) {
    return t.split(/\r?\n/).filter((e) => e[0] !== "#").join(`
`);
  }
  onCapturePaste(t) {
    if (t.defaultPrevented || !this.quill.isEnabled()) return;
    t.preventDefault();
    const e = this.quill.getSelection(!0);
    if (e == null) return;
    const r = t.clipboardData?.getData("text/html");
    let s = t.clipboardData?.getData("text/plain");
    if (!r && !s) {
      const o = t.clipboardData?.getData("text/uri-list");
      o && (s = this.normalizeURIList(o));
    }
    const i = Array.from(t.clipboardData?.files || []);
    if (!r && i.length > 0) {
      this.quill.uploader.upload(e, i);
      return;
    }
    if (r && i.length > 0) {
      const o = new DOMParser().parseFromString(r, "text/html");
      if (o.body.childElementCount === 1 && o.body.firstElementChild?.tagName === "IMG") {
        this.quill.uploader.upload(e, i);
        return;
      }
    }
    this.onPaste(e, {
      html: r,
      text: s
    });
  }
  onCopy(t) {
    const e = this.quill.getText(t);
    return {
      html: this.quill.getSemanticHTML(t),
      text: e
    };
  }
  onPaste(t, e) {
    let {
      text: r,
      html: s
    } = e;
    const i = this.quill.getFormat(t.index), o = this.convert({
      text: r,
      html: s
    }, i);
    Np.log("onPaste", o, {
      text: r,
      html: s
    });
    const a = new F().retain(t.index).delete(t.length).concat(o);
    this.quill.updateContents(a, C.sources.USER), this.quill.setSelection(a.length() - t.length, C.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(t, e) {
    const r = [], s = [];
    return this.matchers.forEach((i) => {
      const [o, a] = i;
      switch (o) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          r.push(a);
          break;
        default:
          Array.from(t.querySelectorAll(o)).forEach((c) => {
            e.has(c) ? e.get(c)?.push(a) : e.set(c, [a]);
          });
          break;
      }
    }), [r, s];
  }
}
function Ve(n, t, e, r) {
  return r.query(t) ? n.reduce((s, i) => {
    if (!i.insert) return s;
    if (i.attributes && i.attributes[t])
      return s.push(i);
    const o = e ? {
      [t]: e
    } : {};
    return s.insert(i.insert, {
      ...o,
      ...i.attributes
    });
  }, new F()) : n;
}
function Yr(n, t) {
  let e = "";
  for (let r = n.ops.length - 1; r >= 0 && e.length < t.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string") break;
    e = s.insert + e;
  }
  return e.slice(-1 * t.length) === t;
}
function Ee(n, t) {
  if (!(n instanceof Element)) return !1;
  const e = t.query(n);
  return e && e.prototype instanceof It ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Sp(n, t) {
  return n.previousElementSibling && n.nextElementSibling && !Ee(n.previousElementSibling, t) && !Ee(n.nextElementSibling, t);
}
const qn = /* @__PURE__ */ new WeakMap();
function ra(n) {
  return n == null ? !1 : (qn.has(n) || (n.tagName === "PRE" ? qn.set(n, !0) : qn.set(n, ra(n.parentNode))), qn.get(n));
}
function Ri(n, t, e, r, s) {
  return t.nodeType === t.TEXT_NODE ? r.reduce((i, o) => o(t, i, n), new F()) : t.nodeType === t.ELEMENT_NODE ? Array.from(t.childNodes || []).reduce((i, o) => {
    let a = Ri(n, o, e, r, s);
    return o.nodeType === t.ELEMENT_NODE && (a = e.reduce((c, h) => h(o, c, n), a), a = (s.get(o) || []).reduce((c, h) => h(o, c, n), a)), i.concat(a);
  }, new F()) : new F();
}
function Ys(n) {
  return (t, e, r) => Ve(e, n, !0, r);
}
function _p(n, t, e) {
  const r = ie.keys(n), s = Yt.keys(n), i = Ce.keys(n), o = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = e.query(a, H.ATTRIBUTE);
    c != null && (o[c.attrName] = c.value(n), o[c.attrName]) || (c = Ap[a], c != null && (c.attrName === a || c.keyName === a) && (o[c.attrName] = c.value(n) || void 0), c = Ko[a], c != null && (c.attrName === a || c.keyName === a) && (c = Ko[a], o[c.attrName] = c.value(n) || void 0));
  }), Object.entries(o).reduce((a, c) => {
    let [h, f] = c;
    return Ve(a, h, f, e);
  }, t);
}
function Cp(n, t, e) {
  const r = e.query(n);
  if (r == null) return t;
  if (r.prototype instanceof It) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new F().insert(s, r.formats(n, e));
  } else if (r.prototype instanceof Kr && !Yr(t, `
`) && t.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return Ve(t, r.blotName, r.formats(n, e), e);
  return t;
}
function Lp(n, t) {
  return Yr(t, `
`) || t.insert(`
`), t;
}
function qp(n, t, e) {
  const r = e.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, e) : !0;
  return Ve(t, "code-block", s, e);
}
function Op() {
  return new F();
}
function kp(n, t, e) {
  const r = e.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !Yr(t, `
`))
    return t;
  let s = -1, i = n.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? t : t.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, {
    indent: s,
    ...a.attributes || {}
  }) : o, new F());
}
function Ip(n, t, e) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), Ve(t, "list", s, e);
}
function Vo(n, t, e) {
  if (!Yr(t, `
`)) {
    if (Ee(n, e) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return t.insert(`
`);
    if (t.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (Ee(r, e))
          return t.insert(`
`);
        const s = e.query(r);
        if (s && s.prototype instanceof Bt)
          return t.insert(`
`);
        r = r.firstChild;
      }
    }
  }
  return t;
}
function Rp(n, t, e) {
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), (s.fontWeight?.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), t = Object.entries(r).reduce((i, o) => {
    let [a, c] = o;
    return Ve(i, a, c, e);
  }, t), parseFloat(s.textIndent || 0) > 0 ? new F().insert("	").concat(t) : t;
}
function Mp(n, t, e) {
  const r = n.parentElement?.tagName === "TABLE" ? n.parentElement : n.parentElement?.parentElement;
  if (r != null) {
    const i = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return Ve(t, "table", i, e);
  }
  return t;
}
function Dp(n, t, e) {
  let r = n.data;
  if (n.parentElement?.tagName === "O:P")
    return t.insert(r.trim());
  if (!ra(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Sp(n, e))
      return t;
    r = r.replace(/[^\S\u00a0]/g, " "), r = r.replace(/ {2,}/g, " "), (n.previousSibling == null && n.parentElement != null && Ee(n.parentElement, e) || n.previousSibling instanceof Element && Ee(n.previousSibling, e)) && (r = r.replace(/^ /, "")), (n.nextSibling == null && n.parentElement != null && Ee(n.parentElement, e) || n.nextSibling instanceof Element && Ee(n.nextSibling, e)) && (r = r.replace(/ $/, "")), r = r.replaceAll(" ", " ");
  }
  return t.insert(r);
}
class Bp extends le {
  static DEFAULTS = {
    delay: 1e3,
    maxStack: 100,
    userOnly: !1
  };
  lastRecorded = 0;
  ignoreChange = !1;
  stack = {
    undo: [],
    redo: []
  };
  currentRange = null;
  constructor(t, e) {
    super(t, e), this.quill.on(C.events.EDITOR_CHANGE, (r, s, i, o) => {
      r === C.events.SELECTION_CHANGE ? s && o !== C.sources.SILENT && (this.currentRange = s) : r === C.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || o === C.sources.USER ? this.record(s, i) : this.transform(s)), this.currentRange = di(this.currentRange, s));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (r) => {
      r.inputType === "historyUndo" ? (this.undo(), r.preventDefault()) : r.inputType === "historyRedo" && (this.redo(), r.preventDefault());
    });
  }
  change(t, e) {
    if (this.stack[t].length === 0) return;
    const r = this.stack[t].pop();
    if (!r) return;
    const s = this.quill.getContents(), i = r.delta.invert(s);
    this.stack[e].push({
      delta: i,
      range: di(r.range, i)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(r.delta, C.sources.USER), this.ignoreChange = !1, this.restoreSelection(r);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(t, e) {
    if (t.ops.length === 0) return;
    this.stack.redo = [];
    let r = t.invert(e), s = this.currentRange;
    const i = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0
    ) {
      const o = this.stack.undo.pop();
      o && (r = r.compose(o.delta), s = o.range);
    } else
      this.lastRecorded = i;
    r.length() !== 0 && (this.stack.undo.push({
      delta: r,
      range: s
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(t) {
    Go(this.stack.undo, t), Go(this.stack.redo, t);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(t) {
    if (t.range)
      this.quill.setSelection(t.range, C.sources.USER);
    else {
      const e = jp(this.quill.scroll, t.delta);
      this.quill.setSelection(e, C.sources.USER);
    }
  }
}
function Go(n, t) {
  let e = t;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: e.transform(s.delta, !0),
      range: s.range && di(s.range, e)
    }, e = s.delta.transform(e), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function $p(n, t) {
  const e = t.ops[t.ops.length - 1];
  return e == null ? !1 : e.insert != null ? typeof e.insert == "string" && e.insert.endsWith(`
`) : e.attributes != null ? Object.keys(e.attributes).some((r) => n.query(r, H.BLOCK) != null) : !1;
}
function jp(n, t) {
  const e = t.reduce((s, i) => s + (i.delete || 0), 0);
  let r = t.length() - e;
  return $p(n, t) && (r -= 1), r;
}
function di(n, t) {
  if (!n) return n;
  const e = t.transformPosition(n.index), r = t.transformPosition(n.index + n.length);
  return {
    index: e,
    length: r - e
  };
}
class na extends le {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("drop", (r) => {
      r.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(r.clientX, r.clientY);
      else if (document.caretPositionFromPoint) {
        const o = document.caretPositionFromPoint(r.clientX, r.clientY);
        s = document.createRange(), s.setStart(o.offsetNode, o.offset), s.setEnd(o.offsetNode, o.offset);
      }
      const i = s && t.selection.normalizeNative(s);
      if (i) {
        const o = t.selection.normalizedToRange(i);
        r.dataTransfer?.files && this.upload(o, r.dataTransfer.files);
      }
    });
  }
  upload(t, e) {
    const r = [];
    Array.from(e).forEach((s) => {
      s && this.options.mimetypes?.includes(s.type) && r.push(s);
    }), r.length > 0 && this.options.handler.call(this, t, r);
  }
}
na.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n, t) {
    if (!this.quill.scroll.query("image"))
      return;
    const e = t.map((r) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(r);
    }));
    Promise.all(e).then((r) => {
      const s = r.reduce((i, o) => i.insert({
        image: o
      }), new F().retain(n.index).delete(n.length));
      this.quill.updateContents(s, P.sources.USER), this.quill.setSelection(n.index + r.length, P.sources.SILENT);
    });
  }
};
const Pp = ["insertText", "insertReplacementText"];
class Up extends le {
  constructor(t, e) {
    super(t, e), t.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || t.on(C.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(t) {
    Ii({
      range: t,
      quill: this.quill
    });
  }
  replaceText(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (t.length === 0) return !1;
    if (e) {
      const r = this.quill.getFormat(t.index, 1);
      this.deleteRange(t), this.quill.updateContents(new F().retain(t.index).insert(e, r), C.sources.USER);
    } else
      this.deleteRange(t);
    return this.quill.setSelection(t.index + e.length, 0, C.sources.SILENT), !0;
  }
  handleBeforeInput(t) {
    if (this.quill.composition.isComposing || t.defaultPrevented || !Pp.includes(t.inputType))
      return;
    const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
    if (!e || e.collapsed === !0)
      return;
    const r = Fp(t);
    if (r == null)
      return;
    const s = this.quill.selection.normalizeNative(e), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, r) && t.preventDefault();
  }
  handleCompositionStart() {
    const t = this.quill.getSelection();
    t && this.replaceText(t);
  }
}
function Fp(n) {
  return typeof n.data == "string" ? n.data : n.dataTransfer?.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const Hp = /Mac/i.test(navigator.platform), zp = 100, Kp = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || Hp && n.key === "a" && n.ctrlKey === !0);
class Vp extends le {
  isListening = !1;
  selectionChangeDeadline = 0;
  constructor(t, e) {
    super(t, e), this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(t, e) {
        let {
          line: r,
          event: s
        } = e;
        if (!(r instanceof Wt) || !r.uiNode)
          return !0;
        const i = getComputedStyle(r.domNode).direction === "rtl";
        return i && s.key !== "ArrowRight" || !i && s.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(t.index - 1, t.length + (s.shiftKey ? 1 : 0), C.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (t) => {
      !t.defaultPrevented && Kp(t) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + zp, this.isListening) return;
    this.isListening = !0;
    const t = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", t, {
      once: !0
    });
  }
  handleSelectionChange() {
    const t = document.getSelection();
    if (!t) return;
    const e = t.getRangeAt(0);
    if (e.collapsed !== !0 || e.startOffset !== 0) return;
    const r = this.quill.scroll.find(e.startContainer);
    if (!(r instanceof Wt) || !r.uiNode) return;
    const s = document.createRange();
    s.setStartAfter(r.uiNode), s.setEndAfter(r.uiNode), t.removeAllRanges(), t.addRange(s);
  }
}
C.register({
  "blots/block": xt,
  "blots/block/embed": Bt,
  "blots/break": Xt,
  "blots/container": ze,
  "blots/cursor": Vt,
  "blots/embed": _i,
  "blots/inline": _t,
  "blots/scroll": Jf,
  "blots/text": Zt,
  "modules/clipboard": Tp,
  "modules/history": Bp,
  "modules/keyboard": Kn,
  "modules/uploader": na,
  "modules/input": Up,
  "modules/uiNode": Vp
});
class Gp extends Yt {
  add(t, e) {
    let r = 0;
    if (e === "+1" || e === "-1") {
      const s = this.value(t) || 0;
      r = e === "+1" ? s + 1 : s - 1;
    } else typeof e == "number" && (r = e);
    return r === 0 ? (this.remove(t), !0) : super.add(t, r.toString());
  }
  canAdd(t, e) {
    return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
  }
  value(t) {
    return parseInt(super.value(t), 10) || void 0;
  }
}
const Wp = new Gp("indent", "ql-indent", {
  scope: H.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class Zp extends xt {
  static blotName = "blockquote";
  static tagName = "blockquote";
}
class Yp extends xt {
  static blotName = "header";
  static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
  static formats(t) {
    return this.tagName.indexOf(t.tagName) + 1;
  }
}
class Xr extends ze {
}
Xr.blotName = "list-container";
Xr.tagName = "OL";
class Qr extends xt {
  static create(t) {
    const e = super.create();
    return e.setAttribute("data-list", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-list") || void 0;
  }
  static register() {
    C.register(Xr);
  }
  constructor(t, e) {
    super(t, e);
    const r = e.ownerDocument.createElement("span"), s = (i) => {
      if (!t.isEnabled()) return;
      const o = this.statics.formats(e, t);
      o === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : o === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    r.addEventListener("mousedown", s), r.addEventListener("touchstart", s), this.attachUI(r);
  }
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e);
  }
}
Qr.blotName = "list";
Qr.tagName = "LI";
Xr.allowedChildren = [Qr];
Qr.requiredContainer = Xr;
class Mi extends _t {
  static blotName = "bold";
  static tagName = ["STRONG", "B"];
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(t) {
    super.optimize(t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
class Xp extends Mi {
  static blotName = "italic";
  static tagName = ["EM", "I"];
}
class Bn extends _t {
  static blotName = "link";
  static tagName = "A";
  static SANITIZED_URL = "about:blank";
  static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("href", this.sanitize(t)), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("target", "_blank"), e;
  }
  static formats(t) {
    return t.getAttribute("href");
  }
  static sanitize(t) {
    return sa(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
  }
  format(t, e) {
    t !== this.statics.blotName || !e ? super.format(t, e) : this.domNode.setAttribute("href", this.constructor.sanitize(e));
  }
}
function sa(n, t) {
  const e = document.createElement("a");
  e.href = n;
  const r = e.href.slice(0, e.href.indexOf(":"));
  return t.indexOf(r) > -1;
}
class Qp extends _t {
  static blotName = "script";
  static tagName = ["SUB", "SUP"];
  static create(t) {
    return t === "super" ? document.createElement("sup") : t === "sub" ? document.createElement("sub") : super.create(t);
  }
  static formats(t) {
    if (t.tagName === "SUB") return "sub";
    if (t.tagName === "SUP") return "super";
  }
}
class Jp extends Mi {
  static blotName = "strike";
  static tagName = ["S", "STRIKE"];
}
class tg extends _t {
  static blotName = "underline";
  static tagName = "U";
}
class eg extends _i {
  static blotName = "formula";
  static className = "ql-formula";
  static tagName = "SPAN";
  static create(t) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const e = super.create(t);
    return typeof t == "string" && (window.katex.render(t, e, {
      throwOnError: !1,
      errorColor: "#f00"
    }), e.setAttribute("data-value", t)), e;
  }
  static value(t) {
    return t.getAttribute("data-value");
  }
  html() {
    const {
      formula: t
    } = this.value();
    return `<span>${t}</span>`;
  }
}
const Wo = ["alt", "height", "width"];
class rg extends It {
  static blotName = "image";
  static tagName = "IMG";
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Wo.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static match(t) {
    return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
  }
  static sanitize(t) {
    return sa(t, ["http", "https", "data"]) ? t : "//:0";
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Wo.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
}
const Zo = ["height", "width"];
class ng extends Bt {
  static blotName = "video";
  static className = "ql-video";
  static tagName = "IFRAME";
  static create(t) {
    const e = super.create(t);
    return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("src", this.sanitize(t)), e;
  }
  static formats(t) {
    return Zo.reduce((e, r) => (t.hasAttribute(r) && (e[r] = t.getAttribute(r)), e), {});
  }
  static sanitize(t) {
    return Bn.sanitize(t);
  }
  static value(t) {
    return t.getAttribute("src");
  }
  format(t, e) {
    Zo.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e);
  }
  html() {
    const {
      video: t
    } = this.value();
    return `<a href="${t}">${t}</a>`;
  }
}
const Br = new Yt("code-token", "hljs", {
  scope: H.INLINE
});
class ge extends _t {
  static formats(t, e) {
    for (; t != null && t !== e.domNode; ) {
      if (t.classList && t.classList.contains(Ct.className))
        return super.formats(t, e);
      t = t.parentNode;
    }
  }
  constructor(t, e, r) {
    super(t, e, r), Br.add(this.domNode, r);
  }
  format(t, e) {
    t !== ge.blotName ? super.format(t, e) : e ? Br.add(this.domNode, e) : (Br.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), Br.value(this.domNode) || this.unwrap();
  }
}
ge.blotName = "code-token";
ge.className = "ql-token";
class Dt extends Ct {
  static create(t) {
    const e = super.create(t);
    return typeof t == "string" && e.setAttribute("data-language", t), e;
  }
  static formats(t) {
    return t.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(t, e) {
    t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e);
  }
  replaceWith(t, e) {
    return this.formatAt(0, this.length(), ge.blotName, !1), super.replaceWith(t, e);
  }
}
class Ur extends Ke {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(t, e) {
    t === Dt.blotName && (this.forceNext = !0, this.children.forEach((r) => {
      r.format(t, e);
    }));
  }
  formatAt(t, e, r, s) {
    r === Dt.blotName && (this.forceNext = !0), super.formatAt(t, e, r, s);
  }
  highlight(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null) return;
    const s = `${Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode).map((o) => o.textContent).join(`
`)}
`, i = Dt.formats(this.children.head.domNode);
    if (e || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((c, h) => c.concat(Hl(h, !1)), new F()), a = t(s, i);
        o.diff(a).reduce((c, h) => {
          let {
            retain: f,
            attributes: g
          } = h;
          return f ? (g && Object.keys(g).forEach((d) => {
            [Dt.blotName, ge.blotName].includes(d) && this.formatAt(c, f, d, g[d]);
          }), c + f) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(t, e) {
    const [r] = this.children.find(t);
    return `<pre data-language="${r ? Dt.formats(r.domNode) : "plain"}">
${zn(this.code(t, e))}
</pre>`;
  }
  optimize(t) {
    if (super.optimize(t), this.parent != null && this.children.head != null && this.uiNode != null) {
      const e = Dt.formats(this.children.head.domNode);
      e !== this.uiNode.value && (this.uiNode.value = e);
    }
  }
}
Ur.allowedChildren = [Dt];
Dt.requiredContainer = Ur;
Dt.allowedChildren = [ge, Vt, Zt, Xt];
const sg = (n, t, e) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(e, {
        language: t
      }).value;
  }
  return n.highlight(t, e).value;
};
class ia extends le {
  static register() {
    C.register(ge, !0), C.register(Dt, !0), C.register(Ur, !0);
  }
  constructor(t, e) {
    if (super(t, e), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r, s) => {
      let {
        key: i
      } = s;
      return r[i] = !0, r;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(C.events.SCROLL_BLOT_MOUNT, (t) => {
      if (!(t instanceof Ur)) return;
      const e = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r) => {
        let {
          key: s,
          label: i
        } = r;
        const o = e.ownerDocument.createElement("option");
        o.textContent = i, o.setAttribute("value", s), e.appendChild(o);
      }), e.addEventListener("change", () => {
        t.format(Dt.blotName, e.value), this.quill.root.focus(), this.highlight(t, !0);
      }), t.uiNode == null && (t.attachUI(e), t.children.head && (e.value = Dt.formats(t.children.head.domNode)));
    });
  }
  initTimer() {
    let t = null;
    this.quill.on(C.events.SCROLL_OPTIMIZE, () => {
      t && clearTimeout(t), t = setTimeout(() => {
        this.highlight(), t = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing) return;
    this.quill.update(C.sources.USER);
    const r = this.quill.getSelection();
    (t == null ? this.quill.scroll.descendants(Ur) : [t]).forEach((i) => {
      i.highlight(this.highlightBlot, e);
    }), this.quill.update(C.sources.SILENT), r != null && this.quill.setSelection(r, C.sources.SILENT);
  }
  highlightBlot(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (e = this.languages[e] ? e : "plain", e === "plain")
      return zn(t).split(`
`).reduce((s, i, o) => (o !== 0 && s.insert(`
`, {
        [Ct.blotName]: e
      }), s.insert(i)), new F());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(Ct.className), r.innerHTML = sg(this.options.hljs, e, t), Ri(this.quill.scroll, r, [(s, i) => {
      const o = Br.value(s);
      return o ? i.compose(new F().retain(i.length(), {
        [ge.blotName]: o
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((o, a, c) => (c !== 0 && o.insert(`
`, {
      [Ct.blotName]: e
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
ia.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
class Gt extends xt {
  static blotName = "table";
  static tagName = "TD";
  static create(t) {
    const e = super.create();
    return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", Di()), e;
  }
  static formats(t) {
    if (t.hasAttribute("data-row"))
      return t.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(t, e) {
    t === Gt.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
}
class Pe extends ze {
  static blotName = "table-row";
  static tagName = "TR";
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const t = this.children.head.formats(), e = this.children.tail.formats(), r = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return t.table === e.table && t.table === r.table && t.table === s.table;
    }
    return !1;
  }
  optimize(t) {
    super.optimize(t), this.children.forEach((e) => {
      if (e.next == null) return;
      const r = e.formats(), s = e.next.formats();
      if (r.table !== s.table) {
        const i = this.splitAfter(e);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
class Te extends ze {
  static blotName = "table-body";
  static tagName = "TBODY";
}
class $n extends ze {
  static blotName = "table-container";
  static tagName = "TABLE";
  balanceCells() {
    const t = this.descendants(Pe), e = t.reduce((r, s) => Math.max(s.children.length, r), 0);
    t.forEach((r) => {
      new Array(e - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = Gt.formats(r.children.head.domNode));
        const i = this.scroll.create(Gt.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(t) {
    return this.rows().map((e) => e.children.at(t));
  }
  deleteColumn(t) {
    const [e] = this.descendant(Te);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t);
      s?.remove();
    });
  }
  insertColumn(t) {
    const [e] = this.descendant(Te);
    e == null || e.children.head == null || e.children.forEach((r) => {
      const s = r.children.at(t), i = Gt.formats(r.children.head.domNode), o = this.scroll.create(Gt.blotName, i);
      r.insertBefore(o, s);
    });
  }
  insertRow(t) {
    const [e] = this.descendant(Te);
    if (e == null || e.children.head == null) return;
    const r = Di(), s = this.scroll.create(Pe.blotName);
    e.children.head.children.forEach(() => {
      const o = this.scroll.create(Gt.blotName, r);
      s.appendChild(o);
    });
    const i = e.children.at(t);
    e.insertBefore(s, i);
  }
  rows() {
    const t = this.children.head;
    return t == null ? [] : t.children.map((e) => e);
  }
}
$n.allowedChildren = [Te];
Te.requiredContainer = $n;
Te.allowedChildren = [Pe];
Pe.requiredContainer = Te;
Pe.allowedChildren = [Gt];
Gt.requiredContainer = Pe;
function Di() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class ig extends le {
  static register() {
    C.register(Gt), C.register(Pe), C.register(Te), C.register($n);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants($n).forEach((t) => {
      t.balanceCells();
    });
  }
  deleteColumn() {
    const [t, , e] = this.getTable();
    e != null && (t.deleteColumn(e.cellOffset()), this.quill.update(C.sources.USER));
  }
  deleteRow() {
    const [, t] = this.getTable();
    t != null && (t.remove(), this.quill.update(C.sources.USER));
  }
  deleteTable() {
    const [t] = this.getTable();
    if (t == null) return;
    const e = t.offset();
    t.remove(), this.quill.update(C.sources.USER), this.quill.setSelection(e, C.sources.SILENT);
  }
  getTable() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (t == null) return [null, null, null, -1];
    const [e, r] = this.quill.getLine(t.index);
    if (e == null || e.statics.blotName !== Gt.blotName)
      return [null, null, null, -1];
    const s = e.parent;
    return [s.parent.parent, s, e, r];
  }
  insertColumn(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const o = i.cellOffset();
    r.insertColumn(o + t), this.quill.update(C.sources.USER);
    let a = s.rowOffset();
    t === 0 && (a += 1), this.quill.setSelection(e.index + a, e.length, C.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(t) {
    const e = this.quill.getSelection();
    if (!e) return;
    const [r, s, i] = this.getTable(e);
    if (i == null) return;
    const o = s.rowOffset();
    r.insertRow(o + t), this.quill.update(C.sources.USER), t > 0 ? this.quill.setSelection(e, C.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, C.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(t, e) {
    const r = this.quill.getSelection();
    if (r == null) return;
    const s = new Array(t).fill(0).reduce((i) => {
      const o = new Array(e).fill(`
`).join("");
      return i.insert(o, {
        table: Di()
      });
    }, new F().retain(r.index));
    this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(r.index, C.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(C.events.SCROLL_OPTIMIZE, (t) => {
      t.some((e) => ["TD", "TR", "TBODY", "TABLE"].includes(e.target.tagName) ? (this.quill.once(C.events.TEXT_CHANGE, (r, s, i) => {
        i === C.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Yo = be("quill:toolbar");
class Bi extends le {
  constructor(t, e) {
    if (super(t, e), Array.isArray(this.options.container)) {
      const r = document.createElement("div");
      r.setAttribute("role", "toolbar"), og(r, this.options.container), t.container?.parentNode?.insertBefore(r, t.container), this.container = r;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Yo.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((r) => {
      const s = this.options.handlers?.[r];
      s && this.addHandler(r, s);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((r) => {
      this.attach(r);
    }), this.quill.on(C.events.EDITOR_CHANGE, () => {
      const [r] = this.quill.selection.getRange();
      this.update(r);
    });
  }
  addHandler(t, e) {
    this.handlers[t] = e;
  }
  attach(t) {
    let e = Array.from(t.classList).find((s) => s.indexOf("ql-") === 0);
    if (!e) return;
    if (e = e.slice(3), t.tagName === "BUTTON" && t.setAttribute("type", "button"), this.handlers[e] == null && this.quill.scroll.query(e) == null) {
      Yo.warn("ignoring attaching to nonexistent format", e, t);
      return;
    }
    const r = t.tagName === "SELECT" ? "change" : "click";
    t.addEventListener(r, (s) => {
      let i;
      if (t.tagName === "SELECT") {
        if (t.selectedIndex < 0) return;
        const a = t.options[t.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        t.classList.contains("ql-active") ? i = !1 : i = t.value || !t.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [o] = this.quill.selection.getRange();
      if (this.handlers[e] != null)
        this.handlers[e].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(e).prototype instanceof It
      ) {
        if (i = prompt(`Enter ${e}`), !i) return;
        this.quill.updateContents(new F().retain(o.index).delete(o.length).insert({
          [e]: i
        }), C.sources.USER);
      } else
        this.quill.format(e, i, C.sources.USER);
      this.update(o);
    }), this.controls.push([e, t]);
  }
  update(t) {
    const e = t == null ? {} : this.quill.getFormat(t);
    this.controls.forEach((r) => {
      const [s, i] = r;
      if (i.tagName === "SELECT") {
        let o = null;
        if (t == null)
          o = null;
        else if (e[s] == null)
          o = i.querySelector("option[selected]");
        else if (!Array.isArray(e[s])) {
          let a = e[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), o = i.querySelector(`option[value="${a}"]`);
        }
        o == null ? (i.value = "", i.selectedIndex = -1) : o.selected = !0;
      } else if (t == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const o = e[s], a = o === i.getAttribute("value") || o != null && o.toString() === i.getAttribute("value") || o == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const o = e[s] != null;
        i.classList.toggle("ql-active", o), i.setAttribute("aria-pressed", o.toString());
      }
    });
  }
}
Bi.DEFAULTS = {};
function Xo(n, t, e) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${t}`), r.setAttribute("aria-pressed", "false"), e != null ? (r.value = e, r.setAttribute("aria-label", `${t}: ${e}`)) : r.setAttribute("aria-label", t), n.appendChild(r);
}
function og(n, t) {
  Array.isArray(t[0]) || (t = [t]), t.forEach((e) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), e.forEach((s) => {
      if (typeof s == "string")
        Xo(r, s);
      else {
        const i = Object.keys(s)[0], o = s[i];
        Array.isArray(o) ? lg(r, i, o) : Xo(r, i, o);
      }
    }), n.appendChild(r);
  });
}
function lg(n, t, e) {
  const r = document.createElement("select");
  r.classList.add(`ql-${t}`), e.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
Bi.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n = this.quill.getSelection();
      if (n != null)
        if (n.length === 0) {
          const t = this.quill.getFormat();
          Object.keys(t).forEach((e) => {
            this.quill.scroll.query(e, H.INLINE) != null && this.quill.format(e, !1, C.sources.USER);
          });
        } else
          this.quill.removeFormat(n.index, n.length, C.sources.USER);
    },
    direction(n) {
      const {
        align: t
      } = this.quill.getFormat();
      n === "rtl" && t == null ? this.quill.format("align", "right", C.sources.USER) : !n && t === "right" && this.quill.format("align", !1, C.sources.USER), this.quill.format("direction", n, C.sources.USER);
    },
    indent(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t), r = parseInt(e.indent || 0, 10);
      if (n === "+1" || n === "-1") {
        let s = n === "+1" ? 1 : -1;
        e.direction === "rtl" && (s *= -1), this.quill.format("indent", r + s, C.sources.USER);
      }
    },
    link(n) {
      n === !0 && (n = prompt("Enter link URL:")), this.quill.format("link", n, C.sources.USER);
    },
    list(n) {
      const t = this.quill.getSelection(), e = this.quill.getFormat(t);
      n === "check" ? e.list === "checked" || e.list === "unchecked" ? this.quill.format("list", !1, C.sources.USER) : this.quill.format("list", "unchecked", C.sources.USER) : this.quill.format("list", n, C.sources.USER);
    }
  }
};
const ag = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', cg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', ug = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', hg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', dg = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', fg = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', pg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', gg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Qo = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', mg = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', bg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', yg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', vg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', xg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', wg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Ng = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Eg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', Ag = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', Tg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', Sg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', _g = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', Cg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', Lg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', qg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', Og = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', kg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Ig = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', Rg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', Mg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Dg = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', Bg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', $g = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', jg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', Gr = {
  align: {
    "": ag,
    center: cg,
    right: ug,
    justify: hg
  },
  background: dg,
  blockquote: fg,
  bold: pg,
  clean: gg,
  code: Qo,
  "code-block": Qo,
  color: mg,
  direction: {
    "": bg,
    rtl: yg
  },
  formula: vg,
  header: {
    1: xg,
    2: wg,
    3: Ng,
    4: Eg,
    5: Ag,
    6: Tg
  },
  italic: Sg,
  image: _g,
  indent: {
    "+1": Cg,
    "-1": Lg
  },
  link: qg,
  list: {
    bullet: Og,
    check: kg,
    ordered: Ig
  },
  script: {
    sub: Rg,
    super: Mg
  },
  strike: Dg,
  table: Bg,
  underline: $g,
  video: jg
}, Pg = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Jo = 0;
function tl(n, t) {
  n.setAttribute(t, `${n.getAttribute(t) !== "true"}`);
}
class Vn {
  constructor(t) {
    this.select = t, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), e.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), tl(this.label, "aria-expanded"), tl(this.options, "aria-hidden");
  }
  buildItem(t) {
    const e = document.createElement("span");
    e.tabIndex = "0", e.setAttribute("role", "button"), e.classList.add("ql-picker-item");
    const r = t.getAttribute("value");
    return r && e.setAttribute("data-value", r), t.textContent && e.setAttribute("data-label", t.textContent), e.addEventListener("click", () => {
      this.selectItem(e, !0);
    }), e.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(e, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), e;
  }
  buildLabel() {
    const t = document.createElement("span");
    return t.classList.add("ql-picker-label"), t.innerHTML = Pg, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
  }
  buildOptions() {
    const t = document.createElement("span");
    t.classList.add("ql-picker-options"), t.setAttribute("aria-hidden", "true"), t.tabIndex = "-1", t.id = `ql-picker-options-${Jo}`, Jo += 1, this.label.setAttribute("aria-controls", t.id), this.options = t, Array.from(this.select.options).forEach((e) => {
      const r = this.buildItem(e);
      t.appendChild(r), e.selected === !0 && this.selectItem(r);
    }), this.container.appendChild(t);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((t) => {
      this.container.setAttribute(t.name, t.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = this.container.querySelector(".ql-selected");
    t !== r && (r?.classList.remove("ql-selected"), t != null && (t.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let t;
    if (this.select.selectedIndex > -1) {
      const r = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      t = this.select.options[this.select.selectedIndex], this.selectItem(r);
    } else
      this.selectItem(null);
    const e = t != null && t !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", e);
  }
}
class oa extends Vn {
  constructor(t, e) {
    super(t), this.label.innerHTML = e, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r) => {
      r.classList.add("ql-primary");
    });
  }
  buildItem(t) {
    const e = super.buildItem(t);
    return e.style.backgroundColor = t.getAttribute("value") || "", e;
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = this.label.querySelector(".ql-color-label"), s = t && t.getAttribute("data-value") || "";
    r && (r.tagName === "line" ? r.style.stroke = s : r.style.fill = s);
  }
}
class la extends Vn {
  constructor(t, e) {
    super(t), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r) => {
      r.innerHTML = e[r.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(t, e) {
    super.selectItem(t, e);
    const r = t || this.defaultItem;
    if (r != null) {
      if (this.label.innerHTML === r.innerHTML) return;
      this.label.innerHTML = r.innerHTML;
    }
  }
}
const Ug = (n) => {
  const {
    overflowY: t
  } = getComputedStyle(n, null);
  return t !== "visible" && t !== "clip";
};
class aa {
  constructor(t, e) {
    this.quill = t, this.boundsContainer = e || document.body, this.root = t.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Ug(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(t) {
    const e = t.left + t.width / 2 - this.root.offsetWidth / 2, r = t.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${e}px`, this.root.style.top = `${r}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let o = 0;
    if (i.right > s.right && (o = s.right - i.right, this.root.style.left = `${e + o}px`), i.left < s.left && (o = s.left - i.left, this.root.style.left = `${e + o}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = t.bottom - t.top + a;
      this.root.style.top = `${r - c}px`, this.root.classList.add("ql-flip");
    }
    return o;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const Fg = [!1, "center", "right", "justify"], Hg = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], zg = [!1, "serif", "monospace"], Kg = ["1", "2", "3", !1], Vg = ["small", !1, "large", "huge"];
class Jr extends mr {
  constructor(t, e) {
    super(t, e);
    const r = (s) => {
      if (!document.body.contains(t.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    t.emitter.listenDOM("click", document.body, r);
  }
  addModule(t) {
    const e = super.addModule(t);
    return t === "toolbar" && this.extendToolbar(e), e;
  }
  buildButtons(t, e) {
    Array.from(t).forEach((r) => {
      (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), e[i] != null))
          if (i === "direction")
            r.innerHTML = e[i][""] + e[i].rtl;
          else if (typeof e[i] == "string")
            r.innerHTML = e[i];
          else {
            const o = r.value || "";
            o != null && e[i][o] && (r.innerHTML = e[i][o]);
          }
      });
    });
  }
  buildPickers(t, e) {
    this.pickers = Array.from(t).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && Rr(s, Fg), typeof e.align == "object"))
        return new la(s, e.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && Rr(s, Hg, i === "background" ? "#ffffff" : "#000000"), new oa(s, e[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? Rr(s, zg) : s.classList.contains("ql-header") ? Rr(s, Kg) : s.classList.contains("ql-size") && Rr(s, Vg)), new Vn(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(P.events.EDITOR_CHANGE, r);
  }
}
Jr.DEFAULTS = Ae({}, mr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n = this.container.querySelector("input.ql-image[type=file]");
          n == null && (n = document.createElement("input"), n.setAttribute("type", "file"), n.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n.classList.add("ql-image"), n.addEventListener("change", () => {
            const t = this.quill.getSelection(!0);
            this.quill.uploader.upload(t, n.files), n.value = "";
          }), this.container.appendChild(n)), n.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class ca extends aa {
  constructor(t, e) {
    super(t, e), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (t) => {
      t.key === "Enter" ? (this.save(), t.preventDefault()) : t.key === "Escape" && (this.cancel(), t.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    e != null ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r = this.quill.getBounds(this.quill.selection.savedRange);
    r != null && this.position(r), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""), this.root.setAttribute("data-mode", t);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: t
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: e
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, P.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, P.sources.USER)), this.quill.root.scrollTop = e;
        break;
      }
      case "video":
        t = Gg(t);
      // eslint-disable-next-line no-fallthrough
      case "formula": {
        if (!t) break;
        const e = this.quill.getSelection(!0);
        if (e != null) {
          const r = e.index + e.length;
          this.quill.insertEmbed(
            r,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            t,
            P.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r + 1, " ", P.sources.USER), this.quill.setSelection(r + 2, P.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function Gg(n) {
  let t = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return t ? `${t[1] || "https"}://www.youtube.com/embed/${t[2]}?showinfo=0` : (t = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${t[1] || "https"}://player.vimeo.com/video/${t[2]}/` : n;
}
function Rr(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  t.forEach((r) => {
    const s = document.createElement("option");
    r === e ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const Wg = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class Zg extends ca {
  static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
  constructor(t, e) {
    super(t, e), this.quill.on(P.events.EDITOR_CHANGE, (r, s, i, o) => {
      if (r === P.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && o === P.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], h = this.quill.getIndex(c), f = Math.min(c.length() - 1, s.index + s.length - h), g = this.quill.getBounds(new je(h, f));
            g != null && this.position(g);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(P.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const t = this.quill.getSelection();
        if (t != null) {
          const e = this.quill.getBounds(t);
          e != null && this.position(e);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(t) {
    const e = super.position(t), r = this.root.querySelector(".ql-tooltip-arrow");
    return r.style.marginLeft = "", e !== 0 && (r.style.marginLeft = `${-1 * e - r.offsetWidth / 2}px`), e;
  }
}
class ua extends Jr {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Wg), super(t, e), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(t) {
    this.tooltip = new Zg(this.quill, this.options.bounds), t.container != null && (this.tooltip.root.appendChild(t.container), this.buildButtons(t.container.querySelectorAll("button"), Gr), this.buildPickers(t.container.querySelectorAll("select"), Gr));
  }
}
ua.DEFAULTS = Ae({}, Jr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          n ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, C.sources.USER);
        }
      }
    }
  }
});
const Yg = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class Xg extends ca {
  static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
  preview = this.root.querySelector("a.ql-preview");
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (t) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), t.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (t) => {
      if (this.linkRange != null) {
        const e = this.linkRange;
        this.restoreFocus(), this.quill.formatText(e, "link", !1, P.sources.USER), delete this.linkRange;
      }
      t.preventDefault(), this.hide();
    }), this.quill.on(P.events.SELECTION_CHANGE, (t, e, r) => {
      if (t != null) {
        if (t.length === 0 && r === P.sources.USER) {
          const [s, i] = this.quill.scroll.descendant(Bn, t.index);
          if (s != null) {
            this.linkRange = new je(t.index - i, s.length());
            const o = Bn.formats(s.domNode);
            this.preview.textContent = o, this.preview.setAttribute("href", o), this.show();
            const a = this.quill.getBounds(this.linkRange);
            a != null && this.position(a);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
class ha extends Jr {
  constructor(t, e) {
    e.modules.toolbar != null && e.modules.toolbar.container == null && (e.modules.toolbar.container = Yg), super(t, e), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(t) {
    t.container != null && (t.container.classList.add("ql-snow"), this.buildButtons(t.container.querySelectorAll("button"), Gr), this.buildPickers(t.container.querySelectorAll("select"), Gr), this.tooltip = new Xg(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (e, r) => {
      t.handlers.link.call(t, !r.format.link);
    }));
  }
}
ha.DEFAULTS = Ae({}, Jr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          if (n) {
            const t = this.quill.getSelection();
            if (t == null || t.length === 0) return;
            let e = this.quill.getText(t);
            /^\S+@\S+\.\S+$/.test(e) && e.indexOf("mailto:") !== 0 && (e = `mailto:${e}`);
            const {
              tooltip: r
            } = this.quill.theme;
            r.edit("link", e);
          } else
            this.quill.format("link", !1, C.sources.USER);
        }
      }
    }
  }
});
C.register({
  "attributors/attribute/direction": Wl,
  "attributors/class/align": Kl,
  "attributors/class/background": rp,
  "attributors/class/color": ep,
  "attributors/class/direction": Zl,
  "attributors/class/font": Ql,
  "attributors/class/size": ta,
  "attributors/style/align": Vl,
  "attributors/style/background": qi,
  "attributors/style/color": Li,
  "attributors/style/direction": Yl,
  "attributors/style/font": Jl,
  "attributors/style/size": ea
}, !0);
C.register({
  "formats/align": Kl,
  "formats/direction": Zl,
  "formats/indent": Wp,
  "formats/background": qi,
  "formats/color": Li,
  "formats/font": Ql,
  "formats/size": ta,
  "formats/blockquote": Zp,
  "formats/code-block": Ct,
  "formats/header": Yp,
  "formats/list": Qr,
  "formats/bold": Mi,
  "formats/code": Oi,
  "formats/italic": Xp,
  "formats/link": Bn,
  "formats/script": Qp,
  "formats/strike": Jp,
  "formats/underline": tg,
  "formats/formula": eg,
  "formats/image": rg,
  "formats/video": ng,
  "modules/syntax": ia,
  "modules/table": ig,
  "modules/toolbar": Bi,
  "themes/bubble": ua,
  "themes/snow": ha,
  "ui/icons": Gr,
  "ui/picker": Vn,
  "ui/icon-picker": la,
  "ui/color-picker": oa,
  "ui/tooltip": aa
}, !0);
class Gn extends re.Component {
  constructor(t) {
    super(t), this.editingAreaRef = ji(), this.containerRef = ji(), this.dirtyProps = [
      "modules",
      "formats",
      "bounds",
      "theme",
      "children"
    ], this.cleanProps = [
      "id",
      "className",
      "style",
      "placeholder",
      "tabIndex",
      "onChange",
      "onChangeSelection",
      "onFocus",
      "onBlur",
      "onKeyPress",
      "onKeyDown",
      "onKeyUp"
    ], this.state = {
      generation: 0
    }, this.selection = null, this.onEditorChange = (r, s, i, o) => {
      r === "text-change" ? this.onEditorChangeText?.(this.editor.getSemanticHTML(), s, o, this.unprivilegedEditor) : r === "selection-change" && this.onEditorChangeSelection?.(s, o, this.unprivilegedEditor);
    };
    const e = this.isControlled() ? t.value : t.defaultValue;
    this.value = e ?? "";
  }
  validateProps(t) {
    if (re.Children.count(t.children) > 1)
      throw new Error("The Quill editing area can only be composed of a single React element.");
    if (re.Children.count(t.children) && re.Children.only(t.children)?.type === "textarea")
      throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
    if (this.lastDeltaChangeSet && t.value === this.lastDeltaChangeSet)
      throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
  }
  shouldComponentUpdate(t, e) {
    if (this.validateProps(t), !this.editor || this.state.generation !== e.generation)
      return !0;
    if ("value" in t) {
      const r = this.getEditorContents(), s = t.value ?? "";
      this.isEqualValue(s, r) || this.setEditorContents(this.editor, s);
    }
    return t.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, t.readOnly), [...this.cleanProps, ...this.dirtyProps].some((r) => !we(t[r], this.props[r]));
  }
  shouldComponentRegenerate(t) {
    return this.dirtyProps.some((e) => !we(t[e], this.props[e]));
  }
  componentDidMount() {
    this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
  }
  componentWillUnmount() {
    this.destroyEditor();
  }
  componentDidUpdate(t, e) {
    if (this.editor && this.shouldComponentRegenerate(t)) {
      const r = this.editor.getContents(), s = this.editor.getSelection();
      this.regenerationSnapshot = { delta: r, selection: s }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
    }
    if (this.editor && t.placeholder !== this.props.placeholder && (this.editor.root.dataset.placeholder = this.props.placeholder || ""), this.state.generation !== e.generation) {
      const { delta: r, selection: s } = this.regenerationSnapshot;
      delete this.regenerationSnapshot, this.instantiateEditor();
      const i = this.editor;
      i.setContents(r), el(() => this.setEditorSelection(i, s));
    }
  }
  instantiateEditor() {
    this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
  }
  destroyEditor() {
    if (!this.editor)
      return;
    this.unhookEditor(this.editor);
    const t = this.props.modules?.toolbar;
    if (!(typeof t == "object" && t && "container" in t && typeof t.container == "string" || typeof t == "string")) {
      const r = this.containerRef.current?.querySelector(".ql-toolbar");
      r && r.remove();
    }
    delete this.editor;
  }
  /*
  We consider the component to be controlled if `value` is being sent in props.
  */
  isControlled() {
    return "value" in this.props;
  }
  getEditorConfig() {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme
    };
  }
  getEditor() {
    if (!this.editor)
      throw new Error("Accessing non-instantiated editor");
    return this.editor;
  }
  /**
  Creates an editor on the given element. The editor will be passed the
  configuration, have its events bound,
  */
  createEditor(t, e) {
    const r = new C(t, e);
    return e.tabIndex != null && this.setEditorTabIndex(r, e.tabIndex), this.hookEditor(r), r;
  }
  hookEditor(t) {
    this.unprivilegedEditor = this.makeUnprivilegedEditor(t), t.on("editor-change", this.onEditorChange);
  }
  unhookEditor(t) {
    t.off("editor-change", this.onEditorChange);
  }
  getEditorContents() {
    return this.value;
  }
  getEditorSelection() {
    return this.selection;
  }
  /*
  True if the value is a Delta instance or a Delta look-alike.
  */
  isDelta(t) {
    return t && t.ops;
  }
  /*
  Special comparison function that knows how to compare Deltas.
  */
  isEqualValue(t, e) {
    return this.isDelta(t) && this.isDelta(e) ? we(t.ops, e.ops) : we(t, e);
  }
  /*
  Replace the contents of the editor, but keep the previous selection hanging
  around so that the cursor won't move.
  */
  setEditorContents(t, e) {
    this.value = e;
    const r = this.getEditorSelection();
    typeof e == "string" ? t.setContents(t.clipboard.convert({ html: e })) : t.setContents(e), el(() => this.setEditorSelection(t, r));
  }
  setEditorSelection(t, e) {
    if (this.selection = e, e) {
      const r = t.getLength();
      e.index = Math.max(0, Math.min(e.index, r - 1)), e.length = Math.max(0, Math.min(e.length, r - 1 - e.index)), t.setSelection(e);
    }
  }
  setEditorTabIndex(t, e) {
    t?.scroll?.domNode && (t.scroll.domNode.tabIndex = e);
  }
  setEditorReadOnly(t, e) {
    e ? t.disable() : t.enable();
  }
  /*
  Returns a weaker, unprivileged proxy object that only exposes read-only
  accessors found on the editor instance, without any state-modifying methods.
  */
  makeUnprivilegedEditor(t) {
    const e = t;
    return {
      getHTML: () => e.root.innerHTML,
      getSemanticHTML: e.getSemanticHTML.bind(e),
      getLength: e.getLength.bind(e),
      getText: e.getText.bind(e),
      getContents: e.getContents.bind(e),
      getSelection: e.getSelection.bind(e),
      getBounds: e.getBounds.bind(e)
    };
  }
  getEditingArea() {
    const t = this.editingAreaRef.current;
    if (!t)
      throw new Error("Cannot find element for editing area");
    if (t.nodeType === 3)
      throw new Error("Editing area cannot be a text node");
    return t;
  }
  /*
  Renders an editor area, unless it has been provided one to clone.
  */
  renderEditingArea() {
    const { children: t, preserveWhitespace: e } = this.props, { generation: r } = this.state, s = {
      key: r,
      ref: this.editingAreaRef
    };
    return re.Children.count(t) ? re.cloneElement(re.Children.only(t), s) : e ? re.createElement("pre", { ...s }) : re.createElement("div", { ...s });
  }
  render() {
    return re.createElement("div", { ref: this.containerRef, id: this.props.id, style: this.props.style, key: this.state.generation, className: `quill ${this.props.className ?? ""}`, onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
  }
  onEditorChangeText(t, e, r, s) {
    if (!this.editor)
      return;
    const i = this.isDelta(this.value) ? s.getContents() : s.getSemanticHTML();
    i !== this.getEditorContents() && (this.lastDeltaChangeSet = e, this.value = i, this.props.onChange?.(t, e, r, s));
  }
  onEditorChangeSelection(t, e, r) {
    if (!this.editor)
      return;
    const s = this.getEditorSelection(), i = !s && t, o = s && !t;
    we(t, s) || (this.selection = t, this.props.onChangeSelection?.(t, e, r), i ? this.props.onFocus?.(t, e, r) : o && this.props.onBlur?.(s, e, r));
  }
  focus() {
    this.editor && this.editor.focus();
  }
  blur() {
    this.editor && (this.selection = null, this.editor.blur());
  }
}
Gn.displayName = "React Quill";
Gn.Quill = C;
Gn.defaultProps = {
  theme: "snow",
  modules: {},
  readOnly: !1
};
function el(n) {
  Promise.resolve().then(n);
}
const Qg = {
  toolbar: [
    [{ header: [1, 2, 3, !1] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "code-block"],
    ["blockquote"],
    [{ script: "sub" }, { script: "super" }],
    ["clean"]
  ],
  clipboard: {
    matchVisual: !1
  },
  history: {
    delay: 1e3,
    maxStack: 50,
    userOnly: !0
  }
}, Jg = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "color",
  "background",
  "link",
  "image",
  "code-block",
  "blockquote",
  "script"
];
function tm({
  className: n,
  label: t,
  error: e,
  required: r,
  id: s,
  size: i = "md",
  modules: o,
  formats: a,
  placeholder: c,
  value: h,
  onChange: f,
  readOnly: g,
  ...d
}) {
  const y = z.useId(), x = s || y, E = t || e, N = /* @__PURE__ */ b("div", { className: "relative w-full", children: /* @__PURE__ */ b(
    Gn,
    {
      id: x,
      "data-slot": "editor",
      "data-size": i,
      "aria-invalid": !!e,
      theme: "snow",
      modules: o || Qg,
      formats: a || Jg,
      placeholder: c,
      value: h,
      onChange: f,
      readOnly: g,
      className: k(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        e && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !e && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        g && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        n
      ),
      ...d
    }
  ) });
  return E ? /* @__PURE__ */ $("div", { className: "flex flex-col gap-1", children: [
    t && /* @__PURE__ */ $(Lt, { htmlFor: x, children: [
      t,
      r && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    N,
    e && /* @__PURE__ */ b("div", { className: "text-destructive text-sm", role: "alert", children: e })
  ] }) : N;
}
function Mm({
  control: n,
  name: t,
  label: e,
  className: r,
  wrapperClassName: s,
  required: i = !1,
  callback: o = () => {
  },
  ...a
}) {
  const c = kt({ control: n, name: t }), h = Ut(c.errors, `${t}.message`);
  return /* @__PURE__ */ b("div", { className: k("w-full", s), children: /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: f }) => /* @__PURE__ */ b(
        tm,
        {
          ...a,
          value: f.value || "",
          onChange: (g) => {
            f.onChange(g), o(g);
          },
          label: e,
          error: h,
          required: i,
          className: r
        }
      )
    }
  ) });
}
function Dm({
  name: n,
  control: t
}) {
  const e = kt({
    control: t,
    name: n
  }), r = Ut(e.errors, `${n}.message`);
  return /* @__PURE__ */ b(
    "p",
    {
      className: k(
        "text-xs text-destructive hidden",
        ya(r) && "input-error block mt-1.5"
      ),
      children: r
    }
  );
}
function em({
  className: n,
  value: t,
  ...e
}) {
  return /* @__PURE__ */ b(
    Wi.Root,
    {
      "data-slot": "progress",
      className: k("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", n),
      ...e,
      children: /* @__PURE__ */ b(
        Wi.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
function rm({
  value: n = [],
  onChange: t,
  accept: e,
  multiple: r = !1,
  maxSize: s,
  maxFiles: i,
  disabled: o = !1,
  onError: a,
  showPreview: c = !0,
  showProgress: h = !1,
  className: f,
  dropzoneClassName: g,
  placeholder: d,
  uploadText: y
}) {
  const [x, E] = z.useState(!1), _ = (A) => A && typeof A == "object" && "name" in A && "size" in A && "type" in A && "lastModified" in A && !("file" in A), [v, N] = z.useState(() => !n || n.length === 0 ? [] : n.map((A) => _(A) ? {
    file: A,
    preview: A.type.startsWith("image/") ? URL.createObjectURL(A) : void 0,
    status: "success"
  } : A)), R = z.useRef(null), j = z.useRef(v);
  z.useEffect(() => {
    j.current = v;
  }, [v]), z.useEffect(() => () => {
    j.current.forEach((A) => {
      A.preview && URL.revokeObjectURL(A.preview);
    });
  }, []), z.useEffect(() => {
    if (!n || n.length === 0) {
      j.current.forEach((D) => {
        D.preview && URL.revokeObjectURL(D.preview);
      }), j.current.length > 0 && N([]);
      return;
    }
    const A = n.map((O) => _(O) ? O : O.file), L = j.current.map((O) => O.file), T = A.map((O) => `${O.name}-${O.size}`).join(","), I = L.map((O) => `${O.name}-${O.size}`).join(",");
    if (T === I && A.length === L.length)
      return;
    j.current.forEach((O) => {
      O.preview && URL.revokeObjectURL(O.preview);
    });
    const M = n.map((O) => _(O) ? {
      file: O,
      preview: O.type.startsWith("image/") ? URL.createObjectURL(O) : void 0,
      status: "success"
    } : O);
    N(M);
  }, [n]);
  const U = (A) => {
    if (s && A.size > s)
      return `File size exceeds ${Ds(s)}`;
    if (e) {
      const L = e.split(",").map((O) => O.trim()), T = A.type, I = A.name.toLowerCase();
      if (!(L.some((O) => O.startsWith(".") ? I.endsWith(O.toLowerCase()) : O.endsWith("/*") ? T.startsWith(O.slice(0, -1)) : T === O || T.match(O.replace("*", ".*"))) || L.some((O) => I.endsWith(O.toLowerCase()))))
        return `File type not allowed. Accepted types: ${e}`;
    }
    return null;
  }, J = (A) => {
    const L = [], T = [];
    if (i && v.length + A.length > i) {
      const M = `Maximum ${i} file(s) allowed`;
      L.push(M), a?.(M);
      return;
    }
    if (A.forEach((M) => {
      const O = U(M);
      if (O)
        L.push(`${M.name}: ${O}`), a?.(O);
      else {
        const D = {
          file: M,
          preview: M.type.startsWith("image/") ? URL.createObjectURL(M) : void 0,
          status: "success"
        };
        T.push(D);
      }
    }), L.length > 0 && T.length === 0)
      return;
    const I = r ? [...v, ...T] : T;
    N(I), t?.(I.map((M) => M.file));
  }, tt = (A) => {
    if (A.preventDefault(), A.stopPropagation(), E(!1), o) return;
    const L = Array.from(A.dataTransfer.files);
    L.length > 0 && J(L);
  }, st = (A) => {
    A.preventDefault(), A.stopPropagation(), o || E(!0);
  }, Y = (A) => {
    A.preventDefault(), A.stopPropagation(), E(!1);
  }, rt = (A) => {
    const L = Array.from(A.target.files || []);
    L.length > 0 && J(L), R.current && (R.current.value = "");
  }, m = (A) => {
    const L = v[A];
    L.preview && URL.revokeObjectURL(L.preview);
    const T = v.filter((I, M) => M !== A);
    N(T), t?.(T.map((I) => I.file));
  }, q = () => {
    !o && R.current && R.current.click();
  }, w = (A) => A.type.startsWith("image/") ? /* @__PURE__ */ b(Ta, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ b(Sa, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ $("div", { className: k("w-full space-y-4", f), "data-slot": "file-upload", children: [
    /* @__PURE__ */ $(
      "div",
      {
        onClick: q,
        onDrop: tt,
        onDragOver: st,
        onDragLeave: Y,
        className: k(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          x && !o && "border-primary bg-primary/5",
          !x && !o && "border-input hover:border-primary/50 hover:bg-accent/50",
          o && "cursor-not-allowed opacity-50",
          g
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ b(
            "input",
            {
              ref: R,
              type: "file",
              accept: e,
              multiple: r,
              disabled: o,
              onChange: rt,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ $("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ b(sl, { className: k("h-8 w-8 mb-2", o ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ $("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ b("span", { className: "font-semibold", children: y || "Click to upload" }),
              !o && " or drag and drop"
            ] }),
            /* @__PURE__ */ $("p", { className: "text-xs text-muted-foreground", children: [
              d || e || "Any file",
              r && " (multiple files allowed)",
              s && ` (max ${Ds(s)})`
            ] })
          ] })
        ]
      }
    ),
    c && v.length > 0 && /* @__PURE__ */ b("div", { className: "space-y-2", "data-slot": "file-upload-list", children: v.map((A, L) => {
      const { file: T, preview: I, progress: M, status: O, error: D } = A, W = T.type.startsWith("image/");
      return /* @__PURE__ */ $(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ b("div", { className: "flex-shrink-0", children: W && I ? /* @__PURE__ */ b(
              "img",
              {
                src: I,
                alt: T.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ b("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: w(T) }) }),
            /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ $("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ b("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: T.name }),
                O === "success" && /* @__PURE__ */ b(Ea, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                O === "error" && /* @__PURE__ */ b(Aa, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: Ds(T.size) }),
              D && /* @__PURE__ */ b("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: D }),
              h && M !== void 0 && /* @__PURE__ */ b("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ b(em, { value: M, className: "h-1" }) })
            ] }),
            !o && /* @__PURE__ */ $(
              ne,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (G) => {
                  G.stopPropagation(), m(L);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ b(il, { className: "h-4 w-4" }),
                  /* @__PURE__ */ b("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${T.name}-${L}`
      );
    }) })
  ] });
}
function Bm({
  control: n,
  name: t,
  label: e,
  error: r,
  required: s = !1,
  wrapperClassName: i,
  ...o
}) {
  const a = kt({ control: n, name: t }), c = r || Ut(a.errors, `${t}.message`);
  return /* @__PURE__ */ $("div", { className: k("w-full", i), "data-slot": "rhf-file-upload", children: [
    e && /* @__PURE__ */ $(Lt, { htmlFor: t, className: "mb-2 block", children: [
      e,
      s && /* @__PURE__ */ b("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ b(
      Pt,
      {
        control: n,
        name: t,
        render: ({ field: { onChange: h, value: f, ...g } }) => {
          const d = f ? (Array.isArray(f) ? f : [f]).filter(Boolean) : [];
          return /* @__PURE__ */ b(
            rm,
            {
              ...o,
              ...g,
              value: d,
              onChange: (y) => {
                o.multiple ? h(y) : h(y.length > 0 ? y[0] : void 0);
              },
              onError: (y) => {
                console.error("File upload error:", y);
              },
              disabled: o.disabled
            }
          );
        }
      }
    ),
    c && /* @__PURE__ */ b("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: c })
  ] });
}
const nm = (n, t) => t === "text" || !n ? n : t === "integer" || t === "currency" ? n.replace(/\D/g, "") : t === "decimal" ? n.replace(/[^\d.,]/g, "").replace(/\./g, ",") : n;
function $m({
  control: n,
  name: t,
  label: e,
  format: r = "text",
  required: s,
  wrapperClassName: i,
  callback: o = () => {
  },
  ...a
}) {
  const c = kt({ control: n, name: t }), h = Ut(c.errors, `${t}.message`);
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: f }) => /* @__PURE__ */ b("div", { className: k("w-full", i), children: /* @__PURE__ */ b(
        Wr,
        {
          ...a,
          ...f,
          type: "text",
          label: e,
          error: h,
          required: s,
          value: f.value || "",
          onChange: (g) => {
            const d = nm(g.target.value, r);
            f.onChange(d), o(d);
          }
        }
      ) })
    }
  );
}
function jm({
  control: n,
  register: t,
  name: e,
  label: r,
  placeholder: s,
  className: i,
  wrapperClassName: o,
  required: a = !1,
  ...c
}) {
  const h = kt({ control: n, name: e }), f = Ut(h.errors, `${e}.message`);
  return /* @__PURE__ */ b("div", { className: k("w-full", o), children: /* @__PURE__ */ b(
    Wr,
    {
      ...c,
      ...t(e),
      label: r,
      error: f,
      required: a,
      className: i,
      placeholder: s
    }
  ) });
}
function sm({ ...n }) {
  return /* @__PURE__ */ b(jt.Root, { "data-slot": "select", ...n });
}
function im({ ...n }) {
  return /* @__PURE__ */ b(jt.Value, { "data-slot": "select-value", ...n });
}
function om({
  className: n,
  size: t = "md",
  children: e,
  label: r,
  error: s,
  required: i,
  id: o,
  ...a
}) {
  const c = r || s, h = fi[t ?? "md"], f = /* @__PURE__ */ $(
    jt.Trigger,
    {
      id: o,
      "data-slot": "select-trigger",
      "data-size": t,
      "aria-invalid": !!s,
      className: k(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-transparent whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        h.height,
        h.text,
        h.padding,
        {
          "[&_svg:not([class*='size-'])]:size-3": t === "xxs",
          "[&_svg:not([class*='size-'])]:size-3.5": t === "xs",
          "[&_svg:not([class*='size-'])]:size-4": t === "sm" || t === "md",
          "[&_svg:not([class*='size-'])]:size-5": t === "lg" || t === "xl",
          "[&_svg:not([class*='size-'])]:size-6": t === "xxl"
        },
        s ? "focus-visible:border-destructive focus-visible:ring-destructive focus-visible:ring-[3px] border-destructive" : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ b(jt.Icon, { asChild: !0, children: /* @__PURE__ */ b(gi, { className: k("opacity-50", h.icon) }) })
      ]
    }
  );
  return c ? /* @__PURE__ */ $("div", { className: "flex flex-col gap-1", children: [
    r && /* @__PURE__ */ $(Lt, { htmlFor: o, children: [
      r,
      i && /* @__PURE__ */ b("span", { className: "text-destructive", children: "*" })
    ] }),
    f,
    s && /* @__PURE__ */ b("div", { className: "text-sm text-destructive", role: "alert", children: s })
  ] }) : f;
}
function lm({
  className: n,
  children: t,
  position: e = "item-aligned",
  align: r = "center",
  ...s
}) {
  return /* @__PURE__ */ b(jt.Portal, { children: /* @__PURE__ */ $(
    jt.Content,
    {
      "data-slot": "select-content",
      className: k(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        e === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        n
      ),
      position: e,
      align: r,
      ...s,
      children: [
        /* @__PURE__ */ b(cm, {}),
        /* @__PURE__ */ b(
          jt.Viewport,
          {
            className: k(
              "p-1",
              e === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ b(um, {})
      ]
    }
  ) });
}
function am({
  className: n,
  children: t,
  ...e
}) {
  return /* @__PURE__ */ $(
    jt.Item,
    {
      "data-slot": "select-item",
      className: k(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        n
      ),
      ...e,
      children: [
        /* @__PURE__ */ b(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ b(jt.ItemIndicator, { children: /* @__PURE__ */ b(pi, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ b(jt.ItemText, { children: t })
      ]
    }
  );
}
function cm({
  className: n,
  ...t
}) {
  return /* @__PURE__ */ b(
    jt.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: k("flex justify-center items-center py-1 cursor-default", n),
      ...t,
      children: /* @__PURE__ */ b(_a, { className: "size-4" })
    }
  );
}
function um({
  className: n,
  ...t
}) {
  return /* @__PURE__ */ b(
    jt.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: k("flex justify-center items-center py-1 cursor-default", n),
      ...t,
      children: /* @__PURE__ */ b(gi, { className: "size-4" })
    }
  );
}
function Pm({
  control: n,
  name: t,
  options: e,
  label: r,
  error: s,
  required: i = !1,
  placeholder: o = "Select options...",
  wrapperClassName: a
}) {
  const c = kt({ control: n, name: t }), h = s || Ut(c.errors, `${t}.message`);
  return /* @__PURE__ */ $("div", { className: k("w-full", a), children: [
    r && /* @__PURE__ */ $(Lt, { htmlFor: t, className: "mb-2 block", children: [
      r,
      i && /* @__PURE__ */ b("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ b(
      Pt,
      {
        control: n,
        name: t,
        render: ({ field: f }) => {
          const g = Array.isArray(f.value) ? f.value : [];
          return /* @__PURE__ */ $("div", { className: "space-y-2", children: [
            /* @__PURE__ */ $(
              sm,
              {
                value: "",
                onValueChange: (d) => {
                  g.includes(d) || f.onChange([...g, d]);
                },
                children: [
                  /* @__PURE__ */ b(om, { className: k(h && "border-destructive"), children: /* @__PURE__ */ b(im, { placeholder: o }) }),
                  /* @__PURE__ */ b(lm, { children: e.map((d) => /* @__PURE__ */ b(
                    am,
                    {
                      value: d.value,
                      disabled: d.disabled || g.includes(d.value),
                      children: d.label
                    },
                    d.value
                  )) })
                ]
              }
            ),
            g.length > 0 && /* @__PURE__ */ b("div", { className: "flex flex-wrap gap-2", children: g.map((d) => {
              const y = e.find((x) => x.value === d);
              return /* @__PURE__ */ $(ll, { variant: "secondary", className: "gap-1", children: [
                y?.label || d,
                /* @__PURE__ */ b(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      f.onChange(g.filter((x) => x !== d));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ b(il, { className: "h-3 w-3" })
                  }
                )
              ] }, d);
            }) })
          ] });
        }
      }
    ),
    h && /* @__PURE__ */ b("p", { className: "text-sm text-destructive mt-1", children: h })
  ] });
}
function Um({
  control: n,
  register: t,
  name: e,
  label: r,
  placeholder: s,
  className: i,
  wrapperClassName: o,
  required: a = !1,
  min: c,
  max: h,
  step: f,
  ...g
}) {
  const d = kt({ control: n, name: e }), y = Ut(d.errors, `${e}.message`);
  return /* @__PURE__ */ b("div", { className: k("w-full", o), children: /* @__PURE__ */ b(
    Wr,
    {
      ...g,
      ...t(e, { valueAsNumber: !0 }),
      type: "number",
      label: r,
      error: y,
      required: a,
      className: i,
      placeholder: s,
      min: c,
      max: h,
      step: f
    }
  ) });
}
function hm({
  className: n,
  ...t
}) {
  return /* @__PURE__ */ b(
    Ra.Root,
    {
      "data-slot": "radio-group",
      className: k("grid gap-3", n),
      ...t
    }
  );
}
function Fm({
  control: n,
  name: t,
  label: e,
  required: r,
  children: s,
  className: i,
  callback: o = () => {
  },
  onBeforeChange: a,
  ...c
}) {
  const h = (f, g) => {
    const d = () => {
      g.onChange(f), o(f);
    };
    a ? a(f, g.value, d) : d();
  };
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: f, fieldState: { error: g } }) => /* @__PURE__ */ $("div", { className: "space-y-1.5 w-full", children: [
        e && /* @__PURE__ */ $(
          Lt,
          {
            htmlFor: c.id || t,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              e,
              r && /* @__PURE__ */ b("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ b(
          hm,
          {
            ...c,
            id: c.id || t,
            className: k("flex flex-row gap-4", i),
            onValueChange: (d) => {
              h(d, f);
            },
            value: f.value?.toString(),
            children: s
          }
        ),
        g && /* @__PURE__ */ b("p", { className: "text-xs text-destructive", children: g.message })
      ] })
    }
  );
}
function dm({
  className: n,
  size: t = "md",
  ...e
}) {
  const r = fi[t ?? "md"], s = {
    xxs: { height: "h-3.5", width: "w-6", thumb: r.icon },
    xs: { height: "h-4", width: "w-7", thumb: r.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: r.icon },
    md: { height: "h-5", width: "w-9", thumb: r.icon },
    lg: { height: "h-6", width: "w-11", thumb: r.icon },
    xl: { height: "h-6", width: "w-12", thumb: r.icon },
    xxl: { height: "h-7", width: "w-14", thumb: r.icon }
  }[t ?? "md"];
  return /* @__PURE__ */ b(
    Zi.Root,
    {
      "data-slot": "switch",
      "data-size": t,
      className: k(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        s.height,
        s.width,
        n
      ),
      ...e,
      children: /* @__PURE__ */ b(
        Zi.Thumb,
        {
          "data-slot": "switch-thumb",
          className: k(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            s.thumb
          )
        }
      )
    }
  );
}
function Hm({
  control: n,
  name: t,
  label: e,
  required: r,
  callback: s = () => {
  },
  onBeforeChange: i,
  className: o,
  ...a
}) {
  const c = (h, f) => {
    const g = () => {
      f.onChange(h), s(h);
    };
    i ? i(h, f.value, g) : g();
  };
  return /* @__PURE__ */ b(
    Pt,
    {
      control: n,
      name: t,
      render: ({ field: h, fieldState: { error: f } }) => /* @__PURE__ */ $("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ $("div", { className: k("flex items-center gap-3", o), children: [
          e && /* @__PURE__ */ $(
            Lt,
            {
              htmlFor: a.id || t,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                e,
                r && /* @__PURE__ */ b("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ b(
            dm,
            {
              ...a,
              id: a.id || t,
              checked: !!h.value,
              onCheckedChange: (g) => {
                c(g, h);
              }
            }
          )
        ] }),
        f && /* @__PURE__ */ b("p", { className: "text-xs text-destructive", children: f.message })
      ] })
    }
  );
}
function zm({
  control: n,
  register: t,
  name: e,
  label: r,
  placeholder: s,
  className: i,
  wrapperClassName: o,
  required: a = !1,
  showMaxLength: c = !0,
  maxLength: h = 512,
  rows: f = 5,
  ...g
}) {
  const d = kt({ control: n, name: e }), y = Ut(d.errors, `${e}.message`);
  return /* @__PURE__ */ $("div", { className: k("relative w-full", o), children: [
    /* @__PURE__ */ b(
      Ia,
      {
        ...g,
        ...t(e),
        label: r,
        error: y,
        required: a,
        className: i,
        placeholder: s,
        maxLength: h,
        rows: f
      }
    ),
    c && /* @__PURE__ */ b(fm, { control: n, name: e, maxLength: h })
  ] });
}
const fm = ({
  control: n,
  name: t,
  maxLength: e
}) => {
  const { field: r } = ga({ control: n, name: t });
  return /* @__PURE__ */ $(ll, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    r.value?.length || 0,
    "/",
    e
  ] });
};
function Km({
  control: n,
  register: t,
  name: e,
  label: r,
  placeholder: s = "HH:mm",
  className: i,
  wrapperClassName: o,
  required: a = !1,
  ...c
}) {
  const h = kt({ control: n, name: e }), f = Ut(h.errors, `${e}.message`);
  return /* @__PURE__ */ b("div", { className: k("w-full", o), children: /* @__PURE__ */ b(
    Wr,
    {
      ...c,
      ...t(e),
      type: "time",
      label: r,
      error: f,
      required: a,
      className: i,
      placeholder: s
    }
  ) });
}
function Vm({
  control: n,
  name: t,
  label: e,
  error: r,
  required: s = !1,
  accept: i,
  multiple: o = !1,
  wrapperClassName: a,
  className: c
}) {
  const h = kt({ control: n, name: t }), f = r || Ut(h.errors, `${t}.message`);
  return /* @__PURE__ */ $("div", { className: k("w-full", a), children: [
    e && /* @__PURE__ */ $(Lt, { htmlFor: t, className: "mb-2 block", children: [
      e,
      s && /* @__PURE__ */ b("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ b(
      Pt,
      {
        control: n,
        name: t,
        render: ({ field: { onChange: g, value: d, ...y } }) => /* @__PURE__ */ $("div", { className: "space-y-2", children: [
          /* @__PURE__ */ $(
            Lt,
            {
              htmlFor: t,
              className: k(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                f && "border-destructive",
                c
              ),
              children: [
                /* @__PURE__ */ $("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ b(sl, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ $("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ b("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ $("p", { className: "text-xs text-muted-foreground", children: [
                    i || "Any file",
                    o && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ b(
                  Wr,
                  {
                    ...y,
                    id: t,
                    type: "file",
                    accept: i,
                    multiple: o,
                    className: "hidden",
                    onChange: (x) => {
                      const E = x.target.files;
                      E && g(o ? Array.from(E) : E[0]);
                    }
                  }
                )
              ]
            }
          ),
          d && /* @__PURE__ */ b("p", { className: "text-sm text-muted-foreground", children: o ? `${Array.isArray(d) ? d.length : 0} file(s) selected` : typeof d == "string" ? d : d?.name || "File selected" })
        ] })
      }
    ),
    f && /* @__PURE__ */ b("p", { className: "text-sm text-destructive mt-1", children: f })
  ] });
}
const Gm = ma, da = z.createContext({}), Wm = ({
  ...n
}) => /* @__PURE__ */ b(da.Provider, { value: { name: n.name }, children: /* @__PURE__ */ b(Pt, { ...n }) }), Wn = () => {
  const n = z.useContext(da), t = z.useContext(fa), { getFieldState: e } = ba(), r = kt({ name: n.name }), s = e(n.name, r);
  if (!n)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: n.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...s
  };
}, fa = z.createContext({});
function Zm({ className: n, ...t }) {
  const e = z.useId();
  return /* @__PURE__ */ b(fa.Provider, { value: { id: e }, children: /* @__PURE__ */ b("div", { "data-slot": "form-item", className: k("grid gap-2", n), ...t }) });
}
function Ym({ className: n, ...t }) {
  const { error: e, formItemId: r } = Wn();
  return /* @__PURE__ */ b(
    Lt,
    {
      "data-slot": "form-label",
      "data-error": !!e,
      className: k("data-[error=true]:text-destructive", n),
      htmlFor: r,
      ...t
    }
  );
}
function Xm({ ...n }) {
  const { error: t, formItemId: e, formDescriptionId: r, formMessageId: s } = Wn();
  return /* @__PURE__ */ b(
    pa,
    {
      "data-slot": "form-control",
      id: e,
      "aria-describedby": t ? `${r} ${s}` : `${r}`,
      "aria-invalid": !!t,
      ...n
    }
  );
}
function Qm({ className: n, ...t }) {
  const { formDescriptionId: e } = Wn();
  return /* @__PURE__ */ b(
    "p",
    {
      "data-slot": "form-description",
      id: e,
      className: k("text-muted-foreground text-sm", n),
      ...t
    }
  );
}
function Jm({ className: n, ...t }) {
  const { error: e, formMessageId: r } = Wn(), s = e ? String(e?.message ?? "") : t.children;
  return s ? /* @__PURE__ */ b(
    "p",
    {
      "data-slot": "form-message",
      id: r,
      className: k("text-destructive text-sm", n),
      ...t,
      children: s
    }
  ) : null;
}
export {
  Gm as Form,
  Xm as FormControl,
  Qm as FormDescription,
  Wm as FormField,
  Zm as FormItem,
  Ym as FormLabel,
  Jm as FormMessage,
  Tm as RHFCheckboxGroup,
  Sm as RHFCombobox,
  _m as RHFDatePicker,
  Cm as RHFDateRangePicker,
  Mm as RHFEditor,
  Dm as RHFErrorMessage,
  Bm as RHFFileUpload,
  $m as RHFFormattedInput,
  jm as RHFInput,
  Pm as RHFMultiSelect,
  Um as RHFNumberInput,
  Fm as RHFRadioGroup,
  Hm as RHFSwitch,
  zm as RHFTextArea,
  Km as RHFTimePicker,
  Vm as RHFUpload,
  Wn as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
