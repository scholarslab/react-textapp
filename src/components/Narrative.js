import React, {useState, useImperativeHandle} from 'react'

const NarrativeHTML = React.forwardRef((props, ref) => {
    const [hover, setHover] = useState(false)

    const spanActive = hover ? 'highlight' : '' ;

    const handleSpanHover = () => {
        setHover(!hover)
      }

      useImperativeHandle(ref, () => {
        return {
          handleSpanHover
        }
      })
    return (
        <div
          className={spanActive}
          onMouseEnter={handleSpanHover}
          onMouseLeave={handleSpanHover}
        >
          {props.children}
        </div>
    )
})

const Narrative = ({ exhibit_data }) => {
    
    const htmlString = exhibit_data[0].narrative;

    const handleClick = () => {
        console.log('clicked')
      }

  return (
    // <div 
    //     className="neatline-narrative"
    //     dangerouslySetInnerHTML={{ __html: htmlString }} 
    // />    
        <NarrativeHTML>
            <div  dangerouslySetInnerHTML={{ __html: htmlString }} />
        </NarrativeHTML>
  )
}


export default Narrative