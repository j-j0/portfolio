import { render, screen } from '@testing-library/react';
import App from './App';

// Test to verify the portfolio renders correctly
test('renders portfolio with Jack name in navbar', () => {
  render(<App />);
  const element = screen.getByText('Jack Wang');
  expect(element).toBeTruthy();
});

// Additional test to check if the hero section loads
test('renders software engineer text', () => {
  render(<App />);
  const heroElement = screen.getByText(/Passionate Software Engineer./i);
  expect(heroElement).toBeTruthy();
});

// Test that the hero greeting renders
test('renders hero greeting', () => {
  render(<App />);
  const greetingElement = screen.getByText(/Hi, I'm/i);
  expect(greetingElement).toBeTruthy();
});

// Test that the app renders without crashing
test('renders without crashing', () => {
  render(<App />);
});