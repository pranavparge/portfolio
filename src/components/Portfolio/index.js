import React from "react";
import "./index.css";

function Portfolio({ portfolioRef }) {
  return (
    <div ref={portfolioRef} className="Portfolio">
      The term “portfolio” refers to any combination of financial assets such as
      stocks, bonds and cash. Portfolios may be held by individual investors or
      managed by financial professionals, hedge funds, banks and other financial
      institutions. It is a generally accepted principle that a portfolio is
      designed according to the investor's risk tolerance, time frame and
      investment objectives. The monetary value of each asset may influence the
      risk/reward ratio of the portfolio. When determining asset allocation, the
      aim is to maximise the expected return and minimise the risk. This is an
      example of a multi-objective optimization problem: many efficient
      solutions are available and the preferred solution must be selected by
      considering a tradeoff between risk and return. In particular, a portfolio
      A is dominated by another portfolio A' if A' has a greater expected gain
      and a lesser risk than A. If no portfolio dominates A, A is a
      Pareto-optimal portfolio. The set of Pareto-optimal returns and risks is
      called the Pareto efficient frontier for the Markowitz portfolio selection
      problem. Recently, an alternative approach to portfolio diversification
      has been suggested in the literatures that combines risk and return in the
      optimization problem.
    </div>
  );
}

export default Portfolio;
