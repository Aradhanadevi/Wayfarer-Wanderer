import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
  const storedEmail = 'project@gmail.com';
  const storedPassword = 'project@123';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [showLogin, setShowLogin] = useState(false); 
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setSignupError('Passwords do not match');
    } else {
      console.log('Email:', newEmail);
      console.log('Password:', newPassword);
      navigate('/login');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === storedEmail && password === storedPassword) {
      setIsAuthenticated(true);
      setError('');
      console.log('Login successful');
      navigate('/'); 
    } else {
      setIsAuthenticated(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="container h-100 signup">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card bg-dark shadow">
            <div className="card-body">
              {!showLogin ? ( 
                <form onSubmit={handleSignupSubmit}>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={newEmail}
                      onChange={handleNewEmailChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={newPassword}
                      onChange={handleNewPasswordChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      required
                    />
                  </div>
                  {signupError && <p className="text-danger">{signupError}</p>}
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                  <p className="text-center mt-3 mb-0">
                    Already have an account?{' '}
                    <span className="text-dark" onClick={toggleForm} style={{ cursor: 'pointer' }}>
                      Log In
                    </span>
                  </p>
                </form>
              ) : ( 
                <form onSubmit={handleLoginSubmit}>
                  <h2 className="text-center mb-4">Login</h2>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
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
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                  <p className="text-center mt-3 mb-0">
                    Don't have an account?{' '}
                    <span className="text-primary" onClick={toggleForm} style={{ cursor: 'pointer' }}>
                      Sign Up
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
