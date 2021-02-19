export const makeParagraphs = (text) => {
  const paraSize = 3;
  let counter = 0;
  let dividedText = '';
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '.') {
      counter += 1;
    }
    dividedText += text[i];
    if (counter === paraSize) {
      dividedText += '\n\n';
      counter = 0;
    }
  }
  console.log(dividedText);
  return dividedText;
};
