//execution context and call stack

var n = 2;

function square(num) {
    const ans = num * num;
    return ans
}
const square2 = square(n);
const square3 = square(4);
console.log(square2);
console.log(square3);

