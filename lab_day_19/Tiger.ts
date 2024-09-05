import { Animal } from './Animal';

export class Tiger extends Animal {
  constructor(name: string) {
    super(name, 100);
  }

  getType(): string {
    return 'Tiger';
  }
}
