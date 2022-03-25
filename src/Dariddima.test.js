import { render, screen } from '@testing-library/react';
import Dariddima from './Dariddima';

test('renders learn react link', () => {
  render(<Dariddima />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
