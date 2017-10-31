/*
  DOMReady registers a function that is invoked once DOM is ready for manipulation
  and fully parsed.

  DOMReady(f, document) // f will be invoked as a method of document object once DOM is ready
  DOMReady(f) // f will be invoked as a normal function, once DOM is ready

  If DOM is already loaded/parsed, f will be invoked immediately

*/

var DOMReady = (function (){

  //isDOMReady and methodList serves as a closure for eventHandler function and the returned function
  var isDOMReady = false;
  var methodList = [];

  function eventHandler(event){
    if(isDOMReady){
      console.log('DOM is already loaded');
      logMe(event);
      return;
    }

    // Don't rely on readyState="interactive", It may happen before DOMContentLoaded event
    if(event.type === "readystatechange" && document.readyState !== "complete"){
      console.log('DOM is not fully loaded');
      logMe(event);
      return;
    }

    //invoke all functions/methods
    for(var i = 0; i < methodListlength; i++){
      if(Array.isArray(methodList[i])){
        methodList[i][0].call(methodList[i][1]);
      }else{
        methodList[i]();
      }

      console.log('method executed here');
      logMe(event);
    }

    isDOMReady = true;
  }

  //attach eventhandler for all 3 events

  document.addEventListener('readystatechange', eventHandler, false);
  document.addEventListener('DOMContentLoaded', eventHandler, false);
  window.addEventListener('load', eventHandler, false);

  function logMe(event){
    console.log('Name=' + event.type);
    console.log('Timestamp=' + event.timeStamp);
    console.log('Readystate=' +  document.readyState);
    console.log('-----------------------------');
  }

  return function(method, DOMObject){
    /*
      Example:
      DOMReady(childCount, document);
      DOMReady(imageCount);
    */
    if(isDOMReady){
      DOMObject === undefined ? method() : method.call(DOMObject);
    }else{
      DOMObject === undefined ? methodList.push(method ) : methodList.push([method, DOMObject]);
    }
  };

})();


var childCount = function(){
  console.log(this.childNodes.length);
}


var imageCount = function(){
  console.log(this.getElementsByTagName('img').length);
};

DOMReady(childCount, document);
DOMReady(imageCount);
