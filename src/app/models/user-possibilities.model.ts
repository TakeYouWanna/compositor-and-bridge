export interface UserPossibilities {
  direction: string;
  getPossibilities: { (name: string): string };
}
