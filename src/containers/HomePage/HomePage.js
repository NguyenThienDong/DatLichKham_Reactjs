import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import SectionBasic from "./SectionBasic/SectionBasic";

class Home extends Component {
  render() {
    return (
      <div style={{ minHeight: "100vh", overflow: "auto" }}>
        <Header />
        <Banner />
        <SectionBasic />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
