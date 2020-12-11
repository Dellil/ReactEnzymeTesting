import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Profile username="aksaksdm" name="장찬희" />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders username and name', () => {
        const wrapper = mount(<Profile username="velopert" name="ㅈㅊㅎ"/>);
        // react 컴포넌트의 prop 검사
        expect(wrapper.props().username).toBe('velopert');
        expect(wrapper.props().name).toBe('ㅈㅊㅎ');

        // dom 검사
        // find에서 css class&id, tag, react component를 인자로 넣을 수 있다.
        const boldElement = wrapper.find('b');
        expect(boldElement.contains('velopert')).toBe(true);
        const spanElement = wrapper.find('span');
        expect(spanElement.text()).toBe('(ㅈㅊㅎ)');
    });
});