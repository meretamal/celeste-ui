import { render, screen, RenderOptions } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import { CTextField } from './c-text-field';

const renderComponent = (props?: RenderOptions['props']) =>
  render(CTextField, { props });

describe('CTextField', () => {
  it('should render the component correctly', () => {
    const container = renderComponent();
    const inputs = container.baseElement.getElementsByTagName('input');
    expect(inputs.length).toBe(1);
  });

  it('should display the given label', () => {
    renderComponent({ label: 'Name', id: 'name' });
    screen.getByLabelText('Name');
  });

  it('should display the given helper text', () => {
    renderComponent({ helperText: 'Error' });
    screen.getByText('Error');
  });

  it('should display the given placeholder', () => {
    renderComponent({ placeholder: 'John Doe' });
    screen.getAllByPlaceholderText('John Doe');
  });

  it('should disable the input', () => {
    renderComponent({ label: 'Name', id: 'name', disabled: true });
    screen.getByLabelText('Name');
  });
});
