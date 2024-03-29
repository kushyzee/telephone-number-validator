const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const matchWithBracket = /^(?:1\s?)?(?:\((\d{3})\)\s?)(\d{3})-(\d{4})$/
const matchWithHyphen = /^(?:1\s)?(?:(\d{3})-)(\d{3})-(\d{4})$/
const matchOnlyNumber = /^(?:1\s)?(?:(\d{3})\s?)(\d{3})\s?(\d{4})$/
const validList = [matchWithBracket, matchWithHyphen, matchOnlyNumber]

const isValid = num => validList.some(regex => regex.test(num))
const validatePhoneNumber = () => {
  const value = userInput.value
  let result = isValid(value)
  console.log(`${result} Us number: value`);
  userInput.value = ''
}

checkBtn.addEventListener('click', ()=>{
  if (!userInput.value) {
    alert("Please provide a phone number")
  }
  else {
    validatePhoneNumber()
  }
})

  // const Pattern = /^(?:1\s?)?(?:\((\d{3})\)[\s-]?|(\d{3})[\s-]?)(\d{3})[\s-]?(\d{4})$/