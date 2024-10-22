'use client';

import React, { useState } from 'react';
import './styles/navbar.css';

export default async function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse tabMenu" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Markets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Exchanges
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Daily Combo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watchlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rewards
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="dropdown me-3">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  onClick={toggleDropdown}
                  aria-expanded={isOpen}
                >
                  BTC <i className="fas fa-caret-down"></i>
                </button>
                <ul
                  className={`dropdown-menu ${isOpen ? 'show' : ''}`}
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      BTC
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ETH
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LTC
                    </a>
                  </li>
                </ul>
              </div>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search cryptocoin"
                  aria-label="Search"
                />
              </form>
              <i className="bi bi-circle-half me-3"></i>
              <i className="bi bi-person"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}