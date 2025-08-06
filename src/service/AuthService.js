import { USER_PAYLOAD } from "../contexts/Auth";
import ApiService from "./ApiService";

class AuthService {
  login(data) {
    return ApiService.post("/auth/login", data)
  }
  logout() {
    localStorage.removeItem(USER_PAYLOAD);
    window.location.href = "/";
  }
}

export default new AuthService();