function gcd(num1, num2){
  let reminder = 0;
  let x = Math.abs(num1);
  let y = Math.abs(num2);
  if(x === 0 || y === 0){
    console.log(`There is no gcd for ${num1} and ${num2}`);
  }else if(x == y){
    return x;
  }else if(x > y){
    reminder = x % y;
    if(reminder === 0){
      return y;
    }else{
      while(x !== 0 && y !== 0){
        reminder = y;
        y = x % y;
        x = reminder;
      }
      if( x >= y && x <= reminder){
        return x;
      }else if(y >= x && y <= reminder){
        return y;
      }else{
        return reminder;
      }
    }
  }else{
    reminder = y % x;
    if(reminder === 0){
      return x;
    }else{
      while(x !== 0 && y !== 0){
        reminder = x;
        x = y % x;
        y = reminder;
      }
      if( x >= y && x <= reminder){
        return x;
      }else if(y >= x && y <= reminder){
        return y;
      }else{
        return reminder;
      }
    }
  }
}
