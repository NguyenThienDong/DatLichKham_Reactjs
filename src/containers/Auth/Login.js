import { push } from "connected-react-router";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
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
import userService from "../../services/userService";
import { callbackWithAlert, showErrorAlert } from "../../helpers/functions";

const Login = (props) => {
  const [infoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onShowPassword = () => setIsShowPassword(!isShowPassword);

  const onChange = (e) => {
    setInfoLogin({
      ...infoLogin,
      [e.target.name]: e.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "ngoclan123@gmail.com",
      password: "123456",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        let res = await userService.handleLogin(data);
        console.log(res);
        callbackWithAlert(res, () => props.userLoginSuccess());
      } catch (error) {
        console.log(error);
        showErrorAlert("Lỗi hệ thống! Vui lòng thử lại sau");
      }
    },
  });
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="form-login">
          <form onSubmit={formik.handleSubmit} className="login-content">
            <div className="head">Login</div>
            <div className="social">
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

            <div className="divider">
              <span>or</span>
            </div>

            <div className="input-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label>Password</label>
              <div className="input-password">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />
                {isShowPassword ? (
                  <FaEyeSlash className="icon-eye" onClick={onShowPassword} />
                ) : (
                  <FaEye className="icon-eye" onClick={onShowPassword} />
                )}
              </div>
              <div className="text-danger">
                {formik.errors.password ? formik.errors.password : null}
              </div>
              <button type="submit">Login</button>
              <p className="text-p">
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
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
