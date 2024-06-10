import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    
  return (
      <section id='intro' className='container-fluid d-flex flex-column justify-content-center'>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 2}}} className='text-center'>
          <h1>Hello, my name is <span>Mikhail</span>!</h1>
          <h2>I'm a Software Development Engineer in Test</h2>
          <motion.p animate={{ y: [0, 15, 0, 10, 0, 5, 0] }} transition={{ repeat: Infinity, repeatDelay: 2}} className='d-flex flex-column'>
            <span className='mb-2'>Scroll down to learn more!</span>
            <FontAwesomeIcon icon={faLongArrowAltDown} />
          </motion.p>
        </motion.div>
      </section>
  );
}
