export const Section1 = () => {
  return (
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
          <input type="number" className="tip-custom" placeholder="Custom" />
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
  );
};
