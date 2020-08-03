import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);
  
  
  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(eventInfo){
    // const { getAttribute, value } = eventInfo.target;
    // setValue(
    //   getAttribute('name'),
    //   value);
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value
    );
  }
  
  return(
    <PageDefault>
      <h1>Category Registration: {values.name}</h1>
      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault(); // SPA practice: the page is not reloaded when the form is submitted
        setCategories([
          ...categories, //maintains a copy of the list in a previous state before a change occurred
          values // add this value to the new state
        ]);  
        setValues(initialValues);
      }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        
        {/* <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
        </div>   */}

        <div>        
          <label>
            Descrição:
            <textarea
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField 
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              name="color"
              value={values.color}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return(
            <li key={`${category} ${index}`}>
              {category.name}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Go Home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;