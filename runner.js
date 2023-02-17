const Quiz = require('./index');
const View = require('./View');
const Model = require('./Model');

//показ темы
const mod = View.show();
// вызываем метода
const questAns = Model.getQandA(mod);
// получаем массив с вопросами и ответами по теме, создаем экз класса квиз и
// показываем вопрос и получаем ответ от пользователя
let count = 0;
for (let i = 0; i < questAns[0].length; i += 1) {
  const question1 = new Quiz(questAns[0][i], questAns[1][i]);
  const q1 = View.showQuestions(question1);
  count += q1;
  console.log(`${count} очков`);
}
setTimeout(() => {
  console.clear();
}, 2000);
