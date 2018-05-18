function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return a / b;
}

function inc(n){
  n++ ;
  return n;
}

function dec(n){
  n--;
  return n;
}

function makeInt(n){
  if(parseInt(n)) {
    return n;
  }
  if(parseInt(n, 10) ){
    return n ;
    
  }
  if(parseInt('nonsense!', 10)){
return NaN ;
}
}
function preserveDecimal(n){
  if(parseFloat(n) ){
    return n;
  }
  
}
