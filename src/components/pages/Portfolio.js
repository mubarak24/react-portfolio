import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/" className="portfolio-item picQoT">
          <div>
            <h3>Quotes of Thrones</h3>
            <span>Project 1</span>
          </div>
        </a>

        <a href="https://cinema-finder.herokuapp.com/" className="portfolio-item picCF">
          <div>
            <h3>Cinema Finder</h3>
            <span>Project 2</span>
          </div>
        </a>

      </div>
    </div>
  );
}
