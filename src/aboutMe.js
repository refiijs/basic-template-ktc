import { showProfile, hideProfile } from './profile.js';

const aboutMeButton = document.querySelector('.aboutMe');

aboutMeButton.addEventListener('click', () => {
    showProfile();
});

document.addEventListener('click', (event) => {
    if (!document.querySelector('.profile').contains(event.target) && event.target !== aboutMeButton) {
        hideProfile();
    }
});

export { aboutMeButton };
