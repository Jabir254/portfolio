function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

function welcome(name:string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

welcome("jabir")

function getFavouriteNumber(): number {
  return 26;
}

const names = ["Alice", "Bob", "Eve"]

names.forEach(function (s) {
  console.log(s.toUpperCase());
})

function printCoord(pt: {x:number; y: number}) {
  console.log("The coordinate of x is " + pt.x);
  console.log("The coordinate of y is " + pt.y);
}
printCoord({x: 4, y: 9});


