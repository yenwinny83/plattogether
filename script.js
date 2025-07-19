// Hiện thông báo khi người dùng click vào link tải game
const downloadLinks = document.querySelectorAll('a[target="_blank"]');
downloadLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert('Bạn sắp được chuyển hướng đến trang tải game Play Together!');
    });
});
