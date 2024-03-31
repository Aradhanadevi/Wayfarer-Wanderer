import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerDetails from './CustomerDetails';
const Admin = () => {
  const storedEmail = 'anjali123@gmail.com';
  const storedPassword = 'anj@123';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === storedEmail && password === storedPassword) {
      setIsAuthenticated(true);
      setError('');
      console.log('Login successful');
      navigate('/customerdetails'); // Redirect to the home page
    } else {
      setIsAuthenticated(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
    <div>
      <h1>Login Here For Admin Page</h1>
    </div>
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          {!isAuthenticated ? (
            <form onSubmit={handleSubmit} className="my-form bg-light p-4 rounded">
              <h2 className="mb-4">Login</h2>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-label="Email address"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  aria-label="Password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="rememberCheckbox">
                  Remember me
                </label>
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          ) : (
            <div className="alert alert-success mt-4" role="alert">
              Redirecting...
            </div>
          )}
        </div>
      </div>
    </div>

  </>
  );
}

export default Admin;