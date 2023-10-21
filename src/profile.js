// Menampilkan elemen profile
export const showProfile = () => {
    const profileSection = document.querySelector('.profile');
    profileSection.style.display = 'block';
};

// Menyembunyikan elemen profile
export const hideProfile = () => {
    const profileSection = document.querySelector('.profile');
    profileSection.style.display = 'none';
};
