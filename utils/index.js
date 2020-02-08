function padStart(origin, character, number) {
  return `${origin}`.padStart(number, character);
}

module.exports = {
  padStart,
};