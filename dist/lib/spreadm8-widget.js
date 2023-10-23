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
function ue(a, o) {
  return a != a ? o == o : a !== o || a && typeof a == "object" || typeof a == "function";
}
function se(a) {
  return Object.keys(a).length === 0;
}
function p(a, o) {
  a.appendChild(o);
}
function st(a, o, e) {
  a.insertBefore(o, e || null);
}
function lt(a) {
  a.parentNode && a.parentNode.removeChild(a);
}
function b(a) {
  return document.createElement(a);
}
function zt(a) {
  return document.createElementNS("http://www.w3.org/2000/svg", a);
}
function W(a) {
  return document.createTextNode(a);
}
function G() {
  return W(" ");
}
function de() {
  return W("");
}
function Jt(a, o, e, l) {
  return a.addEventListener(o, e, l), () => a.removeEventListener(o, e, l);
}
function m(a, o, e) {
  e == null ? a.removeAttribute(o) : a.getAttribute(o) !== e && a.setAttribute(o, e);
}
function ce(a) {
  return Array.from(a.childNodes);
}
function bt(a, o) {
  o = "" + o, a.wholeText !== o && (a.data = o);
}
function Mt(a, o, e, l) {
  e === null ? a.style.removeProperty(o) : a.style.setProperty(o, e, l ? "important" : "");
}
function fe(a) {
  const o = {};
  for (const e of a)
    o[e.name] = e.value;
  return o;
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
  Zt || (Zt = !0, me.then(V));
}
function Wt(a) {
  Ht.push(a);
}
const Bt = /* @__PURE__ */ new Set();
let jt = 0;
function V() {
  if (jt !== 0)
    return;
  const a = Pt;
  do {
    try {
      for (; jt < Nt.length; ) {
        const o = Nt[jt];
        jt++, Rt(o), ye(o.$$);
      }
    } catch (o) {
      throw Nt.length = 0, jt = 0, o;
    }
    for (Rt(null), Nt.length = 0, jt = 0; $t.length; )
      $t.pop()();
    for (let o = 0; o < Ht.length; o += 1) {
      const e = Ht[o];
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
    const o = a.dirty;
    a.dirty = [-1], a.fragment && a.fragment.p(a.ctx, o), a.after_update.forEach(Wt);
  }
}
const be = /* @__PURE__ */ new Set();
function ge(a, o) {
  a && a.i && (be.delete(a), a.i(o));
}
function ve(a, o, e, l) {
  const { fragment: t, after_update: r } = a.$$;
  t && t.m(o, e), l || Wt(() => {
    const n = a.$$.on_mount.map(Gt).filter(Kt);
    a.$$.on_destroy ? a.$$.on_destroy.push(...n) : Ft(n), a.$$.on_mount = [];
  }), r.forEach(Wt);
}
function we(a, o) {
  const e = a.$$;
  e.fragment !== null && (Ft(e.on_destroy), e.fragment && e.fragment.d(o), e.on_destroy = e.fragment = null, e.ctx = []);
}
function xe(a, o) {
  a.$$.dirty[0] === -1 && (Nt.push(a), _e(), a.$$.dirty.fill(0)), a.$$.dirty[o / 31 | 0] |= 1 << o % 31;
}
function ke(a, o, e, l, t, r, n, i = [-1]) {
  const u = Pt;
  Rt(a);
  const s = a.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: St,
    not_equal: t,
    bound: Xt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(o.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xt(),
    dirty: i,
    skip_bound: !1,
    root: o.target || u.$$.root
  };
  n && n(s.root);
  let c = !1;
  if (s.ctx = e ? e(a, o.props || {}, (f, d, ...h) => {
    const y = h.length ? h[0] : d;
    return s.ctx && t(s.ctx[f], s.ctx[f] = y) && (!s.skip_bound && s.bound[f] && s.bound[f](y), c && xe(a, f)), d;
  }) : [], s.update(), c = !0, Ft(s.before_update), s.fragment = l ? l(s.ctx) : !1, o.target) {
    if (o.hydrate) {
      const f = ce(o.target);
      s.fragment && s.fragment.l(f), f.forEach(lt);
    } else
      s.fragment && s.fragment.c();
    o.intro && ge(a.$$.fragment), ve(a, o.target, o.anchor, o.customElement), V();
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
    for (const o in this.$$.slotted)
      this.appendChild(this.$$.slotted[o]);
  }
  attributeChangedCallback(a, o, e) {
    this[a] = e;
  }
  disconnectedCallback() {
    Ft(this.$$.on_disconnect);
  }
  $destroy() {
    we(this, 1), this.$destroy = St;
  }
  $on(a, o) {
    if (!Kt(o))
      return St;
    const e = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
    return e.push(o), () => {
      const l = e.indexOf(o);
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
(function(a, o) {
  (function(e, l) {
    a.exports = l();
  })(Me, function() {
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
      l.f = t(1) ? Object.defineProperty : function(s, c, f) {
        if (r(s), c = i(c, !0), r(f), n)
          try {
            return u(s, c, f);
          } catch {
          }
        if ("get" in f || "set" in f)
          throw TypeError("Accessors not supported!");
        return "value" in f && (s[c] = f.value), s;
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
      var r = t(23)("wks"), n = t(15), i = t(2).Symbol, u = typeof i == "function", s = e.exports = function(c) {
        return r[c] || (r[c] = u && i[c] || (u ? i : n)("Symbol." + c));
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
      var r = t(2), n = t(8), i = t(56), u = t(6), s = "prototype", c = function(f, d, h) {
        var y, S, v, k = f & c.F, E = f & c.G, F = f & c.S, N = f & c.P, C = f & c.B, j = f & c.W, g = E ? n : n[d] || (n[d] = {}), _ = g[s], M = E ? r : F ? r[d] : (r[d] || {})[s];
        E && (h = d);
        for (y in h)
          S = !k && M && M[y] !== void 0, S && y in g || (v = S ? M[y] : h[y], g[y] = E && typeof M[y] != "function" ? h[y] : C && S ? i(v, r) : j && M[y] == v ? function(w) {
            var T = function(O, R, L) {
              if (this instanceof w) {
                switch (arguments.length) {
                  case 0:
                    return new w();
                  case 1:
                    return new w(O);
                  case 2:
                    return new w(O, R);
                }
                return new w(O, R, L);
              }
              return w.apply(this, arguments);
            };
            return T[s] = w[s], T;
          }(v) : N && typeof v == "function" ? i(Function.call, v) : v, N && ((g.virtual || (g.virtual = {}))[y] = v, f & c.R && _ && !_[y] && u(_, y, v)));
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
      e.exports = function(u, s, c) {
        u && !n(u = c ? u : u.prototype, i) && r(u, i, { configurable: !0, value: s });
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
      e.exports = function(c) {
        var f = n.Symbol || (n.Symbol = i ? {} : r.Symbol || {});
        c.charAt(0) == "_" || c in f || s(f, c, { value: u.f(c) });
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
      var r = t(19), n = t(10), i = t(39), u = t(6), s = t(3), c = t(18), f = t(61), d = t(21), h = t(67), y = t(7)("iterator"), S = !([].keys && "next" in [].keys()), v = "@@iterator", k = "keys", E = "values", F = function() {
        return this;
      };
      e.exports = function(N, C, j, g, _, M, w) {
        f(j, C, g);
        var T, O, R, L = function($) {
          if (!S && $ in B)
            return B[$];
          switch ($) {
            case k:
              return function() {
                return new j(this, $);
              };
            case E:
              return function() {
                return new j(this, $);
              };
          }
          return function() {
            return new j(this, $);
          };
        }, Z = C + " Iterator", K = _ == E, I = !1, B = N.prototype, q = B[y] || B[v] || _ && B[_], z = q || L(_), H = _ ? K ? L("entries") : z : void 0, et = C == "Array" && B.entries || q;
        if (et && (R = h(et.call(new N())), R !== Object.prototype && (d(R, Z, !0), r || s(R, y) || u(R, y, F))), K && q && q.name !== E && (I = !0, z = function() {
          return q.call(this);
        }), r && !w || !S && !I && B[y] || u(B, y, z), c[C] = z, c[Z] = F, _)
          if (T = { values: K ? z : L(E), keys: M ? z : L(k), entries: H }, w)
            for (O in T)
              O in B || i(B, O, T[O]);
          else
            n(n.P + n.F * (S || I), C, T);
        return T;
      };
    }, function(e, l, t) {
      var r = t(9), n = t(35), i = t(17), u = t(22)("IE_PROTO"), s = function() {
      }, c = "prototype", f = function() {
        var d, h = t(31)("iframe"), y = i.length, S = "<", v = ">";
        for (h.style.display = "none", t(58).appendChild(h), h.src = "javascript:", d = h.contentWindow.document, d.open(), d.write(S + "script" + v + "document.F=Object" + S + "/script" + v), d.close(), f = d.F; y--; )
          delete f[c][i[y]];
        return f();
      };
      e.exports = Object.create || function(d, h) {
        var y;
        return d !== null ? (s[c] = r(d), y = new s(), s[c] = null, y[u] = d) : y = f(), h === void 0 ? y : n(y, h);
      };
    }, function(e, l, t) {
      var r = t(4), n = t(9), i = t(13);
      e.exports = t(1) ? Object.defineProperties : function(u, s) {
        n(u);
        for (var c, f = i(s), d = f.length, h = 0; d > h; )
          r.f(u, c = f[h++], s[c]);
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
      e.exports = function(s, c) {
        var f, d = n(s), h = 0, y = [];
        for (f in d)
          f != u && r(d, f) && y.push(f);
        for (; c.length > h; )
          r(d, f = c[h++]) && (~i(y, f) || y.push(f));
        return y;
      };
    }, function(e, l, t) {
      e.exports = t(6);
    }, function(e, l, t) {
      function r(h) {
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
      var c = t(48), f = r(c), d = function() {
        var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g, y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, S = /[^-+\dA-Z]/g;
        return function(v, k, E, F) {
          if (arguments.length !== 1 || s(v) !== "string" || /\d/.test(v) || (k = v, v = void 0), v = v || new Date(), v instanceof Date || (v = new Date(v)), isNaN(v))
            throw TypeError("Invalid date");
          k = String(d.masks[k] || k || d.masks.default);
          var N = k.slice(0, 4);
          N !== "UTC:" && N !== "GMT:" || (k = k.slice(4), E = !0, N === "GMT:" && (F = !0));
          var C = E ? "getUTC" : "get", j = v[C + "Date"](), g = v[C + "Day"](), _ = v[C + "Month"](), M = v[C + "FullYear"](), w = v[C + "Hours"](), T = v[C + "Minutes"](), O = v[C + "Seconds"](), R = v[C + "Milliseconds"](), L = E ? 0 : v.getTimezoneOffset(), Z = i(v), K = u(v), I = { d: j, dd: n(j), ddd: d.i18n.dayNames[g], dddd: d.i18n.dayNames[g + 7], m: _ + 1, mm: n(_ + 1), mmm: d.i18n.monthNames[_], mmmm: d.i18n.monthNames[_ + 12], yy: String(M).slice(2), yyyy: M, h: w % 12 || 12, hh: n(w % 12 || 12), H: w, HH: n(w), M: T, MM: n(T), s: O, ss: n(O), l: n(R, 3), L: n(Math.round(R / 10)), t: w < 12 ? "a" : "p", tt: w < 12 ? "am" : "pm", T: w < 12 ? "A" : "P", TT: w < 12 ? "AM" : "PM", Z: F ? "GMT" : E ? "UTC" : (String(v).match(y) || [""]).pop().replace(S, ""), o: (L > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(L) / 60) + Math.abs(L) % 60, 4), S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10], W: Z, N: K };
          return k.replace(h, function(B) {
            return B in I ? I[B] : B.slice(1, B.length - 1);
          });
        };
      }();
      d.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" }, d.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, l.default = d;
    }, function(e, l, t) {
      function r(F) {
        return F && F.__esModule ? F : { default: F };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(44), i = r(n), u = t(28), s = r(u), c = t(29), f = r(c), d = t(43), h = r(d), y = t(42), S = r(y), v = t(40), k = r(v), E = function() {
        function F(N) {
          var C = this;
          (0, s.default)(this, F), this.element = N, this.element.setAttribute("data-has-picker", ""), this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en", this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd", this.localeText = this.getLocaleText(), (0, i.default)(this.element, { valueAsDate: { get: function() {
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
          var j = function(g) {
            var _ = C.element;
            _.locale = C.localeText, h.default.attachTo(_);
          };
          this.element.addEventListener("focus", j), this.element.addEventListener("mouseup", j), this.element.addEventListener("keydown", function(g) {
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
        return (0, f.default)(F, [{ key: "getLocaleText", value: function() {
          var N = this.locale.toLowerCase();
          for (var C in S.default) {
            var j = C.split("_");
            if (j.map(function(g) {
              return g.toLowerCase();
            }), ~j.indexOf(N) || ~j.indexOf(N.substr(0, 2)))
              return S.default[C];
          }
        } }], [{ key: "supportsDateInput", value: function() {
          var N = document.createElement("input");
          N.setAttribute("type", "date");
          var C = "not-a-date";
          return N.setAttribute("value", C), N.value !== C;
        } }, { key: "addPickerToDateInputs", value: function() {
          var N = document.querySelectorAll('input[type="date"]:not([data-has-picker])'), C = N.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(N[j]);
        } }, { key: "addPickerToOtherInputs", value: function() {
          var N = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'), C = N.length;
          if (!C)
            return !1;
          for (var j = 0; j < C; ++j)
            new F(N[j]);
        } }]), F;
      }();
      l.default = E;
    }, function(e, l) {
      Object.defineProperty(l, "__esModule", { value: !0 });
      var t = { "en_en-US_en-UK": { days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, "zh_zh-CN": { days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hans_zh-Hans-CN": { days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "zh-Hant_zh-Hant-TW": { days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"] }, "de_de-DE": { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"] }, "nl_nl-NL_nl-BE": { days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], today: "Vandaag", format: "D/M/Y" }, "pt_pt-BR": { days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], today: "Hoje" }, "fr_fr-FR_fr-BE": { days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"], months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], today: "Aujourd'hui", format: "D/M/Y" }, "es_es-VE": { days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], today: "Hoy", format: "D/M/Y" }, "da_da-dk": { days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], today: "I dag", format: "dd/MM-YYYY" }, "ru_ru-RU_ru-UA_ru-KZ_ru-MD": { days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], today: "Сегодня", format: "D.M.Y" }, "uk_uk-UA": { days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], today: "Cьогодні", format: "D.M.Y" }, "sv_sv-SE": { days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], today: "Idag", format: "YYYY-MM-dd" }, "test_test-TEST": { days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, ja: { days: ["日", "月", "火", "水", "木", "金", "土"], months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], today: "今日", format: "YYYY-MM-dd" } };
      l.default = t;
    }, function(e, l, t) {
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      Object.defineProperty(l, "__esModule", { value: !0 });
      var n = t(28), i = r(n), u = t(29), s = r(u), c = function() {
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
          for (var d = this.date.getFullYear(), h = this.date.getMonth(), y = new Date(d, h, 1).getDay(), S = new Date(this.date.getFullYear(), h + 1, 0).getDate(), v = f.absoluteDate(this.input.valueAsDate) || !1, k = v && d === v.getFullYear() && h === v.getMonth(), E = [], F = 0; F < S + y; ++F)
            if (F % 7 === 0 && E.push(`
          ` + (F !== 0 ? "</tr>" : "") + `
          <tr>
        `), F + 1 <= y)
              E.push("<td></td>");
            else {
              var N = F + 1 - y, C = k && v.getDate() === N;
              E.push("<td data-day " + (C ? "data-selected" : "") + `>
          ` + N + `
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
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      l.__esModule = !0;
      var n = t(47), i = r(n), u = t(46), s = r(u), c = typeof s.default == "function" && typeof i.default == "symbol" ? function(f) {
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
        return function(s, c, f) {
          var d, h = r(s), y = n(h.length), S = i(f, y);
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
            return function(s, c, f) {
              return n.call(i, s, c, f);
            };
        }
        return function() {
          return n.apply(i, arguments);
        };
      };
    }, function(e, l, t) {
      var r = t(13), n = t(37), i = t(20);
      e.exports = function(u) {
        var s = r(u), c = n.f;
        if (c)
          for (var f, d = c(u), h = i.f, y = 0; d.length > y; )
            h.call(u, f = d[y++]) && s.push(f);
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
      }), e.exports = function(s, c, f) {
        s.prototype = r(u, { next: n(1, f) }), i(s, c + " Iterator");
      };
    }, function(e, l) {
      e.exports = function(t, r) {
        return { value: r, done: !!t };
      };
    }, function(e, l, t) {
      var r = t(13), n = t(5);
      e.exports = function(i, u) {
        for (var s, c = n(i), f = r(c), d = f.length, h = 0; d > h; )
          if (c[s = f[h++]] === u)
            return s;
      };
    }, function(e, l, t) {
      var r = t(15)("meta"), n = t(12), i = t(3), u = t(4).f, s = 0, c = Object.isExtensible || function() {
        return !0;
      }, f = !t(11)(function() {
        return c(Object.preventExtensions({}));
      }), d = function(k) {
        u(k, r, { value: { i: "O" + ++s, w: {} } });
      }, h = function(k, E) {
        if (!n(k))
          return typeof k == "symbol" ? k : (typeof k == "string" ? "S" : "P") + k;
        if (!i(k, r)) {
          if (!c(k))
            return "F";
          if (!E)
            return "E";
          d(k);
        }
        return k[r].i;
      }, y = function(k, E) {
        if (!i(k, r)) {
          if (!c(k))
            return !0;
          if (!E)
            return !1;
          d(k);
        }
        return k[r].w;
      }, S = function(k) {
        return f && v.NEED && c(k) && !i(k, r) && d(k), k;
      }, v = e.exports = { KEY: r, NEED: !1, fastKey: h, getWeak: y, onFreeze: S };
    }, function(e, l, t) {
      var r = t(20), n = t(14), i = t(5), u = t(25), s = t(3), c = t(32), f = Object.getOwnPropertyDescriptor;
      l.f = t(1) ? f : function(d, h) {
        if (d = i(d), h = u(h, !0), c)
          try {
            return f(d, h);
          } catch {
          }
        if (s(d, h))
          return n(!r.f.call(d, h), d[h]);
      };
    }, function(e, l, t) {
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
    }, function(e, l, t) {
      var r = t(3), n = t(71), i = t(22)("IE_PROTO"), u = Object.prototype;
      e.exports = Object.getPrototypeOf || function(s) {
        return s = n(s), r(s, i) ? s[i] : typeof s.constructor == "function" && s instanceof s.constructor ? s.constructor.prototype : s instanceof Object ? u : null;
      };
    }, function(e, l, t) {
      var r = t(24), n = t(16);
      e.exports = function(i) {
        return function(u, s) {
          var c, f, d = String(n(u)), h = r(s), y = d.length;
          return h < 0 || h >= y ? i ? "" : void 0 : (c = d.charCodeAt(h), c < 55296 || c > 56319 || h + 1 === y || (f = d.charCodeAt(h + 1)) < 56320 || f > 57343 ? i ? d.charAt(h) : c : i ? d.slice(h, h + 2) : (c - 55296 << 10) + (f - 56320) + 65536);
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
      e.exports = t(33)(Array, "Array", function(s, c) {
        this._t = u(s), this._i = 0, this._k = c;
      }, function() {
        var s = this._t, c = this._k, f = this._i++;
        return !s || f >= s.length ? (this._t = void 0, n(1)) : c == "keys" ? n(0, f) : c == "values" ? n(0, s[f]) : n(0, [f, s[f]]);
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
      var r = t(2), n = t(3), i = t(1), u = t(10), s = t(39), c = t(64).KEY, f = t(11), d = t(23), h = t(21), y = t(15), S = t(7), v = t(27), k = t(26), E = t(63), F = t(57), N = t(60), C = t(9), j = t(5), g = t(25), _ = t(14), M = t(34), w = t(66), T = t(65), O = t(4), R = t(13), L = T.f, Z = O.f, K = w.f, I = r.Symbol, B = r.JSON, q = B && B.stringify, z = "prototype", H = S("_hidden"), et = S("toPrimitive"), $ = {}.propertyIsEnumerable, nt = d("symbol-registry"), ot = d("symbols"), Q = d("op-symbols"), J = Object[z], Y = typeof I == "function", X = r.QObject, wt = !X || !X[z] || !X[z].findChild, at = i && f(function() {
        return M(Z({}, "a", { get: function() {
          return Z(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(x, A, U) {
        var tt = L(J, A);
        tt && delete J[A], Z(x, A, U), tt && x !== J && Z(J, A, tt);
      } : Z, kt = function(x) {
        var A = ot[x] = M(I[z]);
        return A._k = x, A;
      }, _t = Y && typeof I.iterator == "symbol" ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        return x instanceof I;
      }, ft = function(x, A, U) {
        return x === J && ft(Q, A, U), C(x), A = g(A, !0), C(U), n(ot, A) ? (U.enumerable ? (n(x, H) && x[H][A] && (x[H][A] = !1), U = M(U, { enumerable: _(0, !1) })) : (n(x, H) || Z(x, H, _(1, {})), x[H][A] = !0), at(x, A, U)) : Z(x, A, U);
      }, Ct = function(x, A) {
        C(x);
        for (var U, tt = F(A = j(A)), ut = 0, ht = tt.length; ht > ut; )
          ft(x, U = tt[ut++], A[U]);
        return x;
      }, D = function(x, A) {
        return A === void 0 ? M(x) : Ct(M(x), A);
      }, P = function(x) {
        var A = $.call(this, x = g(x, !0));
        return !(this === J && n(ot, x) && !n(Q, x)) && (!(A || !n(this, x) || !n(ot, x) || n(this, H) && this[H][x]) || A);
      }, rt = function(x, A) {
        if (x = j(x), A = g(A, !0), x !== J || !n(ot, A) || n(Q, A)) {
          var U = L(x, A);
          return !U || !n(ot, A) || n(x, H) && x[H][A] || (U.enumerable = !0), U;
        }
      }, pt = function(x) {
        for (var A, U = K(j(x)), tt = [], ut = 0; U.length > ut; )
          n(ot, A = U[ut++]) || A == H || A == c || tt.push(A);
        return tt;
      }, gt = function(x) {
        for (var A, U = x === J, tt = K(U ? Q : j(x)), ut = [], ht = 0; tt.length > ht; )
          !n(ot, A = tt[ht++]) || U && !n(J, A) || ut.push(ot[A]);
        return ut;
      };
      Y || (I = function() {
        if (this instanceof I)
          throw TypeError("Symbol is not a constructor!");
        var x = y(arguments.length > 0 ? arguments[0] : void 0), A = function(U) {
          this === J && A.call(Q, U), n(this, H) && n(this[H], x) && (this[H][x] = !1), at(this, x, _(1, U));
        };
        return i && wt && at(J, x, { configurable: !0, set: A }), kt(x);
      }, s(I[z], "toString", function() {
        return this._k;
      }), T.f = rt, O.f = ft, t(36).f = w.f = pt, t(20).f = P, t(37).f = gt, i && !t(19) && s(J, "propertyIsEnumerable", P, !0), v.f = function(x) {
        return kt(S(x));
      }), u(u.G + u.W + u.F * !Y, { Symbol: I });
      for (var dt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), yt = 0; dt.length > yt; )
        S(dt[yt++]);
      for (var dt = R(S.store), yt = 0; dt.length > yt; )
        k(dt[yt++]);
      u(u.S + u.F * !Y, "Symbol", { for: function(x) {
        return n(nt, x += "") ? nt[x] : nt[x] = I(x);
      }, keyFor: function(x) {
        if (_t(x))
          return E(nt, x);
        throw TypeError(x + " is not a symbol!");
      }, useSetter: function() {
        wt = !0;
      }, useSimple: function() {
        wt = !1;
      } }), u(u.S + u.F * !Y, "Object", { create: D, defineProperty: ft, defineProperties: Ct, getOwnPropertyDescriptor: rt, getOwnPropertyNames: pt, getOwnPropertySymbols: gt }), B && u(u.S + u.F * (!Y || f(function() {
        var x = I();
        return q([x]) != "[null]" || q({ a: x }) != "{}" || q(Object(x)) != "{}";
      })), "JSON", { stringify: function(x) {
        if (x !== void 0 && !_t(x)) {
          for (var A, U, tt = [x], ut = 1; arguments.length > ut; )
            tt.push(arguments[ut++]);
          return A = tt[1], typeof A == "function" && (U = A), !U && N(A) || (A = function(ht, vt) {
            if (U && (vt = U.call(this, ht, vt)), !_t(vt))
              return vt;
          }), tt[1] = A, q.apply(B, tt);
        }
      } }), I[z][et] || t(6)(I[z], et, I[z].valueOf), h(I, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0);
    }, function(e, l, t) {
      t(26)("asyncIterator");
    }, function(e, l, t) {
      t(26)("observable");
    }, function(e, l, t) {
      t(72);
      for (var r = t(2), n = t(6), i = t(18), u = t(7)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], c = 0; c < 5; c++) {
        var f = s[c], d = r[f], h = d && d.prototype;
        h && !h[u] && n(h, u, f), i[f] = i.Array;
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
            var c = r[u];
            typeof c[0] == "number" && i[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
          }
        }, t;
      };
    }, function(e, l, t) {
      function r(g, _) {
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
          var T = g[w], O = T[0], R = T[1], L = T[2], Z = T[3], K = { css: R, media: L, sourceMap: Z };
          M[O] ? M[O].parts.push(K) : _.push(M[O] = { id: O, parts: [K] });
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
          var O = N++;
          M = F || (F = s(_)), w = d.bind(null, M, O, !1), T = d.bind(null, M, O, !0);
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
          g.styleSheet.cssText = j(_, T);
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
      }), F = null, N = 0, C = [];
      e.exports = function(g, _) {
        _ = _ || {}, typeof _.singleton > "u" && (_.singleton = k()), typeof _.insertAt > "u" && (_.insertAt = "bottom");
        var M = n(g);
        return r(M, _), function(w) {
          for (var T = [], O = 0; O < M.length; O++) {
            var R = M[O], L = S[R.id];
            L.refs--, T.push(L);
          }
          if (w) {
            var Z = n(w);
            r(Z, _);
          }
          for (var O = 0; O < T.length; O++) {
            var L = T[O];
            if (L.refs === 0) {
              for (var K = 0; K < L.parts.length; K++)
                L.parts[K]();
              delete S[L.id];
            }
          }
        };
      };
      var j = function() {
        var g = [];
        return function(_, M) {
          return g[_] = M, g.filter(Boolean).join(`
`);
        };
      }();
    }, function(e, l, t) {
      var r = t(81);
      typeof r == "string" && (r = [[e.id, r, ""]]), t(83)(r, {}), r.locals && (e.exports = r.locals);
    }]);
  });
})(Ce);
function Se(a) {
  let o, e, l;
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
  let r = t(a), n = r(a);
  return {
    c() {
      o = b("div"), n.c(), m(o, "class", e = `p-12 shadow-${/*shadow*/
      a[3]}`), m(o, "style", l = `
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
      st(i, o, u), n.m(o, null);
    },
    p(i, u) {
      r === (r = t(i)) && n ? n.p(i, u) : (n.d(1), n = r(i), n && (n.c(), n.m(o, null))), u[0] & /*shadow*/
      8 && e !== (e = `p-12 shadow-${/*shadow*/
      i[3]}`) && m(o, "class", e), u[0] & /*background, border_radius, text_color, opacity, height, width*/
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
`) && m(o, "style", l);
    },
    d(i) {
      i && lt(o), n.d();
    }
  };
}
function De(a) {
  let o, e, l, t, r, n;
  function i(c, f) {
    return (
      /*statusCheckError*/
      c[12] === Le ? Pe : Re
    );
  }
  let u = i(a), s = u(a);
  return {
    c() {
      o = b("div"), e = b("div"), l = b("h1"), l.textContent = "An error occured", t = G(), s.c(), m(l, "class", "text-2xl"), m(e, "class", "flex flex-col items-center gap-4"), m(o, "class", r = `p-4 shadow-${/*shadow*/
      a[3]}`), m(o, "style", n = `
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
      st(c, o, f), p(o, e), p(e, l), p(e, t), s.m(e, null);
    },
    p(c, f) {
      u === (u = i(c)) && s ? s.p(c, f) : (s.d(1), s = u(c), s && (s.c(), s.m(e, null))), f[0] & /*shadow*/
      8 && r !== (r = `p-4 shadow-${/*shadow*/
      c[3]}`) && m(o, "class", r), f[0] & /*background, border_radius, text_color, opacity, height, width*/
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
`) && m(o, "style", n);
    },
    d(c) {
      c && lt(o), s.d();
    }
  };
}
function Oe(a) {
  let o, e, l, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "An unknown error", l = G(), t = b("button"), r = W("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "rounded-lg bg-black px-6 py-3 mt-4"), Mt(
        t,
        "background-color",
        /*button_color*/
        a[7]
      ), Mt(
        t,
        "color",
        /*text_color*/
        a[6]
      ), m(o, "class", "flex flex-col items-center");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, l), p(o, t), p(t, r), n || (i = Jt(
        t,
        "click",
        /*click_handler_2*/
        a[43]
      ), n = !0);
    },
    p(u, s) {
      s[0] & /*button_color*/
      128 && Mt(
        t,
        "background-color",
        /*button_color*/
        u[7]
      ), s[0] & /*text_color*/
      64 && Mt(
        t,
        "color",
        /*text_color*/
        u[6]
      );
    },
    d(u) {
      u && lt(o), n = !1, i();
    }
  };
}
function Ee(a) {
  let o, e, l, t, r, n, i, u, s, c, f;
  return {
    c() {
      o = b("div"), e = b("h1"), e.textContent = "Error", l = G(), t = b("p"), r = W(
        /*error*/
        a[10]
      ), n = G(), i = b("div"), u = b("button"), s = W("Reset Form"), m(e, "class", "text-2xl"), m(t, "class", "text-sm py-3"), m(u, "class", "px-6 py-3 mt-6"), m(
        u,
        "style",
        /*button_style*/
        a[14]
      ), m(i, "class", "w-full mt-auto"), m(o, "class", "flex flex-col items-center h-full");
    },
    m(d, h) {
      st(d, o, h), p(o, e), p(o, l), p(o, t), p(t, r), p(o, n), p(o, i), p(i, u), p(u, s), c || (f = Jt(
        u,
        "click",
        /*click_handler_1*/
        a[42]
      ), c = !0);
    },
    p(d, h) {
      h[0] & /*error*/
      1024 && bt(
        r,
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
      d && lt(o), c = !1, f();
    }
  };
}
function Ae(a) {
  let o, e, l, t, r, n, i = (
    /*backendData*/
    a[8].data[0].third_party_exchange_rate.toFixed(4) + ""
  ), u, s, c, f, d, h = (
    /*backendData*/
    a[8].data[0].third_party_spread + ""
  ), y, S, v, k, E, F = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), N, C, j = (
    /*backendData*/
    a[8].data[0].third_party_profit + ""
  ), g, _, M, w, T, O, R, L, Z, K = (
    /*backendData*/
    a[8].data[0].integritas_rate.toFixed(4) + ""
  ), I, B, q, z, H, et, $, nt, ot, Q = (
    /*shouldShowInterbankRate*/
    a[17] && oe(a)
  ), J = (
    /*backendData*/
    a[8].data[0].integritas_savings > 50 && ne(a)
  );
  return {
    c() {
      o = b("div"), e = b("div"), l = b("h1"), l.textContent = "Your Provider", t = G(), r = b("p"), n = W(`Your exchange rate
                        was `), u = W(i), s = G(), Q && Q.c(), c = G(), f = b("p"), d = W("Your provider's markup was "), y = W(h), S = W("%"), v = G(), k = b("p"), E = W(`Your provider
                        charged `), N = W(F), C = G(), g = W(j), _ = W(` on
                        this trade`), M = G(), w = b("div"), T = b("h1"), O = W(
        /*name*/
        a[5]
      ), R = G(), L = b("p"), Z = W("Our exchange rate was "), I = W(K), B = G(), J && J.c(), q = G(), z = b("div"), H = b("button"), et = W("Calculate again"), m(l, "class", "text-2xl"), m(r, "class", "text-sm"), m(f, "class", "text-sm"), m(k, "class", "text-sm"), m(e, "class", "flex flex-col gap-2"), m(T, "class", "text-2xl mt-4"), m(L, "class", "text-sm"), m(w, "class", "flex flex-col gap-2"), m(o, "class", "flex flex-col divide-y gap-4"), Mt(o, "height", "95%"), m(H, "class", "px-6 py-3"), m(H, "style", $ = `${/*button_style*/
      a[14]} margin-bottom: 1.5rem;`), m(z, "class", "w-full");
    },
    m(Y, X) {
      st(Y, o, X), p(o, e), p(e, l), p(e, t), p(e, r), p(r, n), p(r, u), p(e, s), Q && Q.m(e, null), p(e, c), p(e, f), p(f, d), p(f, y), p(f, S), p(e, v), p(e, k), p(k, E), p(k, N), p(k, C), p(k, g), p(k, _), p(o, M), p(o, w), p(w, T), p(T, O), p(w, R), p(w, L), p(L, Z), p(L, I), p(w, B), J && J.m(w, null), st(Y, q, X), st(Y, z, X), p(z, H), p(H, et), nt || (ot = Jt(
        H,
        "click",
        /*click_handler*/
        a[41]
      ), nt = !0);
    },
    p(Y, X) {
      X[0] & /*backendData*/
      256 && i !== (i = /*backendData*/
      Y[8].data[0].third_party_exchange_rate.toFixed(4) + "") && bt(u, i), /*shouldShowInterbankRate*/
      Y[17] ? Q ? Q.p(Y, X) : (Q = oe(Y), Q.c(), Q.m(e, c)) : Q && (Q.d(1), Q = null), X[0] & /*backendData*/
      256 && h !== (h = /*backendData*/
      Y[8].data[0].third_party_spread + "") && bt(y, h), X[0] & /*backendData*/
      256 && F !== (F = /*backendData*/
      Y[8].data[0].sold_ccy + "") && bt(N, F), X[0] & /*backendData*/
      256 && j !== (j = /*backendData*/
      Y[8].data[0].third_party_profit + "") && bt(g, j), X[0] & /*name*/
      32 && bt(
        O,
        /*name*/
        Y[5]
      ), X[0] & /*backendData*/
      256 && K !== (K = /*backendData*/
      Y[8].data[0].integritas_rate.toFixed(4) + "") && bt(I, K), /*backendData*/
      Y[8].data[0].integritas_savings > 50 ? J ? J.p(Y, X) : (J = ne(Y), J.c(), J.m(w, null)) : J && (J.d(1), J = null), X[0] & /*button_style*/
      16384 && $ !== ($ = `${/*button_style*/
      Y[14]} margin-bottom: 1.5rem;`) && m(H, "style", $);
    },
    d(Y) {
      Y && lt(o), Q && Q.d(), J && J.d(), Y && lt(q), Y && lt(z), nt = !1, ot();
    }
  };
}
function Te(a) {
  let o, e, l, t, r, n, i, u, s, c, f, d, h, y, S, v, k, E, F, N, C, j, g, _, M, w, T, O, R, L, Z, K, I, B, q, z, H, et, $, nt, ot, Q, J, Y, X, wt, at, kt, _t, ft, Ct, D, P, rt, pt, gt, dt, yt, x, A, U, tt, ut, ht, vt, Dt, Ot, Et, At, Tt, qt, Ut, Lt, It, Vt, ct = (
    /*shouldShowEmail*/
    a[16] && re(a)
  );
  function Qt(it, mt) {
    return (
      /*isFetching*/
      it[11] ? je : Ne
    );
  }
  let Yt = Qt(a), xt = Yt(a);
  return {
    c() {
      o = b("form"), e = b("div"), l = b("div"), t = b("div"), r = b("label"), r.textContent = "Select Date", n = G(), i = b("input"), u = G(), s = b("div"), c = b("label"), c.textContent = "Select Time", f = G(), d = b("input"), h = G(), y = b("div"), S = b("div"), v = b("label"), v.textContent = "Sell Amount", k = G(), E = b("input"), F = G(), N = b("div"), C = b("label"), j = W("Sell Currency"), g = G(), _ = b("select"), M = b("option"), M.textContent = "GBP", w = b("option"), w.textContent = "USD", T = b("option"), T.textContent = "EUR", O = b("option"), O.textContent = "JPY", R = b("option"), R.textContent = "CHF", L = b("option"), L.textContent = "CNY", Z = b("option"), Z.textContent = "NZD", K = b("option"), K.textContent = "SGD", I = b("option"), I.textContent = "INR", B = b("option"), B.textContent = "AUD", q = b("option"), q.textContent = "CAD", z = b("option"), z.textContent = "HKD", H = b("option"), H.textContent = "MYR", et = b("option"), et.textContent = "NOK", $ = b("option"), $.textContent = "ZAR", nt = b("option"), nt.textContent = "RUB", ot = b("option"), ot.textContent = "SEK", Q = G(), J = b("div"), Y = b("div"), X = b("label"), X.textContent = "Buy Amount", wt = G(), at = b("input"), kt = G(), _t = b("div"), ft = b("label"), Ct = W("Buy Currency"), D = G(), P = b("select"), rt = b("option"), rt.textContent = "USD", pt = b("option"), pt.textContent = "GBP", gt = b("option"), gt.textContent = "EUR", dt = b("option"), dt.textContent = "JPY", yt = b("option"), yt.textContent = "CHF", x = b("option"), x.textContent = "CNY", A = b("option"), A.textContent = "NZD", U = b("option"), U.textContent = "SGD", tt = b("option"), tt.textContent = "INR", ut = b("option"), ut.textContent = "AUD", ht = b("option"), ht.textContent = "CAD", vt = b("option"), vt.textContent = "HKD", Dt = b("option"), Dt.textContent = "MYR", Ot = b("option"), Ot.textContent = "NOK", Et = b("option"), Et.textContent = "ZAR", At = b("option"), At.textContent = "RUB", Tt = b("option"), Tt.textContent = "SEK", qt = G(), ct && ct.c(), Ut = G(), Lt = b("div"), xt.c(), m(r, "for", "date"), m(i, "id", "date"), m(i, "type", "date"), m(i, "class", "w-full rounded-md px-3 py-2 mt-4"), m(i, "name", "date"), m(i, "placeholder", "Select date"), i.required = !0, m(
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
      ), m(S, "class", "w-full"), m(C, "for", "sold_ccy"), Mt(
        C,
        "color",
        /*text_color*/
        a[6]
      ), M.selected = !0, M.__value = "GBP", M.value = M.__value, w.__value = "USD", w.value = w.__value, T.__value = "EUR", T.value = T.__value, O.__value = "JPY", O.value = O.__value, R.__value = "CHF", R.value = R.__value, L.__value = "CNY", L.value = L.__value, Z.__value = "NZD", Z.value = Z.__value, K.__value = "SGD", K.value = K.__value, I.__value = "INR", I.value = I.__value, B.__value = "AUD", B.value = B.__value, q.__value = "CAD", q.value = q.__value, z.__value = "HKD", z.value = z.__value, H.__value = "MYR", H.value = H.__value, et.__value = "NOK", et.value = et.__value, $.__value = "ZAR", $.value = $.__value, nt.__value = "RUB", nt.value = nt.__value, ot.__value = "SEK", ot.value = ot.__value, m(_, "name", "sold_ccy"), m(_, "id", "sold_ccy"), m(_, "class", "w-full rounded-md px-3 py-2 mt-4"), _.required = !0, m(
        _,
        "style",
        /*input_style*/
        a[15]
      ), m(N, "class", "w-full"), m(y, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(X, "for", "bought_notional"), m(at, "id", "bought_notional"), m(at, "type", "number"), m(at, "step", ".01"), m(at, "class", "w-full rounded-md px-3 py-2 mt-4"), m(at, "name", "bought_notional"), m(at, "placeholder", "10000"), at.required = !0, m(
        at,
        "style",
        /*input_style*/
        a[15]
      ), m(Y, "class", "w-full"), m(ft, "for", "bought_ccy"), Mt(
        ft,
        "color",
        /*text_color*/
        a[6]
      ), rt.selected = !0, rt.__value = "USD", rt.value = rt.__value, pt.__value = "GBP", pt.value = pt.__value, gt.__value = "EUR", gt.value = gt.__value, dt.__value = "JPY", dt.value = dt.__value, yt.__value = "CHF", yt.value = yt.__value, x.__value = "CNY", x.value = x.__value, A.__value = "NZD", A.value = A.__value, U.__value = "SGD", U.value = U.__value, tt.__value = "INR", tt.value = tt.__value, ut.__value = "AUD", ut.value = ut.__value, ht.__value = "CAD", ht.value = ht.__value, vt.__value = "HKD", vt.value = vt.__value, Dt.__value = "MYR", Dt.value = Dt.__value, Ot.__value = "NOK", Ot.value = Ot.__value, Et.__value = "ZAR", Et.value = Et.__value, At.__value = "RUB", At.value = At.__value, Tt.__value = "SEK", Tt.value = Tt.__value, m(P, "name", "bought_ccy"), m(P, "id", "bought_ccy"), m(P, "class", "w-full rounded-md px-3 py-2 mt-4"), P.required = !0, m(
        P,
        "style",
        /*input_style*/
        a[15]
      ), m(_t, "class", "w-full"), m(J, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12"), m(e, "class", "flex flex-col sm:gap-4");
    },
    m(it, mt) {
      st(it, o, mt), p(o, e), p(e, l), p(l, t), p(t, r), p(t, n), p(t, i), p(l, u), p(l, s), p(s, c), p(s, f), p(s, d), p(e, h), p(e, y), p(y, S), p(S, v), p(S, k), p(S, E), p(y, F), p(y, N), p(N, C), p(C, j), p(N, g), p(N, _), p(_, M), p(_, w), p(_, T), p(_, O), p(_, R), p(_, L), p(_, Z), p(_, K), p(_, I), p(_, B), p(_, q), p(_, z), p(_, H), p(_, et), p(_, $), p(_, nt), p(_, ot), p(e, Q), p(e, J), p(J, Y), p(Y, X), p(Y, wt), p(Y, at), p(J, kt), p(J, _t), p(_t, ft), p(ft, Ct), p(_t, D), p(_t, P), p(P, rt), p(P, pt), p(P, gt), p(P, dt), p(P, yt), p(P, x), p(P, A), p(P, U), p(P, tt), p(P, ut), p(P, ht), p(P, vt), p(P, Dt), p(P, Ot), p(P, Et), p(P, At), p(P, Tt), p(e, qt), ct && ct.m(e, null), p(e, Ut), p(e, Lt), xt.m(Lt, null), It || (Vt = Jt(
        o,
        "submit",
        /*handleFormSubmit*/
        a[19]
      ), It = !0);
    },
    p(it, mt) {
      mt[0] & /*input_style*/
      32768 && m(
        i,
        "style",
        /*input_style*/
        it[15]
      ), mt[0] & /*input_style*/
      32768 && m(
        d,
        "style",
        /*input_style*/
        it[15]
      ), mt[0] & /*input_style*/
      32768 && m(
        E,
        "style",
        /*input_style*/
        it[15]
      ), mt[0] & /*text_color*/
      64 && Mt(
        C,
        "color",
        /*text_color*/
        it[6]
      ), mt[0] & /*input_style*/
      32768 && m(
        _,
        "style",
        /*input_style*/
        it[15]
      ), mt[0] & /*input_style*/
      32768 && m(
        at,
        "style",
        /*input_style*/
        it[15]
      ), mt[0] & /*text_color*/
      64 && Mt(
        ft,
        "color",
        /*text_color*/
        it[6]
      ), mt[0] & /*input_style*/
      32768 && m(
        P,
        "style",
        /*input_style*/
        it[15]
      ), /*shouldShowEmail*/
      it[16] ? ct ? ct.p(it, mt) : (ct = re(it), ct.c(), ct.m(e, Ut)) : ct && (ct.d(1), ct = null), Yt === (Yt = Qt(it)) && xt ? xt.p(it, mt) : (xt.d(1), xt = Yt(it), xt && (xt.c(), xt.m(Lt, null)));
    },
    d(it) {
      it && lt(o), ct && ct.d(), xt.d(), It = !1, Vt();
    }
  };
}
function oe(a) {
  let o, e, l = (
    /*backendData*/
    a[8].data[0].ccy_pair + ""
  ), t, r, n = (
    /*backendData*/
    a[8].data[0].mid_market_rate.toFixed(2) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = W("The interbank rate "), t = W(l), r = W(`
                            was `), i = W(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].ccy_pair + "") && bt(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].mid_market_rate.toFixed(2) + "") && bt(i, n);
    },
    d(u) {
      u && lt(o);
    }
  };
}
function ne(a) {
  let o, e, l = (
    /*backendData*/
    a[8].data[0].sold_ccy + ""
  ), t, r, n = (
    /*backendData*/
    a[8].data[0].integritas_savings.toFixed(2) + ""
  ), i;
  return {
    c() {
      o = b("p"), e = W(`We would've saved
                            you `), t = W(l), r = G(), i = W(n), m(o, "class", "text-sm");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(o, t), p(o, r), p(o, i);
    },
    p(u, s) {
      s[0] & /*backendData*/
      256 && l !== (l = /*backendData*/
      u[8].data[0].sold_ccy + "") && bt(t, l), s[0] & /*backendData*/
      256 && n !== (n = /*backendData*/
      u[8].data[0].integritas_savings.toFixed(2) + "") && bt(i, n);
    },
    d(u) {
      u && lt(o);
    }
  };
}
function re(a) {
  let o, e, l, t, r;
  return {
    c() {
      o = b("div"), e = b("div"), l = b("label"), l.textContent = "Email", t = G(), r = b("input"), m(l, "for", "user"), m(r, "id", "user"), m(r, "type", "email"), m(r, "class", "w-full rounded-md px-3 py-2 mt-4"), m(r, "name", "user"), m(r, "placeholder", "JohnDoe@email.com"), r.required = !0, m(
        r,
        "style",
        /*input_style*/
        a[15]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(n, i) {
      st(n, o, i), p(o, e), p(e, l), p(e, t), p(e, r);
    },
    p(n, i) {
      i[0] & /*input_style*/
      32768 && m(
        r,
        "style",
        /*input_style*/
        n[15]
      );
    },
    d(n) {
      n && lt(o);
    }
  };
}
function je(a) {
  let o, e, l, t, r, n, i;
  return {
    c() {
      o = b("div"), e = b("div"), l = b("button"), t = zt("svg"), r = zt("path"), n = zt("path"), i = W(`
                                        Loading...`), m(r, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), m(r, "fill", "#E5E7EB"), m(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), m(n, "fill", "currentColor"), m(t, "aria-hidden", "true"), m(t, "role", "status"), m(t, "class", "inline w-4 h-4 mr-3 text-white animate-spin"), m(t, "viewBox", "0 0 100 101"), m(t, "fill", "none"), m(t, "xmlns", "http://www.w3.org/2000/svg"), l.disabled = !0, m(l, "type", "button"), m(l, "class", "px-6 py-3 mt-6 text-center inline-flex items-center justify-center"), m(
        l,
        "style",
        /*button_style*/
        a[14]
      ), m(e, "class", "w-full"), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12");
    },
    m(u, s) {
      st(u, o, s), p(o, e), p(e, l), p(l, t), p(t, r), p(t, n), p(l, i);
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
      u && lt(o);
    }
  };
}
function Ne(a) {
  let o, e, l;
  return {
    c() {
      o = b("div"), e = b("button"), l = W("See your charges"), m(e, "type", "submit"), m(e, "class", "px-6 py-3 mt-6"), m(
        e,
        "style",
        /*button_style*/
        a[14]
      ), m(o, "class", "flex flex-col sm:flex-row sm:justify-between sm:gap-12 w-full items-center justify-center");
    },
    m(t, r) {
      st(t, o, r), p(o, e), p(e, l);
    },
    p(t, r) {
      r[0] & /*button_style*/
      16384 && m(
        e,
        "style",
        /*button_style*/
        t[14]
      );
    },
    d(t) {
      t && lt(o);
    }
  };
}
function Re(a) {
  let o, e;
  return {
    c() {
      o = b("p"), e = W(
        /*statusCheckError*/
        a[12]
      ), m(o, "class", "text-sm");
    },
    m(l, t) {
      st(l, o, t), p(o, e);
    },
    p(l, t) {
      t[0] & /*statusCheckError*/
      4096 && bt(
        e,
        /*statusCheckError*/
        l[12]
      );
    },
    d(l) {
      l && lt(o);
    }
  };
}
function Pe(a) {
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
      e && lt(o);
    }
  };
}
function Fe(a) {
  let o, e, l;
  function t(i, u) {
    return (
      /*statusCheckError*/
      i[12] ? De : Se
    );
  }
  let r = t(a), n = r(a);
  return {
    c() {
      o = b("link"), e = G(), n.c(), l = de(), this.c = St, m(o, "href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"), m(o, "rel", "stylesheet");
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
      lt(o), i && lt(e), n.d(i), i && lt(l);
    }
  };
}
const ie = "http://localhost:8000", Le = "CORS_ERROR";
function Ye(a) {
  return a === "dark" ? !0 : a === "light" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches;
}
function He(a, o, e) {
  let l, t, r, n, i, u, s, { mode: c = "auto" } = o, { height: f = "100%" } = o, { width: d = "100%" } = o, { light_mode_background: h = "#ffffff" } = o, { dark_mode_background: y = "#1f2937" } = o, { light_mode_text_color: S = "#1f2937" } = o, { dark_mode_text_color: v = "#f9fafb" } = o, { dark_mode_input_background: k = "#374151" } = o, { light_mode_input_background: E = "#f9fafb" } = o, { dark_mode_button_color: F = "#374151" } = o, { light_mode_button_color: N = "#f9fafb" } = o, { light_mode_border_color: C = "#D1D5DB" } = o, { dark_mode_border_color: j = "#374151" } = o, { light_mode_button_text_color: g = "#1f2937" } = o, { dark_mode_button_text_color: _ = "#f9fafb" } = o, { border_radius: M = "15px" } = o, { input_border_radius: w = "5" } = o, { shadow: T = "md" } = o, { opacity: O = 100 } = o, { name: R = "Our Results" } = o, { show_interbank_rate: L = "false" } = o, { show_email_input: Z = "true" } = o, { spread: K = 0 } = o;
  async function I() {
    const D = "CORS_ERROR";
    try {
      const P = await fetch(`${ie}/`);
      if (!P.ok)
        throw P.status === 403 ? new Error(D) : new Error("We're sorry, our servers are currently down. Please try again later.");
    } catch (P) {
      P.message === D ? e(12, $ = D) : e(12, $ = P.message);
    }
  }
  const B = async (D) => fetch(`${ie}/widget/calculate`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer whatever"
    },
    body: JSON.stringify(D)
  });
  pe(() => {
    I();
  });
  let q, z = !0, H, et = !1, $;
  const nt = () => {
    e(8, q = void 0), e(9, z = !0), e(10, H = !1), e(11, et = !1);
  }, ot = async (D) => {
    e(9, z = !1), e(11, et = !0), e(10, H = void 0);
    try {
      const P = await B(D);
      if (!P.ok) {
        const pt = await P.json();
        throw new Error(pt || `HTTP error! Status: ${P.status}`);
      }
      const rt = await P.json();
      e(11, et = !1), e(10, H = void 0), e(9, z = !1), e(8, q = rt);
    } catch (P) {
      e(11, et = !1), e(10, H = P.message), e(9, z = !1), e(8, q = void 0);
    }
  }, Q = async (D) => {
    D.preventDefault();
    const P = new FormData(D.target), rt = {};
    for (let pt of P) {
      const [gt, dt] = pt;
      rt[gt] = dt;
    }
    rt.prospect = "", rt.input_spread = K.toString(), rt.prospect_annual_flow = "", rt.email_user = !1, l || (rt.user = "testUserWithoutMail@gmail.com"), ot(rt);
  }, J = (D) => {
    e(40, r = D.matches);
  }, Y = window.matchMedia("(prefers-color-scheme: dark)");
  Y.addEventListener("change", J), he(() => {
    Y.removeEventListener("change", J);
  });
  let X, wt, at, kt;
  const _t = () => nt(), ft = (D) => nt(), Ct = (D) => nt();
  return a.$$set = (D) => {
    "mode" in D && e(20, c = D.mode), "height" in D && e(0, f = D.height), "width" in D && e(1, d = D.width), "light_mode_background" in D && e(21, h = D.light_mode_background), "dark_mode_background" in D && e(22, y = D.dark_mode_background), "light_mode_text_color" in D && e(23, S = D.light_mode_text_color), "dark_mode_text_color" in D && e(24, v = D.dark_mode_text_color), "dark_mode_input_background" in D && e(25, k = D.dark_mode_input_background), "light_mode_input_background" in D && e(26, E = D.light_mode_input_background), "dark_mode_button_color" in D && e(27, F = D.dark_mode_button_color), "light_mode_button_color" in D && e(28, N = D.light_mode_button_color), "light_mode_border_color" in D && e(29, C = D.light_mode_border_color), "dark_mode_border_color" in D && e(30, j = D.dark_mode_border_color), "light_mode_button_text_color" in D && e(31, g = D.light_mode_button_text_color), "dark_mode_button_text_color" in D && e(32, _ = D.dark_mode_button_text_color), "border_radius" in D && e(2, M = D.border_radius), "input_border_radius" in D && e(33, w = D.input_border_radius), "shadow" in D && e(3, T = D.shadow), "opacity" in D && e(4, O = D.opacity), "name" in D && e(5, R = D.name), "show_interbank_rate" in D && e(34, L = D.show_interbank_rate), "show_email_input" in D && e(35, Z = D.show_email_input), "spread" in D && e(36, K = D.spread);
  }, a.$$.update = () => {
    a.$$.dirty[1] & /*show_email_input*/
    16 && e(16, l = Z === "true"), a.$$.dirty[1] & /*show_interbank_rate*/
    8 && e(17, t = L === "true"), a.$$.dirty[0] & /*mode*/
    1048576 && e(40, r = Ye(c)), a.$$.dirty[0] & /*dark_mode_background, light_mode_background*/
    6291456 | a.$$.dirty[1] & /*isDarkMode*/
    512 && e(13, X = r ? y : h), a.$$.dirty[0] & /*dark_mode_text_color, light_mode_text_color*/
    25165824 | a.$$.dirty[1] & /*isDarkMode*/
    512 && e(6, wt = r ? v : S), a.$$.dirty[0] & /*dark_mode_input_background, light_mode_input_background*/
    100663296 | a.$$.dirty[1] & /*isDarkMode*/
    512 && e(37, at = r ? k : E), a.$$.dirty[0] & /*dark_mode_border_color, light_mode_border_color*/
    1610612736 | a.$$.dirty[1] & /*isDarkMode*/
    512 && e(38, n = r ? j : C), a.$$.dirty[0] & /*dark_mode_button_color, light_mode_button_color*/
    402653184 | a.$$.dirty[1] & /*isDarkMode*/
    512 && e(7, kt = r ? F : N), a.$$.dirty[1] & /*isDarkMode, dark_mode_button_text_color, light_mode_button_text_color*/
    515 && e(39, i = r ? _ : g), a.$$.dirty[0] & /*text_color*/
    64 | a.$$.dirty[1] & /*input_background, input_border_color, input_border_radius*/
    196 && e(15, u = `
    background-color: ${at};
    color: ${wt};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${w}px;
    `), a.$$.dirty[0] & /*button_color*/
    128 | a.$$.dirty[1] & /*button_text_color, input_border_color, input_border_radius*/
    388 && e(14, s = `
    width: 100%;
    background-color: ${kt};
    color: ${i};
    border-width: 1px;
    border-color: ${n};
    border-radius: ${w}px;
    `);
  }, [
    f,
    d,
    M,
    T,
    O,
    R,
    wt,
    kt,
    q,
    z,
    H,
    et,
    $,
    X,
    s,
    u,
    l,
    t,
    nt,
    Q,
    c,
    h,
    y,
    S,
    v,
    k,
    E,
    F,
    N,
    C,
    j,
    g,
    _,
    w,
    L,
    Z,
    K,
    at,
    n,
    i,
    r,
    _t,
    ft,
    Ct
  ];
}
class Je extends le {
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
        light_mode_button_text_color: 31,
        dark_mode_button_text_color: 32,
        border_radius: 2,
        input_border_radius: 33,
        shadow: 3,
        opacity: 4,
        name: 5,
        show_interbank_rate: 34,
        show_email_input: 35,
        spread: 36
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
      "spread"
    ];
  }
  get mode() {
    return this.$$.ctx[20];
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
    return this.$$.ctx[21];
  }
  set light_mode_background(o) {
    this.$$set({ light_mode_background: o }), V();
  }
  get dark_mode_background() {
    return this.$$.ctx[22];
  }
  set dark_mode_background(o) {
    this.$$set({ dark_mode_background: o }), V();
  }
  get light_mode_text_color() {
    return this.$$.ctx[23];
  }
  set light_mode_text_color(o) {
    this.$$set({ light_mode_text_color: o }), V();
  }
  get dark_mode_text_color() {
    return this.$$.ctx[24];
  }
  set dark_mode_text_color(o) {
    this.$$set({ dark_mode_text_color: o }), V();
  }
  get dark_mode_input_background() {
    return this.$$.ctx[25];
  }
  set dark_mode_input_background(o) {
    this.$$set({ dark_mode_input_background: o }), V();
  }
  get light_mode_input_background() {
    return this.$$.ctx[26];
  }
  set light_mode_input_background(o) {
    this.$$set({ light_mode_input_background: o }), V();
  }
  get dark_mode_button_color() {
    return this.$$.ctx[27];
  }
  set dark_mode_button_color(o) {
    this.$$set({ dark_mode_button_color: o }), V();
  }
  get light_mode_button_color() {
    return this.$$.ctx[28];
  }
  set light_mode_button_color(o) {
    this.$$set({ light_mode_button_color: o }), V();
  }
  get light_mode_border_color() {
    return this.$$.ctx[29];
  }
  set light_mode_border_color(o) {
    this.$$set({ light_mode_border_color: o }), V();
  }
  get dark_mode_border_color() {
    return this.$$.ctx[30];
  }
  set dark_mode_border_color(o) {
    this.$$set({ dark_mode_border_color: o }), V();
  }
  get light_mode_button_text_color() {
    return this.$$.ctx[31];
  }
  set light_mode_button_text_color(o) {
    this.$$set({ light_mode_button_text_color: o }), V();
  }
  get dark_mode_button_text_color() {
    return this.$$.ctx[32];
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
    return this.$$.ctx[33];
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
    return this.$$.ctx[34];
  }
  set show_interbank_rate(o) {
    this.$$set({ show_interbank_rate: o }), V();
  }
  get show_email_input() {
    return this.$$.ctx[35];
  }
  set show_email_input(o) {
    this.$$set({ show_email_input: o }), V();
  }
  get spread() {
    return this.$$.ctx[36];
  }
  set spread(o) {
    this.$$set({ spread: o }), V();
  }
}
customElements.define("spreadm8-calc", Je);
export {
  Je as Spreadm8Calc
};
