"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden w-100"
      style={{
        paddingTop: "130px",
        minHeight: "80vh",
        backgroundColor: "#ffffff",
        backgroundImage: `radial-gradient(circle at 80% 60%, #fff9e6 0%, #ffffff 50%)`,
      }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 py-5">
            <h1
              className="fw-bold mb-3"
              style={{
                color: "#2c3e50",
                fontSize: "3.2rem",
                lineHeight: "1.2",
              }}
            >
              Historic & Unparalleled <br /> Achievement !
            </h1>
            <h2
              className="fw-bold mb-4"
              style={{ color: "#2c3e50", fontSize: "2.8rem" }}
            >
              India’s Glorious Journey of
            </h2>

            {/* 200 Crore Badge */}
            <div
              className="p-3 mb-4 border border-4 rounded-4 d-inline-block bg-white shadow-sm"
              style={{ borderColor: "#f36d33" }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#007a7a",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img
                    src="https://www.cowin.gov.in/assets/images/tick.svg"
                    alt="tick"
                    style={{ width: "25px" }}
                  />
                </div>
                <h1
                  className="mb-0 fw-bold"
                  style={{
                    color: "#f36d33",
                    fontSize: "3.5rem",
                    lineHeight: "0.9",
                  }}
                >
                  200 CRORE <br />
                  <span style={{ fontSize: "2.5rem" }}>VACCINATIONS</span>
                </h1>
              </div>
            </div>

            <div className="mt-4">
              <p
                className="fs-4 text-secondary mb-1"
                style={{ fontStyle: "italic" }}
              >
                "India is set to defeat Covid-19. Every Indian is making it
                possible."
              </p>
              <p className="fw-bold fs-5">- PM Narendra Modi</p>
            </div>
          </div>

          {/* Right Content: India Map with Flag */}
          <div className="col-lg-6 text-center position-relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src="https://cowin-page.vercel.app/Images/independance.svg"
              alt="India Map"
              className="img-fluid w-100"
              style={{
                maxHeight: "600px",
                filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.1))",
              }}
            />
            <div
              className="position-absolute d-none d-md-flex align-items-center text-white p-2 rounded-start shadow-lg"
              style={{
                right: "-12px",
                top: "40%",
                backgroundColor: "#007a7a",
                cursor: "pointer",
                zIndex: 10,
                transition: "0.3s",
              }}
            >
              <div
                className="position-fixed d-none d-md-flex align-items-center text-white p-2 rounded-start shadow-lg"
                style={{
                  right: "0", 
                  top: "50%", 
                  backgroundColor: "#007a7a",
                  cursor: "pointer",
                  zIndex: 1100, 
                  transition: "0.3s",
                  transform: "translateY(-50%)", 
                }}
              >
                <div className="me-2 ms-1 fs-4">📞</div>
                <div
                  style={{
                    fontSize: "11px",
                    lineHeight: "1.2",
                    textAlign: "left",
                  }}
                >
                  Support For <br />{" "}
                  <strong style={{ fontSize: "12px" }}>COVID-19</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
