import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { useParams } from "react-router";

const ColorWord = (props) => {
    const { inputword } = useParams()
    const { textcolor } = useParams()
    const { bkgcolor } = useParams()
    
    return (
      <h1 style={{color:textcolor, backgroundColor:bkgcolor}}>The word is: {inputword}</h1>
    );
  
  }
  export default ColorWord;