function factorial(x){
  let num = x;
  let result = 1;
  for(let i = num; i > 0; i--){
    result = result * num;
    num--;
  }
  return result;
}
