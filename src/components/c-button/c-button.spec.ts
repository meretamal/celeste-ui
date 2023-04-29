import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';
import { render, RenderOptions, screen, fireEvent } from '@testing-library/vue';
import { CButton } from './c-button';

const renderComponent = (props?: RenderOptions['props']) =>
  render(CButton, { slots: { default: 'Click me' }, props });

describe('CButton', () => {
  it('should render the component correctly', () => {
    renderComponent();
    const button = screen.getByText('Click me');
    expect(button.tagName).toBe('BUTTON');
  });

  it('should disable the button', () => {
    renderComponent({ disabled: true });
    const button = screen.getByText('Click me');
    expect(button).toBeDisabled();
  });

  it('should emit a click event', async () => {
    const container = renderComponent();
    const button = screen.getByText('Click me');
    await fireEvent.click(button);
    expect(container.emitted().click).toBeTruthy();
  });
});
