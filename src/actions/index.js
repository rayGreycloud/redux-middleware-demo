import axios from 'axios';

import {
  FETCH_USERS
} from './types';

// static data for App for initial scaffolding
// export function fetchUsers() {
//   return {
//     type: FETCH_USERS,
//     payload: [
//       { name: 'Jane' },
//       { name: 'Alex' },
//       { name: 'Jim' }
//     ]
//   };
// }
export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');
  return {
    type: FETCH_USERS,
    payload: request
  };
}
