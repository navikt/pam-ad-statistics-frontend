import React from 'react';
import App from '../App.js';
import { shallow } from 'enzyme';
import CompanyDashboard from '../components/CompanyDashboard.js';
import CandidateDashboard from '../components/CandidateDashboard.js';

describe('<App/>', () => {
    it('Renders <App/> correctly', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(CompanyDashboard, CandidateDashboard))
    })
});