import './Footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai';

export const Footer = () => {
    return(
        <footer>
            <a href="#" className='footer_logo'>Farhan Kashif</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portoflio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contat">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://github.com/dodobird160103"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/farhan-kashif-98b596244/"><BsLinkedin/></a>
                <a href="https://www.instagram.com/farhan_kashif1123/"><AiOutlineInstagram/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Farhan Kashif. All rights reserved</small>
            </div>
        </footer>
    )
}