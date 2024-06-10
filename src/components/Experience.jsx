import React, {useState} from 'react';
import Laptop from '../images/finsie_logo_2021.png';
import AlbertsonsImage from '../images/albertsons-logo-1.png';
import { motion } from "framer-motion";

export default function Experience() {

  const exp = {
    albertsons: {
      id: 'albertsons',
      title: 'Albertsons - SDET (March 2021 - Present)',
      url: 'https://www.albertsons.com/',
      img: AlbertsonsImage,
      description: 'At Albertsons, I built a Test Automation Framework from scratch using Node.js, Cypress, Chai, and Mocha.js, which reduced test run time by 70%. I also integrated test automation into the CI/CD pipeline in Azure DevOps, cutting deployment time by 50%.'
    },
    finsie: {
      id: 'finsie',
      title: 'Finsie - QA Automation Engineer (February 2019 - March 2021)',
      url: 'https://finsie.com/',
      img: Laptop,
      description: 'At Finsie, I developed test cases in Azure DevOps, executed test plans, and performed regression testing, ensuring high-quality product delivery. I also tested APIs with Postman and inspected React app code using Chrome Developer tools.'
    }
  }

  const selected = {
    fontWeight: 600
  }

  const [project, setProject] = useState(exp.albertsons);

  function handleClick(e) {
    const clickedProject = e.target.id;
    setProject(exp[clickedProject]);
  }

  return (
    <section id='experience' className='min-vh-100 pt-5'>
      <motion.h2 className='text-center py-sm-5 py-3 fw-bold' initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.5}}}>Experience</motion.h2>
      <div className='row d-flex flex-md-row flex-column'>
        <motion.div className='col-md-4 col-12 d-flex flex-md-column justify-content-md-start justify-content-around project-column' initial={{x: -300}} whileInView={{x: 0, transition: {duration: 0.5}}}>
          <div className='ms-md-5'>
            <p className='fw-bold fs-3'>Work Experience</p>
            <ul>
              <motion.li onClick={handleClick} style={project.id === 'albertsons' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='albertsons' className='fs-4'>Albertsons</motion.li>
              <motion.li onClick={handleClick} style={project.id === 'finsie' ? selected : ''} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} id='finsie' className='fs-4'>Finsie</motion.li>
            </ul>
          </div>
        </motion.div>
        <motion.div className='col-md-8 col-12 d-flex flex-column align-items-center project-description text-center pe-md-5' initial={{x: 300}} whileInView={{x: 0, transition: {duration: 0.5}}} layout transition={{ duration: 0.3 }}>
          <h2 className='fw-bold'><a href={project.url} target='_blank'>{project.title}</a></h2>
          {project.img ? <img className='project-img my-5' src={project.img} alt='project-img' /> : <h2 className='my-5'>No Image</h2>}
          <p className='px-1 fs-4 mb-5'>{project.description}</p>
        </motion.div>
      </div>
    </section>
  )
}
