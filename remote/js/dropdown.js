// Ambil elemen-elemen yang dibutuhkan
const dropdownButton = document.getElementById("dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownItems = document.querySelectorAll(".dropdown-content a");

// Modal elements
const customModal = document.getElementById("custom-modal");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.getElementById("close-modal");

// Toggle dropdown visibility saat tombol diklik
dropdownButton.addEventListener("click", function() {
    dropdownContent.classList.toggle("show"); // Menampilkan atau menyembunyikan dropdown
});

// Mengubah teks tombol saat item dipilih
dropdownItems.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        let selectedValue = this.getAttribute("data-value");

        if (selectedValue === "Windows") {
            dropdownButton.innerText = selectedValue;
            dropdownButton.classList.remove("dropdown-disabled"); // Hapus class jika Windows dipilih
        } else {
            // Tampilkan custom modal
            modalMessage.innerText = `${selectedValue} coming soon!`;
            customModal.style.display = "flex";
            
            dropdownButton.innerText = "-- Select --";
            dropdownButton.classList.add("dropdown-disabled"); // Tambahkan class untuk efek warna
        }

        dropdownContent.classList.remove("show"); // Menutup dropdown setelah memilih
    });
});

// Menutup modal saat tombol "OK" diklik
closeModal.addEventListener("click", function() {
    customModal.style.display = "none";
});
