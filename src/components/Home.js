import Header from "./Header";
import screenshot from "./../assets/screenshot.png";
import IC1 from "./../assets/ic_1.png";
import IC2 from "./../assets/ic_2.png";
import IC3 from "./../assets/ic_3.png";
import logo from "./../assets/logo.png";
import logo2 from "./../assets/logo2.png";
import Footer from "./Footer";
import "./style.css";
import "./../assets/style/Home.css";
import Background from "./../assets/home.png";
import Background2 from "./../assets/home-bg-2.png";

export default function Home() {
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

  return (
    <section
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="main_home"
        style={
          {
            // background: "#0D1F5B",
          }
        }
      >
        <Header />
        {/* TOp Frame  */}

        <div
          className="main"
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Section */}
          <div
            className="fram_1 justify-center text-center align-middle mt10 pt-10"
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
              width: "60%",
            }}
          >
            <p
              className="title font-pp mt-40"
              style={{
                color: "white",
                fontSize: "4rem",
                fontWeight: "800",
                textAlign: "center",
                lineHeight: "130%",
                height: "auto",
              }}
            >
              To democratize access to capital effcient lending and borrowing.
            </p>
            <p
              className="subtitle mt-8"
              style={{
                fontFamily: "Inter",
                fontSize: "24px",
                color: "#FAFAFA",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              We are building a protocol to create a capital-efficient and
              liquid money market with an innovative interface that allows wider
              access through a frictionless user experience.
            </p>

            {/* Buttons grupe */}
            <div className="btn-grupe flex justify-center mt-10">
              <button
                className="btn mr-6"
                style={{
                  alignItems: "center",
                  width: "292px",
                  height: "54px",
                  padding: "12px 18px",
                  borderRadius: "32px",
                  background: "#1C64F2",
                  color: "white",
                }}
              >
                Enter App
              </button>
              <button
                className="btn ml-6"
                style={{
                  alignItems: "center",
                  width: "292px",
                  height: "54px",
                  padding: "12px 18px",
                  borderRadius: "32px",
                  background: "#E5E7EB",
                  color: "black",
                }}
              >
                Our Docs
              </button>
            </div>
          </div>
          {/* Image Screenshot */}
          <img
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              borderRadius: "24px",
            }}
            src={screenshot}
            className="border-white border-4 rounded-sm mt-48"
          />
          {/* About */}
          <div
            className="about"
            style={{
              marginLeft: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              // background: "#0D1F5B",
            }}
          >
            {/* Information */}

            <div
              style={{
                width: "100%",
              }}
            >
              <p
                className="title mt-24"
                style={{
                  fontSize: "64px",
                  color: "white",
                  fontFamily: "PP Neue Machina",
                  color: "#FAFAFA",
                }}
              >
                What is Aira Protocol?
              </p>
              <p
                className="subtitle"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                }}
              >
                Aira Protocol is a collateralized debt platform, with a more
                expansive choice of asset options to <br></br>mint a USD stable coin
                using Collateralized Debt Positions (CDPs).
              </p>
            </div>

            {/* Grid */}
            <div
              className="grid grid-cols-3 mt-20 gap-40"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                display: 'flex',
                width: "70%",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {details_data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="justify-center align-middle text-center card"
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        // marginLeft: "55%",
                        // transform: "translateX(-50%)",
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
          </div>{" "}
          {/* About */}
          <div
            className="about mt-40"
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              background: "#0D1F5B",
              padding: "0% 20%",
            }}
          >
            {/* Information */}
            <div>
              <p
                className="title"
                style={{
                  fontSize: "64px",
                  color: "white",
                  fontFamily: "pp neue machina",
                  color: "#FAFAFA",
                  fontWeight: "800",
                  lineHeight: "130%",
                  fontStyle: "normal",
                  // height: "83px",
                }}
              >
                How is works?
              </p>
              <p
                className="subtitle mt-8"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                }}
              >
                We are building a protocol that increases capital efficiency in
                the DeFi Ecosystem by expanding its capabilities and venturing
                into an untapped market.
              </p>
              <p
                className="mt-8"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#FAFAFA",
                  textDecoration: "underline",
                }}
              >
                Learn more about our process
              </p>
            </div>

            {/* Grid */}
            <div
              className="grid gap-4 grid-cols-5 mt-20 w-10/12 backdrop-blur-sm bg-white/30"
              style={{
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                border: "1px solid white",
                borderRadius: "40px",
                transform: "translateX(-50%)",
                marginLeft: "50%",
                height: "auto",
                padding: "2vw",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "1vw",
                  display: "block",
                  justifyContent: "space-around",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "30vh",
                }}
              >
                <div
                  className="sh shadow-xl mt-5 p-2 rounded-xl"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  LP Tokens from major pools
                </div>
                <div
                  className="sh shadow-xl rounded-xl mt-5 p-2"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  Regular Tokens
                </div>
                <div
                  className="sh shadow-xl rounded-xl mt-5 p-2"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  Interest Bearing Tokens{" "}
                </div>
              </div>
              <div className="svg_style">
                <svg
                  className="arrow_svg"
                  style={{
                    color: "white",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="180"
                  height="180"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg></div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  minHeight: "30vh",
                  background: "#fff",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  padding: "1vw",
                }}
              >
                <img src={logo2} />
              </div>
              <div className="svg_style">
              <svg
                className="arrow_svg"
                style={{
                  color: "white",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="180"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  background: "#fff",
                  borderRadius: "20px",
                  justifyContent: "space-around",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "1vw",
                  display: "block",
                  minHeight: "30vh",
                }}
              >
                <div
                  className="sh shadow-xl rounded-xl mt-5 p-2"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  Redeploy to LP Farms
                </div>
                <div
                  className="sh shadow-xl rounded-xl mt-5 p-2"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  Build up your positions
                </div>
                <div
                  className="sh shadow-xl rounded-xl mt-5 p-2"
                  style={{
                    fontFamily: "pp neue machina",
                  }}
                >
                  Use capital everywhere
                </div>
              </div>
            </div>
          </div>
          {/* Get started */}
          <div
            className="pt-20 w-10/12 get_start"
            style={{
              transform: "translateX(-50%)",
              marginLeft: "50%",
              justifyContent: "space-between",
              display: "flex",
              marginLeft: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              background: "#0D1F5B",
              padding: "3% 20%",
            }}
          >
            {/* Left */}
            <div className="block justify-start text-start">
              <p
                className="get-start"
                style={{
                  color: "white",
                  fontSize: "48px",
                  fontFamily: "PP Neue Machina",
                }}
              >
                Get started now.
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontStyle: "normal",
                  color: "white",
                }}
              >
                User-friendly, optimizable, and secure staking.
              </p>
            </div>
            {/* Right */}
            <button
              className="btn"
              style={{
                width: "232px",
                height: "54px",
                background: "#1C64F2",
                borderRadius: "32px",
                color: "white",
                textAlign: "center",
                alignItems: "center",
                marginTop: "20px"
              }}
            >
              Launch App
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className=""
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            background: "#0D1F5B",
            padding: "3% 10%",
          }}
        >
          <Footer />
        </div>
      </div>
    </section>
  );
}
