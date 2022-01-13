import { useEffect, useState } from "react";
import "./dist/App.css";
import { Header } from "./components/Header";
// import { Section1 } from "./components/section1/Section1";

// logic:

// + bill on change
// + tip on click
// + custom % on change
// + active buttons
// + number of people. If there is no number or 0 result error.
// + tip amount = bill100 x people1 = 100 x 0.10% = 10$
// + total = bill + tip amount
// + reset button all to 0

function App() {
  const [error, setError] = useState("");
  console.log(error);
  const [amount, setAmount] = useState(""); // for bill-input
  const [tip, setTip] = useState(0); // for tips change state from 0 to %
  const [people, setPeople] = useState("");

  const [tipperson, setTipperson] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  ////////// BILL-INPUT ///////////
  const changeBill = (text) => {
    setAmount(text);
    // console.log(number);
  };

  ////////// PEOPLE-INPUT /////////
  const checkPeople = (text) => {
    if (text === "0" || text === "") {
      setError("Can't be zero");
      setPeople(0);
    } else {
      setError("");
      if (isNaN(parseFloat(text))) {
        setPeople(0);
      } else {
        setPeople(parseFloat(text));
      }
    }
  };

  ////////// TIP AMOUNT + TOTAL BILL ///////////
  const toTwoDecimals = (number) => {
    return number.toFixed(2);
  };

  useEffect(() => {
    const calculate = () => {
      if (
        amount !== "" &&
        tip !== "" &&
        people !== "" &&
        amount !== 0 &&
        typeof amount !== String &&
        people !== 0 &&
        !isNaN(tip)
      ) {
        let newTipperson = (parseFloat(amount) * (tip / 100)) / people;
        let newTotalPerson = (parseFloat(amount) * (tip / 100 + 1)) / people;

        setTipperson(toTwoDecimals(newTipperson));
        setTotal(toTwoDecimals(newTotalPerson));
      }
    };
    calculate();
  }, [amount, tip, people]);

  ////////////// RESET BUTTON //////////////////
  const resetCalculator = () => {
    setAmount("");
    setTip(0);
    setPeople("");
    document.querySelector("#tipAmount").value = "";
    setTipperson("0.00");
    setTotal("0.00");
  };

  return (
    <main>
      <Header />
      <div className="wrapper">
        {/* <Section1 /> */}

        <section className="section1">
          <label htmlFor="">Bill</label>
          <input
            type="text"
            className="input bill-input"
            id="bill-input"
            onChange={(e) => changeBill(e.target.value)}
            // onChange={(e) => setAmount(e.target.value)} // e.target.value - targets input value in setAmount function
            value={amount}
          />

          <label htmlFor="">Select Tip %</label>
          <div className="tip">
            <button onClick={() => setTip(5)} className="tips active-tip">
              5%
            </button>
            <button onClick={() => setTip(10)} className="tips active-tip">
              10%
            </button>
            <button onClick={() => setTip(15)} className="tips active-tip">
              15%
            </button>
            <button onClick={() => setTip(25)} className="tips active-tip">
              25%
            </button>
            <button onClick={() => setTip(50)} className="tips active-tip">
              50%
            </button>
            <div id="tip-custom">
              <input
                type="text"
                id="tipAmount"
                className="tip-custom"
                placeholder="Custom"
                onClick={(e) => setTip(parseInt(e.target.value))} // The parseInt method parses a value as a string and returns the first integer.
                onChange={(e) => setTip(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="peopleLabel">
            <label htmlFor="">Number of People</label>
            <label htmlFor="" className="error">
              {/* Can't be zero */}
              {error}
            </label>
          </div>

          <input
            type="text"
            onChange={(e) => checkPeople(e.target.value)}
            value={people}
            className="input people-input"
            // className={`w-full bg-grayish-cyan-middle/50 ${
            //   error ? "outline-red-600" : "focus:outline-strong-cyan"
            // } outline-none px-3 py-1.5 rounded-md text-right relative text-dark-cyan/80 font-bold text-xl outline-offset-0`}
          />
        </section>

        <section className="section2">
          <div className="tip-amount">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="tip-amount">
              {tipperson}
              {/* $4.27 */}
            </div>
          </div>
          <div className="total">
            <div className="text">
              <p>Total</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="total-amount">
              {total}
              {/* $32.79 */}
            </div>
          </div>
          <div onClick={() => resetCalculator()} className="reset">
            RESET
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
