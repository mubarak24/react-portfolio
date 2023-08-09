import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/" className="portfolio-item picQoT">
          <div>
            <h3>Quote of Thrones</h3>
            <span>Project 1</span>
          </div>
        </a>

        <a href="https://cinema-finder.herokuapp.com/" className="portfolio-item picCF">
          <div>
            <h3>Cinema Finder</h3>
            <span>Project 2</span>
          </div>
        </a>

        <a href="https://fast-brook-59696-a40083fa7f53.herokuapp.com/" className="portfolio-item picJJ">
          <div>
            <h3>Jolly Journal</h3>
            <span>Project 3</span>
          </div>
        </a>

      </div>
    </div>
  );
}
