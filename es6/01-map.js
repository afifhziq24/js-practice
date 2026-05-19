
const katakanaDeck = [
  { char: "ア", reading: "a" },
  { char: "イ", reading: "i" },
  { char: "ウ", reading: "u" },
  { char: "エ", reading: "e" },
  { char: "オ", reading: "o" },
  // add a few more if you like
];

const withRomaji = katakanaDeck.map(word => ({
  char: word.char,
  reading: word.reading,
  romaji: word.reading.toUpperCase()
}));