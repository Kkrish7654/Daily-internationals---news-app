import React, { useContext } from 'react';
import { ThemeContext } from '../context/ContextTheme';

const FooterLine = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`main ${theme}`}>
      <div className='footer-container background text'>
        <div className='footer-info'>
          <h2>About Us</h2>
          <p>We are a company that provides daily dev news and blogs</p>
        </div>
        <div className='footer-contact'>
          <h2>Contact Us</h2>
          <ul>
            <li>Email: info@mycompany.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, Anytown india</li>
          </ul>
        </div>
        <div className='footer-copyright'>
          <p>© 2023 My Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLine;
