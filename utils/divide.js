const divide = (a, b) => {
  if (b === '0') {
    window.alert('Division by zero is naughty!');
    return null;
  }
  a = Number(a);
  b = Number(b);
  return a / b;
};

export { divide };
