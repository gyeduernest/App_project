import React from 'react'

export default function Addtransaction() {
  return (
    <>
    
    <div>
        <form action="">
          <div className='p-5'>
          <label htmlFor="item"><h5 className='font-bold'>Add Item</h5></label>
          <p>Add an item for it to be calculated</p>
          <input type="text" id="item" className='input' placeholder='eg. food' />
          <label htmlFor="item"><h5 className='font-bold'>Short description</h5></label>
          <p>Give a brief Description of the item</p>
          <textarea type="text" id="item" className='textarea' placeholder='eg.details of food' />
          </div>

            <div className='flex justify-center items-center px-5'>
            <button className='bg-blue-700 rounded-md  text-white font-bold w-full h-12'> Add Transaction</button>
  
            </div>          


        </form>

    </div>
    </>
  )
}
