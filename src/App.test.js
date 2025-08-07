import { render, screen } from '@testing-library/react';
import App from './App';

// Test to verify the portfolio renders correctly
test('renders portfolio', () => {
  render(<App />);
  const element = screen.getByText(/Jack/i);
  expect(element).toBeInTheDocument();
});

// Additional test to check if the hero section loads
test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Software Engineer/i);
  expect(heroElement).toBeInTheDocument();
});