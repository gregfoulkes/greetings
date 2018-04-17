var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameAndGreetingDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

var displayCount = document.querySelector('.counterDisplay')

var resetBtn = document.querySelector('.resetTheBtn')

var users = localStorage.getItem('users');

var storedUsers = users ? JSON.parse(users): {};

displayCount.innerHTML =  Object.keys(storedUsers).length;

var greetFactoryFunction = greetFunction(storedUsers)

if (nameValue.value === "" || !checkedRadioBtn){
  nameAndGreetingDisplay.innerHTML = 'Enter a Name'
}

function btnRadioCheck(){
  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");
    if (checkedRadioBtn){
      var greetingType = checkedRadioBtn.value
    }
  return greetingType
}

function greetNameValue(){
var person = nameValue.value
return person
}

function displayNameandCount(){

   greetFactoryFunction.greetPerson(greetNameValue(),btnRadioCheck())

  localStorage.setItem('users', JSON.stringify( greetFactoryFunction.map()));


  nameAndGreetingDisplay.innerHTML =  greetFactoryFunction.greeting()
  displayCount.innerHTML = greetFactoryFunction.greetCountNumber()

  if (nameValue.value === ""){
    nameAndGreetingDisplay.innerHTML = 'Enter a Name'
  }
}

 greetBtn.addEventListener('click', function(){
   displayNameandCount()
 });

resetBtn.addEventListener('click', function(){
  localStorage.clear()
});
