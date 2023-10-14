function St() {
}
function Gt(a) {
  return a();
}
function Xt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ft(a) {
  a.forEach(Gt);
}
function Kt(a) {
  return typeof a == "function";
}
function ue(a, r) {
  return a != a ? r == r : a !== r || a && typeof a == "object" || typeof a == "function";
}
function se(a) {
  return Object.keys(a).length === 0;
}
function p(a, r) {
  a.appendChild(r);
}
function lt(a, r, e) {
  a.insertBefore(r, e || null);
}
function rt(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function b(a) {
  return document.createElement(a);
}
function zt(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function Z(a) {
  return document.createTextNode(a);
}
function W() {
  return Z(" ");
}
function de() {
  return Z("");
}
function Jt(a, r, e, l) {
  return a.addEventListener(r, e, l), () => a.removeEventListener(r, e, l);
}
function m(a, r, e) {
  e == null ? a.removeAttribute(r) : a.getAttribute(r) !== e && a.setAttribute(r, e);
}
function ce(a) {
  return Array.from(a.childNodes);
}
function yt(a, r) {
  r = "" + r, a.wholeText !== r && (a.data = r);
}
function xt(a, r, e, l) {
  e === null ? a.style.removeProperty(r) : a.style.setProperty(r, e, l ? "important" : "");
}
function fe(a) {
  const r = {};
  for (const e of a)
    r[e.name] = e.value;
  return r;
}
let Pt;
function Rt(a) {
  Pt = a;
}
function ae() {
  if (!Pt)
    throw new Error("Function called outside component initialization");
  return Pt;
}
function pe(a) {
  ae().$$.on_mount.push(a);
}
function he(a) {
  ae().$$.on_destroy.push(a);
}
const Nt = [], $t = [], Ht = [], te = [], me = Promise.resolve();
let Zt = !1;
function _e() {
  Zt || (Zt = !0, me.then(tt));
}
function Wt(a) {
  Ht.push(a);
}
const Bt = /* @__PURE__ */ new Set();
let jt = 0;
function tt() {
  if (jt !== 0)
    return;
  const a = Pt;
  do {
    try {
      for (; jt < Nt.length; ) {
        const r = Nt[jt];
        jt++, Rt(r), ye(r.$$);
      }
    } catch (r) {
      throw Nt.length = 0, jt = 0, r;
    }
    for (Rt(null), Nt.length = 0, jt = 0; $t.length; )
      $t.pop()();
    for (let r = 0; r < Ht.length; r += 1) {
      const e = Ht[r];
      Bt.has(e) || (Bt.add(e), e());
    }
    Ht.length = 0;
  } while (Nt.length);
  for (; te.length; )
    te.pop()();
  Zt = !1, Bt.clear(), Rt(a);
}
function ye(a) {
  if (a.fragment !== null) {
    a.update(), Ft(a.before_update);
    const r = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, r), a.after_update.forEach(Wt);
  }
}
const be = /* @__PURE__ */ new Set();
function ge(a, r) {
  a && a.i && (be.delete(a), a.i(r));
}
function ve(a, r, e, l) {
  const { fragment: t, after_update: o } = a.$$;
  t && t.m(r, e), l || Wt(() => {
    const n = a.$$.on_mount.map(Gt).filter(Kt);
    a.$$.on_destroy ? a.$$.on_destroy.push(...n) : Ft(n), a.$$.on_mount = [];
  }), o.forEach(Wt);
}
function we(a, r) {
  const e = a.$$;
  e.fragment !== null && (Ft(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function xe(a, r) {
  a.$$.dirty[0] === -1 && (Nt.push(a), _e(), a.$$.dirty.fill(0)), a.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function ke(a, r, e, l, t, o, n, i = [-1]) {
  const u = Pt;
  Rt(a);
  const s = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: St,
    not_equal: t,
    bound: Xt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xt(),
    dirty: i,
    skip_bound: !1,
    root: r.target || u.$$.root
  };
  n && n(s.root);
  let c = !1;
  if (s.ctx = e ? e(a, r.props || {}, (f, d, ...h) => {
    const y = h.length ? h[0] : d;
    return s.ctx && t(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), c && xe(a, f)), d;
  }) : [], s.update(), c = !0, Ft(s.before_update), s.fragment = l ? l(s.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = ce(r.target);
      s.fragment && s.fragment.l(f), f.forEach(rt);
    } else
      s.fragment && s.fragment.c();
    r.intro && ge(a.$$.fragment), ve(a, r.target, r.anchor, r.customElement), tt();
  }
  Rt(u);
}
let le;
typeof HTMLElement == "function" && (le = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: a } = this.$$;
    this.$$.on_disconnect = a.map(Gt).filter(Kt);
    for (const r in this.$$.slotted)
      this.appendChild(this.$$.slotted[r]);
  }
  attributeChangedCallback(a, r, e) {
    this[a] = e;
  }
  disconnectedCallback() {
    Ft(this.$$.on_disconnect);
  }
  $destroy() {
    we(this, 1), this.$destroy = St;
  }
  $on(a, r) {
    if (!Kt(r))
      return St;
    const e = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return e.push(r), () => {
      const l = e.indexOf(r);
      l !== -1 && e.splice(l, 1);
    };
  }
  $set(a) {
    this.$$set && !se(a) && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
  }
});
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ee = {}, Ce = {
  get exports() {
    return ee;
  },
  set exports(a) {
    ee = a;
  }
};
(function(a, r) {
  (function(e, l) {
    a.exports = l();
  })(Me, function() {
    return function(e) {
      function l(o) {
        if (t[o])
          return t[o].exports;
        var n = t[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(n.exports, n, n.exports, l), n.loaded = !0, n.exports;
      }
      var t = {};
      return l.m = e, l.c = t, l.p = "", l(0);
    }([function(e, l, t) {
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      t(84);
      var n = t(41), i = o(n), u = function() {
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
      e.exports = function(o, n) {
        return t.call(o, n);
      };
    }, function(e, l, t) {
      var o = t(9), n = t(32), i = t(25), u = Object.defineProperty;
      l.f = t(1) ? Object.defineProperty : function(s, c, f) {
        if (o(s), c = i(c, !0), o(f), n)
          try {
            return u(s, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[c] = f.value), s;
      };
    }, function(e, l, t) {
      var o = t(59), n = t(16);
      e.exports = function(i) {
        return o(n(i));
      };
    }, function(e, l, t) {
      var o = t(4), n = t(14);
      e.exports = t(1) ? function(i, u, s) {
        return o.f(i, u, n(1, s));
      } : function(i, u, s) {
        return i[u] = s, i;
      };
    }, function(e, l, t) {
      var o = t(23)("wks"), n = t(15), i = t(2).Symbol, u = typeof i == "function", s = e.exports = function(c) {
        return o[c] || (o[c] = u && i[c] || (u ? i : n)("Symbol." + c));
      };
      s.store = o;
    }, function(e, l) {
      var t = e.exports = { version: "2.4.0" };
      typeof __e == "number" && (__e = t);
    }, function(e, l, t) {
      var o = t(12);
      e.exports = function(n) {
        if (!o(n))
          throw TypeError(n + " is not an object!");
        return n;
      };
    }, function(e, l, t) {
      var o = t(2), n = t(8), i = t(56), u = t(6), s = "prototype", c = function(f, d, h) {
        var y, S, v, k = f & c.F, E = f & c.G, P = f & c.S, j = f & c.P, C = f & c.B, N = f & c.W, g = E ? n : n[d] || (n[d] = {}), _ = g[s], M = E ? o : P ? o[d] : (o[d] || {})[s];
        E && (h = d);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = E && typeof M[y] != "function" ? h[y] : C && S ? i(v, o) : N && M[y] == v ? function(w) {
            var T = function(O, R, Y) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(O);
                  case 2:
                    return new w(O, R);
                }
                return new w(O, R, Y);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : j && typeof v == "function" ? i(Function.call, v) : v, j && ((g.virtual || (g.virtual = {}))[y] = v, f & c.R && _ && !_[y] && u(_, y, v)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
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
      var o = t(38), n = t(17);
      e.exports = Object.keys || function(i) {
        return o(i, n);
      };
    }, function(e, l) {
      e.exports = function(t, o) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: o };
      };
    }, function(e, l) {
      var t = 0, o = Math.random();
      e.exports = function(n) {
        return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++t + o).toString(36));
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
      var o = t(4).f, n = t(3), i = t(7)("toStringTag");
      e.exports = function(u, s, c) {
        u && !n(u = c ? u : u.prototype, i) && o(u, i, { configurable: !0, value: s });
      };
    }, function(e, l, t) {
      var o = t(23)("keys"), n = t(15);
      e.exports = function(i) {
        return o[i] || (o[i] = n(i));
      };
    }, function(e, l, t) {
      var o = t(2), n = "__core-js_shared__", i = o[n] || (o[n] = {});
      e.exports = function(u) {
        return i[u] || (i[u] = {});
      };
    }, function(e, l) {
      var t = Math.ceil, o = Math.floor;
      e.exports = function(n) {
        return isNaN(n = +n) ? 0 : (n > 0 ? o : t)(n);
      };
    }, function(e, l, t) {
      var o = t(12);
      e.exports = function(n, i) {
        if (!o(n))
          return n;
        var u, s;
        if (i && typeof (u = n.toString) == "function" && !o(s = u.call(n)) || typeof (u = n.valueOf) == "function" && !o(s = u.call(n)) || !i && typeof (u = n.toString) == "function" && !o(s = u.call(n)))
          return s;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, l, t) {
      var o = t(2), n = t(8), i = t(19), u = t(27), s = t(4).f;
      e.exports = function(c) {
        var f = n.Symbol || (n.Symbol = i ? {} : o.Symbol || {});
        c.charAt(0) == "_" || c in f || s(f, c, { value: u.f(c) });
      };
    }, function(e, l, t) {
      l.f = t(7);
    }, function(e, l) {
      l.__esModule = !0, l.default = function(t, o) {
        if (!(t instanceof o))
          throw new TypeError("Cannot call a class as a function");
      };
    }, function(e, l, t) {
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      l.__esModule = !0;
      var n = t(45), i = o(n);
      l.default = function() {
        function u(s, c) {
          for (var f = 0; f < c.length; f++) {
            var d = c[f];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), (0, i.default)(s, d.key, d);
          }
        }
        return function(s, c, f) {
          return c && u(s.prototype, c), f && u(s, f), s;
        };
      }();
    }, function(e, l) {
      var t = {}.toString;
      e.exports = function(o) {
        return t.call(o).slice(8, -1);
      };
    }, function(e, l, t) {
      var o = t(12), n = t(2).document, i = o(n) && o(n.createElement);
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
      var o = t(19), n = t(10), i = t(39), u = t(6), s = t(3), c = t(18), f = t(61), d = t(21), h = t(67), y = t(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", E = "values", P = function() {
        return this;
      };
      e.exports = function(j, C, N, g, _, M, w) {
        f(N, C, g);
        var T, O, R, Y = function(et) {
          if (!S && et in U)
            return U[et];
          switch (et) {
            case k:
              return function() {
                return new N(this, et);
              };
            case E:
              return function() {
                return new N(this, et);
              };
          }
          return function() {
            return new N(this, et);
          };
        }, G = C + " Iterator", z = _ == E, H = !1, U = j.prototype, q = U[y] || U[v] || _ && U[_], B = q || Y(_), I = _ ? z ? Y("entries") : B : void 0, ut = C == "Array" && U.entries || q;
        if (ut && (R = h(ut.call(new j())), R !== Object.prototype && (d(R, G, !0), o || s(R, y) || u(R, y, P))), z && q && q.name !== E && (H = !0, B = function() {
          return q.call(this);
        }), o && !w || !S && !H && U[y] || u(U, y, B), c[C] = B, c[G] = P, _)
          if (T = { values: z ? B : Y(E), keys: M ? B : Y(k), entries: I }, w)
            for (O in T)
              O in U || i(U, O, T[O]);
          else
            n(n.P + n.F * (S || H), C, T);
        return T;
      };
    }, function(e, l, t) {
      var o = t(9), n = t(35), i = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", f = function() {
        var d, h = t(31)("iframe"), y = i.length, S = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", d = h.contentWindow.document, d.open(), d.write(S + "script" + v + "document.F=Object" + S + "/script" + v), d.close(), f = d.F; y--; )
          delete f[c][i[y]];
        return f();
      };
      e.exports = Object.create || function(d, h) {
        var y;
        return d !== null ? (s[c] = o(d), y = new s(), s[c] = null, y[u] = d) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(e, l, t) {
      var o = t(4), n = t(9), i = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var c, f = i(s), d = f.length, h = 0; d > h; )
          o.f(u, c = f[h++], s[c]);
        return u;
      };
    }, function(e, l, t) {
      var o = t(38), n = t(17).concat("length", "prototype");
      l.f = Object.getOwnPropertyNames || function(i) {
        return o(i, n);
      };
    }, function(e, l) {
      l.f = Object.getOwnPropertySymbols;
    }, function(e, l, t) {
      var o = t(3), n = t(5), i = t(55)(!1), u = t(22)("IE_PROTO");
      e.exports = function(s, c) {
        var f, d = n(s), h = 0, y = [];
        for (f in d)
          f != u && o(d, f) && y.push(f);
        for (; c.length > h; )
          o(d, f = c[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(e, l, t) {
      e.exports = t(6);
    }, function(e, l, t) {
      function o(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function n(h, y) {
        for (h = String(h), y = y || 2; h.length < y; )
          h = "0" + h;
        return h;
      }
      function i(h) {
        var y = new Date(h.getFullYear(), h.getMonth(), h.getDate());
        y.setDate(y.getDate() - (y.getDay() + 6) % 7 + 3);
        var S = new Date(y.getFullYear(), 0, 4);
        S.setDate(S.getDate() - (S.getDay() + 6) % 7 + 3);
        var v = y.getTimezoneOffset() - S.getTimezoneOffset();
        y.setHours(y.getHours() - v);
        var k = (y - S) / 6048e5;
        return 1 + Math.floor(k);
      }
      function u(h) {
        var y = h.getDay();
        return y === 0 && (y = 7), y;
      }
      function s(h) {
        return h === null ? "null" : h === void 0 ? "undefined" : (typeof h > "u" ? "undefined" : (0, f.default)(h)) !== "object" ? typeof h > "u" ? "undefined" : (0, f.default)(h) : Array.isArray(h) ? "array" : {}.toString.call(h).slice(8, -1).toLowerCase();
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var c = t(48), f = o(c), d = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, E, P) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(d.masks[k] || k || d.masks.default);
          var j = k.slice(0, 4);
          j !== "UTC:" && j !== "GMT:" || (k = k.slice(4), E = !0, j === "GMT:" && (P = !0));
          var C = E ? "getUTC" : "get", N = v[C + "Date"](), g = v[C + "Day"](), _ = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), O = v[C + "Seconds"](), R = v[C + "Milliseconds"](), Y = E ? 0 : v.getTimezoneOffset(), G = i(v), z = u(v), H = { d: N, dd: n(N), ddd: d.i18n.dayNames[g], dddd: d.i18n.dayNames[g + 7], m: _ + 1, mm: n(_ + 1), mmm: d.i18n.monthNames[_], mmmm: d.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: O, ss: n(O), l: n(R, 3), L: n(Math.round(R / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: P ? "GMT" : E ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (Y > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(Y) / 60) + Math.abs(Y) % 60, 4), S: ["th", "st", "nd", "rd"][N % 10 > 3 ? 0 : (N % 100 - N % 10 != 10) * N % 10], W: G, N: z };
          return k.replace(h, function(U) {
            return U in H ? H[U] : U.slice(1, U.length - 1);
          });
        };
      }();
      d.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, d.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = d;
    }, function(e, l, t) {
      function o(P) {
        return P && P.__esModule ? P : { default: P };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(44), i = o(n), u = t(28), s = o(u), c = t(29), f = o(c), d = t(43), h = o(d), y = t(42), S = o(y), v = t(40), k = o(v), E = function() {
        function P(j) {
          var C = this;
          (0, s.default)(this, P), this.element = j, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
            if (!C.element.value)
              return null;
            var g = C.format || "yyyy-mm-dd", _ = C.element.value.match(/(\d+)/g), M = 0, w = {};
            return g.replace(/(yyyy|dd|mm)/g, function(T) {
              w[T] = M++;
            }), new Date(_[w.yyyy], _[w.mm] - 1, _[w.dd]);
          }, set: function(g) {
            C.element.value = (0, k.default)(g, C.format);
          } }, valueAsNumber: { get: function() {
            return C.element.value ? C.element.valueAsDate.valueOf() : NaN;
          }, set: function(g) {
            C.element.valueAsDate = new Date(g);
          } } });
          var N = function(g) {
            var _ = C.element;
            _.locale = C.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", N), this.element.addEventListener("mouseup", N), this.element.addEventListener("keydown", function(g) {
            var _ = new Date();
            switch (g.keyCode) {
              case 9:
              case 27:
                h.default.hide();
                break;
              case 38:
                C.element.valueAsDate && (_.setDate(C.element.valueAsDate.getDate() + 1), C.element.valueAsDate = _, h.default.pingInput());
                break;
              case 40:
                C.element.valueAsDate && (_.setDate(C.element.valueAsDate.getDate() - 1), C.element.valueAsDate = _, h.default.pingInput());
            }
            h.default.sync();
          }), this.element.addEventListener("keyup", function(g) {
            h.default.sync();
          });
        }
        return (0, f.default)(P, [{ key: "getLocaleText", value: function() {
          var j = this.locale.toLowerCase();
          for (var C in S.default) {
            var N = C.split("_");
            if (N.map(function(g) {
              return g.toLowerCase();
            }), ~N.indexOf(j) || ~N.indexOf(j.substr(0, 2)))
              return S.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var j = document.createElement("input");
          j.setAttribute("type", "date");
          var C = "not-a-date";
          return j.setAttribute("value", C), j.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var j = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var N = 0; N < C; ++N)
            new P(j[N]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var j = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = j.length;
          if (!C)
            return !1;
          for (var N = 0; N < C; ++N)
            new P(j[N]);
        } }]), P;
      }();
      l.default = E;
    }, function(e, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = t;
    }, function(e, l, t) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(28), i = o(n), u = t(29), s = o(u), c = function() {
        function f() {
          var d = this;
          if ((0, i.default)(this, f), window.thePicker)
            return window.thePicker;
          this.date = new Date(), this.input = null, this.isOpen = !1, this.container = document.createElement("date-input-polyfill"), this.year = document.createElement("select"), f.createRangeSelect(this.year, 1890, this.date.getFullYear() + 20), this.year.className = "yearSelect", this.year.addEventListener("change", function() {
            d.date.setYear(d.year.value), d.refreshDaysMatrix();
          });
          var h = document.createElement("span");
          h.className = "yearSelect-wrapper", h.appendChild(this.year), this.container.appendChild(h), this.month = document.createElement("select"), this.month.className = "monthSelect", this.month.addEventListener("change", function() {
            d.date.setMonth(d.month.value), d.refreshDaysMatrix();
          });
          var y = document.createElement("span");
          y.className = "monthSelect-wrapper", y.appendChild(this.month), this.container.appendChild(y), this.today = document.createElement("button"), this.today.textContent = "Today", this.today.addEventListener("click", function() {
            var v = new Date();
            d.date = new Date(v.getFullYear() + "/" + ("0" + (v.getMonth() + 1)).slice(-2) + "/" + ("0" + v.getDate()).slice(-2)), d.setInput();
          }), this.container.appendChild(this.today);
          var S = document.createElement("table");
          this.daysHead = document.createElement("thead"), this.days = document.createElement("tbody"), this.days.addEventListener("click", function(v) {
            var k = v.target;
            if (!k.hasAttribute("data-day"))
              return !1;
            var E = d.days.querySelector("[data-selected]");
            E && E.removeAttribute("data-selected"), k.setAttribute("data-selected", ""), d.date.setDate(parseInt(k.textContent)), d.setInput();
          }), S.appendChild(this.daysHead), S.appendChild(this.days), this.container.appendChild(S), this.hide(), document.body.appendChild(this.container), this.removeClickOut = function(v) {
            if (d.isOpen) {
              for (var k = v.target, E = k === d.container || k === d.input; !E && (k = k.parentNode); )
                E = k === d.container;
              (v.target.getAttribute("type") !== "date" && !E || !E) && d.hide();
            }
          }, this.removeBlur = function(v) {
            d.isOpen && d.hide();
          };
        }
        return (0, s.default)(f, [{ key: "hide", value: function() {
          this.container.setAttribute("data-open", this.isOpen = !1), this.input && this.input.blur(), document.removeEventListener("mousedown", this.removeClickOut), document.removeEventListener("touchstart", this.removeClickOut);
        } }, { key: "show", value: function() {
          var d = this;
          this.container.setAttribute("data-open", this.isOpen = !0), setTimeout(function() {
            document.addEventListener("mousedown", d.removeClickOut), document.addEventListener("touchstart", d.removeClickOut);
          }, 500), window.onpopstate = function() {
            d.hide();
          };
        } }, { key: "goto", value: function(d) {
          var h = this, y = d.getBoundingClientRect();
          this.container.style.top = y.top + y.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
          var S = this.container.getBoundingClientRect(), v = S.width ? S.width : 280, k = function() {
            return h.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
          }, E = y.right - v;
          y.right < v ? (E = y.left, this.container.className = k() + " polyfill-left-aligned") : this.container.className = k() + " polyfill-right-aligned", this.container.style.left = E + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px", this.show();
        } }, { key: "attachTo", value: function(d) {
          return !(d === this.input && this.isOpen || (this.input = d, this.refreshLocale(), this.sync(), this.goto(this.input), 0));
        } }, { key: "sync", value: function() {
          isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date() : this.date = f.absoluteDate(this.input.valueAsDate), this.year.value = this.date.getFullYear(), this.month.value = this.date.getMonth(), this.refreshDaysMatrix();
        } }, { key: "setInput", value: function() {
          var d = this;
          this.input.valueAsDate = this.date, this.input.focus(), setTimeout(function() {
            d.hide();
          }, 100), this.pingInput();
        } }, { key: "refreshLocale", value: function() {
          if (this.locale === this.input.locale)
            return !1;
          this.locale = this.input.locale, this.today.textContent = this.locale.today || "Today";
          for (var d = ["<tr>"], h = 0, y = this.locale.days.length; h < y; ++h)
            d.push('<th scope="col">' + this.locale.days[h] + "</th>");
          this.daysHead.innerHTML = d.join(""), f.createRangeSelect(this.month, 0, 11, this.locale.months);
        } }, { key: "refreshDaysMatrix", value: function() {
          this.refreshLocale();
          for (var d = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(d, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && d === v.getFullYear() && h === v.getMonth(), E = [], P = 0; P < S + y; ++P)
            if (P % 7 === 0 && E.push(`
          ` + (P !== 0 ? "</tr>" : "") + `
          <tr>
        `), P + 1 <= y)
              E.push("<td></td>");
            else {
              var j = P + 1 - y, C = k && v.getDate() === j;
              E.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + j + `
        </td>`);
            }
          this.days.innerHTML = E.join("");
        } }, { key: "pingInput", value: function() {
          var d = void 0, h = void 0;
          try {
            d = new Event("input"), h = new Event("change");
          } catch {
            d = document.createEvent("KeyboardEvent"), d.initEvent("input", !0, !1), h = document.createEvent("KeyboardEvent"), h.initEvent("change", !0, !1);
          }
          this.input.dispatchEvent(d), this.input.dispatchEvent(h);
        } }], [{ key: "createRangeSelect", value: function(d, h, y, S) {
          d.innerHTML = "";
          for (var v = h; v <= y; ++v) {
            var k = document.createElement("option");
            d.appendChild(k);
            var E = S ? S[v - h] : v;
            k.text = E, k.value = v;
          }
          return d;
        } }, { key: "absoluteDate", value: function(d) {
          return d && new Date(d.getTime() + 60 * d.getTimezoneOffset() * 1e3);
        } }]), f;
      }();
      window.thePicker = new c(), l.default = window.thePicker;
    }, function(e, l, t) {
      e.exports = { default: t(49), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(50), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(51), __esModule: !0 };
    }, function(e, l, t) {
      e.exports = { default: t(52), __esModule: !0 };
    }, function(e, l, t) {
      function o(f) {
        return f && f.__esModule ? f : { default: f };
      }
      l.__esModule = !0;
      var n = t(47), i = o(n), u = t(46), s = o(u), c = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
        return typeof f;
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f;
      };
      l.default = typeof s.default == "function" && c(i.default) === "symbol" ? function(f) {
        return typeof f > "u" ? "undefined" : c(f);
      } : function(f) {
        return f && typeof s.default == "function" && f.constructor === s.default ? "symbol" : typeof f > "u" ? "undefined" : c(f);
      };
    }, function(e, l, t) {
      t(73);
      var o = t(8).Object;
      e.exports = function(n, i) {
        return o.defineProperties(n, i);
      };
    }, function(e, l, t) {
      t(74);
      var o = t(8).Object;
      e.exports = function(n, i, u) {
        return o.defineProperty(n, i, u);
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
      var o = t(5), n = t(70), i = t(69);
      e.exports = function(u) {
        return function(s, c, f) {
          var d, h = o(s), y = n(h.length), S = i(f, y);
          if (u && c != c) {
            for (; y > S; )
              if (d = h[S++], d != d)
                return !0;
          } else
            for (; y > S; S++)
              if ((u || S in h) && h[S] === c)
                return u || S || 0;
          return !u && -1;
        };
      };
    }, function(e, l, t) {
      var o = t(53);
      e.exports = function(n, i, u) {
        if (o(n), i === void 0)
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
            return function(s, c, f) {
              return n.call(i, s, c, f);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(e, l, t) {
      var o = t(13), n = t(37), i = t(20);
      e.exports = function(u) {
        var s = o(u), c = n.f;
        if (c)
          for (var f, d = c(u), h = i.f, y = 0; d.length > y; )
            h.call(u, f = d[y++]) && s.push(f);
        return s;
      };
    }, function(e, l, t) {
      e.exports = t(2).document && document.documentElement;
    }, function(e, l, t) {
      var o = t(30);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
        return o(n) == "String" ? n.split("") : Object(n);
      };
    }, function(e, l, t) {
      var o = t(30);
      e.exports = Array.isArray || function(n) {
        return o(n) == "Array";
      };
    }, function(e, l, t) {
      var o = t(34), n = t(14), i = t(21), u = {};
      t(6)(u, t(7)("iterator"), function() {
        return this;
      }), e.exports = function(s, c, f) {
        s.prototype = o(u, { next: n(1, f) }), i(s, c + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, o) {
        return { value: o, done: !!t };
      };
    }, function(e, l, t) {
      var o = t(13), n = t(5);
      e.exports = function(i, u) {
        for (var s, c = n(i), f = o(c), d = f.length, h = 0; d > h; )
          if (c[s = f[h++]] === u)
            return s;
      };
    }, function(e, l, t) {
      var o = t(15)("meta"), n = t(12), i = t(3), u = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), d = function(k) {
        u(k, o, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, E) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, o)) {
          if (!c(k))
            return "F";
          if (!E)
            return "E";
          d(k);
        }
        return k[o].i;
      }, y = function(k, E) {
        if (!i(k, o)) {
          if (!c(k))
            return !0;
          if (!E)
            return !1;
          d(k);
        }
        return k[o].w;
      }, S = function(k) {
        return f && v.NEED && c(k) && !i(k, o) && d(k), k;
      }, v = e.exports = { KEY: o, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(e, l, t) {
      var o = t(20), n = t(14), i = t(5), u = t(25), s = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? f : function(d, h) {
        if (d = i(d), h = u(h, !0), c)
          try {
            return f(d, h);
          } catch {
          }
        if (s(d, h))
          return n(!o.f.call(d, h), d[h]);
      };
    }, function(e, l, t) {
      var o = t(5), n = t(36).f, i = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(c) {
        try {
          return n(c);
        } catch {
          return u.slice();
        }
      };
      e.exports.f = function(c) {
        return u && i.call(c) == "[object Window]" ? s(c) : n(o(c));
      };
    }, function(e, l, t) {
      var o = t(3), n = t(71), i = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), o(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, l, t) {
      var o = t(24), n = t(16);
      e.exports = function(i) {
        return function(u, s) {
          var c, f, d = String(n(u)), h = o(s), y = d.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (c = d.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (f = d.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? d.charAt(h) : c : i ? d.slice(h, h + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    }, function(e, l, t) {
      var o = t(24), n = Math.max, i = Math.min;
      e.exports = function(u, s) {
        return u = o(u), u < 0 ? n(u + s, 0) : i(u, s);
      };
    }, function(e, l, t) {
      var o = t(24), n = Math.min;
      e.exports = function(i) {
        return i > 0 ? n(o(i), 9007199254740991) : 0;
      };
    }, function(e, l, t) {
      var o = t(16);
      e.exports = function(n) {
        return Object(o(n));
      };
    }, function(e, l, t) {
      var o = t(54), n = t(62), i = t(18), u = t(5);
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = u(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : c == "keys" ? n(0, f) : c == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
      }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
    }, function(e, l, t) {
      var o = t(10);
      o(o.S + o.F * !t(1), "Object", { defineProperties: t(35) });
    }, function(e, l, t) {
      var o = t(10);
      o(o.S + o.F * !t(1), "Object", { defineProperty: t(4).f });
    }, function(e, l) {
    }, function(e, l, t) {
      var o = t(68)(!0);
      t(33)(String, "String", function(n) {
        this._t = String(n), this._i = 0;
      }, function() {
        var n, i = this._t, u = this._i;
        return u >= i.length ? { value: void 0, done: !0 } : (n = o(i, u), this._i += n.length, { value: n, done: !1 });
      });
    }, function(e, l, t) {
      var o = t(2), n = t(3), i = t(1), u = t(10), s = t(39), c = t(64).KEY, f = t(11), d = t(23), h = t(21), y = t(15), S = t(7), v = t(27), k = t(26), E = t(63), P = t(57), j = t(60), C = t(9), N = t(5), g = t(25), _ = t(14), M = t(34), w = t(66), T = t(65), O = t(4), R = t(13), Y = T.f, G = O.f, z = w.f, H = o.Symbol, U = o.JSON, q = U && U.stringify, B = "prototype", I = S("_hidden"), ut = S("toPrimitive"), et = {}.propertyIsEnumerable, it = d("symbol-registry"), nt = d("symbols"), V = d("op-symbols"), F = Object[B], L = typeof H == "function", Q = o.QObject, kt = !Q || !Q[B] || !Q[B].findChild, st = i && f(function() {
        return M(G({}, "a", { get: function() {
          return G(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, J) {
        var $ = Y(F, A);
        $ && delete F[A], G(x, A, J), $ && x !== F && G(F, A, $);
      } : G, Ct = function(x) {
        var A = nt[x] = M(H[B]);
        return A._k = x, A;
      }, D = L && typeof H.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof H;
      }, X = function(x, A, J) {
        return x === F && X(V, A, J), C(x), A = g(A, !0), C(J), n(nt, A) ? (J.enumerable ? (n(x, I) && x[I][A] && (x[I][A] = !1), J = M(J, { enumerable: _(0, !1) })) : (n(x, I) || G(x, I, _(1, {})), x[I][A] = !0), st(x, A, J)) : G(x, A, J);
      }, dt = function(x, A) {
        C(x);
        for (var J, $ = P(A = N(A)), at = 0, ft = $.length; ft > at; )
          X(x, J = $[at++], A[J]);
        return x;
      }, Mt = function(x, A) {
        return A === void 0 ? M(x) : dt(M(x), A);
      }, K = function(x) {
        var A = et.call(this, x = g(x, !0));
        return !(this === F && n(nt, x) && !n(V, x)) && (!(A || !n(this, x) || !n(nt, x) || n(this, I) && this[I][x]) || A);
      }, ht = function(x, A) {
        if (x = N(x), A = g(A, !0), x !== F || !n(nt, A) || n(V, A)) {
          var J = Y(x, A);
          return !J || !n(nt, A) || n(x, I) && x[I][A] || (J.enumerable = !0), J;
        }
      }, vt = function(x) {
        for (var A, J = z(N(x)), $ = [], at = 0; J.length > at; )
          n(nt, A = J[at++]) || A == I || A == c || $.push(A);
        return $;
      }, wt = function(x) {
        for (var A, J = x === F, $ = z(J ? V : N(x)), at = [], ft = 0; $.length > ft; )
          !n(nt, A = $[ft++]) || J && !n(F, A) || at.push(nt[A]);
        return at;
      };
      L || (H = function() {
        if (this instanceof H)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(J) {
          this === F && A.call(V, J), n(this, I) && n(this[I], x) && (this[I][x] = !1), st(this, x, _(1, J));
        };
        return i && kt && st(F, x, { configurable: !0, set: A }), Ct(x);
      }, s(H[B], "toString", function() {
        return this._k;
      }), T.f = ht, O.f = X, t(36).f = w.f = vt, t(20).f = K, t(37).f = wt, i && !t(19) && s(F, "propertyIsEnumerable", K, !0), v.f = function(x) {
        return Ct(S(x));
      }), u(u.G + u.W + u.F * !L, { Symbol: H });
      for (var mt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), _t = 0; mt.length > _t; )
        S(mt[_t++]);
      for (var mt = R(S.store), _t = 0; mt.length > _t; )
        k(mt[_t++]);
      u(u.S + u.F * !L, "Symbol", { for: function(x) {
        return n(it, x += "") ? it[x] : it[x] = H(x);
      }, keyFor: function(x) {
        if (D(x))
          return E(it, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        kt = !0;
      }, useSimple: function() {
        kt = !1;
      } }), u(u.S + u.F * !L, "Object", { create: Mt, defineProperty: X, defineProperties: dt, getOwnPropertyDescriptor: ht, getOwnPropertyNames: vt, getOwnPropertySymbols: wt }), U && u(u.S + u.F * (!L || f(function() {
        var x = H();
        return q([x]) != "[null]" || q({ a: x }) != "{}" || q(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !D(x)) {
          for (var A, J, $ = [x], at = 1; arguments.length > at; )
            $.push(arguments[at++]);
          return A = $[1], typeof A == "function" && (J = A), !J && j(A) || (A = function(ft, bt) {
            if (J && (bt = J.call(this, ft, bt)), !D(bt))
              return bt;
          }), $[1] = A, q.apply(U, $);
        }
      } }), H[B][ut] || t(6)(H[B], ut, H[B].valueOf), h(H, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var o = t(2), n = t(6), i = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = s[c], d = o[f], h = d && d.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
      }
    }, function(e, l, t) {
      l = e.exports = t(82)(), l.push([e.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}", ""]);
    }, function(e, l) {
      e.exports = function() {
        var t = [];
        return t.toString = function() {
          for (var o = [], n = 0; n < this.length; n++) {
            var i = this[n];
            i[2] ? o.push("@media " + i[2] + "{" + i[1] + "}") : o.push(i[1]);
          }
          return o.join("");
        }, t.i = function(o, n) {
          typeof o == "string" && (o = [[null, o, ""]]);
          for (var i = {}, u = 0; u < this.length; u++) {
            var s = this[u][0];
            typeof s == "number" && (i[s] = !0);
          }
          for (u = 0; u < o.length; u++) {
            var c = o[u];
            typeof c[0] == "number" && i[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, l, t) {
      function o(g, _) {
        for (var M = 0; M < g.length; M++) {
          var w = g[M], T = S[w.id];
          if (T) {
            T.refs++;
            for (var O = 0; O < T.parts.length; O++)
              T.parts[O](w.parts[O]);
            for (; O < w.parts.length; O++)
              T.parts.push(f(w.parts[O], _));
          } else {
            for (var R = [], O = 0; O < w.parts.length; O++)
              R.push(f(w.parts[O], _));
            S[w.id] = { id: w.id, refs: 1, parts: R };
          }
        }
      }
      function n(g) {
        for (var _ = [], M = {}, w = 0; w < g.length; w++) {
          var T = g[w], O = T[0], R = T[1], Y = T[2], G = T[3], z = { css: R, media: Y, sourceMap: G };
          M[O] ? M[O].parts.push(z) : _.push(M[O] = { id: O, parts: [z] });
        }
        return _;
      }
      function i(g, _) {
        var M = E(), w = C[C.length - 1];
        if (g.insertAt === "top")
          w ? w.nextSibling ? M.insertBefore(_, w.nextSibling) : M.appendChild(_) : M.insertBefore(_, M.firstChild), C.push(_);
        else {
          if (g.insertAt !== "bottom")
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          M.appendChild(_);
        }
      }
      function u(g) {
        g.parentNode.removeChild(g);
        var _ = C.indexOf(g);
        _ >= 0 && C.splice(_, 1);
      }
      function s(g) {
        var _ = document.createElement("style");
        return _.type = "text/css", i(g, _), _;
      }
      function c(g) {
        var _ = document.createElement("link");
        return _.rel = "stylesheet", i(g, _), _;
      }
      function f(g, _) {
        var M, w, T;
        if (_.singleton) {
          var O = j++;
          M = P || (P = s(_)), w = d.bind(null, M, O, !1), T = d.bind(null, M, O, !0);
        } else
          g.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (M = c(_), w = y.bind(null, M), T = function() {
            u(M), M.href && URL.revokeObjectURL(M.href);
          }) : (M = s(_), w = h.bind(null, M), T = function() {
            u(M);
          });
        return w(g), function(R) {
          if (R) {
            if (R.css === g.css && R.media === g.media && R.sourceMap === g.sourceMap)
              return;
            w(g = R);
          } else
            T();
        };
      }
      function d(g, _, M, w) {
        var T = M ? "" : w.css;
        if (g.styleSheet)
          g.styleSheet.cssText = N(_, T);
        else {
          var O = document.createTextNode(T), R = g.childNodes;
          R[_] && g.removeChild(R[_]), R.length ? g.insertBefore(O, R[_]) : g.appendChild(O);
        }
      }
      function h(g, _) {
        var M = _.css, w = _.media;
        if (w && g.setAttribute("media", w), g.styleSheet)
          g.styleSheet.cssText = M;
        else {
          for (; g.firstChild; )
            g.removeChild(g.firstChild);
          g.appendChild(document.createTextNode(M));
        }
      }
      function y(g, _) {
        var M = _.css, w = _.sourceMap;
        w && (M += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(w)))) + " */");
        var T = new Blob([M], { type: "text/css" }), O = g.href;
        g.href = URL.createObjectURL(T), O && URL.revokeObjectURL(O);
      }
      var S = {}, v = function(g) {
        var _;
        return function() {
          return typeof _ > "u" && (_ = g.apply(this, arguments)), _;
        };
      }, k = v(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), E = v(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), P = null, j = 0, C = [];
      e.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = k()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = n(g);
        return o(M, _), function(w) {
          for (var T = [], O = 0; O < M.length; O++) {
            var R = M[O], Y = S[R.id];
            Y.refs--, T.push(Y);
          }
          if (w) {
            var G = n(w);
            o(G, _);
          }
          for (var O = 0; O < T.length; O++) {
            var Y = T[O];
            if (Y.refs === 0) {
              for (var z = 0; z < Y.parts.length; z++)
                Y.parts[z]();
              delete S[Y.id];
            }
          }
        };
      };
      var N = function() {
        var g = [];
        return function(_, M) {
          return g[_] = M, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, l, t) {
      var o = t(81);
      typeof o == "string" && (o = [[e.id, o, ""]]), t(83)(o, {}), o.locals && (e.exports = o.locals);
    }]);
  });
})(Ce);
function Se(a) {
  let r, e, l;
  function t(i, u) {
    return (
      /*isIdle*/
      i[9] || /*isFetching*/
      i[11] ? Te : (
        /*backendData*/
        i[8] ? Ae : (
          /*error*/
          i[10] ? Ee : Oe
        )
      )
    );
  }
  let o = t(a), n = o(a);
  return {
    c() {
      r = b("div"), n.c(), m(r, "class", e = `p-12 shadow-${/*shadow*/
      a[3]}`), m(r, "style", l = `
        background-color: ${/*background*/
      a[13]};
        border-radius: ${/*border_radius*/
      a[2]};
        color: ${/*text_color*/
      a[6]};
        opacity: ${/*opacity*/
      a[4]}%!important;
        height: ${/*height*/
      a[0]};
        width: ${/*width*/
      a[1]};
`);
    },
    m(i, u) {
      lt(i, r, u), n.m(r, null);
    },
    p(i, u) {
      o === (o = t(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(r, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(r, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && l !== (l = `
        background-color: ${/*background*/
      i[13]};
        border-radius: ${/*border_radius*/
      i[2]};
        color: ${/*text_color*/
      i[6]};
        opacity: ${/*opacity*/
      i[4]}%!important;
        height: ${/*height*/
      i[0]};
        width: ${/*width*/
      i[1]};
`) && m(r, "style", l);
    },
    d(i) {
      i && rt(r), n.d();
    }
  };
}
function De(a) {
  let r, e, l, t, o, n;
  function i(c, f) {
    return (
      /*statusCheckError*/
      c[12] === Le ? Pe : Re
    );
  }
  let u = i(a), s = u(a);
  return {
    c() {
      r = b("div"), e = b("div"), l = b("h1"), l.textContent = "An error occured", t = W(), s.c(), m(l, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(r, "class", o = `p-4 shadow-${/*shadow*/
      a[3]}`), m(r, "style", n = `
        background-color: ${/*background*/
      a[13]};
        border-radius: ${/*border_radius*/
      a[2]};
        color: ${/*text_color*/
      a[6]};
        opacity: ${/*opacity*/
      a[4]}%!important;
        height: ${/*height*/
      a[0]};
        width: ${/*width*/
      a[1]};
`);
    },
    m(c, f) {
      lt(c, r, f), p(r, e), p(e, l), p(e, t), s.m(e, null);
    },
    p(c, f) {
      u === (u = i(c)) && s ? s.p(c, f) : (s.d(1), s = u(c), s && (s.c(), s.m(e, null))), f[0] & /*shadow*/
      8 && o !== (o = `p-4 shadow-${/*shadow*/
      c[3]}`) && m(r, "class", o), f[0] & /*background, border_radius, text_color, opacity, height, width*/
      8279 && n !== (n = `
        background-color: ${/*background*/
      c[13]};
        border-radius: ${/*border_radius*/
      c[2]};
        color: ${/*text_color*/
      c[6]};
        opacity: ${/*opacity*/
      c[4]}%!important;
        height: ${/*height*/
      c[0]};
        width: ${/*width*/
      c[1]};
`) && m(r, "style", n);
    },
    d(c) {
      c && rt(r), s.d();
    }
  };
}
function Oe(a) {
  let r, e, l, t, o, n, i;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "An unknown error", l = W(), t = b("button"), o = Z("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), xt(
        t,
        "background-color",
        /*button_color*/
        a[7]
      ), xt(
        t,
        "color",
        /*text_color*/
        a[6]
      ), m(r, "class", "flex flex-col items-center");
    },
    m(u, s) {
      lt(u, r, s), p(r, e), p(r, l), p(r, t), p(t, o), n || (i = Jt(
        t,
        "click",
        /*click_handler_2*/
        a[40]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      128 && xt(
        t,
        "background-color",
        /*button_color*/
        u[7]
      ), s[0] & /*text_color*/
      64 && xt(
        t,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && rt(r), n = !1, i();
    }
  };
}
function Ee(a) {
  let r, e, l, t, o, n, i, u, s, c, f;
  return {
    c() {
      r = b("div"), e = b("h1"), e.textContent = "Error", l = W(), t = b("p"), o = Z(
        /*error*/
        a[10]
      ), n = W(), i = b("div"), u = b("button"), s = Z("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        a[14]
      ), m(i, "class", "w-full mt-auto"), m(r, "class", "flex flex-col items-center h-full");
    },
    m(d, h) {
      lt(d, r, h), p(r, e), p(r, l), p(r, t), p(t, o), p(r, n), p(r, i), p(i, u), p(u, s), c || (f = Jt(
        u,
        "click",
        /*click_handler_1*/
        a[39]
      ), c = !0);
    },
    p(d, h) {
      h[0] & /*error*/
      1024 && yt(
        o,
        /*error*/
        d[10]
      ), h[0] & /*button_style*/
      16384 && m(
        u,
        "style",
        /*button_style*/
        d[14]
      );
    },
    d(d) {
      d && rt(r), c = !1, f();
    }
  };
}
function Ae(a) {
  let r, e, l, t, o, n, i = (
    /*backendData*/
    a[8].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, c, f, d, h = (
    /*backendData*/
    a[8].data[0].third_party_spread + ""
  ), y, S, v, k, E, P = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), j, C, N = (
    /*backendData*/
    a[8].data[0].third_party_profit + ""
  ), g, _, M, w, T, O, R, Y, G, z = (
    /*backendData*/
    a[8].data[0].integritas_rate.toFixed(4) + ""
  ), H, U, q, B, I, ut, et, it, nt, V = (
    /*shouldShowInterbankRate*/
    a[17] && ne(a)
  ), F = (
    /*backendData*/
    a[8].data[0].integritas_savings > 50 && oe(a)
  );
  return {
    c() {
      r = b("div"), e = b("div"), l = b("h1"), l.textContent = "Your Provider", t = W(), o = b("p"), n = Z(`Your exchange rate
                        was `), u = Z(i), s = W(), V && V.c(), c = W(), f = b("p"), d = Z("Your provider's markup was "), y = Z(h), S = Z("%"), v = W(), k = b("p"), E = Z(`Your provider
                        charged `), j = Z(P), C = W(), g = Z(N), _ = Z(` on
                        this trade`), M = W(), w = b("div"), T = b("h1"), O = Z(
        /*name*/
        a[5]
      ), R = W(), Y = b("p"), G = Z("Our exchange rate was "), H = Z(z), U = W(), F && F.c(), q = W(), B = b("div"), I = b("button"), ut = Z("Calculate again"), m(l, "class", "text-2xl"), m(o, "class", "text-sm"), m(f, "class", "text-sm"), m(k, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(T, "class", "text-2xl mt-4"), m(Y, "class", "text-sm"), m(w, "class", "flex flex-col gap-2"), m(r, "class", "flex flex-col divide-y gap-4"), xt(r, "height", "95%"), m(I, "class", "px-6 py-3"), m(I, "style", et = `${/*button_style*/
      a[14]} margin-bottom: 1.5rem;`), m(B, "class", "w-full");
    },
    m(L, Q) {
      lt(L, r, Q), p(r, e), p(e, l), p(e, t), p(e, o), p(o, n), p(o, u), p(e, s), V && V.m(e, null), p(e, c), p(e, f), p(f, d), p(f, y), p(f, S), p(e, v), p(e, k), p(k, E), p(k, j), p(k, C), p(k, g), p(k, _), p(r, M), p(r, w), p(w, T), p(T, O), p(w, R), p(w, Y), p(Y, G), p(Y, H), p(w, U), F && F.m(w, null), lt(L, q, Q), lt(L, B, Q), p(B, I), p(I, ut), it || (nt = Jt(
        I,
        "click",
        /*click_handler*/
        a[38]
      ), it = !0);
    },
    p(L, Q) {
      Q[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      L[8].data[0].third_party_exchange_rate.toFixed(4) + "") && yt(u, i), /*shouldShowInterbankRate*/
      L[17] ? V ? V.p(L, Q) : (V = ne(L), V.c(), V.m(e, c)) : V && (V.d(1), V = null), Q[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      L[8].data[0].third_party_spread + "") && yt(y, h), Q[0] & /*backendData*/
      256 && P !== (P = /*backendData*/
      L[8].data[0].sold_ccy + "") && yt(j, P), Q[0] & /*backendData*/
      256 && N !== (N = /*backendData*/
      L[8].data[0].third_party_profit + "") && yt(g, N), Q[0] & /*name*/
      32 && yt(
        O,
        /*name*/
        L[5]
      ), Q[0] & /*backendData*/
      256 && z !== (z = /*backendData*/
      L[8].data[0].integritas_rate.toFixed(4) + "") && yt(H, z), /*backendData*/
      L[8].data[0].integritas_savings > 50 ? F ? F.p(L, Q) : (F = oe(L), F.c(), F.m(w, null)) : F && (F.d(1), F = null), Q[0] & /*button_style*/
      16384 && et !== (et = `${/*button_style*/
      L[14]} margin-bottom: 1.5rem;`) && m(I, "style", et);
    },
    d(L) {
      L && rt(r), V && V.d(), F && F.d(), L && rt(q), L && rt(B), it = !1, nt();
    }
  };
}
function Te(a) {
  let r, e, l, t, o, n, i, u, s, c, f, d, h, y, S, v, k, E, P, j, C, N, g, _, M, w, T, O, R, Y, G, z, H, U, q, B, I, ut, et, it, nt, V, F, L, Q, kt, st, Ct, D, X, dt, Mt, K, ht, vt, wt, mt, _t, x, A, J, $, at, ft, bt, Dt, Ot, Et, At, Tt, qt, Ut, Lt, It, Vt, ct = (
    /*shouldShowEmail*/
    a[16] && re(a)
  );
  function Qt(ot, pt) {
    return (
      /*isFetching*/
      ot[11] ? je : Ne
    );
  }
  let Yt = Qt(a), gt = Yt(a);
  return {
    c() {
      r = b("form"), e = b("div"), l = b("div"), t = b("div"), o = b("label"), o.textContent = "Select Date", n = W(), i = b("input"), u = W(), s = b("div"), c = b("label"), c.textContent = "Select Time", f = W(), d = b("input"), h = W(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = W(), E = b("input"), P = W(), j = b("div"), C = b("label"), N = Z("Sell Currency"), g = W(), _ = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", O = b("option"), O.textContent = "JPY", R = b("option"), R.textContent = "CHF", Y = b("option"), Y.textContent = "CNY", G = b("option"), G.textContent = "NZD", z = b("option"), z.textContent = "SGD", H = b("option"), H.textContent = "INR", U = b("option"), U.textContent = "AUD", q = b("option"), q.textContent = "CAD", B = b("option"), B.textContent = "HKD", I = b("option"), I.textContent = "MYR", ut = b("option"), ut.textContent = "NOK", et = b("option"), et.textContent = "ZAR", it = b("option"), it.textContent = "RUB", nt = b("option"), nt.textContent = "SEK", V = W(), F = b("div"), L = b("div"), Q = b("label"), Q.textContent = "Buy Amount", kt = W(), st = b("input"), Ct = W(), D = b("div"), X = b("label"), dt = Z("Buy Currency"), Mt = W(), K = b("select"), ht = b("option"), ht.textContent = "USD", vt = b("option"), vt.textContent = "GBP", wt = b("option"), wt.textContent = "EUR", mt = b("option"), mt.textContent = "JPY", _t = b("option"), _t.textContent = "CHF", x = b("option"), x.textContent = "CNY", A = b("option"), A.textContent = "NZD", J = b("option"), J.textContent = "SGD", $ = b("option"), $.textContent = "INR", at = b("option"), at.textContent = "AUD", ft = b("option"), ft.textContent = "CAD", bt = b("option"), bt.textContent = "HKD", Dt = b("option"), Dt.textContent = "MYR", Ot = b("option"), Ot.textContent = "NOK", Et = b("option"), Et.textContent = "ZAR", At = b("option"), At.textContent = "RUB", Tt = b("option"), Tt.textContent = "SEK", qt = W(), ct && ct.c(), Ut = W(), Lt = b("div"), gt.c(), m(o, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
        i,
        "style",
        /*input_style*/
        a[15]
      ), m(t, "class", "w-full"), m(c, "for", "time"), m(d, "id", "time"), m(d, "type", "time"), m(d, "class", "w-full rounded-md px-3 py-2 mt-4"), m(d, "name", "time"), m(d, "placeholder", "Select Time"), d.required = !0, m(
        d,
        "style",
        /*input_style*/
        a[15]
      ), m(s, "class", "w-full"), m(l, "class", "flex flex-col sm:flex-row sm:justify-around sm:gap-12"), m(v, "for", "sold_notional"), m(E, "id", "sold_notional"), m(E, "type", "number"), m(E, "step", ".01"), m(E, "class", "w-full rounded-md px-3 py-2 mt-4"), m(E, "name", "sold_notional"), m(E, "placeholder", "10000"), E.required = !0, m(
        E,
        "style",
        /*input_style*/
        a[15]
      ), m(S, "class", "w-full"), m(C, "for", "sold_ccy"), xt(
        C,
        "color",
        /*text_color*/
        a[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, R.__value = "CHF", R.value = R.__value, Y.__value = "CNY", Y.value = Y.__value, G.__value = "NZD", G.value = G.__value, z.__value = "SGD", z.value = z.__value, H.__value = "INR", H.value = H.__value, U.__value = "AUD", U.value = U.__value, q.__value = "CAD", q.value = q.__value, B.__value = "HKD", B.value = B.__value, I.__value = "MYR", I.value = I.__value, ut.__value = "NOK", ut.value = ut.__value, et.__value = "ZAR", et.value = et.__value, it.__value = "RUB", it.value = it.__value, nt.__value = "SEK", nt.value = nt.__value, m(_, "name", "sold_ccy"), m(_, "id", "sold_ccy"), m(_, "class", "w-full rounded-md px-3 py-2 mt-4"), _.required = !0, m(
        _,
        "style",
        /*input_style*/
        a[15]
      ), m(j, "class", "w-full"), m(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(Q, "for", "bought_notional"), m(st, "id", "bought_notional"), m(st, "type", "number"), m(st, "step", ".01"), m(st, "class", "w-full rounded-md px-3 py-2 mt-4"), m(st, "name", "bought_notional"), m(st, "placeholder", "10000"), st.required = !0, m(
        st,
        "style",
        /*input_style*/
        a[15]
      ), m(L, "class", "w-full"), m(X, "for", "bought_ccy"), xt(
        X,
        "color",
        /*text_color*/
        a[6]
      ), ht.selected = !0, ht.__value = "USD", ht.value = ht.__value, vt.__value = "GBP", vt.value = vt.__value, wt.__value = "EUR", wt.value = wt.__value, mt.__value = "JPY", mt.value = mt.__value, _t.__value = "CHF", _t.value = _t.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, J.__value = "SGD", J.value = J.__value, $.__value = "INR", $.value = $.__value, at.__value = "AUD", at.value = at.__value, ft.__value = "CAD", ft.value = ft.__value, bt.__value = "HKD", bt.value = bt.__value, Dt.__value = "MYR", Dt.value = Dt.__value, Ot.__value = "NOK", Ot.value = Ot.__value, Et.__value = "ZAR", Et.value = Et.__value, At.__value = "RUB", At.value = At.__value, Tt.__value = "SEK", Tt.value = Tt.__value, m(K, "name", "bought_ccy"), m(K, "id", "bought_ccy"), m(K, "class", "w-full rounded-md px-3 py-2 mt-4"), K.required = !0, m(
        K,
        "style",
        /*input_style*/
        a[15]
      ), m(D, "class", "w-full"), m(F, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m(ot, pt) {
      lt(ot, r, pt), p(r, e), p(e, l), p(l, t), p(t, o), p(t, n), p(t, i), p(l, u), p(l, s), p(s, c), p(s, f), p(s, d), p(e, h), p(e, y), p(y, S), p(S, v), p(S, k), p(S, E), p(y, P), p(y, j), p(j, C), p(C, N), p(j, g), p(j, _), p(_, M), p(_, w), p(_, T), p(_, O), p(_, R), p(_, Y), p(_, G), p(_, z), p(_, H), p(_, U), p(_, q), p(_, B), p(_, I), p(_, ut), p(_, et), p(_, it), p(_, nt), p(e, V), p(e, F), p(F, L), p(L, Q), p(L, kt), p(L, st), p(F, Ct), p(F, D), p(D, X), p(X, dt), p(D, Mt), p(D, K), p(K, ht), p(K, vt), p(K, wt), p(K, mt), p(K, _t), p(K, x), p(K, A), p(K, J), p(K, $), p(K, at), p(K, ft), p(K, bt), p(K, Dt), p(K, Ot), p(K, Et), p(K, At), p(K, Tt), p(e, qt), ct && ct.m(e, null), p(e, Ut), p(e, Lt), gt.m(Lt, null), It || (Vt = Jt(
        r,
        "submit",
        /*handleFormSubmit*/
        a[19]
      ), It = !0);
    },
    p(ot, pt) {
      pt[0] & /*input_style*/
      32768 && m(
        i,
        "style",
        /*input_style*/
        ot[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        d,
        "style",
        /*input_style*/
        ot[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        E,
        "style",
        /*input_style*/
        ot[15]
      ), pt[0] & /*text_color*/
      64 && xt(
        C,
        "color",
        /*text_color*/
        ot[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        _,
        "style",
        /*input_style*/
        ot[15]
      ), pt[0] & /*input_style*/
      32768 && m(
        st,
        "style",
        /*input_style*/
        ot[15]
      ), pt[0] & /*text_color*/
      64 && xt(
        X,
        "color",
        /*text_color*/
        ot[6]
      ), pt[0] & /*input_style*/
      32768 && m(
        K,
        "style",
        /*input_style*/
        ot[15]
      ), /*shouldShowEmail*/
      ot[16] ? ct ? ct.p(ot, pt) : (ct = re(ot), ct.c(), ct.m(e, Ut)) : ct && (ct.d(1), ct = null), Yt === (Yt = Qt(ot)) && gt ? gt.p(ot, pt) : (gt.d(1), gt = Yt(ot), gt && (gt.c(), gt.m(Lt, null)));
    },
    d(ot) {
      ot && rt(r), ct && ct.d(), gt.d(), It = !1, Vt();
    }
  };
}
function ne(a) {
  let r, e, l = (
    /*backendData*/
    a[8].data[0].ccy_pair + ""
  ), t, o, n = (
    /*backendData*/
    a[8].data[0].mid_market_rate.toFixed(4) + ""
  ), i;
  return {
    c() {
      r = b("p"), e = Z("The interbank rate "), t = Z(l), o = Z(`
                            was `), i = Z(n), m(r, "class", "text-sm");
    },
    m(u, s) {
      lt(u, r, s), p(r, e), p(r, t), p(r, o), p(r, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].ccy_pair + "") && yt(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].mid_market_rate.toFixed(4) + "") && yt(i, n);
    },
    d(u) {
      u && rt(r);
    }
  };
}
function oe(a) {
  let r, e, l = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), t, o, n = (
    /*backendData*/
    a[8].data[0].integritas_savings.toFixed(4) + ""
  ), i;
  return {
    c() {
      r = b("p"), e = Z(`We would've saved
                            you `), t = Z(l), o = W(), i = Z(n), m(r, "class", "text-sm");
    },
    m(u, s) {
      lt(u, r, s), p(r, e), p(r, t), p(r, o), p(r, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].sold_ccy + "") && yt(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].integritas_savings.toFixed(4) + "") && yt(i, n);
    },
    d(u) {
      u && rt(r);
    }
  };
}
function re(a) {
  let r, e, l, t, o;
  return {
    c() {
      r = b("div"), e = b("div"), l = b("label"), l.textContent = "Email", t = W(), o = b("input"), m(l, "for", "user"), m(o, "id", "user"), m(o, "type", "email"), m(o, "class", "w-full rounded-md px-3 py-2 mt-4"), m(o, "name", "user"), m(o, "placeholder", "JohnDoe@email.com"), o.required = !0, m(
        o,
        "style",
        /*input_style*/
        a[15]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, i) {
      lt(n, r, i), p(r, e), p(e, l), p(e, t), p(e, o);
    },
    p(n, i) {
      i[0] & /*input_style*/
      32768 && m(
        o,
        "style",
        /*input_style*/
        n[15]
      );
    },
    d(n) {
      n && rt(r);
    }
  };
}
function je(a) {
  let r, e, l, t, o, n, i;
  return {
    c() {
      r = b("div"), e = b("div"), l = b("button"), t = zt("svg"), o = zt("path"), n = zt("path"), i = Z(`
                                        Loading...`), m(o, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(o, "fill", "#E5E7EB"), m(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(n, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), l.disabled = !0, m(l, "type", "button"), m(l, "class", "px-6 py-3 mt-6 text-center inline-flex items-center justify-center"), m(
        l,
        "style",
        /*button_style*/
        a[14]
      ), m(e, "class", "w-full"), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      lt(u, r, s), p(r, e), p(e, l), p(l, t), p(t, o), p(t, n), p(l, i);
    },
    p(u, s) {
      s[0] & /*button_style*/
      16384 && m(
        l,
        "style",
        /*button_style*/
        u[14]
      );
    },
    d(u) {
      u && rt(r);
    }
  };
}
function Ne(a) {
  let r, e, l, t;
  return {
    c() {
      r = b("div"), e = b("button"), l = Z("See your charges"), m(e, "type", "submit"), m(e, "class", "px-6 py-3 mt-6"), m(
        e,
        "style",
        /*button_style*/
        a[14]
      ), m(r, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full items-center justify-center"), m(r, "style", t = (!/*shouldShowEmail*/
      a[16] && "height: 10rem") + ";");
    },
    m(o, n) {
      lt(o, r, n), p(r, e), p(e, l);
    },
    p(o, n) {
      n[0] & /*button_style*/
      16384 && m(
        e,
        "style",
        /*button_style*/
        o[14]
      ), n[0] & /*shouldShowEmail*/
      65536 && t !== (t = (!/*shouldShowEmail*/
      o[16] && "height: 10rem") + ";") && m(r, "style", t);
    },
    d(o) {
      o && rt(r);
    }
  };
}
function Re(a) {
  let r, e;
  return {
    c() {
      r = b("p"), e = Z(
        /*statusCheckError*/
        a[12]
      ), m(r, "class", "text-sm");
    },
    m(l, t) {
      lt(l, r, t), p(r, e);
    },
    p(l, t) {
      t[0] & /*statusCheckError*/
      4096 && yt(
        e,
        /*statusCheckError*/
        l[12]
      );
    },
    d(l) {
      l && rt(r);
    }
  };
}
function Pe(a) {
  let r;
  return {
    c() {
      r = b("div"), r.innerHTML = `<p class="text-sm">You are not subscribed to Spreadm8, please <a href="https://www.spreadm8.com/" target="_blank" rel="noreferrer" style="text-decoration: underline">click
                        here</a> to activate your widget.</p>`;
    },
    m(e, l) {
      lt(e, r, l);
    },
    p: St,
    d(e) {
      e && rt(r);
    }
  };
}
function Fe(a) {
  let r, e, l;
  function t(i, u) {
    return (
      /*statusCheckError*/
      i[12] ? De : Se
    );
  }
  let o = t(a), n = o(a);
  return {
    c() {
      r = b("link"), e = W(), n.c(), l = de(), this.c = St, m(r, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(r, "rel", "stylesheet");
    },
    m(i, u) {
      p(document.head, r), lt(i, e, u), n.m(i, u), lt(i, l, u);
    },
    p(i, u) {
      o === (o = t(i)) && n ? n.p(i, u) : (n.d(1), n = o(i), n && (n.c(), n.m(l.parentNode, l)));
    },
    i: St,
    o: St,
    d(i) {
      rt(r), i && rt(e), n.d(i), i && rt(l);
    }
  };
}
const ie = "http://localhost:8000", Le = "CORS_ERROR";
function Ye(a) {
  return a === "dark" ? !0 : a === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function He(a, r, e) {
  let l, t, o, n, i, u, { mode: s = "auto" } = r, { height: c = "100%" } = r, { width: f = "100%" } = r, { light_mode_background: d = "#ffffff" } = r, { dark_mode_background: h = "#1f2937" } = r, { light_mode_text_color: y = "#1f2937" } = r, { dark_mode_text_color: S = "#f9fafb" } = r, { dark_mode_input_background: v = "#374151" } = r, { light_mode_input_background: k = "#f9fafb" } = r, { dark_mode_button_color: E = "#374151" } = r, { light_mode_button_color: P = "#f9fafb" } = r, { light_mode_border_color: j = "#D1D5DB" } = r, { dark_mode_border_color: C = "#374151" } = r, { border_radius: N = "15px" } = r, { input_border_radius: g = "5" } = r, { shadow: _ = "md" } = r, { opacity: M = 100 } = r, { name: w = "Our Results" } = r, { show_interbank_rate: T = "false" } = r, { show_email_input: O = "true" } = r, { spread: R = 0 } = r;
  async function Y() {
    const D = "CORS_ERROR";
    try {
      const X = await fetch(`${ie}/`);
      if (!X.ok)
        throw X.status === 403 ? new Error(D) : new Error("We're sorry, our servers are currently down. Please try again later.");
    } catch (X) {
      X.message === D ? e(12, B = D) : e(12, B = X.message);
    }
  }
  const G = async (D) => fetch(`${ie}/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  pe(() => {
    Y();
  });
  let z, H = !0, U, q = !1, B;
  const I = () => {
    e(8, z = void 0), e(9, H = !0), e(10, U = !1), e(11, q = !1);
  }, ut = async (D) => {
    e(9, H = !1), e(11, q = !0), e(10, U = void 0);
    try {
      const X = await G(D);
      if (!X.ok) {
        const Mt = await X.json();
        throw new Error(Mt || `HTTP error! Status: ${X.status}`);
      }
      const dt = await X.json();
      e(11, q = !1), e(10, U = void 0), e(9, H = !1), e(8, z = dt);
    } catch (X) {
      e(11, q = !1), e(10, U = X.message), e(9, H = !1), e(8, z = void 0);
    }
  }, et = async (D) => {
    D.preventDefault();
    const X = new FormData(D.target), dt = {};
    for (let Mt of X) {
      const [K, ht] = Mt;
      dt[K] = ht;
    }
    dt.prospect = "", dt.input_spread = R.toString(), dt.prospect_annual_flow = "", dt.email_user = !1, l || (dt.user = "testUserWithoutMail@gmail.com"), ut(dt);
  }, it = (D) => {
    e(37, o = D.matches);
  }, nt = window.matchMedia("(prefers-color-scheme: dark)");
  nt.addEventListener("change", it), he(() => {
    nt.removeEventListener("change", it);
  });
  let V, F, L, Q;
  const kt = () => I(), st = (D) => I(), Ct = (D) => I();
  return a.$$set = (D) => {
    "mode" in D && e(20, s = D.mode), "height" in D && e(0, c = D.height), "width" in D && e(1, f = D.width), "light_mode_background" in D && e(21, d = D.light_mode_background), "dark_mode_background" in D && e(22, h = D.dark_mode_background), "light_mode_text_color" in D && e(23, y = D.light_mode_text_color), "dark_mode_text_color" in D && e(24, S = D.dark_mode_text_color), "dark_mode_input_background" in D && e(25, v = D.dark_mode_input_background), "light_mode_input_background" in D && e(26, k = D.light_mode_input_background), "dark_mode_button_color" in D && e(27, E = D.dark_mode_button_color), "light_mode_button_color" in D && e(28, P = D.light_mode_button_color), "light_mode_border_color" in D && e(29, j = D.light_mode_border_color), "dark_mode_border_color" in D && e(30, C = D.dark_mode_border_color), "border_radius" in D && e(2, N = D.border_radius), "input_border_radius" in D && e(31, g = D.input_border_radius), "shadow" in D && e(3, _ = D.shadow), "opacity" in D && e(4, M = D.opacity), "name" in D && e(5, w = D.name), "show_interbank_rate" in D && e(32, T = D.show_interbank_rate), "show_email_input" in D && e(33, O = D.show_email_input), "spread" in D && e(34, R = D.spread);
  }, a.$$.update = () => {
    a.$$.dirty[1] & /*show_email_input*/
    4 && e(16, l = O === "true"), a.$$.dirty[1] & /*show_interbank_rate*/
    2 && e(17, t = T === "true"), a.$$.dirty[0] & /*mode*/
    1048576 && e(37, o = Ye(s)), a.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | a.$$.dirty[1] & /*isDarkMode*/
    64 && e(13, V = o ? h : d), a.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | a.$$.dirty[1] & /*isDarkMode*/
    64 && e(6, F = o ? S : y), a.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | a.$$.dirty[1] & /*isDarkMode*/
    64 && e(35, L = o ? v : k), a.$$.dirty[0] & /*dark_mode_border_color, light_mode_border_color*/
    1610612736 | a.$$.dirty[1] & /*isDarkMode*/
    64 && e(36, n = o ? C : j), a.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | a.$$.dirty[1] & /*isDarkMode*/
    64 && e(7, Q = o ? E : P), a.$$.dirty[0] & /*text_color*/
    64 | a.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    49 && e(15, i = `
    background-color: ${L};
    color: ${F};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${g}px;
    `), a.$$.dirty[0] & /*button_color, text_color*/
    192 | a.$$.dirty[1] & /*input_border_color, input_border_radius*/
    33 && e(14, u = `
    width: 100%;
    background-color: ${Q};
    color: ${F};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${g}px;
    `);
  }, [
    c,
    f,
    N,
    _,
    M,
    w,
    F,
    Q,
    z,
    H,
    U,
    q,
    B,
    V,
    u,
    i,
    l,
    t,
    I,
    et,
    s,
    d,
    h,
    y,
    S,
    v,
    k,
    E,
    P,
    j,
    C,
    g,
    T,
    O,
    R,
    L,
    n,
    o,
    kt,
    st,
    Ct
  ];
}
class Je extends le {
  constructor(r) {
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
        }}</style>`, ke(
      this,
      {
        target: this.shadowRoot,
        props: fe(this.attributes),
        customElement: !0
      },
      He,
      Fe,
      ue,
      {
        mode: 20,
        height: 0,
        width: 1,
        light_mode_background: 21,
        dark_mode_background: 22,
        light_mode_text_color: 23,
        dark_mode_text_color: 24,
        dark_mode_input_background: 25,
        light_mode_input_background: 26,
        dark_mode_button_color: 27,
        light_mode_button_color: 28,
        light_mode_border_color: 29,
        dark_mode_border_color: 30,
        border_radius: 2,
        input_border_radius: 31,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 32,
        show_email_input: 33,
        spread: 34
      },
      null,
      [-1, -1]
    ), r && (r.target && lt(r.target, this, r.anchor), r.props && (this.$set(r.props), tt()));
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
      "border_radius",
      "input_border_radius",
      "shadow",
      "opacity",
      "name",
      "show_interbank_rate",
      "show_email_input",
      "spread"
    ];
  }
  get mode() {
    return this.$$.ctx[20];
  }
  set mode(r) {
    this.$$set({ mode: r }), tt();
  }
  get height() {
    return this.$$.ctx[0];
  }
  set height(r) {
    this.$$set({ height: r }), tt();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(r) {
    this.$$set({ width: r }), tt();
  }
  get light_mode_background() {
    return this.$$.ctx[21];
  }
  set light_mode_background(r) {
    this.$$set({ light_mode_background: r }), tt();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(r) {
    this.$$set({ dark_mode_background: r }), tt();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(r) {
    this.$$set({ light_mode_text_color: r }), tt();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(r) {
    this.$$set({ dark_mode_text_color: r }), tt();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(r) {
    this.$$set({ dark_mode_input_background: r }), tt();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(r) {
    this.$$set({ light_mode_input_background: r }), tt();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(r) {
    this.$$set({ dark_mode_button_color: r }), tt();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(r) {
    this.$$set({ light_mode_button_color: r }), tt();
  }
  get light_mode_border_color() {
    return this.$$.ctx[29];
  }
  set light_mode_border_color(r) {
    this.$$set({ light_mode_border_color: r }), tt();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[30];
  }
  set dark_mode_border_color(r) {
    this.$$set({ dark_mode_border_color: r }), tt();
  }
  get border_radius() {
    return this.$$.ctx[2];
  }
  set border_radius(r) {
    this.$$set({ border_radius: r }), tt();
  }
  get input_border_radius() {
    return this.$$.ctx[31];
  }
  set input_border_radius(r) {
    this.$$set({ input_border_radius: r }), tt();
  }
  get shadow() {
    return this.$$.ctx[3];
  }
  set shadow(r) {
    this.$$set({ shadow: r }), tt();
  }
  get opacity() {
    return this.$$.ctx[4];
  }
  set opacity(r) {
    this.$$set({ opacity: r }), tt();
  }
  get name() {
    return this.$$.ctx[5];
  }
  set name(r) {
    this.$$set({ name: r }), tt();
  }
  get show_interbank_rate() {
    return this.$$.ctx[32];
  }
  set show_interbank_rate(r) {
    this.$$set({ show_interbank_rate: r }), tt();
  }
  get show_email_input() {
    return this.$$.ctx[33];
  }
  set show_email_input(r) {
    this.$$set({ show_email_input: r }), tt();
  }
  get spread() {
    return this.$$.ctx[34];
  }
  set spread(r) {
    this.$$set({ spread: r }), tt();
  }
}
customElements.define("spreadm8-calc", Je);
export {
  Je as Spreadm8Calc
};
