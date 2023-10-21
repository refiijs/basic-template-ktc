const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

// Meng-handle klik pada tombol toggle sidebar
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
});

// Menutup sidebar ketika mengklik di tempat sembarang
body.addEventListener("click", (event) => {
  // Periksa apakah yang diklik bukan elemen sidebar atau tombol toggle
  if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
    sidebar.classList.remove("sidebar-open");
  }
});

// Membuka sidebar
const openSidebar = () => {
  sidebar.classList.add("sidebar-open");
};

// Menutup sidebar
const closeSidebar = () => {
  sidebar.classList.remove("sidebar-open");
};

export { sidebarToggle, sidebar, body, openSidebar, closeSidebar };
