import { Employee } from './employee';

export class Director extends Employee {
  private children: Employee[] = [];

  public addChild(child: Employee): void {
    this.children = [...this.children, child];
    child.setParent(this);
  }

  public removeChildren(childToRemove: Employee): void {
    this.children = this.children.filter((child) => child !== childToRemove);
    childToRemove.setParent(null);
  }

  public changeSelectionState(): void {
    this.setSelectionState(!this.isSelected);
    this.checkParentSelectionState();
  }

  public setSelectionState(isSelected: boolean): void {
    this.isSelected = isSelected;
    this.children.forEach((child) => {
      child.setSelectionState(isSelected);
    });
  }

  public override checkSelectionState(): void {
    const isAllChildrenSelected = this.children.every(
      (child) => child.isSelected
    );
    this.isSelected = isAllChildrenSelected;
    this.checkParentSelectionState();
  }

  private checkParentSelectionState(): void {
    if (this.parent) {
      this.parent.checkSelectionState();
    }
  }
}
