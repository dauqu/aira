import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";
import "./../assets/style/Header.css";


export default function Header() {
  const [scroll, setScroll] = useState([]);

  setInterval(() => {
    setScroll(window.scrollY);
  }, 100);
  const location = useLocation();
  console.log(location.pathname)


  const menu = [
    {
      id: 1,
      name: "Home",
      pathname: "/"
    },
    {
      id: 2,
      name: "How It Works",
      pathname: "/how-it-work"
    },
    {
      id: 3,
      name: "Team",
      pathname: "/team"
    },
  ]
  return (
    <div
      className="header_main h-16 flex text-center justify-between"
      style={{
        padding: "3rem 5vw",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        zIndex: "100",
        opacity: "0.8",
        backgroundColor: scroll > 100 ? "#194B97" : "#00000000",
        // backgroundImage:
        //   "linear-gradient(to right, #0327cc, #0028b7, #0028a2, #00268d, #032478, #0c226f, #111f66, #141d5d, #181a5e, #1d175f, #22135f, #270e5f)",
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




          {menu.map((item) => {
            return (
              <Link
                className={location.pathname === item.pathname ? "underline" : "" + " hover:underline"}
                key={item.id}
                to={`${item.pathname}`}
                style={{
                  fontFamily: "Inter",
                  fontSize: "1rem",
                  color: "#FAFAFA",
                  marginRight: "20px",
                }}
              >
                {item.name}
              </Link>
            )
          })}
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
