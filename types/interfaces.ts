interface Vehicle {
    name: string; 
    age: number; 
    broken: boolean;
}

const car = {
    name: 'Ford',
    age: 12,
    broken: true
};

// interface with destructuring
const printVehicle = ({ name, age }: Vehicle): void => {
    console.log(name, age)
};  

console.log(printVehicle(car))