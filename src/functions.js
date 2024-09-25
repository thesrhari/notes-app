export function toggleInputField() {
  const divElement = document.querySelector(".input-field");
  if (divElement.style.display === "none") {
    showInputField();
  } else {
    hideInputField();
  }
}

export function showInputField() {
  document.querySelector(".input-field").style.display = "flex";
  document.querySelector(".toggle-note-btn").textContent = "Cancel";
}

export function hideInputField() {
  document.querySelector(".input-field").style.display = "none";
  document.querySelector(".toggle-note-btn").textContent = "New Note";
}
