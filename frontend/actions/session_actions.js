import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


// thunk action creators

export const signupUser = user => dispatch => {
    // debugger
    return SessionUtil.signupUser(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const loginSession = user => dispatch => {
    return SessionUtil.loginSession(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const loginDemo = () => dispatch => {
    return SessionUtil.loginSession({ username: 'Demo', password: 't42gf4g24v7875g784'})
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const logoutSession = () => dispatch => {
    return SessionUtil.logoutSession()
    .then( user => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}
