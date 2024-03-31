import React from 'react'
import { Link } from 'react-router-dom';
export default function Adminheader() {
  return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customerdetails">CustomerDetails</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/query">Query</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/visitors">Visitors</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
