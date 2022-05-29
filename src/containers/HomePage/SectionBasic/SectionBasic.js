import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./SectionBasic.scss";

const SectionBasic = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <GrNext className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <GrPrevious className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <CContainer>
      <h3>Chuyên khoa phổ biến</h3>
      <CRow>
        <Slider {...settings}>
          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>

          <CCard className="w-98">
            <CCardImage
              orientation="top"
              src="https://cdn.bookingcare.vn/fr/w300/2019/12/13/120331-co-xuong-khop.jpg"
            />
            <CCardBody>
              <CCardText>Cơ xương khớp</CCardText>
            </CCardBody>
          </CCard>
        </Slider>
      </CRow>
    </CContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionBasic);
