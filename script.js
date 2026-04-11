function swapImage(button, src) {
  const mainImage = document.getElementById("mainImage");
  if (!mainImage || !src) return;

  if (mainImage.getAttribute("src") !== src) {
    mainImage.setAttribute("src", src);
  }

  const buttons = document.querySelectorAll(".thumbnail-grid button");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });

  if (button) {
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
  }
}
