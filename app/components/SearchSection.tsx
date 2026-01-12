
export default function SearchSection() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        {/* Title */}
        <h2 className="fw-bold mb-3" style={{ color: '#007a7a', fontSize: '36px' }}>
          Search Your Nearest Vaccination Center
        </h2>
        
        {/* Subtitle */}
        <p className="text-secondary mb-4" style={{ fontSize: '18px' }}>
          Get a preview list of the nearest centers and check availability of vaccination slots
        </p>

        {/* Login Link */}
        <div className="mb-5">
          <a href="#" className="fw-bold text-decoration-none" style={{ color: '#007a7a', fontSize: '20px border-bottom: 2px solid #007a7a' }}>
            Login to book your slot
          </a>
        </div>

        {/* Tabs / Options */}
        <div className="d-flex justify-content-center gap-5 mt-4">
          <div className="search-tab">
            <h4 className="fw-bold text-secondary px-3 py-2" style={{ cursor: 'pointer' }}>By District</h4>
          </div>
          <div className="search-tab" >
            <h4 className="fw-bold px-3 py-2" style={{color: '#007a7a',  cursor: 'pointer' }}>By Pin</h4>
          </div>
          <div className="search-tab">
            <h4 className="fw-bold text-secondary px-3 py-2" style={{ cursor: 'pointer' }}>On the Map</h4>
          </div>
        </div>
      </div>
    </section>
  );
}