import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../src/Layouts/RootLayout";
import Homepage from "../src/Pages/HomePage";
import Login from "../src/Pages/Login";
import Signup from "../src/Pages/SignUp";
import Services from "../src/Pages/Services";
import WebDesignForm from "../src/Pages/Forms/WebDesignForm";
import LogoDesignForm from "../src/Pages/Forms/LogoDesignForm";
import VideoEditingForm from "../src/Pages/Forms/VideoEditingForm";
import BuildingDesignForm from "../src/Pages/Forms/BuildingDesignForm";
import PrivateRoutes from "../src/Layouts/PrivateRoute";
import Profile from "../src/Pages/Profile/Profile";
import RequestReport from "../src/Pages/Report/RequestReport";
import AdminLayout from "../src/Layouts/AdminLayout";
import AllBanedUsers from "../src/Pages/Admin/AllBanedUsers";
import UserInformation from "../src/Pages/Admin/ViewUser";
import PendingRequests from "../src/Pages/Admin/PendingRequests";
import AcceptedRequests from "../src/Pages/Admin/AcceptedRequests";
import RejectedRequests from "../src/Pages/Admin/RejectedRequests";
import AllUsers from "../src/Pages/Admin/AllUsers";
import RequestInformation from "./Pages/Admin/ViewRequest";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="singUp" element={<Signup />} />
      <Route path="forgot_password" element={<ForgotPassword />} />
      <Route path="reset_password" element={<ResetPassword/>}/>
      <Route path="services">
        <Route index element={<Services />} />
        <Route path="web" element={<WebDesignForm />} />
        <Route path="logo" element={<LogoDesignForm />} />
        <Route path="video" element={<VideoEditingForm />} />
        <Route path="building" element={<BuildingDesignForm />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="request/:id" element={<RequestReport />} />
        </Route>
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AllUsers />} />
        <Route path="banedUsers" element={<AllBanedUsers />} />
        <Route path="banedUsers/:id" element={<UserInformation isFromBaned={true} />} />
        <Route path="users/:id" element={<UserInformation isFromBaned={false} />} />
        <Route path="pending" element={<PendingRequests />} />
        <Route path="accepted" element={<AcceptedRequests />} />
        <Route path="rejected" element={<RejectedRequests />} />
        <Route path="requests/:id" element={<RequestInformation />} />
      </Route>
    </Route>
  )
);

