import React from 'react';
import renderer from 'react-test-renderer';
import SearchPanel from './SearchPanel';
import ReactTestUtils from 'react-dom/test-utils';

test('test SearchPanel', () => {
  const component = renderer.create(
    <SearchPanel />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();  
});

describe('SearchPanel Component', () => {
  it('has an section tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<SearchPanel/>);    
    let section = ReactTestUtils.findRenderedDOMComponentWithTag(
     component, 'section');
   });   
  
   it('is wrapped inside a searchPanel class', () => {
    const component = ReactTestUtils.renderIntoDocument(<SearchPanel/>);    
    let classN = ReactTestUtils.findRenderedDOMComponentWithClass(
    component, 'searchPanel');
   });

   it('is wrapped inside a blockInp class', () => {
    const component = ReactTestUtils.renderIntoDocument(<SearchPanel/>);    
    let classN = ReactTestUtils.findRenderedDOMComponentWithClass(
    component, 'blockInp');
   });
});

