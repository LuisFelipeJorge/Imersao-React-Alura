import React from 'react';
import PageDefault from '../../../Components/PageDefault'
import { Link } from 'react-router-dom';

function CategoryRegistration() {
  return(
    <PageDefault>
      <h1>Category Registration</h1>
      
      <Link to="/">
        Go Home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;