export function createDiv(id, parentEl) {
  var el = document.createElement("div");
  el.setAttribute("id", id);
  parentEl.parent.append(el);
  return {
    el: el,
    append: function (data) {
      el.append(data.el);
    },
  };
}
