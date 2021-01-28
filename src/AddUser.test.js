import React from 'react';
import AddUser from './AddUser';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('should add a user name', () => {
    const wrapper = shallow(<AddUser />)
    const addBtn = wrapper.find('button')
    addBtn.simulate('click')
    const text = wrapper.find('p').text('')
    expect(text).toEqual('');

})
