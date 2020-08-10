import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import useForm from '../../../hooks/useForm';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { values, handleChange, clearForm } = useForm(initialValues);

  // [state, function to updade the state]
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://jorgeflixapp.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL)
      .then(async (res) => {
        const result = await res.json();
        setCategories([
          ...result,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Category Registration:
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault(); // SPA practice: the page is not reloaded when the form is submitted
        setCategories([
          ...categories, // maintains a copy of the list in a previous state before a change occurred
          values, // add this value to the new state
        ]);
        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Register
        </Button>
      </form>
      {categories.length === 0 && (
        <div>
          Loading ...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.titulo}`}>
            {category.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Go Home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;
