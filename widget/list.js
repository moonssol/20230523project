export function createList(id, option) {
  var el = document.createElement("ul");
  el.setAttribute("id", id);
  el.style.listStyle = "none";
  el.style.padding = "0";
  el.textContent = id;

  var children = [];
  //datas = 배열
  //columns = 열들
  function render(datas, columns) {
    //나를 없앨 필요는 X. 자식들만 없앴다가 다시 그리는 작업.
    children.forEach(function (child) {
      child.dispose();
    });
    children = [];

    //다시 그리는 작업.
    datas.forEach(function (data) {
      var liEl = document.createElement("li");
      columns.forEach(function (column) {
        var control = column.render(data);
        children.push(control);
        // control.setAttribute("id", column.id);
        liEl.append(control);
      });

      el.append(liEl);
    });
  }
  render(option.datas, option.columns);

  return {
    el: el,
    reload: function (datas) {
      el.innerHTML = "";
      //DOM 말고 컨트롤 단에서 날리고 다시 그려지는 작업 필요
      //개별객체마다 자기 스스로 없어지는 함수를 만들어보기?
      render(datas, option.columns);
    },
    getValue: function () {
      return el.value;
    },
    dispose: function () {
      el.remove();
      removeControl(id);
      //++자기 밑에 있는 애들도 dispose를 해줘야 함.
      //자식 목록을 알고 있어야 함. el에 딸린 목록들.
      //
      children.forEach(function (child) {
        child.dispose();
      });
    },
  };
}
