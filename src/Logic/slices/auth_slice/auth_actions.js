import axios from "axios";
import { loginSuccess, logout, setIsSuccess } from "./auth";
import { BaseUrl } from "../../httpMethods";
import { toast } from "react-toastify";
import { clear } from "../api_slice/api";

const user_signUp = (data, navigate) => async (dispatch) => {

  try {
    const response = await axios.post(`${BaseUrl}/signup`, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      username: data.username,
      sex: data.sex,
      birthdate: data.date,
      password: data.password,
    });

    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
      dispatch(setIsSuccess(true));
      toast.success("Welcome");
      navigate("/profile", { replace: true });
    } else {
      if (response.data.message === "Duplicate username Entered") {
        toast.error("Username is already taken. Please choose a different one.");
      } else if (response.data.message === "Duplicate email Entered") {
        toast.error("Email is already exist");
      } else {
        toast.error(response.data.message);
      }
    }
  } catch (error) {
    toast.error("An error occurred while signing up");
  }
};


const user_logout = (token) => async (dispatch) => {
  dispatch(logout());
  try {
    const response = await axios.post(`${BaseUrl}/logout`, {
      token: token,
    });
    if (response.status === 200) {
      toast.success("Logout Successfully");
      dispatch(setIsSuccess(false));
      dispatch(clear());
    }
  } catch (error) {
    toast.error(error.message)
  }
};

const user_login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${BaseUrl}/login`, {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      if (!response.data.ban) {
        dispatch(loginSuccess(response.data));
        toast.success("Welcome");
      }
    } else {
      const error = response.data.message;
      toast.error(error);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
const user_forgot_password = (email, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${BaseUrl}/password/forgot`, {
      email: email,
    });
    if (response.status === 200) {
      toast.success("The Verification Code have sent successfully ,Check your email");
      navigate('/reset_password');
    } else {
      toast.warning(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
const user_reset_password = (token, confirmPassword, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.put(`${BaseUrl}/password/reset`, {
      token: token,
      password: password,
      confirmPassword: confirmPassword
    });
    if (response.status === 200) {
      toast.success("Your password rested successfully");
      navigate('/login');
    } else {
      toast.warning(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export { user_login, user_logout, user_signUp, user_forgot_password, user_reset_password };
// {
//   "confirmPassword" : "123456789sh",
//   "password" : "123456789sh",
//   "token" : "9314364926"
// }
