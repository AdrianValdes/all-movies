/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../app/hooks';
import { Spinner, urlMultiQuery } from '../../app/shared';

import { MovieCardSearch } from './MovieCardSearch';
import { NoResults } from './NoResults';
import { PersonCardSearch } from './PersonCardSearch';
import { TvShowCardSearch } from './TvShowCardSearch';

const SearchContent = styled.div`
  max-width: 1100px;
`;

const buildQuery = (query) => query.split(' ').join('+');

export const SearchResults = ({ location }) => {
  const { query } = location.state;
  const url = `${urlMultiQuery}${buildQuery(query.trim())}`;

  const {
    dataApi: { results },
    loadingApi,
  } = useFetch(url);

  if (loadingApi) return <Spinner />;
  if (!results || results.length === 0) return <NoResults />;

  return (
    <main>
      <SearchContent>
        {results &&
          results.map((item) => {
            if (item.media_type === 'movie') {
              return <MovieCardSearch key={item.id} movie={item} />;
            }
            if (item.media_type === 'person') {
              return <PersonCardSearch key={item.id} person={item} />;
            }
            if (item.media_type === 'tv') {
              return <TvShowCardSearch key={item.id} show={item} />;
            }
            return <MovieCardSearch key={item.id} movie={item} />;
          })}
      </SearchContent>
    </main>
  );
};
