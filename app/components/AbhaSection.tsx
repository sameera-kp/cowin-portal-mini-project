export default function AbhaSection() {
  const videoCards = [
    {
      title: "ABHA",
      img: "https://cowin-page.vercel.app/Images/abha-preview.jpg",
    },
    {
      title: "Benefits of ABHA",
      img: "https://cowin-page.vercel.app/Images/abha-previewimg.jpg",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8fcfc" }}>
      <div className="container text-center">
        <h1
          className="fw-bold mb-4"
          style={{ color: "#007a7a", fontSize: "38px" }}
        >
          ABHA (Health ID) and its Benefits
        </h1>

        <p
          className="text-secondary mx-auto mb-5"
          style={{ fontSize: "17px", maxWidth: "1000px", lineHeight: "1.8" }}
        >
          ABHA (earlier known as Health ID) is an acronym for Ayushman Bharat
          Health Account. Using ABHA (Health ID) is the first step towards
          creating safer and efficient digital health records for you and your
          family. It enables your interaction with participating healthcare
          providers, and allows you to receive your digital lab reports,
          prescriptions and diagnosis seamlessly from verified healthcare
          professionals and health service providers.
        </p>

        <div className="row g-4 justify-content-center mb-5">
          {videoCards.map((video, index) => (
            <div key={index} className="col-md-5">
              <div
                className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={video.img}
                  alt={video.title}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "contain",
                    backgroundColor: "#f0f8f8",
                    display: "block",
                    width: "100%",
                  }}
                />
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div
                    className="bg-dark bg-opacity-75 rounded-circle d-flex align-items-center justify-content-center shadow"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderLeft: "18px solid white",
                        borderBottom: "10px solid transparent",
                        marginLeft: "5px",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="card-body bg-white py-2">
                  <p className="mb-0 fw-bold text-secondary">{video.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm"
            style={{
              backgroundColor: "#007a7a",
              color: "white",
              border: "none",
            }}
          >
            Click Here to Know More
          </button>
        </div>
      </div>
    </section>
  );
}
