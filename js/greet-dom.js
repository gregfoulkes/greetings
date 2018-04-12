var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameAndGreetingDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

var displayCount = document.querySelector('.counterDisplay')

var greetVariable = greetFunction()


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

  var displayGreetPerson = greetVariable.greetPerson(greetNameValue(),btnRadioCheck())

  nameAndGreetingDisplay.innerHTML =  displayGreetPerson
  displayCount.innerHTML = greetVariable.greetCountNumber()
}

 greetBtn.addEventListener('click', function(){
   displayNameandCount()
 });
