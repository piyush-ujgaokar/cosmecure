const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const toggleText = document.getElementById('toggleText');
const toggleLink = document.getElementById('toggleLink');
const signupFields = document.getElementById('signupFields');
const confirmPassword = document.getElementById('confirmPassword');
const authForm = document.getElementById('authForm');
const robotCheck = document.getElementById('robotCheck');

let isLogin = true;

toggleLink.addEventListener('click', function(e) {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
  submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
  toggleText.textContent = isLogin ? "Don't have an account?" : "Already have an account?";
  toggleLink.textContent = isLogin ? "Sign up" : "Login";

  signupFields.classList.toggle('hidden');
  confirmPassword.classList.toggle('hidden');
});


authForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!isLogin) {
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (pass !== confirm) {
      alert("Passwords do not match.");
      return;
    }
  }

  alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");
  authForm.reset();
});