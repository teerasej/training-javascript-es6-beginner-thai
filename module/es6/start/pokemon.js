'use strict'

class Pokemon {
    
    constructor(name, cp = 100) {
        this.name = name;
        this.cp = cp;
    }

    attack() {
        console.log(`${this.name} attack: ${this.cp}`);
    }
}