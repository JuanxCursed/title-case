export const TitleCase = (string) => {
  return string
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (word.length <= 2) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
