import { addControl } from "./core";
export function widget(creator) {
  return function () {
    var control = creator.apply(null, arguments); //데코레이터패턴. 크리에이터를 그대로 실행한 것.
    //null = this.binding. // arguments : 약속된 keyword로서, 호출할 때 넘겨준 모든 매개변수를 여기에 유사배열로 넣어줌.
    addControl(control);
    return control;
  };
}
