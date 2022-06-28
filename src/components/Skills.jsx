import React from 'react';
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div className='col-md-4 col-12 d-flex flex-column justify-content-center px-md-0 px-5 skills pb-5' initial={{x: 300}} whileInView={{x: 0, transition: {duration: 0.5}}}>
      <h3 className='mb-3'>Here are a few technologies I've been working with recently</h3>
      <ul className='ps-0'>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>HTML</motion.li>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>CSS/SASS/Bootstrap</motion.li>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>React.js</motion.li>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>JavaScript</motion.li>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>ASP .NET</motion.li>
        <motion.li className='mb-2 fw-bold' whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>Node.js</motion.li>
      </ul>
    </motion.div>
  )
}
