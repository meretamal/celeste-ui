import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import { CSelect } from './c-select';

describe('CSelect', () => {
  it('should render the component correctly', () => {
    const container = render(<CSelect />);
    const select = container.baseElement.querySelector('select');
    expect(select).toBeInTheDocument();
  });

  it('should display the given label', () => {
    render(<CSelect label="Name" id="name" />);
    screen.getByLabelText('Name');
  });

  it('should display the given helper text', () => {
    render(<CSelect helperText="Error" />);
    screen.getByText('Error');
  });

  it('should display the given placeholder', () => {
    const container = render(<CSelect placeholder="John Doe" />);
    const select = container.baseElement.getElementsByTagName('select')[0];
    const options = select.getElementsByTagName('option');
    expect(options.length).toBe(1);
    expect(options[0].text).toBe('John Doe');
  });

  it('should disable the select field', () => {
    render(<CSelect label="Name" id="name" disabled />);
    const select = screen.getByLabelText('Name');
    expect(select).toBeDisabled();
  });
});
