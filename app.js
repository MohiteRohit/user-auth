document.getElementById('register-btn')?.addEventListener('click', async () => {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  });
  const message = response.ok ? 'User registered' : 'Registration failed';
  document.getElementById('message').textContent = message;
});

document.getElementById('login-btn')?.addEventListener('click', async () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  });
  if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      document.getElementById('message').textContent = 'Logged in';
      setTimeout(() => {
          window.location.href = '/logout.html';
      }, 1000); // Redirect to logout page after 1 second
  } else {
      document.getElementById('message').textContent = 'Login failed';
  }
});

document.getElementById('logout-btn')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  document.getElementById('message').textContent = 'Logged out';
  setTimeout(() => {
      window.location.href = '/index.html';
  }, 1000); // Redirect to home page after 1 second
});
