'use client';

import React, { useState } from 'react';
import './styles/navbar.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(5); 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse tabMenu" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {['Home', 'Stats', 'Markets', 'Exchanges', 'News', 'Daily Combo', 'Resources', 'Watchlist', 'Portfolio', 'Rewards'].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${activeIndex === index ? 'active' : ''}`} 
                    href="#"
                    onClick={() => handleItemClick(index)}
                  >
                    {item}
                  </a>
                </li>
              ))}
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
