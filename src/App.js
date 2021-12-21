import "./dist/App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <main>
      <header className="logo">
        <img src={logo} alt="logo" />
      </header>
      <div className="wrapper">
        <section>
          <p>Bill</p>
          <input type="text" />
          <div>
            <p>Select Tip</p>
            <div>5%</div>
            <div>10%</div>
            <div>15%</div>
            <div>25%</div>
            <div>50%</div>
            <input type="text" />
          </div>
          <div>
            <p>Number of People</p>
            <input type="text" />
          </div>
        </section>
        <section>
          <div>
            <p>
              Tip Amount <br />/ person
            </p>
            <div className="tipOutput"></div>
          </div>
          <div>
            <p>
              Total <br />/ person
            </p>
            <div className="totalOutput"></div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
