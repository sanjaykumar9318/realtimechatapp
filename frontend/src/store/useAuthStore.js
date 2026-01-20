import {create} from "zustand"
import axiosInstance from "../lib/axios"

const useAuthStore = create((set)=>({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    checkAuth: async ()=>{
        try{
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        }

    }

}))

export default useAuthStore