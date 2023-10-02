/**
 * Статичні методи та властивості
 */

class UseStatic {
  private static count: number = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static isStaticMethod() {
    console.log('Run static method');
  }

  public showCount() {
    console.log('Count: ', UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
// const obj4 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();
// obj4.showCount();

UseStatic.isStaticMethod();
