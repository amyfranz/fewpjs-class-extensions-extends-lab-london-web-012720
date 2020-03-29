class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((sum, cs) => {
      return sum + cs;
    }, 0);
  }
}

class Triangle extends Polygon {
  checkSide(sides, side) {
    return sides[0] + sides[1] > side;
  }

  checkValidSides() {
    return (
      this.checkSide([this.sides[0], this.sides[1]], this.sides[2]) &&
      this.checkSide([this.sides[2], this.sides[1]], this.sides[0]) &&
      this.checkSide([this.sides[0], this.sides[2]], this.sides[1])
    );
  }
  get isValid() {
    return this.checkValidSides() && this.countSides === 3;
  }
}

class Square extends Polygon {
  checkSide(side) {
    return side === this.sides[0];
  }
  checkValidSides() {
    return (
      this.checkSide(this.sides[1]) &&
      this.checkSide(this.sides[2]) &&
      this.checkSide(this.sides[3])
    );
  }
  get isValid() {
    return this.countSides === 4 && this.checkValidSides();
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
