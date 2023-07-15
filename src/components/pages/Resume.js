import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        <a href="resume.pdf" download>Download my resume</a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
