document.getElementById("toLogin").addEventListener("click", function (e) {
    e.preventDefault();
    toggleForms("login");
});

document.getElementById("toRegister").addEventListener("click", function (e) {
    e.preventDefault();
    toggleForms("register");
});

function toggleForms(formType) {
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");

    if (formType === "login") {
        registrationForm.style.display = "none";
        loginForm.style.display = "block";
    } else if (formType === "register") {
        registrationForm.style.display = "block";
        loginForm.style.display = "none";
    }
}

function registrationSubmit() {
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let resultContainer = document.querySelector(".res");

    let firstnameRegex = /^[A-Za-z]{2,}$/;
    let lastnameRegex = /^[A-Za-z]{2,}$/;
    let emailRegex = /^[A-z][A-z0-9_.+-]+@[A-z0-9.-]+\.[A-z]{2,5}$/;
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;

    if (!firstname || !lastname || !email || !password) {
        resultContainer.innerHTML = `<p style="color: red;">All fields are required.</p>`;
        return;
    }

    if (!firstnameRegex.test(firstname)) {
        resultContainer.innerHTML = `<p style="color: red;">First name must be only letters.</p>`;
    } else if (!lastnameRegex.test(lastname)) {
        resultContainer.innerHTML = `<p style="color: red;">Last name must be only letters.</p>`;
    } else if (!emailRegex.test(email)) {
        resultContainer.innerHTML = `<p style="color: red;">Incorrect email format.</p>`;
    } else if (!passwordRegex.test(password)) {
        resultContainer.innerHTML = `<p style="color: red;">Password must be at least 8 characters, include a letter, a number, and a special character.</p>`;
    } else {
        
        let user = { firstname, lastname, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        resultContainer.innerHTML = `<p style="color: green;">Registration successful! You can now log in.</p>`;
        setTimeout(() => toggleForms("login"), 1000); // delay after log in
    }
  
}

function loginSubmit() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let resultContainer = document.querySelector(".res1");

    let emailRegex = /^[A-z][A-z0-9_.+-]+@[A-z0-9.-]+\.[A-z]{2,5}$/;
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;

    if (!email || !password) {
        resultContainer.innerHTML = `<p style="color: red;">All fields are required.</p>`;
        return;
    }

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        resultContainer.innerHTML = `<p style="color: red;">No account found. Please register.</p>`;
        return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
        resultContainer.innerHTML = `<p style="color: red;">Invalid email or password.</p>`;
    } else {
        resultContainer.innerHTML = `<p style="color: green;">Login successful!...</p>`;
        setTimeout(() => {
             window.location.href = "main.html"; 
        }, 1000);
    }
}
