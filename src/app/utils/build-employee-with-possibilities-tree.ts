import { SubordinateWithPossibilities } from './../classes/subordinate-with-possibilities';
import { DirectorWithPossibilities } from './../classes/director-with-possibilities';
import { UserPossibilities } from './../models/user-possibilities.model';
import { Subordinate } from '../classes/subordinate';
import { User } from '../models/user.model';

export const buildEmployeeWithPossibilities = (
  user: User,
  possibilities: UserPossibilities
) => {
  if (user.children.length) {
    const director = new DirectorWithPossibilities(user.name, possibilities);
    user.children.forEach((child) => {
      const childEmployee = buildEmployeeWithPossibilities(
        child,
        possibilities
      );
      director.addChild(childEmployee);
    });
    return director;
  }
  const subordinate: Subordinate = new SubordinateWithPossibilities(
    user.name,
    possibilities
  );
  return subordinate;
};
