import "./Footer.css"; // Importar el CSS
import linkedinIcon from "../../assets/icons/linkedin.png"; 
import githubIcon from "../../assets/icons/github.png";
import twitterIcon from "../../assets/icons/twitter copy.png";


export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-names">
          <p className="footer-name">Salome Escobar Vallejo</p>
          <p className="footer-name">Daniel Yepes</p>
          <p className="footer-name">Mateo Arango</p>
          <p className="footer-name">Kevin Agudelo</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/salomesev/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/salomesev" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://twitter.com/salomesev" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}
