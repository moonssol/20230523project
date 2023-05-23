//컴포넌트화 예시
var samplebtn = Widget.button({
  label: "샘플",
  onclick: function () {
    alert("샘플입니다.");
  },
});
document.body.append(samplebtn.el);
