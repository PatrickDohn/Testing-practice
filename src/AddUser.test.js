import React from 'react';
import AddUser from './AddUser';
import ReactDOM from 'react-dom'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
    const p = document.createElement('p')
    ReactDOM.render(<button></button>, p)
})


it('should add a user name', () => {
    const wrapper = shallow(<AddUser />)
    const addBtn = wrapper.find('button')
    addBtn.simulate('click')
    const text = wrapper.find('input').text('Patrick')
    expect(text).toBe('');
})
