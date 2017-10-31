var myGen = function*(){
  one = yield $.get('profile.json');
  two = yield $.get('friend.json');
  three = yield $.get('tweets.json');
  console.log(one, two, three);
  console.log('sham');
};

function smartCode(generator) {
     
    var gen = generator();
    function handleNext(yielded) {
      if (yielded.done) return yielded.value; //return final return value

      if (yielded.value.then) {
        return yielded.value.then(function(res) {
          return handleNext(gen.next(res));
        }, function(err) {
          return handleNext(gen.throw(err));
        });
      } else {
        return handleNext(gen.next(yielded.value));
      }
    }
    return handleNext(gen.next());
}

smartCode(myGen);