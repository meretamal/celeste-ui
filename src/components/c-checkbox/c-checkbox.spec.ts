import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';
import { render, RenderOptions, screen, fireEvent } from '@testing-library/vue';
import { CCheckbox } from './c-checkbox';

const renderComponent = (props?: RenderOptions['props']) =>
  render(CCheckbox, { props });

describe('CCheckbox', () => {
  it('should render the component correctly', () => {
    const container = renderComponent();
    const input = container.baseElement.querySelector('div[role="checkbox"]');
    expect(input).toBeInTheDocument();
  });

  it('should display the given label', () => {
    renderComponent({ label: 'Remember me', id: 'remember-me' });
    screen.getByLabelText('Remember me');
  });

  it('should disable the input', () => {
    renderComponent({
      label: 'Remember me',
      id: 'remember-me',
      disabled: true,
    });
    const input = screen.getByLabelText('Remember me');
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });

  it('should toggle a boolean when passing a boolean v-model', async () => {
    const container = renderComponent({
      modelValue: false,
      label: 'Remember me',
      id: 'remember-me',
    });
    const input = screen.getByLabelText('Remember me');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as boolean[][];
    expect(emitted[0][0]).toBe(true);
  });

  it('should emit the given value in an array if passing an array as a v-model', async () => {
    const container = renderComponent({
      modelValue: [],
      value: 'plane',
      label: 'Plane',
      id: 'transportation',
    });
    const input = screen.getByLabelText('Plane');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as string[][][];
    expect(emitted[0][0]).toEqual(['plane']);
  });

  it('should remove the given value if passing an array as a v-model and it already has it', async () => {
    const container = renderComponent({
      modelValue: ['plane'],
      value: 'plane',
      label: 'Plane',
      id: 'transportation',
    });
    const input = screen.getByLabelText('Plane');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as string[][][];
    expect(emitted[0][0]).toEqual([]);
  });
});
