
 
import { configure, shallow, render, mount  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import matchers from 'jest-extended/dist/matchers'
import expect from 'expect'

expect.extend(matchers);
configure({ adapter: new Adapter() });


global.shallow = shallow;
global.render = render;
global.mount = mount;