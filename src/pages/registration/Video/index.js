import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

function VideoRegistration() {
  return (
    <PageDefault>
      <h1>Video Registration</h1>

      <Link to="/registration/category">
        Category Registration
      </Link>
    </PageDefault>
  );
}

export default VideoRegistration;
