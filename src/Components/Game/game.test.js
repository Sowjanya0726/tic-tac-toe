import React from 'react' 
import Enzyme from 'enzyme';
import {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Game from './game' 

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Game />);
});

it('renders game status correctly', () => {
  const wrapper = mount(<Game/>) 
  const firstPlayer = wrapper.find('player-info').text()
  expect(firstPlayer).toEqual('Next player: X')

  const button = wrapper.find('button.squares').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('player-info').text()
  expect(secondPlayer).toEqual('Next player: Y')

  //player 2
  const turn2 = wrapper.find('button.squares').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.squares').at(4)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.squares').at(5)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.squares').at(8)
  turn5.simulate('click')
  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Game Over! Winner is: X')
})