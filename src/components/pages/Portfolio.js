import React from 'react';

export default function Home() {
  return (
    <div>
      <h2>Portfolio</h2>
      <a href="https://thecolorhieu.github.io/Quotes-of-Thrones/" class="flex-item picQoT">
        <div>
          <h3>Quotes of Thrones</h3>
          <span> Project 1</span>
        </div>
      </a>

      <a href="https://cinema-finder.herokuapp.com/" class="flex-item picCF">
        <div>
          <h3>Cinema Finder</h3>
          <span> Project 2</span>
        </div>
      </a>

      <a href="#MERN" class="flex-item picSR">
        <div>
          <h3>Surf Report</h3>
          <span> MERN stack</span>
        </div>
      </a>

      <a href="#Node" class="flex-item picLD">
        <div>
          <h3>LED Wall</h3>
          <span>Node/IoT</span>
        </div>
      </a>

      <a href="#React" class="flex-item picC">
        <div>
          <h3>Calculator</h3>
          <span>React/JavaScript/CSS</span>
        </div>
      </a>

      <a href="#MERN" class="flex-item picPP">
        <div>
          <h3>Pastel Puzzels</h3>
          <span>MERN Stack</span>
        </div>
      </a>

      <a href="#HTML" class="flex-item picRB">
        <div>
          <h3>Run Buddy</h3>
          <span>HTML/CSS</span>
        </div>
      </a>
    </div>
  );
}
