import { UserPossibilities } from '../models/user-possibilities.model';

export class AngularEmployeePossibilities implements UserPossibilities {
  public direction = 'Angular';

  public getPossibilities(name: string): string {
    return `I'm ${this.direction} developer ${name}, I know how to smoke and play cards`;
  }
}
