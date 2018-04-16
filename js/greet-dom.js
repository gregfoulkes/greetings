var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameAndGreetingDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

var displayCount = document.querySelector('.counterDisplay')

var resetBtn = document.querySelector('.resetTheBtn')

var storedUsers = localStorage.getItem('nameMap') ? JSON.parse(localStorage.getItem('nameMap')): {};

var greetVariable = greetFunction(storedUsers)


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
  //console.log(greetVariable)

  var displayGreetPerson = greetVariable.greetPerson(greetNameValue(),btnRadioCheck())

  localStorage.setItem('user', JSON.stringify( greetVariable.map()));
  console.log(greetVariable)


  nameAndGreetingDisplay.innerHTML =  displayGreetPerson
  displayCount.innerHTML = greetVariable.greetCountNumber()
}

 greetBtn.addEventListener('click', function(){
   displayNameandCount()
 });

resetBtn.addEventListener('click', function(){
  localStorage.clear()
});
