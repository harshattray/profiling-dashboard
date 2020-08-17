/**
 * @Author: harsha
 * @Date:   2020-08-12T21:42:41+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T22:48:43+02:00
 */

import styled from 'styled-components';
import { device } from '../../styles/mediaQueries';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 10% auto 30%;
  align-items: center;
  background-color: #ffab2e;
`;

export const NavContainer = styled.nav`
  @media (${device.tablet}) {
    display: grid;
    justify-content: flex-end;
    grid-column: 3/4;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    a {
      color: #000;
      text-decoration: none;
      font-size: 0.8rem;
    }
  }
  display: none;
`;

export const LogoContainer = styled.div`
  width: 80px;
`;
