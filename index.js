//ARRAY

let a = 10;
let b = 'MATHIVANAN';
//console.log(a+b)
let c = [10, 20, 30];
// c 10+20+30 = 60

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
let j = console.log(
  c.reduce((acc, val) => acc + val)
);
//reduce array value to single array value




