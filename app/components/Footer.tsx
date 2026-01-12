
export default function Footer() {
  return (
    <footer className="w-100" style={{ backgroundColor: '#007a7a', color: 'white' }}>
      {/* Top Section - Green Part */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-3 text-uppercase border-bottom border-2 pb-2 d-inline-block">Vaccination Services</h6>
            <ul className="list-unstyled small opacity-90">
              <li>Register Members</li>
              <li>Search Vaccination Centers</li>
              <li>Book Vaccination Slots</li>
              <li>Manage Appointment</li>
              <li>Download Certificate</li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-3 text-uppercase border-bottom border-2 pb-2 d-inline-block">Platforms</h6>
            <ul className="list-unstyled small opacity-90">
              <li>Co-WIN International</li>
              <li>Vaccinator</li>
              <li>Department Login</li>
              <li>Verify Certificates</li>
              <li>Vaccination Statistics</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="fw-bold mb-3 text-uppercase border-bottom border-2 pb-2 d-inline-block">Resources</h6>
            <ul className="list-unstyled small opacity-90">
              <li>How To Get Vaccinated</li>
              <li>Dos and Don'ts</li>
              <li>Overview</li>
              <li>API Guidelines</li>
              <li>Open API's</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h6 className="fw-bold mb-3 text-uppercase border-bottom border-2 pb-2 d-inline-block">Support</h6>
            <div className="row g-2 small">
              <div className="col-6"><strong>Child</strong><br/>1098</div>
              <div className="col-6"><strong>Mental Health</strong><br/>08046110007</div>
              <div className="col-6 mt-2"><strong>Senior Citizens</strong><br/>14567</div>
              <div className="col-6 mt-2"><strong>NCW</strong><br/>7827170170</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-uppercase border-bottom border-2 pb-2 d-inline-block">Contact Us</h6>
            <p className="small mb-1">Helpline: +91-11-23978046 (Toll Free - 1075)</p>
            <p className="small">Technical Helpline: 0120-4473222</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Real Black & Full Width */}
      <div className="w-100 py-4" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-4">
              <p className="mb-0 small opacity-75">Copyright © 2021 Co-WIN. All Rights Reserved</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center gap-4 my-3 my-md-0">
              <img src="https://cowin-page.vercel.app/Images/national-health-authority.jpg" alt="NHA" style={{ height: '35px', filter: 'brightness(1)' }} />
              <img src="https://cowin-page.vercel.app/Images/undp-logo-vertical.svg" alt="UNDP" style={{ height: '35px', filter: 'brightness(1)' }} />
            </div>
            <div className="col-md-4 text-md-end small opacity-75">
              <span>Terms of Service</span>
              <span className="mx-2">|</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}