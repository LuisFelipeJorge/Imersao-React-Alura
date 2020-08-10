import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function VideoRegistration() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'video default',
    url: 'https://www.youtube.com/watch?v=1myRO4ao6nA',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Video Registration</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        const chosenCategory = categories.find((category) => category.titulo === values.category);

        console.log('chosenCategory: ', chosenCategory);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: chosenCategory.id,
        }).then(() => {
          console.log('registered successfully');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Video Title"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Register
        </Button>

      </form>
      <Link to="/registration/category">
        Category Registration
      </Link>
    </PageDefault>
  );
}

export default VideoRegistration;
