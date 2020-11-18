import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

// thunk action creators

export const signupUser = user => dispatch => {
    return SessionAPIUtil.signupUser(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const loginSession = user => dispatch => {
    return SessionAPIUtil.loginSession(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const logoutSession = () => dispatch => {
    return SessionAPIUtil.logoutSession()
    .then( user => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}