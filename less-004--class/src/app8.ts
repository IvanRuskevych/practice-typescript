/**
 * Abstract classes
 */

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine() {
    // Запускаємо гвинти двигуна
    return 'Ta-ta-ta';
  }
}

class Boeing extends Plane {
  public startEngine() {
    // Розігріваємо реактивні турбіни
    return 'Tu-tu-tu';
  }
}

const maize = new Maize();
const boeing = new Boeing();

maize.sitInPlane();
boeing.sitInPlane();

console.log(maize.startEngine());
console.log(boeing.startEngine());
