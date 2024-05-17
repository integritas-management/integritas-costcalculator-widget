function St() {
}
function Qt(a) {
  return a();
}
function ee() {
  return /* @__PURE__ */ Object.create(null);
}
function Yt(a) {
  a.forEach(Qt);
}
function Gt(a) {
  return typeof a == "function";
}
function ce(a, o) {
  return a != a ? o == o : a !== o || a && typeof a == "object" || typeof a == "function";
}
function fe(a) {
  return Object.keys(a).length === 0;
}
function p(a, o) {
  a.appendChild(o);
}
function st(a, o, e) {
  a.insertBefore(o, e || null);
}
function at(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function b(a) {
  return document.createElement(a);
}
function Zt(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function I(a) {
  return document.createTextNode(a);
}
function q() {
  return I(" ");
}
function pe() {
  return I("");
}
function It(a, o, e, l) {
  return a.addEventListener(o, e, l), () => a.removeEventListener(o, e, l);
}
function m(a, o, e) {
  e == null ? a.removeAttribute(o) : a.getAttribute(o) !== e && a.setAttribute(o, e);
}
function he(a) {
  return Array.from(a.childNodes);
}
function bt(a, o) {
  o = "" + o, a.wholeText !== o && (a.data = o);
}
function Mt(a, o, e, l) {
  e === null ? a.style.removeProperty(o) : a.style.setProperty(o, e, l ? "important" : "");
}
function me(a) {
  const o = {};
  for (const e of a)
    o[e.name] = e.value;
  return o;
}
let zt;
function Lt(a) {
  zt = a;
}
function se() {
  if (!zt)
    throw new Error("Function called outside component initialization");
  return zt;
}
function _e(a) {
  se().$$.on_mount.push(a);
}
function ye(a) {
  se().$$.on_destroy.push(a);
}
const Ft = [], oe = [], Ut = [], ne = [], be = Promise.resolve();
let qt = !1;
function ge() {
  qt || (qt = !0, be.then(V));
}
function Vt(a) {
  Ut.push(a);
}
const Wt = /* @__PURE__ */ new Set();
let Pt = 0;
function V() {
  if (Pt !== 0)
    return;
  const a = zt;
  do {
    try {
      for (; Pt < Ft.length; ) {
        const o = Ft[Pt];
        Pt++, Lt(o), ve(o.$$);
      }
    } catch (o) {
      throw Ft.length = 0, Pt = 0, o;
    }
    for (Lt(null), Ft.length = 0, Pt = 0; oe.length; )
      oe.pop()();
    for (let o = 0; o < Ut.length; o += 1) {
      const e = Ut[o];
      Wt.has(e) || (Wt.add(e), e());
    }
    Ut.length = 0;
  } while (Ft.length);
  for (; ne.length; )
    ne.pop()();
  qt = !1, Wt.clear(), Lt(a);
}
function ve(a) {
  if (a.fragment !== null) {
    a.update(), Yt(a.before_update);
    const o = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, o), a.after_update.forEach(Vt);
  }
}
const we = /* @__PURE__ */ new Set();
function xe(a, o) {
  a && a.i && (we.delete(a), a.i(o));
}
function ke(a, o, e, l) {
  const { fragment: t, after_update: r } = a.$$;
  t && t.m(o, e), l || Vt(() => {
    const n = a.$$.on_mount.map(Qt).filter(Gt);
    a.$$.on_destroy ? a.$$.on_destroy.push(...n) : Yt(n), a.$$.on_mount = [];
  }), r.forEach(Vt);
}
function Me(a, o) {
  const e = a.$$;
  e.fragment !== null && (Yt(e.on_destroy), e.fragment && e.fragment.d(o), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Ce(a, o) {
  a.$$.dirty[0] === -1 && (Ft.push(a), ge(), a.$$.dirty.fill(0)), a.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function Se(a, o, e, l, t, r, n, i = [-1]) {
  const u = zt;
  Lt(a);
  const s = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: St,
    not_equal: t,
    bound: ee(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(o.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ee(),
    dirty: i,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let d = !1;
  if (s.ctx = e ? e(a, o.props || {}, (c, f, ...h) => {
    const _ = h.length ? h[0] : f;
    return s.ctx && t(s.ctx[c], s.ctx[c] = _) && (!s.skip_bound && s.bound[c] && s.bound[c](_), d && Ce(a, c)), f;
  }) : [], s.update(), d = !0, Yt(s.before_update), s.fragment = l ? l(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const c = he(o.target);
      s.fragment && s.fragment.l(c), c.forEach(at);
    } else
      s.fragment && s.fragment.c();
    o.intro && xe(a.$$.fragment), ke(a, o.target, o.anchor, o.customElement), V();
  }
  Lt(u);
}
let de;
typeof HTMLElement == "function" && (de = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: a } = this.$$;
    this.$$.on_disconnect = a.map(Qt).filter(Gt);
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(a, o, e) {
    this[a] = e;
  }
  disconnectedCallback() {
    Yt(this.$$.on_disconnect);
  }
  $destroy() {
    Me(this, 1), this.$destroy = St;
  }
  $on(a, o) {
    if (!Gt(o))
      return St;
    const e = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return e.push(o), () => {
      const l = e.indexOf(o);
      l !== -1 && e.splice(l, 1);
    };
  }
  $set(a) {
    this.$$set && !fe(a) && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
  }
});
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, re = {}, Oe = {
  get exports() {
    return re;
  },
  set exports(a) {
    re = a;
  }
};
(function(a, o) {
  (function(e, l) {
    a.exports = l();
  })(De, function() {
    return function(e) {
      function l(r) {
        if (t[r])
          return t[r].exports;
        var n = t[r] = { exports: {}, id: r, loaded: !1 };
        return e[r].call(n.exports, n, n.exports, l), n.loaded = !0, n.exports;
      }
      var t = {};
      return l.m = e, l.c = t, l.p = "", l(0);
    }([function(e, l, t) {
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
    }, function(e, l, t) {
      e.exports = !t(11)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, l) {
      var t = e.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = t);
    }, function(e, l) {
      var t = {}.hasOwnProperty;
      e.exports = function(r, n) {
        return t.call(r, n);
      };
    }, function(e, l, t) {
      var r = t(9), n = t(32), i = t(25), u = Object.defineProperty;
      l.f = t(1) ? Object.defineProperty : function(s, d, c) {
        if (r(s), d = i(d, !0), r(c), n)
          try {
            return u(s, d, c);
          } catch {
          }
        if ("get" in c || "set" in c)
          throw TypeError("Accessors not supported!");
        return "value" in c && (s[d] = c.value), s;
      };
    }, function(e, l, t) {
      var r = t(59), n = t(16);
      e.exports = function(i) {
        return r(n(i));
      };
    }, function(e, l, t) {
      var r = t(4), n = t(14);
      e.exports = t(1) ? function(i, u, s) {
        return r.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(e, l, t) {
      var r = t(23)("wks"), n = t(15), i = t(2).Symbol, u = typeof i == "function", s = e.exports = function(d) {
        return r[d] || (r[d] = u && i[d] || (u ? i : n)("Symbol." + d));
      };
      s.store = r;
    }, function(e, l) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, l, t) {
      var r = t(12);
      e.exports = function(n) {
        if (!r(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(e, l, t) {
      var r = t(2), n = t(8), i = t(56), u = t(6), s = "prototype", d = function(c, f, h) {
        var _, S, v, w = c & d.F, T = c & d.G, N = c & d.S, P = c & d.P, M = c & d.B, j = c & d.W, g = T ? n : n[f] || (n[f] = {}), y = g[s], O = T ? r : N ? r[f] : (r[f] || {})[s];
        T && (h = f);
        for (_ in h)
          S = !w && O && O[_] !== void 0, S && _ in g || (v = S ? O[_] : h[_], g[_] = T && typeof O[_] != "function" ? h[_] : M && S ? i(v, r) : j && O[_] == v ? function(x) {
            var C = function(E, R, F) {
              if (this instanceof x) {
                switch (arguments.length) {
                  case 0:
                    return new x();
                  case 1:
                    return new x(E);
                  case 2:
                    return new x(E, R);
                }
                return new x(E, R, F);
              }
              return x.apply(this, arguments);
            };
            return C[s] = x[s], C;
          }(v) : P && typeof v == "function" ? i(Function.call, v) : v, P && ((g.virtual || (g.virtual = {}))[_] = v, c & d.R && y && !y[_] && u(y, _, v)));
      };
      d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d;
    }, function(e, l) {
      e.exports = function(t) {
        try {
          return !!t();
        } catch {
          return !0;
        }
      };
    }, function(e, l) {
      e.exports = function(t) {
        return typeof t == "object" ? t !== null : typeof t == "function";
      };
    }, function(e, l, t) {
      var r = t(38), n = t(17);
      e.exports = Object.keys || function(i) {
        return r(i, n);
      };
    }, function(e, l) {
      e.exports = function(t, r) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
      };
    }, function(e, l) {
      var t = 0, r = Math.random();
      e.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++t + r).toString(36));
      };
    }, function(e, l) {
      e.exports = function(t) {
        if (t == null)
          throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function(e, l) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, l) {
      e.exports = {};
    }, function(e, l) {
      e.exports = !0;
    }, function(e, l) {
      l.f = {}.propertyIsEnumerable;
    }, function(e, l, t) {
      var r = t(4).f, n = t(3), i = t(7)("toStringTag");
      e.exports = function(u, s, d) {
        u && !n(u = d ? u : u.prototype, i) && r(u, i, { configurable: !0, value: s });
      };
    }, function(e, l, t) {
      var r = t(23)("keys"), n = t(15);
      e.exports = function(i) {
        return r[i] || (r[i] = n(i));
      };
    }, function(e, l, t) {
      var r = t(2), n = "__core-js_shared__", i = r[n] || (r[n] = {});
      e.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(e, l) {
      var t = Math.ceil, r = Math.floor;
      e.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? r : t)(n);
      };
    }, function(e, l, t) {
      var r = t(12);
      e.exports = function(n, i) {
        if (!r(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !r(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !r(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !r(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, l, t) {
      var r = t(2), n = t(8), i = t(19), u = t(27), s = t(4).f;
      e.exports = function(d) {
        var c = n.Symbol || (n.Symbol = i ? {} : r.Symbol || {});
        d.charAt(0) == "_" || d in c || s(c, d, { value: u.f(d) });
      };
    }, function(e, l, t) {
      l.f = t(7);
    }, function(e, l) {
      l.__esModule = !0, l.default = function(t, r) {
        if (!(t instanceof r))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, l, t) {
      function r(u) {
        return u && u.__esModule ? u : { default: u };
      }
      l.__esModule = !0;
      var n = t(45), i = r(n);
      l.default = function() {
        function u(s, d) {
          for (var c = 0; c < d.length; c++) {
            var f = d[c];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), (0, i.default)(s, f.key, f);
          }
        }
        return function(s, d, c) {
          return d && u(s.prototype, d), c && u(s, c), s;
        };
      }();
    }, function(e, l) {
      var t = {}.toString;
      e.exports = function(r) {
        return t.call(r).slice(8, -1);
      };
    }, function(e, l, t) {
      var r = t(12), n = t(2).document, i = r(n) && r(n.createElement);
      e.exports = function(u) {
        return i ? n.createElement(u) : {};
      };
    }, function(e, l, t) {
      e.exports = !t(1) && !t(11)(function() {
        return Object.defineProperty(t(31)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(e, l, t) {
      var r = t(19), n = t(10), i = t(39), u = t(6), s = t(3), d = t(18), c = t(61), f = t(21), h = t(67), _ = t(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", w = "keys", T = "values", N = function() {
        return this;
      };
      e.exports = function(P, M, j, g, y, O, x) {
        c(j, M, g);
        var C, E, R, F = function(Q) {
          if (!S && Q in B)
            return B[Q];
          switch (Q) {
            case w:
              return function() {
                return new j(this, Q);
              };
            case T:
              return function() {
                return new j(this, Q);
              };
          }
          return function() {
            return new j(this, Q);
          };
        }, W = M + " Iterator", Z = y == T, H = !1, B = P.prototype, X = B[_] || B[v] || y && B[y], U = X || F(y), z = y ? Z ? F("entries") : U : void 0, ot = M == "Array" && B.entries || X;
        if (ot && (R = h(ot.call(new P())), R !== Object.prototype && (f(R, W, !0), r || s(R, _) || u(R, _, N))), Z && X && X.name !== T && (H = !0, U = function() {
          return X.call(this);
        }), r && !x || !S && !H && B[_] || u(B, _, U), d[M] = U, d[W] = N, y)
          if (C = { values: Z ? U : F(T), keys: O ? U : F(w), entries: z }, x)
            for (E in C)
              E in B || i(B, E, C[E]);
          else
            n(n.P + n.F * (S || H), M, C);
        return C;
      };
    }, function(e, l, t) {
      var r = t(9), n = t(35), i = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, d = "prototype", c = function() {
        var f, h = t(31)("iframe"), _ = i.length, S = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", f = h.contentWindow.document, f.open(), f.write(S + "script" + v + "document.F=Object" + S + "/script" + v), f.close(), c = f.F; _--; )
          delete c[d][i[_]];
        return c();
      };
      e.exports = Object.create || function(f, h) {
        var _;
        return f !== null ? (s[d] = r(f), _ = new s(), s[d] = null, _[u] = f) : _ = c(), h === void 0 ? _ : n(_, h);
      };
    }, function(e, l, t) {
      var r = t(4), n = t(9), i = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var d, c = i(s), f = c.length, h = 0; f > h; )
          r.f(u, d = c[h++], s[d]);
        return u;
      };
    }, function(e, l, t) {
      var r = t(38), n = t(17).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(i) {
        return r(i, n);
      };
    }, function(e, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(e, l, t) {
      var r = t(3), n = t(5), i = t(55)(!1), u = t(22)("IE_PROTO");
      e.exports = function(s, d) {
        var c, f = n(s), h = 0, _ = [];
        for (c in f)
          c != u && r(f, c) && _.push(c);
        for (; d.length > h; )
          r(f, c = d[h++]) && (~i(_, c) || _.push(c));
        return _;
      };
    }, function(e, l, t) {
      e.exports = t(6);
    }, function(e, l, t) {
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
        var v = _.getTimezoneOffset() - S.getTimezoneOffset();
        _.setHours(_.getHours() - v);
        var w = (_ - S) / 6048e5;
        return 1 + Math.floor(w);
      }
      function u(h) {
        var _ = h.getDay();
        return _ === 0 && (_ = 7), _;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, c.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, c.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var d = t(48), c = r(d), f = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, _ = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, w, T, N) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (w = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          w = String(f.masks[w] || w || f.masks.default);
          var P = w.slice(0, 4);
          P !== "UTC:" && P !== "GMT:" || (w = w.slice(4), T = !0, P === "GMT:" && (N = !0));
          var M = T ? "getUTC" : "get", j = v[M + "Date"](), g = v[M + "Day"](), y = v[M + "Month"](), O = v[M + "FullYear"](), x = v[M + "Hours"](), C = v[M + "Minutes"](), E = v[M + "Seconds"](), R = v[M + "Milliseconds"](), F = T ? 0 : v.getTimezoneOffset(), W = i(v), Z = u(v), H = { d: j, dd: n(j), ddd: f.i18n.dayNames[g], dddd: f.i18n.dayNames[g + 7], m: y + 1, mm: n(y + 1), mmm: f.i18n.monthNames[y], mmmm: f.i18n.monthNames[y + 12], yy: String(O).slice(2), yyyy: O, h: x % 12 || 12, hh: n(x % 12 || 12), H: x, HH: n(x), M: C, MM: n(C), s: E, ss: n(E), l: n(R, 3), L: n(Math.round(R / 10)), t: x < 12 ? "a" : "p", tt: x < 12 ? "am" : "pm", T: x < 12 ? "A" : "P", TT: x < 12 ? "AM" : "PM", Z: N ? "GMT" : T ? "UTC" : (String(v).match(_) || [""]).pop().replace(S, ""), o: (F > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(F) / 60) + Math.abs(F) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W, N: Z };
          return w.replace(h, function(B) {
            return B in H ? H[B] : B.slice(1, B.length - 1);
          });
        };
      }();
      f.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, f.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = f;
    }, function(e, l, t) {
      function r(N) {
        return N && N.__esModule ? N : { default: N };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(44), i = r(n), u = t(28), s = r(u), d = t(29), c = r(d), f = t(43), h = r(f), _ = t(42), S = r(_), v = t(40), w = r(v), T = function() {
        function N(P) {
          var M = this;
          (0, s.default)(this, N), this.element = P, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!M.element.value)
              return null;
            var g = M.format || "yyyy-mm-dd", y = M.element.value.match(/(\d+)/g), O = 0, x = {};
            return g.replace(/(yyyy|dd|mm)/g, function(C) {
              x[C] = O++;
            }), new Date(y[x.yyyy], y[x.mm] - 1, y[x.dd]);
          }, set: function(g) {
            M.element.value = (0, w.default)(g, M.format);
          } }, valueAsNumber: { get: function() {
            return M.element.value ? M.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            M.element.valueAsDate = new Date(g);
          } } });
          var j = function(g) {
            var y = M.element;
            y.locale = M.localeText, h.default.attachTo(y);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(g) {
            var y = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                M.element.valueAsDate && (y.setDate(M.element.valueAsDate.getDate() + 1), M.element.valueAsDate = y, h.default.pingInput());
                break;
              case 40:
                M.element.valueAsDate && (y.setDate(M.element.valueAsDate.getDate() - 1), M.element.valueAsDate = y, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, c.default)(N, [{ key: "getLocaleText", value: function() {
          var P = this.locale.toLowerCase();
          for (var M in S.default) {
            var j = M.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(P) || ~j.indexOf(P.substr(0, 2)))
              return S.default[M];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var P = document.createElement("input");
          P.setAttribute("type", "date");
          var M = "not-a-date";
          return P.setAttribute("value", M), P.value !== M;
        } }, { key: "addPickerToDateInputs", value: function() {
          var P = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), M = P.length;
          if (!M)
            return !1;
          for (var j = 0; j < M; ++j)
            new N(P[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var P = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), M = P.length;
          if (!M)
            return !1;
          for (var j = 0; j < M; ++j)
            new N(P[j]);
        } }]), N;
      }();
      l.default = T;
    }, function(e, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = t;
    }, function(e, l, t) {
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(28), i = r(n), u = t(29), s = r(u), d = function() {
        function c() {
          var f = this;
          if ((0, i.default)(this, c), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), c.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            f.date.setYear(f.year.value), f.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            f.date.setMonth(f.month.value), f.refreshDaysMatrix();
          });
          var _ = document.createElement("span");
          _.className = "monthSelect-wrapper", _.appendChild(this.month), this.container.appendChild(_), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var v = new Date();
            f.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), f.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var w = v.target;
            if (!w.hasAttribute("data-day"))
              return !1;
            var T = f.days.querySelector("[data-selected]");
            T && T.removeAttribute("data-selected"), w.setAttribute("data-selected", ""), f.date.setDate(parseInt(w.textContent)), f.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (f.isOpen) {
              for (var w = v.target, T = w === f.container || w === f.input; !T && (w = w.parentNode); )
                T = w === f.container;
              (v.target.getAttribute("type") !== "date" && !T || !T) && f.hide();
            }
          }, this.removeBlur = function(v) {
            f.isOpen && f.hide();
          };
        }
        return (0, s.default)(c, [{ key: "hide", value: function() {
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
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, w = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, T = _.right - v;
          _.right < v ? (T = _.left, this.container.className = w() + " polyfill-left-aligned") : this.container.className = w() + " polyfill-right-aligned", this.container.style.left = T + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(f) {
          return !(f === this.input && this.isOpen || (this.input = f, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = c.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
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
          this.daysHead.innerHTML = f.join(""), c.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var f = this.date.getFullYear(), h = this.date.getMonth(), _ = new Date(f, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = c.absoluteDate(this.input.valueAsDate) || !1, w = v && f === v.getFullYear() && h === v.getMonth(), T = [], N = 0; N < S + _; ++N)
            if (N % 7 === 0 && T.push(`
          ` + (N !== 0 ? "</tr>" : "") + `
          <tr>
        `), N + 1 <= _)
              T.push("<td></td>");
            else {
              var P = N + 1 - _, M = w && v.getDate() === P;
              T.push("<td data-day " + (M ? "data-selected" : "") + `>
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
          for (var v = h; v <= _; ++v) {
            var w = document.createElement("option");
            f.appendChild(w);
            var T = S ? S[v - h] : v;
            w.text = T, w.value = v;
          }
          return f;
        } }, { key: "absoluteDate", value: function(f) {
          return f && new Date(f.getTime() + 60 * f.getTimezoneOffset() * 1e3);
        } }]), c;
      }();
      window.thePicker = new d(), l.default = window.thePicker;
    }, function(e, l, t) {
      e.exports = { default: t(49), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(50), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(51), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(52), __esModule: !0 };
    }, function(e, l, t) {
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      l.__esModule = !0;
      var n = t(47), i = r(n), u = t(46), s = r(u), d = typeof s.default == "function" && typeof i.default == "symbol" ? function(c) {
        return typeof c;
      } : function(c) {
        return c && typeof s.default == "function" && c.constructor === s.default ? "symbol" : typeof c;
      };
      l.default = typeof s.default == "function" && d(i.default) === "symbol" ? function(c) {
        return typeof c > "u" ? "undefined" : d(c);
      } : function(c) {
        return c && typeof s.default == "function" && c.constructor === s.default ? "symbol" : typeof c > "u" ? "undefined" : d(c);
      };
    }, function(e, l, t) {
      t(73);
      var r = t(8).Object;
      e.exports = function(n, i) {
        return r.defineProperties(n, i);
      };
    }, function(e, l, t) {
      t(74);
      var r = t(8).Object;
      e.exports = function(n, i, u) {
        return r.defineProperty(n, i, u);
      };
    }, function(e, l, t) {
      t(77), t(75), t(78), t(79), e.exports = t(8).Symbol;
    }, function(e, l, t) {
      t(76), t(80), e.exports = t(27).f("iterator");
    }, function(e, l) {
      e.exports = function(t) {
        if (typeof t != "function")
          throw TypeError(t + " is not a function!");
        return t;
      };
    }, function(e, l) {
      e.exports = function() {
      };
    }, function(e, l, t) {
      var r = t(5), n = t(70), i = t(69);
      e.exports = function(u) {
        return function(s, d, c) {
          var f, h = r(s), _ = n(h.length), S = i(c, _);
          if (u && d != d) {
            for (; _ > S; )
              if (f = h[S++], f != f)
                return !0;
          } else
            for (; _ > S; S++)
              if ((u || S in h) && h[S] === d)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(e, l, t) {
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
            return function(s, d) {
              return n.call(i, s, d);
            };
          case 3:
            return function(s, d, c) {
              return n.call(i, s, d, c);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(e, l, t) {
      var r = t(13), n = t(37), i = t(20);
      e.exports = function(u) {
        var s = r(u), d = n.f;
        if (d)
          for (var c, f = d(u), h = i.f, _ = 0; f.length > _; )
            h.call(u, c = f[_++]) && s.push(c);
        return s;
      };
    }, function(e, l, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, l, t) {
      var r = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return r(n) == "String" ? n.split("") : Object(n);
      };
    }, function(e, l, t) {
      var r = t(30);
      e.exports = Array.isArray || function(n) {
        return r(n) == "Array";
      };
    }, function(e, l, t) {
      var r = t(34), n = t(14), i = t(21), u = {};
      t(6)(u, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, d, c) {
        s.prototype = r(u, { next: n(1, c) }), i(s, d + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    }, function(e, l, t) {
      var r = t(13), n = t(5);
      e.exports = function(i, u) {
        for (var s, d = n(i), c = r(d), f = c.length, h = 0; f > h; )
          if (d[s = c[h++]] === u)
            return s;
      };
    }, function(e, l, t) {
      var r = t(15)("meta"), n = t(12), i = t(3), u = t(4).f, s = 0, d = Object.isExtensible || function() {
        return !0;
      }, c = !t(11)(function() {
        return d(Object.preventExtensions({}));
      }), f = function(w) {
        u(w, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(w, T) {
        if (!n(w))
          return typeof w == "symbol" ? w : (typeof w == "string" ? "S" : "P") + w;
        if (!i(w, r)) {
          if (!d(w))
            return "F";
          if (!T)
            return "E";
          f(w);
        }
        return w[r].i;
      }, _ = function(w, T) {
        if (!i(w, r)) {
          if (!d(w))
            return !0;
          if (!T)
            return !1;
          f(w);
        }
        return w[r].w;
      }, S = function(w) {
        return c && v.NEED && d(w) && !i(w, r) && f(w), w;
      }, v = e.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: _, onFreeze: S };
    }, function(e, l, t) {
      var r = t(20), n = t(14), i = t(5), u = t(25), s = t(3), d = t(32), c = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? c : function(f, h) {
        if (f = i(f), h = u(h, !0), d)
          try {
            return c(f, h);
          } catch {
          }
        if (s(f, h))
          return n(!r.f.call(f, h), f[h]);
      };
    }, function(e, l, t) {
      var r = t(5), n = t(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(d) {
        try {
          return n(d);
        } catch {
          return u.slice();
        }
      };
      e.exports.f = function(d) {
        return u && i.call(d) == "[object Window]" ? s(d) : n(r(d));
      };
    }, function(e, l, t) {
      var r = t(3), n = t(71), i = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, l, t) {
      var r = t(24), n = t(16);
      e.exports = function(i) {
        return function(u, s) {
          var d, c, f = String(n(u)), h = r(s), _ = f.length;
          return h < 0 || h >= _ ? i ? "" : void 0 : (d = f.charCodeAt(h), d < 55296 || d > 56319 || h + 1 === _ || (c = f.charCodeAt(h + 1)) < 56320 || c > 57343 ? i ? f.charAt(h) : d : i ? f.slice(h, h + 2) : (d - 55296 << 10) + (c - 56320) + 65536);
        };
      };
    }, function(e, l, t) {
      var r = t(24), n = Math.max, i = Math.min;
      e.exports = function(u, s) {
        return u = r(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(e, l, t) {
      var r = t(24), n = Math.min;
      e.exports = function(i) {
        return i > 0 ? n(r(i), 9007199254740991) : 0;
      };
    }, function(e, l, t) {
      var r = t(16);
      e.exports = function(n) {
        return Object(r(n));
      };
    }, function(e, l, t) {
      var r = t(54), n = t(62), i = t(18), u = t(5);
      e.exports = t(33)(Array, "Array", function(s, d) {
        this._t = u(s), this._i = 0, this._k = d;
      }, function() {
        var s = this._t, d = this._k, c = this._i++;
        return !s || c >= s.length ? (this._t = void 0, n(1)) : d == "keys" ? n(0, c) : d == "values" ? n(0, s[c]) : n(0, [c, s[c]]);
      }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
    }, function(e, l, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, l, t) {
      var r = t(10);
      r(r.S + r.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, l) {
    }, function(e, l, t) {
      var r = t(68)(!0);
      t(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = r(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(e, l, t) {
      var r = t(2), n = t(3), i = t(1), u = t(10), s = t(39), d = t(64).KEY, c = t(11), f = t(23), h = t(21), _ = t(15), S = t(7), v = t(27), w = t(26), T = t(63), N = t(57), P = t(60), M = t(9), j = t(5), g = t(25), y = t(14), O = t(34), x = t(66), C = t(65), E = t(4), R = t(13), F = C.f, W = E.f, Z = x.f, H = r.Symbol, B = r.JSON, X = B && B.stringify, U = "prototype", z = S("_hidden"), ot = S("toPrimitive"), Q = {}.propertyIsEnumerable, it = f("symbol-registry"), $ = f("symbols"), G = f("op-symbols"), J = Object[U], L = typeof H == "function", et = r.QObject, _t = !et || !et[U] || !et[U].findChild, ft = i && c(function() {
        return O(W({}, "a", { get: function() {
          return W(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(k, A, Y) {
        var tt = F(J, A);
        tt && delete J[A], W(k, A, Y), tt && k !== J && W(J, A, tt);
      } : W, gt = function(k) {
        var A = $[k] = O(H[U]);
        return A._k = k, A;
      }, wt = L && typeof H.iterator == "symbol" ? function(k) {
        return typeof k == "symbol";
      } : function(k) {
        return k instanceof H;
      }, lt = function(k, A, Y) {
        return k === J && lt(G, A, Y), M(k), A = g(A, !0), M(Y), n($, A) ? (Y.enumerable ? (n(k, z) && k[z][A] && (k[z][A] = !1), Y = O(Y, { enumerable: y(0, !1) })) : (n(k, z) || W(k, z, y(1, {})), k[z][A] = !0), ft(k, A, Y)) : W(k, A, Y);
      }, Ct = function(k, A) {
        M(k);
        for (var Y, tt = N(A = j(A)), ut = 0, yt = tt.length; yt > ut; )
          lt(k, Y = tt[ut++], A[Y]);
        return k;
      }, xt = function(k, A) {
        return A === void 0 ? O(k) : Ct(O(k), A);
      }, D = function(k) {
        var A = Q.call(this, k = g(k, !0));
        return !(this === J && n($, k) && !n(G, k)) && (!(A || !n(this, k) || !n($, k) || n(this, z) && this[z][k]) || A);
      }, rt = function(k, A) {
        if (k = j(k), A = g(A, !0), k !== J || !n($, A) || n(G, A)) {
          var Y = F(k, A);
          return !Y || !n($, A) || n(k, z) && k[z][A] || (Y.enumerable = !0), Y;
        }
      }, dt = function(k) {
        for (var A, Y = Z(j(k)), tt = [], ut = 0; Y.length > ut; )
          n($, A = Y[ut++]) || A == z || A == d || tt.push(A);
        return tt;
      }, K = function(k) {
        for (var A, Y = k === J, tt = Z(Y ? G : j(k)), ut = [], yt = 0; tt.length > yt; )
          !n($, A = tt[yt++]) || Y && !n(J, A) || ut.push($[A]);
        return ut;
      };
      L || (H = function() {
        if (this instanceof H)
          throw TypeError("Symbol is not a constructor!");
        var k = _(arguments.length > 0 ? arguments[0] : void 0), A = function(Y) {
          this === J && A.call(G, Y), n(this, z) && n(this[z], k) && (this[z][k] = !1), ft(this, k, y(1, Y));
        };
        return i && _t && ft(J, k, { configurable: !0, set: A }), gt(k);
      }, s(H[U], "toString", function() {
        return this._k;
      }), C.f = rt, E.f = lt, t(36).f = x.f = dt, t(20).f = D, t(37).f = K, i && !t(19) && s(J, "propertyIsEnumerable", D, !0), v.f = function(k) {
        return gt(S(k));
      }), u(u.G + u.W + u.F * !L, { Symbol: H });
      for (var ct = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), pt = 0; ct.length > pt; )
        S(ct[pt++]);
      for (var ct = R(S.store), pt = 0; ct.length > pt; )
        w(ct[pt++]);
      u(u.S + u.F * !L, "Symbol", { for: function(k) {
        return n(it, k += "") ? it[k] : it[k] = H(k);
      }, keyFor: function(k) {
        if (wt(k))
          return T(it, k);
        throw TypeError(k + " is not a symbol!");
      }, useSetter: function() {
        _t = !0;
      }, useSimple: function() {
        _t = !1;
      } }), u(u.S + u.F * !L, "Object", { create: xt, defineProperty: lt, defineProperties: Ct, getOwnPropertyDescriptor: rt, getOwnPropertyNames: dt, getOwnPropertySymbols: K }), B && u(u.S + u.F * (!L || c(function() {
        var k = H();
        return X([k]) != "[null]" || X({ a: k }) != "{}" || X(Object(k)) != "{}";
      })), "JSON", { stringify: function(k) {
        if (k !== void 0 && !wt(k)) {
          for (var A, Y, tt = [k], ut = 1; arguments.length > ut; )
            tt.push(arguments[ut++]);
          return A = tt[1], typeof A == "function" && (Y = A), !Y && P(A) || (A = function(yt, vt) {
            if (Y && (vt = Y.call(this, yt, vt)), !wt(vt))
              return vt;
          }), tt[1] = A, X.apply(B, tt);
        }
      } }), H[U][ot] || t(6)(H[U], ot, H[U].valueOf), h(H, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var r = t(2), n = t(6), i = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], d = 0; d < 5; d++) {
        var c = s[d], f = r[c], h = f && f.prototype;
        h && !h[u] && n(h, u, c), i[c] = i.Array;
      }
    }, function(e, l, t) {
      l = e.exports = t(82)(), l.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, l) {
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
            var d = r[u];
            typeof d[0] == "number" && i[d[0]] || (n && !d[2] ? d[2] = n : n && (d[2] = "(" + d[2] + ") and (" + n + ")"), t.push(d));
          }
        }, t;
      };
    }, function(e, l, t) {
      function r(g, y) {
        for (var O = 0; O < g.length; O++) {
          var x = g[O], C = S[x.id];
          if (C) {
            C.refs++;
            for (var E = 0; E < C.parts.length; E++)
              C.parts[E](x.parts[E]);
            for (; E < x.parts.length; E++)
              C.parts.push(c(x.parts[E], y));
          } else {
            for (var R = [], E = 0; E < x.parts.length; E++)
              R.push(c(x.parts[E], y));
            S[x.id] = { id: x.id, refs: 1, parts: R };
          }
        }
      }
      function n(g) {
        for (var y = [], O = {}, x = 0; x < g.length; x++) {
          var C = g[x], E = C[0], R = C[1], F = C[2], W = C[3], Z = { css: R, media: F, sourceMap: W };
          O[E] ? O[E].parts.push(Z) : y.push(O[E] = { id: E, parts: [Z] });
        }
        return y;
      }
      function i(g, y) {
        var O = T(), x = M[M.length - 1];
        if (g.insertAt === "top")
          x ? x.nextSibling ? O.insertBefore(y, x.nextSibling) : O.appendChild(y) : O.insertBefore(y, O.firstChild), M.push(y);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          O.appendChild(y);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var y = M.indexOf(g);
        y >= 0 && M.splice(y, 1);
      }
      function s(g) {
        var y = document.createElement("style");
        return y.type = "text/css", i(g, y), y;
      }
      function d(g) {
        var y = document.createElement("link");
        return y.rel = "stylesheet", i(g, y), y;
      }
      function c(g, y) {
        var O, x, C;
        if (y.singleton) {
          var E = P++;
          O = N || (N = s(y)), x = f.bind(null, O, E, !1), C = f.bind(null, O, E, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (O = d(y), x = _.bind(null, O), C = function() {
            u(O), O.href && URL.revokeObjectURL(O.href);
          }) : (O = s(y), x = h.bind(null, O), C = function() {
            u(O);
          });
        return x(g), function(R) {
          if (R) {
            if (R.css === g.css && R.media === g.media && R.sourceMap === g.sourceMap)
              return;
            x(g = R);
          } else
            C();
        };
      }
      function f(g, y, O, x) {
        var C = O ? "" : x.css;
        if (g.styleSheet)
          g.styleSheet.cssText = j(y, C);
        else {
          var E = document.createTextNode(C), R = g.childNodes;
          R[y] && g.removeChild(R[y]), R.length ? g.insertBefore(E, R[y]) : g.appendChild(E);
        }
      }
      function h(g, y) {
        var O = y.css, x = y.media;
        if (x && g.setAttribute("media", x), g.styleSheet)
          g.styleSheet.cssText = O;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(O));
        }
      }
      function _(g, y) {
        var O = y.css, x = y.sourceMap;
        x && (O += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(x)))) + " */");
        var C = new Blob([O], { type: "text/css" }), E = g.href;
        g.href = URL.createObjectURL(C), E && URL.revokeObjectURL(E);
      }
      var S = {}, v = function(g) {
        var y;
        return function() {
          return typeof y > "u" && (y = g.apply(this, arguments)), y;
        };
      }, w = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), T = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), N = null, P = 0, M = [];
      e.exports = function(g, y) {
        y = y || {}, typeof y.singleton > "u" && (y.singleton = w()), typeof y.insertAt > "u" && (y.insertAt = "bottom");
        var O = n(g);
        return r(O, y), function(x) {
          for (var C = [], E = 0; E < O.length; E++) {
            var R = O[E], F = S[R.id];
            F.refs--, C.push(F);
          }
          if (x) {
            var W = n(x);
            r(W, y);
          }
          for (var E = 0; E < C.length; E++) {
            var F = C[E];
            if (F.refs === 0) {
              for (var Z = 0; Z < F.parts.length; Z++)
                F.parts[Z]();
              delete S[F.id];
            }
          }
        };
      };
      var j = function() {
        var g = [];
        return function(y, O) {
          return g[y] = O, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, l, t) {
      var r = t(81);
      typeof r == "string" && (r = [[e.id, r, ""]]), t(83)(r, {}), r.locals && (e.exports = r.locals);
    }]);
  });
})(Oe);
function Ee(a) {
  let o, e, l;
  function t(i, u) {
    return (
      /*isIdle*/
      i[10] || /*isFetching*/
      i[12] ? Re : (
        /*backendData*/
        i[9] ? Ne : (
          /*error*/
          i[11] ? je : Te
        )
      )
    );
  }
  let r = t(a), n = r(a);
  return {
    c() {
      o = b("div"), n.c(), m(o, "class", e = `p-12 shadow-${/*shadow*/
      a[3]}`), m(o, "style", l = `
        background-color: ${/*background*/
      a[14]};
        border-radius: ${/*border_radius*/
      a[2]};
        color: ${/*text_color*/
      a[7]};
        opacity: ${/*opacity*/
      a[4]}%!important;
        height: ${/*height*/
      a[0]};
        width: ${/*width*/
      a[1]};
`);
    },
    m(i, u) {
      st(i, o, u), n.m(o, null);
    },
    p(i, u) {
      r === (r = t(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(o, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      16535 && l !== (l = `
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
`) && m(o, "style", l);
    },
    d(i) {
      i && at(o), n.d();
    }
  };
}
function Ae(a) {
  let o, e, l, t, r, n;
  function i(d, c) {
    return (
      /*statusCheckError*/
      d[13] === He ? ze : Le
    );
  }
  let u = i(a), s = u(a);
  return {
    c() {
      o = b("div"), e = b("div"), l = b("h1"), l.textContent = "An error occured", t = q(), s.c(), m(l, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(o, "class", r = `p-4 shadow-${/*shadow*/
      a[3]}`), m(o, "style", n = `
        background-color: ${/*background*/
      a[14]};
        border-radius: ${/*border_radius*/
      a[2]};
        color: ${/*text_color*/
      a[7]};
        opacity: ${/*opacity*/
      a[4]}%!important;
        height: ${/*height*/
      a[0]};
        width: ${/*width*/
      a[1]};
`);
    },
    m(d, c) {
      st(d, o, c), p(o, e), p(e, l), p(e, t), s.m(e, null);
    },
    p(d, c) {
      u === (u = i(d)) && s ? s.p(d, c) : (s.d(1), s = u(d), s && (s.c(), s.m(e, null))), c[0] & /*shadow*/
      8 && r !== (r = `p-4 shadow-${/*shadow*/
      d[3]}`) && m(o, "class", r), c[0] & /*background, border_radius, text_color, opacity, height, width*/
      16535 && n !== (n = `
        background-color: ${/*background*/
      d[14]};
        border-radius: ${/*border_radius*/
      d[2]};
        color: ${/*text_color*/
      d[7]};
        opacity: ${/*opacity*/
      d[4]}%!important;
        height: ${/*height*/
      d[0]};
        width: ${/*width*/
      d[1]};
`) && m(o, "style", n);
    },
    d(d) {
      d && at(o), s.d();
    }
  };
}
function Te(a) {
  let o, e, l, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "An unknown error", l = q(), t = b("button"), r = I("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), Mt(
        t,
        "background-color",
        /*button_color*/
        a[8]
      ), Mt(
        t,
        "color",
        /*text_color*/
        a[7]
      ), m(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, l), p(o, t), p(t, r), n || (i = It(
        t,
        "click",
        /*click_handler_2*/
        a[44]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      256 && Mt(
        t,
        "background-color",
        /*button_color*/
        u[8]
      ), s[0] & /*text_color*/
      128 && Mt(
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
function je(a) {
  let o, e, l, t, r, n, i, u, s, d, c;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "Error", l = q(), t = b("p"), r = I(
        /*error*/
        a[11]
      ), n = q(), i = b("div"), u = b("button"), s = I("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        a[15]
      ), m(i, "class", "w-full mt-auto"), m(o, "class", "flex flex-col items-center h-full");
    },
    m(f, h) {
      st(f, o, h), p(o, e), p(o, l), p(o, t), p(t, r), p(o, n), p(o, i), p(i, u), p(u, s), d || (c = It(
        u,
        "click",
        /*click_handler_1*/
        a[43]
      ), d = !0);
    },
    p(f, h) {
      h[0] & /*error*/
      2048 && bt(
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
      f && at(o), d = !1, c();
    }
  };
}
function Ne(a) {
  let o, e, l, t, r, n, i = (
    /*backendData*/
    a[9].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, d, c, f, h = (
    /*backendData*/
    a[9].data[0].third_party_spread + ""
  ), _, S, v, w, T, N = (
    /*backendData*/
    a[9].data[0].sold_ccy + ""
  ), P, M, j = (
    /*backendData*/
    a[9].data[0].third_party_profit + ""
  ), g, y, O, x, C, E, R, F, W, Z = (
    /*backendData*/
    a[9].data[0].integritas_rate.toFixed(4) + ""
  ), H, B, X, U, z, ot, Q, it, $, G = (
    /*shouldShowInterbankRate*/
    a[18] && ie(a)
  ), J = (
    /*backendData*/
    a[9].data[0].integritas_savings > 50 && ae(a)
  );
  return {
    c() {
      o = b("div"), e = b("div"), l = b("h1"), l.textContent = "Your Provider", t = q(), r = b("p"), n = I(`Your exchange rate
                        was `), u = I(i), s = q(), G && G.c(), d = q(), c = b("p"), f = I("Your provider's markup was "), _ = I(h), S = I("%"), v = q(), w = b("p"), T = I(`Your provider
                        charged `), P = I(N), M = q(), g = I(j), y = I(` on
                        this trade`), O = q(), x = b("div"), C = b("h1"), E = I(
        /*name*/
        a[5]
      ), R = q(), F = b("p"), W = I("Our exchange rate was "), H = I(Z), B = q(), J && J.c(), X = q(), U = b("div"), z = b("button"), ot = I("Calculate again"), m(l, "class", "text-2xl"), m(r, "class", "text-sm"), m(c, "class", "text-sm"), m(w, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(C, "class", "text-2xl mt-4"), m(F, "class", "text-sm"), m(x, "class", "flex flex-col gap-2"), m(o, "class", "flex flex-col divide-y gap-4"), Mt(o, "height", "95%"), m(z, "class", "px-6 py-3"), m(z, "style", Q = `${/*button_style*/
      a[15]} margin-bottom: 1.5rem;`), m(U, "class", "w-full");
    },
    m(L, et) {
      st(L, o, et), p(o, e), p(e, l), p(e, t), p(e, r), p(r, n), p(r, u), p(e, s), G && G.m(e, null), p(e, d), p(e, c), p(c, f), p(c, _), p(c, S), p(e, v), p(e, w), p(w, T), p(w, P), p(w, M), p(w, g), p(w, y), p(o, O), p(o, x), p(x, C), p(C, E), p(x, R), p(x, F), p(F, W), p(F, H), p(x, B), J && J.m(x, null), st(L, X, et), st(L, U, et), p(U, z), p(z, ot), it || ($ = It(
        z,
        "click",
        /*click_handler*/
        a[42]
      ), it = !0);
    },
    p(L, et) {
      et[0] & /*backendData*/
      512 && i !== (i = /*backendData*/
      L[9].data[0].third_party_exchange_rate.toFixed(4) + "") && bt(u, i), /*shouldShowInterbankRate*/
      L[18] ? G ? G.p(L, et) : (G = ie(L), G.c(), G.m(e, d)) : G && (G.d(1), G = null), et[0] & /*backendData*/
      512 && h !== (h = /*backendData*/
      L[9].data[0].third_party_spread + "") && bt(_, h), et[0] & /*backendData*/
      512 && N !== (N = /*backendData*/
      L[9].data[0].sold_ccy + "") && bt(P, N), et[0] & /*backendData*/
      512 && j !== (j = /*backendData*/
      L[9].data[0].third_party_profit + "") && bt(g, j), et[0] & /*name*/
      32 && bt(
        E,
        /*name*/
        L[5]
      ), et[0] & /*backendData*/
      512 && Z !== (Z = /*backendData*/
      L[9].data[0].integritas_rate.toFixed(4) + "") && bt(H, Z), /*backendData*/
      L[9].data[0].integritas_savings > 50 ? J ? J.p(L, et) : (J = ae(L), J.c(), J.m(x, null)) : J && (J.d(1), J = null), et[0] & /*button_style*/
      32768 && Q !== (Q = `${/*button_style*/
      L[15]} margin-bottom: 1.5rem;`) && m(z, "style", Q);
    },
    d(L) {
      L && at(o), G && G.d(), J && J.d(), L && at(X), L && at(U), it = !1, $();
    }
  };
}
function Re(a) {
  let o, e, l, t, r, n, i, u, s, d, c, f, h, _, S, v, w, T, N, P, M, j, g, y, O, x, C, E, R, F, W, Z, H, B, X, U, z, ot, Q, it, $, G, J, L, et, _t, ft, gt, wt, lt, Ct, xt, D, rt, dt, K, ct, pt, k, A, Y, tt, ut, yt, vt, Dt, Ot, Et, At, Tt, jt, Nt, Rt, Xt, Bt, Ht, Kt, $t, ht = (
    /*shouldShowEmail*/
    a[17] && le(a)
  );
  function te(nt, mt) {
    return (
      /*isFetching*/
      nt[12] ? Pe : Fe
    );
  }
  let Jt = te(a), kt = Jt(a);
  return {
    c() {
      o = b("form"), e = b("div"), l = b("div"), t = b("div"), r = b("label"), r.textContent = "Select Date", n = q(), i = b("input"), u = q(), s = b("div"), d = b("label"), c = I("Select Time ("), f = I(
        /*timezone*/
        a[6]
      ), h = I(")"), _ = q(), S = b("input"), v = q(), w = b("div"), T = b("div"), N = b("label"), N.textContent = "Sell Amount", P = q(), M = b("input"), j = q(), g = b("div"), y = b("label"), O = I("Sell Currency"), x = q(), C = b("select"), E = b("option"), E.textContent = "GBP", R = b("option"), R.textContent = "USD", F = b("option"), F.textContent = "EUR", W = b("option"), W.textContent = "JPY", Z = b("option"), Z.textContent = "CHF", H = b("option"), H.textContent = "CNY", B = b("option"), B.textContent = "NZD", X = b("option"), X.textContent = "SGD", U = b("option"), U.textContent = "INR", z = b("option"), z.textContent = "AUD", ot = b("option"), ot.textContent = "CAD", Q = b("option"), Q.textContent = "HKD", it = b("option"), it.textContent = "MYR", $ = b("option"), $.textContent = "NOK", G = b("option"), G.textContent = "ZAR", J = b("option"), J.textContent = "RUB", L = b("option"), L.textContent = "SEK", et = q(), _t = b("div"), ft = b("div"), gt = b("label"), gt.textContent = "Buy Amount", wt = q(), lt = b("input"), Ct = q(), xt = b("div"), D = b("label"), rt = I("Buy Currency"), dt = q(), K = b("select"), ct = b("option"), ct.textContent = "USD", pt = b("option"), pt.textContent = "GBP", k = b("option"), k.textContent = "EUR", A = b("option"), A.textContent = "JPY", Y = b("option"), Y.textContent = "CHF", tt = b("option"), tt.textContent = "CNY", ut = b("option"), ut.textContent = "NZD", yt = b("option"), yt.textContent = "SGD", vt = b("option"), vt.textContent = "INR", Dt = b("option"), Dt.textContent = "AUD", Ot = b("option"), Ot.textContent = "CAD", Et = b("option"), Et.textContent = "HKD", At = b("option"), At.textContent = "MYR", Tt = b("option"), Tt.textContent = "NOK", jt = b("option"), jt.textContent = "ZAR", Nt = b("option"), Nt.textContent = "RUB", Rt = b("option"), Rt.textContent = "SEK", Xt = q(), ht && ht.c(), Bt = q(), Ht = b("div"), kt.c(), m(r, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        a[16]
      ), m(t, "class", "w-full"), m(d, "for", "time"), m(S, "id", "time"), m(S, "type", "time"), m(S, "class", "w-full rounded-md px-3 py-2 mt-4"), m(S, "name", "time"), m(S, "placeholder", "Select Time"), S.required = !0, m(
        S,
        "style",
        /*input_style*/
        a[16]
      ), m(s, "class", "w-full"), m(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(N, "for", "sold_notional"), m(M, "id", "sold_notional"), m(M, "type", "number"), m(M, "step", ".01"), m(M, "class", "w-full rounded-md px-3 py-2 mt-4"), m(M, "name", "sold_notional"), m(M, "placeholder", "10000"), M.required = !0, m(
        M,
        "style",
        /*input_style*/
        a[16]
      ), m(T, "class", "w-full"), m(y, "for", "sold_ccy"), Mt(
        y,
        "color",
        /*text_color*/
        a[7]
      ), E.selected = !0, E.__value = "GBP", E.value = E.__value, R.__value = "USD", R.value = R.__value, F.__value = "EUR", F.value = F.__value, W.__value = "JPY", W.value = W.__value, Z.__value = "CHF", Z.value = Z.__value, H.__value = "CNY", H.value = H.__value, B.__value = "NZD", B.value = B.__value, X.__value = "SGD", X.value = X.__value, U.__value = "INR", U.value = U.__value, z.__value = "AUD", z.value = z.__value, ot.__value = "CAD", ot.value = ot.__value, Q.__value = "HKD", Q.value = Q.__value, it.__value = "MYR", it.value = it.__value, $.__value = "NOK", $.value = $.__value, G.__value = "ZAR", G.value = G.__value, J.__value = "RUB", J.value = J.__value, L.__value = "SEK", L.value = L.__value, m(C, "name", "sold_ccy"), m(C, "id", "sold_ccy"), m(C, "class", "w-full rounded-md px-3 py-2 mt-4"), C.required = !0, m(
        C,
        "style",
        /*input_style*/
        a[16]
      ), m(g, "class", "w-full"), m(w, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(gt, "for", "bought_notional"), m(lt, "id", "bought_notional"), m(lt, "type", "number"), m(lt, "step", ".01"), m(lt, "class", "w-full rounded-md px-3 py-2 mt-4"), m(lt, "name", "bought_notional"), m(lt, "placeholder", "10000"), lt.required = !0, m(
        lt,
        "style",
        /*input_style*/
        a[16]
      ), m(ft, "class", "w-full"), m(D, "for", "bought_ccy"), Mt(
        D,
        "color",
        /*text_color*/
        a[7]
      ), ct.selected = !0, ct.__value = "USD", ct.value = ct.__value, pt.__value = "GBP", pt.value = pt.__value, k.__value = "EUR", k.value = k.__value, A.__value = "JPY", A.value = A.__value, Y.__value = "CHF", Y.value = Y.__value, tt.__value = "CNY", tt.value = tt.__value, ut.__value = "NZD", ut.value = ut.__value, yt.__value = "SGD", yt.value = yt.__value, vt.__value = "INR", vt.value = vt.__value, Dt.__value = "AUD", Dt.value = Dt.__value, Ot.__value = "CAD", Ot.value = Ot.__value, Et.__value = "HKD", Et.value = Et.__value, At.__value = "MYR", At.value = At.__value, Tt.__value = "NOK", Tt.value = Tt.__value, jt.__value = "ZAR", jt.value = jt.__value, Nt.__value = "RUB", Nt.value = Nt.__value, Rt.__value = "SEK", Rt.value = Rt.__value, m(K, "name", "bought_ccy"), m(K, "id", "bought_ccy"), m(K, "class", "w-full rounded-md px-3 py-2 mt-4"), K.required = !0, m(
        K,
        "style",
        /*input_style*/
        a[16]
      ), m(xt, "class", "w-full"), m(_t, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m(nt, mt) {
      st(nt, o, mt), p(o, e), p(e, l), p(l, t), p(t, r), p(t, n), p(t, i), p(l, u), p(l, s), p(s, d), p(d, c), p(d, f), p(d, h), p(s, _), p(s, S), p(e, v), p(e, w), p(w, T), p(T, N), p(T, P), p(T, M), p(w, j), p(w, g), p(g, y), p(y, O), p(g, x), p(g, C), p(C, E), p(C, R), p(C, F), p(C, W), p(C, Z), p(C, H), p(C, B), p(C, X), p(C, U), p(C, z), p(C, ot), p(C, Q), p(C, it), p(C, $), p(C, G), p(C, J), p(C, L), p(e, et), p(e, _t), p(_t, ft), p(ft, gt), p(ft, wt), p(ft, lt), p(_t, Ct), p(_t, xt), p(xt, D), p(D, rt), p(xt, dt), p(xt, K), p(K, ct), p(K, pt), p(K, k), p(K, A), p(K, Y), p(K, tt), p(K, ut), p(K, yt), p(K, vt), p(K, Dt), p(K, Ot), p(K, Et), p(K, At), p(K, Tt), p(K, jt), p(K, Nt), p(K, Rt), p(e, Xt), ht && ht.m(e, null), p(e, Bt), p(e, Ht), kt.m(Ht, null), Kt || ($t = It(
        o,
        "submit",
        /*handleFormSubmit*/
        a[20]
      ), Kt = !0);
    },
    p(nt, mt) {
      mt[0] & /*input_style*/
      65536 && m(
        i,
        "style",
        /*input_style*/
        nt[16]
      ), mt[0] & /*timezone*/
      64 && bt(
        f,
        /*timezone*/
        nt[6]
      ), mt[0] & /*input_style*/
      65536 && m(
        S,
        "style",
        /*input_style*/
        nt[16]
      ), mt[0] & /*input_style*/
      65536 && m(
        M,
        "style",
        /*input_style*/
        nt[16]
      ), mt[0] & /*text_color*/
      128 && Mt(
        y,
        "color",
        /*text_color*/
        nt[7]
      ), mt[0] & /*input_style*/
      65536 && m(
        C,
        "style",
        /*input_style*/
        nt[16]
      ), mt[0] & /*input_style*/
      65536 && m(
        lt,
        "style",
        /*input_style*/
        nt[16]
      ), mt[0] & /*text_color*/
      128 && Mt(
        D,
        "color",
        /*text_color*/
        nt[7]
      ), mt[0] & /*input_style*/
      65536 && m(
        K,
        "style",
        /*input_style*/
        nt[16]
      ), /*shouldShowEmail*/
      nt[17] ? ht ? ht.p(nt, mt) : (ht = le(nt), ht.c(), ht.m(e, Bt)) : ht && (ht.d(1), ht = null), Jt === (Jt = te(nt)) && kt ? kt.p(nt, mt) : (kt.d(1), kt = Jt(nt), kt && (kt.c(), kt.m(Ht, null)));
    },
    d(nt) {
      nt && at(o), ht && ht.d(), kt.d(), Kt = !1, $t();
    }
  };
}
function ie(a) {
  let o, e, l = (
    /*backendData*/
    a[9].data[0].ccy_pair + ""
  ), t, r, n = (
    /*backendData*/
    a[9].data[0].mid_market_rate.toFixed(4) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = I("The interbank rate "), t = I(l), r = I(`
                            was `), i = I(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      512 && l !== (l = /*backendData*/
      u[9].data[0].ccy_pair + "") && bt(t, l), s[0] & /*backendData*/
      512 && n !== (n = /*backendData*/
      u[9].data[0].mid_market_rate.toFixed(4) + "") && bt(i, n);
    },
    d(u) {
      u && at(o);
    }
  };
}
function ae(a) {
  let o, e, l = (
    /*backendData*/
    a[9].data[0].sold_ccy + ""
  ), t, r, n = (
    /*backendData*/
    a[9].data[0].integritas_savings.toFixed(2) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = I(`We would've saved
                            you `), t = I(l), r = q(), i = I(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      512 && l !== (l = /*backendData*/
      u[9].data[0].sold_ccy + "") && bt(t, l), s[0] & /*backendData*/
      512 && n !== (n = /*backendData*/
      u[9].data[0].integritas_savings.toFixed(2) + "") && bt(i, n);
    },
    d(u) {
      u && at(o);
    }
  };
}
function le(a) {
  let o, e, l, t, r;
  return {
    c() {
      o = b("div"), e = b("div"), l = b("label"), l.textContent = "Email", t = q(), r = b("input"), m(l, "for", "user"), m(r, "id", "user"), m(r, "type", "email"), m(r, "class", "w-full rounded-md px-3 py-2 mt-4"), m(r, "name", "user"), m(r, "placeholder", "JohnDoe@email.com"), r.required = !0, m(
        r,
        "style",
        /*input_style*/
        a[16]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, i) {
      st(n, o, i), p(o, e), p(e, l), p(e, t), p(e, r);
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
function Pe(a) {
  let o, e, l, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("div"), l = b("button"), t = Zt("svg"), r = Zt("path"), n = Zt("path"), i = I(`
                                        Loading...`), m(r, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(r, "fill", "#E5E7EB"), m(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(n, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), l.disabled = !0, m(l, "type", "button"), m(l, "class", "px-6 py-3 mt-6 text-center inline-flex items-center justify-center"), m(
        l,
        "style",
        /*button_style*/
        a[15]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(e, l), p(l, t), p(t, r), p(t, n), p(l, i);
    },
    p(u, s) {
      s[0] & /*button_style*/
      32768 && m(
        l,
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
function Fe(a) {
  let o, e, l;
  return {
    c() {
      o = b("div"), e = b("button"), l = I("See your charges"), m(e, "type", "submit"), m(e, "class", "px-6 py-3 mt-6"), m(
        e,
        "style",
        /*button_style*/
        a[15]
      ), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full items-center justify-center");
    },
    m(t, r) {
      st(t, o, r), p(o, e), p(e, l);
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
function Le(a) {
  let o, e;
  return {
    c() {
      o = b("p"), e = I(
        /*statusCheckError*/
        a[13]
      ), m(o, "class", "text-sm");
    },
    m(l, t) {
      st(l, o, t), p(o, e);
    },
    p(l, t) {
      t[0] & /*statusCheckError*/
      8192 && bt(
        e,
        /*statusCheckError*/
        l[13]
      );
    },
    d(l) {
      l && at(o);
    }
  };
}
function ze(a) {
  let o;
  return {
    c() {
      o = b("div"), o.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(e, l) {
      st(e, o, l);
    },
    p: St,
    d(e) {
      e && at(o);
    }
  };
}
function Ye(a) {
  let o, e, l;
  function t(i, u) {
    return (
      /*statusCheckError*/
      i[13] ? Ae : Ee
    );
  }
  let r = t(a), n = r(a);
  return {
    c() {
      o = b("link"), e = q(), n.c(), l = pe(), this.c = St, m(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(o, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, o), st(i, e, u), n.m(i, u), st(i, l, u);
    },
    p(i, u) {
      r === (r = t(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(l.parentNode, l)));
    },
    i: St,
    o: St,
    d(i) {
      at(o), i && at(e), n.d(i), i && at(l);
    }
  };
}
const ue = "http://localhost:8000", He = "CORS_ERROR";
function Je(a) {
  return a === "dark" ? !0 : a === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function Ue(a, o, e) {
  let l, t, r, n, i, u, s, { mode: d = "auto" } = o, { height: c = "100%" } = o, { width: f = "100%" } = o, { light_mode_background: h = "#ffffff" } = o, { dark_mode_background: _ = "#1f2937" } = o, { light_mode_text_color: S = "#1f2937" } = o, { dark_mode_text_color: v = "#f9fafb" } = o, { dark_mode_input_background: w = "#374151" } = o, { light_mode_input_background: T = "#f9fafb" } = o, { dark_mode_button_color: N = "#374151" } = o, { light_mode_button_color: P = "#f9fafb" } = o, { light_mode_border_color: M = "#D1D5DB" } = o, { dark_mode_border_color: j = "#374151" } = o, { light_mode_button_text_color: g = "#1f2937" } = o, { dark_mode_button_text_color: y = "#f9fafb" } = o, { border_radius: O = "15px" } = o, { input_border_radius: x = "5" } = o, { shadow: C = "md" } = o, { opacity: E = 100 } = o, { name: R = "Our Results" } = o, { show_interbank_rate: F = "false" } = o, { show_email_input: W = "true" } = o, { timezone: Z = "Europe/London" } = o, { spread: H = 0 } = o;
  async function B() {
    const D = "CORS_ERROR";
    try {
      const rt = await fetch(`${ue}/`);
      if (!rt.ok)
        throw rt.status === 403 ? new Error(D) : new Error("We're sorry, our servers are currently down. Please try again later.");
    } catch (rt) {
      rt.message === D ? e(13, it = D) : e(13, it = rt.message);
    }
  }
  const X = async (D) => fetch(`${ue}/widget/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  _e(() => {
    B();
  });
  let U, z = !0, ot, Q = !1, it;
  const $ = () => {
    e(9, U = void 0), e(10, z = !0), e(11, ot = !1), e(12, Q = !1);
  }, G = async (D) => {
    e(10, z = !1), e(12, Q = !0), e(11, ot = void 0);
    try {
      const rt = await X(D);
      if (!rt.ok) {
        const K = await rt.json();
        throw new Error(K || `HTTP error! Status: ${rt.status}`);
      }
      const dt = await rt.json();
      e(12, Q = !1), e(11, ot = void 0), e(10, z = !1), e(9, U = dt);
    } catch (rt) {
      e(12, Q = !1), e(11, ot = rt.message), e(10, z = !1), e(9, U = void 0);
    }
  }, J = async (D) => {
    D.preventDefault();
    const rt = new FormData(D.target), dt = {};
    for (let K of rt) {
      const [ct, pt] = K;
      dt[ct] = pt;
    }
    dt.prospect = "", dt.input_spread = H.toString(), dt.prospect_annual_flow = "", dt.email_user = !1, dt.timezone = Z, l || (dt.user = "testUserWithoutMail@gmail.com"), G(dt);
  }, L = (D) => {
    e(41, r = D.matches);
  }, et = window.matchMedia("(prefers-color-scheme: dark)");
  et.addEventListener("change", L), ye(() => {
    et.removeEventListener("change", L);
  });
  let _t, ft, gt, wt;
  const lt = () => $(), Ct = (D) => $(), xt = (D) => $();
  return a.$$set = (D) => {
    "mode" in D && e(21, d = D.mode), "height" in D && e(0, c = D.height), "width" in D && e(1, f = D.width), "light_mode_background" in D && e(22, h = D.light_mode_background), "dark_mode_background" in D && e(23, _ = D.dark_mode_background), "light_mode_text_color" in D && e(24, S = D.light_mode_text_color), "dark_mode_text_color" in D && e(25, v = D.dark_mode_text_color), "dark_mode_input_background" in D && e(26, w = D.dark_mode_input_background), "light_mode_input_background" in D && e(27, T = D.light_mode_input_background), "dark_mode_button_color" in D && e(28, N = D.dark_mode_button_color), "light_mode_button_color" in D && e(29, P = D.light_mode_button_color), "light_mode_border_color" in D && e(30, M = D.light_mode_border_color), "dark_mode_border_color" in D && e(31, j = D.dark_mode_border_color), "light_mode_button_text_color" in D && e(32, g = D.light_mode_button_text_color), "dark_mode_button_text_color" in D && e(33, y = D.dark_mode_button_text_color), "border_radius" in D && e(2, O = D.border_radius), "input_border_radius" in D && e(34, x = D.input_border_radius), "shadow" in D && e(3, C = D.shadow), "opacity" in D && e(4, E = D.opacity), "name" in D && e(5, R = D.name), "show_interbank_rate" in D && e(35, F = D.show_interbank_rate), "show_email_input" in D && e(36, W = D.show_email_input), "timezone" in D && e(6, Z = D.timezone), "spread" in D && e(37, H = D.spread);
  }, a.$$.update = () => {
    a.$$.dirty[1] & /*show_email_input*/
    32 && e(17, l = W === "true"), a.$$.dirty[1] & /*show_interbank_rate*/
    16 && e(18, t = F === "true"), a.$$.dirty[0] & /*mode*/
    2097152 && e(41, r = Je(d)), a.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    12582912 | a.$$.dirty[1] & /*isDarkMode*/
    1024 && e(14, _t = r ? _ : h), a.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    50331648 | a.$$.dirty[1] & /*isDarkMode*/
    1024 && e(7, ft = r ? v : S), a.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    201326592 | a.$$.dirty[1] & /*isDarkMode*/
    1024 && e(38, gt = r ? w : T), a.$$.dirty[0] & /*light_mode_border_color*/
    1073741824 | a.$$.dirty[1] & /*isDarkMode, dark_mode_border_color*/
    1025 && e(39, n = r ? j : M), a.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    805306368 | a.$$.dirty[1] & /*isDarkMode*/
    1024 && e(8, wt = r ? N : P), a.$$.dirty[1] & /*isDarkMode, dark_mode_button_text_color, light_mode_button_text_color*/
    1030 && e(40, i = r ? y : g), a.$$.dirty[0] & /*text_color*/
    128 | a.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    392 && e(16, u = `
    background-color: ${gt};
    color: ${ft};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${x}px;
    `), a.$$.dirty[0] & /*button_color*/
    256 | a.$$.dirty[1] & /*button_text_color, input_border_color, input_border_radius*/
    776 && e(15, s = `
    width: 100%;
    background-color: ${wt};
    color: ${i};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${x}px;
    `);
  }, [
    c,
    f,
    O,
    C,
    E,
    R,
    Z,
    ft,
    wt,
    U,
    z,
    ot,
    Q,
    it,
    _t,
    s,
    u,
    l,
    t,
    $,
    J,
    d,
    h,
    _,
    S,
    v,
    w,
    T,
    N,
    P,
    M,
    j,
    g,
    y,
    x,
    F,
    W,
    H,
    gt,
    n,
    i,
    r,
    lt,
    Ct,
    xt
  ];
}
class Ie extends de {
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
        }}</style>`, Se(
      this,
      {
        target: this.shadowRoot,
        props: me(this.attributes),
        customElement: !0
      },
      Ue,
      Ye,
      ce,
      {
        mode: 21,
        height: 0,
        width: 1,
        light_mode_background: 22,
        dark_mode_background: 23,
        light_mode_text_color: 24,
        dark_mode_text_color: 25,
        dark_mode_input_background: 26,
        light_mode_input_background: 27,
        dark_mode_button_color: 28,
        light_mode_button_color: 29,
        light_mode_border_color: 30,
        dark_mode_border_color: 31,
        light_mode_button_text_color: 32,
        dark_mode_button_text_color: 33,
        border_radius: 2,
        input_border_radius: 34,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 35,
        show_email_input: 36,
        timezone: 6,
        spread: 37
      },
      null,
      [-1, -1]
    ), o && (o.target && st(o.target, this, o.anchor), o.props && (this.$set(o.props), V()));
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
      "spread"
    ];
  }
  get mode() {
    return this.$$.ctx[21];
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
    return this.$$.ctx[22];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), V();
  }
  get dark_mode_background() {
    return this.$$.ctx[23];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), V();
  }
  get light_mode_text_color() {
    return this.$$.ctx[24];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), V();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[25];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), V();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[26];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), V();
  }
  get light_mode_input_background() {
    return this.$$.ctx[27];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), V();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[28];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), V();
  }
  get light_mode_button_color() {
    return this.$$.ctx[29];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), V();
  }
  get light_mode_border_color() {
    return this.$$.ctx[30];
  }
  set light_mode_border_color(o) {
    this.$$set({ light_mode_border_color: o }), V();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[31];
  }
  set dark_mode_border_color(o) {
    this.$$set({ dark_mode_border_color: o }), V();
  }
  get light_mode_button_text_color() {
    return this.$$.ctx[32];
  }
  set light_mode_button_text_color(o) {
    this.$$set({ light_mode_button_text_color: o }), V();
  }
  get dark_mode_button_text_color() {
    return this.$$.ctx[33];
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
    return this.$$.ctx[34];
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
    return this.$$.ctx[35];
  }
  set show_interbank_rate(o) {
    this.$$set({ show_interbank_rate: o }), V();
  }
  get show_email_input() {
    return this.$$.ctx[36];
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
  get spread() {
    return this.$$.ctx[37];
  }
  set spread(o) {
    this.$$set({ spread: o }), V();
  }
}
customElements.define("spreadm8-calc", Ie);
export {
  Ie as Spreadm8Calc
};
