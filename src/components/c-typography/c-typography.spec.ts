import { describe, it, expect } from 'vitest';
import { RenderOptions, render, screen } from '@testing-library/vue';
import { CTypography } from './c-typograpy';

const renderComponent = (props?: RenderOptions['props']) =>
  render(CTypography, { slots: { default: 'Hello world' }, props });

describe('CTypography', () => {
  it('Renders the given text', () => {
    renderComponent();
    screen.getByText('Hello world');
  });

  it('Renders the correct HTML tag for and h1 variant', () => {
    renderComponent({ variant: 'h1' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H1');
  });

  it('Renders the correct HTML tag for and h2 variant', () => {
    renderComponent({ variant: 'h2' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H2');
  });

  it('Renders the correct HTML tag for and h3 variant', () => {
    renderComponent({ variant: 'h3' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H3');
  });

  it('Renders the correct HTML tag for and h4 variant', () => {
    renderComponent({ variant: 'h4' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H4');
  });

  it('Renders the correct HTML tag for and h5 variant', () => {
    renderComponent({ variant: 'h5' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H5');
  });

  it('Renders the correct HTML tag for and h6 variant', () => {
    renderComponent({ variant: 'h6' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H6');
  });

  it('Renders the correct HTML tag for and b1 variant', () => {
    renderComponent({ variant: 'b1' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('Renders the correct HTML tag for and b2 variant', () => {
    renderComponent({ variant: 'b2' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('Renders a custom tag if the "as" prop is provided', () => {
    renderComponent({ variant: 'h1', as: 'span' });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('SPAN');
  });
});
