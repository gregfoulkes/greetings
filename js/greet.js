function greetFunction(storedUsers){

  var greetNumber = 0;
  var thePerson = '';
  var languages = '';
  var  nameMap = {}

  function greetMe(name,type){
  //  console.log(storedUsers)

    if(name != ''){
      thePerson = name
    }

    if (storedUsers){
      nameMap = storedUsers
    }

    if(thePerson !== ""){

    if(nameMap[thePerson] === undefined){

     nameMap[thePerson] = 0;
   }}


    if(type === "english"){
      languages = 'Hello, ' + thePerson
    }

    if(type === "afrikaans"){
      languages = 'More, ' + thePerson
    }

    if(type === 'xhosa'){
      languages = 'Molo, ' + thePerson
    }
}

  function returnGreet(){
    return languages
  }

  function greetCounter(storedUsers){
    return Object.keys(nameMap).length;
    }

  function greetMap(storedUsers){
    return nameMap
  }
  function resetMap(){
    return nameMap ={};
  }

  return{

    greeting: returnGreet,
    map: greetMap,
    greetPerson: greetMe,
    greetCountNumber: greetCounter,
    reset:resetMap

  }
}
