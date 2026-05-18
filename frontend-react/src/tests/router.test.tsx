import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '@/routes/AppRouter';

test('renders app shell branding', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(await screen.findByText(/CricCombo/i)).toBeInTheDocument();
});
