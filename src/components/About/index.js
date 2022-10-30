import React from "react";
import "./index.css";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="About">
      There are many types of portfolios including the market portfolio and the
      zero-investment portfolio. A portfolio's asset allocation may be managed
      utilizing any of the following investment approaches and principles:
      dividend weighting, equal weighting, capitalization-weighting,
      price-weighting, risk parity, the capital asset pricing model, arbitrage
      pricing theory, the Jensen Index, the Treynor ratio, the Sharpe diagonal
      (or index) model, the value at risk model, modern portfolio theory and
      others. There are several methods for calculating portfolio returns and
      performance. One traditional method is using quarterly or monthly
      money-weighted returns; however, the true time-weighted method is a method
      preferred by many investors in financial markets. There are also several
      models for measuring the performance attribution of a portfolio's returns
      when compared to an index or benchmark, partly viewed as investment
      strategy.
    </div>
  );
}

export default About;
