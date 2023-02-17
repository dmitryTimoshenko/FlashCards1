const fs = require('fs').promises;

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом
    let score = 0;
    const readFolder = await fs.readdir(`${__dirname}/topics`);
    const choice = await this.view.selectQuestion(
      readFolder.map((el) => el.slice(0, el.length - 19)),
    );
    const question = await fs.readFile(
      `${__dirname}/topics/${choice}.txt`,
      'utf-8',
    );
    const getQuestions = await this.model.searchQuestion(question);

    const multipleQuestions = await this.view.selectMultiple(getQuestions);
    for (let i = 0; i < getQuestions.length; i += 2) {
      if (multipleQuestions[i] === getQuestions[i + 1]) {
        score += 1;
      }
    }

    console.log(`Поздравляем! Ваш результат: ${score} очков!`);
  }

  // printTopicsController(topicsMenu) {
  //   // Тут нужно попросить экземпляр класса view вывести меню пользователю,
  //   // а также дождаться ответа последнего
  // }
}

module.exports = Controller;
