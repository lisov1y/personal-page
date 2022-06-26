import React from 'react'
import Description from './Description'
import Skills from './Skills'
import AnimatedBox from './AnimatedBox'

export default function About() {
  return (
    <section id='about' className='min-vh-100'>
      <h2 className='text-center py-sm-5 py-3 fw-bold'>About Me</h2>
      <div className='row d-flex justify-content-sm-around my-auto'>
        <Description />
        <Skills />
      </div>
      <AnimatedBox />
    </section>
  )
}
