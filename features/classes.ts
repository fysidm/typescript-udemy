class Vehicle {
  // public drive(): void {
  //   console.log(`chugga chugga`);
  // }

  // color: string = 'red';

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) { }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk();
console.log(vehicle.color);

// class Car extends Vehicle {
//   // override method
//   // can not override public method
//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
// car.honk();