function sum(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function iseven(a) {
  return a % 2 === 0;
}
module.exports = {
  add: sum,
  p: divide,
  even: iseven,
};
