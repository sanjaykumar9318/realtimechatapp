import {create} from "zustand"
import axiosInstance from "../lib/axios"

const useAuthStore = create((set)=>({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    checkAuth: async () => {
  try {
    const res = await axiosInstance.get("/auth/check");
    set({ authUser: res.data });
  } catch (e) {
    console.log("Error in auth", e);
  } finally {
    set({ isCheckingAuth: false });
  }
}


}))

export default useAuthStore