import React from 'react'
import {shallow, render} from 'enzyme'

import App from './App'
import Popular from "./components/Popular";

describe('App', () => {
    it('should not crash on render', () => {
        let wrapper = shallow(<App/>);

        expect(wrapper.find(Popular)).not.toBeNull();
    });
});
