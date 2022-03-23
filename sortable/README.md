to create tsconfig.json
run tsc --init

in tsconfig 
rootDir is where tsc should watch for all files as the 'source' of our app
outDir is where the built files in JS should end up

you can run tsc to compile everything to JS in the build file
'tsc'

or run 'tsc -w'

to watch and recompile everytime you change the code in your ts files

with nodemon and concurrently
"scripts": {
    "start:build": "tsx -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

start - runs concurrently and looks for all start scripts with anything after them (Ie. after the colons)

-----------------------
union operators 

const infor: number[] | string = [1,2 3, 4]

will only allow methods that both types can use
ie. string and array don't both have .push() so your cant use .push() on infor variable

You could use a type guard conitional to help when using various methods

if (infor instanceof Array) {
  // use array methods
}

--------------

enums - enumeration an objkect that stores data, similar to Objects

const res = {
  away: 'A',
  home: 'H'
}

into enum 

enum Res = {
  away = 'A';
  home = 'H';
}

// whatever we return it will be one of the values from the enum properties
const go = (): Res => {
  if (val === 'win') {
    return Res.home;
  }
}

// array of arrays
type MatchData = [Date, string, MatchResult, string]

// we can then use ->
data: MatchData[]

// the above code will assume its an array of arrays with the following data types inside each sub-array

// Generics
They acts as arguments (with predefined types) that can be used anywhere in a function or class

class Thing<HoldAnything> {
  data:typeofdata;
}

const thisThing = new Thing<number>();
const thisThing2 = new Thing<string>();

Usually refer to generic as T


function print<T>(arr: T[]): void {
  // some code
}

print<string>(['12', '23'])

// 2d array
function print1<T>(arr: T[][]): void {
  // some code
}

print1<string[]>([['12'], ['23']])


// when result has method that may or may not be there
interface House {
  print(): void;
}

function goHouse<T extends House>(arr: T[]) {
  return arr[0].print();
}

goHouse<NewHouse>([someObj, anotherObj])


