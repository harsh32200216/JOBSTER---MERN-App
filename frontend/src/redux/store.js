import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
    jobReducerDelete,
    jobReducerUpdate,
    loadJobReducer,
    loadJobSingleReducer,
    registerAjobReducer
} from './reducers/jobReducer';
import { createJobTypeReducer, loadJobTypeReducer } from './reducers/jobTypeReducer';
import {
    allUserReducer,
    userApplyJobReducer,
    userReducerDelete,
    userReducerEdit,
    userReducerLogout,
    userReducerProfile,
    userReducerSignIn,
    userReducerSignUp
} from './reducers/userReducer';

const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    deleteUser: userReducerDelete,
    deleteJob: jobReducerDelete,
    signUp: userReducerSignUp,
    registerJob: registerAjobReducer,
    createJobType: createJobTypeReducer,
    editUser: userReducerEdit,
    updateJob: jobReducerUpdate
});

let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;