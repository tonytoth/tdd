const fizzbar = (test: number) => {
  if (test < 1) {
    throw new Error('Value should be grater or equal to 1.');
  }
  if (test > 100) {
    throw new Error('Value should be less or equal to 100.');
  }

  if (test % 3 === 0) {
    return 'Fizz';
  }

  if (test % 5 === 0) {
    return 'Buzz';
  }

  return test.toString();
};

export { fizzbar };
