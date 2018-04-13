function greetFunction(storedUsers){
var greetNumber = 0;
var thePerson = '';
var languages = '';

var  nameMap = {}

  function greetMe(name,type){
    console.log(storedUsers)

    if(name != ''){
      thePerson = name
    }

    if (storedUsers){
      nameMap = storedUsers
    }

    if(nameMap[thePerson] === undefined){

     nameMap[thePerson] = 0;
    }


    if(type === "english"){
      languages = 'Hello,'
    }

    if(type === "afrikaans"){
      languages = 'More,'
    }

    if(type === 'xhosa'){
      languages = 'Molo,'
    }

    return languages + ' ' + thePerson
}

  function greetCounter(){
    return Object.keys(nameMap).length;
    }

  function greetMap(){
    return nameMap
  }

  return{

    map: greetMap,
    greetPerson: greetMe,
    greetCountNumber: greetCounter,

  }
}
