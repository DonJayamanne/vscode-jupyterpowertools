! function(e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r), n.l = !0,
            function(e) {
                if (e.exports && !e.exports.__esModule && void 0 === e.exports.default) {
                    if (e.exports.headers && e.exports.headers.common && e.exports.headers.common.Accept && e.exports.adapter && e.exports.transformRequest && e.exports.transformResponse) return;
                    e.exports.default = e.exports
                }
            }(n), n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
}([, function(e, t, r) {
    r.p = new URL(scriptUrl.replace(/[^/]+$/, "")).toString();
    acquireNotebookRendererApi().onDidCreateOutput((function(e) {
        try {
            e.element.style.backgroundColor = "white"
        } catch (t) {
            console.error("Failed to render output " + JSON.stringify(e.value), t)
        }
    }))
}]);
//# sourceMappingURL=visualization.js.map