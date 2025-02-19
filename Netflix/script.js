const faq = document.querySelectorAll(".question-list li");

faq.forEach((item) => {
  item.addEventListener("click", () => {
    const clickedAnswer = item.nextElementSibling;

    faq.forEach((e) => {
      const answer = e.nextElementSibling;
      if (answer != clickedAnswer && !answer.classList.contains("hidden")) {
        answer.classList.add("hidden");
        e.children[1].classList.toggle("rotate");
      }
    });

    item.children[1].classList.toggle("rotate");
    clickedAnswer.classList.toggle("hidden");
  });
});
