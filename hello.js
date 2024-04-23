function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Brendan", new Date());
function welcome(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
welcome("jabir");
function getFavouriteNumber() {
    return 26;
}
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log("The coordinate of x is " + pt.x);
    console.log("The coordinate of y is " + pt.y);
}
printCoord({ x: 4, y: 9 });
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(34);
printId("welcome");
