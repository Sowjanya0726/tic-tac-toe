import React from 'react' 
// import {shallow} from 'enzyme'
// import Square from './square'  

import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Square from './square'
 
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Square/>);
});
