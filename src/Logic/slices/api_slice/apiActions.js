import axios from "axios";
import {
  setAcceptedRequests,
  setBanedUsers,
  setPendingRequests,
  setQuestions, setRejectedRequests, setRequest, setRequests, setUsers,
} from "./api";
import { AdminBaseUrl, BaseUrl } from "../../httpMethods";
import { toast } from "react-toastify";
import { Country } from "country-state-city";
import { loginSuccess } from "../auth_slice/auth";

//User Functions
const fetchQuestions = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BaseUrl}/getQuestions`);
    if (response.status === 200) {
      console.log("fetch questions response is : ", response.data);
      dispatch(setQuestions(response.data));
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

const fetchRequests = (token, user_id = null) => async (dispatch) => {
  try {
    if (user_id) {
      const response = await axios.post(`${BaseUrl}/getUserRequest`, {
        user_id: user_id,
        token: token,
      })
      if (response.status === 200) {
        dispatch(setRequests(response.data.requests));
        console.log(response.data);
      }
    }
    else {
      const response = await axios.post(`${BaseUrl}/getUserRequest`, {
        token: token,
      })

      if (response.status === 200) {
        dispatch(setRequests(response.data.requests));
        console.log(response.data);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

const createRequest = (token, data) => async (dispatch) => {
  try {
    data.country = Country.getCountryByCode(data.country).name;
    const response = await axios.post(`${BaseUrl}/addRequest`, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      location: {
        country: data.country,
        city: data.city,
      },
      answers: data.answers,
      budget: data.budget,
      type: data.type,
      token: token,
    });
    if (response.status === 200) {
      toast.success("Your Service Request Submitted Successfully");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) { toast.error(error.message); toast.error(error.message); }
}
//Admin Functions 
const fetchAllUsers = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/allUsers`, {
      token: token,
    });
    if (response.status === 200) {
      console.log(response.data);
      dispatch(setUsers(response.data.users));
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const acceptRequest = (token, request_id) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/acceptRequest`, {
      token: token,
      request_id: request_id,
    });
    if (response.status === 200) {
      toast.success("Accepted Successfully");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const rejectRequest = (token, request_id) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/rejectRequest`, {
      token: token,
      request_id: request_id,
    });
    if (response.status === 200) {
      toast.success("Rejected Successfully");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const banUser = (id, token) => async (dispatch) => {
  try {
    const response = await axios.post(`${BaseUrl}/banUser/${id}`, {
      token: token,
    });
    if (response.status === 200) {
      toast.success("banned successfully");
    } else {
      toast.warning(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

const setAsAdmin = (id, token) => async (dispatch) => {
  try {
    console.log("I'm here");
    const response = await axios.post(`${AdminBaseUrl}/user/${id}`, {
      token: token,
      id: id,
    });
    console.log("I'm here");
    if (response.status === 200) {
      toast.success("this user now is admin");
    } else {
      toast.warning(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

const fetchBanedUsers = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/AllBanedUsers`, {
      token: token,
    });

    if (response.status === 200) {
      dispatch(setBanedUsers(response.data.users));
      console.log(response.data);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}


const fetchPendingRequests = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/PendingRequests`, {
      token: token,
    });
    if (response.status === 200) {
      dispatch(setPendingRequests(response.data));
      console.log(response.data);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const fetchRejectedRequests = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/RejectedRequests`, {
      token: token,
    });
    if (response.status === 200) {
      dispatch(setRejectedRequests(response.data));
      console.log(response.data);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const fetchAcceptedRequests = (token) => async (dispatch) => {
  try {
    const response = await axios.post(`${AdminBaseUrl}/AcceptedRequests`, {
      token: token,
    });
    if (response.status === 200) {
      dispatch(setAcceptedRequests(response.data));
      console.log(response.data);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}
const fetchRequest = (token, id) => async (dispatch) => {
  try {
    const response = await axios.post(`${BaseUrl}/request`, {
      token: token,
      id: id,
    });
    if (response.status === 200) {
      dispatch(setRequest(response.data.request));
      console.log(response.data);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}

const searchUsers = (token, query, isBaned) => async (dispatch) => {
  try {
    const response = await axios.post(`${BaseUrl}/search`, {
      token: token,
      query: query,
    });
    if (response.status === 200) {
      if (isBaned)
        dispatch(setBanedUsers(response.data.users));
      else
        dispatch(setUsers(response.data.users));
      console.log(response.data);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}

const updateInformation = (token, first_name, last_name, email, phone) => async (dispatch) => {
  try {
    const response = await axios.put(`${BaseUrl}/me/update`, {
      token: token,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    });
    if (response.status === 200) {
      dispatch(loginSuccess(response.data));
      toast.success("updated successfully");
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message)
  }
}


export {
  fetchQuestions,
  createRequest,
  fetchRequests,
  fetchAllUsers,
  acceptRequest,
  fetchRequest,
  fetchBanedUsers,
  rejectRequest,
  banUser,
  searchUsers,
  setAsAdmin,
  fetchAcceptedRequests,
  fetchPendingRequests,
  fetchRejectedRequests,
  updateInformation,
};

