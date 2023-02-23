import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-slate-100">
      <Head />
      <body>
        <Main />
        <NextScript />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            !(function (t, e) {
              var o, n, p, r;
              e.__SV ||
                ((window.frame = e),
                (e._i = []),
                (e.init = function (i, s, a) {
                  function g(t, e) {
                    var o = e.split(".");
                    2 == o.length && ((t = t[o[0]]), (e = o[1])),
                      (t[e] = function () {
                        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                      });
                  }
                  ((p = t.createElement("script")).type = "text/javascript"),
                    (p.async = !0),
                    (p.src = s.api_host + "/static/array.js"),
                    (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(
                      p,
                      r
                    );
                  var u = e;
                  for (
                    void 0 !== a ? (u = e[a] = []) : (a = "frame"),
                      u.people = u.people || [],
                      u.toString = function (t) {
                        var e = "frame";
                        return (
                          "frame" !== a && (e += "." + a), t || (e += " (stub)"), e
                        );
                      },
                      u.people.toString = function () {
                        return u.toString(1) + ".people (stub)";
                      },
                      o =
                        "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(
                          " "
                        ),
                      n = 0;
                    n < o.length;
                    n++
                  )
                    g(u, o[n]);
                  e._i.push([i, s, a]);
                }),
                (e.__SV = 1));
            })(document, window.frame || []);
            frame.init("16OG2oVu4GYg8CjfOQKHl_O7htLut7avxzjNbfLWyuc", {
              api_host: "https://analytics.dev-conductive.ai",
              debug: true,
            });
            `,
          }}
        ></script>
      </body>
    </Html>
  )
}