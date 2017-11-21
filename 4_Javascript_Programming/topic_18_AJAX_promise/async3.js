var tweets;
window.onload = function(){

  function cb(data){
    tweets = data;
  }

  $.get("data/tweets.json", cb);
  console.log("test");

}
