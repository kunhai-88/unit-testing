import React from 'react';
import toJson from 'enzyme-to-json';
import Component from '../compose-component';

describe('testing hello component',()=>{
  let wrapper;
   beforeEach(()=>{
      wrapper = shallow(<Component name="enzyme" />);
   })
   test('render hello component',()=>{
      expect(toJson(wrapper)).toMatchSnapshot();
   })
  //  test('hello component has className hello ',()=>{
  //   expect(wrapper.find('.hello').length).toBe(1);
  //  })
  //  test('hello component has prop name equal "enzyme" ',()=>{
  //   expect(wrapper.prop('name')).toEqual('enzyme');
  //  })
});