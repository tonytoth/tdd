const fizzbar = (test: number) => {
  if (test < 1) {
    throw new Error('Value should be grater or equal to 1.');
  }
  if (test > 100) {
    throw new Error('Value should be less or equal to 100.');
  }
};

export { fizzbar };
