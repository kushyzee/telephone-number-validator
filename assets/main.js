const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

// regex for numbers like 1 (555) 555-5555 and (555)555-5555
const matchWithBracket = /^(?:1\s?)?(?:\((\d{3})\)\s?)(\d{3})-(\d{4})$/;
// regex for numbers like 1 555-555-5555 and 555-555-5555
const matchOnlyHyphen = /^(?:1\s)?(?:(\d{3})-)(\d{3})-(\d{4})$/;
// regex for numbers like 1 555 555 5555 and 5555555555
const matchOnlyNumber = /^(?:1\s)?(?:(\d{3})\s?)(\d{3})\s?(\d{4})$/;
const validList = [matchWithBracket, matchOnlyHyphen, matchOnlyNumber];

const isValid = (num) => validList.some((regex) => regex.test(num));

const validatePhoneNumber = () => {
  const value = userInput.value;
  let validNumber = isValid(value);

  const para = document.createElement("p");
  if (validNumber) {
    para.className = "valid";
    para.innerHTML = `Valid US number: <span>${value}</span>`;
    result.prepend(para);
  } else {
    para.className = "invalid";
    para.innerHTML = `Invalid US number: <span>${value}</span>`;
    result.prepend(para);
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
