import { similarUsers } from './data.js';
import { renderThumbnails } from './miniature.js';
import { controlUploadFile } from './user-form.js';
import { showLoadOverlay } from './user-form.js';


renderThumbnails(similarUsers);
controlUploadFile();
showLoadOverlay();

