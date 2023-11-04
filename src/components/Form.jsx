import "./Form.css";
import iconarrow from "../assets/iconarrow.svg";

export default function Form() {
  return (
    <form className="age-form">
      <div className="inputs-container">
        <div className="inputs">
          <label htmlFor="name">Day</label>
          <input type="number" id="name"min={0} placeholder="DD" required/>
        </div>
        <div className="inputs">
          <label htmlFor="name">Month</label>
          <input type="number" id="name"min={0} placeholder="MM" required/>
        </div>
        <div className="inputs">
          <label htmlFor="name">Year</label>
          <input type="number" id="name"min={0} placeholder="YYYY" required/>
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
