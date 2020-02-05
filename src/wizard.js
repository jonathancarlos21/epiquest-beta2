export class Wizard {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.experience = 0;
    this.wisdom = 8;
    this.strength = 2;
  }

  winBattle() {
    this.experience += 25;
  }

  loseBattle() {
    this.experience -= 10;
    this.health -= 10;
  }

  gainStrength() {
    this.strength++;
  }

  gainWisdom() {
    this.wisdom++;
  }

  levelUp() {
    this.level++;
    this.experience = 0;
    this.health += 75;
  }

};