import React from 'react'
import ExpenseTotal from '../selectors/expenses-total'
import numeral from 'numeral'
import { connect } from 'react-redux'

const ExpenseSummary = (props) => {
    const expenseCount = props.expenses.length
    const expenseTotal = ExpenseTotal(props.expenses)
        return (
            <p>{(expenseCount ===1 ) ? `Viewing 1 expense totalling ${numeral(expenseTotal /100).format('$0,0.00')}` : 
        `Viewing ${expenseCount} expenses totalling ${numeral(expenseTotal /100).format('$0,0.00')}`}</p>
        )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseSummary)