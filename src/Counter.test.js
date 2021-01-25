import React from 'react';
import Counter from './Counter';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('increment count by 1 when clicked', () => {
    const wrapper = shallow(<Counter />)
    const incBtn = wrapper.find('button.inc')
    incBtn.simulate('click')
    const text = wrapper.find('h1').text()
    expect(text).toEqual('Current Count: 1');

})

it('decrement counter by 1 when clicked', () => {
    const wrapper = shallow(<Counter />)
    const decBtn = wrapper.find('button.dec')
    decBtn.simulate('click')
    const text = wrapper.find('h1').text()
    expect(text).toEqual('Current Count: -1')
})

it('count should be 0',  () => {
    const wrapper = shallow(<Counter />)
    const resetBtn = wrapper.find('button.reset')
    resetBtn.simulate('click')
    const text = wrapper.find('h1').text()
    expect(text).toEqual('Current Count: 0')
})
