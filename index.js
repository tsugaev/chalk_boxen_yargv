import boxen from "boxen";
import chalk from "chalk";
import yargs from 'yargs'



//Release 0: chalk
//Сможешь вывести жирный красный текст с подчеркиванием на зеленом фоне без документации?
// Тогда переходи к следующему релизу.


// Release 1: boxen
//Как только пакет boxen будет покорён постарайся объединить вывод двух этих библиотек:
// выведи в консоль жирный текст желтого цвета на сером фоне,
// который обрамлён в зеленую рамку с закругленными краями.
// console.log(boxen(chalk.bold.bgGray.yellow('hello world'), {borderColor: 'green', borderStyle: 'round'} ))

// Release 3: yargs
console.log(process.argv)
const login = process.argv[3]
const password = process.argv[5]

if (login === "admin" && password === "qwer"){
    console.log(boxen(chalk.bold.green('welcome'), {borderColor: 'green'}))
}else{
    console.log(boxen(chalk.bold.red('error'), {borderColor: 'red'}))
}
console.log(process.argv[4])



//Release 4: 99 бутылок🍾
// Найди свой код из челленджа "99 бутылок". Доработай его так, чтобы количество
// бутылок можно было указывать в момент вызова программы через консоль.
//
// Каждый абзац вывода нужно обрамить в отдельную рамку.
// Остальные параметры форматирования подбери на свой вкус.

const botleNum = number => {
    if (number >= 11 && number <= 14){
        return `бутылок`;
    }
    if (number % 10 === 1){
        return `бутылка`;
    }
    if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4){
        return `бутылки`;
    }   else {
        return `бутылок`;
    }
}

const generateSongText = num => {
    for (let i = num; i > 0; i--) {
        console.log(boxen(`${i} ${botleNum(i)} пива на стене, ${i} ${botleNum(i)} пива!
Возьми одну, пусти по кругу, ${i-1} ${botleNum(i-1)} пива на стене!`, {borderStyle: 'round'}))
    }
}

generateSongText(process.argv[2]);
