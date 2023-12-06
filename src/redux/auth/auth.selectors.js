export const selectUserData=state=>state.authStore.userData;
export const selectAuthIsLoading=state=>state.authStore.isLoading;
export const selectAuthError=state=>state.authStore.error;
export const selectAauthenticated=state=>state.authStore.authenticated;
export const selectIsRefresh=state=>state.authStore.isRefresh;