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
        fizzbar(101)
    }).toThrow(Error);
  })
});
