// src/components/Loader/Loader.jsx
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Oval 
        height={80} 
        width={80} 
        color="#ffa24c" 
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#e5e5e5"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
