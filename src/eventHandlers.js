import { handleSubmit } from './submitHandler.js';
import { enableSubmitButton, disableSubmitButton } from './buttonControl.js';
import {
  HEX_INPUT_ID,
  SUBMIT_BTN_ID,
  YES_BTN_ID,
  NO_BTN_ID,
  CONFIRM_ID,
  MAX_HEX_LENGTH,
} from './constants.js';
import { fetchColor } from './service.js';
import { resetBackgroundColor } from './color.js';

export function initializeEventHandlers() {
  document.getElementById(SUBMIT_BTN_ID).addEventListener('click', function () {
    handleSubmit();
    document.getElementById(CONFIRM_ID).classList.remove('hidden');
    disableSubmitButton();
  });

  document
    .getElementById(HEX_INPUT_ID)
    .addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        handleSubmit();
        document.getElementById(CONFIRM_ID).classList.remove('hidden');
        disableSubmitButton();
      }
    });

  document.getElementById(YES_BTN_ID).addEventListener('click', function () {
    let hexInput = document
      .getElementById(HEX_INPUT_ID)
      .value.trim()
      .replace(/[^0-9A-Fa-f]/g, '');
    hexInput = `#${hexInput}`;
    fetchColor(hexInput.replace('#', ''));
    document.getElementById(CONFIRM_ID).classList.add('hidden');
    enableSubmitButton();
  });

  document.getElementById(NO_BTN_ID).addEventListener('click', function () {
    resetBackgroundColor();
    document.getElementById(CONFIRM_ID).classList.add('hidden');
    enableSubmitButton();
  });

  document
    .getElementById(HEX_INPUT_ID)
    .addEventListener('input', function (event) {
      let value = event.target.value.replace(/[^0-9A-Fa-f]/g, '');
      if (value.length > 0 && value.charAt(0) !== '#') {
        value = `#${value}`;
      } else {
        value = `#${value.slice(1)}`;
      }
      event.target.value = value.slice(0, MAX_HEX_LENGTH + 1);

      if (value.length === MAX_HEX_LENGTH + 1) {
        enableSubmitButton();
      } else {
        disableSubmitButton();
      }
    });

  disableSubmitButton();
}
