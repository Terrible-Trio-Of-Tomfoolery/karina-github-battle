import React from 'react';
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer';

import Popular from "./Popular";

describe('Popular', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Popular/>);
    });
    it('does not crash on render', () => {
        expect(wrapper.find('ul')).not.toBeNull();
    });
    it('renders correctly', () => {
        expect(renderer.create(<Popular/>).toJSON()).toMatchSnapshot();
    });
});
