export function createList(id, option) {
  var el = document.createElement("ul");
  el.setAttribute("id", id);
  el.style.listStyle = "none";
  el.style.padding = "0";
  el.textContent = id;

  //datas = 배열
  //columns = 열들
  function render(datas, columns) {
    datas.forEach(function (data) {
      var liEl = document.createElement("li");
      columns.forEach(function (column) {
        var control = column.render(data);
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
      render(datas, option.columns);
    },
    getValue: function () {
      return el.value;
    },
  };
}
