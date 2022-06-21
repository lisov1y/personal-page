import React from 'react';
import ProfilePic from '../images/pfp.jpeg';
import { motion } from "framer-motion";

export default function Description() {

  function renderAnimatedText() {
    const text = `It's me! I'm a passionate everyday learner who loves to work on the design and frontend things! I have two years of overall Front-End experience developing applications and designing mockups. Also I'm a decent problem solver!`;
    const dividedText = text.split(' ');
    const parsedText = [];
    for (let i = 0; i < dividedText.length; i++) {
      parsedText.push(
        <motion.div key={i} whileHover={{ y: -10 }} className='d-inline-block pe-2'>{dividedText[i]}</motion.div>
      );
    }
    return parsedText;
  }

  return (
    <div className='col-md-5 col-12 text-center description d-flex flex-column justify-content-center align-items-center mb-3 mb-sm-0'>
      <img id='profile-pic' src={ProfilePic} alt="Mikhail's Picture" />
      <div className='px-3 px-md-0'>
        <div className='mt-sm-4 mt-2 mb-0'>{renderAnimatedText()}</div>
        <p className='text-muted d-none d-sm-block'>(Like solving algorithms and solving the problem where to eat tonight)</p>
      </div>
    </div>
  )
}
