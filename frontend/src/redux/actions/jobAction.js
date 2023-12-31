import axios from "axios";
import { toast } from "react-toastify";
import {
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SUCCESS,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    REGISTER_JOB_FAIL,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
} from "../constants/jobconstant";

export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/job/${id}`);
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

export const jobDeleteAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_DELETE_REQUEST });
    try {
        const { data } = await axios.put(`/api/admin/job/delete/${id}`);
        dispatch({
            type: JOB_DELETE_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    }
    catch (error) {
        dispatch({
            type: JOB_DELETE_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

export const jobUpdateAction = (id, job) => async (dispatch) => {
    dispatch({ type: JOB_UPDATE_REQUEST });
    try {
        const { data } = await axios.put(`/api/job/update/${id}`, job);
        dispatch({
            type: JOB_UPDATE_SUCCESS,
            payload: data
        });
        toast.success("Job updated successfully");
    }
    catch (error) {
        dispatch({
            type: JOB_UPDATE_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST })
    try {
        const { data } = await axios.post("/api/job/create", job)
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        })
        toast.success("Job created successfully");
    }
    catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);
    }
}