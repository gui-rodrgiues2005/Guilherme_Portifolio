import './Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© {year} Guilherme Rodrigues Costa</p>
      </div>
    </footer>
  );
}

export default Footer;