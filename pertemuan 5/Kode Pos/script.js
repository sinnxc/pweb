const postalCodes = [
    { province: "Jawa Barat", city: "Bandung", subdistrict: "Cicendo", postalCode: "40173", areaInfo: "Bandung, Jawa Barat" },
    { province: "Jawa Barat", city: "Bandung", subdistrict: "Coblong", postalCode: "40135", areaInfo: "Bandung, Jawa Barat" },
    { province: "Jawa Barat", city: "Bandung", subdistrict: "Lengkong", postalCode: "40261", areaInfo: "Bandung, Jawa Barat" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Wonokromo", postalCode: "60242", areaInfo: "Surabaya, Jawa Timur" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Tegalsari", postalCode: "60262", areaInfo: "Surabaya, Jawa Timur" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Genteng", postalCode: "60275", areaInfo: "Surabaya, Jawa Timur" },
    { province: "Jawa Timur", city: "Surabaya", subdistrict: "Sukolilo", postalCode: "60111", areaInfo: "Surabaya, Jawa Timur" },
    { province: "Jawa Timur", city: "Gresik", subdistrict: "Kebomas", postalCode: "61123", areaInfo: "Gresik, Jawa Timur" },
    { province: "Jawa Timur", city: "Gresik", subdistrict: "Driyorejo", postalCode: "61177", areaInfo: "Gresik, Jawa Timur" },
    { province: "Jawa Timur", city: "Gresik", subdistrict: "Manyar", postalCode: "61151", areaInfo: "Gresik, Jawa Timur" },
    { province: "Jawa Timur", city: "Gresik", subdistrict: "Benjeng", postalCode: "61172", areaInfo: "Gresik, Jawa Timur" },
    { province: "DKI Jakarta", city: "Jakarta Pusat", subdistrict: "Gambir", postalCode: "10110", areaInfo: "Jakarta Pusat, DKI Jakarta" },
    { province: "DKI Jakarta", city: "Jakarta Utara", subdistrict: "Tanjung Priok", postalCode: "14310", areaInfo: "Jakarta Utara, DKI Jakarta" },
    { province: "DKI Jakarta", city: "Jakarta Barat", subdistrict: "Cengkareng", postalCode: "11730", areaInfo: "Jakarta Barat, DKI Jakarta" },
    { province: "DKI Jakarta", city: "Jakarta Selatan", subdistrict: "Kebayoran Baru", postalCode: "12110", areaInfo: "Jakarta Selatan, DKI Jakarta" },
];

document.getElementById("province").addEventListener("change", function () {
    const province = this.value;
    const cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = '<option value="">Pilih Kota/Kabupaten</option>';

    const cities = [...new Set(postalCodes.filter(item => item.province === province).map(item => item.city))];
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });

    document.getElementById("subdistrict").innerHTML = '<option value="">Pilih Kecamatan</option>';
});

document.getElementById("city").addEventListener("change", function () {
    const city = this.value;
    const subdistrictDropdown = document.getElementById("subdistrict");
    subdistrictDropdown.innerHTML = '<option value="">Pilih Kecamatan</option>';

    const subdistricts = [...new Set(postalCodes.filter(item => item.city === city).map(item => item.subdistrict))];
    subdistricts.forEach(subdistrict => {
        const option = document.createElement("option");
        option.value = subdistrict;
        option.textContent = subdistrict;
        subdistrictDropdown.appendChild(option);
    });
});

document.getElementById("postalCodeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const province = document.getElementById("province").value;
    const city = document.getElementById("city").value;
    const subdistrict = document.getElementById("subdistrict").value;

    const result = postalCodes.find(
        (item) =>
            item.province === province &&
            item.city === city &&
            item.subdistrict === subdistrict
    );

    if (result) {
        document.getElementById("postalCode").textContent = `Kode Pos: ${result.postalCode}`;
        document.getElementById("areaInfo").innerHTML = `${result.subdistrict}, ${result.city}, ${result.province}`;
    } else {
        document.getElementById("postalCode").textContent = "Kode Pos: Not Found";
        document.getElementById("areaInfo").textContent = "Informasi Area: Not Found";
    }
});