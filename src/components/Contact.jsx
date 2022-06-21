import React from 'react';
import Eye from './Eye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import AnimatedBox from './AnimatedBox';

export default function Contact() {
  return (
    <section id='contact'>
      <h2 className='text-center py-sm-5 py-2'>Contact Me</h2>
      <div className='d-flex flex-column-reverse flex-sm-row justify-content-center justify-content-sm-around align-items-center'>
        <div className='mt-5 contact-card p-5'>
          <p className='fs-3 fw-bold mb-1'>Have a question?</p>
          <p className='fs-3 fw-bold mb-1'>Or want to work together?</p>
          <p className='fs-3 fw-bold'>Get in touch!🔫🤠 </p>
          <a className='fs-3 fw-bold contact-link' href='https://mail.google.com/mail/?view=cm&fs=1&to=mikhailstupnikov98@gmail.com' target='_blank'>mikhailstupnikov98@gmail.com</a>
          <div className='d-flex justify-content-around mt-3'>
            <a whileHower={{scale: 1.2}} className='link' href='https://www.linkedin.com/in/mikhail-stupnikov-638459194/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></a>
            <a className='link' href='https://github.com/lisov1y' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
            <a className='link' href='https://www.instagram.com/l1soviy/' target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
          </div>
        </div>
        <Eye />
      </div>
      
    </section>
  )
}
