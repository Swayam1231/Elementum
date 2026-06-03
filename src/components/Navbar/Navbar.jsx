import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>Elementum</a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className={styles.link}
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barHide : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
      </button>
    </nav>
  );
}
