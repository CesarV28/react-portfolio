
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h1 className="footer__title">Cesar</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                {/* Social item */}
                <a href="www.linkedin.com/in/cesar-omar-vargas-gutierrez-523494199" className="footer__social-icon" target={"_blank"}>
                    <i className='bx bxl-linkedin-square'></i>
                </a>
                {/* Social item */}
                <a href="" className="footer__social-icon" target={"_blank"}>
                    <i className='bx bxl-dribbble' ></i>
                </a>
                {/* Social item */}
                <a href="https://github.com/CesarV28" className="footer__social-icon" target={"_blank"}>
                    <i className='bx bxl-github' ></i>
                </a>
            </div>
        </div>
    </footer>
  )
}
