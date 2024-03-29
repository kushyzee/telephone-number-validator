const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const denyList = []

const checkCountryCode = value => {
  value = value.replace(/[^0-9]/g, "");
  if (value.length !== 11 || value[0] != 1) {
    return false
  } else {
    return true
  }
}
const validatePhoneNumber = () => {
  const value = userInput.value
  if (!checkCountryCode(value)) {
    console.log(`invalid Us number: ${value}`)
    return;
  }

  console.log(value);
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