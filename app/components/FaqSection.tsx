
export default function FaqSection() {
  const categories = [
    "Registration", 
    "Vaccination Schedule", 
    "Scheduling Appointment-general", 
    "Vaccination Schedule"
  ];

  const questions = [
    "13.What are vaccination schedules?",
    "14.How can I find the nearest vaccination center?",
    "15.What information is available regarding the vaccination schedules on Co-WIN?",
    "16.What information is available in the published vaccination sessions?"
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h1 className="fw-bold text-center mb-5" style={{ color: '#007a7a', fontSize: '38px' }}>
          Frequently Asked Questions
        </h1>

        <div className="row g-5">
          {/* Left Side: Illustration and Download */}
          <div className="col-md-4 text-center">
            <button className="btn btn-outline-teal rounded-pill px-4 py-2 mb-5 fw-bold" style={{ color: '#007a7a', borderColor: '#007a7a' }}>
              <span className="me-2">⬇</span> Download
            </button>
            <div className="mt-4">
              <img 
                src="https://cowin-page.vercel.app/Images/faq_Section.svg" 
                alt="FAQ Illustration" 
                className="img-fluid" 
                style={{ maxHeight: '300px' }}
              />
            </div>
          </div>

          {/* Right Side: Questions and Tabs */}
          <div className="col-md-8">
            {/* Tabs */}
            <div className="d-flex flex-wrap gap-2 mb-4 p-2 rounded-4" style={{ backgroundColor: '#f1fafa' }}>
              {categories.map((cat, index) => (
                <button 
                  key={index} 
                  className={`btn rounded-pill px-4 py-2 fw-bold ${index === 3 ? 'bg-white shadow-sm' : ''}`}
                  style={{ color: index === 3 ? '#007a7a' : '#777', border: 'none', fontSize: '14px' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Questions List */}
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: '#f9fcfc', border: '1px solid #e0eeee' }}>
              {questions.map((q, index) => (
                <div key={index} className="py-4 border-bottom last-child-border-0">
                  <h5 className="fw-bold mb-0" style={{ fontSize: '18px', color: '#333', cursor: 'pointer' }}>
                    {q}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}