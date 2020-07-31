import React from 'react';
import App from './App.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import CompanyDashboard from './components/CompanyDashboard.js';

configure({adapter: new Adapter()});

describe('<App/>', () => {
    it('Renders <App/> correctly', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(CompanyDashboard))

    })
});