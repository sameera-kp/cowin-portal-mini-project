
'use client'; 
import { useState } from 'react';

export default function WhatsNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    { title: "New feature to report side effects after covid-19 vaccination", desc: "Citizens can now report any adverse events following immunization directly through the portal." },
    { title: "Early administration of a precaution dose for international travel", desc: "Persons intending to travel abroad can avail the precaution dose before the prescribed time interval." },
    { title: "Covovax vaccine for Children", desc: "Covovax is now available for children above the age of 12 years in private centers." },
    { title: "Vaccination Status on social media platforms", desc: "Share your vaccination success with your friends and family on social media." },
    { title: "Download vaccination certificate for International Travel", desc: "Get your travel-ready certificate that complies with international standards." },
    { title: "Citizens can link their passports to Co-WIN certificates", desc: "Easily link your passport details to your vaccination record for seamless travel." },
    { title: "Introducing 'Raise an Issue' for vaccine certificate issues", desc: "A dedicated section to solve name, age, gender, or photo ID errors in your certificate." }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h1 className="fw-bold text-center mb-5" style={{ color: '#007a7a', fontSize: '36px' }}>
          What's New On Co-WIN ?
        </h1>

        <div className="row align-items-start">
          {/* Left and Middle Content: Accordion List */}
          <div className="col-md-8">
            <div className="row g-3">
              {features.map((item, index) => (
                <div key={index} className="col-md-12">
                  <div 
                    className="p-3 rounded-3 shadow-sm" 
                    style={{ 
                      backgroundColor: '#f9fcfc', 
                      border: '1px solid #e0eeee', 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 fw-bold" style={{ color: '#007a7a', fontSize: '16px' }}>
                        {item.title}
                      </p>
                      <span style={{ 
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: '#007a7a'
                      }}>
                        ▼
                      </span>
                    </div>
                    {openIndex === index && (
                      <div className="mt-3 pt-3 border-top text-secondary small">
                        {item.desc}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Illustration (Sticky on scroll) */}
          <div className="col-md-4 text-center sticky-top" style={{ top: '100px' }}>
            <img 
              src="https://cowin-page.vercel.app/Images/what's_new_on_cowin.svg" 
              alt="What's New Illustration" 
              className="img-fluid"
              style={{ maxHeight: '350px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}