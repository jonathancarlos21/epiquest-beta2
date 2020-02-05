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
    expect(wizard.experiencePoints).toEqual(25);
    expect(wizard.strength).toEqual(3);
  });

  test('encounter 2 is lost.', () => {
    wizard.loseBattle();
    
  });
});