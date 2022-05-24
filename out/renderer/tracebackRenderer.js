! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0,
            function(e) {
                if (e.exports && !e.exports.__esModule && void 0 === e.exports.default) {
                    if (e.exports.headers && e.exports.headers.common && e.exports.headers.common.Accept && e.exports.adapter && e.exports.transformRequest && e.exports.transformResponse) return;
                    e.exports.default = e.exports
                }
            }(o), o.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 2)
}([function(e, n, t) {
    "use strict";
    const r = t(7);
    e.exports = e => "string" == typeof e ? e.replace(r(), "") : e
}, , function(e, n, t) {
    "use strict";
    t.r(n);
    t(3), t(0);
    t.p = new URL(scriptUrl.replace(/[^/]+$/, "")).toString();
    acquireNotebookRendererApi().onDidCreateOutput((function(e) {
        const n = e.value,
            t = (n.traceback, `<span class="code-foreground-colored" style="color: rgb(205, 49, 49);">${n.ename||""}</span>`);
        try {
            const r = `\n            <span class="traceback">\n            ${t}\n            <span class="">: ${n.evalue||""}</span>\n            </span>\n            `;
            e.element.innerHTML = r
        } catch (n) {
            console.error("Failed to render output " + JSON.stringify(e.value), n)
        }
    }))
}, function(e, n, t) {
    var r = t(4),
        o = t(5);
    "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
        [e.i, o, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    r(o, a);
    e.exports = o.locals || {}
}, function(e, n, t) {
    "use strict";
    var r, o = function() {
            return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
        },
        a = function() {
            var e = {};
            return function(n) {
                if (void 0 === e[n]) {
                    var t = document.querySelector(n);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    e[n] = t
                }
                return e[n]
            }
        }(),
        i = [];

    function c(e) {
        for (var n = -1, t = 0; t < i.length; t++)
            if (i[t].identifier === e) {
                n = t;
                break
            } return n
    }

    function s(e, n) {
        for (var t = {}, r = [], o = 0; o < e.length; o++) {
            var a = e[o],
                s = n.base ? a[0] + n.base : a[0],
                u = t[s] || 0,
                f = "".concat(s, " ").concat(u);
            t[s] = u + 1;
            var l = c(f),
                d = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                }; - 1 !== l ? (i[l].references++, i[l].updater(d)) : i.push({
                identifier: f,
                updater: h(d, n),
                references: 1
            }), r.push(f)
        }
        return r
    }

    function u(e) {
        var n = document.createElement("style"),
            r = e.attributes || {};
        if (void 0 === r.nonce) {
            var o = t.nc;
            o && (r.nonce = o)
        }
        if (Object.keys(r).forEach((function(e) {
                n.setAttribute(e, r[e])
            })), "function" == typeof e.insert) e.insert(n);
        else {
            var i = a(e.insert || "head");
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            i.appendChild(n)
        }
        return n
    }
    var f, l = (f = [], function(e, n) {
        return f[e] = n, f.filter(Boolean).join("\n")
    });

    function d(e, n, t, r) {
        var o = t ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (e.styleSheet) e.styleSheet.cssText = l(n, o);
        else {
            var a = document.createTextNode(o),
                i = e.childNodes;
            i[n] && e.removeChild(i[n]), i.length ? e.insertBefore(a, i[n]) : e.appendChild(a)
        }
    }

    function p(e, n, t) {
        var r = t.css,
            o = t.media,
            a = t.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r))
        }
    }
    var v = null,
        m = 0;

    function h(e, n) {
        var t, r, o;
        if (n.singleton) {
            var a = m++;
            t = v || (v = u(n)), r = d.bind(null, t, a, !1), o = d.bind(null, t, a, !0)
        } else t = u(n), r = p.bind(null, t, n), o = function() {
            ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(t)
        };
        return r(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    r(e = n)
                } else o()
            }
    }
    e.exports = function(e, n) {
        (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = o());
        var t = s(e = e || [], n);
        return function(e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var r = 0; r < t.length; r++) {
                    var o = c(t[r]);
                    i[o].references--
                }
                for (var a = s(e, n), u = 0; u < t.length; u++) {
                    var f = c(t[u]);
                    0 === i[f].references && (i[f].updater(), i.splice(f, 1))
                }
                t = a
            }
        }
    }
}, function(e, n, t) {
    (n = t(6)(!1)).push([e.i, "a.code-foreground-colored:focus,\na.code-foreground-colored:active,\na.code-foreground-colored:visited,\na.code-foreground-colored:hover {\n    border-style: none;\n    /* text-decoration: none; */\n    outline: none;\n}\n", ""]), e.exports = n
}, function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var t = function(e, n) {
                    var t = e[1] || "",
                        r = e[3];
                    if (!r) return t;
                    if (n && "function" == typeof btoa) {
                        var o = (i = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(s, " */")),
                            a = r.sources.map((function(e) {
                                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                            }));
                        return [t].concat(a).concat([o]).join("\n")
                    }
                    var i, c, s;
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
            })).join("")
        }, n.i = function(e, t, r) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            var o = {};
            if (r)
                for (var a = 0; a < this.length; a++) {
                    var i = this[a][0];
                    null != i && (o[i] = !0)
                }
            for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                r && o[s[0]] || (t && (s[2] ? s[2] = "".concat(t, " and ").concat(s[2]) : s[2] = t), n.push(s))
            }
        }, n
    }
}, function(e, n, t) {
    "use strict";
    e.exports = ({
        onlyFirst: e = !1
    } = {}) => {
        const n = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(n, e ? void 0 : "g")
    }
}]);
//# sourceMappingURL=tracebackRenderer.js.map