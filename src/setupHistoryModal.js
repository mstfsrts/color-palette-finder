import { HISTORY_BTN_ID, PALETTE_DISPLAY_ID } from './constants.js';

export function setupHistoryModal() {
  const modal = document.getElementById('history-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const historyList = document.getElementById('history-list');

  function loadHistory() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    historyList.innerHTML = '';

    if (history.length === 0) {
      historyList.innerHTML = '<li>No history available</li>';
      return;
    }

    history.forEach((entry) => {
      const listItem = document.createElement('li');
      const listItemText = document.createElement('div');
      listItemText.classList.add('list-item-text');
      listItemText.textContent = `#${entry.hexInput}`;

      listItem.appendChild(listItemText);

      const colorPaletteContainer = document.createElement('div');
      colorPaletteContainer.classList.add('color-palette-container');

      entry.colors.forEach((color) => {
        const colorDivWrapper = document.createElement('div');
        colorDivWrapper.style.display = 'inline-block';
        colorDivWrapper.style.textAlign = 'center';
        colorDivWrapper.style.marginRight = '10px';

        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-div');
        colorDiv.style.backgroundColor = `#${color.hex.clean}`;

        const hexLabel = document.createElement('span');
        hexLabel.textContent = `#${color.hex.clean}`;
        hexLabel.style.fontSize = '0.6rem';

        colorDivWrapper.appendChild(colorDiv);
        colorDivWrapper.appendChild(hexLabel);
        colorPaletteContainer.appendChild(colorDivWrapper);

        colorDivWrapper.addEventListener('click', () => {
          navigator.clipboard
            .writeText(`#${color.hex.clean}`)
            .then(() => {
              alert(`Hex code #${color.hex.clean} copied to clipboard`);
            })
            .catch((err) => {
              console.error('Failed to copy hex code: ', err);
            });
        });
      });

      listItem.appendChild(colorPaletteContainer);
      historyList.appendChild(listItem); 
    });
    modal.classList.remove('hidden');
  }

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  return loadHistory;
}
