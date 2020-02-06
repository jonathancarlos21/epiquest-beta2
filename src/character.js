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
    if (this.type === "ninja") {
      this.wisdom = 5;
      this.strength = 5;
    }
    if (this.type === "monk") {
      this.wisdom = 10;
      this.strength = 1;
    }
    if (this.type === "bowman") {
      this.wisdom = 6;
      this.strength = 6;
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
    this.health -= 20;
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

  studySession() {
    this.health -= 10;
    this.wisdom++;
  }

  restSession() {
    this.health += 20;
    this.experience -= 20;
  }

  workOut() {
    this.experience -= 25;
    this.strength++;
  }


};