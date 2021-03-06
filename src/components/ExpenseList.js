import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = ({ expenses }) => {
return (
    <div>
        <h1>Expense List</h1>
        {expenses.map((expense, index) => {
            return (
                <ExpenseListItem {...expense} key={expense.id}/>
            )
        })}
    </div>
);
}
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList)
