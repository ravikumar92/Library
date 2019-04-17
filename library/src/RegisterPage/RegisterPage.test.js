import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mount, shallow } from 'enzyme';
import RegisterPage from './RegisterPage';

configure({ adapter: new Adapter() });


describe('Register component', () => {
    it('Register Page component', () => {
      const component = shallow( <RegisterPage/>)
      expect(component.length).toEqual(1);
    })
  })