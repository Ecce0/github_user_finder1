import React from "react";

const About = () => {
  return(
    <>
      <h1 className="text-6xl mb-4">
        Github Finder
      </h1>
      <p className='text-lg text-secondary-focus'>
        Version <span className='text-warning-content'>1.0.0</span>
      </p>
      <p className='text-lg text-secondary-focus'>
        Layout By:{' '}
        <a className='text-warning-content' href='https://twitter.com/myancestorssql'>
          E. Collier - Using DaisyUI and TailwindCSS
        </a>
      </p>
    </>
  )
};

export default About;
