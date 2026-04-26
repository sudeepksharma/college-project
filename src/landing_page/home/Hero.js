import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="https://sudeepsharma.github.io/college-project/media/images/homeHero.png"
          alt="Hero-Image"
          className="mb-5"
        ></img>
        <h1 className="mb-5 fs-3">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
