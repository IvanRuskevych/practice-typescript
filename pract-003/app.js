"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
        console.log('class Key -- this.signature', this.signature);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        console.log('class Person--getKey()', this.key);
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            console.log('Door is close', this.door);
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside', 'this.door:', this.door);
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature() !== key.getSignature()) {
            console.log('MyHouse-->>this.key.getSignature()', this.key.getSignature());
            console.log('Key to another door');
            throw new Error('Key to another door');
        }
        return (this.door = true);
    }
}
const key1 = new Key();
const house = new MyHouse(key1);
const person1 = new Person(key1);
house.openDoor(person1.getKey());
house.comeIn(person1);
//# sourceMappingURL=app.js.map