import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../../app/store/actions/authActions';

const DropDownUser = styled.div`
  display: ${(props) => (props.className === 'show' ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: -200px;
  background-color: #f9f9f9;
  min-width: 260px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const UserAvatar = styled.div`
  color: white;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #c33c5b;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #c33c5b;
    right: -15px;
  }
`;
const SubA = styled.div`
  color: rgb(3, 37, 65);
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
`;

const Content = styled.div``;

const Info = styled.div`
  color: black;
  font-weight: 300;
  text-align: left;
  padding: 16px 22px 16px 12px;
  font-size: 18px;
  border-bottom: 1px solid lightgray;
`;

export const Avatar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <UserAvatar onClick={() => setShowOptions(!showOptions)}>
      {user?.displayName && user?.displayName[0]}{' '}
      <DropDownUser className={showOptions ? 'show' : "don't show"}>
        <Content>
          <Info>
            <p>Signed in as</p>
            <p>
              <strong>{user.displayName}</strong>
            </p>
          </Info>

          <SubA onClick={() => dispatch(logout())}>Sign Out</SubA>
        </Content>
      </DropDownUser>
    </UserAvatar>
  );
};
