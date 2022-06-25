import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

export default function Header() {
  return (
    <div
      className="header h-16 flex text-center justify-between"
      style={{
        padding: "0px 5vw",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to right, #0327cc, #0028b7, #0028a2, #00268d, #032478, #0c226f, #111f66, #141d5d, #181a5e, #1d175f, #22135f, #270e5f)",
      }}
    >
      {/* Left */}
      <Link className="left flex" to="/">
        <div className="logo mr-8">
          <img src={logo} />
        </div>
        <div className="company_name">
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            Aira Protocol
          </p>
        </div>
      </Link>

      {/* Right */}
      <div className="right flex">
        <nav
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            marginRight: "40px",
          }}
        >
          <Link
            to="/how-it-work"
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#FAFAFA",
              marginRight: "20px",
            }}
          >
            How It Works
          </Link>
          <Link
            to="/team"
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#FAFAFA",
              marginRight: "20px",
            }}
          >
            Team
          </Link>
        </nav>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 18px",
            width: "114px",
            height: "48px",
            background: "#1C64F2",
            borderRadius: "24px",
            color: "#ffffff",
          }}
        >
          Enter App
        </button>
      </div>
    </div>
  );
}
