function plus(x) {
  const n = x;
  let text = '';
  let t = ' ';
  let Col = 1;
  let Row = n;
  let newp = '';
  while(Col <= Row - 1){
    text = text.concat(t);
    Col++;
  }
  while(Row > 0){
    if(text.length > 0){
      newp = newp.concat('+');
      console.log(`${text}${newp}`);
      text = text.slice(0, text.length - 1);
      Row--;
    }else {
      Row = 0;
    }
  }
}
