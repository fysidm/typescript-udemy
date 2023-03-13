import 'reflect-metadata';

class Plane {
  color: string = 'red';

  @markFunction('Hi there')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// metadata examples
// const plane = {
//   color: 'red',
// };

// 1. metadata simple example
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// console.log(note);

// const height = Reflect.getMetadata('height', plane);
// console.log(height);

// 2. add metadata in property
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);
