import "./dist/App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <main>
      <header className="logo">
        <img src={logo} alt="logo" />
      </header>
      <div className="wrapper">
        <section className="section1">
          <label htmlFor="">Bill</label>
          <input type="number" className="input bill-input" id="bill-input" />
          <label htmlFor="">Select Tip %</label>
          <div className="tip">
            <div className="tips tip-5">5%</div>
            <div className="tips tip-10">10%</div>
            <div className="tips tip-15 active-tip">15%</div>
            <div className="tips tip-25">25%</div>
            <div className="tips tip-50">50%</div>
            <div id="tip-custom">
              <input
                type="number"
                className="tip-custom"
                placeholder="Custom"
              />
            </div>
          </div>
          <div className="peopleLabel">
            <label htmlFor="">Number of People</label>
            <label htmlFor="" className="error">
              Can't be zero
            </label>
          </div>
          <input type="number" className="input people-input" />
        </section>

        <section className="section2">
          <div className="tip-amount">
            <div className="text">
              <p>Tip Amount</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="tip-amount">
              $4.27
            </div>
          </div>
          <div className="total">
            <div className="text">
              <p>Total</p>
              <p className="person">/ person</p>
            </div>
            <div className="amount" id="total-amount">
              $32.79
            </div>
          </div>
          <div className="reset">RESET</div>
        </section>
      </div>
    </main>
  );
}

export default App;
