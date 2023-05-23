//버튼 ui 컴포넌트 만들어보기
export function createButton(id, option) {
  var el = document.createElement("button");
  el.setAttribute("id", id);
  el.textContent = option.label;
  el.onclick = option.onClick;
  //el이 아닌 el을 wrapping한 객체를 던져주기. 버튼 이외의 이벤트 추가해서 제공하기 위해.
  return {
    el: el,
  };
}
