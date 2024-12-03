function textReveal(a) {
  let e = a.intervalSpeed;
  let l = a.repeat;
  let f = a.offsetShow;
  let k = a.offsetHide;
  let c = a.transitionSpeed;
  let g = a.selection;
  let b = a.transition;
  let h = a.overflow;
  let d = a.initialOpacity;
  let i = a.initialPosition;
  let j = a.direction;
  a.intervalSpeed === undefined && (e = 50),
    a.offsetShow === undefined && (f = 0),
    a.offsetHide === undefined && (k = 0),
    a.transitionSpeed === undefined && (c = 1),
    a.selection === undefined && (g = "character"),
    a.overflow === undefined && (h = "hidden"),
    a.initialPosition === undefined && (i = "auto"),
    a.initialOpacity === undefined && (d = "1"),
    a.direction === undefined && (j = "vertical"),
    a.transition === undefined
      ? (b = "cubic-bezier(.23, 1, .32, 1)")
      : a.transition === "bounce" &&
        ((b = "cubic-bezier(.175, .885, .32, 1.275)"), (d = "0"));
  let m = "all " + c + "s " + b;
  $(a.target).each(function () {
    let n = $(this);
    var q = 0;
    var o = n.height() + 20;
    if ((d === "0" && (o /= 2), i !== "auto" && (o = i), j === "horizontal"))
      var o = 0;
    var s = n.text().split(" ");
    n.empty(),
      n.css("opacity", "1"),
      g === "character"
        ? ($.each(s, function (b, a) {
            n.append("<span class='textreveal__word'>" + a + "</span> ");
          }),
          n.find("span").each(function () {
            $(this).html(function (e, a) {
              return a.replace(
                /([^\s])/g,
                '<span class="textreveal__wrap" style="overflow:' +
                  h +
                  '"><span style="bottom: -' +
                  o +
                  "px; -webkit-transition: all " +
                  c +
                  "s " +
                  b +
                  "; transition: all " +
                  c +
                  "s " +
                  b +
                  "; opacity: " +
                  d +
                  '" class="textreveal__text">$1</span></span>'
              );
            });
          }))
        : ((g = "word"),
          $.each(s, function (e, a) {
            n.append(
              '<span class="textreveal__word" style="overflow:' +
                h +
                '"><span class="textreveal__wrap"><span style="bottom: -' +
                o +
                "px; webkit-transition: all " +
                c +
                "s " +
                b +
                "; transition: all " +
                c +
                "s " +
                b +
                "; opacity: " +
                d +
                '" class="textreveal__text">' +
                a +
                "</span></span></span> "
            );
          })),
      j === "horizontal" &&
        ((q = n.find(".textreveal__text").width() + 20),
        n.find(".textreveal__text").css("left", "-" + q + "px"),
        console.log(q, n.find(".textreveal__text")));
    var t;
    a.customLineHeight === undefined
      ? (t = n.css("line-height"))
      : (t = a.customLineHeight),
      n.css("line-height", "0"),
      n.find(".textreveal__wrap").css("line-height", t);
    var p = !0;
    var r;
    $(document).on("resize scroll ready", function () {
      if (n.isInViewport(f) && p === !0) {
        p = !1;
        let b = n.find(".textreveal__text");
        let c = b.length;
        let a = 0;
        r = setInterval(function () {
          a <= c
            ? (b.eq(a).css({ bottom: "0px", left: "0px", opacity: "1" }), a++)
            : clearInterval(r);
        }, e);
      } else
        !n.isInViewport(k) &&
          l !== !1 &&
          ((p = !0),
          clearInterval(r),
          n.find(".textreveal__text").css("transition", "none"),
          n
            .find(".textreveal__text")
            .css({ bottom: "-" + o + "px", left: "-" + q + "px", opacity: d }),
          setTimeout(function () {
            n.find(".textreveal__text").css({ transition: m });
          }, 5));
    }),
      (function () {
        if (n.isInViewport(f) && p === !0) {
          p = !1;
          let b = n.find(".textreveal__text");
          let c = b.length;
          let a = 0;
          r = setInterval(function () {
            a <= c
              ? (b.eq(a).css({ bottom: "0px", left: "0px", opacity: "1" }), a++)
              : clearInterval(r);
          }, e);
        }
      })();
  });
}
$("<style>")
  .prop("type", "text/css")
  .html(
    "    .textreveal__word {        display: inline-block;        margin: -10px 0 0;    }    .textreveal__wrap {        display: inline-block;        padding: 10px 0 0;    }    .textreveal__text {    \tposition: relative;    \twill-change: bottom, left;    }"
  )
  .appendTo("head"),
  ($.fn.isInViewport = function (c) {
    var a = $(this).offset().top;
    var d = a + $(this).outerHeight();
    var b = $(window).scrollTop();
    var e = b + $(window).height();
    return d > b + c && a < e - c;
  });
