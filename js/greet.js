var languageValue = document.querySelector('.languageRadio')

var nameValue = document.querySelector('.greetName')

var nameDisplay = document.querySelector('.displayName')

var greetBtn = document.querySelector('.greetMeBtn')

// function btnRadioCheck(){
//   var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
//     if (checkedRadioBtn){
//       var greetingType = checkedRadioBtn.value
//     }
//   return greetingType
// }
function greetMe(){
  var person = nameValue.value
  console.log(person)

  if(person != ''){
    var thePerson = ""

    thePerson = person
  }
  return thePerson
//  console.log(thePerson)

}

function displayName(thePerson){
//greetMe()
  nameDisplay.innerHTML = thePerson

}

 greetBtn.addEventListener('click', function(){

   displayName(greetMe())

 })
