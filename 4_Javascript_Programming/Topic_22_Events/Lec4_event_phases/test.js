var eventHandler = function(event){
  console.log(event.type);
  console.log(event.timeStamp);
  console.log(document.readyState);
}

console.log(document.readyState);
document.addEventListener('readystatechange', eventHandler, false);
document.addEventListener('DOMContentLoaded', eventHandler, false);
window.addEventListener('load', eventHandler, false);
