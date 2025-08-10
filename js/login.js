let loginButton = document.querySelector('button[type="submit"]');

let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  // Reset styles and messages
  [emailInput, passwordInput].forEach(input => {
    input.style.border = '1px solid #ccc';
    let p = input.nextElementSibling;
    if (p) p.innerHTML = '';
  });

  // Validation patterns
  const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim());
  const passwordIsValid = /^[a-zA-Z0-9]{8,20}$/.test(passwordInput.value.trim());

  let isValid = true;

  // Email Validation
  if (!emailInput.value) {
    emailInput.style.border = '1px solid red';
    emailInput.nextElementSibling.innerHTML = "Email is required";
    isValid = false;
  } else if (!emailIsValid) {
    emailInput.style.border = '1px solid red';
    emailInput.nextElementSibling.innerHTML = "Please enter a valid email address.";
    isValid = false;
  }

  // Password Validation
  if (!passwordInput.value) {
    passwordInput.style.border = '1px solid red';
    passwordInput.nextElementSibling.innerHTML = "Password is required";
    isValid = false;
  } else if (!passwordIsValid) {
    passwordInput.style.border = '1px solid red';
    passwordInput.nextElementSibling.innerHTML = "Password must be 8 to 20 characters and contain only letters and numbers.";
    isValid = false;
  }

  // If all inputs are valid
  if (isValid) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((ele) => {
        return ele.password === passwordInput.value && ele.email === emailInput.value
    })

    if(user){
        alert("Login successful!");
        window.location = "/index.html";
    }else{
        loginButton.classList.add("shake");
        setTimeout(() => loginButton.classList.remove("shake"), 300);
        emailInput.value = ""
        passwordInput.value = ""
    }
    
  }
});



// my code before refactoring with ai

/**
let registerButton = document.querySelector('button[type="submit"]');

let nameInbut = document.getElementById("name")
let passwordInbut = document.getElementById("password")
let emailInbut = document.getElementById("email")

registerButton.addEventListener("click", function (e) {
    e.preventDefault()
    const nameIsValid = /^[a-zA-Z\s]+$/.test(nameInbut.value.trim());
    const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(emailInbut.value.trim());
    const passwordIsValid = /^[a-zA-Z0-9]{8,20}$/.test(passwordInbut.value.trim());
    
    if(!nameInbut.value){
        nameInbut.style.border = '1px solid red'
        let p = nameInbut.nextElementSibling
        p.innerHTML =''
        p.innerHTML = "Name is required"
    } else if(!nameIsValid){
        let p = nameInbut.nextElementSibling
        nameInbut.style.border = '1px solid red'
        p.innerHTML =''
        p.innerHTML = "Name must contain only letters."
    }

    if(!passwordInbut.value){
        passwordInbut.style.border = '1px solid red'
        let p = passwordInbut.nextElementSibling
        p.innerHTML =''
        p.innerHTML = "Password is required"
    }else if(!passwordIsValid){
        let p = passwordInbut.nextElementSibling
        passwordInbut.style.border = '1px solid red'
        p.innerHTML =''
        p.innerHTML = "Password must be 8 to 20 characters and contain only letters and numbers."
    }
    
    if(!emailInbut.value){
        emailInbut.style.border = '1px solid red'
        let p = emailInbut.nextElementSibling
        p.innerHTML =''
        p.innerHTML = "Email is required"
    }else if(!emailIsValid){
        let p = emailInbut.nextElementSibling
        emailInbut.style.border = '1px solid red'
        p.innerHTML =''
        p.innerHTML = "Please enter a valid email address."
    }
    

    if(emailIsValid && passwordIsValid && nameIsValid){
        if(JSON.parse(localStorage.getItem("users"))){
            let users = JSON.parse(localStorage.getItem("users"))
            users.push({name: nameInbut.value, email: emailInbut.value, password: passwordInbut.value})
            localStorage.setItem("users", JSON.stringify(users))
        }else{
            localStorage.setItem("users", JSON.stringify([{name: nameInbut.value, email: emailInbut.value, password: passwordInbut.value}]))
            window.location = "/index.html"
        }
    }
});

 */
