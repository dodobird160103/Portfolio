import './Header.css';
import ME from '../../assets/profile.png';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
    return(
        <header>
            <HeaderSocials/>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Farhan Kashif</h1>
                <h5 className="text-light">
                    Full Stack Developer
                </h5>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}