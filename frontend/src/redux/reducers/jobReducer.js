import {
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_RESET,
    JOB_LOAD_SUCCESS,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_RESET,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_DELETE_RESET,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_RESET,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_UPDATE_RESET,
} from "../constants/jobconstant";

export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true }
        case JOB_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

export const loadJobSingleReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case JOB_LOAD_SINGLE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job,
            }
        case JOB_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }
}

export const jobReducerDelete = (state = {}, action) => {
    switch (action.type) {
        case JOB_DELETE_REQUEST:
            return { loading: true }
        case JOB_DELETE_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case JOB_DELETE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_DELETE_RESET:
            return {}
        default:
            return state;
    }
}

export const registerAjobReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_JOB_REQUEST:
            return { loading: true }
        case REGISTER_JOB_SUCCESS:
            return {
                loading: false,
                job: action.payload,
            }
        case REGISTER_JOB_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_JOB_RESET:
            return {}
        default:
            return state;
    }
}

export const jobReducerUpdate = (state = {}, action) => {
    switch (action.type) {
        case JOB_UPDATE_REQUEST:
            return { loading: true }
        case JOB_UPDATE_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case JOB_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_UPDATE_RESET:
            return {}
        default:
            return state;
    }
}