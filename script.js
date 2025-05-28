<script>
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', () => {
    // Login form
    const loginForm = document.querySelector('.login_box form');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission/reload

      if (!loginEmail.value) {
        alert('Please enter your email for login.');
        loginEmail.focus();
        return;
      }
      if (!loginPassword.value) {
        alert('Please enter your password for login.');
        loginPassword.focus();
        return;
      }

      // Simple success message (replace with real auth logic)
      alert(`Logged in as: ${loginEmail.value}`);
      loginForm.reset();
    });

    // Signup form
    const signupForm = document.querySelector('.signup_box form');
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');

    signupForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission/reload

      if (!signupName.value) {
        alert('Please enter your full name.');
        signupName.focus();
        return;
      }
      if (!signupEmail.value) {
        alert('Please enter your email for signup.');
        signupEmail.focus();
        return;
      }
      if (!signupPassword.value) {
        alert('Please enter your password for signup.');
        signupPassword.focus();
        return;
      }

      // Simple success message (replace with real signup logic)
      alert(`Account created for: ${signupName.value}`);
      signupForm.reset();
    });
  });
</script>
