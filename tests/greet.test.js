describe ('greetCounter Function', function(){
  it ('Should return 1',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Greg', 'english')
    callGreetFunction.greetPerson('Greg', 'english')

    assert.equal(callGreetFunction.greetCountNumber(),1);
  });

  it ('Should return 2',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Andre', 'english')
    callGreetFunction.greetPerson('Greg', 'english')

    assert.equal(callGreetFunction.greetCountNumber(),2);
  });

  it ('Should return 3',function(){

    var callGreetFunction = greetFunction()

    callGreetFunction.greetPerson('Andre', 'english')
    callGreetFunction.greetPerson('Greg', 'english')
    callGreetFunction.greetPerson('Ayabonga', 'english')

    assert.equal(callGreetFunction.greetCountNumber(),3);
  });
});
