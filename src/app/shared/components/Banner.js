import styled from 'styled-components';

const Banner = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const BannerHome = styled(Banner)`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0.1) 100%
    ),
    url(${(props) => props.imageUrl});
  max-width: 1300px;
  max-height: 360px;
  min-height: 300px;
  height: calc(100vh / 2.5);
  flex-direction: column;
  padding: 0 40px;
`;

export const MovieBannerStyle = styled(Banner)`
  background-image: linear-gradient(
      to right,
      ${(props) => `${props.filterColor}E6`},
      ${(props) => `${props.filterColor}CC`} 100%
    ),
    url(${(props) => props.imageUrl});
  padding: 30px 0;
  color: #fff;
  min-height: 510px;
  display: flex;
  align-items: center;
`;
