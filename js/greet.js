function greetFunction(){

var greetNumber = 0;
var thePerson = '';
var languages = '';

var nameMap = {}

  function greetMe(value,type){

    if(value != ''){
      thePerson = value
    }

    if(nameMap[value] === undefined){
      nameMap[value] = thePerson;
      greetNumber++
      localStorage['greetNumber'] = Number(greetNumber)

    }

    if(type === "english"){
      languages = 'Hello'
    }

    if(type === "afrikaans"){
      languages = 'More'
    }

    if(type === 'xhosa'){
      languages = 'Molo'
    }

    return languages + ' ' + thePerson
  }

  function greetCounter(){
    return greetNumber;
    }

  return{

    greetPerson: greetMe,
    greetCountNumber: greetCounter,

  }
}
