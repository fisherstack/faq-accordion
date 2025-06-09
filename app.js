const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    const cible = e.currentTarget;
    const faqItem = cible.closest('.faq-item');
    console.log(faqItem);
    faqItem.classList.toggle("active");
/*
    if (faqItem.classList.contains("active")) {
        element.classList.add("hide");
        element.classList.remove("active");
      });
      cible.classList.remove("hide");
      cible.classList.add("active");
    } else {
      siblings.forEach((element) => {
        element.classList.remove("hide");
        element.classList.remove("active");
      });
      cible.classList.add("hide");
      cible.classList.remove("active");
    }
      */
  });
});
