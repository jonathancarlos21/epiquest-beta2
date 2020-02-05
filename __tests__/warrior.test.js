import { Warrior } from './../src/warrior.js';

describe('Warrior', () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior("name");
  });

  test('user picks character', () => {
    expect(warrior.wisdom).toEqual(2);
    expect(warrior.strength).toEqual(8);
  });
  
  test('user enters name', () => {
    expect(warrior.name).toEqual("name");
  });
});