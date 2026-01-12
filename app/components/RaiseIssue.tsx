
export default function RaiseIssue() {
  const issues = [
    {
      title: "Merge Certificates",
      desc: "In case you have multiple certificates of Dose 1 generated from different accounts, you can merge them into the final vaccination certificate."
    },
    {
      title: "Add Passport",
      desc: "You can link your passport to your vaccination certificate. By adding a passport to your vaccination certificate you can submit a request and get an international travel certificate."
    },
    {
      title: "Report Unknown Member",
      desc: "If there are any unknown members are associated with your account, you can remove them from your account by reporting unknown members."
    },
    {
      title: "Transfer Member To New Number",
      desc: "You can transfer members associated with your existing account to the new mobile number."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#007a7a' }}>
      <div className="container text-center text-white">
        <h1 className="fw-bold mb-4" style={{ fontSize: '42px' }}>Raise An Issue</h1>
        <p className="mb-5 mx-auto" style={{ fontSize: '18px', maxWidth: '800px', opacity: '0.9' }}>
          Raise an issue or get solutions to your Co-WIN account and vaccination certificate related issues instantly.
        </p>

        <div className="row g-4">
          {issues.map((issue, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-dark bg-white">
                <h5 className="fw-bold mb-4" style={{ color: '#007a7a' }}>{issue.title}</h5>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                  {issue.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}