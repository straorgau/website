import { defineStore } from "pinia";

interface UserInfo {
  auth: {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    idToken: string;
  };
  user: {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
  }
}

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as UserInfo
    }
  },
})