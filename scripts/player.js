import { TimeSystem } from "./timesystem.js";

export class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.energy = 100;
        this.inventory = [];
        this.currentLocation = "cave";
        this.timeSystem = new TimeSystem();
    }
    moveTo(sceneId, energyCost) {
        this.currentLocation = sceneId;
        this.loseEnergy(energyCost);
        this.timeSystem.advance(energyCost * 2);
    }
    loseEnergy(amount) {
        this.energy = Math.max(this.energy - amount, 0);
    }
    takeDamage(amount) {
        this.hp = Math.max(this.hp - amount, 0);
    }
    heal(amount) {
        this.hp = Math.min(this.hp + amount, 100);
    }
    addItem(item) {
        this.inventory.push(item);
    }
}