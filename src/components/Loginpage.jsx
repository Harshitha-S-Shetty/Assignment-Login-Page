import React, { useState } from "react";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      style={{
        background: "url('bg_image.jpg') center/cover no-repeat",
        minHeight: "100vh",
        width: "80vw",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="row w-75 shadow-lg rounded overflow-hidden p-2 bg-white" style={{ maxWidth: "900px" }}>
          <div
            className="col-md-6 d-md-flex flex-column justify-content-between text-white p-4"
            style={{
              background: "url('bg_image.jpg') ",
              borderRadius: "18px",
            }}
          >
            <h6
              className="text-uppercase opacity-50"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "1px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                gap: "11px",
              }}
            >
              A Wise Quote
              <span
                style={{
                  flexGrow: 0,
                  borderBottom: "1px solid white",
                  opacity: "0.8",
                  width: "90px",
                  maxWidth: "100px",
                }}
              ></span>
            </h6>

            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}>
                Get<br /> Everything<br /> You Want
              </h2>
              <p className="small" style={{ fontFamily: "'Roboto', serif", opacity: "0.5", fontSize: '12px' }}>
                You can get everything you want if you work hard,<br /> trust the process, and stick to the plan.
              </p>
            </div>
          </div>

          <div className="col-md-6 bg-white d-flex flex-column align-items-center justify-content-center p-5">
            <div className="d-flex align-items-center mb-4">
              <img src="icon1.jpg" alt="Cogie Logo" width="17" height="16" className="me-2" />
              <strong style={{ fontFamily: "'Roboto', serif", opacity:'0.6', fontSize:'15px' }}>Cogie</strong>
            </div>

            <h4 className="fw-bold" style={{ fontFamily: "'Playfair Display', serif", opacity: "0.9" }}>
              Welcome Back
            </h4>
            <p className="text-muted text-center" style={{ fontFamily: "'Roboto', serif", fontSize: "12px" }}>
              Enter your email and password to access your account
            </p>

            <form
              className="w-100 px-3"
              style={{ maxWidth: "350px", fontFamily: "'Roboto', serif", fontSize: "12px" }}
              onSubmit={handleSubmit}
            >
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    fontSize: "11px",
                    padding: "8px",
                    height: "36px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      fontSize: "11px",
                      padding: "8px",
                      height: "36px",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                  <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                    <i className={`bi ${passwordVisible ? "bi-eye" : "bi-eye-slash"}`}></i>
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <div>
                  <input type="checkbox" id="rememberMe" className="me-2" />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#" className="text-decoration-none text-dark">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="btn btn-dark w-100 mb-2" style={{ fontSize: "12px" }}>
                Sign In
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                style={{ fontSize: "12px" }}
                onClick={handleGoogleSignIn}
              >
                <i className="bi bi-google me-2"></i> Sign In with Google
              </button>
            </form>

            <p className="mt-5" style={{ fontSize: "11px", marginTop: "30px" }}>
              Don’t have an account?{" "}
              <a href="#" className="fw-bold text-dark text-decoration-none">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
