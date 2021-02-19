/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../app/hooks';
import { urlMultiQuery } from '../../app/shared';

import { MovieCardSearch } from './MovieCardSearch';

const SearchContent = styled.div`
  max-width: 1100px;
`;

const buildQuery = (query) => query.split(' ').join('+');

export const SearchResults = ({ location }) => {
  const { query } = location.state;
  const url = `${urlMultiQuery}${buildQuery(query.trim())}`;
  console.log(url);
  const { dataApi } = useFetch(url);

  return (
    <main>
      <SearchContent>
        {dataApi.results &&
          dataApi.results.map((item) => {
            if (item.media_type === 'movie') {
              return <MovieCardSearch key={item.id} movie={item} />;
            }
            return <MovieCardSearch key={item.id} movie={item} />;
          })}
      </SearchContent>
    </main>
  );
};
