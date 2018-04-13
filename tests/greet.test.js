describe ('greetCounter Function', function(){
  it ('Should return 1',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Greg')
    callGreetFunction.greetPerson('Greg')

    assert.equal(callGreetFunction.greetCountNumber(),1);
  });

  it ('Should return 2',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Andre')
    callGreetFunction.greetPerson('Greg')

    assert.equal(callGreetFunction.greetCountNumber(),2);
  });

  it ('Should return 3',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Andre')
    callGreetFunction.greetPerson('Greg')
    callGreetFunction.greetPerson('Ayabonga')

    //assert.equal(callGreetFunction.greetPerson('Andre','English'), 'Hello Andre')
    assert.equal(callGreetFunction.greetCountNumber(),3);
  });

  it ('Should return Hello Andre',function(){

    var callGreetFunction = greetFunction()

    assert.equal(callGreetFunction.greetPerson('Andre','english'), 'Hello, Andre')
  });

  it ('Should return Molo Ayabonga',function(){

    var callGreetFunction = greetFunction()

    assert.equal(callGreetFunction.greetPerson('Ayabonga','xhosa'), 'Molo, Ayabonga')
  });

  it ('Should return More Ross',function(){

    var callGreetFunction = greetFunction()

    assert.equal(callGreetFunction.greetPerson('Ross','afrikaans'), 'More, Ross')
  });
});
