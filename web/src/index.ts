import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { User } from './models/User';

// Add new user
const user = new User({ name: 'new record', age: 1 });

// Update user
// const user = new User({ id: 1 });
// user.set({ name: 'NEW NAME', age: 99 });

// user.save();

// test events
// user.events.on('change', () => {
//   console.log('change');
// })

// user.events.trigger('change');

// on with accessor
// user.on('change', () => {
//   console.log('user was changed')
// });

// fix this problem with arrow function
// console.log(user.get('name'))

// user.on('change', ()=>{
//   console.log('User was changed')
// })

// user.trigger('change')

// Add set
// console.log(user.get('name'));

// user.on('change', () => {
//   console.log('User was changed');
// });

// user.set({name: 'new name'});
// console.log(user.get('name'));

/*** Reminder on how 'this' works in javascript ***/ 
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color)
//   },
// };

// next line will print red
// colors.printColor();

// const printColor = colors.printColor;
// next line will return error
// printColor(); 

/*** A quick reminder on accessors ***/ 
// class Person {
//   constructor(public firstName: string, public lastName: string) { }

//   get fullName(): string {
//     // fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person = new Person('first', 'last');
// console.log(person.fullName)
// // console.log(person.fullName())