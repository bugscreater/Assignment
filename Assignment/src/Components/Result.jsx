import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const data = location.state.data;

  
  
 

  

  return (
    <div id="content">
        <div
       id="result" className="result"
       dangerouslySetInnerHTML={{__html: data}}
      />
    </div>
  );
}

export default Result;
