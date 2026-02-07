import {create} from "zustand"
import axiosInstance from "../lib/axios"
import toast from "react-hot-toast"
import useAuthStore from "./useAuthStore"
const useChatStore = create((set,get)=>({
    messages:[],
    users:[],
    selectedUser:null,
    isUserLoading: false,
    isMessageloading: false,
    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
          const res = await axiosInstance.get("/messages/users");
          set({ users: res.data });
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isUsersLoading: false });
        }
      },
    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
          const res = await axiosInstance.get(`/messages/${userId}`);
          set({ messages: res.data });
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isMessagesLoading: false });
        }
      },
    setSelectedUser: (selectedUser)=> {set({selectedUser:selectedUser})},
    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
          const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
          set({ messages: [...messages, res.data] });
          toast.success("Message sent successfully");
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    subscribeToMessages:()=>{
        const {selectedUser}=get();
        if(!selectedUser) return;
        const socket = useAuthStore.getState().socket;
        socket.on("newMessage",({newMessage})=>{
        if(newMessage.senderId!==selectedUser._id) return;
          
          console.log("New message received:", newMessage);
          set({
            messages:[...get().messages,newMessage],
          })
        })
      },
    unsubscribeFromMessages:()=>{
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
      }

}))

export default useChatStore