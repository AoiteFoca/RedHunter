import React from 'react';
import styles from './Header.module.css';

const Header1: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Contato', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Entrar', href: '#', hasUnderline: true },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>RedHunter</h1>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <a href={item.href} className={item.hasUnderline ? styles.underlinedLink : ''}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <form className={styles.searchForm}>
        <label htmlFor="search" className="visually-hidden">O que você procura?</label>
        <input
          type="search"
          id="search"
          placeholder="O que você procura?"
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d75831d32039300f63bf7aed198ca579bc720d53ba45a6f9af7c318688c917?placeholderIfAbsent=true&apiKey=14c95281464f4dc7abbc9d4edef57375" alt="Buscar" className={styles.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default Header1;