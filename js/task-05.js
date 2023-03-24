// Напиши скрипт, який під час набору тексту в інпуті input#name - input
//     (подія input), підставляє його поточне значення в span#name -
//     output.Якщо інпут порожній, у спані повинен відображатися
//         рядок "Anonymous".

// textInput.addEventListener("input", handleInputChange);

// function handleInputChange(event) {
//   textOutput.textContent = event.currentTarget.value;
//   if (event.currentTarget.value.trim() === "") {
//     textOutput.textContent = "Anonymous";
//   }
// }

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", () => {
  span.textContent = input.value || "Anonymous";
});
