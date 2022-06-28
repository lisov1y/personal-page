import React from 'react';
import Description from './Description';
import Skills from './Skills';
import AnimatedBox from './AnimatedBox';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id='about' className='min-vh-100'>
      <motion.h2 className='text-center py-sm-5 py-3 fw-bold' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}}>About Me</motion.h2>
      <div className='row d-flex justify-content-sm-around my-auto'>
        <Description/>
        <Skills />
      </div>
      <AnimatedBox />
    </section>
  )
}
