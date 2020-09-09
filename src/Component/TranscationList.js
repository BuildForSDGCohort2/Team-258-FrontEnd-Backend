import React from 'react'

export const TranscationList = () => {
    return (
        <>
            <h3>History</h3>
      <ul  className="list">
         <li className="minus">
          Cash <span>-K400</span><button className="delete-btn">x</button>
        </li> 
      </ul>  
        </>
    )
}
