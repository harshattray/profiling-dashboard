/**
 * @Author: harsha
 * @Date:   2020-08-14T16:37:34+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-14T19:48:18+02:00
 */

import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './HeaderComponent';
import { findByTestAttr } from '../../helpers/utils';

describe('Header Component', () => {
  it('It should render without errors', () => {
    const component = shallow(<HeaderComponent />);
    const wrapper = findByTestAttr(component, 'logo');
    expect(wrapper.length).toBe(1);
  });
});
