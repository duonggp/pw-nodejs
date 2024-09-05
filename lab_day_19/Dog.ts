import { Animal } from "./Animal";

export class Dog extends Animal {
  constructor(name: string) {
    super(name, 60);
  }

  getType(): string {
    return 'Dog';
  }
}
