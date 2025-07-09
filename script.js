window.onload = () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopupBtn');

  // แสดง popup เมื่อโหลดหน้าเว็บเสร็จ
  popup.style.display = 'block';

  // ปิด popup เมื่อคลิกปุ่มปิด
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // ปิด popup เมื่อคลิกพื้นหลัง
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
};