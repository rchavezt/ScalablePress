function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  var date = new Date();
  var number = ""  + date.getMilliseconds() + date.getSeconds();
  var result = 0;

  if (n.toString().length < 4) {
  	number = number.substring(0, n.toString().length);
  }

  if (flip()) {
  	result = Math.abs(n - parseInt(number));
  } else {
  	result = Math.abs(parseFloat(n / parseInt(number)).toFixed(0));
  }

  while(result > n){
  	result = parseFloat(result / 2).toFixed(0);
  }

  console.log(result);
}