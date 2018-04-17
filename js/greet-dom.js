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

nameAndGreetingDisplay.innerHTML = 'Enter a Name'



function displayNameandCount(){

  var checkedRadioBtn = document.querySelector("input[name='languageType']:checked");

  if (checkedRadioBtn){
  var greetingType = checkedRadioBtn.value
  }

  var person = nameValue.value

   greetFactoryFunction.greetPerson(person, greetingType)

   localStorage.setItem('users', JSON.stringify( greetFactoryFunction.map()));


    nameAndGreetingDisplay.innerHTML =  greetFactoryFunction.greeting()
    displayCount.innerHTML = greetFactoryFunction.greetCountNumber()

  if (nameValue.value === ""){
    nameAndGreetingDisplay.innerHTML = 'Please Enter a Name'
  }

  if (!checkedRadioBtn){
    nameAndGreetingDisplay.innerHTML = 'Please Select a Language'
  }

}

greetBtn.addEventListener('click', function(){
   displayNameandCount()
 });

resetBtn.addEventListener('click', function(){
  localStorage.clear();
  displayCount.innerHTML = 0;
  greetFactoryFunction.reset()
  location.reload();

});
