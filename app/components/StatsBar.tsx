
export default function StatsBar() {
  return (
    <div className="py-3" style={{ backgroundColor: '#007a7a', color: 'white' }}>
      <div className="container">
        <div className="row align-items-center text-center">
          
          {/* Total Doses Section */}
          <div className="col-md-5 border-end border-light border-opacity-25">
            <div className="text-uppercase small fw-bold opacity-75">Total Vaccination Doses</div>
            <div className="h2 fw-bold mb-0">2,20,67,57,005</div>
          </div>

          {/* View More Button */}
          <div className="col-md-2 my-2 my-md-0">
            <button className="btn btn-warning rounded-pill px-4 fw-bold shadow-sm" style={{ backgroundColor: '#ffb400', border: 'none' }}>
              VIEW MORE
            </button>
          </div>

          {/* Vaccination Done Today Section */}
          <div className="col-md-5">
            <div className="text-uppercase small fw-bold opacity-75">Vaccination Done Today</div>
            <div className="h2 fw-bold mb-0">173</div>
          </div>

        </div>
      </div>
    </div>
  );
}