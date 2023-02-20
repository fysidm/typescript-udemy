// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
// import { User, UserProps } from './models/User';
// import { Collection } from "./models/Collection";
// import { UserForm } from "./views/UserForm";
// import { UserEdit } from "./views/UserEdit";
// import { User } from "./models/User";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

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

/*** Fetching user data ***/
// const user = new User({ id: 1 });

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

/*** Saving user data ***/
// const user = new User({ id: 1, name: 'newer name', age: 1 });

// user.on('save', () => {
//   console.log(user);
// });

// user.save();

/*** Extracting model ***/
// const user = User.buildUser({ id: 1 });

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

// example of user operation
// console.log(user.isAdminUser());

/*** Collection ***/
// const collection = new Collection('http://localhost:3000/users');

// collection.on('change', () => {
//   console.log(collection)
// })

// collection.fetch();

/*** Generic Collection ***/
// const collection = new Collection<User, UserProps>(
//   'http://localhost:3000/users',
//   (json: UserProps) => User.buildUser(json)
// );

// collection.on('change', () => {
//   console.log(collection)
// });

// collection.fetch();

/*** Class method for collection ***/
// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection)
// });

// collection.fetch();

/*** Add view class ***/
// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root');

// if (root) {
//   const userEdit = new UserEdit(
//     root,
//     user
//   );

//   userEdit.render();

//   console.log(userEdit)
// } else {
//   throw new Error('Root element not found.');
// }

/*** Add collection view ***/
const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();