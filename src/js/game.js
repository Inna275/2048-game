import { END_GAME_DELAY, MESSAGES } from './constants.js';

const resetGame = (grid) => {
  grid.clear();
  grid.resetReached2048();
  grid.setupGrid();
};

const getEndGameMessage = (won) =>  won ? MESSAGES.YOU_WIN : MESSAGES.GAME_OVER;

const showMessage = (won) => {
  const message = getEndGameMessage(won);
  alert(message);
};

const endGame = (grid) => {
  showMessage(grid.reached2048);
  resetGame(grid);
};

const shouldEndGame = (grid) => !grid.canMove() || grid.reached2048;

const checkGameStatus = (grid) => {
  if (!shouldEndGame(grid)) return;
  setTimeout(() => {
    endGame(grid);
  }, END_GAME_DELAY);
};

export { checkGameStatus };
