import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styles from './Blah.module.css';

function Navbar() {
  return (
    <>
      <div className={styles.cool}>
        <nav className="navbar  navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/podcasts">
                My Podcasts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">
                Movies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
