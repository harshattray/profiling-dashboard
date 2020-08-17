/**
 * @Author: harsha
 * @Date:   2020-08-12T21:42:01+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T12:08:21+02:00
 */

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from './HeaderComponentStyles';

export const HeaderComponent = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <h1 data-test="logo">Just Any Other Dashboard</h1>
          </Link>
        </LogoContainer>
        <NavContainer />
      </HeaderContainer>
    </Fragment>
  );
};
