// src/pages/home/home.tsx
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'; 
import ImageSection1 from '../../components/ImageSection1/ImageSection1';
import ImageSection2 from '../../components/ImageSection2/ImageSection2';
import ImageSection3 from '../../components/ImageSection3/ImageSection3';
import Share from '../../components/Share/Share';



const HomePage = () => {
  return (
    <div className="w-full flex flex-col space-y-16">
      
      <BackgroundImage height="100vh" /> 
     
      <ImageSection1 />
     
      <ImageSection2 />

      
      
     <ImageSection3 />

     <Share />

   
    </div>
  );
};

export default HomePage;
