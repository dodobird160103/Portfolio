import './About.css';
import ME from '../../assets/pblue.png';
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {VscNewFolder} from 'react-icons/vsc';

export const About = () => {
    return(
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <FiAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>2+ Years Working</small>
                    </article>

                    <article className='about_card'>
                        <FiUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>40+ WorldWide</small>
                    </article>

                    <article className='about_card'>
                        <VscNewFolder className='about_icon'/>
                        <h5>Projects</h5>
                        <small>24+ Completed</small>
                    </article>
                </div>

                <p>Hi. I'm Farhan Kashif, FullStack Web and App developer. I've been working as a Full Stack developer for more than 2 years now and as a app developer for more than 1 year with many satisfied clients worldwide. I make sure that my clients are satisfied with the job and that my work is upto the required standard. I'll be looking forward to working with you.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
        </section>
    )
}