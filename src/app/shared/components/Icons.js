import { Heart, Star, Flag } from '@styled-icons/boxicons-solid';
import { ListUl, Play } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Icons = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgb(3, 37, 65);
  border-radius: 50%;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  cursor: pointer;
`;

export const IconList = styled(ListUl)`
  width: 16px;
`;

export const IconHeart = styled(Heart)`
  width: 16px;
  color: ${(props) => (props.className === 'favorite' ? 'crimson' : 'white')};
`;

export const IconStar = styled(Star)`
  width: 16px;
`;

export const IconFlag = styled(Flag)`
  width: 16px;
`;

export const IconPlay = styled(Play)`
  width: 35px;
`;
