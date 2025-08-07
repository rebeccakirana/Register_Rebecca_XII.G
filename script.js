<script>
    const form = document.getElementById("formPendaftaran");
    const tabel = document.getElementById("tabelData");
    const isiTabel = document.getElementById("isiTabel");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Validasi Email
      const email = emailInput.value;
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        return;
      } else {
        emailError.style.display = "none";
      }

      // Ambil data dari form
      const namaLengkap = document.getElementById("nama_lengkap").value;
      const namaPanggilan = document.getElementById("nama_panggilan").value;
      const nomorHp = document.getElementById("nomor_hp").value;
      const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;

      // Buat baris tabel baru
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${namaLengkap}</td>
        <td>${namaPanggilan}</td>
        <td>${nomorHp}</td>
        <td>${email}</td>
        <td>${jenisKelamin}</td>
      `;

      isiTabel.appendChild(row);
      tabel.style.display = "table";

      // Reset form
      form.reset();
    });
  </script>