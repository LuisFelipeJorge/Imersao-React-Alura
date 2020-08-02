import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault'
import { Link } from 'react-router-dom';

function CategoryRegistration() {

  return(
    <PageDefault>
      <h1>Category Registration</h1>
      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
      <Link to="/">
        Go Home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;