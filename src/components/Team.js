import Footer from "./Footer";
import Header from "./Header";
import Background from "./../assets/sec_1_background.png";

export default function Team() {
  return (
    <>
      <section
        className="sec_1"
        style={{
          backgroundImage: `url(${Background})`,
          width: "auto",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Footer />
      </section>
    </>
  );
}
