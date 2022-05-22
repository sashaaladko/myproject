import React from 'react';


const About = () => {



  return (
    <div className='about'>
        <h1>About us</h1>
        <p>
            This site was made as laboratory work number 6. 
            It is a photo gallery where you can upload photos, with authorization and registration implemented. 
            User data is stored in Firebase database and all uploaded photos are stored in Firebase Storage. 
        </p>
        <h2>I hope you like it!</h2>
    </div>
  );
};

export default About;