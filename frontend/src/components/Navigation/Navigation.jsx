import { useState } from 'react';
import './Navigation.scss';
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Currículo', href: '#curriculo' },
  { label: 'Contato', href: '#contato' },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navigation">
      <div className="navigation__container">
        <a href="#home" className="navigation__logo">
          <img src={logo} alt="Guilherme R.Costa"/>
        </a>

        <nav
          className={`navigation__links ${isMenuOpen ? 'navigation__links--open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navigation__link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="navigation__cta">
          Vamos conversar
        </a>

        <button
          type="button"
          className="navigation__toggle"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navigation;