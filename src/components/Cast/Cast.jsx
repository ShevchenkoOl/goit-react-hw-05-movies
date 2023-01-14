import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../services/api';
import { CastItem } from './CastItem';
import { CastText,ActorsList } from './CastStyled';
import { Spinner } from '../AppStyled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [noData, setNoData] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    API.getCast(movieId).then(response => {
      if (response) {
        setCast(response.data.cast);
        if(response.data.cast.length===0){
          setNoData(true);}
      } else {
        return;
      }
    });
  }, [movieId]);

  return (
    <>
      {cast ? (
        <ActorsList>
          {cast.map(actor => (
            <CastItem
              key={actor.id}
              photo={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
        </ActorsList>
      ) : (
        <Spinner />
      )}
      {noData && (
        <CastText>
          Sorry, we don't have any cast information for this movie
        </CastText>
      )}
    </>
  );
};

CastItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default Cast;
