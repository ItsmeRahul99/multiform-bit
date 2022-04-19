import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome! First things first...Welcome! First things first.../i);
  expect(linkElement).toBeInTheDocument();
});
