const fizzbar = (test: number) => {
  if (test < 1) {
    throw new Error('Value should be grater or equal to 1.');
  }
};

export { fizzbar };
