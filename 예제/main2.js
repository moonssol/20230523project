//할 일 = 배열로 만들기. id, contents, checked
var list = [
  {
    id: 1,
    contents: "SOMETHING",
    checked: false,
  },
  {
    id: 2,
    contents: "HAPPENED",
    checked: true,
  },
];

//그리는 함수 만들기
function Drawing(item) {
  var liEl = document.createElement("li");

  var checkEl = document.createElement("input");
  checkEl.type = "checkbox";
  liEl.append(checkEl);

  var contents = document.createElement("span");
  contents.textContent = item.contents;
  liEl.append(contents);

  var delEl = document.createElement("button");
  delEl.innerHTML = "삭제";
  liEl.append(delEl);
  return liEl;
}
//붙이는 함수 만들기
function RenderTodoList() {
  var todolistEl = document.getElementById("todo-list");
  todolistEl.innerHTML = "TODO-LIST";
  list
    .filter(function (item) {
      return !item.done;
    })
    .forEach(function (item) {
      var itemEl = Drawing(item);
      todolistEl.append(itemEl);
    });
}

RenderTodoList();
