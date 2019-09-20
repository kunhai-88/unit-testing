import React from 'react';
import toJson from 'enzyme-to-json';
import HelloComponent from '../hello-component';

describe('testing hello component',()=>{
  let wrapper;
   beforeEach(()=>{
      wrapper = shallow(<HelloComponent name="enzyme" />);
   })
   test('render hello component',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
   })
   test('hello component has className hello ',()=>{
    expect(wrapper.find('.hello').length).toBe(1);
   })
});