
export default function PrecautionBanner() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f4fbfb' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '42px' }}>
              Free COVID Precaution Dose
            </h1>
            <p className="text-secondary mb-5" style={{ fontSize: '20px', maxWidth: '500px' }}>
              Now Precaution dose for 18-59 age group free at Government Vaccination Center.
            </p>
            <button 
              className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" 
              style={{ backgroundColor: '#007a7a', color: 'white', border: 'none' }}
            >
              Book Your Slot
            </button>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img 
              src="https://cowin-page.vercel.app/Images/free_covid_precaution_dose.svg" 
              alt="Vaccination Illustration" 
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}