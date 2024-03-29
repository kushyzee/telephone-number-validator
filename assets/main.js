const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const matchWithBracket = /^(?:1\s?)?(?:\((\d{3})\)\s?)(\d{3})-(\d{4})$/;
const matchWithHyphen = /^(?:1\s)?(?:(\d{3})-)(\d{3})-(\d{4})$/;
const matchOnlyNumber = /^(?:1\s)?(?:(\d{3})\s?)(\d{3})\s?(\d{4})$/;
const validList = [matchWithBracket, matchWithHyphen, matchOnlyNumber];

const isValid = (num) => validList.some((regex) => regex.test(num));
const validatePhoneNumber = () => {
  const value = userInput.value;
  let validNumber = isValid(value);

  const para = document.createElement("p");
  if (validNumber) {
    para.className = "valid";
    para.innerHTML = `Valid US number: <span>${value}</span>`;
    result.appendChild(para);
  } else {
    para.className = "invalid";
    para.innerHTML = `Invalid US number: <span>${value}</span>`;
    result.appendChild(para);
  }
  userInput.value = "";
};

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    validatePhoneNumber();
  }
});

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    validatePhoneNumber();
  }
});

clearBtn.addEventListener("click", () => {
  if (result.innerHTML) {
    result.innerHTML = "";
  }
});
