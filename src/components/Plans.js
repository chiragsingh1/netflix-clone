import React, { useEffect, useState } from "react";
import "./Plans.css";

function Plans() {
  const [subscribe, setSubscribe] = useState("plan1");

  const netflixPlans = {
    plan1: {
      name: "Netflix Basic",
      price: "499",
      devices: "1",
      resolution: "720p",
    },
    plan2: {
      name: "Netflix Standard",
      price: "649",
      devices: "2",
      resolution: "1080p",
    },
    plan3: {
      name: "Netflix Premium",
      price: "799",
      devices: "4",
      resolution: "4K UHD + HDR",
    },
  };
  // &#x20b9;
  function handleClick(plan) {
    setSubscribe(plan);
  }
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className="plans">
      <h5>Renewable date: 04/09/2023</h5>
      {Object.entries(netflixPlans).map(([planId, planData]) => {
        return (
          <div key={planId} className="plans__plan">
            <div className="plans__info">
              <h5>{planData.name}</h5>
              <h6>
                {planData.resolution}, Devices {planData.devices}
              </h6>
              <button
                onClick={() => setSubscribe(planId)}
                className="plans__button"
                disabled={planId === subscribe ? true : false}
              >
                {planId === subscribe ? "Subscribed" : "Subscribe"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
