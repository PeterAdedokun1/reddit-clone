import React from 'react'
import {Flex} from "@chakra-ui/react"
import { AuthModalState } from '@/atoms/AuthModalAtom'
import { useRecoilValue } from "recoil"
import Login from './Login'
const AuthInput = () => {
    const modalState = useRecoilValue(AuthModalState)
    return (
      
        <Flex>
            {modalState.View === "login" && <Login />}
            {/* {modalState.View === "signup" && <SignUp />} */}
            {/* {modalState.View === "resetpassword" && <ResetPassword />} */}
            {/* {modalState.View ==="resetusername" && <ResetUserName/>} */}
    </Flex>
  )
}

export default AuthInput