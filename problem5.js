function Hex(x){
  const digit = '0123456789ABCDEF';
  let num = '';
  let hex = '';

  while(x > 0){
    num = num.concat(digit[x % 16]);
    x = Math.floor(x / 16);
  }

  for(let i = num.length - 1; i >= 0; i--){
    hex = hex.concat(num[i]);
  }

  return hex;
}
