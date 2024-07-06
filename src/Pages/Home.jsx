import React from "react";
import home1 from "../assets/images/homeImage/home1.png";
import home2 from "../assets/images/homeImage/home2.jpg";
import home3 from "../assets/images/homeImage/home3.png";
function Home() {
  return (
    <div className="home-container">
      <div>
        <img src={home1} width="320px"></img>
      </div>
      <div>
        <img src={home3} width="150px"></img>
        <h1 className="home-heading my-4">
          Discover a Wide Range of Skincare Essential
        </h1>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          quo ratione porro sapiente nemo dolores neque quas debitis? Aliquid
          blanditiis amet sequi laboriosam labore facere modi.
        </p>
        <button className="home-button">Shop Now</button>
      </div>
      <div>
        <img src={home2} width="220px"></img>
      </div>
    </div>
  );
}

export default Home;
