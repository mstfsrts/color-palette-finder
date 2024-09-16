import { showLoading, hideLoading, showError, writeHistory } from './utils.js';
import { displayPalette } from './color.js';
import { COLOR_API_URL, PALETTE_MODE, PALETTE_COUNT } from './constants.js';

export async function fetchColor(hex) {
  try {
    showLoading();
    const response = await fetch(`${COLOR_API_URL}/id?hex=${hex}`);
    if (!response.ok) {
      throw new Error('Error fetching color data');
    }
    const data = await response.json();
    hideLoading();
    fetchPalette(data.hex.clean);
  } catch (error) {
    hideLoading();
    showError('Error fetching color data');
  }
}

export async function fetchPalette(hex) {
  try {
    const response = await fetch(
      `${COLOR_API_URL}/scheme?hex=${hex}&mode=${PALETTE_MODE}&count=${PALETTE_COUNT}`
    );
    if (!response.ok) {
      throw new Error('Error fetching palette data');
    }
    const data = await response.json();
    displayPalette(data.colors);
    writeHistory(hex, data.colors);
  } catch (error) {
    showError('Error fetching palette data');
  }
}
