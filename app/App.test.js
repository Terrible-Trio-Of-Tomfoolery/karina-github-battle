import React from 'react'
import {shallow, render} from 'enzyme'

import App from './App'
import Hello from "./Hello";

describe('App', () => {
    let wrapper, app;
    beforeAll(() => {
        wrapper = shallow(<App/>);
    });
    beforeEach(() => {
        app = wrapper.instance();
    });
    it('should not crash on render', () => {
        expect(wrapper.find(Hello)).not.toBeNull();
    });
});
