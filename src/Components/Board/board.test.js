import React from 'react' 
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme'

import Adapter from 'enzyme-adapter-react-16';
import Board from './board'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  let squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>);
});

// it('calls onClick event on click of a board square', () =>{
//   let squares = Array(9).fill(null) 
//   const onClick = jest.fn();
//   let wrapper = mount(<Board squares={squares} onClick={onClick} winLine={null} />);
//   wrapper.find('button.squares').first().simulate('click');
//   expect(onClick).toBeCalledWith(0)
// })
 
