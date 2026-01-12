
'use client';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { name: "DigiLocker", img: "https://cowin-page.vercel.app/Images/digilocker_new_Logo.svg" },
    { name: "Aarogya Setu", img: "https://cowin-page.vercel.app/Images/arogya_setu_logo1.svg" },
    { name: "MyGov", img: "https://cowin-page.vercel.app/Images/my_gov_new_logo.svg" },
    { name: "UMANG", img: "https://cowin-page.vercel.app/Images/umang_new_logo.svg" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f8fcfc' }}>
      <div className="container text-center">
        <h1 className="fw-bold mb-5" style={{ color: '#007a7a', fontSize: '38px' }}>Our Partners</h1>
        
        <div className="row align-items-center">
          {/* Left Side: Illustration */}
          <div className="col-lg-4 d-none d-lg-block">
            <motion.img 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="https://cowin-page.vercel.app/Images/partners_page.svg" 
              alt="Partners Illustration" 
              className="img-fluid"
            />
          </div>

          {/* Right Side: Partner Logos Grid */}
          <div className="col-lg-8">
            <div className="row g-3">
              {partners.map((partner, index) => (
                <div key={index} className="col-md-3 col-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-3 rounded-4 shadow-sm border d-flex align-items-center justify-content-center"
                    style={{ height: '100px' }}
                  >
                    <img src={partner.img} alt={partner.name} className="img-fluid" style={{ maxHeight: '50px' }} />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
              <button 
                onClick={scrollToTop}
                className="btn btn-lg rounded-pill px-5 py-2 fw-bold text-white shadow-sm" 
                style={{ backgroundColor: '#007a7a', border: 'none' }}
              >
                View More
              </button>
              <button 
                className="btn btn-lg rounded-pill px-5 py-2 fw-bold shadow-sm" 
                style={{ color: '#007a7a', border: '2px solid #007a7a', backgroundColor: 'transparent' }}
              >
                Register As Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}