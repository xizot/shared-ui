import { jsxs as h, jsx as t } from "react/jsx-runtime";
import * as C from "react";
import { Slot as k } from "@radix-ui/react-slot";
import { useFormState as v, Controller as p, useController as H, FormProvider as A, useFormContext as E } from "react-hook-form";
import { g as N, c as g, L as F, h as D, I as S, B as R, T as M } from "./textarea-ByQixttw.js";
import { C as T, a as j, D as V, b as B, E as L, F as P, S as U, c as z, d as G, e as X, f as q, R as J, g as K } from "./switch-Kxcmpitu.js";
import { X as O, Upload as Q } from "lucide-react";
function ae({
  control: r,
  name: e,
  options: s,
  label: n,
  error: c,
  required: i = !1,
  wrapperClassName: m,
  orientation: f = "vertical"
}) {
  const u = v({ control: r, name: e }), o = c || N(u.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: g("w-full", m), children: [
    n && /* @__PURE__ */ h(F, { htmlFor: e, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      p,
      {
        control: r,
        name: e,
        render: ({ field: a }) => /* @__PURE__ */ t("div", { className: g("flex gap-4", f === "horizontal" ? "flex-row" : "flex-col"), children: s.map((l) => /* @__PURE__ */ h("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ t(
            T,
            {
              id: `${e}-${l.value}`,
              checked: Array.isArray(a.value) && a.value.includes(l.value),
              onCheckedChange: (d) => {
                const x = Array.isArray(a.value) ? a.value : [];
                d ? a.onChange([...x, l.value]) : a.onChange(x.filter((b) => b !== l.value));
              },
              disabled: l.disabled
            }
          ),
          /* @__PURE__ */ t(F, { htmlFor: `${e}-${l.value}`, className: "font-normal cursor-pointer", children: l.label })
        ] }, l.value)) })
      }
    ),
    o && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: o })
  ] });
}
function le({
  control: r,
  name: e,
  label: s,
  required: n,
  callback: c = () => {
  },
  className: i,
  ...m
}) {
  const f = v({ control: r, name: e }), u = N(f.errors, `${e}.message`);
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: o }) => /* @__PURE__ */ t(
        j,
        {
          ...m,
          value: o.value,
          onChange: (a, l) => {
            o.onChange(a), c(a, l);
          },
          label: s,
          error: u,
          required: n,
          className: g("w-full", i)
        }
      )
    }
  );
}
function ne({
  control: r,
  name: e,
  label: s,
  required: n,
  error: c,
  className: i,
  callback: m = () => {
  },
  ...f
}) {
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: u, fieldState: { error: o } }) => {
        const a = c || o?.message;
        return /* @__PURE__ */ t(
          V,
          {
            ...f,
            value: u.value,
            onChange: (l) => {
              u.onChange(l), m(l);
            },
            label: s,
            error: a,
            required: n,
            className: g("w-full", i)
          }
        );
      }
    }
  );
}
function oe({
  control: r,
  name: e,
  label: s,
  required: n,
  error: c,
  className: i,
  callback: m = () => {
  },
  ...f
}) {
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: u, fieldState: { error: o } }) => {
        const a = c || o?.message;
        return /* @__PURE__ */ t(
          B,
          {
            ...f,
            value: u.value,
            onChange: (l) => {
              u.onChange(l), m(l);
            },
            label: s,
            error: a,
            required: n,
            className: g("w-full", i)
          }
        );
      }
    }
  );
}
function ce({
  control: r,
  name: e,
  label: s,
  className: n,
  wrapperClassName: c,
  required: i = !1,
  callback: m = () => {
  },
  ...f
}) {
  const u = v({ control: r, name: e }), o = N(u.errors, `${e}.message`);
  return /* @__PURE__ */ t("div", { className: g("w-full", c), children: /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ t(
        L,
        {
          ...f,
          value: a.value || "",
          onChange: (l) => {
            a.onChange(l), m(l);
          },
          label: s,
          error: o,
          required: i,
          className: n
        }
      )
    }
  ) });
}
function ie({
  name: r,
  control: e
}) {
  const s = v({
    control: e,
    name: r
  }), n = N(s.errors, `${r}.message`);
  return /* @__PURE__ */ t(
    "p",
    {
      className: g(
        "text-xs text-destructive hidden",
        D(n) && "input-error block mt-1.5"
      ),
      children: n
    }
  );
}
function de({
  control: r,
  name: e,
  label: s,
  error: n,
  required: c = !1,
  wrapperClassName: i,
  ...m
}) {
  const f = v({ control: r, name: e }), u = n || N(f.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: g("w-full", i), "data-slot": "rhf-file-upload", children: [
    s && /* @__PURE__ */ h(F, { htmlFor: e, className: "mb-2 block", children: [
      s,
      c && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      p,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: o, value: a, ...l } }) => {
          const d = a ? (Array.isArray(a) ? a : [a]).filter(Boolean) : [];
          return /* @__PURE__ */ t(
            P,
            {
              ...m,
              ...l,
              value: d,
              onChange: (x) => {
                m.multiple ? o(x) : o(x.length > 0 ? x[0] : void 0);
              },
              onError: (x) => {
                console.error("File upload error:", x);
              },
              disabled: m.disabled
            }
          );
        }
      }
    ),
    u && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: u })
  ] });
}
const W = (r, e) => e === "text" || !r ? r : e === "integer" || e === "currency" ? r.replace(/\D/g, "") : e === "decimal" ? r.replace(/[^\d.,]/g, "").replace(/\./g, ",") : r;
function me({
  control: r,
  name: e,
  label: s,
  format: n = "text",
  required: c,
  wrapperClassName: i,
  callback: m = () => {
  },
  ...f
}) {
  const u = v({ control: r, name: e }), o = N(u.errors, `${e}.message`);
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ t("div", { className: g("w-full", i), children: /* @__PURE__ */ t(
        S,
        {
          ...f,
          ...a,
          type: "text",
          label: s,
          error: o,
          required: c,
          value: a.value || "",
          onChange: (l) => {
            const d = W(l.target.value, n);
            a.onChange(d), m(d);
          }
        }
      ) })
    }
  );
}
function ue({
  control: r,
  register: e,
  name: s,
  label: n,
  placeholder: c,
  className: i,
  wrapperClassName: m,
  required: f = !1,
  ...u
}) {
  const o = v({ control: r, name: s }), a = N(o.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: g("w-full", m), children: /* @__PURE__ */ t(
    S,
    {
      ...u,
      ...e(s),
      label: n,
      error: a,
      required: f,
      className: i,
      placeholder: c
    }
  ) });
}
function fe({
  control: r,
  name: e,
  options: s,
  label: n,
  error: c,
  required: i = !1,
  placeholder: m = "Select options...",
  wrapperClassName: f
}) {
  const u = v({ control: r, name: e }), o = c || N(u.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: g("w-full", f), children: [
    n && /* @__PURE__ */ h(F, { htmlFor: e, className: "mb-2 block", children: [
      n,
      i && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      p,
      {
        control: r,
        name: e,
        render: ({ field: a }) => {
          const l = Array.isArray(a.value) ? a.value : [];
          return /* @__PURE__ */ h("div", { className: "space-y-2", children: [
            /* @__PURE__ */ h(
              U,
              {
                value: "",
                onValueChange: (d) => {
                  l.includes(d) || a.onChange([...l, d]);
                },
                children: [
                  /* @__PURE__ */ t(z, { className: g(o && "border-destructive"), children: /* @__PURE__ */ t(G, { placeholder: m }) }),
                  /* @__PURE__ */ t(X, { children: s.map((d) => /* @__PURE__ */ t(
                    q,
                    {
                      value: d.value,
                      disabled: d.disabled || l.includes(d.value),
                      children: d.label
                    },
                    d.value
                  )) })
                ]
              }
            ),
            l.length > 0 && /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: l.map((d) => {
              const x = s.find((b) => b.value === d);
              return /* @__PURE__ */ h(R, { variant: "secondary", className: "gap-1", children: [
                x?.label || d,
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      a.onChange(l.filter((b) => b !== d));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ t(O, { className: "h-3 w-3" })
                  }
                )
              ] }, d);
            }) })
          ] });
        }
      }
    ),
    o && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: o })
  ] });
}
function he({
  control: r,
  register: e,
  name: s,
  label: n,
  placeholder: c,
  className: i,
  wrapperClassName: m,
  required: f = !1,
  min: u,
  max: o,
  step: a,
  ...l
}) {
  const d = v({ control: r, name: s }), x = N(d.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: g("w-full", m), children: /* @__PURE__ */ t(
    S,
    {
      ...l,
      ...e(s, { valueAsNumber: !0 }),
      type: "number",
      label: n,
      error: x,
      required: f,
      className: i,
      placeholder: c,
      min: u,
      max: o,
      step: a
    }
  ) });
}
function ge({
  control: r,
  name: e,
  label: s,
  required: n,
  children: c,
  className: i,
  callback: m = () => {
  },
  onBeforeChange: f,
  ...u
}) {
  const o = (a, l) => {
    const d = () => {
      l.onChange(a), m(a);
    };
    f ? f(a, l.value, d) : d();
  };
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: a, fieldState: { error: l } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        s && /* @__PURE__ */ h(
          F,
          {
            htmlFor: u.id || e,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              s,
              n && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ t(
          J,
          {
            ...u,
            id: u.id || e,
            className: g("flex flex-row gap-4", i),
            onValueChange: (d) => {
              o(d, a);
            },
            value: a.value?.toString(),
            children: c
          }
        ),
        l && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: l.message })
      ] })
    }
  );
}
function xe({
  control: r,
  name: e,
  label: s,
  required: n,
  callback: c = () => {
  },
  onBeforeChange: i,
  className: m,
  ...f
}) {
  const u = (o, a) => {
    const l = () => {
      a.onChange(o), c(o);
    };
    i ? i(o, a.value, l) : l();
  };
  return /* @__PURE__ */ t(
    p,
    {
      control: r,
      name: e,
      render: ({ field: o, fieldState: { error: a } }) => /* @__PURE__ */ h("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ h("div", { className: g("flex items-center gap-3", m), children: [
          s && /* @__PURE__ */ h(
            F,
            {
              htmlFor: f.id || e,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                s,
                n && /* @__PURE__ */ t("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            K,
            {
              ...f,
              id: f.id || e,
              checked: !!o.value,
              onCheckedChange: (l) => {
                u(l, o);
              }
            }
          )
        ] }),
        a && /* @__PURE__ */ t("p", { className: "text-xs text-destructive", children: a.message })
      ] })
    }
  );
}
function ve({
  control: r,
  register: e,
  name: s,
  label: n,
  placeholder: c,
  className: i,
  wrapperClassName: m,
  required: f = !1,
  showMaxLength: u = !0,
  maxLength: o = 512,
  rows: a = 5,
  ...l
}) {
  const d = v({ control: r, name: s }), x = N(d.errors, `${s}.message`);
  return /* @__PURE__ */ h("div", { className: g("relative w-full", m), children: [
    /* @__PURE__ */ t(
      M,
      {
        ...l,
        ...e(s),
        label: n,
        error: x,
        required: f,
        className: i,
        placeholder: c,
        maxLength: o,
        rows: a
      }
    ),
    u && /* @__PURE__ */ t(Y, { control: r, name: s, maxLength: o })
  ] });
}
const Y = ({
  control: r,
  name: e,
  maxLength: s
}) => {
  const { field: n } = H({ control: r, name: e });
  return /* @__PURE__ */ h(R, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    n.value?.length || 0,
    "/",
    s
  ] });
};
function pe({
  control: r,
  register: e,
  name: s,
  label: n,
  placeholder: c = "HH:mm",
  className: i,
  wrapperClassName: m,
  required: f = !1,
  ...u
}) {
  const o = v({ control: r, name: s }), a = N(o.errors, `${s}.message`);
  return /* @__PURE__ */ t("div", { className: g("w-full", m), children: /* @__PURE__ */ t(
    S,
    {
      ...u,
      ...e(s),
      type: "time",
      label: n,
      error: a,
      required: f,
      className: i,
      placeholder: c
    }
  ) });
}
function Ne({
  control: r,
  name: e,
  label: s,
  error: n,
  required: c = !1,
  accept: i,
  multiple: m = !1,
  wrapperClassName: f,
  className: u
}) {
  const o = v({ control: r, name: e }), a = n || N(o.errors, `${e}.message`);
  return /* @__PURE__ */ h("div", { className: g("w-full", f), children: [
    s && /* @__PURE__ */ h(F, { htmlFor: e, className: "mb-2 block", children: [
      s,
      c && /* @__PURE__ */ t("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ t(
      p,
      {
        control: r,
        name: e,
        render: ({ field: { onChange: l, value: d, ...x } }) => /* @__PURE__ */ h("div", { className: "space-y-2", children: [
          /* @__PURE__ */ h(
            F,
            {
              htmlFor: e,
              className: g(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                a && "border-destructive",
                u
              ),
              children: [
                /* @__PURE__ */ h("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ t(Q, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ h("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ t("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ h("p", { className: "text-xs text-muted-foreground", children: [
                    i || "Any file",
                    m && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ t(
                  S,
                  {
                    ...x,
                    id: e,
                    type: "file",
                    accept: i,
                    multiple: m,
                    className: "hidden",
                    onChange: (b) => {
                      const $ = b.target.files;
                      $ && l(m ? Array.from($) : $[0]);
                    }
                  }
                )
              ]
            }
          ),
          d && /* @__PURE__ */ t("p", { className: "text-sm text-muted-foreground", children: m ? `${Array.isArray(d) ? d.length : 0} file(s) selected` : typeof d == "string" ? d : d?.name || "File selected" })
        ] })
      }
    ),
    a && /* @__PURE__ */ t("p", { className: "text-sm text-destructive mt-1", children: a })
  ] });
}
const Fe = A, I = C.createContext({}), be = ({
  ...r
}) => /* @__PURE__ */ t(I.Provider, { value: { name: r.name }, children: /* @__PURE__ */ t(p, { ...r }) }), y = () => {
  const r = C.useContext(I), e = C.useContext(w), { getFieldState: s } = E(), n = v({ name: r.name }), c = s(r.name, n);
  if (!r)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = e;
  return {
    id: i,
    name: r.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...c
  };
}, w = C.createContext({});
function Ce({ className: r, ...e }) {
  const s = C.useId();
  return /* @__PURE__ */ t(w.Provider, { value: { id: s }, children: /* @__PURE__ */ t("div", { "data-slot": "form-item", className: g("grid gap-2", r), ...e }) });
}
function Se({ className: r, ...e }) {
  const { error: s, formItemId: n } = y();
  return /* @__PURE__ */ t(
    F,
    {
      "data-slot": "form-label",
      "data-error": !!s,
      className: g("data-[error=true]:text-destructive", r),
      htmlFor: n,
      ...e
    }
  );
}
function ye({ ...r }) {
  const { error: e, formItemId: s, formDescriptionId: n, formMessageId: c } = y();
  return /* @__PURE__ */ t(
    k,
    {
      "data-slot": "form-control",
      id: s,
      "aria-describedby": e ? `${n} ${c}` : `${n}`,
      "aria-invalid": !!e,
      ...r
    }
  );
}
function $e({ className: r, ...e }) {
  const { formDescriptionId: s } = y();
  return /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-description",
      id: s,
      className: g("text-muted-foreground text-sm", r),
      ...e
    }
  );
}
function Re({ className: r, ...e }) {
  const { error: s, formMessageId: n } = y(), c = s ? String(s?.message ?? "") : e.children;
  return c ? /* @__PURE__ */ t(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: g("text-destructive text-sm", r),
      ...e,
      children: c
    }
  ) : null;
}
export {
  Fe as Form,
  ye as FormControl,
  $e as FormDescription,
  be as FormField,
  Ce as FormItem,
  Se as FormLabel,
  Re as FormMessage,
  ae as RHFCheckboxGroup,
  le as RHFCombobox,
  ne as RHFDatePicker,
  oe as RHFDateRangePicker,
  ce as RHFEditor,
  ie as RHFErrorMessage,
  de as RHFFileUpload,
  me as RHFFormattedInput,
  ue as RHFInput,
  fe as RHFMultiSelect,
  he as RHFNumberInput,
  ge as RHFRadioGroup,
  xe as RHFSwitch,
  ve as RHFTextArea,
  pe as RHFTimePicker,
  Ne as RHFUpload,
  y as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
