import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from '../Pages/SignUp'
import { BrowserRouter as Router } from 'react-router-dom';

describe('SignUp component', () => {
  test('submits form with matching passwords', async () => {
    const { getByLabelText, getByText, findByText } = render(
      <Router>
        <SignUp />
      </Router>
    );

    // Fill in the input fields
    fireEvent.change(getByLabelText('Email Id:'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'password' } });
    fireEvent.change(getByLabelText('Confirm Password:'), { target: { value: 'password' } });

    // Submit the form
    fireEvent.click(getByText('SignUp'));

    // Wait for the success message and assert the navigation
    await waitFor(() => {
      expect(findByText('SignUp Successfully')).toBeInTheDocument();
      expect(window.location.pathname).toEqual('/login');
    });
  });

  test('submits form with non-matching passwords', async () => {
    const { getByLabelText, getByText, findByText } = render(
      <Router>
        <SignUp />
      </Router>
    );

    // Fill in the input fields with non-matching passwords
    fireEvent.change(getByLabelText('Email Id:'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'password' } });
    fireEvent.change(getByLabelText('Confirm Password:'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(getByText('SignUp'));


    expect(await findByText('Password does not Match')).toBeInTheDocument();
  });

  test('handles API error', async () => {
   
  });

  test('navigates to login page', () => {
    const { getByText } = render(
      <Router>
        <SignUp />
      </Router>
    );

    // Click on the "Login" link
    fireEvent.click(getByText('Login'));

    // Assert that the navigation to login page is successful
    expect(window.location.pathname).toEqual('/login');
  });
});
