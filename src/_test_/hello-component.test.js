import React from 'react';
import HelloComponent from '../hello-component';

describe('testing hello component',()=>{
  let wrapper;
   beforeEach(()=>{
      wrapper = shallow(<HelloComponent name="enzyme" />);
   })
   test('render hello component',()=>{
      expect(wrapper).toMatchSnapshot();
   })
   test('hello component has className hello ',()=>{
    expect(wrapper.find('.hello').length).toBe(1);
   })
   test('hello component has prop name equal "enzyme" ',()=>{
    expect(wrapper.prop('name')).toEqual('enzyme');
   })
});