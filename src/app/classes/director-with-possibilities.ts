import { UserPossibilities } from './../models/user-possibilities.model';
import { Director } from './director';

export class DirectorWithPossibilities extends Director {
  public possibilities: UserPossibilities;

  constructor(name: string, possibilities: UserPossibilities) {
    super(name);
    this.possibilities = possibilities;
  }

  public override changeSelectionState(): void {
    const possibilities = this.possibilities.getPossibilities(this.name);
    console.log(possibilities);
    super.changeSelectionState();
  }
}
