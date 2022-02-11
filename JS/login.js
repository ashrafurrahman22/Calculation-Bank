document.getElementById('login-submit').addEventListener('click', function () {
    // collect user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // collect user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check valid mail and password
    if (userEmail == 'opu@gmail.com' && userPassword == 'opu') {
        window.location.href = 'banking.html'
    }
})