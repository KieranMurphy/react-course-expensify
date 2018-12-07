import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        description: 'stuff',
        amount: 1200,
        createdAt: moment(0).add(5, 'days').valueOf(),
        note: ''
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const note = 'stuff';

    const action = {
        type: 'EDIT_EXPENSE',
        id:  expenses[0].id,
        updates: {
            note
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
});

test('should not edit expense', () => {
    const note = 'stuff';

    const action = {
        type: 'EDIT_EXPENSE',
        id:  '-1',
        updates: {
            note
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});