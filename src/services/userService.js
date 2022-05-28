import axios from "../axios";

const userService = {
  handleLogin(loginBody) {
    return axios.post(`/api/login`, loginBody);
  },
};

export default userService;
