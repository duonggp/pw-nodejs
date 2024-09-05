import { Dog } from './Dog';
import { Horse } from './Horse';
import { Tiger } from './Tiger';
import { AnimalController } from './AnimalController';

const horse = new Horse("Maximus");
const tiger = new Tiger("Rajah");
const dog = new Dog("Scooby");

const animals = [horse, tiger, dog];

const winner = AnimalController.findWinner(animals);
AnimalController.announceWinner(winner);
