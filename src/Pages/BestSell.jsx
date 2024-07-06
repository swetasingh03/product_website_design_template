import React from "react";
import best1 from "../assets/images/bestSellImage/best1.jpg";
import best2 from "../assets/images/bestSellImage/best2.png";

const bestSellData = [
  {
    content: "Premium Natural Ingredient",
    description:
      "Crafted from premium natural ingrediant ,ensuring superior quality optimal benefits and truly exceptional experience",
  },
  {
    content: "High-quality Raw Material ",
    description:
      "Crafted from premium natural ingrediant ,ensuring superior quality optimal benefits and truly exceptional experience",
  },
  {
    content: "End-to-end Beauty solution",
    description:
      "Crafted from premium natural ingrediant ,ensuring superior quality optimal benefits and truly exceptional experience",
  },
];
function BestSell() {
  return (
    <div className="best-sell-container">
      <div className="best-sell-desc">
        <p style={{ marginBottom: "0px" }}>Who we are</p>
        <h2>
          Best Selling Aesthetician <br></br> Skincare Brands
        </h2>
        {bestSellData &&
          bestSellData.length > 0 &&
          bestSellData.map((data) => {
            return (
              <div className="best-sell-feature my-4">
                <div className="best-sell-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-signpost-2-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.293.707A1 1 0 0 0 7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586A1 1 0 0 0 7.293.707" />
                  </svg>
                </div>
                <div className="best-sell-content">
                  <h4>{data.content}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div>
        <img src={best2} width="347px" className="best-sell-product"></img>
        <img src={best1} width="347px" className="best-sell-girl"></img>
      </div>
    </div>
  );
}

export default BestSell;
