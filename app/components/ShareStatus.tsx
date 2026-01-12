
export default function ShareStatus() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image: Mobile Share Illustration */}
          <div className="col-md-6 text-center order-2 order-md-1">
            <img 
              src="https://cowin-page.vercel.app/Images/share_illustration.svg" 
              alt="Share Vaccination Status" 
              className="img-fluid"
              style={{ maxHeight: '450px', objectFit: 'contain' }}
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6 text-center text-md-start order-1 order-md-2 mb-5 mb-md-0">
            <h1 className="fw-bold mb-4" style={{ color: '#007a7a', fontSize: '42px' }}>
              Share Your Vaccination Status
            </h1>
            <p className="text-secondary mb-5" style={{ fontSize: '20px', lineHeight: '1.6' }}>
              Be a Fighter! If you are fully or partially vaccinated, you can now share your vaccination status in your social circle. Let's encourage our friends and followers in joining India's battle against COVID-19.
            </p>
            <button 
              className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm" 
              style={{ backgroundColor: '#007a7a', color: 'white', border: 'none' }}
            >
              Share Your Status
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}