import { handleSubmit } from './submitHandler.js';
import { enableSubmitButton, disableSubmitButton } from './buttonControl.js';
import {
  HEX_INPUT_ID,
  SUBMIT_BTN_ID,
  HISTORY_BTN_ID,
  YES_BTN_ID,
  NO_BTN_ID,
  CONFIRM_ID,
  MAX_HEX_LENGTH,
} from './constants.js';
import { fetchColor } from './service.js';
import { resetBackgroundColor } from './color.js';
import { setupHistoryModal } from './setupHistoryModal.js';

export function initializeEventHandlers() {
  const historyBtn = document.getElementById(HISTORY_BTN_ID);
  const modal = document.getElementById('history-modal');
  const closeModalBtn = document.getElementById('close-modal');

  const historyData = JSON.parse(localStorage.getItem('history'));
  if (historyData && historyData.length > 0) {
    historyBtn.classList.remove('hidden');
  } else {
    historyBtn.classList.add('hidden');
  }

  historyBtn.addEventListener('click', () => {
    console.log('View History clicked');
    modal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });

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
    const colors = fetchColor(hexInput.replace('#', ''));
    document.getElementById(CONFIRM_ID).classList.add('hidden');
    enableSubmitButton();
    historyBtn.classList.remove('hidden');
  });

  document
    .getElementById(HISTORY_BTN_ID)
    .addEventListener('click', function () {
      const loadHistory = setupHistoryModal();
      loadHistory();
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
