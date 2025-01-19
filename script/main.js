const photos = [
  "../foto/gaza1.jpg", // Pastikan gambar ini ada
  "../foto/gaza2.jpg", // Pastikan gambar ini ada
  "../foto/gaza3.jpg" // Pastikan gambar ini ada
];

let currentIndex = 0;

const photo = document.getElementById("photo");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn"); // Tombol Kembali

// Fungsi untuk memperbarui foto
function updatePhoto() {
  photo.src = photos[currentIndex];
}

// Event listener untuk tombol "next"
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % photos.length; // loop kembali ke foto pertama
  updatePhoto();
});

// Event listener untuk tombol "prev"
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length; // loop kembali ke foto terakhir
  updatePhoto();
});

// Memperbarui foto saat pertama kali dimuat
updatePhoto();


