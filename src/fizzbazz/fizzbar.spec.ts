import { fizzbar } from './fizzbazz';

describe('fizzbar', () => {
  it('exists', () => {
    expect(fizzbar).toBeDefined();
  });

  it('should throw an eror if value < 1', () => {
    expect(() => {
      fizzbar(0);
    }).toThrow(Error);
  });

  it('should thrown an error if value > 100', () => {
    expect(() => {
      fizzbar(101);
    }).toThrow(Error);
  });

  it('should return "1" ', () => {
    expect(fizzbar(1)).toBe('1');
  });

  it('should return "2" ', () => {
    expect(fizzbar(2)).toBe('2');
  });

  it('should return Fizz', () => {
    expect(fizzbar(3)).toBe('Fizz');
  });

  it('should return Buzz', () => {
    expect(fizzbar(5)).toBe('Buzz');
  });

  it('should return Fizz for 9', () => {
    expect(fizzbar(9)).toBe('Fizz');
  });

  it('should return Buzz for 10', () => {
    expect(fizzbar(10)).toBe('Buzz');
  });

});
