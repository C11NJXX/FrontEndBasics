class Car {
    brand;
    model;
    speed;
    isTrunkOpen;
    constructor(brand,model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.isTrunkOpen = false;
    }
    displayInfo() {
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk is ${this.isTrunkOpen ? "opened" : "closed"}`);
    }

    go() {
        if(!this.isTrunkOpen) {
            if(this.speed >= 0 && this.speed <=195) 
            this.speed += 5;
        }else {
            console.log('Refuse to go, the trunk is opened');
        }
    }

    break() {
        if(this.speed >= 5 && this.speed <=200)
        this.speed -= 5
    }
    openTrunk() {
        if(this.speed === 0) {
            this.isTrunkOpen = true;
        }else {
            console.log(`Refused to open, The car is running at speed: ${this.speed}`)
        }
    }
    closeTrunk() {
    }
};

const car1 = new Car('Toyota','Corolla');
const car2 = new Car('Tesla','Model 3');

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();

for(let i = 0 ; i < 100 ; i++ ) {
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
for(let i = 0; i < 100; i++ ) {
    car1.break();
};
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.go();
car1.displayInfo();
