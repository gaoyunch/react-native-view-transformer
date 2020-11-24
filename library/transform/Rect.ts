'use strict';

export default class Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor(left?: number, top?: number, right?: number, bottom?: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  set(left: number, top: number, right: number, bottom: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  width() {
    return this.right - this.left;
  }

  height() {
    return this.bottom - this.top;
  }

  centerX() {
    return (this.left + this.right) / 2;
  }

  centerY() {
    return (this.top + this.bottom) / 2;
  }

  offset(dx: number, dy: number) {
    this.left += dx;
    this.right += dx;
    this.top += dy;
    this.bottom += dy;
    return this;
  }

  copy() {
    return new Rect(this.left, this.top, this.right, this.bottom);
  }


  equals(rect: Rect) {
    return this.left === rect.left && this.top === rect.top && this.right === rect.right && this.bottom && rect.bottom;
  }

  isValid() {
    if (typeof this.left === 'number'
      && typeof this.right === 'number'
      && typeof this.top === 'number'
      && typeof this.bottom === 'number') {
      return true;
    }
    return false;
  }
}