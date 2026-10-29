import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MentalHealthCommunityCare from './MentalHealthCommunityCare';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }), { virtual: true });
jest.mock('../components/cards/Hero', () => () => null);

const originalFetch = global.fetch;
beforeEach(() => {
  mockNavigate.mockReset();
  global.fetch = jest.fn();
  jest.spyOn(window, 'alert').mockImplementation(() => {});
});
afterEach(() => {
  global.fetch = originalFetch;
  jest.restoreAllMocks();
});

function submitRegistration() {
  render(<MentalHealthCommunityCare />);
  fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'Test Member' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'member@example.com' } });
  fireEvent.change(screen.getByLabelText('Country'), { target: { value: 'Nigeria' } });
  fireEvent.submit(screen.getByRole('button', { name: 'Join the community' }).closest('form'));
}

test('confirms successful registration, clears the form and returns home', async () => {
  global.fetch.mockResolvedValue({ ok: true, json: async () => ({ success: 'true' }) });
  submitRegistration();
  expect(screen.getByRole('button', { name: 'Registering…' }).disabled).toBe(true);
  await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
  expect(window.alert).toHaveBeenCalledWith('Registration successful');
  expect(screen.getByLabelText('Full name').value).toBe('');
  expect(screen.getByLabelText('Email').value).toBe('');
  expect(screen.getByLabelText('Country').value).toBe('');
  const [url, options] = global.fetch.mock.calls[0];
  expect(url).toContain('/ajax/');
  expect(options.headers['Content-Type']).toBe('application/json');
  expect(JSON.parse(options.body)).toMatchObject({
    fullName: 'Test Member',
    email: 'member@example.com',
    country: 'Nigeria',
    _subject: 'Mental Health Community of Care registration',
    _template: 'table',
  });
});

test('shows the service error when registration requires activation', async () => {
  const message = 'Please activate your form before submitting.';
  global.fetch.mockResolvedValue({ ok: false, json: async () => ({ success: false, message }) });
  submitRegistration();
  expect((await screen.findByRole('alert')).textContent).toBe(message);
  expect(mockNavigate).not.toHaveBeenCalled();
  expect(screen.getByLabelText('Email').value).toBe('member@example.com');
});

test('does not report success when the service returns an HTML error page', async () => {
  global.fetch.mockResolvedValue({ ok: false, json: async () => { throw new SyntaxError('Invalid JSON'); } });
  submitRegistration();
  await screen.findByRole('alert');
  expect(window.alert).not.toHaveBeenCalled();
  expect(mockNavigate).not.toHaveBeenCalled();
});

test.each(['rejection', 'network'])('preserves details when registration fails: %s', async (failure) => {
  if (failure === 'network') global.fetch.mockRejectedValue(new Error('Offline'));
  else global.fetch.mockResolvedValue({ ok: true, json: async () => ({ success: false }) });
  submitRegistration();
  await screen.findByRole('alert');
  expect(screen.getByLabelText('Full name').value).toBe('Test Member');
  expect(mockNavigate).not.toHaveBeenCalled();
  expect(window.alert).not.toHaveBeenCalled();
  expect(screen.getByRole('button', { name: 'Join the community' }).disabled).toBe(false);
});
