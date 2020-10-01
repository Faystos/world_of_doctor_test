import React from 'react';
import renderer from 'react-test-renderer';
import SearchPanel from './SearchPanel';

test('test SearchPanel', () => {
  const component = renderer.create(
    <SearchPanel />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();  
});

