export class Wizard {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.experiencePoints = 0;
    this.wisdom = 8;
    this.strength = 2;
  }

  winBattle() {
    this.experiencePoints += 25;
  }

  loseBattle() {
    this.experiencePoints -= 10;
    this.health -= 25;
  }

  gainStrength() {
    this.strength++;
  }

  gainWisdom() {
    this.wisdom++;
  }

  levelUp() {
    this.level++;
    this.experiencePoints = 0;
    this.health += 75;
  }

};