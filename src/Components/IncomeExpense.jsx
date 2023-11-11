import React from 'react'
    
export default function IncomeExpense({totalIncome, totalExpense}) {



  
  return (
    <div>

       
            <div className='Income '>
            <h4 className='text-green-700 '>Total Income</h4>
            <h4>{totalIncome}</h4>
            </div>
          
          <div className='Expense'>


            <h4 className='text-red-700 '>Total Expense</h4>
            <h4>{totalExpense}</h4>
          
          </div>
    </div>
  )
}
