export const stringPrettify = (string) => {
  try {
    return string
      .split(" ")
      .map((str) => {
        return str[0].toUpperCase() + str.slice(1, str.length) + " ";
      })
      .join(" ");
  } catch (error) {
    return string;
  }
};
