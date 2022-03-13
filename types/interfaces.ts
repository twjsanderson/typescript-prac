const car = {
    name: 'Ford',
    age: 12,
    broken: true,
    showName(): string {
        return this.name;
    }
};
interface Vehicle {
    name: string; 
    age: number; 
    broken: boolean;
    showName(): string;
}


const printVehicleDetails = (vehicle: Vehicle): any => {
    return vehicle.showName()
};  

console.log(printVehicleDetails(car))
