import React, {useState} from 'react';
import Laptop from '../images/laptop-finsie.png';
import Drum from '../images/laptop-drumkit.png';
import Keeper from '../images/laptop-keeper.png';
import Markleft from '../images/laptop-markleft.png';
import Tindog from '../images/laptop-tindog.png';


export default function Experience() {

  const exp = {
    quiver: {
      title: 'Quiver Dating - Front End Developer(February 2021 - July 2021)',
      url: '',
      img: '',
      description: 'As a Frontend Developer at Quiver Dating, I designed and built the landing page and integrated a newsletter using Mailchimp that increased the user base by 20%.'
    },
    finsie: {
      title: 'Finsie - Full-Stack Engineer(November 2021 - May 2022)',
      url: 'https://finsie.com/',
      img: Laptop,
      description: 'As a Full-Stack Engineer at Finsie, I worked with the development team to build the application according to the design mockup. I was working on the frontend with JavaScript, CSS/SASS, Bootstrap, jQuery, and with C# on .NET Core on the backend side.'
    },
    drum: {
      title: 'React Drum Machine',
      url: 'https://lisov1y.github.io/React-Drum-Kit/',
      img: Drum,
      description: 'A simple drum kit that I made using React.'
    },
    keeper: {
      title: 'Keeper App',
      url: 'https://lisov1y.github.io/Keeper/',
      img: Keeper,
      description: 'Store your quick notes with Keeper App.'
    },
    markleft: {
      title: 'Markleft',
      url: 'https://lisov1y.github.io/Markleft/',
      img: Markleft,
      description: 'Markleft is ReactJS-powered HTML5 Markdown editor.'
    },
    tindog: {
      title: 'Tindog',
      url: 'https://lisov1y.github.io/tindog/',
      img: Tindog,
      description: 'Tinder-like clone but for dogs'
    }
  }

  const [project, setProject] = useState(exp.quiver);

  function handleClick(e) {
    const clickedProject = e.target.id;
    setProject(exp[clickedProject]);
  }

  return (
    <section id='experience'>
      <h2 className='text-center py-1 py-md-3 py-lg-5'>Experience</h2>
      <div className='row d-flex flex-md-row flex-column'>
        <div className='col-md-4 col-12 d-flex flex-md-column justify-content-md-center justify-content-around align-items-center project-column'>
          <div>
            <p className='fw-bold'>Work Experience</p>
            <ul>
              <li onClick={handleClick} id='quiver'>Quiver Dating</li>
              <li onClick={handleClick} id='finsie'>Finsie</li>
            </ul>
          </div>
          <div className='mt-md-5 mt-1'>
          <p className='fw-bold'>Projects</p>
            <ul>
              <li onClick={handleClick} id='drum'>Drum Kit</li>
              <li onClick={handleClick} id='keeper'>Keeper App</li>
              <li onClick={handleClick} id='markleft'>Markleft</li>
              <li onClick={handleClick} id='tindog'>Tindog</li>
            </ul>
          </div>
        </div>
        <div className='col-md-8 col-12 d-flex flex-column align-items-center project-description'>
          <h2><a href={project.url} target='_blank'>{project.title}</a></h2>
          {project.img ? <img className='project-img my-md-5 my-3' src={project.img} alt='project-img' /> : <h2 className='my-5'>🚧Image is under construction...🚧</h2>}
          <p className='px-1'>{project.description}</p>
        </div>
      </div>
    </section>
  )
}
