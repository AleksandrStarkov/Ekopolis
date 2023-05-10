import styled from '@emotion/styled';

export const ImgClose = styled.img`
  width: 130px;
  height: 46px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* color: green; */
  /* margin-right: 100px; */
`;
export const ImgBack = styled.img`
  /* background-size: contain; */
  width: 100vw;
  height: 100vh;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
`;
