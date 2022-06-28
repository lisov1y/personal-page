import React, {useState} from 'react';
import Laptop from '../images/laptop-finsie.png';
import Drum from '../images/laptop-drumkit.png';
import Keeper from '../images/laptop-keeper.png';
import Markleft from '../images/laptop-markleft.png';
import Tindog from '../images/laptop-tindog.png';
import { motion } from "framer-motion";



export default function Experience() {

  const exp = {
    quiver: {
      id: 'quiver',
      title: 'Quiver Dating - Front End Developer(February 2021 - July 2021)',
      url: '',
      img: '',
      description: 'As a Frontend Developer at Quiver Dating, I designed and built the landing page and integrated a newsletter using Mailchimp that increased the user base by 20%.'
    },
    finsie: {
      id: 'finsie',
      title: 'Finsie - Full-Stack Engineer(November 2021 - May 2022)',
      url: 'https://finsie.com/',
      img: Laptop,
      description: 'As a Full-Stack Engineer at Finsie, I worked with the development team to build the application according to the design mockup. I was working on the frontend with JavaScript, CSS/SASS, Bootstrap, jQuery, and with C# on .NET Core on the backend side.'
    },
    drum: {
      id: 'drum',
      title: 'React Drum Machine',
      url: 'https://lisov1y.github.io/React-Drum-Kit/',
      img: Drum,
      description: 'A simple drum kit that I made using React.'
    },
    keeper: {
      id: 'keeper',
      title: 'Keeper App',
      url: 'https://lisov1y.github.io/Keeper/',
      img: Keeper,
      description: 'Store your quick notes with Keeper App.'
    },
    markleft: {
      id: 'markleft',
      title: 'Markleft',
      url: 'https://lisov1y.github.io/Markleft/',
      img: Markleft,
      description: 'Markleft is ReactJS-powered HTML5 Markdown editor.'
    },
    tindog: {
      id: 'tindog',
      title: 'Tindog',
      url: 'https://lisov1y.github.io/tindog/',
      img: Tindog,
      description: 'Tinder-like clone but for dogs'
    }
  }

  const selected = {
    fontWeight: 600
  }

  const [project, setProject] = useState(exp.quiver);

  function handleClick(e) {
    const clickedProject = e.target.id;
    setProject(exp[clickedProject]);
  }

  return (
    <section id='experience' className='min-vh-100'>
      <motion.h2 className='text-center py-sm-5 py-3 fw-bold' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}}>Experience</motion.h2>
      <div className='row d-flex flex-md-row flex-column'>
        <motion.div className='col-md-4 col-12 d-flex flex-md-column justify-content-md-start justify-content-around project-column' initial={{x: -300}} whileInView={{x: 0, transition: {duration: 0.5}}}>
          <div className='ms-md-5'>
            <p className='fw-bold fs-3'>Work Experience</p>
            <ul>
              <motion.li onClick={handleClick} style={project.id === 'quiver' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='quiver' className='fs-4'>Quiver Dating</motion.li>
              <motion.li onClick={handleClick} style={project.id === 'finsie' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='finsie' className='fs-4'>Finsie</motion.li>
            </ul>
          </div>
          <div className='mt-md-5 mt-1 ms-md-5'>
          <p className='fw-bold fs-3'>Projects</p>
            <ul>
              <motion.li onClick={handleClick} style={project.id === 'drum' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='drum' className='fs-4'>Drum Kit</motion.li>
              <motion.li onClick={handleClick} style={project.id === 'keeper' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='keeper' className='fs-4'>Keeper App</motion.li>
              <motion.li onClick={handleClick} style={project.id === 'markleft' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='markleft' className='fs-4'>Markleft</motion.li>
              <motion.li onClick={handleClick} style={project.id === 'tindog' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='tindog' className='fs-4'>Tindog</motion.li>
            </ul>
          </div>
        </motion.div>
        <motion.div className='col-md-8 col-12 d-flex flex-column align-items-center project-description text-center pe-md-5' initial={{x: 300}} whileInView={{x: 0, transition: {duration: 0.5}}} layout transition={{ duration: 0.3 }}>
          <h2 className='fw-bold'><a href={project.url} target='_blank'>{project.title}</a></h2>
          {project.img ? <img className='project-img my-md-5 my-3' src={project.img} alt='project-img' /> : <h2 className='my-5'>🚧Image is under construction...🚧</h2>}
          <p className='px-1 fs-4'>{project.description}</p>
        </motion.div>
      </div>
    </section>
  )
}
