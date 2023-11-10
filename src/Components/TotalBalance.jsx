import React from 'react'

export default function TotalBalance({totalBalance}) {
  return (
    <div className='p-5'>
        <div className=' p-5 bg-slate-50 shadow-md  rounded-md'
        >
        <h4>Total Balance</h4>
        <p>amount</p>
        <h2>{totalBalance}</h2>
        </div>
      </div>

  )
}
