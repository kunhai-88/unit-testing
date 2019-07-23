let React = require('react');
let { mount } = require('enzyme');
let HelloComponent = require('../hello-component');

describe('testing component',()=>{
  let wrapper;
   beforeEach(()=>{
      wrapper = mount(<HelloComponent name="enzyme" />);
   })
   test('name equal enzyme',()=>{
      expect(wrapper.props().name).toBe('enzyme');
   })
});