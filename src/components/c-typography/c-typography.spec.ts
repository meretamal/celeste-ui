import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { CTypography } from './c-typograpy';

describe('CTypography', () => {
  it('Renders the given text', () => {
    render(CTypography, {
      slots: { default: 'Hello world' },
    });
    screen.getByText('Hello world');
  });

  it('Renders the correct HTML tag for and h1 variant', () => {
    render(CTypography, {
      props: { variant: 'h1' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H1');
  });

  it('Renders the correct HTML tag for and h2 variant', () => {
    render(CTypography, {
      props: { variant: 'h2' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H2');
  });

  it('Renders the correct HTML tag for and h3 variant', () => {
    render(CTypography, {
      props: { variant: 'h3' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H3');
  });

  it('Renders the correct HTML tag for and h4 variant', () => {
    render(CTypography, {
      props: { variant: 'h4' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H4');
  });

  it('Renders the correct HTML tag for and h5 variant', () => {
    render(CTypography, {
      props: { variant: 'h5' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H5');
  });

  it('Renders the correct HTML tag for and h6 variant', () => {
    render(CTypography, {
      props: { variant: 'h6' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H6');
  });

  it('Renders the correct HTML tag for and b1 variant', () => {
    render(CTypography, {
      props: { variant: 'b1' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('Renders the correct HTML tag for and b2 variant', () => {
    render(CTypography, {
      props: { variant: 'b2' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('Renders a custom tag if the "as" prop is provided', () => {
    render(CTypography, {
      props: { variant: 'h1', as: 'span' },
      slots: { default: 'Hello world' },
    });
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('SPAN');
  });
});
