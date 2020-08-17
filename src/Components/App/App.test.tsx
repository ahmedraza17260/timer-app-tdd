import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App';
import Timer from '../Timer/Timer';

describe('App', () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<App />)))

  it('should render a <div />', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it("Should render Timer component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })

});