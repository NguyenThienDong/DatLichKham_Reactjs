import Swal from "sweetalert2";
import * as _ from "lodash";
import { ERROR_CODES } from "./constants";

export const showSuccessAlert = (msg, text = "") => {
  return Swal.fire({
    icon: "success",
    title: msg.replace(/\[ERR_[0-9]+\]/g, ""),
    text: text.replace(/\[ERR_[0-9]+\]/g, ""),
  });
};

export const showNetworkError = () => {
  return showErrorAlert("Vui lòng kiểm tra lại kết nối");
};

export const showConfirmAlert = (msg, icon = "warning") => {
  return Swal.fire({
    text: msg,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#005aa6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy bỏ",
  });
};
export const callbackWithAlert = (result, callback, title = "Thành công") => {
  if (!_.isEmpty(result)) {
    if (result.code === ERROR_CODES.SUCCESS) {
      Swal.fire({
        icon: "success",
        title: title,
        allowOutsideClick: false,
      }).then(callback);
    } else {
      showErrorAlert(result.msg || result.message);
    }
  } else {
    showNetworkError();
  }
};

export const showWarning = (msg) => {
  return Swal.fire({
    icon: "warning",
    title: msg.replace(/\[ERR_[0-9]+\]/g, ""),
  });
};

export const showErrorAlert = (msg = "", text = "", close = "Đóng") => {
  return Swal.fire({
    icon: "error",
    confirmButtonText: `${close}`,
    title: msg?.replace(/\[ERR_[0-9]+\]/g, ""),
    text: text?.replace(/\[ERR_[0-9]+\]/g, ""),
  });
};

export const showNotifyAlert = (icon, title, text, confirmButtonText) => {
  return Swal.fire({
    icon,
    title,
    text,
    confirmButtonText,
  });
};

export const showNotifySuccess = (position, icon, title, showConfirmButton) => {
  Swal.fire({
    position,
    icon,
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};
