const readlineSync = require(`readline-sync`);
const { EOL } = require('os');

// const styleGreen = '\033[38;5;040m';
// const styleRed = '\033[38;5;160m';
// const styleStop = '\033[0m';

class View {
  static show() {
    const numberTheme = readlineSync.question(
      'Выбери, пожалуйста, тему: (Введи число)\n1. Бобры 🦫\n2. Гарри Поттер ⚡\n3. Общая тема 👨‍🎓\n'
    );
    return numberTheme;
  }

  static showQuestions(questionVariant) {
    const answer = readlineSync.question(`${questionVariant.question} ${EOL}`);
    if (answer === questionVariant.answer) {
      console.log('Молодец!');

      return 100;
    } else {
      console.log(`Ты ошибся! Правильный ответ: ${questionVariant.answer}`);

      return -100;
    }
  }
}

module.exports = View;

