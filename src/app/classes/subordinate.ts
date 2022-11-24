import { Employee } from './employee';

export class Subordinate extends Employee {
  public changeSelectionState(): void {
    this.setSelectionState(!this.isSelected);
    if (this.parent) {
      this.parent.checkSelectionState();
    }
  }

  public setSelectionState(isSelected: boolean): void {
    this.isSelected = isSelected;
  }
}
