import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

const Hello = () => <h1>Hello World</h1>

test('first hello test', () => {
  const { container } = render(<Hello />);

  expect(container).toHaveTextContent('Hello World');
});