var $elem = document.getElementById('output'); 
// $elem.innerHTML += 'Test'
// $elem.innerHTML += 4 + 6;
// $elem.innerHTML += 4 + 6 + ' Demo';
// $elem.innerHTML += 'Demo ' + 4 + 6;
// $elem.innerHTML += 'Demo ' + (4 + 6);


// var testVariable;
// var testVariable = 'ABC';
// var testVariable = '';
var testVariable = null;

var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;