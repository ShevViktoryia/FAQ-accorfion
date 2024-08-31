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
  const item_title = document.createElement("h3");
  item_title.className = "accorgion__item-title";
  item_title.textContent = item.question;
  const item_text = document.createElement("p");
  item_text.className = "accorgion__item-text";
  item_text.textContent = item.answer;
  accorgion__item.append(item_title);
  accorgion__item.append(item_text);
  accorgion.append(accorgion__item);
});
