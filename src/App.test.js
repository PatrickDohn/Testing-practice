import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from './CheckBox';
import Link from './Link';

Enzyme.configure({adapter: new Adapter()});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hey/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Home page component', () => {
  describe('lifecycle methods', () => {
      it('should render TodoTable and TodoModal', () => {
          const wrapper = shallow( <App /> )
          expect(wrapper.find(Checkbox)).toHaveLength(1)
          expect(wrapper.find(Link)).toHaveLength(1)
      })
  })
})
