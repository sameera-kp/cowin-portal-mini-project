
'use client';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: "Vaccines Delivered", value: "2,20,58,60,116", sub: "+96" },
    { label: "Citizens Fully Vaccinated", value: "95.2 Crore", sub: "+10" },
    { label: "% of Fully Vaccinated", value: "92.66%", sub: "" }
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-5 bg-white overflow-hidden position-relative">
      <div className="container">
        
        {/* Header Row: Title and Button */}
        <div className="row align-items-center mb-5">
          <div className="col-md-8 text-md-start text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="fw-bold" 
              style={{ color: '#007a7a', fontSize: 'clamp(24px, 5vw, 38px)' }}
            >
              India Is Running The World’s Largest Vaccination Drive
            </motion.h1>
          </div>
          <div className="col-md-4 text-md-end text-center mt-3 mt-md-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="btn btn-outline-teal rounded-pill px-4 py-2 fw-bold border-2" 
              style={{ color: '#007a7a', borderColor: '#007a7a' }}
            >
              View Vaccination Dashboard
            </motion.button>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Left Side: Stats Bars */}
          <div className="col-lg-5">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <p className="mb-1 fw-bold" style={{ color: '#007a7a' }}>{stat.label}</p>
                <div 
                  className="d-flex align-items-center p-3 rounded-2 shadow-sm" 
                  style={{ backgroundColor: '#007a7a', color: 'white' }}
                >
                  <h2 className="mb-0 fw-bold" style={{ fontSize: '28px' }}>{stat.value}</h2>
                  {stat.sub && <span className="ms-2 badge bg-white text-teal" style={{ color: '#007a7a' }}>{stat.sub}</span>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center/Right Bottom: India Map */}
          <div className="col-lg-7 text-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src="https://cowin-page.vercel.app/Images/vaccination-drive.png" 
              alt="India Map" 
              className="img-fluid"
              style={{ maxHeight: '450px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}