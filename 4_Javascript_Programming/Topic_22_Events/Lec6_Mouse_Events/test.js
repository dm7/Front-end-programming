/*
    'nodeValue'    is a little more confusing to use, but faster than innerHTML.
    'innerHTML'    parses content as HTML and takes longer.
    'textContent'  uses straight text, does not parse HTML, and is faster.
    'innerText'    is IE specific and also takes styles into consideration. It won't get hidden text for instance.

*/

/*
    'mouseenter'  is not a bubbling event.
    'mouseleave'  is not a bubbling event.
*/

/*
    'clientX' is the horizontal co-ordinate relative to view port
    'clientY' is the vertical co-ordinate relative to view port
    'screenX' is the horizontal co-ordinate relative to screen
    'screenY' is the vertical co-ordinate relative to screen
*/

/*
    'relatedTarget' helps us understand transition from one element to another
*/

/*
    'button' helps us track left + middle + right button
*/
var f = function(){
  'use strict';
  var eventHandler = function(){
    var p = document.createElement('p');
    p.textContent = 'type= ' + event.type + ';' +
                    ' Target= ' + event.target.id + ';' +
                    ' currentTarget= ' + event.currentTarget.id + ';' +
                    'clientX= ' + event.clientX + ';' +
                    'clientY= ' + event.clientY + ';' +
                    'screenX= ' + event.screenX + ';' +
                    'screenY= ' + event.screenY + ';' +
                    'altKey= '  + event.altKey  + ';' + 
                    'ctrlKey= ' + event.ctrlKey + ';' +
                    'shiftKey= '+ event.shiftKey + ';' +
                    'relatedTarget= ' + event.relatedTarget + ';' +
                    'button= ' + event.button;
    document.body.appendChild(p);
  };

  var divList = document.getElementsByTagName('div');
  var eventList = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseleave', 'mouseenter', ''];

  for(let i = 0; i < divList.length; i++){
    for(let j = 0; j < eventList.length; j++){
      divList[i].addEventListener(eventList[j], eventHandler);
    }
  }
};

window.addEventListener('load', f, false);