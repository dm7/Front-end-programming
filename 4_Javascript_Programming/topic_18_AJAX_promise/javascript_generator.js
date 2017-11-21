window.onload = function(){

/*
  function* gen(){
    var x = yield 10;
    console.log('Prints: ' + x);
  }

  var myGen = gen();
  console.log(myGen.next());
  console.log('run next again');
  console.log(myGen.next(5));

  Output-
  {value: 10, done: false}
  run next again
  Prints: 5
  {value: undefined, done: true}
*/

  function* f(){
    var tweets = yield $.get("data/tweets.json");
    console.log(tweets);
    var friends = yield $.get("data/friends.json");
    console.log(friends);
    var videos = yield $.get("data/videos.json");
    console.log(videos);
  }

  genWrap(f);

  function genWrap(generator){
    gen = generator();

    function handle(yielded){
      if(! yielded.done){
        yielded.value.then(function(data){ // "yielded.value" is promise interface
          return handle(gen.next(data));
        });
      }
    }


    return handle(gen.next());
  }
}
