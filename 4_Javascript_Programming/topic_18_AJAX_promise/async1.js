window.onload = function(){
  var http = new XMLHttpRequest(); // ready state 0

  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
      //console.log(JSON.parse(http.response));
    }
  }
  http.open("GET", "data/tweets.json", true); // ready state 1
  http.send(); // ready state 2
  //console.log(http);
  //console.log("test")

  // jquery approach
  $.get("data/tweets.json", function(data){
    console.log(data) ; // This callback is invoked after async get() is called
  });
  console.log("test");
}
/* READY states

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/
