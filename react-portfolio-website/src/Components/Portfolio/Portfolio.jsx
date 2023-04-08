import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

export const Portfolio = () => {
    return(
        <section id='portfolio'>  
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="project img"/>
                    </div>

                    <h3>Crypto Currency Dashboard & Financial Visualization</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="project img"/>
                    </div>

                    <h3>Data Analysis System in Python</h3>

                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="project img"/>
                    </div>

                    <h3>Figma Dashboard UI Kit for Data Design Web Apps</h3>

                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG4} alt="project img"/>
                    </div>

                    <h3>Mainframe Banking System</h3>

                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5} alt="project img"/>
                    </div>

                    <h3>Stocks Data Visualization Dashboard</h3>

                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>

                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG6} alt="project img"/>
                    </div>

                    <h3>Relational Database Management System</h3>
                    
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn'> Github</a>
                        <a href="https://github.com/dodobird160103" target='_blank' className='btn btn-primary'> Live Demo</a>
                    </div>


                </article>

            </div>
        </section>
    )
}