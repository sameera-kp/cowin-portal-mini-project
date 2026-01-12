
'use client';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: "ABHA(HEALTHID)", path: "/abha" },
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "VERIFY CERTIFICATE", path: "/verify" },
    { name: "FAQ", path: "/faq" },
    { name: "PARTNERS", path: "/partners" }
  ];

  return (
    <nav className="fixed-top w-100 shadow-sm" style={{ zIndex: 1050 }}>
      {/* 1. Top Mini Bar */}
      <div style={{ backgroundColor: '#095a5a', color: 'white' }} className="py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img src="https://www.cowin.gov.in/assets/images/emblem-gov.svg" alt="Emblem" style={{ height: '18px' }} />
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Ministry of Health and Family Welfare</span>
          </div>
          <div className="d-flex align-items-center gap-3 text-white">
             <div className="d-none d-md-flex gap-1">
                <span className="badge border px-2 cursor-pointer">A-</span>
                <span className="badge border px-2 cursor-pointer">A</span>
                <span className="badge border px-2 cursor-pointer">A+</span>
             </div>
             <select className="bg-transparent text-white border-0 small cursor-pointer" style={{ outline: 'none' }}>
                <option className="text-dark">English</option>
                <option className="text-dark">മലയാളം</option>
             </select>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar with Teal Color #017e7e */}
      <div style={{ backgroundColor: '#017e7e' }} className="py-2">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo - Home Link */}
          <Link href="/" className="text-decoration-none d-flex align-items-center gap-2">
            <h1 className="mb-0 fw-bold text-white d-flex align-items-center" style={{ fontSize: '26px' }}>
              C<span style={{ color: '#ffc107' }}>+</span>WIN
            </h1>
            <div className="text-white border-start ps-2 d-none d-sm-block" style={{ fontSize: '9px', lineHeight: '1.1' }}>
              Winning Over<br/>Covid-19
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                className="text-white fw-bold text-decoration-none hover-link"
                style={{ fontSize: '12px', letterSpacing: '0.5px' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Register Button Link */}
          <Link href="/register">
            <button className="btn btn-outline-light rounded-pill px-4 fw-bold" 
                    style={{ fontSize: '13px', borderWidth: '2px' }}>
              REGISTER/SIGN IN
            </button>
          </Link>
        </div>
      </div>

      {/* Hover Style */}
      <style jsx>{`
        .hover-link:hover {
          opacity: 0.8;
          transition: 0.3s;
        }
      `}</style>
    </nav>
  );
}
