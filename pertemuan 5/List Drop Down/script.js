const categoryDropdown = document.getElementById("category");
const brandDropdown = document.getElementById("brand");

const brands = {
    smartphone: ["Samsung", "Apple", "Xiaomi", "Oppo", "Vivo"],
    laptop: ["Dell", "HP", "Lenovo", "Asus", "Acer"],
    motor: ["Honda", "Yamaha", "Suzuki", "Kawasaki"],
    mobil: ["Toyota", "Honda", "Suzuki", "Mitsubishi", "Nissan"],
};

categoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;
    
    brandDropdown.innerHTML = '<option value="">Pilih Merk</option>';
    brandDropdown.disabled = true;
    
    if (selectedCategory && brands[selectedCategory]) {
        brands[selectedCategory].forEach((brand) => {
            const option = document.createElement("option");
            option.value = brand.toLowerCase();
            option.textContent = brand;
            brandDropdown.appendChild(option);
        });
        brandDropdown.disabled = false;
    }
});