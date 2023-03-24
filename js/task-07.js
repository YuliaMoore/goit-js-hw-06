const fontSize = document.querySelector("#font-size-control");
const onText = document.querySelector("#text");

fontSize.addEventListener("input", () => {
  onText.style.fontSize = fontSize.value + "px";
});
