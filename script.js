const stackDialog = document.querySelector(".stack-dialog");
const openStackButton = document.querySelector("[data-open-stack]");
const closeStackButton = document.querySelector(".close-dialog");

openStackButton?.addEventListener("click", () => {
  if (typeof stackDialog?.showModal === "function") {
    stackDialog.showModal();
  }
});

closeStackButton?.addEventListener("click", () => {
  stackDialog?.close();
});

stackDialog?.addEventListener("click", (event) => {
  if (event.target === stackDialog) {
    stackDialog.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && stackDialog?.open) {
    stackDialog.close();
  }
});
