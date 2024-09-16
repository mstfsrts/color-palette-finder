import { createView } from './view.js';
import { initializeEventHandlers } from './eventHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
  createView();
  initializeEventHandlers();
});
