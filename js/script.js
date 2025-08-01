
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dark-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark');
    });
});
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const val = phoneInput.value.trim();
    if (!/^\+380\d{9}$/.test(val)) {
        alert('Вкажіть номер у форматі +380XXXXXXXXX');
        phoneInput.focus();
        return false;
    }
    return true;
}
