
import React from 'react'

function Timestamp({time}){
const {timestamp} = time; 
return (  
<span className="timestamp">{timestamp}</span>
 );
}

export default Timestamp;