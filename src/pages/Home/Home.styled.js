import styled from 'styled-components';

export const HomeWrap = styled.div`
  position: relative;
`;

export const BackgroundImg = styled.div`
  position: fixed;
  opacity: 30%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 767px) {
    img {
      width: 320px;
    }
  }
`;

export const VideoWrap = styled.div`
  margin: 0 auto;
`;
