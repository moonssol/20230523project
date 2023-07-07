//이렇게 위젯하고 익스포트하면 하면 엄청 많아지겠쥬? 그래서 widget이라는 folder 자체를 어디에서든 쓸 수 있게 하는 방법?
//widget만 bundling함. 이후 가져다 쓸 때에는?
//전역에다가 Widget이 붙게.
//쓸 때에는 Widget.button(); 이렇게 쓰게.

//번들링 하는 entry.

import { createButton } from "./button";
import { createList } from "./list";
import { createDiv } from "./div";
import { createInput } from "./input";
import { addControl, getControl } from "./core";

window.Widget = {
  //내가 오픈하고 싶은 것을 할당.
  button: createButton,
  list: createList,
  div: createDiv,
  input: createInput,
  getControl: getControl,
  addControl: addControl,
};
