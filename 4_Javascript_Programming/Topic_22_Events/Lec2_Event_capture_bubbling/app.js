var divList = document.getElementsByTagName('div');

var eventHandler = function(event){
  console.log('current target: ' + event.currentTarget.dataset.name);
  console.log('target: ' + event.target.dataset.name);
  console.log('----');
}
for(var index = 0; index < divList.length; index++){
  divList[index].addEventListener('click', eventHandler, true); //Event capture
  //divList[index].addEventListener('click', eventHandler, false); //Event bubble
}
