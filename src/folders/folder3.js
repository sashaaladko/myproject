import React from 'react';
import UploadForm from '../comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import '../imgform.css';

const Folder3 = ( setSelectedImg) => {

  return (
      <div>
          <h1 className='folder'>folder3</h1>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        
      </div>
  );
};

export default Folder3;