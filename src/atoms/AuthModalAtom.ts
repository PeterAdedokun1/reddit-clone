// import { AuthModalState } from './AuthModalAtom';
import { atom } from "recoil"


export interface AuthModalState{
    open: boolean, 
    View: "login" | "signup" | "resetpassword" | "resetusername",

}
const defaultModalState: AuthModalState = {
    open: false,
    View: "login"
}

export const AuthModalState = atom<AuthModalState>({
    key: "authModalState",
    default: defaultModalState
})