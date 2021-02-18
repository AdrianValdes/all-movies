import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../app/hooks';
import { urlMultiQuery } from '../../app/shared';

import { SearchCard } from './SearchCard';

const SearchContent = styled.div`
  max-width: 1100px;
`;

const buildQuery = (query) => query.split(' ').join('+');

export const SearchResults = ({ location }) => {
  const { query } = location.state;
  const url = `${urlMultiQuery}${buildQuery(query.trim())}`;

  const { dataApi } = useFetch(url);

  return (
    <main>
      <SearchContent>
        {dataApi.results &&
          dataApi.results.map((movie) => (
            <SearchCard key={movie.id} movie={movie} />
          ))}
      </SearchContent>
    </main>
  );
};
