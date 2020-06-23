import React from 'react'
import Narrative from './components/Narrative'
import Record from './components/Record'

const App = ({exhibit_data, record_data}) => {

    return (
        <div className="row">
            <div className="column">
            {record_data.map((record_data, i) => 
                    <Record key={i} record_data={record_data}/>
                    )}
            </div>
            <div className="column">
            <Narrative exhibit_data={exhibit_data} />
            </div>
        </div>
    )
}

export default App 