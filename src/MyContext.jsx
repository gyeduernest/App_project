import { createContext, useContext } from "react";
import React from 'react'

export default function MyContext({children}) {
  const income = createContext(income);
  const expense = createContext(expense);
  const totalBalance  = createContext(totalBalance);

  return (  
    
    <MyContext.Provider>
      {children}
    </MyContext.Provider>
  )
}
