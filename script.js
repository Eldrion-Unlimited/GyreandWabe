function swapImage(button, src) {
  const mainImage = document.getElementById("mainImage");
  if (!mainImage) return;

  mainImage.src = src;

  const buttons = document.querySelectorAll(".thumbnail-grid button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (button) {
    button.classList.add("active");
  }
}
