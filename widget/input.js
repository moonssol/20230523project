import { widget } from "./baseWidget";
import { addControl } from "./core";

export function _createInput(id) {
  var el = document.createElement("input");
  el.setAttribute("id", id);
  // el.addEventListener("keydown", obj.value()); //쓸까말까?
  return {
    id: id,
    el: el,
    getValue: function () {
      return el.value;
    },
    setvalue: function () {
      el.value = "";
    },
    focus: function () {
      el.focus();
    },
    dispose: function () {
      el.remove();
      removeControl(id);
    },
  };
}
export var createInput = widget(_createInput);
// div.append(Widget.input("todoInput", { onKeyDown: onKeyDownTodoInput }));
