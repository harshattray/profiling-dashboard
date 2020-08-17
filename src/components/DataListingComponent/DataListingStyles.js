/**
 * @Author: harsha
 * @Date:   2020-08-13T12:26:47+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T16:38:32+02:00
 */

import styled, { css } from 'styled-components';

export const ContentContainer = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const DataContainer = styled.section`
  margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid #f2eaec;
  border-radius: 4px;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.06);
  & img {
    width: 100%;
    cursor: pointer;
  }
`;

export const CardInfo = styled.div`
  ${({ overlay }) =>
    overlay &&
    css`
      position: relative;
      width: 100%;
      bottom: 1rem;
      color: #343434;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 1.2rem;
      text-align: center;
    `};
`;

export const CardDetails = styled.div`
  position: relative;
  color: #343434;
  font-weight: 300;
  left: 10px;
  & .calories {
    color: #46800d;
  }
`;
