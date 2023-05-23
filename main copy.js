//무엇을 해야 하나요?
//각기 다른 list를 배열로 넣어야 함.
var todolist = [
  {
    id: 1,
    contents: "할일",
    done: true,
  },
  {
    id: 2,
    contents: "완료",
    done: false,
  },
];
/////////////////////////////////
//todolist 그리는 함수
RenderTodoList();
RenderDoneList();
/////////////////////////////////
var inputBtnEl = document.getElementById("todo-input"); // 버튼
var contentsEl = document.getElementById("todo-contents"); // 입력하는 곳.
inputBtnEl.onclick = function () {
  if (!contentsEl.value) {
    alert("할일을 입력해 주세요.");
    return;
  }
  todolist.push({
    id: crypto.randomUUID(), // 유니크한 아이디 만들어주는 값
    contents: contentsEl.value,
    done: false,
  });
  RenderTodoList();
  contentsEl.value = "";
  contentsEl.focus();
};

function RenderTodoList() {
  var todolistEl = document.getElementById("todoList");
  todolist
    .filter(function (item) {
      return !item.done;
    })
    .forEach(function (item) {
      var itemEl = CreateTodoItem(item);
      todolistEl.append(itemEl);
    });
}
//donelist 그리는 함수
function RenderDoneList() {
  var donelistEl = document.getElementById("done-list");
  donelistEl.innerHTML = "DONE-LIST";
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
  //렌더링 작업 진행. 체크박스 / 글씨 / 삭제버튼 만들기.
  var LiEl = document.createElement("li");
  //체크박스 부
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.done; //완료가 된 애는 체크. 안된애는 체크 X.
  checkbox.onchange = function (e) {
    item.done = e.target.checked;
    //target, currentTarget -> 버블링차이.
    RenderTodoList();
    RenderDoneList();
  };

  //콘텐츠 부
  var contents = document.createElement("span");
  contents.textContent = item.contents;
  //삭제 부
  var delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.onclick = function () {
    //todolist에서 item을 삭제하면 됨.
    //filter해서 지우기 - todolist 참조 주소가 바뀜
    // todolist = todolist.filter(function(item){
    //     return item2 !== item;
    // })
    //splice해서 지우기 - 몇번째에서부터몇번째까지 지워라/교체해라 라는 함수. todolist 참조 주소가 바뀌지 않음.
    todolist.splice(todolist.indexOf(item), 1);
    item.done ? RenderDoneList() : RenderTodoList();
  };
  LiEl.append(checkbox);
  LiEl.append(contents);
  LiEl.append(delBtn);

  return LiEl;
  //   var todolistEl = document.getElementById("todo-list");
  //   todolistEl.append(LiEl);
}

//버튼 ui 컴포넌트 만들어보기
