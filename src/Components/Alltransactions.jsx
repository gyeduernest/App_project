import React from 'react'

export default function Alltransactions() {
  return (
    <div>
      <div className=''>
        <h4 className='text-center font-bold'>All transactions</h4>
        <div className='p-5'>
            <div className='bg-green-50 h-24 rounded-md shadow-sm  p-5 flex justify-between'>
              <div>
              <h4 className='font-bold'>Item</h4>
              <p>Short Description</p>
              </div>
              <div>
              <h3 className='font-bold'>0.00</h3>
              <p>amount</p>
              </div>
              <button className='cancel '><h5>X</h5></button>
            </div>
            
        </div>

      </div>

    </div>
  )
}
