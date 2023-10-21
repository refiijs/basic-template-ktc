import axios from 'axios';

export const fetchWisataIndonesia = () => {
    const apiUrl = 'https://tourism-api.dicoding.dev/list';

    axios.get(apiUrl)
        .then(response => {
            // Memastikan respons adalah objek yang berisi array "places"
            const data = response.data;
            if (data.hasOwnProperty('places') && Array.isArray(data.places)) {
                const places = data.places;

                // Menampilkan data di halaman
                const wisataContainer = document.querySelector('.wisata-container');
                wisataContainer.innerHTML = ''; 

                places.forEach((item) => {
                    const card = document.createElement('div');
                    card.classList.add('wisata-card');
                    card.innerHTML = `
                    <img src="${item.image || 'URL_GAMBAR_DEFAULT_JIKA_TIDAK_TERSEDIA'}" alt="${item.name}" />
                    <div class="wisata-info">
                        <h2>${item.name}</h2>
                        <p>Deskripsi: ${item.description}</p>
                    </div>
                    `;
                    wisataContainer.appendChild(card);
                });
            } else {
                console.error('Data yang diterima tidak sesuai format.');
            }
        })
        .catch(error => {
            console.error('Gagal mengambil data wisata Indonesia:', error);
        });
};
