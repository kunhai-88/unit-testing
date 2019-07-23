import React from 'react';
import HelloComponent from '../hello-component';

describe('testing component',()=>{
  let wrapper;
   beforeEach(()=>{
      wrapper = shallow(<HelloComponent name="enzyme" />);
   })
   test('render hello component',()=>{
      expect(wrapper).toMatchSnapshot();
   })
});