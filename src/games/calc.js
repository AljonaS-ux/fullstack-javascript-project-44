import runGame from '../index.js'; 

const operations = ['+', '-', '*'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
    const num1 = getRandomNumber(1, 30);
    const num2 = getRandomNumber(1, 30);
    const operation = operations[getRandomNumber(0, operations.length - 1)];
  
    let question;
    let correctAnswer;
  
    switch (operation) {
      case '+':
        question = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        break;
      case '-':
        question = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
        break;
      case '*':
        question = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Unknown operation: ${operation}`);
    }
  
    return [question, String(correctAnswer)]; // Изменено здесь
  };  

export default () => {
  const gameDescription = 'What is the result of the expression?';
  runGame(gameDescription, generateRound);
};
