
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cards from './Cards';

describe('Cards Component', () => {
  it('should render all cards with the correct data', () => {
    render(<Cards />);


    expect(screen.getByText('Problemas Respiratorios')).toBeInTheDocument();
    expect(screen.getByText('Contaminación del Agua')).toBeInTheDocument();
    expect(screen.getByText('Efectos en la Salud Cardiovascular')).toBeInTheDocument();

   
    expect(
      screen.getByText(
        'La polución del aire puede causar asma, bronquitis y otras enfermedades respiratorias graves.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Los desechos industriales y químicos contaminan ríos y lagos, afectando la calidad del agua que bebemos.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'La exposición prolongada a la polución del aire aumenta el riesgo de enfermedades del corazón y accidentes cerebrovasculares.'
      )
    ).toBeInTheDocument();
  });

  it('should have the correct class names applied to the card container and individual cards', () => {
    render(<Cards />);

    expect(screen.getByRole('group')).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-4', 'justify-center', 'p-4', 'bg-stone-400');

    const cards = screen.getAllByRole('article');
    cards.forEach(card => {
      expect(card).toHaveClass('bg-white', 'shadow-md', 'rounded-lg', 'p-6', 'm-4');
    });
  });

  it('should have the correct class names applied to the card titles and contents', () => {
    render(<Cards />);

   
    expect(screen.getAllByText(/Problemas Respiratorios|Contaminación del Agua|Efectos en la Salud Cardiovascular/).every(title => title).toHaveClass('text-l', 'font-bold', 'mb-2'));

    expect(screen.getAllByText(/La polución del aire puede causar asma, bronquitis y otras enfermedades respiratorias graves.|Los desechos industriales y químicos contaminan ríos y lagos, afectando la calidad del agua que bebemos.|La exposición prolongada a la polución del aire aumenta el riesgo de enfermedades del corazón y accidentes cerebrovasculares./).every(content => content).toHaveClass('text-gray-700'));
  });
});
