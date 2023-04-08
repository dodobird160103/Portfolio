import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iuh63zp', 'template_su5ckz2', form.current, 'su6Wl2Cv3U8VhiBTR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }
    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                <article className="contact_option">
                    <MdOutlineMailOutline className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>farhan14711@gmail.com</h5>
                    <a href="mailto: farhan14711@gmail.com" target='_blank'>Send a message</a>
                </article>

                <article className="contact_option">
                    <RiMessengerLine className='contact_option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Farhan Kashif</h5>
                    <a href="https://m.me/dodi.bird.568" target='_blank'>Send a message</a>
                </article>

                <article className="contact_option">
                    <BsWhatsapp className='contact_option-icon'/>
                    <h4>whatsApp</h4>
                    <a href="https://api.whatsapp.com/send?phone=+923355102225" target='_blank'>Send a message</a>
                </article>

                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}