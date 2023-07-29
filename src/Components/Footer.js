import React from 'react';

const Footer = () => {
    return (
      <div
      id="kt_app_footer"
      className="app-footer d-flex flex-column flex-md-row align-items-center flex-center flex-md-stack py-2 py-lg-4"
      style={{ backgroundColor: '#17191E', color: 'white', bottom: 0, width: '100%' }}
    >
      <div className="text-dark order-2 order-md-1 mx-10">
        <span className="text-white fw-semibold me-1">© 2023</span>
        <a href=" " target="_blank" className="text-white text-hover-primary">CuMiLab | All Rights Reserved.</a>
      </div>
      <ul className="menu menu-white menu-hover-primary fw-semibold order-1 mx-7">
        <li className="menu-item">
          <a href=" " target="_blank" className="menu-link px-2">Privacy Policy</a>
        </li>
        <li className="menu-item">
          <a href=" " target="_blank" className="menu-link px-2">Terms of Service</a>
        </li>
      </ul>
    </div>
    )
}

export default Footer;