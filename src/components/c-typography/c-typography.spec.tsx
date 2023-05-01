import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import { CTypography } from './c-typograpy';

describe('CTypography', () => {
  it('should render the given text', () => {
    render(<CTypography>Hello world</CTypography>);
    screen.getByText('Hello world');
  });

  it('should render the correct HTML tag for and h1 variant', () => {
    render(<CTypography variant="h1">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H1');
  });

  it('should render the correct HTML tag for and h2 variant', () => {
    render(<CTypography variant="h2">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H2');
  });

  it('should render the correct HTML tag for and h3 variant', () => {
    render(<CTypography variant="h3">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H3');
  });

  it('should render the correct HTML tag for and h4 variant', () => {
    render(<CTypography variant="h4">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H4');
  });

  it('should render the correct HTML tag for and h5 variant', () => {
    render(<CTypography variant="h5">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H5');
  });

  it('should render the correct HTML tag for and h6 variant', () => {
    render(<CTypography variant="h6">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('H6');
  });

  it('should render the correct HTML tag for and b1 variant', () => {
    render(<CTypography variant="b1">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('should render the correct HTML tag for and b2 variant', () => {
    render(<CTypography variant="b2">Hello world</CTypography>);
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('P');
  });

  it('should render a custom tag if the "as" prop is provided', () => {
    render(
      <CTypography variant="h1" as="span">
        Hello world
      </CTypography>,
    );
    const element = screen.getByText('Hello world');
    expect(element.tagName).toBe('SPAN');
  });
});
