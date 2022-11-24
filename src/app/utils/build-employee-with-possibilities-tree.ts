import { SubordinateWithPossibilities } from './../classes/subordinate-with-possibilities';
import { DirectorWithPossibilities } from './../classes/director-with-possibilities';
import { UserPossibilities } from './../models/user-possibilities.model';
import { Subordinate } from '../classes/subordinate';
import { User } from '../models/user.model';

export const buildEmployeeWithPossibilities = (
  user: User,
  userPossibilities: UserPossibilities
) => {
  if (user.children.length) {
    const director = new DirectorWithPossibilities(
      user.name,
      userPossibilities
    );
    user.children.forEach((child) => {
      const childEmployee = buildEmployeeWithPossibilities(
        child,
        userPossibilities
      );
      director.addChild(childEmployee);
    });
    return director;
  }
  const subordinate: Subordinate = new SubordinateWithPossibilities(
    user.name,
    userPossibilities
  );
  return subordinate;
};
