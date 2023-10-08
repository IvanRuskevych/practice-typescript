/**
 * Скорочення ініціалізації
 */

// =========================
class House4 {
  //   private street: string;
  //   private tenants: string[] = [];

  //   constructor(n: string) {
  //     this.street = n;
  //   }

  constructor(private tenants: string[], private street: string) {}

  showAddress(): void {
    console.log('Address: ' + this.street);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }

  public showTenants() {
    console.log('House4', this.tenants);
  }
}

const house4 = new House4([], 'street');

house4.addTenant('tzu');
house4.showTenants();
