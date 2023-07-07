import { widget } from "./baseWidget";
import { addControl } from "./core";

export function _createButton(id, option) {
  var el = document.createElement("button");
  el.setAttribute("id", id);
  el.textContent = option.label;
  el.onclick = option.onClick;
  //el이 아닌 el을 wrapping한 객체를 던져주기. 버튼 이외의 이벤트 추가해서 제공하기 위해.
  var control = { el: el, id: id };
  // addControl(control);
  // return control;
}

export var createButton = widget(_createButton);
