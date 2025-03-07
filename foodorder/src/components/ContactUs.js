const Contact=()=>{

  return (
    <div className="contactuspage">
      <div className="contactus-info">
        <h1 className="contactustitle">Contact Us</h1>
        <p className="contactpara">Need to get in touch with us?Either Fill Out the form with your Enguiry or</p>
        <p className="contactpara">Find the departmental email you'd like to contact</p>
      </div>
      <div className="contactusform" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f3f3', padding: '20px' }}>
      <form style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Contact Us</h2>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#333', fontWeight: '500' }}>First Name</label>
          <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#333', fontWeight: '500' }}>Last Name</label>
          <input type="text" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#333', fontWeight: '500' }}>Email</label>
          <input type="email" style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', color: '#333', fontWeight: '500' }}>What We Can Help You With?</label>
          <textarea rows={5} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
        </div>
        
        <button style={{ width: '100%', backgroundColor: '#007BFF', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}>
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact;