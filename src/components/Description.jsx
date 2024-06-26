import React from 'react';
import ProfilePic from '../images/pfp.jpeg';
import { motion } from "framer-motion";

export default function Description() {

  function renderAnimatedText() {
    const text = `I am Mikhail Stupnikov, an experienced SDET with over five years in web application testing and automation. Skilled in creating robust automation frameworks and integrating CI/CD pipelines, I am passionate about exploring new technologies and continuously enhancing my expertise.`;
    const dividedText = text.split(' ');
    const parsedText = [];
    for (let i = 0; i < dividedText.length; i++) {
      parsedText.push(
        <motion.div key={i} whileHover={{ y: -10 }} className='d-inline-block pe-1'>{dividedText[i]}</motion.div>
      );
    }
    return parsedText;
  }

  return (
    <motion.div className='col-md-5 col-12 text-center description d-flex flex-column justify-content-center align-items-center mb-3 mb-sm-0' initial={{x: -300}} whileInView={{x: 0, transition: {duration: 0.5}}} >
      <div className='img-circle d-flex justify-content-center align-items-center'>
        <motion.img id='profile-pic' src={ProfilePic} alt="Mikhail's Picture" whileTap={{scale: 0.7}} whileHover={{x: 20, y: 20}} />
      </div>
      <div className='px-3 px-md-0'>
        <div className='mt-sm-4 mt-2 mb-0'>{renderAnimatedText()}</div>
      </div>
    </motion.div>
  )
}
