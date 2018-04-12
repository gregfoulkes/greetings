function greetFunction(){

var greetNumber = 0;
var thePerson = '';
var languages = '';

var nameMap = {}

  function greetMe(value){

    if(nameMap[value] === undefined){

      thePerson = value
      nameMap[value] = thePerson;
      greetNumber++
      localStorage['greetNumber'] = Number(greetNumber)

    }

    // if(value != ''){
    //   value = thePerson
    // }

    return thePerson
  }

  function greetCounter(){
    return greetNumber;
    }

  function languageSelect(type){


      if(type === "english"){
        languages = 'Hello'
      }

      if(type === "afrikaans"){
        languages = 'More'
      }

      if(type === 'xhosa'){
        languages = 'Molo'
      }

      return languages
    }

  return{

    language: languageSelect,
    greetPerson: greetMe,
    greetCountNumber: greetCounter,

  }
}
