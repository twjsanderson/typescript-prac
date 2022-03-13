
// protected is the same as private but it still allows the child class to access the method

class Vehicle1 {
    colour: string;

    constructor(colour: string) {
        this.colour = colour;
    }

    protected drive(): void {
        console.log('vroom')
    }
    private honk(): void {
        console.log('honk')
    }
}

class Car1 extends Vehicle1 {
    drive(): void {
        console.log('gooo')
    }
}

const carType = new Car1('red');

carType.drive();
console.log(carType.colour);

// using public stops us from having to reuse the colour variable too many times like what is
// shown above
class Thing {
    constructor(public colour: string) {}
}

class NextThing extends Thing {
    constructor(public wheels: string, public colour: string) {
        super(colour);
    }

}

const thing = new Thing('green');
console.log(thing.colour)

const nextThing = new NextThing('10', 'purple');
console.log(nextThing.colour)