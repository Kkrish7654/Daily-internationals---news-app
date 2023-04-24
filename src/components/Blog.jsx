import React, { useContext } from 'react';
import { ThemeContext } from '../context/ContextTheme';

const Blog = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`blog-container ${theme}`}>
      <section className='blog-section background text'>
        <form>
          <input type='text' placeholder='Search Daily News' />
          <button type='submit'>Search</button>
        </form>
        Blog Page
      </section>
    </main>
  );
};

export default Blog;
