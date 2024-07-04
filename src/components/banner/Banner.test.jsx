import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from './Banner';

describe('Banner Component', () => {
  it('should render the banner with the correct background image class', () => {
    render(<Banner />);
    const bannerDiv = screen.getByRole('banner');
    expect(bannerDiv).toHaveClass('bg-cover', 'bg-stone-600', 'bg-center');
  });

  it('should render the main title with the correct text', () => {
    render(<Banner />);
    expect(screen.getByText('AirCare')).toBeInTheDocument();
  });

  it('should render the subtitle with the correct text', () => {
    render(<Banner />);
    expect(screen.getByText('Por un aire mejor')).toBeInTheDocument();
  });

  it('should have the correct class names applied', () => {
    render(<Banner />);
    const bannerDiv = screen.getByRole('banner');
    expect(bannerDiv).toHaveClass(
      'relative items-center justify-center h-auto py-6 bg-cover bg-stone-600 bg-center'
    );
    expect(screen.getByText('AirCare')).toHaveClass(
      'text-3xl text-center h-100 text-white md:text-6xl font-bold mb-4'
    );
    expect(screen.getByText('Por un aire mejor')).toHaveClass(
      'text-lg md:text-xl text-gray-100 pb-4'
    );
  });
});
