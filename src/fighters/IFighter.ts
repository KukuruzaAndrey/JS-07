export interface IFighter {
    name: string;
    power: number;
    health: number;
    setDamage: (damage: number) => void;
    hit: (enemy: IFighter, point: number) => void;
}