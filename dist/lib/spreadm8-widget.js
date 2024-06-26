function Ot() {
}
function Wt(l) {
  return l();
}
function Qt() {
  return /* @__PURE__ */ Object.create(null);
}
function Pt(l) {
  l.forEach(Wt);
}
function Bt(l) {
  return typeof l == "function";
}
function se(l, o) {
  return l != l ? o == o : l !== o || l && typeof l == "object" || typeof l == "function";
}
function de(l) {
  return Object.keys(l).length === 0;
}
function p(l, o) {
  l.appendChild(o);
}
function ut(l, o, e) {
  l.insertBefore(o, e || null);
}
function at(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function b(l) {
  return document.createElement(l);
}
function Ut(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function B(l) {
  return document.createTextNode(l);
}
function Z() {
  return B(" ");
}
function ce() {
  return B("");
}
function Yt(l, o, e, a) {
  return l.addEventListener(o, e, a), () => l.removeEventListener(o, e, a);
}
function m(l, o, e) {
  e == null ? l.removeAttribute(o) : l.getAttribute(o) !== e && l.setAttribute(o, e);
}
function fe(l) {
  return Array.from(l.childNodes);
}
function gt(l, o) {
  o = "" + o, l.wholeText !== o && (l.data = o);
}
function St(l, o, e, a) {
  e === null ? l.style.removeProperty(o) : l.style.setProperty(o, e, a ? "important" : "");
}
function pe(l) {
  const o = {};
  for (const e of l)
    o[e.name] = e.value;
  return o;
}
let Rt;
function Nt(l) {
  Rt = l;
}
function le() {
  if (!Rt)
    throw new Error("Function called outside component initialization");
  return Rt;
}
function he(l) {
  le().$$.on_mount.push(l);
}
function me(l) {
  le().$$.on_destroy.push(l);
}
const jt = [], Xt = [], zt = [], $t = [], _e = Promise.resolve();
let Kt = !1;
function ye() {
  Kt || (Kt = !0, _e.then(V));
}
function Zt(l) {
  zt.push(l);
}
const It = /* @__PURE__ */ new Set();
let Tt = 0;
function V() {
  if (Tt !== 0)
    return;
  const l = Rt;
  do {
    try {
      for (; Tt < jt.length; ) {
        const o = jt[Tt];
        Tt++, Nt(o), be(o.$$);
      }
    } catch (o) {
      throw jt.length = 0, Tt = 0, o;
    }
    for (Nt(null), jt.length = 0, Tt = 0; Xt.length; )
      Xt.pop()();
    for (let o = 0; o < zt.length; o += 1) {
      const e = zt[o];
      It.has(e) || (It.add(e), e());
    }
    zt.length = 0;
  } while (jt.length);
  for (; $t.length; )
    $t.pop()();
  Kt = !1, It.clear(), Nt(l);
}
function be(l) {
  if (l.fragment !== null) {
    l.update(), Pt(l.before_update);
    const o = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, o), l.after_update.forEach(Zt);
  }
}
const ge = /* @__PURE__ */ new Set();
function ve(l, o) {
  l && l.i && (ge.delete(l), l.i(o));
}
function we(l, o, e, a) {
  const { fragment: t, after_update: r } = l.$$;
  t && t.m(o, e), a || Zt(() => {
    const n = l.$$.on_mount.map(Wt).filter(Bt);
    l.$$.on_destroy ? l.$$.on_destroy.push(...n) : Pt(n), l.$$.on_mount = [];
  }), r.forEach(Zt);
}
function xe(l, o) {
  const e = l.$$;
  e.fragment !== null && (Pt(e.on_destroy), e.fragment && e.fragment.d(o), e.on_destroy = e.fragment = null, e.ctx = []);
}
function ke(l, o) {
  l.$$.dirty[0] === -1 && (jt.push(l), ye(), l.$$.dirty.fill(0)), l.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function Me(l, o, e, a, t, r, n, i = [-1]) {
  const u = Rt;
  Nt(l);
  const s = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Ot,
    not_equal: t,
    bound: Qt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(o.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Qt(),
    dirty: i,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let c = !1;
  if (s.ctx = e ? e(l, o.props || {}, (d, f, ...h) => {
    const _ = h.length ? h[0] : f;
    return s.ctx && t(s.ctx[d], s.ctx[d] = _) && (!s.skip_bound && s.bound[d] && s.bound[d](_), c && ke(l, d)), f;
  }) : [], s.update(), c = !0, Pt(s.before_update), s.fragment = a ? a(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const d = fe(o.target);
      s.fragment && s.fragment.l(d), d.forEach(at);
    } else
      s.fragment && s.fragment.c();
    o.intro && ve(l.$$.fragment), we(l, o.target, o.anchor, o.customElement), V();
  }
  Nt(u);
}
let ue;
typeof HTMLElement == "function" && (ue = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: l } = this.$$;
    this.$$.on_disconnect = l.map(Wt).filter(Bt);
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(l, o, e) {
    this[l] = e;
  }
  disconnectedCallback() {
    Pt(this.$$.on_disconnect);
  }
  $destroy() {
    xe(this, 1), this.$destroy = Ot;
  }
  $on(l, o) {
    if (!Bt(o))
      return Ot;
    const e = this.$$.callbacks[l] || (this.$$.callbacks[l] = []);
    return e.push(o), () => {
      const a = e.indexOf(o);
      a !== -1 && e.splice(a, 1);
    };
  }
  $set(l) {
    this.$$set && !de(l) && (this.$$.skip_bound = !0, this.$$set(l), this.$$.skip_bound = !1);
  }
});
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, te = {}, Se = {
  get exports() {
    return te;
  },
  set exports(l) {
    te = l;
  }
};
(function(l, o) {
  (function(e, a) {
    l.exports = a();
  })(Ce, function() {
    return function(e) {
      function a(r) {
        if (t[r])
          return t[r].exports;
        var n = t[r] = { exports: {}, id: r, loaded: !1 };
        return e[r].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports;
      }
      var t = {};
      return a.m = e, a.c = t, a.p = "", a(0);
    }([function(e, a, t) {
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      t(84);
      var n = t(41), i = r(n), u = function() {
        i.default.addPickerToOtherInputs(), i.default.supportsDateInput() || i.default.addPickerToDateInputs();
      };
      u(), document.addEventListener("DOMContentLoaded", function() {
        u();
      }), document.querySelector("body").addEventListener("mousedown", function() {
        u();
      });
    }, function(e, a, t) {
      e.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, a) {
      var t = e.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(e, a) {
      var t = {}.hasOwnProperty;
      e.exports = function(r, n) {
        return t.call(r, n);
      };
    }, function(e, a, t) {
      var r = t(9), n = t(32), i = t(25), u = Object.defineProperty;
      a.f = t(1) ? Object.defineProperty : function(s, c, d) {
        if (r(s), c = i(c, !0), r(d), n)
          try {
            return u(s, c, d);
          } catch {
          }
        if ("get" in d || "set" in d)
          throw TypeError("Accessors not supported!");
        return "value" in d && (s[c] = d.value), s;
      };
    }, function(e, a, t) {
      var r = t(59), n = t(16);
      e.exports = function(i) {
        return r(n(i));
      };
    }, function(e, a, t) {
      var r = t(4), n = t(14);
      e.exports = t(1) ? function(i, u, s) {
        return r.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(e, a, t) {
      var r = t(23)("wks"), n = t(15), i = t(2).Symbol, u = typeof i == "function", s = e.exports = function(c) {
        return r[c] || (r[c] = u && i[c] || (u ? i : n)("Symbol." + c));
      };
      s.store = r;
    }, function(e, a) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, a, t) {
      var r = t(12);
      e.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(e, a, t) {
      var r = t(2), n = t(8), i = t(56), u = t(6), s = "prototype", c = function(d, f, h) {
        var _, S, w, x = d & c.F, T = d & c.G, R = d & c.S, P = d & c.P, g = d & c.B, j = d & c.W, v = T ? n : n[f] || (n[f] = {}), y = v[s], D = T ? r : R ? r[f] : (r[f] || {})[s];
        T && (h = f);
        for (_ in h)
          S = !x && D && D[_] !== void 0, S && _ in v || (w = S ? D[_] : h[_], v[_] = T && typeof D[_] != "function" ? h[_] : g && S ? i(w, r) : j && D[_] == w ? function(k) {
            var A = function(E, N, L) {
              if (this instanceof k) {
                switch (arguments.length) {
                  case 0:
                    return new k();
                  case 1:
                    return new k(E);
                  case 2:
                    return new k(E, N);
                }
                return new k(E, N, L);
              }
              return k.apply(this, arguments);
            };
            return A[s] = k[s], A;
          }(w) : P && typeof w == "function" ? i(Function.call, w) : w, P && ((v.virtual || (v.virtual = {}))[_] = w, d & c.R && y && !y[_] && u(y, _, w)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
    }, function(e, a) {
      e.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(e, a) {
      e.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(e, a, t) {
      var r = t(38), n = t(17);
      e.exports = Object.keys || function(i) {
        return r(i, n);
      };
    }, function(e, a) {
      e.exports = function(t, r) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
      };
    }, function(e, a) {
      var t = 0, r = Math.random();
      e.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++t + r).toString(36));
      };
    }, function(e, a) {
      e.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(e, a) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, a) {
      e.exports = {};
    }, function(e, a) {
      e.exports = !0;
    }, function(e, a) {
      a.f = {}.propertyIsEnumerable;
    }, function(e, a, t) {
      var r = t(4).f, n = t(3), i = t(7)("toStringTag");
      e.exports = function(u, s, c) {
        u && !n(u = c ? u : u.prototype, i) && r(u, i, { configurable: !0, value: s });
      };
    }, function(e, a, t) {
      var r = t(23)("keys"), n = t(15);
      e.exports = function(i) {
        return r[i] || (r[i] = n(i));
      };
    }, function(e, a, t) {
      var r = t(2), n = "__core-js_shared__", i = r[n] || (r[n] = {});
      e.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(e, a) {
      var t = Math.ceil, r = Math.floor;
      e.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : t)(n);
      };
    }, function(e, a, t) {
      var r = t(12);
      e.exports = function(n, i) {
        if (!r(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !r(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !r(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !r(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, a, t) {
      var r = t(2), n = t(8), i = t(19), u = t(27), s = t(4).f;
      e.exports = function(c) {
        var d = n.Symbol || (n.Symbol = i ? {} : r.Symbol || {});
        c.charAt(0) == "_" || c in d || s(d, c, { value: u.f(c) });
      };
    }, function(e, a, t) {
      a.f = t(7);
    }, function(e, a) {
      a.__esModule = !0, a.default = function(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, a, t) {
      function r(u) {
        return u && u.__esModule ? u : { default: u };
      }
      a.__esModule = !0;
      var n = t(45), i = r(n);
      a.default = function() {
        function u(s, c) {
          for (var d = 0; d < c.length; d++) {
            var f = c[d];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), (0, i.default)(s, f.key, f);
          }
        }
        return function(s, c, d) {
          return c && u(s.prototype, c), d && u(s, d), s;
        };
      }();
    }, function(e, a) {
      var t = {}.toString;
      e.exports = function(r) {
        return t.call(r).slice(8, -1);
      };
    }, function(e, a, t) {
      var r = t(12), n = t(2).document, i = r(n) && r(n.createElement);
      e.exports = function(u) {
        return i ? n.createElement(u) : {};
      };
    }, function(e, a, t) {
      e.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, a, t) {
      var r = t(19), n = t(10), i = t(39), u = t(6), s = t(3), c = t(18), d = t(61), f = t(21), h = t(67), _ = t(7)("iterator"), S = !([].keys && "next" in [].keys()), w = "@@iterator", x = "keys", T = "values", R = function() {
        return this;
      };
      e.exports = function(P, g, j, v, y, D, k) {
        d(j, g, v);
        var A, E, N, L = function(nt) {
          if (!S && nt in J)
            return J[nt];
          switch (nt) {
            case x:
              return function() {
                return new j(this, nt);
              };
            case T:
              return function() {
                return new j(this, nt);
              };
          }
          return function() {
            return new j(this, nt);
          };
        }, W = g + " Iterator", K = y == T, Y = !1, J = P.prototype, Q = J[_] || J[w] || y && J[y], G = Q || L(y), I = y ? K ? L("entries") : G : void 0, lt = g == "Array" && J.entries || Q;
        if (lt && (N = h(lt.call(new P())), N !== Object.prototype && (f(N, W, !0), r || s(N, _) || u(N, _, R))), K && Q && Q.name !== T && (Y = !0, G = function() {
          return Q.call(this);
        }), r && !k || !S && !Y && J[_] || u(J, _, G), c[g] = G, c[W] = R, y)
          if (A = { values: K ? G : L(T), keys: D ? G : L(x), entries: I }, k)
            for (E in A)
              E in J || i(J, E, A[E]);
          else
            n(n.P + n.F * (S || Y), g, A);
        return A;
      };
    }, function(e, a, t) {
      var r = t(9), n = t(35), i = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", d = function() {
        var f, h = t(31)("iframe"), _ = i.length, S = "<", w = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", f = h.contentWindow.document, f.open(), f.write(S + "script" + w + "document.F=Object" + S + "/script" + w), f.close(), d = f.F; _--; )
          delete d[c][i[_]];
        return d();
      };
      e.exports = Object.create || function(f, h) {
        var _;
        return f !== null ? (s[c] = r(f), _ = new s(), s[c] = null, _[u] = f) : _ = d(), h === void 0 ? _ : n(_, h);
      };
    }, function(e, a, t) {
      var r = t(4), n = t(9), i = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var c, d = i(s), f = d.length, h = 0; f > h; )
          r.f(u, c = d[h++], s[c]);
        return u;
      };
    }, function(e, a, t) {
      var r = t(38), n = t(17).concat("length", "prototype");
      a.f = Object.getOwnPropertyNames || function(i) {
        return r(i, n);
      };
    }, function(e, a) {
      a.f = Object.getOwnPropertySymbols;
    }, function(e, a, t) {
      var r = t(3), n = t(5), i = t(55)(!1), u = t(22)("IE_PROTO");
      e.exports = function(s, c) {
        var d, f = n(s), h = 0, _ = [];
        for (d in f)
          d != u && r(f, d) && _.push(d);
        for (; c.length > h; )
          r(f, d = c[h++]) && (~i(_, d) || _.push(d));
        return _;
      };
    }, function(e, a, t) {
      e.exports = t(6);
    }, function(e, a, t) {
      function r(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, _) {
        for (h = String(h), _ = _ || 2; h.length < _; )
          h = "0" + h;
        return h;
      }
      function i(h) {
        var _ = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        _.setDate(_.getDate() - (_.getDay() + 6) % 7 + 3);
        var S = new Date(_.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var w = _.getTimezoneOffset() - S.getTimezoneOffset();
        _.setHours(_.getHours() - w);
        var x = (_ - S) / 6048e5;
        return 1 + Math.floor(x);
      }
      function u(h) {
        var _ = h.getDay();
        return _ === 0 && (_ = 7), _;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, d.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, d.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var c = t(48), d = r(c), f = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, _ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(w, x, T, R) {
          if (arguments.length !== 1 || s(w) !== "string" || /\d/.test(w) || (x = w, w = void 0), w = w || new Date(), w instanceof Date || (w = new Date(w)), isNaN(w))
            throw TypeError("Invalid date");
          x = String(f.masks[x] || x || f.masks.default);
          var P = x.slice(0, 4);
          P !== "UTC:" && P !== "GMT:" || (x = x.slice(4), T = !0, P === "GMT:" && (R = !0));
          var g = T ? "getUTC" : "get", j = w[g + "Date"](), v = w[g + "Day"](), y = w[g + "Month"](), D = w[g + "FullYear"](), k = w[g + "Hours"](), A = w[g + "Minutes"](), E = w[g + "Seconds"](), N = w[g + "Milliseconds"](), L = T ? 0 : w.getTimezoneOffset(), W = i(w), K = u(w), Y = { d: j, dd: n(j), ddd: f.i18n.dayNames[v], dddd: f.i18n.dayNames[v + 7], m: y + 1, mm: n(y + 1), mmm: f.i18n.monthNames[y], mmmm: f.i18n.monthNames[y + 12], yy: String(D).slice(2), yyyy: D, h: k % 12 || 12, hh: n(k % 12 || 12), H: k, HH: n(k), M: A, MM: n(A), s: E, ss: n(E), l: n(N, 3), L: n(Math.round(N / 10)), t: k < 12 ? "a" : "p", tt: k < 12 ? "am" : "pm", T: k < 12 ? "A" : "P", TT: k < 12 ? "AM" : "PM", Z: R ? "GMT" : T ? "UTC" : (String(w).match(_) || [""]).pop().replace(S, ""), o: (L > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(L) / 60) + Math.abs(L) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W, N: K };
          return x.replace(h, function(J) {
            return J in Y ? Y[J] : J.slice(1, J.length - 1);
          });
        };
      }();
      f.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, f.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, a.default = f;
    }, function(e, a, t) {
      function r(R) {
        return R && R.__esModule ? R : { default: R };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = t(44), i = r(n), u = t(28), s = r(u), c = t(29), d = r(c), f = t(43), h = r(f), _ = t(42), S = r(_), w = t(40), x = r(w), T = function() {
        function R(P) {
          var g = this;
          (0, s.default)(this, R), this.element = P, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!g.element.value)
              return null;
            var v = g.format || "yyyy-mm-dd", y = g.element.value.match(/(\d+)/g), D = 0, k = {};
            return v.replace(/(yyyy|dd|mm)/g, function(A) {
              k[A] = D++;
            }), new Date(y[k.yyyy], y[k.mm] - 1, y[k.dd]);
          }, set: function(v) {
            g.element.value = (0, x.default)(v, g.format);
          } }, valueAsNumber: { get: function() {
            return g.element.value ? g.element.valueAsDate.valueOf() : NaN;
          }, set: function(v) {
            g.element.valueAsDate = new Date(v);
          } } });
          var j = function(v) {
            var y = g.element;
            y.locale = g.localeText, h.default.attachTo(y);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(v) {
            var y = new Date();
            switch (v.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                g.element.valueAsDate && (y.setDate(g.element.valueAsDate.getDate() + 1), g.element.valueAsDate = y, h.default.pingInput());
                break;
              case 40:
                g.element.valueAsDate && (y.setDate(g.element.valueAsDate.getDate() - 1), g.element.valueAsDate = y, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(v) {
            h.default.sync();
          });
        }
        return (0, d.default)(R, [{ key: "getLocaleText", value: function() {
          var P = this.locale.toLowerCase();
          for (var g in S.default) {
            var j = g.split("_");
            if (j.map(function(v) {
              return v.toLowerCase();
            }), ~j.indexOf(P) || ~j.indexOf(P.substr(0, 2)))
              return S.default[g];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var P = document.createElement("input");
          P.setAttribute("type", "date");
          var g = "not-a-date";
          return P.setAttribute("value", g), P.value !== g;
        } }, { key: "addPickerToDateInputs", value: function() {
          var P = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), g = P.length;
          if (!g)
            return !1;
          for (var j = 0; j < g; ++j)
            new R(P[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var P = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), g = P.length;
          if (!g)
            return !1;
          for (var j = 0; j < g; ++j)
            new R(P[j]);
        } }]), R;
      }();
      a.default = T;
    }, function(e, a) {
      Object.defineProperty(a, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      a.default = t;
    }, function(e, a, t) {
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var n = t(28), i = r(n), u = t(29), s = r(u), c = function() {
        function d() {
          var f = this;
          if ((0, i.default)(this, d), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), d.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            f.date.setYear(f.year.value), f.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            f.date.setMonth(f.month.value), f.refreshDaysMatrix();
          });
          var _ = document.createElement("span");
          _.className = "monthSelect-wrapper", _.appendChild(this.month), this.container.appendChild(_), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var w = new Date();
            f.date = new Date(w.getFullYear() + "/" + ("0" + (w.getMonth() + 1)).slice(-2) + "/" + ("0" + w.getDate()).slice(-2)), f.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(w) {
            var x = w.target;
            if (!x.hasAttribute("data-day"))
              return !1;
            var T = f.days.querySelector("[data-selected]");
            T && T.removeAttribute("data-selected"), x.setAttribute("data-selected", ""), f.date.setDate(parseInt(x.textContent)), f.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(w) {
            if (f.isOpen) {
              for (var x = w.target, T = x === f.container || x === f.input; !T && (x = x.parentNode); )
                T = x === f.container;
              (w.target.getAttribute("type") !== "date" && !T || !T) && f.hide();
            }
          }, this.removeBlur = function(w) {
            f.isOpen && f.hide();
          };
        }
        return (0, s.default)(d, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var f = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", f.removeClickOut), document.addEventListener("touchstart", f.removeClickOut);
          }, 500), window.onpopstate = function() {
            f.hide();
          };
        } }, { key: "goto", value: function(f) {
          var h = this, _ = f.getBoundingClientRect();
          this.container.style.top = _.top + _.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), w = S.width ? S.width : 280, x = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, T = _.right - w;
          _.right < w ? (T = _.left, this.container.className = x() + " polyfill-left-aligned") : this.container.className = x() + " polyfill-right-aligned", this.container.style.left = T + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(f) {
          return !(f === this.input && this.isOpen || (this.input = f, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = d.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var f = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            f.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var f = ["<tr>"], h = 0, _ = this.locale.days.length; h < _; ++h)
            f.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = f.join(""), d.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var f = this.date.getFullYear(), h = this.date.getMonth(), _ = new Date(f, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), w = d.absoluteDate(this.input.valueAsDate) || !1, x = w && f === w.getFullYear() && h === w.getMonth(), T = [], R = 0; R < S + _; ++R)
            if (R % 7 === 0 && T.push(`
          ` + (R !== 0 ? "</tr>" : "") + `
          <tr>
        `), R + 1 <= _)
              T.push("<td></td>");
            else {
              var P = R + 1 - _, g = x && w.getDate() === P;
              T.push("<td data-day " + (g ? "data-selected" : "") + `>
          ` + P + `
        </td>`);
            }
          this.days.innerHTML = T.join("");
        } }, { key: "pingInput", value: function() {
          var f = void 0, h = void 0;
          try {
            f = new Event("input"), h = new Event("change");
          } catch {
            f = document.createEvent("KeyboardEvent"), f.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(f), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(f, h, _, S) {
          f.innerHTML = "";
          for (var w = h; w <= _; ++w) {
            var x = document.createElement("option");
            f.appendChild(x);
            var T = S ? S[w - h] : w;
            x.text = T, x.value = w;
          }
          return f;
        } }, { key: "absoluteDate", value: function(f) {
          return f && new Date(f.getTime() + 60 * f.getTimezoneOffset() * 1e3);
        } }]), d;
      }();
      window.thePicker = new c(), a.default = window.thePicker;
    }, function(e, a, t) {
      e.exports = { default: t(49), __esModule: !0 };
    }, function(e, a, t) {
      e.exports = { default: t(50), __esModule: !0 };
    }, function(e, a, t) {
      e.exports = { default: t(51), __esModule: !0 };
    }, function(e, a, t) {
      e.exports = { default: t(52), __esModule: !0 };
    }, function(e, a, t) {
      function r(d) {
        return d && d.__esModule ? d : { default: d };
      }
      a.__esModule = !0;
      var n = t(47), i = r(n), u = t(46), s = r(u), c = typeof s.default == "function" && typeof i.default == "symbol" ? function(d) {
        return typeof d;
      } : function(d) {
        return d && typeof s.default == "function" && d.constructor === s.default ? "symbol" : typeof d;
      };
      a.default = typeof s.default == "function" && c(i.default) === "symbol" ? function(d) {
        return typeof d > "u" ? "undefined" : c(d);
      } : function(d) {
        return d && typeof s.default == "function" && d.constructor === s.default ? "symbol" : typeof d > "u" ? "undefined" : c(d);
      };
    }, function(e, a, t) {
      t(73);
      var r = t(8).Object;
      e.exports = function(n, i) {
        return r.defineProperties(n, i);
      };
    }, function(e, a, t) {
      t(74);
      var r = t(8).Object;
      e.exports = function(n, i, u) {
        return r.defineProperty(n, i, u);
      };
    }, function(e, a, t) {
      t(77), t(75), t(78), t(79), e.exports = t(8).Symbol;
    }, function(e, a, t) {
      t(76), t(80), e.exports = t(27).f("iterator");
    }, function(e, a) {
      e.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(e, a) {
      e.exports = function() {
      };
    }, function(e, a, t) {
      var r = t(5), n = t(70), i = t(69);
      e.exports = function(u) {
        return function(s, c, d) {
          var f, h = r(s), _ = n(h.length), S = i(d, _);
          if (u && c != c) {
            for (; _ > S; )
              if (f = h[S++], f != f)
                return !0;
          } else
            for (; _ > S; S++)
              if ((u || S in h) && h[S] === c)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(e, a, t) {
      var r = t(53);
      e.exports = function(n, i, u) {
        if (r(n), i === void 0)
          return n;
        switch (u) {
          case 1:
            return function(s) {
              return n.call(i, s);
            };
          case 2:
            return function(s, c) {
              return n.call(i, s, c);
            };
          case 3:
            return function(s, c, d) {
              return n.call(i, s, c, d);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(e, a, t) {
      var r = t(13), n = t(37), i = t(20);
      e.exports = function(u) {
        var s = r(u), c = n.f;
        if (c)
          for (var d, f = c(u), h = i.f, _ = 0; f.length > _; )
            h.call(u, d = f[_++]) && s.push(d);
        return s;
      };
    }, function(e, a, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, a, t) {
      var r = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(e, a, t) {
      var r = t(30);
      e.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(e, a, t) {
      var r = t(34), n = t(14), i = t(21), u = {};
      t(6)(u, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, c, d) {
        s.prototype = r(u, { next: n(1, d) }), i(s, c + " Iterator");
      };
    }, function(e, a) {
      e.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    }, function(e, a, t) {
      var r = t(13), n = t(5);
      e.exports = function(i, u) {
        for (var s, c = n(i), d = r(c), f = d.length, h = 0; f > h; )
          if (c[s = d[h++]] === u)
            return s;
      };
    }, function(e, a, t) {
      var r = t(15)("meta"), n = t(12), i = t(3), u = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, d = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), f = function(x) {
        u(x, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(x, T) {
        if (!n(x))
          return typeof x == "symbol" ? x : (typeof x == "string" ? "S" : "P") + x;
        if (!i(x, r)) {
          if (!c(x))
            return "F";
          if (!T)
            return "E";
          f(x);
        }
        return x[r].i;
      }, _ = function(x, T) {
        if (!i(x, r)) {
          if (!c(x))
            return !0;
          if (!T)
            return !1;
          f(x);
        }
        return x[r].w;
      }, S = function(x) {
        return d && w.NEED && c(x) && !i(x, r) && f(x), x;
      }, w = e.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: _, onFreeze: S };
    }, function(e, a, t) {
      var r = t(20), n = t(14), i = t(5), u = t(25), s = t(3), c = t(32), d = Object.getOwnPropertyDescriptor;
      a.f = t(1) ? d : function(f, h) {
        if (f = i(f), h = u(h, !0), c)
          try {
            return d(f, h);
          } catch {
          }
        if (s(f, h))
          return n(!r.f.call(f, h), f[h]);
      };
    }, function(e, a, t) {
      var r = t(5), n = t(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(c) {
        try {
          return n(c);
        } catch {
          return u.slice();
        }
      };
      e.exports.f = function(c) {
        return u && i.call(c) == "[object Window]" ? s(c) : n(r(c));
      };
    }, function(e, a, t) {
      var r = t(3), n = t(71), i = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, a, t) {
      var r = t(24), n = t(16);
      e.exports = function(i) {
        return function(u, s) {
          var c, d, f = String(n(u)), h = r(s), _ = f.length;
          return h < 0 || h >= _ ? i ? "" : void 0 : (c = f.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === _ || (d = f.charCodeAt(h + 1)) < 56320 || d > 57343 ? i ? f.charAt(h) : c : i ? f.slice(h, h + 2) : (c - 55296 << 10) + (d - 56320) + 65536);
        };
      };
    }, function(e, a, t) {
      var r = t(24), n = Math.max, i = Math.min;
      e.exports = function(u, s) {
        return u = r(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(e, a, t) {
      var r = t(24), n = Math.min;
      e.exports = function(i) {
        return i > 0 ? n(r(i), 9007199254740991) : 0;
      };
    }, function(e, a, t) {
      var r = t(16);
      e.exports = function(n) {
        return Object(r(n));
      };
    }, function(e, a, t) {
      var r = t(54), n = t(62), i = t(18), u = t(5);
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = u(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, d = this._i++;
        return !s || d >= s.length ? (this._t = void 0, n(1)) : c == "keys" ? n(0, d) : c == "values" ? n(0, s[d]) : n(0, [d, s[d]]);
      }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(e, a, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, a, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, a) {
    }, function(e, a, t) {
      var r = t(68)(!0);
      t(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = r(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(e, a, t) {
      var r = t(2), n = t(3), i = t(1), u = t(10), s = t(39), c = t(64).KEY, d = t(11), f = t(23), h = t(21), _ = t(15), S = t(7), w = t(27), x = t(26), T = t(63), R = t(57), P = t(60), g = t(9), j = t(5), v = t(25), y = t(14), D = t(34), k = t(66), A = t(65), E = t(4), N = t(13), L = A.f, W = E.f, K = k.f, Y = r.Symbol, J = r.JSON, Q = J && J.stringify, G = "prototype", I = S("_hidden"), lt = S("toPrimitive"), nt = {}.propertyIsEnumerable, it = f("symbol-registry"), X = f("symbols"), q = f("op-symbols"), H = Object[G], F = typeof Y == "function", rt = r.QObject, _t = !rt || !rt[G] || !rt[G].findChild, yt = i && d(function() {
        return D(W({}, "a", { get: function() {
          return W(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(M, O, z) {
        var et = L(H, O);
        et && delete H[O], W(M, O, z), et && M !== H && W(H, O, et);
      } : W, Dt = function(M) {
        var O = X[M] = D(Y[G]);
        return O._k = M, O;
      }, kt = F && typeof Y.iterator == "symbol" ? function(M) {
        return typeof M == "symbol";
      } : function(M) {
        return M instanceof Y;
      }, U = function(M, O, z) {
        return M === H && U(q, O, z), g(M), O = v(O, !0), g(z), n(X, O) ? (z.enumerable ? (n(M, I) && M[I][O] && (M[I][O] = !1), z = D(z, { enumerable: y(0, !1) })) : (n(M, I) || W(M, I, y(1, {})), M[I][O] = !0), yt(M, O, z)) : W(M, O, z);
      }, ct = function(M, O) {
        g(M);
        for (var z, et = R(O = j(O)), st = 0, bt = et.length; bt > st; )
          U(M, z = et[st++], O[z]);
        return M;
      }, Mt = function(M, O) {
        return O === void 0 ? D(M) : ct(D(M), O);
      }, vt = function(M) {
        var O = nt.call(this, M = v(M, !0));
        return !(this === H && n(X, M) && !n(q, M)) && (!(O || !n(this, M) || !n(X, M) || n(this, I) && this[I][M]) || O);
      }, wt = function(M, O) {
        if (M = j(M), O = v(O, !0), M !== H || !n(X, O) || n(q, O)) {
          var z = L(M, O);
          return !z || !n(X, O) || n(M, I) && M[I][O] || (z.enumerable = !0), z;
        }
      }, C = function(M) {
        for (var O, z = K(j(M)), et = [], st = 0; z.length > st; )
          n(X, O = z[st++]) || O == I || O == c || et.push(O);
        return et;
      }, tt = function(M) {
        for (var O, z = M === H, et = K(z ? q : j(M)), st = [], bt = 0; et.length > bt; )
          !n(X, O = et[bt++]) || z && !n(H, O) || st.push(X[O]);
        return st;
      };
      F || (Y = function() {
        if (this instanceof Y)
          throw TypeError("Symbol is not a constructor!");
        var M = _(arguments.length > 0 ? arguments[0] : void 0), O = function(z) {
          this === H && O.call(q, z), n(this, I) && n(this[I], M) && (this[I][M] = !1), yt(this, M, y(1, z));
        };
        return i && _t && yt(H, M, { configurable: !0, set: O }), Dt(M);
      }, s(Y[G], "toString", function() {
        return this._k;
      }), A.f = wt, E.f = U, t(36).f = k.f = C, t(20).f = vt, t(37).f = tt, i && !t(19) && s(H, "propertyIsEnumerable", vt, !0), w.f = function(M) {
        return Dt(S(M));
      }), u(u.G + u.W + u.F * !F, { Symbol: Y });
      for (var ot = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), dt = 0; ot.length > dt; )
        S(ot[dt++]);
      for (var ot = N(S.store), dt = 0; ot.length > dt; )
        x(ot[dt++]);
      u(u.S + u.F * !F, "Symbol", { for: function(M) {
        return n(it, M += "") ? it[M] : it[M] = Y(M);
      }, keyFor: function(M) {
        if (kt(M))
          return T(it, M);
        throw TypeError(M + " is not a symbol!");
      }, useSetter: function() {
        _t = !0;
      }, useSimple: function() {
        _t = !1;
      } }), u(u.S + u.F * !F, "Object", { create: Mt, defineProperty: U, defineProperties: ct, getOwnPropertyDescriptor: wt, getOwnPropertyNames: C, getOwnPropertySymbols: tt }), J && u(u.S + u.F * (!F || d(function() {
        var M = Y();
        return Q([M]) != "[null]" || Q({ a: M }) != "{}" || Q(Object(M)) != "{}";
      })), "JSON", { stringify: function(M) {
        if (M !== void 0 && !kt(M)) {
          for (var O, z, et = [M], st = 1; arguments.length > st; )
            et.push(arguments[st++]);
          return O = et[1], typeof O == "function" && (z = O), !z && P(O) || (O = function(bt, xt) {
            if (z && (xt = z.call(this, bt, xt)), !kt(xt))
              return xt;
          }), et[1] = O, Q.apply(J, et);
        }
      } }), Y[G][lt] || t(6)(Y[G], lt, Y[G].valueOf), h(Y, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(e, a, t) {
      t(26)("asyncIterator");
    }, function(e, a, t) {
      t(26)("observable");
    }, function(e, a, t) {
      t(72);
      for (var r = t(2), n = t(6), i = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var d = s[c], f = r[d], h = f && f.prototype;
        h && !h[u] && n(h, u, d), i[d] = i.Array;
      }
    }, function(e, a, t) {
      a = e.exports = t(82)(), a.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, a) {
      e.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var r = [], n = 0; n < this.length; n++) {
            var i = this[n];
            i[2] ? r.push("@media " + i[2] + "{" + i[1] + "}") : r.push(i[1]);
          }
          return r.join("");
        }, t.i = function(r, n) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < r.length; u++) {
            var c = r[u];
            typeof c[0] == "number" && i[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, a, t) {
      function r(v, y) {
        for (var D = 0; D < v.length; D++) {
          var k = v[D], A = S[k.id];
          if (A) {
            A.refs++;
            for (var E = 0; E < A.parts.length; E++)
              A.parts[E](k.parts[E]);
            for (; E < k.parts.length; E++)
              A.parts.push(d(k.parts[E], y));
          } else {
            for (var N = [], E = 0; E < k.parts.length; E++)
              N.push(d(k.parts[E], y));
            S[k.id] = { id: k.id, refs: 1, parts: N };
          }
        }
      }
      function n(v) {
        for (var y = [], D = {}, k = 0; k < v.length; k++) {
          var A = v[k], E = A[0], N = A[1], L = A[2], W = A[3], K = { css: N, media: L, sourceMap: W };
          D[E] ? D[E].parts.push(K) : y.push(D[E] = { id: E, parts: [K] });
        }
        return y;
      }
      function i(v, y) {
        var D = T(), k = g[g.length - 1];
        if (v.insertAt === "top")
          k ? k.nextSibling ? D.insertBefore(y, k.nextSibling) : D.appendChild(y) : D.insertBefore(y, D.firstChild), g.push(y);
        else {
          if (v.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          D.appendChild(y);
        }
      }
      function u(v) {
        v.parentNode.removeChild(v);
        var y = g.indexOf(v);
        y >= 0 && g.splice(y, 1);
      }
      function s(v) {
        var y = document.createElement("style");
        return y.type = "text/css", i(v, y), y;
      }
      function c(v) {
        var y = document.createElement("link");
        return y.rel = "stylesheet", i(v, y), y;
      }
      function d(v, y) {
        var D, k, A;
        if (y.singleton) {
          var E = P++;
          D = R || (R = s(y)), k = f.bind(null, D, E, !1), A = f.bind(null, D, E, !0);
        } else
          v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (D = c(y), k = _.bind(null, D), A = function() {
            u(D), D.href && URL.revokeObjectURL(D.href);
          }) : (D = s(y), k = h.bind(null, D), A = function() {
            u(D);
          });
        return k(v), function(N) {
          if (N) {
            if (N.css === v.css && N.media === v.media && N.sourceMap === v.sourceMap)
              return;
            k(v = N);
          } else
            A();
        };
      }
      function f(v, y, D, k) {
        var A = D ? "" : k.css;
        if (v.styleSheet)
          v.styleSheet.cssText = j(y, A);
        else {
          var E = document.createTextNode(A), N = v.childNodes;
          N[y] && v.removeChild(N[y]), N.length ? v.insertBefore(E, N[y]) : v.appendChild(E);
        }
      }
      function h(v, y) {
        var D = y.css, k = y.media;
        if (k && v.setAttribute("media", k), v.styleSheet)
          v.styleSheet.cssText = D;
        else {
          for (; v.firstChild; )
            v.removeChild(v.firstChild);
          v.appendChild(document.createTextNode(D));
        }
      }
      function _(v, y) {
        var D = y.css, k = y.sourceMap;
        k && (D += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(k)))) + " */");
        var A = new Blob([D], { type: "text/css" }), E = v.href;
        v.href = URL.createObjectURL(A), E && URL.revokeObjectURL(E);
      }
      var S = {}, w = function(v) {
        var y;
        return function() {
          return typeof y > "u" && (y = v.apply(this, arguments)), y;
        };
      }, x = w(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), T = w(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), R = null, P = 0, g = [];
      e.exports = function(v, y) {
        y = y || {}, typeof y.singleton > "u" && (y.singleton = x()), typeof y.insertAt > "u" && (y.insertAt = "bottom");
        var D = n(v);
        return r(D, y), function(k) {
          for (var A = [], E = 0; E < D.length; E++) {
            var N = D[E], L = S[N.id];
            L.refs--, A.push(L);
          }
          if (k) {
            var W = n(k);
            r(W, y);
          }
          for (var E = 0; E < A.length; E++) {
            var L = A[E];
            if (L.refs === 0) {
              for (var K = 0; K < L.parts.length; K++)
                L.parts[K]();
              delete S[L.id];
            }
          }
        };
      };
      var j = function() {
        var v = [];
        return function(y, D) {
          return v[y] = D, v.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, a, t) {
      var r = t(81);
      typeof r == "string" && (r = [[e.id, r, ""]]), t(83)(r, {}), r.locals && (e.exports = r.locals);
    }]);
  });
})(Se);
function De(l) {
  let o, e, a;
  function t(i, u) {
    return (
      /*isIdle*/
      i[10] || /*isFetching*/
      i[12] ? je : (
        /*backendData*/
        i[9] ? Te : (
          /*error*/
          i[11] ? Ae : Ee
        )
      )
    );
  }
  let r = t(l), n = r(l);
  return {
    c() {
      o = b("div"), n.c(), m(o, "class", e = `p-12 shadow-${/*shadow*/
      l[3]}`), m(o, "style", a = `
        background-color: ${/*background*/
      l[14]};
        border-radius: ${/*border_radius*/
      l[2]};
        color: ${/*text_color*/
      l[7]};
        opacity: ${/*opacity*/
      l[4]}%!important;
        height: ${/*height*/
      l[0]};
        width: ${/*width*/
      l[1]};
`);
    },
    m(i, u) {
      ut(i, o, u), n.m(o, null);
    },
    p(i, u) {
      r === (r = t(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(o, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      16535 && a !== (a = `
        background-color: ${/*background*/
      i[14]};
        border-radius: ${/*border_radius*/
      i[2]};
        color: ${/*text_color*/
      i[7]};
        opacity: ${/*opacity*/
      i[4]}%!important;
        height: ${/*height*/
      i[0]};
        width: ${/*width*/
      i[1]};
`) && m(o, "style", a);
    },
    d(i) {
      i && at(o), n.d();
    }
  };
}
function Oe(l) {
  let o, e, a, t, r, n;
  function i(c, d) {
    return (
      /*statusCheckError*/
      c[13] === ze ? Fe : Pe
    );
  }
  let u = i(l), s = u(l);
  return {
    c() {
      o = b("div"), e = b("div"), a = b("h1"), a.textContent = "An error occured", t = Z(), s.c(), m(a, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(o, "class", r = `p-4 shadow-${/*shadow*/
      l[3]}`), m(o, "style", n = `
        background-color: ${/*background*/
      l[14]};
        border-radius: ${/*border_radius*/
      l[2]};
        color: ${/*text_color*/
      l[7]};
        opacity: ${/*opacity*/
      l[4]}%!important;
        height: ${/*height*/
      l[0]};
        width: ${/*width*/
      l[1]};
`);
    },
    m(c, d) {
      ut(c, o, d), p(o, e), p(e, a), p(e, t), s.m(e, null);
    },
    p(c, d) {
      u === (u = i(c)) && s ? s.p(c, d) : (s.d(1), s = u(c), s && (s.c(), s.m(e, null))), d[0] & /*shadow*/
      8 && r !== (r = `p-4 shadow-${/*shadow*/
      c[3]}`) && m(o, "class", r), d[0] & /*background, border_radius, text_color, opacity, height, width*/
      16535 && n !== (n = `
        background-color: ${/*background*/
      c[14]};
        border-radius: ${/*border_radius*/
      c[2]};
        color: ${/*text_color*/
      c[7]};
        opacity: ${/*opacity*/
      c[4]}%!important;
        height: ${/*height*/
      c[0]};
        width: ${/*width*/
      c[1]};
`) && m(o, "style", n);
    },
    d(c) {
      c && at(o), s.d();
    }
  };
}
function Ee(l) {
  let o, e, a, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "An unknown error", a = Z(), t = b("button"), r = B("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), St(
        t,
        "background-color",
        /*button_color*/
        l[8]
      ), St(
        t,
        "color",
        /*text_color*/
        l[7]
      ), m(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      ut(u, o, s), p(o, e), p(o, a), p(o, t), p(t, r), n || (i = Yt(
        t,
        "click",
        /*click_handler_2*/
        l[46]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      256 && St(
        t,
        "background-color",
        /*button_color*/
        u[8]
      ), s[0] & /*text_color*/
      128 && St(
        t,
        "color",
        /*text_color*/
        u[7]
      );
    },
    d(u) {
      u && at(o), n = !1, i();
    }
  };
}
function Ae(l) {
  let o, e, a, t, r, n, i, u, s, c, d;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "Error", a = Z(), t = b("p"), r = B(
        /*error*/
        l[11]
      ), n = Z(), i = b("div"), u = b("button"), s = B("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        l[15]
      ), m(i, "class", "w-full mt-auto"), m(o, "class", "flex flex-col items-center h-full");
    },
    m(f, h) {
      ut(f, o, h), p(o, e), p(o, a), p(o, t), p(t, r), p(o, n), p(o, i), p(i, u), p(u, s), c || (d = Yt(
        u,
        "click",
        /*click_handler_1*/
        l[45]
      ), c = !0);
    },
    p(f, h) {
      h[0] & /*error*/
      2048 && gt(
        r,
        /*error*/
        f[11]
      ), h[0] & /*button_style*/
      32768 && m(
        u,
        "style",
        /*button_style*/
        f[15]
      );
    },
    d(f) {
      f && at(o), c = !1, d();
    }
  };
}
function Te(l) {
  let o, e, a, t, r, n, i = (
    /*backendData*/
    l[9].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, c, d, f, h = (
    /*backendData*/
    l[9].data[0].third_party_spread + ""
  ), _, S, w, x, T, R = (
    /*backendData*/
    l[9].data[0].sold_ccy + ""
  ), P, g, j = (
    /*backendData*/
    l[9].data[0].third_party_profit + ""
  ), v, y, D, k, A, E, N, L, W, K = (
    /*backendData*/
    l[9].data[0].integritas_rate.toFixed(4) + ""
  ), Y, J, Q, G, I, lt, nt, it, X, q = (
    /*shouldShowInterbankRate*/
    l[18] && ee(l)
  ), H = (
    /*backendData*/
    l[9].data[0].integritas_savings > 50 && oe(l)
  );
  return {
    c() {
      o = b("div"), e = b("div"), a = b("h1"), a.textContent = "Your Provider", t = Z(), r = b("p"), n = B(`Your exchange rate
                        was `), u = B(i), s = Z(), q && q.c(), c = Z(), d = b("p"), f = B("Your provider's markup was "), _ = B(h), S = B("%"), w = Z(), x = b("p"), T = B(`Your currency charges
                        were `), P = B(R), g = Z(), v = B(j), y = B(` on
                        this trade`), D = Z(), k = b("div"), A = b("h1"), E = B(
        /*name*/
        l[5]
      ), N = Z(), L = b("p"), W = B("Our exchange rate was "), Y = B(K), J = Z(), H && H.c(), Q = Z(), G = b("div"), I = b("button"), lt = B("Calculate again"), m(a, "class", "text-2xl"), m(r, "class", "text-sm"), m(d, "class", "text-sm"), m(x, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(A, "class", "text-2xl mt-4"), m(L, "class", "text-sm"), m(k, "class", "flex flex-col gap-2"), m(o, "class", "flex flex-col divide-y gap-4"), St(o, "height", "95%"), m(I, "class", "px-6 py-3"), m(I, "style", nt = `${/*button_style*/
      l[15]} margin-bottom: 1.5rem;`), m(G, "class", "w-full");
    },
    m(F, rt) {
      ut(F, o, rt), p(o, e), p(e, a), p(e, t), p(e, r), p(r, n), p(r, u), p(e, s), q && q.m(e, null), p(e, c), p(e, d), p(d, f), p(d, _), p(d, S), p(e, w), p(e, x), p(x, T), p(x, P), p(x, g), p(x, v), p(x, y), p(o, D), p(o, k), p(k, A), p(A, E), p(k, N), p(k, L), p(L, W), p(L, Y), p(k, J), H && H.m(k, null), ut(F, Q, rt), ut(F, G, rt), p(G, I), p(I, lt), it || (X = Yt(
        I,
        "click",
        /*click_handler*/
        l[44]
      ), it = !0);
    },
    p(F, rt) {
      rt[0] & /*backendData*/
      512 && i !== (i = /*backendData*/
      F[9].data[0].third_party_exchange_rate.toFixed(4) + "") && gt(u, i), /*shouldShowInterbankRate*/
      F[18] ? q ? q.p(F, rt) : (q = ee(F), q.c(), q.m(e, c)) : q && (q.d(1), q = null), rt[0] & /*backendData*/
      512 && h !== (h = /*backendData*/
      F[9].data[0].third_party_spread + "") && gt(_, h), rt[0] & /*backendData*/
      512 && R !== (R = /*backendData*/
      F[9].data[0].sold_ccy + "") && gt(P, R), rt[0] & /*backendData*/
      512 && j !== (j = /*backendData*/
      F[9].data[0].third_party_profit + "") && gt(v, j), rt[0] & /*name*/
      32 && gt(
        E,
        /*name*/
        F[5]
      ), rt[0] & /*backendData*/
      512 && K !== (K = /*backendData*/
      F[9].data[0].integritas_rate.toFixed(4) + "") && gt(Y, K), /*backendData*/
      F[9].data[0].integritas_savings > 50 ? H ? H.p(F, rt) : (H = oe(F), H.c(), H.m(k, null)) : H && (H.d(1), H = null), rt[0] & /*button_style*/
      32768 && nt !== (nt = `${/*button_style*/
      F[15]} margin-bottom: 1.5rem;`) && m(I, "style", nt);
    },
    d(F) {
      F && at(o), q && q.d(), H && H.d(), F && at(Q), F && at(G), it = !1, X();
    }
  };
}
function je(l) {
  let o, e, a, t, r, n, i, u, s, c, d, f, h, _, S, w, x, T, R, P, g, j, v, y, D, k, A, E, N, L, W, K, Y, J, Q, G, I, lt, nt, it, X, q, H, F, rt, _t, yt, Dt, kt, U, ct, Mt, vt, wt, C, tt, ot, dt, M, O, z, et, st, bt, xt, Et, At, Gt, Ht, Ft, Jt, qt, ft = (
    /*shouldShowTimezone*/
    l[19] && ne(l)
  ), pt = !/*shouldShowTimezone*/
  l[19] && re(l), ht = (
    /*shouldShowEmail*/
    l[17] && ie(l)
  );
  function Vt($, mt) {
    return (
      /*isFetching*/
      $[12] ? Ne : Re
    );
  }
  let Lt = Vt(l), Ct = Lt(l);
  return {
    c() {
      o = b("form"), e = b("div"), a = b("div"), t = b("div"), r = b("label"), r.textContent = "Select Date", n = Z(), i = b("input"), u = Z(), ft && ft.c(), s = Z(), pt && pt.c(), c = Z(), d = b("div"), f = b("div"), h = b("label"), h.textContent = "Sell Amount", _ = Z(), S = b("input"), w = Z(), x = b("div"), T = b("label"), R = B("Sell Currency"), P = Z(), g = b("select"), j = b("option"), j.textContent = "GBP", v = b("option"), v.textContent = "USD", y = b("option"), y.textContent = "EUR", D = b("option"), D.textContent = "JPY", k = b("option"), k.textContent = "CHF", A = b("option"), A.textContent = "CNY", E = b("option"), E.textContent = "NZD", N = b("option"), N.textContent = "SGD", L = b("option"), L.textContent = "INR", W = b("option"), W.textContent = "AUD", K = b("option"), K.textContent = "CAD", Y = b("option"), Y.textContent = "HKD", J = b("option"), J.textContent = "MYR", Q = b("option"), Q.textContent = "NOK", G = b("option"), G.textContent = "ZAR", I = b("option"), I.textContent = "RUB", lt = b("option"), lt.textContent = "SEK", nt = Z(), it = b("div"), X = b("div"), q = b("label"), q.textContent = "Buy Amount", H = Z(), F = b("input"), rt = Z(), _t = b("div"), yt = b("label"), Dt = B("Buy Currency"), kt = Z(), U = b("select"), ct = b("option"), ct.textContent = "USD", Mt = b("option"), Mt.textContent = "GBP", vt = b("option"), vt.textContent = "EUR", wt = b("option"), wt.textContent = "JPY", C = b("option"), C.textContent = "CHF", tt = b("option"), tt.textContent = "CNY", ot = b("option"), ot.textContent = "NZD", dt = b("option"), dt.textContent = "SGD", M = b("option"), M.textContent = "INR", O = b("option"), O.textContent = "AUD", z = b("option"), z.textContent = "CAD", et = b("option"), et.textContent = "HKD", st = b("option"), st.textContent = "MYR", bt = b("option"), bt.textContent = "NOK", xt = b("option"), xt.textContent = "ZAR", Et = b("option"), Et.textContent = "RUB", At = b("option"), At.textContent = "SEK", Gt = Z(), ht && ht.c(), Ht = Z(), Ft = b("div"), Ct.c(), m(r, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        l[16]
      ), m(t, "class", "w-full"), m(a, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(h, "for", "sold_notional"), m(S, "id", "sold_notional"), m(S, "type", "number"), m(S, "step", ".01"), m(S, "class", "w-full rounded-md px-3 py-2 mt-4"), m(S, "name", "sold_notional"), m(S, "placeholder", "10000"), S.required = !0, m(
        S,
        "style",
        /*input_style*/
        l[16]
      ), m(f, "class", "w-full"), m(T, "for", "sold_ccy"), St(
        T,
        "color",
        /*text_color*/
        l[7]
      ), j.selected = !0, j.__value = "GBP", j.value = j.__value, v.__value = "USD", v.value = v.__value, y.__value = "EUR", y.value = y.__value, D.__value = "JPY", D.value = D.__value, k.__value = "CHF", k.value = k.__value, A.__value = "CNY", A.value = A.__value, E.__value = "NZD", E.value = E.__value, N.__value = "SGD", N.value = N.__value, L.__value = "INR", L.value = L.__value, W.__value = "AUD", W.value = W.__value, K.__value = "CAD", K.value = K.__value, Y.__value = "HKD", Y.value = Y.__value, J.__value = "MYR", J.value = J.__value, Q.__value = "NOK", Q.value = Q.__value, G.__value = "ZAR", G.value = G.__value, I.__value = "RUB", I.value = I.__value, lt.__value = "SEK", lt.value = lt.__value, m(g, "name", "sold_ccy"), m(g, "id", "sold_ccy"), m(g, "class", "w-full rounded-md px-3 py-2 mt-4"), g.required = !0, m(
        g,
        "style",
        /*input_style*/
        l[16]
      ), m(x, "class", "w-full"), m(d, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(q, "for", "bought_notional"), m(F, "id", "bought_notional"), m(F, "type", "number"), m(F, "step", ".01"), m(F, "class", "w-full rounded-md px-3 py-2 mt-4"), m(F, "name", "bought_notional"), m(F, "placeholder", "10000"), F.required = !0, m(
        F,
        "style",
        /*input_style*/
        l[16]
      ), m(X, "class", "w-full"), m(yt, "for", "bought_ccy"), St(
        yt,
        "color",
        /*text_color*/
        l[7]
      ), ct.selected = !0, ct.__value = "USD", ct.value = ct.__value, Mt.__value = "GBP", Mt.value = Mt.__value, vt.__value = "EUR", vt.value = vt.__value, wt.__value = "JPY", wt.value = wt.__value, C.__value = "CHF", C.value = C.__value, tt.__value = "CNY", tt.value = tt.__value, ot.__value = "NZD", ot.value = ot.__value, dt.__value = "SGD", dt.value = dt.__value, M.__value = "INR", M.value = M.__value, O.__value = "AUD", O.value = O.__value, z.__value = "CAD", z.value = z.__value, et.__value = "HKD", et.value = et.__value, st.__value = "MYR", st.value = st.__value, bt.__value = "NOK", bt.value = bt.__value, xt.__value = "ZAR", xt.value = xt.__value, Et.__value = "RUB", Et.value = Et.__value, At.__value = "SEK", At.value = At.__value, m(U, "name", "bought_ccy"), m(U, "id", "bought_ccy"), m(U, "class", "w-full rounded-md px-3 py-2 mt-4"), U.required = !0, m(
        U,
        "style",
        /*input_style*/
        l[16]
      ), m(_t, "class", "w-full"), m(it, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m($, mt) {
      ut($, o, mt), p(o, e), p(e, a), p(a, t), p(t, r), p(t, n), p(t, i), p(a, u), ft && ft.m(a, null), p(a, s), pt && pt.m(a, null), p(e, c), p(e, d), p(d, f), p(f, h), p(f, _), p(f, S), p(d, w), p(d, x), p(x, T), p(T, R), p(x, P), p(x, g), p(g, j), p(g, v), p(g, y), p(g, D), p(g, k), p(g, A), p(g, E), p(g, N), p(g, L), p(g, W), p(g, K), p(g, Y), p(g, J), p(g, Q), p(g, G), p(g, I), p(g, lt), p(e, nt), p(e, it), p(it, X), p(X, q), p(X, H), p(X, F), p(it, rt), p(it, _t), p(_t, yt), p(yt, Dt), p(_t, kt), p(_t, U), p(U, ct), p(U, Mt), p(U, vt), p(U, wt), p(U, C), p(U, tt), p(U, ot), p(U, dt), p(U, M), p(U, O), p(U, z), p(U, et), p(U, st), p(U, bt), p(U, xt), p(U, Et), p(U, At), p(e, Gt), ht && ht.m(e, null), p(e, Ht), p(e, Ft), Ct.m(Ft, null), Jt || (qt = Yt(
        o,
        "submit",
        /*handleFormSubmit*/
        l[21]
      ), Jt = !0);
    },
    p($, mt) {
      mt[0] & /*input_style*/
      65536 && m(
        i,
        "style",
        /*input_style*/
        $[16]
      ), /*shouldShowTimezone*/
      $[19] ? ft ? ft.p($, mt) : (ft = ne($), ft.c(), ft.m(a, s)) : ft && (ft.d(1), ft = null), /*shouldShowTimezone*/
      $[19] ? pt && (pt.d(1), pt = null) : pt ? pt.p($, mt) : (pt = re($), pt.c(), pt.m(a, null)), mt[0] & /*input_style*/
      65536 && m(
        S,
        "style",
        /*input_style*/
        $[16]
      ), mt[0] & /*text_color*/
      128 && St(
        T,
        "color",
        /*text_color*/
        $[7]
      ), mt[0] & /*input_style*/
      65536 && m(
        g,
        "style",
        /*input_style*/
        $[16]
      ), mt[0] & /*input_style*/
      65536 && m(
        F,
        "style",
        /*input_style*/
        $[16]
      ), mt[0] & /*text_color*/
      128 && St(
        yt,
        "color",
        /*text_color*/
        $[7]
      ), mt[0] & /*input_style*/
      65536 && m(
        U,
        "style",
        /*input_style*/
        $[16]
      ), /*shouldShowEmail*/
      $[17] ? ht ? ht.p($, mt) : (ht = ie($), ht.c(), ht.m(e, Ht)) : ht && (ht.d(1), ht = null), Lt === (Lt = Vt($)) && Ct ? Ct.p($, mt) : (Ct.d(1), Ct = Lt($), Ct && (Ct.c(), Ct.m(Ft, null)));
    },
    d($) {
      $ && at(o), ft && ft.d(), pt && pt.d(), ht && ht.d(), Ct.d(), Jt = !1, qt();
    }
  };
}
function ee(l) {
  let o, e, a = (
    /*backendData*/
    l[9].data[0].ccy_pair + ""
  ), t, r, n = (
    /*backendData*/
    l[9].data[0].mid_market_rate.toFixed(4) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = B("The interbank rate "), t = B(a), r = B(`
                            was `), i = B(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      ut(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      512 && a !== (a = /*backendData*/
      u[9].data[0].ccy_pair + "") && gt(t, a), s[0] & /*backendData*/
      512 && n !== (n = /*backendData*/
      u[9].data[0].mid_market_rate.toFixed(4) + "") && gt(i, n);
    },
    d(u) {
      u && at(o);
    }
  };
}
function oe(l) {
  let o, e, a = (
    /*backendData*/
    l[9].data[0].sold_ccy + ""
  ), t, r, n = (
    /*backendData*/
    l[9].data[0].integritas_savings.toFixed(2) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = B(`We would've saved
                            you `), t = B(a), r = Z(), i = B(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      ut(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      512 && a !== (a = /*backendData*/
      u[9].data[0].sold_ccy + "") && gt(t, a), s[0] & /*backendData*/
      512 && n !== (n = /*backendData*/
      u[9].data[0].integritas_savings.toFixed(2) + "") && gt(i, n);
    },
    d(u) {
      u && at(o);
    }
  };
}
function ne(l) {
  let o, e, a, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("label"), a = B("Select Time ("), t = B(
        /*timezone*/
        l[6]
      ), r = B(")"), n = Z(), i = b("input"), m(e, "for", "time"), m(i, "id", "time"), m(i, "type", "time"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "time"), m(i, "placeholder", "Select Time"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        l[16]
      ), m(o, "class", "w-full");
    },
    m(u, s) {
      ut(u, o, s), p(o, e), p(e, a), p(e, t), p(e, r), p(o, n), p(o, i);
    },
    p(u, s) {
      s[0] & /*timezone*/
      64 && gt(
        t,
        /*timezone*/
        u[6]
      ), s[0] & /*input_style*/
      65536 && m(
        i,
        "style",
        /*input_style*/
        u[16]
      );
    },
    d(u) {
      u && at(o);
    }
  };
}
function re(l) {
  let o, e, a, t;
  return {
    c() {
      o = b("div"), e = b("label"), e.textContent = "Select Time", a = Z(), t = b("input"), m(e, "for", "time"), m(t, "id", "time"), m(t, "type", "time"), m(t, "class", "w-full rounded-md px-3 py-2 mt-4"), m(t, "name", "time"), m(t, "placeholder", "Select Time"), t.required = !0, m(
        t,
        "style",
        /*input_style*/
        l[16]
      ), m(o, "class", "w-full");
    },
    m(r, n) {
      ut(r, o, n), p(o, e), p(o, a), p(o, t);
    },
    p(r, n) {
      n[0] & /*input_style*/
      65536 && m(
        t,
        "style",
        /*input_style*/
        r[16]
      );
    },
    d(r) {
      r && at(o);
    }
  };
}
function ie(l) {
  let o, e, a, t, r;
  return {
    c() {
      o = b("div"), e = b("div"), a = b("label"), a.textContent = "Email", t = Z(), r = b("input"), m(a, "for", "user"), m(r, "id", "user"), m(r, "type", "email"), m(r, "class", "w-full rounded-md px-3 py-2 mt-4"), m(r, "name", "user"), m(r, "placeholder", "JohnDoe@email.com"), r.required = !0, m(
        r,
        "style",
        /*input_style*/
        l[16]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, i) {
      ut(n, o, i), p(o, e), p(e, a), p(e, t), p(e, r);
    },
    p(n, i) {
      i[0] & /*input_style*/
      65536 && m(
        r,
        "style",
        /*input_style*/
        n[16]
      );
    },
    d(n) {
      n && at(o);
    }
  };
}
function Ne(l) {
  let o, e, a, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("div"), a = b("button"), t = Ut("svg"), r = Ut("path"), n = Ut("path"), i = B(`
                                        Loading...`), m(r, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(r, "fill", "#E5E7EB"), m(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(n, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), a.disabled = !0, m(a, "type", "button"), m(a, "class", "px-6 py-3 mt-6 text-center inline-flex items-center justify-center"), m(
        a,
        "style",
        /*button_style*/
        l[15]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      ut(u, o, s), p(o, e), p(e, a), p(a, t), p(t, r), p(t, n), p(a, i);
    },
    p(u, s) {
      s[0] & /*button_style*/
      32768 && m(
        a,
        "style",
        /*button_style*/
        u[15]
      );
    },
    d(u) {
      u && at(o);
    }
  };
}
function Re(l) {
  let o, e, a;
  return {
    c() {
      o = b("div"), e = b("button"), a = B("See your charges"), m(e, "type", "submit"), m(e, "class", "px-6 py-3 mt-6"), m(
        e,
        "style",
        /*button_style*/
        l[15]
      ), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full items-center justify-center");
    },
    m(t, r) {
      ut(t, o, r), p(o, e), p(e, a);
    },
    p(t, r) {
      r[0] & /*button_style*/
      32768 && m(
        e,
        "style",
        /*button_style*/
        t[15]
      );
    },
    d(t) {
      t && at(o);
    }
  };
}
function Pe(l) {
  let o, e;
  return {
    c() {
      o = b("p"), e = B(
        /*statusCheckError*/
        l[13]
      ), m(o, "class", "text-sm");
    },
    m(a, t) {
      ut(a, o, t), p(o, e);
    },
    p(a, t) {
      t[0] & /*statusCheckError*/
      8192 && gt(
        e,
        /*statusCheckError*/
        a[13]
      );
    },
    d(a) {
      a && at(o);
    }
  };
}
function Fe(l) {
  let o;
  return {
    c() {
      o = b("div"), o.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(e, a) {
      ut(e, o, a);
    },
    p: Ot,
    d(e) {
      e && at(o);
    }
  };
}
function Le(l) {
  let o, e, a;
  function t(i, u) {
    return (
      /*statusCheckError*/
      i[13] ? Oe : De
    );
  }
  let r = t(l), n = r(l);
  return {
    c() {
      o = b("link"), e = Z(), n.c(), a = ce(), this.c = Ot, m(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(o, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, o), ut(i, e, u), n.m(i, u), ut(i, a, u);
    },
    p(i, u) {
      r === (r = t(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(a.parentNode, a)));
    },
    i: Ot,
    o: Ot,
    d(i) {
      at(o), i && at(e), n.d(i), i && at(a);
    }
  };
}
const ae = "https://api.spreadm8.com", ze = "CORS_ERROR";
function Ye(l) {
  return l === "dark" ? !0 : l === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function He(l, o, e) {
  let a, t, r, n, i, u, s, c, { mode: d = "auto" } = o, { height: f = "100%" } = o, { width: h = "100%" } = o, { light_mode_background: _ = "#ffffff" } = o, { dark_mode_background: S = "#1f2937" } = o, { light_mode_text_color: w = "#1f2937" } = o, { dark_mode_text_color: x = "#f9fafb" } = o, { dark_mode_input_background: T = "#374151" } = o, { light_mode_input_background: R = "#f9fafb" } = o, { dark_mode_button_color: P = "#374151" } = o, { light_mode_button_color: g = "#f9fafb" } = o, { light_mode_border_color: j = "#D1D5DB" } = o, { dark_mode_border_color: v = "#374151" } = o, { light_mode_button_text_color: y = "#1f2937" } = o, { dark_mode_button_text_color: D = "#f9fafb" } = o, { border_radius: k = "15px" } = o, { input_border_radius: A = "5" } = o, { shadow: E = "md" } = o, { opacity: N = 100 } = o, { name: L = "Our Results" } = o, { show_interbank_rate: W = "false" } = o, { show_email_input: K = "true" } = o, { timezone: Y = "Europe/London" } = o, { show_timezone: J = "false" } = o, { spread: Q = 0 } = o;
  async function G() {
    const C = "CORS_ERROR";
    try {
      const tt = await fetch(`${ae}/`);
      if (!tt.ok)
        throw tt.status === 403 ? new Error(C) : new Error("We're sorry, our servers are currently down. Please try again later.");
    } catch (tt) {
      tt.message === C ? e(13, q = C) : e(13, q = tt.message);
    }
  }
  const I = async (C) => fetch(`${ae}/widget/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(C)
  });
  he(() => {
    G();
  });
  let lt, nt = !0, it, X = !1, q;
  const H = () => {
    e(9, lt = void 0), e(10, nt = !0), e(11, it = !1), e(12, X = !1);
  }, F = async (C) => {
    e(10, nt = !1), e(12, X = !0), e(11, it = void 0);
    try {
      const tt = await I(C);
      if (!tt.ok) {
        const dt = await tt.json();
        throw new Error(dt || `HTTP error! Status: ${tt.status}`);
      }
      const ot = await tt.json();
      e(12, X = !1), e(11, it = void 0), e(10, nt = !1), e(9, lt = ot);
    } catch (tt) {
      e(12, X = !1), e(11, it = tt.message), e(10, nt = !1), e(9, lt = void 0);
    }
  }, rt = async (C) => {
    C.preventDefault();
    const tt = new FormData(C.target), ot = {};
    for (let dt of tt) {
      const [M, O] = dt;
      ot[M] = O;
    }
    ot.prospect = "", ot.input_spread = Q.toString(), ot.prospect_annual_flow = "", ot.email_user = !1, ot.timezone = Y, a || (ot.user = "testUserWithoutMail@gmail.com"), F(ot);
  }, _t = (C) => {
    e(43, n = C.matches);
  }, yt = window.matchMedia("(prefers-color-scheme: dark)");
  yt.addEventListener("change", _t), me(() => {
    yt.removeEventListener("change", _t);
  });
  let Dt, kt, U, ct;
  const Mt = () => H(), vt = (C) => H(), wt = (C) => H();
  return l.$$set = (C) => {
    "mode" in C && e(22, d = C.mode), "height" in C && e(0, f = C.height), "width" in C && e(1, h = C.width), "light_mode_background" in C && e(23, _ = C.light_mode_background), "dark_mode_background" in C && e(24, S = C.dark_mode_background), "light_mode_text_color" in C && e(25, w = C.light_mode_text_color), "dark_mode_text_color" in C && e(26, x = C.dark_mode_text_color), "dark_mode_input_background" in C && e(27, T = C.dark_mode_input_background), "light_mode_input_background" in C && e(28, R = C.light_mode_input_background), "dark_mode_button_color" in C && e(29, P = C.dark_mode_button_color), "light_mode_button_color" in C && e(30, g = C.light_mode_button_color), "light_mode_border_color" in C && e(31, j = C.light_mode_border_color), "dark_mode_border_color" in C && e(32, v = C.dark_mode_border_color), "light_mode_button_text_color" in C && e(33, y = C.light_mode_button_text_color), "dark_mode_button_text_color" in C && e(34, D = C.dark_mode_button_text_color), "border_radius" in C && e(2, k = C.border_radius), "input_border_radius" in C && e(35, A = C.input_border_radius), "shadow" in C && e(3, E = C.shadow), "opacity" in C && e(4, N = C.opacity), "name" in C && e(5, L = C.name), "show_interbank_rate" in C && e(36, W = C.show_interbank_rate), "show_email_input" in C && e(37, K = C.show_email_input), "timezone" in C && e(6, Y = C.timezone), "show_timezone" in C && e(38, J = C.show_timezone), "spread" in C && e(39, Q = C.spread);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*show_email_input*/
    64 && e(17, a = K === "true"), l.$$.dirty[1] & /*show_timezone*/
    128 && e(19, t = J === "true"), l.$$.dirty[1] & /*show_interbank_rate*/
    32 && e(18, r = W === "true"), l.$$.dirty[0] & /*mode*/
    4194304 && e(43, n = Ye(d)), l.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    25165824 | l.$$.dirty[1] & /*isDarkMode*/
    4096 && e(14, Dt = n ? S : _), l.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    100663296 | l.$$.dirty[1] & /*isDarkMode*/
    4096 && e(7, kt = n ? x : w), l.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    402653184 | l.$$.dirty[1] & /*isDarkMode*/
    4096 && e(40, U = n ? T : R), l.$$.dirty[1] & /*isDarkMode, dark_mode_border_color, light_mode_border_color*/
    4099 && e(41, i = n ? v : j), l.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    1610612736 | l.$$.dirty[1] & /*isDarkMode*/
    4096 && e(8, ct = n ? P : g), l.$$.dirty[1] & /*isDarkMode, dark_mode_button_text_color, light_mode_button_text_color*/
    4108 && e(42, u = n ? D : y), l.$$.dirty[0] & /*text_color*/
    128 | l.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    1552 && e(16, s = `
    background-color: ${U};
    color: ${kt};
    border-width: 1px;
    border-color: ${i};
    border-radius: ${A}px;
    `), l.$$.dirty[0] & /*button_color*/
    256 | l.$$.dirty[1] & /*button_text_color, input_border_color, input_border_radius*/
    3088 && e(15, c = `
    width: 100%;
    background-color: ${ct};
    color: ${u};
    border-width: 1px;
    border-color: ${i};
    border-radius: ${A}px;
    `);
  }, [
    f,
    h,
    k,
    E,
    N,
    L,
    Y,
    kt,
    ct,
    lt,
    nt,
    it,
    X,
    q,
    Dt,
    c,
    s,
    a,
    r,
    t,
    H,
    rt,
    d,
    _,
    S,
    w,
    x,
    T,
    R,
    P,
    g,
    j,
    v,
    y,
    D,
    A,
    W,
    K,
    J,
    Q,
    U,
    i,
    u,
    n,
    Mt,
    vt,
    wt
  ];
}
class Je extends ue {
  constructor(o) {
    super(), this.shadowRoot.innerHTML = `<style>*{font-family:'Inter', sans-serif}.pb-6{padding-bottom:1.5rem}.h-full{height:100%}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:''}.mt-auto{margin-top:auto}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type='button'],[type='submit']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}h1,p{margin:0}input::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}:disabled{cursor:default}svg{display:block;vertical-align:middle}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:
    }.mr-3{margin-right:0.75rem
    }.mt-4{margin-top:1rem
    }.mt-6{margin-top:1.5rem
    }.inline{display:inline
    }.flex{display:flex
    }.inline-flex{display:inline-flex
    }.h-4{height:1rem
    }.w-4{width:1rem
    }.w-full{width:100%
    }@keyframes spin{to{transform:rotate(360deg)
        }}.animate-spin{animation:spin 1s linear infinite
    }.flex-col{flex-direction:column
    }.items-center{align-items:center
    }.justify-center{justify-content:center
    }.gap-2{gap:0.5rem
    }.gap-4{gap:1rem
    }.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))
    }.rounded-lg{border-radius:0.5rem
    }.rounded-md{border-radius:0.375rem
    }.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))
    }.p-4{padding:1rem
    }.p-12{padding:3rem}.px-3{padding-left:0.75rem;padding-right:0.75rem
    }.px-6{padding-left:1.5rem;padding-right:1.5rem
    }.py-2{padding-top:0.5rem;padding-bottom:0.5rem
    }.py-3{padding-top:0.75rem;padding-bottom:0.75rem
    }.text-center{text-align:center
    }.text-2xl{font-size:1.5rem;line-height:2rem
    }.text-sm{font-size:0.875rem;line-height:1.25rem
    }.font-medium{font-weight:500
    }.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
    }.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-2xl{--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }.shadow-xl{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }@media(min-width: 640px){.sm\\:flex-row{flex-direction:row
        }.sm\\:justify-between{justify-content:space-between
        }.sm\\:justify-around{justify-content:space-around
        }.sm\\:gap-12{gap:3rem
        }.sm\\:gap-4{gap:1rem
        }}</style>`, Me(
      this,
      {
        target: this.shadowRoot,
        props: pe(this.attributes),
        customElement: !0
      },
      He,
      Le,
      se,
      {
        mode: 22,
        height: 0,
        width: 1,
        light_mode_background: 23,
        dark_mode_background: 24,
        light_mode_text_color: 25,
        dark_mode_text_color: 26,
        dark_mode_input_background: 27,
        light_mode_input_background: 28,
        dark_mode_button_color: 29,
        light_mode_button_color: 30,
        light_mode_border_color: 31,
        dark_mode_border_color: 32,
        light_mode_button_text_color: 33,
        dark_mode_button_text_color: 34,
        border_radius: 2,
        input_border_radius: 35,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 36,
        show_email_input: 37,
        timezone: 6,
        show_timezone: 38,
        spread: 39
      },
      null,
      [-1, -1]
    ), o && (o.target && ut(o.target, this, o.anchor), o.props && (this.$set(o.props), V()));
  }
  static get observedAttributes() {
    return [
      "mode",
      "height",
      "width",
      "light_mode_background",
      "dark_mode_background",
      "light_mode_text_color",
      "dark_mode_text_color",
      "dark_mode_input_background",
      "light_mode_input_background",
      "dark_mode_button_color",
      "light_mode_button_color",
      "light_mode_border_color",
      "dark_mode_border_color",
      "light_mode_button_text_color",
      "dark_mode_button_text_color",
      "border_radius",
      "input_border_radius",
      "shadow",
      "opacity",
      "name",
      "show_interbank_rate",
      "show_email_input",
      "timezone",
      "show_timezone",
      "spread"
    ];
  }
  get mode() {
    return this.$$.ctx[22];
  }
  set mode(o) {
    this.$$set({ mode: o }), V();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(o) {
    this.$$set({ height: o }), V();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(o) {
    this.$$set({ width: o }), V();
  }
  get light_mode_background() {
    return this.$$.ctx[23];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), V();
  }
  get dark_mode_background() {
    return this.$$.ctx[24];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), V();
  }
  get light_mode_text_color() {
    return this.$$.ctx[25];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), V();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[26];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), V();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[27];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), V();
  }
  get light_mode_input_background() {
    return this.$$.ctx[28];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), V();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[29];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), V();
  }
  get light_mode_button_color() {
    return this.$$.ctx[30];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), V();
  }
  get light_mode_border_color() {
    return this.$$.ctx[31];
  }
  set light_mode_border_color(o) {
    this.$$set({ light_mode_border_color: o }), V();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[32];
  }
  set dark_mode_border_color(o) {
    this.$$set({ dark_mode_border_color: o }), V();
  }
  get light_mode_button_text_color() {
    return this.$$.ctx[33];
  }
  set light_mode_button_text_color(o) {
    this.$$set({ light_mode_button_text_color: o }), V();
  }
  get dark_mode_button_text_color() {
    return this.$$.ctx[34];
  }
  set dark_mode_button_text_color(o) {
    this.$$set({ dark_mode_button_text_color: o }), V();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(o) {
    this.$$set({ border_radius: o }), V();
  }
  get input_border_radius() {
    return this.$$.ctx[35];
  }
  set input_border_radius(o) {
    this.$$set({ input_border_radius: o }), V();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(o) {
    this.$$set({ shadow: o }), V();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(o) {
    this.$$set({ opacity: o }), V();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(o) {
    this.$$set({ name: o }), V();
  }
  get show_interbank_rate() {
    return this.$$.ctx[36];
  }
  set show_interbank_rate(o) {
    this.$$set({ show_interbank_rate: o }), V();
  }
  get show_email_input() {
    return this.$$.ctx[37];
  }
  set show_email_input(o) {
    this.$$set({ show_email_input: o }), V();
  }
  get timezone() {
    return this.$$.ctx[6];
  }
  set timezone(o) {
    this.$$set({ timezone: o }), V();
  }
  get show_timezone() {
    return this.$$.ctx[38];
  }
  set show_timezone(o) {
    this.$$set({ show_timezone: o }), V();
  }
  get spread() {
    return this.$$.ctx[39];
  }
  set spread(o) {
    this.$$set({ spread: o }), V();
  }
}
customElements.define("spreadm8-calc", Je);
export {
  Je as Spreadm8Calc
};
