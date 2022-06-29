import "../App.css";
import Board from "./Board";
import Card from "./Card";
import TextEditor from "./TextEditor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Content() {
  const [value, setValue] = useState("h1");
 
  const[res,setRes] = useState("");
  
  let navigate = useNavigate();

  let text;
  

  function Addcontent(content) {
    document.getElementById("result").innerHTML = "";
    text = document.createElement(`${value}`);
    var context = document.createTextNode(content);
    text.appendChild(context);
  }

  function setTag(val) {
    if (text){
      savetodb();
    }
    setValue(val);
  }

  
  function savetodb() {
    
    let result = "";
    if (text) {
      let new_data = `<${value}>`;
      new_data += text.innerHTML;
      new_data += `</${value}>`;
      result = res + new_data;
      
      setRes((res)=>res + new_data);         
    }

    return result;
  }

  function submit() {
   
    let result = savetodb();
   
    
    navigate("/Result",{state:{data:result}})
    
  }

  return (
    <>
      <div className="container">
        <div>
          <header>
            <h2 className="header">Select Tag</h2>
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

      <TextEditor value={value} Addcontent={Addcontent} submit={submit} result = {res}/>

      <div id="result" className="result"></div>
    
    </>
  );
}

export default Content;
