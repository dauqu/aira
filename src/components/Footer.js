import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import twitter from "./../assets/twitter.png";

export default function Footer() {
  return (
    <>
      <div
        className="header h-16 flex text-center justify-between mt-20"
        style={{
          padding: "0px 5vw",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="left w-auto flex">
          <div className="logo"></div>
          <div className="company_name">
            <img src={logo} />
          </div>

          <nav
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              marginRight: "40px",
              marginLeft: "30px",
            }}
          >
            <li
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FAFAFA",
                marginRight: "20px",
              }}
            >
              How It Works
            </li>
            <li
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#FAFAFA",
                marginRight: "20px",
              }}
            >
              Team
            </li>
          </nav>
        </div>

        {/* Right */}
        <div className="right flex">
          <div
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "100px",
              margin: "0px 10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>

          <div
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "100px",
              margin: "0px 10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <div
            style={{
              color: "white",
              padding: "10px",
              borderRadius: "100px",
              margin: "0px 10px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "auto",
          height: "auto",
          borderTop: "1px solid white",
          display: "flex",
          background: "#0D1F5B",
          padding: "10px 6%",
          justifyContent: "end", 

        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "Inter",
          }}
        >
          © 2021, Aira Protocol. All Rights Reserved.
        </p>
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "Inter",
            marginLeft: "10px"
          }}
        >
          Privacy Policy • Terms and conditions
        </p>
      </div>
    </>
  );
}
