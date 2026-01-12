
export default function DateCorrection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image Section */}
          <div className="col-md-6 text-center order-2 order-md-1">
            <img 
              src="https://cowin-page.vercel.app/Images/Date_Correction.svg" 
              alt="Vaccination Date Correction" 
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </div>

          {/* Right Content Section */}
          <div className="col-md-6 text-center text-md-start order-1 order-md-2 mb-5 mb-md-0">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '42px' }}>
              Vaccination Date Correction
            </h1>
            <p className="text-secondary mb-5" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              If the date printed on your vaccination certificate differs from the actual date of vaccine administration, you may raise a request for correction of the same by submitting a valid proof of correct vaccination date.
            </p>
            <button 
              className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" 
              style={{ backgroundColor: '#007a7a', color: 'white', border: 'none' }}
            >
              Update Date
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}