import React from 'react'

export default (filteredArray) => {
        return filteredArray
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0) 
}