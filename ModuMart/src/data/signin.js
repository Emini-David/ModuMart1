import React, { useState } from 'react';
import './Signup.css'; // your CSS file path

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // You can store the user data or send it to a backend here
    alert('✅ Account Successfully Created');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="signin_box">
      <div className="account">
        <h2>Create an account with <span style={{ color: '#212ea0' }}>ModuMart</span></h2>
        <p>Start your journey for free quality trial!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account? <a href="/login">Sign In here</a>
      </p>
    </div>
  );
};

export default Signup;
