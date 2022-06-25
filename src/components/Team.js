import Footer from "./Footer";
import Header from "./Header";
import Background from "./../assets/sec_1_background.png";
import A1 from "./../assets/ic_1.png";
import A2 from "./../assets/ic_2.png";
import A3 from "./../assets/ic_3.png";

export default function Team() {
  const details_data = [
    {
      id: 1,
      icon: A1,
      title: "Utilization",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 2,
      icon: A2,
      title: "Liquidity",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      icon: A3,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
    {
      id: 4,
      icon: A1,
      title: "Utilization",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 5,
      icon: A2,
      title: "Liquidity",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 6,
      icon: A3,
      title: "Efficiency",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
  ];
  return (
    <>
      <Header />
      <section
        className="sec_1 "
        style={{
          backgroundImage: `url(${Background})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "2% 8%",
          boxShadow: "0px",
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
              Meet the team
            </p>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "500",
                color: "white",
              }}
            >
              We are a family of entrepreneurs, creators, builders and experts.
              We have a<br></br> combined experience of 20 years of experience
              in blah, blah, blah, and more.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-3 mt-40 gap-40 grid-rows-2"
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
        <Footer/>
      </section>

            
    </>
  );
}
