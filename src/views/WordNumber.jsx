import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import { useParams } from "react-router";

const WordNumber = (props) => {
  const { userinput } = useParams()
  if(isNaN(userinput)){
    return (
      <h1>The word is: {userinput}</h1>
    );
  }
  return (
    <h1>The number is: {userinput}</h1>
  );

}
export default WordNumber;