const keywords = require('./nasaKeywords.json');
export function getRandomKeyword() {
  let random = Math.floor(Math.random() * keywords.length);
  return keywords[random];
}
