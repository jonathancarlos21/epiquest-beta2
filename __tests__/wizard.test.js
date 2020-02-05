import { Wizard } from './../src/wizard.js';
import { exportAllDeclaration } from '@babel/types';

describe('Wizard', () => {
  let wizard;

  beforeEach(() => {
    wizard = new Wizard("name");
  });

  test('user picks character', () => {
    expect(wizard.wisdom).toEqual(8);
    expect(wizard.strength).toEqual(2);
  });

  test('user enters name', () => {
    expect(wizard.name).toEqual("name");
  });

  test('encounter 1 is won.', () => {
    wizard.winBattle();
    wizard.gainStrength();
    expect(wizard.experience).toEqual(25);
    expect(wizard.strength).toEqual(3);
  });

  test('encounter 2 is lost.', () => {
    wizard.winBattle();
    wizard.gainStrength();    
    wizard.loseBattle();
    expect(wizard.experience).toEqual(15);
    expect(wizard.health).toEqual(90);
  });

  test('4 battles are won in a row', () => {
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