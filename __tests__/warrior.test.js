import { Warrior } from './../src/warrior.js';

describe('Warrior', () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior();
  });

  test('user picks character', () => {
    expect(warrior.wisdom).toEqual(2);
    expect(warrior.strength).toEqual(8);
  });
});