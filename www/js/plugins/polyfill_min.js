!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n()
    : "function" == typeof define && define.amd
    ? define(n)
    : n();
})(0, function () {
  "use strict";
  function e() {}
  function n(e) {
    if (!(this instanceof n))
      throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    (this._state = 0),
      (this._handled = !1),
      (this._value = undefined),
      (this._deferreds = []),
      f(e, this);
  }
  function t(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        n._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(e._value);
            } catch (f) {
              return void r(t.promise, f);
            }
            o(t.promise, i);
          } else (1 === e._state ? o : r)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function o(e, t) {
    try {
      if (t === e)
        throw new TypeError("A promise cannot be resolved with itself.");
      if (t && ("object" == typeof t || "function" == typeof t)) {
        var o = t.then;
        if (t instanceof n) return (e._state = 3), (e._value = t), void i(e);
        if ("function" == typeof o)
          return void f(
            (function (e, n) {
              return function () {
                e.apply(n, arguments);
              };
            })(o, t),
            e
          );
      }
      (e._state = 1), (e._value = t), i(e);
    } catch (u) {
      r(e, u);
    }
  }
  function r(e, n) {
    (e._state = 2), (e._value = n), i(e);
  }
  function i(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      n._immediateFn(function () {
        e._handled || n._unhandledRejectionFn(e._value);
      });
    for (var o = 0, r = e._deferreds.length; r > o; o++) t(e, e._deferreds[o]);
    e._deferreds = null;
  }
  function f(e, n) {
    var t = !1;
    try {
      e(
        function (e) {
          t || ((t = !0), o(n, e));
        },
        function (e) {
          t || ((t = !0), r(n, e));
        }
      );
    } catch (i) {
      if (t) return;
      (t = !0), r(n, i);
    }
  }
  var u = function (e) {
      var n = this.constructor;
      return this.then(
        function (t) {
          return n.resolve(e()).then(function () {
            return t;
          });
        },
        function (t) {
          return n.resolve(e()).then(function () {
            return n.reject(t);
          });
        }
      );
    },
    c = setTimeout;
  (n.prototype["catch"] = function (e) {
    return this.then(null, e);
  }),
    (n.prototype.then = function (n, o) {
      var r = new this.constructor(e);
      return (
        t(
          this,
          new (function (e, n, t) {
            (this.onFulfilled = "function" == typeof e ? e : null),
              (this.onRejected = "function" == typeof n ? n : null),
              (this.promise = t);
          })(n, o, r)
        ),
        r
      );
    }),
    (n.prototype["finally"] = u),
    (n.all = function (e) {
      return new n(function (n, t) {
        function o(e, f) {
          try {
            if (f && ("object" == typeof f || "function" == typeof f)) {
              var u = f.then;
              if ("function" == typeof u)
                return void u.call(
                  f,
                  function (n) {
                    o(e, n);
                  },
                  t
                );
            }
            (r[e] = f), 0 == --i && n(r);
          } catch (c) {
            t(c);
          }
        }
        if (!e || "undefined" == typeof e.length)
          throw new TypeError("Promise.all accepts an array");
        var r = Array.prototype.slice.call(e);
        if (0 === r.length) return n([]);
        for (var i = r.length, f = 0; r.length > f; f++) o(f, r[f]);
      });
    }),
    (n.resolve = function (e) {
      return e && "object" == typeof e && e.constructor === n
        ? e
        : new n(function (n) {
            n(e);
          });
    }),
    (n.reject = function (e) {
      return new n(function (n, t) {
        t(e);
      });
    }),
    (n.race = function (e) {
      return new n(function (n, t) {
        for (var o = 0, r = e.length; r > o; o++) e[o].then(n, t);
      });
    }),
    (n._immediateFn =
      ("function" == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        c(e, 0);
      }),
    (n._unhandledRejectionFn = function (e) {
      void 0 !== console &&
        console &&
        console.warn("Possible Unhandled Promise Rejection:", e);
    });
  var l = (function () {
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    if ("undefined" != typeof global) return global;
    throw Error("unable to locate global object");
  })();
  l.Promise
    ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = u)
    : (l.Promise = n);
});
