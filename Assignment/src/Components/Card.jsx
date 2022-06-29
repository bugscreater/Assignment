import React,{useState} from 'react'




function Card(props) {
   
   
    const dragStart = e =>{
        const target = e.target;
        e.dataTransfer.setData('card_id',target.id);
        props.setTag(props.value);
        // setTimeout(()=>{
        //     target.style.fontSize = "30px";
          
        // },0);
    }
    

    const dragOver = e =>{
       
        
        e.stopPropagation();

    }



    return (
      <> 
      <div
        id = {props.id}
        onDragStart = {dragStart}
        onDragOver = {dragOver}
        className = {props.className}
        draggable = "true"
      >
       {props.children}
      </div>
      
      </> 

    )
}

export default Card