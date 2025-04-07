const{add,subtract,multiply,divide}=require('./math');

 test('add 10 +20 to equal 30' ,() => { expect (add(10,20)).toBe(30);

 });
 test('multiply  13 * 3 to equal 39' ,() => { expect (multiply(13,3)).toBe(39);

 });
 test('subtract  60 -30 to equal 30' ,() => { expect (subtract(60,30)).toBe(30);

 });
 test('divide  10/5 to equal 2' ,() => { expect (divide(10,5)).toBe(2);

 });
