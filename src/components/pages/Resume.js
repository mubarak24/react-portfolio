import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        <a href="resume.pdf" download>Download my resume</a>
      </p>
      <h4>Front-end Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h4>Back-end Proficiencies</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
      </ul>
    </div>
  );
}
