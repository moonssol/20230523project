import { addControl } from "./core";

export function createDiv(id, parentEl) {
  var el = document.createElement("div");
  el.setAttribute("id", id);
  parentEl.parent.append(el);
  var control = {
    el: el,
    id: id,
    append: function (data) {
      //data.sthfunction(el) 식으로 주는게 더 낫긴 한데.
      el.append(data.el);
    },
  };
  addControl(control);
  return control;
}
