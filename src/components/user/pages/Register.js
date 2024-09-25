import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role

  const navigate = useNavigate();  // useNavigate instead of useHistory

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Mocked registration API call (replace with your backend logic)
    const registrationData = {
      name,
      email,
      password,
      role, // Optional, can be 'user' or 'admin'
    };

    // Call the backend API to register the user (replace with your API call)
    const response = await fakeRegisterUser(registrationData);

    if (response.success) {
      // Store user token and role in localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);

      // Redirect based on role using navigate
      if (response.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        {/* Optional role selection */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// Mocked registration function (replace with backend API call)
const fakeRegisterUser = async (data) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        success: true,
        token: 'your_jwt_token',
        role: data.role, // Based on form input
      });
    }, 1000)
  );
};

export default RegistrationPage;
