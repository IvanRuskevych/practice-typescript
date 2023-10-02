/**
 * Скорочення ініціалізації
 */

// =========================
class House5 {
  private tenants: string[] = [];

  constructor(private street: string, public readonly type: string) {}

  showAddress(): void {
    console.log('Address: ' + this.street);
  }

  addTenant(name: string) {
    this.tenants.push(name);
  }

  showTenants() {
    // this.tenants = ''; //err because of readonly
    console.log('House5->tenants', this.tenants);
  }

  showType(): void {
    // this.type = ''; // err -- readonly
    console.log('House5->type', this.type);
  }
}

const house5 = new House5('street', 'mood');

house5.addTenant('tzu');
house5.showTenants();

// house5.type = ''; // err -- readonly

console.log(house5.type);
