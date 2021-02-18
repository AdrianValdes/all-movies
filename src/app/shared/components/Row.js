import styled from 'styled-components';

export const Row = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
  &::after {
    content: '';
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
    will-change: opacity;
    pointer-events: none;
  }
  &::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(219, 219, 219);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(219, 219, 219);
  }
`;
