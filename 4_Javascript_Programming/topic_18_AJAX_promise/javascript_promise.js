window.onload = function(){

  function cb(url){
    console.log("In cb()");
    return function(resolve, reject){
      console.log("In anonymous callback");
      var http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.onload = function(){
        if(http.status == 200){
          resolve(JSON.parse(http.response)); // Resolving the promise, then() applies
        }else{
          reject(http.statusText); // Rejecting the promise, catch() applies
        }
      };
      http.onerror = function(){
        reject(http.statusText); // Rejecting the promise, catch() applies
      };
      http.send();
    };
  }

  function get(url){
    console.log("In get()");
    return new Promise(cb(url));
  }

  var promise = get("data/tweets.json"); // http req process complete. this is the promise.
  console.log("In onload()");
  promise
  .then(function(tweets){
    console.log(tweets);
    return get("data/friends.json");
  })
  .then(function(friends){
    console.log(friends);
    return get("data/videos.json");
  })
  .then(function(videos){
    console.log(videos);

  })
  .catch(function(error){
    console.log(error);
  });




};
