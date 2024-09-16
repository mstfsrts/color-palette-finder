import {
  HEX_INPUT_ID,
  SUBMIT_BTN_ID,
  YES_BTN_ID,
  NO_BTN_ID,
  CONFIRM_ID,
  PALETTE_DISPLAY_ID,
  LOADING_ID,
  ERROR_ID,
  HISTORY_BTN_ID,
} from './constants.js';

export function createView() {
  const userInterface = document.getElementById('user-interface');
  userInterface.innerHTML = `
      <div class="container">
          <h1>Color Palette Finder</h1>
          <div class="input-container">
              <input type="text" id="${HEX_INPUT_ID}" placeholder="000000" maxlength="7" />
              <button id="${SUBMIT_BTN_ID}" disabled>Submit</button>
              <button id="${HISTORY_BTN_ID}" class="history-button hidden">View History</button>
          </div>
          <div id="${CONFIRM_ID}" class="hidden">
              <p>Do you want this color?</p>
              <button id="${YES_BTN_ID}">Yes</button>
              <button id="${NO_BTN_ID}">No</button>
          </div>
          <div id="${PALETTE_DISPLAY_ID}" class="palette-box hidden"></div>
          <div id="${LOADING_ID}" class="loading hidden"><div class="spinner" /></div>
          <div id="${ERROR_ID}" class="error"></div>
      </div>
                <div id="history-modal" class="modal hidden">
            <div class="modal-content">
              <span id="close-modal" class="close">&times;</span>
              <h2>Color History</h2>
              <ul id="history-list"></ul>
            </div>
        </div>
  `;
}
