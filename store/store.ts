import {create} from "zustand";

interface UserStore {
  name: string;
  setName: (username: string) => void
}


const useUserStore = create<UserStore>((set) => ({
  name:"",
  setName: (username) => set(() => ({name: username}))
}))

export default useUserStore