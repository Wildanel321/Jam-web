function updateJam() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('jam').innerText = jam;
  document.getElementById('menit').innerText = menit;
  document.getElementById('detik').innerText = detik;
}

setInterval(updateJam, 1000);
