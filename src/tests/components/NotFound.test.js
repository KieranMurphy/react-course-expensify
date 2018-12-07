import React from 'react'; 
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});