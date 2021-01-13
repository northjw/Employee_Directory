import axios from "axios";

export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?page=1&results=50&seed=abc");
  }
};
