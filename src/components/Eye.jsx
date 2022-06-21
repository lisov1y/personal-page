import React from 'react'
import { motion } from "framer-motion";
import randomNumGen from '../getRandomNumber';

export default function Eye() {

  const getRandomPos = () => randomNumGen(-40, 40);
  const getRandomArrayLength = () => randomNumGen(15, 25);

  function generateDirections() {
    const directions = [];
    const directionsLength = getRandomArrayLength();
    for (let i = 0; i < directionsLength; i++) {
      directions.push(getRandomPos());
    }
    // this makes animation repeat smooth
    directions.push(directions[0]);
    return directions;
  }

  return (
    <div className='eye'>
      <motion.div 
      animate={{ y: generateDirections(), x: generateDirections() }} 
      transition={{ repeat: Infinity, duration: 25}}
      whileHover={{scale: 1.5}}
      className='iris m-0 p-0'>
      </motion.div>
    </div>
  )
}
