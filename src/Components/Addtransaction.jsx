import React from 'react'
import { useState } from 'react'

export default function Addtransaction(e) {
  

  const [item, setitem] = useState("")
  const [amount, setamount] = useState("")
  const [description, setdescription] = useState("")
  const [formData, setFormData] = useState("")


  const newTransaction = () => {
    setFormData([...newTransaction, ...Addtransaction])
  }
          
  


  return (
    <>
    
    <div>
        <form action="" value={formData} >
        <div className='p-5'>
          <label htmlFor="item"><h5 className='font-bold'>Add Item</h5></label>
          <p>Add an item for it to be calculated</p>
          <input type="text" id="item" className='input' placeholder='eg. food' onChange={(e) => (setitem(e.target.value))} value={item} />
          <label htmlFor="amount"><h5 className='font-bold'>Amount</h5></label>
          <input type="number" name='amount' id='amount' className='input' onChange={(e) => (setamount(e.target.value))} value={amount} />
          <label htmlFor="item"><h5 className='font-bold'>Comment</h5></label>
          <p>Give a brief Description of the item</p>
          <textarea type="text" id="item" className='textarea' placeholder='eg.details of food' onChange={(e) => (setdescription(e.target.value))} value={description}  />
         </div>
            <div className='flex justify-center items-center px-5 mt-10'>
            <button onClick={newTransaction}  className='bg-blue-700 rounded-md  text-white font-bold w-full h-12'>Add Transaction</button>
  
            </div>          


        </form>

    </div>
    </>
  )
}
