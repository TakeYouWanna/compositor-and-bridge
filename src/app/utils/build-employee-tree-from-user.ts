import { Director } from '../classes/director';
import { Subordinate } from '../classes/subordinate';
import { User } from '../models/user.model';

export const buildEmployeesTreeFromUser = (user: User) => {
  if (user.children.length) {
    const director = new Director(user.name);
    user.children.forEach((child) => {
      const childEmployee = buildEmployeesTreeFromUser(child);
      director.addChild(childEmployee);
    });
    return director;
  }
  const subordinate: Subordinate = new Subordinate(user.name);
  return subordinate;
};
