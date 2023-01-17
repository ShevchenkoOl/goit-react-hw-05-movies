import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as API from '../services/api';
import { Spinner } from '../components/AppStyled';
import {
  SearchFormButton,
  SearchFormInput,
  FilmList,
  FilmLink,
} from '../components/MoviesPage/MoviesPageStyled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let [queryWord, /* setQueryWord */] = useSearchParams();
  let keyWord = queryWord.get('query');

  //При начальном рендере ключевое слово для поиска пустая строка
  const initialValues = { query: '' };

  const getData = key => {
    setLoading(true);
    API.getMovies(key).then(response => {
      if (response) {
        setMovies(response.data.results);
        setLoading(false);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    if (keyWord) {
      getData(keyWord);
    }
  }, [keyWord]);

  const handleSubmit = (values, { resetForm }) => {
    getData(values.query);
    navigate({
      search: `?query=${values.query}`,
    });
    //resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <SearchFormButton type="submit">Search</SearchFormButton>
        </Form>
      </Formik>
      {loading && <Spinner />}
      {movies && (
        <ul>
          {movies.map(film => (
            <FilmList key={film.id}>
              <FilmLink
                to={`/movies/${film.id}`}
                state={{ from: location, search: keyWord }}
              >
                {film.title} ({film.release_date.slice(0, 4)})
              </FilmLink>
            </FilmList>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
