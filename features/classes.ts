class Vehicle {
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // override method
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();