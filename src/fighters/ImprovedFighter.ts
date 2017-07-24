import {IFighter} from "./IFighter";
import {Fighter} from "./Fighter";

export class ImprovedFighter extends Fighter {
    doubleHit(enemy: IFighter, point: number = 1) {
        super.hit(enemy, point * 2);
    }
}