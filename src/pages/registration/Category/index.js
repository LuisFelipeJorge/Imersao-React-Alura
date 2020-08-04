import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  // [state, function to updade the state]
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';

    fetch(URL)
      .then(async (res) => {
        const result = await res.json();
        setCategories([
          ...result,
        ]);
      });

    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
    //     {
    //       id: 1,
    //       name: 'Front End',
    //       description: 'A test category',
    //       color: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
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
        setValues(initialValues);
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
          Cadastrar
        </Button>
      </form>
      {categories.length === 0 && (
        <div>
          Loading ...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
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
