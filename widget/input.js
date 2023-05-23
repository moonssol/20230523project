export function createInput(id) {
  var el = document.createElement("input");
  el.setAttribute("id", id);
  // el.addEventListener("keydown", obj.value()); //쓸까말까?
  return {
    el: el,
  };
}

// div.append(Widget.input("todoInput", { onKeyDown: onKeyDownTodoInput }));
