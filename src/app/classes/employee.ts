import { User } from '../models/user.model';

export abstract class Employee implements Omit<User, 'children'> {
  protected parent: Employee | null = null;
  public isSelected = false;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getParent(): Employee | null {
    return this.parent;
  }

  public setParent(parent: Employee | null): void {
    this.parent = parent;
  }

  public checkSelectionState(): void {
    if (this.parent) {
      this.isSelected = this.parent.isSelected;
    }
  }

  public abstract changeSelectionState(): void;
  public abstract setSelectionState(isSelected: boolean): void;
}
