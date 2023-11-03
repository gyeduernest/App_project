import React, { useState } from 'react'

function Panel( {title, children}) {
  const [show, setShow] = useState(false);

  return(
    <section className="panel">
      <h3>{title}</h3>
      {show ? ( <p>{children}</p> ) : ( <button onClick={() => setShow(true)}> <h1>+</h1></button>
      )}
    </section>
  )

  export default function Accordion (){

    return(
      <>

      <Panel>

        
      </Panel>



        
        
      
      </>
    )
  }

  
}
