import Header from "./Header";
import Background from "./../assets/sec_1_background.png";
import Background2 from "./../assets/sec_2_background.png";
import Background3 from "./../assets/sec_3_background.png";
import Background4 from "./../assets/sec_4_background.png";
import IC1 from "./../assets/mic_1.png";
import IC2 from "./../assets/mic_2.png";
import IC3 from "./../assets/mic_3.png";
import IC4 from "./../assets/mic_4.png";
import Footer from "./Footer";

export default function Work() {
  const details_data = [
    {
      id: 1,
      icon: IC1,
      title: "Utilization",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 2,
      icon: IC2,
      title: "Liquidity",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      icon: IC3,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
  ];

  const product_data = [
    {
      id: 1,
      title: "Seamless  Experience",
      description:
        "We aim to build a UI/UX experience from the ground up that simplifies the current deposit to borrowing flow and then deploys the same.",
    },
    {
      id: 2,
      title: "Staking Rewards",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      title: "Multi-Chain  Experience",
      description:
        "Our goal is to reach as many users as possible, which would mean deploying Aira Protocol to a number of L1s and L2s",
    },
    {
      id: 4,
      title: "Additonal Key Feature",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const growth_strategy = [
    {
      id: 1,
      icon: IC1,
      title: "Utilization",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 2,
      icon: IC2,
      title: "Liquidity",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      icon: IC3,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
    {
      id: 3,
      icon: IC4,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
  ];

  const our_roadmap = [
    {
      id: 1,
      title: "Phase One",
      description:
        "Between Uniswap & Curve we have over $13 billion in TVL, that lies untapped and ready to be deployed towards more productive tasks We are focusing on is stETH from Lido or other variants of staked ETH. There are $8b of stETH on the market, and we as a platform can provide efficient use of capital for users who are staking their ETH with Lido by allowing them to borrow against it to either hedge or just to get the extra liquidity.",
    },
    {
      id: 2,
      title: "Phase Two",
      description:
        "4-6 weeks post the first launch sprint, we aim to expand to add compatibility for roll-ups/L2s.  Followed by a  launch on AVAX, Aurora, and other EVM-compatible chains. This would be quite contingent on how we see EVM compatibility develop on the Cosmos ecosystem over the next few weeks as we see an opportunity to be exploited with untapped demand for feature-rich DeFi offerings.",
    },
    {
      id: 3,
      title: "Future Frontiers",
      description:
        "With the potential launch of our EUR, YUAN, YEN, JPY, and other stable coins that users can mint/borrow instead of the USD stable coin, this will lead us to offer FX trading capabilities in-house which will lead to extra revenues for the platform. And extra revenues lead to increased staking yields. After we are done with expansion to EVM chains, we will then begin our expansion into non-EVM chains such as Solana, Cosmos, Near, etc",
    },
  ];
  return (
    <>
      <Header />
      {/* Section 1 */}
      <section
        className="sec_1 "
        style={{
          backgroundImage: `url(${Background})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "8%",
        }}
      >
        <div className="">
          <div
            style={{
              justifyContent: "left",
              textAlign: "start",
            }}
          >
            <p
              style={{
                fontSize: "64px",
                fontWeight: "800",
                fontFamily: "PP Neue Machina",
                color: "white",
                fontStyle: "normal",
              }}
            >
              Aira Protocol is a <br></br> collateralized debt platform
            </p>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "500",
                color: "white",
              }}
            >
              with a more expansive choice of asset options to mint a USD stable
              coin using<br></br> Collateralized Debt Positions (CDPs).
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-3 mt-40 gap-40"
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {details_data.map((item) => {
            return (
              <div
                key={item.id}
                className="justify-center align-middle text-center"
              >
                <div
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    marginLeft: "55%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img src={item.icon} />
                </div>
                <p
                  className="mt-5"
                  style={{
                    fontSize: "24px",
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="mt-5"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${Background2})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "5% 10%",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "64px",
              color: "white",
              fontWeight: "800",
              fontFamily: "PP Neue Machina",
            }}
          >
            Key Product Differenciators
          </p>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "400",
              color: "white",
              fontFamily: "Inter",
            }}
          >
            We aim to provide users with a simple to interact process with
            detailed explanations unlike our <br></br> competitors. We want to
            stay away from creating unnecessary complicated design.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 mt-40 grid-rows-2 gap-20"
          style={{
            width: "70%",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            justifyContent: "left",
            alignItems: "start",
          }}
        >
          {product_data.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  justifyContent: "left",
                  alignItems: "start",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "30px",
                    color: "white",
                    fontFamily: "Inter",
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "white",
                    justifyContent: "left",
                    alignItems: "start",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3 */}
      <section
        style={{
          backgroundImage: `url(${Background3})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "4% 8%",
        }}
      >
        <div style={{}}>
          <p
            style={{
              fontSize: "64px",
              color: "white",
              fontFamily: "PP Neue Machina",
              fontWeight: "800",
            }}
          >
            Our Growth Strategy
          </p>
          <div
            className="grid grid-cols-2 mt-20 grid-rows-2 gap-5"
            style={{
              width: "70%",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              justifyContent: "left",
              alignItems: "start",
            }}
          >
            {growth_strategy.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    justifyContent: "left",
                    alignItems: "start",
                    textAlign: "left",
                    background: "#fff",
                    borderRadius: "25px",
                    padding: "10px",
                    height: "30vh",
                  }}
                >
                  <img src={item.icon} />
                  <p
                    style={{
                      fontSize: "24px",
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                      justifyContent: "left",
                      alignItems: "start",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        style={{
          backgroundImage: `url(${Background4})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "4% 8%",
        }}
      >
        <div style={{}}>
          <p
            style={{
              fontSize: "64px",
              color: "white",
              fontFamily: "PP Neue Machina",
              fontWeight: "800",
            }}
          >
            Our Roadmap
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              color: "white",
            }}
          >
            The idea is to first launch on ETH, the main consideration in this
            decision being the liquidity <br></br> on the mainnet. Our primary
            aim is to capture as much of this liquidity as possible.{" "}
          </p>
          <div
            className="grid grid-cols-3 mt-20 gap-20"
            style={{
              width: "70%",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              justifyContent: "left",
              alignItems: "start",
            }}
          >
            {our_roadmap.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    justifyContent: "left",
                    alignItems: "start",
                    textAlign: "left",
                    background: "#fff",
                    borderRadius: "25px",
                    padding: "10%",
                    height: "45vh",
                  }}
                >
                  <img src={item.icon} />
                  <p
                    style={{
                      fontSize: "24px",
                      color: "black",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "black",
                      justifyContent: "left",
                      alignItems: "start",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            width: "60%",
            height: "auto",
            transform: "translateX(-50%)",
            marginLeft: "50%",
            border: "1px solid white",
            alignItems: "center",
          }}
          className="mt-20 backdrop-blur-xl bg-white/30 rounded-xl flex justify-between p-8"
        >
          <div className="jus justify-start text-start">
            <p
              style={{
                fontSize: "48px",
                color: "white",
                fontFamily: "PP Neue Machina",
              }}
            >
              Get integrated.
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "white",
              }}
            >
              Easy integration, frictionless access, and safeness.
            </p>
          </div>
          <button
            style={{
              width: "232px",
              height: "60px",
              borderRadius: "32px",
              background: "#FAFAFA",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Get Docs
          </button>
        </div>
        <Footer className="mt-9" />
      </section>
    </>
  );
}
