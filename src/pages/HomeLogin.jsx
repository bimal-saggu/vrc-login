import "../index.css";
import { Link } from "react-router-dom";

const HomeLogin = () => {
  return (
    <div>
      <div>
        <div className="log">
          <div className="log__Title">
            <h3>Log in to your account</h3>
            <p>Welcome back! Please enter your details</p>
          </div>
          <div className="log__Form">
            <form>
              <div className="form_input-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="form_input-field">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" id="password" />
              </div>
              <div className="form_check">
                <div>
                  <input type="checkbox" />
                  <span className="rem">Remember me for 30 days</span>
                </div>
                <div>
                  <span className="frgt">Forgot password?</span>
                </div>
              </div>
              <div className="sbt_btn">
                <button type="submit">Sign in</button>
              </div>
              <div className="form_sign-up">
                <span>
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
