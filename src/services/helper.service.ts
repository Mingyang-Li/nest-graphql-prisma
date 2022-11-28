export class HelperService {
  public randomNumBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
