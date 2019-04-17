import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Books from './books';

configure({ adapter: new Adapter() });

describe('Register component', () => {
    it('Book List component', () => {
      const component = shallow( <Books/>)
      expect(component.find('.sidenav')).toBeDefined();
    });

    it('Render a list item', ()=> {
        const component = shallow( <Books/>)
        expect(component.find('.table')).toBeTruthy();
    })
  })