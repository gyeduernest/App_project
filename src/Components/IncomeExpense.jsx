import React from 'react'
    
export default function IncomeExpense({totalIncome, totalExpense}) {



  
  return (
    <div>

       
            <div className='Income '>
            <h4 className='text-green-700 font-bold'>Income</h4>
            <h4>{totalIncome}</h4>
            </div>
          
          <div className='Expense'>


            <h4 className='text-red-700 font-bold'>Expense</h4>
            <h4>{totalExpense}</h4>
          
          </div>
    </div>
  )
}
