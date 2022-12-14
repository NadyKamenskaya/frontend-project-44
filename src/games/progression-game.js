import { cons } from '@hexlet/pairs';
import getRandomInteger from '../utils.js';
import { startGameEngine, roundsCount } from '../index.js';

// Progression generation

const generateProgression = (seed, step, lengthOfProgression) => {
  const progression = [seed];

  for (let index = 1; index < lengthOfProgression; index += 1) {
    progression.push(progression[index - 1] + step);
  }

  return progression;
};

// Launch Game

const launchGame = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const seed = getRandomInteger(0, 100);
    const step = getRandomInteger(1, 10);
    const lengthOfProgression = getRandomInteger(5, 10);
    const progression = generateProgression(seed, step, lengthOfProgression);
    const maskIndex = getRandomInteger(0, lengthOfProgression - 1);

    const answer = progression[maskIndex];
    progression[maskIndex] = '..';

    const question = progression.join(' ');

    const pair = cons(question, answer);
    rounds.push(pair);
  }

  startGameEngine(description, rounds);
};

export default launchGame;
