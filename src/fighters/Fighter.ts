import {IFighter} from "./IFighter";

export class Fighter implements IFighter {
    name: string;
    power: number;
    health: number;

    constructor(name: string = 'Fighter', power: number = 10, health: number = 500) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage: number): void {
        this.health = (this.health - damage > 0) ? this.health - damage : 0;
        const log = document.querySelector('.log') as HTMLUListElement;
        const li = document.createElement('li');
        li.innerText = `${this.name} health: ${this.health}`;
        log.appendChild(li);
    }

    hit(enemy: IFighter, point: number = 1): void {
        enemy.setDamage(point * this.power);
    }
}
