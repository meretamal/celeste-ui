import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import { CTextField } from './c-text-field';

describe('CTextField', () => {
  it('should render the component correctly', () => {
    const container = render(<CTextField />);
    const input = container.baseElement.querySelector('input');
    expect(input).toBeInTheDocument();
  });

  it('should display the given label', () => {
    render(<CTextField label="Name" id="name" />);
    screen.getByLabelText('Name');
  });

  it('should display the given helper text', () => {
    render(<CTextField helperText="Error" />);
    screen.getByText('Error');
  });

  it('should display the given placeholder', () => {
    render(<CTextField placeholder="John Doe" />);
    screen.getByPlaceholderText('John Doe');
  });

  it('should disable the input', () => {
    render(<CTextField label="Name" id="name" disabled />);
    const input = screen.getByLabelText('Name');
    expect(input).toBeDisabled();
  });
});
