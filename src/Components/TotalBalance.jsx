import React from 'react'

export default function TotalBalance({totalBalance}) {
  return (
    <div className='Total-Balance'>
        <div className='p-5'
        >
        <h4>Total Balance</h4>
        <p>amount</p>
        <h2>{totalBalance}</h2>
        </div>
      </div>

  )
}
