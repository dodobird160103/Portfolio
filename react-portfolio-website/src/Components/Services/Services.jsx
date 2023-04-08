import './Services.css';
import {BiCheck} from 'react-icons/bi';


export const Services = () => {
    return(
        <section id='services'>
            <h5>What I Offer</h5>
            <h2> Services in Web Development</h2>

            <div className="container services_container">
                <article className='service'>
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
                        </li>

                    </ul>
                </article>
            </div>
        </section>
    )
}