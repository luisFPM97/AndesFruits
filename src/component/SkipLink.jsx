import { useEffect } from 'react';
import './SkipLink.css';

const SkipLink = () => {
  useEffect(() => {
    const skipLink = document.querySelector('.skip-link');
    const handleClick = (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (skipLink) {
      skipLink.addEventListener('click', handleClick);
    }

    return () => {
      if (skipLink) {
        skipLink.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
};

export default SkipLink;
