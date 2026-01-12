
export default function ChildrenVaccination() {
  const points = [
    "Covovax vaccine is now available for Children of the age group 12+ yrs in Private Vaccination Center. The time span between first and second dose of Covovax is 21 days. Children can be administered with the second dose of Covovax within a month.",
    "Children of the age group 12-14 yrs are now eligible for the Corbevax vaccine in Government Vaccination Center and in Private Vaccination Center 12+ yrs. The period between a first and second dose of Corbevax is 28 days.",
    "Children of the age group 12-14 yrs are now eligible for the Corbevax vaccine in Government Vaccination Center and in Private Vaccination Center 12+ yrs. The period between a first and second dose of Corbevax is 28 days."
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f4fbfb' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-7">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '38px' }}>
              Children vaccination
            </h1>
            
            <ul className="list-unstyled">
              {points.map((point, index) => (
                <li key={index} className="d-flex mb-4 text-secondary" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  <span className="me-3" style={{ color: '#2ec4b6', fontSize: '20px' }}>•</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <button 
                className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" 
                style={{ backgroundColor: '#007a7a', color: 'white', border: 'none' }}
              >
                Book Your Slot
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-5 text-center mt-5 mt-md-0">
            <img 
              src="https://cowin-page.vercel.app/Images/Children_Vaccination.svg" 
              alt="Children Vaccination" 
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}