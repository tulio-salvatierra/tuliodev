import Button from "@mui/material/Button";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <dix className="row">
          <div className="col-8">
            <h1 className="text-image-mask">
              Hey, I'm Tulio, welcome to my portfolio!
            </h1>
            <h3>
              I’m Tulio, Software developer with a background in finance and
              freight. Here you'll see some of my projects and skills. Feel free
              to contact me, let me know how can I help you or your business!
            </h3>
            <Button
              className="button"
              sx={{
                color: "white",
                borderRadius: "50px",
                fontFamily: "Geist",
                padding: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "50%",
                textTransform: "none",
              }}
            >
              let's talk
            </Button>
          </div>
          <div className="col-4"></div>
        </dix>
      </section>
      <br />
      <div className="sep"></div>
      <br />
    </>
  );
}

export default Hero;
