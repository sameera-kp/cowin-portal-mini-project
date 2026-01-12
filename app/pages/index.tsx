

"use client";

import React, { useState } from 'react';

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState('pin');

  return (
    <div className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
      <div className="card shadow border-0 p-4 rounded-4">
        <h4 className="text-center mb-4 fw-bold">Search Your Nearest Vaccination Center</h4>
        
        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group bg-light p-1 rounded-pill">
            <button 
              className={`btn rounded-pill px-4 ${activeTab === 'pin' ? 'bg-teal text-white' : 'text-dark border-0'}`}
              onClick={() => setActiveTab('pin')}
            >By PIN</button>
            <button 
              className={`btn rounded-pill px-4 ${activeTab === 'district' ? 'bg-teal text-white' : 'text-dark border-0'}`}
              onClick={() => setActiveTab('district')}
            >By District</button>
          </div>
        </div>

        {/* Input Field */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group input-group-lg shadow-sm">
              <input 
                type="text" 
                className="form-control border-end-0" 
                placeholder={activeTab === 'pin' ? "Enter your PIN" : "Select District"} 
              />
              <button className="btn btn-warning px-5 fw-bold text-white border-start-0">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}