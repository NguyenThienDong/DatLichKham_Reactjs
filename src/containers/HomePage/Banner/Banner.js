import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Banner.scss";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiFillExperiment,
} from "react-icons/ai";
import { FaHospitalAlt, FaTooth, FaAmbulance } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiHospitalLine, RiMentalHealthFill } from "react-icons/ri";
import { GrEmergency } from "react-icons/gr";

class Banner extends Component {
  render() {
    return (
      <div className="home-banner-container">
        <div className="banner-content-up">
          <div className="title1">NỀN TẢNG Y TẾ</div>
          <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
          <div className="search">
            <AiOutlineSearch />
            <input
              type="text"
              className="input-search"
              placeholder="Tìm phòng khám"
            />
            <AiOutlineClose />
          </div>
        </div>
        <div className="banner-content-down">
          <div className="list-options">
            <div className="option">
              <div className="option-logo">
                <FaHospitalAlt className="option-icon" />
              </div>
              <div className="option-title">Khám chuyên khoa</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <IoIosPhonePortrait className="option-icon" />
              </div>
              <div className="option-title">Khám từ xa</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <RiHospitalLine className="option-icon" />
              </div>
              <div className="option-title">Khám tổng quát</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <AiFillExperiment className="option-icon" />
              </div>
              <div className="option-title">Xét nghiệm y học</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <RiMentalHealthFill className="option-icon" />
              </div>
              <div className="option-title">Sức khỏe tinh thần</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <FaTooth className="option-icon" />
              </div>
              <div className="option-title">Khám nha khoa</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <GrEmergency className="option-icon" />
              </div>
              <div className="option-title">Gói phẫu thuật</div>
            </div>
            <div className="option">
              <div className="option-logo">
                <FaAmbulance className="option-icon" />
              </div>
              <div className="option-title">Sản phẩm y tế</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
