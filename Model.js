const fs = require('fs')



class Model {
  constructor() { // конструктор создает связь между файлами для передачи в другие файлы  
  }
                                                                         // num вводит игрок  
    static numberUser(){
      // const number = num -1 
    }
  
  allthemes (){
    const themes = fs.readdirSync(`${__dirname}/topics`, 'utf-8')
    const choiseThemes = themes[1]
    const numberThemes = fs.readFileSync(`${__dirname}/topics/${choiseThemes}`, 'utf-8')
    const string = numberThemes.split('\n')
    const arrayQuations = []
    const arrayAnswers = []
    const arrays = string.map((str) => {
    if(str.includes('?')){
     arrayQuations.push(str)
    }
    if(!str.includes('?') && ' '){
     arrayAnswers.push(str)
    }
})   
  } 
}



// const themes = fs.readdirSync(`${__dirname}/topics`, 'utf-8')
// const choiseThemes = themes[2]
// const numberThemes = fs.readFileSync(`${__dirname}/topics/${choiseThemes}`, 'utf-8')
// const string = numberThemes.split('\n')
//  const arrayQuations = []
//     const arrayAnswers = []
// const arrays = string.map((str) => {
//   if(str.includes('?')){
//     arrayQuations.push(str)
//   }
//   if(!str.includes('?') && ' '){
//     arrayAnswers.push(str)
//   }

// })
// console.log(themes)
// console.log(choiseThemes)
// console.log(numberThemes)
// console.log(string)
// console.log(arrays)
// console.log(arrayQuations)
// console.log(arrayAnswers)
module.exports = Model