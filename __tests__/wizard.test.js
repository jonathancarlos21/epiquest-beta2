import { Wizard } from './../src/wizard.js';
import { exportAllDeclaration } from '@babel/types';

describe('Wizard', () => {
  let wizard;

  beforeEach(() => {
    wizard = new Wizard();
  });

  test('user picks character', () => {
    expect(wizard.wisdom).toEqual(8);
    expect(wizard.strength).toEqual(2);
  });
});