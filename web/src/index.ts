import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { User } from './models/User';

// Add new user
const user = new User({ name: 'new record', age: 1 });

// Update user
// const user = new User({ id: 1 });
// user.set({ name: 'NEW NAME', age: 99 });

user.save();