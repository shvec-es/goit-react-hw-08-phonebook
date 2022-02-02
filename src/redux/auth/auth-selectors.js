export const getLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;
export const getFetchingCurrent = state => state.auth.isFetchingCurrent;
