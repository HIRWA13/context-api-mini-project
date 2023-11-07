import Form from "./Form";
import "./AgeCalculator.css";
import Result from "./Result";
import { AgeContext } from "../context/AgeContext";
import { useState } from "react";

export default function AgeCalculator() {
  const [age, setAge] = useState({
    day: null,
    month: null,
    year: null,
  });
  return (
    <AgeContext.Provider value={{age, setAge}}>
      <div className="container">
        <Form />
        <Result />
      </div>
    </AgeContext.Provider>
  );
}
