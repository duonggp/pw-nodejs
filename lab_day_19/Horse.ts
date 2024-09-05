import { Animal } from './Animal';

export class Horse extends Animal {
  constructor(name: string) {
    super(name, 75);
  }

  getType(): string {
    return 'Horse';
  }
}
