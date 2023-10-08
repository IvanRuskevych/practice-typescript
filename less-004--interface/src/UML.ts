/**
 * Наслідування
 */
console.log('<<<---  Наслідування --->>>');
class Animal {
  constructor(public name: string) {}

  say() {
    console.log('Nothing to say');
  }
}

class Cat extends Animal {
  constructor(name: string, private speed: number) {
    super(name);
  }

  say() {
    console.log('Meow!');
  }

  run(time: number) {
    return `${this.name} бігла зі швидкістю ${this.speed} протягом ${time} секунд`;
  }
}

console.log('<<<---  Залежність --->>>');
type ItemType = {
  name: string;
};

class Catalog {
  showCatalog(items: ItemType[]) {
    items.forEach((item) => {
      console.log(item.name);
    });
  }
}

class Items {
  private items: ItemType[] = [];
  setItem(name: string) {
    this.items.push({ name });
  }

  getItems(): ItemType[] {
    return this.items;
  }
}

const items = new Items();
const catalog = new Catalog();

items.setItem('Catalog 1');
items.setItem('Catalog 2');
items.setItem('Catalog 3');

catalog.showCatalog(items.getItems());

console.log('<<<---  Асоціація --->>>');
class DB {
  connection() {
    console.log('Db connected');
  }
}

class Server {
  constructor(private database: DB) {}

  init() {
    this.database.connection();
  }
}

const db = new DB();
const server = new Server(db);

server.init();

console.log('<<<---  Агрегація --->>>');
class Person1 {
  constructor(public name: string) {}
}

class Home1 {
  private guests: Person1[] = [];

  addGuest(guest: Person1) {
    this.guests.push(guest);
  }
}

const home1 = new Home1();

const guest1 = new Person1('Max');
const guest2 = new Person1('Anton');
const guest3 = new Person1('Nikita');

home1.addGuest(guest1);
home1.addGuest(guest2);
home1.addGuest(guest3);

console.log('<<<---  Композиція --->>>');
class Person2 {
  constructor(public name: string) {}
}

class Home2 {
  private tenants: Person2[] = [];

  addTenant(name: string) {
    const tenant = new Person2(name);
    this.tenants.push(tenant);
  }
}

const home2 = new Home2();

home2.addTenant('Max');
home2.addTenant('Anton');
home2.addTenant('Nikita');
