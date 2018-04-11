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


function greetFunction(){

var greetNumber = 0;
var thePerson = '';
var languages = '';

  function greetMe(person){

    if(person != ''){
      thePerson = person
      greetNumber++
    }

    return thePerson
  }



  function greetCounter(){
    console.log(greetNumber);
    return greetNumber;
    }

    // function greetReturn(){
    //   return n
    // }

  function languageSelect(type){


      if(type === "english"){
        languages = 'Hello'
      }

      if(type === "afrikaans"){
        languages = 'Goie More'
      }

      if(type === 'xhosa'){
        languages = 'Molo'
      }

      return languages
    }
  //  greetCounter()
  return{
    //returned: greetReturn,
    language: languageSelect,
    greetPerson: greetMe,
    greetCountNumber: greetCounter,
  }
}

var greetVariable = greetFunction()

function displayNameandCount(){
  var displayGreetPerson = greetVariable.greetPerson(greetNameValue())
  var displayCountNumber = greetVariable.language(btnRadioCheck())
  nameDisplay.innerHTML = displayCountNumber + ' ' + displayGreetPerson
  displayCount.innerHTML = greetVariable.greetCountNumber()
}




 greetBtn.addEventListener('click', function(){
   var greetVariable = greetFunction()
   displayNameandCount()
 });
