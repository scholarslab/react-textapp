import React from 'react'

const Record = ({ record_data }) => {

    const hideWhenVisible = { display: 'none' }

    return (
    <div style={hideWhenVisible}>  
        <h3>{record_data.title}</h3>
        <p>{record_data.body}</p>
    </div>     
  )
}

export default Record