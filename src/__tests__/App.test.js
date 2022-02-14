import { render } from '@testing-library/react';
import App from '../components/App';

test('App renders correctly:snapshot testing', () => {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});