var b = document.getElementsByTagName('button')[0];


var eventDemo = function(event){
  console.log("Event object: " + event);
  console.log("Event's prototype: " + Object.prototype.toString.call(event));
  var p = event;
  while(p !== null){
    console.log(Object.getPrototypeOf(p));
    p = Object.getPrototypeOf(p);
  }
  console.log("Event Target: " + event.target);
  console.log("Event type: " + event.type);
  console.log("Event current target: " + event.currentTarget);

  var imgElement= document.createElement('img');
  imgElement.src = "webtunings.jpg";
  document.body.appendChild(imgElement);
};

b.addEventListener('click', eventDemo, false);
