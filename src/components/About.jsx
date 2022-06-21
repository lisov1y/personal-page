import React from 'react'
import Description from './Description'
import Skills from './Skills'
import AnimatedBox from './AnimatedBox'

export default function About() {
  return (
    <section id='about'>
      <h2 className='text-center py-sm-5 pt-2 pb-3'>About Me</h2>
      <div className='row d-flex justify-content-sm-around h-75'>
        <Description />
        <Skills />
      </div>
      <AnimatedBox />
    </section>
  )
}