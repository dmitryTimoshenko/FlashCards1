const fs = require('fs');
const readlineSync = require('readline-sync');


function allthemes (){
    const themes = fs.readdirSync(`${__dirname}/topics`, 'utf-8')
    const choiseThemes = themes[1]
    console.log(choiseThemes)
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
  foo1(choiseThemes,arrayQuations,arrayAnswers)
    } 

const foo1 = (choiseThemes,arrayQuations,arrayAnswers) => {
   switch(choiseThemes){
    case 'general.txt':{
      for(let i = 0; i < arrayQuations.length; i++){
        console.log(arrayQuations[i])
        let otvet = readlineSync.question('\n')
        if(otvet.toUpperCase() === arrayAnswers[i].toUpperCase){
            console.log('Все верно!!!!!!!!!!!!!')
        }else{
            console.log('потеряно')
        }
      }
    3
    }
   }
  }
// сделать еще свичей 
  allthemes ()