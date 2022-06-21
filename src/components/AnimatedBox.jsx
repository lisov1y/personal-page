import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import randomNumGen from '../getRandomNumber';

export default function AnimatedBox() {



  const [amountOfCubes, setAmountOfCubes] = useState(0);

  useEffect(() => {
    setAmountOfCubes(randomNumGen(30, 40));
  }, [])
  

  const randSquareSize = () => randomNumGen(50, 100);
  const randPos = () => randomNumGen(10, 90);
  const randHoverScale = () => randomNumGen(1.2, 1.5);
  const randTapScale = () => randomNumGen(0.2, 0.9);
  const randRepeatDelay = () => randomNumGen(10, 20);


  function renderCubes() {
    const cubes = [];
    for (let i = 0; i < amountOfCubes; i++) {
      const size = randSquareSize();
      const repeat = randRepeatDelay();
      console.log(repeat);
      cubes.push(
        <motion.div
        key={i}
        style={{width: size, height: size, left: randPos() + '%', top: randPos() + '%'}}
        whileHover={{scale: randHoverScale()}} 
        whileTap={{scale: randTapScale()}} 
        animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0], borderRadius: ["20%", "20%", "50%", "50%", "20%"]}} 
        transition={{ repeat: Infinity, repeatDelay: randRepeatDelay()}} className='animated-box position-absolute'>
        </motion.div>
      );
    }
    return cubes;
  }
  
  return (
    <div className='boxes-wrapper'>
      {renderCubes()}
    </div>
  )
}
