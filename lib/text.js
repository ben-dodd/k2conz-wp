export function titleCase(input) {
  let small = [
    "and",
    "a",
    "an",
    "as",
    "at",
    "but",
    "by",
    "en",
    "for",
    "from",
    "if",
    "is",
    "in",
    "of",
    "on",
    "or",
    "the",
    "to",
  ];
  let parts = input.split(" ");
  let partsList = [];
  let count = 1;
  parts.forEach((word) => {
    if (count === 1 || count === parts.length) partsList.push(upper(word));
    else if (small.includes(word.toLowerCase()) && word !== "A")
      partsList.push(lower(word));
    else partsList.push(upper(word));
    count++;
  });
  return partsList.join(" ");
}

export function lower(word) {
  let inwordCapitalization = false;
  [...word.substr(1)].forEach((letter) => {
    if (letter !== letter.toLowerCase()) inwordCapitalization = true;
  });
  if (inwordCapitalization) return word;
  else return word.toLowerCase();
}

export function upper(word) {
  let inwordCapitalization = false;
  [...word.substr(1)].forEach((letter) => {
    if (letter !== letter.toLowerCase()) inwordCapitalization = true;
  });
  if (inwordCapitalization) return word;
  else return word.substr(0, 1).toUpperCase() + word.substr(1);
}
