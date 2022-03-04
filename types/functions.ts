// argument types and return type
const add = (a: number, b: number): number => {
    return a + b
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

// no return, use void
// can return null or undefined
const logger = function(message: string): void {
    console.log(message);
    return null;
    // return undefined
};

// throw an error technically doesn't return anything
// 'never' type will never return any thing
const throwError = (message: string): never => {
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

// regular
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date, forecast.weather)
};

// destructuring
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date, weather)
};

const profile = {
    firstName: 'john',
    showName(name: string): void {
        this.name = name
    },
    coords: {
        x: 12,
        y: 32
    }
};

const { firstName, coords: { x, y } }: { firstName: string; coords : { x: number; y: number; } } = profile;




