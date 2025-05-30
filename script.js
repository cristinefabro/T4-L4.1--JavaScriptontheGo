const roleInput = document.getElementById('role');
  const passwordInput = document.getElementById('password');
  const messageDiv = document.getElementById('message');
  const authForm = document.getElementById('authForm');

  const validPasswords = {
    "Department Head": "SiEsD3ptH34d",
    "Faculty": "SiEsF4cu1ty",
    "Student Officer": "#CCSOAko",
    "Student": "3SapatNa!"
  };

  authForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const role = roleInput.value;
    const password = passwordInput.value;

    messageDiv.style.display = 'none';
    messageDiv.className = 'result-message';
    messageDiv.textContent = '';


    if (role === "Department Head") {
      switchPasswordCheck(password, role);
    } else if (role === "Faculty") {
      switchPasswordCheck(password, role);
    } else if (role === "Student Officer") {
      switchPasswordCheck(password, role);
    } else if (role === "Student") {
      switchPasswordCheck(password, role);
    } else {

      console.error("Authentication failed: Unknown role selected or no role selected!");
      showMessage("Unknown or no role selected. Please choose a valid role.", "error");
    }
  });

  function switchPasswordCheck(password, role) {
    switch(password) {
      case validPasswords[role]:

        console.log(`Authentication successful for role: ${role}`);
        showMessage(`Welcome ${role}! Authentication successful.`, "success");
        break;
      case '':

        console.warn(`Password not entered for role: ${role}`);
        showMessage("Password field is empty. Please enter your password.", "warning");
        break;
      default:
        
        console.error(`Authentication failed for role: ${role}. Incorrect password.`);
        showMessage("Incorrect password. Please try again.", "error");
    }
  }

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.classList.add(type);
    messageDiv.style.display = 'block';
  }