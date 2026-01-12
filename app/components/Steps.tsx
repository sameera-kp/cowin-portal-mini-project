
export default function Steps() {
  const steps = [
    {
      step: "Step 1",
      title: "Book an Appointment on Co-WIN or Walk into any Vaccination Center",
      link: "How to Book Your Appointment on Co-WIN?",
      img: "https://cowin-page.vercel.app/Images/Step_1.svg"
    },
    {
      step: "Step 2",
      title: "Get Your Vaccination Safely at the Time of Your Appointment",
      link: "Dos And Dont's For Getting Vaccinated",
      img: "https://cowin-page.vercel.app/Images/Step_2.svg"
    },
    {
      step: "Step 3",
      title: "Download Your Vaccination Certificate from Co-WIN and Wait for Dose #2",
      link: "Download Your Vaccine Certificate",
      img: "https://cowin-page.vercel.app/Images/Step_3.svg"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8fcfc' }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: '#007a7a', fontSize: '32px' }}>
          Get Vaccinated in 3 Easy Steps
        </h2>
        
        <div className="row g-4 justify-content-center align-items-start">
          {steps.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
              <div className="mb-3">
                <span className="badge rounded-pill border px-4 py-2 bg-white shadow-sm" 
                      style={{ color: '#007a7a', fontWeight: '600', minWidth: '100px' }}>
                  {item.step}
                </span>
              </div>

              {/* 2. Content Card */}
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white w-100" 
                   style={{ maxWidth: '280px', height: '420px' }}>
                
                {/* Image Area */}
                <div className="p-4 d-flex justify-content-center align-items-center" style={{ height: '160px' }}>
                  <img 
                    src={item.img} 
                    alt={item.step} 
                    className="img-fluid" 
                    style={{ maxHeight: '110px', objectFit: 'contain' }} 
                  />
                </div>

                {/* Teal Text Area */}
                <div className="p-3 text-white d-flex align-items-center justify-content-center text-center" 
                     style={{ backgroundColor: '#007a7a', flexGrow: 1 }}>
                  <p className="mb-0 fw-medium" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {item.title}
                  </p>
                </div>

                {/* Footer Link Area */}
                <div className="p-3 bg-white border-top border-light mt-auto">
                  <a href="#" className="text-decoration-none fw-bold" style={{ color: '#007a7a', fontSize: '12px' }}>
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}