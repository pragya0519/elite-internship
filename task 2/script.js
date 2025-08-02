// Register new user
function register() {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  localStorage.setItem("auth_user", JSON.stringify({ username, password }));
  alert("Registration successful! You can now login.");
}

// Login existing user
function login() {
  const enteredUsername = document.getElementById("login-username").value;
  const enteredPassword = document.getElementById("login-password").value;

  const stored = localStorage.getItem("auth_user");
  if (!stored) {
    alert("No user registered!");
    return;
  }

  const user = JSON.parse(stored);
  if (enteredUsername === user.username && enteredPassword === user.password) {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("secure-page").style.display = "block";
    document.getElementById("user-name").textContent = user.username;
  } else {
    alert("Invalid credentials!");
  }
}

// Logout
function logout() {
  document.getElementById("secure-page").style.display = "none";
  document.getElementById("form-section").style.display = "flex";
  document.getElementById("login-username").value = '';
  document.getElementById("login-password").value = '';
}
