(function() {
    const s = `function FindProxyForURL(url, host) {
            var D = "DIRECT;",
                P = "HTTPS <%=proxyUrl%>;";
            var H = {
                "googleapis.com": 1,
                "googlecode.com": 1,
                "googleusercontent.com": 1,
                "ggpht.com": 1,
                "gstatic.com": 1,
                "gmail.com": 1,
                "googlegroups.com": 1,
                "goo.gl": 1,
                "googleratings.com": 1,
                "test-ggfwzs-proxy.com": 1,
                "t.co": 1,
                "google.com.hk": 1,
                "google.com.tw": 1,
                "google.co.jp": 1,
                "google.co.kr": 1,
                "google.co.th": 1,
                "google.com.vn": 1,
                "google.com.sg": 1,
                "google.com.my": 1,
                "google.com.ru": 1,
                "google.ae": 1,
                "google.com.sa": 1,
                "google.co.in": 1,
                "google.com.np": 1,
                "google.de": 1,
                "google.com.kw": 1,
                "google.com.co": 1,
                "google.fr": 1,
                "google.co.uk": 1,
                "google.it": 1,
                "google.gr": 1,
                "google.pt": 1,
                "google.es": 1,
                "google.co.il": 1,
                "google.ch": 1,
                "google.se": 1,
                "google.nl": 1,
                "google.be": 1,
                "google.at": 1,
                "google.pl": 1,
                "google.pt": 1,
                "google.es": 1,
                "google.fi": 1,
                "google.nl": 1,
                "google.co.hu": 1,
                "google.com.tr": 1,
                "google.ro": 1,
                "google.dk": 1,
                "google.no": 1,
                "google.com.au": 1,
                "google.co.nz": 1,
                "google.ca": 1,
                "google.com": 1,
                "google.com.mx": 1,
                "google.com.br": 1,
                "google.com.ar": 1,
                "google.cl": 1,
                "google.com.pe": 1,
                "google.com.eg": 1,
                "google.com.pa": 1,
                "google.lt": 1,
                "google.bi": 1,
                "google.pn": 1,
                "google.li": 1,
                "google.com.nf": 1,
                "google.vg": 1,
                "google.mw": 1,
                "google.fm": 1,
                "google.sh": 1,
                "google.cd": 1,
                "google.ms": 1,
                "google.co.cr": 1,
                "google.lv": 1,
                "google.ie": 1,
                "google.co.gg": 1,
                "google.co.je": 1,
                "google.pr": 1,
                "google.com.py": 1,
                "google.gm": 1,
                "google.td": 1,
                "google.com.ua": 1,
                "google.co.ve": 1,
                "google.com.tr": 1,
                "google.com.mt": 1,
                "google.com.uy": 1,
                "google.hn": 1,
                "google.com.ni": 1,
                "google.gl": 1,
                "google.kz": 1,
                "google.sm": 1,
                "google.co.mu": 1,
                "google.as": 1,
                "google.uz": 1,
                "google.rw": 1,
                "google.cz": 1,
                "google.ru": 1,
                "google.rs": 1,
                "google.md": 1,
                "google.co.id": 1,
                "googletagmanager.com": 1,
                "accounts.youtube.com": 1,
                "google.com.tj": 1,
                "thinkwithgoogle.com": 1,
                "googletagmanager.com": 1,
                "android.com": 1,
                "wikimedia.org": 1,
                "golang.org": 1,
                "tensorflow.org": 1,
                "wikipedia.org": 1
            };
            var r = host.match(/([^.]*\.([a-z,A-Z]*|com\.[a-z]*|co\.[a-z]*))$/)[1];
            if (r && H.hasOwnProperty(r)) {
                if (host == "scholar.google.com" || host == "scholar.google.com.hk" || host == "scholar.googleusercontent.com") {
                    return "HTTPS www.zhifu.stream:443;"
                } else if (host == "mtalk.google.com") {
                    return D;
                } else {
                    return P;
                }
            } else {
                return D;
            }
        }`;

    function template(template, data) {
        return template.replace(/<%=([^%]*)%>/g, function(s, m) {
            return data[m];
        });
    };

    function getScript(proxyUrl) {
        return template(s, {
            proxyUrl
        });
    }

    window.getScript = getScript;
})();
