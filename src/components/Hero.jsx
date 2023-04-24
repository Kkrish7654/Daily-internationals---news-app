import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ContextTheme';

const Hero = () => {
  const [allPosts, setPosts] = useState({});
  const [popularPosts, setPopularPosts] = useState({});
  const [showAll, setShowAll] = useState(false);
  const showAllText = showAll ? 'show less' : 'load more';
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        ' https://newsapi.org/v2/top-headlines?country=us&apiKey=ec877226e7ed4667b92b4d504571c67e'
      );
      const res = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ec877226e7ed4667b92b4d504571c67e'
      );

      const data = await res.json();
      const popular = await response.json();

      setPosts(data.articles);
      setPopularPosts(popular.articles);
      console.log(popular);
    }
    fetchData();
  }, []);
  console.log(allPosts);
  return (
    <main className={`container ${theme}`}>
      <div className='hero-section background'>
        <div>
          <h1 className='text'>Populars</h1>
          <section className="popular-section">
            {Object.values(popularPosts).map((post, index) => {
              return (
                <div key={index}>
                  <h4><Link className='popular-headline' to={post.url}>{post.title}</Link></h4>
                </div>
              );
            })}
          </section>
        </div>
        <div>
          <h1 className='hero-title text'>Daily Global News</h1>
          <h3 className='hero-subtitle'>Today Trending</h3>
          <section className='post-box'>
            {Object.values(allPosts)
              .map((list, index) => {
                return (
                  <div key={index}>
                    <h3>
                      <Link className='headline' to={list.url}>
                        {list.title}
                      </Link>
                    </h3>
                    <div className='news-des text'>
                      <p> ~ {list.description}</p>
                      <p>{list.author}</p>
                      <span>published at ~ {list.publishedAt}</span>
                    </div>
                  </div>
                );
              })
              .slice(0, showAll ? allPosts.lenght : 15)}
            <button className="showAll-btn" onClick={handleShowAll}>{showAllText}</button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
