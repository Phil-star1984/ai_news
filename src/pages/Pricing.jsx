import React from "react";

function Pricing() {
  return (
    <>
      <div className="pricing_outer_container">
        <div className="pricing_inner_container">
          <h1>
            Our Prices for AI.Bro <br />
            Now available
          </h1>
          <div className="pricing_container">
            <div className="pricing_basic">
              <div>
                <h2>Basic</h2>
                <h1>$5/Mo</h1>
              </div>
              <div className="basic_usps">
                <h2>Your Value</h2>
                <p>✅︎ Limited access Daily News</p>
                <p>✅︎ Limited Access to our API</p>
                <p>✅︎ Limited Access to Learnings</p>
                <p>✅︎ Full access Profile</p>
              </div>
              <button>Choose Plan</button>
            </div>
            <div className="pricing_startup">
              <div>
                <h2>Startup</h2>
                <h1>$35/Mo</h1>
              </div>
              <div className="startup_usps">
                <h2>Your Value</h2>
                <p>✅︎ Full access Daily News</p>
                <p>✅︎ Full Access to our API</p>
                <p>✅︎ Full Access to Learnings</p>
                <p>✅︎ Full access Profile</p>
              </div>
              <button>Choose Plan</button>
            </div>
            <div className="pricing_enterprise">
              <div>
                <h2>Enterprise</h2>
                <h1>$150/Mo</h1>
              </div>
              <div className="enterprise_usps">
                <h2>Your Value</h2>
                <p>✅︎ Full access Daily News</p>
                <p>✅︎ Limited Access to our API</p>
                <p>✅︎ Limited Access to Learnings</p>
                <p>✅︎ Full access Profile</p>
              </div>
              <button>Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
