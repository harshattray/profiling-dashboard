/**
 * @Author: harsha
 * @Date:   2020-08-14T16:31:21+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-08-14T16:37:33+02:00
 */

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
