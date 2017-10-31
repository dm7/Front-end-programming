var eventHandler = function(event){
    console.log(event.type);
    console.log(event.target.nodeType);
    console.log(event.currentTarget.nodeType);
    console.log(event.eventPhase);
    console.log(event.bubbles);
    console.log(event.cancelable);
    console.log(event.timeStamp);
    console.log(event.defaultPrevented);
    console.log(document.readyState);
}
console.log(document.readyState);
document.addEventListener('readystatechange', eventHandler, false);
