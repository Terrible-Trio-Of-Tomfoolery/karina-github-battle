import React from 'react'
import {shallow, render} from 'enzyme'

import App from './App'

describe('App', () => {
    let wrapper;
    let app;
    beforeAll(() => {
        wrapper = shallow(<App/>);
    });
    beforeEach(() => {
        app = wrapper.instance();
    });
    it('should not crash on render', () => {
        expect(wrapper.find('div')).not.toBeNull();
    });
    describe('when authorised', () => {
        beforeEach(() => {
            app.isAuthorised = jest.fn().mockReturnValue(true);
        });
        describe('when new', () => {
            it('should display Welcome!', () => {
                app.isExisting = jest.fn().mockReturnValue(false);
                app.forceUpdate();
                expect(wrapper.find('div').text()).toBe('Welcome!');
            });
        });
        describe('when existing', () => {
            it('should display Welcome Back!', () => {
                app.isExisting = jest.fn().mockReturnValue(true);
                app.forceUpdate();
                expect(wrapper.find('div').text()).toBe('Welcome Back!');
            });
        });
    });
    describe('when not authorised', () => {
        beforeEach(() => {
            app.isAuthorised = jest.fn().mockReturnValue(false);
            app.forceUpdate();
        });
        it('should display Login', () => {
            expect(wrapper.find('div').text()).toBe('Login');
        });
    });
});
