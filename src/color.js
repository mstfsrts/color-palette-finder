import { CONFIRM_ID, PALETTE_DISPLAY_ID } from './constants.js';

export function updateBackgroundColor(hex) {
  document.body.style.backgroundColor = hex;
  document.getElementById(CONFIRM_ID).classList.remove('hidden');
}

export function resetBackgroundColor() {
  document.body.style.backgroundColor = '#f0f0f0';
  document.getElementById(CONFIRM_ID).classList.add('hidden');
  document.getElementById(PALETTE_DISPLAY_ID).classList.add('hidden');
  document.getElementById(PALETTE_DISPLAY_ID).innerHTML = '';
}

export function displayPalette(colors) {
  const paletteDisplay = document.getElementById(PALETTE_DISPLAY_ID);
  paletteDisplay.innerHTML = '';
  colors.forEach((color) => {
    const colorContainer = document.createElement('div');
    const colorDiv = document.createElement('div');
    const hexLabel = document.createElement('span');

    colorContainer.classList.add('color-container');
    colorDiv.classList.add('color-div');
    colorDiv.style.backgroundColor = `#${color.hex.clean}`;
    hexLabel.textContent = `#${color.hex.clean}`;

    colorContainer.appendChild(colorDiv);
    colorContainer.appendChild(hexLabel);
    paletteDisplay.appendChild(colorContainer);
  });
  paletteDisplay.classList.remove('hidden');
}
