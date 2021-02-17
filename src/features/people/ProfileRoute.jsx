import React from 'react';
import styled from 'styled-components';
import ShowMoreText from 'react-show-more-text';
import { useFetch } from '../../app/hooks';

import { Aside } from './Aside';
import { KnownFor } from './KnownFor';
import { KEY } from '../../app/urls';

const Profile = styled.div`
  display: flex;
  margin: 40px;
`;

const ProfileMain = styled.div`
  margin: 20px;
`;

const Name = styled.h1`
  font-size: 55px;
  margin-bottom: 40px;
`;

const Bio = styled.div`
  margin: 20px 0;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 30px;
`;

export const ProfileRoute = ({ location }) => {
  const { id, known_for } = location.state;

  const personUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${KEY}&language=en-US`;

  const { dataApi } = useFetch(personUrl);
  const {
    name,
    biography,
    birthday,
    gender,
    known_for_department,
    place_of_birth,
    profile_path,
  } = dataApi;
  console.log(known_for);
  return (
    <main>
      <Profile>
        <Aside
          birthday={birthday}
          gender={gender}
          known_for_department={known_for_department}
          place_of_birth={place_of_birth}
          profile_path={profile_path}
        />
        <ProfileMain>
          <Name>{name}</Name>
          {biography && (
            <>
              <h1>Biography</h1>
              <Bio>
                <ShowMoreText
                  lines={8}
                  more='Read more'
                  less='Show Less'
                  expanded={false}
                >
                  {biography}
                </ShowMoreText>
              </Bio>
            </>
          )}
          <KnownFor known_for={known_for} />
        </ProfileMain>
      </Profile>
    </main>
  );
};
