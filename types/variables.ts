const apples: string = 'apple';
const bigNumber: number = 4823904782390;
const values: boolean = true;
const symbol: symbol = Symbol('sym');
const nothing: undefined = undefined;
const nulled: null = null;
const date: Date = new Date();
const array: string[] = ['hi', 'bye'];
const arrayOfNumbers: number[] = [1, 2, 3, 4];
const arrayOfBooleans: boolean[] = [true, false];
class Car {

}
const car: Car = new Car();

// Object literal
const point: { x: number; y: number; }  = {
    x: 10,
    y: 20
};

// annotation from first : to end of void
const fn: (i: number) => void = (i: number) => {
    console.log(i)
};

// type any is also a type, not good to use 
const guy: any = { name: 43234 };




