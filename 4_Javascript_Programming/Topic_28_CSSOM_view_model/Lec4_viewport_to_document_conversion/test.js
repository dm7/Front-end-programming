var d = document.getElementsByTagName('div')[0];
d.getBoundingClientRect();
var documentCoordinate = d.getBoundingClientRect().top - window.pageYOffset;
console.log(documentCoordinate);