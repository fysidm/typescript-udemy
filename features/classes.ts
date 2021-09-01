class Vehicle {
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
  // override method
  // can not override public method
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();