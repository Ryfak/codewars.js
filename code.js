task 01 - https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR3uaQ4X5ksQIMea2Kjc8zR5D8RxfFRnLLJGHJy-mh1NhYoL03xTNqKoI0c

function mackReturnNumberCallback(number) {
  return function() {
    return number;
  }
}
function buildFun(n){
	var res = []
	for (var i = 0; i< n; i++){
		   res.push(mackReturnNumberCallback(i));
		}
    return res;
	}
  
  
  
 task 02 - https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR3hu9BQaRYKbs5VzErFhSq12HcAVHT6omUcN6PiGaLPciF8G4xq0sUqqkY
 
 function circleCircumference(circle) {
 return (circle.radius * 2) * Math.PI
}


task 03 - https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR32fw0D4yNmwpxdTnyW0aFNh6UdSb6VMilGKzz1W6FatLe1YUh61cinljM

function whatNumberIsIt(n){
  
funcion whatNumberIsIt(n) {
let rTextPrefix = 'Input number is Number.';
if (isNan(n)) {
   return rTextPrefix + 'NaN'
}
else if (Number.MAX_VALUE == n) {
 return rTextprefix + 'MAX_VALUE';
 }
 else if (Number.MIn_VALUE == n) {
 return rTextprefix + 'MIN_VALUE';
 }
 else if (Number.NEGATIVE_INFINITY == n) {
 return rTextprefix + 'NEGATIVE_INFINITY';
 }
 else if (Number.POSITIVE_INFINITY == n) {
 return rTextprefix + 'POSITIVE_INFINITY';
   }
 }
 
 
 
 
 
 
 
 
 
