

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

    // if(person != ''){
    //   thePerson = person
    //   greetNumber++
    // }

    return thePerson
  }



  function greetCounter(){
  //  console.log(greetNumber);
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
        languages = 'More'
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
