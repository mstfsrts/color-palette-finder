import { isValidHex, showError } from './utils.js';
import { updateBackgroundColor } from './color.js';
import { disableSubmitButton } from './buttonControl.js';
import { HEX_INPUT_ID, PALETTE_DISPLAY_ID } from './constants.js';

export function handleSubmit() {
  let hexInput = document.getElementById(HEX_INPUT_ID).value.trim();
  hexInput = hexInput.replace(/[^0-9A-Fa-f]/g, ''); // Remove invalid characters
  if (!isValidHex(hexInput)) {
    showError('Invalid HEX code. Please enter a valid HEX code.');
    return;
  }

  hexInput = `#${hexInput}`;
  updateBackgroundColor(hexInput);
  document.getElementById(PALETTE_DISPLAY_ID).classList.add('hidden');
  disableSubmitButton();
}
