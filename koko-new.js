var e;
if (!window.__idm_init__ && !navigator.platform.startsWith("Win") && "html" == document.documentElement.localName) {
    window.__idm_init__ = !0;
    Array.prototype.includes || (Array.prototype.includes = function(a, b) {
        return 0 <= this.indexOf(a, b)
    }
    );
    Array.prototype.G || (Array.prototype.G = function(a) {
        0 > a && (a += this.length);
        return this[a]
    }
    );
    NodeList.prototype[Symbol.iterator] || (NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    HTMLCollection.prototype[Symbol.iterator] || (HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]);
    "undefined" == typeof browser && (browser = chrome);
    navigator.userAgent.includes("Edge/");
    navigator.userAgent.includes("Firefox/");
    navigator.userAgent.includes("OPR/");
    var w = RegExp.prototype.test
      , y = Array.from
      , z = Array.prototype.includes
      , F = Function.call.bind(Array.prototype.slice)
      , G = Function.apply.bind(Array.prototype.push)
      , H = Function.call.bind(Array.prototype.forEach)
      , I = "dotAll"in RegExp.prototype ? "s" : ""
      , K = {
        16: !0,
        17: !0,
        18: !0,
        45: !0,
        46: !0
    }
      , L = z.bind(["video", "audio", "object", "embed"])
      , M = /(?!)/
      , N = / *[$~]([<>{}&*+=@|!#%:?^~-])(\d*) */
      , O = w.bind(/^rgba?\(\d+,\s*\d+,\s*\d+,\s*0\)/)
      , P = window.self === window.top
      , Q = window.origin || document.origin || location.origin
      , V = location
      , W = location.hostname.toLowerCase() + location.pathname + location.search
      , X = location.hostname.toLowerCase().split(".").G(-2)
      , Y = "idmrs://" + X + "/"
      , aa = X ? RegExp("^(?:\\(\\d+\\)\\s+)?(.+?)\\s+[-|@]+\\s*" + X + "$", "i") : M;
    function R() {
        browser.runtime.getFrameId ? this.$ = browser.runtime.getFrameId(window) : P && (this.$ = 0);
        this.ea = [];
        this.aa = [];
        this.v = new Map;
        this.c = {};
        this.Ta();
        window.__idm_connect__ = this.Ta.bind(this, !0);
        this.b(1, window, "resize", this.Ub);
        this.b(1, window, "scroll", this.Vb);
        this.b(1, window, "blur", this.Mb);
        this.b(1, window, "keydown", this.$a, !0);
        this.b(1, window, "keyup", this.$a, !0);
        this.b(1, window, "mousedown", this.Ob, !0);
        this.b(1, window, "mouseup", this.Qb, !0);
        this.b(1, window, "mousemove", this.Pb, !0);
        this.b(1, window, "click", this.Nb, !0);
        this.b(1, document, "beforeload", this.Kb, !0);
        this.b(1, document, "DOMContentLoaded", this.Za);
        "interactive" != document.readyState && "complete" != document.readyState || this.Za()
    }
    e = R.prototype;
    e.i = 0;
    e.s = 0;
    e.ha = -1;
    e.ia = -1;
    e.gb = 1;
    e.P = 0;
    e.g = "";
    e.Da = "";
    e.H = "";
    e.Ja = M;
    e.Oa = M;
    e.I = M;
    e.Qa = /^\/(?:watch\?(?:.*?&)?v=|shorts\/|embed\/)([\w-]{10,12})(?:[/?&#]|$)/;
    e.F = {};
    e.Ka = M;
    e.La = M;
    e.Ma = M;
    e.Na = M;
    e.Pa = '$> *[role="main"]:not(hidden) video';
    e.S = "$< div#inline-preview-player $< a#media-container-link";
    e.Ra = RegExp('"PLAYER_JS_URL":\\s*"(.*?)"', I);
    e.ra = M;
    e.ma = ":root:empty";
    e.pa = 'div[id^="mount_0_"] >div:is([class=""],:not([class])) >div[class=""] >div:first-child';
    e.m = ":root:empty";
    e.qa = ":root:empty";
    e.C = ":root:empty";
    e.o = "$< div >:not(:only-child):not(video:first-child,img:first-child:nth-last-child(2)) <";
    e.sa = "$> div[data-video-id] $= data-video-id";
    e.la = "a:not([target])";
    e.D = ":root:empty";
    e.oa = 4;
    e.na = M;
    e.ua = M;
    e.Ba = ":root:empty";
    e.va = '$& div.xxzkxad $& :scope >div[class] $& section main[role="main"] $& div.xw7yly9 >div >div[style]:only-child $& div >article <';
    e.ya = '$& div.xxzkxad $& :scope >div[class] $& section main[role="main"] $& div:first-child >div[role="button"][aria-hidden], article[role="presentation"] $& div:first-child >div[style]:first-child:empty < $& div[role="presentation"] >div >ul';
    e.Ca = "$& div.xxzkxad $& section.x5qyhuo $& :scope >div >div:only-child $& section >div";
    e.ta = '$+ article:scope, div.x1xfsgkm:scope $* main[role="main"] article, main[role="main"] >div >div.x1xfsgkm';
    e.xa = '$& div[role="dialog"] div[role="dialog"] >div';
    e.R = "$* video";
    e.za = "$= poster $< <<<<<< $> div:scope >img:first-child, div[data-instancekey] div >img:first-child $= src";
    e.Aa = "*.return.return.memoizedProps.videoFBID";
    e.wa = /\/(?:p|reel|reels|stories\/[\w.-]+)\/([\w-]{11}|\d{19})(?:[/?#]|$)/;
    e.Ea = M;
    e.Fa = /^(?:[^/]+|player\.vimeo\.com\/video)\/(\d{2,})/;
    e.Ia = "$| video:scope $| video";
    e.Ga = "$> :scope >div.player";
    e.Ha = "$& div.vp-video $& div.vp-telecine";
    e.Ta = function(a) {
        this.bb(-1);
        this.a = a = browser.runtime.connect({
            name: (P ? "top" : "sub") + (a ? ":retry" : "") + ("file:" == location.protocol ? ":file" : "")
        });
        this.b(-1, a, "onMessage", this.Sb);
        this.b(-1, a, "onDisconnect", this.Rb)
    }
    ;
    e.Rb = function() {
        browser.runtime.lastError;
        this.bb();
        this.a = this.ba = null;
        window.__idm_init__ = !1;
        window.__idm_connect__ = null
    }
    ;
    e.Sb = function(a) {
        switch (a.shift()) {
        case 11:
            this.ub.apply(this, a);
            break;
        case 17:
            this.vb.apply(this, a);
            break;
        case 12:
            this.wb.apply(this, a);
            break;
        case 13:
            this.mb = a.shift();
            break;
        case 14:
            this.zb.apply(this, a);
            break;
        case 15:
            this.Ab.apply(this, a);
            break;
        case 16:
            this.Bb.apply(this, a);
            break;
        case 18:
            this.yb.apply(this, a)
        }
    }
    ;
    e.Xb = function(a, b) {
        var c = 94 <= this.kb;
        switch (this.f = a) {
        case 1:
            this.h = this.nb = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.Ja = RegExp(a, I);
            if (a = b.shift())
                this.I = RegExp(a);
            if (a = b.shift())
                this.Qa = RegExp(a);
            if (a = b.shift())
                this.F = a.split(/[|:]/).reduce(ba, {});
            if (a = b.shift())
                this.Ka = RegExp(a);
            if (a = b.shift())
                this.La = RegExp(a, I);
            if (a = b.shift())
                this.Ma = RegExp(a, I);
            if (a = b.shift())
                this.Na = RegExp(a, I);
            if (a = b.shift())
                this.Oa = RegExp(a, I);
            if (a = b.shift())
                this.Pa = a;
            if (a = b.shift())
                this.S = a;
            if (a = b.shift())
                this.Ra = RegExp(a, I);
            break;
        case 2:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.ra = RegExp(a);
            if (a = b.shift())
                this.ma = a;
            (a = b.shift()) && c && (this.pa = a);
            b.shift();
            if (a = b.shift())
                this.m = a;
            if (a = b.shift())
                this.qa = a;
            if (a = b.shift())
                this.C = a;
            if (a = b.shift())
                this.o = a;
            if (a = b.shift())
                this.sa = a;
            if (a = b.shift())
                this.la = a;
            if (a = b.shift())
                this.D = a;
            (a = b.shift()) && c && (this.oa = a);
            if (a = b.shift())
                this.ib = a;
            if (a = b.shift())
                this.na = RegExp(a);
            break;
        case 4:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.Da = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.ua = RegExp(a);
            if (a = b.shift())
                this.Ba = a;
            if (!c)
                break;
            if (a = b.shift())
                this.va = a;
            if (a = b.shift())
                this.ya = a;
            if (a = b.shift())
                this.Ca = a;
            if (a = b.shift())
                this.ta = a;
            if (a = b.shift())
                this.xa = a;
            if (a = b.shift())
                this.R = a;
            if (a = b.shift())
                this.za = a;
            b.shift();
            if (a = b.shift())
                this.Aa = a;
            if (a = b.shift())
                this.wa = RegExp(a);
            break;
        case 3:
            if (a = b.shift())
                this.Ea = RegExp(a);
            if (a = b.shift())
                this.Fa = RegExp(a);
            if (a = b.shift())
                this.Ia = a;
            if (a = b.shift())
                this.Ga = a;
            if (a = b.shift())
                this.Ha = a;
            break;
        case 5:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.H = a;
            if (a = b.shift())
                this.lb = a;
            break;
        default:
            this.h = !0;
            if (a = b.shift())
                this.g = a;
            if (a = b.shift())
                this.ka = a
        }
        this.g.includes("^/") && ((b = this.Da) ? b = "https?://" + b.slice(+b.startsWith("^"), -b.endsWith("$") || void 0) : b = Q.replaceAll(".", "\\."),
        this.g = this.g.replaceAll("^/", "^(?:" + b + ")?/"))
    }
    ;
    e.Y = function(a) {
        if (this.f && this.O(arguments))
            switch (this.f) {
            case 1:
                this.Jb(a);
                break;
            case 2:
                this.Fb(a);
                break;
            case 4:
                this.Gb(a);
                break;
            case 3:
                this.Ib(a);
                break;
            case 5:
                this.Hb(a)
            }
    }
    ;
    e.U = function(a) {
        var b = this.a, c;
        for (c of document.getElementsByTagName("script"))
            !c.src && a.test(c.text) && b.postMessage([34, null, -1, c.text]);
        b.postMessage([34, this.u()])
    }
    ;
    e.ab = function(a, b, c) {
        if (this.hb && b) {
            var d = this.M(a);
            if (d) {
                this.v.set(a, c);
                window.postMessage([1229212980, d, b], "/");
                return
            }
        }
        c(a)
    }
    ;
    e.Tb = function(a, b) {
        if (a = this.c[a]) {
            var c = this.v.get(a);
            c && (this.v.delete(a),
            c(a, b))
        }
    }
    ;
    e.Wb = function(a) {
        var b = a.data;
        if (Array.isArray(b) && a.origin == Q)
            switch (b[0]) {
            case 1229212977:
                window.postMessage([1229212978, this.ba, this.h, this.nb, this.g, this.H], "/");
                this.hb = !0;
                break;
            case 1229212979:
                this.a.postMessage([36, b[1], b[2]]);
                break;
            case 1229212981:
                this.Tb(b[1], b[2])
            }
    }
    ;
    e.V = function() {
        var a = window.devicePixelRatio
          , b = document.width
          , c = document.body.scrollWidth;
        b && c && (a = b == c ? 0 : b / c);
        return a
    }
    ;
    e.M = function(a) {
        var b = a.l;
        b || (b = a.l = this.ba << 13 | this.gb++,
        a.setAttribute("__idm_id__", b),
        this.c[b] = a);
        return b
    }
    ;
    e.K = function(a) {
        a.A && (window.clearTimeout(a.A),
        a.A = null);
        a.f && (a.f.disconnect(),
        a.f = null);
        this.N && this.N.unobserve(a);
        this.j && this.j.unobserve(a);
        delete this.c[a.l];
        a.l = a.c = a.a = null
    }
    ;
    e.Sa = function(a, b, c) {
        var d = this.M(a);
        if (b || c) {
            for (var f of Z(this.c))
                if (b ? b == f.c : c == f.a)
                    return;
            a.a = c || Y + a.localName + "/" + b;
            a.c = b
        }
        a.f || (b = a.f = new MutationObserver(this.ca.bind(this)),
        b.observe(a, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        b.observe(a.parentElement, {
            childList: !0
        }),
        this.N && this.N.observe(a));
        1 == this.f && t(a, this.S) && (a.j = !0,
        a.v = 10);
        return d
    }
    ;
    e.B = function(a, b, c, d) {
        if (b = this.Sa(a, b, c))
            d && this.j && this.j.observe(a),
            d = this.L(a),
            this.a.postMessage([41, b, a.localName, a.src || a.data, a.a, a.c, d])
    }
    ;
    e.tb = function(a, b, c, d, f, h) {
        var m, l, p, k = window.getComputedStyle.bind(window);
        try {
            var g = 0;
            var q = document.activeElement;
            q && L(q.localName) || (q = document.elementFromPoint(this.ha, this.ia)) && !L(q.localName) && (q = null);
            for (var n of document.querySelectorAll("video,audio,object,embed")) {
                var r = n.localName, u, v = "object" == r || "embed" == r;
                if (v) {
                    var D = n.type.toLowerCase();
                    if (D.startsWith("text/") || D.startsWith("image/"))
                        continue;
                    if ("embed" == r && "application/x-shockwave-flash" != D)
                        continue
                }
                if (n.a && !n.j && (f || h))
                    if (f ? f == n.c : h == n.a)
                        var x = n;
                    else
                        continue;
                else if (u = n.src || n.data)
                    u != a && u != b || (x = n);
                else if (!v)
                    for (var J of n.getElementsByTagName("source"))
                        if ((u = J.src) && (u == a || u == b) && (x = n))
                            break;
                if (x)
                    if ("cover" == k(n).objectFit) {
                        var A = n;
                        x = null
                    } else
                        break;
                if (!(A || q || m)) {
                    if (u) {
                        if ((u == c || u == d) && (m = n))
                            continue;
                        if ("video" == r && u.startsWith("data:audio/"))
                            continue
                    }
                    var B = n.clientWidth
                      , E = n.clientHeight;
                    if (B && E) {
                        var S = n.getBoundingClientRect();
                        if (!(0 >= S.right + window.scrollX || 0 >= S.bottom + window.scrollY))
                            if ("hidden" == k(n).visibility || n.W)
                                "video" == r && (p || (p = n));
                            else {
                                v = B * E;
                                if (g < v && 1.35 * B > E && B < 3 * E) {
                                    g = v;
                                    var ca = n
                                }
                                l || (l = n)
                            }
                    }
                }
            }
        } catch (ea) {}
        (n = x || A || q || m) ? "video" != n.localName && "hidden" == k(n).visibility && (n = null) : n = ca || l || p;
        n && ("embed" != n.localName || n.clientWidth || n.clientHeight || (a = n.parentElement,
        "object" == a.localName && (n = a)),
        this.Sa(n, f, h));
        return n
    }
    ;
    e.sb = function(a, b, c) {
        var d = null, f, h = browser.runtime.getFrameId, m;
        for (m of document.getElementsByTagName("iframe")) {
            var l = m.h;
            null == l && h && (l = m.h = h(m));
            if (l == a) {
                d = m;
                break
            } else
                d || !(f = m.src) || f != b && f != c || (d = m)
        }
        return d && this.M(d)
    }
    ;
    e.L = function(a) {
        var b = null;
        try {
            var c = window.getComputedStyle(a)
              , d = a.getBoundingClientRect()
              , f = this.P
              , h = Math.round(d.width)
              , m = Math.round(d.height);
            if ("hidden" == c.visibility && !a.contentWindow)
                return h > 5 * m ? null : !1;
            if (0 == c.opacity || a.W)
                return !1;
            if (1 == this.f && 0 == a.offsetTop + a.offsetHeight) {
                for (var l = a; l = l.parentElement; ) {
                    var p = window.getComputedStyle(l);
                    if ("block" != p.display)
                        break;
                    if (0 == p.opacity)
                        return !1
                }
                d = a.parentElement.parentElement.getBoundingClientRect();
                f = 0
            }
            var k = Math.round(d.left) + a.clientLeft
              , g = Math.round(d.top) + a.clientTop
              , q = d = 0;
            l = a;
            p = c;
            for (var n, r; f-- && "block" == p.display && (n = l.parentElement) && "div" == n.localName; l = n,
            p = r) {
                r = window.getComputedStyle(n);
                d -= l.offsetLeft;
                q -= l.offsetTop;
                if ("hidden" == r.overflowX) {
                    var u = h - n.offsetWidth - d;
                    0 < d && (h -= d,
                    k += d);
                    0 < u && (h -= u);
                    f = 0
                }
                if ("hidden" == r.overflowY) {
                    var v = m - n.offsetHeight - q;
                    0 < q && (m -= q,
                    g += q);
                    0 < v && (m -= v);
                    f = 0
                }
            }
            switch (a.localName) {
            case "video":
                document.contains(a) && (a.videoWidth || a.a || 1 > a.readyState && 2 == a.networkState) && (b = !1);
                if (15 > h || 10 > m)
                    return b;
                break;
            case "audio":
                if (1 > h && 1 > m)
                    return b;
                var D = !0
            }
            var x = document.documentElement
              , J = x.scrollWidth || x.clientWidth || document.body.scrollWidth
              , A = x.scrollHeight || x.clientHeight || document.body.scrollHeight;
            if (k >= J || g >= A || D && !k && !g)
                return b;
            0 == k && g == -A && h == J && m == A && (g = 0);
            var B = this.V();
            q = a.v || 0;
            b = [k, g + q, k + h, g + m - q, B]
        } catch (E) {}
        return b
    }
    ;
    e.ob = function(a) {
        var b = a.Cb;
        if (b) {
            b = document.elementsFromPoint((b.left + b.right) / 2, (b.top + b.bottom) / 2);
            for (var c, d; (c = b.shift()) && !c.isSameNode(a); ) {
                var f = window.getComputedStyle(c);
                if ("visible" == f.visibility && "0" != f.opacity && !O(f.backgroundColor)) {
                    d = !0;
                    break
                }
            }
            a.W = d
        }
    }
    ;
    e.u = function() {
        var a = P ? 80 : 90;
        try {
            var b = window.top.document.title
        } catch (c) {}
        b || (b = (b = document.head.querySelector('meta[property="og:title"]')) && b.getAttribute("content"),
        a = 70);
        b && (b = b.replace(/^\(\d+\)/, "").replace(/[ \t\r\n\u25B6]+/g, " "),
        b = new String(b.trim()),
        b.src = a);
        return b
    }
    ;
    e.xb = function() {
        if (!document.elementsFromPoint)
            return 0;
        var a = document.documentElement
          , b = a.clientWidth || a.offsetWidth;
        a = (a.clientHeight || window.innerHeight) / 4;
        var c = document.elementsFromPoint(0, 0), d = 0, f = 0, h = 0, m;
        for (m of c)
            if (m.offsetWidth >= b) {
                var l = window.getComputedStyle(m);
                .95 <= l.opacity && (c = l.zIndex,
                "fixed" == l.position ? (l = m.offsetHeight + m.offsetTop,
                d < l && l < a && (d = l,
                f = c)) : h < c && (h = c))
            }
        f < h && (d = 0);
        return d
    }
    ;
    e.ub = function(a, b, c, d, f, h, m, l, p) {
        l && T("text/javascript", l);
        this.kb = a;
        this.ba = b;
        if (d) {
            this.$ = d;
            try {
                window.frameElement && (window.frameElement.h = d)
            } catch (k) {}
        }
        this.Wa(h);
        f && this.Xb(f, F(arguments, 9));
        p && (this.b(2, window, "message", this.Wb),
        T("text/javascript", p));
        "loading" == document.readyState ? this.fa = !0 : this.Y()
    }
    ;
    e.vb = function(a) {
        W = location.hostname.toLowerCase() + location.pathname + location.search;
        this.ga && this.i && (this.i = 0,
        this.ja = window.setTimeout(this.da.bind(this, !1), 3E3));
        this.Y(!0);
        a && this.Wa();
        for (var b of Z(this.c))
            this.ob(b)
    }
    ;
    e.Wa = function(a) {
        if (this.O(arguments)) {
            var b = [21, V.href, document.referrer];
            a && b.push(document.getElementsByTagName("video").length, document.getElementsByTagName("audio").length);
            this.a.postMessage(b)
        }
    }
    ;
    e.zb = function(a) {
        var b = a ? this.O(arguments) : 1;
        if (0 < b || 0 > b && 1 != this.f) {
            b = this.u();
            var c = this.V()
              , d = this.xb();
            this.a.postMessage([24, b, b && b.src, c, d])
        }
    }
    ;
    e.Bb = function(a, b, c, d, f) {
        c || (c = this.sb(b, d, f));
        d = (d = c && this.c[c]) && this.L(d);
        this.a.postMessage([22, a, b, c, d])
    }
    ;
    e.yb = function(a, b) {
        var c = document.getElementsByTagName("a"), d;
        for (d of c)
            try {
                if (d.href == b) {
                    var f = d.download || null;
                    var h = d.innerText.trim() || d.title || null;
                    break
                }
            } catch (m) {}
        this.a.postMessage([35, a, f, h])
    }
    ;
    e.Ab = function(a, b, c, d, f, h, m, l) {
        if (this.O(arguments)) {
            var p = [23, a, b, !1], k, g, q;
            if (b)
                b && ((k = this.c[b]) || (p[3] = !0));
            else {
                if (k = this.tb(c, d, f, h, l, m)) {
                    if (this.ka && (g = t(k, this.ka)))
                        var n = 200;
                    else if (g = k.getAttribute("operadetachedviewtitle"))
                        n = 130;
                    p[2] = b = k.l;
                    p[5] = k.localName;
                    p[6] = k.src || k.data
                } else if (l || m)
                    p[3] = !0;
                !g && (g = this.u()) && (n = g.src,
                (q = aa.exec(g)) && (g = q[1]));
                p[7] = g;
                p[8] = n
            }
            k && (g = this.L(k),
            null != g || document.contains(k) ? p[4] = g : (this.K(k),
            p[3] = !0));
            this.a.postMessage(p)
        }
    }
    ;
    e.wb = function(a, b, c, d) {
        var f = d ? RegExp(d, "i") : null;
        d = this.Va(document, f, b);
        var h = document.getElementsByTagName("iframe"), m;
        for (m of h)
            try {
                var l = m.contentDocument;
                l && !m.src && G(d, this.Va(l, f, b))
            } catch (p) {}
        a = [27, a, this.$, d.length];
        c || (a[4] = d,
        a[5] = V.href,
        P && (a[6] = V.href,
        a[7] = document.title));
        this.a.postMessage(a)
    }
    ;
    e.Va = function(a, b, c) {
        var d = []
          , f = {}
          , h = ""
          , m = ""
          , l = !c;
        if (c) {
            var p = a.getSelection();
            if (!p || p.isCollapsed && !p.toString().trim())
                return d
        }
        for (var k of a.getElementsByTagName("a"))
            if (l || p.containsNode(k, !0))
                try {
                    var g = k.href;
                    g && !f[g] && b.test(g) && (f[g] = d.push([g, 2, k.download || null, k.innerText.trim() || k.title]));
                    c && f[g] && (m += k.innerText,
                    m += "\n")
                } catch (n) {}
        for (k of a.getElementsByTagName("area"))
            if (l || p.containsNode(k, !0))
                try {
                    (g = k.href) && !f[g] && b.test(g) && (f[g] = d.push([g, 2, null, k.alt]))
                } catch (n) {}
        for (k of a.getElementsByTagName("img"))
            if (l || p.containsNode(k, !0))
                try {
                    (g = k.src) && !f[g] && b.test(g) && (f[g] = d.push([g, 3, null, "<<<=IDMTRANSMITIMGPREFIX=>>>" + k.alt])),
                    l && k.onclick && (h += k.onclick,
                    h += "\n")
                } catch (n) {}
        if (c) {
            if (h = p.toString()) {
                c = this.J(m);
                for (g of this.J(h))
                    g && !f[g] && b.test(g) && !c.includes(g) && (f[g] = d.push([g, 1]))
            }
            for (k of a.getElementsByTagName("textarea"))
                if (a = k.selectionStart,
                h = k.selectionEnd,
                (c = p.isCollapsed && a < h) || p.containsNode(k, !0))
                    try {
                        var q = c ? k.value.substring(a, h) : k.value;
                        for (g of this.J(q))
                            g && !f[g] && b.test(g) && (f[g] = d.push([g, 1]))
                    } catch (n) {}
        } else {
            for (k of a.getElementsByTagName("iframe"))
                try {
                    (g = k.src) && !f[g] && b.test(g) && (f[g] = d.push([g, 4]))
                } catch (n) {}
            for (k of a.getElementsByTagName("script"))
                h += k.innerText,
                h += "\n";
            if (h)
                for (g of this.J(h))
                    g && !f[g] && b.test(g) && (f[g] = d.push([g, 5]))
        }
        return d
    }
    ;
    e.J = function(a) {
        if (!this.fb) {
            var b = "\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g, function(d) {
                return this[d]
            }
            .bind({
                "%H": "\\w\\-\u00a0-\ufeff",
                "%T": "\\w\\-.+*()$!,%\u00a0-\ufeff",
                "%Q": "^\\s\\[\\]{}()"
            }));
            this.fb = RegExp(b, "gi")
        }
        for (var c = []; b = this.fb.exec(a); )
            c.push(b.shift());
        return c
    }
    ;
    e.O = function(a) {
        var b = this.i;
        b || (a = y(a && a.callee ? a : arguments),
        a.unshift(arguments.callee.caller),
        this.aa.push(a));
        return b
    }
    ;
    e.Za = function(a) {
        try {
            var b = window.top.document.getElementsByTagName("title")[0]
        } catch (c) {}
        this.i = a && b ? -1 : 1;
        b && (a = this.ga,
        a || (this.ga = a = new MutationObserver(this.da.bind(this))),
        a.observe(b, {
            childList: !0
        }));
        try {
            this.N = new ResizeObserver(this.ca.bind(this))
        } catch (c) {}
        try {
            this.j = new IntersectionObserver(this.ca.bind(this),{
                threshold: .2
            })
        } catch (c) {}
        this.fa && (this.fa = !1,
        this.Y());
        for (a = this.aa; b = a.shift(); )
            b.shift().apply(this, b)
    }
    ;
    e.ca = function(a) {
        if (this.a)
            for (var b of a)
                if (a = b.target,
                a.l)
                    if (document.contains(a)) {
                        var c = b.isIntersecting;
                        null != c && (a.W = !c,
                        a.Cb = c ? b.intersectionRect : null);
                        a.A && window.clearTimeout(a.A);
                        a.A = window.setTimeout(this.Lb.bind(this, a), 200)
                    } else
                        this.a.postMessage([23, null, a.l, !0]),
                        this.K(a)
    }
    ;
    e.Lb = function(a) {
        if (!this.a)
            return this.K(a);
        a.A = null;
        var b = document.contains(a);
        if (b) {
            var c = this.L(a);
            if (1 == this.f && a.j)
                if (c) {
                    var d = t(a, this.S);
                    d && d.href && d.href != a.a && this.B(a, null, d.href)
                } else
                    a.a = a.c = null,
                    b = !1
        } else
            this.K(a);
        this.a.postMessage([23, null, a.l, !b, c])
    }
    ;
    e.da = function(a) {
        if (a)
            window.clearTimeout(this.ja),
            this.ja = window.setTimeout(this.da.bind(this, !1), 1E3);
        else {
            0 > this.i ? this.i = 1 : ++this.i;
            for (var b = this.aa; a = b.shift(); )
                a.shift().apply(this, a)
        }
    }
    ;
    e.Kb = function(a) {
        var b = a.target
          , c = b.localName;
        L(c) && a.url && (b = this.M(b),
        this.a.postMessage([25, b, c, a.url]))
    }
    ;
    e.$a = function(a) {
        !a.repeat && K[a.keyCode] && this.a.postMessage([31, a.keyCode, "keydown" == a.type])
    }
    ;
    e.Ob = function(a) {
        this.mb && this.a.postMessage([28]);
        if (0 == a.button) {
            var b = a.view.getSelection();
            b && b.isCollapsed && !b.toString().trim() && (this.s = 1);
            this.a.postMessage([32, a.button, !0])
        }
    }
    ;
    e.Qb = function(a) {
        if (0 == a.button) {
            this.ha = a.clientX;
            this.ia = a.clientY;
            this.a.postMessage([32, a.button, !1]);
            var b = a.view.getSelection();
            b && this.s && (this.s = b.isCollapsed && !b.toString().trim() ? 0 : 2) && this.a.postMessage([26, a.clientX, a.clientY, this.V()])
        }
    }
    ;
    e.Pb = function() {
        2 == this.s && (this.s = 0)
    }
    ;
    e.Nb = function(a) {
        a = a.target;
        "a" == a.localName && this.a.postMessage([39, a.hasAttribute("download"), a.href, a.download])
    }
    ;
    e.Vb = function() {
        this.a.postMessage([29])
    }
    ;
    e.Ub = function(a) {
        a = a.target;
        this.a.postMessage([30, a.innerWidth, a.innerHeight])
    }
    ;
    e.Mb = function() {
        this.s = 0;
        this.a.postMessage([33])
    }
    ;
    e.b = function(a, b, c, d, f) {
        var h = y(arguments);
        h[3] = d.bind(this);
        this.ea.push(h);
        0 > a ? (b = b[c],
        b.addListener.apply(b, h.slice(3))) : b.addEventListener.apply(b, h.slice(2))
    }
    ;
    e.bb = function(a) {
        for (var b = this.ea, c = 0; c < b.length; c++) {
            var d = b[c][0];
            if (!a || a == d) {
                var f = b.splice(c--, 1).pop()
                  , h = f.splice(0, 2).pop();
                0 > d ? (h = h[f.shift()],
                h.removeListener.apply(h, f)) : h.removeEventListener.apply(h, f)
            }
        }
    }
    ;
    e.Jb = function(a) {
        var b = this.Qa.exec(V.pathname + V.search);
        if (b) {
            var c = t(document.body, this.Pa);
            c && this.B(c, b[1])
        }
        if (!a) {
            X = "youtube";
            Y = "idmrs://youtube/";
            this.P = 2;
            var d, f, h, m;
            a = 0;
            for (var l of document.getElementsByTagName("script")) {
                if (l.src) {
                    if (b = this.I.exec(l.src))
                        a |= 1,
                        this.F[b[1]] ? h = b[1] : d = l.src
                } else if (b = this.Oa.exec(l.text))
                    a |= 2,
                    (m = parseInt(b[1], 10)) && !this.F[m] && (b = this.Ra.exec(l.text)) && (b = this.I.exec(b[1])) && (f = Q + b[0]);
                else if (this.Ja.test(l.text)) {
                    a |= 4;
                    var p = l.outerHTML
                }
                if (7 == a)
                    break
            }
            if (m || h) {
                var k = {};
                k[118] = m;
                k[124] = h
            }
            d || (d = f) ? (b = new XMLHttpRequest,
            b.responseType = "text",
            b.timeout = 1E4,
            b.onreadystatechange = this.Zb.bind(this, d, k, p, b),
            b.open("GET", d, !0),
            b.send()) : (k && this.a.postMessage([37, 1, 2, k]),
            p && this.a.postMessage([34, this.u(), null, p]))
        }
    }
    ;
    e.Zb = function(a, b, c, d) {
        if (4 == d.readyState) {
            var f = this.I.exec(a);
            if ((a = (a = this.Ka.exec(d.response)) && parseInt(a[1] || a[2], 10)) && (!this.F[a] || !this.F[f[1]])) {
                var h = this.La.exec(d.response)
                  , m = this.Ma.exec(d.response);
                d = this.Na.exec(d.response);
                if (h && m && h[2] == m[1]) {
                    f = f && f[1];
                    var l = {};
                    l[118] = a;
                    l[119] = h[0];
                    l[120] = m[0];
                    l[135] = d && d[0];
                    l[124] = f;
                    this.a.postMessage([37, 1, 1, l])
                }
            }
            b && this.a.postMessage([37, 1, 2, b]);
            c && this.a.postMessage([34, this.u(), null, c])
        }
    }
    ;
    e.Fb = function d(b, c) {
        b ? (c && b.shift().disconnect(),
        this.Z.disconnect(),
        this.eb.disconnect(),
        this.cb.clear()) : (this.U(this.ra),
        this.Z = new MutationObserver(this.qb.bind(this)),
        this.eb = new MutationObserver(this.pb.bind(this)),
        this.cb = new Set,
        this.P = 3,
        this.m.startsWith("$") || (this.m = "$<" + this.m.slice(1) + "<"),
        this.o.startsWith("$") || (this.o = "$<" + this.o.slice(1) + "<"),
        this.C.startsWith("$") || (this.C = "$*" + this.C),
        this.D.startsWith("$") || (this.D = "$*" + this.D));
        if (c = this.jb = t(document.body, this.pa)) {
            if (b = this.Z,
            b.observe(c, {
                childList: !0
            }),
            !this.Ua(c, !0) && (c = t(c, this.qa))) {
                var f = t(c, this.m);
                f && b.observe(c, {
                    childList: !0
                });
                b.observe(f || c.parentNode, {
                    childList: !0
                })
            }
        } else
            !b && (c = t(document.body, this.ma)) && (f = new MutationObserver(d.bind(this, b = [])),
            b.push(f),
            f.observe(c, {
                childList: !0
            }))
    }
    ;
    e.Ua = function(b, c) {
        var d = this.Z, f = this.m, h = this.C, m = this.eb, l = this.cb, p = 0, k;
        for (k of t(b, h, []))
            l.has(k) || t(k, h) || (l.add(k),
            m.observe(k, {
                childList: !0,
                subtree: !0
            }),
            c && (b = t(k, f)) && (d.observe(b, {
                childList: !0
            }),
            p++),
            H(k.getElementsByTagName("video"), this.T.bind(this)));
        return p
    }
    ;
    e.qb = function(b) {
        var c = this.jb, d;
        for (d of b) {
            b = d.target.isSameNode(c);
            for (var f of d.addedNodes)
                1 == f.nodeType && this.Ua(f, b)
        }
    }
    ;
    e.pb = function(b) {
        var c = this.v, d = this.o, f;
        for (f of b)
            for (var h of f.addedNodes)
                if (1 == h.nodeType)
                    if (b = h.getElementsByTagName("video"),
                    b.length)
                        H(b, this.T.bind(this));
                    else
                        for (var m of c) {
                            b = m.shift();
                            var l = t(b, d);
                            l && l.contains(h) && this.T(b)
                        }
    }
    ;
    e.T = function(b) {
        if (!b.a) {
            var c = t(b, this.o), d, f = c && t(c, this.sa);
            if (!f) {
                for (var h = this.la, m = this.oa, l = z.bind(["div", "span", "a"]), p, k, g, q, n, r = c; r && m-- && l(r.localName); r = r.parentNode) {
                    var u = k = r
                      , v = h + ":scope:first-child:only-of-type";
                    for (d = 0; "<" == v[d]; d++)
                        ;
                    d && (v = v.slice(d));
                    for (u = u.closest(v); u && d--; u = u.parentElement)
                        ;
                    if (d = u)
                        break;
                    if ((g = r.previousSibling) && "div" == g.localName) {
                        p || (p = r.querySelector('div[role="slider"]'));
                        1 == (n = r.querySelectorAll(h)).length ? d = n[0] : (q = r.nextSibling) && 1 == (n = q.querySelectorAll("ul:scope " + h)).length ? d = n[0] : p && 1 < (n = g.querySelectorAll(h)).length && (d = n[n.length - 1]);
                        break
                    }
                }
                !d && k && 1 == (n = t(k, this.D, [])).length && (d = n[0]);
                !d && c && (d = c.querySelector(":scope >" + h));
                d && (d = d.href);
                !d && 1 == document.getElementsByTagName("video").length && (f = this.na.exec(V.href)) && (f = f[1])
            }
            f || d ? this.B(b, f, d) : this.ab(b, this.ib, this.rb.bind(this))
        }
    }
    ;
    e.rb = function(b, c) {
        c && this.B(b, c)
    }
    ;
    e.Gb = function(b) {
        !b && (this.U(this.ua),
        b = t(document.body, this.Ba)) && (C(b, this.va, this.Db.bind(this)),
        C(b, this.ya, this.X.bind(this)),
        C(b, this.Ca, this.X.bind(this)),
        C(document.body, this.xa, this.X.bind(this)))
    }
    ;
    e.Xa = function(b, c, d) {
        !c && 1 == document.getElementsByTagName("video").length && (c = this.wa.exec(V.href)) && (c = c[1]);
        this.B(b, c, d, !0)
    }
    ;
    e.Db = function(b) {
        for (var c of t(b, this.ta, []))
            H(t(c, this.R, []), this.Ya.bind(this))
    }
    ;
    e.X = function(b) {
        H(t(b, this.R, []), this.Ya.bind(this))
    }
    ;
    e.Ya = function(b) {
        if (!b.a) {
            var c = t(b, this.za);
            c ? this.Xa(b, null, c) : this.ab(b, this.Aa, this.Eb.bind(this))
        }
    }
    ;
    e.Eb = function(b, c) {
        c && this.Xa(b, c)
    }
    ;
    e.Ib = function(b) {
        b || (this.U(this.Ea),
        (b = t(document.body, this.Ga)) && C(b, this.Ha, this.Yb.bind(this)))
    }
    ;
    e.Yb = function(b) {
        if (b = t(b, this.Ia)) {
            var c = this.Fa.exec(W);
            c && this.B(b, c[1])
        }
    }
    ;
    e.Hb = function(b) {
        if (!b) {
            var c = t(document.body, this.lb);
            c && (b = this.u(),
            c = c.outerHTML,
            this.a.postMessage([34, b, null, c.slice(0, c.indexOf(">") + 1)]))
        }
    }
    ;
    function T(b, c) {
        var d = b.startsWith("image/") ? "img" : "script";
        d = document.createElement(d);
        d.src = "data:" + b + ";base64," + c;
        d.onload = d.remove.bind(d);
        document.documentElement.appendChild(d)
    }
    function t(b, c, d) {
        function f(q, n, r) {
            for (; r && n--; )
                r = r.parentElement;
            r && (isNaN(q) || this.push(q),
            this.push(r));
            return r
        }
        if (!c)
            return d;
        var h, m, l = !0, p = d || [], k = c.split(N);
        1 == k.length ? (k[0].startsWith("<") && k.unshift(k.shift().slice(1) + "<"),
        k.unshift(">", NaN)) : k.shift();
        for (; b && (h = k.shift()); ) {
            c = parseInt(k.shift(), 10);
            var g = k.shift().trim();
            for (m = 1; "<" == g[g.length - m]; m++)
                ;
            --m && (g = g.slice(0, -m).trim());
            switch (h) {
            case "<":
                b = U(g ? b.closest(g) : b, m);
                l = !0;
                break;
            case ">":
                b = U(b.querySelector(g), m);
                l = !0;
                break;
            case "{":
                b.closest(g) && (b = null);
                break;
            case "}":
                b.querySelector(g) && (b = null);
                break;
            case "|":
                if (g = g.endsWith(":scope") ? b.closest(g) : b.querySelector(g))
                    return g;
                l = !1;
                break;
            case "&":
                b = f.call(p, c, m, b.querySelector(g));
                l = !1;
                break;
            case "*":
                b.querySelectorAll(g).forEach(f.bind(p, c, m));
                l = !1;
                break;
            case "+":
                g = g ? g.endsWith(":scope") ? b.closest(g) : b.querySelector(g) : b;
                f.call(p, c, m, g);
                l = !1;
                break;
            case "=":
                if (g = b.getAttribute(g))
                    return g;
                l = !1;
                break;
            case "@":
                if (g = b.textContent.trim())
                    return g;
                l = !1
            }
        }
        return p.length ? p : l && b || d
    }
    function C(b, c, d, f, h, m) {
        if (null == f) {
            f = t(b, c, []);
            m = new MutationObserver(C.bind(null, b, c, d, f));
            m.observe(b, {
                childList: !0
            });
            for (var l of f)
                m.observe(l, {
                    childList: !0
                });
            f.length && d(f.G(-1))
        } else
            for (var p of h) {
                for (var k of p.addedNodes)
                    if (1 == k.nodeType) {
                        h = t(b, c, []).slice(f.length);
                        var g = h.G(-1);
                        if (g && k.contains(g)) {
                            G(f, h);
                            for (l of h)
                                m.observe(l, {
                                    childList: !0
                                });
                            for (var q of g.children)
                                d(q)
                        } else
                            p.target.isSameNode(f.G(-1) || b) && d(k)
                    }
                for (k of p.removedNodes)
                    if (1 == k.nodeType)
                        for (h = 0; h < f.length; h++)
                            if (k.contains(f[h])) {
                                f.splice(h);
                                break
                            }
            }
    }
    function U(b, c) {
        for (; b && c--; b = b.parentElement)
            ;
        return b
    }
    function ba(b, c) {
        c && (b[c] = !0);
        return b
    }
    var da = Function.bind.bind(function(b) {
        return this[b]
    })
      , Z = Object.values;
    Z || (Z = function(b) {
        return Object.keys(b).map(da(b))
    }
    );
    String.prototype.replaceAll || (String.prototype.replaceAll = function(b, c) {
        return this.split(b).join(c)
    }
    );
    new R
}
!0;
