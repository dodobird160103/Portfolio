import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonials = () => {
    return(
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2> Testimonials </h2>

            <Swiper className="container testimonials_container" // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR1} alt="client img" />
                    </div>

                    <h5 className='client_name'>Sarah Johnson</h5>
                    <small className='client_review'>"I was really impressed with the work that Farhan did on my website. He was able to take my vision and turn it into a beautiful, functional website that exceeded my expectations."</small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR2} alt="client img" />
                    </div>

                    <h5 className='client_name'> David Kim</h5>
                    <small className='client_review'>"I couldn't be happier with the work that Farhan did on my website. He was able to create a website that is both beautiful and functional, and has helped me take my business to the next level."</small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR3} alt="client img" />
                    </div>

                    <h5 className='client_name'>Kawame Patel</h5>
                    <small className='client_review'>"Working with Farhan was a great experience. He was very responsive and easy to work with, and was able to create a website for me that is both stylish and user-friendly."</small>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR4} alt="client img" />
                    </div>

                    <h5 className='client_name'>Fatima Wasim</h5>
                    <small className='client_review'>"If you're looking for a talented web developer, I highly recommend Farhan. He created a stunning website for me that perfectly met my needs and helped me achieve my business goals."</small>
                </SwiperSlide>

            </Swiper>
        </section>
    )
}