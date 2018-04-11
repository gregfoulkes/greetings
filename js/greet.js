var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

var displayCount = document.querySelector('.counterDisplay')

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
var greetNumber = 0

function greetFunction(){

  function greetMe(person){

    if(person != ''){
      var thePerson = ""
      thePerson = person

    }
    return thePerson
  }



  function greetCounter(){
      greetNumber = greetNumber+1;
    return greetNumber;
    }
  //var greetType = ''
  function languageSelect(type){


      if(type === "english"){
        type = 'Hello'
      }

      if(type === "afrikaans"){
        type = 'More'
      }

      if(type === 'xhosa'){
        type = 'Molo'
      }
      return type
    }

  return{
    language: languageSelect,
    greet: greetMe,
    greetCount: greetCounter,
  }
}


function displayName(){
  var greetVariable = greetFunction()
  var gn = greetVariable.greet(greetNameValue())
  var gt = greetVariable.language(btnRadioCheck())
  nameDisplay.innerHTML = gt + ' ' + gn


}

function displayCounter(){
   var greetVariable = greetFunction()
  displayCount.innerHTML = greetVariable.greetCount()

}



 greetBtn.addEventListener('click', function(){
   var greetVariable = greetFunction()

  // greetFunction.greetCounter()
   displayName()
   displayCounter()
   //greetVariable.greetCount()
 });
