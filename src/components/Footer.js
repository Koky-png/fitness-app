import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <h4>Information</h4>
          <p>We are dedicated to providing the best fitness experience.</p>
          <p>Our mission is to help you achieve your fitness goals.</p>
        </div>
        <div style={contactStyle}>
          <h4>Contact Us</h4>
          <p>Email: support@fitnessapp.com</p>
          <p>Phone: (254) 754567890</p>
          <p>Address: 123 Fitness St, Nairobi City, CA 12345</p>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>&copy; {new Date().getFullYear()} Fitness App. All rights reserved.</p>
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
};

const infoStyle = {
  flex: '1',
  padding: '0 20px',
};

const contactStyle = {
  flex: '1',
  padding: '0 20px',
};

const footerBottomStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Footer;