import React from 'react';
import {shallow} from 'enzyme'

import Popular from "./Popular";

describe('Popular', () => {
    it('does not crash on render', () => {
        let wrapper = shallow(<Popular/>);
        expect(wrapper.find('ul')).not.toBeNull();
    });
});
