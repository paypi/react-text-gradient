import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  test('renders the Text component', () => {
    render(
      <Text gradient={{ from: '#818CF8', to: '#5B21B6' }}>
        Some interesting text
      </Text>
    );
  });

  test('renders the Text component animation', () => {
    render(
      <Text
        gradient={{ from: '#818CF8', to: '#5B21B6' }}
        animateTo={{ to: '#818CF8', from: '#5B21B6' }}
      >
        Some interesting text
      </Text>
    );
  });
});
