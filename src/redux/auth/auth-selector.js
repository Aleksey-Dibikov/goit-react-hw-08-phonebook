const getUserName = state => state.auth.user.name;
const getIsAuth = state => state.auth.isAuth;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
    getUserName,
    getIsAuth,
    getIsFetchingCurrent
}