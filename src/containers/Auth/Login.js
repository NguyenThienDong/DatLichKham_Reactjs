import { push } from "connected-react-router";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Login.scss";
import {
  FaTwitter,
  FaGooglePlusG,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { set } from "lodash";

// import { FormattedMessage } from "react-intl";

// import adminService from "../services/adminService";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onShowPassword = () => setIsShowPassword(!isShowPassword);
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="form-login">
          <form action="#" className="login-content">
            <div class="head">Login</div>
            <div class="social">
              <h4>Connect with</h4>
              <ul>
                <li>
                  <Link to="" className="facebook w-100">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <a href="" className="twitter w-100">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="" className="google-plus w-100">
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
            </div>

            <div class="divider">
              <span>or</span>
            </div>

            <div class="input-field">
              <label for="email">Email</label>
              <input type="email" name="email" required="email" />
              <label for="password">Password</label>
              <div className="input-password">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  required
                />
                {isShowPassword ? (
                  <FaEyeSlash className="icon-eye" onClick={onShowPassword} />
                ) : (
                  <FaEye className="icon-eye" onClick={onShowPassword} />
                )}
              </div>
              <input type="submit" value="Login" />
              <p class="text-p">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
