export const formatText = text => {
  if (!text) {
    return "";
  }

  if (text === "AC" || text === "TV") {
    return text;
  }

  return text
    .split(" ")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
};