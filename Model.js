const fs = require('fs');
const { EOL } = require('os');
class Model {
  static getQandA(userNum) {
    const userNumToInd = userNum - 1;
    const allThemes = fs.readdirSync('./topics');
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    const stringsToArr = questionStrings.split(`${EOL}`);
    const onlyQuestionsArr = [];
    const onlyAnswersArr = [];
    stringsToArr.map((str) => {
      if (str.includes('?') && str.length >= 2) {
        onlyQuestionsArr.push(`${stringsToArr.indexOf(str) / 3 + 1}. ${str}`);
      }
      if (!str.includes('?') && str.length >= 2) {
        onlyAnswersArr.push(str);
      }
    });
    const arrs = [onlyQuestionsArr, onlyAnswersArr];
    return arrs;
  }
}
module.exports = Model;