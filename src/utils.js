import { ERROR_ID, LOADING_ID } from './constants.js';

export function isValidHex(hex) {
  const cleanHex = hex.replace('#', '');
  const hexRegex = /^[0-9A-Fa-f]{6}$/;
  return hexRegex.test(cleanHex);
}

export function showError(message) {
  const errorDisplay = document.getElementById(ERROR_ID);
  errorDisplay.textContent = message;
  setTimeout(() => {
    errorDisplay.textContent = '';
  }, 3000);
}

export function showLoading() {
  document.getElementById(LOADING_ID).classList.remove('hidden');
}

export function hideLoading() {
  document.getElementById(LOADING_ID).classList.add('hidden');
}

export function writeHistory(hexInput, colors) {
  const newEntry = {
    hexInput: hexInput,
    colors: colors,
  };

  let history = JSON.parse(localStorage.getItem('history')) || [];

  const isHexInHistory = history.some((entry) => entry.hexInput === hexInput);

  if (isHexInHistory) {
    return;
  }

  history.push(newEntry);

  if (history.length > 5) {
    history = history.slice(-5);
  }

  localStorage.setItem('history', JSON.stringify(history));
}
