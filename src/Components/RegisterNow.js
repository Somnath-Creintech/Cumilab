import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export const RegisterNow = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile]= useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
  
    const handleRegistration = (event) => {
      event.preventDefault();
      // Handle registration logic here
      // You can make an API call to register the user with the provided details
      // or perform any other necessary operations
      console.log("Registration submitted:", {
        email,
        password,
        mobile,
        repeatPassword
      });
    };
    return(
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                  <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">		
                      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                          <div className="w-lg-500px p-10">
              <form className="form w-100" novalidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="../../demo34/dist/authentication/layouts/corporate/sign-in.html" action="#"
                     onSubmit={handleRegistration}>
                              <div className="separator separator-content my-14">
                                      <h1 className="w-300px text-dark-800 fw-semibold fs-0">Register Now</h1>
                                  </div>
                  {/* email */}
                  <div className="fv-row mb-8">
            
            <input
              type="text" placeholder="Email*" name="email" autocomplete="off" className="form-control bg-transparent"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* mobile */}
          <div className="fv-row mb-8">
          
            <input
              type="numbers" placeholder="Mobile Number*" name="phone" autocomplete="off" className="form-control bg-transparent"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            </div>
          {/* password */}
          <div className="fv-row mb-8" data-kt-password-meter="true">
            <div className="mb-1">
            <div className="position-relative mb-3">
            
            <input
              className="form-control bg-transparent" type="password" placeholder="Password*" name="password" autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                                  <i className="bi bi-eye-slash fs-2"></i>
                                                  <i className="bi bi-eye fs-2 d-none"></i>
                                              </span>
            </div>
            <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                              <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                              <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                              <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                              <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                                          </div>
            </div>
            <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
          </div>
          {/* repeatePassword */}
          <div  className="fv-row mb-8">
            
            <input
              placeholder="Repeat Password*" name="confirm-password" type="password" autocomplete="off" className="form-control bg-transparent"
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          {/* terms and condition */}
          <div className="fv-row mb-8">
                                      <label className="form-check form-check-inline">
                                          <input className="form-check-input" type="checkbox" name="toc" value="1" />
                                          <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
                                          <a href=" " className="ms-1 link-primary">Terms & Conditions</a></span>
                                      </label>
                                  </div>
                  {/* submit button */}
                  <div className="d-grid mb-10">
                                      <button type="submit" id="kt_sign_up_submit" className="btn btn-dark">
                                          <span className="indicator-label">Sign up</span>								
                                          <span className="indicator-progress">Please wait...
                                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>								
                                      </button>
                                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
                                  <Link to="/login"  className="link-primary fw-semibold">Sign in</Link></div>
              </form>
              </div>  
            </div>    
          </div>
          {/* logo */}
          <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}>				
                      <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">					
                          <a href=" " className="mb-0 mb-lg-12">
                              <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-60px h-lg-65px" />
                          </a>
                      </div>		
                  </div>
        </div>        
      </div>
    )
}