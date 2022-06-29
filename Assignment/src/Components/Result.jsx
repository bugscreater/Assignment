import React from 'react'
import { useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';

function Result() {
  const location = useLocation();
  
  const[tag,setTag] = useState(location.state.tag);
  const[data,setData] = useState(location.state.data);

  useEffect(()=>{
    document.getElementById('content').innerHTML = ""
    let text  =  document.createElement( `${tag}`); 
    var context = document.createTextNode(data);
    text.appendChild(context);

    document.getElementById('content').appendChild(text);
    
  },[])
  
  

  return (
      <div id = "content">
        
         
         
      </div>
  ) 
}

export default Result