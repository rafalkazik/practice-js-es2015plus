const message = {
  text: ((text) => text)("Webpack działa! Gratulacje!"),
};

const { text } = { ...message };

console.log(text);

console.log("Test zmian w pliku.");
