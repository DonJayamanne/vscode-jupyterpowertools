module.exports = function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 62)
}([function(t, e) {
    t.exports = require("path")
}, function(t, e) {
    t.exports = require("vscode")
}, function(t, e, n) {
    var r, o, i = n(55),
        s = n(142),
        c = n(144),
        a = n(146),
        u = n(56);

    function l(t, e) {
        Object.defineProperty(t, r, {
            get: function() {
                return e
            }
        })
    }
    "function" == typeof Symbol && "function" == typeof Symbol.for ? (r = Symbol.for("graceful-fs.queue"), o = Symbol.for("graceful-fs.previous")) : (r = "___graceful-fs.queue", o = "___graceful-fs.previous");
    var f = function() {};
    if (u.debuglog ? f = u.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (f = function() {
            var t = u.format.apply(u, arguments);
            t = "GFS4: " + t.split(/\n/).join("\nGFS4: "), console.error(t)
        }), !i[r]) {
        var d = global[r] || [];
        l(i, d), i.close = function(t) {
            function e(e, n) {
                return t.call(i, e, (function(t) {
                    t || y(), "function" == typeof n && n.apply(this, arguments)
                }))
            }
            return Object.defineProperty(e, o, {
                value: t
            }), e
        }(i.close), i.closeSync = function(t) {
            function e(e) {
                t.apply(i, arguments), y()
            }
            return Object.defineProperty(e, o, {
                value: t
            }), e
        }(i.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", (function() {
            f(i[r]), n(57).equal(i[r].length, 0)
        }))
    }

    function p(t) {
        s(t), t.gracefulify = p, t.createReadStream = function(e, n) {
            return new t.ReadStream(e, n)
        }, t.createWriteStream = function(e, n) {
            return new t.WriteStream(e, n)
        };
        var e = t.readFile;
        t.readFile = function(t, n, r) {
            "function" == typeof n && (r = n, n = null);
            return function t(n, r, o) {
                return e(n, r, (function(e) {
                    !e || "EMFILE" !== e.code && "ENFILE" !== e.code ? ("function" == typeof o && o.apply(this, arguments), y()) : h([t, [n, r, o]])
                }))
            }(t, n, r)
        };
        var n = t.writeFile;
        t.writeFile = function(t, e, r, o) {
            "function" == typeof r && (o = r, r = null);
            return function t(e, r, o, i) {
                return n(e, r, o, (function(n) {
                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? ("function" == typeof i && i.apply(this, arguments), y()) : h([t, [e, r, o, i]])
                }))
            }(t, e, r, o)
        };
        var r = t.appendFile;
        r && (t.appendFile = function(t, e, n, o) {
            "function" == typeof n && (o = n, n = null);
            return function t(e, n, o, i) {
                return r(e, n, o, (function(r) {
                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? ("function" == typeof i && i.apply(this, arguments), y()) : h([t, [e, n, o, i]])
                }))
            }(t, e, n, o)
        });
        var o = t.copyFile;
        o && (t.copyFile = function(t, e, n, r) {
            "function" == typeof n && (r = n, n = 0);
            return o(t, e, n, (function(i) {
                !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? ("function" == typeof r && r.apply(this, arguments), y()) : h([o, [t, e, n, r]])
            }))
        });
        var i = t.readdir;

        function a(e) {
            return i.apply(t, e)
        }
        if (t.readdir = function(t, e, n) {
                var r = [t];
                "function" != typeof e ? r.push(e) : n = e;
                return r.push((function(t, e) {
                    e && e.sort && e.sort();
                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? ("function" == typeof n && n.apply(this, arguments), y()) : h([a, [r]])
                })), a(r)
            }, "v0.8" === process.version.substr(0, 4)) {
            var u = c(t);
            b = u.ReadStream, g = u.WriteStream
        }
        var l = t.ReadStream;
        l && (b.prototype = Object.create(l.prototype), b.prototype.open = function() {
            var t = this;
            w(t.path, t.flags, t.mode, (function(e, n) {
                e ? (t.autoClose && t.destroy(), t.emit("error", e)) : (t.fd = n, t.emit("open", n), t.read())
            }))
        });
        var f = t.WriteStream;
        f && (g.prototype = Object.create(f.prototype), g.prototype.open = function() {
            var t = this;
            w(t.path, t.flags, t.mode, (function(e, n) {
                e ? (t.destroy(), t.emit("error", e)) : (t.fd = n, t.emit("open", n))
            }))
        }), Object.defineProperty(t, "ReadStream", {
            get: function() {
                return b
            },
            set: function(t) {
                b = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t, "WriteStream", {
            get: function() {
                return g
            },
            set: function(t) {
                g = t
            },
            enumerable: !0,
            configurable: !0
        });
        var d = b;
        Object.defineProperty(t, "FileReadStream", {
            get: function() {
                return d
            },
            set: function(t) {
                d = t
            },
            enumerable: !0,
            configurable: !0
        });
        var m = g;

        function b(t, e) {
            return this instanceof b ? (l.apply(this, arguments), this) : b.apply(Object.create(b.prototype), arguments)
        }

        function g(t, e) {
            return this instanceof g ? (f.apply(this, arguments), this) : g.apply(Object.create(g.prototype), arguments)
        }
        Object.defineProperty(t, "FileWriteStream", {
            get: function() {
                return m
            },
            set: function(t) {
                m = t
            },
            enumerable: !0,
            configurable: !0
        });
        var v = t.open;

        function w(t, e, n, r) {
            return "function" == typeof n && (r = n, n = null),
                function t(e, n, r, o) {
                    return v(e, n, r, (function(i, s) {
                        !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? ("function" == typeof o && o.apply(this, arguments), y()) : h([t, [e, n, r, o]])
                    }))
                }(t, e, n, r)
        }
        return t.open = w, t
    }

    function h(t) {
        f("ENQUEUE", t[0].name, t[1]), i[r].push(t)
    }

    function y() {
        var t = i[r].shift();
        t && (f("RETRY", t[0].name, t[1]), t[0].apply(null, t[1]))
    }
    global[r] || l(global, i[r]), t.exports = p(a(i)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !i.__patched && (t.exports = p(i), i.__patched = !0)
}, function(t, e, n) {
    "use strict";
    e.fromCallback = function(t) {
        return Object.defineProperty((function(...e) {
            if ("function" != typeof e[e.length - 1]) return new Promise((n, r) => {
                t.call(this, ...e, (t, e) => null != t ? r(t) : n(e))
            });
            t.apply(this, e)
        }), "name", {
            value: t.name
        })
    }, e.fromPromise = function(t) {
        return Object.defineProperty((function(...e) {
            const n = e[e.length - 1];
            if ("function" != typeof n) return t.apply(this, e);
            t.apply(this, e.slice(0, -1)).then(t => n(null, t), n)
        }), "name", {
            value: t.name
        })
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getHash = e.isJupyterCell = e.isJupyterNotebook = e.isUntitledFile = e.createPromiseFromToken = e.createDeferredFromPromise = e.createDeferredFrom = e.createDeferred = e.logError = e.debug = e.registerDisposable = e.disposeAllDisposables = e.registerDisposableRegistry = e.JupyterNotebookView = void 0;
    const r = n(136),
        o = [];

    function i(t) {
        for (; t.length;) {
            const e = t.shift();
            if (e) try {
                e.dispose()
            } catch {}
        }
    }

    function s(t) {
        o.push(t)
    }
    e.JupyterNotebookView = "jupyter-notebook", e.registerDisposableRegistry = function(t) {
        t.subscriptions.push({
            dispose: () => i(o)
        })
    }, e.disposeAllDisposables = i, e.registerDisposable = s, e.debug = function(t, ...e) {
        console.debug(t, ...e)
    }, e.logError = function(t, ...e) {
        console.error(t, ...e)
    };
    class c {
        constructor(t = null) {
            this.scope = t, this._resolved = !1, this._rejected = !1, this._promise = new Promise((t, e) => {
                this._resolve = t, this._reject = e
            })
        }
        resolve(t) {
            this._resolve.apply(this.scope ? this.scope : this, arguments), this._resolved = !0
        }
        reject(t) {
            this._reject.apply(this.scope ? this.scope : this, arguments), this._rejected = !0
        }
        get promise() {
            return this._promise
        }
        get resolved() {
            return this._resolved
        }
        get rejected() {
            return this._rejected
        }
        get completed() {
            return this._rejected || this._resolved
        }
    }

    function a(t = null) {
        return new c(t)
    }

    function u(t) {
        return t.viewType === e.JupyterNotebookView
    }
    e.createDeferred = a, e.createDeferredFrom = function(...t) {
        const e = a();
        return Promise.all(t).then(e.resolve.bind(e)).catch(e.reject.bind(e)), e
    }, e.createDeferredFromPromise = function(t) {
        const e = a();
        return t.then(e.resolve.bind(e)).catch(e.reject.bind(e)), e
    }, e.createPromiseFromToken = function(t, e) {
        return new Promise((n, r) => {
            const o = t.onCancellationRequested(() => "reject" === e.action ? r() : n(e.value));
            s(o)
        })
    }, e.isUntitledFile = function(t) {
        return "untitled" === (null == t ? void 0 : t.scheme)
    }, e.isJupyterNotebook = u, e.isJupyterCell = function(t) {
        return t.notebook && u(t.notebook)
    }, e.getHash = function(t) {
        return r.createHash("sha1").update(t).digest("hex")
    }
}, function(t, e, n) {
    var r = n(39),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    t.exports = i
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromPromise,
        {
            makeDir: o,
            makeDirSync: i
        } = n(148),
        s = r(o);
    t.exports = {
        mkdirs: s,
        mkdirsSync: i,
        mkdirp: s,
        mkdirpSync: i,
        ensureDir: s,
        ensureDirSync: i
    }
}, function(t, e, n) {
    var r = n(78),
        o = n(83);
    t.exports = function(t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromPromise,
        o = n(10);
    t.exports = {
        pathExists: r((function(t) {
            return o.access(t).then(() => !0).catch(() => !1)
        })),
        pathExistsSync: o.existsSync
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getOutputStreamType = e.translateCellErrorOutput = e.translateCellDisplayOutput = e.getNotebookCellMetadata = e.convertMarkdownToCodeCell = e.convertCodeToMarkdownCell = e.createJupyterCellFromVSCNotebookCell = void 0;
    const r = n(1),
        o = n(36),
        i = n(64),
        s = n(65);

    function c(t, e = !0) {
        let n;
        return n = t.kind === r.NotebookCellKind.Markdown ? function(t, e) {
            const n = t.metadata.custom,
                r = {
                    cell_type: "markdown",
                    source: e ? "" : i.splitMultilineString(t.document.getText()),
                    metadata: (null == n ? void 0 : n.metadata) || {}
                };
            (null == n ? void 0 : n.attachments) && (r.attachments = n.attachments);
            return r
        }(t, e) : "raw" === t.document.languageId || "plaintext" === t.document.languageId ? function(t, e) {
            const n = t.metadata.custom,
                r = {
                    cell_type: "raw",
                    source: e ? "" : i.splitMultilineString(t.document.getText()),
                    metadata: (null == n ? void 0 : n.metadata) || {}
                };
            (null == n ? void 0 : n.attachments) && (r.attachments = n.attachments);
            return r
        }(t, e) : function(t, e) {
            var n, r;
            const o = t.metadata.custom,
                s = t.document.getText();
            return {
                cell_type: "code",
                execution_count: null !== (r = null === (n = t.latestExecutionSummary) || void 0 === n ? void 0 : n.executionOrder) && void 0 !== r ? r : null,
                source: e ? "" : i.splitMultilineString(s),
                outputs: e ? [] : t.outputs.map(u),
                metadata: (null == o ? void 0 : o.metadata) || {}
            }
        }(t, e), n
    }

    function a(t) {
        const e = {};
        return ["metadata", "attachments"].forEach(n => {
            t[n] && (e[n] = s(t[n]))
        }), e
    }

    function u(t) {
        const e = t.metadata;
        let n;
        switch (null == e ? void 0 : e.outputType) {
            case "error":
                n = l(t);
                break;
            case "stream": {
                const e = t.outputs.filter(t => t.mime === o.CellOutputMimeTypes.stderr || t.mime === o.CellOutputMimeTypes.stdout).map(t => t.value).reduceRight((t, e) => Array.isArray(e) ? t.concat(...e) : t.concat(e), []);
                n = {
                    output_type: "stream",
                    name: f(t) || "stdout",
                    text: i.splitMultilineString(e.join(""))
                };
                break
            }
            case "display_data":
                n = {
                    output_type: "display_data",
                    data: t.outputs.reduceRight((t, e) => (t[e.mime] = e.value, t), {}),
                    metadata: (null == e ? void 0 : e.metadata) || {}
                };
                break;
            case "execute_result":
                n = {
                    output_type: "execute_result",
                    data: t.outputs.reduceRight((t, e) => (t[e.mime] = e.value, t), {}),
                    metadata: (null == e ? void 0 : e.metadata) || {},
                    execution_count: "number" == typeof(null == e ? void 0 : e.executionCount) ? null == e ? void 0 : e.executionCount : null
                };
                break;
            case "update_display_data":
                n = {
                    output_type: "update_display_data",
                    data: t.outputs.reduceRight((t, e) => (t[e.mime] = e.value, t), {}),
                    metadata: (null == e ? void 0 : e.metadata) || {}
                };
                break;
            default: {
                const r = {
                    output_type: (null == e ? void 0 : e.outputType) || "unknown"
                };
                (null == e ? void 0 : e.metadata) && (r.metadata = e.metadata), t.outputs.length > 0 && (r.data = t.outputs.reduceRight((t, e) => (t[e.mime] = e.value, t), {})), n = r;
                break
            }
        }
        return n
    }

    function l(t) {
        const e = t.outputs[0];
        return {
            output_type: "error",
            ename: e.value.ename,
            evalue: e.value.evalue,
            traceback: e.value.traceback
        }
    }

    function f(t) {
        if (t.outputs.length > 0) return t.outputs[0].mime === o.CellOutputMimeTypes.stderr ? "stderr" : "stdout"
    }
    e.createJupyterCellFromVSCNotebookCell = c, e.convertCodeToMarkdownCell = function(t) {
        const e = c(t, !1);
        return function(t) {
            const e = (new r.NotebookCellMetadata).with({
                custom: a(t)
            });
            return new r.NotebookCellData(r.NotebookCellKind.Markdown, i.concatMultilineString(t.source), "markdown", [], e)
        }({
            cell_type: "markdown",
            metadata: e.metadata,
            source: e.source
        })
    }, e.convertMarkdownToCodeCell = function(t) {
        const e = c(t, !1);
        return function(t, e) {
            const n = "number" == typeof t.execution_count && t.execution_count > 0,
                o = (new r.NotebookCellMetadata).with({
                    custom: a(t)
                }),
                s = i.concatMultilineString(t.source),
                c = n ? {
                    executionOrder: t.execution_count
                } : {};
            return new r.NotebookCellData(r.NotebookCellKind.Code, s, e, [], o, c)
        }({
            cell_type: "code",
            metadata: e.metadata,
            execution_count: null,
            outputs: [],
            source: e.source
        }, "python")
    }, e.getNotebookCellMetadata = a, e.translateCellDisplayOutput = u, e.translateCellErrorOutput = l, e.getOutputStreamType = f
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback,
        o = n(2),
        i = ["access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile"].filter(t => "function" == typeof o[t]);
    Object.assign(e, o), i.forEach(t => {
        e[t] = r(o[t])
    }), e.realpath.native = r(o.realpath.native), e.exists = function(t, e) {
        return "function" == typeof e ? o.exists(t, e) : new Promise(e => o.exists(t, e))
    }, e.read = function(t, e, n, r, i, s) {
        return "function" == typeof s ? o.read(t, e, n, r, i, s) : new Promise((s, c) => {
            o.read(t, e, n, r, i, (t, e, n) => {
                if (t) return c(t);
                s({
                    bytesRead: e,
                    buffer: n
                })
            })
        })
    }, e.write = function(t, e, ...n) {
        return "function" == typeof n[n.length - 1] ? o.write(t, e, ...n) : new Promise((r, i) => {
            o.write(t, e, ...n, (t, e, n) => {
                if (t) return i(t);
                r({
                    bytesWritten: e,
                    buffer: n
                })
            })
        })
    }, "function" == typeof o.writev && (e.writev = function(t, e, ...n) {
        return "function" == typeof n[n.length - 1] ? o.writev(t, e, ...n) : new Promise((r, i) => {
            o.writev(t, e, ...n, (t, e, n) => {
                if (t) return i(t);
                r({
                    bytesWritten: e,
                    buffers: n
                })
            })
        })
    })
}, function(t, e, n) {
    "use strict";
    const r = n(10),
        o = n(0),
        i = n(56);

    function s(t, e, n) {
        const o = n.dereference ? t => r.stat(t, {
            bigint: !0
        }) : t => r.lstat(t, {
            bigint: !0
        });
        return Promise.all([o(t), o(e).catch(t => {
            if ("ENOENT" === t.code) return null;
            throw t
        })]).then(([t, e]) => ({
            srcStat: t,
            destStat: e
        }))
    }

    function c(t, e) {
        return e.ino && e.dev && e.ino === t.ino && e.dev === t.dev
    }

    function a(t, e) {
        const n = o.resolve(t).split(o.sep).filter(t => t),
            r = o.resolve(e).split(o.sep).filter(t => t);
        return n.reduce((t, e, n) => t && r[n] === e, !0)
    }

    function u(t, e, n) {
        return `Cannot ${n} '${t}' to a subdirectory of itself, '${e}'.`
    }
    t.exports = {
        checkPaths: function(t, e, n, r, l) {
            i.callbackify(s)(t, e, r, (r, i) => {
                if (r) return l(r);
                const {
                    srcStat: s,
                    destStat: f
                } = i;
                if (f) {
                    if (c(s, f)) {
                        const r = o.basename(t),
                            i = o.basename(e);
                        return "move" === n && r !== i && r.toLowerCase() === i.toLowerCase() ? l(null, {
                            srcStat: s,
                            destStat: f,
                            isChangingCase: !0
                        }) : l(new Error("Source and destination must not be the same."))
                    }
                    if (s.isDirectory() && !f.isDirectory()) return l(new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`));
                    if (!s.isDirectory() && f.isDirectory()) return l(new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`))
                }
                return s.isDirectory() && a(t, e) ? l(new Error(u(t, e, n))) : l(null, {
                    srcStat: s,
                    destStat: f
                })
            })
        },
        checkPathsSync: function(t, e, n, i) {
            const {
                srcStat: s,
                destStat: l
            } = function(t, e, n) {
                let o;
                const i = n.dereference ? t => r.statSync(t, {
                        bigint: !0
                    }) : t => r.lstatSync(t, {
                        bigint: !0
                    }),
                    s = i(t);
                try {
                    o = i(e)
                } catch (t) {
                    if ("ENOENT" === t.code) return {
                        srcStat: s,
                        destStat: null
                    };
                    throw t
                }
                return {
                    srcStat: s,
                    destStat: o
                }
            }(t, e, i);
            if (l) {
                if (c(s, l)) {
                    const r = o.basename(t),
                        i = o.basename(e);
                    if ("move" === n && r !== i && r.toLowerCase() === i.toLowerCase()) return {
                        srcStat: s,
                        destStat: l,
                        isChangingCase: !0
                    };
                    throw new Error("Source and destination must not be the same.")
                }
                if (s.isDirectory() && !l.isDirectory()) throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
                if (!s.isDirectory() && l.isDirectory()) throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`)
            }
            if (s.isDirectory() && a(t, e)) throw new Error(u(t, e, n));
            return {
                srcStat: s,
                destStat: l
            }
        },
        checkParentPaths: function t(e, n, i, s, a) {
            const l = o.resolve(o.dirname(e)),
                f = o.resolve(o.dirname(i));
            if (f === l || f === o.parse(f).root) return a();
            r.stat(f, {
                bigint: !0
            }, (r, o) => r ? "ENOENT" === r.code ? a() : a(r) : c(n, o) ? a(new Error(u(e, i, s))) : t(e, n, f, s, a))
        },
        checkParentPathsSync: function t(e, n, i, s) {
            const a = o.resolve(o.dirname(e)),
                l = o.resolve(o.dirname(i));
            if (l === a || l === o.parse(l).root) return;
            let f;
            try {
                f = r.statSync(l, {
                    bigint: !0
                })
            } catch (t) {
                if ("ENOENT" === t.code) return;
                throw t
            }
            if (c(n, f)) throw new Error(u(e, i, s));
            return t(e, n, l, s)
        },
        isSrcSubdir: a,
        areIdentical: c
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    var r = n(68),
        o = n(69),
        i = n(70),
        s = n(71),
        c = n(72);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    a.prototype.clear = r, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = s, a.prototype.set = c, t.exports = a
}, function(t, e, n) {
    var r = n(37);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(22),
        o = n(79),
        i = n(80),
        s = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? o(t) : i(t)
    }
}, function(t, e, n) {
    var r = n(7)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(93);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(41),
        o = n(42);
    t.exports = function(t, e, n, i) {
        var s = !n;
        n || (n = {});
        for (var c = -1, a = e.length; ++c < a;) {
            var u = e[c],
                l = i ? i(n[u], t[u], u, n, t) : void 0;
            void 0 === l && (l = t[u]), s ? o(n, u, l) : r(n, u, l)
        }
        return n
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(3).fromCallback,
        i = n(152);
    t.exports = {
        remove: o((function(t, e) {
            if (r.rm) return r.rm(t, {
                recursive: !0,
                force: !0
            }, e);
            i(t, e)
        })),
        removeSync: function(t) {
            if (r.rmSync) return r.rmSync(t, {
                recursive: !0,
                force: !0
            });
            i.sync(t)
        }
    }
}, function(t, e, n) {
    var r = n(7)(n(5), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(5).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(43),
        o = n(107),
        i = n(47);
    t.exports = function(t) {
        return i(t) ? r(t) : o(t)
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(39),
            o = e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t,
            s = i && i.exports === o && r.process,
            c = function() {
                try {
                    var t = i && i.require && i.require("util").types;
                    return t || s && s.binding && s.binding("util")
                } catch (t) {}
            }();
        t.exports = c
    }).call(this, n(25)(t))
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(43),
        o = n(110),
        i = n(47);
    t.exports = function(t) {
        return i(t) ? r(t, !0) : o(t)
    }
}, function(t, e, n) {
    var r = n(115),
        o = n(48),
        i = Object.prototype.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        c = s ? function(t) {
            return null == t ? [] : (t = Object(t), r(s(t), (function(e) {
                return i.call(t, e)
            })))
        } : o;
    t.exports = c
}, function(t, e, n) {
    var r = n(119),
        o = n(21),
        i = n(120),
        s = n(121),
        c = n(122),
        a = n(16),
        u = n(40),
        l = u(r),
        f = u(o),
        d = u(i),
        p = u(s),
        h = u(c),
        y = a;
    (r && "[object DataView]" != y(new r(new ArrayBuffer(1))) || o && "[object Map]" != y(new o) || i && "[object Promise]" != y(i.resolve()) || s && "[object Set]" != y(new s) || c && "[object WeakMap]" != y(new c)) && (y = function(t) {
        var e = a(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? u(n) : "";
        if (r) switch (r) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case h:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = y
}, function(t, e, n) {
    var r = n(125);
    t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new r(e).set(new r(t)), e
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellMetadataManager = void 0;
    const r = n(1),
        o = n(9),
        i = n(4);
    class s {
        constructor() {
            this.disposables = [], r.commands.registerCommand("jupyter.manageCellMetadata", this.onManageCellMetadata, this.disposables)
        }
        static register() {
            i.registerDisposable(new s)
        }
        dispose() {
            i.disposeAllDisposables(this.disposables)
        }
        onManageCellMetadata(t) {
            console.log(t)
        }
        static async updateCellMetadata(t, e) {
            const n = {
                metadata: {
                    ...e.metadata
                }
            };
            "attachments" in e && (n.attachments = e.attachments);
            const o = new r.WorkspaceEdit,
                i = t.metadata.with({
                    custom: n
                });
            o.replaceNotebookCellMetadata(t.notebook.uri, t.index, i), await r.workspace.applyEdit(o)
        }
        static async updateCellTagsMetadata(t, e) {
            const n = o.createJupyterCellFromVSCNotebookCell(t);
            n.metadata.tags = e, await this.updateCellMetadata(t, n)
        }
        static async updateCellSlideMetadata(t, e) {
            const n = o.createJupyterCellFromVSCNotebookCell(t);
            n.metadata.slideshow = {
                slide_type: e
            }, await this.updateCellMetadata(t, n)
        }
    }
    e.CellMetadataManager = s
}, function(t, e) {
    t.exports = {
        stringify: function(t, {
            EOL: e = "\n",
            finalEOL: n = !0,
            replacer: r = null,
            spaces: o
        } = {}) {
            const i = n ? e : "";
            return JSON.stringify(t, r, o).replace(/\n/g, e) + i
        },
        stripBom: function(t) {
            return Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, "")
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback,
        o = n(2),
        i = n(0),
        s = n(6),
        c = n(8).pathExists;
    t.exports = {
        outputFile: r((function(t, e, n, r) {
            "function" == typeof n && (r = n, n = "utf8");
            const a = i.dirname(t);
            c(a, (i, c) => i ? r(i) : c ? o.writeFile(t, e, n, r) : void s.mkdirs(a, i => {
                if (i) return r(i);
                o.writeFile(t, e, n, r)
            }))
        })),
        outputFileSync: function(t, ...e) {
            const n = i.dirname(t);
            if (o.existsSync(n)) return o.writeFileSync(t, ...e);
            s.mkdirsSync(n), o.writeFileSync(t, ...e)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CellOutputMimeTypes = void 0,
        function(t) {
            t.error = "application/x.notebook.error-traceback", t.stderr = "application/x.notebook.stderr", t.stdout = "application/x.notebook.stdout"
        }(e.CellOutputMimeTypes || (e.CellOutputMimeTypes = {}))
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(16),
        o = n(12);
    t.exports = function(t) {
        if (!o(t)) return !1;
        var e = r(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
}, function(t, e) {
    var n = "object" == typeof global && global && global.Object === Object && global;
    t.exports = n
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(42),
        o = n(37),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var s = t[e];
        i.call(t, e) && o(s, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(98);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(100),
        o = n(101),
        i = n(24),
        s = n(44),
        c = n(104),
        a = n(105),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = i(t),
            l = !n && o(t),
            f = !n && !l && s(t),
            d = !n && !l && !f && a(t),
            p = n || l || f || d,
            h = p ? r(t.length, String) : [],
            y = h.length;
        for (var m in t) !e && !u.call(t, m) || p && ("length" == m || f && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || c(m, y)) || h.push(m);
        return h
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(5),
            o = n(103),
            i = e && !e.nodeType && e,
            s = i && "object" == typeof t && t && !t.nodeType && t,
            c = s && s.exports === i ? r.Buffer : void 0,
            a = (c ? c.isBuffer : void 0) || o;
        t.exports = a
    }).call(this, n(25)(t))
}, function(t, e) {
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(38),
        o = n(45);
    t.exports = function(t) {
        return null != t && o(t.length) && !r(t)
    }
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(50),
        o = n(51),
        i = n(30),
        s = n(48),
        c = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) r(e, i(t)), t = o(t);
            return e
        } : s;
    t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
        return t
    }
}, function(t, e, n) {
    var r = n(46)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(50),
        o = n(24);
    t.exports = function(t, e, n) {
        var i = e(t);
        return o(t) ? i : r(i, n(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n), Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        } : function(t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) "default" !== n && Object.hasOwnProperty.call(t, n) && r(e, t, n);
            return o(e, t), e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PythonExtensionId = e.NotebookCellScheme = e.GlobalMementoKeys = e.noop = e.EXTENSION_ROOT_DIR = void 0;
    const s = i(n(0));
    e.EXTENSION_ROOT_DIR = s.join(__dirname, "..", ".."), e.noop = () => {},
        function(t) {
            t.clusterUris = "clusterUris", t.lastUsedConnection = "lastUsedConnection", t.lastEnteredClusterUri = "lastEnteredClusterUri", t.lastEnteredDatabase = "lastEnteredDatabase", t.prefixForClusterSchema = "prefixForClusterSchema", t.prefixForDatabasesInACluster = "prefixForDatabasesInACluster", t.prefixForTablesInAClusterDB = "prefixForTablesInAClusterDB"
        }(e.GlobalMementoKeys || (e.GlobalMementoKeys = {})), e.NotebookCellScheme = "vscode-notebook-cell", e.PythonExtensionId = "ms-python.python"
}, function(t, e, n) {
    "use strict";
    t.exports = {
        ...n(10),
        ...n(58),
        ...n(60),
        ...n(151),
        ...n(153),
        ...n(159),
        ...n(6),
        ...n(164),
        ...n(166),
        ...n(35),
        ...n(8),
        ...n(20)
    }
}, function(t, e) {
    t.exports = require("fs")
}, function(t, e) {
    t.exports = require("util")
}, function(t, e) {
    t.exports = require("assert")
}, function(t, e, n) {
    "use strict";
    t.exports = {
        copySync: n(147)
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2);
    t.exports = {
        utimesMillis: function(t, e, n, o) {
            r.open(t, "r+", (t, i) => {
                if (t) return o(t);
                r.futimes(i, e, n, t => {
                    r.close(i, e => {
                        o && o(t || e)
                    })
                })
            })
        },
        utimesMillisSync: function(t, e, n) {
            const o = r.openSync(t, "r+");
            return r.futimesSync(o, e, n), r.closeSync(o)
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback;
    t.exports = {
        copy: r(n(150))
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellSlideMetadataManager = e.getSlideDisplayName = void 0;
    const r = n(1),
        o = n(33),
        i = n(170),
        s = n(9),
        c = n(4),
        a = new Map([
            ["slide", "Slide"],
            ["subslide", "Sub-Slide"],
            ["fragment", "Fragment"],
            ["skip", "Skip"],
            ["notes", "Notes"]
        ]);
    e.getSlideDisplayName = function(t) {
        return t ? a.get(t) : void 0
    };
    const u = Array.from(a.entries()).map(([t, e]) => ({
        label: e,
        slide: t
    }));
    class l {
        constructor() {
            this.disposables = [], this.disposables.push(r.commands.registerCommand("jupyter.cell.changeSlideType", this.configureCellSlides, this))
        }
        static register() {
            c.registerDisposable(new l)
        }
        dispose() {
            c.disposeAllDisposables(this.disposables)
        }
        async configureCellSlides(t) {
            var e, n;
            if (!c.isJupyterNotebook(t.notebook)) return;
            const r = s.createJupyterCellFromVSCNotebookCell(t);
            if (!r) return [];
            const i = await this.promptForSlideType(null === (e = r.metadata.slideshow) || void 0 === e ? void 0 : e.slide_type);
            i && i !== (null === (n = r.metadata.slideshow) || void 0 === n ? void 0 : n.slide_type) && await o.CellMetadataManager.updateCellSlideMetadata(t, i)
        }
        async promptForSlideType(t) {
            const e = t || "",
                n = u.map(t => ({
                    ...t,
                    picked: t.slide === e
                })),
                o = [{
                    label: "Hide this from the Notebook Cell Statusbar"
                }],
                s = await r.window.showQuickPick(o.concat(n), {
                    placeHolder: "Select how this cell should appaer in the slideshow",
                    matchOnDescription: !0,
                    matchOnDetail: !0
                });
            if (s && "slide" in s) return s.slide;
            s !== o[0] || await i.FeatureManager.hideCellSlidesFromStatusbar()
        }
    }
    e.CellSlideMetadataManager = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.deactivate = e.activate = void 0;
    const r = n(1),
        o = n(63),
        i = n(33),
        s = n(137),
        c = n(138),
        a = n(139),
        u = n(140),
        l = n(168),
        f = n(169),
        d = n(61),
        p = n(171),
        h = n(172),
        y = n(173);
    e.activate = async function(t) {
        const e = r.window.createOutputChannel("Jupyter Powertools");
        t.subscriptions.push(e), o.CellTagStatusbarProvider.register(), i.CellMetadataManager.register(), s.CellLanguageAutoSwitcher.register(), c.CellMagicCompletions.register(), a.CellSwitcherToolbar.register(), u.JupyterNotebookSlides.register(e), l.JupyterRevealViewer.register(), f.SlideStatusbarProvider.register(), d.CellSlideMetadataManager.register(), p.CellTagMetadataManager.register(), h.TracebackGoToHandler.register(), y.ProblemsProvider.register()
    }, e.deactivate = async function() {}
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellTagStatusbarProvider = void 0;
    const r = n(1),
        o = n(9),
        i = n(4);
    class s {
        constructor() {
            this._onDidChangeCellStatusBarItems = new r.EventEmitter, this.disposables = [], r.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this.disposables)
        }
        get onDidChangeCellStatusBarItems() {
            return this._onDidChangeCellStatusBarItems.event
        }
        static register() {
            const t = new s;
            i.registerDisposable(t), r.notebook.registerNotebookCellStatusBarItemProvider({
                viewType: i.JupyterNotebookView
            }, t)
        }
        dispose() {
            this._onDidChangeCellStatusBarItems.dispose(), i.disposeAllDisposables(this.disposables)
        }
        provideCellStatusBarItems(t, e) {
            if (!i.isJupyterNotebook(t.notebook)) return [];
            const n = r.workspace.getConfiguration("jupyter"),
                s = n.get("showCellTagsStatusBar", !0),
                c = n.get("showCellAddTagsStatusBar", !0);
            if (!s && !c) return [];
            const a = o.createJupyterCellFromVSCNotebookCell(t);
            if (!a) return [];
            const u = c ? [new r.NotebookCellStatusBarItem("Tags $(add)", r.NotebookCellStatusBarAlignment.Right, "jupyter.cell.addCellTag", "Add Tag", 9999999999)] : [],
                l = s ? (a.metadata.tags || []).sort().map(t => new r.NotebookCellStatusBarItem(t, r.NotebookCellStatusBarAlignment.Left, "jupyter.cell.deleteCellTag", "Delete tag")) : [];
            return u.concat(l)
        }
        onDidChangeConfiguration(t) {
            t.affectsConfiguration("jupyter.showCellTagsStatusBar") && this._onDidChangeCellStatusBarItems.fire(), t.affectsConfiguration("jupyter.showCellAddTagsStatusBar") && this._onDidChangeCellStatusBarItems.fire()
        }
    }
    e.CellTagStatusbarProvider = s
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.concatMultilineString = e.splitMultilineString = void 0, e.splitMultilineString = function(t) {
        if (Array.isArray(t)) return t;
        const e = t.toString();
        if (e.length > 0) {
            const t = e.split("\n");
            return t.map((e, n) => n < t.length - 1 ? e + "\n" : e).filter(t => t.length > 0)
        }
        return []
    }, e.concatMultilineString = function(t, e) {
        const n = /(^[\t\f\v\r ]+|[\t\f\v\r ]+$)/g;
        if (Array.isArray(t)) {
            let r = "";
            for (let e = 0; e < t.length; e += 1) {
                const n = t[e];
                r = e < t.length - 1 && !n.endsWith("\n") ? r.concat(n + "\n") : r.concat(n)
            }
            return e ? r.replace(n, "") : r
        }
        return e ? t.toString().replace(n, "") : t.toString()
    }
}, function(t, e, n) {
    var r = n(66);
    t.exports = function(t) {
        return r(t, 5)
    }
}, function(t, e, n) {
    var r = n(67),
        o = n(97),
        i = n(41),
        s = n(99),
        c = n(109),
        a = n(112),
        u = n(113),
        l = n(114),
        f = n(116),
        d = n(117),
        p = n(118),
        h = n(31),
        y = n(123),
        m = n(124),
        b = n(130),
        g = n(24),
        v = n(44),
        w = n(132),
        S = n(12),
        C = n(134),
        k = n(23),
        x = n(29),
        _ = {};
    _["[object Arguments]"] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object DataView]"] = _["[object Boolean]"] = _["[object Date]"] = _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Map]"] = _["[object Number]"] = _["[object Object]"] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object Symbol]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Error]"] = _["[object Function]"] = _["[object WeakMap]"] = !1, t.exports = function t(e, n, j, E, O, P) {
        var D, N = 1 & n,
            T = 2 & n,
            M = 4 & n;
        if (j && (D = O ? j(e, E, O, P) : j(e)), void 0 !== D) return D;
        if (!S(e)) return e;
        var F = g(e);
        if (F) {
            if (D = y(e), !N) return u(e, D)
        } else {
            var A = h(e),
                I = "[object Function]" == A || "[object GeneratorFunction]" == A;
            if (v(e)) return a(e, N);
            if ("[object Object]" == A || "[object Arguments]" == A || I && !O) {
                if (D = T || I ? {} : b(e), !N) return T ? f(e, c(D, e)) : l(e, s(D, e))
            } else {
                if (!_[A]) return O ? e : {};
                D = m(e, A, N)
            }
        }
        P || (P = new r);
        var L = P.get(e);
        if (L) return L;
        P.set(e, D), C(e) ? e.forEach((function(r) {
            D.add(t(r, n, j, r, e, P))
        })) : w(e) && e.forEach((function(r, o) {
            D.set(o, t(r, n, j, o, e, P))
        }));
        var J = F ? void 0 : (M ? T ? p : d : T ? x : k)(e);
        return o(J || e, (function(r, o) {
            J && (r = e[o = r]), i(D, o, t(r, n, j, o, e, P))
        })), D
    }
}, function(t, e, n) {
    var r = n(14),
        o = n(73),
        i = n(74),
        s = n(75),
        c = n(76),
        a = n(77);

    function u(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = s, u.prototype.has = c, u.prototype.set = a, t.exports = u
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(15),
        o = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e) {
        var n = this.__data__,
            o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
    }
}, function(t, e, n) {
    var r = n(14);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(14),
        o = n(21),
        i = n(84);
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var s = n.__data__;
            if (!o || s.length < 199) return s.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new i(s)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(38),
        o = n(81),
        i = n(12),
        s = n(40),
        c = /^\[object .+?Constructor\]$/,
        a = Function.prototype,
        u = Object.prototype,
        l = a.toString,
        f = u.hasOwnProperty,
        d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!i(t) || o(t)) && (r(t) ? d : c).test(s(t))
    }
}, function(t, e, n) {
    var r = n(22),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = i.call(t, c),
            n = t[c];
        try {
            t[c] = void 0;
            var r = !0
        } catch (t) {}
        var o = s.call(t);
        return r && (e ? t[c] = n : delete t[c]), o
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, o = n(82),
        i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!i && i in t
    }
}, function(t, e, n) {
    var r = n(5)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(85),
        o = n(92),
        i = n(94),
        s = n(95),
        c = n(96);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    a.prototype.clear = r, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = s, a.prototype.set = c, t.exports = a
}, function(t, e, n) {
    var r = n(86),
        o = n(14),
        i = n(21);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || o),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(87),
        o = n(88),
        i = n(89),
        s = n(90),
        c = n(91);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    a.prototype.clear = r, a.prototype.delete = o, a.prototype.get = i, a.prototype.has = s, a.prototype.set = c, t.exports = a
}, function(t, e, n) {
    var r = n(17);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(17),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(17),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t)
    }
}, function(t, e, n) {
    var r = n(17);
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(18);
    t.exports = function(t, e) {
        var n = r(this, t),
            o = n.size;
        return n.set(t, e), this.size += n.size == o ? 0 : 1, this
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    var r = n(7),
        o = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(19),
        o = n(23);
    t.exports = function(t, e) {
        return t && r(e, o(e), t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(102),
        o = n(13),
        i = Object.prototype,
        s = i.hasOwnProperty,
        c = i.propertyIsEnumerable,
        a = r(function() {
            return arguments
        }()) ? r : function(t) {
            return o(t) && s.call(t, "callee") && !c.call(t, "callee")
        };
    t.exports = a
}, function(t, e, n) {
    var r = n(16),
        o = n(13);
    t.exports = function(t) {
        return o(t) && "[object Arguments]" == r(t)
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e) {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var r = typeof t;
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(106),
        o = n(26),
        i = n(27),
        s = i && i.isTypedArray,
        c = s ? o(s) : r;
    t.exports = c
}, function(t, e, n) {
    var r = n(16),
        o = n(45),
        i = n(13),
        s = {};
    s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = function(t) {
        return i(t) && o(t.length) && !!s[r(t)]
    }
}, function(t, e, n) {
    var r = n(28),
        o = n(108),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = [];
        for (var n in Object(t)) i.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(46)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(19),
        o = n(29);
    t.exports = function(t, e) {
        return t && r(e, o(e), t)
    }
}, function(t, e, n) {
    var r = n(12),
        o = n(28),
        i = n(111),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = o(t),
            n = [];
        for (var c in t)("constructor" != c || !e && s.call(t, c)) && n.push(c);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(5),
            o = e && !e.nodeType && e,
            i = o && "object" == typeof t && t && !t.nodeType && t,
            s = i && i.exports === o ? r.Buffer : void 0,
            c = s ? s.allocUnsafe : void 0;
        t.exports = function(t, e) {
            if (e) return t.slice();
            var n = t.length,
                r = c ? c(n) : new t.constructor(n);
            return t.copy(r), r
        }
    }).call(this, n(25)(t))
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(19),
        o = n(30);
    t.exports = function(t, e) {
        return r(t, o(t), e)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r;) {
            var s = t[n];
            e(s, n, t) && (i[o++] = s)
        }
        return i
    }
}, function(t, e, n) {
    var r = n(19),
        o = n(49);
    t.exports = function(t, e) {
        return r(t, o(t), e)
    }
}, function(t, e, n) {
    var r = n(52),
        o = n(30),
        i = n(23);
    t.exports = function(t) {
        return r(t, i, o)
    }
}, function(t, e, n) {
    var r = n(52),
        o = n(49),
        i = n(29);
    t.exports = function(t) {
        return r(t, i, o)
    }
}, function(t, e, n) {
    var r = n(7)(n(5), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(5), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(5), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(7)(n(5), "WeakMap");
    t.exports = r
}, function(t, e) {
    var n = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = t.length,
            r = new t.constructor(e);
        return e && "string" == typeof t[0] && n.call(t, "index") && (r.index = t.index, r.input = t.input), r
    }
}, function(t, e, n) {
    var r = n(32),
        o = n(126),
        i = n(127),
        s = n(128),
        c = n(129);
    t.exports = function(t, e, n) {
        var a = t.constructor;
        switch (e) {
            case "[object ArrayBuffer]":
                return r(t);
            case "[object Boolean]":
            case "[object Date]":
                return new a(+t);
            case "[object DataView]":
                return o(t, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return c(t, n);
            case "[object Map]":
                return new a;
            case "[object Number]":
            case "[object String]":
                return new a(t);
            case "[object RegExp]":
                return i(t);
            case "[object Set]":
                return new a;
            case "[object Symbol]":
                return s(t)
        }
    }
}, function(t, e, n) {
    var r = n(5).Uint8Array;
    t.exports = r
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength)
    }
}, function(t, e) {
    var n = /\w*$/;
    t.exports = function(t) {
        var e = new t.constructor(t.source, n.exec(t));
        return e.lastIndex = t.lastIndex, e
    }
}, function(t, e, n) {
    var r = n(22),
        o = r ? r.prototype : void 0,
        i = o ? o.valueOf : void 0;
    t.exports = function(t) {
        return i ? Object(i.call(t)) : {}
    }
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length)
    }
}, function(t, e, n) {
    var r = n(131),
        o = n(51),
        i = n(28);
    t.exports = function(t) {
        return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
    }
}, function(t, e, n) {
    var r = n(12),
        o = Object.create,
        i = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (o) return o(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = i
}, function(t, e, n) {
    var r = n(133),
        o = n(26),
        i = n(27),
        s = i && i.isMap,
        c = s ? o(s) : r;
    t.exports = c
}, function(t, e, n) {
    var r = n(31),
        o = n(13);
    t.exports = function(t) {
        return o(t) && "[object Map]" == r(t)
    }
}, function(t, e, n) {
    var r = n(135),
        o = n(26),
        i = n(27),
        s = i && i.isSet,
        c = s ? o(s) : r;
    t.exports = c
}, function(t, e, n) {
    var r = n(31),
        o = n(13);
    t.exports = function(t) {
        return o(t) && "[object Set]" == r(t)
    }
}, function(t, e) {
    t.exports = require("crypto")
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellLanguageAutoSwitcher = void 0;
    const r = n(1),
        o = n(53),
        i = n(4),
        s = new Map([
            ["bash", "shellscript"],
            ["html", "html"],
            ["javascript", "javascript"],
            ["js", "javascript"],
            ["latex", "javascript"],
            ["perl", "perl"],
            ["ruby", "ruby"],
            ["script", "shellscript"],
            ["sh", "shellscript"],
            ["svg", "xml"]
        ]);
    class c {
        constructor() {
            this.disposables = [], this.documentTimers = new WeakMap, this.documentFirstLine = new WeakMap, this.documentsForWhichWeSetLanguages = new WeakSet, r.workspace.onDidOpenTextDocument(this.onDidOpenTextDocument, this, this.disposables), r.workspace.onDidChangeTextDocument(this.onDidChangeTextDocument, this, this.disposables)
        }
        static register() {
            const t = new c;
            i.registerDisposable(t)
        }
        dispose() {
            i.disposeAllDisposables(this.disposables)
        }
        onDidOpenTextDocument(t) {
            this.checkAndChangeLanguageInDocument(t)
        }
        onDidChangeTextDocument({
            document: t
        }) {
            if (!i.isJupyterCell(t)) return;
            const e = t.lineAt(0).text;
            if (!e.trim().startsWith("%%")) return this.resetLanguageToPythonIfChangedPreviously(t);
            if (this.documentFirstLine.get(t) === e) return;
            this.documentFirstLine.set(t, e);
            if (!this.getMagicLanguage(t) && !this.documentsForWhichWeSetLanguages.has(t)) return;
            let n = this.documentTimers.get(t);
            n && clearTimeout(n), n = setTimeout(() => this.checkAndChangeLanguageInDocument(t), 500), this.documentTimers.set(t, n)
        }
        getMagicLanguage(t) {
            if (!i.isJupyterCell(t)) return;
            const e = t.lineAt(0).text.trim();
            if (!e.startsWith("%%")) return;
            const n = e.substring(2).split(" ")[0].toLowerCase().trim();
            return s.get(n)
        }
        checkAndChangeLanguageInDocument(t) {
            let e = this.getMagicLanguage(t);
            if (e) this.documentsForWhichWeSetLanguages.add(t);
            else {
                if (!this.documentsForWhichWeSetLanguages.has(t)) return;
                this.documentsForWhichWeSetLanguages.delete(t), e = "python"
            }
            r.languages.setTextDocumentLanguage(t, e).then(o.noop, o.noop)
        }
        resetLanguageToPythonIfChangedPreviously(t) {
            this.documentsForWhichWeSetLanguages.has(t) && (this.documentsForWhichWeSetLanguages.delete(t), r.languages.setTextDocumentLanguage(t, "python").then(o.noop, o.noop))
        }
    }
    e.CellLanguageAutoSwitcher = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellMagicCompletions = void 0;
    const r = n(1),
        o = n(53),
        i = n(4),
        s = [
            ["%%bash", ["--no-stderr", "--no-stdout", "--no-display"]],
            ["%%html", ["--isolated"]],
            ["%%javascript", []],
            ["%%js", []],
            ["%%latex", []],
            ["%%markdown", []],
            ["%%perl", []],
            ["%%pypy", []],
            ["%%python", []],
            ["%%python2", []],
            ["%%ruby", []],
            ["%%script", ["bash", "pypy", "perl", "python", "python2", "python3", "ruby", "sh"]],
            ["%%svg", []]
        ];
    class c {
        static register() {
            const t = new c;
            r.languages.registerCompletionItemProvider({
                scheme: o.NotebookCellScheme,
                language: "python"
            }, t, "%")
        }
        provideCompletionItems(t, e, n, o) {
            if (0 !== e.line || !i.isJupyterCell(t)) return [];
            const c = t.getText(new r.Range(0, 0, 0, e.character)).trim();
            return s.filter(t => t[0].startsWith(c)).map(t => t[0].substring(c.length)).map(t => ({
                label: t
            }))
        }
    }
    e.CellMagicCompletions = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellSwitcherToolbar = void 0;
    const r = n(1),
        o = n(9),
        i = n(4);
    class s {
        constructor() {
            this.disposables = [], this.disposables.push(r.commands.registerCommand("jupyter.cell.switchToMarkdownCell", this.onSwitchToMarkdownCell, this), r.commands.registerCommand("jupyter.cell.switchToCodeCell", this.onSwitchToCodeCell, this), r.commands.registerCommand("jupyter.cell.switchToRawCell", this.onSwitchToRawCell, this))
        }
        static register() {
            i.registerDisposable(new s)
        }
        dispose() {
            i.disposeAllDisposables(this.disposables)
        }
        async onSwitchToMarkdownCell(t) {
            if (t.kind === r.NotebookCellKind.Markdown) return;
            const e = o.convertCodeToMarkdownCell(t),
                n = new r.WorkspaceEdit;
            n.replaceNotebookCells(t.notebook.uri, new r.NotebookRange(t.index, t.index + 1), [e]), await r.workspace.applyEdit(n)
        }
        async onSwitchToCodeCell(t) {
            if (t.kind === r.NotebookCellKind.Code) return;
            const e = o.convertMarkdownToCodeCell(t),
                n = new r.WorkspaceEdit;
            n.replaceNotebookCells(t.notebook.uri, new r.NotebookRange(t.index, t.index + 1), [e]), await r.workspace.applyEdit(n)
        }
        async onSwitchToRawCell(t) {}
    }
    e.CellSwitcherToolbar = s
}, function(t, e, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n), Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        } : function(t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) "default" !== n && Object.hasOwnProperty.call(t, n) && r(e, t, n);
            return o(e, t), e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.JupyterNotebookSlides = void 0;
    const s = n(1),
        c = n(141),
        a = n(4),
        u = i(n(0)),
        l = i(n(54));
    class f {
        constructor(t) {
            this.outputChannel = t, this.disposables = [], this.disposables.push(s.commands.registerCommand("jupyter.notebook.toJupyterSlides", this.onGenerateSlides, this))
        }
        static register(t) {
            a.registerDisposable(new f(t))
        }
        dispose() {
            a.disposeAllDisposables(this.disposables)
        }
        async onGenerateSlides(t) {
            var e;
            if (!(t = t || (null === (e = s.window.activeNotebookEditor) || void 0 === e ? void 0 : e.document.uri))) return;
            const n = await this.generateSlides(t);
            n && s.commands.executeCommand("jupyter.previewSlides", n)
        }
        async saveNotebookIfRequired(t) {
            var e;
            const n = s.notebook.notebookDocuments.find(e => e.uri.toString() === t.toString());
            if (!n) throw new Error("Notebook not found");
            return n.isDirty && (null === (e = s.window.activeNotebookEditor) || void 0 === e ? void 0 : e.document) === n && await s.commands.executeCommand("workbench.action.files.save"), n.isUntitled && s.window.showErrorMessage("Please save the untitled notebook to a file before generating a slide"), t
        }
        async generateSlides(t) {
            if (!(t = await this.saveNotebookIfRequired(t)).fsPath.toLowerCase().endsWith(".ipynb")) return;
            const e = `${s.workspace.getConfiguration("jupyter").get("nbConvertToSlidesCommand")} '${t.fsPath.replace(/\\/g,"/")}'`,
                n = t.fsPath.substring(0, t.fsPath.length - 6) + ".slides.html";
            try {
                const n = c.spawn(e, {
                    cwd: u.dirname(t.fsPath),
                    env: process.env,
                    shell: !0
                });
                n.stdout.on("data", t => this.outputChannel.append(t.toString())), n.stderr.on("data", t => this.outputChannel.append(t.toString())), await new Promise(t => n.once("exit", t))
            } catch {}
            if (!l.pathExists(n)) throw new Error("HTML File not generated");
            return s.Uri.file(n)
        }
    }
    e.JupyterNotebookSlides = f
}, function(t, e) {
    t.exports = require("child_process")
}, function(t, e, n) {
    var r = n(143),
        o = process.cwd,
        i = null,
        s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
        return i || (i = o.call(process)), i
    };
    try {
        process.cwd()
    } catch (t) {}
    if ("function" == typeof process.chdir) {
        var c = process.chdir;
        process.chdir = function(t) {
            i = null, c.call(process, t)
        }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, c)
    }
    t.exports = function(t) {
        r.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && function(t) {
            t.lchmod = function(e, n, o) {
                t.open(e, r.O_WRONLY | r.O_SYMLINK, n, (function(e, r) {
                    e ? o && o(e) : t.fchmod(r, n, (function(e) {
                        t.close(r, (function(t) {
                            o && o(e || t)
                        }))
                    }))
                }))
            }, t.lchmodSync = function(e, n) {
                var o, i = t.openSync(e, r.O_WRONLY | r.O_SYMLINK, n),
                    s = !0;
                try {
                    o = t.fchmodSync(i, n), s = !1
                } finally {
                    if (s) try {
                        t.closeSync(i)
                    } catch (t) {} else t.closeSync(i)
                }
                return o
            }
        }(t);
        t.lutimes || function(t) {
            r.hasOwnProperty("O_SYMLINK") ? (t.lutimes = function(e, n, o, i) {
                t.open(e, r.O_SYMLINK, (function(e, r) {
                    e ? i && i(e) : t.futimes(r, n, o, (function(e) {
                        t.close(r, (function(t) {
                            i && i(e || t)
                        }))
                    }))
                }))
            }, t.lutimesSync = function(e, n, o) {
                var i, s = t.openSync(e, r.O_SYMLINK),
                    c = !0;
                try {
                    i = t.futimesSync(s, n, o), c = !1
                } finally {
                    if (c) try {
                        t.closeSync(s)
                    } catch (t) {} else t.closeSync(s)
                }
                return i
            }) : (t.lutimes = function(t, e, n, r) {
                r && process.nextTick(r)
            }, t.lutimesSync = function() {})
        }(t);
        t.chown = i(t.chown), t.fchown = i(t.fchown), t.lchown = i(t.lchown), t.chmod = n(t.chmod), t.fchmod = n(t.fchmod), t.lchmod = n(t.lchmod), t.chownSync = c(t.chownSync), t.fchownSync = c(t.fchownSync), t.lchownSync = c(t.lchownSync), t.chmodSync = o(t.chmodSync), t.fchmodSync = o(t.fchmodSync), t.lchmodSync = o(t.lchmodSync), t.stat = a(t.stat), t.fstat = a(t.fstat), t.lstat = a(t.lstat), t.statSync = u(t.statSync), t.fstatSync = u(t.fstatSync), t.lstatSync = u(t.lstatSync), t.lchmod || (t.lchmod = function(t, e, n) {
            n && process.nextTick(n)
        }, t.lchmodSync = function() {});
        t.lchown || (t.lchown = function(t, e, n, r) {
            r && process.nextTick(r)
        }, t.lchownSync = function() {});
        "win32" === s && (t.rename = (e = t.rename, function(n, r, o) {
            var i = Date.now(),
                s = 0;
            e(n, r, (function c(a) {
                if (a && ("EACCES" === a.code || "EPERM" === a.code) && Date.now() - i < 6e4) return setTimeout((function() {
                    t.stat(r, (function(t, i) {
                        t && "ENOENT" === t.code ? e(n, r, c) : o(a)
                    }))
                }), s), void(s < 100 && (s += 10));
                o && o(a)
            }))
        }));
        var e;

        function n(e) {
            return e ? function(n, r, o) {
                return e.call(t, n, r, (function(t) {
                    l(t) && (t = null), o && o.apply(this, arguments)
                }))
            } : e
        }

        function o(e) {
            return e ? function(n, r) {
                try {
                    return e.call(t, n, r)
                } catch (t) {
                    if (!l(t)) throw t
                }
            } : e
        }

        function i(e) {
            return e ? function(n, r, o, i) {
                return e.call(t, n, r, o, (function(t) {
                    l(t) && (t = null), i && i.apply(this, arguments)
                }))
            } : e
        }

        function c(e) {
            return e ? function(n, r, o) {
                try {
                    return e.call(t, n, r, o)
                } catch (t) {
                    if (!l(t)) throw t
                }
            } : e
        }

        function a(e) {
            return e ? function(n, r, o) {
                function i(t, e) {
                    e && (e.uid < 0 && (e.uid += 4294967296), e.gid < 0 && (e.gid += 4294967296)), o && o.apply(this, arguments)
                }
                return "function" == typeof r && (o = r, r = null), r ? e.call(t, n, r, i) : e.call(t, n, i)
            } : e
        }

        function u(e) {
            return e ? function(n, r) {
                var o = r ? e.call(t, n, r) : e.call(t, n);
                return o.uid < 0 && (o.uid += 4294967296), o.gid < 0 && (o.gid += 4294967296), o
            } : e
        }

        function l(t) {
            return !t || ("ENOSYS" === t.code || !(process.getuid && 0 === process.getuid() || "EINVAL" !== t.code && "EPERM" !== t.code))
        }
        t.read = function(e) {
            function n(n, r, o, i, s, c) {
                var a;
                if (c && "function" == typeof c) {
                    var u = 0;
                    a = function(l, f, d) {
                        if (l && "EAGAIN" === l.code && u < 10) return u++, e.call(t, n, r, o, i, s, a);
                        c.apply(this, arguments)
                    }
                }
                return e.call(t, n, r, o, i, s, a)
            }
            return Object.setPrototypeOf && Object.setPrototypeOf(n, e), n
        }(t.read), t.readSync = (f = t.readSync, function(e, n, r, o, i) {
            for (var s = 0;;) try {
                return f.call(t, e, n, r, o, i)
            } catch (t) {
                if ("EAGAIN" === t.code && s < 10) {
                    s++;
                    continue
                }
                throw t
            }
        });
        var f
    }
}, function(t, e) {
    t.exports = require("constants")
}, function(t, e, n) {
    var r = n(145).Stream;
    t.exports = function(t) {
        return {
            ReadStream: function e(n, o) {
                if (!(this instanceof e)) return new e(n, o);
                r.call(this);
                var i = this;
                this.path = n, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 65536, o = o || {};
                for (var s = Object.keys(o), c = 0, a = s.length; c < a; c++) {
                    var u = s[c];
                    this[u] = o[u]
                }
                this.encoding && this.setEncoding(this.encoding);
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (void 0 === this.end) this.end = 1 / 0;
                    else if ("number" != typeof this.end) throw TypeError("end must be a Number");
                    if (this.start > this.end) throw new Error("start must be <= end");
                    this.pos = this.start
                }
                if (null !== this.fd) return void process.nextTick((function() {
                    i._read()
                }));
                t.open(this.path, this.flags, this.mode, (function(t, e) {
                    if (t) return i.emit("error", t), void(i.readable = !1);
                    i.fd = e, i.emit("open", e), i._read()
                }))
            },
            WriteStream: function e(n, o) {
                if (!(this instanceof e)) return new e(n, o);
                r.call(this), this.path = n, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, o = o || {};
                for (var i = Object.keys(o), s = 0, c = i.length; s < c; s++) {
                    var a = i[s];
                    this[a] = o[a]
                }
                if (void 0 !== this.start) {
                    if ("number" != typeof this.start) throw TypeError("start must be a Number");
                    if (this.start < 0) throw new Error("start must be >= zero");
                    this.pos = this.start
                }
                this.busy = !1, this._queue = [], null === this.fd && (this._open = t.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush())
            }
        }
    }
}, function(t, e) {
    t.exports = require("stream")
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        if (null === t || "object" != typeof t) return t;
        if (t instanceof Object) var e = {
            __proto__: r(t)
        };
        else e = Object.create(null);
        return Object.getOwnPropertyNames(t).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        })), e
    };
    var r = Object.getPrototypeOf || function(t) {
        return t.__proto__
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(0),
        i = n(6).mkdirsSync,
        s = n(59).utimesMillisSync,
        c = n(11);

    function a(t, e, n, i) {
        const s = (i.dereference ? r.statSync : r.lstatSync)(e);
        if (s.isDirectory()) return function(t, e, n, o, i) {
            return e ? f(n, o, i) : function(t, e, n, o) {
                return r.mkdirSync(n), f(e, n, o), l(n, t)
            }(t.mode, n, o, i)
        }(s, t, e, n, i);
        if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return function(t, e, n, o, i) {
            return e ? function(t, e, n, o) {
                if (o.overwrite) return r.unlinkSync(n), u(t, e, n, o);
                if (o.errorOnExist) throw new Error(`'${n}' already exists`)
            }(t, n, o, i) : u(t, n, o, i)
        }(s, t, e, n, i);
        if (s.isSymbolicLink()) return function(t, e, n, i) {
            let s = r.readlinkSync(e);
            i.dereference && (s = o.resolve(process.cwd(), s));
            if (t) {
                let t;
                try {
                    t = r.readlinkSync(n)
                } catch (t) {
                    if ("EINVAL" === t.code || "UNKNOWN" === t.code) return r.symlinkSync(s, n);
                    throw t
                }
                if (i.dereference && (t = o.resolve(process.cwd(), t)), c.isSrcSubdir(s, t)) throw new Error(`Cannot copy '${s}' to a subdirectory of itself, '${t}'.`);
                if (r.statSync(n).isDirectory() && c.isSrcSubdir(t, s)) throw new Error(`Cannot overwrite '${t}' with '${s}'.`);
                return function(t, e) {
                    return r.unlinkSync(e), r.symlinkSync(t, e)
                }(s, n)
            }
            return r.symlinkSync(s, n)
        }(t, e, n, i);
        if (s.isSocket()) throw new Error("Cannot copy a socket file: " + e);
        if (s.isFIFO()) throw new Error("Cannot copy a FIFO pipe: " + e);
        throw new Error("Unknown file: " + e)
    }

    function u(t, e, n, o) {
        return r.copyFileSync(e, n), o.preserveTimestamps && function(t, e, n) {
            (function(t) {
                return 0 == (128 & t)
            })(t) && function(t, e) {
                l(t, 128 | e)
            }(n, t);
            (function(t, e) {
                const n = r.statSync(t);
                s(e, n.atime, n.mtime)
            })(e, n)
        }(t.mode, e, n), l(n, t.mode)
    }

    function l(t, e) {
        return r.chmodSync(t, e)
    }

    function f(t, e, n) {
        r.readdirSync(t).forEach(r => function(t, e, n, r) {
            const i = o.join(e, t),
                s = o.join(n, t),
                {
                    destStat: u
                } = c.checkPathsSync(i, s, "copy", r);
            return function(t, e, n, r) {
                if (!r.filter || r.filter(e, n)) return a(t, e, n, r)
            }(u, i, s, r)
        }(r, t, e, n))
    }
    t.exports = function(t, e, n) {
        "function" == typeof n && (n = {
            filter: n
        }), (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269");
        const {
            srcStat: s,
            destStat: u
        } = c.checkPathsSync(t, e, "copy", n);
        return c.checkParentPathsSync(t, s, e, "copy"),
            function(t, e, n, s) {
                if (s.filter && !s.filter(e, n)) return;
                const c = o.dirname(n);
                r.existsSync(c) || i(c);
                return a(t, e, n, s)
            }(u, t, e, n)
    }
}, function(t, e, n) {
    "use strict";
    const r = n(10),
        {
            checkPath: o
        } = n(149),
        i = t => "number" == typeof t ? t : {
            mode: 511,
            ...t
        }.mode;
    t.exports.makeDir = async (t, e) => (o(t), r.mkdir(t, {
        mode: i(e),
        recursive: !0
    })), t.exports.makeDirSync = (t, e) => (o(t), r.mkdirSync(t, {
        mode: i(e),
        recursive: !0
    }))
}, function(t, e, n) {
    "use strict";
    const r = n(0);
    t.exports.checkPath = function(t) {
        if ("win32" === process.platform) {
            if (/[<>:"|?*]/.test(t.replace(r.parse(t).root, ""))) {
                const e = new Error("Path contains invalid characters: " + t);
                throw e.code = "EINVAL", e
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(0),
        i = n(6).mkdirs,
        s = n(8).pathExists,
        c = n(59).utimesMillis,
        a = n(11);

    function u(t, e, n, r, c) {
        const a = o.dirname(n);
        s(a, (o, s) => o ? c(o) : s ? f(t, e, n, r, c) : void i(a, o => o ? c(o) : f(t, e, n, r, c)))
    }

    function l(t, e, n, r, o, i) {
        Promise.resolve(o.filter(n, r)).then(s => s ? t(e, n, r, o, i) : i(), t => i(t))
    }

    function f(t, e, n, o, i) {
        (o.dereference ? r.stat : r.lstat)(e, (s, c) => s ? i(s) : c.isDirectory() ? function(t, e, n, o, i, s) {
            return e ? y(n, o, i, s) : function(t, e, n, o, i) {
                r.mkdir(n, r => {
                    if (r) return i(r);
                    y(e, n, o, e => e ? i(e) : h(n, t, i))
                })
            }(t.mode, n, o, i, s)
        }(c, t, e, n, o, i) : c.isFile() || c.isCharacterDevice() || c.isBlockDevice() ? function(t, e, n, o, i, s) {
            return e ? function(t, e, n, o, i) {
                if (!o.overwrite) return o.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
                r.unlink(n, r => r ? i(r) : d(t, e, n, o, i))
            }(t, n, o, i, s) : d(t, n, o, i, s)
        }(c, t, e, n, o, i) : c.isSymbolicLink() ? b(t, e, n, o, i) : c.isSocket() ? i(new Error("Cannot copy a socket file: " + e)) : c.isFIFO() ? i(new Error("Cannot copy a FIFO pipe: " + e)) : i(new Error("Unknown file: " + e)))
    }

    function d(t, e, n, o, i) {
        r.copyFile(e, n, r => r ? i(r) : o.preserveTimestamps ? function(t, e, n, r) {
            if (function(t) {
                    return 0 == (128 & t)
                }(t)) return function(t, e, n) {
                return h(t, 128 | e, n)
            }(n, t, o => o ? r(o) : p(t, e, n, r));
            return p(t, e, n, r)
        }(t.mode, e, n, i) : h(n, t.mode, i))
    }

    function p(t, e, n, o) {
        ! function(t, e, n) {
            r.stat(t, (t, r) => t ? n(t) : c(e, r.atime, r.mtime, n))
        }(e, n, e => e ? o(e) : h(n, t, o))
    }

    function h(t, e, n) {
        return r.chmod(t, e, n)
    }

    function y(t, e, n, o) {
        r.readdir(t, (r, i) => r ? o(r) : m(i, t, e, n, o))
    }

    function m(t, e, n, r, i) {
        const s = t.pop();
        return s ? function(t, e, n, r, i, s) {
            const c = o.join(n, e),
                u = o.join(r, e);
            a.checkPaths(c, u, "copy", i, (e, o) => {
                if (e) return s(e);
                const {
                    destStat: a
                } = o;
                ! function(t, e, n, r, o) {
                    r.filter ? l(f, t, e, n, r, o) : f(t, e, n, r, o)
                }(a, c, u, i, e => e ? s(e) : m(t, n, r, i, s))
            })
        }(t, s, e, n, r, i) : i()
    }

    function b(t, e, n, i, s) {
        r.readlink(e, (e, c) => e ? s(e) : (i.dereference && (c = o.resolve(process.cwd(), c)), t ? void r.readlink(n, (e, u) => e ? "EINVAL" === e.code || "UNKNOWN" === e.code ? r.symlink(c, n, s) : s(e) : (i.dereference && (u = o.resolve(process.cwd(), u)), a.isSrcSubdir(c, u) ? s(new Error(`Cannot copy '${c}' to a subdirectory of itself, '${u}'.`)) : t.isDirectory() && a.isSrcSubdir(u, c) ? s(new Error(`Cannot overwrite '${u}' with '${c}'.`)) : function(t, e, n) {
            r.unlink(e, o => o ? n(o) : r.symlink(t, e, n))
        }(c, n, s))) : r.symlink(c, n, s)))
    }
    t.exports = function(t, e, n, r) {
        "function" != typeof n || r ? "function" == typeof n && (n = {
            filter: n
        }) : (r = n, n = {}), r = r || function() {}, (n = n || {}).clobber = !("clobber" in n) || !!n.clobber, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && "ia32" === process.arch && console.warn("fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n\n    see https://github.com/jprichardson/node-fs-extra/issues/269"), a.checkPaths(t, e, "copy", n, (o, i) => {
            if (o) return r(o);
            const {
                srcStat: s,
                destStat: c
            } = i;
            a.checkParentPaths(t, s, e, "copy", o => o ? r(o) : n.filter ? l(u, c, t, e, n, r) : u(c, t, e, n, r))
        })
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromPromise,
        o = n(10),
        i = n(0),
        s = n(6),
        c = n(20),
        a = r((async function(t) {
            let e;
            try {
                e = await o.readdir(t)
            } catch {
                return s.mkdirs(t)
            }
            return Promise.all(e.map(e => c.remove(i.join(t, e))))
        }));

    function u(t) {
        let e;
        try {
            e = o.readdirSync(t)
        } catch {
            return s.mkdirsSync(t)
        }
        e.forEach(e => {
            e = i.join(t, e), c.removeSync(e)
        })
    }
    t.exports = {
        emptyDirSync: u,
        emptydirSync: u,
        emptyDir: a,
        emptydir: a
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(0),
        i = n(57),
        s = "win32" === process.platform;

    function c(t) {
        ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach(e => {
            t[e] = t[e] || r[e], t[e += "Sync"] = t[e] || r[e]
        }), t.maxBusyTries = t.maxBusyTries || 3
    }

    function a(t, e, n) {
        let r = 0;
        "function" == typeof e && (n = e, e = {}), i(t, "rimraf: missing path"), i.strictEqual(typeof t, "string", "rimraf: path should be a string"), i.strictEqual(typeof n, "function", "rimraf: callback function required"), i(e, "rimraf: invalid options argument provided"), i.strictEqual(typeof e, "object", "rimraf: options should be object"), c(e), u(t, e, (function o(i) {
            if (i) {
                if (("EBUSY" === i.code || "ENOTEMPTY" === i.code || "EPERM" === i.code) && r < e.maxBusyTries) {
                    r++;
                    return setTimeout(() => u(t, e, o), 100 * r)
                }
                "ENOENT" === i.code && (i = null)
            }
            n(i)
        }))
    }

    function u(t, e, n) {
        i(t), i(e), i("function" == typeof n), e.lstat(t, (r, o) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && s ? l(t, e, r, n) : o && o.isDirectory() ? d(t, e, r, n) : void e.unlink(t, r => {
            if (r) {
                if ("ENOENT" === r.code) return n(null);
                if ("EPERM" === r.code) return s ? l(t, e, r, n) : d(t, e, r, n);
                if ("EISDIR" === r.code) return d(t, e, r, n)
            }
            return n(r)
        }))
    }

    function l(t, e, n, r) {
        i(t), i(e), i("function" == typeof r), e.chmod(t, 438, o => {
            o ? r("ENOENT" === o.code ? null : n) : e.stat(t, (o, i) => {
                o ? r("ENOENT" === o.code ? null : n) : i.isDirectory() ? d(t, e, n, r) : e.unlink(t, r)
            })
        })
    }

    function f(t, e, n) {
        let r;
        i(t), i(e);
        try {
            e.chmodSync(t, 438)
        } catch (t) {
            if ("ENOENT" === t.code) return;
            throw n
        }
        try {
            r = e.statSync(t)
        } catch (t) {
            if ("ENOENT" === t.code) return;
            throw n
        }
        r.isDirectory() ? h(t, e, n) : e.unlinkSync(t)
    }

    function d(t, e, n, r) {
        i(t), i(e), i("function" == typeof r), e.rmdir(t, s => {
            !s || "ENOTEMPTY" !== s.code && "EEXIST" !== s.code && "EPERM" !== s.code ? s && "ENOTDIR" === s.code ? r(n) : r(s) : function(t, e, n) {
                i(t), i(e), i("function" == typeof n), e.readdir(t, (r, i) => {
                    if (r) return n(r);
                    let s, c = i.length;
                    if (0 === c) return e.rmdir(t, n);
                    i.forEach(r => {
                        a(o.join(t, r), e, r => {
                            if (!s) return r ? n(s = r) : void(0 == --c && e.rmdir(t, n))
                        })
                    })
                })
            }(t, e, r)
        })
    }

    function p(t, e) {
        let n;
        c(e = e || {}), i(t, "rimraf: missing path"), i.strictEqual(typeof t, "string", "rimraf: path should be a string"), i(e, "rimraf: missing options"), i.strictEqual(typeof e, "object", "rimraf: options should be object");
        try {
            n = e.lstatSync(t)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            "EPERM" === n.code && s && f(t, e, n)
        }
        try {
            n && n.isDirectory() ? h(t, e, null) : e.unlinkSync(t)
        } catch (n) {
            if ("ENOENT" === n.code) return;
            if ("EPERM" === n.code) return s ? f(t, e, n) : h(t, e, n);
            if ("EISDIR" !== n.code) throw n;
            h(t, e, n)
        }
    }

    function h(t, e, n) {
        i(t), i(e);
        try {
            e.rmdirSync(t)
        } catch (r) {
            if ("ENOTDIR" === r.code) throw n;
            if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) ! function(t, e) {
                if (i(t), i(e), e.readdirSync(t).forEach(n => p(o.join(t, n), e)), !s) {
                    return e.rmdirSync(t, e)
                } {
                    const n = Date.now();
                    do {
                        try {
                            return e.rmdirSync(t, e)
                        } catch {}
                    } while (Date.now() - n < 500)
                }
            }(t, e);
            else if ("ENOENT" !== r.code) throw r
        }
    }
    t.exports = a, a.sync = p
}, function(t, e, n) {
    "use strict";
    const r = n(154),
        o = n(155),
        i = n(156);
    t.exports = {
        createFile: r.createFile,
        createFileSync: r.createFileSync,
        ensureFile: r.createFile,
        ensureFileSync: r.createFileSync,
        createLink: o.createLink,
        createLinkSync: o.createLinkSync,
        ensureLink: o.createLink,
        ensureLinkSync: o.createLinkSync,
        createSymlink: i.createSymlink,
        createSymlinkSync: i.createSymlinkSync,
        ensureSymlink: i.createSymlink,
        ensureSymlinkSync: i.createSymlinkSync
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback,
        o = n(0),
        i = n(2),
        s = n(6);
    t.exports = {
        createFile: r((function(t, e) {
            function n() {
                i.writeFile(t, "", t => {
                    if (t) return e(t);
                    e()
                })
            }
            i.stat(t, (r, c) => {
                if (!r && c.isFile()) return e();
                const a = o.dirname(t);
                i.stat(a, (t, r) => {
                    if (t) return "ENOENT" === t.code ? s.mkdirs(a, t => {
                        if (t) return e(t);
                        n()
                    }) : e(t);
                    r.isDirectory() ? n() : i.readdir(a, t => {
                        if (t) return e(t)
                    })
                })
            })
        })),
        createFileSync: function(t) {
            let e;
            try {
                e = i.statSync(t)
            } catch {}
            if (e && e.isFile()) return;
            const n = o.dirname(t);
            try {
                i.statSync(n).isDirectory() || i.readdirSync(n)
            } catch (t) {
                if (!t || "ENOENT" !== t.code) throw t;
                s.mkdirsSync(n)
            }
            i.writeFileSync(t, "")
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback,
        o = n(0),
        i = n(2),
        s = n(6),
        c = n(8).pathExists,
        {
            areIdentical: a
        } = n(11);
    t.exports = {
        createLink: r((function(t, e, n) {
            function r(t, e) {
                i.link(t, e, t => {
                    if (t) return n(t);
                    n(null)
                })
            }
            i.lstat(e, (u, l) => {
                i.lstat(t, (i, u) => {
                    if (i) return i.message = i.message.replace("lstat", "ensureLink"), n(i);
                    if (l && a(u, l)) return n(null);
                    const f = o.dirname(e);
                    c(f, (o, i) => o ? n(o) : i ? r(t, e) : void s.mkdirs(f, o => {
                        if (o) return n(o);
                        r(t, e)
                    }))
                })
            })
        })),
        createLinkSync: function(t, e) {
            let n;
            try {
                n = i.lstatSync(e)
            } catch {}
            try {
                const e = i.lstatSync(t);
                if (n && a(e, n)) return
            } catch (t) {
                throw t.message = t.message.replace("lstat", "ensureLink"), t
            }
            const r = o.dirname(e);
            return i.existsSync(r) || s.mkdirsSync(r), i.linkSync(t, e)
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback,
        o = n(0),
        i = n(10),
        s = n(6),
        c = s.mkdirs,
        a = s.mkdirsSync,
        u = n(157),
        l = u.symlinkPaths,
        f = u.symlinkPathsSync,
        d = n(158),
        p = d.symlinkType,
        h = d.symlinkTypeSync,
        y = n(8).pathExists,
        {
            areIdentical: m
        } = n(11);

    function b(t, e, n, r) {
        l(t, e, (s, a) => {
            if (s) return r(s);
            t = a.toDst, p(a.toCwd, n, (n, s) => {
                if (n) return r(n);
                const a = o.dirname(e);
                y(a, (n, o) => n ? r(n) : o ? i.symlink(t, e, s, r) : void c(a, n => {
                    if (n) return r(n);
                    i.symlink(t, e, s, r)
                }))
            })
        })
    }
    t.exports = {
        createSymlink: r((function(t, e, n, r) {
            r = "function" == typeof n ? n : r, n = "function" != typeof n && n, i.lstat(e, (o, s) => {
                !o && s.isSymbolicLink() ? Promise.all([i.stat(t), i.stat(e)]).then(([o, i]) => {
                    if (m(o, i)) return r(null);
                    b(t, e, n, r)
                }) : b(t, e, n, r)
            })
        })),
        createSymlinkSync: function(t, e, n) {
            let r;
            try {
                r = i.lstatSync(e)
            } catch {}
            if (r && r.isSymbolicLink()) {
                const n = i.statSync(t),
                    r = i.statSync(e);
                if (m(n, r)) return
            }
            const s = f(t, e);
            t = s.toDst, n = h(s.toCwd, n);
            const c = o.dirname(e);
            return i.existsSync(c) || a(c), i.symlinkSync(t, e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(0),
        o = n(2),
        i = n(8).pathExists;
    t.exports = {
        symlinkPaths: function(t, e, n) {
            if (r.isAbsolute(t)) return o.lstat(t, e => e ? (e.message = e.message.replace("lstat", "ensureSymlink"), n(e)) : n(null, {
                toCwd: t,
                toDst: t
            })); {
                const s = r.dirname(e),
                    c = r.join(s, t);
                return i(c, (e, i) => e ? n(e) : i ? n(null, {
                    toCwd: c,
                    toDst: t
                }) : o.lstat(t, e => e ? (e.message = e.message.replace("lstat", "ensureSymlink"), n(e)) : n(null, {
                    toCwd: t,
                    toDst: r.relative(s, t)
                })))
            }
        },
        symlinkPathsSync: function(t, e) {
            let n;
            if (r.isAbsolute(t)) {
                if (n = o.existsSync(t), !n) throw new Error("absolute srcpath does not exist");
                return {
                    toCwd: t,
                    toDst: t
                }
            } {
                const i = r.dirname(e),
                    s = r.join(i, t);
                if (n = o.existsSync(s), n) return {
                    toCwd: s,
                    toDst: t
                };
                if (n = o.existsSync(t), !n) throw new Error("relative srcpath does not exist");
                return {
                    toCwd: t,
                    toDst: r.relative(i, t)
                }
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2);
    t.exports = {
        symlinkType: function(t, e, n) {
            if (n = "function" == typeof e ? e : n, e = "function" != typeof e && e) return n(null, e);
            r.lstat(t, (t, r) => {
                if (t) return n(null, "file");
                e = r && r.isDirectory() ? "dir" : "file", n(null, e)
            })
        },
        symlinkTypeSync: function(t, e) {
            let n;
            if (e) return e;
            try {
                n = r.lstatSync(t)
            } catch {
                return "file"
            }
            return n && n.isDirectory() ? "dir" : "file"
        }
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromPromise,
        o = n(160);
    o.outputJson = r(n(162)), o.outputJsonSync = n(163), o.outputJSON = o.outputJson, o.outputJSONSync = o.outputJsonSync, o.writeJSON = o.writeJson, o.writeJSONSync = o.writeJsonSync, o.readJSON = o.readJson, o.readJSONSync = o.readJsonSync, t.exports = o
}, function(t, e, n) {
    "use strict";
    const r = n(161);
    t.exports = {
        readJson: r.readFile,
        readJsonSync: r.readFileSync,
        writeJson: r.writeFile,
        writeJsonSync: r.writeFileSync
    }
}, function(t, e, n) {
    let r;
    try {
        r = n(2)
    } catch (t) {
        r = n(55)
    }
    const o = n(3),
        {
            stringify: i,
            stripBom: s
        } = n(34);
    const c = {
        readFile: o.fromPromise((async function(t, e = {}) {
            "string" == typeof e && (e = {
                encoding: e
            });
            const n = e.fs || r,
                i = !("throws" in e) || e.throws;
            let c, a = await o.fromCallback(n.readFile)(t, e);
            a = s(a);
            try {
                c = JSON.parse(a, e ? e.reviver : null)
            } catch (e) {
                if (i) throw e.message = `${t}: ${e.message}`, e;
                return null
            }
            return c
        })),
        readFileSync: function(t, e = {}) {
            "string" == typeof e && (e = {
                encoding: e
            });
            const n = e.fs || r,
                o = !("throws" in e) || e.throws;
            try {
                let r = n.readFileSync(t, e);
                return r = s(r), JSON.parse(r, e.reviver)
            } catch (e) {
                if (o) throw e.message = `${t}: ${e.message}`, e;
                return null
            }
        },
        writeFile: o.fromPromise((async function(t, e, n = {}) {
            const s = n.fs || r,
                c = i(e, n);
            await o.fromCallback(s.writeFile)(t, c, n)
        })),
        writeFileSync: function(t, e, n = {}) {
            const o = n.fs || r,
                s = i(e, n);
            return o.writeFileSync(t, s, n)
        }
    };
    t.exports = c
}, function(t, e, n) {
    "use strict";
    const {
        stringify: r
    } = n(34), {
        outputFile: o
    } = n(35);
    t.exports = async function(t, e, n = {}) {
        const i = r(e, n);
        await o(t, i, n)
    }
}, function(t, e, n) {
    "use strict";
    const {
        stringify: r
    } = n(34), {
        outputFileSync: o
    } = n(35);
    t.exports = function(t, e, n) {
        const i = r(e, n);
        o(t, i, n)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {
        moveSync: n(165)
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(0),
        i = n(58).copySync,
        s = n(20).removeSync,
        c = n(6).mkdirpSync,
        a = n(11);

    function u(t, e, n) {
        try {
            r.renameSync(t, e)
        } catch (r) {
            if ("EXDEV" !== r.code) throw r;
            return function(t, e, n) {
                return i(t, e, {
                    overwrite: n,
                    errorOnExist: true
                }), s(t)
            }(t, e, n)
        }
    }
    t.exports = function(t, e, n) {
        const i = (n = n || {}).overwrite || n.clobber || !1,
            {
                srcStat: l,
                isChangingCase: f = !1
            } = a.checkPathsSync(t, e, "move", n);
        return a.checkParentPathsSync(t, l, e, "move"),
            function(t) {
                const e = o.dirname(t);
                return o.parse(e).root === e
            }(e) || c(o.dirname(e)),
            function(t, e, n, o) {
                if (o) return u(t, e, n);
                if (n) return s(e), u(t, e, n);
                if (r.existsSync(e)) throw new Error("dest already exists.");
                return u(t, e, n)
            }(t, e, i, f)
    }
}, function(t, e, n) {
    "use strict";
    const r = n(3).fromCallback;
    t.exports = {
        move: r(n(167))
    }
}, function(t, e, n) {
    "use strict";
    const r = n(2),
        o = n(0),
        i = n(60).copy,
        s = n(20).remove,
        c = n(6).mkdirp,
        a = n(8).pathExists,
        u = n(11);

    function l(t, e, n, r, o) {
        return r ? f(t, e, n, o) : n ? s(e, r => r ? o(r) : f(t, e, n, o)) : void a(e, (r, i) => r ? o(r) : i ? o(new Error("dest already exists.")) : f(t, e, n, o))
    }

    function f(t, e, n, o) {
        r.rename(t, e, r => r ? "EXDEV" !== r.code ? o(r) : function(t, e, n, r) {
            i(t, e, {
                overwrite: n,
                errorOnExist: !0
            }, e => e ? r(e) : s(t, r))
        }(t, e, n, o) : o())
    }
    t.exports = function(t, e, n, r) {
        "function" == typeof n && (r = n, n = {});
        const i = n.overwrite || n.clobber || !1;
        u.checkPaths(t, e, "move", n, (n, s) => {
            if (n) return r(n);
            const {
                srcStat: a,
                isChangingCase: f = !1
            } = s;
            u.checkParentPaths(t, a, e, "move", n => n ? r(n) : function(t) {
                const e = o.dirname(t);
                return o.parse(e).root === e
            }(e) ? l(t, e, i, f, r) : void c(o.dirname(e), n => n ? r(n) : l(t, e, i, f, r)))
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
            void 0 === r && (r = n), Object.defineProperty(t, r, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        } : function(t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }),
        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        } : function(t, e) {
            t.default = e
        }),
        i = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) "default" !== n && Object.hasOwnProperty.call(t, n) && r(e, t, n);
            return o(e, t), e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.JupyterRevealViewer = void 0;
    const s = n(1),
        c = n(4),
        a = i(n(54)),
        u = i(n(0));
    class l {
        constructor() {
            this.disposables = [], this.disposables.push(s.commands.registerCommand("jupyter.previewSlides", this.showHtml, this))
        }
        static register() {
            c.registerDisposable(new l)
        }
        dispose() {
            c.disposeAllDisposables(this.disposables)
        }
        async showHtml(t) {
            if (!t || !t.fsPath.toLowerCase().endsWith(".html")) return;
            const e = this.getOrCreatePanel();
            let n = await a.readFile(t.fsPath, {
                encoding: "utf8"
            });
            const r = `\n            <meta http-equiv="Content-Security-Policy" content="img-src 'self' data: https: http: blob: ${e.webview.cspSource}; default-src 'unsafe-inline' 'unsafe-eval' data: https: http: blob: ${e.webview.cspSource};">\n        `;
            n = n.replace("<head>", "<head>" + r), e.webview.html = n, e.title = u.basename(t.fsPath), e.visible || e.reveal()
        }
        getOrCreatePanel() {
            return this.webviewPanel || (this.webviewPanel = s.window.createWebviewPanel("jupyter-slideshow", "Cat Coding", s.ViewColumn.Beside, {
                enableScripts: !0,
                retainContextWhenHidden: !0
            }), this.disposables.push(this.webviewPanel), this.webviewPanel.onDidDispose(() => {
                this.webviewPanel = void 0
            }, this, this.disposables)), this.webviewPanel
        }
    }
    e.JupyterRevealViewer = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SlideStatusbarProvider = void 0;
    const r = n(1),
        o = n(9),
        i = n(4),
        s = n(61);
    class c {
        constructor() {
            this._onDidChangeCellStatusBarItems = new r.EventEmitter, this.disposables = [], r.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this.disposables)
        }
        get onDidChangeCellStatusBarItems() {
            return this._onDidChangeCellStatusBarItems.event
        }
        static register() {
            const t = new c;
            i.registerDisposable(t), r.notebook.registerNotebookCellStatusBarItemProvider({
                viewType: i.JupyterNotebookView
            }, t)
        }
        dispose() {
            this._onDidChangeCellStatusBarItems.dispose()
        }
        provideCellStatusBarItems(t, e) {
            var n;
            if (!i.isJupyterNotebook(t.notebook)) return [];
            if (!r.workspace.getConfiguration("jupyter").get("showCellSlidesStatusbar", !0)) return [];
            const c = o.createJupyterCellFromVSCNotebookCell(t);
            if (!c) return [];
            const a = s.getSlideDisplayName(null === (n = c.metadata.slideshow) || void 0 === n ? void 0 : n.slide_type),
                u = a ? `Cell appears as '${a}' in a slideshow, click to change.` : "Configure cell appearance in a slideshow";
            return [new r.NotebookCellStatusBarItem(a || "<configure slide>", r.NotebookCellStatusBarAlignment.Right, "jupyter.cell.changeSlideType", u, 9999999999)]
        }
        onDidChangeConfiguration(t) {
            t.affectsConfiguration("jupyter.showCellSlidesStatusbar") && this._onDidChangeCellStatusBarItems.fire()
        }
    }
    e.SlideStatusbarProvider = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FeatureManager = void 0;
    const r = n(1);
    e.FeatureManager = class {
        static async hideCellSlidesFromStatusbar() {
            await r.workspace.getConfiguration("jupyter").update("showCellSlidesStatusbar", !1, r.ConfigurationTarget.Global)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CellTagMetadataManager = void 0;
    const r = n(1),
        o = n(33),
        i = n(9),
        s = n(4);
    class c {
        constructor() {
            this.disposables = [], this.disposables.push(r.commands.registerCommand("jupyter.cell.addCellTag", this.addCellTag, this)), this.disposables.push(r.commands.registerCommand("jupyter.cell.deleteCellTag", this.deleteCellTag, this))
        }
        static register() {
            s.registerDisposable(new c)
        }
        dispose() {
            s.disposeAllDisposables(this.disposables)
        }
        async addCellTag(t) {
            if (!s.isJupyterNotebook(t.notebook)) return;
            const e = i.createJupyterCellFromVSCNotebookCell(t),
                n = new Set;
            t.notebook.getCells().forEach(t => (i.createJupyterCellFromVSCNotebookCell(t).metadata.tags || []).forEach(t => n.add(t)));
            const r = e.metadata.tags || [],
                c = (await this.promptForCellTag(Array.from(n).filter(t => !r.includes(t)))).filter(t => !r.includes(t));
            0 !== c.length && await o.CellMetadataManager.updateCellTagsMetadata(t, r.concat(c))
        }
        async deleteCellTag(t) {
            if (!s.isJupyterNotebook(t.notebook)) return;
            const e = i.createJupyterCellFromVSCNotebookCell(t).metadata.tags || [];
            if (0 === e.length) return;
            const n = await r.window.showQuickPick(e, {
                placeHolder: "Select a tag to delete"
            });
            n && await o.CellMetadataManager.updateCellTagsMetadata(t, e.filter(t => t !== n))
        }
        async promptForCellTag(t) {
            return new Promise(e => {
                const n = r.window.createQuickPick();
                n.items = t.map(t => ({
                    label: t
                })), n.matchOnDescription = !0, n.canSelectMany = !0, n.matchOnDetail = !0, n.placeholder = t.length ? "Select an existing tag or add a new tag" : "Add a new tag", n.sortByLabel = !0, n.onDidAccept(() => {
                    n.hide(), n.selectedItems.length ? e(n.selectedItems.map(t => t.label)) : e(n.value ? [n.value] : [])
                }), n.onDidHide(() => e([])), n.show()
            })
        }
    }
    e.CellTagMetadataManager = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TracebackGoToHandler = void 0;
    const r = n(1),
        o = n(4);
    class i {
        constructor() {
            this.disposables = [], this.disposables.push(r.commands.registerCommand("jupyter.output.goToErrorLine", this.goToErrorLine, this))
        }
        static register() {
            o.registerDisposable(new i)
        }
        dispose() {
            o.disposeAllDisposables(this.disposables)
        }
        async goToErrorLine(t) {
            var e;
            const n = null === (e = r.window.activeNotebookEditor) || void 0 === e ? void 0 : e.document;
            if (!n || !o.isJupyterNotebook(n)) return;
            const {
                lineNumber: i,
                text: s
            } = this.parseErrorLine(t);
            let c = !1;
            n.getCells().forEach(async t => {
                if (c || t.document.lineCount < i) return;
                const e = t.document.lineAt(i).text;
                if (e.trim() === s) {
                    const n = e.indexOf(s);
                    c = !0;
                    const o = new r.WorkspaceEdit;
                    o.replace(t.document.uri, new r.Range(i - 1, n, i - 1, n), ""), await r.workspace.applyEdit(o)
                }
            })
        }
        parseErrorLine(t) {
            const e = t.indexOf(" ");
            return {
                lineNumber: parseInt(t.substring(0, e), 10),
                text: t.substring(e + 1)
            }
        }
    }
    e.TracebackGoToHandler = i
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ProblemsProvider = void 0;
    const r = n(1),
        o = n(36),
        i = n(4),
        s = n(174);
    class c {
        constructor() {
            this.disposables = [], this.documentCellUris = new WeakMap, this.diagnostics = r.languages.createDiagnosticCollection("Jupyter Notebook"), r.notebook.onDidOpenNotebookDocument(this.onDidOpenNotebook, this, this.disposables), r.notebook.onDidChangeCellOutputs(this.onDidChangeCellOutputs, this, this.disposables), r.notebook.onDidChangeNotebookCells(this.onDidChangeNotebookCells, this, this.disposables), r.notebook.onDidCloseNotebookDocument(this.onDidCloseNotebookDocument, this, this.disposables), r.workspace.onDidChangeTextDocument(this.onDidChangeTextDocument, this, this.disposables)
        }
        static register() {
            i.registerDisposable(new c)
        }
        dispose() {
            this.diagnostics.dispose(), i.disposeAllDisposables(this.disposables)
        }
        onDidOpenNotebook(t) {
            i.isJupyterNotebook(t) && (this.documentCellUris.set(t, new Set), this.provideProblems(t))
        }
        onDidCloseNotebookDocument(t) {
            if (!i.isJupyterNotebook(t)) return;
            const e = this.documentCellUris.get(t);
            e && Array.from(e).forEach(t => this.diagnostics.delete(t))
        }
        onDidChangeTextDocument(t) {
            if (!t.document.notebook || !i.isJupyterNotebook(t.document.notebook)) return;
            const e = t.document.notebook.getCells().find(e => e.document === t.document);
            e && this.provideProblemsForCell(e)
        }
        onDidChangeNotebookCells(t) {
            i.isJupyterNotebook(t.document) && t.changes.forEach(t => {
                t.deletedItems.forEach(t => this.diagnostics.delete(t.document.uri)), t.items.forEach(t => this.provideProblemsForCell(t))
            })
        }
        onDidChangeCellOutputs(t) {
            i.isJupyterNotebook(t.document) && t.cells.forEach(t => this.provideProblemsForCell(t))
        }
        provideProblems(t) {
            t.getCells().forEach(t => this.provideProblemsForCell(t))
        }
        provideProblemsForCell(t) {
            this.diagnostics.delete(t.document.uri);
            const e = t.outputs.find(t => t.outputs.find(t => t.mime === o.CellOutputMimeTypes.error)),
                n = null == e ? void 0 : e.outputs.find(t => t.mime === o.CellOutputMimeTypes.error);
            if (!n) return;
            const i = n.value,
                c = function(t) {
                    let e = !1,
                        n = "";
                    const r = [];
                    let o;
                    if ((t.traceback || []).map(t => s(t)).forEach(t => {
                            n || (t.includes("<ipython-input") || e) && (e = !0, t.split("\n").filter(t => t.length).forEach(t => r.push(t)))
                        }), r.length >= 2) {
                        r.shift();
                        const e = r.pop() || "";
                        e.trim().startsWith(t.ename) && (o = e)
                    }
                    if (0 === r.length) return;
                    const i = r[r.length - 1];
                    i.startsWith("----\x3e") && (n = i.substring("----\x3e".length + 1));
                    if (!n && i.includes("^") && r.length > 1) return {
                        text: r[r.length - 2],
                        errorMessage: o
                    };
                    if (n) {
                        const t = n.indexOf(" "),
                            e = parseInt(n.substring(0, t), 10),
                            r = n.substring(t + 1);
                        return {
                            lineNumber: e,
                            text: r,
                            errorMessage: o
                        }
                    }
                }(i);
            if (c) {
                if (c.lineNumber && t.document.lineCount < c.lineNumber) return;
                if (c.lineNumber) {
                    const e = t.document.lineAt(c.lineNumber - 1).text;
                    if (e.trim() === c.text.trim()) {
                        const n = e.indexOf(c.text.trim()),
                            o = new r.Range(c.lineNumber - 1, n, c.lineNumber - 1, n + c.text.trim().length),
                            s = c.errorMessage || `${i.ename}: ${i.evalue}`,
                            a = [new r.Diagnostic(o, s)];
                        this.documentCellUris.has(t.notebook) || this.documentCellUris.set(t.notebook, new Set);
                        this.documentCellUris.get(t.notebook).add(t.document.uri), this.diagnostics.set(t.document.uri, a)
                    }
                } else
                    for (let e = 0; e < t.document.lineCount; e++) {
                        const n = t.document.lineAt(e).text;
                        if (n.trim() === c.text.trim()) {
                            const o = n.indexOf(c.text.trim()),
                                s = new r.Range(e, o, e, o + c.text.trim().length),
                                a = c.errorMessage || `${i.ename}: ${i.evalue}`,
                                u = [new r.Diagnostic(s, a)];
                            this.documentCellUris.has(t.notebook) || this.documentCellUris.set(t.notebook, new Set);
                            this.documentCellUris.get(t.notebook).add(t.document.uri), this.diagnostics.set(t.document.uri, u);
                            break
                        }
                    }
            }
        }
    }
    e.ProblemsProvider = c
}, function(t, e, n) {
    "use strict";
    const r = n(175);
    t.exports = t => "string" == typeof t ? t.replace(r(), "") : t
}, function(t, e, n) {
    "use strict";
    t.exports = ({
        onlyFirst: t = !1
    } = {}) => {
        const e = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(e, t ? void 0 : "g")
    }
}]);
//# sourceMappingURL=index.js.map