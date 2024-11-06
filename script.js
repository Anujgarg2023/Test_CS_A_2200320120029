function validateForm() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pass').value;  
    if (password.length < 4) {
        alert('Password must be at least 4 characters long.');
        return false;
    }
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'currency.html';
        return false;
    } else {
        alert('Invalid username or password.');
        return false;
    }
}