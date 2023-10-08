/**
 * Інтерфейси класів. Інтерфейси це публічні дані
 */

interface IPerson2 {
  name: string;
  age?: number; // ? необовязкове поле

  greet(phrase: string): void;
}

// //var 1 -- extends якщо потрібне наслідування/розширення
// interface IPilot extends IPerson2 {
//   flyMessage(): void;
// }

// var 2-- створимо через імплементацію, бо можливо IPilot у нас можливо не буде входити в IPerson
interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson2, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 28) {
      throw new Error('Pilot is too young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  flyMessage(): void {
    console.log('Літак набрав висоту, приємного перельоту');
  }
}

class Terrorist implements IPilot {
  bluff(phrase: string) {
    console.log(phrase);
  }

  public flyMessage(): void {
    console.log('Nashi trebovania: bla bla');
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilottt: IPilot) {
    this.pilot = pilottt;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine() {
    if (!this.pilot) {
      throw new Error('No Pilot in cabin');
    }

    console.log('Розігріваємо реактивні турбіни');

    this.pilot.flyMessage();

    return true;
  }
}

const pilot = new Pilot('Ivan', 32);
const boeing = new Boeing();
pilot.greet('Вас вітає капітан корабля,');
boeing.sitInPlane(pilot);
boeing.startEngine();
// pilot.flyMessage();

// const pilot22 = new Pilot('Ivan', 25); // interface2.ts:29 Uncaught Error: Pilot is too young

const pilotT = new Terrorist();
boeing.sitInPlane(pilotT);
pilotT.bluff('Mi zahvat samoleta');
boeing.startEngine();
