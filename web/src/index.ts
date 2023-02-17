import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { User } from './models/User';

// Add new user
// const user = new User({ name: 'new record', age: 1 });

// Update user
// const user = new User({ id: 1 });
// user.set({ name: 'NEW NAME', age: 99 });

// user.save();

// test events
// user.events.on('change', () => {
//   console.log('change');
// })

// user.events.trigger('change');

// A quick reminder on accessors
class Person {
  constructor(public firstName: string, public lastName: string) { }

  // get fullName(): string {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('first', 'last');
// console.log(person.fullName)
console.log(person.fullName())