//ARRAY

let a = 10;
let b = 'MathiTamilGaming';
//console.log(a+b)
let c = [10, 20, 30, 11, 12, 99, -1, 2, 3];
let cc = ['Apple', 'Carrot', 'Beetroot'];
// c 10+20+30 = 60

//Addtion of Array values
//Method 1

let d = c[0];
let e = c[1];
let f = c[2];
let g = console.log(d + e + f);

//Method 2
let h = 0;
for (i = 0; i <= c.length - 1; i++) {
  // i=0 ; 0 <= 3 - 1 = 2 ; h 10 ; i++
  // i=1 ; 1 <= 3 - 1 = 2 ; 10 + 20 h = 30
  h = h + c[i];
}
console.log(h);

//Method 3
let j = console.log(c.reduce((acc, val) => acc + val));
//reduce array value to single array value

//Multiplication of Array values using map

let k = c.map((values) => values * 2);
console.log(k);

//Filter based on Condition

let l = c.filter((items) => items % 2 != 0);
console.log(l);

let m = [...c]; //Spread Operator
console.log(m);
let n = Array.from(m);
//Same can be achieved by - Object.assign(m) OR Object.create(m)
console.log(n);

let o = b.length; // Returns length of the string
console.log(o);

/* String Methods - b = MathiTamilGaming
.length - returns length of the string
.slice(start, end) - supports positive and negative value 
.substring(start, end) - supports positive value alone
substr(start, length)
*/

let p = console.log('Slice Positive Values:' + ' ' + b.slice(1, 3));
p = console.log('Slice Negative Values:' + ' ' + b.slice(-6, -1));
let q = console.log(b.substring(1, 3));
let r = console.log(b.substr(1, 5));

//Reg ex - The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
let s = /mathi/i;
let t = console.log(s.test(b));

//String Templates -
//Template Literals -  use back-ticks (``) rather than the quotes ("") to define a string, ex:

let u = `Hello World`;
console.log(u);

//Interpolation -

let v = `This is the result of variable b and u: ${b} ${u}`;
console.log(v);

//Array Methods -
// pop() - removes last element in array
// push() - appends new element to array
// shift() - removes the first element of an array (and "shifts" the other elements to the left)
// unshift() - adds new elements to the beginning of an array

//Sorting an Array -
let w = console.log(cc.sort()); //Sort works fine for String but for Integer sort needs compare function The compare function compares all the values in the array, two values at a time (a, b).
let x = console.log(c.sort((a, b) => a - b));

//Reversing an Array -
let y = console.log(cc.reverse());

//Find the Highest (or Lowest) Array Value
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
