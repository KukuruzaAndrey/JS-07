import {Fighter} from "./Fighter";
import {ImprovedFighter} from "./ImprovedFighter";
import {IFighter} from "./IFighter";

export class Fight {
    static fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...point: Array<number>): void {
        let winner: IFighter;
        const log = document.querySelector('.log') as HTMLUListElement;
        const start = document.createElement('li');
        start.innerText = `*** Fight started: ${fighter.name} vs. ${improvedFighter.name} ***`;
        log.appendChild(start);

        for (let index = 0; ; index++) {
            if (fighter.health === 0) {
                winner = improvedFighter;
                break;
            }
            fighter.hit(improvedFighter, point[index % point.length]);

            if (improvedFighter.health === 0) {
                winner = fighter;
                break;
            }
            improvedFighter.doubleHit(fighter, point[index % point.length]);
        }
        const end = document.createElement('li');
        end.innerText = `*** ${winner.name} - winner! ***\nEnd  fight.`;
        log.appendChild(end);
    }
}