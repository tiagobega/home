export class MathUtils {
  static lerp(start: number, end: number, amount: number) {
    return start + (end - start) * amount;
  }
}
