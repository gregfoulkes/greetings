var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

var displayCount = document.querySelector('.counterDisplay')

function btnRadioCheck(){
  var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
    if (checkedRadioBtn){
      var greetingType = checkedRadioBtn.value
    }
  return greetingType
}

function greetMe(){
  var person = nameValue.value

  if(person != ''){
    var thePerson = ""
    thePerson = person
  }
  return thePerson
}
var greetNumber = 0

function greetCounter(){
  greetNumber++;
  return greetNumber;
}

function displayName(thePerson){
  var grt = greetCounter()
  displayCount.innerHTML = grt
  nameDisplay.innerHTML = thePerson
}



 greetBtn.addEventListener('click', function(){
   displayName(greetMe())

 })
