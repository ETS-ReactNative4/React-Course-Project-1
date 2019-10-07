import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return logout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default:
            return state;

    }
}

const setAuthRedirectPath = (state, action) => {
    return {
        ...state,
        authRedirectPath: action.path
    }
}

const authStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const authSuccess = (state,action) => {
    return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error:null,
        loading:false
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        error:action.error,
        loading: false
    }
}

const logout = (state, action) => {
    return {
        ...state,
        token: null,
        userId:null
    }
}

export default reducer;