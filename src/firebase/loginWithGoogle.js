import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log("Logged in user:", user.displayName);

    window.location.href = `${window.location.origin}/home`
  } catch (error) {
    console.error("Login failed:", error.message);
  }
};
