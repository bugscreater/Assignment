import React,{useState,useEffect} from 'react'

function TextEditor({value,Addcontent,submit}) {

  
  const [text,setText] = useState("");
  
  
  function settext(e){
       Addcontent(e.target.value)
       setText(e.target.value);
    
  }
  
  useEffect(()=>{
      setText("");
  },[value])
  
  function formsubmit(e){
    e.preventDefault();
    submit();

  }
  
  return (
    <>
   
    <div className='text-box'>
      <label htmlFor="">{value}</label>
      <textarea value = {text} className='TextEditor' onChange={settext}>
     
      </textarea>
      <button onClick={formsubmit} className = "btn">Submit</button>
      

    
   

    </div>
    </>
  )
}

export default TextEditor