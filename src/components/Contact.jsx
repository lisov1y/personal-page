import React from 'react';
import Eye from './Eye';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id='contact'>
      <motion.h2 className='text-center py-sm-5 py-3 fw-bold' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}}>Contact Me</motion.h2>
      <motion.div className='d-flex flex-column-reverse flex-lg-row justify-content-center justify-content-lg-around align-items-center' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}}>
        <div className='mt-5 p-5'>
          <p className='fs-3 fw-bold mb-1'>Have a question?</p>
          <p className='fs-3 fw-bold mb-1'>Or want to work together?</p>
          <p className='fs-3 fw-bold'>Get in touch!</p>
          <div className='d-flex justify-content-around mt-5'>
            <a className='link' href='https://www.linkedin.com/in/mikhail-stupnikov-638459194/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size='2x' /></a>
            <a className='link' href='https://github.com/lisov1y' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
            <a className='link' href='https://www.instagram.com/l1soviy/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
          </div>
        </div>
        <Eye />
      </motion.div>
    </section>
  )
}
