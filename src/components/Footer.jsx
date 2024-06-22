import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Anurag Uranw
          </p>
          <nav className="footer-nav">
            <a href="#" className="footer-nav-link">
              Terms & Services
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;