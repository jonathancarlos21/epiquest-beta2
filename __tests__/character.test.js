import { Character } from '../src/character.js/index.js';
import { exportAllDeclaration } from '@babel/types';

describe('Character', () => {
  let wizard;

  beforeEach(() => {
    wizard = new Character();
  });

  test('user enters name & chooses character', () => {
    wizard.setName("userName", "wizard");
    expect(wizard.name).toEqual("userName");
    expect(wizard.wisdom).toEqual(8);
    expect(wizard.strength).toEqual(2);
  });

  test('encounter 1 is won.', () => {
    wizard.setName("userName", "wizard");
    wizard.winBattle();
    wizard.gainStrength();
    expect(wizard.experience).toEqual(25);
    expect(wizard.strength).toEqual(3);
  });

  test('encounter 2 is lost.', () => {
    wizard.setName("userName", "wizard");
    wizard.winBattle();
    wizard.gainStrength();    
    wizard.loseBattle();
    expect(wizard.experience).toEqual(15);
    expect(wizard.health).toEqual(90);
  });

  test('4 battles are won in a row', () => {
    wizard.setName("userName", "wizard");
    wizard.winBattle();
    wizard.winBattle();
    wizard.winBattle();
    wizard.winBattle();
    if (wizard.experience >= 100) {
      wizard.levelUp();
    }
    expect(wizard.level).toEqual(2);
  });
});