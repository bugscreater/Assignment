import "../App.css";
import Board from "./Board";
import Card from "./Card";
import TextEditor from "./TextEditor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Result from "./Result";


function Content() {
  const [value, setValue] = useState("h1");
  
  
  let navigate = useNavigate();


 
  

  function setTag(val) {
    setValue(val);
  }
  
  
  let text;
  let result;

  function Addcontent(content){
   
    document.getElementById('result').innerHTML = "";
    text  =  document.createElement( `${value}`); 
    var context = document.createTextNode(content);
    text.appendChild(context);
    result = content;
    show();
    
  }

  function show(){
    document.getElementById('result').appendChild(text);
  }
  
  
  function submit(){
     navigate("/Result",{state:{data:result,tag:value}});
  }
  
  return (
    <>
    <div className="container"> 

     
     
      <div>
        <header>
            <h2 className="header">Select Markup</h2>
        </header>

        <main className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" value="h1" setTag={setTag}>
              <p>Heading -h1</p>
            </Card>
          </Board>

          <Board id="board-2" className="board">
            <Card id="card-2" className="card" value="h2" setTag={setTag}>
              <p>Heading -h2</p>
            </Card>
          </Board>

          <Board id="board-3" className="board">
            <Card id="card-3" className="card" value="h3" setTag={setTag}>
              <p>Heading -h3</p>
            </Card>
          </Board>

          <Board id="board-4" className="board">
            <Card id="card-4" className="card" value="p1" setTag={setTag}>
              <p>Paragraph -p1</p>
            </Card>
          </Board>

          <Board id="board-5" className="board">
            <Card id="card-5" className="card" value="p2" setTag={setTag}>
              <p>Paragraph -p2</p>
            </Card>
          </Board>

          <Board id="board-6" className="board">
            <Card id="card-6" className="card" value="p3" setTag={setTag}>
              <p>Paragraph -p3</p>
            </Card>
          </Board>

          <Board id="board-7" className="board">
            <Card id="card-7" className="card" value="p4" setTag={setTag}>
              <p>Paragraph -p4</p>
            </Card>
          </Board>

          <Board id="board-8" className="board">
            <Card id="card-8" className="card" value="p5" setTag={setTag}>
              <p>Paragraph -p5</p>
            </Card>
          </Board>
        </main>


      </div>
     
    </div>
   
     
     
    
    <TextEditor value={value}  Addcontent = {Addcontent} submit = {submit}/>
   
   
    <div id = "result" className = "result"></div>
    
    </>  
  );
}

export default Content;
