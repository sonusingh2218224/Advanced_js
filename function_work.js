const x = 10;
b();
a()

console.log(x)
function a() {
    var x = 100
    console.log(x)

    function c() {
        var x = 500;
        console.log(x)
    }
    return c();
}
function b() {
    var x = 1000;
    console.log(x)

}
