import React from 'react';
import {shallow} from 'enzyme';

import Card from './card';

describe('<Card />', () => {
    it('Renders without crashing', () => {
        shallow(<Card text="Foo" />);
    });

    it('Renders the text', () => {
        const text = "Foo";
        const wrapper = shallow(<Card text={text} />);
        expect(wrapper.text()).toEqual(text);
    });
});


