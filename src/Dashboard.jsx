import React from 'react'
import TotalBalance from './Components/TotalBalance'
import Alltransactions from './Components/Alltransactions'

export default function Dashboard() {

  return (
    <>
      <div className='lg:flex justify-center items-center lg:py-10 text-center'>
      <h3 className='lg:text-7xl text-4xl py-10'> Welcome to fintrack</h3>
      </div>

      
      <Alltransactions/>
      
    </>
  )
}
