class Car {
    #brand;
    #model;
    _speed;
    isTrunkOpen;
    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
        this._speed = 0;
        this.isTrunkOpen = false;
    }
    getBrand() {
        return this.#brand;
    }
    getModel() {
        return this.#model;
    }
    displayInfo() {
        console.log(`${this.#brand} ${this.#model}, Speed: ${this._speed} km/h, Trunk is ${this.isTrunkOpen ? "opened" : "closed"}`);
    }

    go() {
        if (!this.isTrunkOpen) {
            if (this._speed >= 0 && this._speed <= 195)
                this._speed += 5;
        } else {
            console.log('Refuse to go, the trunk is opened');
        }
    }

    break() {
        if (this._speed >= 5 && this._speed <= 200)
            this._speed -= 5
    }
    openTrunk() {
        if (this._speed === 0) {
            this.isTrunkOpen = true;
        } else {
            console.log(`Refused to open, The car is running at speed: ${this._speed}`)
        }
    }
    closeTrunk() {
    }
};

//before 17d
/*
{
    const car1 = new Car('Toyota', 'Corolla');
    const car2 = new Car('Tesla', 'Model 3');

    console.log(car1);
    console.log(car2);

    car1.displayInfo();
    car2.displayInfo();

    for (let i = 0; i < 100; i++) {
        car1.go();
    }
    car1.break();

    car2.go();
    car2.break();
    car2.break();

    car1.displayInfo();
    car2.displayInfo();

    car1.openTrunk();
    car1.go();
    car1.displayInfo();
    console.log("Break!!!!!!!!!");
    for (let i = 0; i < 100; i++) {
        car1.break();
    };
    car1.displayInfo();
    car1.openTrunk();
    car1.displayInfo();
    car1.go();
    car1.displayInfo();

}
*/

class RaceCar extends Car {
    acceleration;
    constructor(brand, model, acceleration) {
        super(brand, model);
        this.acceleration = acceleration;
    }

    //override go()
    go() {
        if (this._speed >= 0 && this._speed <= 295)
            this._speed += this.acceleration;
    }
    //override openTrunk() and closeTrunk()
    openTrunk() {
        console.log("Race car doesn't have a trunk");
    }
    closeTrunk() {
        console.log("Race car doesn't have a trunk");
    }
    //override displayInfo
    displayInfo() {
        console.log(`${this.getBrand()} ${this.getModel()}, Speed: ${this._speed} km/h, acceleration speed: ${this.acceleration} km/h`);
    }
}

{
    const raceCar = new RaceCar('McLaren', 'F1', 20);
    for(let i = 0 ; i < 13 ; i++ ) {
        raceCar.go();
    }
    raceCar.displayInfo();
    raceCar.openTrunk();
    raceCar.closeTrunk();
}
