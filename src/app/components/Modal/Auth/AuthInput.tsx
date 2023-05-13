import React from 'react'
import {Flex} from "@chakra-ui/react"
import { AuthModalState } from '@/atoms/AuthModalAtom'
import { useRecoilValue } from "recoil"
import Login from './Login'
import SignUp from './SignUp'
const AuthInput = () => {
    const modalState = useRecoilValue(AuthModalState)
    console.log(modalState)
    return (
      <Flex>
        {modalState.View === "login" && <Login />}
        {modalState.View === "signup" && <SignUp />}

        {/* {modalState.View === "resetpassword" && <ResetPassword />} */}
        {/* {modalState.View ==="resetusername" && <ResetUserName/>} */}
      </Flex>
    );
}

export default AuthInput