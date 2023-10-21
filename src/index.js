import './style/styles.css';
import { aboutMeButton } from './aboutMe';
import * as sidebarModule from './sideBar.js';
import { fetchWisataIndonesia } from './wisataAPI';
import { showProfile, hideProfile } from './profile';
import './ProfileImage';
import './ProfileDetails';
import './BioSection';
import './ExperienceSection';

showProfile();
hideProfile();

aboutMeButton.addEventListener('click', () => {
    const profileSection = document.getElementById('profile');
    profileSection.style.display = 'block';
    profileSection.scrollIntoView({ behavior: 'smooth' });
});

const { sidebarToggle, sidebar, body, openSidebar, closeSidebar } = sidebarModule;

// Panggil data wisata 
document.addEventListener('DOMContentLoaded', () => {
    fetchWisataIndonesia();
});

