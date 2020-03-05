function padStart(origin, character, number) {
  return `${origin}`.padStart(number, character);
}

function typeCheck(origin, type) {
  if (typeof origin !== type) throw Error('类型错误');
}

module.exports = {
  padStart,
};