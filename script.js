document.getElementById("formPendaftaran").addEventListener("submit", function(e) {
  e.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai dari input
  const nama_lengkap = document.getElementById("nama_lengkap").value;
  const nama_panggilan = document.getElementById("nama_panggilan").value;
  const nomor_hp = document.getElementById("nomor_hp").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;

  // Validasi email sederhana
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").style.display = "block";
    return;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  const user = {
    nama_lengkap: nama_lengkap,
    nama_panggilan: nama_panggilan,
    nomor_hp: nomor_hp,
    email: email,
    password: password,
    jenis_kelamin: jenis_kelamin
  };

  // Simpan ke localStorage
  localStorage.setItem(email, JSON.stringify(user));

  alert("Pendaftaran berhasil!");

  // Tampilkan tabel (kalau sebelumnya hidden)
  document.getElementById("tabelData").style.display = "table";

  // Masukkan data ke tabel
  const table = document.getElementById("isiTabel");
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = nama_lengkap;
  newRow.insertCell(1).textContent = nama_panggilan;
  newRow.insertCell(2).textContent = nomor_hp;
  newRow.insertCell(3).textContent = email;
  newRow.insertCell(4).textContent = jenis_kelamin;

  // Reset form setelah submit
  document.getElementById("formPendaftaran").reset();
});