import React from 'react';
import Header from './Header'
import Testimonials from './Testimonials';
import TypesOfWork from './TypesOfWork';
import WordsToDescribe from './WordsToDescribe';
import Form from '../contact/Form'

const Home = () => {
    
  return(
      <>
          <Header/>
          <TypesOfWork/>
          <WordsToDescribe/>
          <Testimonials/>
          <Form/>
      </>
  );
};

export default Home;
