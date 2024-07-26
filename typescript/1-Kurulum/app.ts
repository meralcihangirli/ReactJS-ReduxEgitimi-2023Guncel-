let age: number = 29;
let firstname: string = "Meral";
let lastname: string = "Cihangirli";
let isUpdated: boolean = true;

function display(id: any, name: string) {
  console.log("Id=" + id + ",Name=" + name);
}

//export {};

//if Else
let x: number = 15;
let y: number = 25;

if (x > y) {
  console.log("x y'den büyüktür.");
} else if (x < y) {
  console.log("x y'den küçüktür");
} else {
  console.log("x y'ye eşittir.");
}

//Ternary Operator
x > y
  ? console.log("x y'den büyüktür.")
  : console.log("x y'den küçüktür veya eşittir.");

//Switch Case
let day: number = 2;

switch (day) {
  case 0:
    console.log("Pazar");
    break;
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  case 6:
    console.log("Cumartesi");
    break;
  default:
    console.log("Böyle bir gün yok.");
    break;
}

//For Loop
for (let i = 0; i < 3; i++) {
  console.log("i değerim", i);
}

let arr = [10, 20, 30, 40];

for (let item of arr) {
  console.log(item);
}

let str = "Meral Cihangirli";

for (let item of str) {
  console.log(item);
}

//While Loop-Do While-Break
let counter = 10;

while (counter > 5) {
  console.log(counter);
  counter++;
  if ((counter = 3)) break;
}

do {
  console.log(counter);
  counter++;
} while (counter < 5);

//Function

function add(a: number, b: number): number {
  return a + b;
}

let toplam = add(10, 20);
console.log(toplam);

function birlestir(ad: string, soyad: string): string {
  return ad + " " + soyad;
}
let degisken = birlestir("Meral", "Cihangirli");
console.log(degisken);

//Inheritance
class Person {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  }
}

class Employee extends Person {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}

let employee = new Employee(29, "Meral", "Cihangirli");
console.log(employee.getFullName());

//Static Methods-Properties
class Circle {
  static pi: number = 3.14;
  pi = 3;

  constructor() {
    this.pi++;
    Circle.pi++;
  }

  static hesapla(yaricap: number) {
    return this.pi * yaricap * yaricap;
  }
}

let objem = new Circle();
let objem2 = new Circle();

console.log(objem.pi);
console.log(Circle.pi);
console.log(Circle.hesapla(5));

//Abstract Class
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name:" + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am");
  }
  generateReports(): void {
    console.log("Generating accounting reports....");
  }
}

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();

//Generics
function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let harfler = ["a", "b", "c"];
console.log(getRandomString(harfler));

// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// console.log(getRandomNumber(numbers));
// console.log(getRandomString(harfler));

let degiskenlerim = [true, false, true];
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(harfler));
console.log(getRandomElement<boolean>(degiskenlerim));

//Generic Constraints
function merge<U extends object, V extends object>(object1: U, object2: V) {
  return {
    ...object1,
    ...object2,
  };
}

let person = merge({ name: "Meral" }, { age: 35 });

console.log(person);

//Interfacelerde Generic Kullanımı

interface Months<U, V> {
  key: U;
  value: V;
}

let month: Months<number, string> = {
  key: 1,
  value: "January",
};
console.log(month);

//Classlarda Generic Kullanımı

class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty");
    }
    return this.elements.pop()!;
  }
}
function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers2 = new Stack<number>(5);

while (!numbers2.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers2.push(n);
}

while (!numbers2.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} into the stack.`);
}
