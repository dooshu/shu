!(function (t) {
    var e = {};
    function n(i) {
      if (e[i]) return e[i].exports;
      var r = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = t),
      (n.c = e),
      (n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            n.d(
              i,
              r,
              function (e) {
                return t[e];
              }.bind(null, r),
            );
        return i;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/"),
      n((n.s = 70));
  })([
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "requestAnimationFrame", function () {
          return r;
        }),
        n.d(e, "uuid", function () {
          return o;
        }),
        n.d(e, "documentHeight", function () {
          return a;
        }),
        n.d(e, "isElement", function () {
          return h;
        }),
        n.d(e, "isNumber", function () {
          return l;
        }),
        n.d(e, "isFloat", function () {
          return u;
        }),
        n.d(e, "prefixed", function () {
          return c;
        }),
        n.d(e, "defaults", function () {
          return d;
        }),
        n.d(e, "extend", function () {
          return f;
        }),
        n.d(e, "insert", function () {
          return p;
        }),
        n.d(e, "locationOf", function () {
          return g;
        }),
        n.d(e, "indexOfSorted", function () {
          return m;
        }),
        n.d(e, "bounds", function () {
          return v;
        }),
        n.d(e, "borders", function () {
          return y;
        }),
        n.d(e, "nodeBounds", function () {
          return b;
        }),
        n.d(e, "windowBounds", function () {
          return w;
        }),
        n.d(e, "indexOfNode", function () {
          return x;
        }),
        n.d(e, "indexOfTextNode", function () {
          return _;
        }),
        n.d(e, "indexOfElementNode", function () {
          return E;
        }),
        n.d(e, "isXml", function () {
          return k;
        }),
        n.d(e, "createBlob", function () {
          return S;
        }),
        n.d(e, "createBlobUrl", function () {
          return C;
        }),
        n.d(e, "revokeBlobUrl", function () {
          return T;
        }),
        n.d(e, "createBase64Url", function () {
          return A;
        }),
        n.d(e, "type", function () {
          return N;
        }),
        n.d(e, "parse", function () {
          return O;
        }),
        n.d(e, "qs", function () {
          return I;
        }),
        n.d(e, "qsa", function () {
          return R;
        }),
        n.d(e, "qsp", function () {
          return D;
        }),
        n.d(e, "sprint", function () {
          return L;
        }),
        n.d(e, "treeWalker", function () {
          return j;
        }),
        n.d(e, "walk", function () {
          return z;
        }),
        n.d(e, "blob2base64", function () {
          return P;
        }),
        n.d(e, "defer", function () {
          return B;
        }),
        n.d(e, "querySelectorByType", function () {
          return M;
        }),
        n.d(e, "findChildren", function () {
          return F;
        }),
        n.d(e, "parents", function () {
          return U;
        }),
        n.d(e, "filterChildren", function () {
          return q;
        }),
        n.d(e, "getParentByTagName", function () {
          return W;
        }),
        n.d(e, "RangeObject", function () {
          return H;
        });
      var i = n(18);
      const r =
          "undefined" != typeof window &&
          (window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame),
        s =
          "undefined" != typeof URL
            ? URL
            : "undefined" != typeof window
              ? window.URL || window.webkitURL || window.mozURL
              : void 0;
      function o() {
        var t = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return (
              (t = Math.floor(t / 16)), ("x" == e ? n : (7 & n) | 8).toString(16)
            );
          },
        );
      }
      function a() {
        return Math.max(
          document.documentElement.clientHeight,
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
        );
      }
      function h(t) {
        return !(!t || 1 != t.nodeType);
      }
      function l(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function u(t) {
        let e = parseFloat(t);
        return (
          !1 !== l(t) &&
          (("string" == typeof t && t.indexOf(".") > -1) || Math.floor(e) !== e)
        );
      }
      function c(t) {
        var e = ["-webkit-", "-webkit-", "-moz-", "-o-", "-ms-"],
          n = t.toLowerCase(),
          i = ["Webkit", "webkit", "Moz", "O", "ms"].length;
        if ("undefined" == typeof document || void 0 !== document.body.style[n])
          return t;
        for (var r = 0; r < i; r++)
          if (void 0 !== document.body.style[e[r] + n]) return e[r] + n;
        return t;
      }
      function d(t) {
        for (var e = 1, n = arguments.length; e < n; e++) {
          var i = arguments[e];
          for (var r in i) void 0 === t[r] && (t[r] = i[r]);
        }
        return t;
      }
      function f(t) {
        var e = [].slice.call(arguments, 1);
        return (
          e.forEach(function (e) {
            e &&
              Object.getOwnPropertyNames(e).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n),
                );
              });
          }),
          t
        );
      }
      function p(t, e, n) {
        var i = g(t, e, n);
        return e.splice(i, 0, t), i;
      }
      function g(t, e, n, i, r) {
        var s,
          o = i || 0,
          a = r || e.length,
          h = parseInt(o + (a - o) / 2);
        return (
          n ||
            (n = function (t, e) {
              return t > e ? 1 : t < e ? -1 : t == e ? 0 : void 0;
            }),
          a - o <= 0
            ? h
            : ((s = n(e[h], t)),
              a - o == 1
                ? s >= 0
                  ? h
                  : h + 1
                : 0 === s
                  ? h
                  : -1 === s
                    ? g(t, e, n, h, a)
                    : g(t, e, n, o, h))
        );
      }
      function m(t, e, n, i, r) {
        var s,
          o = i || 0,
          a = r || e.length,
          h = parseInt(o + (a - o) / 2);
        return (
          n ||
            (n = function (t, e) {
              return t > e ? 1 : t < e ? -1 : t == e ? 0 : void 0;
            }),
          a - o <= 0
            ? -1
            : ((s = n(e[h], t)),
              a - o == 1
                ? 0 === s
                  ? h
                  : -1
                : 0 === s
                  ? h
                  : -1 === s
                    ? m(t, e, n, h, a)
                    : m(t, e, n, o, h))
        );
      }
      function v(t) {
        var e = window.getComputedStyle(t),
          n = 0,
          i = 0;
        return (
          [
            "width",
            "paddingRight",
            "paddingLeft",
            "marginRight",
            "marginLeft",
            "borderRightWidth",
            "borderLeftWidth",
          ].forEach(function (t) {
            n += parseFloat(e[t]) || 0;
          }),
          [
            "height",
            "paddingTop",
            "paddingBottom",
            "marginTop",
            "marginBottom",
            "borderTopWidth",
            "borderBottomWidth",
          ].forEach(function (t) {
            i += parseFloat(e[t]) || 0;
          }),
          { height: i, width: n }
        );
      }
      function y(t) {
        var e = window.getComputedStyle(t),
          n = 0,
          i = 0;
        return (
          [
            "paddingRight",
            "paddingLeft",
            "marginRight",
            "marginLeft",
            "borderRightWidth",
            "borderLeftWidth",
          ].forEach(function (t) {
            n += parseFloat(e[t]) || 0;
          }),
          [
            "paddingTop",
            "paddingBottom",
            "marginTop",
            "marginBottom",
            "borderTopWidth",
            "borderBottomWidth",
          ].forEach(function (t) {
            i += parseFloat(e[t]) || 0;
          }),
          { height: i, width: n }
        );
      }
      function b(t) {
        let e,
          n = t.ownerDocument;
        if (t.nodeType == Node.TEXT_NODE) {
          let i = n.createRange();
          i.selectNodeContents(t), (e = i.getBoundingClientRect());
        } else e = t.getBoundingClientRect();
        return e;
      }
      function w() {
        var t = window.innerWidth,
          e = window.innerHeight;
        return { top: 0, left: 0, right: t, bottom: e, width: t, height: e };
      }
      function x(t, e) {
        for (
          var n, i = t.parentNode.childNodes, r = -1, s = 0;
          s < i.length && ((n = i[s]).nodeType === e && r++, n != t);
          s++
        );
        return r;
      }
      function _(t) {
        return x(t, 3);
      }
      function E(t) {
        return x(t, 1);
      }
      function k(t) {
        return ["xml", "opf", "ncx"].indexOf(t) > -1;
      }
      function S(t, e) {
        return new Blob([t], { type: e });
      }
      function C(t, e) {
        var n = S(t, e);
        return s.createObjectURL(n);
      }
      function T(t) {
        return s.revokeObjectURL(t);
      }
      function A(t, e) {
        if ("string" == typeof t)
          return "data:" + e + ";base64," + btoa(encodeURIComponent(t));
      }
      function N(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function O(t, e, n) {
        var r;
        return (
          (r = "undefined" == typeof DOMParser || n ? i.DOMParser : DOMParser),
          65279 === t.charCodeAt(0) && (t = t.slice(1)),
          new r().parseFromString(t, e)
        );
      }
      function I(t, e) {
        var n;
        if (!t) throw new Error("No Element Provided");
        return void 0 !== t.querySelector
          ? t.querySelector(e)
          : (n = t.getElementsByTagName(e)).length
            ? n[0]
            : void 0;
      }
      function R(t, e) {
        return void 0 !== t.querySelector
          ? t.querySelectorAll(e)
          : t.getElementsByTagName(e);
      }
      function D(t, e, n) {
        var i, r;
        if (void 0 !== t.querySelector) {
          for (var s in ((e += "["), n)) e += s + "~='" + n[s] + "'";
          return (e += "]"), t.querySelector(e);
        }
        if (
          ((i = t.getElementsByTagName(e)),
          (r = Array.prototype.slice.call(i, 0).filter(function (t) {
            for (var e in n) if (t.getAttribute(e) === n[e]) return !0;
            return !1;
          })))
        )
          return r[0];
      }
      function L(t, e) {
        void 0 !== (t.ownerDocument || t).createTreeWalker
          ? j(t, e, NodeFilter.SHOW_TEXT)
          : z(t, function (t) {
              t && 3 === t.nodeType && e(t);
            });
      }
      function j(t, e, n) {
        var i = document.createTreeWalker(t, n, null, !1);
        let r;
        for (; (r = i.nextNode()); ) e(r);
      }
      function z(t, e) {
        if (e(t)) return !0;
        if ((t = t.firstChild))
          do {
            if (z(t, e)) return !0;
            t = t.nextSibling;
          } while (t);
      }
      function P(t) {
        return new Promise(function (e, n) {
          var i = new FileReader();
          i.readAsDataURL(t),
            (i.onloadend = function () {
              e(i.result);
            });
        });
      }
      function B() {
        (this.resolve = null),
          (this.reject = null),
          (this.id = o()),
          (this.promise = new Promise((t, e) => {
            (this.resolve = t), (this.reject = e);
          })),
          Object.freeze(this);
      }
      function M(t, e, n) {
        var i;
        if (
          (void 0 !== t.querySelector &&
            (i = t.querySelector(`${e}[*|type="${n}"]`)),
          i && 0 !== i.length)
        )
          return i;
        i = R(t, e);
        for (var r = 0; r < i.length; r++)
          if (
            i[r].getAttributeNS("http://www.idpf.org/2007/ops", "type") === n ||
            i[r].getAttribute("epub:type") === n
          )
            return i[r];
      }
      function F(t) {
        for (var e = [], n = t.childNodes, i = 0; i < n.length; i++) {
          let t = n[i];
          1 === t.nodeType && e.push(t);
        }
        return e;
      }
      function U(t) {
        for (var e = [t]; t; t = t.parentNode) e.unshift(t);
        return e;
      }
      function q(t, e, n) {
        for (var i = [], r = t.childNodes, s = 0; s < r.length; s++) {
          let t = r[s];
          if (1 === t.nodeType && t.nodeName.toLowerCase() === e) {
            if (n) return t;
            i.push(t);
          }
        }
        if (!n) return i;
      }
      function W(t, e) {
        let n;
        if (null !== t && "" !== e)
          for (n = t.parentNode; 1 === n.nodeType; ) {
            if (n.tagName.toLowerCase() === e) return n;
            n = n.parentNode;
          }
      }
      class H {
        constructor() {
          (this.collapsed = !1),
            (this.commonAncestorContainer = void 0),
            (this.endContainer = void 0),
            (this.endOffset = void 0),
            (this.startContainer = void 0),
            (this.startOffset = void 0);
        }
        setStart(t, e) {
          (this.startContainer = t),
            (this.startOffset = e),
            this.endContainer
              ? (this.commonAncestorContainer = this._commonAncestorContainer())
              : this.collapse(!0),
            this._checkCollapsed();
        }
        setEnd(t, e) {
          (this.endContainer = t),
            (this.endOffset = e),
            this.startContainer
              ? ((this.collapsed = !1),
                (this.commonAncestorContainer = this._commonAncestorContainer()))
              : this.collapse(!1),
            this._checkCollapsed();
        }
        collapse(t) {
          (this.collapsed = !0),
            t
              ? ((this.endContainer = this.startContainer),
                (this.endOffset = this.startOffset),
                (this.commonAncestorContainer = this.startContainer.parentNode))
              : ((this.startContainer = this.endContainer),
                (this.startOffset = this.endOffset),
                (this.commonAncestorContainer = this.endOffset.parentNode));
        }
        selectNode(t) {
          let e = t.parentNode,
            n = Array.prototype.indexOf.call(e.childNodes, t);
          this.setStart(e, n), this.setEnd(e, n + 1);
        }
        selectNodeContents(t) {
          t.childNodes[t.childNodes - 1];
          let e =
            3 === t.nodeType ? t.textContent.length : parent.childNodes.length;
          this.setStart(t, 0), this.setEnd(t, e);
        }
        _commonAncestorContainer(t, e) {
          var n = U(t || this.startContainer),
            i = U(e || this.endContainer);
          if (n[0] == i[0])
            for (var r = 0; r < n.length; r++) if (n[r] != i[r]) return n[r - 1];
        }
        _checkCollapsed() {
          this.startContainer === this.endContainer &&
          this.startOffset === this.endOffset
            ? (this.collapsed = !0)
            : (this.collapsed = !1);
        }
        toString() {}
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return r;
        }),
        n.d(e, "c", function () {
          return s;
        });
      const i = "0.3",
        r = [
          "keydown",
          "keyup",
          "keypressed",
          "mouseup",
          "mousedown",
          "click",
          "touchend",
          "touchstart",
          "touchmove",
        ],
        s = {
          BOOK: { OPEN_FAILED: "openFailed" },
          CONTENTS: {
            EXPAND: "expand",
            RESIZE: "resize",
            SELECTED: "selected",
            SELECTED_RANGE: "selectedRange",
            LINK_CLICKED: "linkClicked",
          },
          LOCATIONS: { CHANGED: "changed" },
          MANAGERS: {
            RESIZE: "resize",
            RESIZED: "resized",
            ORIENTATION_CHANGE: "orientationchange",
            ADDED: "added",
            SCROLL: "scroll",
            SCROLLED: "scrolled",
            REMOVED: "removed",
          },
          VIEWS: {
            AXIS: "axis",
            WRITING_MODE: "writingMode",
            LOAD_ERROR: "loaderror",
            RENDERED: "rendered",
            RESIZED: "resized",
            DISPLAYED: "displayed",
            SHOWN: "shown",
            HIDDEN: "hidden",
            MARK_CLICKED: "markClicked",
          },
          RENDITION: {
            STARTED: "started",
            ATTACHED: "attached",
            DISPLAYED: "displayed",
            DISPLAY_ERROR: "displayerror",
            RENDERED: "rendered",
            REMOVED: "removed",
            RESIZED: "resized",
            ORIENTATION_CHANGE: "orientationchange",
            LOCATION_CHANGED: "locationChanged",
            RELOCATED: "relocated",
            MARK_CLICKED: "markClicked",
            SELECTED: "selected",
            LAYOUT: "layout",
          },
          LAYOUT: { UPDATED: "updated" },
          ANNOTATION: { ATTACH: "attach", DETACH: "detach" },
        };
    },
    function (t, e, n) {
      "use strict";
      var i = n(0);
      class r {
        constructor(t, e, n) {
          var s;
          if (
            ((this.str = ""),
            (this.base = {}),
            (this.spinePos = 0),
            (this.range = !1),
            (this.path = {}),
            (this.start = null),
            (this.end = null),
            !(this instanceof r))
          )
            return new r(t, e, n);
          if (
            ("string" == typeof e
              ? (this.base = this.parseComponent(e))
              : "object" == typeof e && e.steps && (this.base = e),
            "string" === (s = this.checkType(t)))
          )
            return (this.str = t), Object(i.extend)(this, this.parse(t));
          if ("range" === s)
            return Object(i.extend)(this, this.fromRange(t, this.base, n));
          if ("node" === s)
            return Object(i.extend)(this, this.fromNode(t, this.base, n));
          if ("EpubCFI" === s && t.path) return t;
          if (t) throw new TypeError("not a valid argument for EpubCFI");
          return this;
        }
        checkType(t) {
          return this.isCfiString(t)
            ? "string"
            : !t ||
                "object" != typeof t ||
                ("Range" !== Object(i.type)(t) && void 0 === t.startContainer)
              ? t && "object" == typeof t && void 0 !== t.nodeType
                ? "node"
                : !!(t && "object" == typeof t && t instanceof r) && "EpubCFI"
              : "range";
        }
        parse(t) {
          var e,
            n,
            i,
            r = {
              spinePos: -1,
              range: !1,
              base: {},
              path: {},
              start: null,
              end: null,
            };
          return "string" != typeof t
            ? { spinePos: -1 }
            : (0 === t.indexOf("epubcfi(") &&
                ")" === t[t.length - 1] &&
                (t = t.slice(8, t.length - 1)),
              (e = this.getChapterComponent(t))
                ? ((r.base = this.parseComponent(e)),
                  (n = this.getPathComponent(t)),
                  (r.path = this.parseComponent(n)),
                  (i = this.getRange(t)) &&
                    ((r.range = !0),
                    (r.start = this.parseComponent(i[0])),
                    (r.end = this.parseComponent(i[1]))),
                  (r.spinePos = r.base.steps[1].index),
                  r)
                : { spinePos: -1 });
        }
        parseComponent(t) {
          var e,
            n = { steps: [], terminal: { offset: null, assertion: null } },
            i = t.split(":"),
            r = i[0].split("/");
          return (
            i.length > 1 && ((e = i[1]), (n.terminal = this.parseTerminal(e))),
            "" === r[0] && r.shift(),
            (n.steps = r.map(
              function (t) {
                return this.parseStep(t);
              }.bind(this),
            )),
            n
          );
        }
        parseStep(t) {
          var e, n, i, r, s;
          if (
            ((r = t.match(/\[(.*)\]/)) && r[1] && (s = r[1]),
            (n = parseInt(t)),
            !isNaN(n))
          )
            return (
              n % 2 == 0
                ? ((e = "element"), (i = n / 2 - 1))
                : ((e = "text"), (i = (n - 1) / 2)),
              { type: e, index: i, id: s || null }
            );
        }
        parseTerminal(t) {
          var e,
            n,
            r = t.match(/\[(.*)\]/);
          return (
            r && r[1]
              ? ((e = parseInt(t.split("[")[0])), (n = r[1]))
              : (e = parseInt(t)),
            Object(i.isNumber)(e) || (e = null),
            { offset: e, assertion: n }
          );
        }
        getChapterComponent(t) {
          return t.split("!")[0];
        }
        getPathComponent(t) {
          var e = t.split("!");
          if (e[1]) {
            return e[1].split(",")[0];
          }
        }
        getRange(t) {
          var e = t.split(",");
          return 3 === e.length && [e[1], e[2]];
        }
        getCharecterOffsetComponent(t) {
          return t.split(":")[1] || "";
        }
        joinSteps(t) {
          return t
            ? t
                .map(function (t) {
                  var e = "";
                  return (
                    "element" === t.type && (e += 2 * (t.index + 1)),
                    "text" === t.type && (e += 1 + 2 * t.index),
                    t.id && (e += "[" + t.id + "]"),
                    e
                  );
                })
                .join("/")
            : "";
        }
        segmentString(t) {
          var e = "/";
          return (
            (e += this.joinSteps(t.steps)),
            t.terminal &&
              null != t.terminal.offset &&
              (e += ":" + t.terminal.offset),
            t.terminal &&
              null != t.terminal.assertion &&
              (e += "[" + t.terminal.assertion + "]"),
            e
          );
        }
        toString() {
          var t = "epubcfi(";
          return (
            (t += this.segmentString(this.base)),
            (t += "!"),
            (t += this.segmentString(this.path)),
            this.range &&
              this.start &&
              ((t += ","), (t += this.segmentString(this.start))),
            this.range &&
              this.end &&
              ((t += ","), (t += this.segmentString(this.end))),
            (t += ")")
          );
        }
        compare(t, e) {
          var n, i, s, o;
          if (
            ("string" == typeof t && (t = new r(t)),
            "string" == typeof e && (e = new r(e)),
            t.spinePos > e.spinePos)
          )
            return 1;
          if (t.spinePos < e.spinePos) return -1;
          t.range
            ? ((n = t.path.steps.concat(t.start.steps)), (s = t.start.terminal))
            : ((n = t.path.steps), (s = t.path.terminal)),
            e.range
              ? ((i = e.path.steps.concat(e.start.steps)), (o = e.start.terminal))
              : ((i = e.path.steps), (o = e.path.terminal));
          for (var a = 0; a < n.length; a++) {
            if (!n[a]) return -1;
            if (!i[a]) return 1;
            if (n[a].index > i[a].index) return 1;
            if (n[a].index < i[a].index) return -1;
          }
          return n.length < i.length
            ? -1
            : s.offset > o.offset
              ? 1
              : s.offset < o.offset
                ? -1
                : 0;
        }
        step(t) {
          var e = 3 === t.nodeType ? "text" : "element";
          return {
            id: t.id,
            tagName: t.tagName,
            type: e,
            index: this.position(t),
          };
        }
        filteredStep(t, e) {
          var n,
            i = this.filter(t, e);
          if (i)
            return (
              (n = 3 === i.nodeType ? "text" : "element"),
              {
                id: i.id,
                tagName: i.tagName,
                type: n,
                index: this.filteredPosition(i, e),
              }
            );
        }
        pathTo(t, e, n) {
          for (
            var i,
              r = { steps: [], terminal: { offset: null, assertion: null } },
              s = t;
            s && s.parentNode && 9 != s.parentNode.nodeType;
  
          )
            (i = n ? this.filteredStep(s, n) : this.step(s)) &&
              r.steps.unshift(i),
              (s = s.parentNode);
          return (
            null != e &&
              e >= 0 &&
              ((r.terminal.offset = e),
              "text" != r.steps[r.steps.length - 1].type &&
                r.steps.push({ type: "text", index: 0 })),
            r
          );
        }
        equalStep(t, e) {
          return (
            !(!t || !e) &&
            t.index === e.index &&
            t.id === e.id &&
            t.type === e.type
          );
        }
        fromRange(t, e, n) {
          var i = { range: !1, base: {}, path: {}, start: null, end: null },
            r = t.startContainer,
            s = t.endContainer,
            o = t.startOffset,
            a = t.endOffset,
            h = !1;
          if (
            (n && (h = null != r.ownerDocument.querySelector("." + n)),
            "string" == typeof e
              ? ((i.base = this.parseComponent(e)),
                (i.spinePos = i.base.steps[1].index))
              : "object" == typeof e && (i.base = e),
            t.collapsed)
          )
            h && (o = this.patchOffset(r, o, n)), (i.path = this.pathTo(r, o, n));
          else {
            (i.range = !0),
              h && (o = this.patchOffset(r, o, n)),
              (i.start = this.pathTo(r, o, n)),
              h && (a = this.patchOffset(s, a, n)),
              (i.end = this.pathTo(s, a, n)),
              (i.path = { steps: [], terminal: null });
            var l,
              u = i.start.steps.length;
            for (
              l = 0;
              l < u && this.equalStep(i.start.steps[l], i.end.steps[l]);
              l++
            )
              l === u - 1
                ? i.start.terminal === i.end.terminal &&
                  (i.path.steps.push(i.start.steps[l]), (i.range = !1))
                : i.path.steps.push(i.start.steps[l]);
            (i.start.steps = i.start.steps.slice(i.path.steps.length)),
              (i.end.steps = i.end.steps.slice(i.path.steps.length));
          }
          return i;
        }
        fromNode(t, e, n) {
          var i = { range: !1, base: {}, path: {}, start: null, end: null };
          return (
            "string" == typeof e
              ? ((i.base = this.parseComponent(e)),
                (i.spinePos = i.base.steps[1].index))
              : "object" == typeof e && (i.base = e),
            (i.path = this.pathTo(t, null, n)),
            i
          );
        }
        filter(t, e) {
          var n,
            i,
            r,
            s,
            o,
            a = !1;
          return (
            3 === t.nodeType
              ? ((a = !0),
                (r = t.parentNode),
                (n = t.parentNode.classList.contains(e)))
              : ((a = !1), (n = t.classList.contains(e))),
            n && a
              ? ((s = r.previousSibling),
                (o = r.nextSibling),
                s && 3 === s.nodeType
                  ? (i = s)
                  : o && 3 === o.nodeType && (i = o),
                i || t)
              : !(n && !a) && t
          );
        }
        patchOffset(t, e, n) {
          if (3 != t.nodeType) throw new Error("Anchor must be a text node");
          var i = t,
            r = e;
          for (
            t.parentNode.classList.contains(n) && (i = t.parentNode);
            i.previousSibling;
  
          ) {
            if (1 === i.previousSibling.nodeType) {
              if (!i.previousSibling.classList.contains(n)) break;
              r += i.previousSibling.textContent.length;
            } else r += i.previousSibling.textContent.length;
            i = i.previousSibling;
          }
          return r;
        }
        normalizedMap(t, e, n) {
          var i,
            r,
            s,
            o = {},
            a = -1,
            h = t.length;
          for (i = 0; i < h; i++)
            1 === (r = t[i].nodeType) && t[i].classList.contains(n) && (r = 3),
              i > 0 && 3 === r && 3 === s
                ? (o[i] = a)
                : e === r && ((a += 1), (o[i] = a)),
              (s = r);
          return o;
        }
        position(t) {
          var e, n;
          return (
            1 === t.nodeType
              ? ((e = t.parentNode.children) ||
                  (e = Object(i.findChildren)(t.parentNode)),
                (n = Array.prototype.indexOf.call(e, t)))
              : (n = (e = this.textNodes(t.parentNode)).indexOf(t)),
            n
          );
        }
        filteredPosition(t, e) {
          var n, i;
          return (
            1 === t.nodeType
              ? ((n = t.parentNode.children), (i = this.normalizedMap(n, 1, e)))
              : ((n = t.parentNode.childNodes),
                t.parentNode.classList.contains(e) &&
                  (n = (t = t.parentNode).parentNode.childNodes),
                (i = this.normalizedMap(n, 3, e))),
            i[Array.prototype.indexOf.call(n, t)]
          );
        }
        stepsToXpath(t) {
          var e = [".", "*"];
          return (
            t.forEach(function (t) {
              var n = t.index + 1;
              t.id
                ? e.push("*[position()=" + n + " and @id='" + t.id + "']")
                : "text" === t.type
                  ? e.push("text()[" + n + "]")
                  : e.push("*[" + n + "]");
            }),
            e.join("/")
          );
        }
        stepsToQuerySelector(t) {
          var e = ["html"];
          return (
            t.forEach(function (t) {
              var n = t.index + 1;
              t.id
                ? e.push("#" + t.id)
                : "text" === t.type || e.push("*:nth-child(" + n + ")");
            }),
            e.join(">")
          );
        }
        textNodes(t, e) {
          return Array.prototype.slice.call(t.childNodes).filter(function (t) {
            return 3 === t.nodeType || !(!e || !t.classList.contains(e));
          });
        }
        walkToNode(t, e, n) {
          var r,
            s,
            o = e || document,
            a = o.documentElement,
            h = t.length;
          for (
            s = 0;
            s < h &&
            ("element" === (r = t[s]).type
              ? (a = r.id
                  ? o.getElementById(r.id)
                  : (a.children || Object(i.findChildren)(a))[r.index])
              : "text" === r.type && (a = this.textNodes(a, n)[r.index]),
            a);
            s++
          );
          return a;
        }
        findNode(t, e, n) {
          var i,
            r,
            s = e || document;
          return (
            n || void 0 === s.evaluate
              ? (i = n ? this.walkToNode(t, s, n) : this.walkToNode(t, s))
              : ((r = this.stepsToXpath(t)),
                (i = s.evaluate(
                  r,
                  s,
                  null,
                  XPathResult.FIRST_ORDERED_NODE_TYPE,
                  null,
                ).singleNodeValue)),
            i
          );
        }
        fixMiss(t, e, n, i) {
          var r,
            s,
            o = this.findNode(t.slice(0, -1), n, i),
            a = o.childNodes,
            h = this.normalizedMap(a, 3, i),
            l = t[t.length - 1].index;
          for (let t in h) {
            if (!h.hasOwnProperty(t)) return;
            if (h[t] === l) {
              if (!(e > (s = (r = a[t]).textContent.length))) {
                o = 1 === r.nodeType ? r.childNodes[0] : r;
                break;
              }
              e -= s;
            }
          }
          return { container: o, offset: e };
        }
        toRange(t, e) {
          var n,
            r,
            s,
            o,
            a,
            h,
            l,
            u,
            c = t || document,
            d = !!e && null != c.querySelector("." + e);
          if (
            ((n =
              void 0 !== c.createRange ? c.createRange() : new i.RangeObject()),
            this.range
              ? ((r = this.start),
                (h = this.path.steps.concat(r.steps)),
                (o = this.findNode(h, c, d ? e : null)),
                (s = this.end),
                (l = this.path.steps.concat(s.steps)),
                (a = this.findNode(l, c, d ? e : null)))
              : ((r = this.path),
                (h = this.path.steps),
                (o = this.findNode(this.path.steps, c, d ? e : null))),
            !o)
          )
            return (
              console.log("No startContainer found for", this.toString()), null
            );
          try {
            null != r.terminal.offset
              ? n.setStart(o, r.terminal.offset)
              : n.setStart(o, 0);
          } catch (t) {
            (u = this.fixMiss(h, r.terminal.offset, c, d ? e : null)),
              n.setStart(u.container, u.offset);
          }
          if (a)
            try {
              null != s.terminal.offset
                ? n.setEnd(a, s.terminal.offset)
                : n.setEnd(a, 0);
            } catch (t) {
              (u = this.fixMiss(l, this.end.terminal.offset, c, d ? e : null)),
                n.setEnd(u.container, u.offset);
            }
          return n;
        }
        isCfiString(t) {
          return (
            "string" == typeof t &&
            0 === t.indexOf("epubcfi(") &&
            ")" === t[t.length - 1]
          );
        }
        generateChapterComponent(t, e, n) {
          var i = "/" + 2 * (t + 1) + "/";
          return (i += 2 * (parseInt(e) + 1)), n && (i += "[" + n + "]"), i;
        }
        collapse(t) {
          this.range &&
            ((this.range = !1),
            t
              ? ((this.path.steps = this.path.steps.concat(this.start.steps)),
                (this.path.terminal = this.start.terminal))
              : ((this.path.steps = this.path.steps.concat(this.end.steps)),
                (this.path.terminal = this.end.terminal)));
        }
      }
      e.a = r;
    },
    function (t, e, n) {
      "use strict";
      var i,
        r,
        s,
        o,
        a,
        h,
        l,
        u = n(33),
        c = n(50),
        d = Function.prototype.apply,
        f = Function.prototype.call,
        p = Object.create,
        g = Object.defineProperty,
        m = Object.defineProperties,
        v = Object.prototype.hasOwnProperty,
        y = { configurable: !0, enumerable: !1, writable: !0 };
      (r = function (t, e) {
        var n, r;
        return (
          c(e),
          (r = this),
          i.call(
            this,
            t,
            (n = function () {
              s.call(r, t, n), d.call(e, this, arguments);
            }),
          ),
          (n.__eeOnceListener__ = e),
          this
        );
      }),
        (a = {
          on: (i = function (t, e) {
            var n;
            return (
              c(e),
              v.call(this, "__ee__")
                ? (n = this.__ee__)
                : ((n = y.value = p(null)),
                  g(this, "__ee__", y),
                  (y.value = null)),
              n[t]
                ? "object" == typeof n[t]
                  ? n[t].push(e)
                  : (n[t] = [n[t], e])
                : (n[t] = e),
              this
            );
          }),
          once: r,
          off: (s = function (t, e) {
            var n, i, r, s;
            if ((c(e), !v.call(this, "__ee__"))) return this;
            if (!(n = this.__ee__)[t]) return this;
            if ("object" == typeof (i = n[t]))
              for (s = 0; (r = i[s]); ++s)
                (r !== e && r.__eeOnceListener__ !== e) ||
                  (2 === i.length ? (n[t] = i[s ? 0 : 1]) : i.splice(s, 1));
            else (i !== e && i.__eeOnceListener__ !== e) || delete n[t];
            return this;
          }),
          emit: (o = function (t) {
            var e, n, i, r, s;
            if (v.call(this, "__ee__") && (r = this.__ee__[t]))
              if ("object" == typeof r) {
                for (
                  n = arguments.length, s = new Array(n - 1), e = 1;
                  e < n;
                  ++e
                )
                  s[e - 1] = arguments[e];
                for (r = r.slice(), e = 0; (i = r[e]); ++e) d.call(i, this, s);
              } else
                switch (arguments.length) {
                  case 1:
                    f.call(r, this);
                    break;
                  case 2:
                    f.call(r, this, arguments[1]);
                    break;
                  case 3:
                    f.call(r, this, arguments[1], arguments[2]);
                    break;
                  default:
                    for (
                      n = arguments.length, s = new Array(n - 1), e = 1;
                      e < n;
                      ++e
                    )
                      s[e - 1] = arguments[e];
                    d.call(r, this, s);
                }
          }),
        }),
        (h = { on: u(i), once: u(r), off: u(s), emit: u(o) }),
        (l = m({}, h)),
        (t.exports = e =
          function (t) {
            return null == t ? p(l) : m(Object(t), h);
          }),
        (e.methods = a);
    },
    function (t, e, n) {
      "use strict";
      var i = n(7),
        r = n.n(i);
      e.a = class {
        constructor(t) {
          var e;
          t.indexOf("://") > -1 && (t = new URL(t).pathname),
            (e = this.parse(t)),
            (this.path = t),
            this.isDirectory(t)
              ? (this.directory = t)
              : (this.directory = e.dir + "/"),
            (this.filename = e.base),
            (this.extension = e.ext.slice(1));
        }
        parse(t) {
          return r.a.parse(t);
        }
        isAbsolute(t) {
          return r.a.isAbsolute(t || this.path);
        }
        isDirectory(t) {
          return "/" === t.charAt(t.length - 1);
        }
        resolve(t) {
          return r.a.resolve(this.directory, t);
        }
        relative(t) {
          return t && t.indexOf("://") > -1 ? t : r.a.relative(this.directory, t);
        }
        splitPath(t) {
          return this.splitPathRe.exec(t).slice(1);
        }
        toString() {
          return this.path;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(4),
        r = n(7),
        s = n.n(r);
      e.a = class {
        constructor(t, e) {
          var n = t.indexOf("://") > -1,
            r = t;
          if (
            ((this.Url = void 0),
            (this.href = t),
            (this.protocol = ""),
            (this.origin = ""),
            (this.hash = ""),
            (this.hash = ""),
            (this.search = ""),
            (this.base = e),
            !n &&
              !1 !== e &&
              "string" != typeof e &&
              window &&
              window.location &&
              (this.base = window.location.href),
            n || this.base)
          )
            try {
              this.base
                ? (this.Url = new URL(t, this.base))
                : (this.Url = new URL(t)),
                (this.href = this.Url.href),
                (this.protocol = this.Url.protocol),
                (this.origin = this.Url.origin),
                (this.hash = this.Url.hash),
                (this.search = this.Url.search),
                (r =
                  this.Url.pathname + (this.Url.search ? this.Url.search : ""));
            } catch (t) {
              (this.Url = void 0),
                this.base && (r = new i.a(this.base).resolve(r));
            }
          (this.Path = new i.a(r)),
            (this.directory = this.Path.directory),
            (this.filename = this.Path.filename),
            (this.extension = this.Path.extension);
        }
        path() {
          return this.Path;
        }
        resolve(t) {
          var e;
          return t.indexOf("://") > -1
            ? t
            : ((e = s.a.resolve(this.directory, t)), this.origin + e);
        }
        relative(t) {
          return s.a.relative(t, this.directory);
        }
        toString() {
          return this.href;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = class {
        constructor(t) {
          (this.context = t || this), (this.hooks = []);
        }
        register() {
          for (var t = 0; t < arguments.length; ++t)
            if ("function" == typeof arguments[t]) this.hooks.push(arguments[t]);
            else
              for (var e = 0; e < arguments[t].length; ++e)
                this.hooks.push(arguments[t][e]);
        }
        deregister(t) {
          let e;
          for (let n = 0; n < this.hooks.length; n++)
            if (((e = this.hooks[n]), e === t)) {
              this.hooks.splice(n, 1);
              break;
            }
        }
        trigger() {
          var t = arguments,
            e = this.context,
            n = [];
          return (
            this.hooks.forEach(function (i) {
              var r = i.apply(e, t);
              r && "function" == typeof r.then && n.push(r);
            }),
            Promise.all(n)
          );
        }
        list() {
          return this.hooks;
        }
        clear() {
          return (this.hooks = []);
        }
      };
    },
    function (t, e, n) {
      "use strict";
      if (!i)
        var i = {
          cwd: function () {
            return "/";
          },
        };
      function r(t) {
        if ("string" != typeof t)
          throw new TypeError("Path must be a string. Received " + t);
      }
      function s(t, e) {
        for (var n, i = "", r = -1, s = 0, o = 0; o <= t.length; ++o) {
          if (o < t.length) n = t.charCodeAt(o);
          else {
            if (47 === n) break;
            n = 47;
          }
          if (47 === n) {
            if (r === o - 1 || 1 === s);
            else if (r !== o - 1 && 2 === s) {
              if (
                i.length < 2 ||
                46 !== i.charCodeAt(i.length - 1) ||
                46 !== i.charCodeAt(i.length - 2)
              )
                if (i.length > 2) {
                  for (
                    var a = i.length - 1, h = a;
                    h >= 0 && 47 !== i.charCodeAt(h);
                    --h
                  );
                  if (h !== a) {
                    (i = -1 === h ? "" : i.slice(0, h)), (r = o), (s = 0);
                    continue;
                  }
                } else if (2 === i.length || 1 === i.length) {
                  (i = ""), (r = o), (s = 0);
                  continue;
                }
              e && (i.length > 0 ? (i += "/..") : (i = ".."));
            } else
              i.length > 0
                ? (i += "/" + t.slice(r + 1, o))
                : (i = t.slice(r + 1, o));
            (r = o), (s = 0);
          } else 46 === n && -1 !== s ? ++s : (s = -1);
        }
        return i;
      }
      var o = {
        resolve: function () {
          for (
            var t, e = "", n = !1, o = arguments.length - 1;
            o >= -1 && !n;
            o--
          ) {
            var a;
            o >= 0
              ? (a = arguments[o])
              : (void 0 === t && (t = i.cwd()), (a = t)),
              r(a),
              0 !== a.length && ((e = a + "/" + e), (n = 47 === a.charCodeAt(0)));
          }
          return (
            (e = s(e, !n)),
            n ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
          );
        },
        normalize: function (t) {
          if ((r(t), 0 === t.length)) return ".";
          var e = 47 === t.charCodeAt(0),
            n = 47 === t.charCodeAt(t.length - 1);
          return (
            0 !== (t = s(t, !e)).length || e || (t = "."),
            t.length > 0 && n && (t += "/"),
            e ? "/" + t : t
          );
        },
        isAbsolute: function (t) {
          return r(t), t.length > 0 && 47 === t.charCodeAt(0);
        },
        join: function () {
          if (0 === arguments.length) return ".";
          for (var t, e = 0; e < arguments.length; ++e) {
            var n = arguments[e];
            r(n), n.length > 0 && (void 0 === t ? (t = n) : (t += "/" + n));
          }
          return void 0 === t ? "." : o.normalize(t);
        },
        relative: function (t, e) {
          if ((r(t), r(e), t === e)) return "";
          if ((t = o.resolve(t)) === (e = o.resolve(e))) return "";
          for (var n = 1; n < t.length && 47 === t.charCodeAt(n); ++n);
          for (
            var i = t.length, s = i - n, a = 1;
            a < e.length && 47 === e.charCodeAt(a);
            ++a
          );
          for (
            var h = e.length - a, l = s < h ? s : h, u = -1, c = 0;
            c <= l;
            ++c
          ) {
            if (c === l) {
              if (h > l) {
                if (47 === e.charCodeAt(a + c)) return e.slice(a + c + 1);
                if (0 === c) return e.slice(a + c);
              } else
                s > l &&
                  (47 === t.charCodeAt(n + c) ? (u = c) : 0 === c && (u = 0));
              break;
            }
            var d = t.charCodeAt(n + c);
            if (d !== e.charCodeAt(a + c)) break;
            47 === d && (u = c);
          }
          var f = "";
          for (c = n + u + 1; c <= i; ++c)
            (c !== i && 47 !== t.charCodeAt(c)) ||
              (0 === f.length ? (f += "..") : (f += "/.."));
          return f.length > 0
            ? f + e.slice(a + u)
            : ((a += u), 47 === e.charCodeAt(a) && ++a, e.slice(a));
        },
        _makeLong: function (t) {
          return t;
        },
        dirname: function (t) {
          if ((r(t), 0 === t.length)) return ".";
          for (
            var e = t.charCodeAt(0),
              n = 47 === e,
              i = -1,
              s = !0,
              o = t.length - 1;
            o >= 1;
            --o
          )
            if (47 === (e = t.charCodeAt(o))) {
              if (!s) {
                i = o;
                break;
              }
            } else s = !1;
          return -1 === i ? (n ? "/" : ".") : n && 1 === i ? "//" : t.slice(0, i);
        },
        basename: function (t, e) {
          if (void 0 !== e && "string" != typeof e)
            throw new TypeError('"ext" argument must be a string');
          r(t);
          var n,
            i = 0,
            s = -1,
            o = !0;
          if (void 0 !== e && e.length > 0 && e.length <= t.length) {
            if (e.length === t.length && e === t) return "";
            var a = e.length - 1,
              h = -1;
            for (n = t.length - 1; n >= 0; --n) {
              var l = t.charCodeAt(n);
              if (47 === l) {
                if (!o) {
                  i = n + 1;
                  break;
                }
              } else
                -1 === h && ((o = !1), (h = n + 1)),
                  a >= 0 &&
                    (l === e.charCodeAt(a)
                      ? -1 == --a && (s = n)
                      : ((a = -1), (s = h)));
            }
            return i === s ? (s = h) : -1 === s && (s = t.length), t.slice(i, s);
          }
          for (n = t.length - 1; n >= 0; --n)
            if (47 === t.charCodeAt(n)) {
              if (!o) {
                i = n + 1;
                break;
              }
            } else -1 === s && ((o = !1), (s = n + 1));
          return -1 === s ? "" : t.slice(i, s);
        },
        extname: function (t) {
          r(t);
          for (
            var e = -1, n = 0, i = -1, s = !0, o = 0, a = t.length - 1;
            a >= 0;
            --a
          ) {
            var h = t.charCodeAt(a);
            if (47 !== h)
              -1 === i && ((s = !1), (i = a + 1)),
                46 === h
                  ? -1 === e
                    ? (e = a)
                    : 1 !== o && (o = 1)
                  : -1 !== e && (o = -1);
            else if (!s) {
              n = a + 1;
              break;
            }
          }
          return -1 === e ||
            -1 === i ||
            0 === o ||
            (1 === o && e === i - 1 && e === n + 1)
            ? ""
            : t.slice(e, i);
        },
        format: function (t) {
          if (null === t || "object" != typeof t)
            throw new TypeError(
              'Parameter "pathObject" must be an object, not ' + typeof t,
            );
          return (function (t, e) {
            var n = e.dir || e.root,
              i = e.base || (e.name || "") + (e.ext || "");
            return n ? (n === e.root ? n + i : n + t + i) : i;
          })("/", t);
        },
        parse: function (t) {
          r(t);
          var e = { root: "", dir: "", base: "", ext: "", name: "" };
          if (0 === t.length) return e;
          var n,
            i = t.charCodeAt(0),
            s = 47 === i;
          s ? ((e.root = "/"), (n = 1)) : (n = 0);
          for (
            var o = -1, a = 0, h = -1, l = !0, u = t.length - 1, c = 0;
            u >= n;
            --u
          )
            if (47 !== (i = t.charCodeAt(u)))
              -1 === h && ((l = !1), (h = u + 1)),
                46 === i
                  ? -1 === o
                    ? (o = u)
                    : 1 !== c && (c = 1)
                  : -1 !== o && (c = -1);
            else if (!l) {
              a = u + 1;
              break;
            }
          return (
            -1 === o ||
            -1 === h ||
            0 === c ||
            (1 === c && o === h - 1 && o === a + 1)
              ? -1 !== h &&
                (e.base = e.name = 0 === a && s ? t.slice(1, h) : t.slice(a, h))
              : (0 === a && s
                  ? ((e.name = t.slice(1, o)), (e.base = t.slice(1, h)))
                  : ((e.name = t.slice(a, o)), (e.base = t.slice(a, h))),
                (e.ext = t.slice(o, h))),
            a > 0 ? (e.dir = t.slice(0, a - 1)) : s && (e.dir = "/"),
            e
          );
        },
        sep: "/",
        delimiter: ":",
        posix: null,
      };
      t.exports = o;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "d", function () {
          return a;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return l;
        });
      var i = n(0),
        r = n(5);
      n(4);
      function s(t, e) {
        var n,
          r,
          s = e.url,
          o = s.indexOf("://") > -1;
        t &&
          ((r = Object(i.qs)(t, "head")),
          (n = Object(i.qs)(r, "base")) ||
            ((n = t.createElement("base")), r.insertBefore(n, r.firstChild)),
          !o && window && window.location && (s = window.location.origin + s),
          n.setAttribute("href", s));
      }
      function o(t, e) {
        var n,
          r,
          s = e.canonical;
        t &&
          ((n = Object(i.qs)(t, "head")),
          (r = Object(i.qs)(n, "link[rel='canonical']"))
            ? r.setAttribute("href", s)
            : ((r = t.createElement("link")).setAttribute("rel", "canonical"),
              r.setAttribute("href", s),
              n.appendChild(r)));
      }
      function a(t, e) {
        var n,
          r,
          s = e.idref;
        t &&
          ((n = Object(i.qs)(t, "head")),
          (r = Object(i.qs)(n, "link[property='dc.identifier']"))
            ? r.setAttribute("content", s)
            : ((r = t.createElement("meta")).setAttribute(
                "name",
                "dc.identifier",
              ),
              r.setAttribute("content", s),
              n.appendChild(r)));
      }
      function h(t, e) {
        var n = t.querySelectorAll("a[href]");
        if (n.length)
          for (
            var s = Object(i.qs)(t.ownerDocument, "base"),
              o = s ? s.getAttribute("href") : void 0,
              a = function (t) {
                var n = t.getAttribute("href");
                if (0 !== n.indexOf("mailto:"))
                  if (n.indexOf("://") > -1) t.setAttribute("target", "_blank");
                  else {
                    var i;
                    try {
                      i = new r.a(n, o);
                    } catch (t) {}
                    t.onclick = function () {
                      return (
                        i && i.hash
                          ? e(i.Path.path + i.hash)
                          : e(i ? i.Path.path : n),
                        !1
                      );
                    };
                  }
              }.bind(this),
              h = 0;
            h < n.length;
            h++
          )
            a(n[h]);
      }
      function l(t, e, n) {
        return (
          e.forEach(function (e, i) {
            e &&
              n[i] &&
              ((e = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
              (t = t.replace(new RegExp(e, "g"), n[i])));
          }),
          t
        );
      }
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      var i = n(3),
        r = n.n(i),
        s = n(0),
        o = n(2),
        a = n(14),
        h = n(8),
        l = n(1);
      const u = "undefined" != typeof navigator,
        c = u && /Chrome/.test(navigator.userAgent),
        d = u && !c && /AppleWebKit/.test(navigator.userAgent);
      class f {
        constructor(t, e, n, i) {
          (this.epubcfi = new o.a()),
            (this.document = t),
            (this.documentElement = this.document.documentElement),
            (this.content = e || this.document.body),
            (this.window = this.document.defaultView),
            (this._size = { width: 0, height: 0 }),
            (this.sectionIndex = i || 0),
            (this.cfiBase = n || ""),
            this.epubReadingSystem("epub.js", l.b),
            (this.called = 0),
            (this.active = !0),
            this.listeners();
        }
        static get listenedEvents() {
          return l.a;
        }
        width(t) {
          var e = this.content;
          return (
            t && Object(s.isNumber)(t) && (t += "px"),
            t && (e.style.width = t),
            parseInt(this.window.getComputedStyle(e).width)
          );
        }
        height(t) {
          var e = this.content;
          return (
            t && Object(s.isNumber)(t) && (t += "px"),
            t && (e.style.height = t),
            parseInt(this.window.getComputedStyle(e).height)
          );
        }
        contentWidth(t) {
          var e = this.content || this.document.body;
          return (
            t && Object(s.isNumber)(t) && (t += "px"),
            t && (e.style.width = t),
            parseInt(this.window.getComputedStyle(e).width)
          );
        }
        contentHeight(t) {
          var e = this.content || this.document.body;
          return (
            t && Object(s.isNumber)(t) && (t += "px"),
            t && (e.style.height = t),
            parseInt(this.window.getComputedStyle(e).height)
          );
        }
        textWidth() {
          let t,
            e,
            n = this.document.createRange(),
            i = this.content || this.document.body,
            r = Object(s.borders)(i);
          return (
            n.selectNodeContents(i),
            (t = n.getBoundingClientRect()),
            (e = t.width),
            r && r.width && (e += r.width),
            Math.round(e)
          );
        }
        textHeight() {
          let t,
            e,
            n = this.document.createRange(),
            i = this.content || this.document.body;
          return (
            n.selectNodeContents(i),
            (t = n.getBoundingClientRect()),
            (e = t.bottom),
            Math.round(e)
          );
        }
        scrollWidth() {
          return this.documentElement.scrollWidth;
        }
        scrollHeight() {
          return this.documentElement.scrollHeight;
        }
        overflow(t) {
          return (
            t && (this.documentElement.style.overflow = t),
            this.window.getComputedStyle(this.documentElement).overflow
          );
        }
        overflowX(t) {
          return (
            t && (this.documentElement.style.overflowX = t),
            this.window.getComputedStyle(this.documentElement).overflowX
          );
        }
        overflowY(t) {
          return (
            t && (this.documentElement.style.overflowY = t),
            this.window.getComputedStyle(this.documentElement).overflowY
          );
        }
        css(t, e, n) {
          var i = this.content || this.document.body;
          return (
            e
              ? i.style.setProperty(t, e, n ? "important" : "")
              : i.style.removeProperty(t),
            this.window.getComputedStyle(i)[t]
          );
        }
        viewport(t) {
          var e,
            n = this.document.querySelector("meta[name='viewport']"),
            i = {
              width: void 0,
              height: void 0,
              scale: void 0,
              minimum: void 0,
              maximum: void 0,
              scalable: void 0,
            },
            r = [];
          if (n && n.hasAttribute("content")) {
            let t = n.getAttribute("content"),
              e = t.match(/width\s*=\s*([^,]*)/),
              r = t.match(/height\s*=\s*([^,]*)/),
              s = t.match(/initial-scale\s*=\s*([^,]*)/),
              o = t.match(/minimum-scale\s*=\s*([^,]*)/),
              a = t.match(/maximum-scale\s*=\s*([^,]*)/),
              h = t.match(/user-scalable\s*=\s*([^,]*)/);
            e && e.length && void 0 !== e[1] && (i.width = e[1]),
              r && r.length && void 0 !== r[1] && (i.height = r[1]),
              s && s.length && void 0 !== s[1] && (i.scale = s[1]),
              o && o.length && void 0 !== o[1] && (i.minimum = o[1]),
              a && a.length && void 0 !== a[1] && (i.maximum = a[1]),
              h && h.length && void 0 !== h[1] && (i.scalable = h[1]);
          }
          return (
            (e = Object(s.defaults)(t || {}, i)),
            t &&
              (e.width && r.push("width=" + e.width),
              e.height && r.push("height=" + e.height),
              e.scale && r.push("initial-scale=" + e.scale),
              "no" === e.scalable
                ? (r.push("minimum-scale=" + e.scale),
                  r.push("maximum-scale=" + e.scale),
                  r.push("user-scalable=" + e.scalable))
                : (e.scalable && r.push("user-scalable=" + e.scalable),
                  e.minimum && r.push("minimum-scale=" + e.minimum),
                  e.maximum && r.push("minimum-scale=" + e.maximum)),
              n ||
                ((n = this.document.createElement("meta")).setAttribute(
                  "name",
                  "viewport",
                ),
                this.document.querySelector("head").appendChild(n)),
              n.setAttribute("content", r.join(", ")),
              this.window.scrollTo(0, 0)),
            e
          );
        }
        expand() {
          this.emit(l.c.CONTENTS.EXPAND);
        }
        listeners() {
          this.imageLoadListeners(),
            this.mediaQueryListeners(),
            this.addEventListeners(),
            this.addSelectionListeners(),
            "undefined" == typeof ResizeObserver
              ? (this.resizeListeners(), this.visibilityListeners())
              : this.resizeObservers(),
            this.linksHandler();
        }
        removeListeners() {
          this.removeEventListeners(),
            this.removeSelectionListeners(),
            this.observer && this.observer.disconnect(),
            clearTimeout(this.expanding);
        }
        resizeCheck() {
          let t = this.textWidth(),
            e = this.textHeight();
          (t == this._size.width && e == this._size.height) ||
            ((this._size = { width: t, height: e }),
            this.onResize && this.onResize(this._size),
            this.emit(l.c.CONTENTS.RESIZE, this._size));
        }
        resizeListeners() {
          clearTimeout(this.expanding),
            requestAnimationFrame(this.resizeCheck.bind(this)),
            (this.expanding = setTimeout(this.resizeListeners.bind(this), 350));
        }
        visibilityListeners() {
          document.addEventListener("visibilitychange", () => {
            "visible" === document.visibilityState && !1 === this.active
              ? ((this.active = !0), this.resizeListeners())
              : ((this.active = !1), clearTimeout(this.expanding));
          });
        }
        transitionListeners() {
          let t = this.content;
          (t.style.transitionProperty =
            "font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height"),
            (t.style.transitionDuration = "0.001ms"),
            (t.style.transitionTimingFunction = "linear"),
            (t.style.transitionDelay = "0"),
            (this._resizeCheck = this.resizeCheck.bind(this)),
            this.document.addEventListener("transitionend", this._resizeCheck);
        }
        mediaQueryListeners() {
          for (
            var t = this.document.styleSheets,
              e = function (t) {
                t.matches &&
                  !this._expanding &&
                  setTimeout(this.expand.bind(this), 1);
              }.bind(this),
              n = 0;
            n < t.length;
            n += 1
          ) {
            var i;
            try {
              i = t[n].cssRules;
            } catch (t) {
              return;
            }
            if (!i) return;
            for (var r = 0; r < i.length; r += 1) {
              if (i[r].media)
                this.window.matchMedia(i[r].media.mediaText).addListener(e);
            }
          }
        }
        resizeObservers() {
          (this.observer = new ResizeObserver((t) => {
            requestAnimationFrame(this.resizeCheck.bind(this));
          })),
            this.observer.observe(this.document.documentElement);
        }
        mutationObservers() {
          this.observer = new MutationObserver((t) => {
            this.resizeCheck();
          });
          this.observer.observe(this.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          });
        }
        imageLoadListeners() {
          for (
            var t, e = this.document.querySelectorAll("img"), n = 0;
            n < e.length;
            n++
          )
            void 0 !== (t = e[n]).naturalWidth &&
              0 === t.naturalWidth &&
              (t.onload = this.expand.bind(this));
        }
        fontLoadListeners() {
          this.document &&
            this.document.fonts &&
            this.document.fonts.ready.then(
              function () {
                this.resizeCheck();
              }.bind(this),
            );
        }
        root() {
          return this.document ? this.document.documentElement : null;
        }
        locationOf(t, e) {
          var n,
            i = { left: 0, top: 0 };
          if (!this.document) return i;
          if (this.epubcfi.isCfiString(t)) {
            let r = new o.a(t).toRange(this.document, e);
            if (r) {
              try {
                if (
                  !r.endContainer ||
                  (r.startContainer == r.endContainer &&
                    r.startOffset == r.endOffset)
                ) {
                  let t = r.startContainer.textContent.indexOf(
                    " ",
                    r.startOffset,
                  );
                  -1 == t && (t = r.startContainer.textContent.length),
                    r.setEnd(r.startContainer, t);
                }
              } catch (t) {
                console.error(
                  "setting end offset to start container length failed",
                  t,
                );
              }
              if (r.startContainer.nodeType === Node.ELEMENT_NODE)
                (n = r.startContainer.getBoundingClientRect()),
                  (i.left = n.left),
                  (i.top = n.top);
              else if (d) {
                let t = r.startContainer,
                  e = new Range();
                try {
                  1 === t.nodeType
                    ? (n = t.getBoundingClientRect())
                    : r.startOffset + 2 < t.length
                      ? (e.setStart(t, r.startOffset),
                        e.setEnd(t, r.startOffset + 2),
                        (n = e.getBoundingClientRect()))
                      : r.startOffset - 2 > 0
                        ? (e.setStart(t, r.startOffset - 2),
                          e.setEnd(t, r.startOffset),
                          (n = e.getBoundingClientRect()))
                        : (n = t.parentNode.getBoundingClientRect());
                } catch (t) {
                  console.error(t, t.stack);
                }
              } else n = r.getBoundingClientRect();
            }
          } else if ("string" == typeof t && t.indexOf("#") > -1) {
            let e = t.substring(t.indexOf("#") + 1),
              i = this.document.getElementById(e);
            if (i)
              if (d) {
                let t = new Range();
                t.selectNode(i), (n = t.getBoundingClientRect());
              } else n = i.getBoundingClientRect();
          }
          return n && ((i.left = n.left), (i.top = n.top)), i;
        }
        addStylesheet(t) {
          return new Promise(
            function (e, n) {
              var i,
                r = !1;
              this.document
                ? (i = this.document.querySelector("link[href='" + t + "']"))
                  ? e(!0)
                  : (((i = this.document.createElement("link")).type =
                      "text/css"),
                    (i.rel = "stylesheet"),
                    (i.href = t),
                    (i.onload = i.onreadystatechange =
                      function () {
                        r ||
                          (this.readyState && "complete" != this.readyState) ||
                          ((r = !0),
                          setTimeout(() => {
                            e(!0);
                          }, 1));
                      }),
                    this.document.head.appendChild(i))
                : e(!1);
            }.bind(this),
          );
        }
        _getStylesheetNode(t) {
          var e;
          return (
            (t = "epubjs-inserted-css-" + (t || "")),
            !!this.document &&
              ((e = this.document.getElementById(t)) ||
                (((e = this.document.createElement("style")).id = t),
                this.document.head.appendChild(e)),
              e)
          );
        }
        addStylesheetCss(t, e) {
          return (
            !(!this.document || !t) &&
            ((this._getStylesheetNode(e).innerHTML = t), !0)
          );
        }
        addStylesheetRules(t, e) {
          var n;
          if (this.document && t && 0 !== t.length)
            if (
              ((n = this._getStylesheetNode(e).sheet),
              "[object Array]" === Object.prototype.toString.call(t))
            )
              for (var i = 0, r = t.length; i < r; i++) {
                var s = 1,
                  o = t[i],
                  a = t[i][0],
                  h = "";
                "[object Array]" === Object.prototype.toString.call(o[1][0]) &&
                  ((o = o[1]), (s = 0));
                for (var l = o.length; s < l; s++) {
                  var u = o[s];
                  h += u[0] + ":" + u[1] + (u[2] ? " !important" : "") + ";\n";
                }
                n.insertRule(a + "{" + h + "}", n.cssRules.length);
              }
            else {
              Object.keys(t).forEach((e) => {
                const i = t[e];
                if (Array.isArray(i))
                  i.forEach((t) => {
                    const i = Object.keys(t)
                      .map((e) => `${e}:${t[e]}`)
                      .join(";");
                    n.insertRule(`${e}{${i}}`, n.cssRules.length);
                  });
                else {
                  const t = Object.keys(i)
                    .map((t) => `${t}:${i[t]}`)
                    .join(";");
                  n.insertRule(`${e}{${t}}`, n.cssRules.length);
                }
              });
            }
        }
        addScript(t) {
          return new Promise(
            function (e, n) {
              var i,
                r = !1;
              this.document
                ? (((i = this.document.createElement("script")).type =
                    "text/javascript"),
                  (i.async = !0),
                  (i.src = t),
                  (i.onload = i.onreadystatechange =
                    function () {
                      r ||
                        (this.readyState && "complete" != this.readyState) ||
                        ((r = !0),
                        setTimeout(function () {
                          e(!0);
                        }, 1));
                    }),
                  this.document.head.appendChild(i))
                : e(!1);
            }.bind(this),
          );
        }
        addClass(t) {
          var e;
          this.document &&
            (e = this.content || this.document.body) &&
            e.classList.add(t);
        }
        removeClass(t) {
          var e;
          this.document &&
            (e = this.content || this.document.body) &&
            e.classList.remove(t);
        }
        addEventListeners() {
          this.document &&
            ((this._triggerEvent = this.triggerEvent.bind(this)),
            l.a.forEach(function (t) {
              this.document.addEventListener(t, this._triggerEvent, {
                passive: !0,
              });
            }, this));
        }
        removeEventListeners() {
          this.document &&
            (l.a.forEach(function (t) {
              this.document.removeEventListener(t, this._triggerEvent, {
                passive: !0,
              });
            }, this),
            (this._triggerEvent = void 0));
        }
        triggerEvent(t) {
          this.emit(t.type, t);
        }
        addSelectionListeners() {
          this.document &&
            ((this._onSelectionChange = this.onSelectionChange.bind(this)),
            this.document.addEventListener(
              "selectionchange",
              this._onSelectionChange,
              { passive: !0 },
            ));
        }
        removeSelectionListeners() {
          this.document &&
            (this.document.removeEventListener(
              "selectionchange",
              this._onSelectionChange,
              { passive: !0 },
            ),
            (this._onSelectionChange = void 0));
        }
        onSelectionChange(t) {
          this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout),
            (this.selectionEndTimeout = setTimeout(
              function () {
                var t = this.window.getSelection();
                this.triggerSelectedEvent(t);
              }.bind(this),
              250,
            ));
        }
        triggerSelectedEvent(t) {
          var e, n;
          t &&
            t.rangeCount > 0 &&
            ((e = t.getRangeAt(0)).collapsed ||
              ((n = new o.a(e, this.cfiBase).toString()),
              this.emit(l.c.CONTENTS.SELECTED, n),
              this.emit(l.c.CONTENTS.SELECTED_RANGE, e)));
        }
        range(t, e) {
          return new o.a(t).toRange(this.document, e);
        }
        cfiFromRange(t, e) {
          return new o.a(t, this.cfiBase, e).toString();
        }
        cfiFromNode(t, e) {
          return new o.a(t, this.cfiBase, e).toString();
        }
        map(t) {
          return new a.a(t).section();
        }
        size(t, e) {
          var n = { scale: 1, scalable: "no" };
          this.layoutStyle("scrolling"),
            t >= 0 &&
              (this.width(t),
              (n.width = t),
              this.css("padding", "0 " + t / 12 + "px")),
            e >= 0 && (this.height(e), (n.height = e)),
            this.css("margin", "0"),
            this.css("box-sizing", "border-box"),
            this.viewport(n);
        }
        columns(t, e, n, i, r) {
          let o = Object(s.prefixed)("column-axis"),
            a = Object(s.prefixed)("column-gap"),
            h = Object(s.prefixed)("column-width"),
            l = Object(s.prefixed)("column-fill"),
            u =
              0 === this.writingMode().indexOf("vertical")
                ? "vertical"
                : "horizontal";
          this.layoutStyle("paginated"),
            "rtl" === r && "horizontal" === u && this.direction(r),
            this.width(t),
            this.height(e),
            this.viewport({ width: t, height: e, scale: 1, scalable: "no" }),
            this.css("overflow-y", "hidden"),
            this.css("margin", "0", !0),
            "vertical" === u
              ? (this.css("padding-top", i / 2 + "px", !0),
                this.css("padding-bottom", i / 2 + "px", !0),
                this.css("padding-left", "20px"),
                this.css("padding-right", "20px"),
                this.css(o, "vertical"))
              : (this.css("padding-top", "20px"),
                this.css("padding-bottom", "20px"),
                this.css("padding-left", i / 2 + "px", !0),
                this.css("padding-right", i / 2 + "px", !0),
                this.css(o, "horizontal")),
            this.css("box-sizing", "border-box"),
            this.css("max-width", "inherit"),
            this.css(l, "auto"),
            this.css(a, i + "px"),
            this.css(h, n + "px"),
            this.css("-webkit-line-box-contain", "block glyphs replaced");
        }
        scaler(t, e, n) {
          var i = "scale(" + t + ")",
            r = "";
          this.css("transform-origin", "top left"),
            (e >= 0 || n >= 0) &&
              (r = " translate(" + (e || 0) + "px, " + (n || 0) + "px )"),
            this.css("transform", i + r);
        }
        fit(t, e, n) {
          var i = this.viewport(),
            r = parseInt(i.width),
            s = parseInt(i.height),
            o = t / r,
            a = e / s,
            h = o < a ? o : a;
          if (
            (this.layoutStyle("paginated"),
            this.width(r),
            this.height(s),
            this.overflow("hidden"),
            this.scaler(h, 0, 0),
            this.css("background-size", r * h + "px " + s * h + "px"),
            this.css("background-color", "transparent"),
            n && n.properties.includes("page-spread-left"))
          ) {
            var l = t - r * h;
            this.css("margin-left", l + "px");
          }
        }
        direction(t) {
          this.documentElement && (this.documentElement.style.direction = t);
        }
        mapPage(t, e, n, i, r) {
          return new a.a(e, r).page(this, t, n, i);
        }
        linksHandler() {
          Object(h.c)(this.content, (t) => {
            this.emit(l.c.CONTENTS.LINK_CLICKED, t);
          });
        }
        writingMode(t) {
          let e = Object(s.prefixed)("writing-mode");
          return (
            t && this.documentElement && (this.documentElement.style[e] = t),
            this.window.getComputedStyle(this.documentElement)[e] || ""
          );
        }
        layoutStyle(t) {
          return (
            t &&
              ((this._layoutStyle = t),
              (navigator.epubReadingSystem.layoutStyle = this._layoutStyle)),
            this._layoutStyle || "paginated"
          );
        }
        epubReadingSystem(t, e) {
          return (
            (navigator.epubReadingSystem = {
              name: t,
              version: e,
              layoutStyle: this.layoutStyle(),
              hasFeature: function (t) {
                switch (t) {
                  case "dom-manipulation":
                  case "layout-changes":
                  case "touch-events":
                  case "mouse-events":
                  case "keyboard-events":
                    return !0;
                  case "spine-scripting":
                  default:
                    return !1;
                }
              },
            }),
            navigator.epubReadingSystem
          );
        }
        destroy() {
          this.removeListeners();
        }
      }
      r()(f.prototype), (e.a = f);
    },
    function (t, e, n) {
      "use strict";
      var i = n(3),
        r = n.n(i),
        s = n(0),
        o = n(6),
        a = n(2),
        h = n(12),
        l = n(17),
        u = n(5);
      var c = class {
          constructor(t) {
            (this.rendition = t),
              (this._themes = {
                default: { rules: {}, url: "", serialized: "" },
              }),
              (this._overrides = {}),
              (this._current = "default"),
              (this._injected = []),
              this.rendition.hooks.content.register(this.inject.bind(this)),
              this.rendition.hooks.content.register(this.overrides.bind(this));
          }
          register() {
            if (0 !== arguments.length)
              return 1 === arguments.length && "object" == typeof arguments[0]
                ? this.registerThemes(arguments[0])
                : 1 === arguments.length && "string" == typeof arguments[0]
                  ? this.default(arguments[0])
                  : 2 === arguments.length && "string" == typeof arguments[1]
                    ? this.registerUrl(arguments[0], arguments[1])
                    : 2 === arguments.length && "object" == typeof arguments[1]
                      ? this.registerRules(arguments[0], arguments[1])
                      : void 0;
          }
          default(t) {
            if (t)
              return "string" == typeof t
                ? this.registerUrl("default", t)
                : "object" == typeof t
                  ? this.registerRules("default", t)
                  : void 0;
          }
          registerThemes(t) {
            for (var e in t)
              t.hasOwnProperty(e) &&
                ("string" == typeof t[e]
                  ? this.registerUrl(e, t[e])
                  : this.registerRules(e, t[e]));
          }
          registerCss(t, e) {
            (this._themes[t] = { serialized: e }),
              (this._injected[t] || "default" == t) && this.update(t);
          }
          registerUrl(t, e) {
            var n = new u.a(e);
            (this._themes[t] = { url: n.toString() }),
              (this._injected[t] || "default" == t) && this.update(t);
          }
          registerRules(t, e) {
            (this._themes[t] = { rules: e }),
              (this._injected[t] || "default" == t) && this.update(t);
          }
          select(t) {
            var e = this._current;
            (this._current = t),
              this.update(t),
              this.rendition.getContents().forEach((n) => {
                n.removeClass(e), n.addClass(t);
              });
          }
          update(t) {
            this.rendition.getContents().forEach((e) => {
              this.add(t, e);
            });
          }
          inject(t) {
            var e,
              n = [],
              i = this._themes;
            for (var r in i)
              !i.hasOwnProperty(r) ||
                (r !== this._current && "default" !== r) ||
                ((((e = i[r]).rules && Object.keys(e.rules).length > 0) ||
                  (e.url && -1 === n.indexOf(e.url))) &&
                  this.add(r, t),
                this._injected.push(r));
            "default" != this._current && t.addClass(this._current);
          }
          add(t, e) {
            var n = this._themes[t];
            n &&
              e &&
              (n.url
                ? e.addStylesheet(n.url)
                : n.serialized
                  ? (e.addStylesheetCss(n.serialized, t), (n.injected = !0))
                  : n.rules &&
                    (e.addStylesheetRules(n.rules, t), (n.injected = !0)));
          }
          override(t, e, n) {
            var i = this.rendition.getContents();
            (this._overrides[t] = { value: e, priority: !0 === n }),
              i.forEach((e) => {
                e.css(t, this._overrides[t].value, this._overrides[t].priority);
              });
          }
          removeOverride(t) {
            var e = this.rendition.getContents();
            delete this._overrides[t],
              e.forEach((e) => {
                e.css(t);
              });
          }
          overrides(t) {
            var e = this._overrides;
            for (var n in e)
              e.hasOwnProperty(n) && t.css(n, e[n].value, e[n].priority);
          }
          fontSize(t) {
            this.override("font-size", t);
          }
          font(t) {
            this.override("font-family", t, !0);
          }
          destroy() {
            (this.rendition = void 0),
              (this._themes = void 0),
              (this._overrides = void 0),
              (this._current = void 0),
              (this._injected = void 0);
          }
        },
        d = (n(10), n(1));
      class f {
        constructor({
          type: t,
          cfiRange: e,
          data: n,
          sectionIndex: i,
          cb: r,
          className: s,
          styles: o,
        }) {
          (this.type = t),
            (this.cfiRange = e),
            (this.data = n),
            (this.sectionIndex = i),
            (this.mark = void 0),
            (this.cb = r),
            (this.className = s),
            (this.styles = o);
        }
        update(t) {
          this.data = t;
        }
        attach(t) {
          let e,
            {
              cfiRange: n,
              data: i,
              type: r,
              mark: s,
              cb: o,
              className: a,
              styles: h,
            } = this;
          return (
            "highlight" === r
              ? (e = t.highlight(n, i, o, a, h))
              : "underline" === r
                ? (e = t.underline(n, i, o, a, h))
                : "mark" === r && (e = t.mark(n, i, o)),
            (this.mark = e),
            this.emit(d.c.ANNOTATION.ATTACH, e),
            e
          );
        }
        detach(t) {
          let e,
            { cfiRange: n, type: i } = this;
          return (
            t &&
              ("highlight" === i
                ? (e = t.unhighlight(n))
                : "underline" === i
                  ? (e = t.ununderline(n))
                  : "mark" === i && (e = t.unmark(n))),
            (this.mark = void 0),
            this.emit(d.c.ANNOTATION.DETACH, e),
            e
          );
        }
        text() {}
      }
      r()(f.prototype);
      var p = class {
          constructor(t) {
            (this.rendition = t),
              (this.highlights = []),
              (this.underlines = []),
              (this.marks = []),
              (this._annotations = {}),
              (this._annotationsBySectionIndex = {}),
              this.rendition.hooks.render.register(this.inject.bind(this)),
              this.rendition.hooks.unloaded.register(this.clear.bind(this));
          }
          add(t, e, n, i, r, s) {
            let o = encodeURI(e + t),
              h = new a.a(e).spinePos,
              l = new f({
                type: t,
                cfiRange: e,
                data: n,
                sectionIndex: h,
                cb: i,
                className: r,
                styles: s,
              });
            return (
              (this._annotations[o] = l),
              h in this._annotationsBySectionIndex
                ? this._annotationsBySectionIndex[h].push(o)
                : (this._annotationsBySectionIndex[h] = [o]),
              this.rendition.views().forEach((t) => {
                l.sectionIndex === t.index && l.attach(t);
              }),
              l
            );
          }
          remove(t, e) {
            let n = encodeURI(t + e);
            if (n in this._annotations) {
              let t = this._annotations[n];
              if (e && t.type !== e) return;
              this.rendition.views().forEach((e) => {
                this._removeFromAnnotationBySectionIndex(t.sectionIndex, n),
                  t.sectionIndex === e.index && t.detach(e);
              }),
                delete this._annotations[n];
            }
          }
          _removeFromAnnotationBySectionIndex(t, e) {
            this._annotationsBySectionIndex[t] = this._annotationsAt(t).filter(
              (t) => t !== e,
            );
          }
          _annotationsAt(t) {
            return this._annotationsBySectionIndex[t];
          }
          highlight(t, e, n, i, r) {
            return this.add("highlight", t, e, n, i, r);
          }
          underline(t, e, n, i, r) {
            return this.add("underline", t, e, n, i, r);
          }
          mark(t, e, n) {
            return this.add("mark", t, e, n);
          }
          each() {
            return this._annotations.forEach.apply(this._annotations, arguments);
          }
          inject(t) {
            let e = t.index;
            if (e in this._annotationsBySectionIndex) {
              this._annotationsBySectionIndex[e].forEach((e) => {
                this._annotations[e].attach(t);
              });
            }
          }
          clear(t) {
            let e = t.index;
            if (e in this._annotationsBySectionIndex) {
              this._annotationsBySectionIndex[e].forEach((e) => {
                this._annotations[e].detach(t);
              });
            }
          }
          show() {}
          hide() {}
        },
        g = n(21),
        m = n(13),
        v = n(23);
      class y {
        constructor(t, e) {
          (this.settings = Object(s.extend)(this.settings || {}, {
            width: null,
            height: null,
            ignoreClass: "",
            manager: "default",
            view: "iframe",
            flow: null,
            layout: null,
            spread: null,
            minSpreadWidth: 800,
            stylesheet: null,
            resizeOnOrientationChange: !0,
            script: null,
            snap: !1,
            defaultDirection: "ltr",
          })),
            Object(s.extend)(this.settings, e),
            "object" == typeof this.settings.manager &&
              (this.manager = this.settings.manager),
            (this.book = t),
            (this.hooks = {}),
            (this.hooks.display = new o.a(this)),
            (this.hooks.serialize = new o.a(this)),
            (this.hooks.content = new o.a(this)),
            (this.hooks.unloaded = new o.a(this)),
            (this.hooks.layout = new o.a(this)),
            (this.hooks.render = new o.a(this)),
            (this.hooks.show = new o.a(this)),
            this.hooks.content.register(this.handleLinks.bind(this)),
            this.hooks.content.register(this.passEvents.bind(this)),
            this.hooks.content.register(this.adjustImages.bind(this)),
            this.book.spine.hooks.content.register(
              this.injectIdentifier.bind(this),
            ),
            this.settings.stylesheet &&
              this.book.spine.hooks.content.register(
                this.injectStylesheet.bind(this),
              ),
            this.settings.script &&
              this.book.spine.hooks.content.register(
                this.injectScript.bind(this),
              ),
            (this.themes = new c(this)),
            (this.annotations = new p(this)),
            (this.epubcfi = new a.a()),
            (this.q = new h.a(this)),
            (this.location = void 0),
            this.q.enqueue(this.book.opened),
            (this.starting = new s.defer()),
            (this.started = this.starting.promise),
            this.q.enqueue(this.start);
        }
        setManager(t) {
          this.manager = t;
        }
        requireManager(t) {
          return "string" == typeof t && "default" === t
            ? m.a
            : "string" == typeof t && "continuous" === t
              ? v.a
              : t;
        }
        requireView(t) {
          return "string" == typeof t && "iframe" === t ? g.a : t;
        }
        start() {
          switch (
            (this.settings.layout ||
              ("pre-paginated" !== this.book.package.metadata.layout &&
                "true" !== this.book.displayOptions.fixedLayout) ||
              (this.settings.layout = "pre-paginated"),
            this.book.package.metadata.spread)
          ) {
            case "none":
              this.settings.spread = "none";
              break;
            case "both":
              this.settings.spread = !0;
          }
          this.manager ||
            ((this.ViewManager = this.requireManager(this.settings.manager)),
            (this.View = this.requireView(this.settings.view)),
            (this.manager = new this.ViewManager({
              view: this.View,
              queue: this.q,
              request: this.book.load.bind(this.book),
              settings: this.settings,
            }))),
            this.direction(
              this.book.package.metadata.direction ||
                this.settings.defaultDirection,
            ),
            (this.settings.globalLayoutProperties =
              this.determineLayoutProperties(this.book.package.metadata)),
            this.flow(this.settings.globalLayoutProperties.flow),
            this.layout(this.settings.globalLayoutProperties),
            this.manager.on(d.c.MANAGERS.ADDED, this.afterDisplayed.bind(this)),
            this.manager.on(d.c.MANAGERS.REMOVED, this.afterRemoved.bind(this)),
            this.manager.on(d.c.MANAGERS.RESIZED, this.onResized.bind(this)),
            this.manager.on(
              d.c.MANAGERS.ORIENTATION_CHANGE,
              this.onOrientationChange.bind(this),
            ),
            this.manager.on(
              d.c.MANAGERS.SCROLLED,
              this.reportLocation.bind(this),
            ),
            this.emit(d.c.RENDITION.STARTED),
            this.starting.resolve();
        }
        attachTo(t) {
          return this.q.enqueue(
            function () {
              this.manager.render(t, {
                width: this.settings.width,
                height: this.settings.height,
              }),
                this.emit(d.c.RENDITION.ATTACHED);
            }.bind(this),
          );
        }
        display(t) {
          return (
            this.displaying && this.displaying.resolve(),
            this.q.enqueue(this._display, t)
          );
        }
        _display(t) {
          if (this.book) {
            this.epubcfi.isCfiString(t);
            var e,
              n = new s.defer(),
              i = n.promise;
            return (
              (this.displaying = n),
              this.book.locations.length() &&
                Object(s.isFloat)(t) &&
                (t = this.book.locations.cfiFromPercentage(parseFloat(t))),
              (e = this.book.spine.get(t))
                ? (this.manager.display(e, t).then(
                    () => {
                      n.resolve(e),
                        (this.displaying = void 0),
                        this.emit(d.c.RENDITION.DISPLAYED, e),
                        this.reportLocation();
                    },
                    (t) => {
                      this.emit(d.c.RENDITION.DISPLAY_ERROR, t);
                    },
                  ),
                  i)
                : (n.reject(new Error("No Section Found")), i)
            );
          }
        }
        afterDisplayed(t) {
          t.on(d.c.VIEWS.MARK_CLICKED, (e, n) =>
            this.triggerMarkEvent(e, n, t.contents),
          ),
            this.hooks.render.trigger(t, this).then(() => {
              t.contents
                ? this.hooks.content.trigger(t.contents, this).then(() => {
                    this.emit(d.c.RENDITION.RENDERED, t.section, t);
                  })
                : this.emit(d.c.RENDITION.RENDERED, t.section, t);
            });
        }
        afterRemoved(t) {
          this.hooks.unloaded.trigger(t, this).then(() => {
            this.emit(d.c.RENDITION.REMOVED, t.section, t);
          });
        }
        onResized(t, e) {
          this.emit(
            d.c.RENDITION.RESIZED,
            { width: t.width, height: t.height },
            e,
          ),
            this.location &&
              this.location.start &&
              this.display(e || this.location.start.cfi);
        }
        onOrientationChange(t) {
          this.emit(d.c.RENDITION.ORIENTATION_CHANGE, t);
        }
        moveTo(t) {
          this.manager.moveTo(t);
        }
        resize(t, e, n) {
          t && (this.settings.width = t),
            e && (this.settings.height = e),
            this.manager.resize(t, e, n);
        }
        clear() {
          this.manager.clear();
        }
        next() {
          return this.q
            .enqueue(this.manager.next.bind(this.manager))
            .then(this.reportLocation.bind(this));
        }
        prev() {
          return this.q
            .enqueue(this.manager.prev.bind(this.manager))
            .then(this.reportLocation.bind(this));
        }
        determineLayoutProperties(t) {
          var e = this.settings.layout || t.layout || "reflowable",
            n = this.settings.spread || t.spread || "auto",
            i = this.settings.orientation || t.orientation || "auto",
            r = this.settings.flow || t.flow || "auto",
            s = t.viewport || "",
            o = this.settings.minSpreadWidth || t.minSpreadWidth || 800,
            a = this.settings.direction || t.direction || "ltr";
          return (
            (0 === this.settings.width || this.settings.width > 0) &&
              (0 === this.settings.height || this.settings.height),
            {
              layout: e,
              spread: n,
              orientation: i,
              flow: r,
              viewport: s,
              minSpreadWidth: o,
              direction: a,
            }
          );
        }
        flow(t) {
          var e = t;
          ("scrolled" !== t &&
            "scrolled-doc" !== t &&
            "scrolled-continuous" !== t) ||
            (e = "scrolled"),
            ("auto" !== t && "paginated" !== t) || (e = "paginated"),
            (this.settings.flow = t),
            this._layout && this._layout.flow(e),
            this.manager &&
              this._layout &&
              this.manager.applyLayout(this._layout),
            this.manager && this.manager.updateFlow(e),
            this.manager &&
              this.manager.isRendered() &&
              this.location &&
              (this.manager.clear(), this.display(this.location.start.cfi));
        }
        layout(t) {
          return (
            t &&
              ((this._layout = new l.a(t)),
              this._layout.spread(t.spread, this.settings.minSpreadWidth),
              this._layout.on(d.c.LAYOUT.UPDATED, (t, e) => {
                this.emit(d.c.RENDITION.LAYOUT, t, e);
              })),
            this.manager &&
              this._layout &&
              this.manager.applyLayout(this._layout),
            this._layout
          );
        }
        spread(t, e) {
          (this.settings.spread = t),
            e && (this.settings.minSpreadWidth = e),
            this._layout && this._layout.spread(t, e),
            this.manager &&
              this.manager.isRendered() &&
              this.manager.updateLayout();
        }
        direction(t) {
          (this.settings.direction = t || "ltr"),
            this.manager && this.manager.direction(this.settings.direction),
            this.manager &&
              this.manager.isRendered() &&
              this.location &&
              (this.manager.clear(), this.display(this.location.start.cfi));
        }
        reportLocation() {
          return this.q.enqueue(
            function () {
              requestAnimationFrame(
                function () {
                  var t = this.manager.currentLocation();
                  if (t && t.then && "function" == typeof t.then)
                    t.then(
                      function (t) {
                        let e = this.located(t);
                        e &&
                          e.start &&
                          e.end &&
                          ((this.location = e),
                          this.emit(d.c.RENDITION.LOCATION_CHANGED, {
                            index: this.location.start.index,
                            href: this.location.start.href,
                            start: this.location.start.cfi,
                            end: this.location.end.cfi,
                            percentage: this.location.start.percentage,
                          }),
                          this.emit(d.c.RENDITION.RELOCATED, this.location));
                      }.bind(this),
                    );
                  else if (t) {
                    let e = this.located(t);
                    if (!e || !e.start || !e.end) return;
                    (this.location = e),
                      this.emit(d.c.RENDITION.LOCATION_CHANGED, {
                        index: this.location.start.index,
                        href: this.location.start.href,
                        start: this.location.start.cfi,
                        end: this.location.end.cfi,
                        percentage: this.location.start.percentage,
                      }),
                      this.emit(d.c.RENDITION.RELOCATED, this.location);
                  }
                }.bind(this),
              );
            }.bind(this),
          );
        }
        currentLocation() {
          var t = this.manager.currentLocation();
          if (t && t.then && "function" == typeof t.then)
            t.then(
              function (t) {
                return this.located(t);
              }.bind(this),
            );
          else if (t) {
            return this.located(t);
          }
        }
        located(t) {
          if (!t.length) return {};
          let e = t[0],
            n = t[t.length - 1],
            i = {
              start: {
                index: e.index,
                href: e.href,
                cfi: e.mapping.start,
                displayed: { page: e.pages[0] || 1, total: e.totalPages },
              },
              end: {
                index: n.index,
                href: n.href,
                cfi: n.mapping.end,
                displayed: {
                  page: n.pages[n.pages.length - 1] || 1,
                  total: n.totalPages,
                },
              },
            },
            r = this.book.locations.locationFromCfi(e.mapping.start),
            s = this.book.locations.locationFromCfi(n.mapping.end);
          null != r &&
            ((i.start.location = r),
            (i.start.percentage = this.book.locations.percentageFromLocation(r))),
            null != s &&
              ((i.end.location = s),
              (i.end.percentage = this.book.locations.percentageFromLocation(s)));
          let o = this.book.pageList.pageFromCfi(e.mapping.start),
            a = this.book.pageList.pageFromCfi(n.mapping.end);
          return (
            -1 != o && (i.start.page = o),
            -1 != a && (i.end.page = a),
            n.index === this.book.spine.last().index &&
              i.end.displayed.page >= i.end.displayed.total &&
              (i.atEnd = !0),
            e.index === this.book.spine.first().index &&
              1 === i.start.displayed.page &&
              (i.atStart = !0),
            i
          );
        }
        destroy() {
          this.manager && this.manager.destroy(), (this.book = void 0);
        }
        passEvents(t) {
          d.a.forEach((e) => {
            t.on(e, (e) => this.triggerViewEvent(e, t));
          }),
            t.on(d.c.CONTENTS.SELECTED, (e) => this.triggerSelectedEvent(e, t));
        }
        triggerViewEvent(t, e) {
          this.emit(t.type, t, e);
        }
        triggerSelectedEvent(t, e) {
          this.emit(d.c.RENDITION.SELECTED, t, e);
        }
        triggerMarkEvent(t, e, n) {
          this.emit(d.c.RENDITION.MARK_CLICKED, t, e, n);
        }
        getRange(t, e) {
          var n = new a.a(t),
            i = this.manager.visible().filter(function (t) {
              if (n.spinePos === t.index) return !0;
            });
          if (i.length) return i[0].contents.range(n, e);
        }
        adjustImages(t) {
          if ("pre-paginated" === this._layout.name)
            return new Promise(function (t) {
              t();
            });
          let e = t.window.getComputedStyle(t.content, null),
            n =
              0.95 *
              (t.content.offsetHeight -
                (parseFloat(e.paddingTop) + parseFloat(e.paddingBottom))),
            i = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
          return (
            t.addStylesheetRules({
              img: {
                "max-width":
                  (this._layout.columnWidth
                    ? this._layout.columnWidth - i + "px"
                    : "100%") + "!important",
                "max-height": n + "px!important",
                "object-fit": "contain",
                "page-break-inside": "avoid",
                "break-inside": "avoid",
                "box-sizing": "border-box",
              },
              svg: {
                "max-width":
                  (this._layout.columnWidth
                    ? this._layout.columnWidth - i + "px"
                    : "100%") + "!important",
                "max-height": n + "px!important",
                "page-break-inside": "avoid",
                "break-inside": "avoid",
              },
            }),
            new Promise(function (t, e) {
              setTimeout(function () {
                t();
              }, 1);
            })
          );
        }
        getContents() {
          return this.manager ? this.manager.getContents() : [];
        }
        views() {
          return (this.manager ? this.manager.views : void 0) || [];
        }
        handleLinks(t) {
          t &&
            t.on(d.c.CONTENTS.LINK_CLICKED, (t) => {
              let e = this.book.path.relative(t);
              this.display(e);
            });
        }
        injectStylesheet(t, e) {
          let n = t.createElement("link");
          n.setAttribute("type", "text/css"),
            n.setAttribute("rel", "stylesheet"),
            n.setAttribute("href", this.settings.stylesheet),
            t.getElementsByTagName("head")[0].appendChild(n);
        }
        injectScript(t, e) {
          let n = t.createElement("script");
          n.setAttribute("type", "text/javascript"),
            n.setAttribute("src", this.settings.script),
            (n.textContent = " "),
            t.getElementsByTagName("head")[0].appendChild(n);
        }
        injectIdentifier(t, e) {
          let n = this.book.packaging.metadata.identifier,
            i = t.createElement("meta");
          i.setAttribute("name", "dc.relation.ispartof"),
            n && i.setAttribute("content", n),
            t.getElementsByTagName("head")[0].appendChild(i);
        }
      }
      r()(y.prototype);
      e.a = y;
    },
    function (t, e, n) {
      "use strict";
      var i = n(0);
      e.a = class {
        constructor(t) {
          (this._q = []),
            (this.context = t),
            (this.tick = i.requestAnimationFrame),
            (this.running = !1),
            (this.paused = !1);
        }
        enqueue() {
          var t,
            e,
            n = [].shift.call(arguments),
            r = arguments;
          if (!n) throw new Error("No Task Provided");
          return (
            (e =
              "function" == typeof n
                ? {
                    task: n,
                    args: r,
                    deferred: (t = new i.defer()),
                    promise: t.promise,
                  }
                : { promise: n }),
            this._q.push(e),
            0 != this.paused || this.running || this.run(),
            e.promise
          );
        }
        dequeue() {
          var t, e, n;
          return !this._q.length || this.paused
            ? ((t = new i.defer()).deferred.resolve(), t.promise)
            : (e = (t = this._q.shift()).task)
              ? (n = e.apply(this.context, t.args)) && "function" == typeof n.then
                ? n.then(
                    function () {
                      t.deferred.resolve.apply(this.context, arguments);
                    }.bind(this),
                    function () {
                      t.deferred.reject.apply(this.context, arguments);
                    }.bind(this),
                  )
                : (t.deferred.resolve.apply(this.context, n), t.promise)
              : t.promise
                ? t.promise
                : void 0;
        }
        dump() {
          for (; this._q.length; ) this.dequeue();
        }
        run() {
          return (
            this.running || ((this.running = !0), (this.defered = new i.defer())),
            this.tick.call(window, () => {
              this._q.length
                ? this.dequeue().then(
                    function () {
                      this.run();
                    }.bind(this),
                  )
                : (this.defered.resolve(), (this.running = void 0));
            }),
            1 == this.paused && (this.paused = !1),
            this.defered.promise
          );
        }
        flush() {
          return this.running
            ? this.running
            : this._q.length
              ? ((this.running = this.dequeue().then(
                  function () {
                    return (this.running = void 0), this.flush();
                  }.bind(this),
                )),
                this.running)
              : void 0;
        }
        clear() {
          this._q = [];
        }
        length() {
          return this._q.length;
        }
        pause() {
          this.paused = !0;
        }
        stop() {
          (this._q = []), (this.running = !1), (this.paused = !0);
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(3),
        r = n.n(i),
        s = n(0);
      function o() {
        var t = "reverse",
          e = (function () {
            var t = document.createElement("div");
            (t.dir = "rtl"),
              (t.style.position = "fixed"),
              (t.style.width = "1px"),
              (t.style.height = "1px"),
              (t.style.top = "0px"),
              (t.style.left = "0px"),
              (t.style.overflow = "hidden");
            var e = document.createElement("div");
            e.style.width = "2px";
            var n = document.createElement("span");
            (n.style.width = "1px"), (n.style.display = "inline-block");
            var i = document.createElement("span");
            return (
              (i.style.width = "1px"),
              (i.style.display = "inline-block"),
              e.appendChild(n),
              e.appendChild(i),
              t.appendChild(e),
              t
            );
          })();
        return (
          document.body.appendChild(e),
          e.scrollLeft > 0
            ? (t = "default")
            : "undefined" != typeof Element && Element.prototype.scrollIntoView
              ? (e.children[0].children[1].scrollIntoView(),
                e.scrollLeft < 0 && (t = "negative"))
              : ((e.scrollLeft = 1), 0 === e.scrollLeft && (t = "negative")),
          document.body.removeChild(e),
          t
        );
      }
      var a = n(14),
        h = n(12),
        l = n(30),
        u = n.n(l);
      var c = class {
        constructor(t) {
          (this.settings = t || {}),
            (this.id = "epubjs-container-" + Object(s.uuid)()),
            (this.container = this.create(this.settings)),
            this.settings.hidden && (this.wrapper = this.wrap(this.container));
        }
        create(t) {
          let e = t.height,
            n = t.width,
            i = t.overflow || !1,
            r = t.axis || "vertical",
            o = t.direction;
          Object(s.extend)(this.settings, t),
            t.height && Object(s.isNumber)(t.height) && (e = t.height + "px"),
            t.width && Object(s.isNumber)(t.width) && (n = t.width + "px");
          let a = document.createElement("div");
          return (
            (a.id = this.id),
            a.classList.add("epub-container"),
            (a.style.wordSpacing = "0"),
            (a.style.lineHeight = "0"),
            (a.style.verticalAlign = "top"),
            (a.style.position = "relative"),
            "horizontal" === r &&
              ((a.style.display = "flex"),
              (a.style.flexDirection = "row"),
              (a.style.flexWrap = "nowrap")),
            n && (a.style.width = n),
            e && (a.style.height = e),
            i &&
              ("scroll" === i && "vertical" === r
                ? ((a.style["overflow-y"] = i),
                  (a.style["overflow-x"] = "hidden"))
                : "scroll" === i && "horizontal" === r
                  ? ((a.style["overflow-y"] = "hidden"),
                    (a.style["overflow-x"] = i))
                  : (a.style.overflow = i)),
            o && ((a.dir = o), (a.style.direction = o)),
            o && this.settings.fullsize && (document.body.style.direction = o),
            a
          );
        }
        wrap(t) {
          var e = document.createElement("div");
          return (
            (e.style.visibility = "hidden"),
            (e.style.overflow = "hidden"),
            (e.style.width = "0"),
            (e.style.height = "0"),
            e.appendChild(t),
            e
          );
        }
        getElement(t) {
          var e;
          if (
            (Object(s.isElement)(t)
              ? (e = t)
              : "string" == typeof t && (e = document.getElementById(t)),
            !e)
          )
            throw new Error("Not an Element");
          return e;
        }
        attachTo(t) {
          var e,
            n = this.getElement(t);
          if (n)
            return (
              (e = this.settings.hidden ? this.wrapper : this.container),
              n.appendChild(e),
              (this.element = n),
              n
            );
        }
        getContainer() {
          return this.container;
        }
        onResize(t) {
          (Object(s.isNumber)(this.settings.width) &&
            Object(s.isNumber)(this.settings.height)) ||
            ((this.resizeFunc = u()(t, 50)),
            window.addEventListener("resize", this.resizeFunc, !1));
        }
        onOrientationChange(t) {
          (this.orientationChangeFunc = t),
            window.addEventListener(
              "orientationchange",
              this.orientationChangeFunc,
              !1,
            );
        }
        size(t, e) {
          var n;
          let i = t || this.settings.width,
            r = e || this.settings.height;
          null === t
            ? (n = this.element.getBoundingClientRect()).width &&
              ((t = Math.floor(n.width)), (this.container.style.width = t + "px"))
            : Object(s.isNumber)(t)
              ? (this.container.style.width = t + "px")
              : (this.container.style.width = t),
            null === e
              ? (n = n || this.element.getBoundingClientRect()).height &&
                ((e = n.height), (this.container.style.height = e + "px"))
              : Object(s.isNumber)(e)
                ? (this.container.style.height = e + "px")
                : (this.container.style.height = e),
            Object(s.isNumber)(t) || (t = this.container.clientWidth),
            Object(s.isNumber)(e) || (e = this.container.clientHeight),
            (this.containerStyles = window.getComputedStyle(this.container)),
            (this.containerPadding = {
              left: parseFloat(this.containerStyles["padding-left"]) || 0,
              right: parseFloat(this.containerStyles["padding-right"]) || 0,
              top: parseFloat(this.containerStyles["padding-top"]) || 0,
              bottom: parseFloat(this.containerStyles["padding-bottom"]) || 0,
            });
          let o = Object(s.windowBounds)(),
            a = window.getComputedStyle(document.body),
            h = parseFloat(a["padding-left"]) || 0,
            l = parseFloat(a["padding-right"]) || 0,
            u = parseFloat(a["padding-top"]) || 0,
            c = parseFloat(a["padding-bottom"]) || 0;
          return (
            i || (t = o.width - h - l),
            ((this.settings.fullsize && !r) || !r) && (e = o.height - u - c),
            {
              width: t - this.containerPadding.left - this.containerPadding.right,
              height:
                e - this.containerPadding.top - this.containerPadding.bottom,
            }
          );
        }
        bounds() {
          let t;
          return (
            "visible" !== this.container.style.overflow &&
              (t = this.container && this.container.getBoundingClientRect()),
            t && t.width && t.height ? t : Object(s.windowBounds)()
          );
        }
        getSheet() {
          var t = document.createElement("style");
          return (
            t.appendChild(document.createTextNode("")),
            document.head.appendChild(t),
            t.sheet
          );
        }
        addStyleRules(t, e) {
          var n = "#" + this.id + " ",
            i = "";
          this.sheet || (this.sheet = this.getSheet()),
            e.forEach(function (t) {
              for (var e in t) t.hasOwnProperty(e) && (i += e + ":" + t[e] + ";");
            }),
            this.sheet.insertRule(n + t + " {" + i + "}", 0);
        }
        axis(t) {
          "horizontal" === t
            ? ((this.container.style.display = "flex"),
              (this.container.style.flexDirection = "row"),
              (this.container.style.flexWrap = "nowrap"))
            : (this.container.style.display = "block"),
            (this.settings.axis = t);
        }
        direction(t) {
          this.container &&
            ((this.container.dir = t), (this.container.style.direction = t)),
            this.settings.fullsize && (document.body.style.direction = t),
            (this.settings.dir = t);
        }
        overflow(t) {
          this.container &&
            ("scroll" === t && "vertical" === this.settings.axis
              ? ((this.container.style["overflow-y"] = t),
                (this.container.style["overflow-x"] = "hidden"))
              : "scroll" === t && "horizontal" === this.settings.axis
                ? ((this.container.style["overflow-y"] = "hidden"),
                  (this.container.style["overflow-x"] = t))
                : (this.container.style.overflow = t)),
            (this.settings.overflow = t);
        }
        destroy() {
          this.element &&
            (this.settings.hidden ? this.wrapper : this.container,
            this.element.contains(this.container) &&
              this.element.removeChild(this.container),
            window.removeEventListener("resize", this.resizeFunc),
            window.removeEventListener(
              "orientationChange",
              this.orientationChangeFunc,
            ));
        }
      };
      var d = class {
          constructor(t) {
            (this.container = t),
              (this._views = []),
              (this.length = 0),
              (this.hidden = !1);
          }
          all() {
            return this._views;
          }
          first() {
            return this._views[0];
          }
          last() {
            return this._views[this._views.length - 1];
          }
          indexOf(t) {
            return this._views.indexOf(t);
          }
          slice() {
            return this._views.slice.apply(this._views, arguments);
          }
          get(t) {
            return this._views[t];
          }
          append(t) {
            return (
              this._views.push(t),
              this.container && this.container.appendChild(t.element),
              this.length++,
              t
            );
          }
          prepend(t) {
            return (
              this._views.unshift(t),
              this.container &&
                this.container.insertBefore(t.element, this.container.firstChild),
              this.length++,
              t
            );
          }
          insert(t, e) {
            return (
              this._views.splice(e, 0, t),
              this.container &&
                (e < this.container.children.length
                  ? this.container.insertBefore(
                      t.element,
                      this.container.children[e],
                    )
                  : this.container.appendChild(t.element)),
              this.length++,
              t
            );
          }
          remove(t) {
            var e = this._views.indexOf(t);
            e > -1 && this._views.splice(e, 1), this.destroy(t), this.length--;
          }
          destroy(t) {
            t.displayed && t.destroy(),
              this.container && this.container.removeChild(t.element),
              (t = null);
          }
          forEach() {
            return this._views.forEach.apply(this._views, arguments);
          }
          clear() {
            var t,
              e = this.length;
            if (this.length) {
              for (var n = 0; n < e; n++) (t = this._views[n]), this.destroy(t);
              (this._views = []), (this.length = 0);
            }
          }
          find(t) {
            for (var e, n = this.length, i = 0; i < n; i++)
              if ((e = this._views[i]).displayed && e.section.index == t.index)
                return e;
          }
          displayed() {
            for (var t, e = [], n = this.length, i = 0; i < n; i++)
              (t = this._views[i]).displayed && e.push(t);
            return e;
          }
          show() {
            for (var t, e = this.length, n = 0; n < e; n++)
              (t = this._views[n]).displayed && t.show();
            this.hidden = !1;
          }
          hide() {
            for (var t, e = this.length, n = 0; n < e; n++)
              (t = this._views[n]).displayed && t.hide();
            this.hidden = !0;
          }
        },
        f = n(1);
      class p {
        constructor(t) {
          (this.name = "default"),
            (this.optsSettings = t.settings),
            (this.View = t.view),
            (this.request = t.request),
            (this.renditionQueue = t.queue),
            (this.q = new h.a(this)),
            (this.settings = Object(s.extend)(this.settings || {}, {
              infinite: !0,
              hidden: !1,
              width: void 0,
              height: void 0,
              axis: void 0,
              writingMode: void 0,
              flow: "scrolled",
              ignoreClass: "",
              fullsize: void 0,
            })),
            Object(s.extend)(this.settings, t.settings || {}),
            (this.viewSettings = {
              ignoreClass: this.settings.ignoreClass,
              axis: this.settings.axis,
              flow: this.settings.flow,
              layout: this.layout,
              method: this.settings.method,
              width: 0,
              height: 0,
              forceEvenPages: !0,
            }),
            (this.rendered = !1);
        }
        render(t, e) {
          let n = t.tagName;
          void 0 !== this.settings.fullsize ||
            !n ||
            ("body" != n.toLowerCase() && "html" != n.toLowerCase()) ||
            (this.settings.fullsize = !0),
            this.settings.fullsize &&
              ((this.settings.overflow = "visible"),
              (this.overflow = this.settings.overflow)),
            (this.settings.size = e),
            (this.settings.rtlScrollType = o()),
            (this.stage = new c({
              width: e.width,
              height: e.height,
              overflow: this.overflow,
              hidden: this.settings.hidden,
              axis: this.settings.axis,
              fullsize: this.settings.fullsize,
              direction: this.settings.direction,
            })),
            this.stage.attachTo(t),
            (this.container = this.stage.getContainer()),
            (this.views = new d(this.container)),
            (this._bounds = this.bounds()),
            (this._stageSize = this.stage.size()),
            (this.viewSettings.width = this._stageSize.width),
            (this.viewSettings.height = this._stageSize.height),
            this.stage.onResize(this.onResized.bind(this)),
            this.stage.onOrientationChange(this.onOrientationChange.bind(this)),
            this.addEventListeners(),
            this.layout && this.updateLayout(),
            (this.rendered = !0);
        }
        addEventListeners() {
          var t;
          window.addEventListener(
            "unload",
            function (t) {
              this.destroy();
            }.bind(this),
          ),
            (t = this.settings.fullsize ? window : this.container),
            (this._onScroll = this.onScroll.bind(this)),
            t.addEventListener("scroll", this._onScroll);
        }
        removeEventListeners() {
          (this.settings.fullsize ? window : this.container).removeEventListener(
            "scroll",
            this._onScroll,
          ),
            (this._onScroll = void 0);
        }
        destroy() {
          clearTimeout(this.orientationTimeout),
            clearTimeout(this.resizeTimeout),
            clearTimeout(this.afterScrolled),
            this.clear(),
            this.removeEventListeners(),
            this.stage.destroy(),
            (this.rendered = !1);
        }
        onOrientationChange(t) {
          let { orientation: e } = window;
          this.optsSettings.resizeOnOrientationChange && this.resize(),
            clearTimeout(this.orientationTimeout),
            (this.orientationTimeout = setTimeout(
              function () {
                (this.orientationTimeout = void 0),
                  this.optsSettings.resizeOnOrientationChange && this.resize(),
                  this.emit(f.c.MANAGERS.ORIENTATION_CHANGE, e);
              }.bind(this),
              500,
            ));
        }
        onResized(t) {
          this.resize();
        }
        resize(t, e, n) {
          let i = this.stage.size(t, e);
          (this.winBounds = Object(s.windowBounds)()),
            this.orientationTimeout &&
            this.winBounds.width === this.winBounds.height
              ? (this._stageSize = void 0)
              : (this._stageSize &&
                  this._stageSize.width === i.width &&
                  this._stageSize.height === i.height) ||
                ((this._stageSize = i),
                (this._bounds = this.bounds()),
                this.clear(),
                (this.viewSettings.width = this._stageSize.width),
                (this.viewSettings.height = this._stageSize.height),
                this.updateLayout(),
                this.emit(
                  f.c.MANAGERS.RESIZED,
                  {
                    width: this._stageSize.width,
                    height: this._stageSize.height,
                  },
                  n,
                ));
        }
        createView(t, e) {
          return new this.View(
            t,
            Object(s.extend)(this.viewSettings, { forceRight: e }),
          );
        }
        handleNextPrePaginated(t, e, n) {
          let i;
          if ("pre-paginated" === this.layout.name && this.layout.divisor > 1) {
            if (t || 0 === e.index) return;
            if (((i = e.next()), i && !i.properties.includes("page-spread-left")))
              return n.call(this, i);
          }
        }
        display(t, e) {
          var n = new s.defer(),
            i = n.promise;
          (e === t.href || Object(s.isNumber)(e)) && (e = void 0);
          var r = this.views.find(t);
          if (r && t && "pre-paginated" !== this.layout.name) {
            let t = r.offset();
            if ("ltr" === this.settings.direction)
              this.scrollTo(t.left, t.top, !0);
            else {
              let e = r.width();
              this.scrollTo(t.left + e, t.top, !0);
            }
            if (e) {
              let t = r.locationOf(e);
              this.moveTo(t);
            }
            return n.resolve(), i;
          }
          this.clear();
          let o = !1;
          return (
            "pre-paginated" === this.layout.name &&
              2 === this.layout.divisor &&
              t.properties.includes("page-spread-right") &&
              (o = !0),
            this.add(t, o)
              .then(
                function (t) {
                  if (e) {
                    let n = t.locationOf(e);
                    this.moveTo(n);
                  }
                }.bind(this),
                (t) => {
                  n.reject(t);
                },
              )
              .then(
                function () {
                  return this.handleNextPrePaginated(o, t, this.add);
                }.bind(this),
              )
              .then(
                function () {
                  this.views.show(), n.resolve();
                }.bind(this),
              ),
            i
          );
        }
        afterDisplayed(t) {
          this.emit(f.c.MANAGERS.ADDED, t);
        }
        afterResized(t) {
          this.emit(f.c.MANAGERS.RESIZE, t.section);
        }
        moveTo(t) {
          var e = 0,
            n = 0;
          this.isPaginated
            ? (e = Math.floor(t.left / this.layout.delta) * this.layout.delta) +
                this.layout.delta >
                this.container.scrollWidth &&
              (e = this.container.scrollWidth - this.layout.delta)
            : (n = t.top),
            this.scrollTo(e, n, !0);
        }
        add(t, e) {
          var n = this.createView(t, e);
          return (
            this.views.append(n),
            (n.onDisplayed = this.afterDisplayed.bind(this)),
            (n.onResize = this.afterResized.bind(this)),
            n.on(f.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            n.on(f.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            n.display(this.request)
          );
        }
        append(t, e) {
          var n = this.createView(t, e);
          return (
            this.views.append(n),
            (n.onDisplayed = this.afterDisplayed.bind(this)),
            (n.onResize = this.afterResized.bind(this)),
            n.on(f.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            n.on(f.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            n.display(this.request)
          );
        }
        prepend(t, e) {
          var n = this.createView(t, e);
          return (
            n.on(f.c.VIEWS.RESIZED, (t) => {
              this.counter(t);
            }),
            this.views.prepend(n),
            (n.onDisplayed = this.afterDisplayed.bind(this)),
            (n.onResize = this.afterResized.bind(this)),
            n.on(f.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            n.on(f.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            n.display(this.request)
          );
        }
        counter(t) {
          "vertical" === this.settings.axis
            ? this.scrollBy(0, t.heightDelta, !0)
            : this.scrollBy(t.widthDelta, 0, !0);
        }
        next() {
          var t;
          let e = this.settings.direction;
          if (this.views.length) {
            if (
              !this.isPaginated ||
              "horizontal" !== this.settings.axis ||
              (e && "ltr" !== e)
            )
              if (
                this.isPaginated &&
                "horizontal" === this.settings.axis &&
                "rtl" === e
              )
                (this.scrollLeft = this.container.scrollLeft),
                  "default" === this.settings.rtlScrollType
                    ? this.container.scrollLeft > 0
                      ? this.scrollBy(this.layout.delta, 0, !0)
                      : (t = this.views.last().section.next())
                    : this.container.scrollLeft + -1 * this.layout.delta >
                        -1 * this.container.scrollWidth
                      ? this.scrollBy(this.layout.delta, 0, !0)
                      : (t = this.views.last().section.next());
              else if (this.isPaginated && "vertical" === this.settings.axis) {
                (this.scrollTop = this.container.scrollTop),
                  this.container.scrollTop + this.container.offsetHeight <
                  this.container.scrollHeight
                    ? this.scrollBy(0, this.layout.height, !0)
                    : (t = this.views.last().section.next());
              } else t = this.views.last().section.next();
            else
              (this.scrollLeft = this.container.scrollLeft),
                this.container.scrollLeft +
                  this.container.offsetWidth +
                  this.layout.delta <=
                this.container.scrollWidth
                  ? this.scrollBy(this.layout.delta, 0, !0)
                  : (t = this.views.last().section.next());
            if (t) {
              this.clear();
              let e = !1;
              return (
                "pre-paginated" === this.layout.name &&
                  2 === this.layout.divisor &&
                  t.properties.includes("page-spread-right") &&
                  (e = !0),
                this.append(t, e)
                  .then(
                    function () {
                      return this.handleNextPrePaginated(e, t, this.append);
                    }.bind(this),
                    (t) => t,
                  )
                  .then(
                    function () {
                      this.isPaginated ||
                        "horizontal" !== this.settings.axis ||
                        "rtl" !== this.settings.direction ||
                        "default" !== this.settings.rtlScrollType ||
                        this.scrollTo(this.container.scrollWidth, 0, !0),
                        this.views.show();
                    }.bind(this),
                  )
              );
            }
          }
        }
        prev() {
          var t;
          let e = this.settings.direction;
          if (this.views.length) {
            if (
              !this.isPaginated ||
              "horizontal" !== this.settings.axis ||
              (e && "ltr" !== e)
            )
              if (
                this.isPaginated &&
                "horizontal" === this.settings.axis &&
                "rtl" === e
              )
                (this.scrollLeft = this.container.scrollLeft),
                  "default" === this.settings.rtlScrollType
                    ? this.container.scrollLeft + this.container.offsetWidth <
                      this.container.scrollWidth
                      ? this.scrollBy(-this.layout.delta, 0, !0)
                      : (t = this.views.first().section.prev())
                    : this.container.scrollLeft < 0
                      ? this.scrollBy(-this.layout.delta, 0, !0)
                      : (t = this.views.first().section.prev());
              else if (this.isPaginated && "vertical" === this.settings.axis) {
                (this.scrollTop = this.container.scrollTop),
                  this.container.scrollTop > 0
                    ? this.scrollBy(0, -this.layout.height, !0)
                    : (t = this.views.first().section.prev());
              } else t = this.views.first().section.prev();
            else
              (this.scrollLeft = this.container.scrollLeft),
                this.container.scrollLeft > 0
                  ? this.scrollBy(-this.layout.delta, 0, !0)
                  : (t = this.views.first().section.prev());
            if (t) {
              this.clear();
              let e = !1;
              return (
                "pre-paginated" === this.layout.name &&
                  2 === this.layout.divisor &&
                  "object" != typeof t.prev() &&
                  (e = !0),
                this.prepend(t, e)
                  .then(
                    function () {
                      var e;
                      if (
                        "pre-paginated" === this.layout.name &&
                        this.layout.divisor > 1 &&
                        (e = t.prev())
                      )
                        return this.prepend(e);
                    }.bind(this),
                    (t) => t,
                  )
                  .then(
                    function () {
                      this.isPaginated &&
                        "horizontal" === this.settings.axis &&
                        ("rtl" === this.settings.direction
                          ? "default" === this.settings.rtlScrollType
                            ? this.scrollTo(0, 0, !0)
                            : this.scrollTo(
                                -1 * this.container.scrollWidth +
                                  this.layout.delta,
                                0,
                                !0,
                              )
                          : this.scrollTo(
                              this.container.scrollWidth - this.layout.delta,
                              0,
                              !0,
                            )),
                        this.views.show();
                    }.bind(this),
                  )
              );
            }
          }
        }
        current() {
          var t = this.visible();
          return t.length ? t[t.length - 1] : null;
        }
        clear() {
          this.views &&
            (this.views.hide(), this.scrollTo(0, 0, !0), this.views.clear());
        }
        currentLocation() {
          return (
            this.isPaginated && "horizontal" === this.settings.axis
              ? (this.location = this.paginatedLocation())
              : (this.location = this.scrolledLocation()),
            this.location
          );
        }
        scrolledLocation() {
          let t = this.visible(),
            e = this.container.getBoundingClientRect(),
            n = e.height < window.innerHeight ? e.height : window.innerHeight,
            i = e.width < window.innerWidth ? e.width : window.innerWidth,
            r = "vertical" === this.settings.axis,
            s = (this.settings.direction, 0);
          return (
            this.settings.fullsize && (s = r ? window.scrollY : window.scrollX),
            t.map((t) => {
              let o,
                a,
                h,
                l,
                { index: u, href: c } = t.section,
                d = t.position(),
                f = t.width(),
                p = t.height();
              r
                ? ((o = s + e.top - d.top + 0),
                  (a = o + n - 0),
                  (l = this.layout.count(p, n).pages),
                  (h = n))
                : ((o = s + e.left - d.left + 0),
                  (a = o + i - 0),
                  (l = this.layout.count(f, i).pages),
                  (h = i));
              let g = Math.ceil(o / h),
                m = [],
                v = Math.ceil(a / h);
              if ("rtl" === this.settings.direction && !r) {
                let t = g;
                (g = l - v), (v = l - t);
              }
              m = [];
              for (var y = g; y <= v; y++) {
                let t = y + 1;
                m.push(t);
              }
              return {
                index: u,
                href: c,
                pages: m,
                totalPages: l,
                mapping: this.mapping.page(t.contents, t.section.cfiBase, o, a),
              };
            })
          );
        }
        paginatedLocation() {
          let t = this.visible(),
            e = this.container.getBoundingClientRect(),
            n = 0,
            i = 0;
          return (
            this.settings.fullsize && (n = window.scrollX),
            t.map((t) => {
              let r,
                s,
                o,
                a,
                { index: h, href: l } = t.section,
                u = t.position(),
                c = t.width();
              "rtl" === this.settings.direction
                ? ((r = e.right - n),
                  (a = Math.min(Math.abs(r - u.left), this.layout.width) - i),
                  (o = u.width - (u.right - r) - i),
                  (s = o - a))
                : ((r = e.left + n),
                  (a = Math.min(u.right - r, this.layout.width) - i),
                  (s = r - u.left + i),
                  (o = s + a)),
                (i += a);
              let d = this.mapping.page(t.contents, t.section.cfiBase, s, o),
                f = this.layout.count(c).pages,
                p = Math.floor(s / this.layout.pageWidth),
                g = [],
                m = Math.floor(o / this.layout.pageWidth);
              if (
                (p < 0 && ((p = 0), (m += 1)), "rtl" === this.settings.direction)
              ) {
                let t = p;
                (p = f - m), (m = f - t);
              }
              for (var v = p + 1; v <= m; v++) {
                let t = v;
                g.push(t);
              }
              return { index: h, href: l, pages: g, totalPages: f, mapping: d };
            })
          );
        }
        isVisible(t, e, n, i) {
          var r = t.position(),
            s = i || this.bounds();
          return (
            ("horizontal" === this.settings.axis &&
              r.right > s.left - e &&
              r.left < s.right + n) ||
            ("vertical" === this.settings.axis &&
              r.bottom > s.top - e &&
              r.top < s.bottom + n)
          );
        }
        visible() {
          for (
            var t,
              e = this.bounds(),
              n = this.views.displayed(),
              i = n.length,
              r = [],
              s = 0;
            s < i;
            s++
          )
            (t = n[s]), !0 === this.isVisible(t, 0, 0, e) && r.push(t);
          return r;
        }
        scrollBy(t, e, n) {
          let i = "rtl" === this.settings.direction ? -1 : 1;
          n && (this.ignore = !0),
            this.settings.fullsize
              ? window.scrollBy(t * i, e * i)
              : (t && (this.container.scrollLeft += t * i),
                e && (this.container.scrollTop += e)),
            (this.scrolled = !0);
        }
        scrollTo(t, e, n) {
          n && (this.ignore = !0),
            this.settings.fullsize
              ? window.scrollTo(t, e)
              : ((this.container.scrollLeft = t), (this.container.scrollTop = e)),
            (this.scrolled = !0);
        }
        onScroll() {
          let t, e;
          this.settings.fullsize
            ? ((t = window.scrollY), (e = window.scrollX))
            : ((t = this.container.scrollTop), (e = this.container.scrollLeft)),
            (this.scrollTop = t),
            (this.scrollLeft = e),
            this.ignore
              ? (this.ignore = !1)
              : (this.emit(f.c.MANAGERS.SCROLL, { top: t, left: e }),
                clearTimeout(this.afterScrolled),
                (this.afterScrolled = setTimeout(
                  function () {
                    this.emit(f.c.MANAGERS.SCROLLED, {
                      top: this.scrollTop,
                      left: this.scrollLeft,
                    });
                  }.bind(this),
                  20,
                )));
        }
        bounds() {
          return this.stage.bounds();
        }
        applyLayout(t) {
          (this.layout = t),
            this.updateLayout(),
            this.views &&
              this.views.length > 0 &&
              "pre-paginated" === this.layout.name &&
              this.display(this.views.first().section);
        }
        updateLayout() {
          this.stage &&
            ((this._stageSize = this.stage.size()),
            this.isPaginated
              ? (this.layout.calculate(
                  this._stageSize.width,
                  this._stageSize.height,
                  this.settings.gap,
                ),
                (this.settings.offset = this.layout.delta / this.layout.divisor))
              : this.layout.calculate(
                  this._stageSize.width,
                  this._stageSize.height,
                ),
            (this.viewSettings.width = this.layout.width),
            (this.viewSettings.height = this.layout.height),
            this.setLayout(this.layout));
        }
        setLayout(t) {
          (this.viewSettings.layout = t),
            (this.mapping = new a.a(
              t.props,
              this.settings.direction,
              this.settings.axis,
            )),
            this.views &&
              this.views.forEach(function (e) {
                e && e.setLayout(t);
              });
        }
        updateWritingMode(t) {
          this.writingMode = t;
        }
        updateAxis(t, e) {
          (e || t !== this.settings.axis) &&
            ((this.settings.axis = t),
            this.stage && this.stage.axis(t),
            (this.viewSettings.axis = t),
            this.mapping &&
              (this.mapping = new a.a(
                this.layout.props,
                this.settings.direction,
                this.settings.axis,
              )),
            this.layout &&
              ("vertical" === t
                ? this.layout.spread("none")
                : this.layout.spread(this.layout.settings.spread)));
        }
        updateFlow(t, e = "auto") {
          let n = "paginated" === t || "auto" === t;
          (this.isPaginated = n),
            "scrolled-doc" === t ||
            "scrolled-continuous" === t ||
            "scrolled" === t
              ? this.updateAxis("vertical")
              : this.updateAxis("horizontal"),
            (this.viewSettings.flow = t),
            this.settings.overflow
              ? (this.overflow = this.settings.overflow)
              : (this.overflow = n ? "hidden" : e),
            this.stage && this.stage.overflow(this.overflow),
            this.updateLayout();
        }
        getContents() {
          var t = [];
          return this.views
            ? (this.views.forEach(function (e) {
                const n = e && e.contents;
                n && t.push(n);
              }),
              t)
            : t;
        }
        direction(t = "ltr") {
          (this.settings.direction = t),
            this.stage && this.stage.direction(t),
            (this.viewSettings.direction = t),
            this.updateLayout();
        }
        isRendered() {
          return this.rendered;
        }
      }
      r()(p.prototype);
      e.a = p;
    },
    function (t, e, n) {
      "use strict";
      var i = n(2),
        r = n(0);
      e.a = class {
        constructor(t, e, n, i = !1) {
          (this.layout = t),
            (this.horizontal = "horizontal" === n),
            (this.direction = e || "ltr"),
            (this._dev = i);
        }
        section(t) {
          var e = this.findRanges(t);
          return this.rangeListToCfiList(t.section.cfiBase, e);
        }
        page(t, e, n, r) {
          var s,
            o = !(!t || !t.document) && t.document.body;
          if (o) {
            if (
              ((s = this.rangePairToCfiPair(e, {
                start: this.findStart(o, n, r),
                end: this.findEnd(o, n, r),
              })),
              !0 === this._dev)
            ) {
              let e = t.document,
                n = new i.a(s.start).toRange(e),
                r = new i.a(s.end).toRange(e),
                o = e.defaultView.getSelection(),
                a = e.createRange();
              o.removeAllRanges(),
                a.setStart(n.startContainer, n.startOffset),
                a.setEnd(r.endContainer, r.endOffset),
                o.addRange(a);
            }
            return s;
          }
        }
        walk(t, e) {
          if (!t || t.nodeType !== Node.TEXT_NODE) {
            var n = function (t) {
                return t.data.trim().length > 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_REJECT;
              },
              i = n;
            i.acceptNode = n;
            for (
              var r,
                s,
                o = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, i, !1);
              (r = o.nextNode()) && !(s = e(r));
  
            );
            return s;
          }
        }
        findRanges(t) {
          for (
            var e,
              n,
              i = [],
              r = t.contents.scrollWidth(),
              s = Math.ceil(r / this.layout.spreadWidth) * this.layout.divisor,
              o = this.layout.columnWidth,
              a = this.layout.gap,
              h = 0;
            h < s.pages;
            h++
          )
            (e = (o + a) * h),
              (n = o * (h + 1) + a * h),
              i.push({
                start: this.findStart(t.document.body, e, n),
                end: this.findEnd(t.document.body, e, n),
              });
          return i;
        }
        findStart(t, e, n) {
          for (var i, s, o = [t], a = t; o.length; )
            if (
              ((i = o.shift()),
              (s = this.walk(i, (t) => {
                var i, s, h, l, u;
                if (
                  ((u = Object(r.nodeBounds)(t)),
                  this.horizontal && "ltr" === this.direction)
                ) {
                  if (
                    ((i = this.horizontal ? u.left : u.top),
                    (s = this.horizontal ? u.right : u.bottom),
                    i >= e && i <= n)
                  )
                    return t;
                  if (s > e) return t;
                  (a = t), o.push(t);
                } else if (this.horizontal && "rtl" === this.direction) {
                  if (((i = u.left), (s = u.right) <= n && s >= e)) return t;
                  if (i < n) return t;
                  (a = t), o.push(t);
                } else {
                  if (((h = u.top), (l = u.bottom), h >= e && h <= n)) return t;
                  if (l > e) return t;
                  (a = t), o.push(t);
                }
              })))
            )
              return this.findTextStartRange(s, e, n);
          return this.findTextStartRange(a, e, n);
        }
        findEnd(t, e, n) {
          for (var i, s, o = [t], a = t; o.length; )
            if (
              ((i = o.shift()),
              (s = this.walk(i, (t) => {
                var i, s, h, l, u;
                if (
                  ((u = Object(r.nodeBounds)(t)),
                  this.horizontal && "ltr" === this.direction)
                ) {
                  if (
                    ((i = Math.round(u.left)),
                    (s = Math.round(u.right)),
                    i > n && a)
                  )
                    return a;
                  if (s > n) return t;
                  (a = t), o.push(t);
                } else if (this.horizontal && "rtl" === this.direction) {
                  if (
                    ((i = Math.round(this.horizontal ? u.left : u.top)),
                    (s = Math.round(this.horizontal ? u.right : u.bottom)) < e &&
                      a)
                  )
                    return a;
                  if (i < e) return t;
                  (a = t), o.push(t);
                } else {
                  if (
                    ((h = Math.round(u.top)),
                    (l = Math.round(u.bottom)),
                    h > n && a)
                  )
                    return a;
                  if (l > n) return t;
                  (a = t), o.push(t);
                }
              })))
            )
              return this.findTextEndRange(s, e, n);
          return this.findTextEndRange(a, e, n);
        }
        findTextStartRange(t, e, n) {
          for (
            var i, r, s = this.splitTextNodeIntoRanges(t), o = 0;
            o < s.length;
            o++
          )
            if (
              ((r = (i = s[o]).getBoundingClientRect()),
              this.horizontal && "ltr" === this.direction)
            ) {
              if (r.left >= e) return i;
            } else if (this.horizontal && "rtl" === this.direction) {
              if (r.right <= n) return i;
            } else if (r.top >= e) return i;
          return s[0];
        }
        findTextEndRange(t, e, n) {
          for (
            var i, r, s, o, a, h, l, u = this.splitTextNodeIntoRanges(t), c = 0;
            c < u.length;
            c++
          ) {
            if (
              ((s = (r = u[c]).getBoundingClientRect()),
              this.horizontal && "ltr" === this.direction)
            ) {
              if (((o = s.left), (a = s.right), o > n && i)) return i;
              if (a > n) return r;
            } else if (this.horizontal && "rtl" === this.direction) {
              if (((o = s.left), (a = s.right) < e && i)) return i;
              if (o < e) return r;
            } else {
              if (((h = s.top), (l = s.bottom), h > n && i)) return i;
              if (l > n) return r;
            }
            i = r;
          }
          return u[u.length - 1];
        }
        splitTextNodeIntoRanges(t, e) {
          var n,
            i = [],
            r = (t.textContent || "").trim(),
            s = t.ownerDocument,
            o = e || " ",
            a = r.indexOf(o);
          if (-1 === a || t.nodeType != Node.TEXT_NODE)
            return (n = s.createRange()).selectNodeContents(t), [n];
          for (
            (n = s.createRange()).setStart(t, 0),
              n.setEnd(t, a),
              i.push(n),
              n = !1;
            -1 != a;
  
          )
            (a = r.indexOf(o, a + 1)) > 0 &&
              (n && (n.setEnd(t, a), i.push(n)),
              (n = s.createRange()).setStart(t, a + 1));
          return n && (n.setEnd(t, r.length), i.push(n)), i;
        }
        rangePairToCfiPair(t, e) {
          var n = e.start,
            r = e.end;
          return (
            n.collapse(!0),
            r.collapse(!1),
            { start: new i.a(n, t).toString(), end: new i.a(r, t).toString() }
          );
        }
        rangeListToCfiList(t, e) {
          for (var n, i = [], r = 0; r < e.length; r++)
            (n = this.rangePairToCfiPair(t, e[r])), i.push(n);
          return i;
        }
        axis(t) {
          return t && (this.horizontal = "horizontal" === t), this.horizontal;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(3),
        r = n.n(i),
        s = n(0),
        o = n(5),
        a = n(4),
        h = n(2),
        l = n(6),
        u = n(8);
      var c = function (t, e, n, i) {
          var r,
            o = "undefined" != typeof window && window.URL,
            h = o ? "blob" : "arraybuffer",
            l = new s.defer(),
            u = new XMLHttpRequest(),
            c = XMLHttpRequest.prototype;
          for (r in ("overrideMimeType" in c ||
            Object.defineProperty(c, "overrideMimeType", {
              value: function () {},
            }),
          n && (u.withCredentials = !0),
          (u.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
              var t = !1;
              if (
                (("" !== this.responseType && "document" !== this.responseType) ||
                  (t = this.responseXML),
                200 === this.status || 0 === this.status || t)
              ) {
                var n;
                if (!this.response && !t)
                  return (
                    l.reject({
                      status: this.status,
                      message: "Empty Response",
                      stack: new Error().stack,
                    }),
                    l.promise
                  );
                if (403 === this.status)
                  return (
                    l.reject({
                      status: this.status,
                      response: this.response,
                      message: "Forbidden",
                      stack: new Error().stack,
                    }),
                    l.promise
                  );
                (n = t
                  ? this.responseXML
                  : Object(s.isXml)(e)
                    ? Object(s.parse)(this.response, "text/xml")
                    : "xhtml" == e
                      ? Object(s.parse)(this.response, "application/xhtml+xml")
                      : "html" == e || "htm" == e
                        ? Object(s.parse)(this.response, "text/html")
                        : "json" == e
                          ? JSON.parse(this.response)
                          : "blob" == e
                            ? o
                              ? this.response
                              : new Blob([this.response])
                            : this.response),
                  l.resolve(n);
              } else
                l.reject({
                  status: this.status,
                  message: this.response,
                  stack: new Error().stack,
                });
            }
          }),
          (u.onerror = function (t) {
            l.reject(t);
          }),
          u.open("GET", t, !0),
          i))
            u.setRequestHeader(r, i[r]);
          return (
            "json" == e && u.setRequestHeader("Accept", "application/json"),
            e || (e = new a.a(t).extension),
            "blob" == e && (u.responseType = h),
            Object(s.isXml)(e) && u.overrideMimeType("text/xml"),
            "binary" == e && (u.responseType = "arraybuffer"),
            u.send(),
            l.promise
          );
        },
        d = n(18);
      var f = class {
        constructor(t, e) {
          (this.idref = t.idref),
            (this.linear = "yes" === t.linear),
            (this.properties = t.properties),
            (this.index = t.index),
            (this.href = t.href),
            (this.url = t.url),
            (this.canonical = t.canonical),
            (this.next = t.next),
            (this.prev = t.prev),
            (this.cfiBase = t.cfiBase),
            e
              ? (this.hooks = e)
              : ((this.hooks = {}),
                (this.hooks.serialize = new l.a(this)),
                (this.hooks.content = new l.a(this))),
            (this.document = void 0),
            (this.contents = void 0),
            (this.output = void 0);
        }
        load(t) {
          var e = t || this.request || c,
            n = new s.defer(),
            i = n.promise;
          return (
            this.contents
              ? n.resolve(this.contents)
              : e(this.url)
                  .then(
                    function (t) {
                      return (
                        (this.document = t),
                        (this.contents = t.documentElement),
                        this.hooks.content.trigger(this.document, this)
                      );
                    }.bind(this),
                  )
                  .then(
                    function () {
                      n.resolve(this.contents);
                    }.bind(this),
                  )
                  .catch(function (t) {
                    n.reject(t);
                  }),
            i
          );
        }
        base() {
          return Object(u.a)(this.document, this);
        }
        render(t) {
          var e = new s.defer(),
            n = e.promise;
          return (
            this.output,
            this.load(t)
              .then(
                function (t) {
                  var e =
                      (
                        ("undefined" != typeof navigator &&
                          navigator.userAgent) ||
                        ""
                      ).indexOf("Trident") >= 0,
                    n = new (
                      "undefined" == typeof XMLSerializer || e
                        ? d.XMLDOMParser
                        : XMLSerializer
                    )();
                  return (this.output = n.serializeToString(t)), this.output;
                }.bind(this),
              )
              .then(
                function () {
                  return this.hooks.serialize.trigger(this.output, this);
                }.bind(this),
              )
              .then(
                function () {
                  e.resolve(this.output);
                }.bind(this),
              )
              .catch(function (t) {
                e.reject(t);
              }),
            n
          );
        }
        find(t) {
          var e = this,
            n = [],
            i = t.toLowerCase();
          return (
            Object(s.sprint)(e.document, function (t) {
              !(function (t) {
                for (
                  var r,
                    s,
                    o,
                    a = t.textContent.toLowerCase(),
                    h = e.document.createRange(),
                    l = -1;
                  -1 != s;
  
                )
                  -1 != (s = a.indexOf(i, l + 1)) &&
                    ((h = e.document.createRange()).setStart(t, s),
                    h.setEnd(t, s + i.length),
                    (r = e.cfiFromRange(h)),
                    (o =
                      t.textContent.length < 150
                        ? t.textContent
                        : "..." +
                          (o = t.textContent.substring(s - 75, s + 75)) +
                          "..."),
                    n.push({ cfi: r, excerpt: o })),
                    (l = s);
              })(t);
            }),
            n
          );
        }
        search(t, e = 5) {
          if (void 0 === document.createTreeWalker) return this.find(t);
          let n = [];
          const i = this,
            r = t.toLowerCase(),
            s = function (t) {
              const e = t
                .reduce((t, e) => t + e.textContent, "")
                .toLowerCase()
                .indexOf(r);
              if (-1 != e) {
                const s = 0,
                  o = e + r.length;
                let a = 0,
                  h = 0;
                if (e < t[s].length) {
                  let r;
                  for (; a < t.length - 1 && ((h += t[a].length), !(o <= h)); )
                    a += 1;
                  let l = t[s],
                    u = t[a],
                    c = i.document.createRange();
                  c.setStart(l, e);
                  let d = t
                    .slice(0, a)
                    .reduce((t, e) => t + e.textContent.length, 0);
                  c.setEnd(u, d > o ? o : o - d), (r = i.cfiFromRange(c));
                  let f = t
                    .slice(0, a + 1)
                    .reduce((t, e) => t + e.textContent, "");
                  f.length > 150 &&
                    ((f = f.substring(e - 75, e + 75)), (f = "..." + f + "...")),
                    n.push({ cfi: r, excerpt: f });
                }
              }
            },
            o = document.createTreeWalker(
              i.document,
              NodeFilter.SHOW_TEXT,
              null,
              !1,
            );
          let a,
            h = [];
          for (; (a = o.nextNode()); )
            h.push(a), h.length == e && (s(h.slice(0, e)), (h = h.slice(1, e)));
          return h.length > 0 && s(h), n;
        }
        reconcileLayoutSettings(t) {
          var e = {
            layout: t.layout,
            spread: t.spread,
            orientation: t.orientation,
          };
          return (
            this.properties.forEach(function (t) {
              var n,
                i,
                r = t.replace("rendition:", ""),
                s = r.indexOf("-");
              -1 != s && ((n = r.slice(0, s)), (i = r.slice(s + 1)), (e[n] = i));
            }),
            e
          );
        }
        cfiFromRange(t) {
          return new h.a(t, this.cfiBase).toString();
        }
        cfiFromElement(t) {
          return new h.a(t, this.cfiBase).toString();
        }
        unload() {
          (this.document = void 0),
            (this.contents = void 0),
            (this.output = void 0);
        }
        destroy() {
          this.unload(),
            this.hooks.serialize.clear(),
            this.hooks.content.clear(),
            (this.hooks = void 0),
            (this.idref = void 0),
            (this.linear = void 0),
            (this.properties = void 0),
            (this.index = void 0),
            (this.href = void 0),
            (this.url = void 0),
            (this.next = void 0),
            (this.prev = void 0),
            (this.cfiBase = void 0);
        }
      };
      var p = class {
          constructor() {
            (this.spineItems = []),
              (this.spineByHref = {}),
              (this.spineById = {}),
              (this.hooks = {}),
              (this.hooks.serialize = new l.a()),
              (this.hooks.content = new l.a()),
              this.hooks.content.register(u.a),
              this.hooks.content.register(u.b),
              this.hooks.content.register(u.d),
              (this.epubcfi = new h.a()),
              (this.loaded = !1),
              (this.items = void 0),
              (this.manifest = void 0),
              (this.spineNodeIndex = void 0),
              (this.baseUrl = void 0),
              (this.length = void 0);
          }
          unpack(t, e, n) {
            (this.items = t.spine),
              (this.manifest = t.manifest),
              (this.spineNodeIndex = t.spineNodeIndex),
              (this.baseUrl = t.baseUrl || t.basePath || ""),
              (this.length = this.items.length),
              this.items.forEach((t, i) => {
                var r,
                  s = this.manifest[t.idref];
                (t.index = i),
                  (t.cfiBase = this.epubcfi.generateChapterComponent(
                    this.spineNodeIndex,
                    t.index,
                    t.idref,
                  )),
                  t.href && ((t.url = e(t.href, !0)), (t.canonical = n(t.href))),
                  s &&
                    ((t.href = s.href),
                    (t.url = e(t.href, !0)),
                    (t.canonical = n(t.href)),
                    s.properties.length &&
                      t.properties.push.apply(t.properties, s.properties)),
                  "yes" === t.linear
                    ? ((t.prev = function () {
                        let e = t.index;
                        for (; e > 0; ) {
                          let t = this.get(e - 1);
                          if (t && t.linear) return t;
                          e -= 1;
                        }
                      }.bind(this)),
                      (t.next = function () {
                        let e = t.index;
                        for (; e < this.spineItems.length - 1; ) {
                          let t = this.get(e + 1);
                          if (t && t.linear) return t;
                          e += 1;
                        }
                      }.bind(this)))
                    : ((t.prev = function () {}), (t.next = function () {})),
                  (r = new f(t, this.hooks)),
                  this.append(r);
              }),
              (this.loaded = !0);
          }
          get(t) {
            var e = 0;
            if (void 0 === t)
              for (; e < this.spineItems.length; ) {
                let t = this.spineItems[e];
                if (t && t.linear) break;
                e += 1;
              }
            else if (this.epubcfi.isCfiString(t)) {
              e = new h.a(t).spinePos;
            } else
              "number" == typeof t || !1 === isNaN(t)
                ? (e = t)
                : "string" == typeof t && 0 === t.indexOf("#")
                  ? (e = this.spineById[t.substring(1)])
                  : "string" == typeof t &&
                    ((t = t.split("#")[0]),
                    (e = this.spineByHref[t] || this.spineByHref[encodeURI(t)]));
            return this.spineItems[e] || null;
          }
          append(t) {
            var e = this.spineItems.length;
            return (
              (t.index = e),
              this.spineItems.push(t),
              (this.spineByHref[decodeURI(t.href)] = e),
              (this.spineByHref[encodeURI(t.href)] = e),
              (this.spineByHref[t.href] = e),
              (this.spineById[t.idref] = e),
              e
            );
          }
          prepend(t) {
            return (
              (this.spineByHref[t.href] = 0),
              (this.spineById[t.idref] = 0),
              this.spineItems.forEach(function (t, e) {
                t.index = e;
              }),
              0
            );
          }
          remove(t) {
            var e = this.spineItems.indexOf(t);
            if (e > -1)
              return (
                delete this.spineByHref[t.href],
                delete this.spineById[t.idref],
                this.spineItems.splice(e, 1)
              );
          }
          each() {
            return this.spineItems.forEach.apply(this.spineItems, arguments);
          }
          first() {
            let t = 0;
            do {
              let e = this.get(t);
              if (e && e.linear) return e;
              t += 1;
            } while (t < this.spineItems.length);
          }
          last() {
            let t = this.spineItems.length - 1;
            do {
              let e = this.get(t);
              if (e && e.linear) return e;
              t -= 1;
            } while (t >= 0);
          }
          destroy() {
            this.each((t) => t.destroy()),
              (this.spineItems = void 0),
              (this.spineByHref = void 0),
              (this.spineById = void 0),
              this.hooks.serialize.clear(),
              this.hooks.content.clear(),
              (this.hooks = void 0),
              (this.epubcfi = void 0),
              (this.loaded = !1),
              (this.items = void 0),
              (this.manifest = void 0),
              (this.spineNodeIndex = void 0),
              (this.baseUrl = void 0),
              (this.length = void 0);
          }
        },
        g = n(12),
        m = n(1);
      class v {
        constructor(t, e, n) {
          (this.spine = t),
            (this.request = e),
            (this.pause = n || 100),
            (this.q = new g.a(this)),
            (this.epubcfi = new h.a()),
            (this._locations = []),
            (this._locationsWords = []),
            (this.total = 0),
            (this.break = 150),
            (this._current = 0),
            (this._wordCounter = 0),
            (this.currentLocation = ""),
            (this._currentCfi = ""),
            (this.processingTimeout = void 0);
        }
        generate(t) {
          return (
            t && (this.break = t),
            this.q.pause(),
            this.spine.each(
              function (t) {
                t.linear && this.q.enqueue(this.process.bind(this), t);
              }.bind(this),
            ),
            this.q.run().then(
              function () {
                return (
                  (this.total = this._locations.length - 1),
                  this._currentCfi && (this.currentLocation = this._currentCfi),
                  this._locations
                );
              }.bind(this),
            )
          );
        }
        createRange() {
          return {
            startContainer: void 0,
            startOffset: void 0,
            endContainer: void 0,
            endOffset: void 0,
          };
        }
        process(t) {
          return t.load(this.request).then(
            function (e) {
              var n = new s.defer(),
                i = this.parse(e, t.cfiBase);
              return (
                (this._locations = this._locations.concat(i)),
                t.unload(),
                (this.processingTimeout = setTimeout(
                  () => n.resolve(i),
                  this.pause,
                )),
                n.promise
              );
            }.bind(this),
          );
        }
        parse(t, e, n) {
          var i,
            r,
            o = [],
            a = t.ownerDocument,
            l = Object(s.qs)(a, "body"),
            u = 0,
            c = n || this.break;
          if (
            (Object(s.sprint)(
              l,
              function (t) {
                var n,
                  s = t.length,
                  a = 0;
                if (0 === t.textContent.trim().length) return !1;
                for (
                  0 == u &&
                    (((i = this.createRange()).startContainer = t),
                    (i.startOffset = 0)),
                    (n = c - u) > s && ((u += s), (a = s));
                  a < s;
  
                )
                  if (
                    ((n = c - u),
                    0 === u &&
                      ((a += 1),
                      ((i = this.createRange()).startContainer = t),
                      (i.startOffset = a)),
                    a + n >= s)
                  )
                    (u += s - a), (a = s);
                  else {
                    (a += n), (i.endContainer = t), (i.endOffset = a);
                    let r = new h.a(i, e).toString();
                    o.push(r), (u = 0);
                  }
                r = t;
              }.bind(this),
            ),
            i && i.startContainer && r)
          ) {
            (i.endContainer = r), (i.endOffset = r.length);
            let t = new h.a(i, e).toString();
            o.push(t), (u = 0);
          }
          return o;
        }
        generateFromWords(t, e, n) {
          var i = t ? new h.a(t) : void 0;
          return (
            this.q.pause(),
            (this._locationsWords = []),
            (this._wordCounter = 0),
            this.spine.each(
              function (t) {
                t.linear &&
                  (i
                    ? t.index >= i.spinePos &&
                      this.q.enqueue(this.processWords.bind(this), t, e, i, n)
                    : this.q.enqueue(this.processWords.bind(this), t, e, i, n));
              }.bind(this),
            ),
            this.q.run().then(
              function () {
                return (
                  this._currentCfi && (this.currentLocation = this._currentCfi),
                  this._locationsWords
                );
              }.bind(this),
            )
          );
        }
        processWords(t, e, n, i) {
          return i && this._locationsWords.length >= i
            ? Promise.resolve()
            : t.load(this.request).then(
                function (r) {
                  var o = new s.defer(),
                    a = this.parseWords(r, t, e, n),
                    h = i - this._locationsWords.length;
                  return (
                    (this._locationsWords = this._locationsWords.concat(
                      a.length >= i ? a.slice(0, h) : a,
                    )),
                    t.unload(),
                    (this.processingTimeout = setTimeout(
                      () => o.resolve(a),
                      this.pause,
                    )),
                    o.promise
                  );
                }.bind(this),
              );
        }
        countWords(t) {
          return (t = (t = (t = t.replace(/(^\s*)|(\s*$)/gi, "")).replace(
            /[ ]{2,}/gi,
            " ",
          )).replace(/\n /, "\n")).split(" ").length;
        }
        parseWords(t, e, n, i) {
          var r,
            o = e.cfiBase,
            a = [],
            l = t.ownerDocument,
            u = Object(s.qs)(l, "body"),
            c = n,
            d = !i || i.spinePos !== e.index;
          i &&
            e.index === i.spinePos &&
            (r = i.findNode(
              i.range ? i.path.steps.concat(i.start.steps) : i.path.steps,
              t.ownerDocument,
            ));
          return (
            Object(s.sprint)(
              u,
              function (t) {
                if (!d) {
                  if (t !== r) return !1;
                  d = !0;
                }
                if (
                  t.textContent.length < 10 &&
                  0 === t.textContent.trim().length
                )
                  return !1;
                var e,
                  n = this.countWords(t.textContent),
                  i = 0;
                if (0 === n) return !1;
                for (
                  (e = c - this._wordCounter) > n &&
                  ((this._wordCounter += n), (i = n));
                  i < n;
  
                )
                  if (i + (e = c - this._wordCounter) >= n)
                    (this._wordCounter += n - i), (i = n);
                  else {
                    i += e;
                    let n = new h.a(t, o);
                    a.push({ cfi: n.toString(), wordCount: this._wordCounter }),
                      (this._wordCounter = 0);
                  }
                t;
              }.bind(this),
            ),
            a
          );
        }
        locationFromCfi(t) {
          let e;
          return (
            h.a.prototype.isCfiString(t) && (t = new h.a(t)),
            0 === this._locations.length
              ? -1
              : ((e = Object(s.locationOf)(
                  t,
                  this._locations,
                  this.epubcfi.compare,
                )),
                e > this.total ? this.total : e)
          );
        }
        percentageFromCfi(t) {
          if (0 === this._locations.length) return null;
          var e = this.locationFromCfi(t);
          return this.percentageFromLocation(e);
        }
        percentageFromLocation(t) {
          return t && this.total ? t / this.total : 0;
        }
        cfiFromLocation(t) {
          var e = -1;
          return (
            "number" != typeof t && (t = parseInt(t)),
            t >= 0 && t < this._locations.length && (e = this._locations[t]),
            e
          );
        }
        cfiFromPercentage(t) {
          let e;
          if (
            (t > 1 &&
              console.warn("Normalize cfiFromPercentage value to between 0 - 1"),
            t >= 1)
          ) {
            let t = new h.a(this._locations[this.total]);
            return t.collapse(), t.toString();
          }
          return (e = Math.ceil(this.total * t)), this.cfiFromLocation(e);
        }
        load(t) {
          return (
            (this._locations = "string" == typeof t ? JSON.parse(t) : t),
            (this.total = this._locations.length - 1),
            this._locations
          );
        }
        save() {
          return JSON.stringify(this._locations);
        }
        getCurrent() {
          return this._current;
        }
        setCurrent(t) {
          var e;
          if ("string" == typeof t) this._currentCfi = t;
          else {
            if ("number" != typeof t) return;
            this._current = t;
          }
          0 !== this._locations.length &&
            ("string" == typeof t
              ? ((e = this.locationFromCfi(t)), (this._current = e))
              : (e = t),
            this.emit(m.c.LOCATIONS.CHANGED, {
              percentage: this.percentageFromLocation(e),
            }));
        }
        get currentLocation() {
          return this._current;
        }
        set currentLocation(t) {
          this.setCurrent(t);
        }
        length() {
          return this._locations.length;
        }
        destroy() {
          (this.spine = void 0),
            (this.request = void 0),
            (this.pause = void 0),
            this.q.stop(),
            (this.q = void 0),
            (this.epubcfi = void 0),
            (this._locations = void 0),
            (this.total = void 0),
            (this.break = void 0),
            (this._current = void 0),
            (this.currentLocation = void 0),
            (this._currentCfi = void 0),
            clearTimeout(this.processingTimeout);
        }
      }
      r()(v.prototype);
      var y = v,
        b = n(7),
        w = n.n(b);
      var x = class {
        constructor(t) {
          (this.packagePath = ""),
            (this.directory = ""),
            (this.encoding = ""),
            t && this.parse(t);
        }
        parse(t) {
          var e;
          if (!t) throw new Error("Container File Not Found");
          if (!(e = Object(s.qs)(t, "rootfile")))
            throw new Error("No RootFile Found");
          (this.packagePath = e.getAttribute("full-path")),
            (this.directory = w.a.dirname(this.packagePath)),
            (this.encoding = t.xmlEncoding);
        }
        destroy() {
          (this.packagePath = void 0),
            (this.directory = void 0),
            (this.encoding = void 0);
        }
      };
      var _ = class {
        constructor(t) {
          (this.manifest = {}),
            (this.navPath = ""),
            (this.ncxPath = ""),
            (this.coverPath = ""),
            (this.spineNodeIndex = 0),
            (this.spine = []),
            (this.metadata = {}),
            t && this.parse(t);
        }
        parse(t) {
          var e, n, i;
          if (!t) throw new Error("Package File Not Found");
          if (!(e = Object(s.qs)(t, "metadata")))
            throw new Error("No Metadata Found");
          if (!(n = Object(s.qs)(t, "manifest")))
            throw new Error("No Manifest Found");
          if (!(i = Object(s.qs)(t, "spine"))) throw new Error("No Spine Found");
          return (
            (this.manifest = this.parseManifest(n)),
            (this.navPath = this.findNavPath(n)),
            (this.ncxPath = this.findNcxPath(n, i)),
            (this.coverPath = this.findCoverPath(t)),
            (this.spineNodeIndex = Object(s.indexOfElementNode)(i)),
            (this.spine = this.parseSpine(i, this.manifest)),
            (this.uniqueIdentifier = this.findUniqueIdentifier(t)),
            (this.metadata = this.parseMetadata(e)),
            (this.metadata.direction = i.getAttribute(
              "page-progression-direction",
            )),
            {
              metadata: this.metadata,
              spine: this.spine,
              manifest: this.manifest,
              navPath: this.navPath,
              ncxPath: this.ncxPath,
              coverPath: this.coverPath,
              spineNodeIndex: this.spineNodeIndex,
            }
          );
        }
        parseMetadata(t) {
          var e = {};
          return (
            (e.title = this.getElementText(t, "title")),
            (e.creator = this.getElementText(t, "creator")),
            (e.description = this.getElementText(t, "description")),
            (e.pubdate = this.getElementText(t, "date")),
            (e.publisher = this.getElementText(t, "publisher")),
            (e.identifier = this.getElementText(t, "identifier")),
            (e.language = this.getElementText(t, "language")),
            (e.rights = this.getElementText(t, "rights")),
            (e.modified_date = this.getPropertyText(t, "dcterms:modified")),
            (e.layout = this.getPropertyText(t, "rendition:layout")),
            (e.orientation = this.getPropertyText(t, "rendition:orientation")),
            (e.flow = this.getPropertyText(t, "rendition:flow")),
            (e.viewport = this.getPropertyText(t, "rendition:viewport")),
            (e.media_active_class = this.getPropertyText(
              t,
              "media:active-class",
            )),
            (e.spread = this.getPropertyText(t, "rendition:spread")),
            e
          );
        }
        parseManifest(t) {
          var e = {},
            n = Object(s.qsa)(t, "item");
          return (
            Array.prototype.slice.call(n).forEach(function (t) {
              var n = t.getAttribute("id"),
                i = t.getAttribute("href") || "",
                r = t.getAttribute("media-type") || "",
                s = t.getAttribute("media-overlay") || "",
                o = t.getAttribute("properties") || "";
              e[n] = {
                href: i,
                type: r,
                overlay: s,
                properties: o.length ? o.split(" ") : [],
              };
            }),
            e
          );
        }
        parseSpine(t, e) {
          var n = [],
            i = Object(s.qsa)(t, "itemref");
          return (
            Array.prototype.slice.call(i).forEach(function (t, e) {
              var i = t.getAttribute("idref"),
                r = t.getAttribute("properties") || "",
                s = r.length ? r.split(" ") : [],
                o = {
                  idref: i,
                  linear: t.getAttribute("linear") || "yes",
                  properties: s,
                  index: e,
                };
              n.push(o);
            }),
            n
          );
        }
        findUniqueIdentifier(t) {
          var e = t.documentElement.getAttribute("unique-identifier");
          if (!e) return "";
          var n = t.getElementById(e);
          return n &&
            "identifier" === n.localName &&
            "http://purl.org/dc/elements/1.1/" === n.namespaceURI &&
            n.childNodes.length > 0
            ? n.childNodes[0].nodeValue.trim()
            : "";
        }
        findNavPath(t) {
          var e = Object(s.qsp)(t, "item", { properties: "nav" });
          return !!e && e.getAttribute("href");
        }
        findNcxPath(t, e) {
          var n,
            i = Object(s.qsp)(t, "item", {
              "media-type": "application/x-dtbncx+xml",
            });
          return (
            i || ((n = e.getAttribute("toc")) && (i = t.querySelector("#" + n))),
            !!i && i.getAttribute("href")
          );
        }
        findCoverPath(t) {
          Object(s.qs)(t, "package").getAttribute("version");
          var e = Object(s.qsp)(t, "item", { properties: "cover-image" });
          if (e) return e.getAttribute("href");
          var n = Object(s.qsp)(t, "meta", { name: "cover" });
          if (n) {
            var i = n.getAttribute("content"),
              r = t.getElementById(i);
            return r ? r.getAttribute("href") : "";
          }
          return !1;
        }
        getElementText(t, e) {
          var n,
            i = t.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", e);
          return i && 0 !== i.length && (n = i[0]).childNodes.length
            ? n.childNodes[0].nodeValue
            : "";
        }
        getPropertyText(t, e) {
          var n = Object(s.qsp)(t, "meta", { property: e });
          return n && n.childNodes.length ? n.childNodes[0].nodeValue : "";
        }
        load(t) {
          this.metadata = t.metadata;
          let e = t.readingOrder || t.spine;
          return (
            (this.spine = e.map(
              (t, e) => ((t.index = e), (t.linear = t.linear || "yes"), t),
            )),
            t.resources.forEach((t, e) => {
              (this.manifest[e] = t),
                t.rel && "cover" === t.rel[0] && (this.coverPath = t.href);
            }),
            (this.spineNodeIndex = 0),
            (this.toc = t.toc.map((t, e) => ((t.label = t.title), t))),
            {
              metadata: this.metadata,
              spine: this.spine,
              manifest: this.manifest,
              navPath: this.navPath,
              ncxPath: this.ncxPath,
              coverPath: this.coverPath,
              spineNodeIndex: this.spineNodeIndex,
              toc: this.toc,
            }
          );
        }
        destroy() {
          (this.manifest = void 0),
            (this.navPath = void 0),
            (this.ncxPath = void 0),
            (this.coverPath = void 0),
            (this.spineNodeIndex = void 0),
            (this.spine = void 0),
            (this.metadata = void 0);
        }
      };
      var E = class {
          constructor(t) {
            (this.toc = []),
              (this.tocByHref = {}),
              (this.tocById = {}),
              (this.landmarks = []),
              (this.landmarksByType = {}),
              (this.length = 0),
              t && this.parse(t);
          }
          parse(t) {
            let e,
              n,
              i = t.nodeType;
            i && ((e = Object(s.qs)(t, "html")), (n = Object(s.qs)(t, "ncx"))),
              i
                ? e
                  ? ((this.toc = this.parseNav(t)),
                    (this.landmarks = this.parseLandmarks(t)))
                  : n && (this.toc = this.parseNcx(t))
                : (this.toc = this.load(t)),
              (this.length = 0),
              this.unpack(this.toc);
          }
          unpack(t) {
            for (var e, n = 0; n < t.length; n++)
              (e = t[n]).href && (this.tocByHref[e.href] = n),
                e.id && (this.tocById[e.id] = n),
                this.length++,
                e.subitems.length && this.unpack(e.subitems);
          }
          get(t) {
            var e;
            return t
              ? (0 === t.indexOf("#")
                  ? (e = this.tocById[t.substring(1)])
                  : t in this.tocByHref && (e = this.tocByHref[t]),
                this.getByIndex(t, e, this.toc))
              : this.toc;
          }
          getByIndex(t, e, n) {
            if (0 === n.length) return;
            const i = n[e];
            if (!i || (t !== i.id && t !== i.href)) {
              let i;
              for (
                let r = 0;
                r < n.length && ((i = this.getByIndex(t, e, n[r].subitems)), !i);
                ++r
              );
              return i;
            }
            return i;
          }
          landmark(t) {
            var e;
            return t
              ? ((e = this.landmarksByType[t]), this.landmarks[e])
              : this.landmarks;
          }
          parseNav(t) {
            var e,
              n,
              i = Object(s.querySelectorByType)(t, "nav", "toc"),
              r = i ? Object(s.qsa)(i, "li") : [],
              o = r.length,
              a = {},
              h = [];
            if (!r || 0 === o) return h;
            for (e = 0; e < o; ++e)
              (n = this.navItem(r[e])) &&
                ((a[n.id] = n),
                n.parent ? a[n.parent].subitems.push(n) : h.push(n));
            return h;
          }
          navItem(t) {
            let e = t.getAttribute("id") || void 0,
              n = Object(s.filterChildren)(t, "a", !0);
            if (!n) return;
            let i = n.getAttribute("href") || "";
            e || (e = i);
            let r,
              o = n.textContent || "",
              a = Object(s.getParentByTagName)(t, "li");
            if (a && ((r = a.getAttribute("id")), !r)) {
              const t = Object(s.filterChildren)(a, "a", !0);
              r = t && t.getAttribute("href");
            }
            for (; !r && a; )
              if (
                ((a = Object(s.getParentByTagName)(a, "li")),
                a && ((r = a.getAttribute("id")), !r))
              ) {
                const t = Object(s.filterChildren)(a, "a", !0);
                r = t && t.getAttribute("href");
              }
            return { id: e, href: i, label: o, subitems: [], parent: r };
          }
          parseLandmarks(t) {
            var e,
              n,
              i = Object(s.querySelectorByType)(t, "nav", "landmarks"),
              r = i ? Object(s.qsa)(i, "li") : [],
              o = r.length,
              a = [];
            if (!r || 0 === o) return a;
            for (e = 0; e < o; ++e)
              (n = this.landmarkItem(r[e])) &&
                (a.push(n), (this.landmarksByType[n.type] = e));
            return a;
          }
          landmarkItem(t) {
            let e = Object(s.filterChildren)(t, "a", !0);
            if (!e) return;
            let n =
              e.getAttributeNS("http://www.idpf.org/2007/ops", "type") || void 0;
            return {
              href: e.getAttribute("href") || "",
              label: e.textContent || "",
              type: n,
            };
          }
          parseNcx(t) {
            var e,
              n,
              i = Object(s.qsa)(t, "navPoint"),
              r = i.length,
              o = {},
              a = [];
            if (!i || 0 === r) return a;
            for (e = 0; e < r; ++e)
              (o[(n = this.ncxItem(i[e])).id] = n),
                n.parent ? o[n.parent].subitems.push(n) : a.push(n);
            return a;
          }
          ncxItem(t) {
            var e,
              n = t.getAttribute("id") || !1,
              i = Object(s.qs)(t, "content").getAttribute("src"),
              r = Object(s.qs)(t, "navLabel"),
              o = r.textContent ? r.textContent : "",
              a = t.parentNode;
            return (
              !a ||
                ("navPoint" !== a.nodeName &&
                  "navPoint" !== a.nodeName.split(":").slice(-1)[0]) ||
                (e = a.getAttribute("id")),
              { id: n, href: i, label: o, subitems: [], parent: e }
            );
          }
          load(t) {
            return t.map(
              (t) => (
                (t.label = t.title),
                (t.subitems = t.children ? this.load(t.children) : []),
                t
              ),
            );
          }
          forEach(t) {
            return this.toc.forEach(t);
          }
        },
        k = {
          application: {
            ecmascript: ["es", "ecma"],
            javascript: "js",
            ogg: "ogx",
            pdf: "pdf",
            postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
            "rdf+xml": "rdf",
            smil: ["smi", "smil"],
            "xhtml+xml": ["xhtml", "xht"],
            xml: ["xml", "xsl", "xsd", "opf", "ncx"],
            zip: "zip",
            "x-httpd-eruby": "rhtml",
            "x-latex": "latex",
            "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
            "x-object": "o",
            "x-shockwave-flash": ["swf", "swfl"],
            "x-silverlight": "scr",
            "epub+zip": "epub",
            "font-tdpfr": "pfr",
            "inkml+xml": ["ink", "inkml"],
            json: "json",
            "jsonml+json": "jsonml",
            "mathml+xml": "mathml",
            "metalink+xml": "metalink",
            mp4: "mp4s",
            "omdoc+xml": "omdoc",
            oxps: "oxps",
            "vnd.amazon.ebook": "azw",
            widget: "wgt",
            "x-dtbook+xml": "dtb",
            "x-dtbresource+xml": "res",
            "x-font-bdf": "bdf",
            "x-font-ghostscript": "gsf",
            "x-font-linux-psf": "psf",
            "x-font-otf": "otf",
            "x-font-pcf": "pcf",
            "x-font-snf": "snf",
            "x-font-ttf": ["ttf", "ttc"],
            "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
            "x-font-woff": "woff",
            "x-mobipocket-ebook": ["prc", "mobi"],
            "x-mspublisher": "pub",
            "x-nzb": "nzb",
            "x-tgif": "obj",
            "xaml+xml": "xaml",
            "xml-dtd": "dtd",
            "xproc+xml": "xpl",
            "xslt+xml": "xslt",
            "internet-property-stream": "acx",
            "x-compress": "z",
            "x-compressed": "tgz",
            "x-gzip": "gz",
          },
          audio: {
            flac: "flac",
            midi: ["mid", "midi", "kar", "rmi"],
            mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
            mpegurl: "m3u",
            ogg: ["oga", "ogg", "spx"],
            "x-aiff": ["aif", "aiff", "aifc"],
            "x-ms-wma": "wma",
            "x-wav": "wav",
            adpcm: "adp",
            mp4: "mp4a",
            webm: "weba",
            "x-aac": "aac",
            "x-caf": "caf",
            "x-matroska": "mka",
            "x-pn-realaudio-plugin": "rmp",
            xm: "xm",
            mid: ["mid", "rmi"],
          },
          image: {
            gif: "gif",
            ief: "ief",
            jpeg: ["jpeg", "jpg", "jpe"],
            pcx: "pcx",
            png: "png",
            "svg+xml": ["svg", "svgz"],
            tiff: ["tiff", "tif"],
            "x-icon": "ico",
            bmp: "bmp",
            webp: "webp",
            "x-pict": ["pic", "pct"],
            "x-tga": "tga",
            "cis-cod": "cod",
          },
          text: {
            "cache-manifest": ["manifest", "appcache"],
            css: "css",
            csv: "csv",
            html: ["html", "htm", "shtml", "stm"],
            mathml: "mml",
            plain: [
              "txt",
              "text",
              "brf",
              "conf",
              "def",
              "list",
              "log",
              "in",
              "bas",
            ],
            richtext: "rtx",
            "tab-separated-values": "tsv",
            "x-bibtex": "bib",
          },
          video: {
            mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
            mp4: ["mp4", "mp4v", "mpg4"],
            quicktime: ["qt", "mov"],
            ogg: "ogv",
            "vnd.mpegurl": ["mxu", "m4u"],
            "x-flv": "flv",
            "x-la-asf": ["lsf", "lsx"],
            "x-mng": "mng",
            "x-ms-asf": ["asf", "asx", "asr"],
            "x-ms-wm": "wm",
            "x-ms-wmv": "wmv",
            "x-ms-wmx": "wmx",
            "x-ms-wvx": "wvx",
            "x-msvideo": "avi",
            "x-sgi-movie": "movie",
            "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
            "3gpp2": "3g2",
            h261: "h261",
            h263: "h263",
            h264: "h264",
            jpeg: "jpgv",
            jpm: ["jpm", "jpgm"],
            mj2: ["mj2", "mjp2"],
            "vnd.ms-playready.media.pyv": "pyv",
            "vnd.uvvu.mp4": ["uvu", "uvvu"],
            "vnd.vivo": "viv",
            webm: "webm",
            "x-f4v": "f4v",
            "x-m4v": "m4v",
            "x-ms-vob": "vob",
            "x-smv": "smv",
          },
        },
        S = (function () {
          var t,
            e,
            n,
            i,
            r = {};
          for (t in k)
            if (k.hasOwnProperty(t))
              for (e in k[t])
                if (k[t].hasOwnProperty(e))
                  if ("string" == typeof (n = k[t][e])) r[n] = t + "/" + e;
                  else for (i = 0; i < n.length; i++) r[n[i]] = t + "/" + e;
          return r;
        })();
      var C = {
        lookup: function (t) {
          return (t && S[t.split(".").pop().toLowerCase()]) || "text/plain";
        },
      };
      var T = class {
        constructor(t, e) {
          (this.settings = {
            replacements: (e && e.replacements) || "base64",
            archive: e && e.archive,
            resolver: e && e.resolver,
            request: e && e.request,
          }),
            this.process(t);
        }
        process(t) {
          (this.manifest = t),
            (this.resources = Object.keys(t).map(function (e) {
              return t[e];
            })),
            (this.replacementUrls = []),
            (this.html = []),
            (this.assets = []),
            (this.css = []),
            (this.urls = []),
            (this.cssUrls = []),
            this.split(),
            this.splitUrls();
        }
        split() {
          (this.html = this.resources.filter(function (t) {
            if ("application/xhtml+xml" === t.type || "text/html" === t.type)
              return !0;
          })),
            (this.assets = this.resources.filter(function (t) {
              if ("application/xhtml+xml" !== t.type && "text/html" !== t.type)
                return !0;
            })),
            (this.css = this.resources.filter(function (t) {
              if ("text/css" === t.type) return !0;
            }));
        }
        splitUrls() {
          (this.urls = this.assets.map(
            function (t) {
              return t.href;
            }.bind(this),
          )),
            (this.cssUrls = this.css.map(function (t) {
              return t.href;
            }));
        }
        createUrl(t) {
          var e = new o.a(t),
            n = C.lookup(e.filename);
          return this.settings.archive
            ? this.settings.archive.createUrl(t, {
                base64: "base64" === this.settings.replacements,
              })
            : "base64" === this.settings.replacements
              ? this.settings
                  .request(t, "blob")
                  .then((t) => Object(s.blob2base64)(t))
                  .then((t) => Object(s.createBase64Url)(t, n))
              : this.settings
                  .request(t, "blob")
                  .then((t) => Object(s.createBlobUrl)(t, n));
        }
        replacements() {
          if ("none" === this.settings.replacements)
            return new Promise(
              function (t) {
                t(this.urls);
              }.bind(this),
            );
          var t = this.urls.map((t) => {
            var e = this.settings.resolver(t);
            return this.createUrl(e).catch((t) => (console.error(t), null));
          });
          return Promise.all(t).then(
            (t) => (
              (this.replacementUrls = t.filter((t) => "string" == typeof t)), t
            ),
          );
        }
        replaceCss(t, e) {
          var n = [];
          return (
            (t = t || this.settings.archive),
            (e = e || this.settings.resolver),
            this.cssUrls.forEach(
              function (i) {
                var r = this.createCssFile(i, t, e).then(
                  function (t) {
                    var e = this.urls.indexOf(i);
                    e > -1 && (this.replacementUrls[e] = t);
                  }.bind(this),
                );
                n.push(r);
              }.bind(this),
            ),
            Promise.all(n)
          );
        }
        createCssFile(t) {
          if (w.a.isAbsolute(t))
            return new Promise(function (t) {
              t();
            });
          var e,
            n = this.settings.resolver(t);
          e = this.settings.archive
            ? this.settings.archive.getText(n)
            : this.settings.request(n, "text");
          var i = this.urls.map((t) => {
            var e = this.settings.resolver(t);
            return new a.a(n).relative(e);
          });
          return e
            ? e.then(
                (t) => (
                  (t = Object(u.e)(t, i, this.replacementUrls)),
                  "base64" === this.settings.replacements
                    ? Object(s.createBase64Url)(t, "text/css")
                    : Object(s.createBlobUrl)(t, "text/css")
                ),
                (t) =>
                  new Promise(function (t) {
                    t();
                  }),
              )
            : new Promise(function (t) {
                t();
              });
        }
        relativeTo(t, e) {
          return (
            (e = e || this.settings.resolver),
            this.urls.map(
              function (n) {
                var i = e(n);
                return new a.a(t).relative(i);
              }.bind(this),
            )
          );
        }
        get(t) {
          var e = this.urls.indexOf(t);
          if (-1 !== e)
            return this.replacementUrls.length
              ? new Promise(
                  function (t, n) {
                    t(this.replacementUrls[e]);
                  }.bind(this),
                )
              : this.createUrl(t);
        }
        substitute(t, e) {
          var n;
          return (
            (n = e ? this.relativeTo(e) : this.urls),
            Object(u.e)(t, n, this.replacementUrls)
          );
        }
        destroy() {
          (this.settings = void 0),
            (this.manifest = void 0),
            (this.resources = void 0),
            (this.replacementUrls = void 0),
            (this.html = void 0),
            (this.assets = void 0),
            (this.css = void 0),
            (this.urls = void 0),
            (this.cssUrls = void 0);
        }
      };
      var A = class {
          constructor(t) {
            (this.pages = []),
              (this.locations = []),
              (this.epubcfi = new h.a()),
              (this.firstPage = 0),
              (this.lastPage = 0),
              (this.totalPages = 0),
              (this.toc = void 0),
              (this.ncx = void 0),
              t && (this.pageList = this.parse(t)),
              this.pageList &&
                this.pageList.length &&
                this.process(this.pageList);
          }
          parse(t) {
            var e = Object(s.qs)(t, "html"),
              n = Object(s.qs)(t, "ncx");
            return e ? this.parseNav(t) : n ? this.parseNcx(t) : void 0;
          }
          parseNav(t) {
            var e,
              n,
              i = Object(s.querySelectorByType)(t, "nav", "page-list"),
              r = i ? Object(s.qsa)(i, "li") : [],
              o = r.length,
              a = [];
            if (!r || 0 === o) return a;
            for (e = 0; e < o; ++e) (n = this.item(r[e])), a.push(n);
            return a;
          }
          parseNcx(t) {
            var e,
              n,
              i,
              r,
              o = [],
              a = 0;
            if (!(n = Object(s.qs)(t, "pageList"))) return o;
            if (
              ((r = (i = Object(s.qsa)(n, "pageTarget")).length),
              !i || 0 === i.length)
            )
              return o;
            for (a = 0; a < r; ++a) (e = this.ncxItem(i[a])), o.push(e);
            return o;
          }
          ncxItem(t) {
            var e = Object(s.qs)(t, "navLabel"),
              n = Object(s.qs)(e, "text").textContent;
            return {
              href: Object(s.qs)(t, "content").getAttribute("src"),
              page: parseInt(n, 10),
            };
          }
          item(t) {
            var e,
              n,
              i = Object(s.qs)(t, "a"),
              r = i.getAttribute("href") || "",
              o = i.textContent || "",
              a = parseInt(o);
            return -1 != r.indexOf("epubcfi")
              ? ((n = (e = r.split("#"))[0]),
                { cfi: e.length > 1 && e[1], href: r, packageUrl: n, page: a })
              : { href: r, page: a };
          }
          process(t) {
            t.forEach(function (t) {
              this.pages.push(t.page), t.cfi && this.locations.push(t.cfi);
            }, this),
              (this.firstPage = parseInt(this.pages[0])),
              (this.lastPage = parseInt(this.pages[this.pages.length - 1])),
              (this.totalPages = this.lastPage - this.firstPage);
          }
          pageFromCfi(t) {
            var e = -1;
            if (0 === this.locations.length) return -1;
            var n = Object(s.indexOfSorted)(
              t,
              this.locations,
              this.epubcfi.compare,
            );
            return (
              -1 != n
                ? (e = this.pages[n])
                : void 0 !==
                    (e =
                      (n = Object(s.locationOf)(
                        t,
                        this.locations,
                        this.epubcfi.compare,
                      )) -
                        1 >=
                      0
                        ? this.pages[n - 1]
                        : this.pages[0]) || (e = -1),
              e
            );
          }
          cfiFromPage(t) {
            var e = -1;
            "number" != typeof t && (t = parseInt(t));
            var n = this.pages.indexOf(t);
            return -1 != n && (e = this.locations[n]), e;
          }
          pageFromPercentage(t) {
            return Math.round(this.totalPages * t);
          }
          percentageFromPage(t) {
            var e = (t - this.firstPage) / this.totalPages;
            return Math.round(1e3 * e) / 1e3;
          }
          percentageFromCfi(t) {
            var e = this.pageFromCfi(t);
            return this.percentageFromPage(e);
          }
          destroy() {
            (this.pages = void 0),
              (this.locations = void 0),
              (this.epubcfi = void 0),
              (this.pageList = void 0),
              (this.toc = void 0),
              (this.ncx = void 0);
          }
        },
        N = n(11),
        O = n(31),
        I = n.n(O);
      var R = class {
          constructor() {
            (this.zip = void 0), (this.urlCache = {}), this.checkRequirements();
          }
          checkRequirements() {
            try {
              this.zip = new I.a();
            } catch (t) {
              throw new Error("JSZip lib not loaded");
            }
          }
          open(t, e) {
            return this.zip.loadAsync(t, { base64: e });
          }
          openUrl(t, e) {
            return c(t, "binary").then(
              function (t) {
                return this.zip.loadAsync(t, { base64: e });
              }.bind(this),
            );
          }
          request(t, e) {
            var n,
              i = new s.defer(),
              r = new a.a(t);
            return (
              e || (e = r.extension),
              (n = "blob" == e ? this.getBlob(t) : this.getText(t))
                ? n.then(
                    function (t) {
                      let n = this.handleResponse(t, e);
                      i.resolve(n);
                    }.bind(this),
                  )
                : i.reject({
                    message: "File not found in the epub: " + t,
                    stack: new Error().stack,
                  }),
              i.promise
            );
          }
          handleResponse(t, e) {
            return "json" == e
              ? JSON.parse(t)
              : Object(s.isXml)(e)
                ? Object(s.parse)(t, "text/xml")
                : "xhtml" == e
                  ? Object(s.parse)(t, "application/xhtml+xml")
                  : "html" == e || "htm" == e
                    ? Object(s.parse)(t, "text/html")
                    : t;
          }
          getBlob(t, e) {
            var n = window.decodeURIComponent(t.substr(1)),
              i = this.zip.file(n);
            if (i)
              return (
                (e = e || C.lookup(i.name)),
                i.async("uint8array").then(function (t) {
                  return new Blob([t], { type: e });
                })
              );
          }
          getText(t, e) {
            var n = window.decodeURIComponent(t.substr(1)),
              i = this.zip.file(n);
            if (i)
              return i.async("string").then(function (t) {
                return t;
              });
          }
          getBase64(t, e) {
            var n = window.decodeURIComponent(t.substr(1)),
              i = this.zip.file(n);
            if (i)
              return (
                (e = e || C.lookup(i.name)),
                i.async("base64").then(function (t) {
                  return "data:" + e + ";base64," + t;
                })
              );
          }
          createUrl(t, e) {
            var n,
              i,
              r = new s.defer(),
              o = window.URL || window.webkitURL || window.mozURL,
              a = e && e.base64;
            return t in this.urlCache
              ? (r.resolve(this.urlCache[t]), r.promise)
              : (a
                  ? (i = this.getBase64(t)) &&
                    i.then(
                      function (e) {
                        (this.urlCache[t] = e), r.resolve(e);
                      }.bind(this),
                    )
                  : (i = this.getBlob(t)) &&
                    i.then(
                      function (e) {
                        (n = o.createObjectURL(e)),
                          (this.urlCache[t] = n),
                          r.resolve(n);
                      }.bind(this),
                    ),
                i ||
                  r.reject({
                    message: "File not found in the epub: " + t,
                    stack: new Error().stack,
                  }),
                r.promise);
          }
          revokeUrl(t) {
            var e = window.URL || window.webkitURL || window.mozURL,
              n = this.urlCache[t];
            n && e.revokeObjectURL(n);
          }
          destroy() {
            var t = window.URL || window.webkitURL || window.mozURL;
            for (let e in this.urlCache) t.revokeObjectURL(e);
            (this.zip = void 0), (this.urlCache = {});
          }
        },
        D = n(24),
        L = n.n(D);
      class j {
        constructor(t, e, n) {
          (this.urlCache = {}),
            (this.storage = void 0),
            (this.name = t),
            (this.requester = e || c),
            (this.resolver = n),
            (this.online = !0),
            this.checkRequirements(),
            this.addListeners();
        }
        checkRequirements() {
          try {
            let t;
            void 0 === L.a && (t = L.a),
              (this.storage = t.createInstance({ name: this.name }));
          } catch (t) {
            throw new Error("localForage lib not loaded");
          }
        }
        addListeners() {
          (this._status = this.status.bind(this)),
            window.addEventListener("online", this._status),
            window.addEventListener("offline", this._status);
        }
        removeListeners() {
          window.removeEventListener("online", this._status),
            window.removeEventListener("offline", this._status),
            (this._status = void 0);
        }
        status(t) {
          let e = navigator.onLine;
          (this.online = e),
            e ? this.emit("online", this) : this.emit("offline", this);
        }
        add(t, e) {
          let n = t.resources.map((t) => {
            let { href: n } = t,
              i = this.resolver(n),
              r = window.encodeURIComponent(i);
            return this.storage
              .getItem(r)
              .then((t) =>
                !t || e
                  ? this.requester(i, "binary").then((t) =>
                      this.storage.setItem(r, t),
                    )
                  : t,
              );
          });
          return Promise.all(n);
        }
        put(t, e, n) {
          let i = window.encodeURIComponent(t);
          return this.storage
            .getItem(i)
            .then(
              (r) =>
                r ||
                this.requester(t, "binary", e, n).then((t) =>
                  this.storage.setItem(i, t),
                ),
            );
        }
        request(t, e, n, i) {
          return this.online
            ? this.requester(t, e, n, i).then((e) => (this.put(t), e))
            : this.retrieve(t, e);
        }
        retrieve(t, e) {
          new s.defer();
          var n = new a.a(t);
          return (
            e || (e = n.extension),
            ("blob" == e ? this.getBlob(t) : this.getText(t)).then((n) => {
              var i,
                r = new s.defer();
              return (
                n
                  ? ((i = this.handleResponse(n, e)), r.resolve(i))
                  : r.reject({
                      message: "File not found in storage: " + t,
                      stack: new Error().stack,
                    }),
                r.promise
              );
            })
          );
        }
        handleResponse(t, e) {
          return "json" == e
            ? JSON.parse(t)
            : Object(s.isXml)(e)
              ? Object(s.parse)(t, "text/xml")
              : "xhtml" == e
                ? Object(s.parse)(t, "application/xhtml+xml")
                : "html" == e || "htm" == e
                  ? Object(s.parse)(t, "text/html")
                  : t;
        }
        getBlob(t, e) {
          let n = window.encodeURIComponent(t);
          return this.storage.getItem(n).then(function (n) {
            if (n) return (e = e || C.lookup(t)), new Blob([n], { type: e });
          });
        }
        getText(t, e) {
          let n = window.encodeURIComponent(t);
          return (
            (e = e || C.lookup(t)),
            this.storage.getItem(n).then(function (t) {
              var n,
                i = new s.defer(),
                r = new FileReader();
              if (t)
                return (
                  (n = new Blob([t], { type: e })),
                  r.addEventListener("loadend", () => {
                    i.resolve(r.result);
                  }),
                  r.readAsText(n, e),
                  i.promise
                );
            })
          );
        }
        getBase64(t, e) {
          let n = window.encodeURIComponent(t);
          return (
            (e = e || C.lookup(t)),
            this.storage.getItem(n).then((t) => {
              var n,
                i = new s.defer(),
                r = new FileReader();
              if (t)
                return (
                  (n = new Blob([t], { type: e })),
                  r.addEventListener("loadend", () => {
                    i.resolve(r.result);
                  }),
                  r.readAsDataURL(n, e),
                  i.promise
                );
            })
          );
        }
        createUrl(t, e) {
          var n,
            i,
            r = new s.defer(),
            o = window.URL || window.webkitURL || window.mozURL,
            a = e && e.base64;
          return t in this.urlCache
            ? (r.resolve(this.urlCache[t]), r.promise)
            : (a
                ? (i = this.getBase64(t)) &&
                  i.then(
                    function (e) {
                      (this.urlCache[t] = e), r.resolve(e);
                    }.bind(this),
                  )
                : (i = this.getBlob(t)) &&
                  i.then(
                    function (e) {
                      (n = o.createObjectURL(e)),
                        (this.urlCache[t] = n),
                        r.resolve(n);
                    }.bind(this),
                  ),
              i ||
                r.reject({
                  message: "File not found in storage: " + t,
                  stack: new Error().stack,
                }),
              r.promise);
        }
        revokeUrl(t) {
          var e = window.URL || window.webkitURL || window.mozURL,
            n = this.urlCache[t];
          n && e.revokeObjectURL(n);
        }
        destroy() {
          var t = window.URL || window.webkitURL || window.mozURL;
          for (let e in this.urlCache) t.revokeObjectURL(e);
          (this.urlCache = {}), this.removeListeners();
        }
      }
      r()(j.prototype);
      var z = j;
      var P = class {
        constructor(t) {
          (this.interactive = ""),
            (this.fixedLayout = ""),
            (this.openToSpread = ""),
            (this.orientationLock = ""),
            t && this.parse(t);
        }
        parse(t) {
          if (!t) return this;
          const e = Object(s.qs)(t, "display_options");
          if (!e) return this;
          return (
            Object(s.qsa)(e, "option").forEach((t) => {
              let e = "";
              switch (
                (t.childNodes.length && (e = t.childNodes[0].nodeValue),
                t.attributes.name.value)
              ) {
                case "interactive":
                  this.interactive = e;
                  break;
                case "fixed-layout":
                  this.fixedLayout = e;
                  break;
                case "open-to-spread":
                  this.openToSpread = e;
                  break;
                case "orientation-lock":
                  this.orientationLock = e;
              }
            }),
            this
          );
        }
        destroy() {
          (this.interactive = void 0),
            (this.fixedLayout = void 0),
            (this.openToSpread = void 0),
            (this.orientationLock = void 0);
        }
      };
      const B = "binary",
        M = "base64",
        F = "epub",
        U = "opf",
        q = "json",
        W = "directory";
      class H {
        constructor(t, e) {
          void 0 === e &&
            "string" != typeof t &&
            t instanceof Blob == !1 &&
            t instanceof ArrayBuffer == !1 &&
            ((e = t), (t = void 0)),
            (this.settings = Object(s.extend)(this.settings || {}, {
              requestMethod: void 0,
              requestCredentials: void 0,
              requestHeaders: void 0,
              encoding: void 0,
              replacements: void 0,
              canonical: void 0,
              openAs: void 0,
              store: void 0,
            })),
            Object(s.extend)(this.settings, e),
            (this.opening = new s.defer()),
            (this.opened = this.opening.promise),
            (this.isOpen = !1),
            (this.loading = {
              manifest: new s.defer(),
              spine: new s.defer(),
              metadata: new s.defer(),
              cover: new s.defer(),
              navigation: new s.defer(),
              pageList: new s.defer(),
              resources: new s.defer(),
              displayOptions: new s.defer(),
            }),
            (this.loaded = {
              manifest: this.loading.manifest.promise,
              spine: this.loading.spine.promise,
              metadata: this.loading.metadata.promise,
              cover: this.loading.cover.promise,
              navigation: this.loading.navigation.promise,
              pageList: this.loading.pageList.promise,
              resources: this.loading.resources.promise,
              displayOptions: this.loading.displayOptions.promise,
            }),
            (this.ready = Promise.all([
              this.loaded.manifest,
              this.loaded.spine,
              this.loaded.metadata,
              this.loaded.cover,
              this.loaded.navigation,
              this.loaded.resources,
              this.loaded.displayOptions,
            ])),
            (this.isRendered = !1),
            (this.request = this.settings.requestMethod || c),
            (this.spine = new p()),
            (this.locations = new y(this.spine, this.load.bind(this))),
            (this.navigation = void 0),
            (this.pageList = void 0),
            (this.url = void 0),
            (this.path = void 0),
            (this.archived = !1),
            (this.archive = void 0),
            (this.storage = void 0),
            (this.resources = void 0),
            (this.rendition = void 0),
            (this.container = void 0),
            (this.packaging = void 0),
            (this.displayOptions = void 0),
            this.settings.store && this.store(this.settings.store),
            t &&
              this.open(t, this.settings.openAs).catch((e) => {
                var n = new Error("Cannot load book at " + t);
                this.emit(m.c.BOOK.OPEN_FAILED, n);
              });
        }
        open(t, e) {
          var n,
            i = e || this.determineType(t);
          return (
            i === B
              ? ((this.archived = !0),
                (this.url = new o.a("/", "")),
                (n = this.openEpub(t)))
              : i === M
                ? ((this.archived = !0),
                  (this.url = new o.a("/", "")),
                  (n = this.openEpub(t, i)))
                : i === F
                  ? ((this.archived = !0),
                    (this.url = new o.a("/", "")),
                    (n = this.request(
                      t,
                      "binary",
                      this.settings.requestCredentials,
                      this.settings.requestHeaders,
                    ).then(this.openEpub.bind(this))))
                  : i == U
                    ? ((this.url = new o.a(t)),
                      (n = this.openPackaging(this.url.Path.toString())))
                    : i == q
                      ? ((this.url = new o.a(t)),
                        (n = this.openManifest(this.url.Path.toString())))
                      : ((this.url = new o.a(t)),
                        (n = this.openContainer("META-INF/container.xml").then(
                          this.openPackaging.bind(this),
                        ))),
            n
          );
        }
        openEpub(t, e) {
          return this.unarchive(t, e || this.settings.encoding)
            .then(() => this.openContainer("META-INF/container.xml"))
            .then((t) => this.openPackaging(t));
        }
        openContainer(t) {
          return this.load(t).then(
            (t) => (
              (this.container = new x(t)),
              this.resolve(this.container.packagePath)
            ),
          );
        }
        openPackaging(t) {
          return (
            (this.path = new a.a(t)),
            this.load(t).then(
              (t) => ((this.packaging = new _(t)), this.unpack(this.packaging)),
            )
          );
        }
        openManifest(t) {
          return (
            (this.path = new a.a(t)),
            this.load(t).then(
              (t) => (
                (this.packaging = new _()),
                this.packaging.load(t),
                this.unpack(this.packaging)
              ),
            )
          );
        }
        load(t) {
          var e = this.resolve(t);
          return this.archived
            ? this.archive.request(e)
            : this.request(
                e,
                null,
                this.settings.requestCredentials,
                this.settings.requestHeaders,
              );
        }
        resolve(t, e) {
          if (t) {
            var n = t;
            return t.indexOf("://") > -1
              ? t
              : (this.path && (n = this.path.resolve(t)),
                0 != e && this.url && (n = this.url.resolve(n)),
                n);
          }
        }
        canonical(t) {
          return t
            ? this.settings.canonical
              ? this.settings.canonical(t)
              : this.resolve(t, !0)
            : "";
        }
        determineType(t) {
          var e;
          return "base64" === this.settings.encoding
            ? M
            : "string" != typeof t
              ? B
              : ((e = new o.a(t).path().extension) &&
                  (e = e.replace(/\?.*$/, "")),
                e
                  ? "epub" === e
                    ? F
                    : "opf" === e
                      ? U
                      : "json" === e
                        ? q
                        : void 0
                  : W);
        }
        unpack(t) {
          (this.package = t),
            "" === this.packaging.metadata.layout
              ? this.load(
                  this.url.resolve(
                    "META-INF/com.apple.ibooks.display-options.xml",
                  ),
                )
                  .then((t) => {
                    (this.displayOptions = new P(t)),
                      this.loading.displayOptions.resolve(this.displayOptions);
                  })
                  .catch((t) => {
                    (this.displayOptions = new P()),
                      this.loading.displayOptions.resolve(this.displayOptions);
                  })
              : ((this.displayOptions = new P()),
                this.loading.displayOptions.resolve(this.displayOptions)),
            this.spine.unpack(
              this.packaging,
              this.resolve.bind(this),
              this.canonical.bind(this),
            ),
            (this.resources = new T(this.packaging.manifest, {
              archive: this.archive,
              resolver: this.resolve.bind(this),
              request: this.request.bind(this),
              replacements:
                this.settings.replacements ||
                (this.archived ? "blobUrl" : "base64"),
            })),
            this.loadNavigation(this.packaging).then(() => {
              this.loading.navigation.resolve(this.navigation);
            }),
            this.packaging.coverPath &&
              (this.cover = this.resolve(this.packaging.coverPath)),
            this.loading.manifest.resolve(this.packaging.manifest),
            this.loading.metadata.resolve(this.packaging.metadata),
            this.loading.spine.resolve(this.spine),
            this.loading.cover.resolve(this.cover),
            this.loading.resources.resolve(this.resources),
            this.loading.pageList.resolve(this.pageList),
            (this.isOpen = !0),
            this.archived ||
            (this.settings.replacements && "none" != this.settings.replacements)
              ? this.replacements()
                  .then(() => {
                    this.loaded.displayOptions.then(() => {
                      this.opening.resolve(this);
                    });
                  })
                  .catch((t) => {
                    console.error(t);
                  })
              : this.loaded.displayOptions.then(() => {
                  this.opening.resolve(this);
                });
        }
        loadNavigation(t) {
          let e = t.navPath || t.ncxPath,
            n = t.toc;
          return n
            ? new Promise((e, i) => {
                (this.navigation = new E(n)),
                  t.pageList && (this.pageList = new A(t.pageList)),
                  e(this.navigation);
              })
            : e
              ? this.load(e, "xml").then(
                  (t) => (
                    (this.navigation = new E(t)),
                    (this.pageList = new A(t)),
                    this.navigation
                  ),
                )
              : new Promise((t, e) => {
                  (this.navigation = new E()),
                    (this.pageList = new A()),
                    t(this.navigation);
                });
        }
        section(t) {
          return this.spine.get(t);
        }
        renderTo(t, e) {
          return (
            (this.rendition = new N.a(this, e)),
            this.rendition.attachTo(t),
            this.rendition
          );
        }
        setRequestCredentials(t) {
          this.settings.requestCredentials = t;
        }
        setRequestHeaders(t) {
          this.settings.requestHeaders = t;
        }
        unarchive(t, e) {
          return (this.archive = new R()), this.archive.open(t, e);
        }
        store(t) {
          let e =
              this.settings.replacements && "none" !== this.settings.replacements,
            n = this.url,
            i = this.settings.requestMethod || c.bind(this);
          return (
            (this.storage = new z(t, i, this.resolve.bind(this))),
            (this.request = this.storage.request.bind(this.storage)),
            this.opened.then(() => {
              this.archived &&
                (this.storage.requester = this.archive.request.bind(
                  this.archive,
                ));
              let t = (t, e) => {
                e.output = this.resources.substitute(t, e.url);
              };
              (this.resources.settings.replacements = e || "blobUrl"),
                this.resources
                  .replacements()
                  .then(() => this.resources.replaceCss()),
                this.storage.on("offline", () => {
                  (this.url = new o.a("/", "")),
                    this.spine.hooks.serialize.register(t);
                }),
                this.storage.on("online", () => {
                  (this.url = n), this.spine.hooks.serialize.deregister(t);
                });
            }),
            this.storage
          );
        }
        coverUrl() {
          return this.loaded.cover.then(() =>
            this.cover
              ? this.archived
                ? this.archive.createUrl(this.cover)
                : this.cover
              : null,
          );
        }
        replacements() {
          return (
            this.spine.hooks.serialize.register((t, e) => {
              e.output = this.resources.substitute(t, e.url);
            }),
            this.resources.replacements().then(() => this.resources.replaceCss())
          );
        }
        getRange(t) {
          var e = new h.a(t),
            n = this.spine.get(e.spinePos),
            i = this.load.bind(this);
          return n
            ? n.load(i).then(function (t) {
                return e.toRange(n.document);
              })
            : new Promise((t, e) => {
                e("CFI could not be found");
              });
        }
        key(t) {
          var e = t || this.packaging.metadata.identifier || this.url.filename;
          return `epubjs:${m.b}:${e}`;
        }
        destroy() {
          (this.opened = void 0),
            (this.loading = void 0),
            (this.loaded = void 0),
            (this.ready = void 0),
            (this.isOpen = !1),
            (this.isRendered = !1),
            this.spine && this.spine.destroy(),
            this.locations && this.locations.destroy(),
            this.pageList && this.pageList.destroy(),
            this.archive && this.archive.destroy(),
            this.resources && this.resources.destroy(),
            this.container && this.container.destroy(),
            this.packaging && this.packaging.destroy(),
            this.rendition && this.rendition.destroy(),
            this.displayOptions && this.displayOptions.destroy(),
            (this.spine = void 0),
            (this.locations = void 0),
            (this.pageList = void 0),
            (this.archive = void 0),
            (this.resources = void 0),
            (this.container = void 0),
            (this.packaging = void 0),
            (this.rendition = void 0),
            (this.navigation = void 0),
            (this.url = void 0),
            (this.path = void 0),
            (this.archived = !1);
        }
      }
      r()(H.prototype);
      e.a = H;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Underline = e.Highlight = e.Mark = e.Pane = void 0);
      var i = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        r = o(n(53)),
        s = o(n(54));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function h(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " + typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      e.Pane = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document.body;
          l(this, t),
            (this.target = e),
            (this.element = r.default.createElement("svg")),
            (this.marks = []),
            (this.element.style.position = "absolute"),
            this.element.setAttribute("pointer-events", "none"),
            s.default.proxyMouse(this.target, this.marks),
            (this.container = n),
            this.container.appendChild(this.element),
            this.render();
        }
        return (
          i(t, [
            {
              key: "addMark",
              value: function (t) {
                var e = r.default.createElement("g");
                return (
                  this.element.appendChild(e),
                  t.bind(e, this.container),
                  this.marks.push(t),
                  t.render(),
                  t
                );
              },
            },
            {
              key: "removeMark",
              value: function (t) {
                var e = this.marks.indexOf(t);
                if (-1 !== e) {
                  var n = t.unbind();
                  this.element.removeChild(n), this.marks.splice(e, 1);
                }
              },
            },
            {
              key: "render",
              value: function () {
                var t, e, n, i;
                !(function (t, e) {
                  t.style.setProperty("top", e.top + "px", "important"),
                    t.style.setProperty("left", e.left + "px", "important"),
                    t.style.setProperty("height", e.height + "px", "important"),
                    t.style.setProperty("width", e.width + "px", "important");
                })(
                  this.element,
                  ((t = this.target),
                  (e = this.container),
                  (n = e.getBoundingClientRect()),
                  (i = t.getBoundingClientRect()),
                  {
                    top: i.top - n.top,
                    left: i.left - n.left,
                    height: t.scrollHeight,
                    width: t.scrollWidth,
                  }),
                );
                var r = !0,
                  s = !1,
                  o = void 0;
                try {
                  for (
                    var a, h = this.marks[Symbol.iterator]();
                    !(r = (a = h.next()).done);
                    r = !0
                  ) {
                    a.value.render();
                  }
                } catch (t) {
                  (s = !0), (o = t);
                } finally {
                  try {
                    !r && h.return && h.return();
                  } finally {
                    if (s) throw o;
                  }
                }
              },
            },
          ]),
          t
        );
      })();
      var u = (e.Mark = (function () {
          function t() {
            l(this, t), (this.element = null);
          }
          return (
            i(t, [
              {
                key: "bind",
                value: function (t, e) {
                  (this.element = t), (this.container = e);
                },
              },
              {
                key: "unbind",
                value: function () {
                  var t = this.element;
                  return (this.element = null), t;
                },
              },
              { key: "render", value: function () {} },
              {
                key: "dispatchEvent",
                value: function (t) {
                  this.element && this.element.dispatchEvent(t);
                },
              },
              {
                key: "getBoundingClientRect",
                value: function () {
                  return this.element.getBoundingClientRect();
                },
              },
              {
                key: "getClientRects",
                value: function () {
                  for (var t = [], e = this.element.firstChild; e; )
                    t.push(e.getBoundingClientRect()), (e = e.nextSibling);
                  return t;
                },
              },
              {
                key: "filteredRanges",
                value: function () {
                  var t = Array.from(this.range.getClientRects());
                  return t.filter(function (e) {
                    for (var n = 0; n < t.length; n++) {
                      if (t[n] === e) return !0;
                      if (
                        ((i = t[n]),
                        (r = e).right <= i.right &&
                          r.left >= i.left &&
                          r.top >= i.top &&
                          r.bottom <= i.bottom)
                      )
                        return !1;
                    }
                    var i, r;
                    return !0;
                  });
                },
              },
            ]),
            t
          );
        })()),
        c = (e.Highlight = (function (t) {
          function e(t, n, i, r) {
            l(this, e);
            var s = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return (
              (s.range = t),
              (s.className = n),
              (s.data = i || {}),
              (s.attributes = r || {}),
              s
            );
          }
          return (
            h(e, t),
            i(e, [
              {
                key: "bind",
                value: function (t, n) {
                  for (var i in ((function t(e, n, i) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === r) {
                      var s = Object.getPrototypeOf(e);
                      return null === s ? void 0 : t(s, n, i);
                    }
                    if ("value" in r) return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(i) : void 0;
                  })(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "bind",
                    this,
                  ).call(this, t, n),
                  this.data))
                    this.data.hasOwnProperty(i) &&
                      (this.element.dataset[i] = this.data[i]);
                  for (var i in this.attributes)
                    this.attributes.hasOwnProperty(i) &&
                      this.element.setAttribute(i, this.attributes[i]);
                  this.className && this.element.classList.add(this.className);
                },
              },
              {
                key: "render",
                value: function () {
                  for (; this.element.firstChild; )
                    this.element.removeChild(this.element.firstChild);
                  for (
                    var t = this.element.ownerDocument.createDocumentFragment(),
                      e = this.filteredRanges(),
                      n = this.element.getBoundingClientRect(),
                      i = this.container.getBoundingClientRect(),
                      s = 0,
                      o = e.length;
                    s < o;
                    s++
                  ) {
                    var a = e[s],
                      h = r.default.createElement("rect");
                    h.setAttribute("x", a.left - n.left + i.left),
                      h.setAttribute("y", a.top - n.top + i.top),
                      h.setAttribute("height", a.height),
                      h.setAttribute("width", a.width),
                      t.appendChild(h);
                  }
                  this.element.appendChild(t);
                },
              },
            ]),
            e
          );
        })(u));
      e.Underline = (function (t) {
        function e(t, n, i, r) {
          return (
            l(this, e),
            a(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i, r),
            )
          );
        }
        return (
          h(e, t),
          i(e, [
            {
              key: "render",
              value: function () {
                for (; this.element.firstChild; )
                  this.element.removeChild(this.element.firstChild);
                for (
                  var t = this.element.ownerDocument.createDocumentFragment(),
                    e = this.filteredRanges(),
                    n = this.element.getBoundingClientRect(),
                    i = this.container.getBoundingClientRect(),
                    s = 0,
                    o = e.length;
                  s < o;
                  s++
                ) {
                  var a = e[s],
                    h = r.default.createElement("rect");
                  h.setAttribute("x", a.left - n.left + i.left),
                    h.setAttribute("y", a.top - n.top + i.top),
                    h.setAttribute("height", a.height),
                    h.setAttribute("width", a.width),
                    h.setAttribute("fill", "none");
                  var l = r.default.createElement("line");
                  l.setAttribute("x1", a.left - n.left + i.left),
                    l.setAttribute("x2", a.left - n.left + i.left + a.width),
                    l.setAttribute("y1", a.top - n.top + i.top + a.height - 1),
                    l.setAttribute("y2", a.top - n.top + i.top + a.height - 1),
                    l.setAttribute("stroke-width", 1),
                    l.setAttribute("stroke", "black"),
                    l.setAttribute("stroke-linecap", "square"),
                    t.appendChild(h),
                    t.appendChild(l);
                }
                this.element.appendChild(t);
              },
            },
          ]),
          e
        );
      })(c);
    },
    function (t, e, n) {
      "use strict";
      var i = n(0),
        r = n(1),
        s = n(3),
        o = n.n(s);
      class a {
        constructor(t) {
          (this.settings = t),
            (this.name = t.layout || "reflowable"),
            (this._spread = "none" !== t.spread),
            (this._minSpreadWidth = t.minSpreadWidth || 800),
            (this._evenSpreads = t.evenSpreads || !1),
            "scrolled" === t.flow ||
            "scrolled-continuous" === t.flow ||
            "scrolled-doc" === t.flow
              ? (this._flow = "scrolled")
              : (this._flow = "paginated"),
            (this.width = 0),
            (this.height = 0),
            (this.spreadWidth = 0),
            (this.delta = 0),
            (this.columnWidth = 0),
            (this.gap = 0),
            (this.divisor = 1),
            (this.props = {
              name: this.name,
              spread: this._spread,
              flow: this._flow,
              width: 0,
              height: 0,
              spreadWidth: 0,
              delta: 0,
              columnWidth: 0,
              gap: 0,
              divisor: 1,
            });
        }
        flow(t) {
          return (
            void 0 !== t &&
              ((this._flow =
                "scrolled" === t ||
                "scrolled-continuous" === t ||
                "scrolled-doc" === t
                  ? "scrolled"
                  : "paginated"),
              this.update({ flow: this._flow })),
            this._flow
          );
        }
        spread(t, e) {
          return (
            t &&
              ((this._spread = "none" !== t),
              this.update({ spread: this._spread })),
            e >= 0 && (this._minSpreadWidth = e),
            this._spread
          );
        }
        calculate(t, e, n) {
          var i,
            r,
            s,
            o,
            a = 1,
            h = n || 0,
            l = t,
            u = e,
            c = Math.floor(l / 12);
          (a = this._spread && l >= this._minSpreadWidth ? 2 : 1),
            "reflowable" !== this.name ||
              "paginated" !== this._flow ||
              n >= 0 ||
              (h = c % 2 == 0 ? c : c - 1),
            "pre-paginated" === this.name && (h = 0),
            a > 1 ? (s = (i = l / a - h) + h) : ((i = l), (s = l)),
            "pre-paginated" === this.name && a > 1 && (l = i),
            (r = i * a + h),
            (o = l),
            (this.width = l),
            (this.height = u),
            (this.spreadWidth = r),
            (this.pageWidth = s),
            (this.delta = o),
            (this.columnWidth = i),
            (this.gap = h),
            (this.divisor = a),
            this.update({
              width: l,
              height: u,
              spreadWidth: r,
              pageWidth: s,
              delta: o,
              columnWidth: i,
              gap: h,
              divisor: a,
            });
        }
        format(t, e, n) {
          return "pre-paginated" === this.name
            ? t.fit(this.columnWidth, this.height, e)
            : "paginated" === this._flow
              ? t.columns(
                  this.width,
                  this.height,
                  this.columnWidth,
                  this.gap,
                  this.settings.direction,
                )
              : n && "horizontal" === n
                ? t.size(null, this.height)
                : t.size(this.width, null);
        }
        count(t, e) {
          let n, i;
          return (
            "pre-paginated" === this.name
              ? ((n = 1), (i = 1))
              : "paginated" === this._flow
                ? ((e = e || this.delta),
                  (n = Math.ceil(t / e)),
                  (i = n * this.divisor))
                : ((e = e || this.height), (n = Math.ceil(t / e)), (i = n)),
            { spreads: n, pages: i }
          );
        }
        update(t) {
          if (
            (Object.keys(t).forEach((e) => {
              this.props[e] === t[e] && delete t[e];
            }),
            Object.keys(t).length > 0)
          ) {
            let e = Object(i.extend)(this.props, t);
            this.emit(r.c.LAYOUT.UPDATED, e, t);
          }
        }
      }
      o()(a.prototype), (e.a = a);
    },
    function (t, e, n) {
      function i(t) {
        this.options = t || { locator: {} };
      }
      function r() {
        this.cdata = !1;
      }
      function s(t, e) {
        (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber);
      }
      function o(t) {
        if (t)
          return (
            "\n@" +
            (t.systemId || "") +
            "#[line:" +
            t.lineNumber +
            ",col:" +
            t.columnNumber +
            "]"
          );
      }
      function a(t, e, n) {
        return "string" == typeof t
          ? t.substr(e, n)
          : t.length >= e + n || e
            ? new java.lang.String(t, e, n) + ""
            : t;
      }
      function h(t, e) {
        t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
      }
      (i.prototype.parseFromString = function (t, e) {
        var n = this.options,
          i = new u(),
          s = n.domBuilder || new r(),
          a = n.errorHandler,
          h = n.locator,
          c = n.xmlns || {},
          d = /\/x?html?$/.test(e),
          f = d
            ? l.entityMap
            : { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };
        return (
          h && s.setDocumentLocator(h),
          (i.errorHandler = (function (t, e, n) {
            if (!t) {
              if (e instanceof r) return e;
              t = e;
            }
            var i = {},
              s = t instanceof Function;
            function a(e) {
              var r = t[e];
              !r &&
                s &&
                (r =
                  2 == t.length
                    ? function (n) {
                        t(e, n);
                      }
                    : t),
                (i[e] =
                  (r &&
                    function (t) {
                      r("[xmldom " + e + "]\t" + t + o(n));
                    }) ||
                  function () {});
            }
            return (n = n || {}), a("warning"), a("error"), a("fatalError"), i;
          })(a, s, h)),
          (i.domBuilder = n.domBuilder || s),
          d && (c[""] = "http://www.w3.org/1999/xhtml"),
          (c.xml = c.xml || "http://www.w3.org/XML/1998/namespace"),
          t ? i.parse(t, c, f) : i.errorHandler.error("invalid doc source"),
          s.doc
        );
      }),
        (r.prototype = {
          startDocument: function () {
            (this.doc = new c().createDocument(null, null, null)),
              this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function (t, e, n, i) {
            var r = this.doc,
              o = r.createElementNS(t, n || e),
              a = i.length;
            h(this, o),
              (this.currentElement = o),
              this.locator && s(this.locator, o);
            for (var l = 0; l < a; l++) {
              t = i.getURI(l);
              var u = i.getValue(l),
                c = ((n = i.getQName(l)), r.createAttributeNS(t, n));
              this.locator && s(i.getLocator(l), c),
                (c.value = c.nodeValue = u),
                o.setAttributeNode(c);
            }
          },
          endElement: function (t, e, n) {
            var i = this.currentElement;
            i.tagName;
            this.currentElement = i.parentNode;
          },
          startPrefixMapping: function (t, e) {},
          endPrefixMapping: function (t) {},
          processingInstruction: function (t, e) {
            var n = this.doc.createProcessingInstruction(t, e);
            this.locator && s(this.locator, n), h(this, n);
          },
          ignorableWhitespace: function (t, e, n) {},
          characters: function (t, e, n) {
            if ((t = a.apply(this, arguments))) {
              if (this.cdata) var i = this.doc.createCDATASection(t);
              else i = this.doc.createTextNode(t);
              this.currentElement
                ? this.currentElement.appendChild(i)
                : /^\s*$/.test(t) && this.doc.appendChild(i),
                this.locator && s(this.locator, i);
            }
          },
          skippedEntity: function (t) {},
          endDocument: function () {
            this.doc.normalize();
          },
          setDocumentLocator: function (t) {
            (this.locator = t) && (t.lineNumber = 0);
          },
          comment: function (t, e, n) {
            t = a.apply(this, arguments);
            var i = this.doc.createComment(t);
            this.locator && s(this.locator, i), h(this, i);
          },
          startCDATA: function () {
            this.cdata = !0;
          },
          endCDATA: function () {
            this.cdata = !1;
          },
          startDTD: function (t, e, n) {
            var i = this.doc.implementation;
            if (i && i.createDocumentType) {
              var r = i.createDocumentType(t, e, n);
              this.locator && s(this.locator, r), h(this, r);
            }
          },
          warning: function (t) {
            console.warn("[xmldom warning]\t" + t, o(this.locator));
          },
          error: function (t) {
            console.error("[xmldom error]\t" + t, o(this.locator));
          },
          fatalError: function (t) {
            throw (
              (console.error("[xmldom fatalError]\t" + t, o(this.locator)), t)
            );
          },
        }),
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
          /\w+/g,
          function (t) {
            r.prototype[t] = function () {
              return null;
            };
          },
        );
      var l = n(51),
        u = n(52).XMLReader,
        c = (e.DOMImplementation = n(26).DOMImplementation);
      (e.XMLSerializer = n(26).XMLSerializer), (e.DOMParser = i);
    },
    function (t, e, n) {
      "use strict";
      var i = n(44)();
      t.exports = function (t) {
        return t !== i && null !== t;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(3),
        r = n.n(i),
        s = n(0),
        o = n(2),
        a = n(10),
        h = n(1),
        l = n(16);
      class u {
        constructor(t, e) {
          (this.settings = Object(s.extend)(
            {
              ignoreClass: "",
              axis: void 0,
              direction: void 0,
              width: 0,
              height: 0,
              layout: void 0,
              globalLayoutProperties: {},
              method: void 0,
              forceRight: !1,
            },
            e || {},
          )),
            (this.id = "epubjs-view-" + Object(s.uuid)()),
            (this.section = t),
            (this.index = t.index),
            (this.element = this.container(this.settings.axis)),
            (this.added = !1),
            (this.displayed = !1),
            (this.rendered = !1),
            (this.fixedWidth = 0),
            (this.fixedHeight = 0),
            (this.epubcfi = new o.a()),
            (this.layout = this.settings.layout),
            (this.pane = void 0),
            (this.highlights = {}),
            (this.underlines = {}),
            (this.marks = {});
        }
        container(t) {
          var e = document.createElement("div");
          return (
            e.classList.add("epub-view"),
            (e.style.height = "0px"),
            (e.style.width = "0px"),
            (e.style.overflow = "hidden"),
            (e.style.position = "relative"),
            (e.style.display = "block"),
            (e.style.flex = t && "horizontal" == t ? "none" : "initial"),
            e
          );
        }
        create() {
          return (
            this.iframe ||
              (this.element || (this.element = this.createContainer()),
              (this.iframe = document.createElement("iframe")),
              (this.iframe.id = this.id),
              (this.iframe.scrolling = "no"),
              (this.iframe.style.overflow = "hidden"),
              (this.iframe.seamless = "seamless"),
              (this.iframe.style.border = "none"),
              this.iframe.setAttribute("enable-annotation", "true"),
              (this.resizing = !0),
              (this.element.style.visibility = "hidden"),
              (this.iframe.style.visibility = "hidden"),
              (this.iframe.style.width = "0"),
              (this.iframe.style.height = "0"),
              (this._width = 0),
              (this._height = 0),
              this.element.setAttribute("ref", this.index),
              (this.added = !0),
              (this.elementBounds = Object(s.bounds)(this.element)),
              "srcdoc" in this.iframe
                ? (this.supportsSrcdoc = !0)
                : (this.supportsSrcdoc = !1),
              this.settings.method ||
                (this.settings.method = this.supportsSrcdoc
                  ? "srcdoc"
                  : "write")),
            this.iframe
          );
        }
        render(t, e) {
          return (
            this.create(),
            this.size(),
            this.sectionRender || (this.sectionRender = this.section.render(t)),
            this.sectionRender
              .then(
                function (t) {
                  return this.load(t);
                }.bind(this),
              )
              .then(
                function () {
                  let t,
                    e = this.contents.writingMode();
                  return (
                    (t =
                      "scrolled" === this.settings.flow
                        ? 0 === e.indexOf("vertical")
                          ? "horizontal"
                          : "vertical"
                        : 0 === e.indexOf("vertical")
                          ? "vertical"
                          : "horizontal"),
                    0 === e.indexOf("vertical") &&
                      "paginated" === this.settings.flow &&
                      (this.layout.delta = this.layout.height),
                    this.setAxis(t),
                    this.emit(h.c.VIEWS.AXIS, t),
                    this.setWritingMode(e),
                    this.emit(h.c.VIEWS.WRITING_MODE, e),
                    this.layout.format(this.contents, this.section, this.axis),
                    this.addListeners(),
                    new Promise((t, e) => {
                      this.expand(),
                        this.settings.forceRight &&
                          (this.element.style.marginLeft = this.width() + "px"),
                        t();
                    })
                  );
                }.bind(this),
                function (t) {
                  return (
                    this.emit(h.c.VIEWS.LOAD_ERROR, t),
                    new Promise((e, n) => {
                      n(t);
                    })
                  );
                }.bind(this),
              )
              .then(
                function () {
                  this.emit(h.c.VIEWS.RENDERED, this.section);
                }.bind(this),
              )
          );
        }
        reset() {
          this.iframe &&
            ((this.iframe.style.width = "0"),
            (this.iframe.style.height = "0"),
            (this._width = 0),
            (this._height = 0),
            (this._textWidth = void 0),
            (this._contentWidth = void 0),
            (this._textHeight = void 0),
            (this._contentHeight = void 0)),
            (this._needsReframe = !0);
        }
        size(t, e) {
          var n = t || this.settings.width,
            i = e || this.settings.height;
          "pre-paginated" === this.layout.name
            ? this.lock("both", n, i)
            : "horizontal" === this.settings.axis
              ? this.lock("height", n, i)
              : this.lock("width", n, i),
            (this.settings.width = n),
            (this.settings.height = i);
        }
        lock(t, e, n) {
          var i,
            r = Object(s.borders)(this.element);
          (i = this.iframe
            ? Object(s.borders)(this.iframe)
            : { width: 0, height: 0 }),
            "width" == t &&
              Object(s.isNumber)(e) &&
              (this.lockedWidth = e - r.width - i.width),
            "height" == t &&
              Object(s.isNumber)(n) &&
              (this.lockedHeight = n - r.height - i.height),
            "both" === t &&
              Object(s.isNumber)(e) &&
              Object(s.isNumber)(n) &&
              ((this.lockedWidth = e - r.width - i.width),
              (this.lockedHeight = n - r.height - i.height)),
            this.displayed && this.iframe && this.expand();
        }
        expand(t) {
          var e,
            n = this.lockedWidth,
            i = this.lockedHeight;
          this.iframe &&
            !this._expanding &&
            ((this._expanding = !0),
            "pre-paginated" === this.layout.name
              ? ((n = this.layout.columnWidth), (i = this.layout.height))
              : "horizontal" === this.settings.axis
                ? ((n = this.contents.textWidth()) % this.layout.pageWidth > 0 &&
                    (n =
                      Math.ceil(n / this.layout.pageWidth) *
                      this.layout.pageWidth),
                  this.settings.forceEvenPages &&
                    ((e = n / this.layout.pageWidth),
                    this.layout.divisor > 1 &&
                      "reflowable" === this.layout.name &&
                      e % 2 > 0 &&
                      (n += this.layout.pageWidth)))
                : "vertical" === this.settings.axis &&
                  ((i = this.contents.textHeight()),
                  "paginated" === this.settings.flow &&
                    i % this.layout.height > 0 &&
                    (i = Math.ceil(i / this.layout.height) * this.layout.height)),
            (this._needsReframe || n != this._width || i != this._height) &&
              this.reframe(n, i),
            (this._expanding = !1));
        }
        reframe(t, e) {
          var n;
          Object(s.isNumber)(t) &&
            ((this.element.style.width = t + "px"),
            (this.iframe.style.width = t + "px"),
            (this._width = t)),
            Object(s.isNumber)(e) &&
              ((this.element.style.height = e + "px"),
              (this.iframe.style.height = e + "px"),
              (this._height = e)),
            (n = {
              width: t,
              height: e,
              widthDelta: this.prevBounds ? t - this.prevBounds.width : t,
              heightDelta: this.prevBounds ? e - this.prevBounds.height : e,
            }),
            this.pane && this.pane.render(),
            requestAnimationFrame(() => {
              let t;
              for (let e in this.marks)
                this.marks.hasOwnProperty(e) &&
                  ((t = this.marks[e]), this.placeMark(t.element, t.range));
            }),
            this.onResize(this, n),
            this.emit(h.c.VIEWS.RESIZED, n),
            (this.prevBounds = n),
            (this.elementBounds = Object(s.bounds)(this.element));
        }
        load(t) {
          var e = new s.defer(),
            n = e.promise;
          if (!this.iframe) return e.reject(new Error("No Iframe Available")), n;
          if (
            ((this.iframe.onload = function (t) {
              this.onLoad(t, e);
            }.bind(this)),
            "blobUrl" === this.settings.method)
          )
            (this.blobUrl = Object(s.createBlobUrl)(t, "application/xhtml+xml")),
              (this.iframe.src = this.blobUrl),
              this.element.appendChild(this.iframe);
          else if ("srcdoc" === this.settings.method)
            (this.iframe.srcdoc = t), this.element.appendChild(this.iframe);
          else {
            if (
              (this.element.appendChild(this.iframe),
              (this.document = this.iframe.contentDocument),
              !this.document)
            )
              return e.reject(new Error("No Document Available")), n;
            if (
              (this.iframe.contentDocument.open(),
              window.MSApp && MSApp.execUnsafeLocalFunction)
            ) {
              var i = this;
              MSApp.execUnsafeLocalFunction(function () {
                i.iframe.contentDocument.write(t);
              });
            } else this.iframe.contentDocument.write(t);
            this.iframe.contentDocument.close();
          }
          return n;
        }
        onLoad(t, e) {
          (this.window = this.iframe.contentWindow),
            (this.document = this.iframe.contentDocument),
            (this.contents = new a.a(
              this.document,
              this.document.body,
              this.section.cfiBase,
              this.section.index,
            )),
            (this.rendering = !1);
          var n = this.document.querySelector("link[rel='canonical']");
          n
            ? n.setAttribute("href", this.section.canonical)
            : ((n = this.document.createElement("link")).setAttribute(
                "rel",
                "canonical",
              ),
              n.setAttribute("href", this.section.canonical),
              this.document.querySelector("head").appendChild(n)),
            this.contents.on(h.c.CONTENTS.EXPAND, () => {
              this.displayed &&
                this.iframe &&
                (this.expand(),
                this.contents && this.layout.format(this.contents));
            }),
            this.contents.on(h.c.CONTENTS.RESIZE, (t) => {
              this.displayed &&
                this.iframe &&
                (this.expand(),
                this.contents && this.layout.format(this.contents));
            }),
            e.resolve(this.contents);
        }
        setLayout(t) {
          (this.layout = t),
            this.contents && (this.layout.format(this.contents), this.expand());
        }
        setAxis(t) {
          (this.settings.axis = t),
            (this.element.style.flex = "horizontal" == t ? "none" : "initial"),
            this.size();
        }
        setWritingMode(t) {
          this.writingMode = t;
        }
        addListeners() {}
        removeListeners(t) {}
        display(t) {
          var e = new s.defer();
          return (
            this.displayed
              ? e.resolve(this)
              : this.render(t).then(
                  function () {
                    this.emit(h.c.VIEWS.DISPLAYED, this),
                      this.onDisplayed(this),
                      (this.displayed = !0),
                      e.resolve(this);
                  }.bind(this),
                  function (t) {
                    e.reject(t, this);
                  },
                ),
            e.promise
          );
        }
        show() {
          (this.element.style.visibility = "visible"),
            this.iframe &&
              ((this.iframe.style.visibility = "visible"),
              (this.iframe.style.transform = "translateZ(0)"),
              this.iframe.offsetWidth,
              (this.iframe.style.transform = null)),
            this.emit(h.c.VIEWS.SHOWN, this);
        }
        hide() {
          (this.element.style.visibility = "hidden"),
            (this.iframe.style.visibility = "hidden"),
            (this.stopExpanding = !0),
            this.emit(h.c.VIEWS.HIDDEN, this);
        }
        offset() {
          return { top: this.element.offsetTop, left: this.element.offsetLeft };
        }
        width() {
          return this._width;
        }
        height() {
          return this._height;
        }
        position() {
          return this.element.getBoundingClientRect();
        }
        locationOf(t) {
          this.iframe.getBoundingClientRect();
          var e = this.contents.locationOf(t, this.settings.ignoreClass);
          return { left: e.left, top: e.top };
        }
        onDisplayed(t) {}
        onResize(t, e) {}
        bounds(t) {
          return (
            (!t && this.elementBounds) ||
              (this.elementBounds = Object(s.bounds)(this.element)),
            this.elementBounds
          );
        }
        highlight(t, e = {}, n, i = "epubjs-hl", r = {}) {
          if (!this.contents) return;
          const s = Object.assign(
            {
              fill: "yellow",
              "fill-opacity": "0.3",
              "mix-blend-mode": "multiply",
            },
            r,
          );
          let o = this.contents.range(t),
            a = () => {
              this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
            };
          (e.epubcfi = t),
            this.pane || (this.pane = new l.Pane(this.iframe, this.element));
          let u = new l.Highlight(o, i, e, s),
            c = this.pane.addMark(u);
          return (
            (this.highlights[t] = {
              mark: c,
              element: c.element,
              listeners: [a, n],
            }),
            c.element.setAttribute("ref", i),
            c.element.addEventListener("click", a),
            c.element.addEventListener("touchstart", a),
            n &&
              (c.element.addEventListener("click", n),
              c.element.addEventListener("touchstart", n)),
            c
          );
        }
        underline(t, e = {}, n, i = "epubjs-ul", r = {}) {
          if (!this.contents) return;
          const s = Object.assign(
            {
              stroke: "black",
              "stroke-opacity": "0.3",
              "mix-blend-mode": "multiply",
            },
            r,
          );
          let o = this.contents.range(t),
            a = () => {
              this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
            };
          (e.epubcfi = t),
            this.pane || (this.pane = new l.Pane(this.iframe, this.element));
          let u = new l.Underline(o, i, e, s),
            c = this.pane.addMark(u);
          return (
            (this.underlines[t] = {
              mark: c,
              element: c.element,
              listeners: [a, n],
            }),
            c.element.setAttribute("ref", i),
            c.element.addEventListener("click", a),
            c.element.addEventListener("touchstart", a),
            n &&
              (c.element.addEventListener("click", n),
              c.element.addEventListener("touchstart", n)),
            c
          );
        }
        mark(t, e = {}, n) {
          if (!this.contents) return;
          if (t in this.marks) {
            return this.marks[t];
          }
          let i = this.contents.range(t);
          if (!i) return;
          let r = i.commonAncestorContainer,
            s = 1 === r.nodeType ? r : r.parentNode,
            o = (n) => {
              this.emit(h.c.VIEWS.MARK_CLICKED, t, e);
            };
          i.collapsed && 1 === r.nodeType
            ? ((i = new Range()), i.selectNodeContents(r))
            : i.collapsed && ((i = new Range()), i.selectNodeContents(s));
          let a = this.document.createElement("a");
          return (
            a.setAttribute("ref", "epubjs-mk"),
            (a.style.position = "absolute"),
            (a.dataset.epubcfi = t),
            e &&
              Object.keys(e).forEach((t) => {
                a.dataset[t] = e[t];
              }),
            n &&
              (a.addEventListener("click", n),
              a.addEventListener("touchstart", n)),
            a.addEventListener("click", o),
            a.addEventListener("touchstart", o),
            this.placeMark(a, i),
            this.element.appendChild(a),
            (this.marks[t] = { element: a, range: i, listeners: [o, n] }),
            s
          );
        }
        placeMark(t, e) {
          let n, i, r;
          if (
            "pre-paginated" === this.layout.name ||
            "horizontal" !== this.settings.axis
          ) {
            let t = e.getBoundingClientRect();
            (n = t.top), (i = t.right);
          } else {
            let t,
              o = e.getClientRects();
            for (var s = 0; s != o.length; s++)
              (t = o[s]),
                (!r || t.left < r) &&
                  ((r = t.left),
                  (i =
                    Math.ceil(r / this.layout.props.pageWidth) *
                      this.layout.props.pageWidth -
                    this.layout.gap / 2),
                  (n = t.top));
          }
          (t.style.top = n + "px"), (t.style.left = i + "px");
        }
        unhighlight(t) {
          let e;
          t in this.highlights &&
            ((e = this.highlights[t]),
            this.pane.removeMark(e.mark),
            e.listeners.forEach((t) => {
              t &&
                (e.element.removeEventListener("click", t),
                e.element.removeEventListener("touchstart", t));
            }),
            delete this.highlights[t]);
        }
        ununderline(t) {
          let e;
          t in this.underlines &&
            ((e = this.underlines[t]),
            this.pane.removeMark(e.mark),
            e.listeners.forEach((t) => {
              t &&
                (e.element.removeEventListener("click", t),
                e.element.removeEventListener("touchstart", t));
            }),
            delete this.underlines[t]);
        }
        unmark(t) {
          let e;
          t in this.marks &&
            ((e = this.marks[t]),
            this.element.removeChild(e.element),
            e.listeners.forEach((t) => {
              t &&
                (e.element.removeEventListener("click", t),
                e.element.removeEventListener("touchstart", t));
            }),
            delete this.marks[t]);
        }
        destroy() {
          for (let t in this.highlights) this.unhighlight(t);
          for (let t in this.underlines) this.ununderline(t);
          for (let t in this.marks) this.unmark(t);
          this.blobUrl && Object(s.revokeBlobUrl)(this.blobUrl),
            this.displayed &&
              ((this.displayed = !1),
              this.removeListeners(),
              this.contents.destroy(),
              (this.stopExpanding = !0),
              this.element.removeChild(this.iframe),
              (this.iframe = void 0),
              (this.contents = void 0),
              (this._textWidth = null),
              (this._textHeight = null),
              (this._width = null),
              (this._height = null));
        }
      }
      r()(u.prototype), (e.a = u);
    },
    function (t, e, n) {
      var i = n(20),
        r = n(55),
        s = n(57),
        o = Math.max,
        a = Math.min;
      t.exports = function (t, e, n) {
        var h,
          l,
          u,
          c,
          d,
          f,
          p = 0,
          g = !1,
          m = !1,
          v = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function y(e) {
          var n = h,
            i = l;
          return (h = l = void 0), (p = e), (c = t.apply(i, n));
        }
        function b(t) {
          return (p = t), (d = setTimeout(x, e)), g ? y(t) : c;
        }
        function w(t) {
          var n = t - f;
          return void 0 === f || n >= e || n < 0 || (m && t - p >= u);
        }
        function x() {
          var t = r();
          if (w(t)) return _(t);
          d = setTimeout(
            x,
            (function (t) {
              var n = e - (t - f);
              return m ? a(n, u - (t - p)) : n;
            })(t),
          );
        }
        function _(t) {
          return (d = void 0), v && h ? y(t) : ((h = l = void 0), c);
        }
        function E() {
          var t = r(),
            n = w(t);
          if (((h = arguments), (l = this), (f = t), n)) {
            if (void 0 === d) return b(f);
            if (m) return clearTimeout(d), (d = setTimeout(x, e)), y(f);
          }
          return void 0 === d && (d = setTimeout(x, e)), c;
        }
        return (
          (e = s(e) || 0),
          i(n) &&
            ((g = !!n.leading),
            (u = (m = "maxWait" in n) ? o(s(n.maxWait) || 0, e) : u),
            (v = "trailing" in n ? !!n.trailing : v)),
          (E.cancel = function () {
            void 0 !== d && clearTimeout(d), (p = 0), (h = f = l = d = void 0);
          }),
          (E.flush = function () {
            return void 0 === d ? c : _(r());
          }),
          E
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(0),
        r = n(13),
        s = n(1),
        o = n(3),
        a = n.n(o);
      const h = Math.PI / 2,
        l = {
          easeOutSine: function (t) {
            return Math.sin(t * h);
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * Math.pow(t, 5)
              : 0.5 * (Math.pow(t - 2, 5) + 2);
          },
          easeInCubic: function (t) {
            return Math.pow(t, 3);
          },
        };
      class u {
        constructor(t, e) {
          (this.settings = Object(i.extend)(
            {
              duration: 80,
              minVelocity: 0.2,
              minDistance: 10,
              easing: l.easeInCubic,
            },
            e || {},
          )),
            (this.supportsTouch = this.supportsTouch()),
            this.supportsTouch && this.setup(t);
        }
        setup(t) {
          (this.manager = t),
            (this.layout = this.manager.layout),
            (this.fullsize = this.manager.settings.fullsize),
            this.fullsize
              ? ((this.element = this.manager.stage.element),
                (this.scroller = window),
                this.disableScroll())
              : ((this.element = this.manager.stage.container),
                (this.scroller = this.element),
                (this.element.style.WebkitOverflowScrolling = "touch")),
            (this.manager.settings.offset = this.layout.width),
            (this.manager.settings.afterScrolledTimeout =
              2 * this.settings.duration),
            (this.isVertical = "vertical" === this.manager.settings.axis),
            this.manager.isPaginated &&
              !this.isVertical &&
              ((this.touchCanceler = !1),
              (this.resizeCanceler = !1),
              (this.snapping = !1),
              this.scrollLeft,
              this.scrollTop,
              (this.startTouchX = void 0),
              (this.startTouchY = void 0),
              (this.startTime = void 0),
              (this.endTouchX = void 0),
              (this.endTouchY = void 0),
              (this.endTime = void 0),
              this.addListeners());
        }
        supportsTouch() {
          return !!(
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch)
          );
        }
        disableScroll() {
          this.element.style.overflow = "hidden";
        }
        enableScroll() {
          this.element.style.overflow = "";
        }
        addListeners() {
          (this._onResize = this.onResize.bind(this)),
            window.addEventListener("resize", this._onResize),
            (this._onScroll = this.onScroll.bind(this)),
            this.scroller.addEventListener("scroll", this._onScroll),
            (this._onTouchStart = this.onTouchStart.bind(this)),
            this.scroller.addEventListener("touchstart", this._onTouchStart, {
              passive: !0,
            }),
            this.on("touchstart", this._onTouchStart),
            (this._onTouchMove = this.onTouchMove.bind(this)),
            this.scroller.addEventListener("touchmove", this._onTouchMove, {
              passive: !0,
            }),
            this.on("touchmove", this._onTouchMove),
            (this._onTouchEnd = this.onTouchEnd.bind(this)),
            this.scroller.addEventListener("touchend", this._onTouchEnd, {
              passive: !0,
            }),
            this.on("touchend", this._onTouchEnd),
            (this._afterDisplayed = this.afterDisplayed.bind(this)),
            this.manager.on(s.c.MANAGERS.ADDED, this._afterDisplayed);
        }
        removeListeners() {
          window.removeEventListener("resize", this._onResize),
            (this._onResize = void 0),
            this.scroller.removeEventListener("scroll", this._onScroll),
            (this._onScroll = void 0),
            this.scroller.removeEventListener("touchstart", this._onTouchStart, {
              passive: !0,
            }),
            this.off("touchstart", this._onTouchStart),
            (this._onTouchStart = void 0),
            this.scroller.removeEventListener("touchmove", this._onTouchMove, {
              passive: !0,
            }),
            this.off("touchmove", this._onTouchMove),
            (this._onTouchMove = void 0),
            this.scroller.removeEventListener("touchend", this._onTouchEnd, {
              passive: !0,
            }),
            this.off("touchend", this._onTouchEnd),
            (this._onTouchEnd = void 0),
            this.manager.off(s.c.MANAGERS.ADDED, this._afterDisplayed),
            (this._afterDisplayed = void 0);
        }
        afterDisplayed(t) {
          let e = t.contents;
          ["touchstart", "touchmove", "touchend"].forEach((t) => {
            e.on(t, (t) => this.triggerViewEvent(t, e));
          });
        }
        triggerViewEvent(t, e) {
          this.emit(t.type, t, e);
        }
        onScroll(t) {
          (this.scrollLeft = this.fullsize
            ? window.scrollX
            : this.scroller.scrollLeft),
            (this.scrollTop = this.fullsize
              ? window.scrollY
              : this.scroller.scrollTop);
        }
        onResize(t) {
          this.resizeCanceler = !0;
        }
        onTouchStart(t) {
          let { screenX: e, screenY: n } = t.touches[0];
          this.fullsize && this.enableScroll(),
            (this.touchCanceler = !0),
            this.startTouchX ||
              ((this.startTouchX = e),
              (this.startTouchY = n),
              (this.startTime = this.now())),
            (this.endTouchX = e),
            (this.endTouchY = n),
            (this.endTime = this.now());
        }
        onTouchMove(t) {
          let { screenX: e, screenY: n } = t.touches[0],
            i = Math.abs(n - this.endTouchY);
          (this.touchCanceler = !0),
            !this.fullsize &&
              i < 10 &&
              (this.element.scrollLeft -= e - this.endTouchX),
            (this.endTouchX = e),
            (this.endTouchY = n),
            (this.endTime = this.now());
        }
        onTouchEnd(t) {
          this.fullsize && this.disableScroll(), (this.touchCanceler = !1);
          let e = this.wasSwiped();
          0 !== e ? this.snap(e) : this.snap(),
            (this.startTouchX = void 0),
            (this.startTouchY = void 0),
            (this.startTime = void 0),
            (this.endTouchX = void 0),
            (this.endTouchY = void 0),
            (this.endTime = void 0);
        }
        wasSwiped() {
          let t = this.layout.pageWidth * this.layout.divisor,
            e = this.endTouchX - this.startTouchX,
            n = Math.abs(e),
            i = e / (this.endTime - this.startTime),
            r = this.settings.minVelocity;
          return n <= this.settings.minDistance || n >= t
            ? 0
            : i > r
              ? -1
              : i < -r
                ? 1
                : void 0;
        }
        needsSnap() {
          return (
            this.scrollLeft % (this.layout.pageWidth * this.layout.divisor) != 0
          );
        }
        snap(t = 0) {
          let e = this.scrollLeft,
            n = this.layout.pageWidth * this.layout.divisor,
            i = Math.round(e / n) * n;
          return t && (i += t * n), this.smoothScrollTo(i);
        }
        smoothScrollTo(t) {
          const e = new i.defer(),
            n = this.scrollLeft,
            r = this.now(),
            s = this.settings.duration,
            o = this.settings.easing;
          return (
            (this.snapping = !0),
            function i() {
              const a = this.now(),
                h = Math.min(1, (a - r) / s);
              if ((o(h), this.touchCanceler || this.resizeCanceler))
                return (
                  (this.resizeCanceler = !1),
                  (this.snapping = !1),
                  void e.resolve()
                );
              h < 1
                ? (window.requestAnimationFrame(i.bind(this)),
                  this.scrollTo(n + (t - n) * h, 0))
                : (this.scrollTo(t, 0), (this.snapping = !1), e.resolve());
            }.call(this),
            e.promise
          );
        }
        scrollTo(t = 0, e = 0) {
          this.fullsize
            ? window.scroll(t, e)
            : ((this.scroller.scrollLeft = t), (this.scroller.scrollTop = e));
        }
        now() {
          return "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        }
        destroy() {
          this.scroller &&
            (this.fullsize && this.enableScroll(),
            this.removeListeners(),
            (this.scroller = void 0));
        }
      }
      a()(u.prototype);
      var c = u,
        d = n(22),
        f = n.n(d);
      class p extends r.a {
        constructor(t) {
          super(t),
            (this.name = "continuous"),
            (this.settings = Object(i.extend)(this.settings || {}, {
              infinite: !0,
              overflow: void 0,
              axis: void 0,
              writingMode: void 0,
              flow: "scrolled",
              offset: 500,
              offsetDelta: 250,
              width: void 0,
              height: void 0,
              snap: !1,
              afterScrolledTimeout: 10,
            })),
            Object(i.extend)(this.settings, t.settings || {}),
            "undefined" != t.settings.gap &&
              0 === t.settings.gap &&
              (this.settings.gap = t.settings.gap),
            (this.viewSettings = {
              ignoreClass: this.settings.ignoreClass,
              axis: this.settings.axis,
              flow: this.settings.flow,
              layout: this.layout,
              width: 0,
              height: 0,
              forceEvenPages: !1,
            }),
            (this.scrollTop = 0),
            (this.scrollLeft = 0);
        }
        display(t, e) {
          return r.a.prototype.display.call(this, t, e).then(
            function () {
              return this.fill();
            }.bind(this),
          );
        }
        fill(t) {
          var e = t || new i.defer();
          return (
            this.q
              .enqueue(() => this.check())
              .then((t) => {
                t ? this.fill(e) : e.resolve();
              }),
            e.promise
          );
        }
        moveTo(t) {
          var e = 0,
            n = 0;
          this.isPaginated
            ? ((e = Math.floor(t.left / this.layout.delta) * this.layout.delta),
              this.settings.offsetDelta)
            : ((n = t.top), t.top, this.settings.offsetDelta),
            (e > 0 || n > 0) && this.scrollBy(e, n, !0);
        }
        afterResized(t) {
          this.emit(s.c.MANAGERS.RESIZE, t.section);
        }
        removeShownListeners(t) {
          t.onDisplayed = function () {};
        }
        add(t) {
          var e = this.createView(t);
          return (
            this.views.append(e),
            e.on(s.c.VIEWS.RESIZED, (t) => {
              e.expanded = !0;
            }),
            e.on(s.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            e.on(s.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            (e.onDisplayed = this.afterDisplayed.bind(this)),
            (e.onResize = this.afterResized.bind(this)),
            e.display(this.request)
          );
        }
        append(t) {
          var e = this.createView(t);
          return (
            e.on(s.c.VIEWS.RESIZED, (t) => {
              e.expanded = !0;
            }),
            e.on(s.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            e.on(s.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            this.views.append(e),
            (e.onDisplayed = this.afterDisplayed.bind(this)),
            e
          );
        }
        prepend(t) {
          var e = this.createView(t);
          return (
            e.on(s.c.VIEWS.RESIZED, (t) => {
              this.counter(t), (e.expanded = !0);
            }),
            e.on(s.c.VIEWS.AXIS, (t) => {
              this.updateAxis(t);
            }),
            e.on(s.c.VIEWS.WRITING_MODE, (t) => {
              this.updateWritingMode(t);
            }),
            this.views.prepend(e),
            (e.onDisplayed = this.afterDisplayed.bind(this)),
            e
          );
        }
        counter(t) {
          "vertical" === this.settings.axis
            ? this.scrollBy(0, t.heightDelta, !0)
            : this.scrollBy(t.widthDelta, 0, !0);
        }
        update(t) {
          for (
            var e,
              n = this.bounds(),
              r = this.views.all(),
              s = r.length,
              o = [],
              a = void 0 !== t ? t : this.settings.offset || 0,
              h = new i.defer(),
              l = [],
              u = 0;
            u < s;
            u++
          )
            if (((e = r[u]), !0 === this.isVisible(e, a, a, n))) {
              if (e.displayed) e.show();
              else {
                let t = e.display(this.request).then(
                  function (t) {
                    t.show();
                  },
                  (t) => {
                    e.hide();
                  },
                );
                l.push(t);
              }
              o.push(e);
            } else
              this.q.enqueue(e.destroy.bind(e)),
                clearTimeout(this.trimTimeout),
                (this.trimTimeout = setTimeout(
                  function () {
                    this.q.enqueue(this.trim.bind(this));
                  }.bind(this),
                  250,
                ));
          return l.length
            ? Promise.all(l).catch((t) => {
                h.reject(t);
              })
            : (h.resolve(), h.promise);
        }
        check(t, e) {
          var n = new i.defer(),
            r = [],
            s = "horizontal" === this.settings.axis,
            o = this.settings.offset || 0;
          t && s && (o = t), e && !s && (o = e);
          var a = this._bounds;
          let h = s ? this.scrollLeft : this.scrollTop,
            l = s ? Math.floor(a.width) : a.height,
            u = s ? this.container.scrollWidth : this.container.scrollHeight,
            c =
              this.writingMode && 0 === this.writingMode.indexOf("vertical")
                ? "vertical"
                : "horizontal",
            d = this.settings.rtlScrollType,
            f = "rtl" === this.settings.direction;
          this.settings.fullsize
            ? ((s && f && "negative" === d) || (!s && f && "default" === d)) &&
              (h *= -1)
            : (f && "default" === d && "horizontal" === c && (h = u - l - h),
              f && "negative" === d && "horizontal" === c && (h *= -1));
          let p = () => {
              let t = this.views.first(),
                e = t && t.section.prev();
              e && r.push(this.prepend(e));
            },
            g = h - o;
          h + l + o >= u &&
            (() => {
              let t = this.views.last(),
                e = t && t.section.next();
              e && r.push(this.append(e));
            })(),
            g < 0 && p();
          let m = r.map((t) => t.display(this.request));
          return r.length
            ? Promise.all(m)
                .then(() => this.check())
                .then(
                  () => this.update(o),
                  (t) => t,
                )
            : (this.q.enqueue(
                function () {
                  this.update();
                }.bind(this),
              ),
              n.resolve(!1),
              n.promise);
        }
        trim() {
          for (
            var t = new i.defer(),
              e = this.views.displayed(),
              n = e[0],
              r = e[e.length - 1],
              s = this.views.indexOf(n),
              o = this.views.indexOf(r),
              a = this.views.slice(0, s),
              h = this.views.slice(o + 1),
              l = 0;
            l < a.length - 1;
            l++
          )
            this.erase(a[l], a);
          for (var u = 1; u < h.length; u++) this.erase(h[u]);
          return t.resolve(), t.promise;
        }
        erase(t, e) {
          var n, i;
          this.settings.fullsize
            ? ((n = window.scrollY), (i = window.scrollX))
            : ((n = this.container.scrollTop), (i = this.container.scrollLeft));
          var r = t.bounds();
          this.views.remove(t),
            e &&
              ("vertical" === this.settings.axis
                ? this.scrollTo(0, n - r.height, !0)
                : "rtl" === this.settings.direction
                  ? this.settings.fullsize
                    ? this.scrollTo(i + Math.floor(r.width), 0, !0)
                    : this.scrollTo(i, 0, !0)
                  : this.scrollTo(i - Math.floor(r.width), 0, !0));
        }
        addEventListeners(t) {
          window.addEventListener(
            "unload",
            function (t) {
              (this.ignore = !0), this.destroy();
            }.bind(this),
          ),
            this.addScrollListeners(),
            this.isPaginated &&
              this.settings.snap &&
              (this.snapper = new c(
                this,
                this.settings.snap &&
                  "object" == typeof this.settings.snap &&
                  this.settings.snap,
              ));
        }
        addScrollListeners() {
          var t;
          this.tick = i.requestAnimationFrame;
          let e =
            "rtl" === this.settings.direction &&
            "default" === this.settings.rtlScrollType
              ? -1
              : 1;
          (this.scrollDeltaVert = 0),
            (this.scrollDeltaHorz = 0),
            this.settings.fullsize
              ? ((t = window),
                (this.scrollTop = window.scrollY * e),
                (this.scrollLeft = window.scrollX * e))
              : ((t = this.container),
                (this.scrollTop = this.container.scrollTop),
                (this.scrollLeft = this.container.scrollLeft)),
            (this._onScroll = this.onScroll.bind(this)),
            t.addEventListener("scroll", this._onScroll),
            (this._scrolled = f()(this.scrolled.bind(this), 30)),
            (this.didScroll = !1);
        }
        removeEventListeners() {
          (this.settings.fullsize ? window : this.container).removeEventListener(
            "scroll",
            this._onScroll,
          ),
            (this._onScroll = void 0);
        }
        onScroll() {
          let t,
            e,
            n =
              "rtl" === this.settings.direction &&
              "default" === this.settings.rtlScrollType
                ? -1
                : 1;
          this.settings.fullsize
            ? ((t = window.scrollY * n), (e = window.scrollX * n))
            : ((t = this.container.scrollTop), (e = this.container.scrollLeft)),
            (this.scrollTop = t),
            (this.scrollLeft = e),
            this.ignore ? (this.ignore = !1) : this._scrolled(),
            (this.scrollDeltaVert += Math.abs(t - this.prevScrollTop)),
            (this.scrollDeltaHorz += Math.abs(e - this.prevScrollLeft)),
            (this.prevScrollTop = t),
            (this.prevScrollLeft = e),
            clearTimeout(this.scrollTimeout),
            (this.scrollTimeout = setTimeout(
              function () {
                (this.scrollDeltaVert = 0), (this.scrollDeltaHorz = 0);
              }.bind(this),
              150,
            )),
            clearTimeout(this.afterScrolled),
            (this.didScroll = !1);
        }
        scrolled() {
          this.q.enqueue(
            function () {
              return this.check();
            }.bind(this),
          ),
            this.emit(s.c.MANAGERS.SCROLL, {
              top: this.scrollTop,
              left: this.scrollLeft,
            }),
            clearTimeout(this.afterScrolled),
            (this.afterScrolled = setTimeout(
              function () {
                (this.snapper &&
                  this.snapper.supportsTouch &&
                  this.snapper.needsSnap()) ||
                  this.emit(s.c.MANAGERS.SCROLLED, {
                    top: this.scrollTop,
                    left: this.scrollLeft,
                  });
              }.bind(this),
              this.settings.afterScrolledTimeout,
            ));
        }
        next() {
          let t =
            "pre-paginated" === this.layout.props.name && this.layout.props.spread
              ? 2 * this.layout.props.delta
              : this.layout.props.delta;
          this.views.length &&
            (this.isPaginated && "horizontal" === this.settings.axis
              ? this.scrollBy(t, 0, !0)
              : this.scrollBy(0, this.layout.height, !0),
            this.q.enqueue(
              function () {
                return this.check();
              }.bind(this),
            ));
        }
        prev() {
          let t =
            "pre-paginated" === this.layout.props.name && this.layout.props.spread
              ? 2 * this.layout.props.delta
              : this.layout.props.delta;
          this.views.length &&
            (this.isPaginated && "horizontal" === this.settings.axis
              ? this.scrollBy(-t, 0, !0)
              : this.scrollBy(0, -this.layout.height, !0),
            this.q.enqueue(
              function () {
                return this.check();
              }.bind(this),
            ));
        }
        updateFlow(t) {
          this.rendered &&
            this.snapper &&
            (this.snapper.destroy(), (this.snapper = void 0)),
            super.updateFlow(t, "scroll"),
            this.rendered &&
              this.isPaginated &&
              this.settings.snap &&
              (this.snapper = new c(
                this,
                this.settings.snap &&
                  "object" == typeof this.settings.snap &&
                  this.settings.snap,
              ));
        }
        destroy() {
          super.destroy(), this.snapper && this.snapper.destroy();
        }
      }
      e.a = p;
    },
    function (t, e, n) {
      (function (e) {
        t.exports = (function t(e, n, i) {
          function r(o, a) {
            if (!n[o]) {
              if (!e[o]) {
                if (s) return s(o, !0);
                var h = new Error("Cannot find module '" + o + "'");
                throw ((h.code = "MODULE_NOT_FOUND"), h);
              }
              var l = (n[o] = { exports: {} });
              e[o][0].call(
                l.exports,
                function (t) {
                  var n = e[o][1][t];
                  return r(n || t);
                },
                l,
                l.exports,
                t,
                e,
                n,
                i,
              );
            }
            return n[o].exports;
          }
          for (var s = !1, o = 0; o < i.length; o++) r(i[o]);
          return r;
        })(
          {
            1: [
              function (t, n, i) {
                (function (t) {
                  "use strict";
                  var e,
                    i,
                    r = t.MutationObserver || t.WebKitMutationObserver;
                  if (r) {
                    var s = 0,
                      o = new r(u),
                      a = t.document.createTextNode("");
                    o.observe(a, { characterData: !0 }),
                      (e = function () {
                        a.data = s = ++s % 2;
                      });
                  } else if (t.setImmediate || void 0 === t.MessageChannel)
                    e =
                      "document" in t &&
                      "onreadystatechange" in t.document.createElement("script")
                        ? function () {
                            var e = t.document.createElement("script");
                            (e.onreadystatechange = function () {
                              u(),
                                (e.onreadystatechange = null),
                                e.parentNode.removeChild(e),
                                (e = null);
                            }),
                              t.document.documentElement.appendChild(e);
                          }
                        : function () {
                            setTimeout(u, 0);
                          };
                  else {
                    var h = new t.MessageChannel();
                    (h.port1.onmessage = u),
                      (e = function () {
                        h.port2.postMessage(0);
                      });
                  }
                  var l = [];
                  function u() {
                    var t, e;
                    i = !0;
                    for (var n = l.length; n; ) {
                      for (e = l, l = [], t = -1; ++t < n; ) e[t]();
                      n = l.length;
                    }
                    i = !1;
                  }
                  n.exports = function (t) {
                    1 !== l.push(t) || i || e();
                  };
                }).call(
                  this,
                  void 0 !== e
                    ? e
                    : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                        ? window
                        : {},
                );
              },
              {},
            ],
            2: [
              function (t, e, n) {
                "use strict";
                var i = t(1);
                function r() {}
                var s = {},
                  o = ["REJECTED"],
                  a = ["FULFILLED"],
                  h = ["PENDING"];
                function l(t) {
                  if ("function" != typeof t)
                    throw new TypeError("resolver must be a function");
                  (this.state = h),
                    (this.queue = []),
                    (this.outcome = void 0),
                    t !== r && f(this, t);
                }
                function u(t, e, n) {
                  (this.promise = t),
                    "function" == typeof e &&
                      ((this.onFulfilled = e),
                      (this.callFulfilled = this.otherCallFulfilled)),
                    "function" == typeof n &&
                      ((this.onRejected = n),
                      (this.callRejected = this.otherCallRejected));
                }
                function c(t, e, n) {
                  i(function () {
                    var i;
                    try {
                      i = e(n);
                    } catch (e) {
                      return s.reject(t, e);
                    }
                    i === t
                      ? s.reject(
                          t,
                          new TypeError("Cannot resolve promise with itself"),
                        )
                      : s.resolve(t, i);
                  });
                }
                function d(t) {
                  var e = t && t.then;
                  if (
                    t &&
                    ("object" == typeof t || "function" == typeof t) &&
                    "function" == typeof e
                  )
                    return function () {
                      e.apply(t, arguments);
                    };
                }
                function f(t, e) {
                  var n = !1;
                  function i(e) {
                    n || ((n = !0), s.reject(t, e));
                  }
                  function r(e) {
                    n || ((n = !0), s.resolve(t, e));
                  }
                  var o = p(function () {
                    e(r, i);
                  });
                  "error" === o.status && i(o.value);
                }
                function p(t, e) {
                  var n = {};
                  try {
                    (n.value = t(e)), (n.status = "success");
                  } catch (t) {
                    (n.status = "error"), (n.value = t);
                  }
                  return n;
                }
                (e.exports = l),
                  (l.prototype.catch = function (t) {
                    return this.then(null, t);
                  }),
                  (l.prototype.then = function (t, e) {
                    if (
                      ("function" != typeof t && this.state === a) ||
                      ("function" != typeof e && this.state === o)
                    )
                      return this;
                    var n = new this.constructor(r);
                    return (
                      this.state !== h
                        ? c(n, this.state === a ? t : e, this.outcome)
                        : this.queue.push(new u(n, t, e)),
                      n
                    );
                  }),
                  (u.prototype.callFulfilled = function (t) {
                    s.resolve(this.promise, t);
                  }),
                  (u.prototype.otherCallFulfilled = function (t) {
                    c(this.promise, this.onFulfilled, t);
                  }),
                  (u.prototype.callRejected = function (t) {
                    s.reject(this.promise, t);
                  }),
                  (u.prototype.otherCallRejected = function (t) {
                    c(this.promise, this.onRejected, t);
                  }),
                  (s.resolve = function (t, e) {
                    var n = p(d, e);
                    if ("error" === n.status) return s.reject(t, n.value);
                    var i = n.value;
                    if (i) f(t, i);
                    else {
                      (t.state = a), (t.outcome = e);
                      for (var r = -1, o = t.queue.length; ++r < o; )
                        t.queue[r].callFulfilled(e);
                    }
                    return t;
                  }),
                  (s.reject = function (t, e) {
                    (t.state = o), (t.outcome = e);
                    for (var n = -1, i = t.queue.length; ++n < i; )
                      t.queue[n].callRejected(e);
                    return t;
                  }),
                  (l.resolve = function (t) {
                    return t instanceof this ? t : s.resolve(new this(r), t);
                  }),
                  (l.reject = function (t) {
                    var e = new this(r);
                    return s.reject(e, t);
                  }),
                  (l.all = function (t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                      return this.reject(new TypeError("must be an array"));
                    var n = t.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (
                      var o = new Array(n), a = 0, h = -1, l = new this(r);
                      ++h < n;
  
                    )
                      u(t[h], h);
                    return l;
                    function u(t, r) {
                      e.resolve(t).then(
                        function (t) {
                          (o[r] = t),
                            ++a !== n || i || ((i = !0), s.resolve(l, o));
                        },
                        function (t) {
                          i || ((i = !0), s.reject(l, t));
                        },
                      );
                    }
                  }),
                  (l.race = function (t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                      return this.reject(new TypeError("must be an array"));
                    var n = t.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (var o, a = -1, h = new this(r); ++a < n; )
                      (o = t[a]),
                        e.resolve(o).then(
                          function (t) {
                            i || ((i = !0), s.resolve(h, t));
                          },
                          function (t) {
                            i || ((i = !0), s.reject(h, t));
                          },
                        );
                    return h;
                  });
              },
              { 1: 1 },
            ],
            3: [
              function (t, n, i) {
                (function (e) {
                  "use strict";
                  "function" != typeof e.Promise && (e.Promise = t(2));
                }).call(
                  this,
                  void 0 !== e
                    ? e
                    : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                        ? window
                        : {},
                );
              },
              { 2: 2 },
            ],
            4: [
              function (t, e, n) {
                "use strict";
                var i =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  r = (function () {
                    try {
                      if ("undefined" != typeof indexedDB) return indexedDB;
                      if ("undefined" != typeof webkitIndexedDB)
                        return webkitIndexedDB;
                      if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                      if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                      if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                    } catch (t) {
                      return;
                    }
                  })();
                function s(t, e) {
                  (t = t || []), (e = e || {});
                  try {
                    return new Blob(t, e);
                  } catch (r) {
                    if ("TypeError" !== r.name) throw r;
                    for (
                      var n = new (
                          "undefined" != typeof BlobBuilder
                            ? BlobBuilder
                            : "undefined" != typeof MSBlobBuilder
                              ? MSBlobBuilder
                              : "undefined" != typeof MozBlobBuilder
                                ? MozBlobBuilder
                                : WebKitBlobBuilder
                        )(),
                        i = 0;
                      i < t.length;
                      i += 1
                    )
                      n.append(t[i]);
                    return n.getBlob(e.type);
                  }
                }
                "undefined" == typeof Promise && t(3);
                var o = Promise;
                function a(t, e) {
                  e &&
                    t.then(
                      function (t) {
                        e(null, t);
                      },
                      function (t) {
                        e(t);
                      },
                    );
                }
                function h(t, e, n) {
                  "function" == typeof e && t.then(e),
                    "function" == typeof n && t.catch(n);
                }
                function l(t) {
                  return (
                    "string" != typeof t &&
                      (console.warn(
                        t + " used as a key, but it is not a string.",
                      ),
                      (t = String(t))),
                    t
                  );
                }
                function u() {
                  if (
                    arguments.length &&
                    "function" == typeof arguments[arguments.length - 1]
                  )
                    return arguments[arguments.length - 1];
                }
                var c = void 0,
                  d = {},
                  f = Object.prototype.toString;
                function p(t) {
                  return "boolean" == typeof c
                    ? o.resolve(c)
                    : (function (t) {
                        return new o(function (e) {
                          var n = t.transaction(
                              "local-forage-detect-blob-support",
                              "readwrite",
                            ),
                            i = s([""]);
                          n
                            .objectStore("local-forage-detect-blob-support")
                            .put(i, "key"),
                            (n.onabort = function (t) {
                              t.preventDefault(), t.stopPropagation(), e(!1);
                            }),
                            (n.oncomplete = function () {
                              var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                                n = navigator.userAgent.match(/Edge\//);
                              e(n || !t || parseInt(t[1], 10) >= 43);
                            });
                        }).catch(function () {
                          return !1;
                        });
                      })(t).then(function (t) {
                        return (c = t);
                      });
                }
                function g(t) {
                  var e = d[t.name],
                    n = {};
                  (n.promise = new o(function (t, e) {
                    (n.resolve = t), (n.reject = e);
                  })),
                    e.deferredOperations.push(n),
                    e.dbReady
                      ? (e.dbReady = e.dbReady.then(function () {
                          return n.promise;
                        }))
                      : (e.dbReady = n.promise);
                }
                function m(t) {
                  var e = d[t.name].deferredOperations.pop();
                  if (e) return e.resolve(), e.promise;
                }
                function v(t, e) {
                  var n = d[t.name].deferredOperations.pop();
                  if (n) return n.reject(e), n.promise;
                }
                function y(t, e) {
                  return new o(function (n, i) {
                    if (
                      ((d[t.name] = d[t.name] || {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: [],
                      }),
                      t.db)
                    ) {
                      if (!e) return n(t.db);
                      g(t), t.db.close();
                    }
                    var s = [t.name];
                    e && s.push(t.version);
                    var o = r.open.apply(r, s);
                    e &&
                      (o.onupgradeneeded = function (e) {
                        var n = o.result;
                        try {
                          n.createObjectStore(t.storeName),
                            e.oldVersion <= 1 &&
                              n.createObjectStore(
                                "local-forage-detect-blob-support",
                              );
                        } catch (n) {
                          if ("ConstraintError" !== n.name) throw n;
                          console.warn(
                            'The database "' +
                              t.name +
                              '" has been upgraded from version ' +
                              e.oldVersion +
                              " to version " +
                              e.newVersion +
                              ', but the storage "' +
                              t.storeName +
                              '" already exists.',
                          );
                        }
                      }),
                      (o.onerror = function (t) {
                        t.preventDefault(), i(o.error);
                      }),
                      (o.onsuccess = function () {
                        n(o.result), m(t);
                      });
                  });
                }
                function b(t) {
                  return y(t, !1);
                }
                function w(t) {
                  return y(t, !0);
                }
                function x(t, e) {
                  if (!t.db) return !0;
                  var n = !t.db.objectStoreNames.contains(t.storeName),
                    i = t.version < t.db.version,
                    r = t.version > t.db.version;
                  if (
                    (i &&
                      (t.version !== e &&
                        console.warn(
                          'The database "' +
                            t.name +
                            "\" can't be downgraded from version " +
                            t.db.version +
                            " to version " +
                            t.version +
                            ".",
                        ),
                      (t.version = t.db.version)),
                    r || n)
                  ) {
                    if (n) {
                      var s = t.db.version + 1;
                      s > t.version && (t.version = s);
                    }
                    return !0;
                  }
                  return !1;
                }
                function _(t) {
                  return s(
                    [
                      (function (t) {
                        for (
                          var e = t.length,
                            n = new ArrayBuffer(e),
                            i = new Uint8Array(n),
                            r = 0;
                          r < e;
                          r++
                        )
                          i[r] = t.charCodeAt(r);
                        return n;
                      })(atob(t.data)),
                    ],
                    { type: t.type },
                  );
                }
                function E(t) {
                  return t && t.__local_forage_encoded_blob;
                }
                function k(t) {
                  var e = this,
                    n = e._initReady().then(function () {
                      var t = d[e._dbInfo.name];
                      if (t && t.dbReady) return t.dbReady;
                    });
                  return h(n, t, t), n;
                }
                function S(t, e, n, i) {
                  void 0 === i && (i = 1);
                  try {
                    var r = t.db.transaction(t.storeName, e);
                    n(null, r);
                  } catch (r) {
                    if (
                      i > 0 &&
                      (!t.db ||
                        "InvalidStateError" === r.name ||
                        "NotFoundError" === r.name)
                    )
                      return o
                        .resolve()
                        .then(function () {
                          if (
                            !t.db ||
                            ("NotFoundError" === r.name &&
                              !t.db.objectStoreNames.contains(t.storeName) &&
                              t.version <= t.db.version)
                          )
                            return t.db && (t.version = t.db.version + 1), w(t);
                        })
                        .then(function () {
                          return (function (t) {
                            g(t);
                            for (
                              var e = d[t.name], n = e.forages, i = 0;
                              i < n.length;
                              i++
                            ) {
                              var r = n[i];
                              r._dbInfo.db &&
                                (r._dbInfo.db.close(), (r._dbInfo.db = null));
                            }
                            return (
                              (t.db = null),
                              b(t)
                                .then(function (e) {
                                  return (t.db = e), x(t) ? w(t) : e;
                                })
                                .then(function (i) {
                                  t.db = e.db = i;
                                  for (var r = 0; r < n.length; r++)
                                    n[r]._dbInfo.db = i;
                                })
                                .catch(function (e) {
                                  throw (v(t, e), e);
                                })
                            );
                          })(t).then(function () {
                            S(t, e, n, i - 1);
                          });
                        })
                        .catch(n);
                    n(r);
                  }
                }
                var C = {
                    _driver: "asyncStorage",
                    _initStorage: function (t) {
                      var e = this,
                        n = { db: null };
                      if (t) for (var i in t) n[i] = t[i];
                      var r = d[n.name];
                      r ||
                        ((r = {
                          forages: [],
                          db: null,
                          dbReady: null,
                          deferredOperations: [],
                        }),
                        (d[n.name] = r)),
                        r.forages.push(e),
                        e._initReady || ((e._initReady = e.ready), (e.ready = k));
                      var s = [];
                      function a() {
                        return o.resolve();
                      }
                      for (var h = 0; h < r.forages.length; h++) {
                        var l = r.forages[h];
                        l !== e && s.push(l._initReady().catch(a));
                      }
                      var u = r.forages.slice(0);
                      return o
                        .all(s)
                        .then(function () {
                          return (n.db = r.db), b(n);
                        })
                        .then(function (t) {
                          return (
                            (n.db = t), x(n, e._defaultConfig.version) ? w(n) : t
                          );
                        })
                        .then(function (t) {
                          (n.db = r.db = t), (e._dbInfo = n);
                          for (var i = 0; i < u.length; i++) {
                            var s = u[i];
                            s !== e &&
                              ((s._dbInfo.db = n.db),
                              (s._dbInfo.version = n.version));
                          }
                        });
                    },
                    _support: (function () {
                      try {
                        if (!r || !r.open) return !1;
                        var t =
                            "undefined" != typeof openDatabase &&
                            /(Safari|iPhone|iPad|iPod)/.test(
                              navigator.userAgent,
                            ) &&
                            !/Chrome/.test(navigator.userAgent) &&
                            !/BlackBerry/.test(navigator.platform),
                          e =
                            "function" == typeof fetch &&
                            -1 !== fetch.toString().indexOf("[native code");
                        return (
                          (!t || e) &&
                          "undefined" != typeof indexedDB &&
                          "undefined" != typeof IDBKeyRange
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                    iterate: function (t, e) {
                      var n = this,
                        i = new o(function (e, i) {
                          n.ready()
                            .then(function () {
                              S(n._dbInfo, "readonly", function (r, s) {
                                if (r) return i(r);
                                try {
                                  var o = s
                                      .objectStore(n._dbInfo.storeName)
                                      .openCursor(),
                                    a = 1;
                                  (o.onsuccess = function () {
                                    var n = o.result;
                                    if (n) {
                                      var i = n.value;
                                      E(i) && (i = _(i));
                                      var r = t(i, n.key, a++);
                                      void 0 !== r ? e(r) : n.continue();
                                    } else e();
                                  }),
                                    (o.onerror = function () {
                                      i(o.error);
                                    });
                                } catch (t) {
                                  i(t);
                                }
                              });
                            })
                            .catch(i);
                        });
                      return a(i, e), i;
                    },
                    getItem: function (t, e) {
                      var n = this;
                      t = l(t);
                      var i = new o(function (e, i) {
                        n.ready()
                          .then(function () {
                            S(n._dbInfo, "readonly", function (r, s) {
                              if (r) return i(r);
                              try {
                                var o = s.objectStore(n._dbInfo.storeName).get(t);
                                (o.onsuccess = function () {
                                  var t = o.result;
                                  void 0 === t && (t = null),
                                    E(t) && (t = _(t)),
                                    e(t);
                                }),
                                  (o.onerror = function () {
                                    i(o.error);
                                  });
                              } catch (t) {
                                i(t);
                              }
                            });
                          })
                          .catch(i);
                      });
                      return a(i, e), i;
                    },
                    setItem: function (t, e, n) {
                      var i = this;
                      t = l(t);
                      var r = new o(function (n, r) {
                        var s;
                        i.ready()
                          .then(function () {
                            return (
                              (s = i._dbInfo),
                              "[object Blob]" === f.call(e)
                                ? p(s.db).then(function (t) {
                                    return t
                                      ? e
                                      : ((n = e),
                                        new o(function (t, e) {
                                          var i = new FileReader();
                                          (i.onerror = e),
                                            (i.onloadend = function (e) {
                                              var i = btoa(e.target.result || "");
                                              t({
                                                __local_forage_encoded_blob: !0,
                                                data: i,
                                                type: n.type,
                                              });
                                            }),
                                            i.readAsBinaryString(n);
                                        }));
                                    var n;
                                  })
                                : e
                            );
                          })
                          .then(function (e) {
                            S(i._dbInfo, "readwrite", function (s, o) {
                              if (s) return r(s);
                              try {
                                var a = o.objectStore(i._dbInfo.storeName);
                                null === e && (e = void 0);
                                var h = a.put(e, t);
                                (o.oncomplete = function () {
                                  void 0 === e && (e = null), n(e);
                                }),
                                  (o.onabort = o.onerror =
                                    function () {
                                      var t = h.error
                                        ? h.error
                                        : h.transaction.error;
                                      r(t);
                                    });
                              } catch (t) {
                                r(t);
                              }
                            });
                          })
                          .catch(r);
                      });
                      return a(r, n), r;
                    },
                    removeItem: function (t, e) {
                      var n = this;
                      t = l(t);
                      var i = new o(function (e, i) {
                        n.ready()
                          .then(function () {
                            S(n._dbInfo, "readwrite", function (r, s) {
                              if (r) return i(r);
                              try {
                                var o = s
                                  .objectStore(n._dbInfo.storeName)
                                  .delete(t);
                                (s.oncomplete = function () {
                                  e();
                                }),
                                  (s.onerror = function () {
                                    i(o.error);
                                  }),
                                  (s.onabort = function () {
                                    var t = o.error
                                      ? o.error
                                      : o.transaction.error;
                                    i(t);
                                  });
                              } catch (t) {
                                i(t);
                              }
                            });
                          })
                          .catch(i);
                      });
                      return a(i, e), i;
                    },
                    clear: function (t) {
                      var e = this,
                        n = new o(function (t, n) {
                          e.ready()
                            .then(function () {
                              S(e._dbInfo, "readwrite", function (i, r) {
                                if (i) return n(i);
                                try {
                                  var s = r
                                    .objectStore(e._dbInfo.storeName)
                                    .clear();
                                  (r.oncomplete = function () {
                                    t();
                                  }),
                                    (r.onabort = r.onerror =
                                      function () {
                                        var t = s.error
                                          ? s.error
                                          : s.transaction.error;
                                        n(t);
                                      });
                                } catch (t) {
                                  n(t);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return a(n, t), n;
                    },
                    length: function (t) {
                      var e = this,
                        n = new o(function (t, n) {
                          e.ready()
                            .then(function () {
                              S(e._dbInfo, "readonly", function (i, r) {
                                if (i) return n(i);
                                try {
                                  var s = r
                                    .objectStore(e._dbInfo.storeName)
                                    .count();
                                  (s.onsuccess = function () {
                                    t(s.result);
                                  }),
                                    (s.onerror = function () {
                                      n(s.error);
                                    });
                                } catch (t) {
                                  n(t);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return a(n, t), n;
                    },
                    key: function (t, e) {
                      var n = this,
                        i = new o(function (e, i) {
                          t < 0
                            ? e(null)
                            : n
                                .ready()
                                .then(function () {
                                  S(n._dbInfo, "readonly", function (r, s) {
                                    if (r) return i(r);
                                    try {
                                      var o = s.objectStore(n._dbInfo.storeName),
                                        a = !1,
                                        h = o.openKeyCursor();
                                      (h.onsuccess = function () {
                                        var n = h.result;
                                        n
                                          ? 0 === t || a
                                            ? e(n.key)
                                            : ((a = !0), n.advance(t))
                                          : e(null);
                                      }),
                                        (h.onerror = function () {
                                          i(h.error);
                                        });
                                    } catch (t) {
                                      i(t);
                                    }
                                  });
                                })
                                .catch(i);
                        });
                      return a(i, e), i;
                    },
                    keys: function (t) {
                      var e = this,
                        n = new o(function (t, n) {
                          e.ready()
                            .then(function () {
                              S(e._dbInfo, "readonly", function (i, r) {
                                if (i) return n(i);
                                try {
                                  var s = r
                                      .objectStore(e._dbInfo.storeName)
                                      .openKeyCursor(),
                                    o = [];
                                  (s.onsuccess = function () {
                                    var e = s.result;
                                    e ? (o.push(e.key), e.continue()) : t(o);
                                  }),
                                    (s.onerror = function () {
                                      n(s.error);
                                    });
                                } catch (t) {
                                  n(t);
                                }
                              });
                            })
                            .catch(n);
                        });
                      return a(n, t), n;
                    },
                    dropInstance: function (t, e) {
                      e = u.apply(this, arguments);
                      var n = this.config();
                      (t = ("function" != typeof t && t) || {}).name ||
                        ((t.name = t.name || n.name),
                        (t.storeName = t.storeName || n.storeName));
                      var i,
                        s = this;
                      if (t.name) {
                        var h = t.name === n.name && s._dbInfo.db,
                          l = h
                            ? o.resolve(s._dbInfo.db)
                            : b(t).then(function (e) {
                                var n = d[t.name],
                                  i = n.forages;
                                n.db = e;
                                for (var r = 0; r < i.length; r++)
                                  i[r]._dbInfo.db = e;
                                return e;
                              });
                        i = t.storeName
                          ? l.then(function (e) {
                              if (e.objectStoreNames.contains(t.storeName)) {
                                var n = e.version + 1;
                                g(t);
                                var i = d[t.name],
                                  s = i.forages;
                                e.close();
                                for (var a = 0; a < s.length; a++) {
                                  var h = s[a];
                                  (h._dbInfo.db = null), (h._dbInfo.version = n);
                                }
                                return new o(function (e, i) {
                                  var s = r.open(t.name, n);
                                  (s.onerror = function (t) {
                                    s.result.close(), i(t);
                                  }),
                                    (s.onupgradeneeded = function () {
                                      s.result.deleteObjectStore(t.storeName);
                                    }),
                                    (s.onsuccess = function () {
                                      var t = s.result;
                                      t.close(), e(t);
                                    });
                                })
                                  .then(function (t) {
                                    i.db = t;
                                    for (var e = 0; e < s.length; e++) {
                                      var n = s[e];
                                      (n._dbInfo.db = t), m(n._dbInfo);
                                    }
                                  })
                                  .catch(function (e) {
                                    throw (
                                      ((v(t, e) || o.resolve()).catch(
                                        function () {},
                                      ),
                                      e)
                                    );
                                  });
                              }
                            })
                          : l.then(function (e) {
                              g(t);
                              var n = d[t.name],
                                i = n.forages;
                              e.close();
                              for (var s = 0; s < i.length; s++)
                                i[s]._dbInfo.db = null;
                              return new o(function (e, n) {
                                var i = r.deleteDatabase(t.name);
                                (i.onerror = i.onblocked =
                                  function (t) {
                                    var e = i.result;
                                    e && e.close(), n(t);
                                  }),
                                  (i.onsuccess = function () {
                                    var t = i.result;
                                    t && t.close(), e(t);
                                  });
                              })
                                .then(function (t) {
                                  n.db = t;
                                  for (var e = 0; e < i.length; e++)
                                    m(i[e]._dbInfo);
                                })
                                .catch(function (e) {
                                  throw (
                                    ((v(t, e) || o.resolve()).catch(
                                      function () {},
                                    ),
                                    e)
                                  );
                                });
                            });
                      } else i = o.reject("Invalid arguments");
                      return a(i, e), i;
                    },
                  },
                  T =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  A = /^~~local_forage_type~([^~]+)~/,
                  N = "__lfsc__:".length,
                  O = N + "arbf".length,
                  I = Object.prototype.toString;
                function R(t) {
                  var e,
                    n,
                    i,
                    r,
                    s,
                    o = 0.75 * t.length,
                    a = t.length,
                    h = 0;
                  "=" === t[t.length - 1] &&
                    (o--, "=" === t[t.length - 2] && o--);
                  var l = new ArrayBuffer(o),
                    u = new Uint8Array(l);
                  for (e = 0; e < a; e += 4)
                    (n = T.indexOf(t[e])),
                      (i = T.indexOf(t[e + 1])),
                      (r = T.indexOf(t[e + 2])),
                      (s = T.indexOf(t[e + 3])),
                      (u[h++] = (n << 2) | (i >> 4)),
                      (u[h++] = ((15 & i) << 4) | (r >> 2)),
                      (u[h++] = ((3 & r) << 6) | (63 & s));
                  return l;
                }
                function D(t) {
                  var e,
                    n = new Uint8Array(t),
                    i = "";
                  for (e = 0; e < n.length; e += 3)
                    (i += T[n[e] >> 2]),
                      (i += T[((3 & n[e]) << 4) | (n[e + 1] >> 4)]),
                      (i += T[((15 & n[e + 1]) << 2) | (n[e + 2] >> 6)]),
                      (i += T[63 & n[e + 2]]);
                  return (
                    n.length % 3 == 2
                      ? (i = i.substring(0, i.length - 1) + "=")
                      : n.length % 3 == 1 &&
                        (i = i.substring(0, i.length - 2) + "=="),
                    i
                  );
                }
                var L = {
                  serialize: function (t, e) {
                    var n = "";
                    if (
                      (t && (n = I.call(t)),
                      t &&
                        ("[object ArrayBuffer]" === n ||
                          (t.buffer &&
                            "[object ArrayBuffer]" === I.call(t.buffer))))
                    ) {
                      var i,
                        r = "__lfsc__:";
                      t instanceof ArrayBuffer
                        ? ((i = t), (r += "arbf"))
                        : ((i = t.buffer),
                          "[object Int8Array]" === n
                            ? (r += "si08")
                            : "[object Uint8Array]" === n
                              ? (r += "ui08")
                              : "[object Uint8ClampedArray]" === n
                                ? (r += "uic8")
                                : "[object Int16Array]" === n
                                  ? (r += "si16")
                                  : "[object Uint16Array]" === n
                                    ? (r += "ur16")
                                    : "[object Int32Array]" === n
                                      ? (r += "si32")
                                      : "[object Uint32Array]" === n
                                        ? (r += "ui32")
                                        : "[object Float32Array]" === n
                                          ? (r += "fl32")
                                          : "[object Float64Array]" === n
                                            ? (r += "fl64")
                                            : e(
                                                new Error(
                                                  "Failed to get type for BinaryArray",
                                                ),
                                              )),
                        e(r + D(i));
                    } else if ("[object Blob]" === n) {
                      var s = new FileReader();
                      (s.onload = function () {
                        var n =
                          "~~local_forage_type~" + t.type + "~" + D(this.result);
                        e("__lfsc__:blob" + n);
                      }),
                        s.readAsArrayBuffer(t);
                    } else
                      try {
                        e(JSON.stringify(t));
                      } catch (n) {
                        console.error(
                          "Couldn't convert value into a JSON string: ",
                          t,
                        ),
                          e(null, n);
                      }
                  },
                  deserialize: function (t) {
                    if ("__lfsc__:" !== t.substring(0, N)) return JSON.parse(t);
                    var e,
                      n = t.substring(O),
                      i = t.substring(N, O);
                    if ("blob" === i && A.test(n)) {
                      var r = n.match(A);
                      (e = r[1]), (n = n.substring(r[0].length));
                    }
                    var o = R(n);
                    switch (i) {
                      case "arbf":
                        return o;
                      case "blob":
                        return s([o], { type: e });
                      case "si08":
                        return new Int8Array(o);
                      case "ui08":
                        return new Uint8Array(o);
                      case "uic8":
                        return new Uint8ClampedArray(o);
                      case "si16":
                        return new Int16Array(o);
                      case "ur16":
                        return new Uint16Array(o);
                      case "si32":
                        return new Int32Array(o);
                      case "ui32":
                        return new Uint32Array(o);
                      case "fl32":
                        return new Float32Array(o);
                      case "fl64":
                        return new Float64Array(o);
                      default:
                        throw new Error("Unkown type: " + i);
                    }
                  },
                  stringToBuffer: R,
                  bufferToString: D,
                };
                function j(t, e, n, i) {
                  t.executeSql(
                    "CREATE TABLE IF NOT EXISTS " +
                      e.storeName +
                      " (id INTEGER PRIMARY KEY, key unique, value)",
                    [],
                    n,
                    i,
                  );
                }
                function z(t, e, n, i, r, s) {
                  t.executeSql(
                    n,
                    i,
                    r,
                    function (t, o) {
                      o.code === o.SYNTAX_ERR
                        ? t.executeSql(
                            "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                            [e.storeName],
                            function (t, a) {
                              a.rows.length
                                ? s(t, o)
                                : j(
                                    t,
                                    e,
                                    function () {
                                      t.executeSql(n, i, r, s);
                                    },
                                    s,
                                  );
                            },
                            s,
                          )
                        : s(t, o);
                    },
                    s,
                  );
                }
                function P(t, e, n, i) {
                  var r = this;
                  t = l(t);
                  var s = new o(function (s, o) {
                    r.ready()
                      .then(function () {
                        void 0 === e && (e = null);
                        var a = e,
                          h = r._dbInfo;
                        h.serializer.serialize(e, function (e, l) {
                          l
                            ? o(l)
                            : h.db.transaction(
                                function (n) {
                                  z(
                                    n,
                                    h,
                                    "INSERT OR REPLACE INTO " +
                                      h.storeName +
                                      " (key, value) VALUES (?, ?)",
                                    [t, e],
                                    function () {
                                      s(a);
                                    },
                                    function (t, e) {
                                      o(e);
                                    },
                                  );
                                },
                                function (e) {
                                  if (e.code === e.QUOTA_ERR) {
                                    if (i > 0)
                                      return void s(P.apply(r, [t, a, n, i - 1]));
                                    o(e);
                                  }
                                },
                              );
                        });
                      })
                      .catch(o);
                  });
                  return a(s, n), s;
                }
                function B(t) {
                  return new o(function (e, n) {
                    t.transaction(
                      function (i) {
                        i.executeSql(
                          "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                          [],
                          function (n, i) {
                            for (var r = [], s = 0; s < i.rows.length; s++)
                              r.push(i.rows.item(s).name);
                            e({ db: t, storeNames: r });
                          },
                          function (t, e) {
                            n(e);
                          },
                        );
                      },
                      function (t) {
                        n(t);
                      },
                    );
                  });
                }
                var M = {
                  _driver: "webSQLStorage",
                  _initStorage: function (t) {
                    var e = this,
                      n = { db: null };
                    if (t)
                      for (var i in t)
                        n[i] = "string" != typeof t[i] ? t[i].toString() : t[i];
                    var r = new o(function (t, i) {
                      try {
                        n.db = openDatabase(
                          n.name,
                          String(n.version),
                          n.description,
                          n.size,
                        );
                      } catch (t) {
                        return i(t);
                      }
                      n.db.transaction(function (r) {
                        j(
                          r,
                          n,
                          function () {
                            (e._dbInfo = n), t();
                          },
                          function (t, e) {
                            i(e);
                          },
                        );
                      }, i);
                    });
                    return (n.serializer = L), r;
                  },
                  _support: "function" == typeof openDatabase,
                  iterate: function (t, e) {
                    var n = this,
                      i = new o(function (e, i) {
                        n.ready()
                          .then(function () {
                            var r = n._dbInfo;
                            r.db.transaction(function (n) {
                              z(
                                n,
                                r,
                                "SELECT * FROM " + r.storeName,
                                [],
                                function (n, i) {
                                  for (
                                    var s = i.rows, o = s.length, a = 0;
                                    a < o;
                                    a++
                                  ) {
                                    var h = s.item(a),
                                      l = h.value;
                                    if (
                                      (l && (l = r.serializer.deserialize(l)),
                                      void 0 !== (l = t(l, h.key, a + 1)))
                                    )
                                      return void e(l);
                                  }
                                  e();
                                },
                                function (t, e) {
                                  i(e);
                                },
                              );
                            });
                          })
                          .catch(i);
                      });
                    return a(i, e), i;
                  },
                  getItem: function (t, e) {
                    var n = this;
                    t = l(t);
                    var i = new o(function (e, i) {
                      n.ready()
                        .then(function () {
                          var r = n._dbInfo;
                          r.db.transaction(function (n) {
                            z(
                              n,
                              r,
                              "SELECT * FROM " +
                                r.storeName +
                                " WHERE key = ? LIMIT 1",
                              [t],
                              function (t, n) {
                                var i = n.rows.length
                                  ? n.rows.item(0).value
                                  : null;
                                i && (i = r.serializer.deserialize(i)), e(i);
                              },
                              function (t, e) {
                                i(e);
                              },
                            );
                          });
                        })
                        .catch(i);
                    });
                    return a(i, e), i;
                  },
                  setItem: function (t, e, n) {
                    return P.apply(this, [t, e, n, 1]);
                  },
                  removeItem: function (t, e) {
                    var n = this;
                    t = l(t);
                    var i = new o(function (e, i) {
                      n.ready()
                        .then(function () {
                          var r = n._dbInfo;
                          r.db.transaction(function (n) {
                            z(
                              n,
                              r,
                              "DELETE FROM " + r.storeName + " WHERE key = ?",
                              [t],
                              function () {
                                e();
                              },
                              function (t, e) {
                                i(e);
                              },
                            );
                          });
                        })
                        .catch(i);
                    });
                    return a(i, e), i;
                  },
                  clear: function (t) {
                    var e = this,
                      n = new o(function (t, n) {
                        e.ready()
                          .then(function () {
                            var i = e._dbInfo;
                            i.db.transaction(function (e) {
                              z(
                                e,
                                i,
                                "DELETE FROM " + i.storeName,
                                [],
                                function () {
                                  t();
                                },
                                function (t, e) {
                                  n(e);
                                },
                              );
                            });
                          })
                          .catch(n);
                      });
                    return a(n, t), n;
                  },
                  length: function (t) {
                    var e = this,
                      n = new o(function (t, n) {
                        e.ready()
                          .then(function () {
                            var i = e._dbInfo;
                            i.db.transaction(function (e) {
                              z(
                                e,
                                i,
                                "SELECT COUNT(key) as c FROM " + i.storeName,
                                [],
                                function (e, n) {
                                  var i = n.rows.item(0).c;
                                  t(i);
                                },
                                function (t, e) {
                                  n(e);
                                },
                              );
                            });
                          })
                          .catch(n);
                      });
                    return a(n, t), n;
                  },
                  key: function (t, e) {
                    var n = this,
                      i = new o(function (e, i) {
                        n.ready()
                          .then(function () {
                            var r = n._dbInfo;
                            r.db.transaction(function (n) {
                              z(
                                n,
                                r,
                                "SELECT key FROM " +
                                  r.storeName +
                                  " WHERE id = ? LIMIT 1",
                                [t + 1],
                                function (t, n) {
                                  var i = n.rows.length
                                    ? n.rows.item(0).key
                                    : null;
                                  e(i);
                                },
                                function (t, e) {
                                  i(e);
                                },
                              );
                            });
                          })
                          .catch(i);
                      });
                    return a(i, e), i;
                  },
                  keys: function (t) {
                    var e = this,
                      n = new o(function (t, n) {
                        e.ready()
                          .then(function () {
                            var i = e._dbInfo;
                            i.db.transaction(function (e) {
                              z(
                                e,
                                i,
                                "SELECT key FROM " + i.storeName,
                                [],
                                function (e, n) {
                                  for (var i = [], r = 0; r < n.rows.length; r++)
                                    i.push(n.rows.item(r).key);
                                  t(i);
                                },
                                function (t, e) {
                                  n(e);
                                },
                              );
                            });
                          })
                          .catch(n);
                      });
                    return a(n, t), n;
                  },
                  dropInstance: function (t, e) {
                    e = u.apply(this, arguments);
                    var n = this.config();
                    (t = ("function" != typeof t && t) || {}).name ||
                      ((t.name = t.name || n.name),
                      (t.storeName = t.storeName || n.storeName));
                    var i,
                      r = this;
                    return (
                      a(
                        (i = t.name
                          ? new o(function (e) {
                              var i;
                              (i =
                                t.name === n.name
                                  ? r._dbInfo.db
                                  : openDatabase(t.name, "", "", 0)),
                                t.storeName
                                  ? e({ db: i, storeNames: [t.storeName] })
                                  : e(B(i));
                            }).then(function (t) {
                              return new o(function (e, n) {
                                t.db.transaction(
                                  function (i) {
                                    function r(t) {
                                      return new o(function (e, n) {
                                        i.executeSql(
                                          "DROP TABLE IF EXISTS " + t,
                                          [],
                                          function () {
                                            e();
                                          },
                                          function (t, e) {
                                            n(e);
                                          },
                                        );
                                      });
                                    }
                                    for (
                                      var s = [], a = 0, h = t.storeNames.length;
                                      a < h;
                                      a++
                                    )
                                      s.push(r(t.storeNames[a]));
                                    o.all(s)
                                      .then(function () {
                                        e();
                                      })
                                      .catch(function (t) {
                                        n(t);
                                      });
                                  },
                                  function (t) {
                                    n(t);
                                  },
                                );
                              });
                            })
                          : o.reject("Invalid arguments")),
                        e,
                      ),
                      i
                    );
                  },
                };
                function F(t, e) {
                  var n = t.name + "/";
                  return (
                    t.storeName !== e.storeName && (n += t.storeName + "/"), n
                  );
                }
                function U() {
                  return (
                    !(function () {
                      try {
                        return (
                          localStorage.setItem("_localforage_support_test", !0),
                          localStorage.removeItem("_localforage_support_test"),
                          !1
                        );
                      } catch (t) {
                        return !0;
                      }
                    })() || localStorage.length > 0
                  );
                }
                var q = {
                    _driver: "localStorageWrapper",
                    _initStorage: function (t) {
                      var e = {};
                      if (t) for (var n in t) e[n] = t[n];
                      return (
                        (e.keyPrefix = F(t, this._defaultConfig)),
                        U()
                          ? ((this._dbInfo = e), (e.serializer = L), o.resolve())
                          : o.reject()
                      );
                    },
                    _support: (function () {
                      try {
                        return (
                          "undefined" != typeof localStorage &&
                          "setItem" in localStorage &&
                          !!localStorage.setItem
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                    iterate: function (t, e) {
                      var n = this,
                        i = n.ready().then(function () {
                          for (
                            var e = n._dbInfo,
                              i = e.keyPrefix,
                              r = i.length,
                              s = localStorage.length,
                              o = 1,
                              a = 0;
                            a < s;
                            a++
                          ) {
                            var h = localStorage.key(a);
                            if (0 === h.indexOf(i)) {
                              var l = localStorage.getItem(h);
                              if (
                                (l && (l = e.serializer.deserialize(l)),
                                void 0 !== (l = t(l, h.substring(r), o++)))
                              )
                                return l;
                            }
                          }
                        });
                      return a(i, e), i;
                    },
                    getItem: function (t, e) {
                      var n = this;
                      t = l(t);
                      var i = n.ready().then(function () {
                        var e = n._dbInfo,
                          i = localStorage.getItem(e.keyPrefix + t);
                        return i && (i = e.serializer.deserialize(i)), i;
                      });
                      return a(i, e), i;
                    },
                    setItem: function (t, e, n) {
                      var i = this;
                      t = l(t);
                      var r = i.ready().then(function () {
                        void 0 === e && (e = null);
                        var n = e;
                        return new o(function (r, s) {
                          var o = i._dbInfo;
                          o.serializer.serialize(e, function (e, i) {
                            if (i) s(i);
                            else
                              try {
                                localStorage.setItem(o.keyPrefix + t, e), r(n);
                              } catch (t) {
                                ("QuotaExceededError" !== t.name &&
                                  "NS_ERROR_DOM_QUOTA_REACHED" !== t.name) ||
                                  s(t),
                                  s(t);
                              }
                          });
                        });
                      });
                      return a(r, n), r;
                    },
                    removeItem: function (t, e) {
                      var n = this;
                      t = l(t);
                      var i = n.ready().then(function () {
                        var e = n._dbInfo;
                        localStorage.removeItem(e.keyPrefix + t);
                      });
                      return a(i, e), i;
                    },
                    clear: function (t) {
                      var e = this,
                        n = e.ready().then(function () {
                          for (
                            var t = e._dbInfo.keyPrefix,
                              n = localStorage.length - 1;
                            n >= 0;
                            n--
                          ) {
                            var i = localStorage.key(n);
                            0 === i.indexOf(t) && localStorage.removeItem(i);
                          }
                        });
                      return a(n, t), n;
                    },
                    length: function (t) {
                      var e = this.keys().then(function (t) {
                        return t.length;
                      });
                      return a(e, t), e;
                    },
                    key: function (t, e) {
                      var n = this,
                        i = n.ready().then(function () {
                          var e,
                            i = n._dbInfo;
                          try {
                            e = localStorage.key(t);
                          } catch (t) {
                            e = null;
                          }
                          return e && (e = e.substring(i.keyPrefix.length)), e;
                        });
                      return a(i, e), i;
                    },
                    keys: function (t) {
                      var e = this,
                        n = e.ready().then(function () {
                          for (
                            var t = e._dbInfo,
                              n = localStorage.length,
                              i = [],
                              r = 0;
                            r < n;
                            r++
                          ) {
                            var s = localStorage.key(r);
                            0 === s.indexOf(t.keyPrefix) &&
                              i.push(s.substring(t.keyPrefix.length));
                          }
                          return i;
                        });
                      return a(n, t), n;
                    },
                    dropInstance: function (t, e) {
                      if (
                        ((e = u.apply(this, arguments)),
                        !(t = ("function" != typeof t && t) || {}).name)
                      ) {
                        var n = this.config();
                        (t.name = t.name || n.name),
                          (t.storeName = t.storeName || n.storeName);
                      }
                      var i,
                        r = this;
                      return (
                        a(
                          (i = t.name
                            ? new o(function (e) {
                                t.storeName
                                  ? e(F(t, r._defaultConfig))
                                  : e(t.name + "/");
                              }).then(function (t) {
                                for (
                                  var e = localStorage.length - 1;
                                  e >= 0;
                                  e--
                                ) {
                                  var n = localStorage.key(e);
                                  0 === n.indexOf(t) &&
                                    localStorage.removeItem(n);
                                }
                              })
                            : o.reject("Invalid arguments")),
                          e,
                        ),
                        i
                      );
                    },
                  },
                  W = function (t, e) {
                    for (var n, i, r = t.length, s = 0; s < r; ) {
                      if (
                        (n = t[s]) === (i = e) ||
                        ("number" == typeof n &&
                          "number" == typeof i &&
                          isNaN(n) &&
                          isNaN(i))
                      )
                        return !0;
                      s++;
                    }
                    return !1;
                  },
                  H =
                    Array.isArray ||
                    function (t) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(t)
                      );
                    },
                  V = {},
                  Y = {},
                  X = { INDEXEDDB: C, WEBSQL: M, LOCALSTORAGE: q },
                  Z = [
                    X.INDEXEDDB._driver,
                    X.WEBSQL._driver,
                    X.LOCALSTORAGE._driver,
                  ],
                  $ = ["dropInstance"],
                  G = [
                    "clear",
                    "getItem",
                    "iterate",
                    "key",
                    "keys",
                    "length",
                    "removeItem",
                    "setItem",
                  ].concat($),
                  K = {
                    description: "",
                    driver: Z.slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1,
                  };
                function J(t, e) {
                  t[e] = function () {
                    var n = arguments;
                    return t.ready().then(function () {
                      return t[e].apply(t, n);
                    });
                  };
                }
                function Q() {
                  for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    if (e)
                      for (var n in e)
                        e.hasOwnProperty(n) &&
                          (H(e[n])
                            ? (arguments[0][n] = e[n].slice())
                            : (arguments[0][n] = e[n]));
                  }
                  return arguments[0];
                }
                var tt = new ((function () {
                  function t(e) {
                    for (var n in ((function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                    X))
                      if (X.hasOwnProperty(n)) {
                        var i = X[n],
                          r = i._driver;
                        (this[n] = r), V[r] || this.defineDriver(i);
                      }
                    (this._defaultConfig = Q({}, K)),
                      (this._config = Q({}, this._defaultConfig, e)),
                      (this._driverSet = null),
                      (this._initDriver = null),
                      (this._ready = !1),
                      (this._dbInfo = null),
                      this._wrapLibraryMethodsWithReady(),
                      this.setDriver(this._config.driver).catch(function () {});
                  }
                  return (
                    (t.prototype.config = function (t) {
                      if ("object" === (void 0 === t ? "undefined" : i(t))) {
                        if (this._ready)
                          return new Error(
                            "Can't call config() after localforage has been used.",
                          );
                        for (var e in t) {
                          if (
                            ("storeName" === e &&
                              (t[e] = t[e].replace(/\W/g, "_")),
                            "version" === e && "number" != typeof t[e])
                          )
                            return new Error(
                              "Database version must be a number.",
                            );
                          this._config[e] = t[e];
                        }
                        return (
                          !("driver" in t) ||
                          !t.driver ||
                          this.setDriver(this._config.driver)
                        );
                      }
                      return "string" == typeof t
                        ? this._config[t]
                        : this._config;
                    }),
                    (t.prototype.defineDriver = function (t, e, n) {
                      var i = new o(function (e, n) {
                        try {
                          var i = t._driver,
                            r = new Error(
                              "Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver",
                            );
                          if (!t._driver) return void n(r);
                          for (
                            var s = G.concat("_initStorage"), h = 0, l = s.length;
                            h < l;
                            h++
                          ) {
                            var u = s[h];
                            if ((!W($, u) || t[u]) && "function" != typeof t[u])
                              return void n(r);
                          }
                          !(function () {
                            for (
                              var e = function (t) {
                                  return function () {
                                    var e = new Error(
                                        "Method " +
                                          t +
                                          " is not implemented by the current driver",
                                      ),
                                      n = o.reject(e);
                                    return (
                                      a(n, arguments[arguments.length - 1]), n
                                    );
                                  };
                                },
                                n = 0,
                                i = $.length;
                              n < i;
                              n++
                            ) {
                              var r = $[n];
                              t[r] || (t[r] = e(r));
                            }
                          })();
                          var c = function (n) {
                            V[i] &&
                              console.info("Redefining LocalForage driver: " + i),
                              (V[i] = t),
                              (Y[i] = n),
                              e();
                          };
                          "_support" in t
                            ? t._support && "function" == typeof t._support
                              ? t._support().then(c, n)
                              : c(!!t._support)
                            : c(!0);
                        } catch (t) {
                          n(t);
                        }
                      });
                      return h(i, e, n), i;
                    }),
                    (t.prototype.driver = function () {
                      return this._driver || null;
                    }),
                    (t.prototype.getDriver = function (t, e, n) {
                      var i = V[t]
                        ? o.resolve(V[t])
                        : o.reject(new Error("Driver not found."));
                      return h(i, e, n), i;
                    }),
                    (t.prototype.getSerializer = function (t) {
                      var e = o.resolve(L);
                      return h(e, t), e;
                    }),
                    (t.prototype.ready = function (t) {
                      var e = this,
                        n = e._driverSet.then(function () {
                          return (
                            null === e._ready && (e._ready = e._initDriver()),
                            e._ready
                          );
                        });
                      return h(n, t, t), n;
                    }),
                    (t.prototype.setDriver = function (t, e, n) {
                      var i = this;
                      H(t) || (t = [t]);
                      var r = this._getSupportedDrivers(t);
                      function s() {
                        i._config.driver = i.driver();
                      }
                      function a(t) {
                        return (
                          i._extend(t),
                          s(),
                          (i._ready = i._initStorage(i._config)),
                          i._ready
                        );
                      }
                      var l =
                        null !== this._driverSet
                          ? this._driverSet.catch(function () {
                              return o.resolve();
                            })
                          : o.resolve();
                      return (
                        (this._driverSet = l
                          .then(function () {
                            var t = r[0];
                            return (
                              (i._dbInfo = null),
                              (i._ready = null),
                              i.getDriver(t).then(function (t) {
                                (i._driver = t._driver),
                                  s(),
                                  i._wrapLibraryMethodsWithReady(),
                                  (i._initDriver = (function (t) {
                                    return function () {
                                      var e = 0;
                                      return (function n() {
                                        for (; e < t.length; ) {
                                          var r = t[e];
                                          return (
                                            e++,
                                            (i._dbInfo = null),
                                            (i._ready = null),
                                            i.getDriver(r).then(a).catch(n)
                                          );
                                        }
                                        s();
                                        var h = new Error(
                                          "No available storage method found.",
                                        );
                                        return (
                                          (i._driverSet = o.reject(h)),
                                          i._driverSet
                                        );
                                      })();
                                    };
                                  })(r));
                              })
                            );
                          })
                          .catch(function () {
                            s();
                            var t = new Error(
                              "No available storage method found.",
                            );
                            return (i._driverSet = o.reject(t)), i._driverSet;
                          })),
                        h(this._driverSet, e, n),
                        this._driverSet
                      );
                    }),
                    (t.prototype.supports = function (t) {
                      return !!Y[t];
                    }),
                    (t.prototype._extend = function (t) {
                      Q(this, t);
                    }),
                    (t.prototype._getSupportedDrivers = function (t) {
                      for (var e = [], n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        this.supports(r) && e.push(r);
                      }
                      return e;
                    }),
                    (t.prototype._wrapLibraryMethodsWithReady = function () {
                      for (var t = 0, e = G.length; t < e; t++) J(this, G[t]);
                    }),
                    (t.prototype.createInstance = function (e) {
                      return new t(e);
                    }),
                    t
                  );
                })())();
                e.exports = tt;
              },
              { 3: 3 },
            ],
          },
          {},
          [4],
        )(4);
      }).call(this, n(9));
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return null != t;
      };
    },
    function (t, e) {
      function n(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function i(t, e) {
        var i = t.prototype;
        if (!(i instanceof e)) {
          function r() {}
          (r.prototype = e.prototype), n(i, (r = new r())), (t.prototype = i = r);
        }
        i.constructor != t &&
          ("function" != typeof t && console.error("unknow Class:" + t),
          (i.constructor = t));
      }
      var r = {},
        s = (r.ELEMENT_NODE = 1),
        o = (r.ATTRIBUTE_NODE = 2),
        a = (r.TEXT_NODE = 3),
        h = (r.CDATA_SECTION_NODE = 4),
        l = (r.ENTITY_REFERENCE_NODE = 5),
        u = (r.ENTITY_NODE = 6),
        c = (r.PROCESSING_INSTRUCTION_NODE = 7),
        d = (r.COMMENT_NODE = 8),
        f = (r.DOCUMENT_NODE = 9),
        p = (r.DOCUMENT_TYPE_NODE = 10),
        g = (r.DOCUMENT_FRAGMENT_NODE = 11),
        m = (r.NOTATION_NODE = 12),
        v = {},
        y = {},
        b =
          ((v.INDEX_SIZE_ERR = ((y[1] = "Index size error"), 1)),
          (v.DOMSTRING_SIZE_ERR = ((y[2] = "DOMString size error"), 2)),
          (v.HIERARCHY_REQUEST_ERR = ((y[3] = "Hierarchy request error"), 3))),
        w =
          ((v.WRONG_DOCUMENT_ERR = ((y[4] = "Wrong document"), 4)),
          (v.INVALID_CHARACTER_ERR = ((y[5] = "Invalid character"), 5)),
          (v.NO_DATA_ALLOWED_ERR = ((y[6] = "No data allowed"), 6)),
          (v.NO_MODIFICATION_ALLOWED_ERR =
            ((y[7] = "No modification allowed"), 7)),
          (v.NOT_FOUND_ERR = ((y[8] = "Not found"), 8))),
        x =
          ((v.NOT_SUPPORTED_ERR = ((y[9] = "Not supported"), 9)),
          (v.INUSE_ATTRIBUTE_ERR = ((y[10] = "Attribute in use"), 10)));
      (v.INVALID_STATE_ERR = ((y[11] = "Invalid state"), 11)),
        (v.SYNTAX_ERR = ((y[12] = "Syntax error"), 12)),
        (v.INVALID_MODIFICATION_ERR = ((y[13] = "Invalid modification"), 13)),
        (v.NAMESPACE_ERR = ((y[14] = "Invalid namespace"), 14)),
        (v.INVALID_ACCESS_ERR = ((y[15] = "Invalid access"), 15));
      function _(t, e) {
        if (e instanceof Error) var n = e;
        else
          (n = this),
            Error.call(this, y[t]),
            (this.message = y[t]),
            Error.captureStackTrace && Error.captureStackTrace(this, _);
        return (n.code = t), e && (this.message = this.message + ": " + e), n;
      }
      function E() {}
      function k(t, e) {
        (this._node = t), (this._refresh = e), S(this);
      }
      function S(t) {
        var e = t._node._inc || t._node.ownerDocument._inc;
        if (t._inc != e) {
          var i = t._refresh(t._node);
          et(t, "length", i.length), n(i, t), (t._inc = e);
        }
      }
      function C() {}
      function T(t, e) {
        for (var n = t.length; n--; ) if (t[n] === e) return n;
      }
      function A(t, e, n, i) {
        if ((i ? (e[T(e, i)] = n) : (e[e.length++] = n), t)) {
          n.ownerElement = t;
          var r = t.ownerDocument;
          r &&
            (i && j(r, t, i),
            (function (t, e, n) {
              t && t._inc++,
                "http://www.w3.org/2000/xmlns/" == n.namespaceURI &&
                  (e._nsMap[n.prefix ? n.localName : ""] = n.value);
            })(r, t, n));
        }
      }
      function N(t, e, n) {
        var i = T(e, n);
        if (!(i >= 0)) throw _(w, new Error(t.tagName + "@" + n));
        for (var r = e.length - 1; i < r; ) e[i] = e[++i];
        if (((e.length = r), t)) {
          var s = t.ownerDocument;
          s && (j(s, t, n), (n.ownerElement = null));
        }
      }
      function O(t) {
        if (((this._features = {}), t)) for (var e in t) this._features = t[e];
      }
      function I() {}
      function R(t) {
        return (
          ("<" == t ? "&lt;" : ">" == t && "&gt;") ||
          ("&" == t && "&amp;") ||
          ('"' == t && "&quot;") ||
          "&#" + t.charCodeAt() + ";"
        );
      }
      function D(t, e) {
        if (e(t)) return !0;
        if ((t = t.firstChild))
          do {
            if (D(t, e)) return !0;
          } while ((t = t.nextSibling));
      }
      function L() {}
      function j(t, e, n, i) {
        t && t._inc++,
          "http://www.w3.org/2000/xmlns/" == n.namespaceURI &&
            delete e._nsMap[n.prefix ? n.localName : ""];
      }
      function z(t, e, n) {
        if (t && t._inc) {
          t._inc++;
          var i = e.childNodes;
          if (n) i[i.length++] = n;
          else {
            for (var r = e.firstChild, s = 0; r; )
              (i[s++] = r), (r = r.nextSibling);
            i.length = s;
          }
        }
      }
      function P(t, e) {
        var n = e.previousSibling,
          i = e.nextSibling;
        return (
          n ? (n.nextSibling = i) : (t.firstChild = i),
          i ? (i.previousSibling = n) : (t.lastChild = n),
          z(t.ownerDocument, t),
          e
        );
      }
      function B(t, e, n) {
        var i = e.parentNode;
        if ((i && i.removeChild(e), e.nodeType === g)) {
          var r = e.firstChild;
          if (null == r) return e;
          var s = e.lastChild;
        } else r = s = e;
        var o = n ? n.previousSibling : t.lastChild;
        (r.previousSibling = o),
          (s.nextSibling = n),
          o ? (o.nextSibling = r) : (t.firstChild = r),
          null == n ? (t.lastChild = s) : (n.previousSibling = s);
        do {
          r.parentNode = t;
        } while (r !== s && (r = r.nextSibling));
        return (
          z(t.ownerDocument || t, t),
          e.nodeType == g && (e.firstChild = e.lastChild = null),
          e
        );
      }
      function M() {
        this._nsMap = {};
      }
      function F() {}
      function U() {}
      function q() {}
      function W() {}
      function H() {}
      function V() {}
      function Y() {}
      function X() {}
      function Z() {}
      function $() {}
      function G() {}
      function K() {}
      function J(t, e) {
        var n = [],
          i = (9 == this.nodeType && this.documentElement) || this,
          r = i.prefix,
          s = i.namespaceURI;
        if (s && null == r && null == (r = i.lookupPrefix(s)))
          var o = [{ namespace: s, prefix: null }];
        return tt(this, n, t, e, o), n.join("");
      }
      function Q(t, e, n) {
        var i = t.prefix || "",
          r = t.namespaceURI;
        if (!i && !r) return !1;
        if (
          ("xml" === i && "http://www.w3.org/XML/1998/namespace" === r) ||
          "http://www.w3.org/2000/xmlns/" == r
        )
          return !1;
        for (var s = n.length; s--; ) {
          var o = n[s];
          if (o.prefix == i) return o.namespace != r;
        }
        return !0;
      }
      function tt(t, e, n, i, r) {
        if (i) {
          if (!(t = i(t))) return;
          if ("string" == typeof t) return void e.push(t);
        }
        switch (t.nodeType) {
          case s:
            r || (r = []);
            r.length;
            var u = t.attributes,
              m = u.length,
              v = t.firstChild,
              y = t.tagName;
            (n = "http://www.w3.org/1999/xhtml" === t.namespaceURI || n),
              e.push("<", y);
            for (var b = 0; b < m; b++) {
              "xmlns" == (w = u.item(b)).prefix
                ? r.push({ prefix: w.localName, namespace: w.value })
                : "xmlns" == w.nodeName &&
                  r.push({ prefix: "", namespace: w.value });
            }
            for (b = 0; b < m; b++) {
              var w;
              if (Q((w = u.item(b)), 0, r)) {
                var x = w.prefix || "",
                  _ = w.namespaceURI,
                  E = x ? " xmlns:" + x : " xmlns";
                e.push(E, '="', _, '"'), r.push({ prefix: x, namespace: _ });
              }
              tt(w, e, n, i, r);
            }
            if (Q(t, 0, r)) {
              (x = t.prefix || ""),
                (_ = t.namespaceURI),
                (E = x ? " xmlns:" + x : " xmlns");
              e.push(E, '="', _, '"'), r.push({ prefix: x, namespace: _ });
            }
            if (v || (n && !/^(?:meta|link|img|br|hr|input)$/i.test(y))) {
              if ((e.push(">"), n && /^script$/i.test(y)))
                for (; v; )
                  v.data ? e.push(v.data) : tt(v, e, n, i, r),
                    (v = v.nextSibling);
              else for (; v; ) tt(v, e, n, i, r), (v = v.nextSibling);
              e.push("</", y, ">");
            } else e.push("/>");
            return;
          case f:
          case g:
            for (v = t.firstChild; v; ) tt(v, e, n, i, r), (v = v.nextSibling);
            return;
          case o:
            return e.push(" ", t.name, '="', t.value.replace(/[<&"]/g, R), '"');
          case a:
            return e.push(t.data.replace(/[<&]/g, R));
          case h:
            return e.push("<![CDATA[", t.data, "]]>");
          case d:
            return e.push("<!--", t.data, "-->");
          case p:
            var k = t.publicId,
              S = t.systemId;
            if ((e.push("<!DOCTYPE ", t.name), k))
              e.push(' PUBLIC "', k),
                S && "." != S && e.push('" "', S),
                e.push('">');
            else if (S && "." != S) e.push(' SYSTEM "', S, '">');
            else {
              var C = t.internalSubset;
              C && e.push(" [", C, "]"), e.push(">");
            }
            return;
          case c:
            return e.push("<?", t.target, " ", t.data, "?>");
          case l:
            return e.push("&", t.nodeName, ";");
          default:
            e.push("??", t.nodeName);
        }
      }
      function et(t, e, n) {
        t[e] = n;
      }
      (_.prototype = Error.prototype),
        n(v, _),
        (E.prototype = {
          length: 0,
          item: function (t) {
            return this[t] || null;
          },
          toString: function (t, e) {
            for (var n = [], i = 0; i < this.length; i++) tt(this[i], n, t, e);
            return n.join("");
          },
        }),
        (k.prototype.item = function (t) {
          return S(this), this[t];
        }),
        i(k, E),
        (C.prototype = {
          length: 0,
          item: E.prototype.item,
          getNamedItem: function (t) {
            for (var e = this.length; e--; ) {
              var n = this[e];
              if (n.nodeName == t) return n;
            }
          },
          setNamedItem: function (t) {
            var e = t.ownerElement;
            if (e && e != this._ownerElement) throw new _(x);
            var n = this.getNamedItem(t.nodeName);
            return A(this._ownerElement, this, t, n), n;
          },
          setNamedItemNS: function (t) {
            var e,
              n = t.ownerElement;
            if (n && n != this._ownerElement) throw new _(x);
            return (
              (e = this.getNamedItemNS(t.namespaceURI, t.localName)),
              A(this._ownerElement, this, t, e),
              e
            );
          },
          removeNamedItem: function (t) {
            var e = this.getNamedItem(t);
            return N(this._ownerElement, this, e), e;
          },
          removeNamedItemNS: function (t, e) {
            var n = this.getNamedItemNS(t, e);
            return N(this._ownerElement, this, n), n;
          },
          getNamedItemNS: function (t, e) {
            for (var n = this.length; n--; ) {
              var i = this[n];
              if (i.localName == e && i.namespaceURI == t) return i;
            }
            return null;
          },
        }),
        (O.prototype = {
          hasFeature: function (t, e) {
            var n = this._features[t.toLowerCase()];
            return !(!n || (e && !(e in n)));
          },
          createDocument: function (t, e, n) {
            var i = new L();
            if (
              ((i.implementation = this),
              (i.childNodes = new E()),
              (i.doctype = n),
              n && i.appendChild(n),
              e)
            ) {
              var r = i.createElementNS(t, e);
              i.appendChild(r);
            }
            return i;
          },
          createDocumentType: function (t, e, n) {
            var i = new V();
            return (
              (i.name = t),
              (i.nodeName = t),
              (i.publicId = e),
              (i.systemId = n),
              i
            );
          },
        }),
        (I.prototype = {
          firstChild: null,
          lastChild: null,
          previousSibling: null,
          nextSibling: null,
          attributes: null,
          parentNode: null,
          childNodes: null,
          ownerDocument: null,
          nodeValue: null,
          namespaceURI: null,
          prefix: null,
          localName: null,
          insertBefore: function (t, e) {
            return B(this, t, e);
          },
          replaceChild: function (t, e) {
            this.insertBefore(t, e), e && this.removeChild(e);
          },
          removeChild: function (t) {
            return P(this, t);
          },
          appendChild: function (t) {
            return this.insertBefore(t, null);
          },
          hasChildNodes: function () {
            return null != this.firstChild;
          },
          cloneNode: function (t) {
            return (function t(e, n, i) {
              var r = new n.constructor();
              for (var a in n) {
                var h = n[a];
                "object" != typeof h && h != r[a] && (r[a] = h);
              }
              n.childNodes && (r.childNodes = new E());
              switch (((r.ownerDocument = e), r.nodeType)) {
                case s:
                  var l = n.attributes,
                    u = (r.attributes = new C()),
                    c = l.length;
                  u._ownerElement = r;
                  for (var d = 0; d < c; d++)
                    r.setAttributeNode(t(e, l.item(d), !0));
                  break;
                case o:
                  i = !0;
              }
              if (i)
                for (var f = n.firstChild; f; )
                  r.appendChild(t(e, f, i)), (f = f.nextSibling);
              return r;
            })(this.ownerDocument || this, this, t);
          },
          normalize: function () {
            for (var t = this.firstChild; t; ) {
              var e = t.nextSibling;
              e && e.nodeType == a && t.nodeType == a
                ? (this.removeChild(e), t.appendData(e.data))
                : (t.normalize(), (t = e));
            }
          },
          isSupported: function (t, e) {
            return this.ownerDocument.implementation.hasFeature(t, e);
          },
          hasAttributes: function () {
            return this.attributes.length > 0;
          },
          lookupPrefix: function (t) {
            for (var e = this; e; ) {
              var n = e._nsMap;
              if (n) for (var i in n) if (n[i] == t) return i;
              e = e.nodeType == o ? e.ownerDocument : e.parentNode;
            }
            return null;
          },
          lookupNamespaceURI: function (t) {
            for (var e = this; e; ) {
              var n = e._nsMap;
              if (n && t in n) return n[t];
              e = e.nodeType == o ? e.ownerDocument : e.parentNode;
            }
            return null;
          },
          isDefaultNamespace: function (t) {
            return null == this.lookupPrefix(t);
          },
        }),
        n(r, I),
        n(r, I.prototype),
        (L.prototype = {
          nodeName: "#document",
          nodeType: f,
          doctype: null,
          documentElement: null,
          _inc: 1,
          insertBefore: function (t, e) {
            if (t.nodeType == g) {
              for (var n = t.firstChild; n; ) {
                var i = n.nextSibling;
                this.insertBefore(n, e), (n = i);
              }
              return t;
            }
            return (
              null == this.documentElement &&
                t.nodeType == s &&
                (this.documentElement = t),
              B(this, t, e),
              (t.ownerDocument = this),
              t
            );
          },
          removeChild: function (t) {
            return (
              this.documentElement == t && (this.documentElement = null),
              P(this, t)
            );
          },
          importNode: function (t, e) {
            return (function t(e, n, i) {
              var r;
              switch (n.nodeType) {
                case s:
                  (r = n.cloneNode(!1)).ownerDocument = e;
                case g:
                  break;
                case o:
                  i = !0;
              }
              r || (r = n.cloneNode(!1));
              if (((r.ownerDocument = e), (r.parentNode = null), i))
                for (var a = n.firstChild; a; )
                  r.appendChild(t(e, a, i)), (a = a.nextSibling);
              return r;
            })(this, t, e);
          },
          getElementById: function (t) {
            var e = null;
            return (
              D(this.documentElement, function (n) {
                if (n.nodeType == s && n.getAttribute("id") == t)
                  return (e = n), !0;
              }),
              e
            );
          },
          getElementsByClassName: function (t) {
            const e = new RegExp(`(^|\\s)${t}(\\s|$)`);
            return new k(this, (t) => {
              var n = [];
              return (
                D(t.documentElement, (i) => {
                  i !== t &&
                    i.nodeType == s &&
                    e.test(i.getAttribute("class")) &&
                    n.push(i);
                }),
                n
              );
            });
          },
          createElement: function (t) {
            var e = new M();
            return (
              (e.ownerDocument = this),
              (e.nodeName = t),
              (e.tagName = t),
              (e.childNodes = new E()),
              ((e.attributes = new C())._ownerElement = e),
              e
            );
          },
          createDocumentFragment: function () {
            var t = new $();
            return (t.ownerDocument = this), (t.childNodes = new E()), t;
          },
          createTextNode: function (t) {
            var e = new q();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createComment: function (t) {
            var e = new W();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createCDATASection: function (t) {
            var e = new H();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createProcessingInstruction: function (t, e) {
            var n = new G();
            return (
              (n.ownerDocument = this),
              (n.tagName = n.target = t),
              (n.nodeValue = n.data = e),
              n
            );
          },
          createAttribute: function (t) {
            var e = new F();
            return (
              (e.ownerDocument = this),
              (e.name = t),
              (e.nodeName = t),
              (e.localName = t),
              (e.specified = !0),
              e
            );
          },
          createEntityReference: function (t) {
            var e = new Z();
            return (e.ownerDocument = this), (e.nodeName = t), e;
          },
          createElementNS: function (t, e) {
            var n = new M(),
              i = e.split(":"),
              r = (n.attributes = new C());
            return (
              (n.childNodes = new E()),
              (n.ownerDocument = this),
              (n.nodeName = e),
              (n.tagName = e),
              (n.namespaceURI = t),
              2 == i.length
                ? ((n.prefix = i[0]), (n.localName = i[1]))
                : (n.localName = e),
              (r._ownerElement = n),
              n
            );
          },
          createAttributeNS: function (t, e) {
            var n = new F(),
              i = e.split(":");
            return (
              (n.ownerDocument = this),
              (n.nodeName = e),
              (n.name = e),
              (n.namespaceURI = t),
              (n.specified = !0),
              2 == i.length
                ? ((n.prefix = i[0]), (n.localName = i[1]))
                : (n.localName = e),
              n
            );
          },
        }),
        i(L, I),
        (M.prototype = {
          nodeType: s,
          hasAttribute: function (t) {
            return null != this.getAttributeNode(t);
          },
          getAttribute: function (t) {
            var e = this.getAttributeNode(t);
            return (e && e.value) || "";
          },
          getAttributeNode: function (t) {
            return this.attributes.getNamedItem(t);
          },
          setAttribute: function (t, e) {
            var n = this.ownerDocument.createAttribute(t);
            (n.value = n.nodeValue = "" + e), this.setAttributeNode(n);
          },
          removeAttribute: function (t) {
            var e = this.getAttributeNode(t);
            e && this.removeAttributeNode(e);
          },
          appendChild: function (t) {
            return t.nodeType === g
              ? this.insertBefore(t, null)
              : (function (t, e) {
                  var n = e.parentNode;
                  if (n) {
                    var i = t.lastChild;
                    n.removeChild(e);
                    i = t.lastChild;
                  }
                  return (
                    (i = t.lastChild),
                    (e.parentNode = t),
                    (e.previousSibling = i),
                    (e.nextSibling = null),
                    i ? (i.nextSibling = e) : (t.firstChild = e),
                    (t.lastChild = e),
                    z(t.ownerDocument, t, e),
                    e
                  );
                })(this, t);
          },
          setAttributeNode: function (t) {
            return this.attributes.setNamedItem(t);
          },
          setAttributeNodeNS: function (t) {
            return this.attributes.setNamedItemNS(t);
          },
          removeAttributeNode: function (t) {
            return this.attributes.removeNamedItem(t.nodeName);
          },
          removeAttributeNS: function (t, e) {
            var n = this.getAttributeNodeNS(t, e);
            n && this.removeAttributeNode(n);
          },
          hasAttributeNS: function (t, e) {
            return null != this.getAttributeNodeNS(t, e);
          },
          getAttributeNS: function (t, e) {
            var n = this.getAttributeNodeNS(t, e);
            return (n && n.value) || "";
          },
          setAttributeNS: function (t, e, n) {
            var i = this.ownerDocument.createAttributeNS(t, e);
            (i.value = i.nodeValue = "" + n), this.setAttributeNode(i);
          },
          getAttributeNodeNS: function (t, e) {
            return this.attributes.getNamedItemNS(t, e);
          },
          getElementsByTagName: function (t) {
            return new k(this, function (e) {
              var n = [];
              return (
                D(e, function (i) {
                  i === e ||
                    i.nodeType != s ||
                    ("*" !== t && i.tagName != t) ||
                    n.push(i);
                }),
                n
              );
            });
          },
          getElementsByTagNameNS: function (t, e) {
            return new k(this, function (n) {
              var i = [];
              return (
                D(n, function (r) {
                  r === n ||
                    r.nodeType !== s ||
                    ("*" !== t && r.namespaceURI !== t) ||
                    ("*" !== e && r.localName != e) ||
                    i.push(r);
                }),
                i
              );
            });
          },
        }),
        (L.prototype.getElementsByTagName = M.prototype.getElementsByTagName),
        (L.prototype.getElementsByTagNameNS = M.prototype.getElementsByTagNameNS),
        i(M, I),
        (F.prototype.nodeType = o),
        i(F, I),
        (U.prototype = {
          data: "",
          substringData: function (t, e) {
            return this.data.substring(t, t + e);
          },
          appendData: function (t) {
            (t = this.data + t),
              (this.nodeValue = this.data = t),
              (this.length = t.length);
          },
          insertData: function (t, e) {
            this.replaceData(t, 0, e);
          },
          appendChild: function (t) {
            throw new Error(y[b]);
          },
          deleteData: function (t, e) {
            this.replaceData(t, e, "");
          },
          replaceData: function (t, e, n) {
            (n = this.data.substring(0, t) + n + this.data.substring(t + e)),
              (this.nodeValue = this.data = n),
              (this.length = n.length);
          },
        }),
        i(U, I),
        (q.prototype = {
          nodeName: "#text",
          nodeType: a,
          splitText: function (t) {
            var e = this.data,
              n = e.substring(t);
            (e = e.substring(0, t)),
              (this.data = this.nodeValue = e),
              (this.length = e.length);
            var i = this.ownerDocument.createTextNode(n);
            return (
              this.parentNode &&
                this.parentNode.insertBefore(i, this.nextSibling),
              i
            );
          },
        }),
        i(q, U),
        (W.prototype = { nodeName: "#comment", nodeType: d }),
        i(W, U),
        (H.prototype = { nodeName: "#cdata-section", nodeType: h }),
        i(H, U),
        (V.prototype.nodeType = p),
        i(V, I),
        (Y.prototype.nodeType = m),
        i(Y, I),
        (X.prototype.nodeType = u),
        i(X, I),
        (Z.prototype.nodeType = l),
        i(Z, I),
        ($.prototype.nodeName = "#document-fragment"),
        ($.prototype.nodeType = g),
        i($, I),
        (G.prototype.nodeType = c),
        i(G, I),
        (K.prototype.serializeToString = function (t, e, n) {
          return J.call(t, e, n);
        }),
        (I.prototype.toString = J);
      try {
        if (Object.defineProperty) {
          Object.defineProperty(k.prototype, "length", {
            get: function () {
              return S(this), this.$$length;
            },
          }),
            Object.defineProperty(I.prototype, "textContent", {
              get: function () {
                return (function t(e) {
                  switch (e.nodeType) {
                    case s:
                    case g:
                      var n = [];
                      for (e = e.firstChild; e; )
                        7 !== e.nodeType && 8 !== e.nodeType && n.push(t(e)),
                          (e = e.nextSibling);
                      return n.join("");
                    default:
                      return e.nodeValue;
                  }
                })(this);
              },
              set: function (t) {
                switch (this.nodeType) {
                  case s:
                  case g:
                    for (; this.firstChild; ) this.removeChild(this.firstChild);
                    (t || String(t)) &&
                      this.appendChild(this.ownerDocument.createTextNode(t));
                    break;
                  default:
                    (this.data = t), (this.value = t), (this.nodeValue = t);
                }
              },
            }),
            (et = function (t, e, n) {
              t["$$" + e] = n;
            });
        }
      } catch (t) {}
      (e.Node = I), (e.DOMImplementation = O), (e.XMLSerializer = K);
    },
    function (t, e, n) {
      var i = n(56),
        r = "object" == typeof self && self && self.Object === Object && self,
        s = i || r || Function("return this")();
      t.exports = s;
    },
    function (t, e, n) {
      var i = n(27).Symbol;
      t.exports = i;
    },
    function (t, e, n) {
      var i;
      /*!
       * jQuery JavaScript Library v3.5.1
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2020-05-04T22:49Z
       */ !(function (e, n) {
        "use strict";
        "object" == typeof t.exports
          ? (t.exports = e.document
              ? n(e, !0)
              : function (t) {
                  if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(t);
                })
          : n(e);
      })("undefined" != typeof window ? window : this, function (n, r) {
        "use strict";
        var s = [],
          o = Object.getPrototypeOf,
          a = s.slice,
          h = s.flat
            ? function (t) {
                return s.flat.call(t);
              }
            : function (t) {
                return s.concat.apply([], t);
              },
          l = s.push,
          u = s.indexOf,
          c = {},
          d = c.toString,
          f = c.hasOwnProperty,
          p = f.toString,
          g = p.call(Object),
          m = {},
          v = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
          },
          y = function (t) {
            return null != t && t === t.window;
          },
          b = n.document,
          w = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function x(t, e, n) {
          var i,
            r,
            s = (n = n || b).createElement("script");
          if (((s.text = t), e))
            for (i in w)
              (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
                s.setAttribute(i, r);
          n.head.appendChild(s).parentNode.removeChild(s);
        }
        function _(t) {
          return null == t
            ? t + ""
            : "object" == typeof t || "function" == typeof t
              ? c[d.call(t)] || "object"
              : typeof t;
        }
        var E = function (t, e) {
          return new E.fn.init(t, e);
        };
        function k(t) {
          var e = !!t && "length" in t && t.length,
            n = _(t);
          return (
            !v(t) &&
            !y(t) &&
            ("array" === n ||
              0 === e ||
              ("number" == typeof e && e > 0 && e - 1 in t))
          );
        }
        (E.fn = E.prototype =
          {
            jquery: "3.5.1",
            constructor: E,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (t) {
              return null == t
                ? a.call(this)
                : t < 0
                  ? this[t + this.length]
                  : this[t];
            },
            pushStack: function (t) {
              var e = E.merge(this.constructor(), t);
              return (e.prevObject = this), e;
            },
            each: function (t) {
              return E.each(this, t);
            },
            map: function (t) {
              return this.pushStack(
                E.map(this, function (e, n) {
                  return t.call(e, n, e);
                }),
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                E.grep(this, function (t, e) {
                  return (e + 1) % 2;
                }),
              );
            },
            odd: function () {
              return this.pushStack(
                E.grep(this, function (t, e) {
                  return e % 2;
                }),
              );
            },
            eq: function (t) {
              var e = this.length,
                n = +t + (t < 0 ? e : 0);
              return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: s.sort,
            splice: s.splice,
          }),
          (E.extend = E.fn.extend =
            function () {
              var t,
                e,
                n,
                i,
                r,
                s,
                o = arguments[0] || {},
                a = 1,
                h = arguments.length,
                l = !1;
              for (
                "boolean" == typeof o && ((l = o), (o = arguments[a] || {}), a++),
                  "object" == typeof o || v(o) || (o = {}),
                  a === h && ((o = this), a--);
                a < h;
                a++
              )
                if (null != (t = arguments[a]))
                  for (e in t)
                    (i = t[e]),
                      "__proto__" !== e &&
                        o !== i &&
                        (l && i && (E.isPlainObject(i) || (r = Array.isArray(i)))
                          ? ((n = o[e]),
                            (s =
                              r && !Array.isArray(n)
                                ? []
                                : r || E.isPlainObject(n)
                                  ? n
                                  : {}),
                            (r = !1),
                            (o[e] = E.extend(l, s, i)))
                          : void 0 !== i && (o[e] = i));
              return o;
            }),
          E.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
              throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
              var e, n;
              return (
                !(!t || "[object Object]" !== d.call(t)) &&
                (!(e = o(t)) ||
                  ("function" ==
                    typeof (n = f.call(e, "constructor") && e.constructor) &&
                    p.call(n) === g))
              );
            },
            isEmptyObject: function (t) {
              var e;
              for (e in t) return !1;
              return !0;
            },
            globalEval: function (t, e, n) {
              x(t, { nonce: e && e.nonce }, n);
            },
            each: function (t, e) {
              var n,
                i = 0;
              if (k(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
              else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
              return t;
            },
            makeArray: function (t, e) {
              var n = e || [];
              return (
                null != t &&
                  (k(Object(t))
                    ? E.merge(n, "string" == typeof t ? [t] : t)
                    : l.call(n, t)),
                n
              );
            },
            inArray: function (t, e, n) {
              return null == e ? -1 : u.call(e, t, n);
            },
            merge: function (t, e) {
              for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                t[r++] = e[i];
              return (t.length = r), t;
            },
            grep: function (t, e, n) {
              for (var i = [], r = 0, s = t.length, o = !n; r < s; r++)
                !e(t[r], r) !== o && i.push(t[r]);
              return i;
            },
            map: function (t, e, n) {
              var i,
                r,
                s = 0,
                o = [];
              if (k(t))
                for (i = t.length; s < i; s++)
                  null != (r = e(t[s], s, n)) && o.push(r);
              else for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
              return h(o);
            },
            guid: 1,
            support: m,
          }),
          "function" == typeof Symbol &&
            (E.fn[Symbol.iterator] = s[Symbol.iterator]),
          E.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " ",
            ),
            function (t, e) {
              c["[object " + e + "]"] = e.toLowerCase();
            },
          );
        var S =
          /*!
           * Sizzle CSS Selector Engine v2.3.5
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2020-03-14
           */
          (function (t) {
            var e,
              n,
              i,
              r,
              s,
              o,
              a,
              h,
              l,
              u,
              c,
              d,
              f,
              p,
              g,
              m,
              v,
              y,
              b,
              w = "sizzle" + 1 * new Date(),
              x = t.document,
              _ = 0,
              E = 0,
              k = ht(),
              S = ht(),
              C = ht(),
              T = ht(),
              A = function (t, e) {
                return t === e && (c = !0), 0;
              },
              N = {}.hasOwnProperty,
              O = [],
              I = O.pop,
              R = O.push,
              D = O.push,
              L = O.slice,
              j = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                  if (t[n] === e) return n;
                return -1;
              },
              z =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P = "[\ \\t\\r\\n\\f]",
              B =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                P +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\])+",
              M =
                "\\[" +
                P +
                "*(" +
                B +
                ")(?:" +
                P +
                "*([*^$|!~]?=)" +
                P +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                B +
                "))|)" +
                P +
                "*\\]",
              F =
                ":(" +
                B +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                M +
                ")*)|.*)\\)|)",
              U = new RegExp(P + "+", "g"),
              q = new RegExp(
                "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
                "g",
              ),
              W = new RegExp("^" + P + "*," + P + "*"),
              H = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
              V = new RegExp(P + "|>"),
              Y = new RegExp(F),
              X = new RegExp("^" + B + "$"),
              Z = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    P +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    P +
                    "*(?:([+-]|)" +
                    P +
                    "*(\\d+)|))" +
                    P +
                    "*\\)|)",
                  "i",
                ),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    P +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    P +
                    "*((?:-\\d)?\\d*)" +
                    P +
                    "*\\)|)(?=[^-]|$)",
                  "i",
                ),
              },
              $ = /HTML$/i,
              G = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              tt = /[+~]/,
              et = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
                "g",
              ),
              nt = function (t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return (
                  e ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
                );
              },
              it = /([\0-]|^-?\d)|^-$|[^\0--￿\w-]/g,
              rt = function (t, e) {
                return e
                  ? "\0" === t
                    ? "�"
                    : t.slice(0, -1) +
                      "\\" +
                      t.charCodeAt(t.length - 1).toString(16) +
                      " "
                  : "\\" + t;
              },
              st = function () {
                d();
              },
              ot = wt(
                function (t) {
                  return (
                    !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" },
              );
            try {
              D.apply((O = L.call(x.childNodes)), x.childNodes),
                O[x.childNodes.length].nodeType;
            } catch (t) {
              D = {
                apply: O.length
                  ? function (t, e) {
                      R.apply(t, L.call(e));
                    }
                  : function (t, e) {
                      for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                      t.length = n - 1;
                    },
              };
            }
            function at(t, e, i, r) {
              var s,
                a,
                l,
                u,
                c,
                p,
                v,
                y = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
              )
                return i;
              if (!r && (d(e), (e = e || f), g)) {
                if (11 !== x && (c = Q.exec(t)))
                  if ((s = c[1])) {
                    if (9 === x) {
                      if (!(l = e.getElementById(s))) return i;
                      if (l.id === s) return i.push(l), i;
                    } else if (
                      y &&
                      (l = y.getElementById(s)) &&
                      b(e, l) &&
                      l.id === s
                    )
                      return i.push(l), i;
                  } else {
                    if (c[2]) return D.apply(i, e.getElementsByTagName(t)), i;
                    if (
                      (s = c[3]) &&
                      n.getElementsByClassName &&
                      e.getElementsByClassName
                    )
                      return D.apply(i, e.getElementsByClassName(s)), i;
                  }
                if (
                  n.qsa &&
                  !T[t + " "] &&
                  (!m || !m.test(t)) &&
                  (1 !== x || "object" !== e.nodeName.toLowerCase())
                ) {
                  if (((v = t), (y = e), 1 === x && (V.test(t) || H.test(t)))) {
                    for (
                      ((y = (tt.test(t) && vt(e.parentNode)) || e) === e &&
                        n.scope) ||
                        ((u = e.getAttribute("id"))
                          ? (u = u.replace(it, rt))
                          : e.setAttribute("id", (u = w))),
                        a = (p = o(t)).length;
                      a--;
  
                    )
                      p[a] = (u ? "#" + u : ":scope") + " " + bt(p[a]);
                    v = p.join(",");
                  }
                  try {
                    return D.apply(i, y.querySelectorAll(v)), i;
                  } catch (e) {
                    T(t, !0);
                  } finally {
                    u === w && e.removeAttribute("id");
                  }
                }
              }
              return h(t.replace(q, "$1"), e, i, r);
            }
            function ht() {
              var t = [];
              return function e(n, r) {
                return (
                  t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                  (e[n + " "] = r)
                );
              };
            }
            function lt(t) {
              return (t[w] = !0), t;
            }
            function ut(t) {
              var e = f.createElement("fieldset");
              try {
                return !!t(e);
              } catch (t) {
                return !1;
              } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
              }
            }
            function ct(t, e) {
              for (var n = t.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = e;
            }
            function dt(t, e) {
              var n = e && t,
                i =
                  n &&
                  1 === t.nodeType &&
                  1 === e.nodeType &&
                  t.sourceIndex - e.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
              return t ? 1 : -1;
            }
            function ft(t) {
              return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
              };
            }
            function pt(t) {
              return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
              };
            }
            function gt(t) {
              return function (e) {
                return "form" in e
                  ? e.parentNode && !1 === e.disabled
                    ? "label" in e
                      ? "label" in e.parentNode
                        ? e.parentNode.disabled === t
                        : e.disabled === t
                      : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
                    : e.disabled === t
                  : "label" in e && e.disabled === t;
              };
            }
            function mt(t) {
              return lt(function (e) {
                return (
                  (e = +e),
                  lt(function (n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--; )
                      n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function vt(t) {
              return t && void 0 !== t.getElementsByTagName && t;
            }
            for (e in ((n = at.support = {}),
            (s = at.isXML =
              function (t) {
                var e = t.namespaceURI,
                  n = (t.ownerDocument || t).documentElement;
                return !$.test(e || (n && n.nodeName) || "HTML");
              }),
            (d = at.setDocument =
              function (t) {
                var e,
                  r,
                  o = t ? t.ownerDocument || t : x;
                return o != f && 9 === o.nodeType && o.documentElement
                  ? ((p = (f = o).documentElement),
                    (g = !s(f)),
                    x != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", st, !1)
                        : r.attachEvent && r.attachEvent("onunload", st)),
                    (n.scope = ut(function (t) {
                      return (
                        p.appendChild(t).appendChild(f.createElement("div")),
                        void 0 !== t.querySelectorAll &&
                          !t.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ut(function (t) {
                      return (t.className = "i"), !t.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ut(function (t) {
                      return (
                        t.appendChild(f.createComment("")),
                        !t.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(f.getElementsByClassName)),
                    (n.getById = ut(function (t) {
                      return (
                        (p.appendChild(t).id = w),
                        !f.getElementsByName || !f.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (t) {
                          var e = t.replace(et, nt);
                          return function (t) {
                            return t.getAttribute("id") === e;
                          };
                        }),
                        (i.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (t) {
                          var e = t.replace(et, nt);
                          return function (t) {
                            var n =
                              void 0 !== t.getAttributeNode &&
                              t.getAttributeNode("id");
                            return n && n.value === e;
                          };
                        }),
                        (i.find.ID = function (t, e) {
                          if (void 0 !== e.getElementById && g) {
                            var n,
                              i,
                              r,
                              s = e.getElementById(t);
                            if (s) {
                              if ((n = s.getAttributeNode("id")) && n.value === t)
                                return [s];
                              for (
                                r = e.getElementsByName(t), i = 0;
                                (s = r[i++]);
  
                              )
                                if (
                                  (n = s.getAttributeNode("id")) &&
                                  n.value === t
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (t, e) {
                          return void 0 !== e.getElementsByTagName
                            ? e.getElementsByTagName(t)
                            : n.qsa
                              ? e.querySelectorAll(t)
                              : void 0;
                        }
                      : function (t, e) {
                          var n,
                            i = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                          if ("*" === t) {
                            for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return s;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (t, e) {
                        if (void 0 !== e.getElementsByClassName && g)
                          return e.getElementsByClassName(t);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = J.test(f.querySelectorAll)) &&
                      (ut(function (t) {
                        var e;
                        (p.appendChild(t).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          t.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=" + P + "*(?:''|\"\")"),
                          t.querySelectorAll("[selected]").length ||
                            m.push("\\[" + P + "*(?:value|" + z + ")"),
                          t.querySelectorAll("[id~=" + w + "-]").length ||
                            m.push("~="),
                          (e = f.createElement("input")).setAttribute("name", ""),
                          t.appendChild(e),
                          t.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")",
                            ),
                          t.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          t.querySelectorAll("a#" + w + "+*").length ||
                            m.push(".#.+[+~]"),
                          t.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      ut(function (t) {
                        t.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = f.createElement("input");
                        e.setAttribute("type", "hidden"),
                          t.appendChild(e).setAttribute("name", "D"),
                          t.querySelectorAll("[name=d]").length &&
                            m.push("name" + P + "*[*^$|!~]?="),
                          2 !== t.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (p.appendChild(t).disabled = !0),
                          2 !== t.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          t.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (y =
                        p.matches ||
                        p.webkitMatchesSelector ||
                        p.mozMatchesSelector ||
                        p.oMatchesSelector ||
                        p.msMatchesSelector),
                    )) &&
                      ut(function (t) {
                        (n.disconnectedMatch = y.call(t, "*")),
                          y.call(t, "[s!='']:x"),
                          v.push("!=", F);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (e = J.test(p.compareDocumentPosition)),
                    (b =
                      e || J.test(p.contains)
                        ? function (t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                              i = e && e.parentNode;
                            return (
                              t === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : t.compareDocumentPosition &&
                                    16 & t.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (t, e) {
                            if (e)
                              for (; (e = e.parentNode); ) if (e === t) return !0;
                            return !1;
                          }),
                    (A = e
                      ? function (t, e) {
                          if (t === e) return (c = !0), 0;
                          var i =
                            !t.compareDocumentPosition -
                            !e.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (t.ownerDocument || t) == (e.ownerDocument || e)
                                  ? t.compareDocumentPosition(e)
                                  : 1) ||
                            (!n.sortDetached &&
                              e.compareDocumentPosition(t) === i)
                              ? t == f || (t.ownerDocument == x && b(x, t))
                                ? -1
                                : e == f || (e.ownerDocument == x && b(x, e))
                                  ? 1
                                  : u
                                    ? j(u, t) - j(u, e)
                                    : 0
                              : 4 & i
                                ? -1
                                : 1)
                          );
                        }
                      : function (t, e) {
                          if (t === e) return (c = !0), 0;
                          var n,
                            i = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            o = [t],
                            a = [e];
                          if (!r || !s)
                            return t == f
                              ? -1
                              : e == f
                                ? 1
                                : r
                                  ? -1
                                  : s
                                    ? 1
                                    : u
                                      ? j(u, t) - j(u, e)
                                      : 0;
                          if (r === s) return dt(t, e);
                          for (n = t; (n = n.parentNode); ) o.unshift(n);
                          for (n = e; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i
                            ? dt(o[i], a[i])
                            : o[i] == x
                              ? -1
                              : a[i] == x
                                ? 1
                                : 0;
                        }),
                    f)
                  : f;
              }),
            (at.matches = function (t, e) {
              return at(t, null, null, e);
            }),
            (at.matchesSelector = function (t, e) {
              if (
                (d(t),
                n.matchesSelector &&
                  g &&
                  !T[e + " "] &&
                  (!v || !v.test(e)) &&
                  (!m || !m.test(e)))
              )
                try {
                  var i = y.call(t, e);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return i;
                } catch (t) {
                  T(e, !0);
                }
              return at(e, f, null, [t]).length > 0;
            }),
            (at.contains = function (t, e) {
              return (t.ownerDocument || t) != f && d(t), b(t, e);
            }),
            (at.attr = function (t, e) {
              (t.ownerDocument || t) != f && d(t);
              var r = i.attrHandle[e.toLowerCase()],
                s =
                  r && N.call(i.attrHandle, e.toLowerCase())
                    ? r(t, e, !g)
                    : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !g
                  ? t.getAttribute(e)
                  : (s = t.getAttributeNode(e)) && s.specified
                    ? s.value
                    : null;
            }),
            (at.escape = function (t) {
              return (t + "").replace(it, rt);
            }),
            (at.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (at.uniqueSort = function (t) {
              var e,
                i = [],
                r = 0,
                s = 0;
              if (
                ((c = !n.detectDuplicates),
                (u = !n.sortStable && t.slice(0)),
                t.sort(A),
                c)
              ) {
                for (; (e = t[s++]); ) e === t[s] && (r = i.push(s));
                for (; r--; ) t.splice(i[r], 1);
              }
              return (u = null), t;
            }),
            (r = at.getText =
              function (t) {
                var e,
                  n = "",
                  i = 0,
                  s = t.nodeType;
                if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                  } else if (3 === s || 4 === s) return t.nodeValue;
                } else for (; (e = t[i++]); ) n += r(e);
                return n;
              }),
            ((i = at.selectors =
              {
                cacheLength: 50,
                createPseudo: lt,
                match: Z,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (t) {
                    return (
                      (t[1] = t[1].replace(et, nt)),
                      (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)),
                      "~=" === t[2] && (t[3] = " " + t[3] + " "),
                      t.slice(0, 4)
                    );
                  },
                  CHILD: function (t) {
                    return (
                      (t[1] = t[1].toLowerCase()),
                      "nth" === t[1].slice(0, 3)
                        ? (t[3] || at.error(t[0]),
                          (t[4] = +(t[4]
                            ? t[5] + (t[6] || 1)
                            : 2 * ("even" === t[3] || "odd" === t[3]))),
                          (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                        : t[3] && at.error(t[0]),
                      t
                    );
                  },
                  PSEUDO: function (t) {
                    var e,
                      n = !t[6] && t[2];
                    return Z.CHILD.test(t[0])
                      ? null
                      : (t[3]
                          ? (t[2] = t[4] || t[5] || "")
                          : n &&
                            Y.test(n) &&
                            (e = o(n, !0)) &&
                            (e = n.indexOf(")", n.length - e) - n.length) &&
                            ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                        t.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (t) {
                    var e = t.replace(et, nt).toLowerCase();
                    return "*" === t
                      ? function () {
                          return !0;
                        }
                      : function (t) {
                          return t.nodeName && t.nodeName.toLowerCase() === e;
                        };
                  },
                  CLASS: function (t) {
                    var e = k[t + " "];
                    return (
                      e ||
                      ((e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                        k(t, function (t) {
                          return e.test(
                            ("string" == typeof t.className && t.className) ||
                              (void 0 !== t.getAttribute &&
                                t.getAttribute("class")) ||
                              "",
                          );
                        }))
                    );
                  },
                  ATTR: function (t, e, n) {
                    return function (i) {
                      var r = at.attr(i, t);
                      return null == r
                        ? "!=" === e
                        : !e ||
                            ((r += ""),
                            "=" === e
                              ? r === n
                              : "!=" === e
                                ? r !== n
                                : "^=" === e
                                  ? n && 0 === r.indexOf(n)
                                  : "*=" === e
                                    ? n && r.indexOf(n) > -1
                                    : "$=" === e
                                      ? n && r.slice(-n.length) === n
                                      : "~=" === e
                                        ? (" " + r.replace(U, " ") + " ").indexOf(
                                            n,
                                          ) > -1
                                        : "|=" === e &&
                                          (r === n ||
                                            r.slice(0, n.length + 1) ===
                                              n + "-"));
                    };
                  },
                  CHILD: function (t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                      o = "last" !== t.slice(-4),
                      a = "of-type" === e;
                    return 1 === i && 0 === r
                      ? function (t) {
                          return !!t.parentNode;
                        }
                      : function (e, n, h) {
                          var l,
                            u,
                            c,
                            d,
                            f,
                            p,
                            g = s !== o ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !h && !a,
                            b = !1;
                          if (m) {
                            if (s) {
                              for (; g; ) {
                                for (d = e; (d = d[g]); )
                                  if (
                                    a
                                      ? d.nodeName.toLowerCase() === v
                                      : 1 === d.nodeType
                                  )
                                    return !1;
                                p = g = "only" === t && !p && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((p = [o ? m.firstChild : m.lastChild]), o && y)
                            ) {
                              for (
                                b =
                                  (f =
                                    (l =
                                      (u =
                                        (c = (d = m)[w] || (d[w] = {}))[
                                          d.uniqueID
                                        ] || (c[d.uniqueID] = {}))[t] ||
                                      [])[0] === _ && l[1]) && l[2],
                                  d = f && m.childNodes[f];
                                (d =
                                  (++f && d && d[g]) || (b = f = 0) || p.pop());
  
                              )
                                if (1 === d.nodeType && ++b && d === e) {
                                  u[t] = [_, f, b];
                                  break;
                                }
                            } else if (
                              (y &&
                                (b = f =
                                  (l =
                                    (u =
                                      (c = (d = e)[w] || (d[w] = {}))[
                                        d.uniqueID
                                      ] || (c[d.uniqueID] = {}))[t] || [])[0] ===
                                    _ && l[1]),
                              !1 === b)
                            )
                              for (
                                ;
                                (d =
                                  (++f && d && d[g]) || (b = f = 0) || p.pop()) &&
                                ((a
                                  ? d.nodeName.toLowerCase() !== v
                                  : 1 !== d.nodeType) ||
                                  !++b ||
                                  (y &&
                                    ((u =
                                      (c = d[w] || (d[w] = {}))[d.uniqueID] ||
                                      (c[d.uniqueID] = {}))[t] = [_, b]),
                                  d !== e));
  
                              );
                            return (b -= r) === i || (b % i == 0 && b / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (t, e) {
                    var n,
                      r =
                        i.pseudos[t] ||
                        i.setFilters[t.toLowerCase()] ||
                        at.error("unsupported pseudo: " + t);
                    return r[w]
                      ? r(e)
                      : r.length > 1
                        ? ((n = [t, t, "", e]),
                          i.setFilters.hasOwnProperty(t.toLowerCase())
                            ? lt(function (t, n) {
                                for (var i, s = r(t, e), o = s.length; o--; )
                                  t[(i = j(t, s[o]))] = !(n[i] = s[o]);
                              })
                            : function (t) {
                                return r(t, 0, n);
                              })
                        : r;
                  },
                },
                pseudos: {
                  not: lt(function (t) {
                    var e = [],
                      n = [],
                      i = a(t.replace(q, "$1"));
                    return i[w]
                      ? lt(function (t, e, n, r) {
                          for (var s, o = i(t, null, r, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s));
                        })
                      : function (t, r, s) {
                          return (
                            (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop()
                          );
                        };
                  }),
                  has: lt(function (t) {
                    return function (e) {
                      return at(t, e).length > 0;
                    };
                  }),
                  contains: lt(function (t) {
                    return (
                      (t = t.replace(et, nt)),
                      function (e) {
                        return (e.textContent || r(e)).indexOf(t) > -1;
                      }
                    );
                  }),
                  lang: lt(function (t) {
                    return (
                      X.test(t || "") || at.error("unsupported lang: " + t),
                      (t = t.replace(et, nt).toLowerCase()),
                      function (e) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? e.lang
                              : e.getAttribute("xml:lang") ||
                                e.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === t ||
                              0 === n.indexOf(t + "-")
                            );
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                  },
                  root: function (t) {
                    return t === p;
                  },
                  focus: function (t) {
                    return (
                      t === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(t.type || t.href || ~t.tabIndex)
                    );
                  },
                  enabled: gt(!1),
                  disabled: gt(!0),
                  checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && !!t.checked) ||
                      ("option" === e && !!t.selected)
                    );
                  },
                  selected: function (t) {
                    return (
                      t.parentNode && t.parentNode.selectedIndex,
                      !0 === t.selected
                    );
                  },
                  empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                      if (t.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (t) {
                    return !i.pseudos.empty(t);
                  },
                  header: function (t) {
                    return K.test(t.nodeName);
                  },
                  input: function (t) {
                    return G.test(t.nodeName);
                  },
                  button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return (
                      ("input" === e && "button" === t.type) || "button" === e
                    );
                  },
                  text: function (t) {
                    var e;
                    return (
                      "input" === t.nodeName.toLowerCase() &&
                      "text" === t.type &&
                      (null == (e = t.getAttribute("type")) ||
                        "text" === e.toLowerCase())
                    );
                  },
                  first: mt(function () {
                    return [0];
                  }),
                  last: mt(function (t, e) {
                    return [e - 1];
                  }),
                  eq: mt(function (t, e, n) {
                    return [n < 0 ? n + e : n];
                  }),
                  even: mt(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  odd: mt(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                  }),
                  lt: mt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                      t.push(i);
                    return t;
                  }),
                  gt: mt(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                  }),
                },
              }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[e] = ft(e);
            for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);
            function yt() {}
            function bt(t) {
              for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
              return i;
            }
            function wt(t, e, n) {
              var i = e.dir,
                r = e.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = E++;
              return e.first
                ? function (e, n, r) {
                    for (; (e = e[i]); )
                      if (1 === e.nodeType || o) return t(e, n, r);
                    return !1;
                  }
                : function (e, n, h) {
                    var l,
                      u,
                      c,
                      d = [_, a];
                    if (h) {
                      for (; (e = e[i]); )
                        if ((1 === e.nodeType || o) && t(e, n, h)) return !0;
                    } else
                      for (; (e = e[i]); )
                        if (1 === e.nodeType || o)
                          if (
                            ((u =
                              (c = e[w] || (e[w] = {}))[e.uniqueID] ||
                              (c[e.uniqueID] = {})),
                            r && r === e.nodeName.toLowerCase())
                          )
                            e = e[i] || e;
                          else {
                            if ((l = u[s]) && l[0] === _ && l[1] === a)
                              return (d[2] = l[2]);
                            if (((u[s] = d), (d[2] = t(e, n, h)))) return !0;
                          }
                    return !1;
                  };
            }
            function xt(t) {
              return t.length > 1
                ? function (e, n, i) {
                    for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                    return !0;
                  }
                : t[0];
            }
            function _t(t, e, n, i, r) {
              for (var s, o = [], a = 0, h = t.length, l = null != e; a < h; a++)
                (s = t[a]) && ((n && !n(s, i, r)) || (o.push(s), l && e.push(a)));
              return o;
            }
            function Et(t, e, n, i, r, s) {
              return (
                i && !i[w] && (i = Et(i)),
                r && !r[w] && (r = Et(r, s)),
                lt(function (s, o, a, h) {
                  var l,
                    u,
                    c,
                    d = [],
                    f = [],
                    p = o.length,
                    g =
                      s ||
                      (function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n;
                      })(e || "*", a.nodeType ? [a] : a, []),
                    m = !t || (!s && e) ? g : _t(g, d, t, a, h),
                    v = n ? (r || (s ? t : p || i) ? [] : o) : m;
                  if ((n && n(m, v, a, h), i))
                    for (l = _t(v, f), i(l, [], a, h), u = l.length; u--; )
                      (c = l[u]) && (v[f[u]] = !(m[f[u]] = c));
                  if (s) {
                    if (r || t) {
                      if (r) {
                        for (l = [], u = v.length; u--; )
                          (c = v[u]) && l.push((m[u] = c));
                        r(null, (v = []), l, h);
                      }
                      for (u = v.length; u--; )
                        (c = v[u]) &&
                          (l = r ? j(s, c) : d[u]) > -1 &&
                          (s[l] = !(o[l] = c));
                    }
                  } else
                    (v = _t(v === o ? v.splice(p, v.length) : v)),
                      r ? r(null, o, v, h) : D.apply(o, v);
                })
              );
            }
            function kt(t) {
              for (
                var e,
                  n,
                  r,
                  s = t.length,
                  o = i.relative[t[0].type],
                  a = o || i.relative[" "],
                  h = o ? 1 : 0,
                  u = wt(
                    function (t) {
                      return t === e;
                    },
                    a,
                    !0,
                  ),
                  c = wt(
                    function (t) {
                      return j(e, t) > -1;
                    },
                    a,
                    !0,
                  ),
                  d = [
                    function (t, n, i) {
                      var r =
                        (!o && (i || n !== l)) ||
                        ((e = n).nodeType ? u(t, n, i) : c(t, n, i));
                      return (e = null), r;
                    },
                  ];
                h < s;
                h++
              )
                if ((n = i.relative[t[h].type])) d = [wt(xt(d), n)];
                else {
                  if ((n = i.filter[t[h].type].apply(null, t[h].matches))[w]) {
                    for (r = ++h; r < s && !i.relative[t[r].type]; r++);
                    return Et(
                      h > 1 && xt(d),
                      h > 1 &&
                        bt(
                          t
                            .slice(0, h - 1)
                            .concat({ value: " " === t[h - 2].type ? "*" : "" }),
                        ).replace(q, "$1"),
                      n,
                      h < r && kt(t.slice(h, r)),
                      r < s && kt((t = t.slice(r))),
                      r < s && bt(t),
                    );
                  }
                  d.push(n);
                }
              return xt(d);
            }
            return (
              (yt.prototype = i.filters = i.pseudos),
              (i.setFilters = new yt()),
              (o = at.tokenize =
                function (t, e) {
                  var n,
                    r,
                    s,
                    o,
                    a,
                    h,
                    l,
                    u = S[t + " "];
                  if (u) return e ? 0 : u.slice(0);
                  for (a = t, h = [], l = i.preFilter; a; ) {
                    for (o in ((n && !(r = W.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), h.push((s = []))),
                    (n = !1),
                    (r = H.exec(a)) &&
                      ((n = r.shift()),
                      s.push({ value: n, type: r[0].replace(q, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Z[o].exec(a)) ||
                        (l[o] && !(r = l[o](r))) ||
                        ((n = r.shift()),
                        s.push({ value: n, type: o, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return e ? a.length : a ? at.error(t) : S(t, h).slice(0);
                }),
              (a = at.compile =
                function (t, e) {
                  var n,
                    r = [],
                    s = [],
                    a = C[t + " "];
                  if (!a) {
                    for (e || (e = o(t)), n = e.length; n--; )
                      (a = kt(e[n]))[w] ? r.push(a) : s.push(a);
                    (a = C(
                      t,
                      (function (t, e) {
                        var n = e.length > 0,
                          r = t.length > 0,
                          s = function (s, o, a, h, u) {
                            var c,
                              p,
                              m,
                              v = 0,
                              y = "0",
                              b = s && [],
                              w = [],
                              x = l,
                              E = s || (r && i.find.TAG("*", u)),
                              k = (_ += null == x ? 1 : Math.random() || 0.1),
                              S = E.length;
                            for (
                              u && (l = o == f || o || u);
                              y !== S && null != (c = E[y]);
                              y++
                            ) {
                              if (r && c) {
                                for (
                                  p = 0,
                                    o || c.ownerDocument == f || (d(c), (a = !g));
                                  (m = t[p++]);
  
                                )
                                  if (m(c, o || f, a)) {
                                    h.push(c);
                                    break;
                                  }
                                u && (_ = k);
                              }
                              n && ((c = !m && c) && v--, s && b.push(c));
                            }
                            if (((v += y), n && y !== v)) {
                              for (p = 0; (m = e[p++]); ) m(b, w, o, a);
                              if (s) {
                                if (v > 0)
                                  for (; y--; )
                                    b[y] || w[y] || (w[y] = I.call(h));
                                w = _t(w);
                              }
                              D.apply(h, w),
                                u &&
                                  !s &&
                                  w.length > 0 &&
                                  v + e.length > 1 &&
                                  at.uniqueSort(h);
                            }
                            return u && ((_ = k), (l = x)), b;
                          };
                        return n ? lt(s) : s;
                      })(s, r),
                    )).selector = t;
                  }
                  return a;
                }),
              (h = at.select =
                function (t, e, n, r) {
                  var s,
                    h,
                    l,
                    u,
                    c,
                    d = "function" == typeof t && t,
                    f = !r && o((t = d.selector || t));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (h = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (l = h[0]).type &&
                      9 === e.nodeType &&
                      g &&
                      i.relative[h[1].type]
                    ) {
                      if (
                        !(e = (i.find.ID(l.matches[0].replace(et, nt), e) ||
                          [])[0])
                      )
                        return n;
                      d && (e = e.parentNode),
                        (t = t.slice(h.shift().value.length));
                    }
                    for (
                      s = Z.needsContext.test(t) ? 0 : h.length;
                      s-- && ((l = h[s]), !i.relative[(u = l.type)]);
  
                    )
                      if (
                        (c = i.find[u]) &&
                        (r = c(
                          l.matches[0].replace(et, nt),
                          (tt.test(h[0].type) && vt(e.parentNode)) || e,
                        ))
                      ) {
                        if ((h.splice(s, 1), !(t = r.length && bt(h))))
                          return D.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (d || a(t, f))(
                      r,
                      e,
                      !g,
                      n,
                      !e || (tt.test(t) && vt(e.parentNode)) || e,
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(A).join("") === w),
              (n.detectDuplicates = !!c),
              d(),
              (n.sortDetached = ut(function (t) {
                return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
              })),
              ut(function (t) {
                return (
                  (t.innerHTML = "<a href='#'></a>"),
                  "#" === t.firstChild.getAttribute("href")
                );
              }) ||
                ct("type|href|height|width", function (t, e, n) {
                  if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }),
              (n.attributes &&
                ut(function (t) {
                  return (
                    (t.innerHTML = "<input/>"),
                    t.firstChild.setAttribute("value", ""),
                    "" === t.firstChild.getAttribute("value")
                  );
                })) ||
                ct("value", function (t, e, n) {
                  if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue;
                }),
              ut(function (t) {
                return null == t.getAttribute("disabled");
              }) ||
                ct(z, function (t, e, n) {
                  var i;
                  if (!n)
                    return !0 === t[e]
                      ? e.toLowerCase()
                      : (i = t.getAttributeNode(e)) && i.specified
                        ? i.value
                        : null;
                }),
              at
            );
          })(n);
        (E.find = S),
          (E.expr = S.selectors),
          (E.expr[":"] = E.expr.pseudos),
          (E.uniqueSort = E.unique = S.uniqueSort),
          (E.text = S.getText),
          (E.isXMLDoc = S.isXML),
          (E.contains = S.contains),
          (E.escapeSelector = S.escape);
        var C = function (t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
              if (1 === t.nodeType) {
                if (r && E(t).is(n)) break;
                i.push(t);
              }
            return i;
          },
          T = function (t, e) {
            for (var n = []; t; t = t.nextSibling)
              1 === t.nodeType && t !== e && n.push(t);
            return n;
          },
          A = E.expr.match.needsContext;
        function N(t, e) {
          return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        }
        var O = /^<([a-z][^\/\0>: \t\r\n\f]*)[ \t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function I(t, e, n) {
          return v(e)
            ? E.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n;
              })
            : e.nodeType
              ? E.grep(t, function (t) {
                  return (t === e) !== n;
                })
              : "string" != typeof e
                ? E.grep(t, function (t) {
                    return u.call(e, t) > -1 !== n;
                  })
                : E.filter(e, t, n);
        }
        (E.filter = function (t, e, n) {
          var i = e[0];
          return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
              ? E.find.matchesSelector(i, t)
                ? [i]
                : []
              : E.find.matches(
                  t,
                  E.grep(e, function (t) {
                    return 1 === t.nodeType;
                  }),
                )
          );
        }),
          E.fn.extend({
            find: function (t) {
              var e,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof t)
                return this.pushStack(
                  E(t).filter(function () {
                    for (e = 0; e < i; e++) if (E.contains(r[e], this)) return !0;
                  }),
                );
              for (n = this.pushStack([]), e = 0; e < i; e++) E.find(t, r[e], n);
              return i > 1 ? E.uniqueSort(n) : n;
            },
            filter: function (t) {
              return this.pushStack(I(this, t || [], !1));
            },
            not: function (t) {
              return this.pushStack(I(this, t || [], !0));
            },
            is: function (t) {
              return !!I(
                this,
                "string" == typeof t && A.test(t) ? E(t) : t || [],
                !1,
              ).length;
            },
          });
        var R,
          D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((E.fn.init = function (t, e, n) {
          var i, r;
          if (!t) return this;
          if (((n = n || R), "string" == typeof t)) {
            if (
              !(i =
                "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : D.exec(t)) ||
              (!i[1] && e)
            )
              return !e || e.jquery
                ? (e || n).find(t)
                : this.constructor(e).find(t);
            if (i[1]) {
              if (
                ((e = e instanceof E ? e[0] : e),
                E.merge(
                  this,
                  E.parseHTML(
                    i[1],
                    e && e.nodeType ? e.ownerDocument || e : b,
                    !0,
                  ),
                ),
                O.test(i[1]) && E.isPlainObject(e))
              )
                for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
              return this;
            }
            return (
              (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
              this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : v(t)
              ? void 0 !== n.ready
                ? n.ready(t)
                : t(E)
              : E.makeArray(t, this);
        }).prototype = E.fn),
          (R = E(b));
        var L = /^(?:parents|prev(?:Until|All))/,
          j = { children: !0, contents: !0, next: !0, prev: !0 };
        function z(t, e) {
          for (; (t = t[e]) && 1 !== t.nodeType; );
          return t;
        }
        E.fn.extend({
          has: function (t) {
            var e = E(t, this),
              n = e.length;
            return this.filter(function () {
              for (var t = 0; t < n; t++) if (E.contains(this, e[t])) return !0;
            });
          },
          closest: function (t, e) {
            var n,
              i = 0,
              r = this.length,
              s = [],
              o = "string" != typeof t && E(t);
            if (!A.test(t))
              for (; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (o
                      ? o.index(n) > -1
                      : 1 === n.nodeType && E.find.matchesSelector(n, t))
                  ) {
                    s.push(n);
                    break;
                  }
            return this.pushStack(s.length > 1 ? E.uniqueSort(s) : s);
          },
          index: function (t) {
            return t
              ? "string" == typeof t
                ? u.call(E(t), this[0])
                : u.call(this, t.jquery ? t[0] : t)
              : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
          },
          add: function (t, e) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))));
          },
          addBack: function (t) {
            return this.add(
              null == t ? this.prevObject : this.prevObject.filter(t),
            );
          },
        }),
          E.each(
            {
              parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
              },
              parents: function (t) {
                return C(t, "parentNode");
              },
              parentsUntil: function (t, e, n) {
                return C(t, "parentNode", n);
              },
              next: function (t) {
                return z(t, "nextSibling");
              },
              prev: function (t) {
                return z(t, "previousSibling");
              },
              nextAll: function (t) {
                return C(t, "nextSibling");
              },
              prevAll: function (t) {
                return C(t, "previousSibling");
              },
              nextUntil: function (t, e, n) {
                return C(t, "nextSibling", n);
              },
              prevUntil: function (t, e, n) {
                return C(t, "previousSibling", n);
              },
              siblings: function (t) {
                return T((t.parentNode || {}).firstChild, t);
              },
              children: function (t) {
                return T(t.firstChild);
              },
              contents: function (t) {
                return null != t.contentDocument && o(t.contentDocument)
                  ? t.contentDocument
                  : (N(t, "template") && (t = t.content || t),
                    E.merge([], t.childNodes));
              },
            },
            function (t, e) {
              E.fn[t] = function (n, i) {
                var r = E.map(this, e, n);
                return (
                  "Until" !== t.slice(-5) && (i = n),
                  i && "string" == typeof i && (r = E.filter(i, r)),
                  this.length > 1 &&
                    (j[t] || E.uniqueSort(r), L.test(t) && r.reverse()),
                  this.pushStack(r)
                );
              };
            },
          );
        var P = /[^ \t\r\n\f]+/g;
        function B(t) {
          return t;
        }
        function M(t) {
          throw t;
        }
        function F(t, e, n, i) {
          var r;
          try {
            t && v((r = t.promise))
              ? r.call(t).done(e).fail(n)
              : t && v((r = t.then))
                ? r.call(t, e, n)
                : e.apply(void 0, [t].slice(i));
          } catch (t) {
            n.apply(void 0, [t]);
          }
        }
        (E.Callbacks = function (t) {
          t =
            "string" == typeof t
              ? (function (t) {
                  var e = {};
                  return (
                    E.each(t.match(P) || [], function (t, n) {
                      e[n] = !0;
                    }),
                    e
                  );
                })(t)
              : E.extend({}, t);
          var e,
            n,
            i,
            r,
            s = [],
            o = [],
            a = -1,
            h = function () {
              for (r = r || t.once, i = e = !0; o.length; a = -1)
                for (n = o.shift(); ++a < s.length; )
                  !1 === s[a].apply(n[0], n[1]) &&
                    t.stopOnFalse &&
                    ((a = s.length), (n = !1));
              t.memory || (n = !1), (e = !1), r && (s = n ? [] : "");
            },
            l = {
              add: function () {
                return (
                  s &&
                    (n && !e && ((a = s.length - 1), o.push(n)),
                    (function e(n) {
                      E.each(n, function (n, i) {
                        v(i)
                          ? (t.unique && l.has(i)) || s.push(i)
                          : i && i.length && "string" !== _(i) && e(i);
                      });
                    })(arguments),
                    n && !e && h()),
                  this
                );
              },
              remove: function () {
                return (
                  E.each(arguments, function (t, e) {
                    for (var n; (n = E.inArray(e, s, n)) > -1; )
                      s.splice(n, 1), n <= a && a--;
                  }),
                  this
                );
              },
              has: function (t) {
                return t ? E.inArray(t, s) > -1 : s.length > 0;
              },
              empty: function () {
                return s && (s = []), this;
              },
              disable: function () {
                return (r = o = []), (s = n = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (r = o = []), n || e || (s = n = ""), this;
              },
              locked: function () {
                return !!r;
              },
              fireWith: function (t, n) {
                return (
                  r ||
                    ((n = [t, (n = n || []).slice ? n.slice() : n]),
                    o.push(n),
                    e || h()),
                  this
                );
              },
              fire: function () {
                return l.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!i;
              },
            };
          return l;
        }),
          E.extend({
            Deferred: function (t) {
              var e = [
                  [
                    "notify",
                    "progress",
                    E.Callbacks("memory"),
                    E.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    E.Callbacks("once memory"),
                    E.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                i = "pending",
                r = {
                  state: function () {
                    return i;
                  },
                  always: function () {
                    return s.done(arguments).fail(arguments), this;
                  },
                  catch: function (t) {
                    return r.then(null, t);
                  },
                  pipe: function () {
                    var t = arguments;
                    return E.Deferred(function (n) {
                      E.each(e, function (e, i) {
                        var r = v(t[i[4]]) && t[i[4]];
                        s[i[1]](function () {
                          var t = r && r.apply(this, arguments);
                          t && v(t.promise)
                            ? t
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, r ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    }).promise();
                  },
                  then: function (t, i, r) {
                    var s = 0;
                    function o(t, e, i, r) {
                      return function () {
                        var a = this,
                          h = arguments,
                          l = function () {
                            var n, l;
                            if (!(t < s)) {
                              if ((n = i.apply(a, h)) === e.promise())
                                throw new TypeError("Thenable self-resolution");
                              (l =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                v(l)
                                  ? r
                                    ? l.call(n, o(s, e, B, r), o(s, e, M, r))
                                    : (s++,
                                      l.call(
                                        n,
                                        o(s, e, B, r),
                                        o(s, e, M, r),
                                        o(s, e, B, e.notifyWith),
                                      ))
                                  : (i !== B && ((a = void 0), (h = [n])),
                                    (r || e.resolveWith)(a, h));
                            }
                          },
                          u = r
                            ? l
                            : function () {
                                try {
                                  l();
                                } catch (n) {
                                  E.Deferred.exceptionHook &&
                                    E.Deferred.exceptionHook(n, u.stackTrace),
                                    t + 1 >= s &&
                                      (i !== M && ((a = void 0), (h = [n])),
                                      e.rejectWith(a, h));
                                }
                              };
                        t
                          ? u()
                          : (E.Deferred.getStackHook &&
                              (u.stackTrace = E.Deferred.getStackHook()),
                            n.setTimeout(u));
                      };
                    }
                    return E.Deferred(function (n) {
                      e[0][3].add(o(0, n, v(r) ? r : B, n.notifyWith)),
                        e[1][3].add(o(0, n, v(t) ? t : B)),
                        e[2][3].add(o(0, n, v(i) ? i : M));
                    }).promise();
                  },
                  promise: function (t) {
                    return null != t ? E.extend(t, r) : r;
                  },
                },
                s = {};
              return (
                E.each(e, function (t, n) {
                  var o = n[2],
                    a = n[5];
                  (r[n[1]] = o.add),
                    a &&
                      o.add(
                        function () {
                          i = a;
                        },
                        e[3 - t][2].disable,
                        e[3 - t][3].disable,
                        e[0][2].lock,
                        e[0][3].lock,
                      ),
                    o.add(n[3].fire),
                    (s[n[0]] = function () {
                      return (
                        s[n[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (s[n[0] + "With"] = o.fireWith);
                }),
                r.promise(s),
                t && t.call(s, s),
                s
              );
            },
            when: function (t) {
              var e = arguments.length,
                n = e,
                i = Array(n),
                r = a.call(arguments),
                s = E.Deferred(),
                o = function (t) {
                  return function (n) {
                    (i[t] = this),
                      (r[t] = arguments.length > 1 ? a.call(arguments) : n),
                      --e || s.resolveWith(i, r);
                  };
                };
              if (
                e <= 1 &&
                (F(t, s.done(o(n)).resolve, s.reject, !e),
                "pending" === s.state() || v(r[n] && r[n].then))
              )
                return s.then();
              for (; n--; ) F(r[n], o(n), s.reject);
              return s.promise();
            },
          });
        var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (E.Deferred.exceptionHook = function (t, e) {
          n.console &&
            n.console.warn &&
            t &&
            U.test(t.name) &&
            n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
        }),
          (E.readyException = function (t) {
            n.setTimeout(function () {
              throw t;
            });
          });
        var q = E.Deferred();
        function W() {
          b.removeEventListener("DOMContentLoaded", W),
            n.removeEventListener("load", W),
            E.ready();
        }
        (E.fn.ready = function (t) {
          return (
            q.then(t).catch(function (t) {
              E.readyException(t);
            }),
            this
          );
        }),
          E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
              (!0 === t ? --E.readyWait : E.isReady) ||
                ((E.isReady = !0),
                (!0 !== t && --E.readyWait > 0) || q.resolveWith(b, [E]));
            },
          }),
          (E.ready.then = q.then),
          "complete" === b.readyState ||
          ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? n.setTimeout(E.ready)
            : (b.addEventListener("DOMContentLoaded", W),
              n.addEventListener("load", W));
        var H = function (t, e, n, i, r, s, o) {
            var a = 0,
              h = t.length,
              l = null == n;
            if ("object" === _(n))
              for (a in ((r = !0), n)) H(t, e, a, n[a], !0, s, o);
            else if (
              void 0 !== i &&
              ((r = !0),
              v(i) || (o = !0),
              l &&
                (o
                  ? (e.call(t, i), (e = null))
                  : ((l = e),
                    (e = function (t, e, n) {
                      return l.call(E(t), n);
                    }))),
              e)
            )
              for (; a < h; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : l ? e.call(t) : h ? e(t[0], n) : s;
          },
          V = /^-ms-/,
          Y = /-([a-z])/g;
        function X(t, e) {
          return e.toUpperCase();
        }
        function Z(t) {
          return t.replace(V, "ms-").replace(Y, X);
        }
        var $ = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
        function G() {
          this.expando = E.expando + G.uid++;
        }
        (G.uid = 1),
          (G.prototype = {
            cache: function (t) {
              var e = t[this.expando];
              return (
                e ||
                  ((e = {}),
                  $(t) &&
                    (t.nodeType
                      ? (t[this.expando] = e)
                      : Object.defineProperty(t, this.expando, {
                          value: e,
                          configurable: !0,
                        }))),
                e
              );
            },
            set: function (t, e, n) {
              var i,
                r = this.cache(t);
              if ("string" == typeof e) r[Z(e)] = n;
              else for (i in e) r[Z(i)] = e[i];
              return r;
            },
            get: function (t, e) {
              return void 0 === e
                ? this.cache(t)
                : t[this.expando] && t[this.expando][Z(e)];
            },
            access: function (t, e, n) {
              return void 0 === e || (e && "string" == typeof e && void 0 === n)
                ? this.get(t, e)
                : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
              var n,
                i = t[this.expando];
              if (void 0 !== i) {
                if (void 0 !== e) {
                  n = (e = Array.isArray(e)
                    ? e.map(Z)
                    : (e = Z(e)) in i
                      ? [e]
                      : e.match(P) || []).length;
                  for (; n--; ) delete i[e[n]];
                }
                (void 0 === e || E.isEmptyObject(i)) &&
                  (t.nodeType
                    ? (t[this.expando] = void 0)
                    : delete t[this.expando]);
              }
            },
            hasData: function (t) {
              var e = t[this.expando];
              return void 0 !== e && !E.isEmptyObject(e);
            },
          });
        var K = new G(),
          J = new G(),
          Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          tt = /[A-Z]/g;
        function et(t, e, n) {
          var i;
          if (void 0 === n && 1 === t.nodeType)
            if (
              ((i = "data-" + e.replace(tt, "-$&").toLowerCase()),
              "string" == typeof (n = t.getAttribute(i)))
            ) {
              try {
                n = (function (t) {
                  return (
                    "true" === t ||
                    ("false" !== t &&
                      ("null" === t
                        ? null
                        : t === +t + ""
                          ? +t
                          : Q.test(t)
                            ? JSON.parse(t)
                            : t))
                  );
                })(n);
              } catch (t) {}
              J.set(t, e, n);
            } else n = void 0;
          return n;
        }
        E.extend({
          hasData: function (t) {
            return J.hasData(t) || K.hasData(t);
          },
          data: function (t, e, n) {
            return J.access(t, e, n);
          },
          removeData: function (t, e) {
            J.remove(t, e);
          },
          _data: function (t, e, n) {
            return K.access(t, e, n);
          },
          _removeData: function (t, e) {
            K.remove(t, e);
          },
        }),
          E.fn.extend({
            data: function (t, e) {
              var n,
                i,
                r,
                s = this[0],
                o = s && s.attributes;
              if (void 0 === t) {
                if (
                  this.length &&
                  ((r = J.get(s)), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))
                ) {
                  for (n = o.length; n--; )
                    o[n] &&
                      0 === (i = o[n].name).indexOf("data-") &&
                      ((i = Z(i.slice(5))), et(s, i, r[i]));
                  K.set(s, "hasDataAttrs", !0);
                }
                return r;
              }
              return "object" == typeof t
                ? this.each(function () {
                    J.set(this, t);
                  })
                : H(
                    this,
                    function (e) {
                      var n;
                      if (s && void 0 === e)
                        return void 0 !== (n = J.get(s, t)) ||
                          void 0 !== (n = et(s, t))
                          ? n
                          : void 0;
                      this.each(function () {
                        J.set(this, t, e);
                      });
                    },
                    null,
                    e,
                    arguments.length > 1,
                    null,
                    !0,
                  );
            },
            removeData: function (t) {
              return this.each(function () {
                J.remove(this, t);
              });
            },
          }),
          E.extend({
            queue: function (t, e, n) {
              var i;
              if (t)
                return (
                  (e = (e || "fx") + "queue"),
                  (i = K.get(t, e)),
                  n &&
                    (!i || Array.isArray(n)
                      ? (i = K.access(t, e, E.makeArray(n)))
                      : i.push(n)),
                  i || []
                );
            },
            dequeue: function (t, e) {
              e = e || "fx";
              var n = E.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = E._queueHooks(t, e);
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === e && n.unshift("inprogress"),
                  delete s.stop,
                  r.call(
                    t,
                    function () {
                      E.dequeue(t, e);
                    },
                    s,
                  )),
                !i && s && s.empty.fire();
            },
            _queueHooks: function (t, e) {
              var n = e + "queueHooks";
              return (
                K.get(t, n) ||
                K.access(t, n, {
                  empty: E.Callbacks("once memory").add(function () {
                    K.remove(t, [e + "queue", n]);
                  }),
                })
              );
            },
          }),
          E.fn.extend({
            queue: function (t, e) {
              var n = 2;
              return (
                "string" != typeof t && ((e = t), (t = "fx"), n--),
                arguments.length < n
                  ? E.queue(this[0], t)
                  : void 0 === e
                    ? this
                    : this.each(function () {
                        var n = E.queue(this, t, e);
                        E._queueHooks(this, t),
                          "fx" === t &&
                            "inprogress" !== n[0] &&
                            E.dequeue(this, t);
                      })
              );
            },
            dequeue: function (t) {
              return this.each(function () {
                E.dequeue(this, t);
              });
            },
            clearQueue: function (t) {
              return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
              var n,
                i = 1,
                r = E.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                  --i || r.resolveWith(s, [s]);
                };
              for (
                "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
                o--;
  
              )
                (n = K.get(s[o], t + "queueHooks")) &&
                  n.empty &&
                  (i++, n.empty.add(a));
              return a(), r.promise(e);
            },
          });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
          rt = ["Top", "Right", "Bottom", "Left"],
          st = b.documentElement,
          ot = function (t) {
            return E.contains(t.ownerDocument, t);
          },
          at = { composed: !0 };
        st.getRootNode &&
          (ot = function (t) {
            return (
              E.contains(t.ownerDocument, t) ||
              t.getRootNode(at) === t.ownerDocument
            );
          });
        var ht = function (t, e) {
          return (
            "none" === (t = e || t).style.display ||
            ("" === t.style.display && ot(t) && "none" === E.css(t, "display"))
          );
        };
        function lt(t, e, n, i) {
          var r,
            s,
            o = 20,
            a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return E.css(t, e, "");
                },
            h = a(),
            l = (n && n[3]) || (E.cssNumber[e] ? "" : "px"),
            u =
              t.nodeType &&
              (E.cssNumber[e] || ("px" !== l && +h)) &&
              it.exec(E.css(t, e));
          if (u && u[3] !== l) {
            for (h /= 2, l = l || u[3], u = +h || 1; o--; )
              E.style(t, e, u + l),
                (1 - s) * (1 - (s = a() / h || 0.5)) <= 0 && (o = 0),
                (u /= s);
            (u *= 2), E.style(t, e, u + l), (n = n || []);
          }
          return (
            n &&
              ((u = +u || +h || 0),
              (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = l), (i.start = u), (i.end = r))),
            r
          );
        }
        var ut = {};
        function ct(t) {
          var e,
            n = t.ownerDocument,
            i = t.nodeName,
            r = ut[i];
          return (
            r ||
            ((e = n.body.appendChild(n.createElement(i))),
            (r = E.css(e, "display")),
            e.parentNode.removeChild(e),
            "none" === r && (r = "block"),
            (ut[i] = r),
            r)
          );
        }
        function dt(t, e) {
          for (var n, i, r = [], s = 0, o = t.length; s < o; s++)
            (i = t[s]).style &&
              ((n = i.style.display),
              e
                ? ("none" === n &&
                    ((r[s] = K.get(i, "display") || null),
                    r[s] || (i.style.display = "")),
                  "" === i.style.display && ht(i) && (r[s] = ct(i)))
                : "none" !== n && ((r[s] = "none"), K.set(i, "display", n)));
          for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
          return t;
        }
        E.fn.extend({
          show: function () {
            return dt(this, !0);
          },
          hide: function () {
            return dt(this);
          },
          toggle: function (t) {
            return "boolean" == typeof t
              ? t
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ht(this) ? E(this).show() : E(this).hide();
                });
          },
        });
        var ft,
          pt,
          gt = /^(?:checkbox|radio)$/i,
          mt = /<([a-z][^\/\0> \t\r\n\f]*)/i,
          vt = /^$|^module$|\/(?:java|ecma)script/i;
        (ft = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (pt = b.createElement("input")).setAttribute("type", "radio"),
          pt.setAttribute("checked", "checked"),
          pt.setAttribute("name", "t"),
          ft.appendChild(pt),
          (m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ft.innerHTML = "<textarea>x</textarea>"),
          (m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
          (ft.innerHTML = "<option></option>"),
          (m.option = !!ft.lastChild);
        var yt = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function bt(t, e) {
          var n;
          return (
            (n =
              void 0 !== t.getElementsByTagName
                ? t.getElementsByTagName(e || "*")
                : void 0 !== t.querySelectorAll
                  ? t.querySelectorAll(e || "*")
                  : []),
            void 0 === e || (e && N(t, e)) ? E.merge([t], n) : n
          );
        }
        function wt(t, e) {
          for (var n = 0, i = t.length; n < i; n++)
            K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
        }
        (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
          (yt.th = yt.td),
          m.option ||
            (yt.optgroup = yt.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var xt = /<|&#?\w+;/;
        function _t(t, e, n, i, r) {
          for (
            var s,
              o,
              a,
              h,
              l,
              u,
              c = e.createDocumentFragment(),
              d = [],
              f = 0,
              p = t.length;
            f < p;
            f++
          )
            if ((s = t[f]) || 0 === s)
              if ("object" === _(s)) E.merge(d, s.nodeType ? [s] : s);
              else if (xt.test(s)) {
                for (
                  o = o || c.appendChild(e.createElement("div")),
                    a = (mt.exec(s) || ["", ""])[1].toLowerCase(),
                    h = yt[a] || yt._default,
                    o.innerHTML = h[1] + E.htmlPrefilter(s) + h[2],
                    u = h[0];
                  u--;
  
                )
                  o = o.lastChild;
                E.merge(d, o.childNodes), ((o = c.firstChild).textContent = "");
              } else d.push(e.createTextNode(s));
          for (c.textContent = "", f = 0; (s = d[f++]); )
            if (i && E.inArray(s, i) > -1) r && r.push(s);
            else if (
              ((l = ot(s)), (o = bt(c.appendChild(s), "script")), l && wt(o), n)
            )
              for (u = 0; (s = o[u++]); ) vt.test(s.type || "") && n.push(s);
          return c;
        }
        var Et = /^key/,
          kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          St = /^([^.]*)(?:\.(.+)|)/;
        function Ct() {
          return !0;
        }
        function Tt() {
          return !1;
        }
        function At(t, e) {
          return (
            (t ===
              (function () {
                try {
                  return b.activeElement;
                } catch (t) {}
              })()) ==
            ("focus" === e)
          );
        }
        function Nt(t, e, n, i, r, s) {
          var o, a;
          if ("object" == typeof e) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
              Nt(t, a, n, i, e[a], s);
            return t;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = i), (i = void 0))
                  : ((r = i), (i = n), (n = void 0))),
            !1 === r)
          )
            r = Tt;
          else if (!r) return t;
          return (
            1 === s &&
              ((o = r),
              ((r = function (t) {
                return E().off(t), o.apply(this, arguments);
              }).guid = o.guid || (o.guid = E.guid++))),
            t.each(function () {
              E.event.add(this, e, r, i, n);
            })
          );
        }
        function Ot(t, e, n) {
          n
            ? (K.set(t, e, !1),
              E.event.add(t, e, {
                namespace: !1,
                handler: function (t) {
                  var i,
                    r,
                    s = K.get(this, e);
                  if (1 & t.isTrigger && this[e]) {
                    if (s.length)
                      (E.event.special[e] || {}).delegateType &&
                        t.stopPropagation();
                    else if (
                      ((s = a.call(arguments)),
                      K.set(this, e, s),
                      (i = n(this, e)),
                      this[e](),
                      s !== (r = K.get(this, e)) || i
                        ? K.set(this, e, !1)
                        : (r = {}),
                      s !== r)
                    )
                      return (
                        t.stopImmediatePropagation(), t.preventDefault(), r.value
                      );
                  } else
                    s.length &&
                      (K.set(this, e, {
                        value: E.event.trigger(
                          E.extend(s[0], E.Event.prototype),
                          s.slice(1),
                          this,
                        ),
                      }),
                      t.stopImmediatePropagation());
                },
              }))
            : void 0 === K.get(t, e) && E.event.add(t, e, Ct);
        }
        (E.event = {
          global: {},
          add: function (t, e, n, i, r) {
            var s,
              o,
              a,
              h,
              l,
              u,
              c,
              d,
              f,
              p,
              g,
              m = K.get(t);
            if ($(t))
              for (
                n.handler && ((n = (s = n).handler), (r = s.selector)),
                  r && E.find.matchesSelector(st, r),
                  n.guid || (n.guid = E.guid++),
                  (h = m.events) || (h = m.events = Object.create(null)),
                  (o = m.handle) ||
                    (o = m.handle =
                      function (e) {
                        return void 0 !== E && E.event.triggered !== e.type
                          ? E.event.dispatch.apply(t, arguments)
                          : void 0;
                      }),
                  l = (e = (e || "").match(P) || [""]).length;
                l--;
  
              )
                (f = g = (a = St.exec(e[l]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  f &&
                    ((c = E.event.special[f] || {}),
                    (f = (r ? c.delegateType : c.bindType) || f),
                    (c = E.event.special[f] || {}),
                    (u = E.extend(
                      {
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && E.expr.match.needsContext.test(r),
                        namespace: p.join("."),
                      },
                      s,
                    )),
                    (d = h[f]) ||
                      (((d = h[f] = []).delegateCount = 0),
                      (c.setup && !1 !== c.setup.call(t, i, p, o)) ||
                        (t.addEventListener && t.addEventListener(f, o))),
                    c.add &&
                      (c.add.call(t, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    (E.event.global[f] = !0));
          },
          remove: function (t, e, n, i, r) {
            var s,
              o,
              a,
              h,
              l,
              u,
              c,
              d,
              f,
              p,
              g,
              m = K.hasData(t) && K.get(t);
            if (m && (h = m.events)) {
              for (l = (e = (e || "").match(P) || [""]).length; l--; )
                if (
                  ((f = g = (a = St.exec(e[l]) || [])[1]),
                  (p = (a[2] || "").split(".").sort()),
                  f)
                ) {
                  for (
                    c = E.event.special[f] || {},
                      d = h[(f = (i ? c.delegateType : c.bindType) || f)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)",
                        ),
                      o = s = d.length;
                    s--;
  
                  )
                    (u = d[s]),
                      (!r && g !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                        (d.splice(s, 1),
                        u.selector && d.delegateCount--,
                        c.remove && c.remove.call(t, u));
                  o &&
                    !d.length &&
                    ((c.teardown && !1 !== c.teardown.call(t, p, m.handle)) ||
                      E.removeEvent(t, f, m.handle),
                    delete h[f]);
                } else for (f in h) E.event.remove(t, f + e[l], n, i, !0);
              E.isEmptyObject(h) && K.remove(t, "handle events");
            }
          },
          dispatch: function (t) {
            var e,
              n,
              i,
              r,
              s,
              o,
              a = new Array(arguments.length),
              h = E.event.fix(t),
              l = (K.get(this, "events") || Object.create(null))[h.type] || [],
              u = E.event.special[h.type] || {};
            for (a[0] = h, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (
              ((h.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, h))
            ) {
              for (
                o = E.event.handlers.call(this, h, l), e = 0;
                (r = o[e++]) && !h.isPropagationStopped();
  
              )
                for (
                  h.currentTarget = r.elem, n = 0;
                  (s = r.handlers[n++]) && !h.isImmediatePropagationStopped();
  
                )
                  (h.rnamespace &&
                    !1 !== s.namespace &&
                    !h.rnamespace.test(s.namespace)) ||
                    ((h.handleObj = s),
                    (h.data = s.data),
                    void 0 !==
                      (i = (
                        (E.event.special[s.origType] || {}).handle || s.handler
                      ).apply(r.elem, a)) &&
                      !1 === (h.result = i) &&
                      (h.preventDefault(), h.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, h), h.result;
            }
          },
          handlers: function (t, e) {
            var n,
              i,
              r,
              s,
              o,
              a = [],
              h = e.delegateCount,
              l = t.target;
            if (h && l.nodeType && !("click" === t.type && t.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (
                  1 === l.nodeType &&
                  ("click" !== t.type || !0 !== l.disabled)
                ) {
                  for (s = [], o = {}, n = 0; n < h; n++)
                    void 0 === o[(r = (i = e[n]).selector + " ")] &&
                      (o[r] = i.needsContext
                        ? E(r, this).index(l) > -1
                        : E.find(r, this, null, [l]).length),
                      o[r] && s.push(i);
                  s.length && a.push({ elem: l, handlers: s });
                }
            return (
              (l = this),
              h < e.length && a.push({ elem: l, handlers: e.slice(h) }),
              a
            );
          },
          addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
              enumerable: !0,
              configurable: !0,
              get: v(e)
                ? function () {
                    if (this.originalEvent) return e(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[t];
                  },
              set: function (e) {
                Object.defineProperty(this, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          },
          fix: function (t) {
            return t[E.expando] ? t : new E.Event(t);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (t) {
                var e = this || t;
                return (
                  gt.test(e.type) &&
                    e.click &&
                    N(e, "input") &&
                    Ot(e, "click", Ct),
                  !1
                );
              },
              trigger: function (t) {
                var e = this || t;
                return (
                  gt.test(e.type) && e.click && N(e, "input") && Ot(e, "click"),
                  !0
                );
              },
              _default: function (t) {
                var e = t.target;
                return (
                  (gt.test(e.type) &&
                    e.click &&
                    N(e, "input") &&
                    K.get(e, "click")) ||
                  N(e, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (t) {
                void 0 !== t.result &&
                  t.originalEvent &&
                  (t.originalEvent.returnValue = t.result);
              },
            },
          },
        }),
          (E.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
          }),
          (E.Event = function (t, e) {
            if (!(this instanceof E.Event)) return new E.Event(t, e);
            t && t.type
              ? ((this.originalEvent = t),
                (this.type = t.type),
                (this.isDefaultPrevented =
                  t.defaultPrevented ||
                  (void 0 === t.defaultPrevented && !1 === t.returnValue)
                    ? Ct
                    : Tt),
                (this.target =
                  t.target && 3 === t.target.nodeType
                    ? t.target.parentNode
                    : t.target),
                (this.currentTarget = t.currentTarget),
                (this.relatedTarget = t.relatedTarget))
              : (this.type = t),
              e && E.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              (this[E.expando] = !0);
          }),
          (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Tt,
            isPropagationStopped: Tt,
            isImmediatePropagationStopped: Tt,
            isSimulated: !1,
            preventDefault: function () {
              var t = this.originalEvent;
              (this.isDefaultPrevented = Ct),
                t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
              var t = this.originalEvent;
              (this.isPropagationStopped = Ct),
                t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var t = this.originalEvent;
              (this.isImmediatePropagationStopped = Ct),
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          E.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (t) {
                var e = t.button;
                return null == t.which && Et.test(t.type)
                  ? null != t.charCode
                    ? t.charCode
                    : t.keyCode
                  : !t.which && void 0 !== e && kt.test(t.type)
                    ? 1 & e
                      ? 1
                      : 2 & e
                        ? 3
                        : 4 & e
                          ? 2
                          : 0
                    : t.which;
              },
            },
            E.event.addProp,
          ),
          E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            E.event.special[t] = {
              setup: function () {
                return Ot(this, t, At), !1;
              },
              trigger: function () {
                return Ot(this, t), !0;
              },
              delegateType: e,
            };
          }),
          E.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (t, e) {
              E.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                  var n,
                    i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                  return (
                    (r && (r === i || E.contains(i, r))) ||
                      ((t.type = s.origType),
                      (n = s.handler.apply(this, arguments)),
                      (t.type = e)),
                    n
                  );
                },
              };
            },
          ),
          E.fn.extend({
            on: function (t, e, n, i) {
              return Nt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
              return Nt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
              var i, r;
              if (t && t.preventDefault && t.handleObj)
                return (
                  (i = t.handleObj),
                  E(t.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler,
                  ),
                  this
                );
              if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this;
              }
              return (
                (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                !1 === n && (n = Tt),
                this.each(function () {
                  E.event.remove(this, t, n, e);
                })
              );
            },
          });
        var It = /<script|<style|<link/i,
          Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Lt(t, e) {
          return (
            (N(t, "table") &&
              N(11 !== e.nodeType ? e : e.firstChild, "tr") &&
              E(t).children("tbody")[0]) ||
            t
          );
        }
        function jt(t) {
          return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
        }
        function zt(t) {
          return (
            "true/" === (t.type || "").slice(0, 5)
              ? (t.type = t.type.slice(5))
              : t.removeAttribute("type"),
            t
          );
        }
        function Pt(t, e) {
          var n, i, r, s, o, a;
          if (1 === e.nodeType) {
            if (K.hasData(t) && (a = K.get(t).events))
              for (r in (K.remove(e, "handle events"), a))
                for (n = 0, i = a[r].length; n < i; n++)
                  E.event.add(e, r, a[r][n]);
            J.hasData(t) &&
              ((s = J.access(t)), (o = E.extend({}, s)), J.set(e, o));
          }
        }
        function Bt(t, e) {
          var n = e.nodeName.toLowerCase();
          "input" === n && gt.test(t.type)
            ? (e.checked = t.checked)
            : ("input" !== n && "textarea" !== n) ||
              (e.defaultValue = t.defaultValue);
        }
        function Mt(t, e, n, i) {
          e = h(e);
          var r,
            s,
            o,
            a,
            l,
            u,
            c = 0,
            d = t.length,
            f = d - 1,
            p = e[0],
            g = v(p);
          if (g || (d > 1 && "string" == typeof p && !m.checkClone && Rt.test(p)))
            return t.each(function (r) {
              var s = t.eq(r);
              g && (e[0] = p.call(this, r, s.html())), Mt(s, e, n, i);
            });
          if (
            d &&
            ((s = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild),
            1 === r.childNodes.length && (r = s),
            s || i)
          ) {
            for (a = (o = E.map(bt(r, "script"), jt)).length; c < d; c++)
              (l = r),
                c !== f &&
                  ((l = E.clone(l, !0, !0)), a && E.merge(o, bt(l, "script"))),
                n.call(t[c], l, c);
            if (a)
              for (
                u = o[o.length - 1].ownerDocument, E.map(o, zt), c = 0;
                c < a;
                c++
              )
                (l = o[c]),
                  vt.test(l.type || "") &&
                    !K.access(l, "globalEval") &&
                    E.contains(u, l) &&
                    (l.src && "module" !== (l.type || "").toLowerCase()
                      ? E._evalUrl &&
                        !l.noModule &&
                        E._evalUrl(
                          l.src,
                          { nonce: l.nonce || l.getAttribute("nonce") },
                          u,
                        )
                      : x(l.textContent.replace(Dt, ""), l, u));
          }
          return t;
        }
        function Ft(t, e, n) {
          for (var i, r = e ? E.filter(e, t) : t, s = 0; null != (i = r[s]); s++)
            n || 1 !== i.nodeType || E.cleanData(bt(i)),
              i.parentNode &&
                (n && ot(i) && wt(bt(i, "script")), i.parentNode.removeChild(i));
          return t;
        }
        E.extend({
          htmlPrefilter: function (t) {
            return t;
          },
          clone: function (t, e, n) {
            var i,
              r,
              s,
              o,
              a = t.cloneNode(!0),
              h = ot(t);
            if (
              !(
                m.noCloneChecked ||
                (1 !== t.nodeType && 11 !== t.nodeType) ||
                E.isXMLDoc(t)
              )
            )
              for (o = bt(a), i = 0, r = (s = bt(t)).length; i < r; i++)
                Bt(s[i], o[i]);
            if (e)
              if (n)
                for (
                  s = s || bt(t), o = o || bt(a), i = 0, r = s.length;
                  i < r;
                  i++
                )
                  Pt(s[i], o[i]);
              else Pt(t, a);
            return (
              (o = bt(a, "script")).length > 0 && wt(o, !h && bt(t, "script")), a
            );
          },
          cleanData: function (t) {
            for (
              var e, n, i, r = E.event.special, s = 0;
              void 0 !== (n = t[s]);
              s++
            )
              if ($(n)) {
                if ((e = n[K.expando])) {
                  if (e.events)
                    for (i in e.events)
                      r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, e.handle);
                  n[K.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
              }
          },
        }),
          E.fn.extend({
            detach: function (t) {
              return Ft(this, t, !0);
            },
            remove: function (t) {
              return Ft(this, t);
            },
            text: function (t) {
              return H(
                this,
                function (t) {
                  return void 0 === t
                    ? E.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = t);
                      });
                },
                null,
                t,
                arguments.length,
              );
            },
            append: function () {
              return Mt(this, arguments, function (t) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  Lt(this, t).appendChild(t);
              });
            },
            prepend: function () {
              return Mt(this, arguments, function (t) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var e = Lt(this, t);
                  e.insertBefore(t, e.firstChild);
                }
              });
            },
            before: function () {
              return Mt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
              });
            },
            after: function () {
              return Mt(this, arguments, function (t) {
                this.parentNode &&
                  this.parentNode.insertBefore(t, this.nextSibling);
              });
            },
            empty: function () {
              for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType &&
                  (E.cleanData(bt(t, !1)), (t.textContent = ""));
              return this;
            },
            clone: function (t, e) {
              return (
                (t = null != t && t),
                (e = null == e ? t : e),
                this.map(function () {
                  return E.clone(this, t, e);
                })
              );
            },
            html: function (t) {
              return H(
                this,
                function (t) {
                  var e = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                  if (
                    "string" == typeof t &&
                    !It.test(t) &&
                    !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]
                  ) {
                    t = E.htmlPrefilter(t);
                    try {
                      for (; n < i; n++)
                        1 === (e = this[n] || {}).nodeType &&
                          (E.cleanData(bt(e, !1)), (e.innerHTML = t));
                      e = 0;
                    } catch (t) {}
                  }
                  e && this.empty().append(t);
                },
                null,
                t,
                arguments.length,
              );
            },
            replaceWith: function () {
              var t = [];
              return Mt(
                this,
                arguments,
                function (e) {
                  var n = this.parentNode;
                  E.inArray(this, t) < 0 &&
                    (E.cleanData(bt(this)), n && n.replaceChild(e, this));
                },
                t,
              );
            },
          }),
          E.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (t, e) {
              E.fn[t] = function (t) {
                for (
                  var n, i = [], r = E(t), s = r.length - 1, o = 0;
                  o <= s;
                  o++
                )
                  (n = o === s ? this : this.clone(!0)),
                    E(r[o])[e](n),
                    l.apply(i, n.get());
                return this.pushStack(i);
              };
            },
          );
        var Ut = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
          qt = function (t) {
            var e = t.ownerDocument.defaultView;
            return (e && e.opener) || (e = n), e.getComputedStyle(t);
          },
          Wt = function (t, e, n) {
            var i,
              r,
              s = {};
            for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
            for (r in ((i = n.call(t)), e)) t.style[r] = s[r];
            return i;
          },
          Ht = new RegExp(rt.join("|"), "i");
        function Vt(t, e, n) {
          var i,
            r,
            s,
            o,
            a = t.style;
          return (
            (n = n || qt(t)) &&
              ("" !== (o = n.getPropertyValue(e) || n[e]) ||
                ot(t) ||
                (o = E.style(t, e)),
              !m.pixelBoxStyles() &&
                Ut.test(o) &&
                Ht.test(e) &&
                ((i = a.width),
                (r = a.minWidth),
                (s = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = o),
                (o = n.width),
                (a.width = i),
                (a.minWidth = r),
                (a.maxWidth = s))),
            void 0 !== o ? o + "" : o
          );
        }
        function Yt(t, e) {
          return {
            get: function () {
              if (!t()) return (this.get = e).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function t() {
            if (u) {
              (l.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (u.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                st.appendChild(l).appendChild(u);
              var t = n.getComputedStyle(u);
              (i = "1%" !== t.top),
                (h = 12 === e(t.marginLeft)),
                (u.style.right = "60%"),
                (o = 36 === e(t.right)),
                (r = 36 === e(t.width)),
                (u.style.position = "absolute"),
                (s = 12 === e(u.offsetWidth / 3)),
                st.removeChild(l),
                (u = null);
            }
          }
          function e(t) {
            return Math.round(parseFloat(t));
          }
          var i,
            r,
            s,
            o,
            a,
            h,
            l = b.createElement("div"),
            u = b.createElement("div");
          u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
            E.extend(m, {
              boxSizingReliable: function () {
                return t(), r;
              },
              pixelBoxStyles: function () {
                return t(), o;
              },
              pixelPosition: function () {
                return t(), i;
              },
              reliableMarginLeft: function () {
                return t(), h;
              },
              scrollboxSize: function () {
                return t(), s;
              },
              reliableTrDimensions: function () {
                var t, e, i, r;
                return (
                  null == a &&
                    ((t = b.createElement("table")),
                    (e = b.createElement("tr")),
                    (i = b.createElement("div")),
                    (t.style.cssText = "position:absolute;left:-11111px"),
                    (e.style.height = "1px"),
                    (i.style.height = "9px"),
                    st.appendChild(t).appendChild(e).appendChild(i),
                    (r = n.getComputedStyle(e)),
                    (a = parseInt(r.height) > 3),
                    st.removeChild(t)),
                  a
                );
              },
            }));
        })();
        var Xt = ["Webkit", "Moz", "ms"],
          Zt = b.createElement("div").style,
          $t = {};
        function Gt(t) {
          var e = E.cssProps[t] || $t[t];
          return (
            e ||
            (t in Zt
              ? t
              : ($t[t] =
                  (function (t) {
                    for (
                      var e = t[0].toUpperCase() + t.slice(1), n = Xt.length;
                      n--;
  
                    )
                      if ((t = Xt[n] + e) in Zt) return t;
                  })(t) || t))
          );
        }
        var Kt = /^(none|table(?!-c[ea]).+)/,
          Jt = /^--/,
          Qt = { position: "absolute", visibility: "hidden", display: "block" },
          te = { letterSpacing: "0", fontWeight: "400" };
        function ee(t, e, n) {
          var i = it.exec(e);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
        }
        function ne(t, e, n, i, r, s) {
          var o = "width" === e ? 1 : 0,
            a = 0,
            h = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; o < 4; o += 2)
            "margin" === n && (h += E.css(t, n + rt[o], !0, r)),
              i
                ? ("content" === n && (h -= E.css(t, "padding" + rt[o], !0, r)),
                  "margin" !== n &&
                    (h -= E.css(t, "border" + rt[o] + "Width", !0, r)))
                : ((h += E.css(t, "padding" + rt[o], !0, r)),
                  "padding" !== n
                    ? (h += E.css(t, "border" + rt[o] + "Width", !0, r))
                    : (a += E.css(t, "border" + rt[o] + "Width", !0, r)));
          return (
            !i &&
              s >= 0 &&
              (h +=
                Math.max(
                  0,
                  Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      s -
                      h -
                      a -
                      0.5,
                  ),
                ) || 0),
            h
          );
        }
        function ie(t, e, n) {
          var i = qt(t),
            r =
              (!m.boxSizingReliable() || n) &&
              "border-box" === E.css(t, "boxSizing", !1, i),
            s = r,
            o = Vt(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
          if (Ut.test(o)) {
            if (!n) return o;
            o = "auto";
          }
          return (
            ((!m.boxSizingReliable() && r) ||
              (!m.reliableTrDimensions() && N(t, "tr")) ||
              "auto" === o ||
              (!parseFloat(o) && "inline" === E.css(t, "display", !1, i))) &&
              t.getClientRects().length &&
              ((r = "border-box" === E.css(t, "boxSizing", !1, i)),
              (s = a in t) && (o = t[a])),
            (o = parseFloat(o) || 0) +
              ne(t, e, n || (r ? "border" : "content"), s, i, o) +
              "px"
          );
        }
        function re(t, e, n, i, r) {
          return new re.prototype.init(t, e, n, i, r);
        }
        E.extend({
          cssHooks: {
            opacity: {
              get: function (t, e) {
                if (e) {
                  var n = Vt(t, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
              var r,
                s,
                o,
                a = Z(e),
                h = Jt.test(e),
                l = t.style;
              if (
                (h || (e = Gt(a)),
                (o = E.cssHooks[e] || E.cssHooks[a]),
                void 0 === n)
              )
                return o && "get" in o && void 0 !== (r = o.get(t, !1, i))
                  ? r
                  : l[e];
              "string" === (s = typeof n) &&
                (r = it.exec(n)) &&
                r[1] &&
                ((n = lt(t, e, r)), (s = "number")),
                null != n &&
                  n == n &&
                  ("number" !== s ||
                    h ||
                    (n += (r && r[3]) || (E.cssNumber[a] ? "" : "px")),
                  m.clearCloneStyle ||
                    "" !== n ||
                    0 !== e.indexOf("background") ||
                    (l[e] = "inherit"),
                  (o && "set" in o && void 0 === (n = o.set(t, n, i))) ||
                    (h ? l.setProperty(e, n) : (l[e] = n)));
            }
          },
          css: function (t, e, n, i) {
            var r,
              s,
              o,
              a = Z(e);
            return (
              Jt.test(e) || (e = Gt(a)),
              (o = E.cssHooks[e] || E.cssHooks[a]) &&
                "get" in o &&
                (r = o.get(t, !0, n)),
              void 0 === r && (r = Vt(t, e, i)),
              "normal" === r && e in te && (r = te[e]),
              "" === n || n
                ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                : r
            );
          },
        }),
          E.each(["height", "width"], function (t, e) {
            E.cssHooks[e] = {
              get: function (t, n, i) {
                if (n)
                  return !Kt.test(E.css(t, "display")) ||
                    (t.getClientRects().length && t.getBoundingClientRect().width)
                    ? ie(t, e, i)
                    : Wt(t, Qt, function () {
                        return ie(t, e, i);
                      });
              },
              set: function (t, n, i) {
                var r,
                  s = qt(t),
                  o = !m.scrollboxSize() && "absolute" === s.position,
                  a = (o || i) && "border-box" === E.css(t, "boxSizing", !1, s),
                  h = i ? ne(t, e, i, a, s) : 0;
                return (
                  a &&
                    o &&
                    (h -= Math.ceil(
                      t["offset" + e[0].toUpperCase() + e.slice(1)] -
                        parseFloat(s[e]) -
                        ne(t, e, "border", !1, s) -
                        0.5,
                    )),
                  h &&
                    (r = it.exec(n)) &&
                    "px" !== (r[3] || "px") &&
                    ((t.style[e] = n), (n = E.css(t, e))),
                  ee(0, n, h)
                );
              },
            };
          }),
          (E.cssHooks.marginLeft = Yt(m.reliableMarginLeft, function (t, e) {
            if (e)
              return (
                (parseFloat(Vt(t, "marginLeft")) ||
                  t.getBoundingClientRect().left -
                    Wt(t, { marginLeft: 0 }, function () {
                      return t.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          E.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (E.cssHooks[t + e] = {
              expand: function (n) {
                for (
                  var i = 0,
                    r = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  r[t + rt[i] + e] = s[i] || s[i - 2] || s[0];
                return r;
              },
            }),
              "margin" !== t && (E.cssHooks[t + e].set = ee);
          }),
          E.fn.extend({
            css: function (t, e) {
              return H(
                this,
                function (t, e, n) {
                  var i,
                    r,
                    s = {},
                    o = 0;
                  if (Array.isArray(e)) {
                    for (i = qt(t), r = e.length; o < r; o++)
                      s[e[o]] = E.css(t, e[o], !1, i);
                    return s;
                  }
                  return void 0 !== n ? E.style(t, e, n) : E.css(t, e);
                },
                t,
                e,
                arguments.length > 1,
              );
            },
          }),
          (E.Tween = re),
          (re.prototype = {
            constructor: re,
            init: function (t, e, n, i, r, s) {
              (this.elem = t),
                (this.prop = n),
                (this.easing = r || E.easing._default),
                (this.options = e),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = s || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var t = re.propHooks[this.prop];
              return t && t.get ? t.get(this) : re.propHooks._default.get(this);
            },
            run: function (t) {
              var e,
                n = re.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = e =
                      E.easing[this.easing](
                        t,
                        this.options.duration * t,
                        0,
                        1,
                        this.options.duration,
                      ))
                  : (this.pos = e = t),
                (this.now = (this.end - this.start) * e + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : re.propHooks._default.set(this),
                this
              );
            },
          }),
          (re.prototype.init.prototype = re.prototype),
          (re.propHooks = {
            _default: {
              get: function (t) {
                var e;
                return 1 !== t.elem.nodeType ||
                  (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                  ? t.elem[t.prop]
                  : (e = E.css(t.elem, t.prop, "")) && "auto" !== e
                    ? e
                    : 0;
              },
              set: function (t) {
                E.fx.step[t.prop]
                  ? E.fx.step[t.prop](t)
                  : 1 !== t.elem.nodeType ||
                      (!E.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)])
                    ? (t.elem[t.prop] = t.now)
                    : E.style(t.elem, t.prop, t.now + t.unit);
              },
            },
          }),
          (re.propHooks.scrollTop = re.propHooks.scrollLeft =
            {
              set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
              },
            }),
          (E.easing = {
            linear: function (t) {
              return t;
            },
            swing: function (t) {
              return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (E.fx = re.prototype.init),
          (E.fx.step = {});
        var se,
          oe,
          ae = /^(?:toggle|show|hide)$/,
          he = /queueHooks$/;
        function le() {
          oe &&
            (!1 === b.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(le)
              : n.setTimeout(le, E.fx.interval),
            E.fx.tick());
        }
        function ue() {
          return (
            n.setTimeout(function () {
              se = void 0;
            }),
            (se = Date.now())
          );
        }
        function ce(t, e) {
          var n,
            i = 0,
            r = { height: t };
          for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = rt[i])] = r["padding" + n] = t;
          return e && (r.opacity = r.width = t), r;
        }
        function de(t, e, n) {
          for (
            var i,
              r = (fe.tweeners[e] || []).concat(fe.tweeners["*"]),
              s = 0,
              o = r.length;
            s < o;
            s++
          )
            if ((i = r[s].call(n, e, t))) return i;
        }
        function fe(t, e, n) {
          var i,
            r,
            s = 0,
            o = fe.prefilters.length,
            a = E.Deferred().always(function () {
              delete h.elem;
            }),
            h = function () {
              if (r) return !1;
              for (
                var e = se || ue(),
                  n = Math.max(0, l.startTime + l.duration - e),
                  i = 1 - (n / l.duration || 0),
                  s = 0,
                  o = l.tweens.length;
                s < o;
                s++
              )
                l.tweens[s].run(i);
              return (
                a.notifyWith(t, [l, i, n]),
                i < 1 && o
                  ? n
                  : (o || a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l]), !1)
              );
            },
            l = a.promise({
              elem: t,
              props: E.extend({}, e),
              opts: E.extend(
                !0,
                { specialEasing: {}, easing: E.easing._default },
                n,
              ),
              originalProperties: e,
              originalOptions: n,
              startTime: se || ue(),
              duration: n.duration,
              tweens: [],
              createTween: function (e, n) {
                var i = E.Tween(
                  t,
                  l.opts,
                  e,
                  n,
                  l.opts.specialEasing[e] || l.opts.easing,
                );
                return l.tweens.push(i), i;
              },
              stop: function (e) {
                var n = 0,
                  i = e ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) l.tweens[n].run(1);
                return (
                  e
                    ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e]))
                    : a.rejectWith(t, [l, e]),
                  this
                );
              },
            }),
            u = l.props;
          for (
            !(function (t, e) {
              var n, i, r, s, o;
              for (n in t)
                if (
                  ((r = e[(i = Z(n))]),
                  (s = t[n]),
                  Array.isArray(s) && ((r = s[1]), (s = t[n] = s[0])),
                  n !== i && ((t[i] = s), delete t[n]),
                  (o = E.cssHooks[i]) && ("expand" in o))
                )
                  for (n in ((s = o.expand(s)), delete t[i], s))
                    (n in t) || ((t[n] = s[n]), (e[n] = r));
                else e[i] = r;
            })(u, l.opts.specialEasing);
            s < o;
            s++
          )
            if ((i = fe.prefilters[s].call(l, t, u, l.opts)))
              return (
                v(i.stop) &&
                  (E._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)),
                i
              );
          return (
            E.map(u, de, l),
            v(l.opts.start) && l.opts.start.call(t, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            E.fx.timer(E.extend(h, { elem: t, anim: l, queue: l.opts.queue })),
            l
          );
        }
        (E.Animation = E.extend(fe, {
          tweeners: {
            "*": [
              function (t, e) {
                var n = this.createTween(t, e);
                return lt(n.elem, t, it.exec(e), n), n;
              },
            ],
          },
          tweener: function (t, e) {
            v(t) ? ((e = t), (t = ["*"])) : (t = t.match(P));
            for (var n, i = 0, r = t.length; i < r; i++)
              (n = t[i]),
                (fe.tweeners[n] = fe.tweeners[n] || []),
                fe.tweeners[n].unshift(e);
          },
          prefilters: [
            function (t, e, n) {
              var i,
                r,
                s,
                o,
                a,
                h,
                l,
                u,
                c = "width" in e || "height" in e,
                d = this,
                f = {},
                p = t.style,
                g = t.nodeType && ht(t),
                m = K.get(t, "fxshow");
              for (i in (n.queue ||
                (null == (o = E._queueHooks(t, "fx")).unqueued &&
                  ((o.unqueued = 0),
                  (a = o.empty.fire),
                  (o.empty.fire = function () {
                    o.unqueued || a();
                  })),
                o.unqueued++,
                d.always(function () {
                  d.always(function () {
                    o.unqueued--, E.queue(t, "fx").length || o.empty.fire();
                  });
                })),
              e))
                if (((r = e[i]), ae.test(r))) {
                  if (
                    (delete e[i],
                    (s = s || "toggle" === r),
                    r === (g ? "hide" : "show"))
                  ) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0;
                  }
                  f[i] = (m && m[i]) || E.style(t, i);
                }
              if ((h = !E.isEmptyObject(e)) || !E.isEmptyObject(f))
                for (i in (c &&
                  1 === t.nodeType &&
                  ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                  null == (l = m && m.display) && (l = K.get(t, "display")),
                  "none" === (u = E.css(t, "display")) &&
                    (l
                      ? (u = l)
                      : (dt([t], !0),
                        (l = t.style.display || l),
                        (u = E.css(t, "display")),
                        dt([t]))),
                  ("inline" === u || ("inline-block" === u && null != l)) &&
                    "none" === E.css(t, "float") &&
                    (h ||
                      (d.done(function () {
                        p.display = l;
                      }),
                      null == l &&
                        ((u = p.display), (l = "none" === u ? "" : u))),
                    (p.display = "inline-block"))),
                n.overflow &&
                  ((p.overflow = "hidden"),
                  d.always(function () {
                    (p.overflow = n.overflow[0]),
                      (p.overflowX = n.overflow[1]),
                      (p.overflowY = n.overflow[2]);
                  })),
                (h = !1),
                f))
                  h ||
                    (m
                      ? "hidden" in m && (g = m.hidden)
                      : (m = K.access(t, "fxshow", { display: l })),
                    s && (m.hidden = !g),
                    g && dt([t], !0),
                    d.done(function () {
                      for (i in (g || dt([t]), K.remove(t, "fxshow"), f))
                        E.style(t, i, f[i]);
                    })),
                    (h = de(g ? m[i] : 0, i, d)),
                    i in m ||
                      ((m[i] = h.start), g && ((h.end = h.start), (h.start = 0)));
            },
          ],
          prefilter: function (t, e) {
            e ? fe.prefilters.unshift(t) : fe.prefilters.push(t);
          },
        })),
          (E.speed = function (t, e, n) {
            var i =
              t && "object" == typeof t
                ? E.extend({}, t)
                : {
                    complete: n || (!n && e) || (v(t) && t),
                    duration: t,
                    easing: (n && e) || (e && !v(e) && e),
                  };
            return (
              E.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in E.fx.speeds
                    ? (i.duration = E.fx.speeds[i.duration])
                    : (i.duration = E.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue);
              }),
              i
            );
          }),
          E.fn.extend({
            fadeTo: function (t, e, n, i) {
              return this.filter(ht)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: e }, t, n, i);
            },
            animate: function (t, e, n, i) {
              var r = E.isEmptyObject(t),
                s = E.speed(e, n, i),
                o = function () {
                  var e = fe(this, E.extend({}, t), s);
                  (r || K.get(this, "finish")) && e.stop(!0);
                };
              return (
                (o.finish = o),
                r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
              );
            },
            stop: function (t, e, n) {
              var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n);
              };
              return (
                "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                e && this.queue(t || "fx", []),
                this.each(function () {
                  var e = !0,
                    r = null != t && t + "queueHooks",
                    s = E.timers,
                    o = K.get(this);
                  if (r) o[r] && o[r].stop && i(o[r]);
                  else for (r in o) o[r] && o[r].stop && he.test(r) && i(o[r]);
                  for (r = s.length; r--; )
                    s[r].elem !== this ||
                      (null != t && s[r].queue !== t) ||
                      (s[r].anim.stop(n), (e = !1), s.splice(r, 1));
                  (!e && n) || E.dequeue(this, t);
                })
              );
            },
            finish: function (t) {
              return (
                !1 !== t && (t = t || "fx"),
                this.each(function () {
                  var e,
                    n = K.get(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    s = E.timers,
                    o = i ? i.length : 0;
                  for (
                    n.finish = !0,
                      E.queue(this, t, []),
                      r && r.stop && r.stop.call(this, !0),
                      e = s.length;
                    e--;
  
                  )
                    s[e].elem === this &&
                      s[e].queue === t &&
                      (s[e].anim.stop(!0), s.splice(e, 1));
                  for (e = 0; e < o; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          E.each(["toggle", "show", "hide"], function (t, e) {
            var n = E.fn[e];
            E.fn[e] = function (t, i, r) {
              return null == t || "boolean" == typeof t
                ? n.apply(this, arguments)
                : this.animate(ce(e, !0), t, i, r);
            };
          }),
          E.each(
            {
              slideDown: ce("show"),
              slideUp: ce("hide"),
              slideToggle: ce("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (t, e) {
              E.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i);
              };
            },
          ),
          (E.timers = []),
          (E.fx.tick = function () {
            var t,
              e = 0,
              n = E.timers;
            for (se = Date.now(); e < n.length; e++)
              (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || E.fx.stop(), (se = void 0);
          }),
          (E.fx.timer = function (t) {
            E.timers.push(t), E.fx.start();
          }),
          (E.fx.interval = 13),
          (E.fx.start = function () {
            oe || ((oe = !0), le());
          }),
          (E.fx.stop = function () {
            oe = null;
          }),
          (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (E.fn.delay = function (t, e) {
            return (
              (t = (E.fx && E.fx.speeds[t]) || t),
              (e = e || "fx"),
              this.queue(e, function (e, i) {
                var r = n.setTimeout(e, t);
                i.stop = function () {
                  n.clearTimeout(r);
                };
              })
            );
          }),
          (function () {
            var t = b.createElement("input"),
              e = b
                .createElement("select")
                .appendChild(b.createElement("option"));
            (t.type = "checkbox"),
              (m.checkOn = "" !== t.value),
              (m.optSelected = e.selected),
              ((t = b.createElement("input")).value = "t"),
              (t.type = "radio"),
              (m.radioValue = "t" === t.value);
          })();
        var pe,
          ge = E.expr.attrHandle;
        E.fn.extend({
          attr: function (t, e) {
            return H(this, E.attr, t, e, arguments.length > 1);
          },
          removeAttr: function (t) {
            return this.each(function () {
              E.removeAttr(this, t);
            });
          },
        }),
          E.extend({
            attr: function (t, e, n) {
              var i,
                r,
                s = t.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === t.getAttribute
                  ? E.prop(t, e, n)
                  : ((1 === s && E.isXMLDoc(t)) ||
                      (r =
                        E.attrHooks[e.toLowerCase()] ||
                        (E.expr.match.bool.test(e) ? pe : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void E.removeAttr(t, e)
                        : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                          ? i
                          : (t.setAttribute(e, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(t, e))
                        ? i
                        : null == (i = E.find.attr(t, e))
                          ? void 0
                          : i);
            },
            attrHooks: {
              type: {
                set: function (t, e) {
                  if (!m.radioValue && "radio" === e && N(t, "input")) {
                    var n = t.value;
                    return t.setAttribute("type", e), n && (t.value = n), e;
                  }
                },
              },
            },
            removeAttr: function (t, e) {
              var n,
                i = 0,
                r = e && e.match(P);
              if (r && 1 === t.nodeType)
                for (; (n = r[i++]); ) t.removeAttribute(n);
            },
          }),
          (pe = {
            set: function (t, e, n) {
              return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
          }),
          E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = ge[e] || E.find.attr;
            ge[e] = function (t, e, i) {
              var r,
                s,
                o = e.toLowerCase();
              return (
                i ||
                  ((s = ge[o]),
                  (ge[o] = r),
                  (r = null != n(t, e, i) ? o : null),
                  (ge[o] = s)),
                r
              );
            };
          });
        var me = /^(?:input|select|textarea|button)$/i,
          ve = /^(?:a|area)$/i;
        function ye(t) {
          return (t.match(P) || []).join(" ");
        }
        function be(t) {
          return (t.getAttribute && t.getAttribute("class")) || "";
        }
        function we(t) {
          return Array.isArray(t)
            ? t
            : ("string" == typeof t && t.match(P)) || [];
        }
        E.fn.extend({
          prop: function (t, e) {
            return H(this, E.prop, t, e, arguments.length > 1);
          },
          removeProp: function (t) {
            return this.each(function () {
              delete this[E.propFix[t] || t];
            });
          },
        }),
          E.extend({
            prop: function (t, e, n) {
              var i,
                r,
                s = t.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return (
                  (1 === s && E.isXMLDoc(t)) ||
                    ((e = E.propFix[e] || e), (r = E.propHooks[e])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t[e] = n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                      ? i
                      : t[e]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (t) {
                  var e = E.find.attr(t, "tabindex");
                  return e
                    ? parseInt(e, 10)
                    : me.test(t.nodeName) || (ve.test(t.nodeName) && t.href)
                      ? 0
                      : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          m.optSelected ||
            (E.propHooks.selected = {
              get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null;
              },
              set: function (t) {
                var e = t.parentNode;
                e &&
                  (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
              },
            }),
          E.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              E.propFix[this.toLowerCase()] = this;
            },
          ),
          E.fn.extend({
            addClass: function (t) {
              var e,
                n,
                i,
                r,
                s,
                o,
                a,
                h = 0;
              if (v(t))
                return this.each(function (e) {
                  E(this).addClass(t.call(this, e, be(this)));
                });
              if ((e = we(t)).length)
                for (; (n = this[h++]); )
                  if (
                    ((r = be(n)), (i = 1 === n.nodeType && " " + ye(r) + " "))
                  ) {
                    for (o = 0; (s = e[o++]); )
                      i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                    r !== (a = ye(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (t) {
              var e,
                n,
                i,
                r,
                s,
                o,
                a,
                h = 0;
              if (v(t))
                return this.each(function (e) {
                  E(this).removeClass(t.call(this, e, be(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((e = we(t)).length)
                for (; (n = this[h++]); )
                  if (
                    ((r = be(n)), (i = 1 === n.nodeType && " " + ye(r) + " "))
                  ) {
                    for (o = 0; (s = e[o++]); )
                      for (; i.indexOf(" " + s + " ") > -1; )
                        i = i.replace(" " + s + " ", " ");
                    r !== (a = ye(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (t, e) {
              var n = typeof t,
                i = "string" === n || Array.isArray(t);
              return "boolean" == typeof e && i
                ? e
                  ? this.addClass(t)
                  : this.removeClass(t)
                : v(t)
                  ? this.each(function (n) {
                      E(this).toggleClass(t.call(this, n, be(this), e), e);
                    })
                  : this.each(function () {
                      var e, r, s, o;
                      if (i)
                        for (r = 0, s = E(this), o = we(t); (e = o[r++]); )
                          s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                      else
                        (void 0 !== t && "boolean" !== n) ||
                          ((e = be(this)) && K.set(this, "__className__", e),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              e || !1 === t
                                ? ""
                                : K.get(this, "__className__") || "",
                            ));
                    });
            },
            hasClass: function (t) {
              var e,
                n,
                i = 0;
              for (e = " " + t + " "; (n = this[i++]); )
                if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1)
                  return !0;
              return !1;
            },
          });
        var xe = /\r/g;
        E.fn.extend({
          val: function (t) {
            var e,
              n,
              i,
              r = this[0];
            return arguments.length
              ? ((i = v(t)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    (null == (r = i ? t.call(this, n, E(this).val()) : t)
                      ? (r = "")
                      : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = E.map(r, function (t) {
                            return null == t ? "" : t + "";
                          })),
                    ((e =
                      E.valHooks[this.type] ||
                      E.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in e &&
                      void 0 !== e.set(this, r, "value")) ||
                      (this.value = r));
                }))
              : r
                ? (e =
                    E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in e &&
                  void 0 !== (n = e.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                    ? n.replace(xe, "")
                    : null == n
                      ? ""
                      : n
                : void 0;
          },
        }),
          E.extend({
            valHooks: {
              option: {
                get: function (t) {
                  var e = E.find.attr(t, "value");
                  return null != e ? e : ye(E.text(t));
                },
              },
              select: {
                get: function (t) {
                  var e,
                    n,
                    i,
                    r = t.options,
                    s = t.selectedIndex,
                    o = "select-one" === t.type,
                    a = o ? null : [],
                    h = o ? s + 1 : r.length;
                  for (i = s < 0 ? h : o ? s : 0; i < h; i++)
                    if (
                      ((n = r[i]).selected || i === s) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                    ) {
                      if (((e = E(n).val()), o)) return e;
                      a.push(e);
                    }
                  return a;
                },
                set: function (t, e) {
                  for (
                    var n, i, r = t.options, s = E.makeArray(e), o = r.length;
                    o--;
  
                  )
                    ((i = r[o]).selected =
                      E.inArray(E.valHooks.option.get(i), s) > -1) && (n = !0);
                  return n || (t.selectedIndex = -1), s;
                },
              },
            },
          }),
          E.each(["radio", "checkbox"], function () {
            (E.valHooks[this] = {
              set: function (t, e) {
                if (Array.isArray(e))
                  return (t.checked = E.inArray(E(t).val(), e) > -1);
              },
            }),
              m.checkOn ||
                (E.valHooks[this].get = function (t) {
                  return null === t.getAttribute("value") ? "on" : t.value;
                });
          }),
          (m.focusin = "onfocusin" in n);
        var _e = /^(?:focusinfocus|focusoutblur)$/,
          Ee = function (t) {
            t.stopPropagation();
          };
        E.extend(E.event, {
          trigger: function (t, e, i, r) {
            var s,
              o,
              a,
              h,
              l,
              u,
              c,
              d,
              p = [i || b],
              g = f.call(t, "type") ? t.type : t,
              m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
              ((o = d = a = i = i || b),
              3 !== i.nodeType &&
                8 !== i.nodeType &&
                !_e.test(g + E.event.triggered) &&
                (g.indexOf(".") > -1 &&
                  ((m = g.split(".")), (g = m.shift()), m.sort()),
                (l = g.indexOf(":") < 0 && "on" + g),
                ((t = t[E.expando]
                  ? t
                  : new E.Event(g, "object" == typeof t && t)).isTrigger = r
                  ? 2
                  : 3),
                (t.namespace = m.join(".")),
                (t.rnamespace = t.namespace
                  ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (t.result = void 0),
                t.target || (t.target = i),
                (e = null == e ? [t] : E.makeArray(e, [t])),
                (c = E.event.special[g] || {}),
                r || !c.trigger || !1 !== c.trigger.apply(i, e)))
            ) {
              if (!r && !c.noBubble && !y(i)) {
                for (
                  h = c.delegateType || g, _e.test(h + g) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  p.push(o), (a = o);
                a === (i.ownerDocument || b) &&
                  p.push(a.defaultView || a.parentWindow || n);
              }
              for (s = 0; (o = p[s++]) && !t.isPropagationStopped(); )
                (d = o),
                  (t.type = s > 1 ? h : c.bindType || g),
                  (u =
                    (K.get(o, "events") || Object.create(null))[t.type] &&
                    K.get(o, "handle")) && u.apply(o, e),
                  (u = l && o[l]) &&
                    u.apply &&
                    $(o) &&
                    ((t.result = u.apply(o, e)),
                    !1 === t.result && t.preventDefault());
              return (
                (t.type = g),
                r ||
                  t.isDefaultPrevented() ||
                  (c._default && !1 !== c._default.apply(p.pop(), e)) ||
                  !$(i) ||
                  (l &&
                    v(i[g]) &&
                    !y(i) &&
                    ((a = i[l]) && (i[l] = null),
                    (E.event.triggered = g),
                    t.isPropagationStopped() && d.addEventListener(g, Ee),
                    i[g](),
                    t.isPropagationStopped() && d.removeEventListener(g, Ee),
                    (E.event.triggered = void 0),
                    a && (i[l] = a))),
                t.result
              );
            }
          },
          simulate: function (t, e, n) {
            var i = E.extend(new E.Event(), n, { type: t, isSimulated: !0 });
            E.event.trigger(i, null, e);
          },
        }),
          E.fn.extend({
            trigger: function (t, e) {
              return this.each(function () {
                E.event.trigger(t, e, this);
              });
            },
            triggerHandler: function (t, e) {
              var n = this[0];
              if (n) return E.event.trigger(t, e, n, !0);
            },
          }),
          m.focusin ||
            E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
              var n = function (t) {
                E.event.simulate(e, t.target, E.event.fix(t));
              };
              E.event.special[e] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = K.access(i, e);
                  r || i.addEventListener(t, n, !0), K.access(i, e, (r || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = K.access(i, e) - 1;
                  r
                    ? K.access(i, e, r)
                    : (i.removeEventListener(t, n, !0), K.remove(i, e));
                },
              };
            });
        var ke = n.location,
          Se = { guid: Date.now() },
          Ce = /\?/;
        E.parseXML = function (t) {
          var e;
          if (!t || "string" != typeof t) return null;
          try {
            e = new n.DOMParser().parseFromString(t, "text/xml");
          } catch (t) {
            e = void 0;
          }
          return (
            (e && !e.getElementsByTagName("parsererror").length) ||
              E.error("Invalid XML: " + t),
            e
          );
        };
        var Te = /\[\]$/,
          Ae = /\r?\n/g,
          Ne = /^(?:submit|button|image|reset|file)$/i,
          Oe = /^(?:input|select|textarea|keygen)/i;
        function Ie(t, e, n, i) {
          var r;
          if (Array.isArray(e))
            E.each(e, function (e, r) {
              n || Te.test(t)
                ? i(t, r)
                : Ie(
                    t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                    r,
                    n,
                    i,
                  );
            });
          else if (n || "object" !== _(e)) i(t, e);
          else for (r in e) Ie(t + "[" + r + "]", e[r], n, i);
        }
        (E.param = function (t, e) {
          var n,
            i = [],
            r = function (t, e) {
              var n = v(e) ? e() : e;
              i[i.length] =
                encodeURIComponent(t) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == t) return "";
          if (Array.isArray(t) || (t.jquery && !E.isPlainObject(t)))
            E.each(t, function () {
              r(this.name, this.value);
            });
          else for (n in t) Ie(n, t[n], e, r);
          return i.join("&");
        }),
          E.fn.extend({
            serialize: function () {
              return E.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var t = E.prop(this, "elements");
                return t ? E.makeArray(t) : this;
              })
                .filter(function () {
                  var t = this.type;
                  return (
                    this.name &&
                    !E(this).is(":disabled") &&
                    Oe.test(this.nodeName) &&
                    !Ne.test(t) &&
                    (this.checked || !gt.test(t))
                  );
                })
                .map(function (t, e) {
                  var n = E(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                      ? E.map(n, function (t) {
                          return { name: e.name, value: t.replace(Ae, "\r\n") };
                        })
                      : { name: e.name, value: n.replace(Ae, "\r\n") };
                })
                .get();
            },
          });
        var Re = /%20/g,
          De = /#.*$/,
          Le = /([?&])_=[^&]*/,
          je = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          ze = /^(?:GET|HEAD)$/,
          Pe = /^\/\//,
          Be = {},
          Me = {},
          Fe = "*/".concat("*"),
          Ue = b.createElement("a");
        function qe(t) {
          return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var i,
              r = 0,
              s = e.toLowerCase().match(P) || [];
            if (v(n))
              for (; (i = s[r++]); )
                "+" === i[0]
                  ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                  : (t[i] = t[i] || []).push(n);
          };
        }
        function We(t, e, n, i) {
          var r = {},
            s = t === Me;
          function o(a) {
            var h;
            return (
              (r[a] = !0),
              E.each(t[a] || [], function (t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || r[l]
                  ? s
                    ? !(h = l)
                    : void 0
                  : (e.dataTypes.unshift(l), o(l), !1);
              }),
              h
            );
          }
          return o(e.dataTypes[0]) || (!r["*"] && o("*"));
        }
        function He(t, e) {
          var n,
            i,
            r = E.ajaxSettings.flatOptions || {};
          for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
          return i && E.extend(!0, t, i), t;
        }
        (Ue.href = ke.href),
          E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: ke.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  ke.protocol,
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Fe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
              return e ? He(He(t, E.ajaxSettings), e) : He(E.ajaxSettings, t);
            },
            ajaxPrefilter: qe(Be),
            ajaxTransport: qe(Me),
            ajax: function (t, e) {
              "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
              var i,
                r,
                s,
                o,
                a,
                h,
                l,
                u,
                c,
                d,
                f = E.ajaxSetup({}, e),
                p = f.context || f,
                g = f.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                m = E.Deferred(),
                v = E.Callbacks("once memory"),
                y = f.statusCode || {},
                w = {},
                x = {},
                _ = "canceled",
                k = {
                  readyState: 0,
                  getResponseHeader: function (t) {
                    var e;
                    if (l) {
                      if (!o)
                        for (o = {}; (e = je.exec(s)); )
                          o[e[1].toLowerCase() + " "] = (
                            o[e[1].toLowerCase() + " "] || []
                          ).concat(e[2]);
                      e = o[t.toLowerCase() + " "];
                    }
                    return null == e ? null : e.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return l ? s : null;
                  },
                  setRequestHeader: function (t, e) {
                    return (
                      null == l &&
                        ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                        (w[t] = e)),
                      this
                    );
                  },
                  overrideMimeType: function (t) {
                    return null == l && (f.mimeType = t), this;
                  },
                  statusCode: function (t) {
                    var e;
                    if (t)
                      if (l) k.always(t[k.status]);
                      else for (e in t) y[e] = [y[e], t[e]];
                    return this;
                  },
                  abort: function (t) {
                    var e = t || _;
                    return i && i.abort(e), S(0, e), this;
                  },
                };
              if (
                (m.promise(k),
                (f.url = ((t || f.url || ke.href) + "").replace(
                  Pe,
                  ke.protocol + "//",
                )),
                (f.type = e.method || e.type || f.method || f.type),
                (f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [
                  "",
                ]),
                null == f.crossDomain)
              ) {
                h = b.createElement("a");
                try {
                  (h.href = f.url),
                    (h.href = h.href),
                    (f.crossDomain =
                      Ue.protocol + "//" + Ue.host != h.protocol + "//" + h.host);
                } catch (t) {
                  f.crossDomain = !0;
                }
              }
              if (
                (f.data &&
                  f.processData &&
                  "string" != typeof f.data &&
                  (f.data = E.param(f.data, f.traditional)),
                We(Be, f, e, k),
                l)
              )
                return k;
              for (c in ((u = E.event && f.global) &&
                0 == E.active++ &&
                E.event.trigger("ajaxStart"),
              (f.type = f.type.toUpperCase()),
              (f.hasContent = !ze.test(f.type)),
              (r = f.url.replace(De, "")),
              f.hasContent
                ? f.data &&
                  f.processData &&
                  0 ===
                    (f.contentType || "").indexOf(
                      "application/x-www-form-urlencoded",
                    ) &&
                  (f.data = f.data.replace(Re, "+"))
                : ((d = f.url.slice(r.length)),
                  f.data &&
                    (f.processData || "string" == typeof f.data) &&
                    ((r += (Ce.test(r) ? "&" : "?") + f.data), delete f.data),
                  !1 === f.cache &&
                    ((r = r.replace(Le, "$1")),
                    (d = (Ce.test(r) ? "&" : "?") + "_=" + Se.guid++ + d)),
                  (f.url = r + d)),
              f.ifModified &&
                (E.lastModified[r] &&
                  k.setRequestHeader("If-Modified-Since", E.lastModified[r]),
                E.etag[r] && k.setRequestHeader("If-None-Match", E.etag[r])),
              ((f.data && f.hasContent && !1 !== f.contentType) ||
                e.contentType) &&
                k.setRequestHeader("Content-Type", f.contentType),
              k.setRequestHeader(
                "Accept",
                f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                  ? f.accepts[f.dataTypes[0]] +
                      ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "")
                  : f.accepts["*"],
              ),
              f.headers))
                k.setRequestHeader(c, f.headers[c]);
              if (f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || l))
                return k.abort();
              if (
                ((_ = "abort"),
                v.add(f.complete),
                k.done(f.success),
                k.fail(f.error),
                (i = We(Me, f, e, k)))
              ) {
                if (((k.readyState = 1), u && g.trigger("ajaxSend", [k, f]), l))
                  return k;
                f.async &&
                  f.timeout > 0 &&
                  (a = n.setTimeout(function () {
                    k.abort("timeout");
                  }, f.timeout));
                try {
                  (l = !1), i.send(w, S);
                } catch (t) {
                  if (l) throw t;
                  S(-1, t);
                }
              } else S(-1, "No Transport");
              function S(t, e, o, h) {
                var c,
                  d,
                  b,
                  w,
                  x,
                  _ = e;
                l ||
                  ((l = !0),
                  a && n.clearTimeout(a),
                  (i = void 0),
                  (s = h || ""),
                  (k.readyState = t > 0 ? 4 : 0),
                  (c = (t >= 200 && t < 300) || 304 === t),
                  o &&
                    (w = (function (t, e, n) {
                      for (
                        var i, r, s, o, a = t.contents, h = t.dataTypes;
                        "*" === h[0];
  
                      )
                        h.shift(),
                          void 0 === i &&
                            (i =
                              t.mimeType || e.getResponseHeader("Content-Type"));
                      if (i)
                        for (r in a)
                          if (a[r] && a[r].test(i)) {
                            h.unshift(r);
                            break;
                          }
                      if (h[0] in n) s = h[0];
                      else {
                        for (r in n) {
                          if (!h[0] || t.converters[r + " " + h[0]]) {
                            s = r;
                            break;
                          }
                          o || (o = r);
                        }
                        s = s || o;
                      }
                      if (s) return s !== h[0] && h.unshift(s), n[s];
                    })(f, k, o)),
                  !c &&
                    E.inArray("script", f.dataTypes) > -1 &&
                    (f.converters["text script"] = function () {}),
                  (w = (function (t, e, n, i) {
                    var r,
                      s,
                      o,
                      a,
                      h,
                      l = {},
                      u = t.dataTypes.slice();
                    if (u[1])
                      for (o in t.converters)
                        l[o.toLowerCase()] = t.converters[o];
                    for (s = u.shift(); s; )
                      if (
                        (t.responseFields[s] && (n[t.responseFields[s]] = e),
                        !h &&
                          i &&
                          t.dataFilter &&
                          (e = t.dataFilter(e, t.dataType)),
                        (h = s),
                        (s = u.shift()))
                      )
                        if ("*" === s) s = h;
                        else if ("*" !== h && h !== s) {
                          if (!(o = l[h + " " + s] || l["* " + s]))
                            for (r in l)
                              if (
                                (a = r.split(" "))[1] === s &&
                                (o = l[h + " " + a[0]] || l["* " + a[0]])
                              ) {
                                !0 === o
                                  ? (o = l[r])
                                  : !0 !== l[r] && ((s = a[0]), u.unshift(a[1]));
                                break;
                              }
                          if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else
                              try {
                                e = o(e);
                              } catch (t) {
                                return {
                                  state: "parsererror",
                                  error: o
                                    ? t
                                    : "No conversion from " + h + " to " + s,
                                };
                              }
                        }
                    return { state: "success", data: e };
                  })(f, w, k, c)),
                  c
                    ? (f.ifModified &&
                        ((x = k.getResponseHeader("Last-Modified")) &&
                          (E.lastModified[r] = x),
                        (x = k.getResponseHeader("etag")) && (E.etag[r] = x)),
                      204 === t || "HEAD" === f.type
                        ? (_ = "nocontent")
                        : 304 === t
                          ? (_ = "notmodified")
                          : ((_ = w.state), (d = w.data), (c = !(b = w.error))))
                    : ((b = _), (!t && _) || ((_ = "error"), t < 0 && (t = 0))),
                  (k.status = t),
                  (k.statusText = (e || _) + ""),
                  c ? m.resolveWith(p, [d, _, k]) : m.rejectWith(p, [k, _, b]),
                  k.statusCode(y),
                  (y = void 0),
                  u &&
                    g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, f, c ? d : b]),
                  v.fireWith(p, [k, _]),
                  u &&
                    (g.trigger("ajaxComplete", [k, f]),
                    --E.active || E.event.trigger("ajaxStop")));
              }
              return k;
            },
            getJSON: function (t, e, n) {
              return E.get(t, e, n, "json");
            },
            getScript: function (t, e) {
              return E.get(t, void 0, e, "script");
            },
          }),
          E.each(["get", "post"], function (t, e) {
            E[e] = function (t, n, i, r) {
              return (
                v(n) && ((r = r || i), (i = n), (n = void 0)),
                E.ajax(
                  E.extend(
                    { url: t, type: e, dataType: r, data: n, success: i },
                    E.isPlainObject(t) && t,
                  ),
                )
              );
            };
          }),
          E.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers)
              "content-type" === e.toLowerCase() &&
                (t.contentType = t.headers[e] || "");
          }),
          (E._evalUrl = function (t, e, n) {
            return E.ajax({
              url: t,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (t) {
                E.globalEval(t, e, n);
              },
            });
          }),
          E.fn.extend({
            wrapAll: function (t) {
              var e;
              return (
                this[0] &&
                  (v(t) && (t = t.call(this[0])),
                  (e = E(t, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && e.insertBefore(this[0]),
                  e
                    .map(function () {
                      for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                      return t;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (t) {
              return v(t)
                ? this.each(function (e) {
                    E(this).wrapInner(t.call(this, e));
                  })
                : this.each(function () {
                    var e = E(this),
                      n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t);
                  });
            },
            wrap: function (t) {
              var e = v(t);
              return this.each(function (n) {
                E(this).wrapAll(e ? t.call(this, n) : t);
              });
            },
            unwrap: function (t) {
              return (
                this.parent(t)
                  .not("body")
                  .each(function () {
                    E(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (E.expr.pseudos.hidden = function (t) {
            return !E.expr.pseudos.visible(t);
          }),
          (E.expr.pseudos.visible = function (t) {
            return !!(
              t.offsetWidth ||
              t.offsetHeight ||
              t.getClientRects().length
            );
          }),
          (E.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (t) {}
          });
        var Ve = { 0: 200, 1223: 204 },
          Ye = E.ajaxSettings.xhr();
        (m.cors = !!Ye && "withCredentials" in Ye),
          (m.ajax = Ye = !!Ye),
          E.ajaxTransport(function (t) {
            var e, i;
            if (m.cors || (Ye && !t.crossDomain))
              return {
                send: function (r, s) {
                  var o,
                    a = t.xhr();
                  if (
                    (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                  )
                    for (o in t.xhrFields) a[o] = t.xhrFields[o];
                  for (o in (t.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest"),
                  r))
                    a.setRequestHeader(o, r[o]);
                  (e = function (t) {
                    return function () {
                      e &&
                        ((e =
                          i =
                          a.onload =
                          a.onerror =
                          a.onabort =
                          a.ontimeout =
                          a.onreadystatechange =
                            null),
                        "abort" === t
                          ? a.abort()
                          : "error" === t
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Ve[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders(),
                              ));
                    };
                  }),
                    (a.onload = e()),
                    (i = a.onerror = a.ontimeout = e("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = i)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            n.setTimeout(function () {
                              e && i();
                            });
                        }),
                    (e = e("abort"));
                  try {
                    a.send((t.hasContent && t.data) || null);
                  } catch (t) {
                    if (e) throw t;
                  }
                },
                abort: function () {
                  e && e();
                },
              };
          }),
          E.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
          }),
          E.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (t) {
                return E.globalEval(t), t;
              },
            },
          }),
          E.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1),
              t.crossDomain && (t.type = "GET");
          }),
          E.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs)
              return {
                send: function (i, r) {
                  (e = E("<script>")
                    .attr(t.scriptAttrs || {})
                    .prop({ charset: t.scriptCharset, src: t.url })
                    .on(
                      "load error",
                      (n = function (t) {
                        e.remove(),
                          (n = null),
                          t && r("error" === t.type ? 404 : 200, t.type);
                      }),
                    )),
                    b.head.appendChild(e[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Xe,
          Ze = [],
          $e = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var t = Ze.pop() || E.expando + "_" + Se.guid++;
            return (this[t] = !0), t;
          },
        }),
          E.ajaxPrefilter("json jsonp", function (t, e, i) {
            var r,
              s,
              o,
              a =
                !1 !== t.jsonp &&
                ($e.test(t.url)
                  ? "url"
                  : "string" == typeof t.data &&
                    0 ===
                      (t.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    $e.test(t.data) &&
                    "data");
            if (a || "jsonp" === t.dataTypes[0])
              return (
                (r = t.jsonpCallback =
                  v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                a
                  ? (t[a] = t[a].replace($e, "$1" + r))
                  : !1 !== t.jsonp &&
                    (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                (t.converters["script json"] = function () {
                  return o || E.error(r + " was not called"), o[0];
                }),
                (t.dataTypes[0] = "json"),
                (s = n[r]),
                (n[r] = function () {
                  o = arguments;
                }),
                i.always(function () {
                  void 0 === s ? E(n).removeProp(r) : (n[r] = s),
                    t[r] && ((t.jsonpCallback = e.jsonpCallback), Ze.push(r)),
                    o && v(s) && s(o[0]),
                    (o = s = void 0);
                }),
                "script"
              );
          }),
          (m.createHTMLDocument =
            (((Xe = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Xe.childNodes.length)),
          (E.parseHTML = function (t, e, n) {
            return "string" != typeof t
              ? []
              : ("boolean" == typeof e && ((n = e), (e = !1)),
                e ||
                  (m.createHTMLDocument
                    ? (((i = (e =
                        b.implementation.createHTMLDocument("")).createElement(
                        "base",
                      )).href = b.location.href),
                      e.head.appendChild(i))
                    : (e = b)),
                (s = !n && []),
                (r = O.exec(t))
                  ? [e.createElement(r[1])]
                  : ((r = _t([t], e, s)),
                    s && s.length && E(s).remove(),
                    E.merge([], r.childNodes)));
            var i, r, s;
          }),
          (E.fn.load = function (t, e, n) {
            var i,
              r,
              s,
              o = this,
              a = t.indexOf(" ");
            return (
              a > -1 && ((i = ye(t.slice(a))), (t = t.slice(0, a))),
              v(e)
                ? ((n = e), (e = void 0))
                : e && "object" == typeof e && (r = "POST"),
              o.length > 0 &&
                E.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                  .done(function (t) {
                    (s = arguments),
                      o.html(i ? E("<div>").append(E.parseHTML(t)).find(i) : t);
                  })
                  .always(
                    n &&
                      function (t, e) {
                        o.each(function () {
                          n.apply(this, s || [t.responseText, e, t]);
                        });
                      },
                  ),
              this
            );
          }),
          (E.expr.pseudos.animated = function (t) {
            return E.grep(E.timers, function (e) {
              return t === e.elem;
            }).length;
          }),
          (E.offset = {
            setOffset: function (t, e, n) {
              var i,
                r,
                s,
                o,
                a,
                h,
                l = E.css(t, "position"),
                u = E(t),
                c = {};
              "static" === l && (t.style.position = "relative"),
                (a = u.offset()),
                (s = E.css(t, "top")),
                (h = E.css(t, "left")),
                ("absolute" === l || "fixed" === l) &&
                (s + h).indexOf("auto") > -1
                  ? ((o = (i = u.position()).top), (r = i.left))
                  : ((o = parseFloat(s) || 0), (r = parseFloat(h) || 0)),
                v(e) && (e = e.call(t, n, E.extend({}, a))),
                null != e.top && (c.top = e.top - a.top + o),
                null != e.left && (c.left = e.left - a.left + r),
                "using" in e
                  ? e.using.call(t, c)
                  : ("number" == typeof c.top && (c.top += "px"),
                    "number" == typeof c.left && (c.left += "px"),
                    u.css(c));
            },
          }),
          E.fn.extend({
            offset: function (t) {
              if (arguments.length)
                return void 0 === t
                  ? this
                  : this.each(function (e) {
                      E.offset.setOffset(this, t, e);
                    });
              var e,
                n,
                i = this[0];
              return i
                ? i.getClientRects().length
                  ? ((e = i.getBoundingClientRect()),
                    (n = i.ownerDocument.defaultView),
                    { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var t,
                  e,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 };
                if ("fixed" === E.css(i, "position"))
                  e = i.getBoundingClientRect();
                else {
                  for (
                    e = this.offset(),
                      n = i.ownerDocument,
                      t = i.offsetParent || n.documentElement;
                    t &&
                    (t === n.body || t === n.documentElement) &&
                    "static" === E.css(t, "position");
  
                  )
                    t = t.parentNode;
                  t &&
                    t !== i &&
                    1 === t.nodeType &&
                    (((r = E(t).offset()).top += E.css(t, "borderTopWidth", !0)),
                    (r.left += E.css(t, "borderLeftWidth", !0)));
                }
                return {
                  top: e.top - r.top - E.css(i, "marginTop", !0),
                  left: e.left - r.left - E.css(i, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var t = this.offsetParent;
                  t && "static" === E.css(t, "position");
  
                )
                  t = t.offsetParent;
                return t || st;
              });
            },
          }),
          E.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, e) {
              var n = "pageYOffset" === e;
              E.fn[t] = function (i) {
                return H(
                  this,
                  function (t, i, r) {
                    var s;
                    if (
                      (y(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView),
                      void 0 === r)
                    )
                      return s ? s[e] : t[i];
                    s
                      ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset)
                      : (t[i] = r);
                  },
                  t,
                  i,
                  arguments.length,
                );
              };
            },
          ),
          E.each(["top", "left"], function (t, e) {
            E.cssHooks[e] = Yt(m.pixelPosition, function (t, n) {
              if (n)
                return (n = Vt(t, e)), Ut.test(n) ? E(t).position()[e] + "px" : n;
            });
          }),
          E.each({ Height: "height", Width: "width" }, function (t, e) {
            E.each(
              { padding: "inner" + t, content: e, "": "outer" + t },
              function (n, i) {
                E.fn[i] = function (r, s) {
                  var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === s ? "margin" : "border");
                  return H(
                    this,
                    function (e, n, r) {
                      var s;
                      return y(e)
                        ? 0 === i.indexOf("outer")
                          ? e["inner" + t]
                          : e.document.documentElement["client" + t]
                        : 9 === e.nodeType
                          ? ((s = e.documentElement),
                            Math.max(
                              e.body["scroll" + t],
                              s["scroll" + t],
                              e.body["offset" + t],
                              s["offset" + t],
                              s["client" + t],
                            ))
                          : void 0 === r
                            ? E.css(e, n, a)
                            : E.style(e, n, r, a);
                    },
                    e,
                    o ? r : void 0,
                    o,
                  );
                };
              },
            );
          }),
          E.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (t, e) {
              E.fn[e] = function (t) {
                return this.on(e, t);
              };
            },
          ),
          E.fn.extend({
            bind: function (t, e, n) {
              return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
              return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
              return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
              return 1 === arguments.length
                ? this.off(t, "**")
                : this.off(e, t || "**", n);
            },
            hover: function (t, e) {
              return this.mouseenter(t).mouseleave(e || t);
            },
          }),
          E.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " ",
            ),
            function (t, e) {
              E.fn[e] = function (t, n) {
                return arguments.length > 0
                  ? this.on(e, null, t, n)
                  : this.trigger(e);
              };
            },
          );
        var Ge = /^[\s﻿ ]+|[\s﻿ ]+$/g;
        (E.proxy = function (t, e) {
          var n, i, r;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), v(t)))
            return (
              (i = a.call(arguments, 2)),
              ((r = function () {
                return t.apply(e || this, i.concat(a.call(arguments)));
              }).guid = t.guid =
                t.guid || E.guid++),
              r
            );
        }),
          (E.holdReady = function (t) {
            t ? E.readyWait++ : E.ready(!0);
          }),
          (E.isArray = Array.isArray),
          (E.parseJSON = JSON.parse),
          (E.nodeName = N),
          (E.isFunction = v),
          (E.isWindow = y),
          (E.camelCase = Z),
          (E.type = _),
          (E.now = Date.now),
          (E.isNumeric = function (t) {
            var e = E.type(t);
            return (
              ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            );
          }),
          (E.trim = function (t) {
            return null == t ? "" : (t + "").replace(Ge, "");
          }),
          void 0 ===
            (i = function () {
              return E;
            }.apply(e, [])) || (t.exports = i);
        var Ke = n.jQuery,
          Je = n.$;
        return (
          (E.noConflict = function (t) {
            return (
              n.$ === E && (n.$ = Je), t && n.jQuery === E && (n.jQuery = Ke), E
            );
          }),
          void 0 === r && (n.jQuery = n.$ = E),
          E
        );
      });
    },
    function (t, e, n) {
      var i = n(22),
        r = n(20);
      t.exports = function (t, e, n) {
        var s = !0,
          o = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return (
          r(n) &&
            ((s = "leading" in n ? !!n.leading : s),
            (o = "trailing" in n ? !!n.trailing : o)),
          i(t, e, { leading: s, maxWait: e, trailing: o })
        );
      };
    },
    function (t, e, n) {
      (function (e, n, i) {
        t.exports = (function t(e, n, i) {
          function r(o, a) {
            if (!n[o]) {
              if (!e[o]) {
                if (s) return s(o, !0);
                var h = new Error("Cannot find module '" + o + "'");
                throw ((h.code = "MODULE_NOT_FOUND"), h);
              }
              var l = (n[o] = { exports: {} });
              e[o][0].call(
                l.exports,
                function (t) {
                  var n = e[o][1][t];
                  return r(n || t);
                },
                l,
                l.exports,
                t,
                e,
                n,
                i,
              );
            }
            return n[o].exports;
          }
          for (var s = !1, o = 0; o < i.length; o++) r(i[o]);
          return r;
        })(
          {
            1: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils"),
                  r = t("./support"),
                  s =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                (n.encode = function (t) {
                  for (
                    var e,
                      n,
                      r,
                      o,
                      a,
                      h,
                      l,
                      u = [],
                      c = 0,
                      d = t.length,
                      f = d,
                      p = "string" !== i.getTypeOf(t);
                    c < t.length;
  
                  )
                    (f = d - c),
                      p
                        ? ((e = t[c++]),
                          (n = c < d ? t[c++] : 0),
                          (r = c < d ? t[c++] : 0))
                        : ((e = t.charCodeAt(c++)),
                          (n = c < d ? t.charCodeAt(c++) : 0),
                          (r = c < d ? t.charCodeAt(c++) : 0)),
                      (o = e >> 2),
                      (a = ((3 & e) << 4) | (n >> 4)),
                      (h = f > 1 ? ((15 & n) << 2) | (r >> 6) : 64),
                      (l = f > 2 ? 63 & r : 64),
                      u.push(
                        s.charAt(o) + s.charAt(a) + s.charAt(h) + s.charAt(l),
                      );
                  return u.join("");
                }),
                  (n.decode = function (t) {
                    var e,
                      n,
                      i,
                      o,
                      a,
                      h,
                      l = 0,
                      u = 0;
                    if ("data:" === t.substr(0, "data:".length))
                      throw new Error(
                        "Invalid base64 input, it looks like a data url.",
                      );
                    var c,
                      d =
                        (3 * (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length) /
                        4;
                    if (
                      (t.charAt(t.length - 1) === s.charAt(64) && d--,
                      t.charAt(t.length - 2) === s.charAt(64) && d--,
                      d % 1 != 0)
                    )
                      throw new Error(
                        "Invalid base64 input, bad content length.",
                      );
                    for (
                      c = r.uint8array ? new Uint8Array(0 | d) : new Array(0 | d);
                      l < t.length;
  
                    )
                      (e =
                        (s.indexOf(t.charAt(l++)) << 2) |
                        ((o = s.indexOf(t.charAt(l++))) >> 4)),
                        (n =
                          ((15 & o) << 4) |
                          ((a = s.indexOf(t.charAt(l++))) >> 2)),
                        (i = ((3 & a) << 6) | (h = s.indexOf(t.charAt(l++)))),
                        (c[u++] = e),
                        64 !== a && (c[u++] = n),
                        64 !== h && (c[u++] = i);
                    return c;
                  });
              },
              { "./support": 30, "./utils": 32 },
            ],
            2: [
              function (t, e, n) {
                "use strict";
                var i = t("./external"),
                  r = t("./stream/DataWorker"),
                  s = t("./stream/DataLengthProbe"),
                  o = t("./stream/Crc32Probe");
                function a(t, e, n, i, r) {
                  (this.compressedSize = t),
                    (this.uncompressedSize = e),
                    (this.crc32 = n),
                    (this.compression = i),
                    (this.compressedContent = r);
                }
                (s = t("./stream/DataLengthProbe")),
                  (a.prototype = {
                    getContentWorker: function () {
                      var t = new r(i.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new s("data_length")),
                        e = this;
                      return (
                        t.on("end", function () {
                          if (this.streamInfo.data_length !== e.uncompressedSize)
                            throw new Error(
                              "Bug : uncompressed data size mismatch",
                            );
                        }),
                        t
                      );
                    },
                    getCompressedWorker: function () {
                      return new r(i.Promise.resolve(this.compressedContent))
                        .withStreamInfo("compressedSize", this.compressedSize)
                        .withStreamInfo("uncompressedSize", this.uncompressedSize)
                        .withStreamInfo("crc32", this.crc32)
                        .withStreamInfo("compression", this.compression);
                    },
                  }),
                  (a.createWorkerFrom = function (t, e, n) {
                    return t
                      .pipe(new o())
                      .pipe(new s("uncompressedSize"))
                      .pipe(e.compressWorker(n))
                      .pipe(new s("compressedSize"))
                      .withStreamInfo("compression", e);
                  }),
                  (e.exports = a);
              },
              {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27,
              },
            ],
            3: [
              function (t, e, n) {
                "use strict";
                var i = t("./stream/GenericWorker");
                (n.STORE = {
                  magic: "\0\0",
                  compressWorker: function (t) {
                    return new i("STORE compression");
                  },
                  uncompressWorker: function () {
                    return new i("STORE decompression");
                  },
                }),
                  (n.DEFLATE = t("./flate"));
              },
              { "./flate": 7, "./stream/GenericWorker": 28 },
            ],
            4: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils"),
                  r = (function () {
                    for (var t, e = [], n = 0; n < 256; n++) {
                      t = n;
                      for (var i = 0; i < 8; i++)
                        t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                      e[n] = t;
                    }
                    return e;
                  })();
                e.exports = function (t, e) {
                  return void 0 !== t && t.length
                    ? "string" !== i.getTypeOf(t)
                      ? (function (t, e, n, i) {
                          var s = r,
                            o = i + n;
                          t ^= -1;
                          for (var a = i; a < o; a++)
                            t = (t >>> 8) ^ s[255 & (t ^ e[a])];
                          return -1 ^ t;
                        })(0 | e, t, t.length, 0)
                      : (function (t, e, n, i) {
                          var s = r,
                            o = i + n;
                          t ^= -1;
                          for (var a = i; a < o; a++)
                            t = (t >>> 8) ^ s[255 & (t ^ e.charCodeAt(a))];
                          return -1 ^ t;
                        })(0 | e, t, t.length, 0)
                    : 0;
                };
              },
              { "./utils": 32 },
            ],
            5: [
              function (t, e, n) {
                "use strict";
                (n.base64 = !1),
                  (n.binary = !1),
                  (n.dir = !1),
                  (n.createFolders = !0),
                  (n.date = null),
                  (n.compression = null),
                  (n.compressionOptions = null),
                  (n.comment = null),
                  (n.unixPermissions = null),
                  (n.dosPermissions = null);
              },
              {},
            ],
            6: [
              function (t, e, n) {
                "use strict";
                var i = null;
                (i = "undefined" != typeof Promise ? Promise : t("lie")),
                  (e.exports = { Promise: i });
              },
              { lie: 37 },
            ],
            7: [
              function (t, e, n) {
                "use strict";
                var i =
                    "undefined" != typeof Uint8Array &&
                    "undefined" != typeof Uint16Array &&
                    "undefined" != typeof Uint32Array,
                  r = t("pako"),
                  s = t("./utils"),
                  o = t("./stream/GenericWorker"),
                  a = i ? "uint8array" : "array";
                function h(t, e) {
                  o.call(this, "FlateWorker/" + t),
                    (this._pako = null),
                    (this._pakoAction = t),
                    (this._pakoOptions = e),
                    (this.meta = {});
                }
                (n.magic = "\b\0"),
                  s.inherits(h, o),
                  (h.prototype.processChunk = function (t) {
                    (this.meta = t.meta),
                      null === this._pako && this._createPako(),
                      this._pako.push(s.transformTo(a, t.data), !1);
                  }),
                  (h.prototype.flush = function () {
                    o.prototype.flush.call(this),
                      null === this._pako && this._createPako(),
                      this._pako.push([], !0);
                  }),
                  (h.prototype.cleanUp = function () {
                    o.prototype.cleanUp.call(this), (this._pako = null);
                  }),
                  (h.prototype._createPako = function () {
                    this._pako = new r[this._pakoAction]({
                      raw: !0,
                      level: this._pakoOptions.level || -1,
                    });
                    var t = this;
                    this._pako.onData = function (e) {
                      t.push({ data: e, meta: t.meta });
                    };
                  }),
                  (n.compressWorker = function (t) {
                    return new h("Deflate", t);
                  }),
                  (n.uncompressWorker = function () {
                    return new h("Inflate", {});
                  });
              },
              { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
            ],
            8: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils"),
                  r = t("../stream/GenericWorker"),
                  s = t("../utf8"),
                  o = t("../crc32"),
                  a = t("../signature"),
                  h = function (t, e) {
                    var n,
                      i = "";
                    for (n = 0; n < e; n++)
                      (i += String.fromCharCode(255 & t)), (t >>>= 8);
                    return i;
                  },
                  l = function (t, e, n, r, l, u) {
                    var c,
                      d,
                      f = t.file,
                      p = t.compression,
                      g = u !== s.utf8encode,
                      m = i.transformTo("string", u(f.name)),
                      v = i.transformTo("string", s.utf8encode(f.name)),
                      y = f.comment,
                      b = i.transformTo("string", u(y)),
                      w = i.transformTo("string", s.utf8encode(y)),
                      x = v.length !== f.name.length,
                      _ = w.length !== y.length,
                      E = "",
                      k = "",
                      S = "",
                      C = f.dir,
                      T = f.date,
                      A = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                    (e && !n) ||
                      ((A.crc32 = t.crc32),
                      (A.compressedSize = t.compressedSize),
                      (A.uncompressedSize = t.uncompressedSize));
                    var N = 0;
                    e && (N |= 8), g || (!x && !_) || (N |= 2048);
                    var O,
                      I,
                      R,
                      D = 0,
                      L = 0;
                    C && (D |= 16),
                      "UNIX" === l
                        ? ((L = 798),
                          (D |=
                            ((O = f.unixPermissions),
                            (I = C),
                            (R = O),
                            O || (R = I ? 16893 : 33204),
                            (65535 & R) << 16)))
                        : ((L = 20), (D |= 63 & (f.dosPermissions || 0))),
                      (c = T.getUTCHours()),
                      (c <<= 6),
                      (c |= T.getUTCMinutes()),
                      (c <<= 5),
                      (c |= T.getUTCSeconds() / 2),
                      (d = T.getUTCFullYear() - 1980),
                      (d <<= 4),
                      (d |= T.getUTCMonth() + 1),
                      (d <<= 5),
                      (d |= T.getUTCDate()),
                      x &&
                        ((k = h(1, 1) + h(o(m), 4) + v),
                        (E += "up" + h(k.length, 2) + k)),
                      _ &&
                        ((S = h(1, 1) + h(o(b), 4) + w),
                        (E += "uc" + h(S.length, 2) + S));
                    var j = "";
                    return (
                      (j += "\n\0"),
                      (j += h(N, 2)),
                      (j += p.magic),
                      (j += h(c, 2)),
                      (j += h(d, 2)),
                      (j += h(A.crc32, 4)),
                      (j += h(A.compressedSize, 4)),
                      (j += h(A.uncompressedSize, 4)),
                      (j += h(m.length, 2)),
                      (j += h(E.length, 2)),
                      {
                        fileRecord: a.LOCAL_FILE_HEADER + j + m + E,
                        dirRecord:
                          a.CENTRAL_FILE_HEADER +
                          h(L, 2) +
                          j +
                          h(b.length, 2) +
                          "\0\0\0\0" +
                          h(D, 4) +
                          h(r, 4) +
                          m +
                          E +
                          b,
                      }
                    );
                  },
                  u = function (t) {
                    return (
                      a.DATA_DESCRIPTOR +
                      h(t.crc32, 4) +
                      h(t.compressedSize, 4) +
                      h(t.uncompressedSize, 4)
                    );
                  };
                function c(t, e, n, i) {
                  r.call(this, "ZipFileWorker"),
                    (this.bytesWritten = 0),
                    (this.zipComment = e),
                    (this.zipPlatform = n),
                    (this.encodeFileName = i),
                    (this.streamFiles = t),
                    (this.accumulate = !1),
                    (this.contentBuffer = []),
                    (this.dirRecords = []),
                    (this.currentSourceOffset = 0),
                    (this.entriesCount = 0),
                    (this.currentFile = null),
                    (this._sources = []);
                }
                i.inherits(c, r),
                  (c.prototype.push = function (t) {
                    var e = t.meta.percent || 0,
                      n = this.entriesCount,
                      i = this._sources.length;
                    this.accumulate
                      ? this.contentBuffer.push(t)
                      : ((this.bytesWritten += t.data.length),
                        r.prototype.push.call(this, {
                          data: t.data,
                          meta: {
                            currentFile: this.currentFile,
                            percent: n ? (e + 100 * (n - i - 1)) / n : 100,
                          },
                        }));
                  }),
                  (c.prototype.openedSource = function (t) {
                    (this.currentSourceOffset = this.bytesWritten),
                      (this.currentFile = t.file.name);
                    var e = this.streamFiles && !t.file.dir;
                    if (e) {
                      var n = l(
                        t,
                        e,
                        !1,
                        this.currentSourceOffset,
                        this.zipPlatform,
                        this.encodeFileName,
                      );
                      this.push({ data: n.fileRecord, meta: { percent: 0 } });
                    } else this.accumulate = !0;
                  }),
                  (c.prototype.closedSource = function (t) {
                    this.accumulate = !1;
                    var e = this.streamFiles && !t.file.dir,
                      n = l(
                        t,
                        e,
                        !0,
                        this.currentSourceOffset,
                        this.zipPlatform,
                        this.encodeFileName,
                      );
                    if ((this.dirRecords.push(n.dirRecord), e))
                      this.push({ data: u(t), meta: { percent: 100 } });
                    else
                      for (
                        this.push({ data: n.fileRecord, meta: { percent: 0 } });
                        this.contentBuffer.length;
  
                      )
                        this.push(this.contentBuffer.shift());
                    this.currentFile = null;
                  }),
                  (c.prototype.flush = function () {
                    for (
                      var t = this.bytesWritten, e = 0;
                      e < this.dirRecords.length;
                      e++
                    )
                      this.push({
                        data: this.dirRecords[e],
                        meta: { percent: 100 },
                      });
                    var n = this.bytesWritten - t,
                      r = (function (t, e, n, r, s) {
                        var o = i.transformTo("string", s(r));
                        return (
                          a.CENTRAL_DIRECTORY_END +
                          "\0\0\0\0" +
                          h(t, 2) +
                          h(t, 2) +
                          h(e, 4) +
                          h(n, 4) +
                          h(o.length, 2) +
                          o
                        );
                      })(
                        this.dirRecords.length,
                        n,
                        t,
                        this.zipComment,
                        this.encodeFileName,
                      );
                    this.push({ data: r, meta: { percent: 100 } });
                  }),
                  (c.prototype.prepareNextSource = function () {
                    (this.previous = this._sources.shift()),
                      this.openedSource(this.previous.streamInfo),
                      this.isPaused
                        ? this.previous.pause()
                        : this.previous.resume();
                  }),
                  (c.prototype.registerPrevious = function (t) {
                    this._sources.push(t);
                    var e = this;
                    return (
                      t.on("data", function (t) {
                        e.processChunk(t);
                      }),
                      t.on("end", function () {
                        e.closedSource(e.previous.streamInfo),
                          e._sources.length ? e.prepareNextSource() : e.end();
                      }),
                      t.on("error", function (t) {
                        e.error(t);
                      }),
                      this
                    );
                  }),
                  (c.prototype.resume = function () {
                    return (
                      !!r.prototype.resume.call(this) &&
                      (!this.previous && this._sources.length
                        ? (this.prepareNextSource(), !0)
                        : this.previous ||
                            this._sources.length ||
                            this.generatedError
                          ? void 0
                          : (this.end(), !0))
                    );
                  }),
                  (c.prototype.error = function (t) {
                    var e = this._sources;
                    if (!r.prototype.error.call(this, t)) return !1;
                    for (var n = 0; n < e.length; n++)
                      try {
                        e[n].error(t);
                      } catch (t) {}
                    return !0;
                  }),
                  (c.prototype.lock = function () {
                    r.prototype.lock.call(this);
                    for (var t = this._sources, e = 0; e < t.length; e++)
                      t[e].lock();
                  }),
                  (e.exports = c);
              },
              {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32,
              },
            ],
            9: [
              function (t, e, n) {
                "use strict";
                var i = t("../compressions"),
                  r = t("./ZipFileWorker");
                n.generateWorker = function (t, e, n) {
                  var s = new r(e.streamFiles, n, e.platform, e.encodeFileName),
                    o = 0;
                  try {
                    t.forEach(function (t, n) {
                      o++;
                      var r = (function (t, e) {
                          var n = t || e,
                            r = i[n];
                          if (!r)
                            throw new Error(
                              n + " is not a valid compression method !",
                            );
                          return r;
                        })(n.options.compression, e.compression),
                        a =
                          n.options.compressionOptions ||
                          e.compressionOptions ||
                          {},
                        h = n.dir,
                        l = n.date;
                      n._compressWorker(r, a)
                        .withStreamInfo("file", {
                          name: t,
                          dir: h,
                          date: l,
                          comment: n.comment || "",
                          unixPermissions: n.unixPermissions,
                          dosPermissions: n.dosPermissions,
                        })
                        .pipe(s);
                    }),
                      (s.entriesCount = o);
                  } catch (t) {
                    s.error(t);
                  }
                  return s;
                };
              },
              { "../compressions": 3, "./ZipFileWorker": 8 },
            ],
            10: [
              function (t, e, n) {
                "use strict";
                function i() {
                  if (!(this instanceof i)) return new i();
                  if (arguments.length)
                    throw new Error(
                      "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.",
                    );
                  (this.files = {}),
                    (this.comment = null),
                    (this.root = ""),
                    (this.clone = function () {
                      var t = new i();
                      for (var e in this)
                        "function" != typeof this[e] && (t[e] = this[e]);
                      return t;
                    });
                }
                (i.prototype = t("./object")),
                  (i.prototype.loadAsync = t("./load")),
                  (i.support = t("./support")),
                  (i.defaults = t("./defaults")),
                  (i.version = "3.5.0"),
                  (i.loadAsync = function (t, e) {
                    return new i().loadAsync(t, e);
                  }),
                  (i.external = t("./external")),
                  (e.exports = i);
              },
              {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30,
              },
            ],
            11: [
              function (t, e, n) {
                "use strict";
                var i = t("./utils"),
                  r = t("./external"),
                  s = t("./utf8"),
                  o = ((i = t("./utils")), t("./zipEntries")),
                  a = t("./stream/Crc32Probe"),
                  h = t("./nodejsUtils");
                function l(t) {
                  return new r.Promise(function (e, n) {
                    var i = t.decompressed.getContentWorker().pipe(new a());
                    i.on("error", function (t) {
                      n(t);
                    })
                      .on("end", function () {
                        i.streamInfo.crc32 !== t.decompressed.crc32
                          ? n(new Error("Corrupted zip : CRC32 mismatch"))
                          : e();
                      })
                      .resume();
                  });
                }
                e.exports = function (t, e) {
                  var n = this;
                  return (
                    (e = i.extend(e || {}, {
                      base64: !1,
                      checkCRC32: !1,
                      optimizedBinaryString: !1,
                      createFolders: !1,
                      decodeFileName: s.utf8decode,
                    })),
                    h.isNode && h.isStream(t)
                      ? r.Promise.reject(
                          new Error(
                            "JSZip can't accept a stream when loading a zip file.",
                          ),
                        )
                      : i
                          .prepareContent(
                            "the loaded zip file",
                            t,
                            !0,
                            e.optimizedBinaryString,
                            e.base64,
                          )
                          .then(function (t) {
                            var n = new o(e);
                            return n.load(t), n;
                          })
                          .then(function (t) {
                            var n = [r.Promise.resolve(t)],
                              i = t.files;
                            if (e.checkCRC32)
                              for (var s = 0; s < i.length; s++) n.push(l(i[s]));
                            return r.Promise.all(n);
                          })
                          .then(function (t) {
                            for (
                              var i = t.shift(), r = i.files, s = 0;
                              s < r.length;
                              s++
                            ) {
                              var o = r[s];
                              n.file(o.fileNameStr, o.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: o.date,
                                dir: o.dir,
                                comment: o.fileCommentStr.length
                                  ? o.fileCommentStr
                                  : null,
                                unixPermissions: o.unixPermissions,
                                dosPermissions: o.dosPermissions,
                                createFolders: e.createFolders,
                              });
                            }
                            return (
                              i.zipComment.length && (n.comment = i.zipComment), n
                            );
                          })
                  );
                };
              },
              {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33,
              },
            ],
            12: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils"),
                  r = t("../stream/GenericWorker");
                function s(t, e) {
                  r.call(this, "Nodejs stream input adapter for " + t),
                    (this._upstreamEnded = !1),
                    this._bindStream(e);
                }
                i.inherits(s, r),
                  (s.prototype._bindStream = function (t) {
                    var e = this;
                    (this._stream = t),
                      t.pause(),
                      t
                        .on("data", function (t) {
                          e.push({ data: t, meta: { percent: 0 } });
                        })
                        .on("error", function (t) {
                          e.isPaused ? (this.generatedError = t) : e.error(t);
                        })
                        .on("end", function () {
                          e.isPaused ? (e._upstreamEnded = !0) : e.end();
                        });
                  }),
                  (s.prototype.pause = function () {
                    return (
                      !!r.prototype.pause.call(this) && (this._stream.pause(), !0)
                    );
                  }),
                  (s.prototype.resume = function () {
                    return (
                      !!r.prototype.resume.call(this) &&
                      (this._upstreamEnded ? this.end() : this._stream.resume(),
                      !0)
                    );
                  }),
                  (e.exports = s);
              },
              { "../stream/GenericWorker": 28, "../utils": 32 },
            ],
            13: [
              function (t, e, n) {
                "use strict";
                var i = t("readable-stream").Readable;
                function r(t, e, n) {
                  i.call(this, e), (this._helper = t);
                  var r = this;
                  t.on("data", function (t, e) {
                    r.push(t) || r._helper.pause(), n && n(e);
                  })
                    .on("error", function (t) {
                      r.emit("error", t);
                    })
                    .on("end", function () {
                      r.push(null);
                    });
                }
                t("../utils").inherits(r, i),
                  (r.prototype._read = function () {
                    this._helper.resume();
                  }),
                  (e.exports = r);
              },
              { "../utils": 32, "readable-stream": 16 },
            ],
            14: [
              function (t, n, i) {
                "use strict";
                n.exports = {
                  isNode: void 0 !== e,
                  newBufferFrom: function (t, n) {
                    if (e.from && e.from !== Uint8Array.from) return e.from(t, n);
                    if ("number" == typeof t)
                      throw new Error('The "data" argument must not be a number');
                    return new e(t, n);
                  },
                  allocBuffer: function (t) {
                    if (e.alloc) return e.alloc(t);
                    var n = new e(t);
                    return n.fill(0), n;
                  },
                  isBuffer: function (t) {
                    return e.isBuffer(t);
                  },
                  isStream: function (t) {
                    return (
                      t &&
                      "function" == typeof t.on &&
                      "function" == typeof t.pause &&
                      "function" == typeof t.resume
                    );
                  },
                };
              },
              {},
            ],
            15: [
              function (t, e, n) {
                "use strict";
                var i = t("./utf8"),
                  r = t("./utils"),
                  s = t("./stream/GenericWorker"),
                  o = t("./stream/StreamHelper"),
                  a = t("./defaults"),
                  h = t("./compressedObject"),
                  l = t("./zipObject"),
                  u = t("./generate"),
                  c = t("./nodejsUtils"),
                  d = t("./nodejs/NodejsStreamInputAdapter"),
                  f = function (t, e, n) {
                    var i,
                      o = r.getTypeOf(e),
                      u = r.extend(n || {}, a);
                    (u.date = u.date || new Date()),
                      null !== u.compression &&
                        (u.compression = u.compression.toUpperCase()),
                      "string" == typeof u.unixPermissions &&
                        (u.unixPermissions = parseInt(u.unixPermissions, 8)),
                      u.unixPermissions &&
                        16384 & u.unixPermissions &&
                        (u.dir = !0),
                      u.dosPermissions && 16 & u.dosPermissions && (u.dir = !0),
                      u.dir && (t = g(t)),
                      u.createFolders && (i = p(t)) && m.call(this, i, !0);
                    var f = "string" === o && !1 === u.binary && !1 === u.base64;
                    (n && void 0 !== n.binary) || (u.binary = !f),
                      ((e instanceof h && 0 === e.uncompressedSize) ||
                        u.dir ||
                        !e ||
                        0 === e.length) &&
                        ((u.base64 = !1),
                        (u.binary = !0),
                        (e = ""),
                        (u.compression = "STORE"),
                        (o = "string"));
                    var v = null;
                    v =
                      e instanceof h || e instanceof s
                        ? e
                        : c.isNode && c.isStream(e)
                          ? new d(t, e)
                          : r.prepareContent(
                              t,
                              e,
                              u.binary,
                              u.optimizedBinaryString,
                              u.base64,
                            );
                    var y = new l(t, v, u);
                    this.files[t] = y;
                  },
                  p = function (t) {
                    "/" === t.slice(-1) && (t = t.substring(0, t.length - 1));
                    var e = t.lastIndexOf("/");
                    return e > 0 ? t.substring(0, e) : "";
                  },
                  g = function (t) {
                    return "/" !== t.slice(-1) && (t += "/"), t;
                  },
                  m = function (t, e) {
                    return (
                      (e = void 0 !== e ? e : a.createFolders),
                      (t = g(t)),
                      this.files[t] ||
                        f.call(this, t, null, { dir: !0, createFolders: e }),
                      this.files[t]
                    );
                  };
                function v(t) {
                  return "[object RegExp]" === Object.prototype.toString.call(t);
                }
                var y = {
                  load: function () {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                    );
                  },
                  forEach: function (t) {
                    var e, n, i;
                    for (e in this.files)
                      this.files.hasOwnProperty(e) &&
                        ((i = this.files[e]),
                        (n = e.slice(this.root.length, e.length)) &&
                          e.slice(0, this.root.length) === this.root &&
                          t(n, i));
                  },
                  filter: function (t) {
                    var e = [];
                    return (
                      this.forEach(function (n, i) {
                        t(n, i) && e.push(i);
                      }),
                      e
                    );
                  },
                  file: function (t, e, n) {
                    if (1 === arguments.length) {
                      if (v(t)) {
                        var i = t;
                        return this.filter(function (t, e) {
                          return !e.dir && i.test(t);
                        });
                      }
                      var r = this.files[this.root + t];
                      return r && !r.dir ? r : null;
                    }
                    return (t = this.root + t), f.call(this, t, e, n), this;
                  },
                  folder: function (t) {
                    if (!t) return this;
                    if (v(t))
                      return this.filter(function (e, n) {
                        return n.dir && t.test(e);
                      });
                    var e = this.root + t,
                      n = m.call(this, e),
                      i = this.clone();
                    return (i.root = n.name), i;
                  },
                  remove: function (t) {
                    t = this.root + t;
                    var e = this.files[t];
                    if (
                      (e ||
                        ("/" !== t.slice(-1) && (t += "/"), (e = this.files[t])),
                      e && !e.dir)
                    )
                      delete this.files[t];
                    else
                      for (
                        var n = this.filter(function (e, n) {
                            return n.name.slice(0, t.length) === t;
                          }),
                          i = 0;
                        i < n.length;
                        i++
                      )
                        delete this.files[n[i].name];
                    return this;
                  },
                  generate: function (t) {
                    throw new Error(
                      "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                    );
                  },
                  generateInternalStream: function (t) {
                    var e,
                      n = {};
                    try {
                      if (
                        (((n = r.extend(t || {}, {
                          streamFiles: !1,
                          compression: "STORE",
                          compressionOptions: null,
                          type: "",
                          platform: "DOS",
                          comment: null,
                          mimeType: "application/zip",
                          encodeFileName: i.utf8encode,
                        })).type = n.type.toLowerCase()),
                        (n.compression = n.compression.toUpperCase()),
                        "binarystring" === n.type && (n.type = "string"),
                        !n.type)
                      )
                        throw new Error("No output type specified.");
                      r.checkSupport(n.type),
                        ("darwin" !== n.platform &&
                          "freebsd" !== n.platform &&
                          "linux" !== n.platform &&
                          "sunos" !== n.platform) ||
                          (n.platform = "UNIX"),
                        "win32" === n.platform && (n.platform = "DOS");
                      var a = n.comment || this.comment || "";
                      e = u.generateWorker(this, n, a);
                    } catch (t) {
                      (e = new s("error")).error(t);
                    }
                    return new o(e, n.type || "string", n.mimeType);
                  },
                  generateAsync: function (t, e) {
                    return this.generateInternalStream(t).accumulate(e);
                  },
                  generateNodeStream: function (t, e) {
                    return (
                      (t = t || {}).type || (t.type = "nodebuffer"),
                      this.generateInternalStream(t).toNodejsStream(e)
                    );
                  },
                };
                e.exports = y;
              },
              {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35,
              },
            ],
            16: [
              function (t, e, n) {
                e.exports = t("stream");
              },
              { stream: void 0 },
            ],
            17: [
              function (t, e, n) {
                "use strict";
                var i = t("./DataReader");
                function r(t) {
                  i.call(this, t);
                  for (var e = 0; e < this.data.length; e++) t[e] = 255 & t[e];
                }
                t("../utils").inherits(r, i),
                  (r.prototype.byteAt = function (t) {
                    return this.data[this.zero + t];
                  }),
                  (r.prototype.lastIndexOfSignature = function (t) {
                    for (
                      var e = t.charCodeAt(0),
                        n = t.charCodeAt(1),
                        i = t.charCodeAt(2),
                        r = t.charCodeAt(3),
                        s = this.length - 4;
                      s >= 0;
                      --s
                    )
                      if (
                        this.data[s] === e &&
                        this.data[s + 1] === n &&
                        this.data[s + 2] === i &&
                        this.data[s + 3] === r
                      )
                        return s - this.zero;
                    return -1;
                  }),
                  (r.prototype.readAndCheckSignature = function (t) {
                    var e = t.charCodeAt(0),
                      n = t.charCodeAt(1),
                      i = t.charCodeAt(2),
                      r = t.charCodeAt(3),
                      s = this.readData(4);
                    return e === s[0] && n === s[1] && i === s[2] && r === s[3];
                  }),
                  (r.prototype.readData = function (t) {
                    if ((this.checkOffset(t), 0 === t)) return [];
                    var e = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + t,
                    );
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "../utils": 32, "./DataReader": 18 },
            ],
            18: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils");
                function r(t) {
                  (this.data = t),
                    (this.length = t.length),
                    (this.index = 0),
                    (this.zero = 0);
                }
                (r.prototype = {
                  checkOffset: function (t) {
                    this.checkIndex(this.index + t);
                  },
                  checkIndex: function (t) {
                    if (this.length < this.zero + t || t < 0)
                      throw new Error(
                        "End of data reached (data length = " +
                          this.length +
                          ", asked index = " +
                          t +
                          "). Corrupted zip ?",
                      );
                  },
                  setIndex: function (t) {
                    this.checkIndex(t), (this.index = t);
                  },
                  skip: function (t) {
                    this.setIndex(this.index + t);
                  },
                  byteAt: function (t) {},
                  readInt: function (t) {
                    var e,
                      n = 0;
                    for (
                      this.checkOffset(t), e = this.index + t - 1;
                      e >= this.index;
                      e--
                    )
                      n = (n << 8) + this.byteAt(e);
                    return (this.index += t), n;
                  },
                  readString: function (t) {
                    return i.transformTo("string", this.readData(t));
                  },
                  readData: function (t) {},
                  lastIndexOfSignature: function (t) {},
                  readAndCheckSignature: function (t) {},
                  readDate: function () {
                    var t = this.readInt(4);
                    return new Date(
                      Date.UTC(
                        1980 + ((t >> 25) & 127),
                        ((t >> 21) & 15) - 1,
                        (t >> 16) & 31,
                        (t >> 11) & 31,
                        (t >> 5) & 63,
                        (31 & t) << 1,
                      ),
                    );
                  },
                }),
                  (e.exports = r);
              },
              { "../utils": 32 },
            ],
            19: [
              function (t, e, n) {
                "use strict";
                var i = t("./Uint8ArrayReader");
                function r(t) {
                  i.call(this, t);
                }
                t("../utils").inherits(r, i),
                  (r.prototype.readData = function (t) {
                    this.checkOffset(t);
                    var e = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + t,
                    );
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "../utils": 32, "./Uint8ArrayReader": 21 },
            ],
            20: [
              function (t, e, n) {
                "use strict";
                var i = t("./DataReader");
                function r(t) {
                  i.call(this, t);
                }
                t("../utils").inherits(r, i),
                  (r.prototype.byteAt = function (t) {
                    return this.data.charCodeAt(this.zero + t);
                  }),
                  (r.prototype.lastIndexOfSignature = function (t) {
                    return this.data.lastIndexOf(t) - this.zero;
                  }),
                  (r.prototype.readAndCheckSignature = function (t) {
                    return t === this.readData(4);
                  }),
                  (r.prototype.readData = function (t) {
                    this.checkOffset(t);
                    var e = this.data.slice(
                      this.zero + this.index,
                      this.zero + this.index + t,
                    );
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "../utils": 32, "./DataReader": 18 },
            ],
            21: [
              function (t, e, n) {
                "use strict";
                var i = t("./ArrayReader");
                function r(t) {
                  i.call(this, t);
                }
                t("../utils").inherits(r, i),
                  (r.prototype.readData = function (t) {
                    if ((this.checkOffset(t), 0 === t)) return new Uint8Array(0);
                    var e = this.data.subarray(
                      this.zero + this.index,
                      this.zero + this.index + t,
                    );
                    return (this.index += t), e;
                  }),
                  (e.exports = r);
              },
              { "../utils": 32, "./ArrayReader": 17 },
            ],
            22: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils"),
                  r = t("../support"),
                  s = t("./ArrayReader"),
                  o = t("./StringReader"),
                  a = t("./NodeBufferReader"),
                  h = t("./Uint8ArrayReader");
                e.exports = function (t) {
                  var e = i.getTypeOf(t);
                  return (
                    i.checkSupport(e),
                    "string" !== e || r.uint8array
                      ? "nodebuffer" === e
                        ? new a(t)
                        : r.uint8array
                          ? new h(i.transformTo("uint8array", t))
                          : new s(i.transformTo("array", t))
                      : new o(t)
                  );
                };
              },
              {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21,
              },
            ],
            23: [
              function (t, e, n) {
                "use strict";
                (n.LOCAL_FILE_HEADER = "PK"),
                  (n.CENTRAL_FILE_HEADER = "PK"),
                  (n.CENTRAL_DIRECTORY_END = "PK"),
                  (n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK"),
                  (n.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
                  (n.DATA_DESCRIPTOR = "PK\b");
              },
              {},
            ],
            24: [
              function (t, e, n) {
                "use strict";
                var i = t("./GenericWorker"),
                  r = t("../utils");
                function s(t) {
                  i.call(this, "ConvertWorker to " + t), (this.destType = t);
                }
                r.inherits(s, i),
                  (s.prototype.processChunk = function (t) {
                    this.push({
                      data: r.transformTo(this.destType, t.data),
                      meta: t.meta,
                    });
                  }),
                  (e.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 },
            ],
            25: [
              function (t, e, n) {
                "use strict";
                var i = t("./GenericWorker"),
                  r = t("../crc32");
                function s() {
                  i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                }
                t("../utils").inherits(s, i),
                  (s.prototype.processChunk = function (t) {
                    (this.streamInfo.crc32 = r(
                      t.data,
                      this.streamInfo.crc32 || 0,
                    )),
                      this.push(t);
                  }),
                  (e.exports = s);
              },
              { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
            ],
            26: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils"),
                  r = t("./GenericWorker");
                function s(t) {
                  r.call(this, "DataLengthProbe for " + t),
                    (this.propName = t),
                    this.withStreamInfo(t, 0);
                }
                i.inherits(s, r),
                  (s.prototype.processChunk = function (t) {
                    if (t) {
                      var e = this.streamInfo[this.propName] || 0;
                      this.streamInfo[this.propName] = e + t.data.length;
                    }
                    r.prototype.processChunk.call(this, t);
                  }),
                  (e.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 },
            ],
            27: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils"),
                  r = t("./GenericWorker");
                function s(t) {
                  r.call(this, "DataWorker");
                  var e = this;
                  (this.dataIsReady = !1),
                    (this.index = 0),
                    (this.max = 0),
                    (this.data = null),
                    (this.type = ""),
                    (this._tickScheduled = !1),
                    t.then(
                      function (t) {
                        (e.dataIsReady = !0),
                          (e.data = t),
                          (e.max = (t && t.length) || 0),
                          (e.type = i.getTypeOf(t)),
                          e.isPaused || e._tickAndRepeat();
                      },
                      function (t) {
                        e.error(t);
                      },
                    );
                }
                i.inherits(s, r),
                  (s.prototype.cleanUp = function () {
                    r.prototype.cleanUp.call(this), (this.data = null);
                  }),
                  (s.prototype.resume = function () {
                    return (
                      !!r.prototype.resume.call(this) &&
                      (!this._tickScheduled &&
                        this.dataIsReady &&
                        ((this._tickScheduled = !0),
                        i.delay(this._tickAndRepeat, [], this)),
                      !0)
                    );
                  }),
                  (s.prototype._tickAndRepeat = function () {
                    (this._tickScheduled = !1),
                      this.isPaused ||
                        this.isFinished ||
                        (this._tick(),
                        this.isFinished ||
                          (i.delay(this._tickAndRepeat, [], this),
                          (this._tickScheduled = !0)));
                  }),
                  (s.prototype._tick = function () {
                    if (this.isPaused || this.isFinished) return !1;
                    var t = null,
                      e = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch (this.type) {
                      case "string":
                        t = this.data.substring(this.index, e);
                        break;
                      case "uint8array":
                        t = this.data.subarray(this.index, e);
                        break;
                      case "array":
                      case "nodebuffer":
                        t = this.data.slice(this.index, e);
                    }
                    return (
                      (this.index = e),
                      this.push({
                        data: t,
                        meta: {
                          percent: this.max ? (this.index / this.max) * 100 : 0,
                        },
                      })
                    );
                  }),
                  (e.exports = s);
              },
              { "../utils": 32, "./GenericWorker": 28 },
            ],
            28: [
              function (t, e, n) {
                "use strict";
                function i(t) {
                  (this.name = t || "default"),
                    (this.streamInfo = {}),
                    (this.generatedError = null),
                    (this.extraStreamInfo = {}),
                    (this.isPaused = !0),
                    (this.isFinished = !1),
                    (this.isLocked = !1),
                    (this._listeners = { data: [], end: [], error: [] }),
                    (this.previous = null);
                }
                (i.prototype = {
                  push: function (t) {
                    this.emit("data", t);
                  },
                  end: function () {
                    if (this.isFinished) return !1;
                    this.flush();
                    try {
                      this.emit("end"), this.cleanUp(), (this.isFinished = !0);
                    } catch (t) {
                      this.emit("error", t);
                    }
                    return !0;
                  },
                  error: function (t) {
                    return (
                      !this.isFinished &&
                      (this.isPaused
                        ? (this.generatedError = t)
                        : ((this.isFinished = !0),
                          this.emit("error", t),
                          this.previous && this.previous.error(t),
                          this.cleanUp()),
                      !0)
                    );
                  },
                  on: function (t, e) {
                    return this._listeners[t].push(e), this;
                  },
                  cleanUp: function () {
                    (this.streamInfo =
                      this.generatedError =
                      this.extraStreamInfo =
                        null),
                      (this._listeners = []);
                  },
                  emit: function (t, e) {
                    if (this._listeners[t])
                      for (var n = 0; n < this._listeners[t].length; n++)
                        this._listeners[t][n].call(this, e);
                  },
                  pipe: function (t) {
                    return t.registerPrevious(this);
                  },
                  registerPrevious: function (t) {
                    if (this.isLocked)
                      throw new Error(
                        "The stream '" + this + "' has already been used.",
                      );
                    (this.streamInfo = t.streamInfo),
                      this.mergeStreamInfo(),
                      (this.previous = t);
                    var e = this;
                    return (
                      t.on("data", function (t) {
                        e.processChunk(t);
                      }),
                      t.on("end", function () {
                        e.end();
                      }),
                      t.on("error", function (t) {
                        e.error(t);
                      }),
                      this
                    );
                  },
                  pause: function () {
                    return (
                      !this.isPaused &&
                      !this.isFinished &&
                      ((this.isPaused = !0),
                      this.previous && this.previous.pause(),
                      !0)
                    );
                  },
                  resume: function () {
                    if (!this.isPaused || this.isFinished) return !1;
                    this.isPaused = !1;
                    var t = !1;
                    return (
                      this.generatedError &&
                        (this.error(this.generatedError), (t = !0)),
                      this.previous && this.previous.resume(),
                      !t
                    );
                  },
                  flush: function () {},
                  processChunk: function (t) {
                    this.push(t);
                  },
                  withStreamInfo: function (t, e) {
                    return (
                      (this.extraStreamInfo[t] = e), this.mergeStreamInfo(), this
                    );
                  },
                  mergeStreamInfo: function () {
                    for (var t in this.extraStreamInfo)
                      this.extraStreamInfo.hasOwnProperty(t) &&
                        (this.streamInfo[t] = this.extraStreamInfo[t]);
                  },
                  lock: function () {
                    if (this.isLocked)
                      throw new Error(
                        "The stream '" + this + "' has already been used.",
                      );
                    (this.isLocked = !0), this.previous && this.previous.lock();
                  },
                  toString: function () {
                    var t = "Worker " + this.name;
                    return this.previous ? this.previous + " -> " + t : t;
                  },
                }),
                  (e.exports = i);
              },
              {},
            ],
            29: [
              function (t, n, i) {
                "use strict";
                var r = t("../utils"),
                  s = t("./ConvertWorker"),
                  o = t("./GenericWorker"),
                  a = t("../base64"),
                  h = t("../support"),
                  l = t("../external"),
                  u = null;
                if (h.nodestream)
                  try {
                    u = t("../nodejs/NodejsStreamOutputAdapter");
                  } catch (t) {}
                function c(t, n) {
                  return new l.Promise(function (i, s) {
                    var o = [],
                      h = t._internalType,
                      l = t._outputType,
                      u = t._mimeType;
                    t.on("data", function (t, e) {
                      o.push(t), n && n(e);
                    })
                      .on("error", function (t) {
                        (o = []), s(t);
                      })
                      .on("end", function () {
                        try {
                          var t = (function (t, e, n) {
                            switch (t) {
                              case "blob":
                                return r.newBlob(
                                  r.transformTo("arraybuffer", e),
                                  n,
                                );
                              case "base64":
                                return a.encode(e);
                              default:
                                return r.transformTo(t, e);
                            }
                          })(
                            l,
                            (function (t, n) {
                              var i,
                                r = 0,
                                s = null,
                                o = 0;
                              for (i = 0; i < n.length; i++) o += n[i].length;
                              switch (t) {
                                case "string":
                                  return n.join("");
                                case "array":
                                  return Array.prototype.concat.apply([], n);
                                case "uint8array":
                                  for (
                                    s = new Uint8Array(o), i = 0;
                                    i < n.length;
                                    i++
                                  )
                                    s.set(n[i], r), (r += n[i].length);
                                  return s;
                                case "nodebuffer":
                                  return e.concat(n);
                                default:
                                  throw new Error(
                                    "concat : unsupported type '" + t + "'",
                                  );
                              }
                            })(h, o),
                            u,
                          );
                          i(t);
                        } catch (t) {
                          s(t);
                        }
                        o = [];
                      })
                      .resume();
                  });
                }
                function d(t, e, n) {
                  var i = e;
                  switch (e) {
                    case "blob":
                    case "arraybuffer":
                      i = "uint8array";
                      break;
                    case "base64":
                      i = "string";
                  }
                  try {
                    (this._internalType = i),
                      (this._outputType = e),
                      (this._mimeType = n),
                      r.checkSupport(i),
                      (this._worker = t.pipe(new s(i))),
                      t.lock();
                  } catch (t) {
                    (this._worker = new o("error")), this._worker.error(t);
                  }
                }
                (d.prototype = {
                  accumulate: function (t) {
                    return c(this, t);
                  },
                  on: function (t, e) {
                    var n = this;
                    return (
                      "data" === t
                        ? this._worker.on(t, function (t) {
                            e.call(n, t.data, t.meta);
                          })
                        : this._worker.on(t, function () {
                            r.delay(e, arguments, n);
                          }),
                      this
                    );
                  },
                  resume: function () {
                    return r.delay(this._worker.resume, [], this._worker), this;
                  },
                  pause: function () {
                    return this._worker.pause(), this;
                  },
                  toNodejsStream: function (t) {
                    if (
                      (r.checkSupport("nodestream"),
                      "nodebuffer" !== this._outputType)
                    )
                      throw new Error(
                        this._outputType + " is not supported by this method",
                      );
                    return new u(
                      this,
                      { objectMode: "nodebuffer" !== this._outputType },
                      t,
                    );
                  },
                }),
                  (n.exports = d);
              },
              {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28,
              },
            ],
            30: [
              function (t, n, i) {
                "use strict";
                if (
                  ((i.base64 = !0),
                  (i.array = !0),
                  (i.string = !0),
                  (i.arraybuffer =
                    "undefined" != typeof ArrayBuffer &&
                    "undefined" != typeof Uint8Array),
                  (i.nodebuffer = void 0 !== e),
                  (i.uint8array = "undefined" != typeof Uint8Array),
                  "undefined" == typeof ArrayBuffer)
                )
                  i.blob = !1;
                else {
                  var r = new ArrayBuffer(0);
                  try {
                    i.blob =
                      0 === new Blob([r], { type: "application/zip" }).size;
                  } catch (t) {
                    try {
                      var s = new (self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder)();
                      s.append(r),
                        (i.blob = 0 === s.getBlob("application/zip").size);
                    } catch (t) {
                      i.blob = !1;
                    }
                  }
                }
                try {
                  i.nodestream = !!t("readable-stream").Readable;
                } catch (t) {
                  i.nodestream = !1;
                }
              },
              { "readable-stream": 16 },
            ],
            31: [
              function (t, e, n) {
                "use strict";
                for (
                  var i = t("./utils"),
                    r = t("./support"),
                    s = t("./nodejsUtils"),
                    o = t("./stream/GenericWorker"),
                    a = new Array(256),
                    h = 0;
                  h < 256;
                  h++
                )
                  a[h] =
                    h >= 252
                      ? 6
                      : h >= 248
                        ? 5
                        : h >= 240
                          ? 4
                          : h >= 224
                            ? 3
                            : h >= 192
                              ? 2
                              : 1;
                function l() {
                  o.call(this, "utf-8 decode"), (this.leftOver = null);
                }
                function u() {
                  o.call(this, "utf-8 encode");
                }
                (a[254] = a[254] = 1),
                  (n.utf8encode = function (t) {
                    return r.nodebuffer
                      ? s.newBufferFrom(t, "utf-8")
                      : (function (t) {
                          var e,
                            n,
                            i,
                            s,
                            o,
                            a = t.length,
                            h = 0;
                          for (s = 0; s < a; s++)
                            55296 == (64512 & (n = t.charCodeAt(s))) &&
                              s + 1 < a &&
                              56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
                              ((n = 65536 + ((n - 55296) << 10) + (i - 56320)),
                              s++),
                              (h +=
                                n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                          for (
                            e = r.uint8array ? new Uint8Array(h) : new Array(h),
                              o = 0,
                              s = 0;
                            o < h;
                            s++
                          )
                            55296 == (64512 & (n = t.charCodeAt(s))) &&
                              s + 1 < a &&
                              56320 == (64512 & (i = t.charCodeAt(s + 1))) &&
                              ((n = 65536 + ((n - 55296) << 10) + (i - 56320)),
                              s++),
                              n < 128
                                ? (e[o++] = n)
                                : n < 2048
                                  ? ((e[o++] = 192 | (n >>> 6)),
                                    (e[o++] = 128 | (63 & n)))
                                  : n < 65536
                                    ? ((e[o++] = 224 | (n >>> 12)),
                                      (e[o++] = 128 | ((n >>> 6) & 63)),
                                      (e[o++] = 128 | (63 & n)))
                                    : ((e[o++] = 240 | (n >>> 18)),
                                      (e[o++] = 128 | ((n >>> 12) & 63)),
                                      (e[o++] = 128 | ((n >>> 6) & 63)),
                                      (e[o++] = 128 | (63 & n)));
                          return e;
                        })(t);
                  }),
                  (n.utf8decode = function (t) {
                    return r.nodebuffer
                      ? i.transformTo("nodebuffer", t).toString("utf-8")
                      : (function (t) {
                          var e,
                            n,
                            r,
                            s,
                            o = t.length,
                            h = new Array(2 * o);
                          for (n = 0, e = 0; e < o; )
                            if ((r = t[e++]) < 128) h[n++] = r;
                            else if ((s = a[r]) > 4)
                              (h[n++] = 65533), (e += s - 1);
                            else {
                              for (
                                r &= 2 === s ? 31 : 3 === s ? 15 : 7;
                                s > 1 && e < o;
  
                              )
                                (r = (r << 6) | (63 & t[e++])), s--;
                              s > 1
                                ? (h[n++] = 65533)
                                : r < 65536
                                  ? (h[n++] = r)
                                  : ((r -= 65536),
                                    (h[n++] = 55296 | ((r >> 10) & 1023)),
                                    (h[n++] = 56320 | (1023 & r)));
                            }
                          return (
                            h.length !== n &&
                              (h.subarray
                                ? (h = h.subarray(0, n))
                                : (h.length = n)),
                            i.applyFromCharCode(h)
                          );
                        })(
                          (t = i.transformTo(
                            r.uint8array ? "uint8array" : "array",
                            t,
                          )),
                        );
                  }),
                  i.inherits(l, o),
                  (l.prototype.processChunk = function (t) {
                    var e = i.transformTo(
                      r.uint8array ? "uint8array" : "array",
                      t.data,
                    );
                    if (this.leftOver && this.leftOver.length) {
                      if (r.uint8array) {
                        var s = e;
                        (e = new Uint8Array(s.length + this.leftOver.length)).set(
                          this.leftOver,
                          0,
                        ),
                          e.set(s, this.leftOver.length);
                      } else e = this.leftOver.concat(e);
                      this.leftOver = null;
                    }
                    var o = (function (t, e) {
                        var n;
                        for (
                          (e = e || t.length) > t.length && (e = t.length),
                            n = e - 1;
                          n >= 0 && 128 == (192 & t[n]);
  
                        )
                          n--;
                        return n < 0 || 0 === n ? e : n + a[t[n]] > e ? n : e;
                      })(e),
                      h = e;
                    o !== e.length &&
                      (r.uint8array
                        ? ((h = e.subarray(0, o)),
                          (this.leftOver = e.subarray(o, e.length)))
                        : ((h = e.slice(0, o)),
                          (this.leftOver = e.slice(o, e.length)))),
                      this.push({ data: n.utf8decode(h), meta: t.meta });
                  }),
                  (l.prototype.flush = function () {
                    this.leftOver &&
                      this.leftOver.length &&
                      (this.push({ data: n.utf8decode(this.leftOver), meta: {} }),
                      (this.leftOver = null));
                  }),
                  (n.Utf8DecodeWorker = l),
                  i.inherits(u, o),
                  (u.prototype.processChunk = function (t) {
                    this.push({ data: n.utf8encode(t.data), meta: t.meta });
                  }),
                  (n.Utf8EncodeWorker = u);
              },
              {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32,
              },
            ],
            32: [
              function (t, e, n) {
                "use strict";
                var i = t("./support"),
                  r = t("./base64"),
                  s = t("./nodejsUtils"),
                  o = t("set-immediate-shim"),
                  a = t("./external");
                function h(t) {
                  return t;
                }
                function l(t, e) {
                  for (var n = 0; n < t.length; ++n) e[n] = 255 & t.charCodeAt(n);
                  return e;
                }
                n.newBlob = function (t, e) {
                  n.checkSupport("blob");
                  try {
                    return new Blob([t], { type: e });
                  } catch (n) {
                    try {
                      var i = new (self.BlobBuilder ||
                        self.WebKitBlobBuilder ||
                        self.MozBlobBuilder ||
                        self.MSBlobBuilder)();
                      return i.append(t), i.getBlob(e);
                    } catch (t) {
                      throw new Error("Bug : can't construct the Blob.");
                    }
                  }
                };
                var u = {
                  stringifyByChunk: function (t, e, n) {
                    var i = [],
                      r = 0,
                      s = t.length;
                    if (s <= n) return String.fromCharCode.apply(null, t);
                    for (; r < s; )
                      "array" === e || "nodebuffer" === e
                        ? i.push(
                            String.fromCharCode.apply(
                              null,
                              t.slice(r, Math.min(r + n, s)),
                            ),
                          )
                        : i.push(
                            String.fromCharCode.apply(
                              null,
                              t.subarray(r, Math.min(r + n, s)),
                            ),
                          ),
                        (r += n);
                    return i.join("");
                  },
                  stringifyByChar: function (t) {
                    for (var e = "", n = 0; n < t.length; n++)
                      e += String.fromCharCode(t[n]);
                    return e;
                  },
                  applyCanBeUsed: {
                    uint8array: (function () {
                      try {
                        return (
                          i.uint8array &&
                          1 ===
                            String.fromCharCode.apply(null, new Uint8Array(1))
                              .length
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                    nodebuffer: (function () {
                      try {
                        return (
                          i.nodebuffer &&
                          1 ===
                            String.fromCharCode.apply(null, s.allocBuffer(1))
                              .length
                        );
                      } catch (t) {
                        return !1;
                      }
                    })(),
                  },
                };
                function c(t) {
                  var e = 65536,
                    i = n.getTypeOf(t),
                    r = !0;
                  if (
                    ("uint8array" === i
                      ? (r = u.applyCanBeUsed.uint8array)
                      : "nodebuffer" === i && (r = u.applyCanBeUsed.nodebuffer),
                    r)
                  )
                    for (; e > 1; )
                      try {
                        return u.stringifyByChunk(t, i, e);
                      } catch (t) {
                        e = Math.floor(e / 2);
                      }
                  return u.stringifyByChar(t);
                }
                function d(t, e) {
                  for (var n = 0; n < t.length; n++) e[n] = t[n];
                  return e;
                }
                n.applyFromCharCode = c;
                var f = {};
                (f.string = {
                  string: h,
                  array: function (t) {
                    return l(t, new Array(t.length));
                  },
                  arraybuffer: function (t) {
                    return f.string.uint8array(t).buffer;
                  },
                  uint8array: function (t) {
                    return l(t, new Uint8Array(t.length));
                  },
                  nodebuffer: function (t) {
                    return l(t, s.allocBuffer(t.length));
                  },
                }),
                  (f.array = {
                    string: c,
                    array: h,
                    arraybuffer: function (t) {
                      return new Uint8Array(t).buffer;
                    },
                    uint8array: function (t) {
                      return new Uint8Array(t);
                    },
                    nodebuffer: function (t) {
                      return s.newBufferFrom(t);
                    },
                  }),
                  (f.arraybuffer = {
                    string: function (t) {
                      return c(new Uint8Array(t));
                    },
                    array: function (t) {
                      return d(new Uint8Array(t), new Array(t.byteLength));
                    },
                    arraybuffer: h,
                    uint8array: function (t) {
                      return new Uint8Array(t);
                    },
                    nodebuffer: function (t) {
                      return s.newBufferFrom(new Uint8Array(t));
                    },
                  }),
                  (f.uint8array = {
                    string: c,
                    array: function (t) {
                      return d(t, new Array(t.length));
                    },
                    arraybuffer: function (t) {
                      return t.buffer;
                    },
                    uint8array: h,
                    nodebuffer: function (t) {
                      return s.newBufferFrom(t);
                    },
                  }),
                  (f.nodebuffer = {
                    string: c,
                    array: function (t) {
                      return d(t, new Array(t.length));
                    },
                    arraybuffer: function (t) {
                      return f.nodebuffer.uint8array(t).buffer;
                    },
                    uint8array: function (t) {
                      return d(t, new Uint8Array(t.length));
                    },
                    nodebuffer: h,
                  }),
                  (n.transformTo = function (t, e) {
                    if ((e || (e = ""), !t)) return e;
                    n.checkSupport(t);
                    var i = n.getTypeOf(e);
                    return f[i][t](e);
                  }),
                  (n.getTypeOf = function (t) {
                    return "string" == typeof t
                      ? "string"
                      : "[object Array]" === Object.prototype.toString.call(t)
                        ? "array"
                        : i.nodebuffer && s.isBuffer(t)
                          ? "nodebuffer"
                          : i.uint8array && t instanceof Uint8Array
                            ? "uint8array"
                            : i.arraybuffer && t instanceof ArrayBuffer
                              ? "arraybuffer"
                              : void 0;
                  }),
                  (n.checkSupport = function (t) {
                    if (!i[t.toLowerCase()])
                      throw new Error(t + " is not supported by this platform");
                  }),
                  (n.MAX_VALUE_16BITS = 65535),
                  (n.MAX_VALUE_32BITS = -1),
                  (n.pretty = function (t) {
                    var e,
                      n,
                      i = "";
                    for (n = 0; n < (t || "").length; n++)
                      i +=
                        "\\x" +
                        ((e = t.charCodeAt(n)) < 16 ? "0" : "") +
                        e.toString(16).toUpperCase();
                    return i;
                  }),
                  (n.delay = function (t, e, n) {
                    o(function () {
                      t.apply(n || null, e || []);
                    });
                  }),
                  (n.inherits = function (t, e) {
                    var n = function () {};
                    (n.prototype = e.prototype), (t.prototype = new n());
                  }),
                  (n.extend = function () {
                    var t,
                      e,
                      n = {};
                    for (t = 0; t < arguments.length; t++)
                      for (e in arguments[t])
                        arguments[t].hasOwnProperty(e) &&
                          void 0 === n[e] &&
                          (n[e] = arguments[t][e]);
                    return n;
                  }),
                  (n.prepareContent = function (t, e, s, o, h) {
                    return a.Promise.resolve(e)
                      .then(function (t) {
                        return i.blob &&
                          (t instanceof Blob ||
                            -1 !==
                              ["[object File]", "[object Blob]"].indexOf(
                                Object.prototype.toString.call(t),
                              )) &&
                          "undefined" != typeof FileReader
                          ? new a.Promise(function (e, n) {
                              var i = new FileReader();
                              (i.onload = function (t) {
                                e(t.target.result);
                              }),
                                (i.onerror = function (t) {
                                  n(t.target.error);
                                }),
                                i.readAsArrayBuffer(t);
                            })
                          : t;
                      })
                      .then(function (e) {
                        var u,
                          c = n.getTypeOf(e);
                        return c
                          ? ("arraybuffer" === c
                              ? (e = n.transformTo("uint8array", e))
                              : "string" === c &&
                                (h
                                  ? (e = r.decode(e))
                                  : s &&
                                    !0 !== o &&
                                    (e = l(
                                      (u = e),
                                      i.uint8array
                                        ? new Uint8Array(u.length)
                                        : new Array(u.length),
                                    ))),
                            e)
                          : a.Promise.reject(
                              new Error(
                                "Can't read the data of '" +
                                  t +
                                  "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                              ),
                            );
                      });
                  });
              },
              {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                "set-immediate-shim": 54,
              },
            ],
            33: [
              function (t, e, n) {
                "use strict";
                var i = t("./reader/readerFor"),
                  r = t("./utils"),
                  s = t("./signature"),
                  o = t("./zipEntry"),
                  a = (t("./utf8"), t("./support"));
                function h(t) {
                  (this.files = []), (this.loadOptions = t);
                }
                (h.prototype = {
                  checkSignature: function (t) {
                    if (!this.reader.readAndCheckSignature(t)) {
                      this.reader.index -= 4;
                      var e = this.reader.readString(4);
                      throw new Error(
                        "Corrupted zip or bug: unexpected signature (" +
                          r.pretty(e) +
                          ", expected " +
                          r.pretty(t) +
                          ")",
                      );
                    }
                  },
                  isSignature: function (t, e) {
                    var n = this.reader.index;
                    this.reader.setIndex(t);
                    var i = this.reader.readString(4) === e;
                    return this.reader.setIndex(n), i;
                  },
                  readBlockEndOfCentral: function () {
                    (this.diskNumber = this.reader.readInt(2)),
                      (this.diskWithCentralDirStart = this.reader.readInt(2)),
                      (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                      (this.centralDirRecords = this.reader.readInt(2)),
                      (this.centralDirSize = this.reader.readInt(4)),
                      (this.centralDirOffset = this.reader.readInt(4)),
                      (this.zipCommentLength = this.reader.readInt(2));
                    var t = this.reader.readData(this.zipCommentLength),
                      e = a.uint8array ? "uint8array" : "array",
                      n = r.transformTo(e, t);
                    this.zipComment = this.loadOptions.decodeFileName(n);
                  },
                  readBlockZip64EndOfCentral: function () {
                    (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                      this.reader.skip(4),
                      (this.diskNumber = this.reader.readInt(4)),
                      (this.diskWithCentralDirStart = this.reader.readInt(4)),
                      (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                      (this.centralDirRecords = this.reader.readInt(8)),
                      (this.centralDirSize = this.reader.readInt(8)),
                      (this.centralDirOffset = this.reader.readInt(8)),
                      (this.zip64ExtensibleData = {});
                    for (
                      var t, e, n, i = this.zip64EndOfCentralSize - 44;
                      0 < i;
  
                    )
                      (t = this.reader.readInt(2)),
                        (e = this.reader.readInt(4)),
                        (n = this.reader.readData(e)),
                        (this.zip64ExtensibleData[t] = {
                          id: t,
                          length: e,
                          value: n,
                        });
                  },
                  readBlockZip64EndOfCentralLocator: function () {
                    if (
                      ((this.diskWithZip64CentralDirStart =
                        this.reader.readInt(4)),
                      (this.relativeOffsetEndOfZip64CentralDir =
                        this.reader.readInt(8)),
                      (this.disksCount = this.reader.readInt(4)),
                      this.disksCount > 1)
                    )
                      throw new Error("Multi-volumes zip are not supported");
                  },
                  readLocalFiles: function () {
                    var t, e;
                    for (t = 0; t < this.files.length; t++)
                      (e = this.files[t]),
                        this.reader.setIndex(e.localHeaderOffset),
                        this.checkSignature(s.LOCAL_FILE_HEADER),
                        e.readLocalPart(this.reader),
                        e.handleUTF8(),
                        e.processAttributes();
                  },
                  readCentralDir: function () {
                    var t;
                    for (
                      this.reader.setIndex(this.centralDirOffset);
                      this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);
  
                    )
                      (t = new o(
                        { zip64: this.zip64 },
                        this.loadOptions,
                      )).readCentralPart(this.reader),
                        this.files.push(t);
                    if (
                      this.centralDirRecords !== this.files.length &&
                      0 !== this.centralDirRecords &&
                      0 === this.files.length
                    )
                      throw new Error(
                        "Corrupted zip or bug: expected " +
                          this.centralDirRecords +
                          " records in central dir, got " +
                          this.files.length,
                      );
                  },
                  readEndOfCentral: function () {
                    var t = this.reader.lastIndexOfSignature(
                      s.CENTRAL_DIRECTORY_END,
                    );
                    if (t < 0)
                      throw this.isSignature(0, s.LOCAL_FILE_HEADER)
                        ? new Error(
                            "Corrupted zip: can't find end of central directory",
                          )
                        : new Error(
                            "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                          );
                    this.reader.setIndex(t);
                    var e = t;
                    if (
                      (this.checkSignature(s.CENTRAL_DIRECTORY_END),
                      this.readBlockEndOfCentral(),
                      this.diskNumber === r.MAX_VALUE_16BITS ||
                        this.diskWithCentralDirStart === r.MAX_VALUE_16BITS ||
                        this.centralDirRecordsOnThisDisk === r.MAX_VALUE_16BITS ||
                        this.centralDirRecords === r.MAX_VALUE_16BITS ||
                        this.centralDirSize === r.MAX_VALUE_32BITS ||
                        this.centralDirOffset === r.MAX_VALUE_32BITS)
                    ) {
                      if (
                        ((this.zip64 = !0),
                        (t = this.reader.lastIndexOfSignature(
                          s.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                        )) < 0)
                      )
                        throw new Error(
                          "Corrupted zip: can't find the ZIP64 end of central directory locator",
                        );
                      if (
                        (this.reader.setIndex(t),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                        this.readBlockZip64EndOfCentralLocator(),
                        !this.isSignature(
                          this.relativeOffsetEndOfZip64CentralDir,
                          s.ZIP64_CENTRAL_DIRECTORY_END,
                        ) &&
                          ((this.relativeOffsetEndOfZip64CentralDir =
                            this.reader.lastIndexOfSignature(
                              s.ZIP64_CENTRAL_DIRECTORY_END,
                            )),
                          this.relativeOffsetEndOfZip64CentralDir < 0))
                      )
                        throw new Error(
                          "Corrupted zip: can't find the ZIP64 end of central directory",
                        );
                      this.reader.setIndex(
                        this.relativeOffsetEndOfZip64CentralDir,
                      ),
                        this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),
                        this.readBlockZip64EndOfCentral();
                    }
                    var n = this.centralDirOffset + this.centralDirSize;
                    this.zip64 &&
                      ((n += 20), (n += 12 + this.zip64EndOfCentralSize));
                    var i = e - n;
                    if (i > 0)
                      this.isSignature(e, s.CENTRAL_FILE_HEADER) ||
                        (this.reader.zero = i);
                    else if (i < 0)
                      throw new Error(
                        "Corrupted zip: missing " + Math.abs(i) + " bytes.",
                      );
                  },
                  prepareReader: function (t) {
                    this.reader = i(t);
                  },
                  load: function (t) {
                    this.prepareReader(t),
                      this.readEndOfCentral(),
                      this.readCentralDir(),
                      this.readLocalFiles();
                  },
                }),
                  (e.exports = h);
              },
              {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntry": 34,
              },
            ],
            34: [
              function (t, e, n) {
                "use strict";
                var i = t("./reader/readerFor"),
                  r = t("./utils"),
                  s = t("./compressedObject"),
                  o = t("./crc32"),
                  a = t("./utf8"),
                  h = t("./compressions"),
                  l = t("./support");
                function u(t, e) {
                  (this.options = t), (this.loadOptions = e);
                }
                (u.prototype = {
                  isEncrypted: function () {
                    return 1 == (1 & this.bitFlag);
                  },
                  useUTF8: function () {
                    return 2048 == (2048 & this.bitFlag);
                  },
                  readLocalPart: function (t) {
                    var e, n;
                    if (
                      (t.skip(22),
                      (this.fileNameLength = t.readInt(2)),
                      (n = t.readInt(2)),
                      (this.fileName = t.readData(this.fileNameLength)),
                      t.skip(n),
                      -1 === this.compressedSize || -1 === this.uncompressedSize)
                    )
                      throw new Error(
                        "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                      );
                    if (
                      null ===
                      (e = (function (t) {
                        for (var e in h)
                          if (h.hasOwnProperty(e) && h[e].magic === t)
                            return h[e];
                        return null;
                      })(this.compressionMethod))
                    )
                      throw new Error(
                        "Corrupted zip : compression " +
                          r.pretty(this.compressionMethod) +
                          " unknown (inner file : " +
                          r.transformTo("string", this.fileName) +
                          ")",
                      );
                    this.decompressed = new s(
                      this.compressedSize,
                      this.uncompressedSize,
                      this.crc32,
                      e,
                      t.readData(this.compressedSize),
                    );
                  },
                  readCentralPart: function (t) {
                    (this.versionMadeBy = t.readInt(2)),
                      t.skip(2),
                      (this.bitFlag = t.readInt(2)),
                      (this.compressionMethod = t.readString(2)),
                      (this.date = t.readDate()),
                      (this.crc32 = t.readInt(4)),
                      (this.compressedSize = t.readInt(4)),
                      (this.uncompressedSize = t.readInt(4));
                    var e = t.readInt(2);
                    if (
                      ((this.extraFieldsLength = t.readInt(2)),
                      (this.fileCommentLength = t.readInt(2)),
                      (this.diskNumberStart = t.readInt(2)),
                      (this.internalFileAttributes = t.readInt(2)),
                      (this.externalFileAttributes = t.readInt(4)),
                      (this.localHeaderOffset = t.readInt(4)),
                      this.isEncrypted())
                    )
                      throw new Error("Encrypted zip are not supported");
                    t.skip(e),
                      this.readExtraFields(t),
                      this.parseZIP64ExtraField(t),
                      (this.fileComment = t.readData(this.fileCommentLength));
                  },
                  processAttributes: function () {
                    (this.unixPermissions = null), (this.dosPermissions = null);
                    var t = this.versionMadeBy >> 8;
                    (this.dir = !!(16 & this.externalFileAttributes)),
                      0 === t &&
                        (this.dosPermissions = 63 & this.externalFileAttributes),
                      3 === t &&
                        (this.unixPermissions =
                          (this.externalFileAttributes >> 16) & 65535),
                      this.dir ||
                        "/" !== this.fileNameStr.slice(-1) ||
                        (this.dir = !0);
                  },
                  parseZIP64ExtraField: function (t) {
                    if (this.extraFields[1]) {
                      var e = i(this.extraFields[1].value);
                      this.uncompressedSize === r.MAX_VALUE_32BITS &&
                        (this.uncompressedSize = e.readInt(8)),
                        this.compressedSize === r.MAX_VALUE_32BITS &&
                          (this.compressedSize = e.readInt(8)),
                        this.localHeaderOffset === r.MAX_VALUE_32BITS &&
                          (this.localHeaderOffset = e.readInt(8)),
                        this.diskNumberStart === r.MAX_VALUE_32BITS &&
                          (this.diskNumberStart = e.readInt(4));
                    }
                  },
                  readExtraFields: function (t) {
                    var e,
                      n,
                      i,
                      r = t.index + this.extraFieldsLength;
                    for (
                      this.extraFields || (this.extraFields = {});
                      t.index + 4 < r;
  
                    )
                      (e = t.readInt(2)),
                        (n = t.readInt(2)),
                        (i = t.readData(n)),
                        (this.extraFields[e] = { id: e, length: n, value: i });
                    t.setIndex(r);
                  },
                  handleUTF8: function () {
                    var t = l.uint8array ? "uint8array" : "array";
                    if (this.useUTF8())
                      (this.fileNameStr = a.utf8decode(this.fileName)),
                        (this.fileCommentStr = a.utf8decode(this.fileComment));
                    else {
                      var e = this.findExtraFieldUnicodePath();
                      if (null !== e) this.fileNameStr = e;
                      else {
                        var n = r.transformTo(t, this.fileName);
                        this.fileNameStr = this.loadOptions.decodeFileName(n);
                      }
                      var i = this.findExtraFieldUnicodeComment();
                      if (null !== i) this.fileCommentStr = i;
                      else {
                        var s = r.transformTo(t, this.fileComment);
                        this.fileCommentStr = this.loadOptions.decodeFileName(s);
                      }
                    }
                  },
                  findExtraFieldUnicodePath: function () {
                    var t = this.extraFields[28789];
                    if (t) {
                      var e = i(t.value);
                      return 1 !== e.readInt(1) ||
                        o(this.fileName) !== e.readInt(4)
                        ? null
                        : a.utf8decode(e.readData(t.length - 5));
                    }
                    return null;
                  },
                  findExtraFieldUnicodeComment: function () {
                    var t = this.extraFields[25461];
                    if (t) {
                      var e = i(t.value);
                      return 1 !== e.readInt(1) ||
                        o(this.fileComment) !== e.readInt(4)
                        ? null
                        : a.utf8decode(e.readData(t.length - 5));
                    }
                    return null;
                  },
                }),
                  (e.exports = u);
              },
              {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32,
              },
            ],
            35: [
              function (t, e, n) {
                "use strict";
                var i = t("./stream/StreamHelper"),
                  r = t("./stream/DataWorker"),
                  s = t("./utf8"),
                  o = t("./compressedObject"),
                  a = t("./stream/GenericWorker"),
                  h = function (t, e, n) {
                    (this.name = t),
                      (this.dir = n.dir),
                      (this.date = n.date),
                      (this.comment = n.comment),
                      (this.unixPermissions = n.unixPermissions),
                      (this.dosPermissions = n.dosPermissions),
                      (this._data = e),
                      (this._dataBinary = n.binary),
                      (this.options = {
                        compression: n.compression,
                        compressionOptions: n.compressionOptions,
                      });
                  };
                h.prototype = {
                  internalStream: function (t) {
                    var e = null,
                      n = "string";
                    try {
                      if (!t) throw new Error("No output type specified.");
                      var r = "string" === (n = t.toLowerCase()) || "text" === n;
                      ("binarystring" !== n && "text" !== n) || (n = "string"),
                        (e = this._decompressWorker());
                      var o = !this._dataBinary;
                      o && !r && (e = e.pipe(new s.Utf8EncodeWorker())),
                        !o && r && (e = e.pipe(new s.Utf8DecodeWorker()));
                    } catch (t) {
                      (e = new a("error")).error(t);
                    }
                    return new i(e, n, "");
                  },
                  async: function (t, e) {
                    return this.internalStream(t).accumulate(e);
                  },
                  nodeStream: function (t, e) {
                    return this.internalStream(t || "nodebuffer").toNodejsStream(
                      e,
                    );
                  },
                  _compressWorker: function (t, e) {
                    if (
                      this._data instanceof o &&
                      this._data.compression.magic === t.magic
                    )
                      return this._data.getCompressedWorker();
                    var n = this._decompressWorker();
                    return (
                      this._dataBinary || (n = n.pipe(new s.Utf8EncodeWorker())),
                      o.createWorkerFrom(n, t, e)
                    );
                  },
                  _decompressWorker: function () {
                    return this._data instanceof o
                      ? this._data.getContentWorker()
                      : this._data instanceof a
                        ? this._data
                        : new r(this._data);
                  },
                };
                for (
                  var l = [
                      "asText",
                      "asBinary",
                      "asNodeBuffer",
                      "asUint8Array",
                      "asArrayBuffer",
                    ],
                    u = function () {
                      throw new Error(
                        "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                      );
                    },
                    c = 0;
                  c < l.length;
                  c++
                )
                  h.prototype[l[c]] = u;
                e.exports = h;
              },
              {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
              },
            ],
            36: [
              function (t, e, i) {
                (function (t) {
                  "use strict";
                  var n,
                    i,
                    r = t.MutationObserver || t.WebKitMutationObserver;
                  if (r) {
                    var s = 0,
                      o = new r(u),
                      a = t.document.createTextNode("");
                    o.observe(a, { characterData: !0 }),
                      (n = function () {
                        a.data = s = ++s % 2;
                      });
                  } else if (t.setImmediate || void 0 === t.MessageChannel)
                    n =
                      "document" in t &&
                      "onreadystatechange" in t.document.createElement("script")
                        ? function () {
                            var e = t.document.createElement("script");
                            (e.onreadystatechange = function () {
                              u(),
                                (e.onreadystatechange = null),
                                e.parentNode.removeChild(e),
                                (e = null);
                            }),
                              t.document.documentElement.appendChild(e);
                          }
                        : function () {
                            setTimeout(u, 0);
                          };
                  else {
                    var h = new t.MessageChannel();
                    (h.port1.onmessage = u),
                      (n = function () {
                        h.port2.postMessage(0);
                      });
                  }
                  var l = [];
                  function u() {
                    var t, e;
                    i = !0;
                    for (var n = l.length; n; ) {
                      for (e = l, l = [], t = -1; ++t < n; ) e[t]();
                      n = l.length;
                    }
                    i = !1;
                  }
                  e.exports = function (t) {
                    1 !== l.push(t) || i || n();
                  };
                }).call(
                  this,
                  void 0 !== n
                    ? n
                    : "undefined" != typeof self
                      ? self
                      : "undefined" != typeof window
                        ? window
                        : {},
                );
              },
              {},
            ],
            37: [
              function (t, e, n) {
                "use strict";
                var i = t("immediate");
                function r() {}
                var s = {},
                  o = ["REJECTED"],
                  a = ["FULFILLED"],
                  h = ["PENDING"];
                function l(t) {
                  if ("function" != typeof t)
                    throw new TypeError("resolver must be a function");
                  (this.state = h),
                    (this.queue = []),
                    (this.outcome = void 0),
                    t !== r && f(this, t);
                }
                function u(t, e, n) {
                  (this.promise = t),
                    "function" == typeof e &&
                      ((this.onFulfilled = e),
                      (this.callFulfilled = this.otherCallFulfilled)),
                    "function" == typeof n &&
                      ((this.onRejected = n),
                      (this.callRejected = this.otherCallRejected));
                }
                function c(t, e, n) {
                  i(function () {
                    var i;
                    try {
                      i = e(n);
                    } catch (e) {
                      return s.reject(t, e);
                    }
                    i === t
                      ? s.reject(
                          t,
                          new TypeError("Cannot resolve promise with itself"),
                        )
                      : s.resolve(t, i);
                  });
                }
                function d(t) {
                  var e = t && t.then;
                  if (
                    t &&
                    ("object" == typeof t || "function" == typeof t) &&
                    "function" == typeof e
                  )
                    return function () {
                      e.apply(t, arguments);
                    };
                }
                function f(t, e) {
                  var n = !1;
                  function i(e) {
                    n || ((n = !0), s.reject(t, e));
                  }
                  function r(e) {
                    n || ((n = !0), s.resolve(t, e));
                  }
                  var o = p(function () {
                    e(r, i);
                  });
                  "error" === o.status && i(o.value);
                }
                function p(t, e) {
                  var n = {};
                  try {
                    (n.value = t(e)), (n.status = "success");
                  } catch (t) {
                    (n.status = "error"), (n.value = t);
                  }
                  return n;
                }
                (e.exports = l),
                  (l.prototype.finally = function (t) {
                    if ("function" != typeof t) return this;
                    var e = this.constructor;
                    return this.then(
                      function (n) {
                        return e.resolve(t()).then(function () {
                          return n;
                        });
                      },
                      function (n) {
                        return e.resolve(t()).then(function () {
                          throw n;
                        });
                      },
                    );
                  }),
                  (l.prototype.catch = function (t) {
                    return this.then(null, t);
                  }),
                  (l.prototype.then = function (t, e) {
                    if (
                      ("function" != typeof t && this.state === a) ||
                      ("function" != typeof e && this.state === o)
                    )
                      return this;
                    var n = new this.constructor(r);
                    return (
                      this.state !== h
                        ? c(n, this.state === a ? t : e, this.outcome)
                        : this.queue.push(new u(n, t, e)),
                      n
                    );
                  }),
                  (u.prototype.callFulfilled = function (t) {
                    s.resolve(this.promise, t);
                  }),
                  (u.prototype.otherCallFulfilled = function (t) {
                    c(this.promise, this.onFulfilled, t);
                  }),
                  (u.prototype.callRejected = function (t) {
                    s.reject(this.promise, t);
                  }),
                  (u.prototype.otherCallRejected = function (t) {
                    c(this.promise, this.onRejected, t);
                  }),
                  (s.resolve = function (t, e) {
                    var n = p(d, e);
                    if ("error" === n.status) return s.reject(t, n.value);
                    var i = n.value;
                    if (i) f(t, i);
                    else {
                      (t.state = a), (t.outcome = e);
                      for (var r = -1, o = t.queue.length; ++r < o; )
                        t.queue[r].callFulfilled(e);
                    }
                    return t;
                  }),
                  (s.reject = function (t, e) {
                    (t.state = o), (t.outcome = e);
                    for (var n = -1, i = t.queue.length; ++n < i; )
                      t.queue[n].callRejected(e);
                    return t;
                  }),
                  (l.resolve = function (t) {
                    return t instanceof this ? t : s.resolve(new this(r), t);
                  }),
                  (l.reject = function (t) {
                    var e = new this(r);
                    return s.reject(e, t);
                  }),
                  (l.all = function (t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                      return this.reject(new TypeError("must be an array"));
                    var n = t.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (
                      var o = new Array(n), a = 0, h = -1, l = new this(r);
                      ++h < n;
  
                    )
                      u(t[h], h);
                    return l;
                    function u(t, r) {
                      e.resolve(t).then(
                        function (t) {
                          (o[r] = t),
                            ++a !== n || i || ((i = !0), s.resolve(l, o));
                        },
                        function (t) {
                          i || ((i = !0), s.reject(l, t));
                        },
                      );
                    }
                  }),
                  (l.race = function (t) {
                    var e = this;
                    if ("[object Array]" !== Object.prototype.toString.call(t))
                      return this.reject(new TypeError("must be an array"));
                    var n = t.length,
                      i = !1;
                    if (!n) return this.resolve([]);
                    for (var o, a = -1, h = new this(r); ++a < n; )
                      (o = t[a]),
                        e.resolve(o).then(
                          function (t) {
                            i || ((i = !0), s.resolve(h, t));
                          },
                          function (t) {
                            i || ((i = !0), s.reject(h, t));
                          },
                        );
                    return h;
                  });
              },
              { immediate: 36 },
            ],
            38: [
              function (t, e, n) {
                "use strict";
                var i = {};
                (0, t("./lib/utils/common").assign)(
                  i,
                  t("./lib/deflate"),
                  t("./lib/inflate"),
                  t("./lib/zlib/constants"),
                ),
                  (e.exports = i);
              },
              {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44,
              },
            ],
            39: [
              function (t, e, n) {
                "use strict";
                var i = t("./zlib/deflate"),
                  r = t("./utils/common"),
                  s = t("./utils/strings"),
                  o = t("./zlib/messages"),
                  a = t("./zlib/zstream"),
                  h = Object.prototype.toString;
                function l(t) {
                  if (!(this instanceof l)) return new l(t);
                  this.options = r.assign(
                    {
                      level: -1,
                      method: 8,
                      chunkSize: 16384,
                      windowBits: 15,
                      memLevel: 8,
                      strategy: 0,
                      to: "",
                    },
                    t || {},
                  );
                  var e = this.options;
                  e.raw && e.windowBits > 0
                    ? (e.windowBits = -e.windowBits)
                    : e.gzip &&
                      e.windowBits > 0 &&
                      e.windowBits < 16 &&
                      (e.windowBits += 16),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new a()),
                    (this.strm.avail_out = 0);
                  var n = i.deflateInit2(
                    this.strm,
                    e.level,
                    e.method,
                    e.windowBits,
                    e.memLevel,
                    e.strategy,
                  );
                  if (0 !== n) throw new Error(o[n]);
                  if (
                    (e.header && i.deflateSetHeader(this.strm, e.header),
                    e.dictionary)
                  ) {
                    var u;
                    if (
                      ((u =
                        "string" == typeof e.dictionary
                          ? s.string2buf(e.dictionary)
                          : "[object ArrayBuffer]" === h.call(e.dictionary)
                            ? new Uint8Array(e.dictionary)
                            : e.dictionary),
                      0 !== (n = i.deflateSetDictionary(this.strm, u)))
                    )
                      throw new Error(o[n]);
                    this._dict_set = !0;
                  }
                }
                function u(t, e) {
                  var n = new l(e);
                  if ((n.push(t, !0), n.err)) throw n.msg || o[n.err];
                  return n.result;
                }
                (l.prototype.push = function (t, e) {
                  var n,
                    o,
                    a = this.strm,
                    l = this.options.chunkSize;
                  if (this.ended) return !1;
                  (o = e === ~~e ? e : !0 === e ? 4 : 0),
                    "string" == typeof t
                      ? (a.input = s.string2buf(t))
                      : "[object ArrayBuffer]" === h.call(t)
                        ? (a.input = new Uint8Array(t))
                        : (a.input = t),
                    (a.next_in = 0),
                    (a.avail_in = a.input.length);
                  do {
                    if (
                      (0 === a.avail_out &&
                        ((a.output = new r.Buf8(l)),
                        (a.next_out = 0),
                        (a.avail_out = l)),
                      1 !== (n = i.deflate(a, o)) && 0 !== n)
                    )
                      return this.onEnd(n), (this.ended = !0), !1;
                    (0 !== a.avail_out &&
                      (0 !== a.avail_in || (4 !== o && 2 !== o))) ||
                      ("string" === this.options.to
                        ? this.onData(
                            s.buf2binstring(r.shrinkBuf(a.output, a.next_out)),
                          )
                        : this.onData(r.shrinkBuf(a.output, a.next_out)));
                  } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== n);
                  return 4 === o
                    ? ((n = i.deflateEnd(this.strm)),
                      this.onEnd(n),
                      (this.ended = !0),
                      0 === n)
                    : 2 !== o || (this.onEnd(0), (a.avail_out = 0), !0);
                }),
                  (l.prototype.onData = function (t) {
                    this.chunks.push(t);
                  }),
                  (l.prototype.onEnd = function (t) {
                    0 === t &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = r.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = t),
                      (this.msg = this.strm.msg);
                  }),
                  (n.Deflate = l),
                  (n.deflate = u),
                  (n.deflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), u(t, e);
                  }),
                  (n.gzip = function (t, e) {
                    return ((e = e || {}).gzip = !0), u(t, e);
                  });
              },
              {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53,
              },
            ],
            40: [
              function (t, e, n) {
                "use strict";
                var i = t("./zlib/inflate"),
                  r = t("./utils/common"),
                  s = t("./utils/strings"),
                  o = t("./zlib/constants"),
                  a = t("./zlib/messages"),
                  h = t("./zlib/zstream"),
                  l = t("./zlib/gzheader"),
                  u = Object.prototype.toString;
                function c(t) {
                  if (!(this instanceof c)) return new c(t);
                  this.options = r.assign(
                    { chunkSize: 16384, windowBits: 0, to: "" },
                    t || {},
                  );
                  var e = this.options;
                  e.raw &&
                    e.windowBits >= 0 &&
                    e.windowBits < 16 &&
                    ((e.windowBits = -e.windowBits),
                    0 === e.windowBits && (e.windowBits = -15)),
                    !(e.windowBits >= 0 && e.windowBits < 16) ||
                      (t && t.windowBits) ||
                      (e.windowBits += 32),
                    e.windowBits > 15 &&
                      e.windowBits < 48 &&
                      0 == (15 & e.windowBits) &&
                      (e.windowBits |= 15),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new h()),
                    (this.strm.avail_out = 0);
                  var n = i.inflateInit2(this.strm, e.windowBits);
                  if (n !== o.Z_OK) throw new Error(a[n]);
                  (this.header = new l()),
                    i.inflateGetHeader(this.strm, this.header);
                }
                function d(t, e) {
                  var n = new c(e);
                  if ((n.push(t, !0), n.err)) throw n.msg || a[n.err];
                  return n.result;
                }
                (c.prototype.push = function (t, e) {
                  var n,
                    a,
                    h,
                    l,
                    c,
                    d,
                    f = this.strm,
                    p = this.options.chunkSize,
                    g = this.options.dictionary,
                    m = !1;
                  if (this.ended) return !1;
                  (a = e === ~~e ? e : !0 === e ? o.Z_FINISH : o.Z_NO_FLUSH),
                    "string" == typeof t
                      ? (f.input = s.binstring2buf(t))
                      : "[object ArrayBuffer]" === u.call(t)
                        ? (f.input = new Uint8Array(t))
                        : (f.input = t),
                    (f.next_in = 0),
                    (f.avail_in = f.input.length);
                  do {
                    if (
                      (0 === f.avail_out &&
                        ((f.output = new r.Buf8(p)),
                        (f.next_out = 0),
                        (f.avail_out = p)),
                      (n = i.inflate(f, o.Z_NO_FLUSH)) === o.Z_NEED_DICT &&
                        g &&
                        ((d =
                          "string" == typeof g
                            ? s.string2buf(g)
                            : "[object ArrayBuffer]" === u.call(g)
                              ? new Uint8Array(g)
                              : g),
                        (n = i.inflateSetDictionary(this.strm, d))),
                      n === o.Z_BUF_ERROR && !0 === m && ((n = o.Z_OK), (m = !1)),
                      n !== o.Z_STREAM_END && n !== o.Z_OK)
                    )
                      return this.onEnd(n), (this.ended = !0), !1;
                    f.next_out &&
                      ((0 !== f.avail_out &&
                        n !== o.Z_STREAM_END &&
                        (0 !== f.avail_in ||
                          (a !== o.Z_FINISH && a !== o.Z_SYNC_FLUSH))) ||
                        ("string" === this.options.to
                          ? ((h = s.utf8border(f.output, f.next_out)),
                            (l = f.next_out - h),
                            (c = s.buf2string(f.output, h)),
                            (f.next_out = l),
                            (f.avail_out = p - l),
                            l && r.arraySet(f.output, f.output, h, l, 0),
                            this.onData(c))
                          : this.onData(r.shrinkBuf(f.output, f.next_out)))),
                      0 === f.avail_in && 0 === f.avail_out && (m = !0);
                  } while (
                    (f.avail_in > 0 || 0 === f.avail_out) &&
                    n !== o.Z_STREAM_END
                  );
                  return (
                    n === o.Z_STREAM_END && (a = o.Z_FINISH),
                    a === o.Z_FINISH
                      ? ((n = i.inflateEnd(this.strm)),
                        this.onEnd(n),
                        (this.ended = !0),
                        n === o.Z_OK)
                      : a !== o.Z_SYNC_FLUSH ||
                        (this.onEnd(o.Z_OK), (f.avail_out = 0), !0)
                  );
                }),
                  (c.prototype.onData = function (t) {
                    this.chunks.push(t);
                  }),
                  (c.prototype.onEnd = function (t) {
                    t === o.Z_OK &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = r.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = t),
                      (this.msg = this.strm.msg);
                  }),
                  (n.Inflate = c),
                  (n.inflate = d),
                  (n.inflateRaw = function (t, e) {
                    return ((e = e || {}).raw = !0), d(t, e);
                  }),
                  (n.ungzip = d);
              },
              {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53,
              },
            ],
            41: [
              function (t, e, n) {
                "use strict";
                var i =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Int32Array;
                (n.assign = function (t) {
                  for (
                    var e = Array.prototype.slice.call(arguments, 1);
                    e.length;
  
                  ) {
                    var n = e.shift();
                    if (n) {
                      if ("object" != typeof n)
                        throw new TypeError(n + "must be non-object");
                      for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i]);
                    }
                  }
                  return t;
                }),
                  (n.shrinkBuf = function (t, e) {
                    return t.length === e
                      ? t
                      : t.subarray
                        ? t.subarray(0, e)
                        : ((t.length = e), t);
                  });
                var r = {
                    arraySet: function (t, e, n, i, r) {
                      if (e.subarray && t.subarray)
                        t.set(e.subarray(n, n + i), r);
                      else for (var s = 0; s < i; s++) t[r + s] = e[n + s];
                    },
                    flattenChunks: function (t) {
                      var e, n, i, r, s, o;
                      for (i = 0, e = 0, n = t.length; e < n; e++)
                        i += t[e].length;
                      for (
                        o = new Uint8Array(i), r = 0, e = 0, n = t.length;
                        e < n;
                        e++
                      )
                        (s = t[e]), o.set(s, r), (r += s.length);
                      return o;
                    },
                  },
                  s = {
                    arraySet: function (t, e, n, i, r) {
                      for (var s = 0; s < i; s++) t[r + s] = e[n + s];
                    },
                    flattenChunks: function (t) {
                      return [].concat.apply([], t);
                    },
                  };
                (n.setTyped = function (t) {
                  t
                    ? ((n.Buf8 = Uint8Array),
                      (n.Buf16 = Uint16Array),
                      (n.Buf32 = Int32Array),
                      n.assign(n, r))
                    : ((n.Buf8 = Array),
                      (n.Buf16 = Array),
                      (n.Buf32 = Array),
                      n.assign(n, s));
                }),
                  n.setTyped(i);
              },
              {},
            ],
            42: [
              function (t, e, n) {
                "use strict";
                var i = t("./common"),
                  r = !0,
                  s = !0;
                try {
                  String.fromCharCode.apply(null, [0]);
                } catch (t) {
                  r = !1;
                }
                try {
                  String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (t) {
                  s = !1;
                }
                for (var o = new i.Buf8(256), a = 0; a < 256; a++)
                  o[a] =
                    a >= 252
                      ? 6
                      : a >= 248
                        ? 5
                        : a >= 240
                          ? 4
                          : a >= 224
                            ? 3
                            : a >= 192
                              ? 2
                              : 1;
                function h(t, e) {
                  if (e < 65537 && ((t.subarray && s) || (!t.subarray && r)))
                    return String.fromCharCode.apply(null, i.shrinkBuf(t, e));
                  for (var n = "", o = 0; o < e; o++)
                    n += String.fromCharCode(t[o]);
                  return n;
                }
                (o[254] = o[254] = 1),
                  (n.string2buf = function (t) {
                    var e,
                      n,
                      r,
                      s,
                      o,
                      a = t.length,
                      h = 0;
                    for (s = 0; s < a; s++)
                      55296 == (64512 & (n = t.charCodeAt(s))) &&
                        s + 1 < a &&
                        56320 == (64512 & (r = t.charCodeAt(s + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), s++),
                        (h += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                    for (e = new i.Buf8(h), o = 0, s = 0; o < h; s++)
                      55296 == (64512 & (n = t.charCodeAt(s))) &&
                        s + 1 < a &&
                        56320 == (64512 & (r = t.charCodeAt(s + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (r - 56320)), s++),
                        n < 128
                          ? (e[o++] = n)
                          : n < 2048
                            ? ((e[o++] = 192 | (n >>> 6)),
                              (e[o++] = 128 | (63 & n)))
                            : n < 65536
                              ? ((e[o++] = 224 | (n >>> 12)),
                                (e[o++] = 128 | ((n >>> 6) & 63)),
                                (e[o++] = 128 | (63 & n)))
                              : ((e[o++] = 240 | (n >>> 18)),
                                (e[o++] = 128 | ((n >>> 12) & 63)),
                                (e[o++] = 128 | ((n >>> 6) & 63)),
                                (e[o++] = 128 | (63 & n)));
                    return e;
                  }),
                  (n.buf2binstring = function (t) {
                    return h(t, t.length);
                  }),
                  (n.binstring2buf = function (t) {
                    for (
                      var e = new i.Buf8(t.length), n = 0, r = e.length;
                      n < r;
                      n++
                    )
                      e[n] = t.charCodeAt(n);
                    return e;
                  }),
                  (n.buf2string = function (t, e) {
                    var n,
                      i,
                      r,
                      s,
                      a = e || t.length,
                      l = new Array(2 * a);
                    for (i = 0, n = 0; n < a; )
                      if ((r = t[n++]) < 128) l[i++] = r;
                      else if ((s = o[r]) > 4) (l[i++] = 65533), (n += s - 1);
                      else {
                        for (
                          r &= 2 === s ? 31 : 3 === s ? 15 : 7;
                          s > 1 && n < a;
  
                        )
                          (r = (r << 6) | (63 & t[n++])), s--;
                        s > 1
                          ? (l[i++] = 65533)
                          : r < 65536
                            ? (l[i++] = r)
                            : ((r -= 65536),
                              (l[i++] = 55296 | ((r >> 10) & 1023)),
                              (l[i++] = 56320 | (1023 & r)));
                      }
                    return h(l, i);
                  }),
                  (n.utf8border = function (t, e) {
                    var n;
                    for (
                      (e = e || t.length) > t.length && (e = t.length), n = e - 1;
                      n >= 0 && 128 == (192 & t[n]);
  
                    )
                      n--;
                    return n < 0 || 0 === n ? e : n + o[t[n]] > e ? n : e;
                  });
              },
              { "./common": 41 },
            ],
            43: [
              function (t, e, n) {
                "use strict";
                e.exports = function (t, e, n, i) {
                  for (
                    var r = (65535 & t) | 0, s = ((t >>> 16) & 65535) | 0, o = 0;
                    0 !== n;
  
                  ) {
                    n -= o = n > 2e3 ? 2e3 : n;
                    do {
                      s = (s + (r = (r + e[i++]) | 0)) | 0;
                    } while (--o);
                    (r %= 65521), (s %= 65521);
                  }
                  return r | (s << 16) | 0;
                };
              },
              {},
            ],
            44: [
              function (t, e, n) {
                "use strict";
                e.exports = {
                  Z_NO_FLUSH: 0,
                  Z_PARTIAL_FLUSH: 1,
                  Z_SYNC_FLUSH: 2,
                  Z_FULL_FLUSH: 3,
                  Z_FINISH: 4,
                  Z_BLOCK: 5,
                  Z_TREES: 6,
                  Z_OK: 0,
                  Z_STREAM_END: 1,
                  Z_NEED_DICT: 2,
                  Z_ERRNO: -1,
                  Z_STREAM_ERROR: -2,
                  Z_DATA_ERROR: -3,
                  Z_BUF_ERROR: -5,
                  Z_NO_COMPRESSION: 0,
                  Z_BEST_SPEED: 1,
                  Z_BEST_COMPRESSION: 9,
                  Z_DEFAULT_COMPRESSION: -1,
                  Z_FILTERED: 1,
                  Z_HUFFMAN_ONLY: 2,
                  Z_RLE: 3,
                  Z_FIXED: 4,
                  Z_DEFAULT_STRATEGY: 0,
                  Z_BINARY: 0,
                  Z_TEXT: 1,
                  Z_UNKNOWN: 2,
                  Z_DEFLATED: 8,
                };
              },
              {},
            ],
            45: [
              function (t, e, n) {
                "use strict";
                var i = (function () {
                  for (var t, e = [], n = 0; n < 256; n++) {
                    t = n;
                    for (var i = 0; i < 8; i++)
                      t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
                    e[n] = t;
                  }
                  return e;
                })();
                e.exports = function (t, e, n, r) {
                  var s = i,
                    o = r + n;
                  t ^= -1;
                  for (var a = r; a < o; a++) t = (t >>> 8) ^ s[255 & (t ^ e[a])];
                  return -1 ^ t;
                };
              },
              {},
            ],
            46: [
              function (t, e, n) {
                "use strict";
                var i,
                  r = t("../utils/common"),
                  s = t("./trees"),
                  o = t("./adler32"),
                  a = t("./crc32"),
                  h = t("./messages");
                function l(t, e) {
                  return (t.msg = h[e]), e;
                }
                function u(t) {
                  return (t << 1) - (t > 4 ? 9 : 0);
                }
                function c(t) {
                  for (var e = t.length; --e >= 0; ) t[e] = 0;
                }
                function d(t) {
                  var e = t.state,
                    n = e.pending;
                  n > t.avail_out && (n = t.avail_out),
                    0 !== n &&
                      (r.arraySet(
                        t.output,
                        e.pending_buf,
                        e.pending_out,
                        n,
                        t.next_out,
                      ),
                      (t.next_out += n),
                      (e.pending_out += n),
                      (t.total_out += n),
                      (t.avail_out -= n),
                      (e.pending -= n),
                      0 === e.pending && (e.pending_out = 0));
                }
                function f(t, e) {
                  s._tr_flush_block(
                    t,
                    t.block_start >= 0 ? t.block_start : -1,
                    t.strstart - t.block_start,
                    e,
                  ),
                    (t.block_start = t.strstart),
                    d(t.strm);
                }
                function p(t, e) {
                  t.pending_buf[t.pending++] = e;
                }
                function g(t, e) {
                  (t.pending_buf[t.pending++] = (e >>> 8) & 255),
                    (t.pending_buf[t.pending++] = 255 & e);
                }
                function m(t, e) {
                  var n,
                    i,
                    r = t.max_chain_length,
                    s = t.strstart,
                    o = t.prev_length,
                    a = t.nice_match,
                    h =
                      t.strstart > t.w_size - 262
                        ? t.strstart - (t.w_size - 262)
                        : 0,
                    l = t.window,
                    u = t.w_mask,
                    c = t.prev,
                    d = t.strstart + 258,
                    f = l[s + o - 1],
                    p = l[s + o];
                  t.prev_length >= t.good_match && (r >>= 2),
                    a > t.lookahead && (a = t.lookahead);
                  do {
                    if (
                      l[(n = e) + o] === p &&
                      l[n + o - 1] === f &&
                      l[n] === l[s] &&
                      l[++n] === l[s + 1]
                    ) {
                      (s += 2), n++;
                      do {} while (
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        l[++s] === l[++n] &&
                        s < d
                      );
                      if (((i = 258 - (d - s)), (s = d - 258), i > o)) {
                        if (((t.match_start = e), (o = i), i >= a)) break;
                        (f = l[s + o - 1]), (p = l[s + o]);
                      }
                    }
                  } while ((e = c[e & u]) > h && 0 != --r);
                  return o <= t.lookahead ? o : t.lookahead;
                }
                function v(t) {
                  var e,
                    n,
                    i,
                    s,
                    h,
                    l,
                    u,
                    c,
                    d,
                    f,
                    p = t.w_size;
                  do {
                    if (
                      ((s = t.window_size - t.lookahead - t.strstart),
                      t.strstart >= p + (p - 262))
                    ) {
                      r.arraySet(t.window, t.window, p, p, 0),
                        (t.match_start -= p),
                        (t.strstart -= p),
                        (t.block_start -= p),
                        (e = n = t.hash_size);
                      do {
                        (i = t.head[--e]), (t.head[e] = i >= p ? i - p : 0);
                      } while (--n);
                      e = n = p;
                      do {
                        (i = t.prev[--e]), (t.prev[e] = i >= p ? i - p : 0);
                      } while (--n);
                      s += p;
                    }
                    if (0 === t.strm.avail_in) break;
                    if (
                      ((l = t.strm),
                      (u = t.window),
                      (c = t.strstart + t.lookahead),
                      (d = s),
                      (f = void 0),
                      (f = l.avail_in) > d && (f = d),
                      (n =
                        0 === f
                          ? 0
                          : ((l.avail_in -= f),
                            r.arraySet(u, l.input, l.next_in, f, c),
                            1 === l.state.wrap
                              ? (l.adler = o(l.adler, u, f, c))
                              : 2 === l.state.wrap &&
                                (l.adler = a(l.adler, u, f, c)),
                            (l.next_in += f),
                            (l.total_in += f),
                            f)),
                      (t.lookahead += n),
                      t.lookahead + t.insert >= 3)
                    )
                      for (
                        h = t.strstart - t.insert,
                          t.ins_h = t.window[h],
                          t.ins_h =
                            ((t.ins_h << t.hash_shift) ^ t.window[h + 1]) &
                            t.hash_mask;
                        t.insert &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^ t.window[h + 3 - 1]) &
                          t.hash_mask),
                        (t.prev[h & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = h),
                        h++,
                        t.insert--,
                        !(t.lookahead + t.insert < 3));
  
                      );
                  } while (t.lookahead < 262 && 0 !== t.strm.avail_in);
                }
                function y(t, e) {
                  for (var n, i; ; ) {
                    if (t.lookahead < 262) {
                      if ((v(t), t.lookahead < 262 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      t.lookahead >= 3 &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + 3 - 1]) &
                          t.hash_mask),
                        (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart)),
                      0 !== n &&
                        t.strstart - n <= t.w_size - 262 &&
                        (t.match_length = m(t, n)),
                      t.match_length >= 3)
                    )
                      if (
                        ((i = s._tr_tally(
                          t,
                          t.strstart - t.match_start,
                          t.match_length - 3,
                        )),
                        (t.lookahead -= t.match_length),
                        t.match_length <= t.max_lazy_match && t.lookahead >= 3)
                      ) {
                        t.match_length--;
                        do {
                          t.strstart++,
                            (t.ins_h =
                              ((t.ins_h << t.hash_shift) ^
                                t.window[t.strstart + 3 - 1]) &
                              t.hash_mask),
                            (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                            (t.head[t.ins_h] = t.strstart);
                        } while (0 != --t.match_length);
                        t.strstart++;
                      } else
                        (t.strstart += t.match_length),
                          (t.match_length = 0),
                          (t.ins_h = t.window[t.strstart]),
                          (t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 1]) &
                            t.hash_mask);
                    else
                      (i = s._tr_tally(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++;
                    if (i && (f(t, !1), 0 === t.strm.avail_out)) return 1;
                  }
                  return (
                    (t.insert = t.strstart < 2 ? t.strstart : 2),
                    4 === e
                      ? (f(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (f(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                  );
                }
                function b(t, e) {
                  for (var n, i, r; ; ) {
                    if (t.lookahead < 262) {
                      if ((v(t), t.lookahead < 262 && 0 === e)) return 1;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      t.lookahead >= 3 &&
                        ((t.ins_h =
                          ((t.ins_h << t.hash_shift) ^
                            t.window[t.strstart + 3 - 1]) &
                          t.hash_mask),
                        (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                        (t.head[t.ins_h] = t.strstart)),
                      (t.prev_length = t.match_length),
                      (t.prev_match = t.match_start),
                      (t.match_length = 2),
                      0 !== n &&
                        t.prev_length < t.max_lazy_match &&
                        t.strstart - n <= t.w_size - 262 &&
                        ((t.match_length = m(t, n)),
                        t.match_length <= 5 &&
                          (1 === t.strategy ||
                            (3 === t.match_length &&
                              t.strstart - t.match_start > 4096)) &&
                          (t.match_length = 2)),
                      t.prev_length >= 3 && t.match_length <= t.prev_length)
                    ) {
                      (r = t.strstart + t.lookahead - 3),
                        (i = s._tr_tally(
                          t,
                          t.strstart - 1 - t.prev_match,
                          t.prev_length - 3,
                        )),
                        (t.lookahead -= t.prev_length - 1),
                        (t.prev_length -= 2);
                      do {
                        ++t.strstart <= r &&
                          ((t.ins_h =
                            ((t.ins_h << t.hash_shift) ^
                              t.window[t.strstart + 3 - 1]) &
                            t.hash_mask),
                          (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                          (t.head[t.ins_h] = t.strstart));
                      } while (0 != --t.prev_length);
                      if (
                        ((t.match_available = 0),
                        (t.match_length = 2),
                        t.strstart++,
                        i && (f(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    } else if (t.match_available) {
                      if (
                        ((i = s._tr_tally(t, 0, t.window[t.strstart - 1])) &&
                          f(t, !1),
                        t.strstart++,
                        t.lookahead--,
                        0 === t.strm.avail_out)
                      )
                        return 1;
                    } else (t.match_available = 1), t.strstart++, t.lookahead--;
                  }
                  return (
                    t.match_available &&
                      ((i = s._tr_tally(t, 0, t.window[t.strstart - 1])),
                      (t.match_available = 0)),
                    (t.insert = t.strstart < 2 ? t.strstart : 2),
                    4 === e
                      ? (f(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                      : t.last_lit && (f(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                  );
                }
                function w(t, e, n, i, r) {
                  (this.good_length = t),
                    (this.max_lazy = e),
                    (this.nice_length = n),
                    (this.max_chain = i),
                    (this.func = r);
                }
                function x() {
                  (this.strm = null),
                    (this.status = 0),
                    (this.pending_buf = null),
                    (this.pending_buf_size = 0),
                    (this.pending_out = 0),
                    (this.pending = 0),
                    (this.wrap = 0),
                    (this.gzhead = null),
                    (this.gzindex = 0),
                    (this.method = 8),
                    (this.last_flush = -1),
                    (this.w_size = 0),
                    (this.w_bits = 0),
                    (this.w_mask = 0),
                    (this.window = null),
                    (this.window_size = 0),
                    (this.prev = null),
                    (this.head = null),
                    (this.ins_h = 0),
                    (this.hash_size = 0),
                    (this.hash_bits = 0),
                    (this.hash_mask = 0),
                    (this.hash_shift = 0),
                    (this.block_start = 0),
                    (this.match_length = 0),
                    (this.prev_match = 0),
                    (this.match_available = 0),
                    (this.strstart = 0),
                    (this.match_start = 0),
                    (this.lookahead = 0),
                    (this.prev_length = 0),
                    (this.max_chain_length = 0),
                    (this.max_lazy_match = 0),
                    (this.level = 0),
                    (this.strategy = 0),
                    (this.good_match = 0),
                    (this.nice_match = 0),
                    (this.dyn_ltree = new r.Buf16(1146)),
                    (this.dyn_dtree = new r.Buf16(122)),
                    (this.bl_tree = new r.Buf16(78)),
                    c(this.dyn_ltree),
                    c(this.dyn_dtree),
                    c(this.bl_tree),
                    (this.l_desc = null),
                    (this.d_desc = null),
                    (this.bl_desc = null),
                    (this.bl_count = new r.Buf16(16)),
                    (this.heap = new r.Buf16(573)),
                    c(this.heap),
                    (this.heap_len = 0),
                    (this.heap_max = 0),
                    (this.depth = new r.Buf16(573)),
                    c(this.depth),
                    (this.l_buf = 0),
                    (this.lit_bufsize = 0),
                    (this.last_lit = 0),
                    (this.d_buf = 0),
                    (this.opt_len = 0),
                    (this.static_len = 0),
                    (this.matches = 0),
                    (this.insert = 0),
                    (this.bi_buf = 0),
                    (this.bi_valid = 0);
                }
                function _(t) {
                  var e;
                  return t && t.state
                    ? ((t.total_in = t.total_out = 0),
                      (t.data_type = 2),
                      ((e = t.state).pending = 0),
                      (e.pending_out = 0),
                      e.wrap < 0 && (e.wrap = -e.wrap),
                      (e.status = e.wrap ? 42 : 113),
                      (t.adler = 2 === e.wrap ? 0 : 1),
                      (e.last_flush = 0),
                      s._tr_init(e),
                      0)
                    : l(t, -2);
                }
                function E(t) {
                  var e,
                    n = _(t);
                  return (
                    0 === n &&
                      (((e = t.state).window_size = 2 * e.w_size),
                      c(e.head),
                      (e.max_lazy_match = i[e.level].max_lazy),
                      (e.good_match = i[e.level].good_length),
                      (e.nice_match = i[e.level].nice_length),
                      (e.max_chain_length = i[e.level].max_chain),
                      (e.strstart = 0),
                      (e.block_start = 0),
                      (e.lookahead = 0),
                      (e.insert = 0),
                      (e.match_length = e.prev_length = 2),
                      (e.match_available = 0),
                      (e.ins_h = 0)),
                    n
                  );
                }
                function k(t, e, n, i, s, o) {
                  if (!t) return -2;
                  var a = 1;
                  if (
                    (-1 === e && (e = 6),
                    i < 0 ? ((a = 0), (i = -i)) : i > 15 && ((a = 2), (i -= 16)),
                    s < 1 ||
                      s > 9 ||
                      8 !== n ||
                      i < 8 ||
                      i > 15 ||
                      e < 0 ||
                      e > 9 ||
                      o < 0 ||
                      o > 4)
                  )
                    return l(t, -2);
                  8 === i && (i = 9);
                  var h = new x();
                  return (
                    (t.state = h),
                    (h.strm = t),
                    (h.wrap = a),
                    (h.gzhead = null),
                    (h.w_bits = i),
                    (h.w_size = 1 << h.w_bits),
                    (h.w_mask = h.w_size - 1),
                    (h.hash_bits = s + 7),
                    (h.hash_size = 1 << h.hash_bits),
                    (h.hash_mask = h.hash_size - 1),
                    (h.hash_shift = ~~((h.hash_bits + 3 - 1) / 3)),
                    (h.window = new r.Buf8(2 * h.w_size)),
                    (h.head = new r.Buf16(h.hash_size)),
                    (h.prev = new r.Buf16(h.w_size)),
                    (h.lit_bufsize = 1 << (s + 6)),
                    (h.pending_buf_size = 4 * h.lit_bufsize),
                    (h.pending_buf = new r.Buf8(h.pending_buf_size)),
                    (h.d_buf = 1 * h.lit_bufsize),
                    (h.l_buf = 3 * h.lit_bufsize),
                    (h.level = e),
                    (h.strategy = o),
                    (h.method = n),
                    E(t)
                  );
                }
                (i = [
                  new w(0, 0, 0, 0, function (t, e) {
                    var n = 65535;
                    for (
                      n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);
                      ;
  
                    ) {
                      if (t.lookahead <= 1) {
                        if ((v(t), 0 === t.lookahead && 0 === e)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      (t.strstart += t.lookahead), (t.lookahead = 0);
                      var i = t.block_start + n;
                      if (
                        (0 === t.strstart || t.strstart >= i) &&
                        ((t.lookahead = t.strstart - i),
                        (t.strstart = i),
                        f(t, !1),
                        0 === t.strm.avail_out)
                      )
                        return 1;
                      if (
                        t.strstart - t.block_start >= t.w_size - 262 &&
                        (f(t, !1), 0 === t.strm.avail_out)
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      4 === e
                        ? (f(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : (t.strstart > t.block_start &&
                            (f(t, !1), t.strm.avail_out),
                          1)
                    );
                  }),
                  new w(4, 4, 8, 4, y),
                  new w(4, 5, 16, 8, y),
                  new w(4, 6, 32, 32, y),
                  new w(4, 4, 16, 16, b),
                  new w(8, 16, 32, 32, b),
                  new w(8, 16, 128, 128, b),
                  new w(8, 32, 128, 256, b),
                  new w(32, 128, 258, 1024, b),
                  new w(32, 258, 258, 4096, b),
                ]),
                  (n.deflateInit = function (t, e) {
                    return k(t, e, 8, 15, 8, 0);
                  }),
                  (n.deflateInit2 = k),
                  (n.deflateReset = E),
                  (n.deflateResetKeep = _),
                  (n.deflateSetHeader = function (t, e) {
                    return t && t.state
                      ? 2 !== t.state.wrap
                        ? -2
                        : ((t.state.gzhead = e), 0)
                      : -2;
                  }),
                  (n.deflate = function (t, e) {
                    var n, r, o, h;
                    if (!t || !t.state || e > 5 || e < 0)
                      return t ? l(t, -2) : -2;
                    if (
                      ((r = t.state),
                      !t.output ||
                        (!t.input && 0 !== t.avail_in) ||
                        (666 === r.status && 4 !== e))
                    )
                      return l(t, 0 === t.avail_out ? -5 : -2);
                    if (
                      ((r.strm = t),
                      (n = r.last_flush),
                      (r.last_flush = e),
                      42 === r.status)
                    )
                      if (2 === r.wrap)
                        (t.adler = 0),
                          p(r, 31),
                          p(r, 139),
                          p(r, 8),
                          r.gzhead
                            ? (p(
                                r,
                                (r.gzhead.text ? 1 : 0) +
                                  (r.gzhead.hcrc ? 2 : 0) +
                                  (r.gzhead.extra ? 4 : 0) +
                                  (r.gzhead.name ? 8 : 0) +
                                  (r.gzhead.comment ? 16 : 0),
                              ),
                              p(r, 255 & r.gzhead.time),
                              p(r, (r.gzhead.time >> 8) & 255),
                              p(r, (r.gzhead.time >> 16) & 255),
                              p(r, (r.gzhead.time >> 24) & 255),
                              p(
                                r,
                                9 === r.level
                                  ? 2
                                  : r.strategy >= 2 || r.level < 2
                                    ? 4
                                    : 0,
                              ),
                              p(r, 255 & r.gzhead.os),
                              r.gzhead.extra &&
                                r.gzhead.extra.length &&
                                (p(r, 255 & r.gzhead.extra.length),
                                p(r, (r.gzhead.extra.length >> 8) & 255)),
                              r.gzhead.hcrc &&
                                (t.adler = a(
                                  t.adler,
                                  r.pending_buf,
                                  r.pending,
                                  0,
                                )),
                              (r.gzindex = 0),
                              (r.status = 69))
                            : (p(r, 0),
                              p(r, 0),
                              p(r, 0),
                              p(r, 0),
                              p(r, 0),
                              p(
                                r,
                                9 === r.level
                                  ? 2
                                  : r.strategy >= 2 || r.level < 2
                                    ? 4
                                    : 0,
                              ),
                              p(r, 3),
                              (r.status = 113));
                      else {
                        var m = (8 + ((r.w_bits - 8) << 4)) << 8;
                        (m |=
                          (r.strategy >= 2 || r.level < 2
                            ? 0
                            : r.level < 6
                              ? 1
                              : 6 === r.level
                                ? 2
                                : 3) << 6),
                          0 !== r.strstart && (m |= 32),
                          (m += 31 - (m % 31)),
                          (r.status = 113),
                          g(r, m),
                          0 !== r.strstart &&
                            (g(r, t.adler >>> 16), g(r, 65535 & t.adler)),
                          (t.adler = 1);
                      }
                    if (69 === r.status)
                      if (r.gzhead.extra) {
                        for (
                          o = r.pending;
                          r.gzindex < (65535 & r.gzhead.extra.length) &&
                          (r.pending !== r.pending_buf_size ||
                            (r.gzhead.hcrc &&
                              r.pending > o &&
                              (t.adler = a(
                                t.adler,
                                r.pending_buf,
                                r.pending - o,
                                o,
                              )),
                            d(t),
                            (o = r.pending),
                            r.pending !== r.pending_buf_size));
  
                        )
                          p(r, 255 & r.gzhead.extra[r.gzindex]), r.gzindex++;
                        r.gzhead.hcrc &&
                          r.pending > o &&
                          (t.adler = a(t.adler, r.pending_buf, r.pending - o, o)),
                          r.gzindex === r.gzhead.extra.length &&
                            ((r.gzindex = 0), (r.status = 73));
                      } else r.status = 73;
                    if (73 === r.status)
                      if (r.gzhead.name) {
                        o = r.pending;
                        do {
                          if (
                            r.pending === r.pending_buf_size &&
                            (r.gzhead.hcrc &&
                              r.pending > o &&
                              (t.adler = a(
                                t.adler,
                                r.pending_buf,
                                r.pending - o,
                                o,
                              )),
                            d(t),
                            (o = r.pending),
                            r.pending === r.pending_buf_size)
                          ) {
                            h = 1;
                            break;
                          }
                          (h =
                            r.gzindex < r.gzhead.name.length
                              ? 255 & r.gzhead.name.charCodeAt(r.gzindex++)
                              : 0),
                            p(r, h);
                        } while (0 !== h);
                        r.gzhead.hcrc &&
                          r.pending > o &&
                          (t.adler = a(t.adler, r.pending_buf, r.pending - o, o)),
                          0 === h && ((r.gzindex = 0), (r.status = 91));
                      } else r.status = 91;
                    if (91 === r.status)
                      if (r.gzhead.comment) {
                        o = r.pending;
                        do {
                          if (
                            r.pending === r.pending_buf_size &&
                            (r.gzhead.hcrc &&
                              r.pending > o &&
                              (t.adler = a(
                                t.adler,
                                r.pending_buf,
                                r.pending - o,
                                o,
                              )),
                            d(t),
                            (o = r.pending),
                            r.pending === r.pending_buf_size)
                          ) {
                            h = 1;
                            break;
                          }
                          (h =
                            r.gzindex < r.gzhead.comment.length
                              ? 255 & r.gzhead.comment.charCodeAt(r.gzindex++)
                              : 0),
                            p(r, h);
                        } while (0 !== h);
                        r.gzhead.hcrc &&
                          r.pending > o &&
                          (t.adler = a(t.adler, r.pending_buf, r.pending - o, o)),
                          0 === h && (r.status = 103);
                      } else r.status = 103;
                    if (
                      (103 === r.status &&
                        (r.gzhead.hcrc
                          ? (r.pending + 2 > r.pending_buf_size && d(t),
                            r.pending + 2 <= r.pending_buf_size &&
                              (p(r, 255 & t.adler),
                              p(r, (t.adler >> 8) & 255),
                              (t.adler = 0),
                              (r.status = 113)))
                          : (r.status = 113)),
                      0 !== r.pending)
                    ) {
                      if ((d(t), 0 === t.avail_out))
                        return (r.last_flush = -1), 0;
                    } else if (0 === t.avail_in && u(e) <= u(n) && 4 !== e)
                      return l(t, -5);
                    if (666 === r.status && 0 !== t.avail_in) return l(t, -5);
                    if (
                      0 !== t.avail_in ||
                      0 !== r.lookahead ||
                      (0 !== e && 666 !== r.status)
                    ) {
                      var y =
                        2 === r.strategy
                          ? (function (t, e) {
                              for (var n; ; ) {
                                if (
                                  0 === t.lookahead &&
                                  (v(t), 0 === t.lookahead)
                                ) {
                                  if (0 === e) return 1;
                                  break;
                                }
                                if (
                                  ((t.match_length = 0),
                                  (n = s._tr_tally(t, 0, t.window[t.strstart])),
                                  t.lookahead--,
                                  t.strstart++,
                                  n && (f(t, !1), 0 === t.strm.avail_out))
                                )
                                  return 1;
                              }
                              return (
                                (t.insert = 0),
                                4 === e
                                  ? (f(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                  : t.last_lit &&
                                      (f(t, !1), 0 === t.strm.avail_out)
                                    ? 1
                                    : 2
                              );
                            })(r, e)
                          : 3 === r.strategy
                            ? (function (t, e) {
                                for (var n, i, r, o, a = t.window; ; ) {
                                  if (t.lookahead <= 258) {
                                    if ((v(t), t.lookahead <= 258 && 0 === e))
                                      return 1;
                                    if (0 === t.lookahead) break;
                                  }
                                  if (
                                    ((t.match_length = 0),
                                    t.lookahead >= 3 &&
                                      t.strstart > 0 &&
                                      (i = a[(r = t.strstart - 1)]) === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r])
                                  ) {
                                    o = t.strstart + 258;
                                    do {} while (
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      i === a[++r] &&
                                      r < o
                                    );
                                    (t.match_length = 258 - (o - r)),
                                      t.match_length > t.lookahead &&
                                        (t.match_length = t.lookahead);
                                  }
                                  if (
                                    (t.match_length >= 3
                                      ? ((n = s._tr_tally(
                                          t,
                                          1,
                                          t.match_length - 3,
                                        )),
                                        (t.lookahead -= t.match_length),
                                        (t.strstart += t.match_length),
                                        (t.match_length = 0))
                                      : ((n = s._tr_tally(
                                          t,
                                          0,
                                          t.window[t.strstart],
                                        )),
                                        t.lookahead--,
                                        t.strstart++),
                                    n && (f(t, !1), 0 === t.strm.avail_out))
                                  )
                                    return 1;
                                }
                                return (
                                  (t.insert = 0),
                                  4 === e
                                    ? (f(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                                    : t.last_lit &&
                                        (f(t, !1), 0 === t.strm.avail_out)
                                      ? 1
                                      : 2
                                );
                              })(r, e)
                            : i[r.level].func(r, e);
                      if (
                        ((3 !== y && 4 !== y) || (r.status = 666),
                        1 === y || 3 === y)
                      )
                        return 0 === t.avail_out && (r.last_flush = -1), 0;
                      if (
                        2 === y &&
                        (1 === e
                          ? s._tr_align(r)
                          : 5 !== e &&
                            (s._tr_stored_block(r, 0, 0, !1),
                            3 === e &&
                              (c(r.head),
                              0 === r.lookahead &&
                                ((r.strstart = 0),
                                (r.block_start = 0),
                                (r.insert = 0)))),
                        d(t),
                        0 === t.avail_out)
                      )
                        return (r.last_flush = -1), 0;
                    }
                    return 4 !== e
                      ? 0
                      : r.wrap <= 0
                        ? 1
                        : (2 === r.wrap
                            ? (p(r, 255 & t.adler),
                              p(r, (t.adler >> 8) & 255),
                              p(r, (t.adler >> 16) & 255),
                              p(r, (t.adler >> 24) & 255),
                              p(r, 255 & t.total_in),
                              p(r, (t.total_in >> 8) & 255),
                              p(r, (t.total_in >> 16) & 255),
                              p(r, (t.total_in >> 24) & 255))
                            : (g(r, t.adler >>> 16), g(r, 65535 & t.adler)),
                          d(t),
                          r.wrap > 0 && (r.wrap = -r.wrap),
                          0 !== r.pending ? 0 : 1);
                  }),
                  (n.deflateEnd = function (t) {
                    var e;
                    return t && t.state
                      ? 42 !== (e = t.state.status) &&
                        69 !== e &&
                        73 !== e &&
                        91 !== e &&
                        103 !== e &&
                        113 !== e &&
                        666 !== e
                        ? l(t, -2)
                        : ((t.state = null), 113 === e ? l(t, -3) : 0)
                      : -2;
                  }),
                  (n.deflateSetDictionary = function (t, e) {
                    var n,
                      i,
                      s,
                      a,
                      h,
                      l,
                      u,
                      d,
                      f = e.length;
                    if (!t || !t.state) return -2;
                    if (
                      2 === (a = (n = t.state).wrap) ||
                      (1 === a && 42 !== n.status) ||
                      n.lookahead
                    )
                      return -2;
                    for (
                      1 === a && (t.adler = o(t.adler, e, f, 0)),
                        n.wrap = 0,
                        f >= n.w_size &&
                          (0 === a &&
                            (c(n.head),
                            (n.strstart = 0),
                            (n.block_start = 0),
                            (n.insert = 0)),
                          (d = new r.Buf8(n.w_size)),
                          r.arraySet(d, e, f - n.w_size, n.w_size, 0),
                          (e = d),
                          (f = n.w_size)),
                        h = t.avail_in,
                        l = t.next_in,
                        u = t.input,
                        t.avail_in = f,
                        t.next_in = 0,
                        t.input = e,
                        v(n);
                      n.lookahead >= 3;
  
                    ) {
                      (i = n.strstart), (s = n.lookahead - 2);
                      do {
                        (n.ins_h =
                          ((n.ins_h << n.hash_shift) ^ n.window[i + 3 - 1]) &
                          n.hash_mask),
                          (n.prev[i & n.w_mask] = n.head[n.ins_h]),
                          (n.head[n.ins_h] = i),
                          i++;
                      } while (--s);
                      (n.strstart = i), (n.lookahead = 2), v(n);
                    }
                    return (
                      (n.strstart += n.lookahead),
                      (n.block_start = n.strstart),
                      (n.insert = n.lookahead),
                      (n.lookahead = 0),
                      (n.match_length = n.prev_length = 2),
                      (n.match_available = 0),
                      (t.next_in = l),
                      (t.input = u),
                      (t.avail_in = h),
                      (n.wrap = a),
                      0
                    );
                  }),
                  (n.deflateInfo = "pako deflate (from Nodeca project)");
              },
              {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52,
              },
            ],
            47: [
              function (t, e, n) {
                "use strict";
                e.exports = function () {
                  (this.text = 0),
                    (this.time = 0),
                    (this.xflags = 0),
                    (this.os = 0),
                    (this.extra = null),
                    (this.extra_len = 0),
                    (this.name = ""),
                    (this.comment = ""),
                    (this.hcrc = 0),
                    (this.done = !1);
                };
              },
              {},
            ],
            48: [
              function (t, e, n) {
                "use strict";
                e.exports = function (t, e) {
                  var n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    h,
                    l,
                    u,
                    c,
                    d,
                    f,
                    p,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w,
                    x,
                    _,
                    E,
                    k,
                    S,
                    C;
                  (n = t.state),
                    (i = t.next_in),
                    (S = t.input),
                    (r = i + (t.avail_in - 5)),
                    (s = t.next_out),
                    (C = t.output),
                    (o = s - (e - t.avail_out)),
                    (a = s + (t.avail_out - 257)),
                    (h = n.dmax),
                    (l = n.wsize),
                    (u = n.whave),
                    (c = n.wnext),
                    (d = n.window),
                    (f = n.hold),
                    (p = n.bits),
                    (g = n.lencode),
                    (m = n.distcode),
                    (v = (1 << n.lenbits) - 1),
                    (y = (1 << n.distbits) - 1);
                  t: do {
                    p < 15 &&
                      ((f += S[i++] << p),
                      (p += 8),
                      (f += S[i++] << p),
                      (p += 8)),
                      (b = g[f & v]);
                    e: for (;;) {
                      if (
                        ((f >>>= w = b >>> 24),
                        (p -= w),
                        0 == (w = (b >>> 16) & 255))
                      )
                        C[s++] = 65535 & b;
                      else {
                        if (!(16 & w)) {
                          if (0 == (64 & w)) {
                            b = g[(65535 & b) + (f & ((1 << w) - 1))];
                            continue e;
                          }
                          if (32 & w) {
                            n.mode = 12;
                            break t;
                          }
                          (t.msg = "invalid literal/length code"), (n.mode = 30);
                          break t;
                        }
                        (x = 65535 & b),
                          (w &= 15) &&
                            (p < w && ((f += S[i++] << p), (p += 8)),
                            (x += f & ((1 << w) - 1)),
                            (f >>>= w),
                            (p -= w)),
                          p < 15 &&
                            ((f += S[i++] << p),
                            (p += 8),
                            (f += S[i++] << p),
                            (p += 8)),
                          (b = m[f & y]);
                        n: for (;;) {
                          if (
                            ((f >>>= w = b >>> 24),
                            (p -= w),
                            !(16 & (w = (b >>> 16) & 255)))
                          ) {
                            if (0 == (64 & w)) {
                              b = m[(65535 & b) + (f & ((1 << w) - 1))];
                              continue n;
                            }
                            (t.msg = "invalid distance code"), (n.mode = 30);
                            break t;
                          }
                          if (
                            ((_ = 65535 & b),
                            p < (w &= 15) &&
                              ((f += S[i++] << p),
                              (p += 8) < w && ((f += S[i++] << p), (p += 8))),
                            (_ += f & ((1 << w) - 1)) > h)
                          ) {
                            (t.msg = "invalid distance too far back"),
                              (n.mode = 30);
                            break t;
                          }
                          if (((f >>>= w), (p -= w), _ > (w = s - o))) {
                            if ((w = _ - w) > u && n.sane) {
                              (t.msg = "invalid distance too far back"),
                                (n.mode = 30);
                              break t;
                            }
                            if (((E = 0), (k = d), 0 === c)) {
                              if (((E += l - w), w < x)) {
                                x -= w;
                                do {
                                  C[s++] = d[E++];
                                } while (--w);
                                (E = s - _), (k = C);
                              }
                            } else if (c < w) {
                              if (((E += l + c - w), (w -= c) < x)) {
                                x -= w;
                                do {
                                  C[s++] = d[E++];
                                } while (--w);
                                if (((E = 0), c < x)) {
                                  x -= w = c;
                                  do {
                                    C[s++] = d[E++];
                                  } while (--w);
                                  (E = s - _), (k = C);
                                }
                              }
                            } else if (((E += c - w), w < x)) {
                              x -= w;
                              do {
                                C[s++] = d[E++];
                              } while (--w);
                              (E = s - _), (k = C);
                            }
                            for (; x > 2; )
                              (C[s++] = k[E++]),
                                (C[s++] = k[E++]),
                                (C[s++] = k[E++]),
                                (x -= 3);
                            x && ((C[s++] = k[E++]), x > 1 && (C[s++] = k[E++]));
                          } else {
                            E = s - _;
                            do {
                              (C[s++] = C[E++]),
                                (C[s++] = C[E++]),
                                (C[s++] = C[E++]),
                                (x -= 3);
                            } while (x > 2);
                            x && ((C[s++] = C[E++]), x > 1 && (C[s++] = C[E++]));
                          }
                          break;
                        }
                      }
                      break;
                    }
                  } while (i < r && s < a);
                  (i -= x = p >> 3),
                    (f &= (1 << (p -= x << 3)) - 1),
                    (t.next_in = i),
                    (t.next_out = s),
                    (t.avail_in = i < r ? r - i + 5 : 5 - (i - r)),
                    (t.avail_out = s < a ? a - s + 257 : 257 - (s - a)),
                    (n.hold = f),
                    (n.bits = p);
                };
              },
              {},
            ],
            49: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common"),
                  r = t("./adler32"),
                  s = t("./crc32"),
                  o = t("./inffast"),
                  a = t("./inftrees");
                function h(t) {
                  return (
                    ((t >>> 24) & 255) +
                    ((t >>> 8) & 65280) +
                    ((65280 & t) << 8) +
                    ((255 & t) << 24)
                  );
                }
                function l() {
                  (this.mode = 0),
                    (this.last = !1),
                    (this.wrap = 0),
                    (this.havedict = !1),
                    (this.flags = 0),
                    (this.dmax = 0),
                    (this.check = 0),
                    (this.total = 0),
                    (this.head = null),
                    (this.wbits = 0),
                    (this.wsize = 0),
                    (this.whave = 0),
                    (this.wnext = 0),
                    (this.window = null),
                    (this.hold = 0),
                    (this.bits = 0),
                    (this.length = 0),
                    (this.offset = 0),
                    (this.extra = 0),
                    (this.lencode = null),
                    (this.distcode = null),
                    (this.lenbits = 0),
                    (this.distbits = 0),
                    (this.ncode = 0),
                    (this.nlen = 0),
                    (this.ndist = 0),
                    (this.have = 0),
                    (this.next = null),
                    (this.lens = new i.Buf16(320)),
                    (this.work = new i.Buf16(288)),
                    (this.lendyn = null),
                    (this.distdyn = null),
                    (this.sane = 0),
                    (this.back = 0),
                    (this.was = 0);
                }
                function u(t) {
                  var e;
                  return t && t.state
                    ? ((e = t.state),
                      (t.total_in = t.total_out = e.total = 0),
                      (t.msg = ""),
                      e.wrap && (t.adler = 1 & e.wrap),
                      (e.mode = 1),
                      (e.last = 0),
                      (e.havedict = 0),
                      (e.dmax = 32768),
                      (e.head = null),
                      (e.hold = 0),
                      (e.bits = 0),
                      (e.lencode = e.lendyn = new i.Buf32(852)),
                      (e.distcode = e.distdyn = new i.Buf32(592)),
                      (e.sane = 1),
                      (e.back = -1),
                      0)
                    : -2;
                }
                function c(t) {
                  var e;
                  return t && t.state
                    ? (((e = t.state).wsize = 0),
                      (e.whave = 0),
                      (e.wnext = 0),
                      u(t))
                    : -2;
                }
                function d(t, e) {
                  var n, i;
                  return t && t.state
                    ? ((i = t.state),
                      e < 0
                        ? ((n = 0), (e = -e))
                        : ((n = 1 + (e >> 4)), e < 48 && (e &= 15)),
                      e && (e < 8 || e > 15)
                        ? -2
                        : (null !== i.window &&
                            i.wbits !== e &&
                            (i.window = null),
                          (i.wrap = n),
                          (i.wbits = e),
                          c(t)))
                    : -2;
                }
                function f(t, e) {
                  var n, i;
                  return t
                    ? ((i = new l()),
                      (t.state = i),
                      (i.window = null),
                      0 !== (n = d(t, e)) && (t.state = null),
                      n)
                    : -2;
                }
                var p,
                  g,
                  m = !0;
                function v(t) {
                  if (m) {
                    var e;
                    for (
                      p = new i.Buf32(512), g = new i.Buf32(32), e = 0;
                      e < 144;
  
                    )
                      t.lens[e++] = 8;
                    for (; e < 256; ) t.lens[e++] = 9;
                    for (; e < 280; ) t.lens[e++] = 7;
                    for (; e < 288; ) t.lens[e++] = 8;
                    for (
                      a(1, t.lens, 0, 288, p, 0, t.work, { bits: 9 }), e = 0;
                      e < 32;
  
                    )
                      t.lens[e++] = 5;
                    a(2, t.lens, 0, 32, g, 0, t.work, { bits: 5 }), (m = !1);
                  }
                  (t.lencode = p),
                    (t.lenbits = 9),
                    (t.distcode = g),
                    (t.distbits = 5);
                }
                function y(t, e, n, r) {
                  var s,
                    o = t.state;
                  return (
                    null === o.window &&
                      ((o.wsize = 1 << o.wbits),
                      (o.wnext = 0),
                      (o.whave = 0),
                      (o.window = new i.Buf8(o.wsize))),
                    r >= o.wsize
                      ? (i.arraySet(o.window, e, n - o.wsize, o.wsize, 0),
                        (o.wnext = 0),
                        (o.whave = o.wsize))
                      : ((s = o.wsize - o.wnext) > r && (s = r),
                        i.arraySet(o.window, e, n - r, s, o.wnext),
                        (r -= s)
                          ? (i.arraySet(o.window, e, n - r, r, 0),
                            (o.wnext = r),
                            (o.whave = o.wsize))
                          : ((o.wnext += s),
                            o.wnext === o.wsize && (o.wnext = 0),
                            o.whave < o.wsize && (o.whave += s))),
                    0
                  );
                }
                (n.inflateReset = c),
                  (n.inflateReset2 = d),
                  (n.inflateResetKeep = u),
                  (n.inflateInit = function (t) {
                    return f(t, 15);
                  }),
                  (n.inflateInit2 = f),
                  (n.inflate = function (t, e) {
                    var n,
                      l,
                      u,
                      c,
                      d,
                      f,
                      p,
                      g,
                      m,
                      b,
                      w,
                      x,
                      _,
                      E,
                      k,
                      S,
                      C,
                      T,
                      A,
                      N,
                      O,
                      I,
                      R,
                      D,
                      L = 0,
                      j = new i.Buf8(4),
                      z = [
                        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                        1, 15,
                      ];
                    if (
                      !t ||
                      !t.state ||
                      !t.output ||
                      (!t.input && 0 !== t.avail_in)
                    )
                      return -2;
                    12 === (n = t.state).mode && (n.mode = 13),
                      (d = t.next_out),
                      (u = t.output),
                      (p = t.avail_out),
                      (c = t.next_in),
                      (l = t.input),
                      (f = t.avail_in),
                      (g = n.hold),
                      (m = n.bits),
                      (b = f),
                      (w = p),
                      (I = 0);
                    t: for (;;)
                      switch (n.mode) {
                        case 1:
                          if (0 === n.wrap) {
                            n.mode = 13;
                            break;
                          }
                          for (; m < 16; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if (2 & n.wrap && 35615 === g) {
                            (n.check = 0),
                              (j[0] = 255 & g),
                              (j[1] = (g >>> 8) & 255),
                              (n.check = s(n.check, j, 2, 0)),
                              (g = 0),
                              (m = 0),
                              (n.mode = 2);
                            break;
                          }
                          if (
                            ((n.flags = 0),
                            n.head && (n.head.done = !1),
                            !(1 & n.wrap) || (((255 & g) << 8) + (g >> 8)) % 31)
                          ) {
                            (t.msg = "incorrect header check"), (n.mode = 30);
                            break;
                          }
                          if (8 != (15 & g)) {
                            (t.msg = "unknown compression method"), (n.mode = 30);
                            break;
                          }
                          if (
                            ((m -= 4), (O = 8 + (15 & (g >>>= 4))), 0 === n.wbits)
                          )
                            n.wbits = O;
                          else if (O > n.wbits) {
                            (t.msg = "invalid window size"), (n.mode = 30);
                            break;
                          }
                          (n.dmax = 1 << O),
                            (t.adler = n.check = 1),
                            (n.mode = 512 & g ? 10 : 12),
                            (g = 0),
                            (m = 0);
                          break;
                        case 2:
                          for (; m < 16; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if (((n.flags = g), 8 != (255 & n.flags))) {
                            (t.msg = "unknown compression method"), (n.mode = 30);
                            break;
                          }
                          if (57344 & n.flags) {
                            (t.msg = "unknown header flags set"), (n.mode = 30);
                            break;
                          }
                          n.head && (n.head.text = (g >> 8) & 1),
                            512 & n.flags &&
                              ((j[0] = 255 & g),
                              (j[1] = (g >>> 8) & 255),
                              (n.check = s(n.check, j, 2, 0))),
                            (g = 0),
                            (m = 0),
                            (n.mode = 3);
                        case 3:
                          for (; m < 32; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          n.head && (n.head.time = g),
                            512 & n.flags &&
                              ((j[0] = 255 & g),
                              (j[1] = (g >>> 8) & 255),
                              (j[2] = (g >>> 16) & 255),
                              (j[3] = (g >>> 24) & 255),
                              (n.check = s(n.check, j, 4, 0))),
                            (g = 0),
                            (m = 0),
                            (n.mode = 4);
                        case 4:
                          for (; m < 16; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          n.head &&
                            ((n.head.xflags = 255 & g), (n.head.os = g >> 8)),
                            512 & n.flags &&
                              ((j[0] = 255 & g),
                              (j[1] = (g >>> 8) & 255),
                              (n.check = s(n.check, j, 2, 0))),
                            (g = 0),
                            (m = 0),
                            (n.mode = 5);
                        case 5:
                          if (1024 & n.flags) {
                            for (; m < 16; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (n.length = g),
                              n.head && (n.head.extra_len = g),
                              512 & n.flags &&
                                ((j[0] = 255 & g),
                                (j[1] = (g >>> 8) & 255),
                                (n.check = s(n.check, j, 2, 0))),
                              (g = 0),
                              (m = 0);
                          } else n.head && (n.head.extra = null);
                          n.mode = 6;
                        case 6:
                          if (
                            1024 & n.flags &&
                            ((x = n.length) > f && (x = f),
                            x &&
                              (n.head &&
                                ((O = n.head.extra_len - n.length),
                                n.head.extra ||
                                  (n.head.extra = new Array(n.head.extra_len)),
                                i.arraySet(n.head.extra, l, c, x, O)),
                              512 & n.flags && (n.check = s(n.check, l, x, c)),
                              (f -= x),
                              (c += x),
                              (n.length -= x)),
                            n.length)
                          )
                            break t;
                          (n.length = 0), (n.mode = 7);
                        case 7:
                          if (2048 & n.flags) {
                            if (0 === f) break t;
                            x = 0;
                            do {
                              (O = l[c + x++]),
                                n.head &&
                                  O &&
                                  n.length < 65536 &&
                                  (n.head.name += String.fromCharCode(O));
                            } while (O && x < f);
                            if (
                              (512 & n.flags && (n.check = s(n.check, l, x, c)),
                              (f -= x),
                              (c += x),
                              O)
                            )
                              break t;
                          } else n.head && (n.head.name = null);
                          (n.length = 0), (n.mode = 8);
                        case 8:
                          if (4096 & n.flags) {
                            if (0 === f) break t;
                            x = 0;
                            do {
                              (O = l[c + x++]),
                                n.head &&
                                  O &&
                                  n.length < 65536 &&
                                  (n.head.comment += String.fromCharCode(O));
                            } while (O && x < f);
                            if (
                              (512 & n.flags && (n.check = s(n.check, l, x, c)),
                              (f -= x),
                              (c += x),
                              O)
                            )
                              break t;
                          } else n.head && (n.head.comment = null);
                          n.mode = 9;
                        case 9:
                          if (512 & n.flags) {
                            for (; m < 16; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            if (g !== (65535 & n.check)) {
                              (t.msg = "header crc mismatch"), (n.mode = 30);
                              break;
                            }
                            (g = 0), (m = 0);
                          }
                          n.head &&
                            ((n.head.hcrc = (n.flags >> 9) & 1),
                            (n.head.done = !0)),
                            (t.adler = n.check = 0),
                            (n.mode = 12);
                          break;
                        case 10:
                          for (; m < 32; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          (t.adler = n.check = h(g)),
                            (g = 0),
                            (m = 0),
                            (n.mode = 11);
                        case 11:
                          if (0 === n.havedict)
                            return (
                              (t.next_out = d),
                              (t.avail_out = p),
                              (t.next_in = c),
                              (t.avail_in = f),
                              (n.hold = g),
                              (n.bits = m),
                              2
                            );
                          (t.adler = n.check = 1), (n.mode = 12);
                        case 12:
                          if (5 === e || 6 === e) break t;
                        case 13:
                          if (n.last) {
                            (g >>>= 7 & m), (m -= 7 & m), (n.mode = 27);
                            break;
                          }
                          for (; m < 3; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          switch (((n.last = 1 & g), (m -= 1), 3 & (g >>>= 1))) {
                            case 0:
                              n.mode = 14;
                              break;
                            case 1:
                              if ((v(n), (n.mode = 20), 6 === e)) {
                                (g >>>= 2), (m -= 2);
                                break t;
                              }
                              break;
                            case 2:
                              n.mode = 17;
                              break;
                            case 3:
                              (t.msg = "invalid block type"), (n.mode = 30);
                          }
                          (g >>>= 2), (m -= 2);
                          break;
                        case 14:
                          for (g >>>= 7 & m, m -= 7 & m; m < 32; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if ((65535 & g) != ((g >>> 16) ^ 65535)) {
                            (t.msg = "invalid stored block lengths"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.length = 65535 & g),
                            (g = 0),
                            (m = 0),
                            (n.mode = 15),
                            6 === e)
                          )
                            break t;
                        case 15:
                          n.mode = 16;
                        case 16:
                          if ((x = n.length)) {
                            if ((x > f && (x = f), x > p && (x = p), 0 === x))
                              break t;
                            i.arraySet(u, l, c, x, d),
                              (f -= x),
                              (c += x),
                              (p -= x),
                              (d += x),
                              (n.length -= x);
                            break;
                          }
                          n.mode = 12;
                          break;
                        case 17:
                          for (; m < 14; ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if (
                            ((n.nlen = 257 + (31 & g)),
                            (g >>>= 5),
                            (m -= 5),
                            (n.ndist = 1 + (31 & g)),
                            (g >>>= 5),
                            (m -= 5),
                            (n.ncode = 4 + (15 & g)),
                            (g >>>= 4),
                            (m -= 4),
                            n.nlen > 286 || n.ndist > 30)
                          ) {
                            (t.msg = "too many length or distance symbols"),
                              (n.mode = 30);
                            break;
                          }
                          (n.have = 0), (n.mode = 18);
                        case 18:
                          for (; n.have < n.ncode; ) {
                            for (; m < 3; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (n.lens[z[n.have++]] = 7 & g), (g >>>= 3), (m -= 3);
                          }
                          for (; n.have < 19; ) n.lens[z[n.have++]] = 0;
                          if (
                            ((n.lencode = n.lendyn),
                            (n.lenbits = 7),
                            (R = { bits: n.lenbits }),
                            (I = a(0, n.lens, 0, 19, n.lencode, 0, n.work, R)),
                            (n.lenbits = R.bits),
                            I)
                          ) {
                            (t.msg = "invalid code lengths set"), (n.mode = 30);
                            break;
                          }
                          (n.have = 0), (n.mode = 19);
                        case 19:
                          for (; n.have < n.nlen + n.ndist; ) {
                            for (
                              ;
                              (S =
                                ((L = n.lencode[g & ((1 << n.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (C = 65535 & L),
                                !((k = L >>> 24) <= m);
  
                            ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            if (C < 16)
                              (g >>>= k), (m -= k), (n.lens[n.have++] = C);
                            else {
                              if (16 === C) {
                                for (D = k + 2; m < D; ) {
                                  if (0 === f) break t;
                                  f--, (g += l[c++] << m), (m += 8);
                                }
                                if (((g >>>= k), (m -= k), 0 === n.have)) {
                                  (t.msg = "invalid bit length repeat"),
                                    (n.mode = 30);
                                  break;
                                }
                                (O = n.lens[n.have - 1]),
                                  (x = 3 + (3 & g)),
                                  (g >>>= 2),
                                  (m -= 2);
                              } else if (17 === C) {
                                for (D = k + 3; m < D; ) {
                                  if (0 === f) break t;
                                  f--, (g += l[c++] << m), (m += 8);
                                }
                                (m -= k),
                                  (O = 0),
                                  (x = 3 + (7 & (g >>>= k))),
                                  (g >>>= 3),
                                  (m -= 3);
                              } else {
                                for (D = k + 7; m < D; ) {
                                  if (0 === f) break t;
                                  f--, (g += l[c++] << m), (m += 8);
                                }
                                (m -= k),
                                  (O = 0),
                                  (x = 11 + (127 & (g >>>= k))),
                                  (g >>>= 7),
                                  (m -= 7);
                              }
                              if (n.have + x > n.nlen + n.ndist) {
                                (t.msg = "invalid bit length repeat"),
                                  (n.mode = 30);
                                break;
                              }
                              for (; x--; ) n.lens[n.have++] = O;
                            }
                          }
                          if (30 === n.mode) break;
                          if (0 === n.lens[256]) {
                            (t.msg = "invalid code -- missing end-of-block"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.lenbits = 9),
                            (R = { bits: n.lenbits }),
                            (I = a(
                              1,
                              n.lens,
                              0,
                              n.nlen,
                              n.lencode,
                              0,
                              n.work,
                              R,
                            )),
                            (n.lenbits = R.bits),
                            I)
                          ) {
                            (t.msg = "invalid literal/lengths set"),
                              (n.mode = 30);
                            break;
                          }
                          if (
                            ((n.distbits = 6),
                            (n.distcode = n.distdyn),
                            (R = { bits: n.distbits }),
                            (I = a(
                              2,
                              n.lens,
                              n.nlen,
                              n.ndist,
                              n.distcode,
                              0,
                              n.work,
                              R,
                            )),
                            (n.distbits = R.bits),
                            I)
                          ) {
                            (t.msg = "invalid distances set"), (n.mode = 30);
                            break;
                          }
                          if (((n.mode = 20), 6 === e)) break t;
                        case 20:
                          n.mode = 21;
                        case 21:
                          if (f >= 6 && p >= 258) {
                            (t.next_out = d),
                              (t.avail_out = p),
                              (t.next_in = c),
                              (t.avail_in = f),
                              (n.hold = g),
                              (n.bits = m),
                              o(t, w),
                              (d = t.next_out),
                              (u = t.output),
                              (p = t.avail_out),
                              (c = t.next_in),
                              (l = t.input),
                              (f = t.avail_in),
                              (g = n.hold),
                              (m = n.bits),
                              12 === n.mode && (n.back = -1);
                            break;
                          }
                          for (
                            n.back = 0;
                            (S =
                              ((L = n.lencode[g & ((1 << n.lenbits) - 1)]) >>>
                                16) &
                              255),
                              (C = 65535 & L),
                              !((k = L >>> 24) <= m);
  
                          ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if (S && 0 == (240 & S)) {
                            for (
                              T = k, A = S, N = C;
                              (S =
                                ((L =
                                  n.lencode[
                                    N + ((g & ((1 << (T + A)) - 1)) >> T)
                                  ]) >>>
                                  16) &
                                255),
                                (C = 65535 & L),
                                !(T + (k = L >>> 24) <= m);
  
                            ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (g >>>= T), (m -= T), (n.back += T);
                          }
                          if (
                            ((g >>>= k),
                            (m -= k),
                            (n.back += k),
                            (n.length = C),
                            0 === S)
                          ) {
                            n.mode = 26;
                            break;
                          }
                          if (32 & S) {
                            (n.back = -1), (n.mode = 12);
                            break;
                          }
                          if (64 & S) {
                            (t.msg = "invalid literal/length code"),
                              (n.mode = 30);
                            break;
                          }
                          (n.extra = 15 & S), (n.mode = 22);
                        case 22:
                          if (n.extra) {
                            for (D = n.extra; m < D; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (n.length += g & ((1 << n.extra) - 1)),
                              (g >>>= n.extra),
                              (m -= n.extra),
                              (n.back += n.extra);
                          }
                          (n.was = n.length), (n.mode = 23);
                        case 23:
                          for (
                            ;
                            (S =
                              ((L = n.distcode[g & ((1 << n.distbits) - 1)]) >>>
                                16) &
                              255),
                              (C = 65535 & L),
                              !((k = L >>> 24) <= m);
  
                          ) {
                            if (0 === f) break t;
                            f--, (g += l[c++] << m), (m += 8);
                          }
                          if (0 == (240 & S)) {
                            for (
                              T = k, A = S, N = C;
                              (S =
                                ((L =
                                  n.distcode[
                                    N + ((g & ((1 << (T + A)) - 1)) >> T)
                                  ]) >>>
                                  16) &
                                255),
                                (C = 65535 & L),
                                !(T + (k = L >>> 24) <= m);
  
                            ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (g >>>= T), (m -= T), (n.back += T);
                          }
                          if (((g >>>= k), (m -= k), (n.back += k), 64 & S)) {
                            (t.msg = "invalid distance code"), (n.mode = 30);
                            break;
                          }
                          (n.offset = C), (n.extra = 15 & S), (n.mode = 24);
                        case 24:
                          if (n.extra) {
                            for (D = n.extra; m < D; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            (n.offset += g & ((1 << n.extra) - 1)),
                              (g >>>= n.extra),
                              (m -= n.extra),
                              (n.back += n.extra);
                          }
                          if (n.offset > n.dmax) {
                            (t.msg = "invalid distance too far back"),
                              (n.mode = 30);
                            break;
                          }
                          n.mode = 25;
                        case 25:
                          if (0 === p) break t;
                          if (((x = w - p), n.offset > x)) {
                            if ((x = n.offset - x) > n.whave && n.sane) {
                              (t.msg = "invalid distance too far back"),
                                (n.mode = 30);
                              break;
                            }
                            x > n.wnext
                              ? ((x -= n.wnext), (_ = n.wsize - x))
                              : (_ = n.wnext - x),
                              x > n.length && (x = n.length),
                              (E = n.window);
                          } else (E = u), (_ = d - n.offset), (x = n.length);
                          x > p && (x = p), (p -= x), (n.length -= x);
                          do {
                            u[d++] = E[_++];
                          } while (--x);
                          0 === n.length && (n.mode = 21);
                          break;
                        case 26:
                          if (0 === p) break t;
                          (u[d++] = n.length), p--, (n.mode = 21);
                          break;
                        case 27:
                          if (n.wrap) {
                            for (; m < 32; ) {
                              if (0 === f) break t;
                              f--, (g |= l[c++] << m), (m += 8);
                            }
                            if (
                              ((w -= p),
                              (t.total_out += w),
                              (n.total += w),
                              w &&
                                (t.adler = n.check =
                                  n.flags
                                    ? s(n.check, u, w, d - w)
                                    : r(n.check, u, w, d - w)),
                              (w = p),
                              (n.flags ? g : h(g)) !== n.check)
                            ) {
                              (t.msg = "incorrect data check"), (n.mode = 30);
                              break;
                            }
                            (g = 0), (m = 0);
                          }
                          n.mode = 28;
                        case 28:
                          if (n.wrap && n.flags) {
                            for (; m < 32; ) {
                              if (0 === f) break t;
                              f--, (g += l[c++] << m), (m += 8);
                            }
                            if (g !== (4294967295 & n.total)) {
                              (t.msg = "incorrect length check"), (n.mode = 30);
                              break;
                            }
                            (g = 0), (m = 0);
                          }
                          n.mode = 29;
                        case 29:
                          I = 1;
                          break t;
                        case 30:
                          I = -3;
                          break t;
                        case 31:
                          return -4;
                        case 32:
                        default:
                          return -2;
                      }
                    return (
                      (t.next_out = d),
                      (t.avail_out = p),
                      (t.next_in = c),
                      (t.avail_in = f),
                      (n.hold = g),
                      (n.bits = m),
                      (n.wsize ||
                        (w !== t.avail_out &&
                          n.mode < 30 &&
                          (n.mode < 27 || 4 !== e))) &&
                      y(t, t.output, t.next_out, w - t.avail_out)
                        ? ((n.mode = 31), -4)
                        : ((b -= t.avail_in),
                          (w -= t.avail_out),
                          (t.total_in += b),
                          (t.total_out += w),
                          (n.total += w),
                          n.wrap &&
                            w &&
                            (t.adler = n.check =
                              n.flags
                                ? s(n.check, u, w, t.next_out - w)
                                : r(n.check, u, w, t.next_out - w)),
                          (t.data_type =
                            n.bits +
                            (n.last ? 64 : 0) +
                            (12 === n.mode ? 128 : 0) +
                            (20 === n.mode || 15 === n.mode ? 256 : 0)),
                          ((0 === b && 0 === w) || 4 === e) &&
                            0 === I &&
                            (I = -5),
                          I)
                    );
                  }),
                  (n.inflateEnd = function (t) {
                    if (!t || !t.state) return -2;
                    var e = t.state;
                    return e.window && (e.window = null), (t.state = null), 0;
                  }),
                  (n.inflateGetHeader = function (t, e) {
                    var n;
                    return t && t.state
                      ? 0 == (2 & (n = t.state).wrap)
                        ? -2
                        : ((n.head = e), (e.done = !1), 0)
                      : -2;
                  }),
                  (n.inflateSetDictionary = function (t, e) {
                    var n,
                      i = e.length;
                    return t && t.state
                      ? 0 !== (n = t.state).wrap && 11 !== n.mode
                        ? -2
                        : 11 === n.mode && r(1, e, i, 0) !== n.check
                          ? -3
                          : y(t, e, i, i)
                            ? ((n.mode = 31), -4)
                            : ((n.havedict = 1), 0)
                      : -2;
                  }),
                  (n.inflateInfo = "pako inflate (from Nodeca project)");
              },
              {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50,
              },
            ],
            50: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common"),
                  r = [
                    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35,
                    43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
                  ],
                  s = [
                    16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18,
                    18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72,
                    78,
                  ],
                  o = [
                    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                    257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193,
                    12289, 16385, 24577, 0, 0,
                  ],
                  a = [
                    16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22,
                    22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29,
                    64, 64,
                  ];
                e.exports = function (t, e, n, h, l, u, c, d) {
                  var f,
                    p,
                    g,
                    m,
                    v,
                    y,
                    b,
                    w,
                    x,
                    _ = d.bits,
                    E = 0,
                    k = 0,
                    S = 0,
                    C = 0,
                    T = 0,
                    A = 0,
                    N = 0,
                    O = 0,
                    I = 0,
                    R = 0,
                    D = null,
                    L = 0,
                    j = new i.Buf16(16),
                    z = new i.Buf16(16),
                    P = null,
                    B = 0;
                  for (E = 0; E <= 15; E++) j[E] = 0;
                  for (k = 0; k < h; k++) j[e[n + k]]++;
                  for (T = _, C = 15; C >= 1 && 0 === j[C]; C--);
                  if ((T > C && (T = C), 0 === C))
                    return (
                      (l[u++] = 20971520), (l[u++] = 20971520), (d.bits = 1), 0
                    );
                  for (S = 1; S < C && 0 === j[S]; S++);
                  for (T < S && (T = S), O = 1, E = 1; E <= 15; E++)
                    if (((O <<= 1), (O -= j[E]) < 0)) return -1;
                  if (O > 0 && (0 === t || 1 !== C)) return -1;
                  for (z[1] = 0, E = 1; E < 15; E++) z[E + 1] = z[E] + j[E];
                  for (k = 0; k < h; k++)
                    0 !== e[n + k] && (c[z[e[n + k]]++] = k);
                  if (
                    (0 === t
                      ? ((D = P = c), (y = 19))
                      : 1 === t
                        ? ((D = r), (L -= 257), (P = s), (B -= 257), (y = 256))
                        : ((D = o), (P = a), (y = -1)),
                    (R = 0),
                    (k = 0),
                    (E = S),
                    (v = u),
                    (A = T),
                    (N = 0),
                    (g = -1),
                    (m = (I = 1 << T) - 1),
                    (1 === t && I > 852) || (2 === t && I > 592))
                  )
                    return 1;
                  for (;;) {
                    (b = E - N),
                      c[k] < y
                        ? ((w = 0), (x = c[k]))
                        : c[k] > y
                          ? ((w = P[B + c[k]]), (x = D[L + c[k]]))
                          : ((w = 96), (x = 0)),
                      (f = 1 << (E - N)),
                      (S = p = 1 << A);
                    do {
                      l[v + (R >> N) + (p -= f)] = (b << 24) | (w << 16) | x | 0;
                    } while (0 !== p);
                    for (f = 1 << (E - 1); R & f; ) f >>= 1;
                    if (
                      (0 !== f ? ((R &= f - 1), (R += f)) : (R = 0),
                      k++,
                      0 == --j[E])
                    ) {
                      if (E === C) break;
                      E = e[n + c[k]];
                    }
                    if (E > T && (R & m) !== g) {
                      for (
                        0 === N && (N = T), v += S, O = 1 << (A = E - N);
                        A + N < C && !((O -= j[A + N]) <= 0);
  
                      )
                        A++, (O <<= 1);
                      if (
                        ((I += 1 << A),
                        (1 === t && I > 852) || (2 === t && I > 592))
                      )
                        return 1;
                      l[(g = R & m)] = (T << 24) | (A << 16) | (v - u) | 0;
                    }
                  }
                  return (
                    0 !== R && (l[v + R] = ((E - N) << 24) | (64 << 16) | 0),
                    (d.bits = T),
                    0
                  );
                };
              },
              { "../utils/common": 41 },
            ],
            51: [
              function (t, e, n) {
                "use strict";
                e.exports = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version",
                };
              },
              {},
            ],
            52: [
              function (t, e, n) {
                "use strict";
                var i = t("../utils/common");
                function r(t) {
                  for (var e = t.length; --e >= 0; ) t[e] = 0;
                }
                var s = [
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 5, 5, 5, 0,
                  ],
                  o = [
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                    9, 10, 10, 11, 11, 12, 12, 13, 13,
                  ],
                  a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  h = [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                    15,
                  ],
                  l = new Array(576);
                r(l);
                var u = new Array(60);
                r(u);
                var c = new Array(512);
                r(c);
                var d = new Array(256);
                r(d);
                var f = new Array(29);
                r(f);
                var p,
                  g,
                  m,
                  v = new Array(30);
                function y(t, e, n, i, r) {
                  (this.static_tree = t),
                    (this.extra_bits = e),
                    (this.extra_base = n),
                    (this.elems = i),
                    (this.max_length = r),
                    (this.has_stree = t && t.length);
                }
                function b(t, e) {
                  (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
                }
                function w(t) {
                  return t < 256 ? c[t] : c[256 + (t >>> 7)];
                }
                function x(t, e) {
                  (t.pending_buf[t.pending++] = 255 & e),
                    (t.pending_buf[t.pending++] = (e >>> 8) & 255);
                }
                function _(t, e, n) {
                  t.bi_valid > 16 - n
                    ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                      x(t, t.bi_buf),
                      (t.bi_buf = e >> (16 - t.bi_valid)),
                      (t.bi_valid += n - 16))
                    : ((t.bi_buf |= (e << t.bi_valid) & 65535),
                      (t.bi_valid += n));
                }
                function E(t, e, n) {
                  _(t, n[2 * e], n[2 * e + 1]);
                }
                function k(t, e) {
                  var n = 0;
                  do {
                    (n |= 1 & t), (t >>>= 1), (n <<= 1);
                  } while (--e > 0);
                  return n >>> 1;
                }
                function S(t, e, n) {
                  var i,
                    r,
                    s = new Array(16),
                    o = 0;
                  for (i = 1; i <= 15; i++) s[i] = o = (o + n[i - 1]) << 1;
                  for (r = 0; r <= e; r++) {
                    var a = t[2 * r + 1];
                    0 !== a && (t[2 * r] = k(s[a]++, a));
                  }
                }
                function C(t) {
                  var e;
                  for (e = 0; e < 286; e++) t.dyn_ltree[2 * e] = 0;
                  for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
                  for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                  (t.dyn_ltree[512] = 1),
                    (t.opt_len = t.static_len = 0),
                    (t.last_lit = t.matches = 0);
                }
                function T(t) {
                  t.bi_valid > 8
                    ? x(t, t.bi_buf)
                    : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
                    (t.bi_buf = 0),
                    (t.bi_valid = 0);
                }
                function A(t, e, n, i) {
                  var r = 2 * e,
                    s = 2 * n;
                  return t[r] < t[s] || (t[r] === t[s] && i[e] <= i[n]);
                }
                function N(t, e, n) {
                  for (
                    var i = t.heap[n], r = n << 1;
                    r <= t.heap_len &&
                    (r < t.heap_len &&
                      A(e, t.heap[r + 1], t.heap[r], t.depth) &&
                      r++,
                    !A(e, i, t.heap[r], t.depth));
  
                  )
                    (t.heap[n] = t.heap[r]), (n = r), (r <<= 1);
                  t.heap[n] = i;
                }
                function O(t, e, n) {
                  var i,
                    r,
                    a,
                    h,
                    l = 0;
                  if (0 !== t.last_lit)
                    do {
                      (i =
                        (t.pending_buf[t.d_buf + 2 * l] << 8) |
                        t.pending_buf[t.d_buf + 2 * l + 1]),
                        (r = t.pending_buf[t.l_buf + l]),
                        l++,
                        0 === i
                          ? E(t, r, e)
                          : (E(t, (a = d[r]) + 256 + 1, e),
                            0 !== (h = s[a]) && _(t, (r -= f[a]), h),
                            E(t, (a = w(--i)), n),
                            0 !== (h = o[a]) && _(t, (i -= v[a]), h));
                    } while (l < t.last_lit);
                  E(t, 256, e);
                }
                function I(t, e) {
                  var n,
                    i,
                    r,
                    s = e.dyn_tree,
                    o = e.stat_desc.static_tree,
                    a = e.stat_desc.has_stree,
                    h = e.stat_desc.elems,
                    l = -1;
                  for (t.heap_len = 0, t.heap_max = 573, n = 0; n < h; n++)
                    0 !== s[2 * n]
                      ? ((t.heap[++t.heap_len] = l = n), (t.depth[n] = 0))
                      : (s[2 * n + 1] = 0);
                  for (; t.heap_len < 2; )
                    (s[2 * (r = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1),
                      (t.depth[r] = 0),
                      t.opt_len--,
                      a && (t.static_len -= o[2 * r + 1]);
                  for (e.max_code = l, n = t.heap_len >> 1; n >= 1; n--)
                    N(t, s, n);
                  r = h;
                  do {
                    (n = t.heap[1]),
                      (t.heap[1] = t.heap[t.heap_len--]),
                      N(t, s, 1),
                      (i = t.heap[1]),
                      (t.heap[--t.heap_max] = n),
                      (t.heap[--t.heap_max] = i),
                      (s[2 * r] = s[2 * n] + s[2 * i]),
                      (t.depth[r] =
                        (t.depth[n] >= t.depth[i] ? t.depth[n] : t.depth[i]) + 1),
                      (s[2 * n + 1] = s[2 * i + 1] = r),
                      (t.heap[1] = r++),
                      N(t, s, 1);
                  } while (t.heap_len >= 2);
                  (t.heap[--t.heap_max] = t.heap[1]),
                    (function (t, e) {
                      var n,
                        i,
                        r,
                        s,
                        o,
                        a,
                        h = e.dyn_tree,
                        l = e.max_code,
                        u = e.stat_desc.static_tree,
                        c = e.stat_desc.has_stree,
                        d = e.stat_desc.extra_bits,
                        f = e.stat_desc.extra_base,
                        p = e.stat_desc.max_length,
                        g = 0;
                      for (s = 0; s <= 15; s++) t.bl_count[s] = 0;
                      for (
                        h[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
                        n < 573;
                        n++
                      )
                        (s = h[2 * h[2 * (i = t.heap[n]) + 1] + 1] + 1) > p &&
                          ((s = p), g++),
                          (h[2 * i + 1] = s),
                          i > l ||
                            (t.bl_count[s]++,
                            (o = 0),
                            i >= f && (o = d[i - f]),
                            (a = h[2 * i]),
                            (t.opt_len += a * (s + o)),
                            c && (t.static_len += a * (u[2 * i + 1] + o)));
                      if (0 !== g) {
                        do {
                          for (s = p - 1; 0 === t.bl_count[s]; ) s--;
                          t.bl_count[s]--,
                            (t.bl_count[s + 1] += 2),
                            t.bl_count[p]--,
                            (g -= 2);
                        } while (g > 0);
                        for (s = p; 0 !== s; s--)
                          for (i = t.bl_count[s]; 0 !== i; )
                            (r = t.heap[--n]) > l ||
                              (h[2 * r + 1] !== s &&
                                ((t.opt_len += (s - h[2 * r + 1]) * h[2 * r]),
                                (h[2 * r + 1] = s)),
                              i--);
                      }
                    })(t, e),
                    S(s, l, t.bl_count);
                }
                function R(t, e, n) {
                  var i,
                    r,
                    s = -1,
                    o = e[1],
                    a = 0,
                    h = 7,
                    l = 4;
                  for (
                    0 === o && ((h = 138), (l = 3)),
                      e[2 * (n + 1) + 1] = 65535,
                      i = 0;
                    i <= n;
                    i++
                  )
                    (r = o),
                      (o = e[2 * (i + 1) + 1]),
                      (++a < h && r === o) ||
                        (a < l
                          ? (t.bl_tree[2 * r] += a)
                          : 0 !== r
                            ? (r !== s && t.bl_tree[2 * r]++, t.bl_tree[32]++)
                            : a <= 10
                              ? t.bl_tree[34]++
                              : t.bl_tree[36]++,
                        (a = 0),
                        (s = r),
                        0 === o
                          ? ((h = 138), (l = 3))
                          : r === o
                            ? ((h = 6), (l = 3))
                            : ((h = 7), (l = 4)));
                }
                function D(t, e, n) {
                  var i,
                    r,
                    s = -1,
                    o = e[1],
                    a = 0,
                    h = 7,
                    l = 4;
                  for (0 === o && ((h = 138), (l = 3)), i = 0; i <= n; i++)
                    if (
                      ((r = o), (o = e[2 * (i + 1) + 1]), !(++a < h && r === o))
                    ) {
                      if (a < l)
                        do {
                          E(t, r, t.bl_tree);
                        } while (0 != --a);
                      else
                        0 !== r
                          ? (r !== s && (E(t, r, t.bl_tree), a--),
                            E(t, 16, t.bl_tree),
                            _(t, a - 3, 2))
                          : a <= 10
                            ? (E(t, 17, t.bl_tree), _(t, a - 3, 3))
                            : (E(t, 18, t.bl_tree), _(t, a - 11, 7));
                      (a = 0),
                        (s = r),
                        0 === o
                          ? ((h = 138), (l = 3))
                          : r === o
                            ? ((h = 6), (l = 3))
                            : ((h = 7), (l = 4));
                    }
                }
                r(v);
                var L = !1;
                function j(t, e, n, r) {
                  _(t, 0 + (r ? 1 : 0), 3),
                    (function (t, e, n, r) {
                      T(t),
                        r && (x(t, n), x(t, ~n)),
                        i.arraySet(t.pending_buf, t.window, e, n, t.pending),
                        (t.pending += n);
                    })(t, e, n, !0);
                }
                (n._tr_init = function (t) {
                  L ||
                    ((function () {
                      var t,
                        e,
                        n,
                        i,
                        r,
                        h = new Array(16);
                      for (n = 0, i = 0; i < 28; i++)
                        for (f[i] = n, t = 0; t < 1 << s[i]; t++) d[n++] = i;
                      for (d[n - 1] = i, r = 0, i = 0; i < 16; i++)
                        for (v[i] = r, t = 0; t < 1 << o[i]; t++) c[r++] = i;
                      for (r >>= 7; i < 30; i++)
                        for (v[i] = r << 7, t = 0; t < 1 << (o[i] - 7); t++)
                          c[256 + r++] = i;
                      for (e = 0; e <= 15; e++) h[e] = 0;
                      for (t = 0; t <= 143; ) (l[2 * t + 1] = 8), t++, h[8]++;
                      for (; t <= 255; ) (l[2 * t + 1] = 9), t++, h[9]++;
                      for (; t <= 279; ) (l[2 * t + 1] = 7), t++, h[7]++;
                      for (; t <= 287; ) (l[2 * t + 1] = 8), t++, h[8]++;
                      for (S(l, 287, h), t = 0; t < 30; t++)
                        (u[2 * t + 1] = 5), (u[2 * t] = k(t, 5));
                      (p = new y(l, s, 257, 286, 15)),
                        (g = new y(u, o, 0, 30, 15)),
                        (m = new y(new Array(0), a, 0, 19, 7));
                    })(),
                    (L = !0)),
                    (t.l_desc = new b(t.dyn_ltree, p)),
                    (t.d_desc = new b(t.dyn_dtree, g)),
                    (t.bl_desc = new b(t.bl_tree, m)),
                    (t.bi_buf = 0),
                    (t.bi_valid = 0),
                    C(t);
                }),
                  (n._tr_stored_block = j),
                  (n._tr_flush_block = function (t, e, n, i) {
                    var r,
                      s,
                      o = 0;
                    t.level > 0
                      ? (2 === t.strm.data_type &&
                          (t.strm.data_type = (function (t) {
                            var e,
                              n = 4093624447;
                            for (e = 0; e <= 31; e++, n >>>= 1)
                              if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                            if (
                              0 !== t.dyn_ltree[18] ||
                              0 !== t.dyn_ltree[20] ||
                              0 !== t.dyn_ltree[26]
                            )
                              return 1;
                            for (e = 32; e < 256; e++)
                              if (0 !== t.dyn_ltree[2 * e]) return 1;
                            return 0;
                          })(t)),
                        I(t, t.l_desc),
                        I(t, t.d_desc),
                        (o = (function (t) {
                          var e;
                          for (
                            R(t, t.dyn_ltree, t.l_desc.max_code),
                              R(t, t.dyn_dtree, t.d_desc.max_code),
                              I(t, t.bl_desc),
                              e = 18;
                            e >= 3 && 0 === t.bl_tree[2 * h[e] + 1];
                            e--
                          );
                          return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                        })(t)),
                        (r = (t.opt_len + 3 + 7) >>> 3),
                        (s = (t.static_len + 3 + 7) >>> 3) <= r && (r = s))
                      : (r = s = n + 5),
                      n + 4 <= r && -1 !== e
                        ? j(t, e, n, i)
                        : 4 === t.strategy || s === r
                          ? (_(t, 2 + (i ? 1 : 0), 3), O(t, l, u))
                          : (_(t, 4 + (i ? 1 : 0), 3),
                            (function (t, e, n, i) {
                              var r;
                              for (
                                _(t, e - 257, 5),
                                  _(t, n - 1, 5),
                                  _(t, i - 4, 4),
                                  r = 0;
                                r < i;
                                r++
                              )
                                _(t, t.bl_tree[2 * h[r] + 1], 3);
                              D(t, t.dyn_ltree, e - 1), D(t, t.dyn_dtree, n - 1);
                            })(
                              t,
                              t.l_desc.max_code + 1,
                              t.d_desc.max_code + 1,
                              o + 1,
                            ),
                            O(t, t.dyn_ltree, t.dyn_dtree)),
                      C(t),
                      i && T(t);
                  }),
                  (n._tr_tally = function (t, e, n) {
                    return (
                      (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                      (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                      (t.pending_buf[t.l_buf + t.last_lit] = 255 & n),
                      t.last_lit++,
                      0 === e
                        ? t.dyn_ltree[2 * n]++
                        : (t.matches++,
                          e--,
                          t.dyn_ltree[2 * (d[n] + 256 + 1)]++,
                          t.dyn_dtree[2 * w(e)]++),
                      t.last_lit === t.lit_bufsize - 1
                    );
                  }),
                  (n._tr_align = function (t) {
                    _(t, 2, 3),
                      E(t, 256, l),
                      (function (t) {
                        16 === t.bi_valid
                          ? (x(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                          : t.bi_valid >= 8 &&
                            ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                            (t.bi_buf >>= 8),
                            (t.bi_valid -= 8));
                      })(t);
                  });
              },
              { "../utils/common": 41 },
            ],
            53: [
              function (t, e, n) {
                "use strict";
                e.exports = function () {
                  (this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0);
                };
              },
              {},
            ],
            54: [
              function (t, e, n) {
                "use strict";
                e.exports =
                  "function" == typeof i
                    ? i
                    : function () {
                        var t = [].slice.apply(arguments);
                        t.splice(1, 0, 0), setTimeout.apply(null, t);
                      };
              },
              {},
            ],
          },
          {},
          [10],
        )(10);
      }).call(this, n(63).Buffer, n(9), n(67).setImmediate);
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var i = n(15),
          r = n(11),
          s = n(2),
          o = n(10),
          a = n(0),
          h = n(1);
        n(21), n(13), n(23);
        function l(t, e) {
          return new i.a(t, e);
        }
        (l.VERSION = h.b),
          void 0 !== t && (t.EPUBJS_VERSION = h.b),
          (l.Book = i.a),
          (l.Rendition = r.a),
          (l.Contents = o.a),
          (l.CFI = s.a),
          (l.utils = a),
          (e.a = l);
      }).call(this, n(9));
    },
    function (t, e, n) {
      "use strict";
      var i = n(25),
        r = n(34),
        s = n(38),
        o = n(46),
        a = n(47);
      (t.exports = function (t, e) {
        var n, r, h, l, u;
        return (
          arguments.length < 2 || "string" != typeof t
            ? ((l = e), (e = t), (t = null))
            : (l = arguments[2]),
          i(t)
            ? ((n = a.call(t, "c")), (r = a.call(t, "e")), (h = a.call(t, "w")))
            : ((n = h = !0), (r = !1)),
          (u = { value: e, configurable: n, enumerable: r, writable: h }),
          l ? s(o(l), u) : u
        );
      }).gs = function (t, e, n) {
        var h, l, u, c;
        return (
          "string" != typeof t
            ? ((u = n), (n = e), (e = t), (t = null))
            : (u = arguments[3]),
          i(e)
            ? r(e)
              ? i(n)
                ? r(n) || ((u = n), (n = void 0))
                : (n = void 0)
              : ((u = e), (e = n = void 0))
            : (e = void 0),
          i(t)
            ? ((h = a.call(t, "c")), (l = a.call(t, "e")))
            : ((h = !0), (l = !1)),
          (c = { get: e, set: n, configurable: h, enumerable: l }),
          u ? s(o(u), c) : c
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(35),
        r = /^\s*class[\s{/}]/,
        s = Function.prototype.toString;
      t.exports = function (t) {
        return !!i(t) && !r.test(s.call(t));
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(36);
      t.exports = function (t) {
        if ("function" != typeof t) return !1;
        if (!hasOwnProperty.call(t, "length")) return !1;
        try {
          if ("number" != typeof t.length) return !1;
          if ("function" != typeof t.call) return !1;
          if ("function" != typeof t.apply) return !1;
        } catch (t) {
          return !1;
        }
        return !i(t);
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(37);
      t.exports = function (t) {
        if (!i(t)) return !1;
        try {
          return !!t.constructor && t.constructor.prototype === t;
        } catch (t) {
          return !1;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(25),
        r = { object: !0, function: !0, undefined: !0 };
      t.exports = function (t) {
        return !!i(t) && hasOwnProperty.call(r, typeof t);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = n(39)() ? Object.assign : n(40);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function () {
        var t,
          e = Object.assign;
        return (
          "function" == typeof e &&
          (e((t = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
          t.foo + t.bar + t.trzy === "razdwatrzy")
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(41),
        r = n(45),
        s = Math.max;
      t.exports = function (t, e) {
        var n,
          o,
          a,
          h = s(arguments.length, 2);
        for (
          t = Object(r(t)),
            a = function (i) {
              try {
                t[i] = e[i];
              } catch (t) {
                n || (n = t);
              }
            },
            o = 1;
          o < h;
          ++o
        )
          i((e = arguments[o])).forEach(a);
        if (void 0 !== n) throw n;
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = n(42)() ? Object.keys : n(43);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function () {
        try {
          return Object.keys("primitive"), !0;
        } catch (t) {
          return !1;
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(19),
        r = Object.keys;
      t.exports = function (t) {
        return r(i(t) ? Object(t) : t);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function () {};
    },
    function (t, e, n) {
      "use strict";
      var i = n(19);
      t.exports = function (t) {
        if (!i(t)) throw new TypeError("Cannot use null or undefined");
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      var i = n(19),
        r = Array.prototype.forEach,
        s = Object.create,
        o = function (t, e) {
          var n;
          for (n in t) e[n] = t[n];
        };
      t.exports = function (t) {
        var e = s(null);
        return (
          r.call(arguments, function (t) {
            i(t) && o(Object(t), e);
          }),
          e
        );
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = n(48)() ? String.prototype.contains : n(49);
    },
    function (t, e, n) {
      "use strict";
      var i = "razdwatrzy";
      t.exports = function () {
        return (
          "function" == typeof i.contains &&
          !0 === i.contains("dwa") &&
          !1 === i.contains("foo")
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var i = String.prototype.indexOf;
      t.exports = function (t) {
        return i.call(this, t, arguments[1]) > -1;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        return t;
      };
    },
    function (t, e) {
      e.entityMap = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        auml: "ä",
        Aring: "Å",
        aring: "å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        ouml: "ö",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        times: "×",
        divide: "÷",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        euro: "€",
        trade: "™",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦",
      };
    },
    function (t, e) {
      var n =
          /[A-Z_a-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�]/,
        i = new RegExp(
          "[\\-\\.0-9" +
            n.source.slice(1, -1) +
            "\·\̀-\ͯ\‿-\⁀]",
        ),
        r = new RegExp(
          "^" + n.source + i.source + "*(?::" + n.source + i.source + "*)?$",
        );
      function s() {}
      function o(t, e) {
        return (
          (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber), e
        );
      }
      function a(t, e, n, i, r, s) {
        for (var o, a = ++e, h = 0; ; ) {
          var l = t.charAt(a);
          switch (l) {
            case "=":
              if (1 === h) (o = t.slice(e, a)), (h = 3);
              else {
                if (2 !== h)
                  throw new Error("attribute equal must after attrName");
                h = 3;
              }
              break;
            case "'":
            case '"':
              if (3 === h || 1 === h) {
                if (
                  (1 === h &&
                    (s.warning('attribute value must after "="'),
                    (o = t.slice(e, a))),
                  (e = a + 1),
                  !((a = t.indexOf(l, e)) > 0))
                )
                  throw new Error("attribute value no end '" + l + "' match");
                (u = t.slice(e, a).replace(/&#?\w+;/g, r)),
                  n.add(o, u, e - 1),
                  (h = 5);
              } else {
                if (4 != h) throw new Error('attribute value must after "="');
                (u = t.slice(e, a).replace(/&#?\w+;/g, r)),
                  n.add(o, u, e),
                  s.warning(
                    'attribute "' + o + '" missed start quot(' + l + ")!!",
                  ),
                  (e = a + 1),
                  (h = 5);
              }
              break;
            case "/":
              switch (h) {
                case 0:
                  n.setTagName(t.slice(e, a));
                case 5:
                case 6:
                case 7:
                  (h = 7), (n.closed = !0);
                case 4:
                case 1:
                case 2:
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              return (
                s.error("unexpected end of input"),
                0 == h && n.setTagName(t.slice(e, a)),
                a
              );
            case ">":
              switch (h) {
                case 0:
                  n.setTagName(t.slice(e, a));
                case 5:
                case 6:
                case 7:
                  break;
                case 4:
                case 1:
                  "/" === (u = t.slice(e, a)).slice(-1) &&
                    ((n.closed = !0), (u = u.slice(0, -1)));
                case 2:
                  2 === h && (u = o),
                    4 == h
                      ? (s.warning('attribute "' + u + '" missed quot(")!!'),
                        n.add(o, u.replace(/&#?\w+;/g, r), e))
                      : (("http://www.w3.org/1999/xhtml" === i[""] &&
                          u.match(/^(?:disabled|checked|selected)$/i)) ||
                          s.warning(
                            'attribute "' +
                              u +
                              '" missed value!! "' +
                              u +
                              '" instead!!',
                          ),
                        n.add(u, u, e));
                  break;
                case 3:
                  throw new Error("attribute value missed!!");
              }
              return a;
            case "":
              l = " ";
            default:
              if (l <= " ")
                switch (h) {
                  case 0:
                    n.setTagName(t.slice(e, a)), (h = 6);
                    break;
                  case 1:
                    (o = t.slice(e, a)), (h = 2);
                    break;
                  case 4:
                    var u = t.slice(e, a).replace(/&#?\w+;/g, r);
                    s.warning('attribute "' + u + '" missed quot(")!!'),
                      n.add(o, u, e);
                  case 5:
                    h = 6;
                }
              else
                switch (h) {
                  case 2:
                    n.tagName;
                    ("http://www.w3.org/1999/xhtml" === i[""] &&
                      o.match(/^(?:disabled|checked|selected)$/i)) ||
                      s.warning(
                        'attribute "' +
                          o +
                          '" missed value!! "' +
                          o +
                          '" instead2!!',
                      ),
                      n.add(o, o, e),
                      (e = a),
                      (h = 1);
                    break;
                  case 5:
                    s.warning('attribute space is required"' + o + '"!!');
                  case 6:
                    (h = 1), (e = a);
                    break;
                  case 3:
                    (h = 4), (e = a);
                    break;
                  case 7:
                    throw new Error(
                      "elements closed character '/' and '>' must be connected to",
                    );
                }
          }
          a++;
        }
      }
      function h(t, e, n) {
        for (var i = t.tagName, r = null, s = t.length; s--; ) {
          var o = t[s],
            a = o.qName,
            h = o.value;
          if ((f = a.indexOf(":")) > 0)
            var l = (o.prefix = a.slice(0, f)),
              u = a.slice(f + 1),
              d = "xmlns" === l && u;
          else (u = a), (l = null), (d = "xmlns" === a && "");
          (o.localName = u),
            !1 !== d &&
              (null == r && ((r = {}), c(n, (n = {}))),
              (n[d] = r[d] = h),
              (o.uri = "http://www.w3.org/2000/xmlns/"),
              e.startPrefixMapping(d, h));
        }
        for (s = t.length; s--; ) {
          (l = (o = t[s]).prefix) &&
            ("xml" === l && (o.uri = "http://www.w3.org/XML/1998/namespace"),
            "xmlns" !== l && (o.uri = n[l || ""]));
        }
        var f;
        (f = i.indexOf(":")) > 0
          ? ((l = t.prefix = i.slice(0, f)), (u = t.localName = i.slice(f + 1)))
          : ((l = null), (u = t.localName = i));
        var p = (t.uri = n[l || ""]);
        if ((e.startElement(p, u, i, t), !t.closed))
          return (t.currentNSMap = n), (t.localNSMap = r), !0;
        if ((e.endElement(p, u, i), r)) for (l in r) e.endPrefixMapping(l);
      }
      function l(t, e, n, i, r) {
        if (/^(?:script|textarea)$/i.test(n)) {
          var s = t.indexOf("</" + n + ">", e),
            o = t.substring(e + 1, s);
          if (/[&<]/.test(o))
            return /^script$/i.test(n)
              ? (r.characters(o, 0, o.length), s)
              : ((o = o.replace(/&#?\w+;/g, i)), r.characters(o, 0, o.length), s);
        }
        return e + 1;
      }
      function u(t, e, n, i) {
        var r = i[n];
        return (
          null == r &&
            ((r = t.lastIndexOf("</" + n + ">")) < e &&
              (r = t.lastIndexOf("</" + n)),
            (i[n] = r)),
          r < e
        );
      }
      function c(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function d(t, e, n, i) {
        switch (t.charAt(e + 2)) {
          case "-":
            return "-" === t.charAt(e + 3)
              ? (r = t.indexOf("-->", e + 4)) > e
                ? (n.comment(t, e + 4, r - e - 4), r + 3)
                : (i.error("Unclosed comment"), -1)
              : -1;
          default:
            if ("CDATA[" == t.substr(e + 3, 6)) {
              var r = t.indexOf("]]>", e + 9);
              return (
                n.startCDATA(),
                n.characters(t, e + 9, r - e - 9),
                n.endCDATA(),
                r + 3
              );
            }
            var s = (function (t, e) {
                var n,
                  i = [],
                  r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                (r.lastIndex = e), r.exec(t);
                for (; (n = r.exec(t)); ) if ((i.push(n), n[1])) return i;
              })(t, e),
              o = s.length;
            if (o > 1 && /!doctype/i.test(s[0][0])) {
              var a = s[1][0],
                h = o > 3 && /^public$/i.test(s[2][0]) && s[3][0],
                l = o > 4 && s[4][0],
                u = s[o - 1];
              return (
                n.startDTD(
                  a,
                  h && h.replace(/^(['"])(.*?)\1$/, "$2"),
                  l && l.replace(/^(['"])(.*?)\1$/, "$2"),
                ),
                n.endDTD(),
                u.index + u[0].length
              );
            }
        }
        return -1;
      }
      function f(t, e, n) {
        var i = t.indexOf("?>", e);
        if (i) {
          var r = t.substring(e, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (r) {
            r[0].length;
            return n.processingInstruction(r[1], r[2]), i + 2;
          }
          return -1;
        }
        return -1;
      }
      function p(t) {}
      (s.prototype = {
        parse: function (t, e, n) {
          var i = this.domBuilder;
          i.startDocument(),
            c(e, (e = {})),
            (function (t, e, n, i, r) {
              function s(t) {
                var e = t.slice(1, -1);
                return e in n
                  ? n[e]
                  : "#" === e.charAt(0)
                    ? (function (t) {
                        if (t > 65535) {
                          var e = 55296 + ((t -= 65536) >> 10),
                            n = 56320 + (1023 & t);
                          return String.fromCharCode(e, n);
                        }
                        return String.fromCharCode(t);
                      })(parseInt(e.substr(1).replace("x", "0x")))
                    : (r.error("entity not found:" + t), t);
              }
              function c(e) {
                if (e > _) {
                  var n = t.substring(_, e).replace(/&#?\w+;/g, s);
                  b && g(_), i.characters(n, 0, e - _), (_ = e);
                }
              }
              function g(e, n) {
                for (; e >= v && (n = y.exec(t)); )
                  (m = n.index), (v = m + n[0].length), b.lineNumber++;
                b.columnNumber = e - m + 1;
              }
              var m = 0,
                v = 0,
                y = /.*(?:\r\n?|\n)|.*$/g,
                b = i.locator,
                w = [{ currentNSMap: e }],
                x = {},
                _ = 0;
              for (;;) {
                try {
                  var E = t.indexOf("<", _);
                  if (E < 0) {
                    if (!t.substr(_).match(/^\s*$/)) {
                      var k = i.doc,
                        S = k.createTextNode(t.substr(_));
                      k.appendChild(S), (i.currentElement = S);
                    }
                    return;
                  }
                  switch ((E > _ && c(E), t.charAt(E + 1))) {
                    case "/":
                      var C = t.indexOf(">", E + 3),
                        T = t.substring(E + 2, C),
                        A = w.pop();
                      C < 0
                        ? ((T = t.substring(E + 2).replace(/[\s<].*/, "")),
                          r.error(
                            "end tag name: " +
                              T +
                              " is not complete:" +
                              A.tagName,
                          ),
                          (C = E + 1 + T.length))
                        : T.match(/\s</) &&
                          ((T = T.replace(/[\s<].*/, "")),
                          r.error("end tag name: " + T + " maybe not complete"),
                          (C = E + 1 + T.length));
                      var N = A.localNSMap,
                        O = A.tagName == T;
                      if (
                        O ||
                        (A.tagName && A.tagName.toLowerCase() == T.toLowerCase())
                      ) {
                        if ((i.endElement(A.uri, A.localName, T), N))
                          for (var I in N) i.endPrefixMapping(I);
                        O ||
                          r.fatalError(
                            "end tag name: " +
                              T +
                              " is not match the current start tagName:" +
                              A.tagName,
                          );
                      } else w.push(A);
                      C++;
                      break;
                    case "?":
                      b && g(E), (C = f(t, E, i));
                      break;
                    case "!":
                      b && g(E), (C = d(t, E, i, r));
                      break;
                    default:
                      b && g(E);
                      var R = new p(),
                        D = w[w.length - 1].currentNSMap,
                        L = ((C = a(t, E, R, D, s, r)), R.length);
                      if (
                        (!R.closed &&
                          u(t, C, R.tagName, x) &&
                          ((R.closed = !0),
                          n.nbsp || r.warning("unclosed xml attribute")),
                        b && L)
                      ) {
                        for (var j = o(b, {}), z = 0; z < L; z++) {
                          var P = R[z];
                          g(P.offset), (P.locator = o(b, {}));
                        }
                        (i.locator = j), h(R, i, D) && w.push(R), (i.locator = b);
                      } else h(R, i, D) && w.push(R);
                      "http://www.w3.org/1999/xhtml" !== R.uri || R.closed
                        ? C++
                        : (C = l(t, C, R.tagName, s, i));
                  }
                } catch (t) {
                  r.error("element parse error: " + t), (C = -1);
                }
                C > _ ? (_ = C) : c(Math.max(E, _) + 1);
              }
            })(t, e, n, i, this.errorHandler),
            i.endDocument();
        },
      }),
        (p.prototype = {
          setTagName: function (t) {
            if (!r.test(t)) throw new Error("invalid tagName:" + t);
            this.tagName = t;
          },
          add: function (t, e, n) {
            if (!r.test(t)) throw new Error("invalid attribute:" + t);
            this[this.length++] = { qName: t, value: e, offset: n };
          },
          length: 0,
          getLocalName: function (t) {
            return this[t].localName;
          },
          getLocator: function (t) {
            return this[t].locator;
          },
          getQName: function (t) {
            return this[t].qName;
          },
          getURI: function (t) {
            return this[t].uri;
          },
          getValue: function (t) {
            return this[t].value;
          },
        }),
        (e.XMLReader = s);
    },
    function (t, e, n) {
      "use strict";
      function i(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createElement = i),
        (e.default = { createElement: i });
    },
    function (t, e, n) {
      "use strict";
      function i(t, e) {
        function n(n) {
          for (var i = e.length - 1; i >= 0; i--) {
            var o = e[i],
              a = n.clientX,
              h = n.clientY;
            if (
              (n.touches &&
                n.touches.length &&
                ((a = n.touches[0].clientX), (h = n.touches[0].clientY)),
              s(o, t, a, h))
            ) {
              o.dispatchEvent(r(n));
              break;
            }
          }
        }
        if ("iframe" === t.nodeName || "IFRAME" === t.nodeName)
          try {
            this.target = t.contentDocument;
          } catch (e) {
            this.target = t;
          }
        else this.target = t;
        for (
          var i = ["mouseup", "mousedown", "click", "touchstart"], o = 0;
          o < i.length;
          o++
        ) {
          var a = i[o];
          this.target.addEventListener(
            a,
            function (t) {
              return n(t);
            },
            !1,
          );
        }
      }
      function r(t) {
        var e = Object.assign({}, t, { bubbles: !1 });
        try {
          return new MouseEvent(t.type, e);
        } catch (i) {
          var n = document.createEvent("MouseEvents");
          return (
            n.initMouseEvent(
              t.type,
              !1,
              e.cancelable,
              e.view,
              e.detail,
              e.screenX,
              e.screenY,
              e.clientX,
              e.clientY,
              e.ctrlKey,
              e.altKey,
              e.shiftKey,
              e.metaKey,
              e.button,
              e.relatedTarget,
            ),
            n
          );
        }
      }
      function s(t, e, n, i) {
        var r = e.getBoundingClientRect();
        function s(t, e, n) {
          var i = t.top - r.top,
            s = t.left - r.left,
            o = i + t.height,
            a = s + t.width;
          return i <= n && s <= e && o > n && a > e;
        }
        if (!s(t.getBoundingClientRect(), n, i)) return !1;
        for (var o = t.getClientRects(), a = 0, h = o.length; a < h; a++)
          if (s(o[a], n, i)) return !0;
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.proxyMouse = i),
        (e.clone = r),
        (e.default = { proxyMouse: i });
    },
    function (t, e, n) {
      var i = n(27);
      t.exports = function () {
        return i.Date.now();
      };
    },
    function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }).call(this, n(9));
    },
    function (t, e, n) {
      var i = n(20),
        r = n(58),
        s = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        l = parseInt;
      t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (r(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(s, "");
        var n = a.test(t);
        return n || h.test(t) ? l(t.slice(2), n ? 2 : 8) : o.test(t) ? NaN : +t;
      };
    },
    function (t, e, n) {
      var i = n(59),
        r = n(62);
      t.exports = function (t) {
        return "symbol" == typeof t || (r(t) && "[object Symbol]" == i(t));
      };
    },
    function (t, e, n) {
      var i = n(28),
        r = n(60),
        s = n(61),
        o = i ? i.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(t)
            ? r(t)
            : s(t);
      };
    },
    function (t, e, n) {
      var i = n(28),
        r = Object.prototype,
        s = r.hasOwnProperty,
        o = r.toString,
        a = i ? i.toStringTag : void 0;
      t.exports = function (t) {
        var e = s.call(t, a),
          n = t[a];
        try {
          t[a] = void 0;
          var i = !0;
        } catch (t) {}
        var r = o.call(t);
        return i && (e ? (t[a] = n) : delete t[a]), r;
      };
    },
    function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var i = n(64),
          r = n(65),
          s = n(66);
        function o() {
          return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (o() < e) throw new RangeError("Invalid typed array length");
          return (
            h.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = h.prototype)
              : (null === t && (t = new h(e)), (t.length = e)),
            t
          );
        }
        function h(t, e, n) {
          if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h))
            return new h(t, e, n);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string",
              );
            return c(this, t);
          }
          return l(this, t, e, n);
        }
        function l(t, e, n, i) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, n, i) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (i || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === i
                    ? new Uint8Array(e)
                    : void 0 === i
                      ? new Uint8Array(e, n)
                      : new Uint8Array(e, n, i);
                h.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = h.prototype)
                  : (t = d(t, e));
                return t;
              })(t, e, n, i)
            : "string" == typeof e
              ? (function (t, e, n) {
                  ("string" == typeof n && "" !== n) || (n = "utf8");
                  if (!h.isEncoding(n))
                    throw new TypeError(
                      '"encoding" must be a valid string encoding',
                    );
                  var i = 0 | p(e, n),
                    r = (t = a(t, i)).write(e, n);
                  r !== i && (t = t.slice(0, r));
                  return t;
                })(t, e, n)
              : (function (t, e) {
                  if (h.isBuffer(e)) {
                    var n = 0 | f(e.length);
                    return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t;
                  }
                  if (e) {
                    if (
                      ("undefined" != typeof ArrayBuffer &&
                        e.buffer instanceof ArrayBuffer) ||
                      "length" in e
                    )
                      return "number" != typeof e.length || (i = e.length) != i
                        ? a(t, 0)
                        : d(t, e);
                    if ("Buffer" === e.type && s(e.data)) return d(t, e.data);
                  }
                  var i;
                  throw new TypeError(
                    "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
                  );
                })(t, e);
        }
        function u(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0) throw new RangeError('"size" argument must not be negative');
        }
        function c(t, e) {
          if ((u(e), (t = a(t, e < 0 ? 0 : 0 | f(e))), !h.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function d(t, e) {
          var n = e.length < 0 ? 0 : 0 | f(e.length);
          t = a(t, n);
          for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
          return t;
        }
        function f(t) {
          if (t >= o())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                o().toString(16) +
                " bytes",
            );
          return 0 | t;
        }
        function p(t, e) {
          if (h.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var i = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return F(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return U(t).length;
              default:
                if (i) return F(t).length;
                (e = ("" + e).toLowerCase()), (i = !0);
            }
        }
        function g(t, e, n) {
          var i = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return N(this, e, n);
              case "utf8":
              case "utf-8":
                return C(this, e, n);
              case "ascii":
                return T(this, e, n);
              case "latin1":
              case "binary":
                return A(this, e, n);
              case "base64":
                return S(this, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return O(this, e, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (i = !0);
            }
        }
        function m(t, e, n) {
          var i = t[e];
          (t[e] = t[n]), (t[n] = i);
        }
        function v(t, e, n, i, r) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof n
              ? ((i = n), (n = 0))
              : n > 2147483647
                ? (n = 2147483647)
                : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = r ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (r) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!r) return -1;
            n = 0;
          }
          if (("string" == typeof e && (e = h.from(e, i)), h.isBuffer(e)))
            return 0 === e.length ? -1 : y(t, e, n, i, r);
          if ("number" == typeof e)
            return (
              (e &= 255),
              h.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? r
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : y(t, [e], n, i, r)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function y(t, e, n, i, r) {
          var s,
            o = 1,
            a = t.length,
            h = e.length;
          if (
            void 0 !== i &&
            ("ucs2" === (i = String(i).toLowerCase()) ||
              "ucs-2" === i ||
              "utf16le" === i ||
              "utf-16le" === i)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (o = 2), (a /= 2), (h /= 2), (n /= 2);
          }
          function l(t, e) {
            return 1 === o ? t[e] : t.readUInt16BE(e * o);
          }
          if (r) {
            var u = -1;
            for (s = n; s < a; s++)
              if (l(t, s) === l(e, -1 === u ? 0 : s - u)) {
                if ((-1 === u && (u = s), s - u + 1 === h)) return u * o;
              } else -1 !== u && (s -= s - u), (u = -1);
          } else
            for (n + h > a && (n = a - h), s = n; s >= 0; s--) {
              for (var c = !0, d = 0; d < h; d++)
                if (l(t, s + d) !== l(e, d)) {
                  c = !1;
                  break;
                }
              if (c) return s;
            }
          return -1;
        }
        function b(t, e, n, i) {
          n = Number(n) || 0;
          var r = t.length - n;
          i ? (i = Number(i)) > r && (i = r) : (i = r);
          var s = e.length;
          if (s % 2 != 0) throw new TypeError("Invalid hex string");
          i > s / 2 && (i = s / 2);
          for (var o = 0; o < i; ++o) {
            var a = parseInt(e.substr(2 * o, 2), 16);
            if (isNaN(a)) return o;
            t[n + o] = a;
          }
          return o;
        }
        function w(t, e, n, i) {
          return q(F(e, t.length - n), t, n, i);
        }
        function x(t, e, n, i) {
          return q(
            (function (t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            i,
          );
        }
        function _(t, e, n, i) {
          return x(t, e, n, i);
        }
        function E(t, e, n, i) {
          return q(U(e), t, n, i);
        }
        function k(t, e, n, i) {
          return q(
            (function (t, e) {
              for (
                var n, i, r, s = [], o = 0;
                o < t.length && !((e -= 2) < 0);
                ++o
              )
                (n = t.charCodeAt(o)),
                  (i = n >> 8),
                  (r = n % 256),
                  s.push(r),
                  s.push(i);
              return s;
            })(e, t.length - n),
            t,
            n,
            i,
          );
        }
        function S(t, e, n) {
          return 0 === e && n === t.length
            ? i.fromByteArray(t)
            : i.fromByteArray(t.slice(e, n));
        }
        function C(t, e, n) {
          n = Math.min(t.length, n);
          for (var i = [], r = e; r < n; ) {
            var s,
              o,
              a,
              h,
              l = t[r],
              u = null,
              c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
            if (r + c <= n)
              switch (c) {
                case 1:
                  l < 128 && (u = l);
                  break;
                case 2:
                  128 == (192 & (s = t[r + 1])) &&
                    (h = ((31 & l) << 6) | (63 & s)) > 127 &&
                    (u = h);
                  break;
                case 3:
                  (s = t[r + 1]),
                    (o = t[r + 2]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      (h = ((15 & l) << 12) | ((63 & s) << 6) | (63 & o)) >
                        2047 &&
                      (h < 55296 || h > 57343) &&
                      (u = h);
                  break;
                case 4:
                  (s = t[r + 1]),
                    (o = t[r + 2]),
                    (a = t[r + 3]),
                    128 == (192 & s) &&
                      128 == (192 & o) &&
                      128 == (192 & a) &&
                      (h =
                        ((15 & l) << 18) |
                        ((63 & s) << 12) |
                        ((63 & o) << 6) |
                        (63 & a)) > 65535 &&
                      h < 1114112 &&
                      (u = h);
              }
            null === u
              ? ((u = 65533), (c = 1))
              : u > 65535 &&
                ((u -= 65536),
                i.push(((u >>> 10) & 1023) | 55296),
                (u = 56320 | (1023 & u))),
              i.push(u),
              (r += c);
          }
          return (function (t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            var n = "",
              i = 0;
            for (; i < e; )
              n += String.fromCharCode.apply(String, t.slice(i, (i += 4096)));
            return n;
          })(i);
        }
        (e.Buffer = h),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return h.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (h.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = o()),
          (h.poolSize = 8192),
          (h._augment = function (t) {
            return (t.__proto__ = h.prototype), t;
          }),
          (h.from = function (t, e, n) {
            return l(null, t, e, n);
          }),
          h.TYPED_ARRAY_SUPPORT &&
            ((h.prototype.__proto__ = Uint8Array.prototype),
            (h.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              h[Symbol.species] === h &&
              Object.defineProperty(h, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (h.alloc = function (t, e, n) {
            return (function (t, e, n, i) {
              return (
                u(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== n
                    ? "string" == typeof i
                      ? a(t, e).fill(n, i)
                      : a(t, e).fill(n)
                    : a(t, e)
              );
            })(null, t, e, n);
          }),
          (h.allocUnsafe = function (t) {
            return c(null, t);
          }),
          (h.allocUnsafeSlow = function (t) {
            return c(null, t);
          }),
          (h.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (h.compare = function (t, e) {
            if (!h.isBuffer(t) || !h.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var n = t.length, i = e.length, r = 0, s = Math.min(n, i);
              r < s;
              ++r
            )
              if (t[r] !== e[r]) {
                (n = t[r]), (i = e[r]);
                break;
              }
            return n < i ? -1 : i < n ? 1 : 0;
          }),
          (h.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (h.concat = function (t, e) {
            if (!s(t))
              throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return h.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var i = h.allocUnsafe(e),
              r = 0;
            for (n = 0; n < t.length; ++n) {
              var o = t[n];
              if (!h.isBuffer(o))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              o.copy(i, r), (r += o.length);
            }
            return i;
          }),
          (h.byteLength = p),
          (h.prototype._isBuffer = !0),
          (h.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
            return this;
          }),
          (h.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              m(this, e, e + 3), m(this, e + 1, e + 2);
            return this;
          }),
          (h.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              m(this, e, e + 7),
                m(this, e + 1, e + 6),
                m(this, e + 2, e + 5),
                m(this, e + 3, e + 4);
            return this;
          }),
          (h.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
                ? C(this, 0, t)
                : g.apply(this, arguments);
          }),
          (h.prototype.equals = function (t) {
            if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === h.compare(this, t);
          }),
          (h.prototype.inspect = function () {
            var t = "",
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (h.prototype.compare = function (t, e, n, i, r) {
            if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === i && (i = 0),
              void 0 === r && (r = this.length),
              e < 0 || n > t.length || i < 0 || r > this.length)
            )
              throw new RangeError("out of range index");
            if (i >= r && e >= n) return 0;
            if (i >= r) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (
              var s = (r >>>= 0) - (i >>>= 0),
                o = (n >>>= 0) - (e >>>= 0),
                a = Math.min(s, o),
                l = this.slice(i, r),
                u = t.slice(e, n),
                c = 0;
              c < a;
              ++c
            )
              if (l[c] !== u[c]) {
                (s = l[c]), (o = u[c]);
                break;
              }
            return s < o ? -1 : o < s ? 1 : 0;
          }),
          (h.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (h.prototype.indexOf = function (t, e, n) {
            return v(this, t, e, n, !0);
          }),
          (h.prototype.lastIndexOf = function (t, e, n) {
            return v(this, t, e, n, !1);
          }),
          (h.prototype.write = function (t, e, n, i) {
            if (void 0 === e) (i = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" == typeof e)
              (i = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === i && (i = "utf8"))
                  : ((i = n), (n = void 0));
            }
            var r = this.length - e;
            if (
              ((void 0 === n || n > r) && (n = r),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            i || (i = "utf8");
            for (var s = !1; ; )
              switch (i) {
                case "hex":
                  return b(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return w(this, t, e, n);
                case "ascii":
                  return x(this, t, e, n);
                case "latin1":
                case "binary":
                  return _(this, t, e, n);
                case "base64":
                  return E(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return k(this, t, e, n);
                default:
                  if (s) throw new TypeError("Unknown encoding: " + i);
                  (i = ("" + i).toLowerCase()), (s = !0);
              }
          }),
          (h.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function T(t, e, n) {
          var i = "";
          n = Math.min(t.length, n);
          for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
          return i;
        }
        function A(t, e, n) {
          var i = "";
          n = Math.min(t.length, n);
          for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
          return i;
        }
        function N(t, e, n) {
          var i = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
          for (var r = "", s = e; s < n; ++s) r += M(t[s]);
          return r;
        }
        function O(t, e, n) {
          for (var i = t.slice(e, n), r = "", s = 0; s < i.length; s += 2)
            r += String.fromCharCode(i[s] + 256 * i[s + 1]);
          return r;
        }
        function I(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function R(t, e, n, i, r, s) {
          if (!h.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > r || e < s)
            throw new RangeError('"value" argument is out of bounds');
          if (n + i > t.length) throw new RangeError("Index out of range");
        }
        function D(t, e, n, i) {
          e < 0 && (e = 65535 + e + 1);
          for (var r = 0, s = Math.min(t.length - n, 2); r < s; ++r)
            t[n + r] =
              (e & (255 << (8 * (i ? r : 1 - r)))) >>> (8 * (i ? r : 1 - r));
        }
        function L(t, e, n, i) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var r = 0, s = Math.min(t.length - n, 4); r < s; ++r)
            t[n + r] = (e >>> (8 * (i ? r : 3 - r))) & 255;
        }
        function j(t, e, n, i, r, s) {
          if (n + i > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function z(t, e, n, i, s) {
          return s || j(t, 0, n, 4), r.write(t, e, n, i, 23, 4), n + 4;
        }
        function P(t, e, n, i, s) {
          return s || j(t, 0, n, 8), r.write(t, e, n, i, 52, 8), n + 8;
        }
        (h.prototype.slice = function (t, e) {
          var n,
            i = this.length;
          if (
            ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
            (e = void 0 === e ? i : ~~e) < 0
              ? (e += i) < 0 && (e = 0)
              : e > i && (e = i),
            e < t && (e = t),
            h.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = h.prototype;
          else {
            var r = e - t;
            n = new h(r, void 0);
            for (var s = 0; s < r; ++s) n[s] = this[s + t];
          }
          return n;
        }),
          (h.prototype.readUIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || I(t, e, this.length);
            for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
              i += this[t + s] * r;
            return i;
          }),
          (h.prototype.readUIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || I(t, e, this.length);
            for (var i = this[t + --e], r = 1; e > 0 && (r *= 256); )
              i += this[t + --e] * r;
            return i;
          }),
          (h.prototype.readUInt8 = function (t, e) {
            return e || I(t, 1, this.length), this[t];
          }),
          (h.prototype.readUInt16LE = function (t, e) {
            return e || I(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (h.prototype.readUInt16BE = function (t, e) {
            return e || I(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (h.prototype.readUInt32LE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (h.prototype.readUInt32BE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (h.prototype.readIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || I(t, e, this.length);
            for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256); )
              i += this[t + s] * r;
            return i >= (r *= 128) && (i -= Math.pow(2, 8 * e)), i;
          }),
          (h.prototype.readIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || I(t, e, this.length);
            for (var i = e, r = 1, s = this[t + --i]; i > 0 && (r *= 256); )
              s += this[t + --i] * r;
            return s >= (r *= 128) && (s -= Math.pow(2, 8 * e)), s;
          }),
          (h.prototype.readInt8 = function (t, e) {
            return (
              e || I(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (h.prototype.readInt16LE = function (t, e) {
            e || I(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (h.prototype.readInt16BE = function (t, e) {
            e || I(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (h.prototype.readInt32LE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (h.prototype.readInt32BE = function (t, e) {
            return (
              e || I(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (h.prototype.readFloatLE = function (t, e) {
            return e || I(t, 4, this.length), r.read(this, t, !0, 23, 4);
          }),
          (h.prototype.readFloatBE = function (t, e) {
            return e || I(t, 4, this.length), r.read(this, t, !1, 23, 4);
          }),
          (h.prototype.readDoubleLE = function (t, e) {
            return e || I(t, 8, this.length), r.read(this, t, !0, 52, 8);
          }),
          (h.prototype.readDoubleBE = function (t, e) {
            return e || I(t, 8, this.length), r.read(this, t, !1, 52, 8);
          }),
          (h.prototype.writeUIntLE = function (t, e, n, i) {
            ((t = +t), (e |= 0), (n |= 0), i) ||
              R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = 1,
              s = 0;
            for (this[e] = 255 & t; ++s < n && (r *= 256); )
              this[e + s] = (t / r) & 255;
            return e + n;
          }),
          (h.prototype.writeUIntBE = function (t, e, n, i) {
            ((t = +t), (e |= 0), (n |= 0), i) ||
              R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var r = n - 1,
              s = 1;
            for (this[e + r] = 255 & t; --r >= 0 && (s *= 256); )
              this[e + r] = (t / s) & 255;
            return e + n;
          }),
          (h.prototype.writeUInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 255, 0),
              h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (h.prototype.writeUInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : D(this, t, e, !0),
              e + 2
            );
          }),
          (h.prototype.writeUInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 65535, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : D(this, t, e, !1),
              e + 2
            );
          }),
          (h.prototype.writeUInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (h.prototype.writeUInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 4294967295, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (h.prototype.writeIntLE = function (t, e, n, i) {
            if (((t = +t), (e |= 0), !i)) {
              var r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            var s = 0,
              o = 1,
              a = 0;
            for (this[e] = 255 & t; ++s < n && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1),
                (this[e + s] = (((t / o) >> 0) - a) & 255);
            return e + n;
          }),
          (h.prototype.writeIntBE = function (t, e, n, i) {
            if (((t = +t), (e |= 0), !i)) {
              var r = Math.pow(2, 8 * n - 1);
              R(this, t, e, n, r - 1, -r);
            }
            var s = n - 1,
              o = 1,
              a = 0;
            for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1),
                (this[e + s] = (((t / o) >> 0) - a) & 255);
            return e + n;
          }),
          (h.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 1, 127, -128),
              h.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (h.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : D(this, t, e, !0),
              e + 2
            );
          }),
          (h.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 2, 32767, -32768),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : D(this, t, e, !1),
              e + 2
            );
          }),
          (h.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : L(this, t, e, !0),
              e + 4
            );
          }),
          (h.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || R(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : L(this, t, e, !1),
              e + 4
            );
          }),
          (h.prototype.writeFloatLE = function (t, e, n) {
            return z(this, t, e, !0, n);
          }),
          (h.prototype.writeFloatBE = function (t, e, n) {
            return z(this, t, e, !1, n);
          }),
          (h.prototype.writeDoubleLE = function (t, e, n) {
            return P(this, t, e, !0, n);
          }),
          (h.prototype.writeDoubleBE = function (t, e, n) {
            return P(this, t, e, !1, n);
          }),
          (h.prototype.copy = function (t, e, n, i) {
            if (
              (n || (n = 0),
              i || 0 === i || (i = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              i > 0 && i < n && (i = n),
              i === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length),
              t.length - e < i - n && (i = t.length - e + n);
            var r,
              s = i - n;
            if (this === t && n < e && e < i)
              for (r = s - 1; r >= 0; --r) t[r + e] = this[r + n];
            else if (s < 1e3 || !h.TYPED_ARRAY_SUPPORT)
              for (r = 0; r < s; ++r) t[r + e] = this[r + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
            return s;
          }),
          (h.prototype.fill = function (t, e, n, i) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((i = e), (e = 0), (n = this.length))
                  : "string" == typeof n && ((i = n), (n = this.length)),
                1 === t.length)
              ) {
                var r = t.charCodeAt(0);
                r < 256 && (t = r);
              }
              if (void 0 !== i && "string" != typeof i)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof i && !h.isEncoding(i))
                throw new TypeError("Unknown encoding: " + i);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            var s;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (s = e; s < n; ++s) this[s] = t;
            else {
              var o = h.isBuffer(t) ? t : F(new h(t, i).toString()),
                a = o.length;
              for (s = 0; s < n - e; ++s) this[s + e] = o[s % a];
            }
            return this;
          });
        var B = /[^+\/0-9A-Za-z-_]/g;
        function M(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function F(t, e) {
          var n;
          e = e || 1 / 0;
          for (var i = t.length, r = null, s = [], o = 0; o < i; ++o) {
            if ((n = t.charCodeAt(o)) > 55295 && n < 57344) {
              if (!r) {
                if (n > 56319) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                if (o + 1 === i) {
                  (e -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                r = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && s.push(239, 191, 189), (r = n);
                continue;
              }
              n = 65536 + (((r - 55296) << 10) | (n - 56320));
            } else r && (e -= 3) > -1 && s.push(239, 191, 189);
            if (((r = null), n < 128)) {
              if ((e -= 1) < 0) break;
              s.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              s.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              s.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              s.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128,
              );
            }
          }
          return s;
        }
        function U(t) {
          return i.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(B, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t),
          );
        }
        function q(t, e, n, i) {
          for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r)
            e[r + n] = t[r];
          return r;
        }
      }).call(this, n(9));
    },
    function (t, e, n) {
      "use strict";
      (e.byteLength = function (t) {
        var e = l(t),
          n = e[0],
          i = e[1];
        return (3 * (n + i)) / 4 - i;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            i = l(t),
            o = i[0],
            a = i[1],
            h = new s(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, o, a),
            ),
            u = 0,
            c = a > 0 ? o - 4 : o;
          for (n = 0; n < c; n += 4)
            (e =
              (r[t.charCodeAt(n)] << 18) |
              (r[t.charCodeAt(n + 1)] << 12) |
              (r[t.charCodeAt(n + 2)] << 6) |
              r[t.charCodeAt(n + 3)]),
              (h[u++] = (e >> 16) & 255),
              (h[u++] = (e >> 8) & 255),
              (h[u++] = 255 & e);
          2 === a &&
            ((e = (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)),
            (h[u++] = 255 & e));
          1 === a &&
            ((e =
              (r[t.charCodeAt(n)] << 10) |
              (r[t.charCodeAt(n + 1)] << 4) |
              (r[t.charCodeAt(n + 2)] >> 2)),
            (h[u++] = (e >> 8) & 255),
            (h[u++] = 255 & e));
          return h;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, r = n % 3, s = [], o = 0, a = n - r;
            o < a;
            o += 16383
          )
            s.push(u(t, o, o + 16383 > a ? a : o + 16383));
          1 === r
            ? ((e = t[n - 1]), s.push(i[e >> 2] + i[(e << 4) & 63] + "=="))
            : 2 === r &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              s.push(i[e >> 10] + i[(e >> 4) & 63] + i[(e << 2) & 63] + "="));
          return s.join("");
        });
      for (
        var i = [],
          r = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          h = o.length;
        a < h;
        ++a
      )
        (i[a] = o[a]), (r[o.charCodeAt(a)] = a);
      function l(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function u(t, e, n) {
        for (var r, s, o = [], a = e; a < n; a += 3)
          (r =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            o.push(
              i[((s = r) >> 18) & 63] +
                i[(s >> 12) & 63] +
                i[(s >> 6) & 63] +
                i[63 & s],
            );
        return o.join("");
      }
      (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      (e.read = function (t, e, n, i, r) {
        var s,
          o,
          a = 8 * r - i - 1,
          h = (1 << a) - 1,
          l = h >> 1,
          u = -7,
          c = n ? r - 1 : 0,
          d = n ? -1 : 1,
          f = t[e + c];
        for (
          c += d, s = f & ((1 << -u) - 1), f >>= -u, u += a;
          u > 0;
          s = 256 * s + t[e + c], c += d, u -= 8
        );
        for (
          o = s & ((1 << -u) - 1), s >>= -u, u += i;
          u > 0;
          o = 256 * o + t[e + c], c += d, u -= 8
        );
        if (0 === s) s = 1 - l;
        else {
          if (s === h) return o ? NaN : (1 / 0) * (f ? -1 : 1);
          (o += Math.pow(2, i)), (s -= l);
        }
        return (f ? -1 : 1) * o * Math.pow(2, s - i);
      }),
        (e.write = function (t, e, n, i, r, s) {
          var o,
            a,
            h,
            l = 8 * s - r - 1,
            u = (1 << l) - 1,
            c = u >> 1,
            d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            f = i ? 0 : s - 1,
            p = i ? 1 : -1,
            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(e) / Math.LN2)),
                  e * (h = Math.pow(2, -o)) < 1 && (o--, (h *= 2)),
                  (e += o + c >= 1 ? d / h : d * Math.pow(2, 1 - c)) * h >= 2 &&
                    (o++, (h /= 2)),
                  o + c >= u
                    ? ((a = 0), (o = u))
                    : o + c >= 1
                      ? ((a = (e * h - 1) * Math.pow(2, r)), (o += c))
                      : ((a = e * Math.pow(2, c - 1) * Math.pow(2, r)), (o = 0)));
            r >= 8;
            t[n + f] = 255 & a, f += p, a /= 256, r -= 8
          );
          for (
            o = (o << r) | a, l += r;
            l > 0;
            t[n + f] = 255 & o, f += p, o /= 256, l -= 8
          );
          t[n + f - p] |= 128 * g;
        });
    },
    function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    function (t, e, n) {
      (function (t) {
        var i =
            (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
          r = Function.prototype.apply;
        function s(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new s(r.call(setTimeout, i, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new s(r.call(setInterval, i, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval =
            function (t) {
              t && t.close();
            }),
          (s.prototype.unref = s.prototype.ref = function () {}),
          (s.prototype.close = function () {
            this._clearFn.call(i, this._id);
          }),
          (e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active =
            function (t) {
              clearTimeout(t._idleTimeoutId);
              var e = t._idleTimeout;
              e >= 0 &&
                (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout();
                }, e));
            }),
          n(68),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }).call(this, n(9));
    },
    function (t, e, n) {
      (function (t, e) {
        !(function (t, n) {
          "use strict";
          if (!t.setImmediate) {
            var i,
              r,
              s,
              o,
              a,
              h = 1,
              l = {},
              u = !1,
              c = t.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (d = d && d.setTimeout ? d : t),
              "[object process]" === {}.toString.call(t.process)
                ? (i = function (t) {
                    e.nextTick(function () {
                      p(t);
                    });
                  })
                : !(function () {
                      if (t.postMessage && !t.importScripts) {
                        var e = !0,
                          n = t.onmessage;
                        return (
                          (t.onmessage = function () {
                            e = !1;
                          }),
                          t.postMessage("", "*"),
                          (t.onmessage = n),
                          e
                        );
                      }
                    })()
                  ? t.MessageChannel
                    ? (((s = new MessageChannel()).port1.onmessage = function (
                        t,
                      ) {
                        p(t.data);
                      }),
                      (i = function (t) {
                        s.port2.postMessage(t);
                      }))
                    : c && "onreadystatechange" in c.createElement("script")
                      ? ((r = c.documentElement),
                        (i = function (t) {
                          var e = c.createElement("script");
                          (e.onreadystatechange = function () {
                            p(t),
                              (e.onreadystatechange = null),
                              r.removeChild(e),
                              (e = null);
                          }),
                            r.appendChild(e);
                        }))
                      : (i = function (t) {
                          setTimeout(p, 0, t);
                        })
                  : ((o = "setImmediate$" + Math.random() + "$"),
                    (a = function (e) {
                      e.source === t &&
                        "string" == typeof e.data &&
                        0 === e.data.indexOf(o) &&
                        p(+e.data.slice(o.length));
                    }),
                    t.addEventListener
                      ? t.addEventListener("message", a, !1)
                      : t.attachEvent("onmessage", a),
                    (i = function (e) {
                      t.postMessage(o + e, "*");
                    })),
              (d.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;
                  n++
                )
                  e[n] = arguments[n + 1];
                var r = { callback: t, args: e };
                return (l[h] = r), i(h), h++;
              }),
              (d.clearImmediate = f);
          }
          function f(t) {
            delete l[t];
          }
          function p(t) {
            if (u) setTimeout(p, 0, t);
            else {
              var e = l[t];
              if (e) {
                u = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      n = t.args;
                    switch (n.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(n[0]);
                        break;
                      case 2:
                        e(n[0], n[1]);
                        break;
                      case 3:
                        e(n[0], n[1], n[2]);
                        break;
                      default:
                        e.apply(void 0, n);
                    }
                  })(e);
                } finally {
                  f(t), (u = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }).call(this, n(9), n(69));
    },
    function (t, e) {
      var n,
        i,
        r = (t.exports = {});
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === s || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          n = s;
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          i = o;
        }
      })();
      var h,
        l = [],
        u = !1,
        c = -1;
      function d() {
        u &&
          h &&
          ((u = !1), h.length ? (l = h.concat(l)) : (c = -1), l.length && f());
      }
      function f() {
        if (!u) {
          var t = a(d);
          u = !0;
          for (var e = l.length; e; ) {
            for (h = l, l = []; ++c < e; ) h && h[c].run();
            (c = -1), (e = l.length);
          }
          (h = null),
            (u = !1),
            (function (t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === o || !i) && clearTimeout)
                return (i = clearTimeout), clearTimeout(t);
              try {
                i(t);
              } catch (e) {
                try {
                  return i.call(null, t);
                } catch (e) {
                  return i.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new p(t, e)), 1 !== l.length || u || a(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = g),
        (r.addListener = g),
        (r.once = g),
        (r.off = g),
        (r.removeListener = g),
        (r.removeAllListeners = g),
        (r.emit = g),
        (r.prependListener = g),
        (r.prependOnceListener = g),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(29),
        r = n.n(i),
        s = (n(15), n(2), n(11), n(10), n(17), n(32).a);
      !(function (t, e) {
        const n = function () {
          (this.eventsMap = {
            "click #open-new-book": "openNewBook",
            "change #open-epub": "openChangeBook",
            "click .prev-btn": "changePrev",
            "click .next-btn": "changeNext",
            "click .iconmulu": "handleToggle",
            "click .slide-contents-item-label": "handleClickToc",
            "click .iconcc-close-square": "closeBook",
            "click .iconshezhi": "handleSetting",
            "click .size-btn": "handleChangeSize",
            "click .bg-btn": "handleChangeBg",
          }),
            (this.selectors = {
              epubContents: ".epub-contents",
              readerWrapper: ".reader-wrapper",
              openEpubButton: "#open-epub",
              readerContainer: ".epub-reader-container",
              readerWrapperContainer: ".reader-wrapper-container",
              settingWrapper: ".setting-wrapper",
              epubContainer: ".epub-container",
            }),
            (this.section = 0),
            (this.defaultFontSize = 20),
            (this.defaultTheme = 0),
            (this.currentHref = null),
            (this.themeList = [
              {
                name: "white",
                style: { body: { color: "#000", background: "#fff" } },
              },
              {
                name: "sepia",
                style: { body: { color: "#704214", background: "#f4eacd" } },
              },
              {
                name: "night",
                style: { body: { color: "#bdcadb", background: "#1b1f2a" } },
              },
            ]),
            this.init(),
            this.keyboard();
        };
        (n.prototype = {
          constructor: n,
          init: function () {
            this.bindEvent(this.eventsMap), this.initializeElements();
          },
          initializeElements: function () {
            var e = this.selectors;
            for (var n in e) e.hasOwnProperty(n) && (this[n] = t(e[n]));
          },
          bindEvent: function (t) {
            this.initializeOrdinaryEvents(t);
          },
          unbindEvent: function (t) {
            this.uninitializeOrdinaryEvents(t);
          },
          initializeOrdinaryEvents: function (t) {
            this._scanEventsMap(t, !0);
          },
          uninitializeOrdinaryEvents: function (t) {
            this._scanEventsMap(t);
          },
          _delegate: function (n, i, r) {
            t(e).on(n, i, r);
          },
          _undelegate: function (n, i, r) {
            t(e).off(n, i, r);
          },
          _scanEventsMap: function (t, e) {
            var n = /^(\S+)\s*(.*)$/,
              i = e ? this._delegate : this._undelegate;
            for (var r in t)
              if (t.hasOwnProperty(r)) {
                var s = r.match(n);
                i(s[1], s[2], this[t[r]].bind(this));
              }
          },
          onProgressChange(t) {
            const e = t / 100,
              n = e > 0 ? this.locations.cfiFromPercentage(e) : 0;
            this.rendition.display(n);
          },
          openNewBook: function () {
            this.openEpubButton.click();
          },
          openChangeBook: function (t) {
            const e = this;
            let n = t.target.files[0];
            if (n) {
              this.readerContainer.show();
              let t = new FileReader();
              (t.onload = function () {
                let t = this.result;
                (e.book = new s(t, {})),
                  (e.rendition = e.book.renderTo("viewer", {
                    flow: "scrolled-doc",
                    width: "100%",
                    height: "100%",
                  })),
                  e.rendition.display().then((t) => {
                    (e.currentHref = t.href),
                      (e.themes = e.rendition.themes),
                      e.setFontSize(e.defaultFontSize + "px"),
                      e.registerTheme(),
                      e.setTheme(e.defaultTheme);
                  }),
                  e.book.ready
                    .then(
                      () => (
                        (e.navigation = e.book.navigation),
                        e.readerWrapperContainer.addClass("stop"),
                        e.book.locations.generate()
                      ),
                    )
                    .then((t) => {
                      e.locations = e.book.locations;
                    }),
                  e.book.loaded.navigation.then((t) => {
                    const n = e.flatten(t.toc);
                    n.forEach((t) => {
                      t.level = (function t(e, i = 0) {
                        return void 0 === e.parent
                          ? i
                          : t(n.filter((t) => t.id === e.parent)[0], ++i);
                      })(t);
                    }),
                      e.renderToc(n);
                  });
              }),
                t.readAsArrayBuffer(n);
            }
          },
          setTheme: function (t) {
            this.themes.select(this.themeList[t].name), (this.defaultTheme = t);
          },
          registerTheme: function () {
            this.themeList.forEach((t) => {
              this.themes.register(t.name, t.style);
            });
          },
          closeBook: function () {
            this.readerContainer.hide(),
              (this.book = null),
              this.readerWrapperContainer.removeClass("stop"),
              this.readerWrapperContainer.html("");
          },
          changePrev: function () {
            this.rendition &&
              this.section > 0 &&
              ((this.section = this.section - 1), this.displaySection());
          },
          changeNext: function () {
            this.rendition &&
              this.section < this.book.spine.length - 1 &&
              ((this.section = this.section + 1), this.displaySection());
          },
          displaySection: function () {
            const t = this.book.section(this.section);
            t && t.href && this.display(t.href, this.refresh(t.href));
          },
          keyboard: function () {
            t(document).on("keyup", (t) => {
              37 === t.keyCode
                ? this.changePrev()
                : 39 === t.keyCode && this.changeNext();
            });
          },
          setFontSize: function (t) {
            this.themes && this.themes.fontSize(t);
          },
          handleToggle: function () {
            this.epubContents.hasClass("close")
              ? (this.epubContents.removeClass("close"),
                this.readerWrapper.removeClass("close"))
              : (this.epubContents.addClass("close"),
                this.readerWrapper.addClass("close")),
              this.rendition &&
                this.rendition.on("resize", function (t, e) {
                  console.log("Resized to:", t, e);
                });
          },
          handleSetting: function (t) {
            this.settingWrapper.hasClass("show")
              ? this.settingWrapper.removeClass("show")
              : this.settingWrapper.addClass("show");
          },
          handleChangeSize: function (e) {
            const n = t(e.target).data("tag");
            if ("big" === n) {
              if (((this.defaultFontSize += 2), this.defaultFontSize > 30))
                return;
            } else if (
              "small" === n &&
              ((this.defaultFontSize -= 2), this.defaultFontSize < 14)
            )
              return;
            this.setFontSize(this.defaultFontSize + "px");
          },
          handleChangeBg: function (e) {
            const n = parseInt(t(e.target).data("type"), 10);
            this.setTheme(n),
              this.epubContainer
                .removeClass()
                .addClass("epub-container theme-type-" + n);
          },
          handleClickToc: function (e) {
            let n = t(e.target).attr("href");
            this.display(n, this.refresh(n));
          },
          renderToc: function (t) {
            let e = "";
            t.forEach((t, n) => {
              e += `\n                    <div class="slide-contents-item">\n                        <span class="slide-contents-item-label ${0 === n && "selected"}" style="margin-left: ${25 * t.level}px" title="${t.label}" href="${t.href}">${t.label}</span>\n                        <span class="slide-contents-item-page"></span>\n                    </div>\n                `;
            }),
              this.epubContents.html(e);
          },
          flatten: function (t) {
            return [].concat(
              ...t.map((t) => [].concat(t, ...this.flatten(t.subitems))),
            );
          },
          display: function (t, e) {
            t
              ? this.book.rendition.display(t).then(() => {
                  e && e();
                })
              : this.book.rendition.display().then(() => {
                  e && e();
                });
          },
          refresh: function (e) {
            const n = this.book.rendition.currentLocation();
            if (n && n.start) {
              const i = n.start.cfi;
              this.book.locations.percentageFromCfi(i);
              this.currentHref = e;
              let r = t(".slide-contents-item");
              t.each(r, (e, n) => {
                t(n).find(".slide-contents-item-label").removeClass("selected"),
                  this.currentHref ===
                    t(n).find(".slide-contents-item-label").attr("href") &&
                    t(n).find(".slide-contents-item-label").addClass("selected");
              });
            }
          },
        }),
          t(function () {
            new n();
          });
      })(r.a, document);
    },
  ]);
  