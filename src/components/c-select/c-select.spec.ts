import '@testing-library/jest-dom';

import { render, screen, RenderOptions } from '@testing-library/vue';
import { describe, it, expect } from 'vitest';
import { CSelect } from './c-select';

const renderComponent = (props?: RenderOptions['props']) =>
  render(CSelect, { props });

describe('CSelect', () => {
  it('should render the component correctly', () => {
    const container = renderComponent();
    const selects = container.baseElement.getElementsByTagName('select');
    expect(selects.length).toBe(1);
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
    const container = renderComponent({ placeholder: 'John Doe' });
    const select = container.baseElement.getElementsByTagName('select')[0];
    const options = select.getElementsByTagName('option');
    expect(options.length).toBe(1);
    expect(options[0].text).toBe('John Doe');
  });

  it('should disable the select field', () => {
    renderComponent({ label: 'Name', id: 'name', disabled: true });
    const select = screen.getByLabelText('Name');
    expect(select).toBeDisabled();
  });
});
