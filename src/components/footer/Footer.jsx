import style from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer () {
    return (
    <footer className="container">
        <div className={style.socials}>
          <a className={style.socialLink} href="/">
            <FontAwesomeIcon icon={faFacebookSquare}/>
          </a>
          <a className={style.socialLink} href="/">
            <FontAwesomeIcon icon={faTwitterSquare}/>
          </a>
          <a className={style.socialLink} href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className={style.socialLink} href="/">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
        <p className="copyrightText">&copy; 2024 - All rights reserved</p>
    </footer>
    );
}


export { Footer };