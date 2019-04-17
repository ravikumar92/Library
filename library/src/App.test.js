import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import AppWrapper from './App';
import { Setting } from './settings';

configure({ adapter: new Adapter() });


describe('App component', () => {
  it('Start with login component', () => {
    const component = shallow( <AppWrapper/>)
    expect(component.length).toEqual(1);
  })
});
