var todolist = [];
/////////////////////////////////////////////////////////////
var root = document.getElementById("contents");
var div = Widget.div("container", { parent: root });
div.append(Widget.input("todoInput")); //div가 위, todoInput이 아래.
div.append(Widget.button("btnSave", { label: "입력", onClick: onClickSave }));

var todorender = div.append(
  Widget.list("todoList", {
    datas: getSortedTodoList({ done: false }),
    columns: [
      { id: "done", render: renderColumnDone },
      { id: "todo", render: renderColumnTodo },
      { id: "delete", render: renderColumnDelete },
    ],
  })
);
var donerender = div.append(
  Widget.list("doneList", {
    datas: getSortedTodoList({ done: true }),
    columns: [
      { id: "done", render: renderColumnDone },
      { id: "todo", render: renderColumnTodo },
      { id: "delete", render: renderColumnDelete },
    ],
  })
);
/////////////////////////////////////////////////////////////
function onClickSave() {
  var contentsEl = document.getElementById("todoInput");
  if (!contentsEl.value) {
    alert("할일을 입력해 주세요.");
    return;
  }
  todolist.push({
    id: crypto.randomUUID(),
    contents: contentsEl.value,
    done: false,
  });
  RenderTodoList();
  contentsEl.value = "";
  contentsEl.focus();
  //화면에서 바로 렌더링 하는 작업 필요
}

function getSortedTodoList(item) {
  return todolist.filter(function (tempitem) {
    return tempitem.done == item.done;
  });
}
function renderColumnDone(data) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = data.done; //완료가 된 애는 체크. 안된애는 체크 X.
  checkbox.onchange = function (e) {
    data.done = e.target.checked;
  };
  return checkbox;
}
function renderColumnTodo(data) {
  var contents = document.createElement("span");
  contents.textContent = data.contents;
  return contents;
}
function renderColumnDelete(data) {
  var delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  todolist.splice(todolist.indexOf(data), 1);
  return delBtn;
}
///////////////////////////////////////////////////
//아래 내용 확인 필요..
function RenderTodoList() {
  var todolistEl = document.getElementById("todoList");
  todolistEl.innerHTML = "todoList";
  todolist
    .filter(function (item) {
      return !item.done;
    })
    .forEach(function (item) {
      var itemEl = CreateTodoItem(item);
      todolistEl.append(itemEl);
    });
}

function RenderDoneList() {
  var donelistEl = document.getElementById("doneList");
  donelistEl.innerHTML = "doneList";
  todolist
    .filter(function (item) {
      return item.done;
    })
    .forEach(function (item) {
      var itemEl = CreateTodoItem(item);
      donelistEl.append(itemEl);
    });
}

function CreateTodoItem(item) {
  console.log(item);
  var LiEl = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.done;
  checkbox.onchange = function (e) {
    item.done = e.target.checked;
    RenderTodoList();
    RenderDoneList();
  };

  var contents = document.createElement("span");
  contents.textContent = item.contents;
  var delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.onclick = function () {
    todolist.splice(todolist.indexOf(item), 1);
    item.done ? RenderDoneList() : RenderTodoList();
  };
  LiEl.append(checkbox);
  LiEl.append(contents);
  LiEl.append(delBtn);

  return LiEl;
}
