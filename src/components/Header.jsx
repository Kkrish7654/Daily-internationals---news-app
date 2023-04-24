import React, { useContext, useState } from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { ThemeContext } from '../context/ContextTheme';

const Header = () => {
  const NavLinks = [
    { title: 'Home', url: '/' },
    { title: 'Blog', url: '/blog' },
    { title: 'About', url: '/about' },
  ];

  const {theme, setTheme} = useContext(ThemeContext)
  console.log(theme);

  return (
    <header className={`head ${theme}`}>
      <nav className='navbar background'>
        <div>
          <h3>
            <Link className='text' to='/'>
              Daily Internationals
            </Link>
          </h3>
        </div>
        <ul className='nav-links'>
          {NavLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link className='text' to={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className='hamburger'>
          <button
            className='text'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Change theme
          </button>
          <button className='hamburger-menu'>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
