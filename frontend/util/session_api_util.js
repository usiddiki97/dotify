export const signupUser = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
}

export const loginSession = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
}

export const logoutSession = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
}