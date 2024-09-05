export abstract class Animal {
    protected speed: number;
  
    constructor(protected name: string, maxSpeed: number) {
      this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }
  
    abstract getType(): string;
  
    getName(): string {
      return this.name;
    }
  
    getSpeed(): number {
      return this.speed;
    }
}
