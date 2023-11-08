import React from 'react'
    
export default function IncomeExpense(props) {
  return (
    <div>

        <div className=''>
          <div className='bg-blue-100  shadow-lg  rounded-lg flex justify-between items-center p-10'>
          <div className=''>
            <h4>Income</h4>
            <h4>{props.income}</h4>
          </div>
          <div>
            <h4>Expense</h4>
            <h4>{props.expense}</h4>
          </div>
          </div>
        </div>

    </div>
  )
}
