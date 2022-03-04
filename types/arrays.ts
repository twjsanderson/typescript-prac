// where all elements are same type
const arr1: string[] = ['43', '423', '423'];


// 2d array
const twoDimensions: string[][] = [
    ['thing'],
    ['another'],
    ['gogo']
];

// typescript knows this is going to be a string
const first = twoDimensions[0]; // ['thing']

const guys: string[] = ['tom', 'joe'];

// ensures map works with types
const mapOfGuys: string[] = guys.map((guy: string): string => {
    return guy;
});

// flexible types
const flexArray: (Date | string | number)[] = [ new Date(), 'hello', 3213];

// becomes tuple when we strictly designated types of each element
const tuple: [string, boolean, number] = ['hello', true, 20];

