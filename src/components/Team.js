import Footer from "./Footer";
import Header from "./Header";
import Background from "./../assets/sec_1_background.png";
import trans from "./../assets/trans.png";



export default function Team() {

  const details_data = [
    {
      id: 1,
      icon: trans,
      title: "Zeo",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 2,
      icon: trans,
      title: "Kurtz — Co-Founder & COO",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 3,
      icon: trans,
      title: "Anthony — Lead Developer",
      description:
        "With these accrued gains in effciency, we aim to offer sector leading borrowing rates and staking yields to Liquidity providers.",
    },
    {
      id: 4,
      icon: trans,
      title: "Philippe — Developer",
      description:
        "Aira Protocol allows the utilization of traditional interest-bearing assets, asset tokens & LP share tokens to mint an over-collateralized stable coin.",
    },
    {
      id: 5,
      icon: trans,
      title: "Satsdart — Lead Advisor",
      description:
        "As Dan Elitzer explained in this post on super- fuid collateral - “If assets can be allocated for multiple  purposes  simultaneously, we  should see more liquidity, lower cost of borrowing, and more effective allocation of capital.”",
    },
    {
      id: 6,
      title: "Advisory Board",
      description:
        "Our trusted advisors bring a breadth of experience to our team from various fields; Such as that related to market sentiments, tokenomics, marketing, strategy, networking.",
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
        }
        }
      >
        <div className="mt-40">
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
          className="grid grid-cols-3 mt-40 gap-40 grid-rows-2 lg:grid-cols-2 lg:grid-rows-4"
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
                className="justify-center align-middle text-center "
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
                  <img src={item.icon === null ? "" : item.icon} />
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
              Get started now.
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "white",
              }}
            >
              User-friendly, optimizable, and secure staking.
            </p>
          </div>
          <button
            style={{
              width: "232px",
              height: "60px",
              borderRadius: "32px",
              background: "#1C64F2",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              color: "#ffffff"
            }}
          >
            Launch App
          </button>
        </div>
        <Footer />
      </section>


    </>
  );
}
