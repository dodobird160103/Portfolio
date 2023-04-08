import './Services.css';
import {BiCheck} from 'react-icons/bi';


export const Services = () => {
    return(
        <section id='services'>
            <h5>What I Offer</h5>
            <h2> Services</h2>

            <div className="container services_container">
                <article className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Custom Web Application</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Website Design and Development</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Fully Responsive Webpages</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Search Engine Optimization</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Website Maintenance and Support</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Web Hosting</p> 
                        </li>

                    </ul>
                </article>

                <article className='service'>
                    <div className="service_head">
                        <h3>App Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Mobile App Design and Development</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Native App Development</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Custom Mobile App Development</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Mobile App Maintenance and Support</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>App Store Optimization</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Mobile App Testing</p> 
                        </li>

                    </ul>
                </article>

            </div>
        </section>
    )
}