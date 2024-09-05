import { Animal } from './Animal';

export class AnimalController {
  static findWinner(animals: Animal[]): Animal {
    return animals.reduce((fastest, current) => 
      current.getSpeed() > fastest.getSpeed() ? current : fastest
    );
  }

  static announceWinner(winner: Animal): void {
    console.log(`Winner is ${winner.getName()} (${winner.getType()}), with speed: ${winner.getSpeed()} km/h`);
  }
}