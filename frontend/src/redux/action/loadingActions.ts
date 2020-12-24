import { SET_AUTH_LOADING } from "~/constants/actionType";

export const isAuthenticating = (bool: boolean = true) => (<const>{
    type: SET_AUTH_LOADING,
    payload: bool
});

export type TLoadingActionType =
    | ReturnType<typeof isAuthenticating>;