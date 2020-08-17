/**
 * @Author: harsha
 * @Date:   2020-08-14T19:08:06+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-17T23:33:00+02:00
 */
import moxios from 'moxios';
import { testStore } from '../helpers/utils';
import { fetchCommentsData } from '../actions/index';

describe('fetchCommentsData', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly', () => {
    const expectedState = [
      {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body:
          'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      },
    ];
    const store = testStore();
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      console.log(req, 'req');
      req.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    return store.dispatch(fetchCommentsData()).then(() => {
      const newState = store.getState();
      expect(newState.commentsStack.commentsData).toBe(expectedState);
    });
  });
});
