export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload:{
      isSignIn: true,
      uid: userState.uid,
      username: userState.username
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = (userState) => {
  return {
    type: "SIGN_OUT",
    payload:{
      isSignIn: false,
      uid: "",
      username: ""
    }
  }
};