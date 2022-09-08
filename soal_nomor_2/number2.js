//DATASINTESA
const countLetters = (str) => {
  let counts = [];
  let result = [];

  for (let i = 0; i < str.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    counts.push({ counts: count, letter: str[i] });
  }

  for (let i = 0; i < counts.length; i++) {
    let j;
    for (j = 0; j < i; j++) {
      if (counts[i].letter == counts[j].letter) {
        break;
      }
    }

    if (j == i) {
      result.push(counts[i]);
    }
  }

  let output = '';
  for (let i = 0; i < result.length; i++) {
    output += `${result[i].letter}=${result[i].counts}`;
    if (i < result.length - 1) {
      output += `, `;
    }
  }

  return output;
};

console.log(countLetters('aaabbccac'));
