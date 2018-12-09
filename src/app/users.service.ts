import { Injectable } from '@angular/core';
import { User } from './model/github.model';

const users = [
  {
    login: 'spaladini',
    id: 5888794
  },
  {
    login: 'agea',
    id: 5888795
  },
  {
    login: 'marcofabbri',
    id: 5888796
  },
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAll(): Array<User> {
    return users as User[];
  }

  getUserById(id: number): User {
    return users.find(user => user.id === id);
  }
}
