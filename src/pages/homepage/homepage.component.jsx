import React from 'react';
import Directory from '../../components/directory/directory.component';
import { useLocation } from 'react-router-dom'; 

import './homepage.styles.scss';

const HomePage = () => {
  let location = useLocation();
  console.log(location)
  return (<div className='homepage'>
    <Directory />    
  </div>)
};

export default HomePage;