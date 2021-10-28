class vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add({ x, y }) {
    return new vec(
      this.x + x,
      this.y + y
    );
  }

  sub({ x, y }) {
    return new vec(
      this.x - x,
      this.y - y
    );
  }

  mul(factor) {
    return new vec(
      this.x * factor,
      this.y * factor
    );
  }

  clone() {
    return new vec(
      this.x,
      this.y
    );
  }

  div(factor) {
    return new vec(
      this.x / factor,
      this.y / factor
    );
  }

  mag() {
    return Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2)
    );
  }

  dist(other) {
    return other
      .sub(this)
      .mag();
  }

  unitVector() {
    return this.div(this.mag());
  }

  lerp(other, t) {
    const offset = other
      .sub(this)
      .mul(t);

    return this.add(offset);
  }
}
