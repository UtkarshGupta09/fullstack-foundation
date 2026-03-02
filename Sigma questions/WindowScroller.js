const btn = document.querySelector("#scrollToTop");

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

btn.addEventListener("click", smoothScrollToTop);
