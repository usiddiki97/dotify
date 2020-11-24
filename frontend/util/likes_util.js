export const fetchLikes = () => {
    return $.ajax({
        method: 'GET',
        url: `api/likes`
    })
}

export const toggleLike = songId => {
    return $.ajax({
        method: 'POST',
        url: `api/songs/${songId}/toggle_like`
    })
}