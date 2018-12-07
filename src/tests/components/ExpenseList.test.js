import React from 'react'; 
import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('shuld render Expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});


test('shuld render Expense list with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});