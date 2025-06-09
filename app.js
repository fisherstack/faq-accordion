const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    const cible = e.currentTarget;
    const img = cible.querySelector('img');

    const faqItem = cible.closest('.faq-item');
    console.log("img before click = ", img);
    faqItem.classList.toggle("active");

    if(faqItem.classList.contains("active")) {
        img.setAttribute("src", "assets/images/icon-minus.svg")
    } else {
        img.setAttribute("src", "assets/images/icon-plus.svg")

    }
        console.log("img after click = ", img);
  });
});
