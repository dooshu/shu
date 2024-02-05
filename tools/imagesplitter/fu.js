!
function ($) {
    "use strict";
    $.fn.fileuploader = function (q) {
        return this.each(function (t, r) {
            var s = $(r),
                p = null,
                o = null,
                l = null,
                sl = [],
                n = $.extend(!0, {}, $.fn.fileuploader.defaults, q),
                f = {
                    init: function () {
                        return s.closest(".fileuploader").length || s.wrap('<div class="fileuploader"></div>'),
                        p = s.closest(".fileuploader"),
                        f.set("attrOpts"),
                        f.isSupported() ? (!n.beforeRender || !$.isFunction(n.beforeRender) || !1 !== n.beforeRender(p, s)) && (f.redesign(), n.files && f.files.append(n.files), f.rendered = !0, n.afterRender && $.isFunction(n.afterRender) && n.afterRender(l, p, o, s), void(f.disabled || f.bindUnbindEvents(!0))) : (n.onSupportError && $.isFunction(n.onSupportError) && n.onSupportError(p, s), !1)
                    },
                    bindUnbindEvents: function (e) {
                        e && f.bindUnbindEvents(!1),
                        s[e ? "on" : "off"](f._assets.getAllEvents(), f.onEvent),
                        n.changeInput && o !== s && o[e ? "on" : "off"]("click", f.clickHandler),
                        n.dragDrop && n.dragDrop.container.length && (n.dragDrop.container[e ? "on" : "off"]("drag dragstart dragend dragover dragenter dragleave drop", function (e) {
                            e.preventDefault()
                        }), n.dragDrop.container[e ? "on" : "off"]("drop", f.dragDrop.onDrop), n.dragDrop.container[e ? "on" : "off"]("dragover", f.dragDrop.onDragEnter), n.dragDrop.container[e ? "on" : "off"]("dragleave", f.dragDrop.onDragLeave)),
                        f.isUploadMode() && n.clipboardPaste && $(window)[e ? "on" : "off"]("paste", f.clipboard.paste),
                        n.sorter && n.thumbnails && n.thumbnails._selectors.sorter && f.sorter[e ? "init" : "destroy"](),
                        s.closest("form")[e ? "on" : "off"]("reset", f.reset)
                    },
                    redesign: function () {
                        if (o = s, n.theme && p.addClass("fileuploader-theme-" + n.theme), n.changeInput) {
                            switch ((typeof n.changeInput).toLowerCase()) {
                            case "boolean":
                                o = $('<div class="fileuploader-input"><div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div><div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + "</span></div></div>");
                                break;
                            case "string":
                                " " != n.changeInput && (o = $(f._assets.textParse(n.changeInput, n)));
                                break;
                            case "object":
                                o = $(n.changeInput);
                                break;
                            case "function":
                                o = $(n.changeInput(s, p, n, f._assets.textParse))
                            }
                            s.after(o),
                            s.css({
                                position: "absolute",
                                "z-index": "-9999",
                                height: "0",
                                width: "0",
                                padding: "0",
                                margin: "0",
                                "line-height": "0",
                                outline: "0",
                                border: "0",
                                opacity: "0"
                            })
                        }
                        n.thumbnails && f.thumbnails.create(),
                        n.dragDrop && (n.dragDrop = "object" != typeof n.dragDrop ? {
                            container: null
                        } : n.dragDrop, n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o)
                    },
                    clickHandler: function (e) {
                        e.preventDefault(),
                        f.clipboard._timer ? f.clipboard.clean() : s.click()
                    },
                    onEvent: function (e) {
                        switch (e.type) {
                        case "focus":
                            p && p.addClass("fileuploader-focused");
                            break;
                        case "blur":
                            p && p.removeClass("fileuploader-focused");
                            break;
                        case "change":
                            f.onChange.call(this)
                        }
                        n.listeners && $.isFunction(n.listeners[e.type]) && n.listeners[e.type].call(s, p)
                    },
                    set: function (e, t) {
                        switch (e) {
                        case "attrOpts":
                            for (var r = ["limit", "maxSize", "fileMaxSize", "extensions", "changeInput", "theme", "addMore", "listInput", "files"], i = 0; i < r.length; i++) {
                                var a = "data-fileuploader-" + r[i];
                                if (f._assets.hasAttr(a)) switch (r[i]) {
                                case "changeInput":
                                case "addMore":
                                case "listInput":
                                    n[r[i]] = ["true", "false"].indexOf(s.attr(a)) > -1 ? "true" == s.attr(a) : s.attr(a);
                                    break;
                                case "extensions":
                                    n[r[i]] = s.attr(a).replace(/ /g, "").split(",");
                                    break;
                                case "files":
                                    n[r[i]] = JSON.parse(s.attr(a));
                                    break;
                                default:
                                    n[r[i]] = s.attr(a)
                                }
                                s.removeAttr(a)
                            }
                            null == s.attr("disabled") && null == s.attr("readonly") && 0 !== n.limit || (f.disabled = !0),
                            (!n.limit || n.limit && n.limit >= 2) && (s.attr("multiple", "multiple"), n.inputNameBrackets && "[]" != s.attr("name").slice(-2) && s.attr("name", s.attr("name") + "[]")),
                            !0 === n.listInput && (n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr("name").replace("[]", "").split("[").pop().replace("]", "") + '">').insertBefore(s)),
                            "string" == typeof n.listInput && 0 == $(n.listInput).length && (n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s)),
                            f.set("disabled", f.disabled),
                            !n.fileMaxSize && n.maxSize && (n.fileMaxSize = n.maxSize);
                            break;
                        case "disabled":
                            f.disabled = t,
                            p[f.disabled ? "addClass" : "removeClass"]("fileuploader-disabled"),
                            s[f.disabled ? "attr" : "removeAttr"]("disabled", "disabled"),
                            f.rendered && f.bindUnbindEvents(!t);
                            break;
                        case "feedback":
                            t || (t = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {
                                length: f._itFl.length
                            })),
                            $(!o.is(":file")) && o.find(".fileuploader-input-caption span").html(t);
                            break;
                        case "input":
                            var l = f._assets.copyAllAttributes($('<input type="file">'), s, !0);
                            f.bindUnbindEvents(!1),
                            s.after(s = l).remove(),
                            f.bindUnbindEvents(!0);
                            break;
                        case "prevInput":
                            sl.length > 0 && (f.bindUnbindEvents(!1), sl[t].remove(), sl.splice(t, 1), s = sl[sl.length - 1], f.bindUnbindEvents(!0));
                            break;
                        case "nextInput":
                            l = f._assets.copyAllAttributes($('<input type="file">'), s);
                            f.bindUnbindEvents(!1),
                            sl.length > 0 && 0 == sl[sl.length - 1].get(0).files.length ? s = sl[sl.length - 1] : (-1 == sl.indexOf(s) && sl.push(s), sl.push(l), s.after(s = l)),
                            f.bindUnbindEvents(!0);
                            break;
                        case "listInput":
                            n.listInput && n.listInput.val(f.files.list(!0, null, !1, t))
                        }
                    },
                    onChange: function (e, t) {
                        var r = s.get(0).files;
                        if (t) {
                            if (!t.length) return f.set("input", ""),
                            f.files.clear(),
                            !1;
                            r = t
                        }
                        if (f.clipboard._timer && f.clipboard.clean(), !f.isDefaultMode() || (f.reset(), 0 != r.length)) {
                            if (n.beforeSelect && $.isFunction(n.beforeSelect) && 0 == n.beforeSelect(r, l, p, o, s)) return !1;
                            for (var i = 0, a = 0; a < r.length; a++) {
                                var d = r[a],
                                    u = f._itFl[f.files.add(d, "choosed")],
                                    c = f.files.check(u, r, 0 == a);
                                if (!0 === c) n.thumbnails && f.thumbnails.item(u),
                                f.isUploadMode() && f.upload.prepare(u),
                                n.onSelect && $.isFunction(n.onSelect) && n.onSelect(u, l, p, o, s),
                                i++;
                                else if (f.files.remove(u, !0), c[2] || (f.isDefaultMode() && (f.set("input", ""), f.reset(), c[3] = !0), c[1] && n.dialogs.alert(c[1], u, l, p, o, s)), c[3]) break
                            }
                            f.isUploadMode() && i > 0 && f.set("input", ""),
                            f.set("feedback", null),
                            f.isAddMoreMode() && i > 0 && f.set("nextInput"),
                            f.set("listInput", null),
                            n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s)
                        }
                    },
                    thumbnails: {
                        create: function () {
                            null != n.thumbnails.beforeShow && $.isFunction(n.thumbnails.beforeShow) && n.thumbnails.beforeShow(p, o, s);
                            var e = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
                            l = e.is(n.thumbnails._selectors.list) ? e : e.find(n.thumbnails._selectors.list),
                            f.isUploadMode() && n.thumbnails._selectors.start && l.on("click", n.thumbnails._selectors.start, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    o = f.files.find(t);
                                o && f.upload.send(o, !0)
                            }),
                            f.isUploadMode() && n.thumbnails._selectors.retry && l.on("click", n.thumbnails._selectors.retry, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    o = f.files.find(t);
                                o && f.upload.retry(o)
                            }),
                            n.thumbnails._selectors.remove && l.on("click", n.thumbnails._selectors.remove, function (e) {
                                if (e.preventDefault(), f.locked) return !1;
                                var t = $(this).closest(n.thumbnails._selectors.item),
                                    o = f.files.find(t),
                                    r = function (e) {
                                        f.files.remove(o)
                                    };
                                o && (o.upload && "successful" != o.upload.status ? f.upload.cancel(o) : n.thumbnails.removeConfirmation ? n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, o), r) : r())
                            })
                        },
                        clear: function () {
                            l && l.html("")
                        },
                        item: function (e, t) {
                            e.icon = f.thumbnails.generateFileIcon(e.format, e.extension),
                            e.image = '<div class="fileuploader-item-image"></div>',
                            e.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : "",
                            e.html = $(f._assets.textParse(e.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, e)),
                            e.progressBar = e.html.find(".fileuploader-progressbar"),
                            e.html.addClass("file-type-" + (e.format ? e.format : "no") + " file-ext-" + (e.extension ? e.extension : "no")),
                            t ? t.replaceWith(e.html) : e.html[n.thumbnails.itemPrepend ? "prependTo" : "appendTo"](l),
                            f.thumbnails.renderThumbnail(e),
                            e.renderThumbnail = function (t) {
                                t && e.popup && e.popup.close && (e.popup.close(), e.popup = {
                                    open: e.popup.open
                                }),
                                f.thumbnails.renderThumbnail(e, !0, t)
                            },
                            n.thumbnails.popup && (e.popup = {
                                open: function () {
                                    f.thumbnails.popup(e)
                                }
                            }),
                            null != n.thumbnails.onItemShow && $.isFunction(n.thumbnails.onItemShow) && n.thumbnails.onItemShow(e, l, p, o, s)
                        },
                        generateFileIcon: function (e, t) {
                            var o = '<div style="${style}" class="fileuploader-item-icon${class}"><i>' + (t || "") + "</i></div>",
                                n = f._assets.textToColor(t);
                            n && (f._assets.isBrightColor(n) && (o = o.replace("${class}", " is-bright-color")), o = o.replace("${style}", "background-color: " + n));
                            return o.replace("${style}", "").replace("${class}", "")
                        },
                        renderThumbnail: function (e, t, r) {
                            var i = e.html.find(".fileuploader-item-image"),
                                a = e.data && e.data.readerSkip,
                                d = function (t) {
                                    var r = $(t);
                                    i.removeClass("fileuploader-no-thumbnail fileuploader-loading").html(r),
                                    r.is("img") && r.attr("draggable", "false").on("load error", function (t) {
                                        "error" == t.type && u(!0),
                                        c(),
                                        null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s)
                                    }),
                                    r.is("canvas") && null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s)
                                },
                                u = function (t) {
                                    i.addClass("fileuploader-no-thumbnail"),
                                    i.removeClass("fileuploader-loading").html(e.icon),
                                    t && null != n.thumbnails.onImageLoaded && $.isFunction(n.thumbnails.onImageLoaded) && n.thumbnails.onImageLoaded(e, l, p, o, s)
                                },
                                c = function () {
                                    var t = 0;
                                    if (e && f._pfrL.indexOf(e) > -1) for (f._pfrL.splice(f._pfrL.indexOf(e), 1); t < f._pfrL.length;) {
                                        if (f._itFl.indexOf(f._pfrL[t]) > -1) {
                                            f.thumbnails.renderThumbnail(f._pfrL[t], !0);
                                            break
                                        }
                                        f._pfrL.splice(t, 1),
                                        t++
                                    }
                                };
                            if (i.length) {
                                    if (e.image = i.html("").addClass("fileuploader-loading"), (["image", "video", "audio", "astext"].indexOf(e.format) > -1 || e.data.thumbnail) && f.isFileReaderSupported() && !a && (e.appended || n.thumbnails.startImageRenderer || t)) {
                                        if (n.thumbnails.synchronImages && (-1 == f._pfrL.indexOf(e) && !t && f._pfrL.push(e), f._pfrL.length > 1 && !t)) return;
                                        var h = function (t, o) {
                                            var r = t.nodeName && "img" == t.nodeName.toLocaleLowerCase(),
                                                a = r ? t.src : t;
                                            if (n.thumbnails.canvasImage) {
                                                    var l = document.createElement("canvas"),
                                                        s = r ? t : new Image,
                                                        p = function () {
                                                            f.editor.resize(s, l, n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : i.width(), n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : i.height(), !1, !0),
                                                            f._assets.isBlankCanvas(l) ? u() : d(l),
                                                            c()
                                                        },
                                                        h = function (e) {
                                                            u(!0),
                                                            c(),
                                                            s = null
                                                        };
                                                    if ("image" == e.format && o && e.reader.node) return s = e.reader.node,
                                                    p();
                                                    if (!a) return h();
                                                    if (r) return p.call(t);
                                                    s.onload = p,
                                                    s.onerror = h,
                                                    e.data && e.data.readerCrossOrigin && s.setAttribute("crossOrigin", e.data.readerCrossOrigin),
                                                    s.src = a
                                                } else d(r ? t : '<img src="' + a + '">')
                                        };
                                        return ("string" == typeof r || "object" == typeof r) ? h(r) : f.files.read(e, function () {
                                            e.reader.node && n.thumbnails.popup && e.html.addClass("file-has-popup"),
                                            e.reader.node && (e.reader.frame || "img" == e.reader.node.nodeName.toLowerCase()) ? h(e.reader.frame || e.reader.src, !0) : (u("image" == e.format), c())
                                        }, null, r, !0)
                                    }
                                    u()
                                } else c()
                        },
                        popup: function (e, t) {
                            if (n.thumbnails.popup && n.thumbnails._selectors.popup) {
                                var r = $(n.thumbnails.popup.container),
                                    i = r.find(".fileuploader-popup"),
                                    a = function () {
                                        var a = e.popup.html || $(f._assets.textParse(n.thumbnails.popup.template, e)),
                                            d = e.popup.html !== a,
                                            u = function (t) {
                                                var o = t.which || t.keyCode;
                                                27 == o && e.popup && e.popup.close && e.popup.close(),
                                                37 != o && 39 != o || !n.thumbnails.popup.arrows || e.popup.move(37 == o ? "prev" : "next")
                                            };
                                        i.removeClass("loading"),
                                        i.children(n.thumbnails._selectors.popup).length && ($.each(f._itFl, function (o, n) {
                                                n != e && n.popup && n.popup.close && n.popup.close(t)
                                            }), i.find(n.thumbnails._selectors.popup).remove()),
                                        a.show().appendTo(i),
                                        e.popup.html = a,
                                        e.popup.move = function (t) {
                                                var o = f._itFl.indexOf(e),
                                                    r = null,
                                                    i = !1;
                                                if ("prev" == t) for (var a = o; a >= 0; a--) {
                                                        if ((l = f._itFl[a]) != e && l.popup && l.html.hasClass("file-has-popup")) {
                                                            r = l;
                                                            break
                                                        }
                                                        0 != a || r || i || !n.thumbnails.popup.loop || (a = f._itFl.length, i = !0)
                                                    }
                                                else for (a = o; a < f._itFl.length; a++) {
                                                        var l;
                                                        if ((l = f._itFl[a]) != e && l.popup && l.html.hasClass("file-has-popup")) {
                                                            r = l;
                                                            break
                                                        }
                                                        a + 1 != f._itFl.length || r || i || !n.thumbnails.popup.loop || (a = -1, i = !0)
                                                    }
                                                r && f.thumbnails.popup(r, !0)
                                            },
                                        e.popup.close = function (t) {
                                                e.reader.node && e.reader.node.pause && e.reader.node.pause(),
                                                $(window).off("keyup", u),
                                                r.css({
                                                    overflow: "",
                                                    width: ""
                                                }),
                                                e.popup.editor && e.popup.editor.cropper && e.popup.editor.cropper.hide(),
                                                e.popup.html && n.thumbnails.popup.onHide && $.isFunction(n.thumbnails.popup.onHide) ? n.thumbnails.popup.onHide(e, l, p, o, s) : e.popup.html && e.popup.html.remove(),
                                                t || i.fadeOut(400, function () {
                                                    i.remove()
                                                }),
                                                delete e.popup.close
                                            },
                                        e.reader.node ? (d && a.find(".fileuploader-popup-node").html(e.reader.node), e.reader.node.controls = !0, e.reader.node.currentTime = 0, e.reader.node.play && e.reader.node.play()) : a.find(".fileuploader-popup-node").html('<div class="fileuploader-popup-file-icon">' + e.icon + "</div>"),
                                        $(window).on("keyup", u),
                                        r.css({
                                                overflow: "hidden",
                                                width: r.innerWidth()
                                            });
                                        var c = e.popup.html.find('[data-action="prev"], [data-action="next"]').show();
                                        1 == f._itFl.length && c.hide(),
                                        n.thumbnails.popup.arrows ? n.thumbnails.popup.loop || (c.show(), 0 == f._itFl.indexOf(e) && e.popup.html.find('[data-action="prev"]').hide(), f._itFl.indexOf(e) == f._itFl.length - 1 && e.popup.html.find('[data-action="next"]').hide()) : c.remove(),
                                        e.editor && e.popup.editor && e.popup.editor.hasChanges ? (e.popup.editor && e.popup.editor.rotation && f.editor.rotate(e, e.editor.rotation || 0, !0), e.popup.editor && e.popup.editor.cropper && (e.popup.editor.cropper.hide(!0), setTimeout(function () {
                                                f.editor.crop(e, e.editor.crop ? $.extend({}, e.editor.crop) : e.popup.editor.cropper.setDefaultData())
                                            }, 100))) : e.popup.editor = {},
                                        n.thumbnails.popup.onShow && $.isFunction(n.thumbnails.popup.onShow) && n.thumbnails.popup.onShow(e, l, p, o, s)
                                    };
                                0 == i.length && (i = $('<div class="fileuploader-popup"></div>').appendTo(r)),
                                i.fadeIn(400).addClass("loading"),
                                ["image", "video", "audio", "astext"].indexOf(e.format) > -1 && !e.popup.html ? f.files.read(e, a) : a()
                            }
                        }
                    },
                    editor: {
                        rotate: function (e, t, o) {
                            if (!(e.popup && void 0 !== e.popup.html)) {
                                var n = e.editor.rotation || 0;
                                return e.editor.rotation = t || n + 90
                            }
                            if (!e.popup.editor.isAnimating) {
                                e.popup.editor.isAnimating = !0;
                                var r = e.popup.html.find(".fileuploader-popup-node"),
                                    i = r.find("> img"),
                                    a = {
                                        rotation: n = e.popup.editor.rotation || 0,
                                        scale: e.popup.editor.scale || 1
                                    };
                                e.popup.editor.cropper && e.popup.editor.cropper.$template.hide(),
                                e.popup.editor.rotation = o ? t : n + 90,
                                e.popup.editor.scale = (r.height() / i[[90, 270].indexOf(e.popup.editor.rotation) > -1 ? "width" : "height"]()).toFixed(3),
                                i.height() * e.popup.editor.scale > r.width() && [90, 270].indexOf(e.popup.editor.rotation) > -1 && (e.popup.editor.scale = r.width() / i.height()),
                                e.popup.editor.scale > 1 && (e.popup.editor.scale = 1),
                                $(a).animate({
                                        rotation: e.popup.editor.rotation,
                                        scale: e.popup.editor.scale
                                    }, {
                                        duration: o ? 1 : 300,
                                        easing: "swing",
                                        step: function (e, t) {
                                            var o = i.css("-webkit-transform") || i.css("-moz-transform") || i.css("transform") || "none",
                                                n = 0,
                                                r = 1,
                                                a = t.prop;
                                            if ("none" !== o) {
                                                    var l = o.split("(")[1].split(")")[0].split(","),
                                                        s = l[0],
                                                        p = l[1];
                                                    n = "rotation" == a ? e : Math.round(Math.atan2(p, s) * (180 / Math.PI)),
                                                    r = "scale" == a ? e : Math.round(10 * Math.sqrt(s * s + p * p)) / 10
                                                }
                                            i.css({
                                                    "-webkit-transform": "rotate(" + n + "deg) scale(" + r + ")",
                                                    "-moz-transform": "rotate(" + n + "deg) scale(" + r + ")",
                                                    transform: "rotate(" + n + "deg) scale(" + r + ")"
                                                })
                                        },
                                        always: function () {
                                            delete e.popup.editor.isAnimating,
                                            e.popup.editor.cropper && !o && (e.popup.editor.cropper.setDefaultData(), e.popup.editor.cropper.init("rotation"))
                                        }
                                    }),
                                e.popup.editor.rotation >= 360 && (e.popup.editor.rotation = 0),
                                e.popup.editor.rotation != e.editor.rotation && (e.popup.editor.hasChanges = !0)
                            }
                        },
                        crop: function (e, t) {
                            if (!(e.popup && void 0 !== e.popup.html)) return e.editor.crop = t || e.editor.crop;
                            if (e.popup.editor.cropper) t && (e.popup.editor.cropper.crop = t),
                            e.popup.editor.cropper.init(t);
                            else {
                                var o = e.popup.html.find(".fileuploader-popup-node > img"),
                                    r = $('<div class="fileuploader-cropper"><div class="fileuploader-cropper-area"><div class="point point-a"></div><div class="point point-b"></div><div class="point point-c"></div><div class="point point-d"></div><div class="point point-e"></div><div class="point point-f"></div><div class="point point-g"></div><div class="point point-h"></div><div class="area-move"></div><div class="area-image"></div></div></div>'),
                                    i = r.find(".fileuploader-cropper-area");
                                e.popup.editor.cropper = {
                                        $imageEl: o,
                                        $template: r,
                                        $editor: i,
                                        isCropping: !1,
                                        crop: t || null,
                                        init: function (t) {
                                            var o = e.popup.editor.cropper,
                                                i = o.$imageEl.position(),
                                                a = o.$imageEl[0].getBoundingClientRect().width,
                                                l = o.$imageEl[0].getBoundingClientRect().height,
                                                s = e.popup.editor.rotation && [90, 270].indexOf(e.popup.editor.rotation) > -1 ? e.popup.editor.scale : 1;
                                            if (o.hide(), o.crop || o.setDefaultData(), 0 == a || 0 == l) return o.hide(!0);
                                            o.isCropping || (o.$imageEl.clone().appendTo(o.$template.find(".area-image")), o.$imageEl.parent().append(r)),
                                            o.$template.hide().css({
                                                    left: i.left,
                                                    top: i.top,
                                                    width: a,
                                                    height: l
                                                }).fadeIn(150),
                                            o.$editor.hide(),
                                            clearTimeout(o._editorAnimationTimeout),
                                            o._editorAnimationTimeout = setTimeout(function () {
                                                    if (delete o._editorAnimationTimeout, o.$editor.fadeIn(250), e.editor.crop && $.isPlainObject(t) && (o.resize(), o.crop.left = o.crop.left * o.crop.cfWidth * s, o.crop.width = o.crop.width * o.crop.cfWidth * s, o.crop.top = o.crop.top * o.crop.cfHeight * s, o.crop.height = o.crop.height * o.crop.cfHeight * s), (!e.editor.crop || "rotation" == t) && n.editor.cropper && n.editor.cropper.ratio && "resize" != t) {
                                                        var r = n.editor.cropper.ratio,
                                                            i = f._assets.ratioToPx(o.crop.width, o.crop.height, r);
                                                        i && (o.crop.width = Math.min(o.crop.width, i[0]), o.crop.left = (o.$template.width() - o.crop.width) / 2, o.crop.height = Math.min(o.crop.height, i[1]), o.crop.top = (o.$template.height() - o.crop.height) / 2)
                                                    }
                                                    o.drawPlaceHolder(o.crop)
                                                }, 400),
                                            o.isCropping || o.$template.on("drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel", function (e) {
                                                    e.preventDefault()
                                                }),
                                            n.editor.cropper && n.editor.cropper.showGrid && o.$editor.addClass("has-grid"),
                                            o.$imageEl.attr("draggable", "false"),
                                            o.$template.on("mousedown touchstart", o.mousedown),
                                            $(window).on("resize", o.resize),
                                            o.isCropping = !0,
                                            e.popup.editor.hasChanges = !0
                                        },
                                        setDefaultData: function () {
                                            var t = e.popup.editor.cropper,
                                                o = t.$imageEl,
                                                n = o.width(),
                                                r = o.height(),
                                                i = e.popup.editor.rotation && [90, 270].indexOf(e.popup.editor.rotation) > -1,
                                                a = e.popup.editor.scale || 1;
                                            return t.crop = {
                                                    left: 0,
                                                    top: 0,
                                                    width: i ? r * a : n,
                                                    height: i ? n * a : r,
                                                    cfWidth: n / t.$imageEl.prop("naturalWidth"),
                                                    cfHeight: r / t.$imageEl.prop("naturalHeight")
                                                },
                                            null
                                        },
                                        hide: function (t) {
                                            var o = e.popup.editor.cropper;
                                            t && (o.$template.hide(), o.$editor.hide()),
                                            o.$imageEl.attr("draggable", ""),
                                            o.$template.off("mousedown touchstart", o.mousedown),
                                            $(window).off("resize", o.resize)
                                        },
                                        resize: function (t) {
                                            var o = e.popup.editor.cropper,
                                                n = o.$imageEl;
                                            n.width() > 0 && (t ? (o.$template.hide(), clearTimeout(o._resizeTimeout), o._resizeTimeout = setTimeout(function () {
                                                    delete o._resizeTimeout;
                                                    var e = n.width() / n.prop("naturalWidth"),
                                                        t = n.height() / n.prop("naturalHeight");
                                                    o.crop.left = o.crop.left / o.crop.cfWidth * e,
                                                    o.crop.width = o.crop.width / o.crop.cfWidth * e,
                                                    o.crop.top = o.crop.top / o.crop.cfHeight * t,
                                                    o.crop.height = o.crop.height / o.crop.cfHeight * t,
                                                    o.crop.cfWidth = e,
                                                    o.crop.cfHeight = t,
                                                    o.init("resize")
                                                }, 500)) : (o.crop.cfWidth = n.width() / n.prop("naturalWidth"), o.crop.cfHeight = n.height() / n.prop("naturalHeight")))
                                        },
                                        drawPlaceHolder: function (t) {
                                            var o = e.popup.editor.cropper,
                                                n = e.popup.editor.rotation || 0,
                                                r = e.popup.editor.scale || 1,
                                                i = [0, 0];
                                            t && (t = $.extend({}, t), n && (i = [180 == n || 270 == n ? -100 : 0, 90 == n || 180 == n ? -100 : 0]), o.$editor.css(t), o.$editor.find(".area-image img").removeAttr("style").css({
                                                    width: o.$imageEl.width(),
                                                    height: o.$imageEl.height(),
                                                    left: -1 * o.$editor.position().left,
                                                    top: -1 * o.$editor.position().top,
                                                    "-webkit-transform": "rotate(" + n + "deg) scale(" + r + ") translateX(" + i[0] + "%) translateY(" + i[1] + "%)",
                                                    "-moz-transform": "rotate(" + n + "deg) scale(" + r + ") translateX(" + i[0] + "%) translateY(" + i[1] + "%)",
                                                    transform: "rotate(" + n + "deg) scale(" + r + ") translateX(" + i[0] + "%) translateY(" + i[1] + "%)"
                                                }))
                                        },
                                        mousedown: function (t) {
                                            var o = t.originalEvent.touches && t.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                                n = $(t.target),
                                                r = e.popup.editor.cropper,
                                                i = {
                                                    x: ("mousedown" == o ? t.pageX : t.originalEvent.touches[0].pageX) - r.$template.offset().left,
                                                    y: ("mousedown" == o ? t.pageY : t.originalEvent.touches[0].pageY) - r.$template.offset().top
                                                },
                                                a = function () {
                                                    r.pointData = {
                                                        el: n,
                                                        x: i.x,
                                                        y: i.y,
                                                        xEditor: i.x - r.crop.left,
                                                        yEditor: i.y - r.crop.top,
                                                        left: r.crop.left,
                                                        top: r.crop.top,
                                                        width: r.crop.width,
                                                        height: r.crop.height
                                                    },
                                                    n.is(".area-move") && (r.isMoving = !0),
                                                    n.is(".point") && (r.isResizing = !0),
                                                    (r.isMoving || r.isResizing) && (r.$editor.addClass("moving"), $("body").css({
                                                        "-webkit-user-select": "none",
                                                        "-moz-user-select": "none",
                                                        "-ms-user-select": "none",
                                                        "user-select": "none"
                                                    }), $(window).on("mousemove touchmove", r.mousemove))
                                                };
                                            "mousedown" == o && a(),
                                            "touchstart" == o && (r.isTouchLongPress = !0, setTimeout(function () {
                                                    r.isTouchLongPress && (delete r.isTouchLongPress, a())
                                                }, 500)),
                                            $(window).on("mouseup touchend", r.mouseup)
                                        },
                                        mousemove: function (t) {
                                            var o = t.originalEvent.touches && t.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                                r = ($(t.target), e.popup.editor.cropper),
                                                i = {
                                                    x: ("mousedown" == o ? t.pageX : t.originalEvent.touches[0].pageX) - r.$template.offset().left,
                                                    y: ("mousedown" == o ? t.pageY : t.originalEvent.touches[0].pageY) - r.$template.offset().top
                                                };
                                            if (r.isMoving) {
                                                    var a = i.x - r.pointData.xEditor,
                                                        l = i.y - r.pointData.yEditor;
                                                    a + r.crop.width > r.$template.width() && (a = r.$template.width() - r.crop.width),
                                                    a < 0 && (a = 0),
                                                    l + r.crop.height > r.$template.height() && (l = r.$template.height() - r.crop.height),
                                                    l < 0 && (l = 0),
                                                    r.crop.left = a,
                                                    r.crop.top = l
                                                }
                                            if (r.isResizing) {
                                                    var s, p = r.pointData.el.attr("class").substr("point point-".length),
                                                        d = r.crop.left + r.crop.width,
                                                        u = r.crop.top + r.crop.height,
                                                        c = (n.editor.cropper && n.editor.cropper.minWidth || 0) * r.crop.cfWidth,
                                                        h = (n.editor.cropper && n.editor.cropper.minHeight || 0) * r.crop.cfHeight,
                                                        m = n.editor.cropper ? n.editor.cropper.ratio : null;
                                                    if (c > r.$template.width() && (c = r.$template.width()), h > r.$template.height() && (h = r.$template.height()), ("a" == p || "b" == p || "c" == p) && !s && (r.crop.top = i.y, r.crop.top < 0 && (r.crop.top = 0), r.crop.height = u - r.crop.top, r.crop.top > r.crop.top + r.crop.height && (r.crop.top = u, r.crop.height = 0), r.crop.height < h && (r.crop.top = u - h, r.crop.height = h), (s = m ? f._assets.ratioToPx(r.crop.width, r.crop.height, m) : null) && (r.crop.width = s[0], "a" != p && "b" != p || (r.crop.left = Math.max(0, r.pointData.left + (r.pointData.width - r.crop.width) / ("b" == p ? 2 : 1))), r.crop.left + r.crop.width > r.$template.width()))) {
                                                            var g = r.$template.width() - r.crop.left;
                                                            r.crop.width = g,
                                                            r.crop.height = g / s[2] * s[3],
                                                            r.crop.top = u - r.crop.height
                                                        }
                                                    if (("e" == p || "f" == p || "g" == p) && !s && (r.crop.height = i.y - r.crop.top, r.crop.height + r.crop.top > r.$template.height() && (r.crop.height = r.$template.height() - r.crop.top), r.crop.height < h && (r.crop.height = h), (s = m ? f._assets.ratioToPx(r.crop.width, r.crop.height, m) : null) && (r.crop.width = s[0], "f" != p && "g" != p || (r.crop.left = Math.max(0, r.pointData.left + (r.pointData.width - r.crop.width) / ("f" == p ? 2 : 1))), r.crop.left + r.crop.width > r.$template.width()))) {
                                                            g = r.$template.width() - r.crop.left;
                                                            r.crop.width = g,
                                                            r.crop.height = g / s[2] * s[3]
                                                        }
                                                    if (("c" == p || "d" == p || "e" == p) && !s && (r.crop.width = i.x - r.crop.left, r.crop.width + r.crop.left > r.$template.width() && (r.crop.width = r.$template.width() - r.crop.left), r.crop.width < c && (r.crop.width = c), (s = m ? f._assets.ratioToPx(r.crop.width, r.crop.height, m) : null) && (r.crop.height = s[1], "c" != p && "d" != p || (r.crop.top = Math.max(0, r.pointData.top + (r.pointData.height - r.crop.height) / ("d" == p ? 2 : 1))), r.crop.top + r.crop.height > r.$template.height()))) {
                                                            var v = r.$template.height() - r.crop.top;
                                                            r.crop.height = v,
                                                            r.crop.width = v / s[3] * s[2]
                                                        }
                                                    if (("a" == p || "g" == p || "h" == p) && !s && (r.crop.left = i.x, r.crop.left > r.$template.width() && (r.crop.left = r.$template.width()), r.crop.left < 0 && (r.crop.left = 0), r.crop.width = d - r.crop.left, r.crop.left > r.crop.left + r.crop.width && (r.crop.left = d, r.crop.width = 0), r.crop.width < c && (r.crop.left = d - c, r.crop.width = c), (s = m ? f._assets.ratioToPx(r.crop.width, r.crop.height, m) : null) && (r.crop.height = s[1], "a" != p && "h" != p || (r.crop.top = Math.max(0, r.pointData.top + (r.pointData.height - r.crop.height) / ("h" == p ? 2 : 1))), r.crop.top + r.crop.height > r.$template.height()))) {
                                                            v = r.$template.height() - r.crop.top;
                                                            r.crop.height = v,
                                                            r.crop.width = v / s[3] * s[2],
                                                            r.crop.left = d - r.crop.width
                                                        }
                                                }
                                            r.drawPlaceHolder(r.crop)
                                        },
                                        mouseup: function (t) {
                                            var o = e.popup.editor.cropper;
                                            0 != o.$editor.width() && 0 != o.$editor.height() || o.init(o.setDefaultData()),
                                            delete o.isTouchLongPress,
                                            delete o.isMoving,
                                            delete o.isResizing,
                                            o.$editor.removeClass("moving"),
                                            $("body").css({
                                                "-webkit-user-select": "",
                                                "-moz-user-select": "",
                                                "-ms-user-select": "",
                                                "user-select": ""
                                            }),
                                            $(window).off("mousemove touchmove", o.mousemove),
                                            $(window).off("mouseup touchend", o.mouseup)
                                        }
                                    },
                                e.popup.editor.cropper.init()
                            }
                        },
                        resize: function (e, t, o, n, r, i) {
                            var a = t.getContext("2d"),
                                l = (o = !o && n ? n * e.width / e.height : o, n = !n && o ? o * e.height / e.width : n, e.width / e.height),
                                s = l >= 1 ? o : n * l,
                                p = l < 1 ? n : o / l;
                            i && s < o && (p *= o / s, s = o),
                            i && p < n && (s *= n / p, p = n);
                            var d = Math.ceil(Math.log(e.width / s) / Math.log(2));
                            if (t.width = s, t.height = p, e.width < t.width || e.height < t.height || d < 2) {
                                    i || (t.width = Math.min(e.width, t.width), t.height = Math.min(e.height, t.height));
                                    var u = e.width < t.width ? (t.width - e.width) / 2 : 0,
                                        f = e.height < t.height ? (t.height - e.height) / 2 : 0;
                                    r || (a.fillStyle = "#fff", a.fillRect(0, 0, t.width, t.height)),
                                    a.drawImage(e, u, f, Math.min(e.width, t.width), Math.min(e.height, t.height))
                                } else {
                                    var c = document.createElement("canvas"),
                                        h = c.getContext("2d"),
                                        m = 2;
                                    for (c.width = e.width / m, c.height = e.height / m, h.fillStyle = "#fff", h.fillRect(0, 0, c.width, c.height), h.drawImage(e, 0, 0, e.width / 2, e.height / 2); d > 2;) {
                                            var g = m + 2,
                                                v = e.width / m,
                                                b = e.height / m;
                                            v > c.width && (v = c.width),
                                            b > c.height && (b = c.height),
                                            h.drawImage(c, 0, 0, v, b, 0, 0, e.width / g, e.height / g),
                                            m = g,
                                            d--
                                        }
                                    v = e.width / m,
                                    b = e.height / m;
                                    v > c.width && (v = c.width),
                                    b > c.height && (b = c.height),
                                    a.drawImage(c, 0, 0, v, b, 0, 0, s, p),
                                    c = h = null
                                }
                            a = null
                        },
                        save: function (e, t, r, i, a) {
                            var d = e.popup && void 0 !== e.popup.html;
                            if (d) {
                                if (!e.popup.editor.hasChanges) return;
                                var u = e.popup.editor.scale || 1;
                                e.editor.rotation = e.popup.editor.rotation || 0,
                                e.popup.editor.cropper && (e.editor.crop = e.popup.editor.cropper.crop, e.editor.crop.width = e.editor.crop.width / e.popup.editor.cropper.crop.cfWidth / u, e.editor.crop.left = e.editor.crop.left / e.popup.editor.cropper.crop.cfWidth / u, e.editor.crop.height = e.editor.crop.height / e.popup.editor.cropper.crop.cfHeight / u, e.editor.crop.top = e.editor.crop.top / e.popup.editor.cropper.crop.cfHeight / u)
                            }
                            var c = document.createElement("canvas"),
                                h = c.getContext("2d"),
                                m = e.reader.node,
                                g = [0, 180];
                            if (c.width = m.naturalWidth, c.height = m.naturalHeight, h.drawImage(m, 0, 0), void 0 !== e.editor.rotation) {
                                    e.editor.rotation = e.editor.rotation || 0,
                                    c.width = g.indexOf(e.editor.rotation) > -1 ? m.naturalWidth : m.naturalHeight,
                                    c.height = g.indexOf(e.editor.rotation) > -1 ? m.naturalHeight : m.naturalWidth;
                                    var v = e.editor.rotation * Math.PI / 180,
                                        b = .5 * c.width,
                                        w = .5 * c.height;
                                    h.clearRect(0, 0, c.width, c.height),
                                    h.translate(b, w),
                                    h.rotate(v),
                                    h.translate(.5 * -m.naturalWidth, .5 * -m.naturalHeight),
                                    h.drawImage(m, 0, 0),
                                    h.setTransform(1, 0, 0, 1, 0, 0)
                                }
                            if (e.editor.crop) {
                                    var x = h.getImageData(e.editor.crop.left, e.editor.crop.top, e.editor.crop.width, e.editor.crop.height);
                                    c.width = e.editor.crop.width,
                                    c.height = e.editor.crop.height,
                                    h.putImageData(x, 0, 0)
                                }
                            var $ = r || e.type || "image/jpeg",
                                _ = n.editor.quality || 90,
                                y = c.toDataURL($, _ / 100),
                                k = function (r, u) {
                                    var c = t ? f._assets.dataURItoBlob(r, $) : r;
                                    d && !a && f.thumbnails.renderThumbnail(e, !0, u || r),
                                    i && i(c, e, l, p, o, s),
                                    null != n.editor.onSave && "function" == typeof n.editor.onSave && n.editor.onSave(c, e, l, p, o, s),
                                    f.set("listInput", null)
                                };
                            if (n.editor.maxWidth || n.editor.maxHeight) {
                                    var F = new Image;
                                    F.src = y,
                                    F.onload = function () {
                                        var e = document.createElement("canvas");
                                        f.editor.resize(F, e, n.editor.maxWidth, n.editor.maxHeight, !0, !1),
                                        y = e.toDataURL($, _ / 100),
                                        c = h = e = null,
                                        k(y, F)
                                    }
                                } else c = h = null,
                            k(y)
                        }
                    },
                    sorter: {
                        init: function () {
                            p.on("mousedown touchstart", n.thumbnails._selectors.sorter, f.sorter.mousedown)
                        },
                        destroy: function () {
                            p.off("mousedown touchstart", n.thumbnails._selectors.sorter, f.sorter.mousedown)
                        },
                        prevent: function (e) {
                            if (!0 === e) return "click drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel";
                            e.preventDefault()
                        },
                        mousedown: function (e) {
                            var t = e.originalEvent.touches && e.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                o = $(e.target),
                                r = o.closest(n.thumbnails._selectors.item),
                                i = f.files.find(r),
                                a = {
                                    x: "mousedown" != t && r.length ? e.originalEvent.touches[0].pageX : e.pageX,
                                    y: "mousedown" != t && r.length ? e.originalEvent.touches[0].pageY : e.pageY
                                },
                                s = function () {
                                    f.sorter.sort = {
                                        el: o,
                                        item: i,
                                        items: l.find(n.thumbnails._selectors.item),
                                        x: a.x,
                                        y: a.y,
                                        xItem: a.x - r.offset().left,
                                        yItem: a.y - r.offset().top,
                                        left: r.position().left,
                                        top: r.position().top,
                                        width: r.outerWidth(),
                                        height: r.outerHeight(),
                                        placeholder: n.sorter.placeholder ? $(n.sorter.placeholder) : i.html.clone().addClass("fileuploader-sorter-placeholder").html("")
                                    },
                                    $("body").css({
                                        "-webkit-user-select": "none",
                                        "-moz-user-select": "none",
                                        "-ms-user-select": "none",
                                        "user-select": "none"
                                    }),
                                    $(window).on("mousemove touchmove", f.sorter.mousemove)
                                };
                            f.sorter.sort && f.sorter.mouseup(),
                            i && (n.sorter.selectorExclude && (o.is(n.sorter.selectorExclude) || o.closest(n.sorter.selectorExclude).length) || (p.on(f.sorter.prevent(!0), n.thumbnails._selectors.sorter, f.sorter.prevent), "mousedown" == t && s(), "touchstart" == t && (f.sorter.isTouchLongPress = !0, setTimeout(function () {
                                    f.sorter.isTouchLongPress && (delete f.sorter.isTouchLongPress, s())
                                }, 500)), $(window).on("mouseup touchend", f.sorter.mouseup)))
                        },
                        findItemAtPos: function (e) {
                            var t = f.sorter.sort,
                                o = t.items.not(t.item.html),
                                n = null;
                            return o.each(function (t, o) {
                                    var r = $(o);
                                    if (e.x > r.offset().left && e.x < r.offset().left + r.outerWidth() && e.y > r.offset().top && e.y < r.offset().top + r.outerHeight()) return n = r,
                                    !1
                                }),
                            n
                        },
                        mousemove: function (e) {
                            var t = e.originalEvent.touches && e.originalEvent.touches[0] ? "touchstart" : "mousedown",
                                o = f.sorter.sort,
                                r = o.item,
                                i = l.find(n.thumbnails._selectors.item),
                                a = $(n.sorter.scrollContainer || window),
                                s = {
                                    left: a.scrollLeft(),
                                    top: a.scrollTop()
                                },
                                p = {
                                    x: "mousedown" == t ? e.pageX : e.originalEvent.touches[0].pageX,
                                    y: "mousedown" == t ? e.pageY : e.originalEvent.touches[0].pageY
                                },
                                d = p.x - o.xItem - s.left,
                                u = p.y - o.yItem - s.top;
                            d + o.xItem > a.width() && (d = a.width() - o.xItem),
                            d < 0 - o.xItem && (d = 0 - o.xItem),
                            u + o.yItem > a.height() && (u = a.height() - o.yItem),
                            u < 0 - o.yItem && (u = 0 - o.yItem),
                            r.html.addClass("sorting").css({
                                    position: "fixed",
                                    left: d,
                                    top: u,
                                    width: f.sorter.sort.width,
                                    height: f.sorter.sort.height
                                }),
                            l.find(o.placeholder).length || r.html.after(o.placeholder),
                            o.placeholder.css({
                                    width: f.sorter.sort.width,
                                    height: f.sorter.sort.height
                                });
                            var c = f.sorter.findItemAtPos({
                                    x: d + o.xItem + s.left,
                                    y: u + o.yItem + s.top
                                });
                            if (c) {
                                    var h = o.placeholder.offset().left != c.offset().left,
                                        m = o.placeholder.offset().top != c.offset().top;
                                    if (f.sorter.sort.lastHover && f.sorter.sort.lastHover.el == c[0]) {
                                            if (m && "before" == f.sorter.sort.lastHover.direction && p.y < f.sorter.sort.lastHover.y) return;
                                            if (m && "after" == f.sorter.sort.lastHover.direction && p.y > f.sorter.sort.lastHover.y) return;
                                            if (h && "before" == f.sorter.sort.lastHover.direction && p.x < f.sorter.sort.lastHover.x) return;
                                            if (h && "after" == f.sorter.sort.lastHover.direction && p.x > f.sorter.sort.lastHover.x) return
                                        }
                                    var g = i.index(r.html) > i.index(c) ? "before" : "after";
                                    c[g](o.placeholder),
                                    c[g](r.html),
                                    f.sorter.sort.lastHover = {
                                            el: c[0],
                                            x: p.x,
                                            y: p.y,
                                            direction: g
                                        },
                                    a.scrollLeft(s.left),
                                    a.scrollTop(s.top)
                                }
                        },
                        mouseup: function () {
                            var e = f.sorter.sort,
                                t = e.item;
                            $("body").css({
                                    "-webkit-user-select": "",
                                    "-moz-user-select": "",
                                    "-ms-user-select": "",
                                    "user-select": ""
                                }),
                            t.html.removeClass("sorting").css({
                                    position: "",
                                    left: "",
                                    top: "",
                                    width: "",
                                    height: ""
                                }),
                            e.placeholder.remove(),
                            delete f.sorter.sort,
                            p.off(f.sorter.prevent(!0), n.thumbnails._selectors.sorter, f.sorter.prevent),
                            $(window).off("mousemove touchmove", f.sorter.mousemove),
                            $(window).off("mouseup touchend", f.sorter.mouseup),
                            f.sorter.save()
                        },
                        save: function (e) {
                            var t = 0,
                                r = [],
                                i = f.rendered && e;
                            $.each(e ? f._itFl : l.children(), function (e, o) {
                                    var n = o.file ? o : f.files.find($(o));
                                    if (n) {
                                        if (n.upload && !n.uploaded) return i = !1,
                                        !1;
                                        f.rendered && n.index != t && (i = !0),
                                        n.index = t,
                                        r.push(n),
                                        t++
                                    }
                                }),
                            i && r.length == f._itFl.length && (f._itFl = r),
                            e || f.set("listInput", "ignoreSorter"),
                            i && null != n.sorter.onSort && "function" == typeof n.sorter.onSort && n.sorter.onSort(r, l, p, o, s)
                        }
                    },
                    upload: {
                        prepare: function (e, t) {
                            e.upload = {
                                url: n.upload.url,
                                data: n.upload.data || {},
                                formData: new FormData,
                                type: n.upload.type || "POST",
                                enctype: n.upload.enctype || "multipart/form-data",
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                status: null,
                                send: function () {
                                    f.upload.send(e, !0)
                                },
                                cancel: function (t) {
                                    f.upload.cancel(e, t)
                                },
                                retry: function () {
                                    f.upload.retry(e)
                                }
                            },
                            e.upload.formData.append(s.attr("name"), e.file, !! e.name && e.name),
                            (n.upload.start || t) && f.upload.send(e, t)
                        },
                        send: function (e, t) {
                            if (e.upload) {
                                var r = function (t) {
                                    e.html.removeClass("upload-pending upload-loading upload-cancelled upload-failed upload-success").addClass("upload-" + (t || e.upload.status))
                                },
                                    i = function () {
                                        var t = 0;
                                        if (f._pfuL.length > 0) for (f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1); t < f._pfuL.length;) {
                                            if (f._itFl.indexOf(f._pfuL[t]) > -1 && f._pfuL[t].upload && !f._pfuL[t].upload.$ajax) {
                                                f.upload.send(f._pfuL[t], !0);
                                                break
                                            }
                                            f._pfuL.splice(t, 1),
                                            t++
                                        }
                                    };
                                if (n.upload.synchron && !e.upload.chunk) if (e.upload.status = "pending", e.html && r(), t) f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1);
                                else if (-1 == f._pfuL.indexOf(e) && f._pfuL.push(e), f._pfuL.length > 1) return;
                                if (n.upload.chunk && e.file.slice) {
                                        var a = 1e6 * n.upload.chunk,
                                            d = Math.ceil(e.size / a, a);
                                        if (d > 1 && !e.upload.chunk && (e.upload.chunk = {
                                                name: e.name,
                                                size: e.file.size,
                                                type: e.file.type,
                                                chunkSize: a,
                                                temp_name: e.name,
                                                loaded: 0,
                                                total: d,
                                                i: -1
                                            }), e.upload.chunk) if (e.upload.chunk.i++, delete e.upload.chunk.isFirst, delete e.upload.chunk.isLast, 0 == e.upload.chunk.i && (e.upload.chunk.isFirst = !0), e.upload.chunk.i == e.upload.chunk.total - 1 && (e.upload.chunk.isLast = !0), e.upload.chunk.i <= e.upload.chunk.total - 1) {
                                                var u = e.upload.chunk.i * e.upload.chunk.chunkSize,
                                                    c = e.file.slice(u, u + e.upload.chunk.chunkSize);
                                                e.upload.data = n.upload.data || {},
                                                e.upload.formData = new FormData,
                                                e.upload.formData.append(s.attr("name"), c),
                                                e.upload.data._chunkedd = JSON.stringify(e.upload.chunk)
                                            } else delete e.upload.chunk
                                    }
                                if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && !1 === n.upload.beforeSend(e, l, p, o, s)) return delete e.upload.chunk,
                                r(),
                                void i();
                                if (p.addClass("fileuploader-is-uploading"), e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, delete e.upload.send, e.upload.status = "loading", e.html && (n.thumbnails._selectors.start && e.html.find(n.thumbnails._selectors.start).remove(), r()), e.upload.data) for (var h in e.upload.data) e.upload.formData.append(h, e.upload.data[h]);
                                e.upload.data = e.upload.formData,
                                e.upload.xhr = function () {
                                        var t = $.ajaxSettings.xhr(),
                                            o = e.upload.chunk && e.upload.chunk.xhrStartedAt ? e.upload.chunk.xhrStartedAt : new Date;
                                        return t.upload && t.upload.addEventListener("progress", function (t) {
                                                e.upload.$ajax && (e.upload.$ajax.total = e.upload.chunk ? e.upload.chunk.size : t.total, e.upload.$ajax.xhrStartedAt = o),
                                                f.upload.progressHandling(t, e, o)
                                            }, !1),
                                        t
                                    },
                                e.upload.complete = function (t, r) {
                                        if (e.upload.chunk && !e.upload.chunk.isLast && "success" == r) return f.upload.send(e);
                                        i();
                                        var a = !0;
                                        $.each(f._itFl, function (e, t) {
                                            t.upload && t.upload.$ajax && (a = !1)
                                        }),
                                        a && (p.removeClass("fileuploader-is-uploading"), null != n.upload.onComplete && "function" == typeof n.upload.onComplete && n.upload.onComplete(l, p, o, s, t, r))
                                    },
                                e.upload.success = function (t, i, a) {
                                        if (!e.upload.chunk || e.upload.chunk.isLast) delete e.upload.chunk,
                                        f.upload.progressHandling(null, e, e.upload.$ajax.xhrStartedAt, !0),
                                        e.uploaded = !0,
                                        delete e.upload,
                                        e.upload = {
                                            status: "successful",
                                            resend: function () {
                                                f.upload.retry(e)
                                            }
                                        },
                                        e.html && r(),
                                        null != n.upload.onSuccess && $.isFunction(n.upload.onSuccess) && n.upload.onSuccess(t, e, l, p, o, s, i, a),
                                        f.set("listInput", null);
                                        else try {
                                            var d = JSON.parse(t);
                                            e.upload.chunk.temp_name = d.fileuploader.temp_name
                                        } catch (e) {}
                                    },
                                e.upload.error = function (t, i, a) {
                                        e.uploaded = !1,
                                        e.upload.status = "cancelled" == e.upload.status ? e.upload.status : "failed",
                                        delete e.upload.$ajax,
                                        e.html && r(),
                                        null != n.upload.onError && $.isFunction(n.upload.onError) && n.upload.onError(e, l, p, o, s, t, i, a)
                                    },
                                e.upload.$ajax = $.ajax(e.upload)
                            }
                        },
                        cancel: function (e, t) {
                            e && e.upload && (e.upload.status = "cancelled", delete e.upload.chunk, e.upload.$ajax && e.upload.$ajax.abort(), delete e.upload.$ajax, !t && f.files.remove(e))
                        },
                        retry: function (e) {
                            e && e.upload && (e.html && n.thumbnails._selectors.retry && e.html.find(n.thumbnails._selectors.retry).remove(), f.upload.prepare(e, !0))
                        },
                        progressHandling: function (e, t, r, i) {
                            if (!e && i && t.upload.$ajax && (e = {
                                total: t.upload.$ajax.total,
                                loaded: t.upload.$ajax.total,
                                lengthComputable: !0
                            }), e.lengthComputable) {
                                var a = e.loaded + (t.upload.chunk ? t.upload.chunk.loaded : 0),
                                    d = t.upload.chunk ? t.upload.chunk.size : e.total,
                                    u = Math.round(100 * a / d),
                                    c = t.upload.chunk && t.upload.chunk.xhrStartedAt ? t.upload.chunk.xhrStartedAt : r,
                                    h = ((new Date).getTime() - c.getTime()) / 1e3,
                                    m = h ? a / h : 0,
                                    g = Math.max(0, d - a),
                                    v = Math.max(0, h ? g / m : 0),
                                    b = {
                                        loaded: a,
                                        loadedInFormat: f._assets.bytesToText(a),
                                        total: d,
                                        totalInFormat: f._assets.bytesToText(d),
                                        percentage: u,
                                        secondsElapsed: h,
                                        secondsElapsedInFormat: f._assets.secondsToText(h, !0),
                                        bytesPerSecond: m,
                                        bytesPerSecondInFormat: f._assets.bytesToText(m) + "/s",
                                        remainingBytes: g,
                                        remainingBytesInFormat: f._assets.bytesToText(g),
                                        secondsRemaining: v,
                                        secondsRemainingInFormat: f._assets.secondsToText(v, !0)
                                    };
                                t.upload.chunk && (t.upload.chunk.isFirst && (t.upload.chunk.xhrStartedAt = r), e.loaded != e.total || t.upload.chunk.isLast || (t.upload.chunk.loaded += Math.max(e.total, t.upload.chunk.total / t.upload.chunk.chunkSize))),
                                b.percentage > 99 && !i && (b.percentage = 99),
                                n.upload.onProgress && $.isFunction(n.upload.onProgress) && n.upload.onProgress(b, t, l, p, o, s)
                            }
                        }
                    },
                    dragDrop: {
                        onDragEnter: function (e) {
                            clearTimeout(f.dragDrop._timer),
                            n.dragDrop.container.addClass("fileuploader-dragging"),
                            f.set("feedback", f._assets.textParse(n.captions.drop)),
                            null != n.dragDrop.onDragEnter && $.isFunction(n.dragDrop.onDragEnter) && n.dragDrop.onDragEnter(e, l, p, o, s)
                        },
                        onDragLeave: function (e) {
                            clearTimeout(f.dragDrop._timer),
                            f.dragDrop._timer = setTimeout(function (e) {
                                if (!f.dragDrop._dragLeaveCheck(e)) return !1;
                                n.dragDrop.container.removeClass("fileuploader-dragging"),
                                f.set("feedback", null),
                                null != n.dragDrop.onDragLeave && $.isFunction(n.dragDrop.onDragLeave) && n.dragDrop.onDragLeave(e, l, p, o, s)
                            }, 100, e)
                        },
                        onDrop: function (e) {
                            clearTimeout(f.dragDrop._timer),
                            n.dragDrop.container.removeClass("fileuploader-dragging"),
                            f.set("feedback", null),
                            e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length && (f.isUploadMode() ? f.onChange(e, e.originalEvent.dataTransfer.files) : s.prop("files", e.originalEvent.dataTransfer.files)),
                            null != n.dragDrop.onDrop && $.isFunction(n.dragDrop.onDrop) && n.dragDrop.onDrop(e, l, p, o, s)
                        },
                        _dragLeaveCheck: function (e) {
                            var t = $(e.currentTarget);
                            return !(!t.is(n.dragDrop.container) && n.dragDrop.container.find(t).length)
                        }
                    },
                    clipboard: {
                        paste: function (e) {
                            if (f._assets.isIntoView(o) && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items && e.originalEvent.clipboardData.items.length) {
                                var t = e.originalEvent.clipboardData.items;
                                f.clipboard.clean();
                                for (var r = 0; r < t.length; r++)
                                if (-1 !== t[r].type.indexOf("image") || -1 !== t[r].type.indexOf("text/uri-list")) {
                                    var i = t[r].getAsFile(),
                                        a = n.clipboardPaste > 1 ? n.clipboardPaste : 2e3;
                                    i && (i._name = f._assets.generateFileName(-1 != i.type.indexOf("/") ? i.type.split("/")[1].toString().toLowerCase() : "png", "Clipboard "), f.set("feedback", f._assets.textParse(n.captions.paste, {
                                            ms: a / 1e3
                                        })), f.clipboard._timer = setTimeout(function () {
                                            f.set("feedback", null),
                                            f.onChange(e, [i])
                                        }, a - 2))
                                }
                            }
                        },
                        clean: function () {
                            f.clipboard._timer && (clearTimeout(f.clipboard._timer), delete f.clipboard._timer, f.set("feedback", null))
                        }
                    },
                    files: {
                        add: function (e, t) {
                            var o, r, i = e._name || e.name,
                                a = e.size,
                                l = f._assets.bytesToText(a),
                                p = e.type,
                                d = p ? p.split("/", 1).toString().toLowerCase() : "",
                                u = -1 != i.indexOf(".") ? i.split(".").pop().toLowerCase() : "",
                                c = {
                                    name: i,
                                    title: i.substr(0, i.length - (-1 != i.indexOf(".") ? u.length + 1 : u.length)),
                                    size: a,
                                    size2: l,
                                    type: p,
                                    format: d,
                                    extension: u,
                                    data: c = e.data || {},
                                    file: e.file || e,
                                    reader: {
                                        read: function (e, t, o) {
                                            return f.files.read(r, e, t, o)
                                        }
                                    },
                                    id: "updated" == t ? e.id : Date.now(),
                                    input: "choosed" == t ? s : null,
                                    html: null,
                                    choosed: "choosed" == t,
                                    appended: "appended" == t || "updated" == t,
                                    uploaded: "uploaded" == t
                                };
                            return "updated" != t ? (f._itFl.push(c), o = f._itFl.length - 1, r = f._itFl[o]) : (o = f._itFl.indexOf(e), f._itFl[o] = r = c),
                            r.remove = function () {
                                    f.files.remove(r)
                                },
                            n.editor && "image" == d && (r.editor = {
                                    rotate: function (e) {
                                        f.editor.rotate(r, e)
                                    },
                                    cropper: function (e) {
                                        f.editor.crop(r, e)
                                    },
                                    save: function (e, t, o, n) {
                                        f.editor.save(r, t, o, e, n)
                                    }
                                }),
                            o
                        },
                        read: function (e, t, r, i, a) {
                            if (f.isFileReaderSupported() && !e.data.readerSkip) {
                                var d = new FileReader,
                                    u = a && e.data.thumbnail,
                                    c = "string" != typeof e.file,
                                    h = function () {
                                        var t = e.reader._callbacks || [];
                                        e.reader._timer && (clearTimeout(e.reader._timer), delete e.reader._timer),
                                        delete e.reader._callbacks,
                                        delete e.reader._FileReader;
                                        for (var r = 0; r < t.length; r++)
                                        $.isFunction(t[r]) && t[r](e, l, p, o, s);
                                        n.onFileRead && $.isFunction(n.onFileRead) && n.onFileRead(e, l, p, o, s)
                                    };
                                if ((!e.reader.src && !e.reader._FileReader || i) && (e.reader = {
                                        _FileReader: d,
                                        _callbacks: [],
                                        read: e.reader.read
                                    }), e.reader.src && !i) return t && $.isFunction(t) ? t(e, l, p, o, s) : null;
                                if (t && e.reader._callbacks && (e.reader._callbacks.push(t), e.reader._callbacks.length > 1)) return;
                                if ("astext" == e.format) d.onload = function (t) {
                                        var o = document.createElement("div");
                                        e.reader.node = o,
                                        e.reader.src = t.target.result,
                                        e.reader.length = t.target.result.length,
                                        o.innerHTML = e.reader.src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                                        h()
                                    },
                                d.onerror = function () {
                                        h(),
                                        e.reader = {
                                            read: e.reader.read
                                        }
                                    },
                                c ? d.readAsText(e.file) : $.ajax({
                                        url: e.file,
                                        success: function (e) {
                                            d.onload({
                                                target: {
                                                    result: e
                                                }
                                            })
                                        },
                                        error: function () {
                                            d.onerror()
                                        }
                                    });
                                else if ("image" == e.format || u) d.onload = function (t) {
                                        var o = new Image,
                                            r = function () {
                                                e.data && e.data.readerCrossOrigin && o.setAttribute("crossOrigin", e.data.readerCrossOrigin),
                                                o.src = t.target.result + (i && !c && -1 == t.target.result.indexOf("data:image") ? (-1 == t.target.result.indexOf("?") ? "?" : "&") + "d=" + Date.now() : ""),
                                                o.onload = function () {
                                                    if (e.reader.exifOrientation) {
                                                        var t = document.createElement("canvas"),
                                                            n = t.getContext("2d"),
                                                            r = o,
                                                            i = e.reader.exifOrientation,
                                                            a = [0, 180];
                                                        t.width = r.naturalWidth,
                                                        t.height = r.naturalHeight,
                                                        n.drawImage(r, 0, 0),
                                                        t.width = a.indexOf(i) > -1 ? r.naturalWidth : r.naturalHeight,
                                                        t.height = a.indexOf(i) > -1 ? r.naturalHeight : r.naturalWidth;
                                                        var l = i * Math.PI / 180,
                                                            s = .5 * t.width,
                                                            p = .5 * t.height;
                                                        return n.clearRect(0, 0, t.width, t.height),
                                                        n.translate(s, p),
                                                        n.rotate(l),
                                                        n.translate(.5 * -r.naturalWidth, .5 * -r.naturalHeight),
                                                        n.drawImage(r, 0, 0),
                                                        n.setTransform(1, 0, 0, 1, 0, 0),
                                                        o.src = t.toDataURL(e.type, 1),
                                                        void delete e.reader.exifOrientation
                                                    }
                                                    e.reader.node = o,
                                                    e.reader.src = o.src,
                                                    e.reader.width = o.width,
                                                    e.reader.height = o.height,
                                                    e.reader.ratio = f._assets.pxToRatio(e.reader.width, e.reader.height),
                                                    h(),
                                                    u && (e.reader = {
                                                        read: e.reader.read
                                                    })
                                                },
                                                o.onerror = function () {
                                                    h(),
                                                    e.reader = {
                                                        read: e.reader.read
                                                    }
                                                }
                                            };
                                        n.thumbnails.exif && e.choosed ? f._assets.getExifOrientation(e.file, function (t) {
                                                t && (e.reader.exifOrientation = t),
                                                r()
                                            }) : r()
                                    },
                                d.onerror = function () {
                                        h(),
                                        e.reader = {
                                            read: e.reader.read
                                        }
                                    },
                                c ? d.readAsDataURL(e.file) : d.onload({
                                        target: {
                                            result: u ? e.data.thumbnail : e.file
                                        }
                                    });
                                else if ("video" == e.format || "audio" == e.format) {
                                        var m, g = document.createElement(e.format),
                                            v = g.canPlayType(e.type);
                                        if (d.onerror = function () {
                                                e.reader.node = null,
                                                h(),
                                                e.reader = {
                                                    read: e.reader.read
                                                }
                                            }, URL && "" !== v) {
                                                if (a && !n.thumbnails.videoThumbnail) return e.reader.node = g,
                                                h(),
                                                void(e.reader = {
                                                    read: e.reader.read
                                                });
                                                m = c ? URL.createObjectURL(e.file) : e.file,
                                                g.onloadedmetadata = function () {
                                                    e.reader.node = g,
                                                    e.reader.src = g.src,
                                                    e.reader.duration = g.duration,
                                                    e.reader.duration2 = f._assets.secondsToText(g.duration),
                                                    "video" == e.format && (e.reader.width = g.videoWidth, e.reader.height = g.videoHeight, e.reader.ratio = f._assets.pxToRatio(e.reader.width, e.reader.height))
                                                },
                                                g.onerror = function () {
                                                    h(),
                                                    e.reader = {
                                                        read: e.reader.read
                                                    }
                                                },
                                                g.onloadeddata = function () {
                                                    if ("video" == e.format) {
                                                        var t = document.createElement("canvas"),
                                                            o = t.getContext("2d");
                                                        t.width = g.videoWidth,
                                                        t.height = g.videoHeight,
                                                        o.drawImage(g, 0, 0, t.width, t.height),
                                                        e.reader.frame = f._assets.isBlankCanvas(t) ? null : t.toDataURL(),
                                                        t = o = null
                                                    }
                                                    h()
                                                },
                                                setTimeout(function () {
                                                    e.data && e.data.readerCrossOrigin && g.setAttribute("crossOrigin", e.data.readerCrossOrigin),
                                                    g.src = m
                                                }, 100)
                                            } else d.onerror()
                                    } else d.onload = function (t) {
                                        e.reader.src = t.target.result,
                                        e.reader.length = t.target.result.length,
                                        h()
                                    },
                                d.onerror = function (t) {
                                        h(),
                                        e.reader = {
                                            read: e.reader.read
                                        }
                                    },
                                c ? d[r || "readAsBinaryString"](e.file) : h();
                                e.reader._timer = setTimeout(d.onerror, a ? n.reader.thumbnailTimeout : n.reader.timeout)
                            } else t && t(e, l, p, o, s);
                            return null
                        },
                        list: function (e, t, r, i) {
                            var a = [];
                            return !n.sorter || r || i && "ignoreSorter" == i || f.sorter.save(!0),
                            $.each(f._itFl, function (o, n) {
                                if (n.upload && !n.uploaded) return !0;
                                var r = n;
                                if ((t || e) && (r = (r.choosed ? "0:/" : "") + (t && null !== f.files.getItemAttr(n, t) ? f.files.getItemAttr(n, t) : n["string" == typeof n.file ? "file" : "name"])), e && (r = {
                                    file: r
                                }, n.editor && (n.editor.crop || n.editor.rotation) && (r.editor = {}, n.editor.rotation && (r.editor.rotation = n.editor.rotation), n.editor.crop && (r.editor.crop = n.editor.crop)), void 0 !== n.index && (r.index = n.index), n.data && n.data.listProps)) for (var i in n.data.listProps) r[i] = n.data.listProps[i];
                                a.push(r)
                            }),
                            a = n.onListInput && $.isFunction(n.onListInput) ? n.onListInput(a, f._itFl, n.listInput, l, p, o, s) : a,
                            e ? JSON.stringify(a) : a
                        },
                        check: function (e, t, r) {
                            var i = ["warning", null, !1, !1];
                            if (null != n.limit && r && t.length + f._itFl.length - 1 > n.limit) return i[1] = f._assets.textParse(n.captions.errors.filesLimit),
                            i[3] = !0,
                            i;
                            if (null != n.maxSize && r) {
                                var a = 0;
                                if ($.each(f._itFl, function (e, t) {
                                    a += t.size
                                }), a -= e.size, $.each(t, function (e, t) {
                                    a += t.size
                                }), a > Math.round(1e6 * n.maxSize)) return i[1] = f._assets.textParse(n.captions.errors.filesSizeAll),
                                i[3] = !0,
                                i
                            }
                            if (null != n.onFilesCheck && $.isFunction(n.onFilesCheck) && r && !1 === n.onFilesCheck(t, n, l, p, o, s)) return i[3] = !0,
                            i;
                            if (null != n.extensions && -1 == $.inArray(e.extension, n.extensions) && -1 == $.inArray(e.type, n.extensions)) return i[1] = f._assets.textParse(n.captions.errors.filesType, e),
                            i;
                            if (null != n.fileMaxSize && e.size > 1e6 * n.fileMaxSize) return i[1] = f._assets.textParse(n.captions.errors.fileSize, e),
                            i;
                            if (4096 == e.size && "" == e.type) return i[1] = f._assets.textParse(n.captions.errors.folderUpload, e),
                            i;
                            if (!n.skipFileNameCheck) {
                                a = !1;
                                if ($.each(f._itFl, function (o, r) {
                                    if (r != e && 1 == r.choosed && r.file && r.name == e.name) return a = !0,
                                    r.file.size != e.size || r.file.type != e.type || e.file.lastModified && r.file.lastModified && r.file.lastModified != e.file.lastModified || !(t.length > 1) ? (i[1] = f._assets.textParse(n.captions.errors.fileName, e), i[2] = !1) : i[2] = !0,
                                    !1
                                }), a) return i
                            }
                            return !0
                        },
                        append: function (e) {
                            if ((e = $.isArray(e) ? e : [e]).length) {
                                for (var t, r = 0; r < e.length; r++)
                                t = f._itFl[f.files.add(e[r], "appended")],
                                n.thumbnails && f.thumbnails.item(t);
                                return f.set("feedback", null),
                                f.set("listInput", null),
                                n.afterSelect && $.isFunction(n.afterSelect) && n.afterSelect(l, p, o, s),
                                1 != e.length || t
                            }
                        },
                        update: function (e, t) {
                            if (!(-1 == f._itFl.indexOf(e) || e.upload && e.upload.$ajax)) {
                                var o = e,
                                    r = f.files.add($.extend(e, t), "updated");
                                    (e = f._itFl[r]).popup && e.popup.close && e.popup.close(),
                                n.thumbnails && o.html && f.thumbnails.item(e, o.html),
                                f.set("listInput", null)
                            }
                        },
                        find: function (e) {
                            var t = null;
                            return $.each(f._itFl, function (o, n) {
                                if (n.html && n.html.is(e)) return t = n,
                                !1
                            }),
                            t
                        },
                        remove: function (e, t) {
                            if (t || !n.onRemove || !$.isFunction(n.onRemove) || !1 !== n.onRemove(e, l, p, o, s)) {
                                if (e.html && (n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !t ? n.thumbnails.onItemRemove(e.html, l, p, o, s) : e.html.remove()), e.upload && e.upload.$ajax && e.upload.cancel && e.upload.cancel(!0), e.popup && e.popup.close && e.popup.close(), e.reader.src && (e.reader.node = null, URL.revokeObjectURL(e.reader.src)), e.input) {
                                    var r = !0;
                                    $.each(f._itFl, function (o, n) {
                                        if (e != n && (e.input == n.input || t && e.input.get(0).files.length > 1)) return r = !1,
                                        !1
                                    }),
                                    r && (f.isAddMoreMode() && sl.length > 1 ? (f.set("nextInput"), sl.splice(sl.indexOf(e.input), 1), e.input.remove()) : f.set("input", ""))
                                }
                                f._pfrL.indexOf(e) > -1 && f._pfrL.splice(f._pfrL.indexOf(e), 1),
                                f._pfuL.indexOf(e) > -1 && f._pfuL.splice(f._pfuL.indexOf(e), 1),
                                f._itFl.indexOf(e) > -1 && f._itFl.splice(f._itFl.indexOf(e), 1),
                                e = null,
                                0 == f._itFl.length && f.reset(),
                                f.set("feedback", null),
                                f.set("listInput", null)
                            }
                        },
                        getItemAttr: function (e, t) {
                            var o = null;
                            return e && (void 0 !== e[t] ? o = e[t] : e.data && void 0 !== e.data[t] && (o = e.data[t])),
                            o
                        },
                        clear: function (e) {
                            for (var t = 0; t < f._itFl.length;) {
                                var r = f._itFl[t];
                                e || !r.appended ? (r.html && r.html && f._itFl[t].html.remove(), r.upload && r.upload.$ajax && f.upload.cancel(r), f._itFl.splice(t, 1)) : t++
                            }
                            f.set("feedback", null),
                            f.set("listInput", null),
                            0 == f._itFl.length && n.onEmpty && $.isFunction(n.onEmpty) && n.onEmpty(l, p, o, s)
                        }
                    },
                    reset: function (e) {
                        e && (f.clipboard._timer && f.clipboard.clean(), $.each(sl, function (e, t) {
                            e < sl.length && t.remove()
                        }), sl = [], f.set("input", "")),
                        f._itRl = [],
                        f._pfuL = [],
                        f._pfrL = [],
                        f.files.clear(e)
                    },
                    destroy: function () {
                        f.reset(!0),
                        f.bindUnbindEvents(!1),
                        s.removeAttr("style"),
                        s.insertBefore(".fileuploader"),
                        s.prop("FileUploader", null),
                        p.remove(),
                        p = o = l = null
                    },
                    _assets: {
                        bytesToText: function (e) {
                            if (0 == e) return "0 Byte";
                            var t = Math.floor(Math.log(e) / Math.log(1024));
                            return (e / Math.pow(1024, t)).toPrecision(3) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
                        },
                        secondsToText: function (e, t) {
                            e = parseInt(Math.round(e), 10);
                            var o = Math.floor(e / 3600),
                                n = Math.floor((e - 3600 * o) / 60),
                                r = "";
                            return (o > 0 || !t) && (r += (o < 10 ? "0" : "") + o + (t ? "h " : ":")),
                            (n > 0 || !t) && (r += (n < 10 && !t ? "0" : "") + n + (t ? "m " : ":")),
                            r += ((e = e - 3600 * o - 60 * n) < 10 && !t ? "0" : "") + e + (t ? "s" : "")
                        },
                        pxToRatio: function (e, t) {
                            var o = function (e, t) {
                                return 0 == t ? e : o(t, e % t)
                            },
                                n = o(e, t);
                            return [e / n, t / n]
                        },
                        ratioToPx: function (e, t, o) {
                            return (o = (o + "").split(":")).length < 2 ? null : [t / o[1] * o[0], e / o[0] * o[1], o[0], o[1]]
                        },
                        hasAttr: function (e, t) {
                            var o = (t = t || s).attr(e);
                            return !(!o || void 0 === o)
                        },
                        copyAllAttributes: function (e, t) {
                            return $.each(t.get(0).attributes, function () {
                                "required" != this.name && "type" != this.name && e.attr(this.name, this.value)
                            }),
                            t.get(0).FileUploader && (e.get(0).FileUploader = t.get(0).FileUploader),
                            e
                        },
                        getAllEvents: function (e) {
                            e = e || s;
                            var t = [];
                            for (var o in e = e.get ? e.get(0) : e)
                            0 === o.indexOf("on") && t.push(o.slice(2));
                            return -1 == t.indexOf("change") && t.push("change"),
                            t.join(" ")
                        },
                        isIntoView: function (e) {
                            var t = $(window).scrollTop(),
                                o = t + window.innerHeight,
                                n = e.offset().top,
                                r = n + e.outerHeight();
                            return t < n && o > r
                        },
                        isBlankCanvas: function (e) {
                            var t = document.createElement("canvas"),
                                o = !1;
                            t.width = e.width,
                            t.height = e.height;
                            try {
                                    o = e.toDataURL() == t.toDataURL()
                                } catch (e) {}
                            return t = null,
                            o
                        },
                        generateFileName: function (e, t) {
                            var o = new Date,
                                n = function (e) {
                                    return e < 10 && (e = "0" + e),
                                    e
                                };
                            e = e ? "." + e : "";
                            return (t = t || "") + o.getFullYear() + "-" + n(o.getMonth() + 1) + "-" + n(o.getDate()) + " " + n(o.getHours()) + "-" + n(o.getMinutes()) + "-" + n(o.getSeconds()) + e
                        },
                        arrayBufferToBase64: function (e) {
                            for (var t = "", o = new Uint8Array(e), n = 0; n < o.byteLength; n++)
                            t += String.fromCharCode(o[n]);
                            return window.btoa(t)
                        },
                        dataURItoBlob: function (e, t) {
                            for (var o = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(o.length), i = new Uint8Array(r), a = 0; a < o.length; a++)
                            i[a] = o.charCodeAt(a);
                            var l = new DataView(r);
                            return new Blob([l.buffer], {
                                type: t || n
                            })
                        },
                        getExifOrientation: function (e, t) {
                            var o = new FileReader,
                                n = {
                                    1: 0,
                                    3: 180,
                                    6: 90,
                                    8: 270
                                };
                            o.onload = function (e) {
                                    var o = new DataView(e.target.result),
                                        r = 1;
                                    if (65496 == o.getUint16(0, !1)) for (var i = o.byteLength, a = 2; a < i && !(o.getUint16(a + 2, !1) <= 8);) {
                                            var l = o.getUint16(a, !1);
                                            if (a += 2, 65505 == l) {
                                                if (1165519206 != o.getUint32(a += 2, !1)) break;
                                                var s, p = 18761 == o.getUint16(a += 6, !1);
                                                a += o.getUint32(a + 4, p),
                                                s = o.getUint16(a, p),
                                                a += 2;
                                                for (var d = 0; d < s; d++)
                                                if (274 == o.getUint16(a + 12 * d, p)) {
                                                    r = o.getUint16(a + 12 * d + 8, p),
                                                    i = 0;
                                                    break
                                                }
                                            } else {
                                                if (65280 != (65280 & l)) break;
                                                a += o.getUint16(a, !1)
                                            }
                                        }
                                    t && t(n[r] || 0)
                                },
                            o.onerror = function () {
                                    t && t("")
                                },
                            o.readAsArrayBuffer(e)
                        },
                        textParse: function (text, opts, noOptions) {
                            switch (opts = noOptions ? opts || {} : $.extend({}, {
                                limit: n.limit,
                                maxSize: n.maxSize,
                                fileMaxSize: n.fileMaxSize,
                                extensions: n.extensions ? n.extensions.join(", ") : null,
                                captions: n.captions
                            }, opts), typeof text) {
                            case "string":
                                text = text.replace(/\$\{(.*?)\}/g, function (match, a) {
                                    var a = a.replace(/ /g, ""),
                                        r = void 0 !== opts[a] && null != opts[a] ? opts[a] : "";
                                    if (a.indexOf(".") > -1 || a.indexOf("[]") > -1) {
                                            var x = a.substr(0, a.indexOf(".") > -1 ? a.indexOf(".") : a.indexOf("[") > -1 ? a.indexOf("[") : a.length),
                                                y = a.substring(x.length);
                                            if (opts[x]) try {
                                                    r = eval('opts["' + x + '"]' + y)
                                                } catch (e) {
                                                    r = ""
                                                }
                                        }
                                    return r = $.isFunction(r) ? f._assets.textParse(r) : r,
                                    r || ""
                                });
                                break;
                            case "function":
                                text = f._assets.textParse(text(opts, l, p, o, s, f._assets.textParse), opts, noOptions)
                            }
                            return opts = null,
                            text
                        },
                        textToColor: function (e) {
                            if (!e || 0 == e.length) return !1;
                            for (var t = 0, o = 0; t < e.length; o = e.charCodeAt(t++) + ((o << 5) - o));
                            t = 0;
                            for (var n = "#"; t < 3; n += ("00" + (o >> 2 * t++ & 255).toString(16)).slice(-2));
                            return n
                        },
                        isBrightColor: function (e) {
                            var t, o, n;
                            return ((n = (t = e) && t.constructor == Array && 3 == t.length ? t : (o = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(o[1]), parseInt(o[2]), parseInt(o[3])] : (o = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(o[1]), 2.55 * parseFloat(o[2]), 2.55 * parseFloat(o[3])] : (o = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16)] : (o = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(o[1] + o[1], 16), parseInt(o[2] + o[2], 16), parseInt(o[3] + o[3], 16)] : "undefined" != typeof colors ? colors[$.trim(t).toLowerCase()] : null) ? .2126 * n[0] + .7152 * n[1] + .0722 * n[2] : null) > 194
                        }
                    },
                    isSupported: function () {
                        return s && s.get(0).files
                    },
                    isFileReaderSupported: function () {
                        return window.File && window.FileList && window.FileReader
                    },
                    isDefaultMode: function () {
                        return !n.upload && !n.addMore
                    },
                    isAddMoreMode: function () {
                        return !n.upload && n.addMore && n.limit != 1
                    },
                    isUploadMode: function () {
                        return n.upload
                    },
                    _itFl: [],
                    _pfuL: [],
                    _pfrL: [],
                    disabled: !1,
                    locked: !1,
                    rendered: !1
                };
            return n.enableApi && s.prop("FileUploader", {
                    open: function () {
                        s.trigger("click")
                    },
                    getOptions: function () {
                        return n
                    },
                    getParentEl: function () {
                        return p
                    },
                    getInputEl: function () {
                        return s
                    },
                    getNewInputEl: function () {
                        return o
                    },
                    getListEl: function () {
                        return l
                    },
                    getListInputEl: function () {
                        return n.listInput
                    },
                    getFiles: function () {
                        return f._itFl
                    },
                    getChoosedFiles: function () {
                        return f._itFl.filter(function (e) {
                            return e.choosed
                        })
                    },
                    getAppendedFiles: function () {
                        return f._itFl.filter(function (e) {
                            return e.appended
                        })
                    },
                    getUploadedFiles: function () {
                        return f._itFl.filter(function (e) {
                            return e.uploaded
                        })
                    },
                    getFileList: function (e, t) {
                        return f.files.list(e, t, !0)
                    },
                    updateFileList: function () {
                        return f.set("listInput", null),
                        !0
                    },
                    setOption: function (e, t) {
                        return n[e] = t,
                        !0
                    },
                    findFile: function (e) {
                        return f.files.find(e)
                    },
                    add: function (e, t, o) {
                        if (!f.isUploadMode()) return !1;
                        var n;
                        if (e instanceof Blob) n = e;
                        else {
                            var r = /data:[a-z]+\/[a-z]+\;base64\,/.test(e) ? e : "data:" + t + ";base64," + btoa(e);
                            n = f._assets.dataURItoBlob(r, t)
                        }
                        return n._name = o || f._assets.generateFileName(-1 != n.type.indexOf("/") ? n.type.split("/")[1].toString().toLowerCase() : "File "),
                        f.onChange(null, [n]),
                        !0
                    },
                    append: function (e) {
                        return f.files.append(e)
                    },
                    update: function (e, t) {
                        return f.files.update(e, t)
                    },
                    remove: function (e) {
                        return e = e.jquery ? f.files.find(e) : e,
                        f._itFl.indexOf(e) > -1 && (f.files.remove(e), !0)
                    },
                    uploadStart: function () {
                        var e = this.getChoosedFiles() || [];
                        if (f.isUploadMode() && e.length > 0 && !e[0].uploaded) for (var t = 0; t < e.length; t++) f.upload.send(e[t])
                    },
                    reset: function () {
                        return f.reset(!0),
                        !0
                    },
                    disable: function (e) {
                        return f.set("disabled", !0),
                        e && (f.locked = !0),
                        !0
                    },
                    enable: function () {
                        return f.set("disabled", !1),
                        f.locked = !1,
                        !0
                    },
                    destroy: function () {
                        return f.destroy(),
                        !0
                    },
                    isEmpty: function () {
                        return 0 == f._itFl.length
                    },
                    isDisabled: function () {
                        return f.disabled
                    },
                    isRendered: function () {
                        return f.rendered
                    },
                    assets: f._assets,
                    getPluginMode: function () {
                        return f.isDefaultMode() ? "default" : f.isAddMoreMode() ? "addMore" : f.isUploadMode() ? "upload" : void 0
                    }
                }),
            f.init(),
            this
        })
    },
    $.fileuploader = {
        getInstance: function (e) {
            return (e.prop ? e : $(e)).prop("FileUploader")
        }
    },
    $.fn.fileuploader.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        changeInput: !0,
        inputNameBrackets: !0,
        theme: "default",
        thumbnails: {
            box: '<div class="fileuploader-items"><ul class="fileuploader-items-list"></ul></div>',
            boxAppendTo: null,
            item: '<div style="padding: 20px">${image}<span class="fileuploader-action-popup"></div><li class="fileuploader-item file-has-popup"><div class="columns"><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div><div class="column-actions"><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div><div class="progress-bar2">${progressBar}<span></span></div></li>',
            item2: '<li class="fileuploader-item file-has-popup"><div class="columns"><div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div><a href="${file}" target="_blank"><div class="column-title"><div title="${name}">${name}</div><span>${size2}</span></div></a><div class="column-actions"><a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a><a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a></div></div></li>',
            popup: {
                container: "body",
                loop: !0,
                arrows: !0,
                template: function (e) {
                    return '<div class="fileuploader-popup-preview"><a class="fileuploader-popup-move" data-action="prev"></a><div class="fileuploader-popup-node ${format}">${reader.node}</div><div class="fileuploader-popup-content"><ul class="fileuploader-popup-meta"><li><span>${captions.name}:</span><h5>${name}</h5></li><li><span>${captions.type}:</span><h5>${extension.toUpperCase()}</h5></li><li><span>${captions.size}:</span><h5>${size2}</h5></li>' + (e.reader && e.reader.width ? "<li><span>${captions.dimensions}:</span><h5>${reader.width}x${reader.height}px</h5></li>" : "") + (e.reader && e.reader.duration ? "<li><span>${captions.duration}:</span><h5>${reader.duration2}</h5></li>" : "") + '</ul><ul class="fileuploader-popup-tools">' + ("image" == e.format && e.editor ? (e.editor.cropper ? '<li><a data-action="crop"><i></i><span>${captions.crop}</span></a></li>' : "") + (e.editor.rotate ? '<li><a data-action="rotate-cw"><i></i><span>${captions.rotate}</span></a></li>' : "") : "") + '<li><a data-action="remove"><i></i><span>${captions.remove}</span></a></li></ul><div class="fileuploader-popup-buttons"><a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a><a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a></div></div><a class="fileuploader-popup-move" data-action="next"></a></div>'
                },
                onShow: function (e) {
                    e.popup.html.on("click", '[data-action="prev"]', function (t) {
                        e.popup.move("prev")
                    }).on("click", '[data-action="next"]', function (t) {
                        e.popup.move("next")
                    }).on("click", '[data-action="crop"]', function (t) {
                        e.editor && e.editor.cropper()
                    }).on("click", '[data-action="rotate-cw"]', function (t) {
                        e.editor && e.editor.rotate()
                    }).on("click", '[data-action="remove"]', function (t) {
                        e.popup.close(),
                        e.remove()
                    }).on("click", '[data-action="cancel"]', function (t) {
                        e.popup.close()
                    }).on("click", '[data-action="save"]', function (t) {
                        e.editor && e.editor.save(),
                        e.popup.close && e.popup.close()
                    })
                },
                onHide: null
            },
            itemPrepend: !1,
            removeConfirmation: !0,
            startImageRenderer: !0,
            synchronImages: !0,
            canvasImage: !0,
            videoThumbnail: !1,
            exif: !0,
            _selectors: {
                list: ".fileuploader-items-list",
                item: ".fileuploader-item",
                start: ".fileuploader-action-start",
                retry: ".fileuploader-action-retry",
                remove: ".fileuploader-action-remove",
                sorter: ".fileuploader-action-sort",
                popup: ".fileuploader-popup-preview",
                popup_open: ".fileuploader-action-popup"
            },
            beforeShow: null,
            onItemShow: null,
            onItemRemove: function (e) {
                e.children().animate({
                    opacity: 0
                }, 200, function () {
                    setTimeout(function () {
                        e.slideUp(200, function () {
                            e.remove()
                        })
                    }, 100)
                })
            },
            onImageLoaded: null
        },
        editor: !1,
        sorter: !1,
        reader: {
            thumbnailTimeout: 5e3,
            timeout: 12e3
        },
        files: null,
        upload: null,
        dragDrop: !0,
        addMore: !1,
        skipFileNameCheck: !1,
        clipboardPaste: !0,
        listInput: !0,
        enableApi: !1,
        listeners: null,
        onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onFileRead: null,
        onSelect: null,
        afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function (e) {
                return alert(e)
            },
            confirm: function (e, t) {
                confirm(e) && t()
            }
        },
        captions: {
            button: function (e) {
                return "Choose " + (1 == e.limit ? "File" : "Files")
            },
            feedback: function (e) {
                return "Choose " + (1 == e.limit ? "file" : "files") + " to upload"
            },
            feedback2: function (e) {
                return e.length + " " + (e.length > 1 ? " files were" : " file was") + " chosen"
            },
            confirm: "Confirm",
            cancel: "Cancel",
            name: "Name",
            type: "Type",
            size: "Size",
            dimensions: "Dimensions",
            duration: "Duration",
            crop: "Crop",
            rotate: "Rotate",
            sort: "Sort",
            download: "Download",
            remove: "Remove",
            drop: "Drop the files here to Upload",
            paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pasting a file, click here to cancel.',
            removeConfirmation: "Are you sure you want to remove this file?",
            errors: {
                filesLimit: "Only ${limit} files are allowed to be uploaded.",
                filesType: "Only ${extensions} files are allowed to be uploaded.",
                fileSize: "${name} is too large! Please choose a file up to ${fileMaxSize}MB.",
                filesSizeAll: "Files that you chose are too large! Please upload files up to ${maxSize} MB.",
                fileName: "File with the name ${name} is already selected.",
                folderUpload: "You are not allowed to upload folders."
            }
        }
    }
}(jQuery);