export class Character {
  constructor() {
    this.name = "";
    this.type = "";
    this.health = 100;
    this.level = 1;
    this.experience = 0;
    this.wisdom = 0;
    this.strength = 0;
  }
  
  setName(name, characterType) {
    this.name = name;
    this.type = characterType;
    if (this.type === "wizard") {
      this.wisdom = 8;
      this.strength = 2;
    }
    if (this.type === "warrior") {
      this.wisdom = 2;
      this.strength = 8;
    }
  }

  winBattle() {
    this.experience += 25;
    if (this.experience >= 100) {
      this.levelUp();
    }
  }

  loseBattle() {
    this.experience -= 10;
    this.health -= 10;
    if (this.health <= 0) {
      console.log("Game over. You lose!")
    }
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