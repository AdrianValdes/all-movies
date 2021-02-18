import React from 'react';
import styled from 'styled-components';
import ShowMoreText from 'react-show-more-text';
import { useFetch } from '../../app/hooks';

import { Aside } from './Aside';
import { KnownFor } from './KnownFor';
import { getPersonUrl } from '../../app/shared';
import { prepareKnownFor } from '../../app/shared/helpers/prepareKnownFor';

const Profile = styled.div`
  display: flex;
  margin: 40px;
`;

const ProfileMain = styled.div`
  margin: 20px;
  width: 920px;
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
  const { id } = location.state;

  const personUrl = getPersonUrl(id);

  const { dataApi } = useFetch(personUrl);
  const {
    name,
    biography,
    birthday,
    gender,
    known_for_department,
    place_of_birth,
    profile_path,
    combined_credits,
  } = dataApi;

  const known_for = prepareKnownFor(combined_credits?.cast);
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
                <ShowMoreText lines={6} more='Read more' less='Show Less'>
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
