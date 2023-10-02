console.log('Lesson 003 app3');

/*
 * Конструктор та методи
 * Модифікатори доступу:
Майже у всіх мовах, які підтримують ООП, є три модифікатори доступу.
public - це як всі властивості та методи в js, можна викликати будь-де
private - не можна викликати ззовні екземпляра, не наслідується
protected - не можна викликати ззовні екземпляра, але наслідується
 */

class House {
  private street: string;
  private tenants: string[] = [];

  constructor(n: string) {
    this.street = n;
  }

  showAddress(): void {
    console.log('Address: ' + this.street);
  }

  showAddress2(this: House): void {
    console.log('Address: ' + this.street);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

const house = new House('Middle-earth');

house.showAddress(); // Address: Middle-earth
const houseCopy = { showAddress: house.showAddress };
houseCopy.showAddress(); // Address: undefined

house.showAddress2(); // Address: Middle-earth
const houseCopy2 = {
  street: 'dummy',
  showAddress2: house.showAddress2.bind(house),
};

houseCopy2.showAddress2();

house.addTenant('Max1');
house.addTenant('Max2');
house.addTenant('Max3');

house.showTenants();

// house.tenants.push('Max-wrong');
// house.showTenants();
