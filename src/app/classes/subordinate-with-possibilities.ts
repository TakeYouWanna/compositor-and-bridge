import { UserPossibilities } from './../models/user-possibilities.model';
import { Subordinate } from './subordinate';

export class SubordinateWithPossibilities extends Subordinate {
  public possibilities: UserPossibilities;

  constructor(name: string, possibilities: UserPossibilities) {
    super(name);
    this.possibilities = possibilities;
  }
}
