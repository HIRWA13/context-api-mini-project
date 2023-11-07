import "./Result.css";
import { useContext } from "react";
import { AgeContext } from "../context/AgeContext";

export default function Result() {
  const {age, setAge} = useContext(AgeContext)
  console.log(age)
  return (
    <div>
      <h1 className="result">
        <span>{age.day ? age.day : "- -"}</span> Days
      </h1>
      <h1 className="result">
        <span>{age.month ? age.month : "- -"}</span> Months
      </h1>
      <h1 className="result">
        <span>{age.year ? age.year : "- -"}</span> Years
      </h1>
    </div>
  );
}