import React from 'react';
import Foo from './Foo';
import { fireEvent, render } from '@testing-library/react';

/**
 * Esto es otra posibilidad para mockear react-i18next en lugar de tenerlo en src/__mocks__
 * @see https://react.i18next.com/misc/testing
 */
/*jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: (key) => key };
    return Component;
  },
}));*/

test('should toggle text on click', () => {
  const dummyProps = {
    message: 'active',
  };

  const { getByText } = render(<Foo {...dummyProps} />);
  const button = getByText('active', { exact: false });
  expect(button).toBeInTheDocument();
  expect(button).toContainHTML('active');
  fireEvent.click(button);
  expect(button).toContainHTML('off');
  fireEvent.click(button);
  expect(button).toContainHTML('active');
});
