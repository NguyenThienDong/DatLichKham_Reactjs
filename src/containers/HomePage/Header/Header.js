import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import { AiFillQuestionCircle, AiOutlineMenu } from "react-icons/ai";

class Header extends Component {
  render() {
    return (
      <div className="home-header-container container">
        <div className="home-header-content">
          <div className="left-content">
            <AiOutlineMenu className="icon-menu" />
            <div className="header-logo"></div>
          </div>
          <div className="center-content">
            <div className="sub-content">
              <div className="title-content">Chuyên khoa</div>
              <div className="text-content">Tìm theo bác sĩ chuyên khoa</div>
            </div>
            <div className="sub-content">
              <div className="title-content">Cơ sở y tế</div>
              <div className="text-content">Chọn bệnh viện phòng khám</div>
            </div>
            <div className="sub-content">
              <div className="title-content">Bác sĩ</div>
              <div className="text-content">Chọn bác sĩ giỏi</div>
            </div>
            <div className="sub-content">
              <div className="title-content">Gói khám</div>
              <div className="text-content">Khám sức khỏe tổng quát</div>
            </div>
          </div>
          <div className="right-content">
            <AiFillQuestionCircle color="#45c3d2" />
            <span className="text-help">Hỗ trợ</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
