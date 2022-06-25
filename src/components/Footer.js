import logo from "./../assets/logo.png";

export default function Footer() {
  return (
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
            marginLeft: "30px"
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
