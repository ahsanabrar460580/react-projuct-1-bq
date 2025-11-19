
import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('Form data submitted:', formData);
    alert(`Registration successful for ${formData.fname} ${formData.lname}!`);
  };

  const handleReset = () => {
    setFormData({
      fname: '',
      lname: '',
      email: '',
      password: '',
    });
    console.log('Form data reset.');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname" 
            value={formData.fname}
            onChange={handleChange}
            required
            placeholder='First Name...'
          />

          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
            placeholder='Last Name...'
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Email...'
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='Password'
          />

          <div className="button-group">
            <button className="submit" type="submit">
              Submit
            </button>

            <button className="reset" type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
