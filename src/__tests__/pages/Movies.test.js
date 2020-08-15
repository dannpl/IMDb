import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import history from '../../routes/history';

import Movies from '../../pages/Movies';

const mockedHistoryPsuh = jest.fn();

jest.mock('react-router-dom', () => ({
  userHistory: () => ({
    push: mockedHistoryPsuh,
  }),
  Link: ({ children }) => children,
}));

describe('Movies Page', () => {
  it('Should be able to get movies and create Poster', () => {
    const { getByPlaceholderText, getByText } = render(
      <Movies history={history} />
    );
  });
});
