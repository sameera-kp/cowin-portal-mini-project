
export default function PrecautionDoseInfo() {
  const guidelines = [
    "All fully vaccinated adult citizens (18+ and have taken 2 doses) are eligible for precaution dose from 10/04/2022. Eligible citizens can avail precaution dose at any Government or Private Vaccination Center. Citizens should carry their Final Certificate of vaccination (with details of both earlier doses). Citizens should use the same mobile number and ID card used for earlier doses.",
    "HCWs, FLWs and Citizens aged 60 year or more, shall continue to receive precaution dose vaccination at any CVC, including free of charge vaccination at Government Vaccination Center.",
    "For international travel, precaution dose can be administered to such beneficiary less than 9 months to at a minimum interval of 3 months (90 days) from the date of administration of the second dose as recorded on Co-WIN as per requirement of the destination country. All Vaccination Center in the State where precaution dose is being administered are eligible to administer precaution dose."
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f4fbfb' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Text Content */}
          <div className="col-md-7">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '38px' }}>
              Precaution Dose
            </h1>
            
            <ul className="list-unstyled">
              {guidelines.map((text, index) => (
                <li key={index} className="d-flex mb-4 text-secondary" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  <span className="me-3" style={{ color: '#2ec4b6', fontSize: '20px' }}>•</span>
                  {text}
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

          {/* Right Illustration Image */}
          <div className="col-md-5 text-center mt-5 mt-md-0">
            <img 
              src="https://cowin-page.vercel.app/Images/Precaution_dose.svg" 
              alt="Precaution Dose Vaccination" 
              className="img-fluid"
              style={{ maxHeight: '420px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}