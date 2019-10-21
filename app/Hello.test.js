import Hello from "./Hello";
import {shallow} from "enzyme";
import React from "react";

describe('Hello', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Hello/>);
    });
    it('should not crash on render', () => {
        expect(wrapper.find('div')).not.toBeNull();
    });
    it('should display Hello!', () => {
        expect(wrapper.text()).toBe('Hello!');
    });
    describe('with name prop', () => {
        it('should display name string', () => {
            const helloWithName = shallow(<Hello name='Karina'/>);
            expect(helloWithName.text()).toBe('Hello Karina!');
        });
        it('should display name ', () => {
            const helloWithName = shallow(<Hello name=0/>);
            expect(helloWithName.text()).toBe('Hello Karina!');
        });
    });
});
