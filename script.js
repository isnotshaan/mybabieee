jQuery(document).ready(function () {
    const colors = [
        "#e03776",
        "#8f3e98",
        "#4687bf",
        "#3bab6f",
        "#f9c25e",
        "#f47274"
      ],
      SVG_NS = "http://www.w3.org/2000/svg",
      SVG_XLINK = "http://www.w3.org/1999/xlink";
    let heartsRy = [];
    function useTheHeart(t) {
      let e = document.createElementNS(SVG_NS, "use");
      (e.n = t),
        e.setAttributeNS(SVG_XLINK, "xlink:href", "#heart"),
        e.setAttributeNS(null, "transform", `scale(${e.n})`),
        e.setAttributeNS(null, "fill", colors[t % colors.length]),
        e.setAttributeNS(null, "x", -69),
        e.setAttributeNS(null, "y", -69),
        e.setAttributeNS(null, "width", 138),
        e.setAttributeNS(null, "height", 138),
        heartsRy.push(e),
        hearts.appendChild(e);
    }
    for (let t = 18; t >= 0; t--) useTheHeart(t);
    function Frame() {
      window.requestAnimationFrame(Frame);
      for (let t = 0; t < heartsRy.length; t++)
        heartsRy[t].n < 18
          ? (heartsRy[t].n += 0.01)
          : ((heartsRy[t].n = 0), hearts.appendChild(heartsRy[t])),
          heartsRy[t].setAttributeNS(
            null,
            "transform",
            `scale(${heartsRy[t].n})`
          );
    }
    Frame();
  });
  