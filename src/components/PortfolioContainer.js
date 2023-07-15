import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './style.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>{renderPage()}</main>
      <footer>
        <a href="https://github.com/mubarak24">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://stackoverflow.com">Stack Overflow</a>
      </footer>
    </div>
  );
}
