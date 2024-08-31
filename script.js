const data = [
  {
    question: "What is the use of the isNaN function?",
    answer:
      "The number isNan function determines whether the passed value is NaN (Not a number) and is of the type “Number”. In JavaScript, the value NaN is considered a type of number. It returns true if the argument is not a number, else it returns false.",
  },
  {
    question: "What is the ‘this’ keyword in JavaScript?",
    answer:
      "Functions in JavaScript are essential objects. Like objects, it can be assign to variables, pass to other functions, and return from functions. And much like objects, they have their own properties. ‘this’ stores the current execution context of the JavaScript program. Thus, when it use inside a function, the value of ‘this’ will change depending on how the function is defined, how it is invoked, and the default execution context.",
  },
  {
    question: "Does JavaScript support automatic type conversion? ",
    answer: "Yes, JavaScript supports automatic type conversion.",
  },
];

const accorgion = document.querySelector(".accorgion");

data.forEach((item) => {
  const accorgion__item = document.createElement("div");
  accorgion__item.className = "accorgion__item";
  const item_title = document.createElement("div");
  item_title.className = "accorgion__item-title";
  const title_text = document.createElement("h3");
  title_text.textContent = item.question;
  const svg = document.createElement("span");
  svg.className = "arrow";
  svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>`;
  item_title.append(title_text);
  item_title.append(svg);
  const item_text = document.createElement("p");
  item_text.className = "accorgion__item-text";
  item_text.textContent = item.answer;
  accorgion__item.append(item_title);
  accorgion__item.append(item_text);
  accorgion.append(accorgion__item);
});

const accorgion__item = document.querySelectorAll(".accorgion__item");

accorgion__item.forEach(
  (item) =>
    (item.onclick = () => {
      item.classList.toggle("active");
    })
);
