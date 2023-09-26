import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { theme } from "./theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserRoute from "./component/UserRoute";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Layout from "./pages/global/Layout";
import UserJobsHistory from "./pages/user/UserJobHistory";
import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import AdminRoute from './component/AdminRoute';
import SingleJob from './pages/SingleJob';
import DashUsers from "./pages/admin/DashUsers";
import DashJobs from "./pages/admin/DashJobs";
import DashCategory from "./pages/admin/DashCategory";
import DashCreateJob from "./pages/admin/DashCreateJob";
import DashUpdateJob from "./pages/admin/DashUpdateJob";
import UserInfo from "./pages/admin/UserInfo";
import DashCreateCategory from "./pages/admin/DashCategory";
import Register from "./pages/Register";
import Update from './pages/user/Update';
import Update10 from './pages/user/Update10';
import Update12 from './pages/user/Update12';
import UpdateBachelor from './pages/user/UpdateBachelor';
import UpdateOther from './pages/user/UpdateOther';
import RecruiterRoute from "./component/RecruiterRoute";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import RecJobs from "./pages/recruiter/RecJobs";
import RecUsers from "./pages/recruiter/RecUsers";

const UserDashboardHOC = Layout(UserDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const UserJobsHistoryHOC = Layout(UserJobsHistory);
const DashUsersHOC = Layout(DashUsers);
const DashJobsHOC = Layout(DashJobs);
const DashCategoryHOC = Layout(DashCategory);
const DashCreateJobHOC = Layout(DashCreateJob);
const DashUpdateJobHOC = Layout(DashUpdateJob);
const DashCreateCategoryHOC = Layout(DashCreateCategory);
const UserInfoHOC = Layout(UserInfo);
const RecruiterDashboardHOC = Layout(RecruiterDashboard);
const RecJobsHOC = Layout(RecJobs);
const RecUsersHOC = Layout(RecUsers);

const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/location/:location' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
              <Route path='/admin/jobs' element={<AdminRoute><DashJobsHOC /></AdminRoute>} />
              <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
              <Route path='/admin/job/create' element={<AdminRoute><DashCreateJobHOC /></AdminRoute>} />
              <Route path='/admin/edit/job/:id' element={<AdminRoute><DashUpdateJobHOC /></AdminRoute>} />
              <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
              <Route path='/admin/view/user/:id' element={<AdminRoute><UserInfoHOC /></AdminRoute>} />
              <Route path='/user/jobs' element={<UserRoute><UserJobsHistoryHOC /></UserRoute>} />
              <Route path='/user/info' element={<UserRoute><UserInfoDashboardHOC /></UserRoute>} />
              <Route path='/recruiter/dashboard' element={<RecruiterRoute><RecruiterDashboardHOC /></RecruiterRoute>} />
              <Route path='/recruiter/job/create' element={<RecruiterRoute><DashCreateJobHOC /></RecruiterRoute>} />
              <Route path='/recruiter/jobs' element={<RecruiterRoute><RecJobsHOC /></RecruiterRoute>} />
              <Route path='/recruiter/edit/job/:id' element={<RecruiterRoute><DashUpdateJobHOC /></RecruiterRoute>} />
              <Route path='/recruiter/view/user/:id' element={<RecruiterRoute><UserInfoHOC /></RecruiterRoute>} />
              <Route path='/recruiter/users' element={<RecruiterRoute><RecUsersHOC /></RecruiterRoute>} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/user/edit/personal' element={<Update />} />
              <Route path='/user/edit/edu10' element={<Update10 />} />
              <Route path='/user/edit/edu12' element={<Update12 />} />
              <Route path='/user/edit/eduBachelor' element={<UpdateBachelor />} />
              <Route path='/user/edit/other' element={<UpdateOther />} />
              <Route path='/register' element={<Register />} />
              <Route path='/job/:id' element={<SingleJob />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;