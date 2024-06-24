import { SUBMIT_BTN_ID } from './constants.js';

export function enableSubmitButton() {
  document.getElementById(SUBMIT_BTN_ID).disabled = false;
}

export function disableSubmitButton() {
  document.getElementById(SUBMIT_BTN_ID).disabled = true;
}