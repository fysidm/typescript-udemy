import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);