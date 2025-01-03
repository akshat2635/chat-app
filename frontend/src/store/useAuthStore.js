import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isSigningIn: false,
  isUpdating: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ user: res.data });
    } catch (error) {
      console.log(error);
      set({ user: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ user: res.data });
      toast.success("Account Created Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
},
logout: async () => {
    try {
        await axiosInstance.get("/auth/logout");
        set({ user: null });
        toast.success("Logged out successfully");
    } catch (error) {
        toast.error(error.response.data.message);
    }
},
login: async (data)=>{
    set({ isSigningIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ user: res.data });
      toast.success("Logged In Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningIn: false });
    }
  },
  updateProfile: async (data)=>{
    set({isUpdating:true});
    try {
      const res=await axiosInstance.put("/auth/update-profile",data);
      set({user:res.data});
      toast.success("Profile Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally{
      set({isUpdating:false});
    }
  },
}));
