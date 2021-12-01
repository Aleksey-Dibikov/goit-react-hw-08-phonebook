const getIsAuth = state => state.auth.isAuth;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
    getUserName,
    getIsAuth,
    getIsFetchingCurrent
};