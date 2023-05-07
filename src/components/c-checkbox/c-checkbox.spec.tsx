import '@testing-library/jest-dom';

import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/vue';
import { CCheckbox } from './c-checkbox';

describe('CCheckbox', () => {
  it('should render the component correctly', () => {
    const container = render(<CCheckbox />);
    const input = container.baseElement.querySelector('div[role="checkbox"]');
    expect(input).toBeInTheDocument();
  });

  it('should display the given label', () => {
    render(<CCheckbox label="Remember me" id="checkbox" />);
    screen.getByLabelText('Remember me');
  });

  it('should disable the input', () => {
    render(<CCheckbox label="Remember me" id="checkbox" disabled />);
    const input = screen.getByLabelText('Remember me');
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });

  it('should check the checkbox by default', () => {
    render(<CCheckbox label="Remember me" id="checkbox" defaultChecked />);
    const input = screen.getByLabelText('Remember me');
    expect(input).toHaveAttribute('aria-checked', 'true');
  });

  it('should toggle a boolean model value', async () => {
    const container = render(
      <CCheckbox modelValue={false} label="Remember me" id="checkbox" />,
    );
    const input = screen.getByLabelText('Remember me');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as boolean[][];
    expect(emitted[0][0]).toBe(true);
  });

  it('should add an item to an array model value', async () => {
    const container = render(
      <CCheckbox modelValue={[]} value="plane" label="Plane" id="checkbox" />,
    );
    const input = screen.getByLabelText('Plane');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as string[][][];
    expect(emitted[0][0]).toEqual(['plane']);
  });

  it('should remove an item from an array model value', async () => {
    const container = render(
      <CCheckbox
        modelValue={['plane']}
        value="plane"
        label="Plane"
        id="checkbox"
      />,
    );
    const input = screen.getByLabelText('Plane');
    await fireEvent.click(input);
    const emitted = container.emitted()['update:modelValue'] as string[][][];
    expect(emitted[0][0]).toEqual([]);
  });
});
