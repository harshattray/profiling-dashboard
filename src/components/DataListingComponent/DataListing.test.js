/**
 * @Author: harsha
 * @Date:   2020-08-14T16:53:05+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:44:22+02:00
 */

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../helpers/utils';
import DataListingComponent from './DataListingComponent';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<DataListingComponent store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('DataListingComponent Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      commentsStack: {
        commentsData: [
          {
            postId: 1,
            id: 1,
            name: 'id labore ex et quam laborum',
            email: 'Eliseo@gardner.biz',
            body:
              'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
          },
        ],
      },
    };
    wrapper = setup();
  });
  it('It should render without errors', () => {
    const component = findByTestAttr(wrapper, 'commentsListingComponent');
    expect(component.length).toBe(1);
  });
});
