import React,{useState} from 'react'




function Card(props) {
   
   
    const dragStart = e =>{
        let prev_card_id = localStorage.getItem("selected_card");
        let prev_card = document.getElementById(prev_card_id);
       
        setTimeout(()=>{
          prev_card.style.display = "block";
        
        },100);
       
        localStorage.clear();
        
        const target = e.target;
        e.dataTransfer.setData('card_id',target.id);
        
        
        
        setTimeout(()=>{
          props.setTag(props.value);
        
        },100);
        
        setTimeout(()=>{
            target.style.display = "none";
          
        },100);
       
        localStorage.setItem("selected_card",target.id);
       
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
