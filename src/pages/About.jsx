import React from 'react'

function About() {
  return (
    <div>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
            A React App to search Github profiles and see profiles details.
            This project is part of the <a href='https://www.udemy.com/course/modern-react-fornt-to-back'>
            {' '}
            React Front to back
            </a>{' '}
            Udemy course by 
            <strong>
                <a href='https://traversymedia.com'>Bread Traversy</a>
            </strong>
            .
        </p>
        <p className='text-lg text-gray-700'>
            version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-700'>
            Layout By:
            <a className='text-white' href="https://twitter.com/hassibmoddasser">Hassib Moddasser</a>
        </p>
    </div>
  )
}

export default About