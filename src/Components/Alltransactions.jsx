import React from 'react'
import { useState } from 'react'
import IncomeExpense from './IncomeExpense';
import TotalBalance from './TotalBalance';

export default function Alltransactions() {
  const [transactionsList, setTransactionsList] = useState([ 
    
    
  ])
  
  const [item, setitem] = useState("")
  const [amount, setamount] = useState("")
  const [description, setdescription] = useState("")
  const addTransaction = (e) => {
    e.preventDefault();
    
      const newTransaction = {
        id: transactionsList.length + 1,
        item,
        amount,
        description,
      };
      
      setTransactionsList([...transactionsList, newTransaction]);
      
      
    };
    const totalExpense = transactionsList.filter(transactionsList => transactionsList.amount < 0).reduce((accumulator, transactionsList) => accumulator - Number(transactionsList.amount), 0);

    const totalIncome = transactionsList.filter(transactionsList => transactionsList.amount >= 0).reduce((accumulator, transactionsList) => accumulator + Number(transactionsList.amount), 0);
    
    
    
    
    const handleDelete = (id) => {
    const filteredTransactions = transactionsList.filter((transaction) => transaction.id !== id);
      setTransactionsList(filteredTransactions);
    };
    
    

    
    const balance = totalIncome - totalExpense;


    return (
      <div>
        <TotalBalance totalBalance={balance}/>
        <IncomeExpense totalIncome={totalIncome} totalExpense={totalExpense}/>
       <div className=''>
        <div className='flex justify-center items-center gap-8'><h4 className='text-center font-bold'>All transactions</h4></div>
        <div className='p-5'>
              {transactionsList.map((transactions) => (
              
            <div className='bg-green-50 h-24 rounded-md shadow-sm  p-5 flex justify-between mb-5'>
              <div  key={transactions.id}>
              <h4 className='font-bold'>{transactions.item}</h4>
              <p>{transactions.description}</p>
              </div>
              <div>
              <h3 className='font-bold'>{transactions.amount}</h3>
              <p>amount</p>
              </div>
              <button onClick={() => handleDelete(transactions.id)} className='cancel '><h5>x</h5></button>
            </div>
            
              ))}

<form action="" onSubmit={addTransaction} >
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
            <button className='bg-blue-700 rounded-md  text-white font-bold w-full h-12'>Add Transaction</button>
  
            </div>          


</form>


        </div>

      </div>

                  

    </div>

  )
}
