function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

function welcome(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

welcome("jabir")

function getFavouriteNumber(): number {
  return 26;
}

const names = ["Alice", "Bob", "Eve"]

names.forEach(function(s) {
  console.log(s.toUpperCase());
})

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate of x is " + pt.x);
  console.log("The coordinate of y is " + pt.y);
}
printCoord({ x: 4, y: 9 });

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(34)
printId("welcome")

type Point = {
  x: number,
  y: number
}

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
