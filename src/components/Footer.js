import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="text-danger">Whisper <span className="text-light">Starlight</span></h4>
            <p>Your gateway to unforgettable travel experiences around the world.</p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#/features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <div className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i> +91 98765 43210
            </div>
            <div className="mb-3">
              <i className="bi bi-envelope-fill me-2"></i> hello@whisperstarlight.com
            </div>
            <div>
              <a href="#/" className="text-light me-3 text-warning"><i className="bi bi-facebook"></i></a>
              <a href="#/" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#/" className="text-light me-3"><i className="bi bi-twitter-x"></i></a>
              <a href="#/" className="text-light"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Whisper Starlight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
