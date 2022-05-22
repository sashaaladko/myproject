import React from 'react';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import './imgform.css';

const Home = (setSelectedImg) => {

  return (
      <div>

        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        
      </div>
  );
};

export default Home;