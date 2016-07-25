import {
  FETCH_USERS
} from './types';

// static data for App
export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' }
    ]
  };
}
