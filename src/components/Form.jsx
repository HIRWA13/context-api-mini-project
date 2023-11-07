import "./Form.css";
import iconarrow from "../assets/iconarrow.svg";
import { useContext, useRef } from "react";
import { AgeContext } from "../context/AgeContext";

export default function Form() {
  const {age, setAge} = useContext(AgeContext);
  const dayInputRef = useRef(age.name);
  const monthInputRef = useRef(age.month);
  const yearInputRef = useRef(age.year);

  const AgeCalculatorHandler = (e) => {
    e.preventDefault();
    setAge(()=> {
      return {
        day: dayInputRef.current.value,
        month: monthInputRef.current.value,
        year: yearInputRef.current.value
      }
    })
    dayInputRef.current.value = ''
    monthInputRef.current.value = ''
    yearInputRef.current.value = ''
  }

  return (
    <form className="age-form" onSubmit={AgeCalculatorHandler}>
      <div className="inputs-container">
        <div className="inputs">
          <label htmlFor="name">Day</label>
          <input 
              type="number" 
              id="name"
              min={0} 
              placeholder="DD"
              ref={dayInputRef}
              />
        </div>
        <div className="inputs">
          <label htmlFor="name">Month</label>
          <input 
              type="number" 
              id="name"
              min={0} 
              placeholder="MM"
              ref={monthInputRef}
              />
        </div>
        <div className="inputs">
          <label htmlFor="name">Year</label>
          <input 
              type="number" 
              id="name"
              min={0} 
              placeholder="YYYY"
              ref={yearInputRef}
              />
        </div>
      </div>
      <div>
        <button>
          <img src={iconarrow} />
        </button>
      </div>
    </form>
  );
}
