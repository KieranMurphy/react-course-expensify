import React from 'react'; 
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render Expense form', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'new description';

    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'new note';

    wrapper.find('textarea').simulate('change', {
        target: { value }
    });

    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '123.45';

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '132.134';

    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});

    expect(wrapper.state('calendarFocused')).toEqual(true);
});