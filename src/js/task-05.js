const refs = {
  inputEl: document.querySelector("#name-input"),
  nameInputEl: document.querySelector("#name-output"),
};
refs.inputEl.addEventListener("input", (event) => {
  refs.nameInputEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    return (refs.nameInputEl.textContent = "Anonymous");
  }
});
