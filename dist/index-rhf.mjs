import { jsxs as g, jsx as r } from "react/jsx-runtime";
import * as y from "react";
import { Slot as te } from "@radix-ui/react-slot";
import { useFormState as C, Controller as R, useController as se, FormProvider as oe, useFormContext as ae } from "react-hook-form";
import { g as q, c as v, L as S, h as ne, B as le, I as A, a as T, F as ie, T as ce } from "./textarea-Bt2ohije.js";
import { C as de, a as ue, D as me, b as fe, P as he, S as pe, c as ge, d as ve, e as be, f as xe } from "./select-Blr3PI5x.js";
import Ne from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Upload as P, CheckCircle2 as we, AlertCircle as Fe, X as W, Image as ke, File as ye } from "lucide-react";
import { f as U } from "./format-C1ar8L1A.js";
import * as Ce from "@radix-ui/react-radio-group";
import * as O from "@radix-ui/react-switch";
function We({
  control: t,
  name: e,
  options: s,
  label: o,
  error: l,
  required: u = !1,
  wrapperClassName: i,
  orientation: p = "vertical"
}) {
  const h = C({ control: t, name: e }), d = l || q(h.errors, `${e}.message`);
  return /* @__PURE__ */ g("div", { className: v("w-full", i), children: [
    o && /* @__PURE__ */ g(S, { htmlFor: e, className: "mb-2 block", children: [
      o,
      u && /* @__PURE__ */ r("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ r(
      R,
      {
        control: t,
        name: e,
        render: ({ field: a }) => /* @__PURE__ */ r("div", { className: v("flex gap-4", p === "horizontal" ? "flex-row" : "flex-col"), children: s.map((n) => /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r(
            de,
            {
              id: `${e}-${n.value}`,
              checked: Array.isArray(a.value) && a.value.includes(n.value),
              onCheckedChange: (m) => {
                const x = Array.isArray(a.value) ? a.value : [];
                m ? a.onChange([...x, n.value]) : a.onChange(x.filter((F) => F !== n.value));
              },
              disabled: n.disabled
            }
          ),
          /* @__PURE__ */ r(S, { htmlFor: `${e}-${n.value}`, className: "font-normal cursor-pointer", children: n.label })
        ] }, n.value)) })
      }
    ),
    d && /* @__PURE__ */ r("p", { className: "text-sm text-destructive mt-1", children: d })
  ] });
}
function ze({
  control: t,
  name: e,
  label: s,
  required: o,
  callback: l = () => {
  },
  className: u,
  ...i
}) {
  const p = C({ control: t, name: e }), h = q(p.errors, `${e}.message`);
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: d }) => /* @__PURE__ */ r(
        ue,
        {
          ...i,
          value: d.value,
          onChange: (a, n) => {
            d.onChange(a), l(a, n);
          },
          label: s,
          error: h,
          required: o,
          className: v("w-full", u)
        }
      )
    }
  );
}
function Ve({
  control: t,
  name: e,
  label: s,
  required: o,
  error: l,
  className: u,
  callback: i = () => {
  },
  ...p
}) {
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: h, fieldState: { error: d } }) => {
        const a = l || d?.message;
        return /* @__PURE__ */ r(
          me,
          {
            ...p,
            value: h.value,
            onChange: (n) => {
              h.onChange(n), i(n);
            },
            label: s,
            error: a,
            required: o,
            className: v("w-full", u)
          }
        );
      }
    }
  );
}
function Be({
  control: t,
  name: e,
  label: s,
  required: o,
  error: l,
  className: u,
  callback: i = () => {
  },
  ...p
}) {
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: h, fieldState: { error: d } }) => {
        const a = l || d?.message;
        return /* @__PURE__ */ r(
          fe,
          {
            ...p,
            value: h.value,
            onChange: (n) => {
              h.onChange(n), i(n);
            },
            label: s,
            error: a,
            required: o,
            className: v("w-full", u)
          }
        );
      }
    }
  );
}
const Re = {
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
}, qe = [
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
function _e({
  className: t,
  label: e,
  error: s,
  required: o,
  id: l,
  size: u = "md",
  modules: i,
  formats: p,
  placeholder: h,
  value: d,
  onChange: a,
  readOnly: n,
  ...m
}) {
  const x = y.useId(), F = l || x, $ = e || s, I = /* @__PURE__ */ r("div", { className: "relative w-full", children: /* @__PURE__ */ r(
    Ne,
    {
      id: F,
      "data-slot": "editor",
      "data-size": u,
      "aria-invalid": !!s,
      theme: "snow",
      modules: i || Re,
      formats: p || qe,
      placeholder: h,
      value: d,
      onChange: a,
      readOnly: n,
      className: v(
        "editor-wrapper",
        "[&_.ql-container]:border-input [&_.ql-container]:dark:bg-input/30 [&_.ql-container]:rounded-b-md [&_.ql-container]:border [&_.ql-container]:shadow-xs",
        "[&_.ql-toolbar]:border-input [&_.ql-toolbar]:dark:bg-input/30 [&_.ql-toolbar]:rounded-t-md [&_.ql-toolbar]:border [&_.ql-toolbar]:border-b-0 [&_.ql-toolbar]:bg-transparent",
        "[&_.ql-editor]:min-h-[200px] [&_.ql-editor]:text-foreground",
        "[&_.ql-editor.ql-blank::before]:text-muted-foreground [&_.ql-editor.ql-blank::before]:italic",
        "[&_.ql-stroke]:stroke-foreground [&_.ql-fill]:fill-foreground",
        "[&_.ql-picker-label]:text-foreground [&_.ql-picker-options]:bg-popover [&_.ql-picker-options]:text-popover-foreground [&_.ql-picker-options]:border-border",
        "[&_.ql-snow.ql-toolbar_button:hover]:bg-accent [&_.ql-snow.ql-toolbar_button.ql-active]:bg-accent",
        "[&_.ql-snow.ql-toolbar]:dark:bg-input/30",
        s && "[&_.ql-container]:border-destructive [&_.ql-container]:focus-within:border-destructive [&_.ql-container]:focus-within:ring-destructive [&_.ql-container]:focus-within:ring-[3px] [&_.ql-toolbar]:border-destructive",
        !s && "[&_.ql-container]:focus-within:border-ring [&_.ql-container]:focus-within:ring-ring/50 [&_.ql-container]:focus-within:ring-[3px]",
        n && "[&_.ql-toolbar]:pointer-events-none [&_.ql-toolbar]:opacity-50 [&_.ql-toolbar_button]:cursor-not-allowed",
        t
      ),
      ...m
    }
  ) });
  return $ ? /* @__PURE__ */ g("div", { className: "flex flex-col gap-1", children: [
    e && /* @__PURE__ */ g(S, { htmlFor: F, children: [
      e,
      o && /* @__PURE__ */ r("span", { className: "text-destructive", children: "*" })
    ] }),
    I,
    s && /* @__PURE__ */ r("div", { className: "text-destructive text-sm", role: "alert", children: s })
  ] }) : I;
}
function Ge({
  control: t,
  name: e,
  label: s,
  className: o,
  wrapperClassName: l,
  required: u = !1,
  callback: i = () => {
  },
  ...p
}) {
  const h = C({ control: t, name: e }), d = q(h.errors, `${e}.message`);
  return /* @__PURE__ */ r("div", { className: v("w-full", l), children: /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ r(
        _e,
        {
          ...p,
          value: a.value || "",
          onChange: (n) => {
            a.onChange(n), i(n);
          },
          label: s,
          error: d,
          required: u,
          className: o
        }
      )
    }
  ) });
}
function Ke({
  name: t,
  control: e
}) {
  const s = C({
    control: e,
    name: t
  }), o = q(s.errors, `${t}.message`);
  return /* @__PURE__ */ r(
    "p",
    {
      className: v(
        "text-xs text-destructive hidden",
        ne(o) && "input-error block mt-1.5"
      ),
      children: o
    }
  );
}
function Se({
  value: t = [],
  onChange: e,
  accept: s,
  multiple: o = !1,
  maxSize: l,
  maxFiles: u,
  disabled: i = !1,
  onError: p,
  showPreview: h = !0,
  showProgress: d = !1,
  className: a,
  dropzoneClassName: n,
  placeholder: m,
  uploadText: x
}) {
  const [F, $] = y.useState(!1), j = (c) => c && typeof c == "object" && "name" in c && "size" in c && "type" in c && "lastModified" in c && !("file" in c), [_, I] = y.useState(() => !t || t.length === 0 ? [] : t.map((c) => j(c) ? {
    file: c,
    preview: c.type.startsWith("image/") ? URL.createObjectURL(c) : void 0,
    status: "success"
  } : c)), E = y.useRef(null), D = y.useRef(_);
  y.useEffect(() => {
    D.current = _;
  }, [_]), y.useEffect(() => () => {
    D.current.forEach((c) => {
      c.preview && URL.revokeObjectURL(c.preview);
    });
  }, []), y.useEffect(() => {
    if (!t || t.length === 0) {
      D.current.forEach((L) => {
        L.preview && URL.revokeObjectURL(L.preview);
      }), D.current.length > 0 && I([]);
      return;
    }
    const c = t.map((f) => j(f) ? f : f.file), b = D.current.map((f) => f.file), N = c.map((f) => `${f.name}-${f.size}`).join(","), k = b.map((f) => `${f.name}-${f.size}`).join(",");
    if (N === k && c.length === b.length)
      return;
    D.current.forEach((f) => {
      f.preview && URL.revokeObjectURL(f.preview);
    });
    const w = t.map((f) => j(f) ? {
      file: f,
      preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : void 0,
      status: "success"
    } : f);
    I(w);
  }, [t]);
  const B = (c) => {
    if (l && c.size > l)
      return `File size exceeds ${U(l)}`;
    if (s) {
      const b = s.split(",").map((f) => f.trim()), N = c.type, k = c.name.toLowerCase();
      if (!(b.some((f) => f.startsWith(".") ? k.endsWith(f.toLowerCase()) : f.endsWith("/*") ? N.startsWith(f.slice(0, -1)) : N === f || N.match(f.replace("*", ".*"))) || b.some((f) => k.endsWith(f.toLowerCase()))))
        return `File type not allowed. Accepted types: ${s}`;
    }
    return null;
  }, M = (c) => {
    const b = [], N = [];
    if (u && _.length + c.length > u) {
      const w = `Maximum ${u} file(s) allowed`;
      b.push(w), p?.(w);
      return;
    }
    if (c.forEach((w) => {
      const f = B(w);
      if (f)
        b.push(`${w.name}: ${f}`), p?.(f);
      else {
        const L = {
          file: w,
          preview: w.type.startsWith("image/") ? URL.createObjectURL(w) : void 0,
          status: "success"
        };
        N.push(L);
      }
    }), b.length > 0 && N.length === 0)
      return;
    const k = o ? [..._, ...N] : N;
    I(k), e?.(k.map((w) => w.file));
  }, G = (c) => {
    if (c.preventDefault(), c.stopPropagation(), $(!1), i) return;
    const b = Array.from(c.dataTransfer.files);
    b.length > 0 && M(b);
  }, K = (c) => {
    c.preventDefault(), c.stopPropagation(), i || $(!0);
  }, Q = (c) => {
    c.preventDefault(), c.stopPropagation(), $(!1);
  }, X = (c) => {
    const b = Array.from(c.target.files || []);
    b.length > 0 && M(b), E.current && (E.current.value = "");
  }, Z = (c) => {
    const b = _[c];
    b.preview && URL.revokeObjectURL(b.preview);
    const N = _.filter((k, w) => w !== c);
    I(N), e?.(N.map((k) => k.file));
  }, J = () => {
    !i && E.current && E.current.click();
  }, Y = (c) => c.type.startsWith("image/") ? /* @__PURE__ */ r(ke, { className: "h-8 w-8 text-muted-foreground" }) : /* @__PURE__ */ r(ye, { className: "h-8 w-8 text-muted-foreground" });
  return /* @__PURE__ */ g("div", { className: v("w-full space-y-4", a), "data-slot": "file-upload", children: [
    /* @__PURE__ */ g(
      "div",
      {
        onClick: J,
        onDrop: G,
        onDragOver: K,
        onDragLeave: Q,
        className: v(
          "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          F && !i && "border-primary bg-primary/5",
          !F && !i && "border-input hover:border-primary/50 hover:bg-accent/50",
          i && "cursor-not-allowed opacity-50",
          n
        ),
        "data-slot": "file-upload-dropzone",
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: E,
              type: "file",
              accept: s,
              multiple: o,
              disabled: i,
              onChange: X,
              className: "hidden",
              "data-slot": "file-upload-input"
            }
          ),
          /* @__PURE__ */ g("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
            /* @__PURE__ */ r(P, { className: v("h-8 w-8 mb-2", i ? "text-muted-foreground" : "text-primary") }),
            /* @__PURE__ */ g("p", { className: "mb-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ r("span", { className: "font-semibold", children: x || "Click to upload" }),
              !i && " or drag and drop"
            ] }),
            /* @__PURE__ */ g("p", { className: "text-xs text-muted-foreground", children: [
              m || s || "Any file",
              o && " (multiple files allowed)",
              l && ` (max ${U(l)})`
            ] })
          ] })
        ]
      }
    ),
    h && _.length > 0 && /* @__PURE__ */ r("div", { className: "space-y-2", "data-slot": "file-upload-list", children: _.map((c, b) => {
      const { file: N, preview: k, progress: w, status: f, error: L } = c, ee = N.type.startsWith("image/");
      return /* @__PURE__ */ g(
        "div",
        {
          className: "flex items-center gap-3 p-3 border rounded-lg bg-card",
          "data-slot": "file-upload-item",
          children: [
            /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: ee && k ? /* @__PURE__ */ r(
              "img",
              {
                src: k,
                alt: N.name,
                className: "h-12 w-12 object-cover rounded",
                "data-slot": "file-upload-preview"
              }
            ) : /* @__PURE__ */ r("div", { className: "h-12 w-12 flex items-center justify-center bg-muted rounded", children: Y(N) }) }),
            /* @__PURE__ */ g("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r("p", { className: "text-sm font-medium truncate", "data-slot": "file-upload-name", children: N.name }),
                f === "success" && /* @__PURE__ */ r(we, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                f === "error" && /* @__PURE__ */ r(Fe, { className: "h-4 w-4 text-destructive flex-shrink-0" })
              ] }),
              /* @__PURE__ */ r("p", { className: "text-xs text-muted-foreground", "data-slot": "file-upload-size", children: U(N.size) }),
              L && /* @__PURE__ */ r("p", { className: "text-xs text-destructive mt-1", "data-slot": "file-upload-error", children: L }),
              d && w !== void 0 && /* @__PURE__ */ r("div", { className: "mt-2", "data-slot": "file-upload-progress", children: /* @__PURE__ */ r(he, { value: w, className: "h-1" }) })
            ] }),
            !i && /* @__PURE__ */ g(
              le,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 flex-shrink-0",
                onClick: (re) => {
                  re.stopPropagation(), Z(b);
                },
                "data-slot": "file-upload-remove",
                children: [
                  /* @__PURE__ */ r(W, { className: "h-4 w-4" }),
                  /* @__PURE__ */ r("span", { className: "sr-only", children: "Remove file" })
                ]
              }
            )
          ]
        },
        `${N.name}-${b}`
      );
    }) })
  ] });
}
function Qe({
  control: t,
  name: e,
  label: s,
  error: o,
  required: l = !1,
  wrapperClassName: u,
  ...i
}) {
  const p = C({ control: t, name: e }), h = o || q(p.errors, `${e}.message`);
  return /* @__PURE__ */ g("div", { className: v("w-full", u), "data-slot": "rhf-file-upload", children: [
    s && /* @__PURE__ */ g(S, { htmlFor: e, className: "mb-2 block", children: [
      s,
      l && /* @__PURE__ */ r("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ r(
      R,
      {
        control: t,
        name: e,
        render: ({ field: { onChange: d, value: a, ...n } }) => {
          const m = a ? (Array.isArray(a) ? a : [a]).filter(Boolean) : [];
          return /* @__PURE__ */ r(
            Se,
            {
              ...i,
              ...n,
              value: m,
              onChange: (x) => {
                i.multiple ? d(x) : d(x.length > 0 ? x[0] : void 0);
              },
              onError: (x) => {
                console.error("File upload error:", x);
              },
              disabled: i.disabled
            }
          );
        }
      }
    ),
    h && /* @__PURE__ */ r("p", { className: "text-sm text-destructive mt-1", "data-slot": "rhf-file-upload-error", children: h })
  ] });
}
const $e = (t, e) => e === "text" || !t ? t : e === "integer" || e === "currency" ? t.replace(/\D/g, "") : e === "decimal" ? t.replace(/[^\d.,]/g, "").replace(/\./g, ",") : t;
function Xe({
  control: t,
  name: e,
  label: s,
  format: o = "text",
  required: l,
  wrapperClassName: u,
  callback: i = () => {
  },
  ...p
}) {
  const h = C({ control: t, name: e }), d = q(h.errors, `${e}.message`);
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: a }) => /* @__PURE__ */ r("div", { className: v("w-full", u), children: /* @__PURE__ */ r(
        A,
        {
          ...p,
          ...a,
          type: "text",
          label: s,
          error: d,
          required: l,
          value: a.value || "",
          onChange: (n) => {
            const m = $e(n.target.value, o);
            a.onChange(m), i(m);
          }
        }
      ) })
    }
  );
}
function Ze({
  control: t,
  register: e,
  name: s,
  label: o,
  placeholder: l,
  className: u,
  wrapperClassName: i,
  required: p = !1,
  ...h
}) {
  const d = C({ control: t, name: s }), a = q(d.errors, `${s}.message`);
  return /* @__PURE__ */ r("div", { className: v("w-full", i), children: /* @__PURE__ */ r(
    A,
    {
      ...h,
      ...e(s),
      label: o,
      error: a,
      required: p,
      className: u,
      placeholder: l
    }
  ) });
}
function Je({
  control: t,
  name: e,
  options: s,
  label: o,
  error: l,
  required: u = !1,
  placeholder: i = "Select options...",
  wrapperClassName: p
}) {
  const h = C({ control: t, name: e }), d = l || q(h.errors, `${e}.message`);
  return /* @__PURE__ */ g("div", { className: v("w-full", p), children: [
    o && /* @__PURE__ */ g(S, { htmlFor: e, className: "mb-2 block", children: [
      o,
      u && /* @__PURE__ */ r("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ r(
      R,
      {
        control: t,
        name: e,
        render: ({ field: a }) => {
          const n = Array.isArray(a.value) ? a.value : [];
          return /* @__PURE__ */ g("div", { className: "space-y-2", children: [
            /* @__PURE__ */ g(
              pe,
              {
                value: "",
                onValueChange: (m) => {
                  n.includes(m) || a.onChange([...n, m]);
                },
                children: [
                  /* @__PURE__ */ r(ge, { className: v(d && "border-destructive"), children: /* @__PURE__ */ r(ve, { placeholder: i }) }),
                  /* @__PURE__ */ r(be, { children: s.map((m) => /* @__PURE__ */ r(
                    xe,
                    {
                      value: m.value,
                      disabled: m.disabled || n.includes(m.value),
                      children: m.label
                    },
                    m.value
                  )) })
                ]
              }
            ),
            n.length > 0 && /* @__PURE__ */ r("div", { className: "flex flex-wrap gap-2", children: n.map((m) => {
              const x = s.find((F) => F.value === m);
              return /* @__PURE__ */ g(T, { variant: "secondary", className: "gap-1", children: [
                x?.label || m,
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      a.onChange(n.filter((F) => F !== m));
                    },
                    className: "ml-1 hover:bg-destructive/20 rounded-full p-0.5",
                    children: /* @__PURE__ */ r(W, { className: "h-3 w-3" })
                  }
                )
              ] }, m);
            }) })
          ] });
        }
      }
    ),
    d && /* @__PURE__ */ r("p", { className: "text-sm text-destructive mt-1", children: d })
  ] });
}
function Ye({
  control: t,
  register: e,
  name: s,
  label: o,
  placeholder: l,
  className: u,
  wrapperClassName: i,
  required: p = !1,
  min: h,
  max: d,
  step: a,
  ...n
}) {
  const m = C({ control: t, name: s }), x = q(m.errors, `${s}.message`);
  return /* @__PURE__ */ r("div", { className: v("w-full", i), children: /* @__PURE__ */ r(
    A,
    {
      ...n,
      ...e(s, { valueAsNumber: !0 }),
      type: "number",
      label: o,
      error: x,
      required: p,
      className: u,
      placeholder: l,
      min: h,
      max: d,
      step: a
    }
  ) });
}
function Ie({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ r(
    Ce.Root,
    {
      "data-slot": "radio-group",
      className: v("grid gap-3", t),
      ...e
    }
  );
}
function er({
  control: t,
  name: e,
  label: s,
  required: o,
  children: l,
  className: u,
  callback: i = () => {
  },
  onBeforeChange: p,
  ...h
}) {
  const d = (a, n) => {
    const m = () => {
      n.onChange(a), i(a);
    };
    p ? p(a, n.value, m) : m();
  };
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: a, fieldState: { error: n } }) => /* @__PURE__ */ g("div", { className: "space-y-1.5 w-full", children: [
        s && /* @__PURE__ */ g(
          S,
          {
            htmlFor: h.id || e,
            className: "text-foreground leading-5 cursor-pointer select-none flex-1",
            children: [
              s,
              o && /* @__PURE__ */ r("span", { className: "font-semibold text-destructive ml-1", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ r(
          Ie,
          {
            ...h,
            id: h.id || e,
            className: v("flex flex-row gap-4", u),
            onValueChange: (m) => {
              d(m, a);
            },
            value: a.value?.toString(),
            children: l
          }
        ),
        n && /* @__PURE__ */ r("p", { className: "text-xs text-destructive", children: n.message })
      ] })
    }
  );
}
function Le({
  className: t,
  size: e = "md",
  ...s
}) {
  const o = ie[e ?? "md"], l = {
    xxs: { height: "h-3.5", width: "w-6", thumb: o.icon },
    xs: { height: "h-4", width: "w-7", thumb: o.icon },
    sm: { height: "h-4.5", width: "w-8", thumb: o.icon },
    md: { height: "h-5", width: "w-9", thumb: o.icon },
    lg: { height: "h-6", width: "w-11", thumb: o.icon },
    xl: { height: "h-6", width: "w-12", thumb: o.icon },
    xxl: { height: "h-7", width: "w-14", thumb: o.icon }
  }[e ?? "md"];
  return /* @__PURE__ */ r(
    O.Root,
    {
      "data-slot": "switch",
      "data-size": e,
      className: v(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        l.height,
        l.width,
        t
      ),
      ...s,
      children: /* @__PURE__ */ r(
        O.Thumb,
        {
          "data-slot": "switch-thumb",
          className: v(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",
            l.thumb
          )
        }
      )
    }
  );
}
function rr({
  control: t,
  name: e,
  label: s,
  required: o,
  callback: l = () => {
  },
  onBeforeChange: u,
  className: i,
  ...p
}) {
  const h = (d, a) => {
    const n = () => {
      a.onChange(d), l(d);
    };
    u ? u(d, a.value, n) : n();
  };
  return /* @__PURE__ */ r(
    R,
    {
      control: t,
      name: e,
      render: ({ field: d, fieldState: { error: a } }) => /* @__PURE__ */ g("div", { className: "space-y-1.5 w-full", children: [
        /* @__PURE__ */ g("div", { className: v("flex items-center gap-3", i), children: [
          s && /* @__PURE__ */ g(
            S,
            {
              htmlFor: p.id || e,
              className: "text-foreground leading-5 cursor-pointer select-none flex-1",
              children: [
                s,
                o && /* @__PURE__ */ r("span", { className: "font-semibold text-destructive ml-1", children: "*" })
              ]
            }
          ),
          /* @__PURE__ */ r(
            Le,
            {
              ...p,
              id: p.id || e,
              checked: !!d.value,
              onCheckedChange: (n) => {
                h(n, d);
              }
            }
          )
        ] }),
        a && /* @__PURE__ */ r("p", { className: "text-xs text-destructive", children: a.message })
      ] })
    }
  );
}
function tr({
  control: t,
  register: e,
  name: s,
  label: o,
  placeholder: l,
  className: u,
  wrapperClassName: i,
  required: p = !1,
  showMaxLength: h = !0,
  maxLength: d = 512,
  rows: a = 5,
  ...n
}) {
  const m = C({ control: t, name: s }), x = q(m.errors, `${s}.message`);
  return /* @__PURE__ */ g("div", { className: v("relative w-full", i), children: [
    /* @__PURE__ */ r(
      ce,
      {
        ...n,
        ...e(s),
        label: o,
        error: x,
        required: p,
        className: u,
        placeholder: l,
        maxLength: d,
        rows: a
      }
    ),
    h && /* @__PURE__ */ r(De, { control: t, name: s, maxLength: d })
  ] });
}
const De = ({
  control: t,
  name: e,
  maxLength: s
}) => {
  const { field: o } = se({ control: t, name: e });
  return /* @__PURE__ */ g(T, { variant: "secondary", className: "absolute rounded-sm right-3 bottom-2 text-[8px]", children: [
    o.value?.length || 0,
    "/",
    s
  ] });
};
function sr({
  control: t,
  register: e,
  name: s,
  label: o,
  placeholder: l = "HH:mm",
  className: u,
  wrapperClassName: i,
  required: p = !1,
  ...h
}) {
  const d = C({ control: t, name: s }), a = q(d.errors, `${s}.message`);
  return /* @__PURE__ */ r("div", { className: v("w-full", i), children: /* @__PURE__ */ r(
    A,
    {
      ...h,
      ...e(s),
      type: "time",
      label: o,
      error: a,
      required: p,
      className: u,
      placeholder: l
    }
  ) });
}
function or({
  control: t,
  name: e,
  label: s,
  error: o,
  required: l = !1,
  accept: u,
  multiple: i = !1,
  wrapperClassName: p,
  className: h
}) {
  const d = C({ control: t, name: e }), a = o || q(d.errors, `${e}.message`);
  return /* @__PURE__ */ g("div", { className: v("w-full", p), children: [
    s && /* @__PURE__ */ g(S, { htmlFor: e, className: "mb-2 block", children: [
      s,
      l && /* @__PURE__ */ r("span", { className: "text-destructive ml-1", children: "*" })
    ] }),
    /* @__PURE__ */ r(
      R,
      {
        control: t,
        name: e,
        render: ({ field: { onChange: n, value: m, ...x } }) => /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ g(
            S,
            {
              htmlFor: e,
              className: v(
                "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent transition-colors",
                a && "border-destructive",
                h
              ),
              children: [
                /* @__PURE__ */ g("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [
                  /* @__PURE__ */ r(P, { className: "w-8 h-8 mb-2 text-muted-foreground" }),
                  /* @__PURE__ */ g("p", { className: "mb-2 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ r("span", { className: "font-semibold", children: "Click to upload" }),
                    " or drag and drop"
                  ] }),
                  /* @__PURE__ */ g("p", { className: "text-xs text-muted-foreground", children: [
                    u || "Any file",
                    i && " (multiple files allowed)"
                  ] })
                ] }),
                /* @__PURE__ */ r(
                  A,
                  {
                    ...x,
                    id: e,
                    type: "file",
                    accept: u,
                    multiple: i,
                    className: "hidden",
                    onChange: (F) => {
                      const $ = F.target.files;
                      $ && n(i ? Array.from($) : $[0]);
                    }
                  }
                )
              ]
            }
          ),
          m && /* @__PURE__ */ r("p", { className: "text-sm text-muted-foreground", children: i ? `${Array.isArray(m) ? m.length : 0} file(s) selected` : typeof m == "string" ? m : m?.name || "File selected" })
        ] })
      }
    ),
    a && /* @__PURE__ */ r("p", { className: "text-sm text-destructive mt-1", children: a })
  ] });
}
const ar = oe, z = y.createContext({}), nr = ({
  ...t
}) => /* @__PURE__ */ r(z.Provider, { value: { name: t.name }, children: /* @__PURE__ */ r(R, { ...t }) }), H = () => {
  const t = y.useContext(z), e = y.useContext(V), { getFieldState: s } = ae(), o = C({ name: t.name }), l = s(t.name, o);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: u } = e;
  return {
    id: u,
    name: t.name,
    formItemId: `${u}-form-item`,
    formDescriptionId: `${u}-form-item-description`,
    formMessageId: `${u}-form-item-message`,
    ...l
  };
}, V = y.createContext({});
function lr({ className: t, ...e }) {
  const s = y.useId();
  return /* @__PURE__ */ r(V.Provider, { value: { id: s }, children: /* @__PURE__ */ r("div", { "data-slot": "form-item", className: v("grid gap-2", t), ...e }) });
}
function ir({ className: t, ...e }) {
  const { error: s, formItemId: o } = H();
  return /* @__PURE__ */ r(
    S,
    {
      "data-slot": "form-label",
      "data-error": !!s,
      className: v("data-[error=true]:text-destructive", t),
      htmlFor: o,
      ...e
    }
  );
}
function cr({ ...t }) {
  const { error: e, formItemId: s, formDescriptionId: o, formMessageId: l } = H();
  return /* @__PURE__ */ r(
    te,
    {
      "data-slot": "form-control",
      id: s,
      "aria-describedby": e ? `${o} ${l}` : `${o}`,
      "aria-invalid": !!e,
      ...t
    }
  );
}
function dr({ className: t, ...e }) {
  const { formDescriptionId: s } = H();
  return /* @__PURE__ */ r(
    "p",
    {
      "data-slot": "form-description",
      id: s,
      className: v("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function ur({ className: t, ...e }) {
  const { error: s, formMessageId: o } = H(), l = s ? String(s?.message ?? "") : e.children;
  return l ? /* @__PURE__ */ r(
    "p",
    {
      "data-slot": "form-message",
      id: o,
      className: v("text-destructive text-sm", t),
      ...e,
      children: l
    }
  ) : null;
}
export {
  ar as Form,
  cr as FormControl,
  dr as FormDescription,
  nr as FormField,
  lr as FormItem,
  ir as FormLabel,
  ur as FormMessage,
  We as RHFCheckboxGroup,
  ze as RHFCombobox,
  Ve as RHFDatePicker,
  Be as RHFDateRangePicker,
  Ge as RHFEditor,
  Ke as RHFErrorMessage,
  Qe as RHFFileUpload,
  Xe as RHFFormattedInput,
  Ze as RHFInput,
  Je as RHFMultiSelect,
  Ye as RHFNumberInput,
  er as RHFRadioGroup,
  rr as RHFSwitch,
  tr as RHFTextArea,
  sr as RHFTimePicker,
  or as RHFUpload,
  H as useFormField
};
//# sourceMappingURL=index-rhf.mjs.map
