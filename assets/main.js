const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validatePhoneNumber = () => {
  console.log(userInput.value);
}

checkBtn.addEventListener('click', ()=>{
  if (!userInput.value) {
    alert("Please provide a phone number")
  }
  else {
    validatePhoneNumber()
  }
})