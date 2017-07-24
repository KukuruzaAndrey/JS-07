import {Fight} from "./fighters/Fight";
import {Fighter} from "./fighters/Fighter";
import {ImprovedFighter} from "./fighters/ImprovedFighter";

const fighterNameEl = document.querySelector('.fighter .name') as HTMLInputElement;
const fighterPowerEl = document.querySelector('.fighter .power') as HTMLInputElement;
const fighterHealthEl = document.querySelector('.fighter .health') as HTMLInputElement;

const improvedFighterNameEl = document.querySelector('.improved-fighter  .name') as HTMLInputElement;
const improvedFighterPowerEl = document.querySelector('.improved-fighter  .power') as HTMLInputElement;
const improvedFighterHealthEl = document.querySelector('.improved-fighter  .health') as HTMLInputElement;

const pointsEl = document.querySelector('.points') as HTMLInputElement;
const buttonOkEl = document.querySelector('#ok') as HTMLButtonElement;
const logEL = document.querySelector('.log') as HTMLUListElement;

let fighter: Fighter;
let improvedFighter: ImprovedFighter;
let points: Array<number>;
buttonOkEl.addEventListener('click', () => {
    fighter = new Fighter(fighterNameEl.value, Number(fighterPowerEl.value), Number(fighterHealthEl.value));
    improvedFighter = new ImprovedFighter(
        improvedFighterNameEl.value,
        Number(improvedFighterPowerEl.value),
        Number(improvedFighterHealthEl.value));

    logEL.innerHTML = '';
    points = pointsEl.value.split(',').map(el => Number(el));
    Fight.fight(fighter, improvedFighter, ...points);
});
