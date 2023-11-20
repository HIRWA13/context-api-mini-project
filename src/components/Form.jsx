import "./Form.css";
import iconarrow from "../assets/iconarrow.svg";
import { useContext, useRef } from "react";
import { AgeContext } from "../context/AgeContext";
import { calculateAge } from "../utils/calculateAge";

export default function Form() {
  const {age, setAge} = useContext(AgeContext);
  const currentYear = new Date().getFullYear();

  const dayInputRef = useRef(age.name);
  const monthInputRef = useRef(age.month);
  const yearInputRef = useRef(age.year);



  const AgeCalculatorHandler = (e) => {
    e.preventDefault();
    const day = dayInputRef.current.value;
    const month = monthInputRef.current.value;
    const year = yearInputRef.current.value;

    const result = calculateAge(day, month, year)
    console.log(result)
    setAge(()=> {
      return {
        day: result.ageDays,
        month: result.ageMonths,
        year: result.ageYears
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
              min={1} 
              max={31}
              placeholder="DD"
              ref={dayInputRef}
              />
        </div>
        <div className="inputs">
          <label htmlFor="name">Month</label>
          <input 
              type="number" 
              id="name"
              min={1} 
              max={12}
              placeholder="MM"
              ref={monthInputRef}
              />
        </div>
        <div className="inputs">
          <label htmlFor="name">Year</label>
          <input 
              type="number" 
              id="name"
              min={1000} 
              placeholder="YYYY"
              ref={yearInputRef}
              max={currentYear}
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
