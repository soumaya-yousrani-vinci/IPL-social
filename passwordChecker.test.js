const { isValidPassword } = require('./passwordChecker');

describe('Password Checker', () => {

  test('returns false if password has less than 8 characters', () => {
    expect(isValidPassword('Ab1!')).toBe(false);
  });

  test('returns false if password has no digit', () => {
    expect(isValidPassword('Password!')).toBe(false);
  });

  test('returns false if password has no special character', () => {
    expect(isValidPassword('Password1')).toBe(false);
  });

  test('returns false if password contains IPL (case insensitive)', () => {
    expect(isValidPassword('Abc1!ipl')).toBe(false);
  });

  test('returns true if password is valid', () => {
    expect(isValidPassword('Abcdef1!')).toBe(true);
  });

});