const namaInput = document.getElementById('nama');
const nrpInput = document.getElementById('nrp');
const mataKuliahInput = document.getElementById('mataKuliah');
const dosenInput = document.getElementById('dosen');
const form = document.getElementById('registrationForm');
const namaSuggestions = document.getElementById('namaSuggestions');

const namaMahasiswa = [
    "Ahmad Fauzi",
    "Budi Santoso",
    "Citra Dewi",
    "Dian Pratama",
    "Eka Putri",
    "Fajar Hidayat",
    "Gita Ananda",
    "Hendra Wijaya",
    "Indah Lestari",
    "Joko Susilo"
];

namaInput.addEventListener('input', function () {
    const input = namaInput.value.toLowerCase();
    namaSuggestions.innerHTML = '';
    
    if (input) {
        const filteredNames = namaMahasiswa.filter(name =>
        name.toLowerCase().includes(input)
    );

    filteredNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        li.addEventListener('click', function () {
            namaInput.value = name;
            namaSuggestions.innerHTML = '';
        });
            namaSuggestions.appendChild(li);
        });
    }
});

document.addEventListener('click', function (e) {
    if (!namaInput.contains(e.target) && !namaSuggestions.contains(e.target)) {
        namaSuggestions.innerHTML = '';
    }
});

form.addEventListener('submit', function (e) {
    if (!namaInput.value.trim() || !nrpInput.value.trim() || !mataKuliahInput.value.trim() || !dosenInput.value.trim()) {
        e.preventDefault();
        if (!namaInput.value.trim()) {
            alert('Nama harus diisi.');
            namaInput.focus();
        } else if (!nrpInput.value.trim()) {
            alert('NRP harus diisi.');
            nrpInput.focus();
        } else if (!mataKuliahInput.value.trim()) {
            alert('Mata Kuliah harus diisi.');
            mataKuliahInput.focus();
        } else if (!dosenInput.value.trim()) {
            alert('Dosen Pengampu harus diisi.');
            dosenInput.focus();
        }
    }
});