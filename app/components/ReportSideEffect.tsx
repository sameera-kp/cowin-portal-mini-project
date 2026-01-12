
export default function ReportSideEffect() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image */}
          <div className="col-md-6 text-center order-2 order-md-1">
            <img 
              src="https://cowin-page.vercel.app/Images/reports-aefi.svg" 
              alt="Report Side Effect Illustration" 
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center text-md-start order-1 order-md-2 mb-5 mb-md-0">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '42px' }}>
              Report Side Effect
            </h1>
            <p className="text-secondary mb-5" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              If you have experienced any side effect after COVID-19 vaccination, it can be reported on Co-WIN using your registered mobile number.
            </p>
            <button 
              className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" 
              style={{ backgroundColor: '#007a7a', color: 'white', border: 'none' }}
            >
              Report Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}