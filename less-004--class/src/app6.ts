/**
 * Наслідування
 */

class House6 {
  private tenants: string[] = [];

  constructor(protected street: string, public readonly type: string) {}

  showAddress(): void {
    console.log('Address: ' + this.street);
  }

  showType(): void {
    console.log('House6->type', this.type);
  }

  addTenant(name: string) {
    this.tenants.push(name);
  }

  showTenants() {
    console.log('House6->tenants', this.tenants);
  }
}

class StoneHouse extends House6 {
  private chargeOfTheHouse: string; // Головний в будинку

  constructor(street: string, generalTenant: string) {
    super('stone', street); // Виклик батьківського конструктора

    // Додаємо власника квартири
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  }

  showGeneral() {
    console.log('General: ' + this.chargeOfTheHouse);

    super.showTenants(); // Запускаємо батьківський метод showTenants();
  }

  showAddress(): void {
    console.log('Address: ' + this.street); // err-->> street is private in class House6-->> protected тоді street буде наслідуватися
  }
}

const stoneHouse = new StoneHouse('StoneHouse street', 'Max-general');

stoneHouse.addTenant('Max1');
stoneHouse.addTenant('Max2');
stoneHouse.addTenant('Max3');

stoneHouse.showGeneral();
