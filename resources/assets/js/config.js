
export const getHeader = function () {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        'Accetp': 'application/json',
        'Authorization':'Bearer '+ tokenData.access_token
    }
    return headers
}